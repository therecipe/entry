#!/usr/bin/env ../entry
//@ts-check
//port of: https://github.com/therecipe/examples/blob/master/advanced/widgets/tableview/main.go

/// <reference path="../tsd_full/core.d.ts" />		import github.com/therecipe/qt/core
/// <reference path="../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var window = widgets.NewQMainWindow(nil, 0)
	window.SetMinimumSize2(250, 200)
	window.SetWindowTitle("tableview Example")

	var widget = widgets.NewQWidget(nil, 0)
	widget.SetLayout(widgets.NewQVBoxLayout())
	window.SetCentralWidget(widget)

	var tableview = widgets.NewQTableView(nil)
	var model = core.NewQAbstractTableModel(tableview)

	var modelData = [
		["john", "doe"],
		["john", "bob"]
	]

	model.ConnectHeaderData(function(section, orientation, role) {
		if (role != core.Qt__DisplayRole || orientation == core.Qt__Vertical) {
			return model.HeaderDataDefault(section, orientation, role)
		}
		switch (section) {
			case 0:
				return core.NewQVariant1("FirstName")
			case 1:
				return core.NewQVariant1("LastName")
		}
		return core.NewQVariant()
	})

	model.ConnectRowCount(function(index) {
		return modelData.length
	})

	model.ConnectColumnCount(function(index) {
		return 2
	})

	model.ConnectData(function(index, role) {
		if (role != core.Qt__DisplayRole) {
			return core.NewQVariant()
		}
		var item = modelData[index.Row()]
		switch (model.HeaderData(index.Column(), core.Qt__Horizontal, role).ToString()) {
			case "FirstName":
				return core.NewQVariant1(item[0])
			case "LastName":
				return core.NewQVariant1(item[1])
		}
		return core.NewQVariant()
	})

	tableview.SetModel(model)
	widget.Layout().AddWidget(tableview)

	var remove = widgets.NewQPushButton2("remove last item", nil)
	remove.ConnectClicked(function(bool) {
		if (modelData.length == 0) {
			return
		}
		model.BeginRemoveRows(core.NewQModelIndex(),
			modelData.length - 1,
			modelData.length - 1)
		modelData.pop()
		model.EndRemoveRows()
	})
	widget.Layout().AddWidget(remove)

	var add = widgets.NewQPushButton2("add new item", nil)
	add.ConnectClicked(function(bool) {
		model.BeginInsertRows(core.NewQModelIndex(),
			modelData.length,
			modelData.length)
		modelData.push(["john", "doe"])
		model.EndInsertRows()
	})
	widget.Layout().AddWidget(add)

	var edit = widgets.NewQPushButton2("edit last item", nil)
	edit.ConnectClicked(function(bool) {
		if (modelData.length == 0) {
			return
		}
		modelData[modelData.length - 1] = ["bob", "omb"]
		model.DataChanged(model.Index(modelData.length - 1, 0, core.NewQModelIndex()),
			model.Index(modelData.length - 1, 1, core.NewQModelIndex()), [core.Qt__DisplayRole])
	})
	widget.Layout().AddWidget(edit)

	return window.Pointer()
})()