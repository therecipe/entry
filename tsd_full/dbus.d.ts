/// <reference path="core.d.ts" />
declare namespace dbus {
	interface QDBus_ITF {
		QDBus_PTR():QDBus;
	}

	class QDBus {
		___pointer: number;
		QDBus_PTR():QDBus;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDBus():void;
	}
	function NewQDBusFromPointer(ptr:number):QDBus;
	function NewQDBusAbstractAdaptor(obj:core.QObject_ITF):QDBusAbstractAdaptor;
	function NewQDBusArgument():QDBusArgument;
	function NewQDBusArgument2(other:QDBusArgument_ITF):QDBusArgument;
	function NewQDBusConnection(name:string):QDBusConnection;
	function NewQDBusConnection2(other:QDBusConnection_ITF):QDBusConnection;
	function NewQDBusContext():QDBusContext;
	function NewQDBusInterface2(service:string,path:string,interfa:string,connection:QDBusConnection_ITF,parent:core.QObject_ITF):QDBusInterface;
	function NewQDBusMessage():QDBusMessage;
	function NewQDBusMessage2(other:QDBusMessage_ITF):QDBusMessage;
	function NewQDBusObjectPath():QDBusObjectPath;
	function NewQDBusObjectPath2(path:string):QDBusObjectPath;
	function NewQDBusObjectPath3(path:core.QLatin1String_ITF):QDBusObjectPath;
	function NewQDBusObjectPath4(path:string):QDBusObjectPath;
	function NewQDBusPendingCall(other:QDBusPendingCall_ITF):QDBusPendingCall;
	function NewQDBusPendingCallWatcher(call:QDBusPendingCall_ITF,parent:core.QObject_ITF):QDBusPendingCallWatcher;
	function NewQDBusServer(address:string,parent:core.QObject_ITF):QDBusServer;
	function NewQDBusServer2(parent:core.QObject_ITF):QDBusServer;
	function NewQDBusServiceWatcher(parent:core.QObject_ITF):QDBusServiceWatcher;
	function NewQDBusServiceWatcher2(service:string,connection:QDBusConnection_ITF,watchMode:number,parent:core.QObject_ITF):QDBusServiceWatcher;
	function NewQDBusSignature():QDBusSignature;
	function NewQDBusSignature2(signature:string):QDBusSignature;
	function NewQDBusSignature3(signature:core.QLatin1String_ITF):QDBusSignature;
	function NewQDBusSignature4(signature:string):QDBusSignature;
	function NewQDBusUnixFileDescriptor():QDBusUnixFileDescriptor;
	function NewQDBusUnixFileDescriptor2(fileDescriptor:number):QDBusUnixFileDescriptor;
	function NewQDBusUnixFileDescriptor3(other:QDBusUnixFileDescriptor_ITF):QDBusUnixFileDescriptor;
	function NewQDBusVariant():QDBusVariant;
	function NewQDBusVariant2(variant:core.QVariant_ITF):QDBusVariant;
	function NewQDBusVirtualObject(parent:core.QObject_ITF):QDBusVirtualObject;
	const QDBus__NoBlock: number;
	const QDBus__Block: number;
	const QDBus__BlockWithGui: number;
	const QDBus__AutoDetect: number;
	interface QDBusAbstractAdaptor_ITF extends core.QObject_ITF {
		QDBusAbstractAdaptor_PTR():QDBusAbstractAdaptor;
	}

	class QDBusAbstractAdaptor extends core.QObject {
		___pointer: number;
		QDBusAbstractAdaptor_PTR():QDBusAbstractAdaptor;
		Pointer():number;
		SetPointer(p:number):void;
		AutoRelaySignals():boolean;
		SetAutoRelaySignals(enable:boolean):void;
		ConnectDestroyQDBusAbstractAdaptor(f:()=>void):void;
		DisconnectDestroyQDBusAbstractAdaptor():void;
		DestroyQDBusAbstractAdaptor():void;
		DestroyQDBusAbstractAdaptorDefault():void;
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
	function NewQDBusAbstractAdaptorFromPointer(ptr:number):QDBusAbstractAdaptor;
	function NewQDBusAbstractAdaptor(obj:core.QObject_ITF):QDBusAbstractAdaptor;
	interface QDBusAbstractInterface_ITF extends core.QObject_ITF {
		QDBusAbstractInterface_PTR():QDBusAbstractInterface;
	}

	class QDBusAbstractInterface extends core.QObject {
		___pointer: number;
		QDBusAbstractInterface_PTR():QDBusAbstractInterface;
		Pointer():number;
		SetPointer(p:number):void;
		AsyncCall(method:string,arg1:core.QVariant_ITF,arg2:core.QVariant_ITF,arg3:core.QVariant_ITF,arg4:core.QVariant_ITF,arg5:core.QVariant_ITF,arg6:core.QVariant_ITF,arg7:core.QVariant_ITF,arg8:core.QVariant_ITF):QDBusPendingCall;
		AsyncCallWithArgumentList(method:string,args:core.QVariant[]):QDBusPendingCall;
		Call(method:string,arg1:core.QVariant_ITF,arg2:core.QVariant_ITF,arg3:core.QVariant_ITF,arg4:core.QVariant_ITF,arg5:core.QVariant_ITF,arg6:core.QVariant_ITF,arg7:core.QVariant_ITF,arg8:core.QVariant_ITF):QDBusMessage;
		Call2(mode:number,method:string,arg1:core.QVariant_ITF,arg2:core.QVariant_ITF,arg3:core.QVariant_ITF,arg4:core.QVariant_ITF,arg5:core.QVariant_ITF,arg6:core.QVariant_ITF,arg7:core.QVariant_ITF,arg8:core.QVariant_ITF):QDBusMessage;
		CallWithArgumentList(mode:number,method:string,args:core.QVariant[]):QDBusMessage;
		CallWithCallback(method:string,args:core.QVariant[],receiver:core.QObject_ITF,returnMethod:string,errorMethod:string):boolean;
		CallWithCallback2(method:string,args:core.QVariant[],receiver:core.QObject_ITF,slot:string):boolean;
		Connection():QDBusConnection;
		Interface():string;
		IsValid():boolean;
		Path():string;
		Service():string;
		SetTimeout(timeout:number):void;
		Timeout():number;
		ConnectDestroyQDBusAbstractInterface(f:()=>void):void;
		DisconnectDestroyQDBusAbstractInterface():void;
		DestroyQDBusAbstractInterface():void;
		DestroyQDBusAbstractInterfaceDefault():void;
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
	function NewQDBusAbstractInterfaceFromPointer(ptr:number):QDBusAbstractInterface;
	interface QDBusAbstractInterfaceBase_ITF extends core.QObject_ITF {
		QDBusAbstractInterfaceBase_PTR():QDBusAbstractInterfaceBase;
	}

	class QDBusAbstractInterfaceBase extends core.QObject {
		___pointer: number;
		QDBusAbstractInterfaceBase_PTR():QDBusAbstractInterfaceBase;
		Pointer():number;
		SetPointer(p:number):void;
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
	function NewQDBusAbstractInterfaceBaseFromPointer(ptr:number):QDBusAbstractInterfaceBase;
	interface QDBusArgument_ITF {
		QDBusArgument_PTR():QDBusArgument;
	}

	class QDBusArgument {
		___pointer: number;
		QDBusArgument_PTR():QDBusArgument;
		Pointer():number;
		SetPointer(p:number):void;
		AsVariant():core.QVariant;
		AtEnd():boolean;
		BeginArray(id:number):void;
		BeginArray2():void;
		BeginMap(kid:number,vid:number):void;
		BeginMap2():void;
		BeginMapEntry():void;
		BeginMapEntry2():void;
		BeginStructure():void;
		BeginStructure2():void;
		CurrentType():number;
		EndArray():void;
		EndArray2():void;
		EndMap():void;
		EndMap2():void;
		EndMapEntry():void;
		EndMapEntry2():void;
		EndStructure():void;
		EndStructure2():void;
		Swap(other:QDBusArgument_ITF):void;
		DestroyQDBusArgument():void;
	}
	function NewQDBusArgumentFromPointer(ptr:number):QDBusArgument;
	function NewQDBusArgument():QDBusArgument;
	function NewQDBusArgument2(other:QDBusArgument_ITF):QDBusArgument;
	const QDBusArgument__BasicType: number;
	const QDBusArgument__VariantType: number;
	const QDBusArgument__ArrayType: number;
	const QDBusArgument__StructureType: number;
	const QDBusArgument__MapType: number;
	const QDBusArgument__MapEntryType: number;
	const QDBusArgument__UnknownType: number;
	interface QDBusConnection_ITF {
		QDBusConnection_PTR():QDBusConnection;
	}

	class QDBusConnection {
		___pointer: number;
		QDBusConnection_PTR():QDBusConnection;
		Pointer():number;
		SetPointer(p:number):void;
		AsyncCall(message:QDBusMessage_ITF,timeout:number):QDBusPendingCall;
		BaseService():string;
		Call(message:QDBusMessage_ITF,mode:number,timeout:number):QDBusMessage;
		CallWithCallback(message:QDBusMessage_ITF,receiver:core.QObject_ITF,returnMethod:string,errorMethod:string,timeout:number):boolean;
		Connect(service:string,path:string,interfa:string,name:string,receiver:core.QObject_ITF,slot:string):boolean;
		Connect2(service:string,path:string,interfa:string,name:string,signature:string,receiver:core.QObject_ITF,slot:string):boolean;
		Connect3(service:string,path:string,interfa:string,name:string,argumentMatch:string[],signature:string,receiver:core.QObject_ITF,slot:string):boolean;
		ConnectToBus(ty:number,name:string):QDBusConnection;
		ConnectToBus2(address:string,name:string):QDBusConnection;
		ConnectToPeer(address:string,name:string):QDBusConnection;
		ConnectionCapabilities():number;
		Disconnect(service:string,path:string,interfa:string,name:string,receiver:core.QObject_ITF,slot:string):boolean;
		Disconnect2(service:string,path:string,interfa:string,name:string,signature:string,receiver:core.QObject_ITF,slot:string):boolean;
		Disconnect3(service:string,path:string,interfa:string,name:string,argumentMatch:string[],signature:string,receiver:core.QObject_ITF,slot:string):boolean;
		DisconnectFromBus(name:string):void;
		DisconnectFromPeer(name:string):void;
		Interface():QDBusConnectionInterface;
		IsConnected():boolean;
		LocalMachineId():core.QByteArray;
		Name():string;
		ObjectRegisteredAt(path:string):core.QObject;
		RegisterObject(path:string,object:core.QObject_ITF,options:number):boolean;
		RegisterObject2(path:string,interfa:string,object:core.QObject_ITF,options:number):boolean;
		RegisterService(serviceName:string):boolean;
		Send(message:QDBusMessage_ITF):boolean;
		SessionBus():QDBusConnection;
		Swap(other:QDBusConnection_ITF):void;
		SystemBus():QDBusConnection;
		UnregisterObject(path:string,mode:number):void;
		UnregisterService(serviceName:string):boolean;
		DestroyQDBusConnection():void;
	}
	function NewQDBusConnectionFromPointer(ptr:number):QDBusConnection;
	function NewQDBusConnection(name:string):QDBusConnection;
	function NewQDBusConnection2(other:QDBusConnection_ITF):QDBusConnection;
	function QDBusConnection_ConnectToBus(ty:number,name:string):QDBusConnection;
	function QDBusConnection_ConnectToBus2(address:string,name:string):QDBusConnection;
	function QDBusConnection_ConnectToPeer(address:string,name:string):QDBusConnection;
	function QDBusConnection_DisconnectFromBus(name:string):void;
	function QDBusConnection_DisconnectFromPeer(name:string):void;
	function QDBusConnection_LocalMachineId():core.QByteArray;
	function QDBusConnection_SessionBus():QDBusConnection;
	function QDBusConnection_SystemBus():QDBusConnection;
	const QDBusConnection__SessionBus: number;
	const QDBusConnection__SystemBus: number;
	const QDBusConnection__ActivationBus: number;
	const QDBusConnection__ExportAdaptors: number;
	const QDBusConnection__ExportScriptableSlots: number;
	const QDBusConnection__ExportScriptableSignals: number;
	const QDBusConnection__ExportScriptableProperties: number;
	const QDBusConnection__ExportScriptableInvokables: number;
	const QDBusConnection__ExportScriptableContents: number;
	const QDBusConnection__ExportNonScriptableSlots: number;
	const QDBusConnection__ExportNonScriptableSignals: number;
	const QDBusConnection__ExportNonScriptableProperties: number;
	const QDBusConnection__ExportNonScriptableInvokables: number;
	const QDBusConnection__ExportNonScriptableContents: number;
	const QDBusConnection__ExportChildObjects: number;
	const QDBusConnection__UnregisterNode: number;
	const QDBusConnection__UnregisterTree: number;
	const QDBusConnection__UnixFileDescriptorPassing: number;
	interface QDBusConnectionInterface_ITF extends QDBusAbstractInterface_ITF {
		QDBusConnectionInterface_PTR():QDBusConnectionInterface;
	}

	class QDBusConnectionInterface extends QDBusAbstractInterface {
		___pointer: number;
		QDBusConnectionInterface_PTR():QDBusConnectionInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCallWithCallbackFailed(f:(error:QDBusError,call:QDBusMessage)=>void):void;
		DisconnectCallWithCallbackFailed():void;
		CallWithCallbackFailed(error:QDBusError_ITF,call:QDBusMessage_ITF):void;
		ConnectServiceRegistered(f:(service:string)=>void):void;
		DisconnectServiceRegistered():void;
		ServiceRegistered(service:string):void;
		ConnectServiceUnregistered(f:(service:string)=>void):void;
		DisconnectServiceUnregistered():void;
		ServiceUnregistered(service:string):void;
	}
	function NewQDBusConnectionInterfaceFromPointer(ptr:number):QDBusConnectionInterface;
	const QDBusConnectionInterface__DontQueueService: number;
	const QDBusConnectionInterface__QueueService: number;
	const QDBusConnectionInterface__ReplaceExistingService: number;
	const QDBusConnectionInterface__DontAllowReplacement: number;
	const QDBusConnectionInterface__AllowReplacement: number;
	const QDBusConnectionInterface__ServiceNotRegistered: number;
	const QDBusConnectionInterface__ServiceRegistered: number;
	const QDBusConnectionInterface__ServiceQueued: number;
	interface QDBusContext_ITF {
		QDBusContext_PTR():QDBusContext;
	}

	class QDBusContext {
		___pointer: number;
		QDBusContext_PTR():QDBusContext;
		Pointer():number;
		SetPointer(p:number):void;
		CalledFromDBus():boolean;
		Connection():QDBusConnection;
		IsDelayedReply():boolean;
		Message():QDBusMessage;
		SendErrorReply(name:string,msg:string):void;
		SendErrorReply2(ty:number,msg:string):void;
		SetDelayedReply(enable:boolean):void;
		DestroyQDBusContext():void;
	}
	function NewQDBusContextFromPointer(ptr:number):QDBusContext;
	function NewQDBusContext():QDBusContext;
	interface QDBusError_ITF {
		QDBusError_PTR():QDBusError;
	}

	class QDBusError {
		___pointer: number;
		QDBusError_PTR():QDBusError;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDBusError():void;
		ErrorString(error:number):string;
		IsValid():boolean;
		Message():string;
		Name():string;
		Swap(other:QDBusError_ITF):void;
		Type():number;
	}
	function NewQDBusErrorFromPointer(ptr:number):QDBusError;
	function QDBusError_ErrorString(error:number):string;
	const QDBusError__NoError: number;
	const QDBusError__Other: number;
	const QDBusError__Failed: number;
	const QDBusError__NoMemory: number;
	const QDBusError__ServiceUnknown: number;
	const QDBusError__NoReply: number;
	const QDBusError__BadAddress: number;
	const QDBusError__NotSupported: number;
	const QDBusError__LimitsExceeded: number;
	const QDBusError__AccessDenied: number;
	const QDBusError__NoServer: number;
	const QDBusError__Timeout: number;
	const QDBusError__NoNetwork: number;
	const QDBusError__AddressInUse: number;
	const QDBusError__Disconnected: number;
	const QDBusError__InvalidArgs: number;
	const QDBusError__UnknownMethod: number;
	const QDBusError__TimedOut: number;
	const QDBusError__InvalidSignature: number;
	const QDBusError__UnknownInterface: number;
	const QDBusError__UnknownObject: number;
	const QDBusError__UnknownProperty: number;
	const QDBusError__PropertyReadOnly: number;
	const QDBusError__InternalError: number;
	const QDBusError__InvalidService: number;
	const QDBusError__InvalidObjectPath: number;
	const QDBusError__InvalidInterface: number;
	const QDBusError__InvalidMember: number;
	interface QDBusInterface_ITF extends QDBusAbstractInterface_ITF {
		QDBusInterface_PTR():QDBusInterface;
	}

	class QDBusInterface extends QDBusAbstractInterface {
		___pointer: number;
		QDBusInterface_PTR():QDBusInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQDBusInterface(f:()=>void):void;
		DisconnectDestroyQDBusInterface():void;
		DestroyQDBusInterface():void;
		DestroyQDBusInterfaceDefault():void;
	}
	function NewQDBusInterfaceFromPointer(ptr:number):QDBusInterface;
	function NewQDBusInterface2(service:string,path:string,interfa:string,connection:QDBusConnection_ITF,parent:core.QObject_ITF):QDBusInterface;
	interface QDBusMessage_ITF {
		QDBusMessage_PTR():QDBusMessage;
	}

	class QDBusMessage {
		___pointer: number;
		QDBusMessage_PTR():QDBusMessage;
		Pointer():number;
		SetPointer(p:number):void;
		Arguments():core.QVariant[];
		AutoStartService():boolean;
		CreateError(name:string,msg:string):QDBusMessage;
		CreateError2(error:QDBusError_ITF):QDBusMessage;
		CreateError3(ty:number,msg:string):QDBusMessage;
		CreateErrorReply(name:string,msg:string):QDBusMessage;
		CreateErrorReply2(error:QDBusError_ITF):QDBusMessage;
		CreateErrorReply3(ty:number,msg:string):QDBusMessage;
		CreateMethodCall(service:string,path:string,interfa:string,method:string):QDBusMessage;
		CreateReply(arguments:core.QVariant[]):QDBusMessage;
		CreateReply2(argument:core.QVariant_ITF):QDBusMessage;
		CreateSignal(path:string,interfa:string,name:string):QDBusMessage;
		CreateTargetedSignal(service:string,path:string,interfa:string,name:string):QDBusMessage;
		ErrorMessage():string;
		ErrorName():string;
		Interface():string;
		IsDelayedReply():boolean;
		IsInteractiveAuthorizationAllowed():boolean;
		IsReplyRequired():boolean;
		Member():string;
		Path():string;
		Service():string;
		SetArguments(arguments:core.QVariant[]):void;
		SetAutoStartService(enable:boolean):void;
		SetDelayedReply(enable:boolean):void;
		SetInteractiveAuthorizationAllowed(enable:boolean):void;
		Signature():string;
		Swap(other:QDBusMessage_ITF):void;
		Type():number;
		DestroyQDBusMessage():void;
	}
	function NewQDBusMessageFromPointer(ptr:number):QDBusMessage;
	function NewQDBusMessage():QDBusMessage;
	function NewQDBusMessage2(other:QDBusMessage_ITF):QDBusMessage;
	function QDBusMessage_CreateError(name:string,msg:string):QDBusMessage;
	function QDBusMessage_CreateError2(error:QDBusError_ITF):QDBusMessage;
	function QDBusMessage_CreateError3(ty:number,msg:string):QDBusMessage;
	function QDBusMessage_CreateMethodCall(service:string,path:string,interfa:string,method:string):QDBusMessage;
	function QDBusMessage_CreateSignal(path:string,interfa:string,name:string):QDBusMessage;
	function QDBusMessage_CreateTargetedSignal(service:string,path:string,interfa:string,name:string):QDBusMessage;
	const QDBusMessage__InvalidMessage: number;
	const QDBusMessage__MethodCallMessage: number;
	const QDBusMessage__ReplyMessage: number;
	const QDBusMessage__ErrorMessage: number;
	const QDBusMessage__SignalMessage: number;
	interface QDBusObjectPath_ITF {
		QDBusObjectPath_PTR():QDBusObjectPath;
	}

	class QDBusObjectPath {
		___pointer: number;
		QDBusObjectPath_PTR():QDBusObjectPath;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDBusObjectPath():void;
		Path():string;
		SetPath(path:string):void;
		Swap(other:QDBusObjectPath_ITF):void;
	}
	function NewQDBusObjectPathFromPointer(ptr:number):QDBusObjectPath;
	function NewQDBusObjectPath():QDBusObjectPath;
	function NewQDBusObjectPath2(path:string):QDBusObjectPath;
	function NewQDBusObjectPath3(path:core.QLatin1String_ITF):QDBusObjectPath;
	function NewQDBusObjectPath4(path:string):QDBusObjectPath;
	interface QDBusPendingCall_ITF {
		QDBusPendingCall_PTR():QDBusPendingCall;
	}

	class QDBusPendingCall {
		___pointer: number;
		QDBusPendingCall_PTR():QDBusPendingCall;
		Pointer():number;
		SetPointer(p:number):void;
		FromCompletedCall(msg:QDBusMessage_ITF):QDBusPendingCall;
		FromError(error:QDBusError_ITF):QDBusPendingCall;
		Swap(other:QDBusPendingCall_ITF):void;
		DestroyQDBusPendingCall():void;
	}
	function NewQDBusPendingCallFromPointer(ptr:number):QDBusPendingCall;
	function NewQDBusPendingCall(other:QDBusPendingCall_ITF):QDBusPendingCall;
	function QDBusPendingCall_FromCompletedCall(msg:QDBusMessage_ITF):QDBusPendingCall;
	function QDBusPendingCall_FromError(error:QDBusError_ITF):QDBusPendingCall;
	function NewQDBusPendingCallWatcher(call:QDBusPendingCall_ITF,parent:core.QObject_ITF):QDBusPendingCallWatcher;
	interface QDBusPendingCallWatcher_ITF extends QDBusPendingCall_ITF {
		QDBusPendingCallWatcher_PTR():QDBusPendingCallWatcher;
		QObject_PTR():core.QObject;
	}

	class QDBusPendingCallWatcher extends QDBusPendingCall {
		QObject_PTR():core.QObject
		___pointer: number;
		QDBusPendingCallWatcher_PTR():QDBusPendingCallWatcher;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectFinished(f:(self:QDBusPendingCallWatcher)=>void):void;
		DisconnectFinished():void;
		Finished(self:QDBusPendingCallWatcher_ITF):void;
		IsFinished():boolean;
		WaitForFinished():void;
		ConnectDestroyQDBusPendingCallWatcher(f:()=>void):void;
		DisconnectDestroyQDBusPendingCallWatcher():void;
		DestroyQDBusPendingCallWatcher():void;
		DestroyQDBusPendingCallWatcherDefault():void;
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
	function NewQDBusPendingCallWatcherFromPointer(ptr:number):QDBusPendingCallWatcher;
	function NewQDBusPendingCallWatcher(call:QDBusPendingCall_ITF,parent:core.QObject_ITF):QDBusPendingCallWatcher;
	interface QDBusPendingReplyData_ITF extends QDBusPendingCall_ITF {
		QDBusPendingReplyData_PTR():QDBusPendingReplyData;
	}

	class QDBusPendingReplyData extends QDBusPendingCall {
		___pointer: number;
		QDBusPendingReplyData_PTR():QDBusPendingReplyData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDBusPendingReplyData():void;
	}
	function NewQDBusPendingReplyDataFromPointer(ptr:number):QDBusPendingReplyData;
	interface QDBusServer_ITF extends core.QObject_ITF {
		QDBusServer_PTR():QDBusServer;
	}

	class QDBusServer extends core.QObject {
		___pointer: number;
		QDBusServer_PTR():QDBusServer;
		Pointer():number;
		SetPointer(p:number):void;
		Address():string;
		IsAnonymousAuthenticationAllowed():boolean;
		IsConnected():boolean;
		ConnectNewConnection(f:(connection:QDBusConnection)=>void):void;
		DisconnectNewConnection():void;
		NewConnection(connection:QDBusConnection_ITF):void;
		SetAnonymousAuthenticationAllowed(value:boolean):void;
		ConnectDestroyQDBusServer(f:()=>void):void;
		DisconnectDestroyQDBusServer():void;
		DestroyQDBusServer():void;
		DestroyQDBusServerDefault():void;
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
	function NewQDBusServerFromPointer(ptr:number):QDBusServer;
	function NewQDBusServer(address:string,parent:core.QObject_ITF):QDBusServer;
	function NewQDBusServer2(parent:core.QObject_ITF):QDBusServer;
	interface QDBusServiceWatcher_ITF extends core.QObject_ITF {
		QDBusServiceWatcher_PTR():QDBusServiceWatcher;
	}

	class QDBusServiceWatcher extends core.QObject {
		___pointer: number;
		QDBusServiceWatcher_PTR():QDBusServiceWatcher;
		Pointer():number;
		SetPointer(p:number):void;
		AddWatchedService(newService:string):void;
		Connection():QDBusConnection;
		RemoveWatchedService(service:string):boolean;
		ConnectServiceOwnerChanged(f:(serviceName:string,oldOwner:string,newOwner:string)=>void):void;
		DisconnectServiceOwnerChanged():void;
		ServiceOwnerChanged(serviceName:string,oldOwner:string,newOwner:string):void;
		ConnectServiceRegistered(f:(serviceName:string)=>void):void;
		DisconnectServiceRegistered():void;
		ServiceRegistered(serviceName:string):void;
		ConnectServiceUnregistered(f:(serviceName:string)=>void):void;
		DisconnectServiceUnregistered():void;
		ServiceUnregistered(serviceName:string):void;
		SetConnection(connection:QDBusConnection_ITF):void;
		SetWatchMode(mode:number):void;
		SetWatchedServices(services:string[]):void;
		WatchMode():number;
		WatchedServices():string[];
		ConnectDestroyQDBusServiceWatcher(f:()=>void):void;
		DisconnectDestroyQDBusServiceWatcher():void;
		DestroyQDBusServiceWatcher():void;
		DestroyQDBusServiceWatcherDefault():void;
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
	function NewQDBusServiceWatcherFromPointer(ptr:number):QDBusServiceWatcher;
	function NewQDBusServiceWatcher(parent:core.QObject_ITF):QDBusServiceWatcher;
	function NewQDBusServiceWatcher2(service:string,connection:QDBusConnection_ITF,watchMode:number,parent:core.QObject_ITF):QDBusServiceWatcher;
	const QDBusServiceWatcher__WatchForRegistration: number;
	const QDBusServiceWatcher__WatchForUnregistration: number;
	const QDBusServiceWatcher__WatchForOwnerChange: number;
	interface QDBusSignature_ITF {
		QDBusSignature_PTR():QDBusSignature;
	}

	class QDBusSignature {
		___pointer: number;
		QDBusSignature_PTR():QDBusSignature;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDBusSignature():void;
		SetSignature(signature:string):void;
		Signature():string;
		Swap(other:QDBusSignature_ITF):void;
	}
	function NewQDBusSignatureFromPointer(ptr:number):QDBusSignature;
	function NewQDBusSignature():QDBusSignature;
	function NewQDBusSignature2(signature:string):QDBusSignature;
	function NewQDBusSignature3(signature:core.QLatin1String_ITF):QDBusSignature;
	function NewQDBusSignature4(signature:string):QDBusSignature;
	interface QDBusUnixFileDescriptor_ITF {
		QDBusUnixFileDescriptor_PTR():QDBusUnixFileDescriptor;
	}

	class QDBusUnixFileDescriptor {
		___pointer: number;
		QDBusUnixFileDescriptor_PTR():QDBusUnixFileDescriptor;
		Pointer():number;
		SetPointer(p:number):void;
		FileDescriptor():number;
		IsSupported():boolean;
		IsValid():boolean;
		SetFileDescriptor(fileDescriptor:number):void;
		Swap(other:QDBusUnixFileDescriptor_ITF):void;
		DestroyQDBusUnixFileDescriptor():void;
	}
	function NewQDBusUnixFileDescriptorFromPointer(ptr:number):QDBusUnixFileDescriptor;
	function NewQDBusUnixFileDescriptor():QDBusUnixFileDescriptor;
	function NewQDBusUnixFileDescriptor2(fileDescriptor:number):QDBusUnixFileDescriptor;
	function NewQDBusUnixFileDescriptor3(other:QDBusUnixFileDescriptor_ITF):QDBusUnixFileDescriptor;
	function QDBusUnixFileDescriptor_IsSupported():boolean;
	interface QDBusVariant_ITF {
		QDBusVariant_PTR():QDBusVariant;
	}

	class QDBusVariant {
		___pointer: number;
		QDBusVariant_PTR():QDBusVariant;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDBusVariant():void;
		SetVariant(variant:core.QVariant_ITF):void;
		Swap(other:QDBusVariant_ITF):void;
		Variant():core.QVariant;
	}
	function NewQDBusVariantFromPointer(ptr:number):QDBusVariant;
	function NewQDBusVariant():QDBusVariant;
	function NewQDBusVariant2(variant:core.QVariant_ITF):QDBusVariant;
	interface QDBusVirtualObject_ITF extends core.QObject_ITF {
		QDBusVirtualObject_PTR():QDBusVirtualObject;
	}

	class QDBusVirtualObject extends core.QObject {
		___pointer: number;
		QDBusVirtualObject_PTR():QDBusVirtualObject;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectHandleMessage(f:(message:QDBusMessage,connection:QDBusConnection)=>boolean):void;
		DisconnectHandleMessage():void;
		HandleMessage(message:QDBusMessage_ITF,connection:QDBusConnection_ITF):boolean;
		ConnectIntrospect(f:(path:string)=>string):void;
		DisconnectIntrospect():void;
		Introspect(path:string):string;
		ConnectDestroyQDBusVirtualObject(f:()=>void):void;
		DisconnectDestroyQDBusVirtualObject():void;
		DestroyQDBusVirtualObject():void;
		DestroyQDBusVirtualObjectDefault():void;
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
	function NewQDBusVirtualObjectFromPointer(ptr:number):QDBusVirtualObject;
	function NewQDBusVirtualObject(parent:core.QObject_ITF):QDBusVirtualObject;
	interface QMetaTypeId2_ITF {
		QMetaTypeId2_PTR():QMetaTypeId2;
	}

	class QMetaTypeId2 {
		___pointer: number;
		QMetaTypeId2_PTR():QMetaTypeId2;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMetaTypeId2():void;
	}
	function NewQMetaTypeId2FromPointer(ptr:number):QMetaTypeId2;
}