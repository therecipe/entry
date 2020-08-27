// +build js

package main

import (
	"archive/zip"
	"bytes"
	"compress/flate"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"path/filepath"
	"runtime"
	"strings"
	"time"

	"github.com/therecipe/qt"
	"github.com/therecipe/qt/core"
	"github.com/therecipe/qt/widgets"
)

var zipCache = make(map[string][]byte)

func copyWithProgress(w io.Writer, r io.Reader, callback func(off int64)) error {
	tee := io.TeeReader(r, w)
	buf := make([]byte, bytes.MinRead*10)
	off := int64(0)
	for count := 0; ; count++ {
		n, err := tee.Read(buf)
		off += int64(n)
		if count%100 == 0 {
			callback(off)
		}

		if err == io.EOF {
			break
		}
		if err != nil {
			return err
		}
	}
	callback(off)
	return nil
}

func qtsched() {
	core.QCoreApplication_ProcessEvents(core.QEventLoop__AllEvents)
	runtime.Gosched()
	time.Sleep(1 * time.Millisecond)
}

func patchZip(t string, pay []byte, b *widgets.QPushButton) {
	b.SetDisabled(true)
	defer func() {
		b.SetEnabled(true)
		b.SetStyleSheet("")
	}()

	if _, ok := zipCache[t]; !ok {
		b.SetText("(1/3) Downloading " + t + ".zip")
		qtsched()

		resp, err := http.Get(t + ".zip")
		if err != nil {
			b.SetText(fmt.Sprint("Failed to download zip: " + err.Error()))
			return
		}

		buf := new(bytes.Buffer)
		copyWithProgress(buf, resp.Body, func(off int64) {
			b.SetText(fmt.Sprintf("(1/3) Downloading %v%%", off/(resp.ContentLength/100)))
			qtsched()
		})
		resp.Body.Close()
		zipCache[t] = buf.Bytes()
	}

	b.SetText("(2/3) Preparing " + t + ".zip")
	qtsched()

	wb := new(bytes.Buffer)
	r, _ := zip.NewReader(bytes.NewReader(zipCache[t]), int64(len(zipCache[t])))
	w := zip.NewWriter(wb)
	w.RegisterCompressor(zip.Deflate, func(out io.Writer) (io.WriteCloser, error) { return flate.NewWriter(out, flate.NoCompression) })
	for i, f := range r.File {
		fr, _ := f.Open()
		fw, _ := w.CreateHeader(&f.FileHeader)

		if strings.HasPrefix(filepath.Base(f.Name), "entry") ||
			filepath.Base(f.Name) == "go.wasm" || filepath.Base(f.Name) == "go.js" {

			data, _ := ioutil.ReadAll(fr)

			m := "MAIN"
			if false { //TODO: support bootloader patching ?
				m = "BOOT"
			}

			start := bytes.Index(data, []byte("_STARTOF"+m+"_"))
			if start != -1 {
				off := start

				lendiff := (maxPayloadLen - (startIndex + endIndex)) - len(pay)
				if lendiff < 0 {
					println("FAILED")
					return
				}

				b.SetText("(2/3) Patching binary for " + t)
				qtsched()

				copy(data[off+startIndex:off+startIndex+len(pay)+lendiff], append(pay, bytes.Repeat([]byte{0}, lendiff)...))

				b.SetText("(2/3) Packing binary for " + t)
				qtsched()

				copyWithProgress(fw, bytes.NewReader(data), func(off int64) {
					b.SetText(fmt.Sprintf("(3/3) Packing %v/%v %v%%", i, len(r.File), off/(int64(len(data))/100)))
					qtsched()
				})
			}

		} else {
			b.SetText(fmt.Sprintf("(3/3) Packing %v/%v", i, len(r.File)))
			percent := (float64(i) / (float64(len(r.File)) / float64(100)) / float64(100))
			b.SetStyleSheet(fmt.Sprintf("background-color: qlineargradient(x1:0, y1:0, x2:1, y2:0, stop: 0 #1bb77b, stop: %v #1bb77b, stop: %v rgba(0, 0, 0, 0), stop: 1 white)", percent, percent+0.001))
			qtsched()
			io.Copy(fw, fr)
		}
		fr.Close()
	}
	w.Close()

	b.SetText("(3/3) Preparing download of " + t + ".zip")
	qtsched()

	//ta := qt.TypedArrayOf(wb.Bytes()) //TODO: wasm support
	qt.Global.Call("saveAs", qt.Global.Get("Blob").New([]interface{}{wb.Bytes()}, map[string]interface{}{"type": "application/octet-stream"}), t+".zip")
	//ta.Release() //TODO: wasm support

	switch t {
	case "windows":
		t = "Windows"
	case "linux":
		t = "Linux"
	case "darwin":
		t = "macOS"
	case "windowsxp":
		t = "WindowsXP"
	case "wasm":
		t = "WASM"
	}
	b.SetText("Deploy for " + t)
}
