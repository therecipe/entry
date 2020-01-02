#!/usr/bin/env ../../entry
//@ts-check
//port of: https://eugenkiss.github.io/7guis/tasks/#timer

/// <reference path="../../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var window = widgets.NewQWidget(nil, 0),
		layout = widgets.NewQGridLayout(window)

	window.SetWindowTitle("Timer")

	var progressBar = widgets.NewQProgressBar(nil),
		label = widgets.NewQLabel(nil, 0),
		slider = widgets.NewQSlider2(core.Qt__Horizontal, nil),
		button = widgets.NewQPushButton2("Reset Timer", nil)

	layout.AddWidget2(widgets.NewQLabel2("Elapsed Time:", nil, 0), 0, 0, 0)
	layout.AddWidget2(progressBar, 0, 1, 0)
	layout.AddWidget2(label, 1, 1, 0)
	layout.AddWidget2(widgets.NewQLabel2("Duration:", nil, 0), 2, 0, 0)
	layout.AddWidget2(slider, 2, 1, 0)
	layout.AddWidget3(button, 3, 0, 1, 2, 0)

	var maxDur = 300,
		currentDur = 0

	progressBar.SetMaximum(maxDur)
	slider.SetMaximum(maxDur)
	slider.SetValue(maxDur / 2)

	var timer = core.NewQTimer(nil)
	timer.ConnectTimeout(function() {
		var visibleDur;

		if (currentDur >= maxDur) {
			timer.Stop()
			visibleDur = maxDur;
		} else {
			visibleDur = ++currentDur
		}

		label.SetText((visibleDur / 10) + "s")

		if (maxDur == 0 || currentDur >= maxDur) {
			progressBar.SetValue(progressBar.Maximum())
		} else {
			progressBar.SetValue(visibleDur)
		}

	})

	slider.ConnectValueChanged(function(value) {
		maxDur = value
		label.SetText((maxDur / 10) + "s")

		if (maxDur == 0 || progressBar.Value() >= maxDur) {
			progressBar.SetValue(progressBar.Maximum())
		} else {
			progressBar.SetMaximum(maxDur)
			timer.Start(100)
		}
	})

	button.ConnectClicked(function(bool) {
		currentDur = 0
		progressBar.SetValue(currentDur)
		progressBar.SetMaximum(maxDur)
		timer.Start(100)
	})
	button.Clicked(false)

	return window.Pointer()
})()