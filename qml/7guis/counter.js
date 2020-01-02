#!/usr/bin/env ../../entry
//@ts-check
//port of: https://eugenkiss.github.io/7guis/tasks/#counter

/// <reference path="../../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var count = 0

	var window = widgets.NewQWidget(nil, 0),
		layout = widgets.NewQHBoxLayout2(window)

	window.SetWindowTitle("Counter")

	var edit = widgets.NewQLineEdit2(JSON.stringify(count), nil),
		button = widgets.NewQPushButton2("Count", nil)

	edit.SetReadOnly(true)

	layout.AddWidget(edit, 0, 0)
	layout.AddWidget(button, 0, 0)

	button.ConnectClicked(function(bool) {
		edit.SetText(JSON.stringify(++count))
	})

	return window.Pointer()
})()