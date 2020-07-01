/// <reference path="core.d.ts" />
declare namespace qml {
	interface QJSEngine_ITF extends core.QObject_ITF {
		QJSEngine_PTR():QJSEngine;
	}

	class QJSEngine extends core.QObject {
		___pointer: number;
		NewJSType(property:QJSValue, name:string, i:any):void
		QJSEngine_PTR():QJSEngine;
		Pointer():number;
		SetPointer(p:number):void;
		CollectGarbage():void;
		Evaluate(program:string,fileName:string,lineNumber:number):QJSValue;
		GlobalObject():QJSValue;
		ImportModule(fileName:string):QJSValue;
		InstallExtensions(extensions:number,object:QJSValue_ITF):void;
		NewArray(length:number):QJSValue;
		NewObject():QJSValue;
		NewQObject(object:core.QObject_ITF):QJSValue;
		qjsEngine(object:core.QObject_ITF):QJSEngine;
		ToScriptValue(value:core.QVariant_ITF):QJSValue;
		ConnectDestroyQJSEngine(f:()=>void):void;
		DisconnectDestroyQJSEngine():void;
		DestroyQJSEngine():void;
		DestroyQJSEngineDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQJSEngineFromPointer(ptr:number):QJSEngine;
	function NewQJSEngine():QJSEngine;
	function NewQJSEngine2(parent:core.QObject_ITF):QJSEngine;
	function QJSEngine_qjsEngine(object:core.QObject_ITF):QJSEngine;
	const QJSEngine__TranslationExtension: number;
	const QJSEngine__ConsoleExtension: number;
	const QJSEngine__GarbageCollectionExtension: number;
	const QJSEngine__AllExtensions: number;
	interface QJSValue_ITF {
		QJSValue_PTR():QJSValue;
	}

	class QJSValue {
		___pointer: number;
		QJSValue_PTR():QJSValue;
		Pointer():number;
		SetPointer(p:number):void;
		Call(args:QJSValue[]):QJSValue;
		IsCallable():boolean;
		IsError():boolean;
		IsNull():boolean;
		IsObject():boolean;
		IsString():boolean;
		IsUndefined():boolean;
		Property(name:string):QJSValue;
		Property2(arrayIndex:number):QJSValue;
		SetProperty(name:string,value:QJSValue_ITF):void;
		SetProperty2(arrayIndex:number,value:QJSValue_ITF):void;
		ToInt():number;
		ToQObject():core.QObject;
		ToString():string;
		ToVariant():core.QVariant;
		DestroyQJSValue():void;
	}
	function NewQJSValueFromPointer(ptr:number):QJSValue;
	function NewQJSValue(value:number):QJSValue;
	function NewQJSValue2(other:QJSValue_ITF):QJSValue;
	function NewQJSValue3(other:QJSValue_ITF):QJSValue;
	function NewQJSValue4(value:boolean):QJSValue;
	function NewQJSValue5(value:number):QJSValue;
	function NewQJSValue6(value:number):QJSValue;
	function NewQJSValue7(value:number):QJSValue;
	function NewQJSValue8(value:string):QJSValue;
	function NewQJSValue9(value:core.QLatin1String_ITF):QJSValue;
	function NewQJSValue10(value:string):QJSValue;
	const QJSValue__NullValue: number;
	const QJSValue__UndefinedValue: number;
	const QJSValue__NoError: number;
	const QJSValue__GenericError: number;
	const QJSValue__EvalError: number;
	const QJSValue__RangeError: number;
	const QJSValue__ReferenceError: number;
	const QJSValue__SyntaxError: number;
	const QJSValue__TypeError: number;
	const QJSValue__URIError: number;
	const QQmlAbstractUrlInterceptor__QmlFile: number;
	const QQmlAbstractUrlInterceptor__JavaScriptFile: number;
	const QQmlAbstractUrlInterceptor__QmldirFile: number;
	const QQmlAbstractUrlInterceptor__UrlString: number;
	interface QQmlComponent_ITF extends core.QObject_ITF {
		QQmlComponent_PTR():QQmlComponent;
	}

	class QQmlComponent extends core.QObject {
		___pointer: number;
		QQmlComponent_PTR():QQmlComponent;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreate(f:(context:QQmlContext)=>core.QObject):void;
		DisconnectCreate():void;
		Create(context:QQmlContext_ITF):core.QObject;
		CreateDefault(context:QQmlContext_ITF):core.QObject;
		Create2(incubator:QQmlIncubator_ITF,context:QQmlContext_ITF,forContext:QQmlContext_ITF):void;
		Engine():QQmlEngine;
		Errors():QQmlError[];
		IsError():boolean;
		IsReady():boolean;
		Progress():number;
		ConnectSetData(f:(data:core.QByteArray,url:core.QUrl)=>void):void;
		DisconnectSetData():void;
		SetData(data:core.QByteArray_ITF,url:core.QUrl_ITF):void;
		SetDataDefault(data:core.QByteArray_ITF,url:core.QUrl_ITF):void;
		Url():core.QUrl;
		ConnectDestroyQQmlComponent(f:()=>void):void;
		DisconnectDestroyQQmlComponent():void;
		DestroyQQmlComponent():void;
		DestroyQQmlComponentDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQQmlComponentFromPointer(ptr:number):QQmlComponent;
	function NewQQmlComponent2(engine:QQmlEngine_ITF,parent:core.QObject_ITF):QQmlComponent;
	function NewQQmlComponent3(engine:QQmlEngine_ITF,fileName:string,parent:core.QObject_ITF):QQmlComponent;
	function NewQQmlComponent4(engine:QQmlEngine_ITF,fileName:string,mode:number,parent:core.QObject_ITF):QQmlComponent;
	function NewQQmlComponent5(engine:QQmlEngine_ITF,url:core.QUrl_ITF,parent:core.QObject_ITF):QQmlComponent;
	function NewQQmlComponent6(engine:QQmlEngine_ITF,url:core.QUrl_ITF,mode:number,parent:core.QObject_ITF):QQmlComponent;
	const QQmlComponent__PreferSynchronous: number;
	const QQmlComponent__Asynchronous: number;
	const QQmlComponent__Null: number;
	const QQmlComponent__Ready: number;
	const QQmlComponent__Loading: number;
	const QQmlComponent__Error: number;
	interface QQmlContext_ITF extends core.QObject_ITF {
		QQmlContext_PTR():QQmlContext;
	}

	class QQmlContext extends core.QObject {
		___pointer: number;
		QQmlContext_PTR():QQmlContext;
		Pointer():number;
		SetPointer(p:number):void;
		Engine():QQmlEngine;
		IsValid():boolean;
		ConnectDestroyQQmlContext(f:()=>void):void;
		DisconnectDestroyQQmlContext():void;
		DestroyQQmlContext():void;
		DestroyQQmlContextDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQQmlContextFromPointer(ptr:number):QQmlContext;
	function NewQQmlContext(engine:QQmlEngine_ITF,parent:core.QObject_ITF):QQmlContext;
	function NewQQmlContext2(parentContext:QQmlContext_ITF,parent:core.QObject_ITF):QQmlContext;
	const QQmlDebuggingEnabler__DoNotWaitForClient: number;
	const QQmlDebuggingEnabler__WaitForClient: number;
	interface QQmlEngine_ITF extends QJSEngine_ITF {
		QQmlEngine_PTR():QQmlEngine;
	}

	class QQmlEngine extends QJSEngine {
		___pointer: number;
		QQmlEngine_PTR():QQmlEngine;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectExit(f:(retCode:number)=>void):void;
		DisconnectExit():void;
		Exit(retCode:number):void;
		ConnectQuit(f:()=>void):void;
		DisconnectQuit():void;
		Quit():void;
		RootContext():QQmlContext;
		ConnectDestroyQQmlEngine(f:()=>void):void;
		DisconnectDestroyQQmlEngine():void;
		DestroyQQmlEngine():void;
		DestroyQQmlEngineDefault():void;
		QmlRegisterType(url:core.QUrl_ITF,uri:string,versionMajor:number,versionMinor:number,qmlName:string):number;
	}
	function NewQQmlEngineFromPointer(ptr:number):QQmlEngine;
	function NewQQmlEngine(parent:core.QObject_ITF):QQmlEngine;
	function QQmlEngine_QmlRegisterType(url:core.QUrl_ITF,uri:string,versionMajor:number,versionMinor:number,qmlName:string):number;
	const QQmlEngine__CppOwnership: number;
	const QQmlEngine__JavaScriptOwnership: number;
	interface QQmlError_ITF {
		QQmlError_PTR():QQmlError;
	}

	class QQmlError {
		___pointer: number;
		QQmlError_PTR():QQmlError;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlError():void;
		Column():number;
		IsValid():boolean;
		Line():number;
		Object():core.QObject;
		SetColumn(column:number):void;
		SetObject(object:core.QObject_ITF):void;
		ToString():string;
		Url():core.QUrl;
	}
	function NewQQmlErrorFromPointer(ptr:number):QQmlError;
	function NewQQmlError():QQmlError;
	function NewQQmlError2(other:QQmlError_ITF):QQmlError;
	const QQmlImageProviderBase__Image: number;
	const QQmlImageProviderBase__Pixmap: number;
	const QQmlImageProviderBase__Texture: number;
	const QQmlImageProviderBase__Invalid: number;
	const QQmlImageProviderBase__ImageResponse: number;
	const QQmlImageProviderBase__ForceAsynchronousImageLoading: number;
	interface QQmlIncubator_ITF {
		QQmlIncubator_PTR():QQmlIncubator;
	}

	class QQmlIncubator {
		___pointer: number;
		QQmlIncubator_PTR():QQmlIncubator;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlIncubator():void;
		Clear():void;
		Errors():QQmlError[];
		IsError():boolean;
		IsReady():boolean;
		Object():core.QObject;
	}
	function NewQQmlIncubatorFromPointer(ptr:number):QQmlIncubator;
	function NewQQmlIncubator2(mode:number):QQmlIncubator;
	const QQmlIncubator__Asynchronous: number;
	const QQmlIncubator__AsynchronousIfNested: number;
	const QQmlIncubator__Synchronous: number;
	const QQmlIncubator__Null: number;
	const QQmlIncubator__Ready: number;
	const QQmlIncubator__Loading: number;
	const QQmlIncubator__Error: number;
	interface QQmlParserStatus_ITF {
		QQmlParserStatus_PTR():QQmlParserStatus;
	}

	class QQmlParserStatus {
		___pointer: number;
		QQmlParserStatus_PTR():QQmlParserStatus;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlParserStatus():void;
		ConnectClassBegin(f:()=>void):void;
		DisconnectClassBegin():void;
		ClassBegin():void;
		ConnectComponentComplete(f:()=>void):void;
		DisconnectComponentComplete():void;
		ComponentComplete():void;
	}
	function NewQQmlParserStatusFromPointer(ptr:number):QQmlParserStatus;
	const QQmlProperty__InvalidCategory: number;
	const QQmlProperty__List: number;
	const QQmlProperty__Object: number;
	const QQmlProperty__Normal: number;
	const QQmlProperty__Invalid: number;
	const QQmlProperty__Property: number;
	const QQmlProperty__SignalProperty: number;
}