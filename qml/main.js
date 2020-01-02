//@ts-check

/// <reference path="main.d.ts" />
/// <reference path="../tsd_full/core.d.ts" />				import github.com/therecipe/qt/core
/// <reference path="../tsd_full/gui.d.ts" />				import github.com/therecipe/qt/gui
/// <reference path="../tsd_full/qml.d.ts" />				import github.com/therecipe/qt/qml
/// <reference path="../tsd_full/quick.d.ts" />				import github.com/therecipe/qt/quick
/// <reference path="../tsd_full/widgets.d.ts" />			import github.com/therecipe/qt/widgets
/// <reference path="../tsd_full/quickcontrols2.d.ts" />	import github.com/therecipe/qt/quickcontrols2

(function() {

	if (isMain && !isInsideBrowser && !isWinXP) {
		// @ts-ignore
		quickcontrols2.QQuickStyle_SetStyle("Material")
	}

	if (isWinXP) {
		// @ts-ignore
		core.NewQFile2 = core.NewQFile

		var oldFunc = widgets.NewQGridLayout2
		widgets.NewQGridLayout2 = function() {
			var r = oldFunc()
			// @ts-ignore
			r.AddWidget2 = r.AddWidget
			return r
		}
	}

	var newTextEdit = function(p) {
		//code syntax highlighter
		var doc = gui.NewQTextDocument(p)
		doc.SetDocumentLayout(widgets.NewQPlainTextDocumentLayout(doc))
		var font = gui.NewQFont()
		font.SetPointSize(14)
		doc.SetDefaultFont(font)

		//code text area
		var textEdit = widgets.NewQPlainTextEdit(nil)
		textEdit.SetDocument(doc)
		if (!isWinXP) {
			// @ts-ignore
			textEdit.SetTabStopDistance(textEdit.TabStopDistance() / 3)
		}
		main.NewGolangHighlighter2(doc)
		return textEdit
	}

	var fileForIndex = function(i) {
		switch (i) {
			case -1:
				return "main.js"
			case 0:
				return "basic.js"
			case 1:
				return "line_edits.js"
			case 2:
				return "systray.js"
			case 3:
				return "drop_area.js"
			case 4:
				return "video_player.js"
			case 5:
				return "graphics_scene.js"
			case 6:
				return "pixel_editor.js"
			case 7:
				return "goroutine.js"
			case 8:
				return "list_view.js"
			case 9:
				return "table_view.js"
			case 10:
				return "tree_view.js"
			case 11:
				return "basic.qml"
			case 12:
				return "dynamic.qml"
			case 13:
				return "goroutine.qml"
				/*
				case 14:
					return "7guis/counter.js"
				case 15:
					return "7guis/converter.js"
				case 16:
					return "7guis/flight.js"
				case 17:
					return "7guis/timer.js"
				case 18:
					return "7guis/crud.js"
				*/
		}
		return ""
	}

	var SetStandardIcon = function(p, si) {
		if (isBrowserJSEngine) {
			main.SetStandardIcon(p.Pointer(), si)
		} else {
			p.SetIcon(p.Style().StandardIcon(si, nil, nil))
		}
	}



	//window
	var window = widgets.NewQMainWindow(nil, 0)
	window.SetWindowTitle("Entry")
	if (!isMain) {
		window.SetWindowTitle("Entry Editor")
	}
	window.SetCentralWidget(widgets.NewQWidget(nil, 0))

	var windowLayout
	if (isMain) {
		windowLayout = widgets.NewQVBoxLayout2(window.CentralWidget()).QBoxLayout_PTR()
	} else {
		windowLayout = widgets.NewQHBoxLayout2(window.CentralWidget()).QBoxLayout_PTR()
	}

	//left (dev) layout
	var leftContainer = widgets.NewQWidget(nil, 0)
	if (isMain) {
		leftContainer.Hide()
	}
	var leftLayout = widgets.NewQVBoxLayout2(leftContainer)

	//tab widget setup
	var tabWidget = widgets.NewQTabWidget(leftContainer)
	if (isMain || mainPayload != "") {
		tabWidget.Hide()
	} else {
		leftLayout.AddWidget(tabWidget, 0, 0)
	}

	//create textedits
	var textEdits = []
	if (isMain || mainPayload != "") {
		var te = newTextEdit(window.QObject_PTR())
		textEdits.push(te)
		tabWidget.AddTab(widgets.NewQWidget(nil, 0), fileForIndex(-1))
		leftLayout.AddWidget(te, 0, 0)
	} else {
		for (var i = 0; i <= 13; i++) {
			if (isInsideBrowser) {
				switch (fileForIndex(i)) {
					case "systray.js":
					case "drop_area.js":
					case "video_player.js":
					case "basic.qml":
					case "dynamic.qml":
					case "goroutine.qml":
						break
					default:
						var te = newTextEdit(window.QObject_PTR())
						textEdits.push(te)
						tabWidget.AddTab(te, fileForIndex(i))
				}
				continue
			}
			if (isWinXP) { //TODO:
				switch (fileForIndex(i)) {
					case "basic.qml":
					case "dynamic.qml":
					case "goroutine.qml":
						break
					default:
						var te = newTextEdit(window.QObject_PTR())
						textEdits.push(te)
						tabWidget.AddTab(te, fileForIndex(i))
				}
				continue
			}
			var te = newTextEdit(window.QObject_PTR())
			textEdits.push(te)
			tabWidget.AddTab(te, fileForIndex(i))
		}
		var te = newTextEdit(window.QObject_PTR())
		textEdits.push(te)
		tabWidget.AddTab(te, fileForIndex(-1))
	}

	var runButton
	var liveToggle
	var windowToggle

	//reset button
	var resetButton = widgets.NewQPushButton2("reset", nil)
	SetStandardIcon(resetButton, widgets.QStyle__SP_DialogResetButton)
	resetButton.ConnectClicked(function(bool) {
		if (isMain && bootPayload != "") {
			textEdits[tabWidget.CurrentIndex()].Document().SetPlainText(bootPayload)
		} else if (!isMain && mainPayload != "") {
			textEdits[tabWidget.CurrentIndex()].Document().SetPlainText(mainPayload)
		} else {
			// @ts-ignore
			var file = core.NewQFile2(":/qml/" + tabWidget.TabBar().TabText(tabWidget.CurrentIndex()))
			if (file.Open(core.QIODevice__ReadOnly)) {
				textEdits[tabWidget.CurrentIndex()].Document().SetPlainText(file.ReadAll().ConstData())
				file.Close()
				file.DestroyQFile()
			}
		}
		if (!liveToggle.IsChecked()) {
			runButton.Click()
		}
	})

	//run button
	runButton = widgets.NewQPushButton2("run", nil)
	runButton.SetShortcut(gui.NewQKeySequence2("Ctrl+R", 0))
	SetStandardIcon(runButton, widgets.QStyle__SP_MediaPlay)

	//right (widget) layout
	var rightContainer = widgets.NewQWidget(nil, 0)
	var rightLayout = widgets.NewQVBoxLayout2(rightContainer).QLayout_PTR()

	var busy
	var childWindows = []
	var currentWidget
	var engine
	var lastGeo = []
	var view

	window.QObject_PTR().ConnectDestroyed(function(o) {
		childWindows.forEach(function(c) {
			c.Hide()
			c.DestroyQWidget()
		})
	})

	var processWidget = function(cWidget) {
		cWidget.SetAttribute(core.Qt__WA_ShowWithoutActivating, true)

		if (windowToggle.IsChecked()) {
			childWindows.push(cWidget)
			rightContainer.Hide()

			if (lastGeo.length != 0) {
				cWidget.SetGeometry2(lastGeo[0], lastGeo[1], lastGeo[2], lastGeo[3])
				//TODO:? window.Resize2(window.Width() - rightContainer.Width(), window.Height())
			} else if (mainPayload == "") {
				//TODO:? if !isMain and outside of main window: cWidget.SetGeometry2(window.Geometry().X() + (window.Geometry().Width() - rightContainer.Geometry().Width()), window.Geometry().Y(), rightContainer.Geometry().Width(), window.Geometry().Height())
				cWidget.SetGeometry2(window.MapToGlobal(window.Pos()).X() + window.Geometry().Width(), window.MapToGlobal(window.Pos()).Y(), rightContainer.Geometry().Width(), window.Geometry().Height())
				window.Resize2(window.Geometry().Width() - cWidget.Geometry().Width(), window.Height())
			}

			cWidget.ConnectMoveEvent(function(event) {
				cWidget.MoveEventDefault(event)
				lastGeo = [cWidget.Geometry().X(), cWidget.Geometry().Y(), cWidget.Geometry().Width(), cWidget.Geometry().Height()]
			})

			cWidget.ConnectResizeEvent(function(event) {
				cWidget.ResizeEventDefault(event)
				lastGeo = [cWidget.Geometry().X(), cWidget.Geometry().Y(), cWidget.Geometry().Width(), cWidget.Geometry().Height()]
			})

			cWidget.ConnectCloseEvent(function(e) {
				cWidget.CloseEventDefault(e)
				qt.runAsync(function() {
					windowToggle.Clicked(false)
				}) //TODO: create invoke queued method function
			})

			cWidget.Show()
		} else {
			currentWidget = cWidget.QWidget_PTR()
		}
	}

	runButton.ConnectClicked(function(bool) {
		if (busy) {
			return
		}
		busy = true

		//delete old widget(s)
		while (rightLayout.Count() > 0) {
			var ci = rightLayout.TakeAt(0)
			ci.Widget().Hide()
			ci.Widget().DestroyQWidget()
			ci.DestroyQLayoutItem()
		}
		childWindows.forEach(function(c) {
			c.Hide()
			c.DestroyQWidget()
		})
		childWindows = []

		if (engine != nil) {
			engine.CollectGarbage()
			engine.DestroyQJSEngine()
		}
		if (view != nil) {
			view.DestroyQQuickWidget()
		}

		//add new widget
		currentWidget = nil

		var text = textEdits[tabWidget.CurrentIndex()].ToPlainText()
		if (text.indexOf("#!") == 0) {
			text = "//" + text
			textEdits[tabWidget.CurrentIndex()].SetPlainText(text)
		}

		if (isInsideBrowser && isBrowserJSEngine) { //TODO: full wasm support
			main.updateBrowserHash(textEdits[tabWidget.CurrentIndex()].ToPlainText())
		}

		if (text.indexOf("mport QtQuick") != -1 && text.indexOf('includes("mport QtQuick")') == -1 && (!isInsideBrowser)) {
			view = quick.NewQQuickWidget(nil)
			view.SetResizeMode(quick.QQuickWidget__SizeRootObjectToView)
			view.SetSource(core.QUrl_FromLocalFile(":/qml/tmp.qml"))
			view.Engine().GlobalObject().SetProperty("isDeployed", qml.NewQJSValue4(isDeployed))
			view.Engine().NewJSType(view.Engine().GlobalObject(), "rootWindow", view)

			var mainComponent = qml.NewQQmlComponent2(view.Engine(), view)
			mainComponent.SetData(core.NewQByteArray2(text, -1), core.NewQUrl())
			var hadError = false
			if (!mainComponent.IsReady()) {
				mainComponent.Errors().forEach(function(e) {
					console.log(e.ToString())
					if (!isInsideBrowser) {
						widgets.QMessageBox_Critical(nil, "OK", e.ToString(), widgets.QMessageBox__Ok, 0)
					} else {
						alert(e.ToString())
					}
					hadError = true
				})
			}

			if (!hadError) {
				var item = quick.NewQQuickItem(nil)
				item.DestroyQQuickItem()
				item.___pointer = mainComponent.Create(view.RootContext()).___pointer
				if (item.___pointer != 0) {
					item.QObject_PTR().SetParent(view)
					item.SetParentItem(view.RootObject()) //TODO: use setContent function ?
					processWidget(view)
				}
			}
		} else {
			if (!isBrowserJSEngine) {
				engine = qml.NewQJSEngine2(window)
				//TODO: engine.ImportModule("someModule.mjs")
				engine.InstallExtensions(qml.QJSEngine__AllExtensions, engine.GlobalObject())
				engine.GlobalObject().SetProperty("isMain", qml.NewQJSValue4(false))
				engine.GlobalObject().SetProperty("isDev", qml.NewQJSValue4(isDev))
				engine.GlobalObject().SetProperty("isInsideBrowser", qml.NewQJSValue4(isInsideBrowser))
				engine.GlobalObject().SetProperty("isBrowserJSEngine", qml.NewQJSValue4(isBrowserJSEngine))
				engine.GlobalObject().SetProperty("isWinXP", qml.NewQJSValue4(isWinXP))
				engine.GlobalObject().SetProperty("bootPayload", qml.NewQJSValue8(""))
				engine.GlobalObject().SetProperty("bootPayloadDirty", qml.NewQJSValue8(""))
				engine.GlobalObject().SetProperty("mainPayload", qml.NewQJSValue8(mainPayload))
				engine.GlobalObject().SetProperty("softRestart", qml.NewQJSValue(qml.QJSValue__NullValue))
				engine.GlobalObject().SetProperty("recursionCounter", qml.NewQJSValue5(recursionCounter + 1))
				engine.GlobalObject().SetProperty("isTesting", qml.NewQJSValue4(isTesting))
				engine.GlobalObject().SetProperty("isTestingVisible", qml.NewQJSValue4(isTestingVisible))

				engine.GlobalObject().SetProperty("isDeployed", qml.NewQJSValue4(isDeployed))
				engine.NewJSType(engine.GlobalObject(), "rootWindow", leftContainer)
			} else {
				//TODO: rootWindow = leftContainer
			}

			var widget = widgets.NewQWidget(nil, 0)
			widget.DestroyQWidget()

			var v
			var hadError = false
			if (!isBrowserJSEngine) {
				v = engine.Evaluate(text, "", 0)
				if (v.IsError()) {
					console.log(v.ToString())
					if (!isInsideBrowser) {
						widgets.QMessageBox_Critical(nil, "OK", v.ToString(), widgets.QMessageBox__Ok, 0)
					} else {
						alert(v.ToString())
					}
					hadError = true
				}
			}

			if (!hadError || isBrowserJSEngine) {
				if (isBrowserJSEngine) {
					isDev = false
					var p
					try {
						p = eval(text)
					} catch (e) {
						console.log(e)
						alert(e)
					}
					if (p != 0 && p != nil) {
						widget.SetPointer(p)
						processWidget(widget)
					}
				} else {
					widget.___pointer = v.ToVariant().ToULongLong(true)
					if (widget.___pointer != 0) {
						processWidget(widget)
					}
				}
			}
		}

		if (currentWidget != nil) {
			rightLayout.AddWidget(currentWidget)
			rightContainer.SetVisible(true)
		}

		busy = false
	})

	//live toggle
	liveToggle = widgets.NewQPushButton2("live", nil)
	SetStandardIcon(liveToggle, widgets.QStyle__SP_BrowserReload)
	liveToggle.ConnectClicked(function(c) {
		if (c) {
			SetStandardIcon(liveToggle, widgets.QStyle__SP_BrowserStop)
		} else {
			SetStandardIcon(liveToggle, widgets.QStyle__SP_BrowserReload)
		}
		runButton.Click()
	})
	liveToggle.SetCheckable(true)

	if ((isMain || mainPayload != "") && !isInsideBrowser) {
		if (isMain) {
			var restart = widgets.NewQPushButton2("soft patch and restart", nil)
			restart.ConnectClicked(function(bool) {
				main.patchSelf(textEdits[tabWidget.CurrentIndex()].ToPlainText(), false, isMain)
				main.restart()
			})
		}
		var patchAndRestart = widgets.NewQPushButton2("hard patch and restart", nil)
		patchAndRestart.ConnectClicked(function(bool) {
			main.patchSelf(textEdits[tabWidget.CurrentIndex()].ToPlainText(), true, isMain)
			main.restart()
		})
	}

	//windowToggle toggle
	windowToggle = widgets.NewQPushButton2("separate window", nil)
	SetStandardIcon(windowToggle, widgets.QStyle__SP_TitleBarNormalButton)
	windowToggle.ConnectClicked(function(c) {
		if (c) {
			windowToggle.SetText("combine windows")
		} else {
			windowToggle.SetText("separate window")
		}
		windowToggle.SetChecked(c)
		runButton.Click()
	})
	windowToggle.SetCheckable(true)
	if (isInsideBrowser) {
		windowToggle.SetDisabled(true)
		windowToggle.SetVisible(false)
	}

	var leftSubLayout2 = widgets.NewQGridLayout2()

	//deploy buttons
	if ((!isMain && mainPayload == "") || isInsideBrowser) {
		["Windows", "Linux", "macOS"].forEach(function(name, i) {
			var b = widgets.NewQPushButton2("Deploy for " + name, nil)
			b.ConnectClicked(function(bool) {
				name = name.toLowerCase()
				if (name == "macos") {
					name = "darwin"
				}
				main.deploy(name, textEdits[tabWidget.CurrentIndex()].ToPlainText(), (isBrowserJSEngine) ? b.Pointer() : b.___pointer, false)
			})
			leftSubLayout2.AddWidget2(b, 0, i, 0)
		})

		if (isInsideBrowser) {
			["WindowsXP", "WASM", "FreeBSD"].forEach(function(name, i) {
				var b = widgets.NewQPushButton2("Deploy for " + name, nil)
				b.ConnectClicked(function(bool) {
					main.deploy(name.toLowerCase(), textEdits[tabWidget.CurrentIndex()].ToPlainText(), (isBrowserJSEngine) ? b.Pointer() : b.___pointer, false)
				})
				if (i == 2) {
					b.SetDisabled(true) //TODO: QJSEngine::evaluate on FreeBSD ...
				}
				leftSubLayout2.AddWidget2(b, 1, i, 0)
			})
		}
	}

	var timer
	var triggerUpdate = function() {
		if (liveToggle.IsChecked()) {
			if (timer == nil) {
				timer = core.NewQTimer(window)
				timer.SetSingleShot(true)
				timer.ConnectTimeout(function() {
					runButton.Click()
				})
			} else {
				timer.Stop()
				timer.Start(500)
			}
		}
	}

	//connect text changed signals
	textEdits.forEach(function(textEdit) {
		textEdit.ConnectTextChanged(triggerUpdate)
	})

	//connect tab changed signal
	tabWidget.ConnectCurrentChanged(function(i) {
		if (textEdits[i].Document().IsEmpty()) {
			if (isMain && bootPayload != "") {
				textEdits[tabWidget.CurrentIndex()].Document().SetPlainText(bootPayload)
			} else if (!isMain && mainPayload != "") {
				textEdits[tabWidget.CurrentIndex()].Document().SetPlainText(mainPayload)
			} else {
				// @ts-ignore
				var file = core.NewQFile2(":/qml/" + tabWidget.TabBar().TabText(tabWidget.CurrentIndex()))
				if (file.Open(core.QIODevice__ReadOnly)) {
					var liveToogleWasChecked = liveToggle.IsChecked()
					liveToggle.SetChecked(false)
					var data = file.ReadAll().ConstData() //needed for WinXP support ...
					textEdits[i].Document().SetPlainText(data)
					liveToggle.SetChecked(liveToogleWasChecked)
					file.Close()
					file.DestroyQFile()
				}
			}
			textEdits[i].MoveCursor(gui.QTextCursor__Start, gui.QTextCursor__MoveAnchor)
			textEdits[i].EnsureCursorVisible()
		}
		runButton.Click()
		windowLayout.SetStretchFactor(rightContainer, 2)
	})

	if (!isMain && mainPayload != "" && !isInsideBrowser) {
		windowToggle.SetChecked(true)
	}

	if (isMain && bootPayloadDirty != "") {
		textEdits[tabWidget.CurrentIndex()].Document().SetPlainText(bootPayloadDirty)
	}

	//setup layouts
	var leftSubLayout1 = widgets.NewQHBoxLayout()
	leftSubLayout1.AddWidget(resetButton, 1, 0)
	leftSubLayout1.AddWidget(runButton, 2, 0)
	leftSubLayout1.AddWidget(liveToggle, 1, 0)
	leftSubLayout1.AddWidget(windowToggle, 1, 0)

	if ((isMain || mainPayload != "") && !isInsideBrowser) {
		if (isMain) {
			leftSubLayout2.AddWidget2(restart, 0, 0, 0)
		}
		leftSubLayout2.AddWidget2(patchAndRestart, 0, 1, 0)
	}

	//add sub layouts to leftLayout
	leftLayout.AddLayout(leftSubLayout1, 0)
	leftLayout.AddLayout(leftSubLayout2, 0)

	//add container to window layout
	windowLayout.AddWidget(leftContainer, 3, 0)
	windowLayout.AddWidget(rightContainer, 2, 0)

	if ((isMain && isDev) || (isInsideBrowser && isDev && mainPayload != "")) {
		var menu = window.MenuBar().AddMenu2("Settings")

		var showDev = widgets.NewQAction2("&Show Dev Panel", window)
		menu.QWidget_PTR().AddAction(showDev)
		showDev.SetShortcut(gui.NewQKeySequence2("Ctrl+K", 0))
		showDev.ConnectTriggered(function(bool) {
			if (leftContainer.IsHidden() || window.IsHidden()) {
				if (windowToggle.IsChecked() || window.IsHidden()) {
					window.Show()
				}
				leftContainer.Show()
				showDev.SetText("&Hide Dev Panel")
			} else {
				if (windowToggle.IsChecked()) {
					window.Hide()
				}
				leftContainer.Hide()
				showDev.SetText("&Show Dev Panel")
			}
		})
		showDev.SetMenuRole(widgets.QAction__ApplicationSpecificRole)

		window.ConnectCloseEvent(function(e) {
			window.CloseEventDefault(e)
			showDev.SetText("&Show Dev Panel")
		})

		var watchBoot = widgets.NewQAction2("&Watch Boot Payload", window)
		menu.QWidget_PTR().AddAction(watchBoot)
		watchBoot.ConnectTriggered(function(bool) {
			var bp = widgets.QFileDialog_GetOpenFileName(window, "Watch Boot Payload", core.QDir_HomePath(), "", "", 0)
			if (bp != "") {
				main.watchBoot(bp)
				main.restart()
			}
		})
		watchBoot.SetMenuRole(widgets.QAction__ApplicationSpecificRole)

		var watchPayload = widgets.NewQAction2("&Watch Main Payload", window)
		menu.QWidget_PTR().AddAction(watchPayload)
		watchPayload.ConnectTriggered(function(bool) {
			var mp = widgets.QFileDialog_GetOpenFileName(window, "Watch Main Payload", core.QDir_HomePath(), "", "", 0)
			if (mp != "") {
				main.watchPayload(mp)
				main.restart()
			}
		})
		watchPayload.SetMenuRole(widgets.QAction__ApplicationSpecificRole)

		var aboutQt = widgets.NewQAction2("&About Qt", window)
		menu.QWidget_PTR().AddAction(aboutQt)
		aboutQt.ConnectTriggered(function(bool) {
			widgets.QMessageBox_AboutQt(window, "")
		})
		aboutQt.SetMenuRole(widgets.QAction__AboutQtRole)

		window.QObject_PTR().ConnectDestroyed(function(o) {
			menu.RemoveAction(showDev)
			menu.RemoveAction(watchBoot)
			menu.RemoveAction(watchPayload)
			menu.RemoveAction(aboutQt)
		})
	}

	var shown = false
	if (!isMain) {
		softRestart = function(s) {
			textEdits[tabWidget.CurrentIndex()].Document().SetPlainText(s)
			runButton.Click()
		}
	} else {
		if ((isDev || (isMain && mainPayload == "")) && !shown && (!isTesting || (isTesting && isTestingVisible))) {
			window.Show()
			shown = true
		}
		tabWidget.CurrentChanged(0) //needed here, to get a valid engine reference
		main.updateEngineReference(engine)
	}

	//
	//
	//

	if (!isMain && isTesting) {
		var i = 0
		var ti = core.NewQTimer(window)
		ti.SetSingleShot(true)
		ti.ConnectTimeout(function() {
			if (!busy) {
				var ni = tabWidget.CurrentIndex()
				i++
				ni++
				if (ni > tabWidget.Count() - 1) {
					ni = 0
				}
				tabWidget.SetCurrentIndex(ni)
			}

			if (i > (tabWidget.Count() - 1) * 2) {
				engine.CollectGarbage()
				gc()
				main.restart()
				return
			}

			ti.Start2()
		})
		ti.Start2()
	}

	//
	//
	//

	if ((isDev || (isMain && mainPayload == "")) && !shown && (!isTesting || (isTesting && isTestingVisible))) {
		window.Show()
	}

	// @ts-ignore
	if (recursionCounter >= 3) {
		mainPayload = "//stopped the recursion"
	}

	if (!isMain) {
		tabWidget.CurrentChanged(0)
	}

	return window.Pointer()
})()