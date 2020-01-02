package main

import (
	"archive/zip"
	"bytes"
	"compress/gzip"
	"encoding/base64"
	"fmt"
	"io"
	"io/ioutil"
	"os"
	"path/filepath"
	"runtime"
	"strconv"
	"strings"
	"unsafe"

	"github.com/therecipe/qt/core"
	"github.com/therecipe/qt/gui"
	"github.com/therecipe/qt/widgets"
)

var (
	softBootPayloadBackup string
	softBootPayload       string
	softMainPayload       string
	bootPayload           = `_STARTOFBOOT_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        _ENDOFBOOT_`
	mainPayload           = `_STARTOFMAIN_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        _ENDOFMAIN_`
	zipLen                = `_PLACEH_`
)

const (
	maxPayloadLen = 1024 * 10
	startIndex    = 13
	endIndex      = 11
)

func init() {
	if i := bytes.Index([]byte(bootPayload), []byte{0}); i != -1 {
		bootPayload = bootPayload[startIndex:i]
	}
	if i := bytes.Index([]byte(mainPayload), []byte{0}); i != -1 {
		mainPayload = mainPayload[startIndex:i]
	}
}

func packPayload(i string) []byte {
	bb := new(bytes.Buffer)
	defer bb.Reset()
	w := gzip.NewWriter(bb)
	w.Write([]byte(i))
	w.Close()
	return []byte(base64.StdEncoding.EncodeToString(bb.Bytes()))
}

func unpackPayload(i string) ([]byte, error) {
	o, err := base64.StdEncoding.DecodeString(i)
	if err != nil {
		return nil, err
	}
	r, err := gzip.NewReader(bytes.NewReader(o))
	if err != nil {
		return nil, err
	}
	o, err = ioutil.ReadAll(r)
	if err != nil {
		return nil, err
	}
	r.Close()
	return o, nil
}

func patchSelf(data string, hard bool, boot bool) {
	if boot {
		if softBootPayload != "" {
			softBootPayloadBackup = softBootPayload
		} else if len(bootPayload) != maxPayloadLen {
			softBootPayloadBackup = bootPayload
		}
		softBootPayload = data
	} else {
		softMainPayload = data
	}

	if !hard || isInsideBrowser {
		return
	}

	var b int64
	if boot {
		b = -1
	}
	deploy(runtime.GOOS, data, b, true)
}

func deploy(t string, data string, b int64, self bool) { //TODO: support []byte in NewGoType
	payload := packPayload(data)

	if isInsideBrowser {
		go patchZip(t, payload, widgets.NewQPushButtonFromPointer(unsafe.Pointer(uintptr(b))))
		return
	}

	var dir string
	if runtime.GOOS == t {
		dir = trimAndPatch(t, payload, self, b == -1)
	} else {
		dir = extractAndPatch(t, payload)
	}

	if parsedFlags { //QApplication is running
		gui.QDesktopServices_OpenUrl(core.QUrl_FromLocalFile(dir))
	}
}

func trimAndPatch(t string, data []byte, self bool, boot bool) string {
	dstDir := filepath.Dir(os.Args[0])
	if strings.Contains(dstDir, ".app/") {
		dstDir = filepath.Dir(strings.Split(dstDir, ".app/")[0])
	}

	fi, _ := os.Stat(os.Args[0])
	fr, err := os.OpenFile(os.Args[0], os.O_RDONLY, fi.Mode().Perm())
	if err != nil {
		println("couldn't read: ", err.Error())
		return ""
	}

	var dst string
	var ending string
	if t == "windows" {
		ending = ".exe"
	}
	if self {
		dst = filepath.Join(filepath.Dir(os.Args[0]), strings.TrimSuffix(filepath.Base(os.Args[0]), ending)+"_patched"+ending)
	} else {
		dst = filepath.Join(dstDir, "dist", t+ending)
		if t == "darwin" {
			dst = filepath.Join(dstDir, "dist", "darwin.app", "Contents", "MacOS", t)
		}
		os.MkdirAll(filepath.Dir(dst), 0755)
		if t == "darwin" {
			ioutil.WriteFile(filepath.Join(dstDir, "dist", "darwin.app", "Contents", "Info.plist"), darwin_plist(t), 0644)
			ioutil.WriteFile(filepath.Join(dstDir, "dist", "darwin.app", "Contents", "PkgInfo"), darwin_pkginfo(), 0644)
		}
	}
	os.RemoveAll(dst)

	fw, _ := os.OpenFile(dst, os.O_RDWR|os.O_CREATE, fi.Mode().Perm())
	if zl, _ := strconv.Atoi(zipLen); fi.Size() > int64(zl) {
		io.CopyN(fw, fr, fi.Size()-int64(zl))
	} else {
		io.Copy(fw, fr)
	}
	fw.Close()
	fr.Close()

	patch(dst, data, boot)

	if self {
		return filepath.Dir(os.Args[0])
	}
	return filepath.Join(dstDir, "dist")
}

func extractAndPatch(t string, data []byte) string {
	dstDir := filepath.Dir(os.Args[0])
	if strings.Contains(dstDir, ".app/") {
		dstDir = filepath.Dir(strings.Split(dstDir, ".app/")[0])
	}

	var dst string
	fi, _ := os.Stat(os.Args[0])
	zr, err := zip.OpenReader(os.Args[0])
	if err != nil {
		println("couldn't read: ", err.Error())
		return ""
	}

	for _, f := range zr.File {
		if f.Name != t { //TODO: use zip in zip wasm style patching instead ?
			continue
		}

		fr, err := f.Open()
		if err != nil {
			println("couldn't open zip file: ", err.Error())
			break
		}

		var ending string
		if t == "windows" {
			ending = ".exe"
		}
		dst = filepath.Join(dstDir, "dist", t+ending)
		if t == "darwin" {
			dst = filepath.Join(dstDir, "dist", "darwin.app", "Contents", "MacOS", t)
		}
		os.MkdirAll(filepath.Dir(dst), 0755)
		os.RemoveAll(dst)
		if t == "darwin" {
			ioutil.WriteFile(filepath.Join(dstDir, "dist", "darwin.app", "Contents", "Info.plist"), darwin_plist(t), 0644)
			ioutil.WriteFile(filepath.Join(dstDir, "dist", "darwin.app", "Contents", "PkgInfo"), darwin_pkginfo(), 0644)
		}

		fw, _ := os.OpenFile(dst, os.O_RDWR|os.O_CREATE, fi.Mode().Perm())
		io.Copy(fw, fr)
		fw.Close()
		fr.Close()

		patch(dst, data, false)
	}

	zr.Close()

	return filepath.Join(dstDir, "dist")
}

func patch(t string, pay []byte, boot bool) {

	fi, _ := os.Stat(t)

	f, err := os.OpenFile(t, os.O_RDWR, fi.Mode().Perm())
	if err != nil {
		println("couldn't read: ", err.Error())
		return
	}

	m := "MAIN"
	if boot {
		m = "BOOT"
	}

	buf := make([]byte, 5*1024)

	var off int64
	for {
		n, err := f.Read(buf)
		if n > 0 {
			start := bytes.Index(buf, []byte("_STARTOF"+m+"_"))
			if start != -1 {
				off += int64(start)

				lendiff := (maxPayloadLen - (startIndex + endIndex)) - len(pay)
				if lendiff < 0 {
					widgets.QMessageBox_Critical(nil, "OK", "Sorry, the payload is to big to be patched", widgets.QMessageBox__Ok, 0)
					break
				}
				_, err = f.WriteAt(append(pay, bytes.Repeat([]byte{0}, lendiff)...), off+startIndex)
				if err != nil {
					widgets.QMessageBox_Critical(nil, "OK", "Failed to patch the file: "+err.Error(), widgets.QMessageBox__Ok, 0)
				}
				break
			} else {
				off += int64(n)
			}
		}

		if err == io.EOF {
			widgets.QMessageBox_Critical(nil, "OK", "Failed to find the start of the "+m+" payload", widgets.QMessageBox__Ok, 0)
			break
		}
		if err != nil {
			widgets.QMessageBox_Critical(nil, "OK", "Failed to read the file: "+err.Error(), widgets.QMessageBox__Ok, 0)
			break
		}
	}

	f.Close()
}

func darwin_plist(name string) []byte {
	return []byte(fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleExecutable</key>
	<string>%[1]v</string>
	<key>CFBundleGetInfoString</key>
	<string>Created by Qt/QMake</string>
	<key>CFBundleIconFile</key>
	<string>%[1]v.icns</string>
	<key>CFBundleIdentifier</key>
	<string>com.yourcompany.%[1]v</string>
	<key>CFBundleName</key>
	<string>%[1]v</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0.0</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>LSMinimumSystemVersion</key>
	<string>10.11</string>
	<key>NOTE</key>
	<string>This file was generated by Qt/QMake.</string>
	<key>NSPrincipalClass</key>
	<string>NSApplication</string>
	<key>NSHighResolutionCapable</key>
	<true/>
	<key>NSSupportsAutomaticGraphicsSwitching</key>
	<true/>
</dict>
</plist>
`, name))
}

func darwin_pkginfo() []byte {
	return []byte("APPL????\n")
}
