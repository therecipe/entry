#!/usr/bin/env ../entry
//@ts-check
//port of: https://github.com/therecipe/qt/blob/master/internal/examples/widgets/drop_area/drop_area.go

/// <reference path="../tsd_full/core.d.ts" />		import github.com/therecipe/qt/core
/// <reference path="../tsd_full/gui.d.ts" />		import github.com/therecipe/qt/gui
/// <reference path="../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var view = widgets.NewQGraphicsView(nil)
	var scene = widgets.NewQGraphicsScene(view)
	view.SetScene(scene)

	view.ConnectResizeEvent(function(event) {
		view.FitInView(scene.ItemsBoundingRect(), core.Qt__KeepAspectRatio)
	})

	//canvas

	var img = gui.NewQImage3(16, 32, gui.QImage__Format_ARGB32)

	for (var x = 0; x < img.Width(); x++) {
		for (var y = 0; y < img.Height(); y++) {
			img.SetPixelColor2(x, y, gui.NewQColor3(x * 3, y * 6, x * 9, 255))
		}
	}

	var item = widgets.NewQGraphicsPixmapItem2(gui.QPixmap_FromImage(img, 0), nil)

	var color = gui.NewQColor3(255, 255, 255, 255)
	var drawPixel = function(x, y) {
		x = Math.floor(x)
		y = Math.floor(y)
		var pixmap = item.Pixmap()
		if (x >= 1 && x < pixmap.Width() - 1 &&
			y >= 1 && y < pixmap.Height() - 1) {

			var img = item.Pixmap().ToImage()
			img.SetPixelColor2(x, y, color)
			item.SetPixmap(gui.QPixmap_FromImage(img, 0))
		}
	}

	item.ConnectMouseMoveEvent(function(event) {
		var mousePosition = event.Pos()
		drawPixel(mousePosition.X(), mousePosition.Y())
	})

	item.ConnectMousePressEvent(function(event) {
		var mousePosition = event.Pos()
		drawPixel(mousePosition.X(), mousePosition.Y())
	})
	
	scene.AddItem(item)

	return view.Pointer()
})()