#!/usr/bin/env ../entry
//@ts-check
//port of: https://github.com/therecipe/qt/blob/master/internal/examples/widgets/systray/systray.go

/// <reference path="../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
var isWinXP;
(function() {
	var widget = widgets.NewQWidget(nil, 0)
	var widgetLayout = widgets.NewQVBoxLayout2(widget)

	var systray = widgets.NewQSystemTrayIcon(widget)
	systray.SetIcon(widget.Style().StandardIcon(widgets.QStyle__SP_MessageBoxCritical, nil, nil))
	systray.Show()

	var systrayMenu = widgets.NewQMenu(widget)
	var action = systrayMenu.AddAction("first action")
	action.ConnectTriggered(function() {
		systray.ShowMessage("title", "some menu message", widgets.QSystemTrayIcon__Information, 5000)
	})
	systrayMenu.AddAction("second action")
	systray.SetContextMenu(systrayMenu)

	var button = widgets.NewQPushButton2("show some notification", nil)
	button.ConnectClicked(function(bool) {
		systray.ShowMessage("title", "some message", widgets.QSystemTrayIcon__Information, 5000)
	})
	widgetLayout.AddWidget(button, 0, 0)

	return widget.Pointer()
})()