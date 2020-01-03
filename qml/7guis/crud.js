#!/usr/bin/env ../../entry
//@ts-check
//port of: https://eugenkiss.github.io/7guis/tasks/#crud

/// <reference path="../../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
var isWinXP;
(function() {

	if (isWinXP) {
		var oldFunc = widgets.NewQGridLayout
		widgets.NewQGridLayout = function(parent) {
			var r = oldFunc(parent)
			// @ts-ignore
			r.AddWidget2 = r.AddWidget
			return r
		}
	}

	var window = widgets.NewQWidget(nil, 0),
		layout = widgets.NewQGridLayout(window)

	window.SetWindowTitle("CRUD")

	var listview = widgets.NewQListView(nil),
		model = core.NewQAbstractListModel(listview),
		modelData = [
			["Emil", "Hans"],
			["Mustermann", "Max"],
			["Tisch", "Roman"]
		]

	listview.SetModel(model)

	model.ConnectRowCount(function(index) {
		return modelData.length
	})

	model.ConnectData(function(index, role) {
		if (role != core.Qt__DisplayRole) {
			return core.NewQVariant()
		}
		var item = modelData[index.Row()]
		return core.NewQVariant1(item[0] + ", " + item[1])
	})

	var filter = widgets.NewQLineEdit(nil)
	layout.AddWidget2(widgets.NewQLabel2("Filter prefix:", nil, 0), 0, 0, 0)
	layout.AddWidget2(filter, 0, 1, 0)

	filter.ConnectTextEdited(function(text) {
		for (var i = 0; i < model.RowCount(core.NewQModelIndex()); i++) {
			listview.SetRowHidden(i, modelData[i][0].indexOf(text) != 0)
		}
	})

	layout.AddWidget3(listview, 1, 0, 3, 3, 0)

	var name = widgets.NewQLineEdit2("John", nil),
		surname = widgets.NewQLineEdit2("Romba", nil)

	layout.AddWidget2(widgets.NewQLabel2("Name:", nil, 0), 1, 3, 0)
	layout.AddWidget2(name, 1, 4, 0)
	layout.AddWidget2(widgets.NewQLabel2("Surname:", nil, 0), 2, 3, 0)
	layout.AddWidget2(surname, 2, 4, 0)

	var add = widgets.NewQPushButton2("Create", nil)
	add.ConnectClicked(function(bool) {
		model.BeginInsertRows(core.NewQModelIndex(),
			modelData.length,
			modelData.length)
		modelData.push([surname.Text(), name.Text()])
		model.EndInsertRows()
		filter.TextEdited(filter.Text())
	})
	layout.AddWidget2(add, 4, 0, 0)

	var edit = widgets.NewQPushButton2("Update", nil)
	edit.ConnectClicked(function(bool) {
		if (modelData.length == 0) {
			return
		}
		modelData[listview.CurrentIndex().Row()] = [surname.Text(), name.Text()]
		model.DataChanged(
			model.Index(listview.CurrentIndex().Row(), 0, core.NewQModelIndex()),
			model.Index(listview.CurrentIndex().Row(), 1, core.NewQModelIndex()), [core.Qt__DisplayRole])
		filter.TextEdited(filter.Text())
	})
	layout.AddWidget2(edit, 4, 1, 0)

	var remove = widgets.NewQPushButton2("Delete", nil)
	remove.ConnectClicked(function(bool) {
		if (modelData.length == 0) {
			return
		}
		model.BeginRemoveRows(core.NewQModelIndex(),
			listview.CurrentIndex().Row(),
			listview.CurrentIndex().Row())
		modelData.splice(listview.CurrentIndex().Row() - 1, 1)
		model.EndRemoveRows()
	})
	layout.AddWidget2(remove, 4, 2, 0)

	return window.Pointer()
})()