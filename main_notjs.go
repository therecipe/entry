// +build !js wasm

package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"reflect"
	"strings"

	"github.com/therecipe/qt"
	"github.com/therecipe/qt/core"
	"github.com/therecipe/qt/gui"
	"github.com/therecipe/qt/qml"
	"github.com/therecipe/qt/widgets"
)

var (
	bootFSW    *core.QFileSystemWatcher
	payloadFSW *core.QFileSystemWatcher
	subEngine  *qml.QJSEngine

	infoWidget *widgets.QTableWidget

	restartChan = make(chan bool)
)

func restart() { go func() { restartChan <- true }() }

func watchBootFunc(p string) {
	if bootFSW != nil {
		bootFSW.DestroyQFileSystemWatcher()
	}
	bootFSW = core.NewQFileSystemWatcher(nil)
	bootFSW.ConnectFileChanged(func(fp string) {
		out, _ := ioutil.ReadFile(fp)
		softBootPayload = string(out)
		restart()
	})
	fp := filepath.Join(filepath.Dir(os.Args[0]), "boot.js")
	if p != "" {
		fp = p
	}
	bootFSW.AddPath(fp)
}

func updateEngineReference(e *qml.QJSEngine) { subEngine = e }

func watchPayloadFunc(p string) {
	if payloadFSW != nil {
		payloadFSW.DestroyQFileSystemWatcher()
	}
	payloadFSW = core.NewQFileSystemWatcher(nil)
	payloadFSW.ConnectFileChanged(func(fp string) {
		out, _ := ioutil.ReadFile(fp)
		softMainPayload = string(out)
		if strings.HasPrefix(softMainPayload, "#") {
			softMainPayload = "//" + softMainPayload
		}

		if f := subEngine.GlobalObject().Property("softRestart"); f.IsCallable() {
			f.Call([]*qml.QJSValue{subEngine.NewGoType(softMainPayload)})
		} else {
			println("softRestart function is not callable")
		}
	})

	end := "js"
	if _, err := os.Stat(filepath.Join(filepath.Dir(os.Args[0]), "payload."+end)); err != nil {
		end = "qml"
	}
	fp := filepath.Join(filepath.Dir(os.Args[0]), "payload."+end)
	if p != "" {
		fp = p
	}
	payloadFSW.AddPath(fp)

	out, err := ioutil.ReadFile(fp)
	if err != nil {
		println("failed to load the main payload " + err.Error())
	} else {
		softMainPayload = string(out)
		if strings.HasPrefix(softMainPayload, "#") {
			softMainPayload = "//" + softMainPayload
		}

		if f := subEngine.GlobalObject().Property("softRestart"); f.IsCallable() {
			f.Call([]*qml.QJSValue{subEngine.NewGoType(softMainPayload)})
		}
	}
}

func findImpl(rv reflect.Value, name string) string {
	for i := 0; i < rv.Type().Elem().NumField(); i++ {
		if _, ok := reflect.New(rv.Type().Elem().Field(i).Type).Type().MethodByName(name); ok {
			return findImpl(reflect.New(rv.Type().Elem().Field(i).Type), name)
		}
	}
	return rv.Type().Elem().Name()
}

func inspect(jsv *qml.QJSValue) {
	className := jsv.Property("___className").ToString()
	if className == "" {
		//TODO: support for qml types
		return
	}
	c := reflect.New(reflect.TypeOf(qt.ItfMap[className+"_ITF"]))

	infoWidget.Clear()
	if infoWidget == nil {
		infoWidget = widgets.NewQTableWidget2(c.NumMethod(), 3, nil)
		infoWidget.SetEditTriggers(widgets.QAbstractItemView__NoEditTriggers)
		infoWidget.SetSelectionBehavior(widgets.QAbstractItemView__SelectRows)
	}
	infoWidget.SetWindowTitle(className)
	infoWidget.SetHorizontalHeaderItem(0, widgets.NewQTableWidgetItem2("Name", 0))
	infoWidget.SetHorizontalHeaderItem(1, widgets.NewQTableWidgetItem2("Signature", 0))
	infoWidget.SetHorizontalHeaderItem(2, widgets.NewQTableWidgetItem2("Inherited from", 0))

	for i := 0; i < c.NumMethod(); i++ {
		infoWidget.SetItem(i, 0, widgets.NewQTableWidgetItem2(c.Type().Method(i).Name, 0))
		sig := c.Method(i).String()
		sig = strings.Replace(sig, "func(", "function(", -1)
		sig = strings.TrimPrefix(sig, "<")
		sig = strings.TrimSuffix(sig, " Value>")
		infoWidget.SetItem(i, 1, widgets.NewQTableWidgetItem2(sig, 0))
		infoWidget.SetItem(i, 2, widgets.NewQTableWidgetItem2(findImpl(c, c.Type().Method(i).Name), 0))
	}

	infoWidget.ResizeColumnsToContents()
	infoWidget.Resize2(int(float64(infoWidget.ColumnWidth(0)+infoWidget.ColumnWidth(1)+infoWidget.ColumnWidth(2))*1.05), infoWidget.Height())

	infoWidget.DisconnectCellDoubleClicked()
	infoWidget.ConnectCellDoubleClicked(func(row, column int) {
		name := c.Type().Method(row).Name
		class := findImpl(c, name)

		for i := 0; i < 10; i++ {
			if a := fmt.Sprint(i); strings.HasSuffix(name, a) {
				name = strings.TrimSuffix(name, a) + "-" + fmt.Sprint(i-1)
				break
			}
		}

		if !(strings.HasPrefix(name, "Connect-") || name == "Connect") {
			name = strings.TrimPrefix(name, "Connect")
		}
		if !(strings.HasPrefix(name, "Disconnect-") || name == "Disconnect") {
			name = strings.TrimPrefix(name, "Disconnect")
		}
		name = strings.TrimSuffix(name, "Default")

		if strings.HasPrefix(name, "DestroyQ") {
			name = strings.Replace(name, "Destroy", "dtor.", -1)
			gui.QDesktopServices_OpenUrl(core.NewQUrl3("https://doc.qt.io/qt-5/"+strings.ToLower(class)+".html#"+name, 0))
			return
		}

		if strings.HasPrefix(name, "Set") {
			for i := 0; i < c.NumMethod(); i++ {
				if c.Type().Method(i).Name == strings.TrimPrefix(name, "Set") {
					name = strings.TrimPrefix(name, "Set")
					name += "-prop"
					break
				}
			}
		} else {
			for i := 0; i < c.NumMethod(); i++ {
				if c.Type().Method(i).Name == "Set"+name {
					name += "-prop"
					break
				}
			}
		}

		name = strings.ToLower(name[:1]) + name[1:]

		gui.QDesktopServices_OpenUrl(core.NewQUrl3("https://doc.qt.io/qt-5/"+strings.ToLower(class)+".html#"+name, 0))
	})

	infoWidget.Show()
}

//

func hasFlag(f string) bool { return strings.Contains(strings.Join(os.Args, "|"), "-"+f) }

func flagAsBool(f string) bool {
	if !hasFlag(f) {
		return false
	}

	for i, a := range os.Args {
		if strings.HasSuffix(a, "-"+f) && !strings.Contains(a, "=") && (i == len(os.Args)-1 || (strings.HasPrefix(os.Args[i+1], "-") &&
			(strings.Contains(os.Args[i+1], "-boot") || strings.Contains(os.Args[i+1], "-payload") || strings.HasSuffix(os.Args[i+1], "-edit")))) {
			return true
		}
	}

	return false
}

func flagAsBoolOrString(name, desc string) *string {
	if flagAsBool(name) {
		flag.Bool(name, false, desc)
		var t string
		return &t
	}
	return flag.String(name, "", desc)
}
