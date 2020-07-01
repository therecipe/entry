/// <reference path="core.d.ts" />
declare namespace remoteobjects {
	interface DataEntries_ITF {
		DataEntries_PTR():DataEntries;
	}

	class DataEntries {
		___pointer: number;
		DataEntries_PTR():DataEntries;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyDataEntries():void;
	}
	interface IndexValuePair_ITF {
		IndexValuePair_PTR():IndexValuePair;
	}

	class IndexValuePair {
		___pointer: number;
		IndexValuePair_PTR():IndexValuePair;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyIndexValuePair():void;
	}
	interface ModelIndex_ITF {
		ModelIndex_PTR():ModelIndex;
	}

	class ModelIndex {
		___pointer: number;
		ModelIndex_PTR():ModelIndex;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyModelIndex():void;
	}
	interface QAbstractItemModelReplica_ITF extends core.QAbstractItemModel_ITF {
		QAbstractItemModelReplica_PTR():QAbstractItemModelReplica;
	}

	class QAbstractItemModelReplica extends core.QAbstractItemModel {
		___pointer: number;
		QAbstractItemModelReplica_PTR():QAbstractItemModelReplica;
		Pointer():number;
		SetPointer(p:number):void;
		BuddyDefault(index:core.QModelIndex_ITF):core.QModelIndex;
		CanDropMimeDataDefault(data:core.QMimeData_ITF,action:number,row:number,column:number,parent:core.QModelIndex_ITF):boolean;
		CanFetchMoreDefault(parent:core.QModelIndex_ITF):boolean;
		ColumnCount(parent:core.QModelIndex_ITF):number;
		ColumnCountDefault(parent:core.QModelIndex_ITF):number;
		Data(index:core.QModelIndex_ITF,role:number):core.QVariant;
		DataDefault(index:core.QModelIndex_ITF,role:number):core.QVariant;
		DropMimeDataDefault(data:core.QMimeData_ITF,action:number,row:number,column:number,parent:core.QModelIndex_ITF):boolean;
		FetchMoreDefault(parent:core.QModelIndex_ITF):void;
		FlagsDefault(index:core.QModelIndex_ITF):number;
		HasChildrenDefault(parent:core.QModelIndex_ITF):boolean;
		HeaderDataDefault(section:number,orientation:number,role:number):core.QVariant;
		Index(row:number,column:number,parent:core.QModelIndex_ITF):core.QModelIndex;
		IndexDefault(row:number,column:number,parent:core.QModelIndex_ITF):core.QModelIndex;
		InsertColumnsDefault(column:number,count:number,parent:core.QModelIndex_ITF):boolean;
		InsertRowsDefault(row:number,count:number,parent:core.QModelIndex_ITF):boolean;
		ItemDataDefault(index:core.QModelIndex_ITF):Map<number,core.QVariant>;
		MatchDefault(start:core.QModelIndex_ITF,role:number,value:core.QVariant_ITF,hits:number,flags:number):core.QModelIndex[];
		MimeDataDefault(indexes:core.QModelIndex[]):core.QMimeData;
		MimeTypesDefault():string[];
		MoveColumnsDefault(sourceParent:core.QModelIndex_ITF,sourceColumn:number,count:number,destinationParent:core.QModelIndex_ITF,destinationChild:number):boolean;
		MoveRowsDefault(sourceParent:core.QModelIndex_ITF,sourceRow:number,count:number,destinationParent:core.QModelIndex_ITF,destinationChild:number):boolean;
		Parent(index:core.QModelIndex_ITF):core.QModelIndex;
		ParentDefault(index:core.QModelIndex_ITF):core.QModelIndex;
		RemoveColumnsDefault(column:number,count:number,parent:core.QModelIndex_ITF):boolean;
		RemoveRowsDefault(row:number,count:number,parent:core.QModelIndex_ITF):boolean;
		ResetInternalDataDefault():void;
		RevertDefault():void;
		RoleNamesDefault():Map<number,core.QByteArray>;
		RowCount(parent:core.QModelIndex_ITF):number;
		RowCountDefault(parent:core.QModelIndex_ITF):number;
		SetDataDefault(index:core.QModelIndex_ITF,value:core.QVariant_ITF,role:number):boolean;
		SetHeaderDataDefault(section:number,orientation:number,value:core.QVariant_ITF,role:number):boolean;
		SetItemDataDefault(index:core.QModelIndex_ITF,roles:Map<number,core.QVariant>):boolean;
		SiblingDefault(row:number,column:number,index:core.QModelIndex_ITF):core.QModelIndex;
		SortDefault(column:number,order:number):void;
		SpanDefault(index:core.QModelIndex_ITF):core.QSize;
		SubmitDefault():boolean;
		SupportedDragActionsDefault():number;
		SupportedDropActionsDefault():number;
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
	function NewQAbstractItemModelReplicaFromPointer(ptr:number):QAbstractItemModelReplica;
	interface QIOQnxSource_ITF extends core.QIODevice_ITF {
		QIOQnxSource_PTR():QIOQnxSource;
	}

	class QIOQnxSource extends core.QIODevice {
		___pointer: number;
		QIOQnxSource_PTR():QIOQnxSource;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QMetaTypeId_ITF {
		QMetaTypeId_PTR():QMetaTypeId;
	}

	class QMetaTypeId {
		___pointer: number;
		QMetaTypeId_PTR():QMetaTypeId;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMetaTypeId():void;
	}
	function NewQMetaTypeIdFromPointer(ptr:number):QMetaTypeId;
	interface QQnxNativeIo_ITF extends core.QIODevice_ITF {
		QQnxNativeIo_PTR():QQnxNativeIo;
	}

	class QQnxNativeIo extends core.QIODevice {
		___pointer: number;
		QQnxNativeIo_PTR():QQnxNativeIo;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QQnxNativeServer_ITF extends core.QObject_ITF {
		QQnxNativeServer_PTR():QQnxNativeServer;
	}

	class QQnxNativeServer extends core.QObject {
		___pointer: number;
		QQnxNativeServer_PTR():QQnxNativeServer;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QRemoteObjectAbstractPersistedStore_ITF extends core.QObject_ITF {
		QRemoteObjectAbstractPersistedStore_PTR():QRemoteObjectAbstractPersistedStore;
	}

	class QRemoteObjectAbstractPersistedStore extends core.QObject {
		___pointer: number;
		QRemoteObjectAbstractPersistedStore_PTR():QRemoteObjectAbstractPersistedStore;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectRestoreProperties(f:(repName:string,repSig:core.QByteArray)=>core.QVariant[]):void;
		DisconnectRestoreProperties():void;
		RestoreProperties(repName:string,repSig:core.QByteArray_ITF):core.QVariant[];
		ConnectSaveProperties(f:(repName:string,repSig:core.QByteArray,values:core.QVariant[])=>void):void;
		DisconnectSaveProperties():void;
		SaveProperties(repName:string,repSig:core.QByteArray_ITF,values:core.QVariant[]):void;
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
	function NewQRemoteObjectAbstractPersistedStoreFromPointer(ptr:number):QRemoteObjectAbstractPersistedStore;
	function NewQRemoteObjectAbstractPersistedStore(parent:core.QObject_ITF):QRemoteObjectAbstractPersistedStore;
	interface QRemoteObjectDynamicReplica_ITF extends QRemoteObjectReplica_ITF {
		QRemoteObjectDynamicReplica_PTR():QRemoteObjectDynamicReplica;
	}

	class QRemoteObjectDynamicReplica extends QRemoteObjectReplica {
		___pointer: number;
		QRemoteObjectDynamicReplica_PTR():QRemoteObjectDynamicReplica;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQRemoteObjectDynamicReplica(f:()=>void):void;
		DisconnectDestroyQRemoteObjectDynamicReplica():void;
		DestroyQRemoteObjectDynamicReplica():void;
		DestroyQRemoteObjectDynamicReplicaDefault():void;
	}
	function NewQRemoteObjectDynamicReplicaFromPointer(ptr:number):QRemoteObjectDynamicReplica;
	interface QRemoteObjectHost_ITF extends QRemoteObjectHostBase_ITF {
		QRemoteObjectHost_PTR():QRemoteObjectHost;
	}

	class QRemoteObjectHost extends QRemoteObjectHostBase {
		___pointer: number;
		QRemoteObjectHost_PTR():QRemoteObjectHost;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectHostUrl(f:()=>core.QUrl):void;
		DisconnectHostUrl():void;
		HostUrl():core.QUrl;
		HostUrlDefault():core.QUrl;
		ConnectSetHostUrl(f:(hostAddress:core.QUrl,allowedSchemas:number)=>boolean):void;
		DisconnectSetHostUrl():void;
		SetHostUrl(hostAddress:core.QUrl_ITF,allowedSchemas:number):boolean;
		SetHostUrlDefault(hostAddress:core.QUrl_ITF,allowedSchemas:number):boolean;
	}
	function NewQRemoteObjectHostFromPointer(ptr:number):QRemoteObjectHost;
	function NewQRemoteObjectHost(parent:core.QObject_ITF):QRemoteObjectHost;
	function NewQRemoteObjectHost2(address:core.QUrl_ITF,registryAddress:core.QUrl_ITF,allowedSchemas:number,parent:core.QObject_ITF):QRemoteObjectHost;
	function NewQRemoteObjectHost3(address:core.QUrl_ITF,parent:core.QObject_ITF):QRemoteObjectHost;
	interface QRemoteObjectHostBase_ITF extends QRemoteObjectNode_ITF {
		QRemoteObjectHostBase_PTR():QRemoteObjectHostBase;
	}

	class QRemoteObjectHostBase extends QRemoteObjectNode {
		___pointer: number;
		QRemoteObjectHostBase_PTR():QRemoteObjectHostBase;
		Pointer():number;
		SetPointer(p:number):void;
		AddHostSideConnection(ioDevice:core.QIODevice_ITF):void;
		DisableRemoting(remoteObject:core.QObject_ITF):boolean;
		EnableRemoting2(object:core.QObject_ITF,name:string):boolean;
		EnableRemoting3(model:core.QAbstractItemModel_ITF,name:string,roles:number[],selectionModel:core.QItemSelectionModel_ITF):boolean;
	}
	function NewQRemoteObjectHostBaseFromPointer(ptr:number):QRemoteObjectHostBase;
	const QRemoteObjectHostBase__BuiltInSchemasOnly: number;
	const QRemoteObjectHostBase__AllowExternalRegistration: number;
	interface QRemoteObjectNode_ITF extends core.QObject_ITF {
		QRemoteObjectNode_PTR():QRemoteObjectNode;
	}

	class QRemoteObjectNode extends core.QObject {
		___pointer: number;
		QRemoteObjectNode_PTR():QRemoteObjectNode;
		Pointer():number;
		SetPointer(p:number):void;
		AcquireDynamic(name:string):QRemoteObjectDynamicReplica;
		AddClientSideConnection(ioDevice:core.QIODevice_ITF):void;
		ConnectToNode(address:core.QUrl_ITF):boolean;
		HeartbeatInterval():number;
		ConnectHeartbeatIntervalChanged(f:(heartbeatInterval:number)=>void):void;
		DisconnectHeartbeatIntervalChanged():void;
		HeartbeatIntervalChanged(heartbeatInterval:number):void;
		Instances2(typeName:string):string[];
		LastError():number;
		PersistedStore():QRemoteObjectAbstractPersistedStore;
		Registry():QRemoteObjectRegistry;
		RegistryUrl():core.QUrl;
		SetHeartbeatInterval(interval:number):void;
		ConnectSetName(f:(name:string)=>void):void;
		DisconnectSetName():void;
		SetName(name:string):void;
		SetNameDefault(name:string):void;
		SetPersistedStore(persistedStore:QRemoteObjectAbstractPersistedStore_ITF):void;
		ConnectSetRegistryUrl(f:(registryAddress:core.QUrl)=>boolean):void;
		DisconnectSetRegistryUrl():void;
		SetRegistryUrl(registryAddress:core.QUrl_ITF):boolean;
		SetRegistryUrlDefault(registryAddress:core.QUrl_ITF):boolean;
		TimerEventDefault(vqt:core.QTimerEvent_ITF):void;
		WaitForRegistry(timeout:number):boolean;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
	}
	function NewQRemoteObjectNodeFromPointer(ptr:number):QRemoteObjectNode;
	function NewQRemoteObjectNode(parent:core.QObject_ITF):QRemoteObjectNode;
	function NewQRemoteObjectNode2(registryAddress:core.QUrl_ITF,parent:core.QObject_ITF):QRemoteObjectNode;
	const QRemoteObjectNode__NoError: number;
	const QRemoteObjectNode__RegistryNotAcquired: number;
	const QRemoteObjectNode__RegistryAlreadyHosted: number;
	const QRemoteObjectNode__NodeIsNoServer: number;
	const QRemoteObjectNode__ServerAlreadyCreated: number;
	const QRemoteObjectNode__UnintendedRegistryHosting: number;
	const QRemoteObjectNode__OperationNotValidOnClientNode: number;
	const QRemoteObjectNode__SourceNotRegistered: number;
	const QRemoteObjectNode__MissingObjectName: number;
	const QRemoteObjectNode__HostUrlInvalid: number;
	const QRemoteObjectNode__ProtocolMismatch: number;
	const QRemoteObjectNode__ListenFailed: number;
	interface QRemoteObjectPendingCall_ITF {
		QRemoteObjectPendingCall_PTR():QRemoteObjectPendingCall;
	}

	class QRemoteObjectPendingCall {
		___pointer: number;
		QRemoteObjectPendingCall_PTR():QRemoteObjectPendingCall;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRemoteObjectPendingCall():void;
	}
	function NewQRemoteObjectPendingCallFromPointer(ptr:number):QRemoteObjectPendingCall;
	interface QRemoteObjectPendingCallWatcher_ITF extends QRemoteObjectPendingCall_ITF {
		QRemoteObjectPendingCallWatcher_PTR():QRemoteObjectPendingCallWatcher;
		QObject_PTR():core.QObject;
	}

	class QRemoteObjectPendingCallWatcher extends QRemoteObjectPendingCall {
		QObject_PTR():core.QObject
		___pointer: number;
		QRemoteObjectPendingCallWatcher_PTR():QRemoteObjectPendingCallWatcher;
		Pointer():number;
		SetPointer(p:number):void;
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
	function NewQRemoteObjectPendingCallWatcherFromPointer(ptr:number):QRemoteObjectPendingCallWatcher;
	interface QRemoteObjectPendingReply_ITF extends QRemoteObjectPendingCall_ITF {
		QRemoteObjectPendingReply_PTR():QRemoteObjectPendingReply;
	}

	class QRemoteObjectPendingReply extends QRemoteObjectPendingCall {
		___pointer: number;
		QRemoteObjectPendingReply_PTR():QRemoteObjectPendingReply;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRemoteObjectPendingReply():void;
	}
	function NewQRemoteObjectPendingReplyFromPointer(ptr:number):QRemoteObjectPendingReply;
	interface QRemoteObjectRegistry_ITF extends QRemoteObjectReplica_ITF {
		QRemoteObjectRegistry_PTR():QRemoteObjectRegistry;
	}

	class QRemoteObjectRegistry extends QRemoteObjectReplica {
		___pointer: number;
		QRemoteObjectRegistry_PTR():QRemoteObjectRegistry;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQRemoteObjectRegistry(f:()=>void):void;
		DisconnectDestroyQRemoteObjectRegistry():void;
		DestroyQRemoteObjectRegistry():void;
		DestroyQRemoteObjectRegistryDefault():void;
	}
	function NewQRemoteObjectRegistryFromPointer(ptr:number):QRemoteObjectRegistry;
	interface QRemoteObjectRegistryHost_ITF extends QRemoteObjectHostBase_ITF {
		QRemoteObjectRegistryHost_PTR():QRemoteObjectRegistryHost;
	}

	class QRemoteObjectRegistryHost extends QRemoteObjectHostBase {
		___pointer: number;
		QRemoteObjectRegistryHost_PTR():QRemoteObjectRegistryHost;
		Pointer():number;
		SetPointer(p:number):void;
	}
	function NewQRemoteObjectRegistryHostFromPointer(ptr:number):QRemoteObjectRegistryHost;
	function NewQRemoteObjectRegistryHost(registryAddress:core.QUrl_ITF,parent:core.QObject_ITF):QRemoteObjectRegistryHost;
	interface QRemoteObjectReplica_ITF extends core.QObject_ITF {
		QRemoteObjectReplica_PTR():QRemoteObjectReplica;
	}

	class QRemoteObjectReplica extends core.QObject {
		___pointer: number;
		QRemoteObjectReplica_PTR():QRemoteObjectReplica;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectInitialized(f:()=>void):void;
		DisconnectInitialized():void;
		Initialized():void;
		IsInitialized():boolean;
		IsReplicaValid():boolean;
		Node():QRemoteObjectNode;
		ConnectSetNode(f:(node:QRemoteObjectNode)=>void):void;
		DisconnectSetNode():void;
		SetNode(node:QRemoteObjectNode_ITF):void;
		SetNodeDefault(node:QRemoteObjectNode_ITF):void;
		State():number;
		ConnectStateChanged(f:(state:number,oldState:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number,oldState:number):void;
		WaitForSource(timeout:number):boolean;
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
	function NewQRemoteObjectReplicaFromPointer(ptr:number):QRemoteObjectReplica;
	const QRemoteObjectReplica__Uninitialized: number;
	const QRemoteObjectReplica__Default: number;
	const QRemoteObjectReplica__Valid: number;
	const QRemoteObjectReplica__Suspect: number;
	const QRemoteObjectReplica__SignatureMismatch: number;
	interface QRemoteObjectSettingsStore_ITF extends QRemoteObjectAbstractPersistedStore_ITF {
		QRemoteObjectSettingsStore_PTR():QRemoteObjectSettingsStore;
	}

	class QRemoteObjectSettingsStore extends QRemoteObjectAbstractPersistedStore {
		___pointer: number;
		QRemoteObjectSettingsStore_PTR():QRemoteObjectSettingsStore;
		Pointer():number;
		SetPointer(p:number):void;
		RestoreProperties(repName:string,repSig:core.QByteArray_ITF):core.QVariant[];
		RestorePropertiesDefault(repName:string,repSig:core.QByteArray_ITF):core.QVariant[];
		SaveProperties(repName:string,repSig:core.QByteArray_ITF,values:core.QVariant[]):void;
		SavePropertiesDefault(repName:string,repSig:core.QByteArray_ITF,values:core.QVariant[]):void;
	}
	function NewQRemoteObjectSettingsStoreFromPointer(ptr:number):QRemoteObjectSettingsStore;
	interface QRemoteObjectSourceLocationInfo_ITF {
		QRemoteObjectSourceLocationInfo_PTR():QRemoteObjectSourceLocationInfo;
	}

	class QRemoteObjectSourceLocationInfo {
		___pointer: number;
		QRemoteObjectSourceLocationInfo_PTR():QRemoteObjectSourceLocationInfo;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRemoteObjectSourceLocationInfo():void;
	}
	function NewQRemoteObjectSourceLocationInfoFromPointer(ptr:number):QRemoteObjectSourceLocationInfo;
	interface QTypeInfo_ITF {
		QTypeInfo_PTR():QTypeInfo;
	}

	class QTypeInfo {
		___pointer: number;
		QTypeInfo_PTR():QTypeInfo;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTypeInfo():void;
	}
	function NewQTypeInfoFromPointer(ptr:number):QTypeInfo;
	interface QtROClientFactory_ITF {
		QtROClientFactory_PTR():QtROClientFactory;
	}

	class QtROClientFactory {
		___pointer: number;
		QtROClientFactory_PTR():QtROClientFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQtROClientFactory():void;
	}
	interface QtROServerFactory_ITF {
		QtROServerFactory_PTR():QtROServerFactory;
	}

	class QtROServerFactory {
		___pointer: number;
		QtROServerFactory_PTR():QtROServerFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQtROServerFactory():void;
	}
	interface SourceApiMap_ITF {
		SourceApiMap_PTR():SourceApiMap;
	}

	class SourceApiMap {
		___pointer: number;
		SourceApiMap_PTR():SourceApiMap;
		Pointer():number;
		SetPointer(p:number):void;
		DestroySourceApiMap():void;
	}
}