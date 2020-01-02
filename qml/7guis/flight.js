#!/usr/bin/env ../../entry
//@ts-check
//port of: https://eugenkiss.github.io/7guis/tasks/#flight

/// <reference path="../../tsd_full/widgets.d.ts" />	import github.com/therecipe/qt/widgets

var nil;
(function() {

	var formatedDate = function() {
		var date = new Date()
		var day = date.getDate();
		if (day < 10) {
			day = "0" + day
		}
		var month = date.getMonth() + 1;
		if (month < 10) {
			month = "0" + month
		}
		return day + "." + month + "." + date.getFullYear()
	}

	var parseDate = function(date) {
		var bits = date.split(".")
		return new Date(bits[2], bits[1] - 1, bits[0])
	}

	var checkDate = function(date) {
		var bits = date.split(".")
		var d = new Date(bits[2], bits[1] - 1, bits[0])
		return d && d.getFullYear() == bits[2] && (d.getMonth() + 1) == bits[1] && d.getDate() == bits[0] && bits[2].length == 4 && bits[1].length == 2 && bits[0].length == 2
	}

	var window = widgets.NewQWidget(nil, 0),
		layout = widgets.NewQVBoxLayout2(window)

	window.SetWindowTitle("Book Flight")

	var comboBox = widgets.NewQComboBox(nil),
		arrival = widgets.NewQLineEdit2(formatedDate(), nil),
		depature = widgets.NewQLineEdit2(formatedDate(), nil),
		book = widgets.NewQPushButton2("Book", nil)

	layout.AddWidget(comboBox, 0, 0)
	layout.AddWidget(arrival, 0, 0)
	layout.AddWidget(depature, 0, 0)
	layout.AddWidget(book, 0, 0)

	comboBox.AddItems(["one-way flight", "return flight"])
	comboBox.ConnectCurrentIndexChanged(function(index) {
		depature.SetEnabled(index != 0)

		arrival.TextEdited(arrival.Text())
		depature.TextEdited(depature.Text())
	})
	comboBox.CurrentIndexChanged(0)

	arrival.ConnectTextEdited(function(text) {
		arrival.SetStyleSheet(checkDate(text) ? "" : "QLineEdit { background: red; }")
		handleBookButton()
	})

	depature.ConnectTextEdited(function(text) {
		depature.SetStyleSheet(checkDate(text) || !depature.IsEnabled() ? "" : "QLineEdit { background: red; }")
		handleBookButton()
	})

	var handleBookButton = function() {
		switch (comboBox.CurrentIndex()) {
			case 0:
				book.SetEnabled(checkDate(arrival.Text()))
				break
			case 1:
				book.SetEnabled((checkDate(arrival.Text()) && checkDate(depature.Text())) && parseDate(arrival.Text()) <= parseDate(depature.Text()))
				break
		}
	}

	book.ConnectClicked(function(bool) {
		var msg = "You have booked a " + comboBox.CurrentText()
		if (comboBox.CurrentIndex() == 0) {
			msg += " on " + arrival.Text()
		} else {
			msg += " from " + arrival.Text()
			msg += " to " + depature.Text()
		}
		widgets.QMessageBox_Information(window, "Booking Confirmation", msg, 0, 0);
	})

	return window.Pointer()
})()