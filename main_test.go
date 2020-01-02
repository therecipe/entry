package main

import (
	"os"
	"testing"

	"github.com/therecipe/qt/qml"
	"github.com/therecipe/qt/widgets"
)

func init() {
	isTesting = true
	isTestingVisible = false
}

func TestMain(m *testing.M) {
	app = widgets.NewQApplication(len(os.Args), os.Args)
	go func() { app.Exit(m.Run()) }()
	app.Exec()
}

func TestMainFunc(t *testing.T) {
	tRunner.Run(func() {
		main()
	})
}

func BenchmarkEngine(b *testing.B) {
	tRunner.Run(func() {
		for n := 0; n < b.N; n++ {
			qml.NewQJSEngine().DestroyQJSEngine()
		}
	})
}
