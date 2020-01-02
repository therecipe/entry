#!/usr/bin/env ../entry
//@ts-check
//port of: https://github.com/therecipe/examples/blob/master/advanced/widgets/treeview/main.go

/// <reference path="../tsd_full/core.d.ts" />		import github.com/therecipe/qt/core
/// <reference path="../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var itemMap = {}

	var NewTreeItemFromPointer = function(pointer) {
		return itemMap[pointer]
	}

	var NewTreeItem = function(data) {
		var i = core.NewQObject(nil)

		i._itemData = data
		i._parentItem = nil
		i._childItems = []

		i.appendChild = function(child) {
			child._parentItem = i
			i._childItems.push(child)
		}

		i.child = function(row) {
			return i._childItems[row]
		}

		i.childCount = function() {
			return i._childItems.length
		}

		i.columnCount = function() {
			return i._itemData.length
		}

		i.data = function(column) {
			return i._itemData[column]
		}

		i.row = function() {
			if (i._parentItem != nil) {
				i._parentItem._childItems.forEach(function(item, index) {
					if (item.Pointer() == i.Pointer()) {
						return index
					}
				})
			}
			return 0
		}

		i.parentItem = function() {
			return i._parentItem
		}

		i.ConnectDestroyed(function(o) {
			i._childItems.forEach(function(c) {
				c.DeleteLater()
			})
			delete itemMap[i.Pointer()]
			i.DeleteLaterDefault()
		})

		itemMap[i.Pointer()] = i

		return i
	}



	var window = widgets.NewQMainWindow(nil, 0)
	window.SetMinimumSize2(250, 200)
	window.SetWindowTitle("treeview Example")

	var widget = widgets.NewQWidget(nil, 0)
	widget.SetLayout(widgets.NewQVBoxLayout())
	window.SetCentralWidget(widget)

	var treeview = widgets.NewQTreeView(nil)
	var model = core.NewQAbstractItemModel(treeview)
	model.ConnectDestroyed(function(o) {
		Object.keys(itemMap).forEach(function(key) {
			var item = itemMap[key]
			item._childItems = []
			item.DestroyQObject()
		})
	})

	var rootItem = NewTreeItem(["FirstName", "LastName"])
	rootItem.appendChild(NewTreeItem(["john", "doe"]))

	var firstChild = NewTreeItem(["john", "bob"])
	var secondChild = NewTreeItem(["jim", "bob"])
	var thirdChild = NewTreeItem(["jimmy", "bob"])

	firstChild.appendChild(secondChild)
	secondChild.appendChild(thirdChild)
	rootItem.appendChild(firstChild)

	model.ConnectIndex(function(row, column, parent) {
		if (!model.HasIndex(row, column, parent)) {
			return core.NewQModelIndex()
		}

		var parentItem;
		if (!parent.IsValid()) {
			parentItem = rootItem
		} else {
			parentItem = NewTreeItemFromPointer(parent.InternalPointer())
		}

		var childItem = parentItem.child(row).Pointer()
		if (childItem != nil) {
			return model.CreateIndex(row, column, childItem)
		}
		return core.NewQModelIndex()
	})


	model.ConnectParent(function(index) {
		if (!index.IsValid() || index.InternalPointer() == 0) {
			return core.NewQModelIndex()
		}

		var item = NewTreeItemFromPointer(index.InternalPointer())
		var parentItem = item.parentItem()

		if (parentItem.Pointer() == rootItem.Pointer()) {
			return core.NewQModelIndex()
		}

		return model.CreateIndex(parentItem.row(), 0, parentItem.Pointer())
	})


	model.ConnectHeaderData(function(section, orientation, role) {
		if (role == core.Qt__DisplayRole && orientation == core.Qt__Horizontal) {
			return core.NewQVariant1(rootItem.data(section))
		}
		return model.HeaderDataDefault(section, orientation, role)
	})

	model.ConnectRowCount(function(parent) {
		if (!parent.IsValid()) {
			return rootItem.childCount()
		}
		return NewTreeItemFromPointer(parent.InternalPointer()).childCount()
	})

	model.ConnectColumnCount(function(parent) {
		if (!parent.IsValid()) {
			return rootItem.columnCount()
		}
		return NewTreeItemFromPointer(parent.InternalPointer()).columnCount()
	})

	model.ConnectData(function(index, role) {
		if (!index.IsValid() || role != core.Qt__DisplayRole) {
			return core.NewQVariant()
		}

		var item = NewTreeItemFromPointer(index.InternalPointer())
		return core.NewQVariant1(item.data(index.Column()))
	})

	treeview.SetModel(model)
	widget.Layout().AddWidget(treeview)

	var remove = widgets.NewQPushButton2("remove last item", nil)
	remove.ConnectClicked(function(bool) {
		if (rootItem.childCount() == 0) {
			return
		}
		model.BeginRemoveRows(core.NewQModelIndex(),
			rootItem._childItems.length - 1,
			rootItem._childItems.length - 1)
		var item = rootItem._childItems.pop()
		item.DeleteLater()
		model.EndRemoveRows()
	})
	widget.Layout().AddWidget(remove)


	var add = widgets.NewQPushButton2("add new item", nil)
	add.ConnectClicked(function(bool) {
		model.BeginInsertRows(core.NewQModelIndex(),
			rootItem._childItems.length,
			rootItem._childItems.length)
		rootItem.appendChild(NewTreeItem(["john", "doe"]))
		model.EndInsertRows()

	})
	widget.Layout().AddWidget(add)

	var edit = widgets.NewQPushButton2("edit last item", nil)
	edit.ConnectClicked(function(bool) {
		if (rootItem.childCount() == 0) {
			return
		}
		var item = rootItem._childItems[rootItem._childItems.length - 1]
		item._itemData = ["bob", "omb"]
		model.DataChanged(model.Index(item.row(), 0, core.NewQModelIndex()),
			model.Index(item.row(), 1, core.NewQModelIndex()), [core.Qt__DisplayRole])
	})
	widget.Layout().AddWidget(edit)

	return window.Pointer()
})()