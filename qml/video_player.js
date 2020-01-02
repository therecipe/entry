#!/usr/bin/env ../entry
//@ts-check
//port of: https://github.com/therecipe/qt/blob/master/internal/examples/widgets/video_player/video_player.go

/// <reference path="../tsd_full/core.d.ts" />				import github.com/therecipe/qt/core
/// <reference path="../tsd_full/widgets.d.ts" />			import github.com/therecipe/qt/widgets
/// <reference path="../tsd_full/multimedia.d.ts" />		import github.com/therecipe/qt/multimedia

var nil;
var isWinXP;
(function() {

	var videoPlayer = widgets.NewQWidget(nil, 0),
		videoWidget = multimedia.NewQVideoWidget(nil),
		mediaPlayer = multimedia.NewQMediaPlayer(videoWidget.QWidget_PTR(), multimedia.QMediaPlayer__VideoSurface),
		openButton = widgets.NewQPushButton2("Open...", nil)

	videoPlayer.SetMinimumSize2(200, 200)
	mediaPlayer.SetVideoOutput(videoWidget)

	openButton.ConnectClicked(function(bool) {
		errorLabel.SetText("")
		var fileName = widgets.QFileDialog_GetOpenFileName(nil, "Open Movie", core.QDir_HomePath(), "", "", 0)
		if (fileName != "") {
			mediaPlayer.SetMedia(multimedia.NewQMediaContent2(core.QUrl_FromLocalFile(fileName)), nil)
			playButton.SetEnabled(true)
		}
	})

	var playButton = widgets.NewQPushButton(nil)
	playButton.SetEnabled(false)
	playButton.SetIcon(videoPlayer.Style().StandardIcon(widgets.QStyle__SP_MediaPlay, nil, nil))
	playButton.ConnectClicked(function(bool) {
		switch (mediaPlayer.State()) {
			case multimedia.QMediaPlayer__PlayingState:
				mediaPlayer.Pause()
				break

			default:
				mediaPlayer.Play()
				videoWidget.QWidget_PTR().AdjustSize()
		}
	})

	var positionsSlider = widgets.NewQSlider2(core.Qt__Horizontal, nil)
	positionsSlider.SetRange(0, 0)
	positionsSlider.ConnectSliderMoved(function(position){
		mediaPlayer.SetPosition(position)
	})

	var errorLabel = widgets.NewQLabel(nil, 0)
	errorLabel.SetTextFormat(core.Qt__RichText)
	errorLabel.SetSizePolicy2(widgets.QSizePolicy__Preferred, widgets.QSizePolicy__Maximum)

	var controlLayout = widgets.NewQHBoxLayout()
	controlLayout.SetContentsMargins(0, 0, 0, 0)
	controlLayout.AddWidget(openButton, 0, 0)
	controlLayout.AddWidget(playButton, 0, 0)
	controlLayout.AddWidget(positionsSlider, 0, 0)

	var layout = widgets.NewQVBoxLayout2(videoPlayer)
	layout.AddWidget(videoWidget.QWidget_PTR(), 0, 0)
	layout.AddLayout(controlLayout, 0)
	layout.AddWidget(errorLabel, 0, 0)

	mediaPlayer.ConnectStateChanged(function(state) {
		switch (state) {
			case multimedia.QMediaPlayer__PlayingState:
				playButton.SetIcon(videoPlayer.Style().StandardIcon(widgets.QStyle__SP_MediaPause, nil, nil))
				break

			default:
				playButton.SetIcon(videoPlayer.Style().StandardIcon(widgets.QStyle__SP_MediaPlay, nil, nil))
		}
	})
	mediaPlayer.ConnectPositionChanged(function(position){
		positionsSlider.SetValue(position)
	})
	mediaPlayer.ConnectDurationChanged(function(duration) {
		positionsSlider.SetRange(0, duration)
	})

	var hasSupport = function(mimeType) {
		if (multimedia.QMediaPlayer_HasSupport(mimeType, nil, 0) >= multimedia.QMultimedia__MaybeSupported) {
			return mimeType + "=<font color=\"green\">true</font>"
		}
		return mimeType + "=<font color=\"red\">false</font>"
	}

	mediaPlayer.ConnectError2(function(err) {
		playButton.SetEnabled(false)

		var errString = mediaPlayer.ErrorString()
		if (errString == "") {
			switch (err) {
				case multimedia.QMediaPlayer__NoError:
					errString = "QMediaPlayer::NoError"
					break

				case multimedia.QMediaPlayer__ResourceError:
					errString = "QMediaPlayer::ResourceError"
					break

				case multimedia.QMediaPlayer__FormatError:
					errString = "QMediaPlayer::FormatError"
					break

				case multimedia.QMediaPlayer__NetworkError:
					errString = "QMediaPlayer::NetworkError"
					break

				case multimedia.QMediaPlayer__AccessDeniedError:
					errString = "QMediaPlayer::AccessDeniedError"
					break

				case multimedia.QMediaPlayer__ServiceMissingError:
					errString = "QMediaPlayer::ServiceMissingError"
					break
			}
		}

		errorLabel.SetText(
			"File: " + mediaPlayer.CurrentMedia().CanonicalUrl().ToString(0) +
			"<br>Error: " + errString +
			"<br>Supported MIME-Types: " +
			hasSupport("video/avi") + " " +
			hasSupport("video/mp4") + " " +
			hasSupport("video/x-flv") + " " +
			hasSupport("video/3gpp") + " " +
			hasSupport("video/x-ms-wmv") + " " +
			hasSupport("video/x-matroska")
		)
	})

	if (!isWinXP) {
		//TODO:
		mediaPlayer.ConnectDestroyQMediaPlayer(function() {
			mediaPlayer.DisconnectDestroyed()
		})
	}

	return videoPlayer.Pointer()
})()