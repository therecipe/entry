// +build js,!wasm

package main

import (
	"os"
	"runtime"
	"strings"
	"unsafe"

	"github.com/gopherjs/gopherjs/js"

	"github.com/therecipe/qt"
	"github.com/therecipe/qt/core"
	"github.com/therecipe/qt/widgets"
)

func main() {
	isDev = len(mainPayload) == maxPayloadLen

	app := widgets.NewQApplication(len(os.Args), os.Args)
	mainThreadHelperInstance = NewMainThreadHelper(app)

	switch runtime.GOARCH {
	case "js", "wasm":
		if isDev {
			hash := strings.TrimPrefix(qt.Global.Call("eval", "window.location.hash").String(), "#")
			o, err := unpackPayload(hash)
			if hash != "" && err != nil {
				println("failed to unpack payload", err.Error())
			} else {
				softMainPayload = string(o)
			}
		}
		if softMainPayload != "" {
			isDev = false
		}
		isDev = qt.Global.Call("eval", "window.location.search.search('edit=true')").Int() != -1 || isDev
	}

	var err error
	if !isDev && softMainPayload == "" {
		var o []byte
		o, err = unpackPayload(mainPayload)
		softMainPayload = string(o)
	}

	var defaultPayload string
	if isDev || err != nil {
		if file := core.NewQFile2(":/qml/main.js"); file.Open(core.QIODevice__ReadOnly) {
			defaultPayload = file.ReadAll().ConstData()
			file.Close()
			file.DestroyQFile()
		}
	}

	if strings.HasPrefix(softMainPayload, "#") {
		softMainPayload = "//" + softMainPayload
	}

	js.Global.Set("nil", js.Undefined)
	js.Global.Set("isMain", !isInsideBrowser)
	js.Global.Set("bootPayload", "")
	js.Global.Set("bootPayloadDirty", "")
	js.Global.Set("mainPayload", softMainPayload)
	js.Global.Set("isDev", isDev)
	js.Global.Set("isInsideBrowser", isInsideBrowser)
	js.Global.Set("isBrowserJSEngine", isBrowserJSEngine)
	js.Global.Set("isWinXP", isWinXP)
	js.Global.Set("isDeployed", len(mainPayload) != maxPayloadLen || softMainPayload != "")
	js.Global.Set("recursionCounter", 0)
	js.Global.Set("isTesting", false)
	js.Global.Set("isTestingVisible", true)

	js.Global.Set("qt", new(js.Object))
	js.Global.Get("qt").Set("runSync", runSync)
	js.Global.Get("qt").Set("runAsync", runAsync)
	js.Global.Get("qt").Set("setInterval", func(f func(), msec int) { js.Global.Call("setInterval", f, msec) })
	js.Global.Get("qt").Set("sleep", sleep)

	js.Global.Set("main", new(js.Object))
	js.Global.Get("main").Set("NewGolangHighlighter2", js.Global.Get("moc").Get("NewGolangHighlighter2"))
	js.Global.Get("main").Set("deploy", deploy)

	js.Global.Get("main").Set("updateBrowserHash", func(i string) { js.Global.Get("window").Get("location").Set("hash", string(packPayload(i))) })
	js.Global.Get("main").Set("SetStandardIcon", func(p int64, sp int64) {
		widgets.NewQPushButtonFromPointer(unsafe.Pointer(uintptr(p))).SetIcon(app.Style().StandardIcon(widgets.QStyle__StandardPixmap(sp), nil, nil))
	})

	if softMainPayload != "" && !isDev {
		widgets.NewQWidgetFromPointer(unsafe.Pointer(qt.Global.Call("eval", softMainPayload).Unsafe())).Show()
	} else {
		qt.Global.Call("eval", defaultPayload)
	}

	widgets.QApplication_Exec()
}
