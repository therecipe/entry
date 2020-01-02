/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="network.d.ts" />
/// <reference path="widgets.d.ts" />
declare namespace multimedia {
	interface QAbstractAudioDeviceInfo_ITF extends core.QObject_ITF {
		QAbstractAudioDeviceInfo_PTR():QAbstractAudioDeviceInfo;
	}

	class QAbstractAudioDeviceInfo extends core.QObject {
		___pointer: number;
		QAbstractAudioDeviceInfo_PTR():QAbstractAudioDeviceInfo;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDeviceName(f:()=>string):void;
		DisconnectDeviceName():void;
		DeviceName():string;
		ConnectIsFormatSupported(f:(format:QAudioFormat)=>boolean):void;
		DisconnectIsFormatSupported():void;
		IsFormatSupported(format:QAudioFormat_ITF):boolean;
		ConnectPreferredFormat(f:()=>QAudioFormat):void;
		DisconnectPreferredFormat():void;
		PreferredFormat():QAudioFormat;
		ConnectSupportedByteOrders(f:()=>number):void;
		DisconnectSupportedByteOrders():void;
		SupportedByteOrders():number;
		ConnectSupportedChannelCounts(f:()=>number[]):void;
		DisconnectSupportedChannelCounts():void;
		SupportedChannelCounts():number[];
		ConnectSupportedCodecs(f:()=>string[]):void;
		DisconnectSupportedCodecs():void;
		SupportedCodecs():string[];
		ConnectSupportedSampleRates(f:()=>number[]):void;
		DisconnectSupportedSampleRates():void;
		SupportedSampleRates():number[];
		ConnectSupportedSampleSizes(f:()=>number[]):void;
		DisconnectSupportedSampleSizes():void;
		SupportedSampleSizes():number[];
		ConnectSupportedSampleTypes(f:()=>number):void;
		DisconnectSupportedSampleTypes():void;
		SupportedSampleTypes():number;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAbstractAudioDeviceInfoFromPointer(ptr:number):QAbstractAudioDeviceInfo;
	interface QAbstractAudioInput_ITF extends core.QObject_ITF {
		QAbstractAudioInput_PTR():QAbstractAudioInput;
	}

	class QAbstractAudioInput extends core.QObject {
		___pointer: number;
		QAbstractAudioInput_PTR():QAbstractAudioInput;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBufferSize(f:()=>number):void;
		DisconnectBufferSize():void;
		BufferSize():number;
		ConnectBytesReady(f:()=>number):void;
		DisconnectBytesReady():void;
		BytesReady():number;
		ConnectElapsedUSecs(f:()=>number):void;
		DisconnectElapsedUSecs():void;
		ElapsedUSecs():number;
		ConnectError(f:()=>number):void;
		DisconnectError():void;
		Error():number;
		ConnectErrorChanged(f:(error:number)=>void):void;
		DisconnectErrorChanged():void;
		ErrorChanged(error:number):void;
		ConnectFormat(f:()=>QAudioFormat):void;
		DisconnectFormat():void;
		Format():QAudioFormat;
		ConnectNotify(f:()=>void):void;
		DisconnectNotify():void;
		Notify():void;
		ConnectNotifyInterval(f:()=>number):void;
		DisconnectNotifyInterval():void;
		NotifyInterval():number;
		ConnectPeriodSize(f:()=>number):void;
		DisconnectPeriodSize():void;
		PeriodSize():number;
		ConnectProcessedUSecs(f:()=>number):void;
		DisconnectProcessedUSecs():void;
		ProcessedUSecs():number;
		ConnectReset(f:()=>void):void;
		DisconnectReset():void;
		Reset():void;
		ConnectResume(f:()=>void):void;
		DisconnectResume():void;
		Resume():void;
		ConnectSetBufferSize(f:(value:number)=>void):void;
		DisconnectSetBufferSize():void;
		SetBufferSize(value:number):void;
		ConnectSetFormat(f:(fmtfmt:QAudioFormat)=>void):void;
		DisconnectSetFormat():void;
		SetFormat(fmtfmt:QAudioFormat_ITF):void;
		ConnectSetNotifyInterval(f:(ms:number)=>void):void;
		DisconnectSetNotifyInterval():void;
		SetNotifyInterval(ms:number):void;
		ConnectStart(f:(device:core.QIODevice)=>void):void;
		DisconnectStart():void;
		Start(device:core.QIODevice_ITF):void;
		ConnectStart2(f:()=>core.QIODevice):void;
		DisconnectStart2():void;
		Start2():core.QIODevice;
		ConnectState(f:()=>number):void;
		DisconnectState():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		ConnectSuspend(f:()=>void):void;
		DisconnectSuspend():void;
		Suspend():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAbstractAudioInputFromPointer(ptr:number):QAbstractAudioInput;
	interface QAbstractAudioOutput_ITF extends core.QObject_ITF {
		QAbstractAudioOutput_PTR():QAbstractAudioOutput;
	}

	class QAbstractAudioOutput extends core.QObject {
		___pointer: number;
		QAbstractAudioOutput_PTR():QAbstractAudioOutput;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBufferSize(f:()=>number):void;
		DisconnectBufferSize():void;
		BufferSize():number;
		ConnectBytesFree(f:()=>number):void;
		DisconnectBytesFree():void;
		BytesFree():number;
		ConnectElapsedUSecs(f:()=>number):void;
		DisconnectElapsedUSecs():void;
		ElapsedUSecs():number;
		ConnectError(f:()=>number):void;
		DisconnectError():void;
		Error():number;
		ConnectErrorChanged(f:(error:number)=>void):void;
		DisconnectErrorChanged():void;
		ErrorChanged(error:number):void;
		ConnectFormat(f:()=>QAudioFormat):void;
		DisconnectFormat():void;
		Format():QAudioFormat;
		ConnectNotify(f:()=>void):void;
		DisconnectNotify():void;
		Notify():void;
		ConnectNotifyInterval(f:()=>number):void;
		DisconnectNotifyInterval():void;
		NotifyInterval():number;
		ConnectPeriodSize(f:()=>number):void;
		DisconnectPeriodSize():void;
		PeriodSize():number;
		ConnectProcessedUSecs(f:()=>number):void;
		DisconnectProcessedUSecs():void;
		ProcessedUSecs():number;
		ConnectReset(f:()=>void):void;
		DisconnectReset():void;
		Reset():void;
		ConnectResume(f:()=>void):void;
		DisconnectResume():void;
		Resume():void;
		ConnectSetBufferSize(f:(value:number)=>void):void;
		DisconnectSetBufferSize():void;
		SetBufferSize(value:number):void;
		ConnectSetFormat(f:(fmtfmt:QAudioFormat)=>void):void;
		DisconnectSetFormat():void;
		SetFormat(fmtfmt:QAudioFormat_ITF):void;
		ConnectSetNotifyInterval(f:(ms:number)=>void):void;
		DisconnectSetNotifyInterval():void;
		SetNotifyInterval(ms:number):void;
		ConnectSetVolume(f:(volume:number)=>void):void;
		DisconnectSetVolume():void;
		SetVolume(volume:number):void;
		SetVolumeDefault(volume:number):void;
		ConnectStart(f:(device:core.QIODevice)=>void):void;
		DisconnectStart():void;
		Start(device:core.QIODevice_ITF):void;
		ConnectStart2(f:()=>core.QIODevice):void;
		DisconnectStart2():void;
		Start2():core.QIODevice;
		ConnectState(f:()=>number):void;
		DisconnectState():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		ConnectSuspend(f:()=>void):void;
		DisconnectSuspend():void;
		Suspend():void;
		ConnectVolume(f:()=>number):void;
		DisconnectVolume():void;
		Volume():number;
		VolumeDefault():number;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAbstractAudioOutputFromPointer(ptr:number):QAbstractAudioOutput;
	interface QAbstractPlanarVideoBuffer_ITF extends QAbstractVideoBuffer_ITF {
		QAbstractPlanarVideoBuffer_PTR():QAbstractPlanarVideoBuffer;
	}

	class QAbstractPlanarVideoBuffer extends QAbstractVideoBuffer {
		___pointer: number;
		QAbstractPlanarVideoBuffer_PTR():QAbstractPlanarVideoBuffer;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQAbstractPlanarVideoBuffer(f:()=>void):void;
		DisconnectDestroyQAbstractPlanarVideoBuffer():void;
		DestroyQAbstractPlanarVideoBuffer():void;
		DestroyQAbstractPlanarVideoBufferDefault():void;
		Map(mode:number,numBytes:number,bytesPerLine:number):string;
		MapDefault(mode:number,numBytes:number,bytesPerLine:number):string;
		MapMode():number;
		MapModeDefault():number;
		Unmap():void;
		UnmapDefault():void;
	}
	function NewQAbstractPlanarVideoBufferFromPointer(ptr:number):QAbstractPlanarVideoBuffer;
	interface QAbstractVideoBuffer_ITF {
		QAbstractVideoBuffer_PTR():QAbstractVideoBuffer;
	}

	class QAbstractVideoBuffer {
		___pointer: number;
		QAbstractVideoBuffer_PTR():QAbstractVideoBuffer;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectHandle(f:()=>core.QVariant):void;
		DisconnectHandle():void;
		Handle():core.QVariant;
		HandleDefault():core.QVariant;
		HandleType():number;
		ConnectMap(f:(mode:number,numBytes:number,bytesPerLine:number)=>string):void;
		DisconnectMap():void;
		Map(mode:number,numBytes:number,bytesPerLine:number):string;
		ConnectMapMode(f:()=>number):void;
		DisconnectMapMode():void;
		MapMode():number;
		ConnectRelease(f:()=>void):void;
		DisconnectRelease():void;
		Release():void;
		ReleaseDefault():void;
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
	interface QAbstractVideoFilter_ITF extends core.QObject_ITF {
		QAbstractVideoFilter_PTR():QAbstractVideoFilter;
	}

	class QAbstractVideoFilter extends core.QObject {
		___pointer: number;
		QAbstractVideoFilter_PTR():QAbstractVideoFilter;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActiveChanged(f:()=>void):void;
		DisconnectActiveChanged():void;
		ActiveChanged():void;
		ConnectCreateFilterRunnable(f:()=>QVideoFilterRunnable):void;
		DisconnectCreateFilterRunnable():void;
		CreateFilterRunnable():QVideoFilterRunnable;
		IsActive():boolean;
		SetActive(v:boolean):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAbstractVideoFilterFromPointer(ptr:number):QAbstractVideoFilter;
	function NewQAbstractVideoFilter(parent:core.QObject_ITF):QAbstractVideoFilter;
	interface QAbstractVideoSurface_ITF extends core.QObject_ITF {
		QAbstractVideoSurface_PTR():QAbstractVideoSurface;
	}

	class QAbstractVideoSurface extends core.QObject {
		___pointer: number;
		QAbstractVideoSurface_PTR():QAbstractVideoSurface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActiveChanged(f:(active:boolean)=>void):void;
		DisconnectActiveChanged():void;
		ActiveChanged(active:boolean):void;
		Error():number;
		IsActive():boolean;
		ConnectIsFormatSupported(f:(format:QVideoSurfaceFormat)=>boolean):void;
		DisconnectIsFormatSupported():void;
		IsFormatSupported(format:QVideoSurfaceFormat_ITF):boolean;
		IsFormatSupportedDefault(format:QVideoSurfaceFormat_ITF):boolean;
		NativeResolution():core.QSize;
		ConnectNativeResolutionChanged(f:(resolution:core.QSize)=>void):void;
		DisconnectNativeResolutionChanged():void;
		NativeResolutionChanged(resolution:core.QSize_ITF):void;
		ConnectNearestFormat(f:(format:QVideoSurfaceFormat)=>QVideoSurfaceFormat):void;
		DisconnectNearestFormat():void;
		NearestFormat(format:QVideoSurfaceFormat_ITF):QVideoSurfaceFormat;
		NearestFormatDefault(format:QVideoSurfaceFormat_ITF):QVideoSurfaceFormat;
		ConnectPresent(f:(frame:QVideoFrame)=>boolean):void;
		DisconnectPresent():void;
		Present(frame:QVideoFrame_ITF):boolean;
		SetError(error:number):void;
		SetNativeResolution(resolution:core.QSize_ITF):void;
		ConnectStart(f:(format:QVideoSurfaceFormat)=>boolean):void;
		DisconnectStart():void;
		Start(format:QVideoSurfaceFormat_ITF):boolean;
		StartDefault(format:QVideoSurfaceFormat_ITF):boolean;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		ConnectSupportedFormatsChanged(f:()=>void):void;
		DisconnectSupportedFormatsChanged():void;
		SupportedFormatsChanged():void;
		ConnectSupportedPixelFormats(f:(ty:number)=>number):void;
		DisconnectSupportedPixelFormats():void;
		SupportedPixelFormats(ty:number):number;
		SurfaceFormat():QVideoSurfaceFormat;
		ConnectSurfaceFormatChanged(f:(format:QVideoSurfaceFormat)=>void):void;
		DisconnectSurfaceFormatChanged():void;
		SurfaceFormatChanged(format:QVideoSurfaceFormat_ITF):void;
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
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAbstractVideoSurfaceFromPointer(ptr:number):QAbstractVideoSurface;
	function NewQAbstractVideoSurface(parent:core.QObject_ITF):QAbstractVideoSurface;
	const QAbstractVideoSurface__NoError: number;
	const QAbstractVideoSurface__UnsupportedFormatError: number;
	const QAbstractVideoSurface__IncorrectFormatError: number;
	const QAbstractVideoSurface__StoppedError: number;
	const QAbstractVideoSurface__ResourceError: number;
	interface QAudio_ITF {
		QAudio_PTR():QAudio;
	}

	class QAudio {
		___pointer: number;
		QAudio_PTR():QAudio;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAudio():void;
		ConvertVolume(volume:number,from:number,to:number):number;
	}
	function NewQAudioFromPointer(ptr:number):QAudio;
	function QAudio_ConvertVolume(volume:number,from:number,to:number):number;
	function NewQAudioBuffer():QAudioBuffer;
	function NewQAudioBuffer2(data:core.QByteArray_ITF,format:QAudioFormat_ITF,startTime:number):QAudioBuffer;
	function NewQAudioBuffer3(numFrames:number,format:QAudioFormat_ITF,startTime:number):QAudioBuffer;
	function NewQAudioDecoder(parent:core.QObject_ITF):QAudioDecoder;
	function NewQAudioDecoderControl(parent:core.QObject_ITF):QAudioDecoderControl;
	function NewQAudioDeviceInfo():QAudioDeviceInfo;
	function NewQAudioDeviceInfo2(other:QAudioDeviceInfo_ITF):QAudioDeviceInfo;
	function NewQAudioEncoderSettings():QAudioEncoderSettings;
	function NewQAudioEncoderSettings2(other:QAudioEncoderSettings_ITF):QAudioEncoderSettings;
	function NewQAudioEncoderSettingsControl(parent:core.QObject_ITF):QAudioEncoderSettingsControl;
	function NewQAudioFormat():QAudioFormat;
	function NewQAudioFormat2(other:QAudioFormat_ITF):QAudioFormat;
	function NewQAudioInput(format:QAudioFormat_ITF,parent:core.QObject_ITF):QAudioInput;
	function NewQAudioInput2(audioDevice:QAudioDeviceInfo_ITF,format:QAudioFormat_ITF,parent:core.QObject_ITF):QAudioInput;
	function NewQAudioOutput(format:QAudioFormat_ITF,parent:core.QObject_ITF):QAudioOutput;
	function NewQAudioOutput2(audioDevice:QAudioDeviceInfo_ITF,format:QAudioFormat_ITF,parent:core.QObject_ITF):QAudioOutput;
	function NewQAudioProbe(parent:core.QObject_ITF):QAudioProbe;
	function NewQAudioRecorder(parent:core.QObject_ITF):QAudioRecorder;
	function NewQAudioRoleControl(parent:core.QObject_ITF):QAudioRoleControl;
	function NewQAudioSystemPlugin(parent:core.QObject_ITF):QAudioSystemPlugin;
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
	interface QAudioBuffer_ITF {
		QAudioBuffer_PTR():QAudioBuffer;
	}

	class QAudioBuffer {
		___pointer: number;
		QAudioBuffer_PTR():QAudioBuffer;
		Pointer():number;
		SetPointer(p:number):void;
		ByteCount():number;
		ConstData():number;
		Data():number;
		Data2():number;
		Duration():number;
		Format():QAudioFormat;
		FrameCount():number;
		IsValid():boolean;
		SampleCount():number;
		StartTime():number;
		DestroyQAudioBuffer():void;
	}
	function NewQAudioBufferFromPointer(ptr:number):QAudioBuffer;
	function NewQAudioBuffer():QAudioBuffer;
	function NewQAudioBuffer2(data:core.QByteArray_ITF,format:QAudioFormat_ITF,startTime:number):QAudioBuffer;
	function NewQAudioBuffer3(numFrames:number,format:QAudioFormat_ITF,startTime:number):QAudioBuffer;
	interface QAudioDecoder_ITF extends QMediaObject_ITF {
		QAudioDecoder_PTR():QAudioDecoder;
	}

	class QAudioDecoder extends QMediaObject {
		___pointer: number;
		QAudioDecoder_PTR():QAudioDecoder;
		Pointer():number;
		SetPointer(p:number):void;
		AudioFormat():QAudioFormat;
		BufferAvailable():boolean;
		ConnectBufferAvailableChanged(f:(available:boolean)=>void):void;
		DisconnectBufferAvailableChanged():void;
		BufferAvailableChanged(available:boolean):void;
		ConnectBufferReady(f:()=>void):void;
		DisconnectBufferReady():void;
		BufferReady():void;
		Duration():number;
		ConnectDurationChanged(f:(duration:number)=>void):void;
		DisconnectDurationChanged():void;
		DurationChanged(duration:number):void;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ErrorString():string;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		ConnectFormatChanged(f:(format:QAudioFormat)=>void):void;
		DisconnectFormatChanged():void;
		FormatChanged(format:QAudioFormat_ITF):void;
		HasSupport(mimeType:string,codecs:string[]):number;
		Position():number;
		ConnectPositionChanged(f:(position:number)=>void):void;
		DisconnectPositionChanged():void;
		PositionChanged(position:number):void;
		Read():QAudioBuffer;
		SetAudioFormat(format:QAudioFormat_ITF):void;
		SetSourceDevice(device:core.QIODevice_ITF):void;
		SetSourceFilename(fileName:string):void;
		ConnectSourceChanged(f:()=>void):void;
		DisconnectSourceChanged():void;
		SourceChanged():void;
		SourceDevice():core.QIODevice;
		SourceFilename():string;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		StartDefault():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		ConnectDestroyQAudioDecoder(f:()=>void):void;
		DisconnectDestroyQAudioDecoder():void;
		DestroyQAudioDecoder():void;
		DestroyQAudioDecoderDefault():void;
	}
	function NewQAudioDecoderFromPointer(ptr:number):QAudioDecoder;
	function NewQAudioDecoder(parent:core.QObject_ITF):QAudioDecoder;
	function QAudioDecoder_HasSupport(mimeType:string,codecs:string[]):number;
	function NewQAudioDecoderControl(parent:core.QObject_ITF):QAudioDecoderControl;
	const QAudioDecoder__StoppedState: number;
	const QAudioDecoder__DecodingState: number;
	const QAudioDecoder__NoError: number;
	const QAudioDecoder__ResourceError: number;
	const QAudioDecoder__FormatError: number;
	const QAudioDecoder__AccessDeniedError: number;
	const QAudioDecoder__ServiceMissingError: number;
	interface QAudioDecoderControl_ITF extends QMediaControl_ITF {
		QAudioDecoderControl_PTR():QAudioDecoderControl;
	}

	class QAudioDecoderControl extends QMediaControl {
		___pointer: number;
		QAudioDecoderControl_PTR():QAudioDecoderControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAudioFormat(f:()=>QAudioFormat):void;
		DisconnectAudioFormat():void;
		AudioFormat():QAudioFormat;
		ConnectBufferAvailable(f:()=>boolean):void;
		DisconnectBufferAvailable():void;
		BufferAvailable():boolean;
		ConnectBufferAvailableChanged(f:(available:boolean)=>void):void;
		DisconnectBufferAvailableChanged():void;
		BufferAvailableChanged(available:boolean):void;
		ConnectBufferReady(f:()=>void):void;
		DisconnectBufferReady():void;
		BufferReady():void;
		ConnectDuration(f:()=>number):void;
		DisconnectDuration():void;
		Duration():number;
		ConnectDurationChanged(f:(duration:number)=>void):void;
		DisconnectDurationChanged():void;
		DurationChanged(duration:number):void;
		ConnectError(f:(error:number,errorString:string)=>void):void;
		DisconnectError():void;
		Error(error:number,errorString:string):void;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		ConnectFormatChanged(f:(format:QAudioFormat)=>void):void;
		DisconnectFormatChanged():void;
		FormatChanged(format:QAudioFormat_ITF):void;
		ConnectPosition(f:()=>number):void;
		DisconnectPosition():void;
		Position():number;
		ConnectPositionChanged(f:(position:number)=>void):void;
		DisconnectPositionChanged():void;
		PositionChanged(position:number):void;
		ConnectRead(f:()=>QAudioBuffer):void;
		DisconnectRead():void;
		Read():QAudioBuffer;
		ConnectSetAudioFormat(f:(format:QAudioFormat)=>void):void;
		DisconnectSetAudioFormat():void;
		SetAudioFormat(format:QAudioFormat_ITF):void;
		ConnectSetSourceDevice(f:(device:core.QIODevice)=>void):void;
		DisconnectSetSourceDevice():void;
		SetSourceDevice(device:core.QIODevice_ITF):void;
		ConnectSetSourceFilename(f:(fileName:string)=>void):void;
		DisconnectSetSourceFilename():void;
		SetSourceFilename(fileName:string):void;
		ConnectSourceChanged(f:()=>void):void;
		DisconnectSourceChanged():void;
		SourceChanged():void;
		ConnectSourceDevice(f:()=>core.QIODevice):void;
		DisconnectSourceDevice():void;
		SourceDevice():core.QIODevice;
		ConnectSourceFilename(f:()=>string):void;
		DisconnectSourceFilename():void;
		SourceFilename():string;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		ConnectState(f:()=>number):void;
		DisconnectState():void;
		State():number;
		ConnectStateChanged(f:(newState:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(newState:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		ConnectDestroyQAudioDecoderControl(f:()=>void):void;
		DisconnectDestroyQAudioDecoderControl():void;
		DestroyQAudioDecoderControl():void;
		DestroyQAudioDecoderControlDefault():void;
	}
	function NewQAudioDecoderControlFromPointer(ptr:number):QAudioDecoderControl;
	function NewQAudioDecoderControl(parent:core.QObject_ITF):QAudioDecoderControl;
	interface QAudioDeviceInfo_ITF {
		QAudioDeviceInfo_PTR():QAudioDeviceInfo;
	}

	class QAudioDeviceInfo {
		___pointer: number;
		QAudioDeviceInfo_PTR():QAudioDeviceInfo;
		Pointer():number;
		SetPointer(p:number):void;
		AvailableDevices(mode:number):QAudioDeviceInfo[];
		DefaultInputDevice():QAudioDeviceInfo;
		DefaultOutputDevice():QAudioDeviceInfo;
		DeviceName():string;
		IsFormatSupported(settings:QAudioFormat_ITF):boolean;
		IsNull():boolean;
		NearestFormat(settings:QAudioFormat_ITF):QAudioFormat;
		PreferredFormat():QAudioFormat;
		SupportedByteOrders():number;
		SupportedChannelCounts():number[];
		SupportedCodecs():string[];
		SupportedSampleRates():number[];
		SupportedSampleSizes():number[];
		SupportedSampleTypes():number;
		DestroyQAudioDeviceInfo():void;
	}
	function NewQAudioDeviceInfoFromPointer(ptr:number):QAudioDeviceInfo;
	function NewQAudioDeviceInfo():QAudioDeviceInfo;
	function NewQAudioDeviceInfo2(other:QAudioDeviceInfo_ITF):QAudioDeviceInfo;
	function QAudioDeviceInfo_AvailableDevices(mode:number):QAudioDeviceInfo[];
	function QAudioDeviceInfo_DefaultInputDevice():QAudioDeviceInfo;
	function QAudioDeviceInfo_DefaultOutputDevice():QAudioDeviceInfo;
	interface QAudioEncoderSettings_ITF {
		QAudioEncoderSettings_PTR():QAudioEncoderSettings;
	}

	class QAudioEncoderSettings {
		___pointer: number;
		QAudioEncoderSettings_PTR():QAudioEncoderSettings;
		Pointer():number;
		SetPointer(p:number):void;
		BitRate():number;
		ChannelCount():number;
		Codec():string;
		EncodingMode():number;
		EncodingOption(option:string):core.QVariant;
		EncodingOptions():Map<string,core.QVariant>;
		IsNull():boolean;
		Quality():number;
		SampleRate():number;
		SetBitRate(rate:number):void;
		SetChannelCount(channels:number):void;
		SetCodec(codec:string):void;
		SetEncodingMode(mode:number):void;
		SetEncodingOption(option:string,value:core.QVariant_ITF):void;
		SetEncodingOptions(options:Map<string,core.QVariant>):void;
		SetQuality(quality:number):void;
		SetSampleRate(rate:number):void;
		DestroyQAudioEncoderSettings():void;
	}
	function NewQAudioEncoderSettingsFromPointer(ptr:number):QAudioEncoderSettings;
	function NewQAudioEncoderSettings():QAudioEncoderSettings;
	function NewQAudioEncoderSettings2(other:QAudioEncoderSettings_ITF):QAudioEncoderSettings;
	function NewQAudioEncoderSettingsControl(parent:core.QObject_ITF):QAudioEncoderSettingsControl;
	interface QAudioEncoderSettingsControl_ITF extends QMediaControl_ITF {
		QAudioEncoderSettingsControl_PTR():QAudioEncoderSettingsControl;
	}

	class QAudioEncoderSettingsControl extends QMediaControl {
		___pointer: number;
		QAudioEncoderSettingsControl_PTR():QAudioEncoderSettingsControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAudioSettings(f:()=>QAudioEncoderSettings):void;
		DisconnectAudioSettings():void;
		AudioSettings():QAudioEncoderSettings;
		ConnectCodecDescription(f:(codecName:string)=>string):void;
		DisconnectCodecDescription():void;
		CodecDescription(codecName:string):string;
		ConnectSetAudioSettings(f:(settings:QAudioEncoderSettings)=>void):void;
		DisconnectSetAudioSettings():void;
		SetAudioSettings(settings:QAudioEncoderSettings_ITF):void;
		ConnectSupportedAudioCodecs(f:()=>string[]):void;
		DisconnectSupportedAudioCodecs():void;
		SupportedAudioCodecs():string[];
		ConnectSupportedSampleRates(f:(settings:QAudioEncoderSettings,continuous:boolean)=>number[]):void;
		DisconnectSupportedSampleRates():void;
		SupportedSampleRates(settings:QAudioEncoderSettings_ITF,continuous:boolean):number[];
		ConnectDestroyQAudioEncoderSettingsControl(f:()=>void):void;
		DisconnectDestroyQAudioEncoderSettingsControl():void;
		DestroyQAudioEncoderSettingsControl():void;
		DestroyQAudioEncoderSettingsControlDefault():void;
	}
	function NewQAudioEncoderSettingsControlFromPointer(ptr:number):QAudioEncoderSettingsControl;
	function NewQAudioEncoderSettingsControl(parent:core.QObject_ITF):QAudioEncoderSettingsControl;
	interface QAudioFormat_ITF {
		QAudioFormat_PTR():QAudioFormat;
	}

	class QAudioFormat {
		___pointer: number;
		QAudioFormat_PTR():QAudioFormat;
		Pointer():number;
		SetPointer(p:number):void;
		ByteOrder():number;
		BytesForDuration(duration:number):number;
		BytesForFrames(frameCount:number):number;
		BytesPerFrame():number;
		ChannelCount():number;
		Codec():string;
		DurationForBytes(bytes:number):number;
		DurationForFrames(frameCount:number):number;
		FramesForBytes(byteCount:number):number;
		FramesForDuration(duration:number):number;
		IsValid():boolean;
		SampleRate():number;
		SampleSize():number;
		SampleType():number;
		SetByteOrder(byteOrder:number):void;
		SetChannelCount(channels:number):void;
		SetCodec(codec:string):void;
		SetSampleRate(samplerate:number):void;
		SetSampleSize(sampleSize:number):void;
		SetSampleType(sampleType:number):void;
		DestroyQAudioFormat():void;
	}
	function NewQAudioFormatFromPointer(ptr:number):QAudioFormat;
	function NewQAudioFormat():QAudioFormat;
	function NewQAudioFormat2(other:QAudioFormat_ITF):QAudioFormat;
	const QAudioFormat__Unknown: number;
	const QAudioFormat__SignedInt: number;
	const QAudioFormat__UnSignedInt: number;
	const QAudioFormat__Float: number;
	const QAudioFormat__BigEndian: number;
	const QAudioFormat__LittleEndian: number;
	interface QAudioInput_ITF extends core.QObject_ITF {
		QAudioInput_PTR():QAudioInput;
	}

	class QAudioInput extends core.QObject {
		___pointer: number;
		QAudioInput_PTR():QAudioInput;
		Pointer():number;
		SetPointer(p:number):void;
		BufferSize():number;
		BytesReady():number;
		ElapsedUSecs():number;
		Error():number;
		Format():QAudioFormat;
		NotifyInterval():number;
		PeriodSize():number;
		ProcessedUSecs():number;
		Reset():void;
		Resume():void;
		SetBufferSize(value:number):void;
		SetNotifyInterval(ms:number):void;
		SetVolume(volume:number):void;
		Start(device:core.QIODevice_ITF):void;
		Start2():core.QIODevice;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		Stop():void;
		Suspend():void;
		Volume():number;
		ConnectDestroyQAudioInput(f:()=>void):void;
		DisconnectDestroyQAudioInput():void;
		DestroyQAudioInput():void;
		DestroyQAudioInputDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAudioInputFromPointer(ptr:number):QAudioInput;
	function NewQAudioInput(format:QAudioFormat_ITF,parent:core.QObject_ITF):QAudioInput;
	function NewQAudioInput2(audioDevice:QAudioDeviceInfo_ITF,format:QAudioFormat_ITF,parent:core.QObject_ITF):QAudioInput;
	interface QAudioInputSelectorControl_ITF extends QMediaControl_ITF {
		QAudioInputSelectorControl_PTR():QAudioInputSelectorControl;
	}

	class QAudioInputSelectorControl extends QMediaControl {
		___pointer: number;
		QAudioInputSelectorControl_PTR():QAudioInputSelectorControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActiveInput(f:()=>string):void;
		DisconnectActiveInput():void;
		ActiveInput():string;
		ConnectActiveInputChanged(f:(name:string)=>void):void;
		DisconnectActiveInputChanged():void;
		ActiveInputChanged(name:string):void;
		ConnectAvailableInputsChanged(f:()=>void):void;
		DisconnectAvailableInputsChanged():void;
		AvailableInputsChanged():void;
		ConnectDefaultInput(f:()=>string):void;
		DisconnectDefaultInput():void;
		DefaultInput():string;
		ConnectInputDescription(f:(name:string)=>string):void;
		DisconnectInputDescription():void;
		InputDescription(name:string):string;
		ConnectSetActiveInput(f:(name:string)=>void):void;
		DisconnectSetActiveInput():void;
		SetActiveInput(name:string):void;
		ConnectDestroyQAudioInputSelectorControl(f:()=>void):void;
		DisconnectDestroyQAudioInputSelectorControl():void;
		DestroyQAudioInputSelectorControl():void;
		DestroyQAudioInputSelectorControlDefault():void;
	}
	function NewQAudioInputSelectorControlFromPointer(ptr:number):QAudioInputSelectorControl;
	interface QAudioOutput_ITF extends core.QObject_ITF {
		QAudioOutput_PTR():QAudioOutput;
	}

	class QAudioOutput extends core.QObject {
		___pointer: number;
		QAudioOutput_PTR():QAudioOutput;
		Pointer():number;
		SetPointer(p:number):void;
		BufferSize():number;
		BytesFree():number;
		Category():string;
		ElapsedUSecs():number;
		Error():number;
		Format():QAudioFormat;
		NotifyInterval():number;
		PeriodSize():number;
		ProcessedUSecs():number;
		Reset():void;
		Resume():void;
		SetBufferSize(value:number):void;
		SetCategory(category:string):void;
		SetNotifyInterval(ms:number):void;
		SetVolume(volume:number):void;
		Start(device:core.QIODevice_ITF):void;
		Start2():core.QIODevice;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		Stop():void;
		Suspend():void;
		Volume():number;
		ConnectDestroyQAudioOutput(f:()=>void):void;
		DisconnectDestroyQAudioOutput():void;
		DestroyQAudioOutput():void;
		DestroyQAudioOutputDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAudioOutputFromPointer(ptr:number):QAudioOutput;
	function NewQAudioOutput(format:QAudioFormat_ITF,parent:core.QObject_ITF):QAudioOutput;
	function NewQAudioOutput2(audioDevice:QAudioDeviceInfo_ITF,format:QAudioFormat_ITF,parent:core.QObject_ITF):QAudioOutput;
	interface QAudioOutputSelectorControl_ITF extends QMediaControl_ITF {
		QAudioOutputSelectorControl_PTR():QAudioOutputSelectorControl;
	}

	class QAudioOutputSelectorControl extends QMediaControl {
		___pointer: number;
		QAudioOutputSelectorControl_PTR():QAudioOutputSelectorControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActiveOutput(f:()=>string):void;
		DisconnectActiveOutput():void;
		ActiveOutput():string;
		ConnectActiveOutputChanged(f:(name:string)=>void):void;
		DisconnectActiveOutputChanged():void;
		ActiveOutputChanged(name:string):void;
		ConnectAvailableOutputsChanged(f:()=>void):void;
		DisconnectAvailableOutputsChanged():void;
		AvailableOutputsChanged():void;
		ConnectDefaultOutput(f:()=>string):void;
		DisconnectDefaultOutput():void;
		DefaultOutput():string;
		ConnectOutputDescription(f:(name:string)=>string):void;
		DisconnectOutputDescription():void;
		OutputDescription(name:string):string;
		ConnectSetActiveOutput(f:(name:string)=>void):void;
		DisconnectSetActiveOutput():void;
		SetActiveOutput(name:string):void;
		ConnectDestroyQAudioOutputSelectorControl(f:()=>void):void;
		DisconnectDestroyQAudioOutputSelectorControl():void;
		DestroyQAudioOutputSelectorControl():void;
		DestroyQAudioOutputSelectorControlDefault():void;
	}
	function NewQAudioOutputSelectorControlFromPointer(ptr:number):QAudioOutputSelectorControl;
	interface QAudioProbe_ITF extends core.QObject_ITF {
		QAudioProbe_PTR():QAudioProbe;
	}

	class QAudioProbe extends core.QObject {
		___pointer: number;
		QAudioProbe_PTR():QAudioProbe;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAudioBufferProbed(f:(buffer:QAudioBuffer)=>void):void;
		DisconnectAudioBufferProbed():void;
		AudioBufferProbed(buffer:QAudioBuffer_ITF):void;
		ConnectFlush(f:()=>void):void;
		DisconnectFlush():void;
		Flush():void;
		IsActive():boolean;
		SetSource(source:QMediaObject_ITF):boolean;
		SetSource2(mediaRecorder:QMediaRecorder_ITF):boolean;
		ConnectDestroyQAudioProbe(f:()=>void):void;
		DisconnectDestroyQAudioProbe():void;
		DestroyQAudioProbe():void;
		DestroyQAudioProbeDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAudioProbeFromPointer(ptr:number):QAudioProbe;
	function NewQAudioProbe(parent:core.QObject_ITF):QAudioProbe;
	interface QAudioRecorder_ITF extends QMediaRecorder_ITF {
		QAudioRecorder_PTR():QAudioRecorder;
	}

	class QAudioRecorder extends QMediaRecorder {
		___pointer: number;
		QAudioRecorder_PTR():QAudioRecorder;
		Pointer():number;
		SetPointer(p:number):void;
		AudioInput():string;
		ConnectAudioInputChanged(f:(name:string)=>void):void;
		DisconnectAudioInputChanged():void;
		AudioInputChanged(name:string):void;
		AudioInputDescription(name:string):string;
		AudioInputs():string[];
		ConnectAvailableAudioInputsChanged(f:()=>void):void;
		DisconnectAvailableAudioInputsChanged():void;
		AvailableAudioInputsChanged():void;
		DefaultAudioInput():string;
		ConnectSetAudioInput(f:(name:string)=>void):void;
		DisconnectSetAudioInput():void;
		SetAudioInput(name:string):void;
		SetAudioInputDefault(name:string):void;
		ConnectDestroyQAudioRecorder(f:()=>void):void;
		DisconnectDestroyQAudioRecorder():void;
		DestroyQAudioRecorder():void;
		DestroyQAudioRecorderDefault():void;
	}
	function NewQAudioRecorderFromPointer(ptr:number):QAudioRecorder;
	function NewQAudioRecorder(parent:core.QObject_ITF):QAudioRecorder;
	interface QAudioRoleControl_ITF extends QMediaControl_ITF {
		QAudioRoleControl_PTR():QAudioRoleControl;
	}

	class QAudioRoleControl extends QMediaControl {
		___pointer: number;
		QAudioRoleControl_PTR():QAudioRoleControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAudioRole(f:()=>number):void;
		DisconnectAudioRole():void;
		AudioRole():number;
		ConnectAudioRoleChanged(f:(role:number)=>void):void;
		DisconnectAudioRoleChanged():void;
		AudioRoleChanged(role:number):void;
		ConnectSetAudioRole(f:(role:number)=>void):void;
		DisconnectSetAudioRole():void;
		SetAudioRole(role:number):void;
		ConnectSupportedAudioRoles(f:()=>number):void;
		DisconnectSupportedAudioRoles():void;
		SupportedAudioRoles():number;
		ConnectDestroyQAudioRoleControl(f:()=>void):void;
		DisconnectDestroyQAudioRoleControl():void;
		DestroyQAudioRoleControl():void;
		DestroyQAudioRoleControlDefault():void;
	}
	function NewQAudioRoleControlFromPointer(ptr:number):QAudioRoleControl;
	function NewQAudioRoleControl(parent:core.QObject_ITF):QAudioRoleControl;
	interface QAudioSystemFactoryInterface_ITF {
		QAudioSystemFactoryInterface_PTR():QAudioSystemFactoryInterface;
	}

	class QAudioSystemFactoryInterface {
		___pointer: number;
		QAudioSystemFactoryInterface_PTR():QAudioSystemFactoryInterface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAudioSystemFactoryInterface():void;
	}
	function NewQAudioSystemFactoryInterfaceFromPointer(ptr:number):QAudioSystemFactoryInterface;
	interface QAudioSystemPlugin_ITF extends QAudioSystemFactoryInterface_ITF {
		QAudioSystemPlugin_PTR():QAudioSystemPlugin;
		QObject_PTR():core.QObject;
	}

	class QAudioSystemPlugin extends QAudioSystemFactoryInterface {
		QObject_PTR():core.QObject
		___pointer: number;
		QAudioSystemPlugin_PTR():QAudioSystemPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAvailableDevices(f:(mode:number)=>core.QByteArray[]):void;
		DisconnectAvailableDevices():void;
		AvailableDevices(mode:number):core.QByteArray[];
		ConnectCreateDeviceInfo(f:(device:core.QByteArray,mode:number)=>QAbstractAudioDeviceInfo):void;
		DisconnectCreateDeviceInfo():void;
		CreateDeviceInfo(device:core.QByteArray_ITF,mode:number):QAbstractAudioDeviceInfo;
		ConnectCreateInput(f:(device:core.QByteArray)=>QAbstractAudioInput):void;
		DisconnectCreateInput():void;
		CreateInput(device:core.QByteArray_ITF):QAbstractAudioInput;
		ConnectCreateOutput(f:(device:core.QByteArray)=>QAbstractAudioOutput):void;
		DisconnectCreateOutput():void;
		CreateOutput(device:core.QByteArray_ITF):QAbstractAudioOutput;
		ConnectDestroyQAudioSystemPlugin(f:()=>void):void;
		DisconnectDestroyQAudioSystemPlugin():void;
		DestroyQAudioSystemPlugin():void;
		DestroyQAudioSystemPluginDefault():void;
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
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAudioSystemPluginFromPointer(ptr:number):QAudioSystemPlugin;
	function NewQAudioSystemPlugin(parent:core.QObject_ITF):QAudioSystemPlugin;
	interface QCamera_ITF extends QMediaObject_ITF {
		QCamera_PTR():QCamera;
	}

	class QCamera extends QMediaObject {
		___pointer: number;
		QCamera_PTR():QCamera;
		Pointer():number;
		SetPointer(p:number):void;
		CaptureMode():number;
		ConnectCaptureModeChanged(f:(mode:number)=>void):void;
		DisconnectCaptureModeChanged():void;
		CaptureModeChanged(mode:number):void;
		Error():number;
		ConnectError2(f:(value:number)=>void):void;
		DisconnectError2():void;
		Error2(value:number):void;
		ErrorString():string;
		Exposure():QCameraExposure;
		Focus():QCameraFocus;
		ImageProcessing():QCameraImageProcessing;
		IsCaptureModeSupported(mode:number):boolean;
		ConnectLoad(f:()=>void):void;
		DisconnectLoad():void;
		Load():void;
		LoadDefault():void;
		ConnectLockFailed(f:()=>void):void;
		DisconnectLockFailed():void;
		LockFailed():void;
		LockStatus():number;
		LockStatus2(lockType:number):number;
		ConnectLockStatusChanged(f:(status:number,reason:number)=>void):void;
		DisconnectLockStatusChanged():void;
		LockStatusChanged(status:number,reason:number):void;
		ConnectLockStatusChanged2(f:(lock:number,status:number,reason:number)=>void):void;
		DisconnectLockStatusChanged2():void;
		LockStatusChanged2(lock:number,status:number,reason:number):void;
		ConnectLocked(f:()=>void):void;
		DisconnectLocked():void;
		Locked():void;
		RequestedLocks():number;
		ConnectSearchAndLock(f:()=>void):void;
		DisconnectSearchAndLock():void;
		SearchAndLock():void;
		SearchAndLockDefault():void;
		ConnectSearchAndLock2(f:(locks:number)=>void):void;
		DisconnectSearchAndLock2():void;
		SearchAndLock2(locks:number):void;
		SearchAndLock2Default(locks:number):void;
		ConnectSetCaptureMode(f:(mode:number)=>void):void;
		DisconnectSetCaptureMode():void;
		SetCaptureMode(mode:number):void;
		SetCaptureModeDefault(mode:number):void;
		SetViewfinder(viewfinder:QVideoWidget_ITF):void;
		SetViewfinder3(surface:QAbstractVideoSurface_ITF):void;
		SetViewfinderSettings(settings:QCameraViewfinderSettings_ITF):void;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		StartDefault():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		Status():number;
		ConnectStatusChanged(f:(status:number)=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged(status:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		SupportedLocks():number;
		SupportedViewfinderPixelFormats(settings:QCameraViewfinderSettings_ITF):number;
		SupportedViewfinderResolutions(settings:QCameraViewfinderSettings_ITF):core.QSize[];
		SupportedViewfinderSettings(settings:QCameraViewfinderSettings_ITF):QCameraViewfinderSettings[];
		ConnectUnload(f:()=>void):void;
		DisconnectUnload():void;
		Unload():void;
		UnloadDefault():void;
		ConnectUnlock(f:()=>void):void;
		DisconnectUnlock():void;
		Unlock():void;
		UnlockDefault():void;
		ConnectUnlock2(f:(locks:number)=>void):void;
		DisconnectUnlock2():void;
		Unlock2(locks:number):void;
		Unlock2Default(locks:number):void;
		ViewfinderSettings():QCameraViewfinderSettings;
		ConnectDestroyQCamera(f:()=>void):void;
		DisconnectDestroyQCamera():void;
		DestroyQCamera():void;
		DestroyQCameraDefault():void;
	}
	function NewQCameraFromPointer(ptr:number):QCamera;
	function NewQCamera(parent:core.QObject_ITF):QCamera;
	function NewQCamera2(deviceName:core.QByteArray_ITF,parent:core.QObject_ITF):QCamera;
	function NewQCamera3(cameraInfo:QCameraInfo_ITF,parent:core.QObject_ITF):QCamera;
	function NewQCamera4(position:number,parent:core.QObject_ITF):QCamera;
	function NewQCameraCaptureBufferFormatControl(parent:core.QObject_ITF):QCameraCaptureBufferFormatControl;
	function NewQCameraCaptureDestinationControl(parent:core.QObject_ITF):QCameraCaptureDestinationControl;
	function NewQCameraControl(parent:core.QObject_ITF):QCameraControl;
	function NewQCameraExposureControl(parent:core.QObject_ITF):QCameraExposureControl;
	function NewQCameraFeedbackControl(parent:core.QObject_ITF):QCameraFeedbackControl;
	function NewQCameraFlashControl(parent:core.QObject_ITF):QCameraFlashControl;
	function NewQCameraFocusZone(other:QCameraFocusZone_ITF):QCameraFocusZone;
	function NewQCameraImageCapture(mediaObject:QMediaObject_ITF,parent:core.QObject_ITF):QCameraImageCapture;
	function NewQCameraImageCaptureControl(parent:core.QObject_ITF):QCameraImageCaptureControl;
	function NewQCameraImageProcessingControl(parent:core.QObject_ITF):QCameraImageProcessingControl;
	function NewQCameraInfo(name:core.QByteArray_ITF):QCameraInfo;
	function NewQCameraInfo2(camera:QCamera_ITF):QCameraInfo;
	function NewQCameraInfo3(other:QCameraInfo_ITF):QCameraInfo;
	function NewQCameraInfoControl(parent:core.QObject_ITF):QCameraInfoControl;
	function NewQCameraLocksControl(parent:core.QObject_ITF):QCameraLocksControl;
	function NewQCameraViewfinderSettings():QCameraViewfinderSettings;
	function NewQCameraViewfinderSettings2(other:QCameraViewfinderSettings_ITF):QCameraViewfinderSettings;
	function NewQCameraViewfinderSettingsControl(parent:core.QObject_ITF):QCameraViewfinderSettingsControl;
	function NewQCameraViewfinderSettingsControl2(parent:core.QObject_ITF):QCameraViewfinderSettingsControl2;
	function NewQCameraZoomControl(parent:core.QObject_ITF):QCameraZoomControl;
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
	interface QCameraCaptureBufferFormatControl_ITF extends QMediaControl_ITF {
		QCameraCaptureBufferFormatControl_PTR():QCameraCaptureBufferFormatControl;
	}

	class QCameraCaptureBufferFormatControl extends QMediaControl {
		___pointer: number;
		QCameraCaptureBufferFormatControl_PTR():QCameraCaptureBufferFormatControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBufferFormat(f:()=>number):void;
		DisconnectBufferFormat():void;
		BufferFormat():number;
		ConnectBufferFormatChanged(f:(format:number)=>void):void;
		DisconnectBufferFormatChanged():void;
		BufferFormatChanged(format:number):void;
		ConnectSetBufferFormat(f:(format:number)=>void):void;
		DisconnectSetBufferFormat():void;
		SetBufferFormat(format:number):void;
		ConnectSupportedBufferFormats(f:()=>number):void;
		DisconnectSupportedBufferFormats():void;
		SupportedBufferFormats():number;
		ConnectDestroyQCameraCaptureBufferFormatControl(f:()=>void):void;
		DisconnectDestroyQCameraCaptureBufferFormatControl():void;
		DestroyQCameraCaptureBufferFormatControl():void;
		DestroyQCameraCaptureBufferFormatControlDefault():void;
	}
	function NewQCameraCaptureBufferFormatControlFromPointer(ptr:number):QCameraCaptureBufferFormatControl;
	function NewQCameraCaptureBufferFormatControl(parent:core.QObject_ITF):QCameraCaptureBufferFormatControl;
	interface QCameraCaptureDestinationControl_ITF extends QMediaControl_ITF {
		QCameraCaptureDestinationControl_PTR():QCameraCaptureDestinationControl;
	}

	class QCameraCaptureDestinationControl extends QMediaControl {
		___pointer: number;
		QCameraCaptureDestinationControl_PTR():QCameraCaptureDestinationControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCaptureDestination(f:()=>number):void;
		DisconnectCaptureDestination():void;
		CaptureDestination():number;
		ConnectCaptureDestinationChanged(f:(destination:number)=>void):void;
		DisconnectCaptureDestinationChanged():void;
		CaptureDestinationChanged(destination:number):void;
		ConnectIsCaptureDestinationSupported(f:(destination:number)=>boolean):void;
		DisconnectIsCaptureDestinationSupported():void;
		IsCaptureDestinationSupported(destination:number):boolean;
		ConnectSetCaptureDestination(f:(destination:number)=>void):void;
		DisconnectSetCaptureDestination():void;
		SetCaptureDestination(destination:number):void;
		ConnectDestroyQCameraCaptureDestinationControl(f:()=>void):void;
		DisconnectDestroyQCameraCaptureDestinationControl():void;
		DestroyQCameraCaptureDestinationControl():void;
		DestroyQCameraCaptureDestinationControlDefault():void;
	}
	function NewQCameraCaptureDestinationControlFromPointer(ptr:number):QCameraCaptureDestinationControl;
	function NewQCameraCaptureDestinationControl(parent:core.QObject_ITF):QCameraCaptureDestinationControl;
	interface QCameraControl_ITF extends QMediaControl_ITF {
		QCameraControl_PTR():QCameraControl;
	}

	class QCameraControl extends QMediaControl {
		___pointer: number;
		QCameraControl_PTR():QCameraControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCanChangeProperty(f:(changeType:number,status:number)=>boolean):void;
		DisconnectCanChangeProperty():void;
		CanChangeProperty(changeType:number,status:number):boolean;
		ConnectCaptureMode(f:()=>number):void;
		DisconnectCaptureMode():void;
		CaptureMode():number;
		ConnectCaptureModeChanged(f:(mode:number)=>void):void;
		DisconnectCaptureModeChanged():void;
		CaptureModeChanged(mode:number):void;
		ConnectError(f:(error:number,errorString:string)=>void):void;
		DisconnectError():void;
		Error(error:number,errorString:string):void;
		ConnectIsCaptureModeSupported(f:(mode:number)=>boolean):void;
		DisconnectIsCaptureModeSupported():void;
		IsCaptureModeSupported(mode:number):boolean;
		ConnectSetCaptureMode(f:(mode:number)=>void):void;
		DisconnectSetCaptureMode():void;
		SetCaptureMode(mode:number):void;
		ConnectSetState(f:(state:number)=>void):void;
		DisconnectSetState():void;
		SetState(state:number):void;
		ConnectState(f:()=>number):void;
		DisconnectState():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStatus(f:()=>number):void;
		DisconnectStatus():void;
		Status():number;
		ConnectStatusChanged(f:(status:number)=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged(status:number):void;
		ConnectDestroyQCameraControl(f:()=>void):void;
		DisconnectDestroyQCameraControl():void;
		DestroyQCameraControl():void;
		DestroyQCameraControlDefault():void;
	}
	function NewQCameraControlFromPointer(ptr:number):QCameraControl;
	function NewQCameraControl(parent:core.QObject_ITF):QCameraControl;
	const QCameraControl__CaptureMode: number;
	const QCameraControl__ImageEncodingSettings: number;
	const QCameraControl__VideoEncodingSettings: number;
	const QCameraControl__Viewfinder: number;
	const QCameraControl__ViewfinderSettings: number;
	interface QCameraExposure_ITF extends core.QObject_ITF {
		QCameraExposure_PTR():QCameraExposure;
	}

	class QCameraExposure extends core.QObject {
		___pointer: number;
		QCameraExposure_PTR():QCameraExposure;
		Pointer():number;
		SetPointer(p:number):void;
		Aperture():number;
		ConnectApertureChanged(f:(value:number)=>void):void;
		DisconnectApertureChanged():void;
		ApertureChanged(value:number):void;
		ConnectApertureRangeChanged(f:()=>void):void;
		DisconnectApertureRangeChanged():void;
		ApertureRangeChanged():void;
		ExposureCompensation():number;
		ConnectExposureCompensationChanged(f:(value:number)=>void):void;
		DisconnectExposureCompensationChanged():void;
		ExposureCompensationChanged(value:number):void;
		ExposureMode():number;
		FlashMode():number;
		ConnectFlashReady(f:(ready:boolean)=>void):void;
		DisconnectFlashReady():void;
		FlashReady(ready:boolean):void;
		IsAvailable():boolean;
		IsExposureModeSupported(mode:number):boolean;
		IsFlashModeSupported(mode:number):boolean;
		IsFlashReady():boolean;
		IsMeteringModeSupported(mode:number):boolean;
		IsoSensitivity():number;
		ConnectIsoSensitivityChanged(f:(value:number)=>void):void;
		DisconnectIsoSensitivityChanged():void;
		IsoSensitivityChanged(value:number):void;
		MeteringMode():number;
		RequestedAperture():number;
		RequestedIsoSensitivity():number;
		RequestedShutterSpeed():number;
		ConnectSetAutoAperture(f:()=>void):void;
		DisconnectSetAutoAperture():void;
		SetAutoAperture():void;
		SetAutoApertureDefault():void;
		ConnectSetAutoIsoSensitivity(f:()=>void):void;
		DisconnectSetAutoIsoSensitivity():void;
		SetAutoIsoSensitivity():void;
		SetAutoIsoSensitivityDefault():void;
		ConnectSetAutoShutterSpeed(f:()=>void):void;
		DisconnectSetAutoShutterSpeed():void;
		SetAutoShutterSpeed():void;
		SetAutoShutterSpeedDefault():void;
		ConnectSetExposureCompensation(f:(ev:number)=>void):void;
		DisconnectSetExposureCompensation():void;
		SetExposureCompensation(ev:number):void;
		SetExposureCompensationDefault(ev:number):void;
		ConnectSetExposureMode(f:(mode:number)=>void):void;
		DisconnectSetExposureMode():void;
		SetExposureMode(mode:number):void;
		SetExposureModeDefault(mode:number):void;
		ConnectSetFlashMode(f:(mode:number)=>void):void;
		DisconnectSetFlashMode():void;
		SetFlashMode(mode:number):void;
		SetFlashModeDefault(mode:number):void;
		ConnectSetManualAperture(f:(aperture:number)=>void):void;
		DisconnectSetManualAperture():void;
		SetManualAperture(aperture:number):void;
		SetManualApertureDefault(aperture:number):void;
		ConnectSetManualIsoSensitivity(f:(iso:number)=>void):void;
		DisconnectSetManualIsoSensitivity():void;
		SetManualIsoSensitivity(iso:number):void;
		SetManualIsoSensitivityDefault(iso:number):void;
		ConnectSetManualShutterSpeed(f:(seconds:number)=>void):void;
		DisconnectSetManualShutterSpeed():void;
		SetManualShutterSpeed(seconds:number):void;
		SetManualShutterSpeedDefault(seconds:number):void;
		ConnectSetMeteringMode(f:(mode:number)=>void):void;
		DisconnectSetMeteringMode():void;
		SetMeteringMode(mode:number):void;
		SetMeteringModeDefault(mode:number):void;
		SetSpotMeteringPoint(point:core.QPointF_ITF):void;
		ShutterSpeed():number;
		ConnectShutterSpeedChanged(f:(speed:number)=>void):void;
		DisconnectShutterSpeedChanged():void;
		ShutterSpeedChanged(speed:number):void;
		ConnectShutterSpeedRangeChanged(f:()=>void):void;
		DisconnectShutterSpeedRangeChanged():void;
		ShutterSpeedRangeChanged():void;
		SpotMeteringPoint():core.QPointF;
		SupportedApertures(continuous:boolean):number[];
		SupportedIsoSensitivities(continuous:boolean):number[];
		SupportedShutterSpeeds(continuous:boolean):number[];
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQCameraExposureFromPointer(ptr:number):QCameraExposure;
	function NewQCameraExposureControl(parent:core.QObject_ITF):QCameraExposureControl;
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
	interface QCameraExposureControl_ITF extends QMediaControl_ITF {
		QCameraExposureControl_PTR():QCameraExposureControl;
	}

	class QCameraExposureControl extends QMediaControl {
		___pointer: number;
		QCameraExposureControl_PTR():QCameraExposureControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActualValue(f:(parameter:number)=>core.QVariant):void;
		DisconnectActualValue():void;
		ActualValue(parameter:number):core.QVariant;
		ConnectActualValueChanged(f:(parameter:number)=>void):void;
		DisconnectActualValueChanged():void;
		ActualValueChanged(parameter:number):void;
		ConnectIsParameterSupported(f:(parameter:number)=>boolean):void;
		DisconnectIsParameterSupported():void;
		IsParameterSupported(parameter:number):boolean;
		ConnectParameterRangeChanged(f:(parameter:number)=>void):void;
		DisconnectParameterRangeChanged():void;
		ParameterRangeChanged(parameter:number):void;
		ConnectRequestedValue(f:(parameter:number)=>core.QVariant):void;
		DisconnectRequestedValue():void;
		RequestedValue(parameter:number):core.QVariant;
		ConnectRequestedValueChanged(f:(parameter:number)=>void):void;
		DisconnectRequestedValueChanged():void;
		RequestedValueChanged(parameter:number):void;
		ConnectSetValue(f:(parameter:number,value:core.QVariant)=>boolean):void;
		DisconnectSetValue():void;
		SetValue(parameter:number,value:core.QVariant_ITF):boolean;
		ConnectSupportedParameterRange(f:(parameter:number,continuous:boolean)=>core.QVariant[]):void;
		DisconnectSupportedParameterRange():void;
		SupportedParameterRange(parameter:number,continuous:boolean):core.QVariant[];
		ConnectDestroyQCameraExposureControl(f:()=>void):void;
		DisconnectDestroyQCameraExposureControl():void;
		DestroyQCameraExposureControl():void;
		DestroyQCameraExposureControlDefault():void;
	}
	function NewQCameraExposureControlFromPointer(ptr:number):QCameraExposureControl;
	function NewQCameraExposureControl(parent:core.QObject_ITF):QCameraExposureControl;
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
	interface QCameraFeedbackControl_ITF extends QMediaControl_ITF {
		QCameraFeedbackControl_PTR():QCameraFeedbackControl;
	}

	class QCameraFeedbackControl extends QMediaControl {
		___pointer: number;
		QCameraFeedbackControl_PTR():QCameraFeedbackControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectIsEventFeedbackEnabled(f:(event:number)=>boolean):void;
		DisconnectIsEventFeedbackEnabled():void;
		IsEventFeedbackEnabled(event:number):boolean;
		ConnectIsEventFeedbackLocked(f:(event:number)=>boolean):void;
		DisconnectIsEventFeedbackLocked():void;
		IsEventFeedbackLocked(event:number):boolean;
		ConnectResetEventFeedback(f:(event:number)=>void):void;
		DisconnectResetEventFeedback():void;
		ResetEventFeedback(event:number):void;
		ConnectSetEventFeedbackEnabled(f:(event:number,enabled:boolean)=>boolean):void;
		DisconnectSetEventFeedbackEnabled():void;
		SetEventFeedbackEnabled(event:number,enabled:boolean):boolean;
		ConnectSetEventFeedbackSound(f:(event:number,filePath:string)=>boolean):void;
		DisconnectSetEventFeedbackSound():void;
		SetEventFeedbackSound(event:number,filePath:string):boolean;
		ConnectDestroyQCameraFeedbackControl(f:()=>void):void;
		DisconnectDestroyQCameraFeedbackControl():void;
		DestroyQCameraFeedbackControl():void;
		DestroyQCameraFeedbackControlDefault():void;
	}
	function NewQCameraFeedbackControlFromPointer(ptr:number):QCameraFeedbackControl;
	function NewQCameraFeedbackControl(parent:core.QObject_ITF):QCameraFeedbackControl;
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
	interface QCameraFlashControl_ITF extends QMediaControl_ITF {
		QCameraFlashControl_PTR():QCameraFlashControl;
	}

	class QCameraFlashControl extends QMediaControl {
		___pointer: number;
		QCameraFlashControl_PTR():QCameraFlashControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectFlashMode(f:()=>number):void;
		DisconnectFlashMode():void;
		FlashMode():number;
		ConnectFlashReady(f:(ready:boolean)=>void):void;
		DisconnectFlashReady():void;
		FlashReady(ready:boolean):void;
		ConnectIsFlashModeSupported(f:(mode:number)=>boolean):void;
		DisconnectIsFlashModeSupported():void;
		IsFlashModeSupported(mode:number):boolean;
		ConnectIsFlashReady(f:()=>boolean):void;
		DisconnectIsFlashReady():void;
		IsFlashReady():boolean;
		ConnectSetFlashMode(f:(mode:number)=>void):void;
		DisconnectSetFlashMode():void;
		SetFlashMode(mode:number):void;
		ConnectDestroyQCameraFlashControl(f:()=>void):void;
		DisconnectDestroyQCameraFlashControl():void;
		DestroyQCameraFlashControl():void;
		DestroyQCameraFlashControlDefault():void;
	}
	function NewQCameraFlashControlFromPointer(ptr:number):QCameraFlashControl;
	function NewQCameraFlashControl(parent:core.QObject_ITF):QCameraFlashControl;
	interface QCameraFocus_ITF extends core.QObject_ITF {
		QCameraFocus_PTR():QCameraFocus;
	}

	class QCameraFocus extends core.QObject {
		___pointer: number;
		QCameraFocus_PTR():QCameraFocus;
		Pointer():number;
		SetPointer(p:number):void;
		CustomFocusPoint():core.QPointF;
		DigitalZoom():number;
		ConnectDigitalZoomChanged(f:(value:number)=>void):void;
		DisconnectDigitalZoomChanged():void;
		DigitalZoomChanged(value:number):void;
		FocusMode():number;
		FocusPointMode():number;
		ConnectFocusZonesChanged(f:()=>void):void;
		DisconnectFocusZonesChanged():void;
		FocusZonesChanged():void;
		IsAvailable():boolean;
		IsFocusModeSupported(mode:number):boolean;
		IsFocusPointModeSupported(mode:number):boolean;
		MaximumDigitalZoom():number;
		ConnectMaximumDigitalZoomChanged(f:(zoom:number)=>void):void;
		DisconnectMaximumDigitalZoomChanged():void;
		MaximumDigitalZoomChanged(zoom:number):void;
		MaximumOpticalZoom():number;
		ConnectMaximumOpticalZoomChanged(f:(zoom:number)=>void):void;
		DisconnectMaximumOpticalZoomChanged():void;
		MaximumOpticalZoomChanged(zoom:number):void;
		OpticalZoom():number;
		ConnectOpticalZoomChanged(f:(value:number)=>void):void;
		DisconnectOpticalZoomChanged():void;
		OpticalZoomChanged(value:number):void;
		SetCustomFocusPoint(point:core.QPointF_ITF):void;
		SetFocusMode(mode:number):void;
		SetFocusPointMode(mode:number):void;
		ZoomTo(optical:number,digital:number):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQCameraFocusFromPointer(ptr:number):QCameraFocus;
	function NewQCameraFocusZone(other:QCameraFocusZone_ITF):QCameraFocusZone;
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
	interface QCameraFocusControl_ITF extends QMediaControl_ITF {
		QCameraFocusControl_PTR():QCameraFocusControl;
	}

	class QCameraFocusControl extends QMediaControl {
		___pointer: number;
		QCameraFocusControl_PTR():QCameraFocusControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCustomFocusPoint(f:()=>core.QPointF):void;
		DisconnectCustomFocusPoint():void;
		CustomFocusPoint():core.QPointF;
		ConnectCustomFocusPointChanged(f:(point:core.QPointF)=>void):void;
		DisconnectCustomFocusPointChanged():void;
		CustomFocusPointChanged(point:core.QPointF_ITF):void;
		ConnectFocusMode(f:()=>number):void;
		DisconnectFocusMode():void;
		FocusMode():number;
		ConnectFocusModeChanged(f:(mode:number)=>void):void;
		DisconnectFocusModeChanged():void;
		FocusModeChanged(mode:number):void;
		ConnectFocusPointMode(f:()=>number):void;
		DisconnectFocusPointMode():void;
		FocusPointMode():number;
		ConnectFocusPointModeChanged(f:(mode:number)=>void):void;
		DisconnectFocusPointModeChanged():void;
		FocusPointModeChanged(mode:number):void;
		ConnectFocusZonesChanged(f:()=>void):void;
		DisconnectFocusZonesChanged():void;
		FocusZonesChanged():void;
		ConnectIsFocusModeSupported(f:(mode:number)=>boolean):void;
		DisconnectIsFocusModeSupported():void;
		IsFocusModeSupported(mode:number):boolean;
		ConnectIsFocusPointModeSupported(f:(mode:number)=>boolean):void;
		DisconnectIsFocusPointModeSupported():void;
		IsFocusPointModeSupported(mode:number):boolean;
		ConnectSetCustomFocusPoint(f:(point:core.QPointF)=>void):void;
		DisconnectSetCustomFocusPoint():void;
		SetCustomFocusPoint(point:core.QPointF_ITF):void;
		ConnectSetFocusMode(f:(mode:number)=>void):void;
		DisconnectSetFocusMode():void;
		SetFocusMode(mode:number):void;
		ConnectSetFocusPointMode(f:(mode:number)=>void):void;
		DisconnectSetFocusPointMode():void;
		SetFocusPointMode(mode:number):void;
		ConnectDestroyQCameraFocusControl(f:()=>void):void;
		DisconnectDestroyQCameraFocusControl():void;
		DestroyQCameraFocusControl():void;
		DestroyQCameraFocusControlDefault():void;
	}
	function NewQCameraFocusControlFromPointer(ptr:number):QCameraFocusControl;
	interface QCameraFocusZone_ITF {
		QCameraFocusZone_PTR():QCameraFocusZone;
	}

	class QCameraFocusZone {
		___pointer: number;
		QCameraFocusZone_PTR():QCameraFocusZone;
		Pointer():number;
		SetPointer(p:number):void;
		Area():core.QRectF;
		IsValid():boolean;
		Status():number;
		DestroyQCameraFocusZone():void;
	}
	function NewQCameraFocusZoneFromPointer(ptr:number):QCameraFocusZone;
	function NewQCameraFocusZone(other:QCameraFocusZone_ITF):QCameraFocusZone;
	const QCameraFocusZone__Invalid: number;
	const QCameraFocusZone__Unused: number;
	const QCameraFocusZone__Selected: number;
	const QCameraFocusZone__Focused: number;
	interface QCameraImageCapture_ITF extends QMediaBindableInterface_ITF {
		QCameraImageCapture_PTR():QCameraImageCapture;
		QObject_PTR():core.QObject;
	}

	class QCameraImageCapture extends QMediaBindableInterface {
		QObject_PTR():core.QObject
		___pointer: number;
		QCameraImageCapture_PTR():QCameraImageCapture;
		Pointer():number;
		SetPointer(p:number):void;
		Availability():number;
		BufferFormat():number;
		ConnectBufferFormatChanged(f:(format:number)=>void):void;
		DisconnectBufferFormatChanged():void;
		BufferFormatChanged(format:number):void;
		ConnectCancelCapture(f:()=>void):void;
		DisconnectCancelCapture():void;
		CancelCapture():void;
		CancelCaptureDefault():void;
		ConnectCapture(f:(file:string)=>number):void;
		DisconnectCapture():void;
		Capture(file:string):number;
		CaptureDefault(file:string):number;
		CaptureDestination():number;
		ConnectCaptureDestinationChanged(f:(destination:number)=>void):void;
		DisconnectCaptureDestinationChanged():void;
		CaptureDestinationChanged(destination:number):void;
		EncodingSettings():QImageEncoderSettings;
		Error():number;
		ConnectError2(f:(id:number,error:number,errorString:string)=>void):void;
		DisconnectError2():void;
		Error2(id:number,error:number,errorString:string):void;
		ErrorString():string;
		ConnectImageAvailable(f:(id:number,frame:QVideoFrame)=>void):void;
		DisconnectImageAvailable():void;
		ImageAvailable(id:number,frame:QVideoFrame_ITF):void;
		ConnectImageCaptured(f:(id:number,preview:gui.QImage)=>void):void;
		DisconnectImageCaptured():void;
		ImageCaptured(id:number,preview:gui.QImage_ITF):void;
		ImageCodecDescription(codec:string):string;
		ConnectImageExposed(f:(id:number)=>void):void;
		DisconnectImageExposed():void;
		ImageExposed(id:number):void;
		ConnectImageMetadataAvailable(f:(id:number,key:string,value:core.QVariant)=>void):void;
		DisconnectImageMetadataAvailable():void;
		ImageMetadataAvailable(id:number,key:string,value:core.QVariant_ITF):void;
		ConnectImageSaved(f:(id:number,fileName:string)=>void):void;
		DisconnectImageSaved():void;
		ImageSaved(id:number,fileName:string):void;
		IsAvailable():boolean;
		IsCaptureDestinationSupported(destination:number):boolean;
		IsReadyForCapture():boolean;
		ConnectMediaObject(f:()=>QMediaObject):void;
		DisconnectMediaObject():void;
		MediaObject():QMediaObject;
		MediaObjectDefault():QMediaObject;
		ConnectReadyForCaptureChanged(f:(ready:boolean)=>void):void;
		DisconnectReadyForCaptureChanged():void;
		ReadyForCaptureChanged(ready:boolean):void;
		SetBufferFormat(format:number):void;
		SetCaptureDestination(destination:number):void;
		SetEncodingSettings(settings:QImageEncoderSettings_ITF):void;
		ConnectSetMediaObject(f:(mediaObject:QMediaObject)=>boolean):void;
		DisconnectSetMediaObject():void;
		SetMediaObject(mediaObject:QMediaObject_ITF):boolean;
		SetMediaObjectDefault(mediaObject:QMediaObject_ITF):boolean;
		SupportedBufferFormats():number;
		SupportedImageCodecs():string[];
		SupportedResolutions(settings:QImageEncoderSettings_ITF,continuous:boolean):core.QSize[];
		ConnectDestroyQCameraImageCapture(f:()=>void):void;
		DisconnectDestroyQCameraImageCapture():void;
		DestroyQCameraImageCapture():void;
		DestroyQCameraImageCaptureDefault():void;
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
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQCameraImageCaptureFromPointer(ptr:number):QCameraImageCapture;
	function NewQCameraImageCapture(mediaObject:QMediaObject_ITF,parent:core.QObject_ITF):QCameraImageCapture;
	function NewQCameraImageCaptureControl(parent:core.QObject_ITF):QCameraImageCaptureControl;
	const QCameraImageCapture__NoError: number;
	const QCameraImageCapture__NotReadyError: number;
	const QCameraImageCapture__ResourceError: number;
	const QCameraImageCapture__OutOfSpaceError: number;
	const QCameraImageCapture__NotSupportedFeatureError: number;
	const QCameraImageCapture__FormatError: number;
	const QCameraImageCapture__SingleImageCapture: number;
	const QCameraImageCapture__CaptureToFile: number;
	const QCameraImageCapture__CaptureToBuffer: number;
	interface QCameraImageCaptureControl_ITF extends QMediaControl_ITF {
		QCameraImageCaptureControl_PTR():QCameraImageCaptureControl;
	}

	class QCameraImageCaptureControl extends QMediaControl {
		___pointer: number;
		QCameraImageCaptureControl_PTR():QCameraImageCaptureControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCancelCapture(f:()=>void):void;
		DisconnectCancelCapture():void;
		CancelCapture():void;
		ConnectCapture(f:(fileName:string)=>number):void;
		DisconnectCapture():void;
		Capture(fileName:string):number;
		ConnectDriveMode(f:()=>number):void;
		DisconnectDriveMode():void;
		DriveMode():number;
		ConnectError(f:(id:number,error:number,errorString:string)=>void):void;
		DisconnectError():void;
		Error(id:number,error:number,errorString:string):void;
		ConnectImageAvailable(f:(requestId:number,buffer:QVideoFrame)=>void):void;
		DisconnectImageAvailable():void;
		ImageAvailable(requestId:number,buffer:QVideoFrame_ITF):void;
		ConnectImageCaptured(f:(requestId:number,preview:gui.QImage)=>void):void;
		DisconnectImageCaptured():void;
		ImageCaptured(requestId:number,preview:gui.QImage_ITF):void;
		ConnectImageExposed(f:(requestId:number)=>void):void;
		DisconnectImageExposed():void;
		ImageExposed(requestId:number):void;
		ConnectImageMetadataAvailable(f:(id:number,key:string,value:core.QVariant)=>void):void;
		DisconnectImageMetadataAvailable():void;
		ImageMetadataAvailable(id:number,key:string,value:core.QVariant_ITF):void;
		ConnectImageSaved(f:(requestId:number,fileName:string)=>void):void;
		DisconnectImageSaved():void;
		ImageSaved(requestId:number,fileName:string):void;
		ConnectIsReadyForCapture(f:()=>boolean):void;
		DisconnectIsReadyForCapture():void;
		IsReadyForCapture():boolean;
		ConnectReadyForCaptureChanged(f:(ready:boolean)=>void):void;
		DisconnectReadyForCaptureChanged():void;
		ReadyForCaptureChanged(ready:boolean):void;
		ConnectSetDriveMode(f:(mode:number)=>void):void;
		DisconnectSetDriveMode():void;
		SetDriveMode(mode:number):void;
		ConnectDestroyQCameraImageCaptureControl(f:()=>void):void;
		DisconnectDestroyQCameraImageCaptureControl():void;
		DestroyQCameraImageCaptureControl():void;
		DestroyQCameraImageCaptureControlDefault():void;
	}
	function NewQCameraImageCaptureControlFromPointer(ptr:number):QCameraImageCaptureControl;
	function NewQCameraImageCaptureControl(parent:core.QObject_ITF):QCameraImageCaptureControl;
	interface QCameraImageProcessing_ITF extends core.QObject_ITF {
		QCameraImageProcessing_PTR():QCameraImageProcessing;
	}

	class QCameraImageProcessing extends core.QObject {
		___pointer: number;
		QCameraImageProcessing_PTR():QCameraImageProcessing;
		Pointer():number;
		SetPointer(p:number):void;
		Brightness():number;
		ColorFilter():number;
		Contrast():number;
		DenoisingLevel():number;
		IsAvailable():boolean;
		IsColorFilterSupported(filter:number):boolean;
		IsWhiteBalanceModeSupported(mode:number):boolean;
		ManualWhiteBalance():number;
		Saturation():number;
		SetBrightness(value:number):void;
		SetColorFilter(filter:number):void;
		SetContrast(value:number):void;
		SetDenoisingLevel(level:number):void;
		SetManualWhiteBalance(colorTemperature:number):void;
		SetSaturation(value:number):void;
		SetSharpeningLevel(level:number):void;
		SetWhiteBalanceMode(mode:number):void;
		SharpeningLevel():number;
		WhiteBalanceMode():number;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQCameraImageProcessingFromPointer(ptr:number):QCameraImageProcessing;
	function NewQCameraImageProcessingControl(parent:core.QObject_ITF):QCameraImageProcessingControl;
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
	interface QCameraImageProcessingControl_ITF extends QMediaControl_ITF {
		QCameraImageProcessingControl_PTR():QCameraImageProcessingControl;
	}

	class QCameraImageProcessingControl extends QMediaControl {
		___pointer: number;
		QCameraImageProcessingControl_PTR():QCameraImageProcessingControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectIsParameterSupported(f:(parameter:number)=>boolean):void;
		DisconnectIsParameterSupported():void;
		IsParameterSupported(parameter:number):boolean;
		ConnectIsParameterValueSupported(f:(parameter:number,value:core.QVariant)=>boolean):void;
		DisconnectIsParameterValueSupported():void;
		IsParameterValueSupported(parameter:number,value:core.QVariant_ITF):boolean;
		ConnectParameter(f:(parameter:number)=>core.QVariant):void;
		DisconnectParameter():void;
		Parameter(parameter:number):core.QVariant;
		ConnectSetParameter(f:(parameter:number,value:core.QVariant)=>void):void;
		DisconnectSetParameter():void;
		SetParameter(parameter:number,value:core.QVariant_ITF):void;
		ConnectDestroyQCameraImageProcessingControl(f:()=>void):void;
		DisconnectDestroyQCameraImageProcessingControl():void;
		DestroyQCameraImageProcessingControl():void;
		DestroyQCameraImageProcessingControlDefault():void;
	}
	function NewQCameraImageProcessingControlFromPointer(ptr:number):QCameraImageProcessingControl;
	function NewQCameraImageProcessingControl(parent:core.QObject_ITF):QCameraImageProcessingControl;
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
	interface QCameraInfo_ITF {
		QCameraInfo_PTR():QCameraInfo;
	}

	class QCameraInfo {
		___pointer: number;
		QCameraInfo_PTR():QCameraInfo;
		Pointer():number;
		SetPointer(p:number):void;
		AvailableCameras(position:number):QCameraInfo[];
		DefaultCamera():QCameraInfo;
		Description():string;
		DeviceName():string;
		IsNull():boolean;
		Orientation():number;
		Position():number;
		DestroyQCameraInfo():void;
	}
	function NewQCameraInfoFromPointer(ptr:number):QCameraInfo;
	function NewQCameraInfo(name:core.QByteArray_ITF):QCameraInfo;
	function NewQCameraInfo2(camera:QCamera_ITF):QCameraInfo;
	function NewQCameraInfo3(other:QCameraInfo_ITF):QCameraInfo;
	function QCameraInfo_AvailableCameras(position:number):QCameraInfo[];
	function QCameraInfo_DefaultCamera():QCameraInfo;
	function NewQCameraInfoControl(parent:core.QObject_ITF):QCameraInfoControl;
	interface QCameraInfoControl_ITF extends QMediaControl_ITF {
		QCameraInfoControl_PTR():QCameraInfoControl;
	}

	class QCameraInfoControl extends QMediaControl {
		___pointer: number;
		QCameraInfoControl_PTR():QCameraInfoControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCameraOrientation(f:(deviceName:string)=>number):void;
		DisconnectCameraOrientation():void;
		CameraOrientation(deviceName:string):number;
		ConnectCameraPosition(f:(deviceName:string)=>number):void;
		DisconnectCameraPosition():void;
		CameraPosition(deviceName:string):number;
		ConnectDestroyQCameraInfoControl(f:()=>void):void;
		DisconnectDestroyQCameraInfoControl():void;
		DestroyQCameraInfoControl():void;
		DestroyQCameraInfoControlDefault():void;
	}
	function NewQCameraInfoControlFromPointer(ptr:number):QCameraInfoControl;
	function NewQCameraInfoControl(parent:core.QObject_ITF):QCameraInfoControl;
	interface QCameraLocksControl_ITF extends QMediaControl_ITF {
		QCameraLocksControl_PTR():QCameraLocksControl;
	}

	class QCameraLocksControl extends QMediaControl {
		___pointer: number;
		QCameraLocksControl_PTR():QCameraLocksControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectLockStatus(f:(lock:number)=>number):void;
		DisconnectLockStatus():void;
		LockStatus(lock:number):number;
		ConnectLockStatusChanged(f:(ty:number,status:number,reason:number)=>void):void;
		DisconnectLockStatusChanged():void;
		LockStatusChanged(ty:number,status:number,reason:number):void;
		ConnectSearchAndLock(f:(locks:number)=>void):void;
		DisconnectSearchAndLock():void;
		SearchAndLock(locks:number):void;
		ConnectSupportedLocks(f:()=>number):void;
		DisconnectSupportedLocks():void;
		SupportedLocks():number;
		ConnectUnlock(f:(locks:number)=>void):void;
		DisconnectUnlock():void;
		Unlock(locks:number):void;
		ConnectDestroyQCameraLocksControl(f:()=>void):void;
		DisconnectDestroyQCameraLocksControl():void;
		DestroyQCameraLocksControl():void;
		DestroyQCameraLocksControlDefault():void;
	}
	function NewQCameraLocksControlFromPointer(ptr:number):QCameraLocksControl;
	function NewQCameraLocksControl(parent:core.QObject_ITF):QCameraLocksControl;
	interface QCameraViewfinderSettings_ITF {
		QCameraViewfinderSettings_PTR():QCameraViewfinderSettings;
	}

	class QCameraViewfinderSettings {
		___pointer: number;
		QCameraViewfinderSettings_PTR():QCameraViewfinderSettings;
		Pointer():number;
		SetPointer(p:number):void;
		IsNull():boolean;
		MaximumFrameRate():number;
		MinimumFrameRate():number;
		PixelAspectRatio():core.QSize;
		PixelFormat():number;
		Resolution():core.QSize;
		SetMaximumFrameRate(rate:number):void;
		SetMinimumFrameRate(rate:number):void;
		SetPixelAspectRatio(ratio:core.QSize_ITF):void;
		SetPixelAspectRatio2(horizontal:number,vertical:number):void;
		SetPixelFormat(format:number):void;
		SetResolution(resolution:core.QSize_ITF):void;
		SetResolution2(width:number,height:number):void;
		Swap(other:QCameraViewfinderSettings_ITF):void;
		DestroyQCameraViewfinderSettings():void;
	}
	function NewQCameraViewfinderSettingsFromPointer(ptr:number):QCameraViewfinderSettings;
	function NewQCameraViewfinderSettings():QCameraViewfinderSettings;
	function NewQCameraViewfinderSettings2(other:QCameraViewfinderSettings_ITF):QCameraViewfinderSettings;
	function NewQCameraViewfinderSettingsControl(parent:core.QObject_ITF):QCameraViewfinderSettingsControl;
	function NewQCameraViewfinderSettingsControl2(parent:core.QObject_ITF):QCameraViewfinderSettingsControl2;
	interface QCameraViewfinderSettingsControl_ITF extends QMediaControl_ITF {
		QCameraViewfinderSettingsControl_PTR():QCameraViewfinderSettingsControl;
	}

	class QCameraViewfinderSettingsControl extends QMediaControl {
		___pointer: number;
		QCameraViewfinderSettingsControl_PTR():QCameraViewfinderSettingsControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectIsViewfinderParameterSupported(f:(parameter:number)=>boolean):void;
		DisconnectIsViewfinderParameterSupported():void;
		IsViewfinderParameterSupported(parameter:number):boolean;
		ConnectSetViewfinderParameter(f:(parameter:number,value:core.QVariant)=>void):void;
		DisconnectSetViewfinderParameter():void;
		SetViewfinderParameter(parameter:number,value:core.QVariant_ITF):void;
		ConnectViewfinderParameter(f:(parameter:number)=>core.QVariant):void;
		DisconnectViewfinderParameter():void;
		ViewfinderParameter(parameter:number):core.QVariant;
		ConnectDestroyQCameraViewfinderSettingsControl(f:()=>void):void;
		DisconnectDestroyQCameraViewfinderSettingsControl():void;
		DestroyQCameraViewfinderSettingsControl():void;
		DestroyQCameraViewfinderSettingsControlDefault():void;
	}
	function NewQCameraViewfinderSettingsControlFromPointer(ptr:number):QCameraViewfinderSettingsControl;
	function NewQCameraViewfinderSettingsControl(parent:core.QObject_ITF):QCameraViewfinderSettingsControl;
	function NewQCameraViewfinderSettingsControl2(parent:core.QObject_ITF):QCameraViewfinderSettingsControl2;
	const QCameraViewfinderSettingsControl__Resolution: number;
	const QCameraViewfinderSettingsControl__PixelAspectRatio: number;
	const QCameraViewfinderSettingsControl__MinimumFrameRate: number;
	const QCameraViewfinderSettingsControl__MaximumFrameRate: number;
	const QCameraViewfinderSettingsControl__PixelFormat: number;
	const QCameraViewfinderSettingsControl__UserParameter: number;
	interface QCameraViewfinderSettingsControl2_ITF extends QMediaControl_ITF {
		QCameraViewfinderSettingsControl2_PTR():QCameraViewfinderSettingsControl2;
	}

	class QCameraViewfinderSettingsControl2 extends QMediaControl {
		___pointer: number;
		QCameraViewfinderSettingsControl2_PTR():QCameraViewfinderSettingsControl2;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectSetViewfinderSettings(f:(settings:QCameraViewfinderSettings)=>void):void;
		DisconnectSetViewfinderSettings():void;
		SetViewfinderSettings(settings:QCameraViewfinderSettings_ITF):void;
		ConnectSupportedViewfinderSettings(f:()=>QCameraViewfinderSettings[]):void;
		DisconnectSupportedViewfinderSettings():void;
		SupportedViewfinderSettings():QCameraViewfinderSettings[];
		ConnectViewfinderSettings(f:()=>QCameraViewfinderSettings):void;
		DisconnectViewfinderSettings():void;
		ViewfinderSettings():QCameraViewfinderSettings;
		ConnectDestroyQCameraViewfinderSettingsControl2(f:()=>void):void;
		DisconnectDestroyQCameraViewfinderSettingsControl2():void;
		DestroyQCameraViewfinderSettingsControl2():void;
		DestroyQCameraViewfinderSettingsControl2Default():void;
	}
	function NewQCameraViewfinderSettingsControl2FromPointer(ptr:number):QCameraViewfinderSettingsControl2;
	function NewQCameraViewfinderSettingsControl2(parent:core.QObject_ITF):QCameraViewfinderSettingsControl2;
	interface QCameraZoomControl_ITF extends QMediaControl_ITF {
		QCameraZoomControl_PTR():QCameraZoomControl;
	}

	class QCameraZoomControl extends QMediaControl {
		___pointer: number;
		QCameraZoomControl_PTR():QCameraZoomControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCurrentDigitalZoom(f:()=>number):void;
		DisconnectCurrentDigitalZoom():void;
		CurrentDigitalZoom():number;
		ConnectCurrentDigitalZoomChanged(f:(zoom:number)=>void):void;
		DisconnectCurrentDigitalZoomChanged():void;
		CurrentDigitalZoomChanged(zoom:number):void;
		ConnectCurrentOpticalZoom(f:()=>number):void;
		DisconnectCurrentOpticalZoom():void;
		CurrentOpticalZoom():number;
		ConnectCurrentOpticalZoomChanged(f:(zoom:number)=>void):void;
		DisconnectCurrentOpticalZoomChanged():void;
		CurrentOpticalZoomChanged(zoom:number):void;
		ConnectMaximumDigitalZoom(f:()=>number):void;
		DisconnectMaximumDigitalZoom():void;
		MaximumDigitalZoom():number;
		ConnectMaximumDigitalZoomChanged(f:(zoom:number)=>void):void;
		DisconnectMaximumDigitalZoomChanged():void;
		MaximumDigitalZoomChanged(zoom:number):void;
		ConnectMaximumOpticalZoom(f:()=>number):void;
		DisconnectMaximumOpticalZoom():void;
		MaximumOpticalZoom():number;
		ConnectMaximumOpticalZoomChanged(f:(zoom:number)=>void):void;
		DisconnectMaximumOpticalZoomChanged():void;
		MaximumOpticalZoomChanged(zoom:number):void;
		ConnectRequestedDigitalZoom(f:()=>number):void;
		DisconnectRequestedDigitalZoom():void;
		RequestedDigitalZoom():number;
		ConnectRequestedDigitalZoomChanged(f:(zoom:number)=>void):void;
		DisconnectRequestedDigitalZoomChanged():void;
		RequestedDigitalZoomChanged(zoom:number):void;
		ConnectRequestedOpticalZoom(f:()=>number):void;
		DisconnectRequestedOpticalZoom():void;
		RequestedOpticalZoom():number;
		ConnectRequestedOpticalZoomChanged(f:(zoom:number)=>void):void;
		DisconnectRequestedOpticalZoomChanged():void;
		RequestedOpticalZoomChanged(zoom:number):void;
		ConnectZoomTo(f:(optical:number,digital:number)=>void):void;
		DisconnectZoomTo():void;
		ZoomTo(optical:number,digital:number):void;
		ConnectDestroyQCameraZoomControl(f:()=>void):void;
		DisconnectDestroyQCameraZoomControl():void;
		DestroyQCameraZoomControl():void;
		DestroyQCameraZoomControlDefault():void;
	}
	function NewQCameraZoomControlFromPointer(ptr:number):QCameraZoomControl;
	function NewQCameraZoomControl(parent:core.QObject_ITF):QCameraZoomControl;
	interface QCustomAudioRoleControl_ITF extends QMediaControl_ITF {
		QCustomAudioRoleControl_PTR():QCustomAudioRoleControl;
	}

	class QCustomAudioRoleControl extends QMediaControl {
		___pointer: number;
		QCustomAudioRoleControl_PTR():QCustomAudioRoleControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCustomAudioRole(f:()=>string):void;
		DisconnectCustomAudioRole():void;
		CustomAudioRole():string;
		ConnectCustomAudioRoleChanged(f:(role:string)=>void):void;
		DisconnectCustomAudioRoleChanged():void;
		CustomAudioRoleChanged(role:string):void;
		ConnectSetCustomAudioRole(f:(role:string)=>void):void;
		DisconnectSetCustomAudioRole():void;
		SetCustomAudioRole(role:string):void;
		ConnectSupportedCustomAudioRoles(f:()=>string[]):void;
		DisconnectSupportedCustomAudioRoles():void;
		SupportedCustomAudioRoles():string[];
		ConnectDestroyQCustomAudioRoleControl(f:()=>void):void;
		DisconnectDestroyQCustomAudioRoleControl():void;
		DestroyQCustomAudioRoleControl():void;
		DestroyQCustomAudioRoleControlDefault():void;
	}
	function NewQCustomAudioRoleControlFromPointer(ptr:number):QCustomAudioRoleControl;
	function NewQCustomAudioRoleControl(parent:core.QObject_ITF):QCustomAudioRoleControl;
	interface QImageEncoderControl_ITF extends QMediaControl_ITF {
		QImageEncoderControl_PTR():QImageEncoderControl;
	}

	class QImageEncoderControl extends QMediaControl {
		___pointer: number;
		QImageEncoderControl_PTR():QImageEncoderControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectImageCodecDescription(f:(codec:string)=>string):void;
		DisconnectImageCodecDescription():void;
		ImageCodecDescription(codec:string):string;
		ConnectImageSettings(f:()=>QImageEncoderSettings):void;
		DisconnectImageSettings():void;
		ImageSettings():QImageEncoderSettings;
		ConnectSetImageSettings(f:(settings:QImageEncoderSettings)=>void):void;
		DisconnectSetImageSettings():void;
		SetImageSettings(settings:QImageEncoderSettings_ITF):void;
		ConnectSupportedImageCodecs(f:()=>string[]):void;
		DisconnectSupportedImageCodecs():void;
		SupportedImageCodecs():string[];
		ConnectSupportedResolutions(f:(settings:QImageEncoderSettings,continuous:boolean)=>core.QSize[]):void;
		DisconnectSupportedResolutions():void;
		SupportedResolutions(settings:QImageEncoderSettings_ITF,continuous:boolean):core.QSize[];
		ConnectDestroyQImageEncoderControl(f:()=>void):void;
		DisconnectDestroyQImageEncoderControl():void;
		DestroyQImageEncoderControl():void;
		DestroyQImageEncoderControlDefault():void;
	}
	function NewQImageEncoderControlFromPointer(ptr:number):QImageEncoderControl;
	function NewQImageEncoderControl(parent:core.QObject_ITF):QImageEncoderControl;
	interface QImageEncoderSettings_ITF {
		QImageEncoderSettings_PTR():QImageEncoderSettings;
	}

	class QImageEncoderSettings {
		___pointer: number;
		QImageEncoderSettings_PTR():QImageEncoderSettings;
		Pointer():number;
		SetPointer(p:number):void;
		Codec():string;
		EncodingOption(option:string):core.QVariant;
		EncodingOptions():Map<string,core.QVariant>;
		IsNull():boolean;
		Quality():number;
		Resolution():core.QSize;
		SetCodec(codec:string):void;
		SetEncodingOption(option:string,value:core.QVariant_ITF):void;
		SetEncodingOptions(options:Map<string,core.QVariant>):void;
		SetQuality(quality:number):void;
		SetResolution(resolution:core.QSize_ITF):void;
		SetResolution2(width:number,height:number):void;
		DestroyQImageEncoderSettings():void;
	}
	function NewQImageEncoderSettingsFromPointer(ptr:number):QImageEncoderSettings;
	function NewQImageEncoderSettings():QImageEncoderSettings;
	function NewQImageEncoderSettings2(other:QImageEncoderSettings_ITF):QImageEncoderSettings;
	interface QMediaAudioProbeControl_ITF extends QMediaControl_ITF {
		QMediaAudioProbeControl_PTR():QMediaAudioProbeControl;
	}

	class QMediaAudioProbeControl extends QMediaControl {
		___pointer: number;
		QMediaAudioProbeControl_PTR():QMediaAudioProbeControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAudioBufferProbed(f:(buffer:QAudioBuffer)=>void):void;
		DisconnectAudioBufferProbed():void;
		AudioBufferProbed(buffer:QAudioBuffer_ITF):void;
		ConnectFlush(f:()=>void):void;
		DisconnectFlush():void;
		Flush():void;
		ConnectDestroyQMediaAudioProbeControl(f:()=>void):void;
		DisconnectDestroyQMediaAudioProbeControl():void;
		DestroyQMediaAudioProbeControl():void;
		DestroyQMediaAudioProbeControlDefault():void;
	}
	function NewQMediaAudioProbeControlFromPointer(ptr:number):QMediaAudioProbeControl;
	function NewQMediaAudioProbeControl(parent:core.QObject_ITF):QMediaAudioProbeControl;
	interface QMediaAvailabilityControl_ITF extends QMediaControl_ITF {
		QMediaAvailabilityControl_PTR():QMediaAvailabilityControl;
	}

	class QMediaAvailabilityControl extends QMediaControl {
		___pointer: number;
		QMediaAvailabilityControl_PTR():QMediaAvailabilityControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAvailability(f:()=>number):void;
		DisconnectAvailability():void;
		Availability():number;
		ConnectAvailabilityChanged(f:(availability:number)=>void):void;
		DisconnectAvailabilityChanged():void;
		AvailabilityChanged(availability:number):void;
		ConnectDestroyQMediaAvailabilityControl(f:()=>void):void;
		DisconnectDestroyQMediaAvailabilityControl():void;
		DestroyQMediaAvailabilityControl():void;
		DestroyQMediaAvailabilityControlDefault():void;
	}
	function NewQMediaAvailabilityControlFromPointer(ptr:number):QMediaAvailabilityControl;
	function NewQMediaAvailabilityControl(parent:core.QObject_ITF):QMediaAvailabilityControl;
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
	interface QMediaContainerControl_ITF extends QMediaControl_ITF {
		QMediaContainerControl_PTR():QMediaContainerControl;
	}

	class QMediaContainerControl extends QMediaControl {
		___pointer: number;
		QMediaContainerControl_PTR():QMediaContainerControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectContainerDescription(f:(formatMimeType:string)=>string):void;
		DisconnectContainerDescription():void;
		ContainerDescription(formatMimeType:string):string;
		ConnectContainerFormat(f:()=>string):void;
		DisconnectContainerFormat():void;
		ContainerFormat():string;
		ConnectSetContainerFormat(f:(format:string)=>void):void;
		DisconnectSetContainerFormat():void;
		SetContainerFormat(format:string):void;
		ConnectSupportedContainers(f:()=>string[]):void;
		DisconnectSupportedContainers():void;
		SupportedContainers():string[];
		ConnectDestroyQMediaContainerControl(f:()=>void):void;
		DisconnectDestroyQMediaContainerControl():void;
		DestroyQMediaContainerControl():void;
		DestroyQMediaContainerControlDefault():void;
	}
	function NewQMediaContainerControlFromPointer(ptr:number):QMediaContainerControl;
	function NewQMediaContainerControl(parent:core.QObject_ITF):QMediaContainerControl;
	interface QMediaContent_ITF {
		QMediaContent_PTR():QMediaContent;
	}

	class QMediaContent {
		___pointer: number;
		QMediaContent_PTR():QMediaContent;
		Pointer():number;
		SetPointer(p:number):void;
		CanonicalRequest():network.QNetworkRequest;
		CanonicalUrl():core.QUrl;
		IsNull():boolean;
		Playlist():QMediaPlaylist;
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
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQMediaControlFromPointer(ptr:number):QMediaControl;
	function NewQMediaControl(parent:core.QObject_ITF):QMediaControl;
	interface QMediaGaplessPlaybackControl_ITF extends QMediaControl_ITF {
		QMediaGaplessPlaybackControl_PTR():QMediaGaplessPlaybackControl;
	}

	class QMediaGaplessPlaybackControl extends QMediaControl {
		___pointer: number;
		QMediaGaplessPlaybackControl_PTR():QMediaGaplessPlaybackControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAdvancedToNextMedia(f:()=>void):void;
		DisconnectAdvancedToNextMedia():void;
		AdvancedToNextMedia():void;
		ConnectCrossfadeTime(f:()=>number):void;
		DisconnectCrossfadeTime():void;
		CrossfadeTime():number;
		ConnectCrossfadeTimeChanged(f:(crossfadeTime:number)=>void):void;
		DisconnectCrossfadeTimeChanged():void;
		CrossfadeTimeChanged(crossfadeTime:number):void;
		ConnectIsCrossfadeSupported(f:()=>boolean):void;
		DisconnectIsCrossfadeSupported():void;
		IsCrossfadeSupported():boolean;
		ConnectNextMedia(f:()=>QMediaContent):void;
		DisconnectNextMedia():void;
		NextMedia():QMediaContent;
		ConnectNextMediaChanged(f:(media:QMediaContent)=>void):void;
		DisconnectNextMediaChanged():void;
		NextMediaChanged(media:QMediaContent_ITF):void;
		ConnectSetCrossfadeTime(f:(crossfadeTime:number)=>void):void;
		DisconnectSetCrossfadeTime():void;
		SetCrossfadeTime(crossfadeTime:number):void;
		ConnectSetNextMedia(f:(media:QMediaContent)=>void):void;
		DisconnectSetNextMedia():void;
		SetNextMedia(media:QMediaContent_ITF):void;
		ConnectDestroyQMediaGaplessPlaybackControl(f:()=>void):void;
		DisconnectDestroyQMediaGaplessPlaybackControl():void;
		DestroyQMediaGaplessPlaybackControl():void;
		DestroyQMediaGaplessPlaybackControlDefault():void;
	}
	function NewQMediaGaplessPlaybackControlFromPointer(ptr:number):QMediaGaplessPlaybackControl;
	function NewQMediaGaplessPlaybackControl(parent:core.QObject_ITF):QMediaGaplessPlaybackControl;
	interface QMediaNetworkAccessControl_ITF extends QMediaControl_ITF {
		QMediaNetworkAccessControl_PTR():QMediaNetworkAccessControl;
	}

	class QMediaNetworkAccessControl extends QMediaControl {
		___pointer: number;
		QMediaNetworkAccessControl_PTR():QMediaNetworkAccessControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectConfigurationChanged(f:(configuration:network.QNetworkConfiguration)=>void):void;
		DisconnectConfigurationChanged():void;
		ConfigurationChanged(configuration:network.QNetworkConfiguration_ITF):void;
		ConnectCurrentConfiguration(f:()=>network.QNetworkConfiguration):void;
		DisconnectCurrentConfiguration():void;
		CurrentConfiguration():network.QNetworkConfiguration;
		ConnectSetConfigurations(f:(configurations:network.QNetworkConfiguration[])=>void):void;
		DisconnectSetConfigurations():void;
		SetConfigurations(configurations:network.QNetworkConfiguration[]):void;
		ConnectDestroyQMediaNetworkAccessControl(f:()=>void):void;
		DisconnectDestroyQMediaNetworkAccessControl():void;
		DestroyQMediaNetworkAccessControl():void;
		DestroyQMediaNetworkAccessControlDefault():void;
	}
	function NewQMediaNetworkAccessControlFromPointer(ptr:number):QMediaNetworkAccessControl;
	interface QMediaObject_ITF extends core.QObject_ITF {
		QMediaObject_PTR():QMediaObject;
	}

	class QMediaObject extends core.QObject {
		___pointer: number;
		QMediaObject_PTR():QMediaObject;
		Pointer():number;
		SetPointer(p:number):void;
		AddPropertyWatch(name:core.QByteArray_ITF):void;
		ConnectAvailability(f:()=>number):void;
		DisconnectAvailability():void;
		Availability():number;
		AvailabilityDefault():number;
		ConnectAvailabilityChanged(f:(available:boolean)=>void):void;
		DisconnectAvailabilityChanged():void;
		AvailabilityChanged(available:boolean):void;
		ConnectAvailabilityChanged2(f:(availability:number)=>void):void;
		DisconnectAvailabilityChanged2():void;
		AvailabilityChanged2(availability:number):void;
		AvailableMetaData():string[];
		ConnectBind(f:(object:core.QObject)=>boolean):void;
		DisconnectBind():void;
		Bind(object:core.QObject_ITF):boolean;
		BindDefault(object:core.QObject_ITF):boolean;
		ConnectIsAvailable(f:()=>boolean):void;
		DisconnectIsAvailable():void;
		IsAvailable():boolean;
		IsAvailableDefault():boolean;
		IsMetaDataAvailable():boolean;
		MetaData(key:string):core.QVariant;
		ConnectMetaDataAvailableChanged(f:(available:boolean)=>void):void;
		DisconnectMetaDataAvailableChanged():void;
		MetaDataAvailableChanged(available:boolean):void;
		ConnectMetaDataChanged(f:()=>void):void;
		DisconnectMetaDataChanged():void;
		MetaDataChanged():void;
		ConnectMetaDataChanged2(f:(key:string,value:core.QVariant)=>void):void;
		DisconnectMetaDataChanged2():void;
		MetaDataChanged2(key:string,value:core.QVariant_ITF):void;
		NotifyInterval():number;
		ConnectNotifyIntervalChanged(f:(milliseconds:number)=>void):void;
		DisconnectNotifyIntervalChanged():void;
		NotifyIntervalChanged(milliseconds:number):void;
		RemovePropertyWatch(name:core.QByteArray_ITF):void;
		ConnectService(f:()=>QMediaService):void;
		DisconnectService():void;
		Service():QMediaService;
		ServiceDefault():QMediaService;
		SetNotifyInterval(milliSeconds:number):void;
		ConnectUnbind(f:(object:core.QObject)=>void):void;
		DisconnectUnbind():void;
		Unbind(object:core.QObject_ITF):void;
		UnbindDefault(object:core.QObject_ITF):void;
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
		MetaObjectDefault():core.QMetaObject;
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
		ConnectAudioAvailableChanged(f:(available:boolean)=>void):void;
		DisconnectAudioAvailableChanged():void;
		AudioAvailableChanged(available:boolean):void;
		AudioRole():number;
		ConnectAudioRoleChanged(f:(role:number)=>void):void;
		DisconnectAudioRoleChanged():void;
		AudioRoleChanged(role:number):void;
		BufferStatus():number;
		ConnectBufferStatusChanged(f:(percentFilled:number)=>void):void;
		DisconnectBufferStatusChanged():void;
		BufferStatusChanged(percentFilled:number):void;
		CurrentMedia():QMediaContent;
		ConnectCurrentMediaChanged(f:(media:QMediaContent)=>void):void;
		DisconnectCurrentMediaChanged():void;
		CurrentMediaChanged(media:QMediaContent_ITF):void;
		CurrentNetworkConfiguration():network.QNetworkConfiguration;
		CustomAudioRole():string;
		ConnectCustomAudioRoleChanged(f:(role:string)=>void):void;
		DisconnectCustomAudioRoleChanged():void;
		CustomAudioRoleChanged(role:string):void;
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
		IsAudioAvailable():boolean;
		IsMuted():boolean;
		IsSeekable():boolean;
		IsVideoAvailable():boolean;
		Media():QMediaContent;
		ConnectMediaChanged(f:(media:QMediaContent)=>void):void;
		DisconnectMediaChanged():void;
		MediaChanged(media:QMediaContent_ITF):void;
		MediaStatus():number;
		ConnectMediaStatusChanged(f:(status:number)=>void):void;
		DisconnectMediaStatusChanged():void;
		MediaStatusChanged(status:number):void;
		MediaStream():core.QIODevice;
		ConnectMutedChanged(f:(muted:boolean)=>void):void;
		DisconnectMutedChanged():void;
		MutedChanged(muted:boolean):void;
		ConnectNetworkConfigurationChanged(f:(configuration:network.QNetworkConfiguration)=>void):void;
		DisconnectNetworkConfigurationChanged():void;
		NetworkConfigurationChanged(configuration:network.QNetworkConfiguration_ITF):void;
		ConnectPause(f:()=>void):void;
		DisconnectPause():void;
		Pause():void;
		PauseDefault():void;
		ConnectPlay(f:()=>void):void;
		DisconnectPlay():void;
		Play():void;
		PlayDefault():void;
		PlaybackRate():number;
		ConnectPlaybackRateChanged(f:(rate:number)=>void):void;
		DisconnectPlaybackRateChanged():void;
		PlaybackRateChanged(rate:number):void;
		Playlist():QMediaPlaylist;
		Position():number;
		ConnectPositionChanged(f:(position:number)=>void):void;
		DisconnectPositionChanged():void;
		PositionChanged(position:number):void;
		ConnectSeekableChanged(f:(seekable:boolean)=>void):void;
		DisconnectSeekableChanged():void;
		SeekableChanged(seekable:boolean):void;
		SetAudioRole(audioRole:number):void;
		SetCustomAudioRole(audioRole:string):void;
		ConnectSetMedia(f:(media:QMediaContent,stream:core.QIODevice)=>void):void;
		DisconnectSetMedia():void;
		SetMedia(media:QMediaContent_ITF,stream:core.QIODevice_ITF):void;
		SetMediaDefault(media:QMediaContent_ITF,stream:core.QIODevice_ITF):void;
		ConnectSetMuted(f:(muted:boolean)=>void):void;
		DisconnectSetMuted():void;
		SetMuted(muted:boolean):void;
		SetMutedDefault(muted:boolean):void;
		ConnectSetNetworkConfigurations(f:(configurations:network.QNetworkConfiguration[])=>void):void;
		DisconnectSetNetworkConfigurations():void;
		SetNetworkConfigurations(configurations:network.QNetworkConfiguration[]):void;
		SetNetworkConfigurationsDefault(configurations:network.QNetworkConfiguration[]):void;
		ConnectSetPlaybackRate(f:(rate:number)=>void):void;
		DisconnectSetPlaybackRate():void;
		SetPlaybackRate(rate:number):void;
		SetPlaybackRateDefault(rate:number):void;
		ConnectSetPlaylist(f:(playlist:QMediaPlaylist)=>void):void;
		DisconnectSetPlaylist():void;
		SetPlaylist(playlist:QMediaPlaylist_ITF):void;
		SetPlaylistDefault(playlist:QMediaPlaylist_ITF):void;
		ConnectSetPosition(f:(position:number)=>void):void;
		DisconnectSetPosition():void;
		SetPosition(position:number):void;
		SetPositionDefault(position:number):void;
		SetVideoOutput(output:QVideoWidget_ITF):void;
		SetVideoOutput3(surface:QAbstractVideoSurface_ITF):void;
		ConnectSetVolume(f:(volume:number)=>void):void;
		DisconnectSetVolume():void;
		SetVolume(volume:number):void;
		SetVolumeDefault(volume:number):void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		SupportedAudioRoles():number;
		SupportedCustomAudioRoles():string[];
		ConnectVideoAvailableChanged(f:(videoAvailable:boolean)=>void):void;
		DisconnectVideoAvailableChanged():void;
		VideoAvailableChanged(videoAvailable:boolean):void;
		Volume():number;
		ConnectVolumeChanged(f:(volume:number)=>void):void;
		DisconnectVolumeChanged():void;
		VolumeChanged(volume:number):void;
		ConnectDestroyQMediaPlayer(f:()=>void):void;
		DisconnectDestroyQMediaPlayer():void;
		DestroyQMediaPlayer():void;
		DestroyQMediaPlayerDefault():void;
	}
	function NewQMediaPlayerFromPointer(ptr:number):QMediaPlayer;
	function NewQMediaPlayer(parent:core.QObject_ITF,flags:number):QMediaPlayer;
	function QMediaPlayer_HasSupport(mimeType:string,codecs:string[],flags:number):number;
	function NewQMediaPlayerControl(parent:core.QObject_ITF):QMediaPlayerControl;
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
	interface QMediaPlayerControl_ITF extends QMediaControl_ITF {
		QMediaPlayerControl_PTR():QMediaPlayerControl;
	}

	class QMediaPlayerControl extends QMediaControl {
		___pointer: number;
		QMediaPlayerControl_PTR():QMediaPlayerControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAudioAvailableChanged(f:(audioAvailable:boolean)=>void):void;
		DisconnectAudioAvailableChanged():void;
		AudioAvailableChanged(audioAvailable:boolean):void;
		ConnectAvailablePlaybackRanges(f:()=>QMediaTimeRange):void;
		DisconnectAvailablePlaybackRanges():void;
		AvailablePlaybackRanges():QMediaTimeRange;
		ConnectAvailablePlaybackRangesChanged(f:(ranges:QMediaTimeRange)=>void):void;
		DisconnectAvailablePlaybackRangesChanged():void;
		AvailablePlaybackRangesChanged(ranges:QMediaTimeRange_ITF):void;
		ConnectBufferStatus(f:()=>number):void;
		DisconnectBufferStatus():void;
		BufferStatus():number;
		ConnectBufferStatusChanged(f:(percentFilled:number)=>void):void;
		DisconnectBufferStatusChanged():void;
		BufferStatusChanged(percentFilled:number):void;
		ConnectDuration(f:()=>number):void;
		DisconnectDuration():void;
		Duration():number;
		ConnectDurationChanged(f:(duration:number)=>void):void;
		DisconnectDurationChanged():void;
		DurationChanged(duration:number):void;
		ConnectError(f:(error:number,errorString:string)=>void):void;
		DisconnectError():void;
		Error(error:number,errorString:string):void;
		ConnectIsAudioAvailable(f:()=>boolean):void;
		DisconnectIsAudioAvailable():void;
		IsAudioAvailable():boolean;
		ConnectIsMuted(f:()=>boolean):void;
		DisconnectIsMuted():void;
		IsMuted():boolean;
		ConnectIsSeekable(f:()=>boolean):void;
		DisconnectIsSeekable():void;
		IsSeekable():boolean;
		ConnectIsVideoAvailable(f:()=>boolean):void;
		DisconnectIsVideoAvailable():void;
		IsVideoAvailable():boolean;
		ConnectMedia(f:()=>QMediaContent):void;
		DisconnectMedia():void;
		Media():QMediaContent;
		ConnectMediaChanged(f:(content:QMediaContent)=>void):void;
		DisconnectMediaChanged():void;
		MediaChanged(content:QMediaContent_ITF):void;
		ConnectMediaStatus(f:()=>number):void;
		DisconnectMediaStatus():void;
		MediaStatus():number;
		ConnectMediaStatusChanged(f:(status:number)=>void):void;
		DisconnectMediaStatusChanged():void;
		MediaStatusChanged(status:number):void;
		ConnectMediaStream(f:()=>core.QIODevice):void;
		DisconnectMediaStream():void;
		MediaStream():core.QIODevice;
		ConnectMutedChanged(f:(mute:boolean)=>void):void;
		DisconnectMutedChanged():void;
		MutedChanged(mute:boolean):void;
		ConnectPause(f:()=>void):void;
		DisconnectPause():void;
		Pause():void;
		ConnectPlay(f:()=>void):void;
		DisconnectPlay():void;
		Play():void;
		ConnectPlaybackRate(f:()=>number):void;
		DisconnectPlaybackRate():void;
		PlaybackRate():number;
		ConnectPlaybackRateChanged(f:(rate:number)=>void):void;
		DisconnectPlaybackRateChanged():void;
		PlaybackRateChanged(rate:number):void;
		ConnectPosition(f:()=>number):void;
		DisconnectPosition():void;
		Position():number;
		ConnectPositionChanged(f:(position:number)=>void):void;
		DisconnectPositionChanged():void;
		PositionChanged(position:number):void;
		ConnectSeekableChanged(f:(seekable:boolean)=>void):void;
		DisconnectSeekableChanged():void;
		SeekableChanged(seekable:boolean):void;
		ConnectSetMedia(f:(media:QMediaContent,stream:core.QIODevice)=>void):void;
		DisconnectSetMedia():void;
		SetMedia(media:QMediaContent_ITF,stream:core.QIODevice_ITF):void;
		ConnectSetMuted(f:(mute:boolean)=>void):void;
		DisconnectSetMuted():void;
		SetMuted(mute:boolean):void;
		ConnectSetPlaybackRate(f:(rate:number)=>void):void;
		DisconnectSetPlaybackRate():void;
		SetPlaybackRate(rate:number):void;
		ConnectSetPosition(f:(position:number)=>void):void;
		DisconnectSetPosition():void;
		SetPosition(position:number):void;
		ConnectSetVolume(f:(volume:number)=>void):void;
		DisconnectSetVolume():void;
		SetVolume(volume:number):void;
		ConnectState(f:()=>number):void;
		DisconnectState():void;
		State():number;
		ConnectStateChanged(f:(newState:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(newState:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		ConnectVideoAvailableChanged(f:(videoAvailable:boolean)=>void):void;
		DisconnectVideoAvailableChanged():void;
		VideoAvailableChanged(videoAvailable:boolean):void;
		ConnectVolume(f:()=>number):void;
		DisconnectVolume():void;
		Volume():number;
		ConnectVolumeChanged(f:(volume:number)=>void):void;
		DisconnectVolumeChanged():void;
		VolumeChanged(volume:number):void;
		ConnectDestroyQMediaPlayerControl(f:()=>void):void;
		DisconnectDestroyQMediaPlayerControl():void;
		DestroyQMediaPlayerControl():void;
		DestroyQMediaPlayerControlDefault():void;
	}
	function NewQMediaPlayerControlFromPointer(ptr:number):QMediaPlayerControl;
	function NewQMediaPlayerControl(parent:core.QObject_ITF):QMediaPlayerControl;
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
		AddMedia(content:QMediaContent_ITF):boolean;
		AddMedia2(items:QMediaContent[]):boolean;
		Clear():boolean;
		CurrentIndex():number;
		ConnectCurrentIndexChanged(f:(position:number)=>void):void;
		DisconnectCurrentIndexChanged():void;
		CurrentIndexChanged(position:number):void;
		CurrentMedia():QMediaContent;
		ConnectCurrentMediaChanged(f:(content:QMediaContent)=>void):void;
		DisconnectCurrentMediaChanged():void;
		CurrentMediaChanged(content:QMediaContent_ITF):void;
		Error():number;
		ErrorString():string;
		InsertMedia(pos:number,content:QMediaContent_ITF):boolean;
		InsertMedia2(pos:number,items:QMediaContent[]):boolean;
		IsEmpty():boolean;
		IsReadOnly():boolean;
		Load(request:network.QNetworkRequest_ITF,format:string):void;
		Load2(location:core.QUrl_ITF,format:string):void;
		Load3(device:core.QIODevice_ITF,format:string):void;
		ConnectLoadFailed(f:()=>void):void;
		DisconnectLoadFailed():void;
		LoadFailed():void;
		ConnectLoaded(f:()=>void):void;
		DisconnectLoaded():void;
		Loaded():void;
		Media(index:number):QMediaContent;
		ConnectMediaAboutToBeInserted(f:(start:number,end:number)=>void):void;
		DisconnectMediaAboutToBeInserted():void;
		MediaAboutToBeInserted(start:number,end:number):void;
		ConnectMediaAboutToBeRemoved(f:(start:number,end:number)=>void):void;
		DisconnectMediaAboutToBeRemoved():void;
		MediaAboutToBeRemoved(start:number,end:number):void;
		ConnectMediaChanged(f:(start:number,end:number)=>void):void;
		DisconnectMediaChanged():void;
		MediaChanged(start:number,end:number):void;
		MediaCount():number;
		ConnectMediaInserted(f:(start:number,end:number)=>void):void;
		DisconnectMediaInserted():void;
		MediaInserted(start:number,end:number):void;
		ConnectMediaObject(f:()=>QMediaObject):void;
		DisconnectMediaObject():void;
		MediaObject():QMediaObject;
		MediaObjectDefault():QMediaObject;
		ConnectMediaRemoved(f:(start:number,end:number)=>void):void;
		DisconnectMediaRemoved():void;
		MediaRemoved(start:number,end:number):void;
		MoveMedia(from:number,to:number):boolean;
		ConnectNext(f:()=>void):void;
		DisconnectNext():void;
		Next():void;
		NextDefault():void;
		NextIndex(steps:number):number;
		PlaybackMode():number;
		ConnectPlaybackModeChanged(f:(mode:number)=>void):void;
		DisconnectPlaybackModeChanged():void;
		PlaybackModeChanged(mode:number):void;
		ConnectPrevious(f:()=>void):void;
		DisconnectPrevious():void;
		Previous():void;
		PreviousDefault():void;
		PreviousIndex(steps:number):number;
		RemoveMedia(pos:number):boolean;
		RemoveMedia2(start:number,end:number):boolean;
		Save(location:core.QUrl_ITF,format:string):boolean;
		Save2(device:core.QIODevice_ITF,format:string):boolean;
		ConnectSetCurrentIndex(f:(playlistPosition:number)=>void):void;
		DisconnectSetCurrentIndex():void;
		SetCurrentIndex(playlistPosition:number):void;
		SetCurrentIndexDefault(playlistPosition:number):void;
		SetPlaybackMode(mode:number):void;
		ConnectShuffle(f:()=>void):void;
		DisconnectShuffle():void;
		Shuffle():void;
		ShuffleDefault():void;
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
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
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
	interface QMediaRecorder_ITF extends QMediaBindableInterface_ITF {
		QMediaRecorder_PTR():QMediaRecorder;
		QObject_PTR():core.QObject;
	}

	class QMediaRecorder extends QMediaBindableInterface {
		QObject_PTR():core.QObject
		___pointer: number;
		QMediaRecorder_PTR():QMediaRecorder;
		Pointer():number;
		SetPointer(p:number):void;
		ActualLocation():core.QUrl;
		ConnectActualLocationChanged(f:(location:core.QUrl)=>void):void;
		DisconnectActualLocationChanged():void;
		ActualLocationChanged(location:core.QUrl_ITF):void;
		AudioCodecDescription(codec:string):string;
		AudioSettings():QAudioEncoderSettings;
		Availability():number;
		ConnectAvailabilityChanged(f:(available:boolean)=>void):void;
		DisconnectAvailabilityChanged():void;
		AvailabilityChanged(available:boolean):void;
		ConnectAvailabilityChanged2(f:(availability:number)=>void):void;
		DisconnectAvailabilityChanged2():void;
		AvailabilityChanged2(availability:number):void;
		AvailableMetaData():string[];
		ContainerDescription(format:string):string;
		ContainerFormat():string;
		Duration():number;
		ConnectDurationChanged(f:(duration:number)=>void):void;
		DisconnectDurationChanged():void;
		DurationChanged(duration:number):void;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ErrorString():string;
		IsAvailable():boolean;
		IsMetaDataAvailable():boolean;
		IsMetaDataWritable():boolean;
		IsMuted():boolean;
		ConnectMediaObject(f:()=>QMediaObject):void;
		DisconnectMediaObject():void;
		MediaObject():QMediaObject;
		MediaObjectDefault():QMediaObject;
		MetaData(key:string):core.QVariant;
		ConnectMetaDataAvailableChanged(f:(available:boolean)=>void):void;
		DisconnectMetaDataAvailableChanged():void;
		MetaDataAvailableChanged(available:boolean):void;
		ConnectMetaDataChanged(f:()=>void):void;
		DisconnectMetaDataChanged():void;
		MetaDataChanged():void;
		ConnectMetaDataChanged2(f:(key:string,value:core.QVariant)=>void):void;
		DisconnectMetaDataChanged2():void;
		MetaDataChanged2(key:string,value:core.QVariant_ITF):void;
		ConnectMetaDataWritableChanged(f:(writable:boolean)=>void):void;
		DisconnectMetaDataWritableChanged():void;
		MetaDataWritableChanged(writable:boolean):void;
		ConnectMutedChanged(f:(muted:boolean)=>void):void;
		DisconnectMutedChanged():void;
		MutedChanged(muted:boolean):void;
		OutputLocation():core.QUrl;
		ConnectPause(f:()=>void):void;
		DisconnectPause():void;
		Pause():void;
		PauseDefault():void;
		ConnectRecord(f:()=>void):void;
		DisconnectRecord():void;
		Record():void;
		RecordDefault():void;
		SetAudioSettings(settings:QAudioEncoderSettings_ITF):void;
		SetContainerFormat(container:string):void;
		SetEncodingSettings(audio:QAudioEncoderSettings_ITF,video:QVideoEncoderSettings_ITF,container:string):void;
		SetMetaData(key:string,value:core.QVariant_ITF):void;
		ConnectSetMuted(f:(muted:boolean)=>void):void;
		DisconnectSetMuted():void;
		SetMuted(muted:boolean):void;
		SetMutedDefault(muted:boolean):void;
		SetOutputLocation(location:core.QUrl_ITF):boolean;
		SetVideoSettings(settings:QVideoEncoderSettings_ITF):void;
		ConnectSetVolume(f:(volume:number)=>void):void;
		DisconnectSetVolume():void;
		SetVolume(volume:number):void;
		SetVolumeDefault(volume:number):void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		Status():number;
		ConnectStatusChanged(f:(status:number)=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged(status:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		SupportedAudioCodecs():string[];
		SupportedAudioSampleRates(settings:QAudioEncoderSettings_ITF,continuous:boolean):number[];
		SupportedContainers():string[];
		SupportedFrameRates(settings:QVideoEncoderSettings_ITF,continuous:boolean):number[];
		SupportedResolutions(settings:QVideoEncoderSettings_ITF,continuous:boolean):core.QSize[];
		SupportedVideoCodecs():string[];
		VideoCodecDescription(codec:string):string;
		VideoSettings():QVideoEncoderSettings;
		Volume():number;
		ConnectVolumeChanged(f:(volume:number)=>void):void;
		DisconnectVolumeChanged():void;
		VolumeChanged(volume:number):void;
		ConnectDestroyQMediaRecorder(f:()=>void):void;
		DisconnectDestroyQMediaRecorder():void;
		DestroyQMediaRecorder():void;
		DestroyQMediaRecorderDefault():void;
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
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
		SetMediaObject(object:QMediaObject_ITF):boolean;
		SetMediaObjectDefault(object:QMediaObject_ITF):boolean;
	}
	function NewQMediaRecorderFromPointer(ptr:number):QMediaRecorder;
	function NewQMediaRecorder(mediaObject:QMediaObject_ITF,parent:core.QObject_ITF):QMediaRecorder;
	function NewQMediaRecorderControl(parent:core.QObject_ITF):QMediaRecorderControl;
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
	interface QMediaRecorderControl_ITF extends QMediaControl_ITF {
		QMediaRecorderControl_PTR():QMediaRecorderControl;
	}

	class QMediaRecorderControl extends QMediaControl {
		___pointer: number;
		QMediaRecorderControl_PTR():QMediaRecorderControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActualLocationChanged(f:(location:core.QUrl)=>void):void;
		DisconnectActualLocationChanged():void;
		ActualLocationChanged(location:core.QUrl_ITF):void;
		ConnectApplySettings(f:()=>void):void;
		DisconnectApplySettings():void;
		ApplySettings():void;
		ConnectDuration(f:()=>number):void;
		DisconnectDuration():void;
		Duration():number;
		ConnectDurationChanged(f:(duration:number)=>void):void;
		DisconnectDurationChanged():void;
		DurationChanged(duration:number):void;
		ConnectError(f:(error:number,errorString:string)=>void):void;
		DisconnectError():void;
		Error(error:number,errorString:string):void;
		ConnectIsMuted(f:()=>boolean):void;
		DisconnectIsMuted():void;
		IsMuted():boolean;
		ConnectMutedChanged(f:(muted:boolean)=>void):void;
		DisconnectMutedChanged():void;
		MutedChanged(muted:boolean):void;
		ConnectOutputLocation(f:()=>core.QUrl):void;
		DisconnectOutputLocation():void;
		OutputLocation():core.QUrl;
		ConnectSetMuted(f:(muted:boolean)=>void):void;
		DisconnectSetMuted():void;
		SetMuted(muted:boolean):void;
		ConnectSetOutputLocation(f:(location:core.QUrl)=>boolean):void;
		DisconnectSetOutputLocation():void;
		SetOutputLocation(location:core.QUrl_ITF):boolean;
		ConnectSetState(f:(state:number)=>void):void;
		DisconnectSetState():void;
		SetState(state:number):void;
		ConnectSetVolume(f:(volume:number)=>void):void;
		DisconnectSetVolume():void;
		SetVolume(volume:number):void;
		ConnectState(f:()=>number):void;
		DisconnectState():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStatus(f:()=>number):void;
		DisconnectStatus():void;
		Status():number;
		ConnectStatusChanged(f:(status:number)=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged(status:number):void;
		ConnectVolume(f:()=>number):void;
		DisconnectVolume():void;
		Volume():number;
		ConnectVolumeChanged(f:(gai:number)=>void):void;
		DisconnectVolumeChanged():void;
		VolumeChanged(gai:number):void;
		ConnectDestroyQMediaRecorderControl(f:()=>void):void;
		DisconnectDestroyQMediaRecorderControl():void;
		DestroyQMediaRecorderControl():void;
		DestroyQMediaRecorderControlDefault():void;
	}
	function NewQMediaRecorderControlFromPointer(ptr:number):QMediaRecorderControl;
	function NewQMediaRecorderControl(parent:core.QObject_ITF):QMediaRecorderControl;
	interface QMediaResource_ITF {
		QMediaResource_PTR():QMediaResource;
	}

	class QMediaResource {
		___pointer: number;
		QMediaResource_PTR():QMediaResource;
		Pointer():number;
		SetPointer(p:number):void;
		AudioBitRate():number;
		AudioCodec():string;
		ChannelCount():number;
		DataSize():number;
		IsNull():boolean;
		Language():string;
		MimeType():string;
		Request():network.QNetworkRequest;
		Resolution():core.QSize;
		SampleRate():number;
		SetAudioBitRate(rate:number):void;
		SetAudioCodec(codec:string):void;
		SetChannelCount(channels:number):void;
		SetDataSize(size:number):void;
		SetLanguage(language:string):void;
		SetResolution(resolution:core.QSize_ITF):void;
		SetResolution2(width:number,height:number):void;
		SetSampleRate(sampleRate:number):void;
		SetVideoBitRate(rate:number):void;
		SetVideoCodec(codec:string):void;
		Url():core.QUrl;
		VideoBitRate():number;
		VideoCodec():string;
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
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQMediaServiceFromPointer(ptr:number):QMediaService;
	function NewQMediaService(parent:core.QObject_ITF):QMediaService;
	interface QMediaServiceCameraInfoInterface_ITF {
		QMediaServiceCameraInfoInterface_PTR():QMediaServiceCameraInfoInterface;
	}

	class QMediaServiceCameraInfoInterface {
		___pointer: number;
		QMediaServiceCameraInfoInterface_PTR():QMediaServiceCameraInfoInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCameraOrientation(f:(device:core.QByteArray)=>number):void;
		DisconnectCameraOrientation():void;
		CameraOrientation(device:core.QByteArray_ITF):number;
		ConnectCameraPosition(f:(device:core.QByteArray)=>number):void;
		DisconnectCameraPosition():void;
		CameraPosition(device:core.QByteArray_ITF):number;
		ConnectDestroyQMediaServiceCameraInfoInterface(f:()=>void):void;
		DisconnectDestroyQMediaServiceCameraInfoInterface():void;
		DestroyQMediaServiceCameraInfoInterface():void;
		DestroyQMediaServiceCameraInfoInterfaceDefault():void;
	}
	function NewQMediaServiceCameraInfoInterfaceFromPointer(ptr:number):QMediaServiceCameraInfoInterface;
	interface QMediaServiceDefaultDeviceInterface_ITF {
		QMediaServiceDefaultDeviceInterface_PTR():QMediaServiceDefaultDeviceInterface;
	}

	class QMediaServiceDefaultDeviceInterface {
		___pointer: number;
		QMediaServiceDefaultDeviceInterface_PTR():QMediaServiceDefaultDeviceInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDefaultDevice(f:(service:core.QByteArray)=>core.QByteArray):void;
		DisconnectDefaultDevice():void;
		DefaultDevice(service:core.QByteArray_ITF):core.QByteArray;
		ConnectDestroyQMediaServiceDefaultDeviceInterface(f:()=>void):void;
		DisconnectDestroyQMediaServiceDefaultDeviceInterface():void;
		DestroyQMediaServiceDefaultDeviceInterface():void;
		DestroyQMediaServiceDefaultDeviceInterfaceDefault():void;
	}
	function NewQMediaServiceDefaultDeviceInterfaceFromPointer(ptr:number):QMediaServiceDefaultDeviceInterface;
	interface QMediaServiceFeaturesInterface_ITF {
		QMediaServiceFeaturesInterface_PTR():QMediaServiceFeaturesInterface;
	}

	class QMediaServiceFeaturesInterface {
		___pointer: number;
		QMediaServiceFeaturesInterface_PTR():QMediaServiceFeaturesInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQMediaServiceFeaturesInterface(f:()=>void):void;
		DisconnectDestroyQMediaServiceFeaturesInterface():void;
		DestroyQMediaServiceFeaturesInterface():void;
		DestroyQMediaServiceFeaturesInterfaceDefault():void;
	}
	function NewQMediaServiceFeaturesInterfaceFromPointer(ptr:number):QMediaServiceFeaturesInterface;
	interface QMediaServiceProviderFactoryInterface_ITF {
		QMediaServiceProviderFactoryInterface_PTR():QMediaServiceProviderFactoryInterface;
	}

	class QMediaServiceProviderFactoryInterface {
		___pointer: number;
		QMediaServiceProviderFactoryInterface_PTR():QMediaServiceProviderFactoryInterface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMediaServiceProviderFactoryInterface():void;
	}
	function NewQMediaServiceProviderFactoryInterfaceFromPointer(ptr:number):QMediaServiceProviderFactoryInterface;
	interface QMediaServiceProviderPlugin_ITF extends QMediaServiceProviderFactoryInterface_ITF {
		QMediaServiceProviderPlugin_PTR():QMediaServiceProviderPlugin;
		QObject_PTR():core.QObject;
	}

	class QMediaServiceProviderPlugin extends QMediaServiceProviderFactoryInterface {
		QObject_PTR():core.QObject
		___pointer: number;
		QMediaServiceProviderPlugin_PTR():QMediaServiceProviderPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreate(f:(key:string)=>QMediaService):void;
		DisconnectCreate():void;
		Create(key:string):QMediaService;
		ConnectRelease(f:(service:QMediaService)=>void):void;
		DisconnectRelease():void;
		Release(service:QMediaService_ITF):void;
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
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQMediaServiceProviderPluginFromPointer(ptr:number):QMediaServiceProviderPlugin;
	interface QMediaServiceSupportedDevicesInterface_ITF {
		QMediaServiceSupportedDevicesInterface_PTR():QMediaServiceSupportedDevicesInterface;
	}

	class QMediaServiceSupportedDevicesInterface {
		___pointer: number;
		QMediaServiceSupportedDevicesInterface_PTR():QMediaServiceSupportedDevicesInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDeviceDescription(f:(service:core.QByteArray,device:core.QByteArray)=>string):void;
		DisconnectDeviceDescription():void;
		DeviceDescription(service:core.QByteArray_ITF,device:core.QByteArray_ITF):string;
		ConnectDevices(f:(service:core.QByteArray)=>core.QByteArray[]):void;
		DisconnectDevices():void;
		Devices(service:core.QByteArray_ITF):core.QByteArray[];
		ConnectDestroyQMediaServiceSupportedDevicesInterface(f:()=>void):void;
		DisconnectDestroyQMediaServiceSupportedDevicesInterface():void;
		DestroyQMediaServiceSupportedDevicesInterface():void;
		DestroyQMediaServiceSupportedDevicesInterfaceDefault():void;
	}
	function NewQMediaServiceSupportedDevicesInterfaceFromPointer(ptr:number):QMediaServiceSupportedDevicesInterface;
	interface QMediaServiceSupportedFormatsInterface_ITF {
		QMediaServiceSupportedFormatsInterface_PTR():QMediaServiceSupportedFormatsInterface;
	}

	class QMediaServiceSupportedFormatsInterface {
		___pointer: number;
		QMediaServiceSupportedFormatsInterface_PTR():QMediaServiceSupportedFormatsInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectHasSupport(f:(mimeType:string,codecs:string[])=>number):void;
		DisconnectHasSupport():void;
		HasSupport(mimeType:string,codecs:string[]):number;
		ConnectSupportedMimeTypes(f:()=>string[]):void;
		DisconnectSupportedMimeTypes():void;
		SupportedMimeTypes():string[];
		ConnectDestroyQMediaServiceSupportedFormatsInterface(f:()=>void):void;
		DisconnectDestroyQMediaServiceSupportedFormatsInterface():void;
		DestroyQMediaServiceSupportedFormatsInterface():void;
		DestroyQMediaServiceSupportedFormatsInterfaceDefault():void;
	}
	function NewQMediaServiceSupportedFormatsInterfaceFromPointer(ptr:number):QMediaServiceSupportedFormatsInterface;
	interface QMediaStreamsControl_ITF extends QMediaControl_ITF {
		QMediaStreamsControl_PTR():QMediaStreamsControl;
	}

	class QMediaStreamsControl extends QMediaControl {
		___pointer: number;
		QMediaStreamsControl_PTR():QMediaStreamsControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActiveStreamsChanged(f:()=>void):void;
		DisconnectActiveStreamsChanged():void;
		ActiveStreamsChanged():void;
		ConnectIsActive(f:(streamNumber:number)=>boolean):void;
		DisconnectIsActive():void;
		IsActive(streamNumber:number):boolean;
		ConnectMetaData(f:(streamNumber:number,key:string)=>core.QVariant):void;
		DisconnectMetaData():void;
		MetaData(streamNumber:number,key:string):core.QVariant;
		ConnectSetActive(f:(streamNumber:number,state:boolean)=>void):void;
		DisconnectSetActive():void;
		SetActive(streamNumber:number,state:boolean):void;
		ConnectStreamCount(f:()=>number):void;
		DisconnectStreamCount():void;
		StreamCount():number;
		ConnectStreamType(f:(streamNumber:number)=>number):void;
		DisconnectStreamType():void;
		StreamType(streamNumber:number):number;
		ConnectStreamsChanged(f:()=>void):void;
		DisconnectStreamsChanged():void;
		StreamsChanged():void;
		ConnectDestroyQMediaStreamsControl(f:()=>void):void;
		DisconnectDestroyQMediaStreamsControl():void;
		DestroyQMediaStreamsControl():void;
		DestroyQMediaStreamsControlDefault():void;
	}
	function NewQMediaStreamsControlFromPointer(ptr:number):QMediaStreamsControl;
	function NewQMediaStreamsControl(parent:core.QObject_ITF):QMediaStreamsControl;
	const QMediaStreamsControl__UnknownStream: number;
	const QMediaStreamsControl__VideoStream: number;
	const QMediaStreamsControl__AudioStream: number;
	const QMediaStreamsControl__SubPictureStream: number;
	const QMediaStreamsControl__DataStream: number;
	interface QMediaTimeInterval_ITF {
		QMediaTimeInterval_PTR():QMediaTimeInterval;
	}

	class QMediaTimeInterval {
		___pointer: number;
		QMediaTimeInterval_PTR():QMediaTimeInterval;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMediaTimeInterval():void;
		Contains(ti:number):boolean;
		End():number;
		IsNormal():boolean;
		Normalized():QMediaTimeInterval;
		Start():number;
		Translated(offset:number):QMediaTimeInterval;
	}
	function NewQMediaTimeIntervalFromPointer(ptr:number):QMediaTimeInterval;
	function NewQMediaTimeInterval():QMediaTimeInterval;
	function NewQMediaTimeInterval2(start:number,end:number):QMediaTimeInterval;
	function NewQMediaTimeInterval3(other:QMediaTimeInterval_ITF):QMediaTimeInterval;
	interface QMediaTimeRange_ITF {
		QMediaTimeRange_PTR():QMediaTimeRange;
	}

	class QMediaTimeRange {
		___pointer: number;
		QMediaTimeRange_PTR():QMediaTimeRange;
		Pointer():number;
		SetPointer(p:number):void;
		AddInterval(interval:QMediaTimeInterval_ITF):void;
		AddInterval2(start:number,end:number):void;
		AddTimeRange(ran:QMediaTimeRange_ITF):void;
		Clear():void;
		Contains(ti:number):boolean;
		EarliestTime():number;
		Intervals():QMediaTimeInterval[];
		IsContinuous():boolean;
		IsEmpty():boolean;
		LatestTime():number;
		RemoveInterval(interval:QMediaTimeInterval_ITF):void;
		RemoveInterval2(start:number,end:number):void;
		RemoveTimeRange(ran:QMediaTimeRange_ITF):void;
		DestroyQMediaTimeRange():void;
	}
	function NewQMediaTimeRangeFromPointer(ptr:number):QMediaTimeRange;
	function NewQMediaTimeRange():QMediaTimeRange;
	function NewQMediaTimeRange2(start:number,end:number):QMediaTimeRange;
	function NewQMediaTimeRange3(interval:QMediaTimeInterval_ITF):QMediaTimeRange;
	function NewQMediaTimeRange4(ran:QMediaTimeRange_ITF):QMediaTimeRange;
	interface QMediaVideoProbeControl_ITF extends QMediaControl_ITF {
		QMediaVideoProbeControl_PTR():QMediaVideoProbeControl;
	}

	class QMediaVideoProbeControl extends QMediaControl {
		___pointer: number;
		QMediaVideoProbeControl_PTR():QMediaVideoProbeControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectFlush(f:()=>void):void;
		DisconnectFlush():void;
		Flush():void;
		ConnectVideoFrameProbed(f:(frame:QVideoFrame)=>void):void;
		DisconnectVideoFrameProbed():void;
		VideoFrameProbed(frame:QVideoFrame_ITF):void;
		ConnectDestroyQMediaVideoProbeControl(f:()=>void):void;
		DisconnectDestroyQMediaVideoProbeControl():void;
		DestroyQMediaVideoProbeControl():void;
		DestroyQMediaVideoProbeControlDefault():void;
	}
	function NewQMediaVideoProbeControlFromPointer(ptr:number):QMediaVideoProbeControl;
	function NewQMediaVideoProbeControl(parent:core.QObject_ITF):QMediaVideoProbeControl;
	interface QMetaDataReaderControl_ITF extends QMediaControl_ITF {
		QMetaDataReaderControl_PTR():QMetaDataReaderControl;
	}

	class QMetaDataReaderControl extends QMediaControl {
		___pointer: number;
		QMetaDataReaderControl_PTR():QMetaDataReaderControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAvailableMetaData(f:()=>string[]):void;
		DisconnectAvailableMetaData():void;
		AvailableMetaData():string[];
		ConnectIsMetaDataAvailable(f:()=>boolean):void;
		DisconnectIsMetaDataAvailable():void;
		IsMetaDataAvailable():boolean;
		ConnectMetaData(f:(key:string)=>core.QVariant):void;
		DisconnectMetaData():void;
		MetaData(key:string):core.QVariant;
		ConnectMetaDataAvailableChanged(f:(available:boolean)=>void):void;
		DisconnectMetaDataAvailableChanged():void;
		MetaDataAvailableChanged(available:boolean):void;
		ConnectMetaDataChanged(f:()=>void):void;
		DisconnectMetaDataChanged():void;
		MetaDataChanged():void;
		ConnectMetaDataChanged2(f:(key:string,value:core.QVariant)=>void):void;
		DisconnectMetaDataChanged2():void;
		MetaDataChanged2(key:string,value:core.QVariant_ITF):void;
		ConnectDestroyQMetaDataReaderControl(f:()=>void):void;
		DisconnectDestroyQMetaDataReaderControl():void;
		DestroyQMetaDataReaderControl():void;
		DestroyQMetaDataReaderControlDefault():void;
	}
	function NewQMetaDataReaderControlFromPointer(ptr:number):QMetaDataReaderControl;
	function NewQMetaDataReaderControl(parent:core.QObject_ITF):QMetaDataReaderControl;
	interface QMetaDataWriterControl_ITF extends QMediaControl_ITF {
		QMetaDataWriterControl_PTR():QMetaDataWriterControl;
	}

	class QMetaDataWriterControl extends QMediaControl {
		___pointer: number;
		QMetaDataWriterControl_PTR():QMetaDataWriterControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAvailableMetaData(f:()=>string[]):void;
		DisconnectAvailableMetaData():void;
		AvailableMetaData():string[];
		ConnectIsMetaDataAvailable(f:()=>boolean):void;
		DisconnectIsMetaDataAvailable():void;
		IsMetaDataAvailable():boolean;
		ConnectIsWritable(f:()=>boolean):void;
		DisconnectIsWritable():void;
		IsWritable():boolean;
		ConnectMetaData(f:(key:string)=>core.QVariant):void;
		DisconnectMetaData():void;
		MetaData(key:string):core.QVariant;
		ConnectMetaDataAvailableChanged(f:(available:boolean)=>void):void;
		DisconnectMetaDataAvailableChanged():void;
		MetaDataAvailableChanged(available:boolean):void;
		ConnectMetaDataChanged(f:()=>void):void;
		DisconnectMetaDataChanged():void;
		MetaDataChanged():void;
		ConnectMetaDataChanged2(f:(key:string,value:core.QVariant)=>void):void;
		DisconnectMetaDataChanged2():void;
		MetaDataChanged2(key:string,value:core.QVariant_ITF):void;
		ConnectSetMetaData(f:(key:string,value:core.QVariant)=>void):void;
		DisconnectSetMetaData():void;
		SetMetaData(key:string,value:core.QVariant_ITF):void;
		ConnectWritableChanged(f:(writable:boolean)=>void):void;
		DisconnectWritableChanged():void;
		WritableChanged(writable:boolean):void;
		ConnectDestroyQMetaDataWriterControl(f:()=>void):void;
		DisconnectDestroyQMetaDataWriterControl():void;
		DestroyQMetaDataWriterControl():void;
		DestroyQMetaDataWriterControlDefault():void;
	}
	function NewQMetaDataWriterControlFromPointer(ptr:number):QMetaDataWriterControl;
	function NewQMetaDataWriterControl(parent:core.QObject_ITF):QMetaDataWriterControl;
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
	interface QRadioData_ITF extends QMediaBindableInterface_ITF {
		QRadioData_PTR():QRadioData;
		QObject_PTR():core.QObject;
	}

	class QRadioData extends QMediaBindableInterface {
		QObject_PTR():core.QObject
		___pointer: number;
		QRadioData_PTR():QRadioData;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAlternativeFrequenciesEnabledChanged(f:(enabled:boolean)=>void):void;
		DisconnectAlternativeFrequenciesEnabledChanged():void;
		AlternativeFrequenciesEnabledChanged(enabled:boolean):void;
		Availability():number;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ErrorString():string;
		IsAlternativeFrequenciesEnabled():boolean;
		ConnectMediaObject(f:()=>QMediaObject):void;
		DisconnectMediaObject():void;
		MediaObject():QMediaObject;
		MediaObjectDefault():QMediaObject;
		ProgramType():number;
		ConnectProgramTypeChanged(f:(programType:number)=>void):void;
		DisconnectProgramTypeChanged():void;
		ProgramTypeChanged(programType:number):void;
		ProgramTypeName():string;
		ConnectProgramTypeNameChanged(f:(programTypeName:string)=>void):void;
		DisconnectProgramTypeNameChanged():void;
		ProgramTypeNameChanged(programTypeName:string):void;
		RadioText():string;
		ConnectRadioTextChanged(f:(radioText:string)=>void):void;
		DisconnectRadioTextChanged():void;
		RadioTextChanged(radioText:string):void;
		ConnectSetAlternativeFrequenciesEnabled(f:(enabled:boolean)=>void):void;
		DisconnectSetAlternativeFrequenciesEnabled():void;
		SetAlternativeFrequenciesEnabled(enabled:boolean):void;
		SetAlternativeFrequenciesEnabledDefault(enabled:boolean):void;
		ConnectSetMediaObject(f:(mediaObject:QMediaObject)=>boolean):void;
		DisconnectSetMediaObject():void;
		SetMediaObject(mediaObject:QMediaObject_ITF):boolean;
		SetMediaObjectDefault(mediaObject:QMediaObject_ITF):boolean;
		StationId():string;
		ConnectStationIdChanged(f:(stationId:string)=>void):void;
		DisconnectStationIdChanged():void;
		StationIdChanged(stationId:string):void;
		StationName():string;
		ConnectStationNameChanged(f:(stationName:string)=>void):void;
		DisconnectStationNameChanged():void;
		StationNameChanged(stationName:string):void;
		ConnectDestroyQRadioData(f:()=>void):void;
		DisconnectDestroyQRadioData():void;
		DestroyQRadioData():void;
		DestroyQRadioDataDefault():void;
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
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQRadioDataFromPointer(ptr:number):QRadioData;
	function NewQRadioData(mediaObject:QMediaObject_ITF,parent:core.QObject_ITF):QRadioData;
	function NewQRadioDataControl(parent:core.QObject_ITF):QRadioDataControl;
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
	interface QRadioDataControl_ITF extends QMediaControl_ITF {
		QRadioDataControl_PTR():QRadioDataControl;
	}

	class QRadioDataControl extends QMediaControl {
		___pointer: number;
		QRadioDataControl_PTR():QRadioDataControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAlternativeFrequenciesEnabledChanged(f:(enabled:boolean)=>void):void;
		DisconnectAlternativeFrequenciesEnabledChanged():void;
		AlternativeFrequenciesEnabledChanged(enabled:boolean):void;
		ConnectError(f:()=>number):void;
		DisconnectError():void;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ConnectIsAlternativeFrequenciesEnabled(f:()=>boolean):void;
		DisconnectIsAlternativeFrequenciesEnabled():void;
		IsAlternativeFrequenciesEnabled():boolean;
		ConnectProgramType(f:()=>number):void;
		DisconnectProgramType():void;
		ProgramType():number;
		ConnectProgramTypeChanged(f:(programType:number)=>void):void;
		DisconnectProgramTypeChanged():void;
		ProgramTypeChanged(programType:number):void;
		ConnectProgramTypeName(f:()=>string):void;
		DisconnectProgramTypeName():void;
		ProgramTypeName():string;
		ConnectProgramTypeNameChanged(f:(programTypeName:string)=>void):void;
		DisconnectProgramTypeNameChanged():void;
		ProgramTypeNameChanged(programTypeName:string):void;
		ConnectRadioText(f:()=>string):void;
		DisconnectRadioText():void;
		RadioText():string;
		ConnectRadioTextChanged(f:(radioText:string)=>void):void;
		DisconnectRadioTextChanged():void;
		RadioTextChanged(radioText:string):void;
		ConnectSetAlternativeFrequenciesEnabled(f:(enabled:boolean)=>void):void;
		DisconnectSetAlternativeFrequenciesEnabled():void;
		SetAlternativeFrequenciesEnabled(enabled:boolean):void;
		ConnectStationId(f:()=>string):void;
		DisconnectStationId():void;
		StationId():string;
		ConnectStationIdChanged(f:(stationId:string)=>void):void;
		DisconnectStationIdChanged():void;
		StationIdChanged(stationId:string):void;
		ConnectStationName(f:()=>string):void;
		DisconnectStationName():void;
		StationName():string;
		ConnectStationNameChanged(f:(stationName:string)=>void):void;
		DisconnectStationNameChanged():void;
		StationNameChanged(stationName:string):void;
		ConnectDestroyQRadioDataControl(f:()=>void):void;
		DisconnectDestroyQRadioDataControl():void;
		DestroyQRadioDataControl():void;
		DestroyQRadioDataControlDefault():void;
	}
	function NewQRadioDataControlFromPointer(ptr:number):QRadioDataControl;
	function NewQRadioDataControl(parent:core.QObject_ITF):QRadioDataControl;
	interface QRadioTuner_ITF extends QMediaObject_ITF {
		QRadioTuner_PTR():QRadioTuner;
	}

	class QRadioTuner extends QMediaObject {
		___pointer: number;
		QRadioTuner_PTR():QRadioTuner;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAntennaConnectedChanged(f:(connectionStatus:boolean)=>void):void;
		DisconnectAntennaConnectedChanged():void;
		AntennaConnectedChanged(connectionStatus:boolean):void;
		Band():number;
		ConnectBandChanged(f:(band:number)=>void):void;
		DisconnectBandChanged():void;
		BandChanged(band:number):void;
		ConnectCancelSearch(f:()=>void):void;
		DisconnectCancelSearch():void;
		CancelSearch():void;
		CancelSearchDefault():void;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ErrorString():string;
		Frequency():number;
		ConnectFrequencyChanged(f:(frequency:number)=>void):void;
		DisconnectFrequencyChanged():void;
		FrequencyChanged(frequency:number):void;
		FrequencyStep(band:number):number;
		IsAntennaConnected():boolean;
		IsBandSupported(band:number):boolean;
		IsMuted():boolean;
		IsSearching():boolean;
		IsStereo():boolean;
		ConnectMutedChanged(f:(muted:boolean)=>void):void;
		DisconnectMutedChanged():void;
		MutedChanged(muted:boolean):void;
		RadioData():QRadioData;
		ConnectSearchAllStations(f:(searchMode:number)=>void):void;
		DisconnectSearchAllStations():void;
		SearchAllStations(searchMode:number):void;
		SearchAllStationsDefault(searchMode:number):void;
		ConnectSearchBackward(f:()=>void):void;
		DisconnectSearchBackward():void;
		SearchBackward():void;
		SearchBackwardDefault():void;
		ConnectSearchForward(f:()=>void):void;
		DisconnectSearchForward():void;
		SearchForward():void;
		SearchForwardDefault():void;
		ConnectSearchingChanged(f:(searching:boolean)=>void):void;
		DisconnectSearchingChanged():void;
		SearchingChanged(searching:boolean):void;
		ConnectSetBand(f:(band:number)=>void):void;
		DisconnectSetBand():void;
		SetBand(band:number):void;
		SetBandDefault(band:number):void;
		ConnectSetFrequency(f:(frequency:number)=>void):void;
		DisconnectSetFrequency():void;
		SetFrequency(frequency:number):void;
		SetFrequencyDefault(frequency:number):void;
		ConnectSetMuted(f:(muted:boolean)=>void):void;
		DisconnectSetMuted():void;
		SetMuted(muted:boolean):void;
		SetMutedDefault(muted:boolean):void;
		SetStereoMode(mode:number):void;
		ConnectSetVolume(f:(volume:number)=>void):void;
		DisconnectSetVolume():void;
		SetVolume(volume:number):void;
		SetVolumeDefault(volume:number):void;
		SignalStrength():number;
		ConnectSignalStrengthChanged(f:(strength:number)=>void):void;
		DisconnectSignalStrengthChanged():void;
		SignalStrengthChanged(strength:number):void;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		StartDefault():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStationFound(f:(frequency:number,stationId:string)=>void):void;
		DisconnectStationFound():void;
		StationFound(frequency:number,stationId:string):void;
		StereoMode():number;
		ConnectStereoStatusChanged(f:(stereo:boolean)=>void):void;
		DisconnectStereoStatusChanged():void;
		StereoStatusChanged(stereo:boolean):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		Volume():number;
		ConnectVolumeChanged(f:(volume:number)=>void):void;
		DisconnectVolumeChanged():void;
		VolumeChanged(volume:number):void;
		ConnectDestroyQRadioTuner(f:()=>void):void;
		DisconnectDestroyQRadioTuner():void;
		DestroyQRadioTuner():void;
		DestroyQRadioTunerDefault():void;
	}
	function NewQRadioTunerFromPointer(ptr:number):QRadioTuner;
	function NewQRadioTuner(parent:core.QObject_ITF):QRadioTuner;
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
	interface QRadioTunerControl_ITF extends QMediaControl_ITF {
		QRadioTunerControl_PTR():QRadioTunerControl;
	}

	class QRadioTunerControl extends QMediaControl {
		___pointer: number;
		QRadioTunerControl_PTR():QRadioTunerControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAntennaConnectedChanged(f:(connectionStatus:boolean)=>void):void;
		DisconnectAntennaConnectedChanged():void;
		AntennaConnectedChanged(connectionStatus:boolean):void;
		ConnectBand(f:()=>number):void;
		DisconnectBand():void;
		Band():number;
		ConnectBandChanged(f:(band:number)=>void):void;
		DisconnectBandChanged():void;
		BandChanged(band:number):void;
		ConnectCancelSearch(f:()=>void):void;
		DisconnectCancelSearch():void;
		CancelSearch():void;
		ConnectError(f:()=>number):void;
		DisconnectError():void;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ConnectFrequency(f:()=>number):void;
		DisconnectFrequency():void;
		Frequency():number;
		ConnectFrequencyChanged(f:(frequency:number)=>void):void;
		DisconnectFrequencyChanged():void;
		FrequencyChanged(frequency:number):void;
		ConnectFrequencyStep(f:(band:number)=>number):void;
		DisconnectFrequencyStep():void;
		FrequencyStep(band:number):number;
		ConnectIsAntennaConnected(f:()=>boolean):void;
		DisconnectIsAntennaConnected():void;
		IsAntennaConnected():boolean;
		IsAntennaConnectedDefault():boolean;
		ConnectIsBandSupported(f:(band:number)=>boolean):void;
		DisconnectIsBandSupported():void;
		IsBandSupported(band:number):boolean;
		ConnectIsMuted(f:()=>boolean):void;
		DisconnectIsMuted():void;
		IsMuted():boolean;
		ConnectIsSearching(f:()=>boolean):void;
		DisconnectIsSearching():void;
		IsSearching():boolean;
		ConnectIsStereo(f:()=>boolean):void;
		DisconnectIsStereo():void;
		IsStereo():boolean;
		ConnectMutedChanged(f:(muted:boolean)=>void):void;
		DisconnectMutedChanged():void;
		MutedChanged(muted:boolean):void;
		ConnectSearchAllStations(f:(searchMode:number)=>void):void;
		DisconnectSearchAllStations():void;
		SearchAllStations(searchMode:number):void;
		ConnectSearchBackward(f:()=>void):void;
		DisconnectSearchBackward():void;
		SearchBackward():void;
		ConnectSearchForward(f:()=>void):void;
		DisconnectSearchForward():void;
		SearchForward():void;
		ConnectSearchingChanged(f:(searching:boolean)=>void):void;
		DisconnectSearchingChanged():void;
		SearchingChanged(searching:boolean):void;
		ConnectSetBand(f:(band:number)=>void):void;
		DisconnectSetBand():void;
		SetBand(band:number):void;
		ConnectSetFrequency(f:(frequency:number)=>void):void;
		DisconnectSetFrequency():void;
		SetFrequency(frequency:number):void;
		ConnectSetMuted(f:(muted:boolean)=>void):void;
		DisconnectSetMuted():void;
		SetMuted(muted:boolean):void;
		ConnectSetStereoMode(f:(mode:number)=>void):void;
		DisconnectSetStereoMode():void;
		SetStereoMode(mode:number):void;
		ConnectSetVolume(f:(volume:number)=>void):void;
		DisconnectSetVolume():void;
		SetVolume(volume:number):void;
		ConnectSignalStrength(f:()=>number):void;
		DisconnectSignalStrength():void;
		SignalStrength():number;
		ConnectSignalStrengthChanged(f:(strength:number)=>void):void;
		DisconnectSignalStrengthChanged():void;
		SignalStrengthChanged(strength:number):void;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		ConnectState(f:()=>number):void;
		DisconnectState():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStationFound(f:(frequency:number,stationId:string)=>void):void;
		DisconnectStationFound():void;
		StationFound(frequency:number,stationId:string):void;
		ConnectStereoMode(f:()=>number):void;
		DisconnectStereoMode():void;
		StereoMode():number;
		ConnectStereoStatusChanged(f:(stereo:boolean)=>void):void;
		DisconnectStereoStatusChanged():void;
		StereoStatusChanged(stereo:boolean):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		ConnectVolume(f:()=>number):void;
		DisconnectVolume():void;
		Volume():number;
		ConnectVolumeChanged(f:(volume:number)=>void):void;
		DisconnectVolumeChanged():void;
		VolumeChanged(volume:number):void;
		ConnectDestroyQRadioTunerControl(f:()=>void):void;
		DisconnectDestroyQRadioTunerControl():void;
		DestroyQRadioTunerControl():void;
		DestroyQRadioTunerControlDefault():void;
	}
	function NewQRadioTunerControlFromPointer(ptr:number):QRadioTunerControl;
	interface QSound_ITF extends core.QObject_ITF {
		QSound_PTR():QSound;
	}

	class QSound extends core.QObject {
		___pointer: number;
		QSound_PTR():QSound;
		Pointer():number;
		SetPointer(p:number):void;
		FileName():string;
		IsFinished():boolean;
		Loops():number;
		LoopsRemaining():number;
		Play(filename:string):void;
		ConnectPlay2(f:()=>void):void;
		DisconnectPlay2():void;
		Play2():void;
		Play2Default():void;
		SetLoops(number:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		ConnectDestroyQSound(f:()=>void):void;
		DisconnectDestroyQSound():void;
		DestroyQSound():void;
		DestroyQSoundDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSoundFromPointer(ptr:number):QSound;
	function NewQSound(filename:string,parent:core.QObject_ITF):QSound;
	function QSound_Play(filename:string):void;
	function NewQSoundEffect(parent:core.QObject_ITF):QSoundEffect;
	function NewQSoundEffect2(audioDevice:QAudioDeviceInfo_ITF,parent:core.QObject_ITF):QSoundEffect;
	const QSound__Infinite: number;
	interface QSoundEffect_ITF extends core.QObject_ITF {
		QSoundEffect_PTR():QSoundEffect;
	}

	class QSoundEffect extends core.QObject {
		___pointer: number;
		QSoundEffect_PTR():QSoundEffect;
		Pointer():number;
		SetPointer(p:number):void;
		Category():string;
		ConnectCategoryChanged(f:()=>void):void;
		DisconnectCategoryChanged():void;
		CategoryChanged():void;
		IsLoaded():boolean;
		IsMuted():boolean;
		IsPlaying():boolean;
		ConnectLoadedChanged(f:()=>void):void;
		DisconnectLoadedChanged():void;
		LoadedChanged():void;
		LoopCount():number;
		ConnectLoopCountChanged(f:()=>void):void;
		DisconnectLoopCountChanged():void;
		LoopCountChanged():void;
		LoopsRemaining():number;
		ConnectLoopsRemainingChanged(f:()=>void):void;
		DisconnectLoopsRemainingChanged():void;
		LoopsRemainingChanged():void;
		ConnectMutedChanged(f:()=>void):void;
		DisconnectMutedChanged():void;
		MutedChanged():void;
		ConnectPlay(f:()=>void):void;
		DisconnectPlay():void;
		Play():void;
		PlayDefault():void;
		ConnectPlayingChanged(f:()=>void):void;
		DisconnectPlayingChanged():void;
		PlayingChanged():void;
		SetCategory(category:string):void;
		SetLoopCount(loopCount:number):void;
		SetMuted(muted:boolean):void;
		SetSource(url:core.QUrl_ITF):void;
		SetVolume(volume:number):void;
		Source():core.QUrl;
		ConnectSourceChanged(f:()=>void):void;
		DisconnectSourceChanged():void;
		SourceChanged():void;
		Status():number;
		ConnectStatusChanged(f:()=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged():void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		SupportedMimeTypes():string[];
		Volume():number;
		ConnectVolumeChanged(f:()=>void):void;
		DisconnectVolumeChanged():void;
		VolumeChanged():void;
		ConnectDestroyQSoundEffect(f:()=>void):void;
		DisconnectDestroyQSoundEffect():void;
		DestroyQSoundEffect():void;
		DestroyQSoundEffectDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSoundEffectFromPointer(ptr:number):QSoundEffect;
	function NewQSoundEffect(parent:core.QObject_ITF):QSoundEffect;
	function NewQSoundEffect2(audioDevice:QAudioDeviceInfo_ITF,parent:core.QObject_ITF):QSoundEffect;
	function QSoundEffect_SupportedMimeTypes():string[];
	const QSoundEffect__Infinite: number;
	const QSoundEffect__Null: number;
	const QSoundEffect__Loading: number;
	const QSoundEffect__Ready: number;
	const QSoundEffect__Error: number;
	interface QVideoDeviceSelectorControl_ITF extends QMediaControl_ITF {
		QVideoDeviceSelectorControl_PTR():QVideoDeviceSelectorControl;
	}

	class QVideoDeviceSelectorControl extends QMediaControl {
		___pointer: number;
		QVideoDeviceSelectorControl_PTR():QVideoDeviceSelectorControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDefaultDevice(f:()=>number):void;
		DisconnectDefaultDevice():void;
		DefaultDevice():number;
		ConnectDeviceCount(f:()=>number):void;
		DisconnectDeviceCount():void;
		DeviceCount():number;
		ConnectDeviceDescription(f:(index:number)=>string):void;
		DisconnectDeviceDescription():void;
		DeviceDescription(index:number):string;
		ConnectDeviceName(f:(index:number)=>string):void;
		DisconnectDeviceName():void;
		DeviceName(index:number):string;
		ConnectDevicesChanged(f:()=>void):void;
		DisconnectDevicesChanged():void;
		DevicesChanged():void;
		ConnectSelectedDevice(f:()=>number):void;
		DisconnectSelectedDevice():void;
		SelectedDevice():number;
		ConnectSelectedDeviceChanged(f:(index:number)=>void):void;
		DisconnectSelectedDeviceChanged():void;
		SelectedDeviceChanged(index:number):void;
		ConnectSelectedDeviceChanged2(f:(name:string)=>void):void;
		DisconnectSelectedDeviceChanged2():void;
		SelectedDeviceChanged2(name:string):void;
		ConnectSetSelectedDevice(f:(index:number)=>void):void;
		DisconnectSetSelectedDevice():void;
		SetSelectedDevice(index:number):void;
		ConnectDestroyQVideoDeviceSelectorControl(f:()=>void):void;
		DisconnectDestroyQVideoDeviceSelectorControl():void;
		DestroyQVideoDeviceSelectorControl():void;
		DestroyQVideoDeviceSelectorControlDefault():void;
	}
	function NewQVideoDeviceSelectorControlFromPointer(ptr:number):QVideoDeviceSelectorControl;
	function NewQVideoDeviceSelectorControl(parent:core.QObject_ITF):QVideoDeviceSelectorControl;
	interface QVideoEncoderSettings_ITF {
		QVideoEncoderSettings_PTR():QVideoEncoderSettings;
	}

	class QVideoEncoderSettings {
		___pointer: number;
		QVideoEncoderSettings_PTR():QVideoEncoderSettings;
		Pointer():number;
		SetPointer(p:number):void;
		BitRate():number;
		Codec():string;
		EncodingMode():number;
		EncodingOption(option:string):core.QVariant;
		EncodingOptions():Map<string,core.QVariant>;
		FrameRate():number;
		IsNull():boolean;
		Quality():number;
		Resolution():core.QSize;
		SetBitRate(value:number):void;
		SetCodec(codec:string):void;
		SetEncodingMode(mode:number):void;
		SetEncodingOption(option:string,value:core.QVariant_ITF):void;
		SetEncodingOptions(options:Map<string,core.QVariant>):void;
		SetFrameRate(rate:number):void;
		SetQuality(quality:number):void;
		SetResolution(resolution:core.QSize_ITF):void;
		SetResolution2(width:number,height:number):void;
		DestroyQVideoEncoderSettings():void;
	}
	function NewQVideoEncoderSettingsFromPointer(ptr:number):QVideoEncoderSettings;
	function NewQVideoEncoderSettings():QVideoEncoderSettings;
	function NewQVideoEncoderSettings2(other:QVideoEncoderSettings_ITF):QVideoEncoderSettings;
	function NewQVideoEncoderSettingsControl(parent:core.QObject_ITF):QVideoEncoderSettingsControl;
	interface QVideoEncoderSettingsControl_ITF extends QMediaControl_ITF {
		QVideoEncoderSettingsControl_PTR():QVideoEncoderSettingsControl;
	}

	class QVideoEncoderSettingsControl extends QMediaControl {
		___pointer: number;
		QVideoEncoderSettingsControl_PTR():QVideoEncoderSettingsControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectSetVideoSettings(f:(settings:QVideoEncoderSettings)=>void):void;
		DisconnectSetVideoSettings():void;
		SetVideoSettings(settings:QVideoEncoderSettings_ITF):void;
		ConnectSupportedFrameRates(f:(settings:QVideoEncoderSettings,continuous:boolean)=>number[]):void;
		DisconnectSupportedFrameRates():void;
		SupportedFrameRates(settings:QVideoEncoderSettings_ITF,continuous:boolean):number[];
		ConnectSupportedResolutions(f:(settings:QVideoEncoderSettings,continuous:boolean)=>core.QSize[]):void;
		DisconnectSupportedResolutions():void;
		SupportedResolutions(settings:QVideoEncoderSettings_ITF,continuous:boolean):core.QSize[];
		ConnectSupportedVideoCodecs(f:()=>string[]):void;
		DisconnectSupportedVideoCodecs():void;
		SupportedVideoCodecs():string[];
		ConnectVideoCodecDescription(f:(codec:string)=>string):void;
		DisconnectVideoCodecDescription():void;
		VideoCodecDescription(codec:string):string;
		ConnectVideoSettings(f:()=>QVideoEncoderSettings):void;
		DisconnectVideoSettings():void;
		VideoSettings():QVideoEncoderSettings;
		ConnectDestroyQVideoEncoderSettingsControl(f:()=>void):void;
		DisconnectDestroyQVideoEncoderSettingsControl():void;
		DestroyQVideoEncoderSettingsControl():void;
		DestroyQVideoEncoderSettingsControlDefault():void;
	}
	function NewQVideoEncoderSettingsControlFromPointer(ptr:number):QVideoEncoderSettingsControl;
	function NewQVideoEncoderSettingsControl(parent:core.QObject_ITF):QVideoEncoderSettingsControl;
	interface QVideoFilterRunnable_ITF {
		QVideoFilterRunnable_PTR():QVideoFilterRunnable;
	}

	class QVideoFilterRunnable {
		___pointer: number;
		QVideoFilterRunnable_PTR():QVideoFilterRunnable;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVideoFilterRunnable():void;
		ConnectRun(f:(input:QVideoFrame,surfaceFormat:QVideoSurfaceFormat,flags:number)=>QVideoFrame):void;
		DisconnectRun():void;
		Run(input:QVideoFrame_ITF,surfaceFormat:QVideoSurfaceFormat_ITF,flags:number):QVideoFrame;
	}
	function NewQVideoFilterRunnableFromPointer(ptr:number):QVideoFilterRunnable;
	const QVideoFilterRunnable__LastInChain: number;
	interface QVideoFrame_ITF {
		QVideoFrame_PTR():QVideoFrame;
	}

	class QVideoFrame {
		___pointer: number;
		QVideoFrame_PTR():QVideoFrame;
		Pointer():number;
		SetPointer(p:number):void;
		AvailableMetaData():Map<string,core.QVariant>;
		Bits():string;
		Bits2(plane:number):string;
		Bits3():string;
		Bits4(plane:number):string;
		Buffer():QAbstractVideoBuffer;
		BytesPerLine():number;
		BytesPerLine2(plane:number):number;
		EndTime():number;
		FieldType():number;
		Handle():core.QVariant;
		HandleType():number;
		Height():number;
		ImageFormatFromPixelFormat(format:number):number;
		IsMapped():boolean;
		IsReadable():boolean;
		IsValid():boolean;
		IsWritable():boolean;
		Map(mode:number):boolean;
		MapMode():number;
		MappedBytes():number;
		MetaData(key:string):core.QVariant;
		PixelFormat():number;
		PixelFormatFromImageFormat(format:number):number;
		PlaneCount():number;
		SetEndTime(ti:number):void;
		SetFieldType(field:number):void;
		SetMetaData(key:string,value:core.QVariant_ITF):void;
		SetStartTime(ti:number):void;
		Size():core.QSize;
		StartTime():number;
		Unmap():void;
		Width():number;
		DestroyQVideoFrame():void;
	}
	function NewQVideoFrameFromPointer(ptr:number):QVideoFrame;
	function NewQVideoFrame():QVideoFrame;
	function NewQVideoFrame2(buffer:QAbstractVideoBuffer_ITF,size:core.QSize_ITF,format:number):QVideoFrame;
	function NewQVideoFrame3(bytes:number,size:core.QSize_ITF,bytesPerLine:number,format:number):QVideoFrame;
	function NewQVideoFrame4(image:gui.QImage_ITF):QVideoFrame;
	function NewQVideoFrame5(other:QVideoFrame_ITF):QVideoFrame;
	function QVideoFrame_ImageFormatFromPixelFormat(format:number):number;
	function QVideoFrame_PixelFormatFromImageFormat(format:number):number;
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
	interface QVideoProbe_ITF extends core.QObject_ITF {
		QVideoProbe_PTR():QVideoProbe;
	}

	class QVideoProbe extends core.QObject {
		___pointer: number;
		QVideoProbe_PTR():QVideoProbe;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectFlush(f:()=>void):void;
		DisconnectFlush():void;
		Flush():void;
		IsActive():boolean;
		SetSource(source:QMediaObject_ITF):boolean;
		SetSource2(mediaRecorder:QMediaRecorder_ITF):boolean;
		ConnectVideoFrameProbed(f:(frame:QVideoFrame)=>void):void;
		DisconnectVideoFrameProbed():void;
		VideoFrameProbed(frame:QVideoFrame_ITF):void;
		ConnectDestroyQVideoProbe(f:()=>void):void;
		DisconnectDestroyQVideoProbe():void;
		DestroyQVideoProbe():void;
		DestroyQVideoProbeDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQVideoProbeFromPointer(ptr:number):QVideoProbe;
	function NewQVideoProbe(parent:core.QObject_ITF):QVideoProbe;
	interface QVideoRendererControl_ITF extends QMediaControl_ITF {
		QVideoRendererControl_PTR():QVideoRendererControl;
	}

	class QVideoRendererControl extends QMediaControl {
		___pointer: number;
		QVideoRendererControl_PTR():QVideoRendererControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectSetSurface(f:(surface:QAbstractVideoSurface)=>void):void;
		DisconnectSetSurface():void;
		SetSurface(surface:QAbstractVideoSurface_ITF):void;
		ConnectSurface(f:()=>QAbstractVideoSurface):void;
		DisconnectSurface():void;
		Surface():QAbstractVideoSurface;
		ConnectDestroyQVideoRendererControl(f:()=>void):void;
		DisconnectDestroyQVideoRendererControl():void;
		DestroyQVideoRendererControl():void;
		DestroyQVideoRendererControlDefault():void;
	}
	function NewQVideoRendererControlFromPointer(ptr:number):QVideoRendererControl;
	function NewQVideoRendererControl(parent:core.QObject_ITF):QVideoRendererControl;
	interface QVideoSurfaceFormat_ITF {
		QVideoSurfaceFormat_PTR():QVideoSurfaceFormat;
	}

	class QVideoSurfaceFormat {
		___pointer: number;
		QVideoSurfaceFormat_PTR():QVideoSurfaceFormat;
		Pointer():number;
		SetPointer(p:number):void;
		FrameHeight():number;
		FrameRate():number;
		FrameSize():core.QSize;
		FrameWidth():number;
		HandleType():number;
		IsMirrored():boolean;
		IsValid():boolean;
		PixelAspectRatio():core.QSize;
		PixelFormat():number;
		Property(name:string):core.QVariant;
		PropertyNames():core.QByteArray[];
		ScanLineDirection():number;
		SetFrameRate(rate:number):void;
		SetFrameSize(size:core.QSize_ITF):void;
		SetFrameSize2(width:number,height:number):void;
		SetMirrored(mirrored:boolean):void;
		SetPixelAspectRatio(ratio:core.QSize_ITF):void;
		SetPixelAspectRatio2(horizontal:number,vertical:number):void;
		SetProperty(name:string,value:core.QVariant_ITF):void;
		SetScanLineDirection(direction:number):void;
		SetViewport(viewport:core.QRect_ITF):void;
		SetYCbCrColorSpace(space:number):void;
		SizeHint():core.QSize;
		Viewport():core.QRect;
		YCbCrColorSpace():number;
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
		AspectRatioMode():number;
		Brightness():number;
		ConnectBrightnessChanged(f:(brightness:number)=>void):void;
		DisconnectBrightnessChanged():void;
		BrightnessChanged(brightness:number):void;
		Contrast():number;
		ConnectContrastChanged(f:(contrast:number)=>void):void;
		DisconnectContrastChanged():void;
		ContrastChanged(contrast:number):void;
		ConnectEvent(f:(event:core.QEvent)=>boolean):void;
		DisconnectEvent():void;
		Event(event:core.QEvent_ITF):boolean;
		EventDefault(event:core.QEvent_ITF):boolean;
		ConnectFullScreenChanged(f:(fullScreen:boolean)=>void):void;
		DisconnectFullScreenChanged():void;
		FullScreenChanged(fullScreen:boolean):void;
		ConnectHideEvent(f:(event:gui.QHideEvent)=>void):void;
		DisconnectHideEvent():void;
		HideEvent(event:gui.QHideEvent_ITF):void;
		HideEventDefault(event:gui.QHideEvent_ITF):void;
		Hue():number;
		ConnectHueChanged(f:(hue:number)=>void):void;
		DisconnectHueChanged():void;
		HueChanged(hue:number):void;
		IsFullScreen():boolean;
		ConnectMediaObject(f:()=>QMediaObject):void;
		DisconnectMediaObject():void;
		MediaObject():QMediaObject;
		MediaObjectDefault():QMediaObject;
		ConnectMoveEvent(f:(event:gui.QMoveEvent)=>void):void;
		DisconnectMoveEvent():void;
		MoveEvent(event:gui.QMoveEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		ConnectPaintEvent(f:(event:gui.QPaintEvent)=>void):void;
		DisconnectPaintEvent():void;
		PaintEvent(event:gui.QPaintEvent_ITF):void;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		ConnectResizeEvent(f:(event:gui.QResizeEvent)=>void):void;
		DisconnectResizeEvent():void;
		ResizeEvent(event:gui.QResizeEvent_ITF):void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		Saturation():number;
		ConnectSaturationChanged(f:(saturation:number)=>void):void;
		DisconnectSaturationChanged():void;
		SaturationChanged(saturation:number):void;
		ConnectSetAspectRatioMode(f:(mode:number)=>void):void;
		DisconnectSetAspectRatioMode():void;
		SetAspectRatioMode(mode:number):void;
		SetAspectRatioModeDefault(mode:number):void;
		ConnectSetBrightness(f:(brightness:number)=>void):void;
		DisconnectSetBrightness():void;
		SetBrightness(brightness:number):void;
		SetBrightnessDefault(brightness:number):void;
		ConnectSetContrast(f:(contrast:number)=>void):void;
		DisconnectSetContrast():void;
		SetContrast(contrast:number):void;
		SetContrastDefault(contrast:number):void;
		ConnectSetFullScreen(f:(fullScreen:boolean)=>void):void;
		DisconnectSetFullScreen():void;
		SetFullScreen(fullScreen:boolean):void;
		SetFullScreenDefault(fullScreen:boolean):void;
		ConnectSetHue(f:(hue:number)=>void):void;
		DisconnectSetHue():void;
		SetHue(hue:number):void;
		SetHueDefault(hue:number):void;
		ConnectSetSaturation(f:(saturation:number)=>void):void;
		DisconnectSetSaturation():void;
		SetSaturation(saturation:number):void;
		SetSaturationDefault(saturation:number):void;
		ConnectShowEvent(f:(event:gui.QShowEvent)=>void):void;
		DisconnectShowEvent():void;
		ShowEvent(event:gui.QShowEvent_ITF):void;
		ShowEventDefault(event:gui.QShowEvent_ITF):void;
		ConnectSizeHint(f:()=>core.QSize):void;
		DisconnectSizeHint():void;
		SizeHint():core.QSize;
		SizeHintDefault():core.QSize;
		ConnectDestroyQVideoWidget(f:()=>void):void;
		DisconnectDestroyQVideoWidget():void;
		DestroyQVideoWidget():void;
		DestroyQVideoWidgetDefault():void;
		ActionEvent(event:gui.QActionEvent_ITF):void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEvent(event:core.QEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		Close():boolean;
		CloseDefault():boolean;
		CloseEvent(event:gui.QCloseEvent_ITF):void;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEvent(event:gui.QContextMenuEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
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
		FocusInEvent(event:gui.QFocusEvent_ITF):void;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChild(next:boolean):boolean;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEvent(event:gui.QFocusEvent_ITF):void;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidth():boolean;
		HasHeightForWidthDefault():boolean;
		HeightForWidth(w:number):number;
		HeightForWidthDefault(w:number):number;
		Hide():void;
		HideDefault():void;
		InitPainter(painter:gui.QPainter_ITF):void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEvent(event:gui.QInputMethodEvent_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQuery(query:number):core.QVariant;
		InputMethodQueryDefault(query:number):core.QVariant;
		KeyPressEvent(event:gui.QKeyEvent_ITF):void;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEvent(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		LeaveEvent(event:core.QEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		Lower():void;
		LowerDefault():void;
		Metric(m:number):number;
		MetricDefault(m:number):number;
		MinimumSizeHint():core.QSize;
		MinimumSizeHintDefault():core.QSize;
		MouseDoubleClickEvent(event:gui.QMouseEvent_ITF):void;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseMoveEvent(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEvent(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEvent(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		NativeEvent(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		PaintEngine():gui.QPaintEngine;
		PaintEngineDefault():gui.QPaintEngine;
		Raise():void;
		RaiseDefault():void;
		Repaint():void;
		RepaintDefault():void;
		SetDisabled(disable:boolean):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabled(vbo:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetFocus2():void;
		SetFocus2Default():void;
		SetHidden(hidden:boolean):void;
		SetHiddenDefault(hidden:boolean):void;
		SetStyleSheet(styleSheet:string):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisible(visible:boolean):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowModified(vbo:boolean):void;
		SetWindowModifiedDefault(vbo:boolean):void;
		SetWindowTitle(vqs:string):void;
		SetWindowTitleDefault(vqs:string):void;
		Show():void;
		ShowDefault():void;
		ShowFullScreen():void;
		ShowFullScreenDefault():void;
		ShowMaximized():void;
		ShowMaximizedDefault():void;
		ShowMinimized():void;
		ShowMinimizedDefault():void;
		ShowNormal():void;
		ShowNormalDefault():void;
		TabletEvent(event:gui.QTabletEvent_ITF):void;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		Update():void;
		UpdateDefault():void;
		UpdateMicroFocus():void;
		UpdateMicroFocusDefault():void;
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
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
		SetMediaObject(object:QMediaObject_ITF):boolean;
		SetMediaObjectDefault(object:QMediaObject_ITF):boolean;
	}
	function NewQVideoWidgetFromPointer(ptr:number):QVideoWidget;
	function NewQVideoWidget(parent:widgets.QWidget_ITF):QVideoWidget;
	interface QVideoWidgetControl_ITF extends QMediaControl_ITF {
		QVideoWidgetControl_PTR():QVideoWidgetControl;
	}

	class QVideoWidgetControl extends QMediaControl {
		___pointer: number;
		QVideoWidgetControl_PTR():QVideoWidgetControl;
		Pointer():number;
		SetPointer(p:number):void;
	}
	function NewQVideoWidgetControlFromPointer(ptr:number):QVideoWidgetControl;
	interface QVideoWindowControl_ITF extends QMediaControl_ITF {
		QVideoWindowControl_PTR():QVideoWindowControl;
	}

	class QVideoWindowControl extends QMediaControl {
		___pointer: number;
		QVideoWindowControl_PTR():QVideoWindowControl;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAspectRatioMode(f:()=>number):void;
		DisconnectAspectRatioMode():void;
		AspectRatioMode():number;
		ConnectBrightness(f:()=>number):void;
		DisconnectBrightness():void;
		Brightness():number;
		ConnectBrightnessChanged(f:(brightness:number)=>void):void;
		DisconnectBrightnessChanged():void;
		BrightnessChanged(brightness:number):void;
		ConnectContrast(f:()=>number):void;
		DisconnectContrast():void;
		Contrast():number;
		ConnectContrastChanged(f:(contrast:number)=>void):void;
		DisconnectContrastChanged():void;
		ContrastChanged(contrast:number):void;
		ConnectDisplayRect(f:()=>core.QRect):void;
		DisconnectDisplayRect():void;
		DisplayRect():core.QRect;
		ConnectFullScreenChanged(f:(fullScreen:boolean)=>void):void;
		DisconnectFullScreenChanged():void;
		FullScreenChanged(fullScreen:boolean):void;
		ConnectHue(f:()=>number):void;
		DisconnectHue():void;
		Hue():number;
		ConnectHueChanged(f:(hue:number)=>void):void;
		DisconnectHueChanged():void;
		HueChanged(hue:number):void;
		ConnectIsFullScreen(f:()=>boolean):void;
		DisconnectIsFullScreen():void;
		IsFullScreen():boolean;
		ConnectNativeSize(f:()=>core.QSize):void;
		DisconnectNativeSize():void;
		NativeSize():core.QSize;
		ConnectNativeSizeChanged(f:()=>void):void;
		DisconnectNativeSizeChanged():void;
		NativeSizeChanged():void;
		ConnectRepaint(f:()=>void):void;
		DisconnectRepaint():void;
		Repaint():void;
		ConnectSaturation(f:()=>number):void;
		DisconnectSaturation():void;
		Saturation():number;
		ConnectSaturationChanged(f:(saturation:number)=>void):void;
		DisconnectSaturationChanged():void;
		SaturationChanged(saturation:number):void;
		ConnectSetAspectRatioMode(f:(mode:number)=>void):void;
		DisconnectSetAspectRatioMode():void;
		SetAspectRatioMode(mode:number):void;
		ConnectSetBrightness(f:(brightness:number)=>void):void;
		DisconnectSetBrightness():void;
		SetBrightness(brightness:number):void;
		ConnectSetContrast(f:(contrast:number)=>void):void;
		DisconnectSetContrast():void;
		SetContrast(contrast:number):void;
		ConnectSetDisplayRect(f:(rect:core.QRect)=>void):void;
		DisconnectSetDisplayRect():void;
		SetDisplayRect(rect:core.QRect_ITF):void;
		ConnectSetFullScreen(f:(fullScreen:boolean)=>void):void;
		DisconnectSetFullScreen():void;
		SetFullScreen(fullScreen:boolean):void;
		ConnectSetHue(f:(hue:number)=>void):void;
		DisconnectSetHue():void;
		SetHue(hue:number):void;
		ConnectSetSaturation(f:(saturation:number)=>void):void;
		DisconnectSetSaturation():void;
		SetSaturation(saturation:number):void;
		ConnectSetWinId(f:(id:number)=>void):void;
		DisconnectSetWinId():void;
		SetWinId(id:number):void;
		ConnectWinId(f:()=>number):void;
		DisconnectWinId():void;
		WinId():number;
		ConnectDestroyQVideoWindowControl(f:()=>void):void;
		DisconnectDestroyQVideoWindowControl():void;
		DestroyQVideoWindowControl():void;
		DestroyQVideoWindowControlDefault():void;
	}
	function NewQVideoWindowControlFromPointer(ptr:number):QVideoWindowControl;
	function NewQVideoWindowControl(parent:core.QObject_ITF):QVideoWindowControl;
}