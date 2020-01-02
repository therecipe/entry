import QtQuick 2.10				//Item
import QtQuick.Controls 2.3		//Button
import QtQuick.Layouts 1.3		//ColumnLayout

Item {
	id: root

	anchors.fill: parent

	ColumnLayout {
		anchors.fill: parent

		Label {
			id: label1
			property var tick: 0
			text: tick + " " + Date.now().toString()
			Layout.alignment: Qt.AlignCenter
		}

		Label {
			id: label2
			property var tick: 0
			text: tick + " " + Date.now().toString()
			Layout.alignment: Qt.AlignCenter
		}

		Label {
			id: label3
			property var tick: 0
			text: tick + " " + Date.now().toString()
			Layout.alignment: Qt.AlignCenter
		}

		Button {
			Layout.fillWidth: true
			Layout.alignment: Qt.AlignBottom

			text: "start!"

			onClicked: {
				enabled = false
				var labels = [label1, label2, label3]
				for (var i = 0; i < 3; i++) {
					(function(i) { qt.setInterval(function() { labels[i].tick++ }, (i + 1) * 25, rootWindow) }(i))
				}
				//qt.inspect(rootWindow)
			}
		}
	}

	Component.onCompleted: if (isDeployed) { rootWindow.SetMinimumSize2(500, 500) }
}