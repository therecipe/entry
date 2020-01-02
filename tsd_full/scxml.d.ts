/// <reference path="core.d.ts" />
declare namespace scxml {
	interface QScxmlCompiler_ITF {
		QScxmlCompiler_PTR():QScxmlCompiler;
	}

	class QScxmlCompiler {
		___pointer: number;
		QScxmlCompiler_PTR():QScxmlCompiler;
		Pointer():number;
		SetPointer(p:number):void;
		Compile():QScxmlStateMachine;
		Errors():QScxmlError[];
		FileName():string;
		SetFileName(fileName:string):void;
		DestroyQScxmlCompiler():void;
	}
	function NewQScxmlCompilerFromPointer(ptr:number):QScxmlCompiler;
	function NewQScxmlCompiler(reader:core.QXmlStreamReader_ITF):QScxmlCompiler;
	interface QScxmlCppDataModel_ITF extends QScxmlDataModel_ITF {
		QScxmlCppDataModel_PTR():QScxmlCppDataModel;
	}

	class QScxmlCppDataModel extends QScxmlDataModel {
		___pointer: number;
		QScxmlCppDataModel_PTR():QScxmlCppDataModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectHasScxmlProperty(f:(name:string)=>boolean):void;
		DisconnectHasScxmlProperty():void;
		HasScxmlProperty(name:string):boolean;
		HasScxmlPropertyDefault(name:string):boolean;
		InState(stateName:string):boolean;
		ScxmlEvent():QScxmlEvent;
		ConnectScxmlProperty(f:(name:string)=>core.QVariant):void;
		DisconnectScxmlProperty():void;
		ScxmlProperty(name:string):core.QVariant;
		ScxmlPropertyDefault(name:string):core.QVariant;
		SetScxmlEvent(event:QScxmlEvent_ITF):void;
		ConnectSetScxmlProperty(f:(name:string,value:core.QVariant,context:string)=>boolean):void;
		DisconnectSetScxmlProperty():void;
		SetScxmlProperty(name:string,value:core.QVariant_ITF,context:string):boolean;
		SetScxmlPropertyDefault(name:string,value:core.QVariant_ITF,context:string):boolean;
		ConnectSetup(f:(initialDataValues:Map<string,core.QVariant>)=>boolean):void;
		DisconnectSetup():void;
		Setup(initialDataValues:Map<string,core.QVariant>):boolean;
		SetupDefault(initialDataValues:Map<string,core.QVariant>):boolean;
	}
	function NewQScxmlCppDataModelFromPointer(ptr:number):QScxmlCppDataModel;
	interface QScxmlDataModel_ITF extends core.QObject_ITF {
		QScxmlDataModel_PTR():QScxmlDataModel;
	}

	class QScxmlDataModel extends core.QObject {
		___pointer: number;
		QScxmlDataModel_PTR():QScxmlDataModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectHasScxmlProperty(f:(name:string)=>boolean):void;
		DisconnectHasScxmlProperty():void;
		HasScxmlProperty(name:string):boolean;
		ConnectScxmlProperty(f:(name:string)=>core.QVariant):void;
		DisconnectScxmlProperty():void;
		ScxmlProperty(name:string):core.QVariant;
		ConnectSetScxmlProperty(f:(name:string,value:core.QVariant,context:string)=>boolean):void;
		DisconnectSetScxmlProperty():void;
		SetScxmlProperty(name:string,value:core.QVariant_ITF,context:string):boolean;
		SetStateMachine(stateMachine:QScxmlStateMachine_ITF):void;
		ConnectSetup(f:(initialDataValues:Map<string,core.QVariant>)=>boolean):void;
		DisconnectSetup():void;
		Setup(initialDataValues:Map<string,core.QVariant>):boolean;
		StateMachine():QScxmlStateMachine;
		ConnectStateMachineChanged(f:(stateMachine:QScxmlStateMachine)=>void):void;
		DisconnectStateMachineChanged():void;
		StateMachineChanged(stateMachine:QScxmlStateMachine_ITF):void;
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
	function NewQScxmlDataModelFromPointer(ptr:number):QScxmlDataModel;
	interface QScxmlDynamicScxmlServiceFactory_ITF extends QScxmlInvokableServiceFactory_ITF {
		QScxmlDynamicScxmlServiceFactory_PTR():QScxmlDynamicScxmlServiceFactory;
	}

	class QScxmlDynamicScxmlServiceFactory extends QScxmlInvokableServiceFactory {
		___pointer: number;
		QScxmlDynamicScxmlServiceFactory_PTR():QScxmlDynamicScxmlServiceFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectInvoke(f:(parentStateMachine:QScxmlStateMachine)=>QScxmlInvokableService):void;
		DisconnectInvoke():void;
		Invoke(parentStateMachine:QScxmlStateMachine_ITF):QScxmlInvokableService;
		InvokeDefault(parentStateMachine:QScxmlStateMachine_ITF):QScxmlInvokableService;
	}
	function NewQScxmlDynamicScxmlServiceFactoryFromPointer(ptr:number):QScxmlDynamicScxmlServiceFactory;
	interface QScxmlEcmaScriptDataModel_ITF extends QScxmlDataModel_ITF {
		QScxmlEcmaScriptDataModel_PTR():QScxmlEcmaScriptDataModel;
	}

	class QScxmlEcmaScriptDataModel extends QScxmlDataModel {
		___pointer: number;
		QScxmlEcmaScriptDataModel_PTR():QScxmlEcmaScriptDataModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectHasScxmlProperty(f:(name:string)=>boolean):void;
		DisconnectHasScxmlProperty():void;
		HasScxmlProperty(name:string):boolean;
		HasScxmlPropertyDefault(name:string):boolean;
		ConnectScxmlProperty(f:(name:string)=>core.QVariant):void;
		DisconnectScxmlProperty():void;
		ScxmlProperty(name:string):core.QVariant;
		ScxmlPropertyDefault(name:string):core.QVariant;
		ConnectSetScxmlEvent(f:(event:QScxmlEvent)=>void):void;
		DisconnectSetScxmlEvent():void;
		SetScxmlEvent(event:QScxmlEvent_ITF):void;
		SetScxmlEventDefault(event:QScxmlEvent_ITF):void;
		ConnectSetScxmlProperty(f:(name:string,value:core.QVariant,context:string)=>boolean):void;
		DisconnectSetScxmlProperty():void;
		SetScxmlProperty(name:string,value:core.QVariant_ITF,context:string):boolean;
		SetScxmlPropertyDefault(name:string,value:core.QVariant_ITF,context:string):boolean;
		ConnectSetup(f:(initialDataValues:Map<string,core.QVariant>)=>boolean):void;
		DisconnectSetup():void;
		Setup(initialDataValues:Map<string,core.QVariant>):boolean;
		SetupDefault(initialDataValues:Map<string,core.QVariant>):boolean;
	}
	function NewQScxmlEcmaScriptDataModelFromPointer(ptr:number):QScxmlEcmaScriptDataModel;
	function NewQScxmlEcmaScriptDataModel(parent:core.QObject_ITF):QScxmlEcmaScriptDataModel;
	interface QScxmlError_ITF {
		QScxmlError_PTR():QScxmlError;
	}

	class QScxmlError {
		___pointer: number;
		QScxmlError_PTR():QScxmlError;
		Pointer():number;
		SetPointer(p:number):void;
		Column():number;
		Description():string;
		FileName():string;
		IsValid():boolean;
		Line():number;
		ToString():string;
		DestroyQScxmlError():void;
	}
	function NewQScxmlErrorFromPointer(ptr:number):QScxmlError;
	function NewQScxmlError():QScxmlError;
	function NewQScxmlError2(fileName:string,line:number,column:number,description:string):QScxmlError;
	function NewQScxmlError3(other:QScxmlError_ITF):QScxmlError;
	interface QScxmlEvent_ITF {
		QScxmlEvent_PTR():QScxmlEvent;
	}

	class QScxmlEvent {
		___pointer: number;
		QScxmlEvent_PTR():QScxmlEvent;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():void;
		Data():core.QVariant;
		Delay():number;
		ErrorMessage():string;
		EventType():number;
		InvokeId():string;
		IsErrorEvent():boolean;
		Name():string;
		Origin():string;
		OriginType():string;
		ScxmlType():string;
		SendId():string;
		SetData(data:core.QVariant_ITF):void;
		SetDelay(delayInMiliSecs:number):void;
		SetErrorMessage(message:string):void;
		SetEventType(ty:number):void;
		SetInvokeId(invokeid:string):void;
		SetName(name:string):void;
		SetOrigin(origi:string):void;
		SetOriginType(origintype:string):void;
		SetSendId(sendid:string):void;
		DestroyQScxmlEvent():void;
	}
	function NewQScxmlEventFromPointer(ptr:number):QScxmlEvent;
	function NewQScxmlEvent():QScxmlEvent;
	function NewQScxmlEvent2(other:QScxmlEvent_ITF):QScxmlEvent;
	const QScxmlEvent__PlatformEvent: number;
	const QScxmlEvent__InternalEvent: number;
	const QScxmlEvent__ExternalEvent: number;
	interface QScxmlInvokableService_ITF extends core.QObject_ITF {
		QScxmlInvokableService_PTR():QScxmlInvokableService;
	}

	class QScxmlInvokableService extends core.QObject {
		___pointer: number;
		QScxmlInvokableService_PTR():QScxmlInvokableService;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectId(f:()=>string):void;
		DisconnectId():void;
		Id():string;
		ConnectName(f:()=>string):void;
		DisconnectName():void;
		Name():string;
		ParentStateMachine():QScxmlStateMachine;
		ConnectPostEvent(f:(event:QScxmlEvent)=>void):void;
		DisconnectPostEvent():void;
		PostEvent(event:QScxmlEvent_ITF):void;
		ConnectStart(f:()=>boolean):void;
		DisconnectStart():void;
		Start():boolean;
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
	function NewQScxmlInvokableServiceFromPointer(ptr:number):QScxmlInvokableService;
	interface QScxmlInvokableServiceFactory_ITF extends core.QObject_ITF {
		QScxmlInvokableServiceFactory_PTR():QScxmlInvokableServiceFactory;
	}

	class QScxmlInvokableServiceFactory extends core.QObject {
		___pointer: number;
		QScxmlInvokableServiceFactory_PTR():QScxmlInvokableServiceFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectInvoke(f:(parentStateMachine:QScxmlStateMachine)=>QScxmlInvokableService):void;
		DisconnectInvoke():void;
		Invoke(parentStateMachine:QScxmlStateMachine_ITF):QScxmlInvokableService;
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
	function NewQScxmlInvokableServiceFactoryFromPointer(ptr:number):QScxmlInvokableServiceFactory;
	interface QScxmlNullDataModel_ITF extends QScxmlDataModel_ITF {
		QScxmlNullDataModel_PTR():QScxmlNullDataModel;
	}

	class QScxmlNullDataModel extends QScxmlDataModel {
		___pointer: number;
		QScxmlNullDataModel_PTR():QScxmlNullDataModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectHasScxmlProperty(f:(name:string)=>boolean):void;
		DisconnectHasScxmlProperty():void;
		HasScxmlProperty(name:string):boolean;
		HasScxmlPropertyDefault(name:string):boolean;
		ConnectScxmlProperty(f:(name:string)=>core.QVariant):void;
		DisconnectScxmlProperty():void;
		ScxmlProperty(name:string):core.QVariant;
		ScxmlPropertyDefault(name:string):core.QVariant;
		ConnectSetScxmlEvent(f:(event:QScxmlEvent)=>void):void;
		DisconnectSetScxmlEvent():void;
		SetScxmlEvent(event:QScxmlEvent_ITF):void;
		SetScxmlEventDefault(event:QScxmlEvent_ITF):void;
		ConnectSetScxmlProperty(f:(name:string,value:core.QVariant,context:string)=>boolean):void;
		DisconnectSetScxmlProperty():void;
		SetScxmlProperty(name:string,value:core.QVariant_ITF,context:string):boolean;
		SetScxmlPropertyDefault(name:string,value:core.QVariant_ITF,context:string):boolean;
		ConnectSetup(f:(initialDataValues:Map<string,core.QVariant>)=>boolean):void;
		DisconnectSetup():void;
		Setup(initialDataValues:Map<string,core.QVariant>):boolean;
		SetupDefault(initialDataValues:Map<string,core.QVariant>):boolean;
		ConnectDestroyQScxmlNullDataModel(f:()=>void):void;
		DisconnectDestroyQScxmlNullDataModel():void;
		DestroyQScxmlNullDataModel():void;
		DestroyQScxmlNullDataModelDefault():void;
	}
	function NewQScxmlNullDataModelFromPointer(ptr:number):QScxmlNullDataModel;
	function NewQScxmlNullDataModel(parent:core.QObject_ITF):QScxmlNullDataModel;
	interface QScxmlStateMachine_ITF extends core.QObject_ITF {
		QScxmlStateMachine_PTR():QScxmlStateMachine;
	}

	class QScxmlStateMachine extends core.QObject {
		___pointer: number;
		QScxmlStateMachine_PTR():QScxmlStateMachine;
		Pointer():number;
		SetPointer(p:number):void;
		ActiveStateNames(compress:boolean):string[];
		CancelDelayedEvent(sendId:string):void;
		DataModel():QScxmlDataModel;
		ConnectDataModelChanged(f:(model:QScxmlDataModel)=>void):void;
		DisconnectDataModelChanged():void;
		DataModelChanged(model:QScxmlDataModel_ITF):void;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		FromData(data:core.QIODevice_ITF,fileName:string):QScxmlStateMachine;
		FromFile(fileName:string):QScxmlStateMachine;
		ConnectInit(f:()=>boolean):void;
		DisconnectInit():void;
		Init():boolean;
		InitDefault():boolean;
		InitialValues():Map<string,core.QVariant>;
		ConnectInitializedChanged(f:(initialized:boolean)=>void):void;
		DisconnectInitializedChanged():void;
		InitializedChanged(initialized:boolean):void;
		InvokedServices():QScxmlInvokableService[];
		ConnectInvokedServicesChanged(f:(invokedServices:QScxmlInvokableService[])=>void):void;
		DisconnectInvokedServicesChanged():void;
		InvokedServicesChanged(invokedServices:QScxmlInvokableService[]):void;
		IsActive(scxmlStateName:string):boolean;
		IsActive2(stateIndex:number):boolean;
		IsDispatchableTarget(target:string):boolean;
		IsInitialized():boolean;
		IsInvoked():boolean;
		IsRunning():boolean;
		ConnectLog(f:(label:string,msg:string)=>void):void;
		DisconnectLog():void;
		Log(label:string,msg:string):void;
		Name():string;
		ParseErrors():QScxmlError[];
		ConnectReachedStableState(f:()=>void):void;
		DisconnectReachedStableState():void;
		ReachedStableState():void;
		ConnectRunningChanged(f:(running:boolean)=>void):void;
		DisconnectRunningChanged():void;
		RunningChanged(running:boolean):void;
		SessionId():string;
		SetDataModel(model:QScxmlDataModel_ITF):void;
		SetInitialValues(initialValues:Map<string,core.QVariant>):void;
		SetRunning(running:boolean):void;
		SetTableData(tableData:QScxmlTableData_ITF):void;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		StartDefault():void;
		StateNames(compress:boolean):string[];
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		SubmitEvent(event:QScxmlEvent_ITF):void;
		SubmitEvent2(eventName:string):void;
		SubmitEvent3(eventName:string,data:core.QVariant_ITF):void;
		TableData():QScxmlTableData;
		ConnectTableDataChanged(f:(tableData:QScxmlTableData)=>void):void;
		DisconnectTableDataChanged():void;
		TableDataChanged(tableData:QScxmlTableData_ITF):void;
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
	function NewQScxmlStateMachineFromPointer(ptr:number):QScxmlStateMachine;
	function QScxmlStateMachine_FromData(data:core.QIODevice_ITF,fileName:string):QScxmlStateMachine;
	function QScxmlStateMachine_FromFile(fileName:string):QScxmlStateMachine;
	interface QScxmlStaticScxmlServiceFactory_ITF extends QScxmlInvokableServiceFactory_ITF {
		QScxmlStaticScxmlServiceFactory_PTR():QScxmlStaticScxmlServiceFactory;
	}

	class QScxmlStaticScxmlServiceFactory extends QScxmlInvokableServiceFactory {
		___pointer: number;
		QScxmlStaticScxmlServiceFactory_PTR():QScxmlStaticScxmlServiceFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectInvoke(f:(parentStateMachine:QScxmlStateMachine)=>QScxmlInvokableService):void;
		DisconnectInvoke():void;
		Invoke(parentStateMachine:QScxmlStateMachine_ITF):QScxmlInvokableService;
		InvokeDefault(parentStateMachine:QScxmlStateMachine_ITF):QScxmlInvokableService;
	}
	function NewQScxmlStaticScxmlServiceFactoryFromPointer(ptr:number):QScxmlStaticScxmlServiceFactory;
	interface QScxmlTableData_ITF {
		QScxmlTableData_PTR():QScxmlTableData;
	}

	class QScxmlTableData {
		___pointer: number;
		QScxmlTableData_PTR():QScxmlTableData;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectName(f:()=>string):void;
		DisconnectName():void;
		Name():string;
		ConnectServiceFactory(f:(id:number)=>QScxmlInvokableServiceFactory):void;
		DisconnectServiceFactory():void;
		ServiceFactory(id:number):QScxmlInvokableServiceFactory;
		ConnectDestroyQScxmlTableData(f:()=>void):void;
		DisconnectDestroyQScxmlTableData():void;
		DestroyQScxmlTableData():void;
		DestroyQScxmlTableDataDefault():void;
	}
	function NewQScxmlTableDataFromPointer(ptr:number):QScxmlTableData;
}