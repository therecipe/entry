/// <reference path="core.d.ts" />
declare namespace speech {
	interface QTextToSpeech_ITF extends core.QObject_ITF {
		QTextToSpeech_PTR():QTextToSpeech;
	}

	class QTextToSpeech extends core.QObject {
		___pointer: number;
		QTextToSpeech_PTR():QTextToSpeech;
		Pointer():number;
		SetPointer(p:number):void;
		AvailableEngines():string[];
		AvailableLocales():core.QLocale[];
		AvailableVoices():QVoice[];
		Locale():core.QLocale;
		ConnectLocaleChanged(f:(locale:core.QLocale)=>void):void;
		DisconnectLocaleChanged():void;
		LocaleChanged(locale:core.QLocale_ITF):void;
		ConnectPause(f:()=>void):void;
		DisconnectPause():void;
		Pause():void;
		PauseDefault():void;
		Pitch():number;
		ConnectPitchChanged(f:(pitch:number)=>void):void;
		DisconnectPitchChanged():void;
		PitchChanged(pitch:number):void;
		Rate():number;
		ConnectRateChanged(f:(rate:number)=>void):void;
		DisconnectRateChanged():void;
		RateChanged(rate:number):void;
		ConnectResume(f:()=>void):void;
		DisconnectResume():void;
		Resume():void;
		ResumeDefault():void;
		ConnectSay(f:(text:string)=>void):void;
		DisconnectSay():void;
		Say(text:string):void;
		SayDefault(text:string):void;
		ConnectSetLocale(f:(locale:core.QLocale)=>void):void;
		DisconnectSetLocale():void;
		SetLocale(locale:core.QLocale_ITF):void;
		SetLocaleDefault(locale:core.QLocale_ITF):void;
		ConnectSetPitch(f:(pitch:number)=>void):void;
		DisconnectSetPitch():void;
		SetPitch(pitch:number):void;
		SetPitchDefault(pitch:number):void;
		ConnectSetRate(f:(rate:number)=>void):void;
		DisconnectSetRate():void;
		SetRate(rate:number):void;
		SetRateDefault(rate:number):void;
		ConnectSetVoice(f:(voice:QVoice)=>void):void;
		DisconnectSetVoice():void;
		SetVoice(voice:QVoice_ITF):void;
		SetVoiceDefault(voice:QVoice_ITF):void;
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
		Voice():QVoice;
		Volume():number;
		ConnectVolumeChanged(f:(volume:number)=>void):void;
		DisconnectVolumeChanged():void;
		VolumeChanged(volume:number):void;
		ConnectVolumeChanged2(f:(volume:number)=>void):void;
		DisconnectVolumeChanged2():void;
		VolumeChanged2(volume:number):void;
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
	function NewQTextToSpeechFromPointer(ptr:number):QTextToSpeech;
	function NewQTextToSpeech(parent:core.QObject_ITF):QTextToSpeech;
	function NewQTextToSpeech2(engine:string,parent:core.QObject_ITF):QTextToSpeech;
	function QTextToSpeech_AvailableEngines():string[];
	const QTextToSpeech__Ready: number;
	const QTextToSpeech__Speaking: number;
	const QTextToSpeech__Paused: number;
	const QTextToSpeech__BackendError: number;
	interface QTextToSpeechEngine_ITF extends core.QObject_ITF {
		QTextToSpeechEngine_PTR():QTextToSpeechEngine;
	}

	class QTextToSpeechEngine extends core.QObject {
		___pointer: number;
		QTextToSpeechEngine_PTR():QTextToSpeechEngine;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAvailableLocales(f:()=>core.QLocale[]):void;
		DisconnectAvailableLocales():void;
		AvailableLocales():core.QLocale[];
		ConnectAvailableVoices(f:()=>QVoice[]):void;
		DisconnectAvailableVoices():void;
		AvailableVoices():QVoice[];
		CreateVoice(name:string,gender:number,age:number,data:core.QVariant_ITF):QVoice;
		ConnectLocale(f:()=>core.QLocale):void;
		DisconnectLocale():void;
		Locale():core.QLocale;
		ConnectPause(f:()=>void):void;
		DisconnectPause():void;
		Pause():void;
		ConnectPitch(f:()=>number):void;
		DisconnectPitch():void;
		Pitch():number;
		ConnectRate(f:()=>number):void;
		DisconnectRate():void;
		Rate():number;
		ConnectResume(f:()=>void):void;
		DisconnectResume():void;
		Resume():void;
		ConnectSay(f:(text:string)=>void):void;
		DisconnectSay():void;
		Say(text:string):void;
		ConnectSetLocale(f:(locale:core.QLocale)=>boolean):void;
		DisconnectSetLocale():void;
		SetLocale(locale:core.QLocale_ITF):boolean;
		ConnectSetPitch(f:(pitch:number)=>boolean):void;
		DisconnectSetPitch():void;
		SetPitch(pitch:number):boolean;
		ConnectSetRate(f:(rate:number)=>boolean):void;
		DisconnectSetRate():void;
		SetRate(rate:number):boolean;
		ConnectSetVoice(f:(voice:QVoice)=>boolean):void;
		DisconnectSetVoice():void;
		SetVoice(voice:QVoice_ITF):boolean;
		ConnectSetVolume(f:(volume:number)=>boolean):void;
		DisconnectSetVolume():void;
		SetVolume(volume:number):boolean;
		ConnectState(f:()=>number):void;
		DisconnectState():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		ConnectVoice(f:()=>QVoice):void;
		DisconnectVoice():void;
		Voice():QVoice;
		VoiceData(voice:QVoice_ITF):core.QVariant;
		ConnectVolume(f:()=>number):void;
		DisconnectVolume():void;
		Volume():number;
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
	function NewQTextToSpeechEngineFromPointer(ptr:number):QTextToSpeechEngine;
	function NewQTextToSpeechEngine(parent:core.QObject_ITF):QTextToSpeechEngine;
	function QTextToSpeechEngine_CreateVoice(name:string,gender:number,age:number,data:core.QVariant_ITF):QVoice;
	function QTextToSpeechEngine_VoiceData(voice:QVoice_ITF):core.QVariant;
	interface QTextToSpeechEngineAndroid_ITF extends QTextToSpeechEngine_ITF {
		QTextToSpeechEngineAndroid_PTR():QTextToSpeechEngineAndroid;
	}

	class QTextToSpeechEngineAndroid extends QTextToSpeechEngine {
		___pointer: number;
		QTextToSpeechEngineAndroid_PTR():QTextToSpeechEngineAndroid;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechEngineFlite_ITF extends QTextToSpeechEngine_ITF {
		QTextToSpeechEngineFlite_PTR():QTextToSpeechEngineFlite;
	}

	class QTextToSpeechEngineFlite extends QTextToSpeechEngine {
		___pointer: number;
		QTextToSpeechEngineFlite_PTR():QTextToSpeechEngineFlite;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechEngineIos_ITF extends QTextToSpeechEngine_ITF {
		QTextToSpeechEngineIos_PTR():QTextToSpeechEngineIos;
	}

	class QTextToSpeechEngineIos extends QTextToSpeechEngine {
		___pointer: number;
		QTextToSpeechEngineIos_PTR():QTextToSpeechEngineIos;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechEngineOsx_ITF extends QTextToSpeechEngine_ITF {
		QTextToSpeechEngineOsx_PTR():QTextToSpeechEngineOsx;
	}

	class QTextToSpeechEngineOsx extends QTextToSpeechEngine {
		___pointer: number;
		QTextToSpeechEngineOsx_PTR():QTextToSpeechEngineOsx;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechEngineSapi_ITF extends QTextToSpeechEngine_ITF {
		QTextToSpeechEngineSapi_PTR():QTextToSpeechEngineSapi;
	}

	class QTextToSpeechEngineSapi extends QTextToSpeechEngine {
		___pointer: number;
		QTextToSpeechEngineSapi_PTR():QTextToSpeechEngineSapi;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechEngineSpeechd_ITF extends QTextToSpeechEngine_ITF {
		QTextToSpeechEngineSpeechd_PTR():QTextToSpeechEngineSpeechd;
	}

	class QTextToSpeechEngineSpeechd extends QTextToSpeechEngine {
		___pointer: number;
		QTextToSpeechEngineSpeechd_PTR():QTextToSpeechEngineSpeechd;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechEngineWinRT_ITF extends QTextToSpeechEngine_ITF {
		QTextToSpeechEngineWinRT_PTR():QTextToSpeechEngineWinRT;
	}

	class QTextToSpeechEngineWinRT extends QTextToSpeechEngine {
		___pointer: number;
		QTextToSpeechEngineWinRT_PTR():QTextToSpeechEngineWinRT;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechPlugin_ITF {
		QTextToSpeechPlugin_PTR():QTextToSpeechPlugin;
	}

	class QTextToSpeechPlugin {
		___pointer: number;
		QTextToSpeechPlugin_PTR():QTextToSpeechPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextToSpeechPlugin():void;
		ConnectCreateTextToSpeechEngine(f:(parameters:Map<string,core.QVariant>,parent:core.QObject,errorString:string)=>QTextToSpeechEngine):void;
		DisconnectCreateTextToSpeechEngine():void;
		CreateTextToSpeechEngine(parameters:Map<string,core.QVariant>,parent:core.QObject_ITF,errorString:string):QTextToSpeechEngine;
		CreateTextToSpeechEngineDefault(parameters:Map<string,core.QVariant>,parent:core.QObject_ITF,errorString:string):QTextToSpeechEngine;
	}
	function NewQTextToSpeechPluginFromPointer(ptr:number):QTextToSpeechPlugin;
	interface QTextToSpeechPluginAndroid_ITF extends QTextToSpeechPlugin_ITF {
		QTextToSpeechPluginAndroid_PTR():QTextToSpeechPluginAndroid;
		QObject_PTR():core.QObject;
	}

	class QTextToSpeechPluginAndroid extends QTextToSpeechPlugin {
		QObject_PTR():core.QObject
		___pointer: number;
		QTextToSpeechPluginAndroid_PTR():QTextToSpeechPluginAndroid;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechPluginFlite_ITF extends QTextToSpeechPlugin_ITF {
		QTextToSpeechPluginFlite_PTR():QTextToSpeechPluginFlite;
		QObject_PTR():core.QObject;
	}

	class QTextToSpeechPluginFlite extends QTextToSpeechPlugin {
		QObject_PTR():core.QObject
		___pointer: number;
		QTextToSpeechPluginFlite_PTR():QTextToSpeechPluginFlite;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechPluginIos_ITF extends QTextToSpeechPlugin_ITF {
		QTextToSpeechPluginIos_PTR():QTextToSpeechPluginIos;
		QObject_PTR():core.QObject;
	}

	class QTextToSpeechPluginIos extends QTextToSpeechPlugin {
		QObject_PTR():core.QObject
		___pointer: number;
		QTextToSpeechPluginIos_PTR():QTextToSpeechPluginIos;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechPluginOsx_ITF extends QTextToSpeechPlugin_ITF {
		QTextToSpeechPluginOsx_PTR():QTextToSpeechPluginOsx;
		QObject_PTR():core.QObject;
	}

	class QTextToSpeechPluginOsx extends QTextToSpeechPlugin {
		QObject_PTR():core.QObject
		___pointer: number;
		QTextToSpeechPluginOsx_PTR():QTextToSpeechPluginOsx;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechPluginSapi_ITF extends QTextToSpeechPlugin_ITF {
		QTextToSpeechPluginSapi_PTR():QTextToSpeechPluginSapi;
		QObject_PTR():core.QObject;
	}

	class QTextToSpeechPluginSapi extends QTextToSpeechPlugin {
		QObject_PTR():core.QObject
		___pointer: number;
		QTextToSpeechPluginSapi_PTR():QTextToSpeechPluginSapi;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechPluginSpeechd_ITF extends QTextToSpeechPlugin_ITF {
		QTextToSpeechPluginSpeechd_PTR():QTextToSpeechPluginSpeechd;
		QObject_PTR():core.QObject;
	}

	class QTextToSpeechPluginSpeechd extends QTextToSpeechPlugin {
		QObject_PTR():core.QObject
		___pointer: number;
		QTextToSpeechPluginSpeechd_PTR():QTextToSpeechPluginSpeechd;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechPluginWinRT_ITF extends QTextToSpeechPlugin_ITF {
		QTextToSpeechPluginWinRT_PTR():QTextToSpeechPluginWinRT;
		QObject_PTR():core.QObject;
	}

	class QTextToSpeechPluginWinRT extends QTextToSpeechPlugin {
		QObject_PTR():core.QObject
		___pointer: number;
		QTextToSpeechPluginWinRT_PTR():QTextToSpeechPluginWinRT;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QTextToSpeechProcessorFlite_ITF {
		QTextToSpeechProcessorFlite_PTR():QTextToSpeechProcessorFlite;
	}

	class QTextToSpeechProcessorFlite {
		___pointer: number;
		QTextToSpeechProcessorFlite_PTR():QTextToSpeechProcessorFlite;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextToSpeechProcessorFlite():void;
	}
	interface QVoice_ITF {
		QVoice_PTR():QVoice;
	}

	class QVoice {
		___pointer: number;
		QVoice_PTR():QVoice;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVoice():void;
		Age():number;
		AgeName(age:number):string;
		Gender():number;
		GenderName(gender:number):string;
		Name():string;
	}
	function NewQVoiceFromPointer(ptr:number):QVoice;
	function QVoice_AgeName(age:number):string;
	function QVoice_GenderName(gender:number):string;
	const QVoice__Child: number;
	const QVoice__Teenager: number;
	const QVoice__Adult: number;
	const QVoice__Senior: number;
	const QVoice__Other: number;
	const QVoice__Male: number;
	const QVoice__Female: number;
	const QVoice__Unknown: number;
}