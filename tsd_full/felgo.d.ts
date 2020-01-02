/// <reference path="core.d.ts" />
/// <reference path="qml.d.ts" />
declare namespace felgo {
	interface FelgoApplication_ITF extends core.QObject_ITF {
		FelgoApplication_PTR():FelgoApplication;
	}

	class FelgoApplication extends core.QObject {
		___pointer: number;
		FelgoApplication_PTR():FelgoApplication;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectObjectCreatedHandler(f:(object:core.QObject,url:core.QUrl)=>void):void;
		DisconnectObjectCreatedHandler():void;
		ObjectCreatedHandler(object:core.QObject_ITF,url:core.QUrl_ITF):void;
		ObjectCreatedHandlerDefault(object:core.QObject_ITF,url:core.QUrl_ITF):void;
		AddCustomImportPaths():void;
		AddImportPath(path:string):void;
		AdjustImportPathToCanonical(vqs:string):string;
		ContentScale():number;
		ContentScaleThresholds():Map<string,core.QVariant>;
		FileSelectorList():string[];
		Initialize(engine:qml.QQmlEngine_ITF):void;
		InitializeEngine(engine:qml.QQmlEngine_ITF,uri:string):void;
		MainQmlFileName():string;
		QmlEngine():qml.QQmlEngine;
		RegisterTypes(uri:string):void;
		ScaleFactorForImages():number;
		SetContentScaleAndFileSelectors(contentScale:number):void;
		SetContentScaleThresholds(contentScaleThresholds:Map<string,core.QVariant>):void;
		SetDefaultContentScalingAndFileSelectors():void;
		SetFileSelectorList(fileSelectorList:string[]):void;
		SetGameWindowIsItem():void;
		SetLicenseKey(licenseKey:string):void;
		SetMainQmlFileName(qmlFileName:string):void;
		SetPreservePlatformFonts(preserve:boolean):void;
		VplayFileSelector():core.QFileSelector;
		DestroyFelgoApplication():void;
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
	function NewFelgoApplicationFromPointer(ptr:number):FelgoApplication;
	function NewFelgoApplication(parent:core.QObject_ITF):FelgoApplication;
	interface FelgoLiveClient_ITF extends core.QObject_ITF {
		FelgoLiveClient_PTR():FelgoLiveClient;
	}

	class FelgoLiveClient extends core.QObject {
		___pointer: number;
		FelgoLiveClient_PTR():FelgoLiveClient;
		Pointer():number;
		SetPointer(p:number):void;
		AddShakeDetection():void;
		ConnectClearProject(f:(projectName:string)=>void):void;
		DisconnectClearProject():void;
		ClearProject(projectName:string):void;
		ClearProjectDefault(projectName:string):void;
		ConnectClearProjects(f:()=>void):void;
		DisconnectClearProjects():void;
		ClearProjects():void;
		ClearProjectsDefault():void;
		ClientName():string;
		ConnectClientNameChanged(f:(clientName:string)=>void):void;
		DisconnectClientNameChanged():void;
		ClientNameChanged(clientName:string):void;
		ConnectConnectAsLocalDesktopClient(f:(serverUrl:string)=>void):void;
		DisconnectConnectAsLocalDesktopClient():void;
		ConnectAsLocalDesktopClient(serverUrl:string):void;
		ConnectAsLocalDesktopClientDefault(serverUrl:string):void;
		ConnectConnectToLocalServer(f:(serverUrl:string,userId:string,deviceId:string)=>void):void;
		DisconnectConnectToLocalServer():void;
		ConnectToLocalServer(serverUrl:string,userId:string,deviceId:string):void;
		ConnectToLocalServerDefault(serverUrl:string,userId:string,deviceId:string):void;
		ConnectToWebServer(userId:string,deviceId:string):void;
		LoadProject(projectName:string,projectMainFile:string):void;
		DisableDisplaySleep():void;
		ConnectDisconnectWebReceiver(f:()=>void):void;
		DisconnectDisconnectWebReceiver():void;
		DisconnectWebReceiver():void;
		DisconnectWebReceiverDefault():void;
		ConnectModifyLoadedDocument(f:()=>void):void;
		DisconnectModifyLoadedDocument():void;
		ModifyLoadedDocument():void;
		ModifyLoadedDocumentDefault():void;
		ConnectOnDocumentUpdated(f:(document:string,content:string)=>void):void;
		DisconnectOnDocumentUpdated():void;
		OnDocumentUpdated(document:string,content:string):void;
		OnDocumentUpdatedDefault(document:string,content:string):void;
		ConnectOnProjectChanged(f:(projectName:string,projectMainFile:string)=>void):void;
		DisconnectOnProjectChanged():void;
		OnProjectChanged(projectName:string,projectMainFile:string):void;
		OnProjectChangedDefault(projectName:string,projectMainFile:string):void;
		ConnectPendingProject(f:(projectName:string,projectMainFile:string)=>void):void;
		DisconnectPendingProject():void;
		PendingProject(projectName:string,projectMainFile:string):void;
		ConnectPrepareLoadingDocument(f:()=>void):void;
		DisconnectPrepareLoadingDocument():void;
		PrepareLoadingDocument():void;
		PrepareLoadingDocumentDefault():void;
		ConnectWebReceiverConnectionRefused(f:(reason:string)=>void):void;
		DisconnectWebReceiverConnectionRefused():void;
		WebReceiverConnectionRefused(reason:string):void;
		ConnectReceivedMatchId(f:(matchId:string)=>void):void;
		DisconnectReceivedMatchId():void;
		ReceivedMatchId(matchId:string):void;
		SetClientName(clientName:string):void;
		SetQmlEngine(engine:qml.QQmlEngine_ITF):void;
		SetWelcomeQmlFile(file:string):void;
		ConnectShakeDetected(f:()=>void):void;
		DisconnectShakeDetected():void;
		ShakeDetected():void;
		ShakeDetectedDefault():void;
		ConnectWebReceiverConnected(f:()=>void):void;
		DisconnectWebReceiverConnected():void;
		WebReceiverConnected():void;
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
	function NewFelgoLiveClientFromPointer(ptr:number):FelgoLiveClient;
	function NewFelgoLiveClient(engine:qml.QQmlEngine_ITF,parent:core.QObject_ITF):FelgoLiveClient;
}