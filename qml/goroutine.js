#!/usr/bin/env ../entry
//@ts-check
//port of: https://github.com/therecipe/examples/blob/master/advanced/widgets/goroutine/main.go

/// <reference path="main.d.ts" />
/// <reference path="../tsd_full/core.d.ts" />		import github.com/therecipe/qt/core
/// <reference path="../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var window = widgets.NewQMainWindow(nil, 0)
	window.SetWindowTitle("goroutine Example")

	var widget = widgets.NewQWidget(nil, 0)
	widget.SetLayout(widgets.NewQVBoxLayout())
	window.SetCentralWidget(widget)

	var labels = []
	for (var i = 0; i < 3; i++) {
		var label = widgets.NewQLabel(nil, 0)
		label.SetAlignment(core.Qt__AlignCenter)
		widget.Layout().AddWidget(label)
		labels[i] = label
	}

	var button = widgets.NewQPushButton2("start!", nil)
	button.ConnectClicked(function(bool) {
		button.SetDisabled(true)
		for (var i = 0; i < 3; i++) {
			(function(i) {
				var tick = 0
				qt.setInterval(function() {
					labels[i].SetText(tick++ + " " + Date.now().toString())
				}, (i + 1) * 25, window)
			}(i))
		}
	})
	widget.Layout().AddWidget(button)

	return window.Pointer()
})()