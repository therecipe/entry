import QtQuick 2.0
import QtQuick.Controls 2.0

Item {
	anchors.fill: parent
	id: rootItem
	Button {
		text: "Dynamic Qml"

		anchors {
			top: parent.top
			left: parent.left
			right: parent.right
		}

		onClicked: Qt.createQmlObject('import QtQuick 2.0; Rectangle {color: "blue"; anchors.centerIn: rootItem; width: 50; height: 50}', rootItem, "dynamicSnippet1")
	}

	Button {
		text: "Dynamic Widgets"

		anchors {
			left: parent.left
			right: parent.right
			bottom: parent.bottom
		}

		onClicked: {
			var window = widgets.NewQMainWindow()
			window.SetWindowTitle("some dynamic window")
			var pb = widgets.NewQPushButton2("some push button")
			pb.ConnectClicked(function(){window.Hide()})
			window.SetCentralWidget(pb)
			window.Show()

			rootWindow.ConnectDestroyed(function(o){ window.DestroyQMainWindow() })
		}
	}

	Component.onCompleted: if (isDeployed) { rootWindow.SetMinimumSize2(500, 500) }
}