/// <reference path="core.d.ts" />
declare namespace nfc {
	interface QNdefFilter_ITF {
		QNdefFilter_PTR():QNdefFilter;
	}

	class QNdefFilter {
		___pointer: number;
		QNdefFilter_PTR():QNdefFilter;
		Pointer():number;
		SetPointer(p:number):void;
		AppendRecord2(typeNameFormat:number,ty:core.QByteArray_ITF,mi:number,max:number):void;
		Clear():void;
		OrderMatch():boolean;
		RecordCount():number;
		SetOrderMatch(on:boolean):void;
		DestroyQNdefFilter():void;
	}
	function NewQNdefFilterFromPointer(ptr:number):QNdefFilter;
	function NewQNdefFilter():QNdefFilter;
	function NewQNdefFilter2(other:QNdefFilter_ITF):QNdefFilter;
	interface QNdefMessage_ITF {
		QNdefMessage_PTR():QNdefMessage;
	}

	class QNdefMessage {
		___pointer: number;
		QNdefMessage_PTR():QNdefMessage;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQNdefMessage():void;
		FromByteArray(message:core.QByteArray_ITF):QNdefMessage;
		ToByteArray():core.QByteArray;
	}
	function NewQNdefMessageFromPointer(ptr:number):QNdefMessage;
	function NewQNdefMessage():QNdefMessage;
	function NewQNdefMessage2(record:QNdefRecord_ITF):QNdefMessage;
	function NewQNdefMessage3(message:QNdefMessage_ITF):QNdefMessage;
	function NewQNdefMessage4(records:QNdefRecord[]):QNdefMessage;
	function QNdefMessage_FromByteArray(message:core.QByteArray_ITF):QNdefMessage;
	interface QNdefNfcIconRecord_ITF extends QNdefRecord_ITF {
		QNdefNfcIconRecord_PTR():QNdefNfcIconRecord;
	}

	class QNdefNfcIconRecord extends QNdefRecord {
		___pointer: number;
		QNdefNfcIconRecord_PTR():QNdefNfcIconRecord;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQNdefNfcIconRecord():void;
	}
	function NewQNdefNfcIconRecordFromPointer(ptr:number):QNdefNfcIconRecord;
	interface QNdefNfcSmartPosterRecord_ITF extends QNdefRecord_ITF {
		QNdefNfcSmartPosterRecord_PTR():QNdefNfcSmartPosterRecord;
	}

	class QNdefNfcSmartPosterRecord extends QNdefRecord {
		___pointer: number;
		QNdefNfcSmartPosterRecord_PTR():QNdefNfcSmartPosterRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Action():number;
		AddIcon(icon:QNdefNfcIconRecord_ITF):void;
		AddIcon2(ty:core.QByteArray_ITF,data:core.QByteArray_ITF):void;
		AddTitle(text:QNdefNfcTextRecord_ITF):boolean;
		AddTitle2(text:string,locale:string,encoding:number):boolean;
		HasAction():boolean;
		HasIcon(mimetype:core.QByteArray_ITF):boolean;
		HasSize():boolean;
		HasTitle(locale:string):boolean;
		HasTypeInfo():boolean;
		Icon(mimetype:core.QByteArray_ITF):core.QByteArray;
		IconCount():number;
		IconRecord(index:number):QNdefNfcIconRecord;
		IconRecords():QNdefNfcIconRecord[];
		RemoveIcon(icon:QNdefNfcIconRecord_ITF):boolean;
		RemoveIcon2(ty:core.QByteArray_ITF):boolean;
		RemoveTitle(text:QNdefNfcTextRecord_ITF):boolean;
		RemoveTitle2(locale:string):boolean;
		SetAction(act:number):void;
		SetIcons(icons:QNdefNfcIconRecord[]):void;
		SetSize(size:number):void;
		SetTitles(titles:QNdefNfcTextRecord[]):void;
		SetTypeInfo(ty:core.QByteArray_ITF):void;
		SetUri(url:QNdefNfcUriRecord_ITF):void;
		SetUri2(url:core.QUrl_ITF):void;
		Size():number;
		Title(locale:string):string;
		TitleCount():number;
		TitleRecord(index:number):QNdefNfcTextRecord;
		TypeInfo():core.QByteArray;
		Uri():core.QUrl;
		UriRecord():QNdefNfcUriRecord;
		DestroyQNdefNfcSmartPosterRecord():void;
	}
	function NewQNdefNfcSmartPosterRecordFromPointer(ptr:number):QNdefNfcSmartPosterRecord;
	function NewQNdefNfcSmartPosterRecord():QNdefNfcSmartPosterRecord;
	function NewQNdefNfcSmartPosterRecord2(other:QNdefRecord_ITF):QNdefNfcSmartPosterRecord;
	function NewQNdefNfcSmartPosterRecord3(other:QNdefNfcSmartPosterRecord_ITF):QNdefNfcSmartPosterRecord;
	const QNdefNfcSmartPosterRecord__UnspecifiedAction: number;
	const QNdefNfcSmartPosterRecord__DoAction: number;
	const QNdefNfcSmartPosterRecord__SaveAction: number;
	const QNdefNfcSmartPosterRecord__EditAction: number;
	interface QNdefNfcTextRecord_ITF extends QNdefRecord_ITF {
		QNdefNfcTextRecord_PTR():QNdefNfcTextRecord;
	}

	class QNdefNfcTextRecord extends QNdefRecord {
		___pointer: number;
		QNdefNfcTextRecord_PTR():QNdefNfcTextRecord;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQNdefNfcTextRecord():void;
		Encoding():number;
		Locale():string;
		SetEncoding(encoding:number):void;
		SetLocale(locale:string):void;
		SetText(text:string):void;
		Text():string;
	}
	function NewQNdefNfcTextRecordFromPointer(ptr:number):QNdefNfcTextRecord;
	function NewQNdefNfcTextRecord():QNdefNfcTextRecord;
	function NewQNdefNfcTextRecord2(other:QNdefRecord_ITF):QNdefNfcTextRecord;
	const QNdefNfcTextRecord__Utf8: number;
	const QNdefNfcTextRecord__Utf16: number;
	interface QNdefNfcUriRecord_ITF extends QNdefRecord_ITF {
		QNdefNfcUriRecord_PTR():QNdefNfcUriRecord;
	}

	class QNdefNfcUriRecord extends QNdefRecord {
		___pointer: number;
		QNdefNfcUriRecord_PTR():QNdefNfcUriRecord;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQNdefNfcUriRecord():void;
		SetUri(uri:core.QUrl_ITF):void;
		Uri():core.QUrl;
	}
	function NewQNdefNfcUriRecordFromPointer(ptr:number):QNdefNfcUriRecord;
	function NewQNdefNfcUriRecord():QNdefNfcUriRecord;
	function NewQNdefNfcUriRecord2(other:QNdefRecord_ITF):QNdefNfcUriRecord;
	interface QNdefRecord_ITF {
		QNdefRecord_PTR():QNdefRecord;
	}

	class QNdefRecord {
		___pointer: number;
		QNdefRecord_PTR():QNdefRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Id():core.QByteArray;
		IsEmpty():boolean;
		Payload():core.QByteArray;
		SetId(id:core.QByteArray_ITF):void;
		SetPayload(payload:core.QByteArray_ITF):void;
		SetType(ty:core.QByteArray_ITF):void;
		SetTypeNameFormat(typeNameFormat:number):void;
		Type():core.QByteArray;
		TypeNameFormat():number;
		DestroyQNdefRecord():void;
	}
	function NewQNdefRecordFromPointer(ptr:number):QNdefRecord;
	function NewQNdefRecord():QNdefRecord;
	function NewQNdefRecord2(other:QNdefRecord_ITF):QNdefRecord;
	const QNdefRecord__Empty: number;
	const QNdefRecord__NfcRtd: number;
	const QNdefRecord__Mime: number;
	const QNdefRecord__Uri: number;
	const QNdefRecord__ExternalRtd: number;
	const QNdefRecord__Unknown: number;
	interface QNearFieldManager_ITF extends core.QObject_ITF {
		QNearFieldManager_PTR():QNearFieldManager;
	}

	class QNearFieldManager extends core.QObject {
		___pointer: number;
		QNearFieldManager_PTR():QNearFieldManager;
		Pointer():number;
		SetPointer(p:number):void;
		IsAvailable():boolean;
		IsSupported():boolean;
		RegisterNdefMessageHandler(object:core.QObject_ITF,method:string):number;
		RegisterNdefMessageHandler2(typeNameFormat:number,ty:core.QByteArray_ITF,object:core.QObject_ITF,method:string):number;
		RegisterNdefMessageHandler3(filter:QNdefFilter_ITF,object:core.QObject_ITF,method:string):number;
		SetTargetAccessModes(accessModes:number):void;
		StartTargetDetection():boolean;
		StopTargetDetection():void;
		TargetAccessModes():number;
		ConnectTargetDetected(f:(target:QNearFieldTarget)=>void):void;
		DisconnectTargetDetected():void;
		TargetDetected(target:QNearFieldTarget_ITF):void;
		ConnectTargetLost(f:(target:QNearFieldTarget)=>void):void;
		DisconnectTargetLost():void;
		TargetLost(target:QNearFieldTarget_ITF):void;
		UnregisterNdefMessageHandler(handlerId:number):boolean;
		ConnectDestroyQNearFieldManager(f:()=>void):void;
		DisconnectDestroyQNearFieldManager():void;
		DestroyQNearFieldManager():void;
		DestroyQNearFieldManagerDefault():void;
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
	function NewQNearFieldManagerFromPointer(ptr:number):QNearFieldManager;
	function NewQNearFieldManager(parent:core.QObject_ITF):QNearFieldManager;
	const QNearFieldManager__Offline: number;
	const QNearFieldManager__TurningOn: number;
	const QNearFieldManager__Online: number;
	const QNearFieldManager__TurningOff: number;
	const QNearFieldManager__NoTargetAccess: number;
	const QNearFieldManager__NdefReadTargetAccess: number;
	const QNearFieldManager__NdefWriteTargetAccess: number;
	const QNearFieldManager__TagTypeSpecificTargetAccess: number;
	interface QNearFieldShareManager_ITF extends core.QObject_ITF {
		QNearFieldShareManager_PTR():QNearFieldShareManager;
	}

	class QNearFieldShareManager extends core.QObject {
		___pointer: number;
		QNearFieldShareManager_PTR():QNearFieldShareManager;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectError(f:(error:number)=>void):void;
		DisconnectError():void;
		Error(error:number):void;
		SetShareModes(mode:number):void;
		ShareError():number;
		ShareModes():number;
		ConnectShareModesChanged(f:(modes:number)=>void):void;
		DisconnectShareModesChanged():void;
		ShareModesChanged(modes:number):void;
		SupportedShareModes():number;
		ConnectTargetDetected(f:(shareTarget:QNearFieldShareTarget)=>void):void;
		DisconnectTargetDetected():void;
		TargetDetected(shareTarget:QNearFieldShareTarget_ITF):void;
		ConnectDestroyQNearFieldShareManager(f:()=>void):void;
		DisconnectDestroyQNearFieldShareManager():void;
		DestroyQNearFieldShareManager():void;
		DestroyQNearFieldShareManagerDefault():void;
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
	function NewQNearFieldShareManagerFromPointer(ptr:number):QNearFieldShareManager;
	function NewQNearFieldShareManager(parent:core.QObject_ITF):QNearFieldShareManager;
	function QNearFieldShareManager_SupportedShareModes():number;
	const QNearFieldShareManager__NoShare: number;
	const QNearFieldShareManager__NdefShare: number;
	const QNearFieldShareManager__FileShare: number;
	const QNearFieldShareManager__NoError: number;
	const QNearFieldShareManager__UnknownError: number;
	const QNearFieldShareManager__InvalidShareContentError: number;
	const QNearFieldShareManager__ShareCanceledError: number;
	const QNearFieldShareManager__ShareInterruptedError: number;
	const QNearFieldShareManager__ShareRejectedError: number;
	const QNearFieldShareManager__UnsupportedShareModeError: number;
	const QNearFieldShareManager__ShareAlreadyInProgressError: number;
	const QNearFieldShareManager__SharePermissionDeniedError: number;
	interface QNearFieldShareTarget_ITF extends core.QObject_ITF {
		QNearFieldShareTarget_PTR():QNearFieldShareTarget;
	}

	class QNearFieldShareTarget extends core.QObject {
		___pointer: number;
		QNearFieldShareTarget_PTR():QNearFieldShareTarget;
		Pointer():number;
		SetPointer(p:number):void;
		Cancel():void;
		ConnectError(f:(error:number)=>void):void;
		DisconnectError():void;
		Error(error:number):void;
		IsShareInProgress():boolean;
		Share(message:QNdefMessage_ITF):boolean;
		Share2(files:core.QFileInfo[]):boolean;
		ShareError():number;
		ConnectShareFinished(f:()=>void):void;
		DisconnectShareFinished():void;
		ShareFinished():void;
		ShareModes():number;
		ConnectDestroyQNearFieldShareTarget(f:()=>void):void;
		DisconnectDestroyQNearFieldShareTarget():void;
		DestroyQNearFieldShareTarget():void;
		DestroyQNearFieldShareTargetDefault():void;
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
	function NewQNearFieldShareTargetFromPointer(ptr:number):QNearFieldShareTarget;
	interface QNearFieldTarget_ITF extends core.QObject_ITF {
		QNearFieldTarget_PTR():QNearFieldTarget;
	}

	class QNearFieldTarget extends core.QObject {
		___pointer: number;
		QNearFieldTarget_PTR():QNearFieldTarget;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAccessMethods(f:()=>number):void;
		DisconnectAccessMethods():void;
		AccessMethods():number;
		Disconnect():boolean;
		ConnectDisconnected(f:()=>void):void;
		DisconnectDisconnected():void;
		Disconnected():void;
		ConnectHasNdefMessage(f:()=>boolean):void;
		DisconnectHasNdefMessage():void;
		HasNdefMessage():boolean;
		HasNdefMessageDefault():boolean;
		IsProcessingCommand():boolean;
		KeepConnection():boolean;
		MaxCommandLength():number;
		ConnectNdefMessageRead(f:(message:QNdefMessage)=>void):void;
		DisconnectNdefMessageRead():void;
		NdefMessageRead(message:QNdefMessage_ITF):void;
		ConnectNdefMessagesWritten(f:()=>void):void;
		DisconnectNdefMessagesWritten():void;
		NdefMessagesWritten():void;
		SetKeepConnection(isPersistent:boolean):boolean;
		ConnectType(f:()=>number):void;
		DisconnectType():void;
		Type():number;
		ConnectUid(f:()=>core.QByteArray):void;
		DisconnectUid():void;
		Uid():core.QByteArray;
		ConnectUrl(f:()=>core.QUrl):void;
		DisconnectUrl():void;
		Url():core.QUrl;
		UrlDefault():core.QUrl;
		ConnectDestroyQNearFieldTarget(f:()=>void):void;
		DisconnectDestroyQNearFieldTarget():void;
		DestroyQNearFieldTarget():void;
		DestroyQNearFieldTargetDefault():void;
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
	function NewQNearFieldTargetFromPointer(ptr:number):QNearFieldTarget;
	function NewQNearFieldTarget(parent:core.QObject_ITF):QNearFieldTarget;
	const QNearFieldTarget__ProprietaryTag: number;
	const QNearFieldTarget__NfcTagType1: number;
	const QNearFieldTarget__NfcTagType2: number;
	const QNearFieldTarget__NfcTagType3: number;
	const QNearFieldTarget__NfcTagType4: number;
	const QNearFieldTarget__MifareTag: number;
	const QNearFieldTarget__UnknownAccess: number;
	const QNearFieldTarget__NdefAccess: number;
	const QNearFieldTarget__TagTypeSpecificAccess: number;
	const QNearFieldTarget__LlcpAccess: number;
	const QNearFieldTarget__NoError: number;
	const QNearFieldTarget__UnknownError: number;
	const QNearFieldTarget__UnsupportedError: number;
	const QNearFieldTarget__TargetOutOfRangeError: number;
	const QNearFieldTarget__NoResponseError: number;
	const QNearFieldTarget__ChecksumMismatchError: number;
	const QNearFieldTarget__InvalidParametersError: number;
	const QNearFieldTarget__NdefReadError: number;
	const QNearFieldTarget__NdefWriteError: number;
	const QNearFieldTarget__CommandError: number;
	interface QQmlNdefRecord_ITF extends core.QObject_ITF {
		QQmlNdefRecord_PTR():QQmlNdefRecord;
	}

	class QQmlNdefRecord extends core.QObject {
		___pointer: number;
		QQmlNdefRecord_PTR():QQmlNdefRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Record():QNdefRecord;
		ConnectRecordChanged(f:()=>void):void;
		DisconnectRecordChanged():void;
		RecordChanged():void;
		SetRecord(record:QNdefRecord_ITF):void;
		SetType(newtype:string):void;
		SetTypeNameFormat(newTypeNameFormat:number):void;
		Type():string;
		ConnectTypeChanged(f:()=>void):void;
		DisconnectTypeChanged():void;
		TypeChanged():void;
		TypeNameFormat():number;
		ConnectTypeNameFormatChanged(f:()=>void):void;
		DisconnectTypeNameFormatChanged():void;
		TypeNameFormatChanged():void;
		ConnectDestroyQQmlNdefRecord(f:()=>void):void;
		DisconnectDestroyQQmlNdefRecord():void;
		DestroyQQmlNdefRecord():void;
		DestroyQQmlNdefRecordDefault():void;
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
	function NewQQmlNdefRecordFromPointer(ptr:number):QQmlNdefRecord;
	function NewQQmlNdefRecord(parent:core.QObject_ITF):QQmlNdefRecord;
	function NewQQmlNdefRecord2(record:QNdefRecord_ITF,parent:core.QObject_ITF):QQmlNdefRecord;
	const QQmlNdefRecord__Empty: number;
	const QQmlNdefRecord__NfcRtd: number;
	const QQmlNdefRecord__Mime: number;
	const QQmlNdefRecord__Uri: number;
	const QQmlNdefRecord__ExternalRtd: number;
	const QQmlNdefRecord__Unknown: number;
}