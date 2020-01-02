#!/usr/bin/env ../../entry
//@ts-check
//port of: https://eugenkiss.github.io/7guis/tasks/#temp

/// <reference path="../../tsd_full/gui.d.ts" />		import github.com/therecipe/qt/gui
/// <reference path="../../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var window = widgets.NewQWidget(nil, 0),
		layout = widgets.NewQHBoxLayout2(window)

	window.SetWindowTitle("TempConv")

	var editC = widgets.NewQLineEdit2("", nil),
		editF = widgets.NewQLineEdit2("", nil)

	layout.AddWidget(editC, 0, 0)
	layout.AddWidget(widgets.NewQLabel2("Celsius =", nil, 0), 0, 0)
	layout.AddWidget(editF, 0, 0)
	layout.AddWidget(widgets.NewQLabel2("Fahrenheit", nil, 0), 0, 0)

	editC.SetValidator(gui.NewQIntValidator(nil))
	editC.ConnectTextEdited(function(text) {
		editF.SetText(text != "" ? JSON.stringify(text * (9 / 5) + 32) : "")
	})

	editF.SetValidator(gui.NewQIntValidator(nil))
	editF.ConnectTextEdited(function(text) {
		editC.SetText(text != "" ? JSON.stringify((text - 32) * (5 / 9)) : "")
	})

	return window.Pointer()
})()