package main

import (
	"runtime"
	"time"

	"github.com/therecipe/qt/core"
	"github.com/therecipe/qt/widgets"
)

var (
	app *widgets.QApplication

	isInsideBrowser   = (runtime.GOARCH == "js" || runtime.GOARCH == "wasm")
	isBrowserJSEngine = runtime.GOARCH == "js"

	mainThreadHelperInstance *mainThreadHelper

	isDev       bool
	wasDev      bool
	skipBoot    bool
	parsedFlags bool

	lastWindowGeo []int

	isTesting        bool
	isTestingVisible bool
)

//TODO: support arguments
func runSync(f func())            { f() }
func runAsync(f func(), r func()) { go func() { f(); mainThreadHelperInstance.RunOnMain(r) }() }

func sleep(msec int) {
	time.Sleep(time.Duration(msec) * time.Millisecond)
}

func setInterval(f func(), msec int, p *core.QObject) {
	t := core.NewQTimer(p)
	t.ConnectTimeout(f)
	t.Start(msec)
}

//

type mainThreadHelper struct {
	core.QObject

	_ func(f func()) `slot:"runOnMain,auto"`
}

func (*mainThreadHelper) runOnMain(f func()) { f() }
