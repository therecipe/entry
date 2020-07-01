/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="network.d.ts" />
/// <reference path="widgets.d.ts" />
declare namespace multimedia {
	interface QAbstractVideoBuffer_ITF {
		QAbstractVideoBuffer_PTR():QAbstractVideoBuffer;
	}

	class QAbstractVideoBuffer {
		___pointer: number;
		QAbstractVideoBuffer_PTR():QAbstractVideoBuffer;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectMap(f:(mode:number,numBytes:number,bytesPerLine:number)=>string):void;
		DisconnectMap():void;
		Map(mode:number,numBytes:number,bytesPerLine:number):string;
		ConnectMapMode(f:()=>number):void;
		DisconnectMapMode():void;
		MapMode():number;
		ConnectUnmap(f:()=>void):void;
		DisconnectUnmap():void;
		Unmap():void;
		ConnectDestroyQAbstractVideoBuffer(f:()=>void):void;
		DisconnectDestroyQAbstractVideoBuffer():void;
		DestroyQAbstractVideoBuffer():void;
		DestroyQAbstractVideoBufferDefault():void;
	}
	function NewQAbstractVideoBufferFromPointer(ptr:number):QAbstractVideoBuffer;
	function NewQAbstractVideoBuffer(ty:number):QAbstractVideoBuffer;
	const QAbstractVideoBuffer__NotMapped: number;
	const QAbstractVideoBuffer__ReadOnly: number;
	const QAbstractVideoBuffer__WriteOnly: number;
	const QAbstractVideoBuffer__ReadWrite: number;
	const QAbstractVideoBuffer__NoHandle: number;
	const QAbstractVideoBuffer__GLTextureHandle: number;
	const QAbstractVideoBuffer__XvShmImageHandle: number;
	const QAbstractVideoBuffer__CoreImageHandle: number;
	const QAbstractVideoBuffer__QPixmapHandle: number;
	const QAbstractVideoBuffer__EGLImageHandle: number;
	const QAbstractVideoBuffer__UserHandle: number;
	interface QAbstractVideoSurface_ITF extends core.QObject_ITF {
		QAbstractVideoSurface_PTR():QAbstractVideoSurface;
	}

	class QAbstractVideoSurface extends core.QObject {
		___pointer: number;
		QAbstractVideoSurface_PTR():QAbstractVideoSurface;
		Pointer():number;
		SetPointer(p:number):void;
		Error():number;
		ConnectPresent(f:(frame:QVideoFrame)=>boolean):void;
		DisconnectPresent():void;
		Present(frame:QVideoFrame_ITF):boolean;
		ConnectStart(f:(format:QVideoSurfaceFormat)=>boolean):void;
		DisconnectStart():void;
		Start(format:QVideoSurfaceFormat_ITF):boolean;
		StartDefault(format:QVideoSurfaceFormat_ITF):boolean;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		ConnectSupportedPixelFormats(f:(ty:number)=>number):void;
		DisconnectSupportedPixelFormats():void;
		SupportedPixelFormats(ty:number):number;
		ConnectDestroyQAbstractVideoSurface(f:()=>void):void;
		DisconnectDestroyQAbstractVideoSurface():void;
		DestroyQAbstractVideoSurface():void;
		DestroyQAbstractVideoSurfaceDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAbstractVideoSurfaceFromPointer(ptr:number):QAbstractVideoSurface;
	function NewQAbstractVideoSurface(parent:core.QObject_ITF):QAbstractVideoSurface;
	const QAbstractVideoSurface__NoError: number;
	const QAbstractVideoSurface__UnsupportedFormatError: number;
	const QAbstractVideoSurface__IncorrectFormatError: number;
	const QAbstractVideoSurface__StoppedError: number;
	const QAbstractVideoSurface__ResourceError: number;
	const QAudio__NoError: number;
	const QAudio__OpenError: number;
	const QAudio__IOError: number;
	const QAudio__UnderrunError: number;
	const QAudio__FatalError: number;
	const QAudio__ActiveState: number;
	const QAudio__SuspendedState: number;
	const QAudio__StoppedState: number;
	const QAudio__IdleState: number;
	const QAudio__InterruptedState: number;
	const QAudio__AudioInput: number;
	const QAudio__AudioOutput: number;
	const QAudio__UnknownRole: number;
	const QAudio__MusicRole: number;
	const QAudio__VideoRole: number;
	const QAudio__VoiceCommunicationRole: number;
	const QAudio__AlarmRole: number;
	const QAudio__NotificationRole: number;
	const QAudio__RingtoneRole: number;
	const QAudio__AccessibilityRole: number;
	const QAudio__SonificationRole: number;
	const QAudio__GameRole: number;
	const QAudio__CustomRole: number;
	const QAudio__LinearVolumeScale: number;
	const QAudio__CubicVolumeScale: number;
	const QAudio__LogarithmicVolumeScale: number;
	const QAudio__DecibelVolumeScale: number;
	const QAudioDecoder__StoppedState: number;
	const QAudioDecoder__DecodingState: number;
	const QAudioDecoder__NoError: number;
	const QAudioDecoder__ResourceError: number;
	const QAudioDecoder__FormatError: number;
	const QAudioDecoder__AccessDeniedError: number;
	const QAudioDecoder__ServiceMissingError: number;
	const QAudioFormat__Unknown: number;
	const QAudioFormat__SignedInt: number;
	const QAudioFormat__UnSignedInt: number;
	const QAudioFormat__Float: number;
	const QAudioFormat__BigEndian: number;
	const QAudioFormat__LittleEndian: number;
	const QCamera__UnavailableStatus: number;
	const QCamera__UnloadedStatus: number;
	const QCamera__LoadingStatus: number;
	const QCamera__UnloadingStatus: number;
	const QCamera__LoadedStatus: number;
	const QCamera__StandbyStatus: number;
	const QCamera__StartingStatus: number;
	const QCamera__StoppingStatus: number;
	const QCamera__ActiveStatus: number;
	const QCamera__UnloadedState: number;
	const QCamera__LoadedState: number;
	const QCamera__ActiveState: number;
	const QCamera__CaptureViewfinder: number;
	const QCamera__CaptureStillImage: number;
	const QCamera__CaptureVideo: number;
	const QCamera__NoError: number;
	const QCamera__CameraError: number;
	const QCamera__InvalidRequestError: number;
	const QCamera__ServiceMissingError: number;
	const QCamera__NotSupportedFeatureError: number;
	const QCamera__Unlocked: number;
	const QCamera__Searching: number;
	const QCamera__Locked: number;
	const QCamera__UserRequest: number;
	const QCamera__LockAcquired: number;
	const QCamera__LockFailed: number;
	const QCamera__LockLost: number;
	const QCamera__LockTemporaryLost: number;
	const QCamera__NoLock: number;
	const QCamera__LockExposure: number;
	const QCamera__LockWhiteBalance: number;
	const QCamera__LockFocus: number;
	const QCamera__UnspecifiedPosition: number;
	const QCamera__BackFace: number;
	const QCamera__FrontFace: number;
	const QCameraControl__CaptureMode: number;
	const QCameraControl__ImageEncodingSettings: number;
	const QCameraControl__VideoEncodingSettings: number;
	const QCameraControl__Viewfinder: number;
	const QCameraControl__ViewfinderSettings: number;
	const QCameraExposure__FlashAuto: number;
	const QCameraExposure__FlashOff: number;
	const QCameraExposure__FlashOn: number;
	const QCameraExposure__FlashRedEyeReduction: number;
	const QCameraExposure__FlashFill: number;
	const QCameraExposure__FlashTorch: number;
	const QCameraExposure__FlashVideoLight: number;
	const QCameraExposure__FlashSlowSyncFrontCurtain: number;
	const QCameraExposure__FlashSlowSyncRearCurtain: number;
	const QCameraExposure__FlashManual: number;
	const QCameraExposure__ExposureAuto: number;
	const QCameraExposure__ExposureManual: number;
	const QCameraExposure__ExposurePortrait: number;
	const QCameraExposure__ExposureNight: number;
	const QCameraExposure__ExposureBacklight: number;
	const QCameraExposure__ExposureSpotlight: number;
	const QCameraExposure__ExposureSports: number;
	const QCameraExposure__ExposureSnow: number;
	const QCameraExposure__ExposureBeach: number;
	const QCameraExposure__ExposureLargeAperture: number;
	const QCameraExposure__ExposureSmallAperture: number;
	const QCameraExposure__ExposureAction: number;
	const QCameraExposure__ExposureLandscape: number;
	const QCameraExposure__ExposureNightPortrait: number;
	const QCameraExposure__ExposureTheatre: number;
	const QCameraExposure__ExposureSunset: number;
	const QCameraExposure__ExposureSteadyPhoto: number;
	const QCameraExposure__ExposureFireworks: number;
	const QCameraExposure__ExposureParty: number;
	const QCameraExposure__ExposureCandlelight: number;
	const QCameraExposure__ExposureBarcode: number;
	const QCameraExposure__ExposureModeVendor: number;
	const QCameraExposure__MeteringMatrix: number;
	const QCameraExposure__MeteringAverage: number;
	const QCameraExposure__MeteringSpot: number;
	const QCameraExposureControl__ISO: number;
	const QCameraExposureControl__Aperture: number;
	const QCameraExposureControl__ShutterSpeed: number;
	const QCameraExposureControl__ExposureCompensation: number;
	const QCameraExposureControl__FlashPower: number;
	const QCameraExposureControl__FlashCompensation: number;
	const QCameraExposureControl__TorchPower: number;
	const QCameraExposureControl__SpotMeteringPoint: number;
	const QCameraExposureControl__ExposureMode: number;
	const QCameraExposureControl__MeteringMode: number;
	const QCameraExposureControl__ExtendedExposureParameter: number;
	const QCameraFeedbackControl__ViewfinderStarted: number;
	const QCameraFeedbackControl__ViewfinderStopped: number;
	const QCameraFeedbackControl__ImageCaptured: number;
	const QCameraFeedbackControl__ImageSaved: number;
	const QCameraFeedbackControl__ImageError: number;
	const QCameraFeedbackControl__RecordingStarted: number;
	const QCameraFeedbackControl__RecordingInProgress: number;
	const QCameraFeedbackControl__RecordingStopped: number;
	const QCameraFeedbackControl__AutoFocusInProgress: number;
	const QCameraFeedbackControl__AutoFocusLocked: number;
	const QCameraFeedbackControl__AutoFocusFailed: number;
	const QCameraFocus__ManualFocus: number;
	const QCameraFocus__HyperfocalFocus: number;
	const QCameraFocus__InfinityFocus: number;
	const QCameraFocus__AutoFocus: number;
	const QCameraFocus__ContinuousFocus: number;
	const QCameraFocus__MacroFocus: number;
	const QCameraFocus__FocusPointAuto: number;
	const QCameraFocus__FocusPointCenter: number;
	const QCameraFocus__FocusPointFaceDetection: number;
	const QCameraFocus__FocusPointCustom: number;
	const QCameraFocusZone__Invalid: number;
	const QCameraFocusZone__Unused: number;
	const QCameraFocusZone__Selected: number;
	const QCameraFocusZone__Focused: number;
	const QCameraImageCapture__NoError: number;
	const QCameraImageCapture__NotReadyError: number;
	const QCameraImageCapture__ResourceError: number;
	const QCameraImageCapture__OutOfSpaceError: number;
	const QCameraImageCapture__NotSupportedFeatureError: number;
	const QCameraImageCapture__FormatError: number;
	const QCameraImageCapture__SingleImageCapture: number;
	const QCameraImageCapture__CaptureToFile: number;
	const QCameraImageCapture__CaptureToBuffer: number;
	const QCameraImageProcessing__WhiteBalanceAuto: number;
	const QCameraImageProcessing__WhiteBalanceManual: number;
	const QCameraImageProcessing__WhiteBalanceSunlight: number;
	const QCameraImageProcessing__WhiteBalanceCloudy: number;
	const QCameraImageProcessing__WhiteBalanceShade: number;
	const QCameraImageProcessing__WhiteBalanceTungsten: number;
	const QCameraImageProcessing__WhiteBalanceFluorescent: number;
	const QCameraImageProcessing__WhiteBalanceFlash: number;
	const QCameraImageProcessing__WhiteBalanceSunset: number;
	const QCameraImageProcessing__WhiteBalanceVendor: number;
	const QCameraImageProcessing__ColorFilterNone: number;
	const QCameraImageProcessing__ColorFilterGrayscale: number;
	const QCameraImageProcessing__ColorFilterNegative: number;
	const QCameraImageProcessing__ColorFilterSolarize: number;
	const QCameraImageProcessing__ColorFilterSepia: number;
	const QCameraImageProcessing__ColorFilterPosterize: number;
	const QCameraImageProcessing__ColorFilterWhiteboard: number;
	const QCameraImageProcessing__ColorFilterBlackboard: number;
	const QCameraImageProcessing__ColorFilterAqua: number;
	const QCameraImageProcessing__ColorFilterVendor: number;
	const QCameraImageProcessingControl__WhiteBalancePreset: number;
	const QCameraImageProcessingControl__ColorTemperature: number;
	const QCameraImageProcessingControl__Contrast: number;
	const QCameraImageProcessingControl__Saturation: number;
	const QCameraImageProcessingControl__Brightness: number;
	const QCameraImageProcessingControl__Sharpening: number;
	const QCameraImageProcessingControl__Denoising: number;
	const QCameraImageProcessingControl__ContrastAdjustment: number;
	const QCameraImageProcessingControl__SaturationAdjustment: number;
	const QCameraImageProcessingControl__BrightnessAdjustment: number;
	const QCameraImageProcessingControl__SharpeningAdjustment: number;
	const QCameraImageProcessingControl__DenoisingAdjustment: number;
	const QCameraImageProcessingControl__ColorFilter: number;
	const QCameraImageProcessingControl__ExtendedParameter: number;
	const QCameraViewfinderSettingsControl__Resolution: number;
	const QCameraViewfinderSettingsControl__PixelAspectRatio: number;
	const QCameraViewfinderSettingsControl__MinimumFrameRate: number;
	const QCameraViewfinderSettingsControl__MaximumFrameRate: number;
	const QCameraViewfinderSettingsControl__PixelFormat: number;
	const QCameraViewfinderSettingsControl__UserParameter: number;
	interface QMediaBindableInterface_ITF {
		QMediaBindableInterface_PTR():QMediaBindableInterface;
	}

	class QMediaBindableInterface {
		___pointer: number;
		QMediaBindableInterface_PTR():QMediaBindableInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectMediaObject(f:()=>QMediaObject):void;
		DisconnectMediaObject():void;
		MediaObject():QMediaObject;
		ConnectSetMediaObject(f:(object:QMediaObject)=>boolean):void;
		DisconnectSetMediaObject():void;
		SetMediaObject(object:QMediaObject_ITF):boolean;
		ConnectDestroyQMediaBindableInterface(f:()=>void):void;
		DisconnectDestroyQMediaBindableInterface():void;
		DestroyQMediaBindableInterface():void;
		DestroyQMediaBindableInterfaceDefault():void;
	}
	function NewQMediaBindableInterfaceFromPointer(ptr:number):QMediaBindableInterface;
	interface QMediaContent_ITF {
		QMediaContent_PTR():QMediaContent;
	}

	class QMediaContent {
		___pointer: number;
		QMediaContent_PTR():QMediaContent;
		Pointer():number;
		SetPointer(p:number):void;
		CanonicalUrl():core.QUrl;
		DestroyQMediaContent():void;
	}
	function NewQMediaContentFromPointer(ptr:number):QMediaContent;
	function NewQMediaContent():QMediaContent;
	function NewQMediaContent2(url:core.QUrl_ITF):QMediaContent;
	function NewQMediaContent3(request:network.QNetworkRequest_ITF):QMediaContent;
	function NewQMediaContent6(other:QMediaContent_ITF):QMediaContent;
	function NewQMediaContent7(playlist:QMediaPlaylist_ITF,contentUrl:core.QUrl_ITF,takeOwnership:boolean):QMediaContent;
	interface QMediaControl_ITF extends core.QObject_ITF {
		QMediaControl_PTR():QMediaControl;
	}

	class QMediaControl extends core.QObject {
		___pointer: number;
		QMediaControl_PTR():QMediaControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQMediaControl(f:()=>void):void;
		DisconnectDestroyQMediaControl():void;
		DestroyQMediaControl():void;
		DestroyQMediaControlDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQMediaControlFromPointer(ptr:number):QMediaControl;
	function NewQMediaControl(parent:core.QObject_ITF):QMediaControl;
	interface QMediaObject_ITF extends core.QObject_ITF {
		QMediaObject_PTR():QMediaObject;
	}

	class QMediaObject extends core.QObject {
		___pointer: number;
		QMediaObject_PTR():QMediaObject;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectService(f:()=>QMediaService):void;
		DisconnectService():void;
		Service():QMediaService;
		ServiceDefault():QMediaService;
		ConnectDestroyQMediaObject(f:()=>void):void;
		DisconnectDestroyQMediaObject():void;
		DestroyQMediaObject():void;
		DestroyQMediaObjectDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQMediaObjectFromPointer(ptr:number):QMediaObject;
	function NewQMediaObject(parent:core.QObject_ITF,service:QMediaService_ITF):QMediaObject;
	interface QMediaPlayer_ITF extends QMediaObject_ITF {
		QMediaPlayer_PTR():QMediaPlayer;
	}

	class QMediaPlayer extends QMediaObject {
		___pointer: number;
		QMediaPlayer_PTR():QMediaPlayer;
		Pointer():number;
		SetPointer(p:number):void;
		CurrentMedia():QMediaContent;
		Duration():number;
		ConnectDurationChanged(f:(duration:number)=>void):void;
		DisconnectDurationChanged():void;
		DurationChanged(duration:number):void;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ErrorString():string;
		HasSupport(mimeType:string,codecs:string[],flags:number):number;
		Media():QMediaContent;
		ConnectPause(f:()=>void):void;
		DisconnectPause():void;
		Pause():void;
		PauseDefault():void;
		ConnectPlay(f:()=>void):void;
		DisconnectPlay():void;
		Play():void;
		PlayDefault():void;
		Position():number;
		ConnectPositionChanged(f:(position:number)=>void):void;
		DisconnectPositionChanged():void;
		PositionChanged(position:number):void;
		ConnectSetMedia(f:(media:QMediaContent,stream:core.QIODevice)=>void):void;
		DisconnectSetMedia():void;
		SetMedia(media:QMediaContent_ITF,stream:core.QIODevice_ITF):void;
		SetMediaDefault(media:QMediaContent_ITF,stream:core.QIODevice_ITF):void;
		ConnectSetPosition(f:(position:number)=>void):void;
		DisconnectSetPosition():void;
		SetPosition(position:number):void;
		SetPositionDefault(position:number):void;
		SetVideoOutput(output:QVideoWidget_ITF):void;
		SetVideoOutput3(surface:QAbstractVideoSurface_ITF):void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		ConnectDestroyQMediaPlayer(f:()=>void):void;
		DisconnectDestroyQMediaPlayer():void;
		DestroyQMediaPlayer():void;
		DestroyQMediaPlayerDefault():void;
	}
	function NewQMediaPlayerFromPointer(ptr:number):QMediaPlayer;
	function NewQMediaPlayer(parent:core.QObject_ITF,flags:number):QMediaPlayer;
	function QMediaPlayer_HasSupport(mimeType:string,codecs:string[],flags:number):number;
	const QMediaPlayer__UnknownMediaStatus: number;
	const QMediaPlayer__NoMedia: number;
	const QMediaPlayer__LoadingMedia: number;
	const QMediaPlayer__LoadedMedia: number;
	const QMediaPlayer__StalledMedia: number;
	const QMediaPlayer__BufferingMedia: number;
	const QMediaPlayer__BufferedMedia: number;
	const QMediaPlayer__EndOfMedia: number;
	const QMediaPlayer__InvalidMedia: number;
	const QMediaPlayer__LowLatency: number;
	const QMediaPlayer__StreamPlayback: number;
	const QMediaPlayer__VideoSurface: number;
	const QMediaPlayer__NoError: number;
	const QMediaPlayer__ResourceError: number;
	const QMediaPlayer__FormatError: number;
	const QMediaPlayer__NetworkError: number;
	const QMediaPlayer__AccessDeniedError: number;
	const QMediaPlayer__ServiceMissingError: number;
	const QMediaPlayer__MediaIsPlaylist: number;
	const QMediaPlayer__StoppedState: number;
	const QMediaPlayer__PlayingState: number;
	const QMediaPlayer__PausedState: number;
	interface QMediaPlaylist_ITF extends QMediaBindableInterface_ITF {
		QMediaPlaylist_PTR():QMediaPlaylist;
		QObject_PTR():core.QObject;
	}

	class QMediaPlaylist extends QMediaBindableInterface {
		QObject_PTR():core.QObject
		___pointer: number;
		QMediaPlaylist_PTR():QMediaPlaylist;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():boolean;
		CurrentIndex():number;
		ConnectCurrentIndexChanged(f:(position:number)=>void):void;
		DisconnectCurrentIndexChanged():void;
		CurrentIndexChanged(position:number):void;
		CurrentMedia():QMediaContent;
		Error():number;
		ErrorString():string;
		IsEmpty():boolean;
		Media(index:number):QMediaContent;
		ConnectPrevious(f:()=>void):void;
		DisconnectPrevious():void;
		Previous():void;
		PreviousDefault():void;
		Save(location:core.QUrl_ITF,format:string):boolean;
		Save2(device:core.QIODevice_ITF,format:string):boolean;
		ConnectSetCurrentIndex(f:(playlistPosition:number)=>void):void;
		DisconnectSetCurrentIndex():void;
		SetCurrentIndex(playlistPosition:number):void;
		SetCurrentIndexDefault(playlistPosition:number):void;
		ConnectDestroyQMediaPlaylist(f:()=>void):void;
		DisconnectDestroyQMediaPlaylist():void;
		DestroyQMediaPlaylist():void;
		DestroyQMediaPlaylistDefault():void;
		ChildEvent(event:core.QChildEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotify(sign:core.QMetaMethod_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEvent(event:core.QEvent_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLater():void;
		DeleteLaterDefault():void;
		DisconnectNotify(sign:core.QMetaMethod_ITF):void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		Event(e:core.QEvent_ITF):boolean;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilter(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
		MediaObject():QMediaObject;
		MediaObjectDefault():QMediaObject;
		SetMediaObject(object:QMediaObject_ITF):boolean;
		SetMediaObjectDefault(object:QMediaObject_ITF):boolean;
	}
	function NewQMediaPlaylistFromPointer(ptr:number):QMediaPlaylist;
	function NewQMediaPlaylist(parent:core.QObject_ITF):QMediaPlaylist;
	const QMediaPlaylist__CurrentItemOnce: number;
	const QMediaPlaylist__CurrentItemInLoop: number;
	const QMediaPlaylist__Sequential: number;
	const QMediaPlaylist__Loop: number;
	const QMediaPlaylist__Random: number;
	const QMediaPlaylist__NoError: number;
	const QMediaPlaylist__FormatError: number;
	const QMediaPlaylist__FormatNotSupportedError: number;
	const QMediaPlaylist__NetworkError: number;
	const QMediaPlaylist__AccessDeniedError: number;
	const QMediaRecorder__UnavailableStatus: number;
	const QMediaRecorder__UnloadedStatus: number;
	const QMediaRecorder__LoadingStatus: number;
	const QMediaRecorder__LoadedStatus: number;
	const QMediaRecorder__StartingStatus: number;
	const QMediaRecorder__RecordingStatus: number;
	const QMediaRecorder__PausedStatus: number;
	const QMediaRecorder__FinalizingStatus: number;
	const QMediaRecorder__NoError: number;
	const QMediaRecorder__ResourceError: number;
	const QMediaRecorder__FormatError: number;
	const QMediaRecorder__OutOfSpaceError: number;
	const QMediaRecorder__StoppedState: number;
	const QMediaRecorder__RecordingState: number;
	const QMediaRecorder__PausedState: number;
	interface QMediaResource_ITF {
		QMediaResource_PTR():QMediaResource;
	}

	class QMediaResource {
		___pointer: number;
		QMediaResource_PTR():QMediaResource;
		Pointer():number;
		SetPointer(p:number):void;
		Resolution():core.QSize;
		Url():core.QUrl;
		DestroyQMediaResource():void;
	}
	function NewQMediaResourceFromPointer(ptr:number):QMediaResource;
	function NewQMediaResource():QMediaResource;
	function NewQMediaResource2(url:core.QUrl_ITF,mimeType:string):QMediaResource;
	function NewQMediaResource3(request:network.QNetworkRequest_ITF,mimeType:string):QMediaResource;
	function NewQMediaResource4(other:QMediaResource_ITF):QMediaResource;
	interface QMediaService_ITF extends core.QObject_ITF {
		QMediaService_PTR():QMediaService;
	}

	class QMediaService extends core.QObject {
		___pointer: number;
		QMediaService_PTR():QMediaService;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectReleaseControl(f:(control:QMediaControl)=>void):void;
		DisconnectReleaseControl():void;
		ReleaseControl(control:QMediaControl_ITF):void;
		ConnectRequestControl(f:(interfa:string)=>QMediaControl):void;
		DisconnectRequestControl():void;
		RequestControl(interfa:string):QMediaControl;
		RequestControl2():QMediaService;
		ConnectDestroyQMediaService(f:()=>void):void;
		DisconnectDestroyQMediaService():void;
		DestroyQMediaService():void;
		DestroyQMediaServiceDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQMediaServiceFromPointer(ptr:number):QMediaService;
	function NewQMediaService(parent:core.QObject_ITF):QMediaService;
	const QMediaStreamsControl__UnknownStream: number;
	const QMediaStreamsControl__VideoStream: number;
	const QMediaStreamsControl__AudioStream: number;
	const QMediaStreamsControl__SubPictureStream: number;
	const QMediaStreamsControl__DataStream: number;
	interface QMultimedia_ITF {
		QMultimedia_PTR():QMultimedia;
	}

	class QMultimedia {
		___pointer: number;
		QMultimedia_PTR():QMultimedia;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMultimedia():void;
	}
	function NewQMultimediaFromPointer(ptr:number):QMultimedia;
	const QMultimedia__NotSupported: number;
	const QMultimedia__MaybeSupported: number;
	const QMultimedia__ProbablySupported: number;
	const QMultimedia__PreferredService: number;
	const QMultimedia__Available: number;
	const QMultimedia__ServiceMissing: number;
	const QMultimedia__Busy: number;
	const QMultimedia__ResourceError: number;
	const QMultimedia__ConstantQualityEncoding: number;
	const QMultimedia__ConstantBitRateEncoding: number;
	const QMultimedia__AverageBitRateEncoding: number;
	const QMultimedia__TwoPassEncoding: number;
	const QMultimedia__VeryLowQuality: number;
	const QMultimedia__LowQuality: number;
	const QMultimedia__NormalQuality: number;
	const QMultimedia__HighQuality: number;
	const QMultimedia__VeryHighQuality: number;
	const QRadioData__NoError: number;
	const QRadioData__ResourceError: number;
	const QRadioData__OpenError: number;
	const QRadioData__OutOfRangeError: number;
	const QRadioData__Undefined: number;
	const QRadioData__News: number;
	const QRadioData__CurrentAffairs: number;
	const QRadioData__Information: number;
	const QRadioData__Sport: number;
	const QRadioData__Education: number;
	const QRadioData__Drama: number;
	const QRadioData__Culture: number;
	const QRadioData__Science: number;
	const QRadioData__Varied: number;
	const QRadioData__PopMusic: number;
	const QRadioData__RockMusic: number;
	const QRadioData__EasyListening: number;
	const QRadioData__LightClassical: number;
	const QRadioData__SeriousClassical: number;
	const QRadioData__OtherMusic: number;
	const QRadioData__Weather: number;
	const QRadioData__Finance: number;
	const QRadioData__ChildrensProgrammes: number;
	const QRadioData__SocialAffairs: number;
	const QRadioData__Religion: number;
	const QRadioData__PhoneIn: number;
	const QRadioData__Travel: number;
	const QRadioData__Leisure: number;
	const QRadioData__JazzMusic: number;
	const QRadioData__CountryMusic: number;
	const QRadioData__NationalMusic: number;
	const QRadioData__OldiesMusic: number;
	const QRadioData__FolkMusic: number;
	const QRadioData__Documentary: number;
	const QRadioData__AlarmTest: number;
	const QRadioData__Alarm: number;
	const QRadioData__Talk: number;
	const QRadioData__ClassicRock: number;
	const QRadioData__AdultHits: number;
	const QRadioData__SoftRock: number;
	const QRadioData__Top40: number;
	const QRadioData__Soft: number;
	const QRadioData__Nostalgia: number;
	const QRadioData__Classical: number;
	const QRadioData__RhythmAndBlues: number;
	const QRadioData__SoftRhythmAndBlues: number;
	const QRadioData__Language: number;
	const QRadioData__ReligiousMusic: number;
	const QRadioData__ReligiousTalk: number;
	const QRadioData__Personality: number;
	const QRadioData__Public: number;
	const QRadioData__College: number;
	const QRadioTuner__AM: number;
	const QRadioTuner__FM: number;
	const QRadioTuner__SW: number;
	const QRadioTuner__LW: number;
	const QRadioTuner__FM2: number;
	const QRadioTuner__NoError: number;
	const QRadioTuner__ResourceError: number;
	const QRadioTuner__OpenError: number;
	const QRadioTuner__OutOfRangeError: number;
	const QRadioTuner__ForceStereo: number;
	const QRadioTuner__ForceMono: number;
	const QRadioTuner__Auto: number;
	const QRadioTuner__SearchFast: number;
	const QRadioTuner__SearchGetStationId: number;
	const QRadioTuner__ActiveState: number;
	const QRadioTuner__StoppedState: number;
	const QSound__Infinite: number;
	const QSoundEffect__Infinite: number;
	const QSoundEffect__Null: number;
	const QSoundEffect__Loading: number;
	const QSoundEffect__Ready: number;
	const QSoundEffect__Error: number;
	const QVideoFilterRunnable__LastInChain: number;
	interface QVideoFrame_ITF {
		QVideoFrame_PTR():QVideoFrame;
	}

	class QVideoFrame {
		___pointer: number;
		QVideoFrame_PTR():QVideoFrame;
		Pointer():number;
		SetPointer(p:number):void;
		Buffer():QAbstractVideoBuffer;
		Height():number;
		IsValid():boolean;
		Map(mode:number):boolean;
		Size():core.QSize;
		Width():number;
		DestroyQVideoFrame():void;
	}
	function NewQVideoFrameFromPointer(ptr:number):QVideoFrame;
	function NewQVideoFrame():QVideoFrame;
	function NewQVideoFrame2(buffer:QAbstractVideoBuffer_ITF,size:core.QSize_ITF,format:number):QVideoFrame;
	function NewQVideoFrame3(bytes:number,size:core.QSize_ITF,bytesPerLine:number,format:number):QVideoFrame;
	function NewQVideoFrame4(image:gui.QImage_ITF):QVideoFrame;
	function NewQVideoFrame5(other:QVideoFrame_ITF):QVideoFrame;
	const QVideoFrame__ProgressiveFrame: number;
	const QVideoFrame__TopField: number;
	const QVideoFrame__BottomField: number;
	const QVideoFrame__InterlacedFrame: number;
	const QVideoFrame__Format_Invalid: number;
	const QVideoFrame__Format_ARGB32: number;
	const QVideoFrame__Format_ARGB32_Premultiplied: number;
	const QVideoFrame__Format_RGB32: number;
	const QVideoFrame__Format_RGB24: number;
	const QVideoFrame__Format_RGB565: number;
	const QVideoFrame__Format_RGB555: number;
	const QVideoFrame__Format_ARGB8565_Premultiplied: number;
	const QVideoFrame__Format_BGRA32: number;
	const QVideoFrame__Format_BGRA32_Premultiplied: number;
	const QVideoFrame__Format_ABGR32: number;
	const QVideoFrame__Format_BGR32: number;
	const QVideoFrame__Format_BGR24: number;
	const QVideoFrame__Format_BGR565: number;
	const QVideoFrame__Format_BGR555: number;
	const QVideoFrame__Format_BGRA5658_Premultiplied: number;
	const QVideoFrame__Format_AYUV444: number;
	const QVideoFrame__Format_AYUV444_Premultiplied: number;
	const QVideoFrame__Format_YUV444: number;
	const QVideoFrame__Format_YUV420P: number;
	const QVideoFrame__Format_YV12: number;
	const QVideoFrame__Format_UYVY: number;
	const QVideoFrame__Format_YUYV: number;
	const QVideoFrame__Format_NV12: number;
	const QVideoFrame__Format_NV21: number;
	const QVideoFrame__Format_IMC1: number;
	const QVideoFrame__Format_IMC2: number;
	const QVideoFrame__Format_IMC3: number;
	const QVideoFrame__Format_IMC4: number;
	const QVideoFrame__Format_Y8: number;
	const QVideoFrame__Format_Y16: number;
	const QVideoFrame__Format_Jpeg: number;
	const QVideoFrame__Format_CameraRaw: number;
	const QVideoFrame__Format_AdobeDng: number;
	const QVideoFrame__Format_User: number;
	interface QVideoSurfaceFormat_ITF {
		QVideoSurfaceFormat_PTR():QVideoSurfaceFormat;
	}

	class QVideoSurfaceFormat {
		___pointer: number;
		QVideoSurfaceFormat_PTR():QVideoSurfaceFormat;
		Pointer():number;
		SetPointer(p:number):void;
		IsValid():boolean;
		Property(name:string):core.QVariant;
		PropertyNames():core.QByteArray[];
		SetProperty(name:string,value:core.QVariant_ITF):void;
		DestroyQVideoSurfaceFormat():void;
	}
	function NewQVideoSurfaceFormatFromPointer(ptr:number):QVideoSurfaceFormat;
	function NewQVideoSurfaceFormat():QVideoSurfaceFormat;
	function NewQVideoSurfaceFormat2(size:core.QSize_ITF,format:number,ty:number):QVideoSurfaceFormat;
	function NewQVideoSurfaceFormat3(other:QVideoSurfaceFormat_ITF):QVideoSurfaceFormat;
	const QVideoSurfaceFormat__TopToBottom: number;
	const QVideoSurfaceFormat__BottomToTop: number;
	const QVideoSurfaceFormat__YCbCr_Undefined: number;
	const QVideoSurfaceFormat__YCbCr_BT601: number;
	const QVideoSurfaceFormat__YCbCr_BT709: number;
	const QVideoSurfaceFormat__YCbCr_xvYCC601: number;
	const QVideoSurfaceFormat__YCbCr_xvYCC709: number;
	const QVideoSurfaceFormat__YCbCr_JPEG: number;
	interface QVideoWidget_ITF extends QMediaBindableInterface_ITF {
		QVideoWidget_PTR():QVideoWidget;
		QWidget_PTR():widgets.QWidget;
	}

	class QVideoWidget extends QMediaBindableInterface {
		QWidget_PTR():widgets.QWidget
		___pointer: number;
		QVideoWidget_PTR():QVideoWidget;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectEvent(f:(event:core.QEvent)=>boolean):void;
		DisconnectEvent():void;
		Event(event:core.QEvent_ITF):boolean;
		EventDefault(event:core.QEvent_ITF):boolean;
		ConnectMoveEvent(f:(event:gui.QMoveEvent)=>void):void;
		DisconnectMoveEvent():void;
		MoveEvent(event:gui.QMoveEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		ConnectResizeEvent(f:(event:gui.QResizeEvent)=>void):void;
		DisconnectResizeEvent():void;
		ResizeEvent(event:gui.QResizeEvent_ITF):void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		ConnectDestroyQVideoWidget(f:()=>void):void;
		DisconnectDestroyQVideoWidget():void;
		DestroyQVideoWidget():void;
		DestroyQVideoWidgetDefault():void;
		Close():boolean;
		CloseDefault():boolean;
		CloseEvent(event:gui.QCloseEvent_ITF):void;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		DragEnterEvent(event:gui.QDragEnterEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		DragLeaveEvent(event:gui.QDragLeaveEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		DragMoveEvent(event:gui.QDragMoveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		DropEvent(event:gui.QDropEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		EnterEvent(event:core.QEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		Hide():void;
		HideDefault():void;
		LeaveEvent(event:core.QEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		Lower():void;
		LowerDefault():void;
		MouseMoveEvent(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEvent(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		SetDisabled(disable:boolean):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabled(vbo:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetStyleSheet(styleSheet:string):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisible(visible:boolean):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowTitle(vqs:string):void;
		SetWindowTitleDefault(vqs:string):void;
		Show():void;
		ShowDefault():void;
		Update():void;
		UpdateDefault():void;
		WheelEvent(event:gui.QWheelEvent_ITF):void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ChildEvent(event:core.QChildEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotify(sign:core.QMetaMethod_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEvent(event:core.QEvent_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLater():void;
		DeleteLaterDefault():void;
		DisconnectNotify(sign:core.QMetaMethod_ITF):void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilter(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
		PaintEngine():gui.QPaintEngine;
		PaintEngineDefault():gui.QPaintEngine;
		MediaObject():QMediaObject;
		MediaObjectDefault():QMediaObject;
		SetMediaObject(object:QMediaObject_ITF):boolean;
		SetMediaObjectDefault(object:QMediaObject_ITF):boolean;
	}
	function NewQVideoWidgetFromPointer(ptr:number):QVideoWidget;
	function NewQVideoWidget(parent:widgets.QWidget_ITF):QVideoWidget;
}