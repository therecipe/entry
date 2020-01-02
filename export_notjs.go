// +build !js

package main

import (
	_ "github.com/therecipe/qt/multimedia"
	_ "github.com/therecipe/qt/quick"
	_ "github.com/therecipe/qt/quickcontrols2"

	"github.com/therecipe/qt/widgets"
)

func patchZip(string, []byte, *widgets.QPushButton) {}
