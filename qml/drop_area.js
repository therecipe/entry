#!/usr/bin/env ../entry
//@ts-check
//port of: https://github.com/therecipe/qt/blob/master/internal/examples/widgets/dropsite/dropsite.go

/// <reference path="../tsd_full/core.d.ts" />		import github.com/therecipe/qt/core
/// <reference path="../tsd_full/gui.d.ts" />		import github.com/therecipe/qt/gui
/// <reference path="../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var updateDropArea = function(mimeData, dropArea) {
		formatsTable.SetRowCount(0)

		if (mimeData == nil) {
			return
		}

		mimeData.Formats().forEach(function(format) {
			var formatItem = widgets.NewQTableWidgetItem2(format, 0)
			formatItem.SetFlags(core.Qt__ItemIsEnabled)
			formatItem.SetTextAlignment(core.Qt__AlignTop | core.Qt__AlignLeft)

			var text = ""
			var data = ""
			switch (format) {
				case "text/plain":
					text = mimeData.Text()
					break

				case "text/html":
					text = mimeData.Html()
					break

				case "text/uri-list":
					var urlList = mimeData.Urls()
					for (var i = 0; i < urlList.length && i < 32; i++) {
						text += urlList[i].ToString(0) + " "
					}
					break

				case "application/x-qt-image":
					var image = gui.NewQImageFromPointer(mimeData.ImageData().ToImage())
					var ba = core.NewQByteArray()
					var buffer = core.NewQBuffer2(ba, nil)
					buffer.Open(core.QIODevice__WriteOnly)
					image.Save2(buffer, "PNG", -1)
					buffer.Close()

					data = ba.ConstData()
					text = "len: " + data.length
					break

				default:
					data = mimeData.Data(format).ConstData()
					text = "len: " + data.length
			}

			var row = formatsTable.RowCount()
			formatsTable.InsertRow(row)
			formatsTable.SetItem(row, 0, widgets.NewQTableWidgetItem2(format, 0))
			formatsTable.SetItem(row, 1, widgets.NewQTableWidgetItem2(text, 0))
		})

		formatsTable.ResizeColumnToContents(0)
	}

	var createDropArea = function() {
		var dropArea = widgets.NewQLabel(nil, 0)

		dropArea.SetMinimumSize2(200, 200)
		dropArea.SetFrameStyle(widgets.QFrame__Sunken | widgets.QFrame__StyledPanel)
		dropArea.SetAlignment(core.Qt__AlignCenter)
		dropArea.SetAcceptDrops(true)
		dropArea.SetAutoFillBackground(true)
		dropArea.Clear()

		dropArea.ConnectDragEnterEvent(function(e) {
			dropArea.SetText("<drop content>")
			dropArea.SetBackgroundRole(gui.QPalette__Highlight)

			e.AcceptProposedAction()
			updateDropArea(e.MimeData(), dropArea)
		})

		dropArea.ConnectDragMoveEvent(function(e) {
			e.AcceptProposedAction()
		})

		dropArea.ConnectDropEvent(function(e) {
			var mimeData = e.MimeData()

			switch (true) {
				case mimeData.HasImage():
					dropArea.SetPixmap(gui.QPixmap_FromImage(gui.NewQImageFromPointer(mimeData.ImageData().ToImage()), 0))
					break

				case mimeData.HasHtml():
					dropArea.SetText(mimeData.Html())
					dropArea.SetTextFormat(core.Qt__RichText)
					break

				case mimeData.HasUrls():
					var urlList = mimeData.Urls()
					var text = ""

					for (var i = 0; i < urlList.length && i < 32; i++) {
						text += urlList[i].Path(0) + "\n"
					}
					dropArea.SetText(text)
					break

				case mimeData.HasText():
					dropArea.SetText(mimeData.Text())
					dropArea.SetTextFormat(core.Qt__PlainText)
					break

				default:
					dropArea.SetText("can't display data")
			}

			dropArea.SetBackgroundRole(gui.QPalette__Dark)
			e.AcceptProposedAction()
		})

		dropArea.ConnectDragLeaveEvent(function(e) {
			dropArea.Clear()
			e.Accept()
		})

		dropArea.ConnectClear(function() {
			dropArea.SetText("<drop content>")
			dropArea.SetBackgroundRole(gui.QPalette__Dark)

			updateDropArea(nil, dropArea)
		})

		return dropArea
	}



	var window = widgets.NewQWidget(nil, 0)

	var abstractLabel = widgets.NewQLabel2("This example accepts drags from other applications and displays the MIME types provided by the drag object.", nil, 0)
	abstractLabel.SetWordWrap(true)
	abstractLabel.AdjustSize()

	var dropArea = createDropArea()

	var formatsTable = widgets.NewQTableWidget(nil)
	formatsTable.SetColumnCount(2)
	formatsTable.SetEditTriggers(widgets.QAbstractItemView__NoEditTriggers)
	formatsTable.SetHorizontalHeaderLabels(["Format", "Content"])
	formatsTable.HorizontalHeader().SetStretchLastSection(true)

	var clearButton = widgets.NewQPushButton2("Clear", nil),
		quitButton = widgets.NewQPushButton2("Quit", nil),
		buttonBox = widgets.NewQDialogButtonBox(nil)

	buttonBox.AddButton(clearButton, widgets.QDialogButtonBox__ActionRole)
	buttonBox.AddButton(quitButton, widgets.QDialogButtonBox__RejectRole)

	quitButton.ConnectPressed(function() {
		window.Close()
	})

	clearButton.ConnectPressed(function() {
		dropArea.Clear()
		formatsTable.ClearContents()
		formatsTable.SetRowCount(0)
	})

	var mainLayout = widgets.NewQVBoxLayout()
	mainLayout.AddWidget(abstractLabel, 0, 0)
	mainLayout.AddWidget(dropArea, 0, 0)
	mainLayout.AddWidget(formatsTable, 0, 0)
	mainLayout.AddWidget(buttonBox, 0, 0)

	window.SetLayout(mainLayout)
	window.SetWindowTitle("Drop Site")
	window.SetMinimumSize2(350, 500)

	return window.Pointer()
})()