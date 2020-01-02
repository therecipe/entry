#!/usr/bin/env ../entry
//@ts-check
//port of: https://github.com/therecipe/qt/blob/master/internal/examples/widgets/graphicsscene/graphicsscene.go

/// <reference path="main.d.ts" />
/// <reference path="../tsd_full/core.d.ts" />		import github.com/therecipe/qt/core
/// <reference path="../tsd_full/gui.d.ts" />		import github.com/therecipe/qt/gui
/// <reference path="../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
var isWinXP;
(function() {

	var view = widgets.NewQGraphicsView(nil)
	var scene = widgets.NewQGraphicsScene3(0, 0, 300, 300, view)
	view.SetScene(scene)

	//qt.inspect(view)

	//canvas

	//scene.AddRect2(5, 5, scene.Width()-10, scene.Height()-10, gui.NewQPen3(gui.NewQColor6("blue")), gui.NewQBrush())

	var font = gui.NewQFont2("Meiryo", 20, 2, false)
	var text = scene.AddText("Hello World", font)
	text.SetPos2((scene.Width() - text.BoundingRect().Width()) / 2, (scene.Height() - text.BoundingRect().Height()) / 2)

	/*
	text = scene.AddText(Date.now().toString(), font)
	text.SetPos2((scene.Width()-text.BoundingRect().Width())/3, (scene.Height()-text.BoundingRect().Height())/3)
	qt.setInterval(function() { text.SetPlainText(Date.now().toString()) }, 15, view)
	*/

	var pen = gui.NewQPen3(gui.NewQColor3(255, 0, 0, 255))
	scene.AddLine2(20, scene.Height() * 0.75, scene.Width() - 20, scene.Height() * 0.75, pen)

	/*
	var button = widgets.NewQPushButton2("SceneButton", nil)
	var proxy = scene.AddWidget(button, 0)
	button.ConnectClicked(function() { proxy.QGraphicsObject_PTR().SetX(proxy.QGraphicsObject_PTR().X() + 5) })
	//qt.setInterval(function() { button.Click() }, 15, view)
	*/
	if (isWinXP) {
		// @ts-ignore
		gui.NewQPixmap3 = gui.NewQPixmap5
	}

	/*
	var pixmap = gui.NewQPixmap3(":/qml/dummy.png", "", 0)
	pixmap = pixmap.Scaled2(pixmap.Width()/2, pixmap.Height()/2, core.Qt__KeepAspectRatio, core.Qt__SmoothTransformation)

	var pixmapItem = scene.AddPixmap(pixmap)
	pixmapItem.SetTransformationMode(core.Qt__SmoothTransformation)
	qt.setInterval(function() {
		if (pixmapItem.Y() >= scene.Height()){
			pixmapItem.SetY(0) 
		}else{
			pixmapItem.SetY(pixmapItem.Y()+1) 
		}
		//pixmapItem.SetRotation(pixmapItem.Rotation()+1)
	}, 15, view)
	*/

	return view.Pointer()
})()