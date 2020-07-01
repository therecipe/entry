/// <reference path="core.d.ts" />
/// <reference path="network.d.ts" />
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
		FromScriptValue(value:QJSValue_ITF):core.QVariant;
		GlobalObject():QJSValue;
		ImportModule(fileName:string):QJSValue;
		InstallExtensions(extensions:number,object:QJSValue_ITF):void;
		NewArray(length:number):QJSValue;
		NewErrorObject(errorType:number,message:string):QJSValue;
		NewObject():QJSValue;
		NewQMetaObject(metaObject:core.QMetaObject_ITF):QJSValue;
		NewQObject(object:core.QObject_ITF):QJSValue;
		qjsEngine(object:core.QObject_ITF):QJSEngine;
		ThrowError(message:string):void;
		ThrowError2(errorType:number,message:string):void;
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
		MetaObjectDefault():core.QMetaObject;
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
		CallAsConstructor(args:QJSValue[]):QJSValue;
		CallWithInstance(instance:QJSValue_ITF,args:QJSValue[]):QJSValue;
		DeleteProperty(name:string):boolean;
		Equals(other:QJSValue_ITF):boolean;
		ErrorType():number;
		HasOwnProperty(name:string):boolean;
		HasProperty(name:string):boolean;
		IsArray():boolean;
		IsBool():boolean;
		IsCallable():boolean;
		IsDate():boolean;
		IsError():boolean;
		IsNull():boolean;
		IsNumber():boolean;
		IsObject():boolean;
		IsQMetaObject():boolean;
		IsQObject():boolean;
		IsRegExp():boolean;
		IsString():boolean;
		IsUndefined():boolean;
		IsVariant():boolean;
		Property(name:string):QJSValue;
		Property2(arrayIndex:number):QJSValue;
		Prototype():QJSValue;
		SetProperty(name:string,value:QJSValue_ITF):void;
		SetProperty2(arrayIndex:number,value:QJSValue_ITF):void;
		SetPrototype(prototype:QJSValue_ITF):void;
		StrictlyEquals(other:QJSValue_ITF):boolean;
		ToBool():boolean;
		ToDateTime():core.QDateTime;
		ToInt():number;
		ToNumber():number;
		ToQMetaObject():core.QMetaObject;
		ToQObject():core.QObject;
		ToString():string;
		ToUInt():number;
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
	interface QJSValueIterator_ITF {
		QJSValueIterator_PTR():QJSValueIterator;
	}

	class QJSValueIterator {
		___pointer: number;
		QJSValueIterator_PTR():QJSValueIterator;
		Pointer():number;
		SetPointer(p:number):void;
		HasNext():boolean;
		Name():string;
		Next():boolean;
		Value():QJSValue;
		DestroyQJSValueIterator():void;
	}
	function NewQJSValueIteratorFromPointer(ptr:number):QJSValueIterator;
	function NewQJSValueIterator(object:QJSValue_ITF):QJSValueIterator;
	interface QQmlAbstractUrlInterceptor_ITF {
		QQmlAbstractUrlInterceptor_PTR():QQmlAbstractUrlInterceptor;
	}

	class QQmlAbstractUrlInterceptor {
		___pointer: number;
		QQmlAbstractUrlInterceptor_PTR():QQmlAbstractUrlInterceptor;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectIntercept(f:(url:core.QUrl,ty:number)=>core.QUrl):void;
		DisconnectIntercept():void;
		Intercept(url:core.QUrl_ITF,ty:number):core.QUrl;
		ConnectDestroyQQmlAbstractUrlInterceptor(f:()=>void):void;
		DisconnectDestroyQQmlAbstractUrlInterceptor():void;
		DestroyQQmlAbstractUrlInterceptor():void;
		DestroyQQmlAbstractUrlInterceptorDefault():void;
	}
	function NewQQmlAbstractUrlInterceptorFromPointer(ptr:number):QQmlAbstractUrlInterceptor;
	function NewQQmlAbstractUrlInterceptor():QQmlAbstractUrlInterceptor;
	const QQmlAbstractUrlInterceptor__QmlFile: number;
	const QQmlAbstractUrlInterceptor__JavaScriptFile: number;
	const QQmlAbstractUrlInterceptor__QmldirFile: number;
	const QQmlAbstractUrlInterceptor__UrlString: number;
	interface QQmlApplicationEngine_ITF extends QQmlEngine_ITF {
		QQmlApplicationEngine_PTR():QQmlApplicationEngine;
	}

	class QQmlApplicationEngine extends QQmlEngine {
		___pointer: number;
		QQmlApplicationEngine_PTR():QQmlApplicationEngine;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectLoad(f:(url:core.QUrl)=>void):void;
		DisconnectLoad():void;
		Load(url:core.QUrl_ITF):void;
		LoadDefault(url:core.QUrl_ITF):void;
		ConnectLoad2(f:(filePath:string)=>void):void;
		DisconnectLoad2():void;
		Load2(filePath:string):void;
		Load2Default(filePath:string):void;
		ConnectLoadData(f:(data:core.QByteArray,url:core.QUrl)=>void):void;
		DisconnectLoadData():void;
		LoadData(data:core.QByteArray_ITF,url:core.QUrl_ITF):void;
		LoadDataDefault(data:core.QByteArray_ITF,url:core.QUrl_ITF):void;
		ConnectObjectCreated(f:(object:core.QObject,url:core.QUrl)=>void):void;
		DisconnectObjectCreated():void;
		ObjectCreated(object:core.QObject_ITF,url:core.QUrl_ITF):void;
		RootObjects():core.QObject[];
		ConnectDestroyQQmlApplicationEngine(f:()=>void):void;
		DisconnectDestroyQQmlApplicationEngine():void;
		DestroyQQmlApplicationEngine():void;
		DestroyQQmlApplicationEngineDefault():void;
	}
	function NewQQmlApplicationEngineFromPointer(ptr:number):QQmlApplicationEngine;
	function NewQQmlApplicationEngine(parent:core.QObject_ITF):QQmlApplicationEngine;
	function NewQQmlApplicationEngine2(url:core.QUrl_ITF,parent:core.QObject_ITF):QQmlApplicationEngine;
	function NewQQmlApplicationEngine3(filePath:string,parent:core.QObject_ITF):QQmlApplicationEngine;
	interface QQmlComponent_ITF extends core.QObject_ITF {
		QQmlComponent_PTR():QQmlComponent;
	}

	class QQmlComponent extends core.QObject {
		___pointer: number;
		QQmlComponent_PTR():QQmlComponent;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBeginCreate(f:(publicContext:QQmlContext)=>core.QObject):void;
		DisconnectBeginCreate():void;
		BeginCreate(publicContext:QQmlContext_ITF):core.QObject;
		BeginCreateDefault(publicContext:QQmlContext_ITF):core.QObject;
		ConnectCompleteCreate(f:()=>void):void;
		DisconnectCompleteCreate():void;
		CompleteCreate():void;
		CompleteCreateDefault():void;
		ConnectCreate(f:(context:QQmlContext)=>core.QObject):void;
		DisconnectCreate():void;
		Create(context:QQmlContext_ITF):core.QObject;
		CreateDefault(context:QQmlContext_ITF):core.QObject;
		Create2(incubator:QQmlIncubator_ITF,context:QQmlContext_ITF,forContext:QQmlContext_ITF):void;
		CreationContext():QQmlContext;
		Engine():QQmlEngine;
		Errors():QQmlError[];
		IsError():boolean;
		IsLoading():boolean;
		IsNull():boolean;
		IsReady():boolean;
		ConnectLoadUrl(f:(url:core.QUrl)=>void):void;
		DisconnectLoadUrl():void;
		LoadUrl(url:core.QUrl_ITF):void;
		LoadUrlDefault(url:core.QUrl_ITF):void;
		ConnectLoadUrl2(f:(url:core.QUrl,mode:number)=>void):void;
		DisconnectLoadUrl2():void;
		LoadUrl2(url:core.QUrl_ITF,mode:number):void;
		LoadUrl2Default(url:core.QUrl_ITF,mode:number):void;
		Progress():number;
		ConnectProgressChanged(f:(progress:number)=>void):void;
		DisconnectProgressChanged():void;
		ProgressChanged(progress:number):void;
		ConnectSetData(f:(data:core.QByteArray,url:core.QUrl)=>void):void;
		DisconnectSetData():void;
		SetData(data:core.QByteArray_ITF,url:core.QUrl_ITF):void;
		SetDataDefault(data:core.QByteArray_ITF,url:core.QUrl_ITF):void;
		Status():number;
		ConnectStatusChanged(f:(status:number)=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged(status:number):void;
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
		MetaObjectDefault():core.QMetaObject;
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
		BaseUrl():core.QUrl;
		ContextObject():core.QObject;
		ContextProperty(name:string):core.QVariant;
		Engine():QQmlEngine;
		IsValid():boolean;
		NameForObject(object:core.QObject_ITF):string;
		ParentContext():QQmlContext;
		ResolvedUrl(src:core.QUrl_ITF):core.QUrl;
		SetBaseUrl(baseUrl:core.QUrl_ITF):void;
		SetContextObject(object:core.QObject_ITF):void;
		SetContextProperty(name:string,value:core.QObject_ITF):void;
		SetContextProperty2(name:string,value:core.QVariant_ITF):void;
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
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQQmlContextFromPointer(ptr:number):QQmlContext;
	function NewQQmlContext(engine:QQmlEngine_ITF,parent:core.QObject_ITF):QQmlContext;
	function NewQQmlContext2(parentContext:QQmlContext_ITF,parent:core.QObject_ITF):QQmlContext;
	interface QQmlDebuggingEnabler_ITF {
		QQmlDebuggingEnabler_PTR():QQmlDebuggingEnabler;
	}

	class QQmlDebuggingEnabler {
		___pointer: number;
		QQmlDebuggingEnabler_PTR():QQmlDebuggingEnabler;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlDebuggingEnabler():void;
		ConnectToLocalDebugger(socketFileName:string,mode:number):boolean;
		DebuggerServices():string[];
		InspectorServices():string[];
		NativeDebuggerServices():string[];
		ProfilerServices():string[];
		SetServices(services:string[]):void;
		StartDebugConnector(pluginName:string,configuration:Map<string,core.QVariant>):boolean;
		StartTcpDebugServer(port:number,mode:number,hostName:string):boolean;
	}
	function NewQQmlDebuggingEnablerFromPointer(ptr:number):QQmlDebuggingEnabler;
	function QQmlDebuggingEnabler_ConnectToLocalDebugger(socketFileName:string,mode:number):boolean;
	function QQmlDebuggingEnabler_DebuggerServices():string[];
	function QQmlDebuggingEnabler_InspectorServices():string[];
	function QQmlDebuggingEnabler_NativeDebuggerServices():string[];
	function QQmlDebuggingEnabler_ProfilerServices():string[];
	function QQmlDebuggingEnabler_SetServices(services:string[]):void;
	function QQmlDebuggingEnabler_StartDebugConnector(pluginName:string,configuration:Map<string,core.QVariant>):boolean;
	function QQmlDebuggingEnabler_StartTcpDebugServer(port:number,mode:number,hostName:string):boolean;
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
		AddImageProvider(providerId:string,provider:QQmlImageProviderBase_ITF):void;
		AddImportPath(path:string):void;
		AddPluginPath(path:string):void;
		BaseUrl():core.QUrl;
		ClearComponentCache():void;
		ContextForObject(object:core.QObject_ITF):QQmlContext;
		ConnectExit(f:(retCode:number)=>void):void;
		DisconnectExit():void;
		Exit(retCode:number):void;
		ImageProvider(providerId:string):QQmlImageProviderBase;
		ImportPathList():string[];
		ImportPlugin(filePath:string,uri:string,errors:QQmlError[]):boolean;
		IncubationController():QQmlIncubationController;
		NetworkAccessManager():network.QNetworkAccessManager;
		NetworkAccessManagerFactory():QQmlNetworkAccessManagerFactory;
		ObjectOwnership(object:core.QObject_ITF):number;
		OfflineStorageDatabaseFilePath(databaseName:string):string;
		OfflineStoragePath():string;
		OutputWarningsToStandardError():boolean;
		PluginPathList():string[];
		ConnectQuit(f:()=>void):void;
		DisconnectQuit():void;
		Quit():void;
		RemoveImageProvider(providerId:string):void;
		ConnectRetranslate(f:()=>void):void;
		DisconnectRetranslate():void;
		Retranslate():void;
		RetranslateDefault():void;
		RootContext():QQmlContext;
		SetBaseUrl(url:core.QUrl_ITF):void;
		SetContextForObject(object:core.QObject_ITF,context:QQmlContext_ITF):void;
		SetImportPathList(paths:string[]):void;
		SetIncubationController(controller:QQmlIncubationController_ITF):void;
		SetNetworkAccessManagerFactory(factory:QQmlNetworkAccessManagerFactory_ITF):void;
		SetObjectOwnership(object:core.QObject_ITF,ownership:number):void;
		SetOfflineStoragePath(dir:string):void;
		SetOutputWarningsToStandardError(enabled:boolean):void;
		SetPluginPathList(paths:string[]):void;
		TrimComponentCache():void;
		ConnectWarnings(f:(warnings:QQmlError[])=>void):void;
		DisconnectWarnings():void;
		Warnings(warnings:QQmlError[]):void;
		ConnectDestroyQQmlEngine(f:()=>void):void;
		DisconnectDestroyQQmlEngine():void;
		DestroyQQmlEngine():void;
		DestroyQQmlEngineDefault():void;
		QmlRegisterSingletonType(url:core.QUrl_ITF,uri:string,versionMajor:number,versionMinor:number,qmlName:string):number;
		QmlRegisterType(url:core.QUrl_ITF,uri:string,versionMajor:number,versionMinor:number,qmlName:string):number;
	}
	function NewQQmlEngineFromPointer(ptr:number):QQmlEngine;
	function NewQQmlEngine(parent:core.QObject_ITF):QQmlEngine;
	function QQmlEngine_ContextForObject(object:core.QObject_ITF):QQmlContext;
	function QQmlEngine_ObjectOwnership(object:core.QObject_ITF):number;
	function QQmlEngine_SetContextForObject(object:core.QObject_ITF,context:QQmlContext_ITF):void;
	function QQmlEngine_SetObjectOwnership(object:core.QObject_ITF,ownership:number):void;
	function QQmlEngine_QmlRegisterSingletonType(url:core.QUrl_ITF,uri:string,versionMajor:number,versionMinor:number,qmlName:string):number;
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
		Description():string;
		IsValid():boolean;
		Line():number;
		Object():core.QObject;
		SetColumn(column:number):void;
		SetDescription(description:string):void;
		SetLine(line:number):void;
		SetObject(object:core.QObject_ITF):void;
		SetUrl(url:core.QUrl_ITF):void;
		ToString():string;
		Url():core.QUrl;
	}
	function NewQQmlErrorFromPointer(ptr:number):QQmlError;
	function NewQQmlError():QQmlError;
	function NewQQmlError2(other:QQmlError_ITF):QQmlError;
	interface QQmlExpression_ITF extends core.QObject_ITF {
		QQmlExpression_PTR():QQmlExpression;
	}

	class QQmlExpression extends core.QObject {
		___pointer: number;
		QQmlExpression_PTR():QQmlExpression;
		Pointer():number;
		SetPointer(p:number):void;
		ClearError():void;
		ColumnNumber():number;
		Context():QQmlContext;
		Engine():QQmlEngine;
		Error():QQmlError;
		Evaluate(valueIsUndefined:boolean):core.QVariant;
		Expression():string;
		HasError():boolean;
		LineNumber():number;
		NotifyOnValueChanged():boolean;
		ScopeObject():core.QObject;
		SetExpression(expression:string):void;
		SetNotifyOnValueChanged(notifyOnChange:boolean):void;
		SetSourceLocation(url:string,line:number,column:number):void;
		SourceFile():string;
		ConnectValueChanged(f:()=>void):void;
		DisconnectValueChanged():void;
		ValueChanged():void;
		ConnectDestroyQQmlExpression(f:()=>void):void;
		DisconnectDestroyQQmlExpression():void;
		DestroyQQmlExpression():void;
		DestroyQQmlExpressionDefault():void;
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
	function NewQQmlExpressionFromPointer(ptr:number):QQmlExpression;
	function NewQQmlExpression():QQmlExpression;
	function NewQQmlExpression2(ctxt:QQmlContext_ITF,scope:core.QObject_ITF,expression:string,parent:core.QObject_ITF):QQmlExpression;
	function NewQQmlExpression3(scri:QQmlScriptString_ITF,ctxt:QQmlContext_ITF,scope:core.QObject_ITF,parent:core.QObject_ITF):QQmlExpression;
	interface QQmlExtensionPlugin_ITF extends core.QObject_ITF {
		QQmlExtensionPlugin_PTR():QQmlExtensionPlugin;
	}

	class QQmlExtensionPlugin extends core.QObject {
		___pointer: number;
		QQmlExtensionPlugin_PTR():QQmlExtensionPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		BaseUrl():core.QUrl;
		ConnectInitializeEngine(f:(engine:QQmlEngine,uri:string)=>void):void;
		DisconnectInitializeEngine():void;
		InitializeEngine(engine:QQmlEngine_ITF,uri:string):void;
		InitializeEngineDefault(engine:QQmlEngine_ITF,uri:string):void;
		ConnectRegisterTypes(f:(uri:string)=>void):void;
		DisconnectRegisterTypes():void;
		RegisterTypes(uri:string):void;
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
	function NewQQmlExtensionPluginFromPointer(ptr:number):QQmlExtensionPlugin;
	function NewQQmlExtensionPlugin(parent:core.QObject_ITF):QQmlExtensionPlugin;
	interface QQmlFileSelector_ITF extends core.QObject_ITF {
		QQmlFileSelector_PTR():QQmlFileSelector;
	}

	class QQmlFileSelector extends core.QObject {
		___pointer: number;
		QQmlFileSelector_PTR():QQmlFileSelector;
		Pointer():number;
		SetPointer(p:number):void;
		Get(engine:QQmlEngine_ITF):QQmlFileSelector;
		Selector():core.QFileSelector;
		SetExtraSelectors(stri:string[]):void;
		SetExtraSelectors2(stri:string[]):void;
		SetSelector(selector:core.QFileSelector_ITF):void;
		ConnectDestroyQQmlFileSelector(f:()=>void):void;
		DisconnectDestroyQQmlFileSelector():void;
		DestroyQQmlFileSelector():void;
		DestroyQQmlFileSelectorDefault():void;
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
	function NewQQmlFileSelectorFromPointer(ptr:number):QQmlFileSelector;
	function NewQQmlFileSelector(engine:QQmlEngine_ITF,parent:core.QObject_ITF):QQmlFileSelector;
	function QQmlFileSelector_Get(engine:QQmlEngine_ITF):QQmlFileSelector;
	interface QQmlImageProviderBase_ITF {
		QQmlImageProviderBase_PTR():QQmlImageProviderBase;
	}

	class QQmlImageProviderBase {
		___pointer: number;
		QQmlImageProviderBase_PTR():QQmlImageProviderBase;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlImageProviderBase():void;
		ConnectFlags(f:()=>number):void;
		DisconnectFlags():void;
		Flags():number;
		ConnectImageType(f:()=>number):void;
		DisconnectImageType():void;
		ImageType():number;
	}
	function NewQQmlImageProviderBaseFromPointer(ptr:number):QQmlImageProviderBase;
	const QQmlImageProviderBase__Image: number;
	const QQmlImageProviderBase__Pixmap: number;
	const QQmlImageProviderBase__Texture: number;
	const QQmlImageProviderBase__Invalid: number;
	const QQmlImageProviderBase__ImageResponse: number;
	const QQmlImageProviderBase__ForceAsynchronousImageLoading: number;
	interface QQmlIncubationController_ITF {
		QQmlIncubationController_PTR():QQmlIncubationController;
	}

	class QQmlIncubationController {
		___pointer: number;
		QQmlIncubationController_PTR():QQmlIncubationController;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlIncubationController():void;
		Engine():QQmlEngine;
		IncubateFor(msecs:number):void;
		IncubatingObjectCount():number;
		ConnectIncubatingObjectCountChanged(f:(incubatingObjectCount:number)=>void):void;
		DisconnectIncubatingObjectCountChanged():void;
		IncubatingObjectCountChanged(incubatingObjectCount:number):void;
		IncubatingObjectCountChangedDefault(incubatingObjectCount:number):void;
	}
	function NewQQmlIncubationControllerFromPointer(ptr:number):QQmlIncubationController;
	function NewQQmlIncubationController2():QQmlIncubationController;
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
		ForceCompletion():void;
		IncubationMode():number;
		IsError():boolean;
		IsLoading():boolean;
		IsNull():boolean;
		IsReady():boolean;
		Object():core.QObject;
		ConnectSetInitialState(f:(object:core.QObject)=>void):void;
		DisconnectSetInitialState():void;
		SetInitialState(object:core.QObject_ITF):void;
		SetInitialStateDefault(object:core.QObject_ITF):void;
		Status():number;
		ConnectStatusChanged(f:(status:number)=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged(status:number):void;
		StatusChangedDefault(status:number):void;
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
	interface QQmlInfo_ITF extends core.QDebug_ITF {
		QQmlInfo_PTR():QQmlInfo;
	}

	class QQmlInfo extends core.QDebug {
		___pointer: number;
		QQmlInfo_PTR():QQmlInfo;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlInfo():void;
	}
	function NewQQmlInfoFromPointer(ptr:number):QQmlInfo;
	interface QQmlListProperty_ITF {
		QQmlListProperty_PTR():QQmlListProperty;
	}

	class QQmlListProperty {
		___pointer: number;
		QQmlListProperty_PTR():QQmlListProperty;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlListProperty():void;
	}
	interface QQmlListReference_ITF {
		QQmlListReference_PTR():QQmlListReference;
	}

	class QQmlListReference {
		___pointer: number;
		QQmlListReference_PTR():QQmlListReference;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlListReference():void;
		Append(object:core.QObject_ITF):boolean;
		At(index:number):core.QObject;
		CanAppend():boolean;
		CanAt():boolean;
		CanClear():boolean;
		CanCount():boolean;
		Clear():boolean;
		Count():number;
		IsManipulable():boolean;
		IsReadable():boolean;
		IsValid():boolean;
		ListElementType():core.QMetaObject;
		Object():core.QObject;
	}
	function NewQQmlListReferenceFromPointer(ptr:number):QQmlListReference;
	function NewQQmlListReference():QQmlListReference;
	function NewQQmlListReference2(object:core.QObject_ITF,property:string,engine:QQmlEngine_ITF):QQmlListReference;
	interface QQmlNetworkAccessManagerFactory_ITF {
		QQmlNetworkAccessManagerFactory_PTR():QQmlNetworkAccessManagerFactory;
	}

	class QQmlNetworkAccessManagerFactory {
		___pointer: number;
		QQmlNetworkAccessManagerFactory_PTR():QQmlNetworkAccessManagerFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreate(f:(parent:core.QObject)=>network.QNetworkAccessManager):void;
		DisconnectCreate():void;
		Create(parent:core.QObject_ITF):network.QNetworkAccessManager;
		ConnectDestroyQQmlNetworkAccessManagerFactory(f:()=>void):void;
		DisconnectDestroyQQmlNetworkAccessManagerFactory():void;
		DestroyQQmlNetworkAccessManagerFactory():void;
		DestroyQQmlNetworkAccessManagerFactoryDefault():void;
	}
	function NewQQmlNetworkAccessManagerFactoryFromPointer(ptr:number):QQmlNetworkAccessManagerFactory;
	function NewQQmlNetworkAccessManagerFactory():QQmlNetworkAccessManagerFactory;
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
	interface QQmlProperty_ITF {
		QQmlProperty_PTR():QQmlProperty;
	}

	class QQmlProperty {
		___pointer: number;
		QQmlProperty_PTR():QQmlProperty;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlProperty():void;
		ConnectNotifySignal(dest:core.QObject_ITF,slot:string):boolean;
		ConnectNotifySignal2(dest:core.QObject_ITF,method:number):boolean;
		HasNotifySignal():boolean;
		Index():number;
		IsDesignable():boolean;
		IsProperty():boolean;
		IsResettable():boolean;
		IsSignalProperty():boolean;
		IsValid():boolean;
		IsWritable():boolean;
		Method():core.QMetaMethod;
		Name():string;
		NeedsNotifySignal():boolean;
		Object():core.QObject;
		PropertyType():number;
		PropertyTypeCategory():number;
		PropertyTypeName():string;
		Read():core.QVariant;
		Read2(object:core.QObject_ITF,name:string):core.QVariant;
		Read3(object:core.QObject_ITF,name:string,ctxt:QQmlContext_ITF):core.QVariant;
		Read4(object:core.QObject_ITF,name:string,engine:QQmlEngine_ITF):core.QVariant;
		Reset():boolean;
		Type():number;
		Write(value:core.QVariant_ITF):boolean;
		Write2(object:core.QObject_ITF,name:string,value:core.QVariant_ITF):boolean;
		Write3(object:core.QObject_ITF,name:string,value:core.QVariant_ITF,ctxt:QQmlContext_ITF):boolean;
		Write4(object:core.QObject_ITF,name:string,value:core.QVariant_ITF,engine:QQmlEngine_ITF):boolean;
	}
	function NewQQmlPropertyFromPointer(ptr:number):QQmlProperty;
	function NewQQmlProperty():QQmlProperty;
	function NewQQmlProperty2(obj:core.QObject_ITF):QQmlProperty;
	function NewQQmlProperty3(obj:core.QObject_ITF,ctxt:QQmlContext_ITF):QQmlProperty;
	function NewQQmlProperty4(obj:core.QObject_ITF,engine:QQmlEngine_ITF):QQmlProperty;
	function NewQQmlProperty5(obj:core.QObject_ITF,name:string):QQmlProperty;
	function NewQQmlProperty6(obj:core.QObject_ITF,name:string,ctxt:QQmlContext_ITF):QQmlProperty;
	function NewQQmlProperty7(obj:core.QObject_ITF,name:string,engine:QQmlEngine_ITF):QQmlProperty;
	function NewQQmlProperty8(other:QQmlProperty_ITF):QQmlProperty;
	function QQmlProperty_Read2(object:core.QObject_ITF,name:string):core.QVariant;
	function QQmlProperty_Read3(object:core.QObject_ITF,name:string,ctxt:QQmlContext_ITF):core.QVariant;
	function QQmlProperty_Read4(object:core.QObject_ITF,name:string,engine:QQmlEngine_ITF):core.QVariant;
	function QQmlProperty_Write2(object:core.QObject_ITF,name:string,value:core.QVariant_ITF):boolean;
	function QQmlProperty_Write3(object:core.QObject_ITF,name:string,value:core.QVariant_ITF,ctxt:QQmlContext_ITF):boolean;
	function QQmlProperty_Write4(object:core.QObject_ITF,name:string,value:core.QVariant_ITF,engine:QQmlEngine_ITF):boolean;
	const QQmlProperty__InvalidCategory: number;
	const QQmlProperty__List: number;
	const QQmlProperty__Object: number;
	const QQmlProperty__Normal: number;
	const QQmlProperty__Invalid: number;
	const QQmlProperty__Property: number;
	const QQmlProperty__SignalProperty: number;
	interface QQmlPropertyMap_ITF extends core.QObject_ITF {
		QQmlPropertyMap_PTR():QQmlPropertyMap;
	}

	class QQmlPropertyMap extends core.QObject {
		___pointer: number;
		QQmlPropertyMap_PTR():QQmlPropertyMap;
		Pointer():number;
		SetPointer(p:number):void;
		Clear(key:string):void;
		Contains(key:string):boolean;
		Count():number;
		Insert(key:string,value:core.QVariant_ITF):void;
		IsEmpty():boolean;
		Keys():string[];
		Size():number;
		ConnectUpdateValue(f:(key:string,input:core.QVariant)=>core.QVariant):void;
		DisconnectUpdateValue():void;
		UpdateValue(key:string,input:core.QVariant_ITF):core.QVariant;
		UpdateValueDefault(key:string,input:core.QVariant_ITF):core.QVariant;
		Value(key:string):core.QVariant;
		ConnectValueChanged(f:(key:string,value:core.QVariant)=>void):void;
		DisconnectValueChanged():void;
		ValueChanged(key:string,value:core.QVariant_ITF):void;
		ConnectDestroyQQmlPropertyMap(f:()=>void):void;
		DisconnectDestroyQQmlPropertyMap():void;
		DestroyQQmlPropertyMap():void;
		DestroyQQmlPropertyMapDefault():void;
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
	function NewQQmlPropertyMapFromPointer(ptr:number):QQmlPropertyMap;
	function NewQQmlPropertyMap(parent:core.QObject_ITF):QQmlPropertyMap;
	interface QQmlPropertyValueSource_ITF {
		QQmlPropertyValueSource_PTR():QQmlPropertyValueSource;
	}

	class QQmlPropertyValueSource {
		___pointer: number;
		QQmlPropertyValueSource_PTR():QQmlPropertyValueSource;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectSetTarget(f:(property:QQmlProperty)=>void):void;
		DisconnectSetTarget():void;
		SetTarget(property:QQmlProperty_ITF):void;
		ConnectDestroyQQmlPropertyValueSource(f:()=>void):void;
		DisconnectDestroyQQmlPropertyValueSource():void;
		DestroyQQmlPropertyValueSource():void;
		DestroyQQmlPropertyValueSourceDefault():void;
	}
	function NewQQmlPropertyValueSourceFromPointer(ptr:number):QQmlPropertyValueSource;
	function NewQQmlPropertyValueSource():QQmlPropertyValueSource;
	interface QQmlScriptString_ITF {
		QQmlScriptString_PTR():QQmlScriptString;
	}

	class QQmlScriptString {
		___pointer: number;
		QQmlScriptString_PTR():QQmlScriptString;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQmlScriptString():void;
		BooleanLiteral(ok:boolean):boolean;
		IsEmpty():boolean;
		IsNullLiteral():boolean;
		IsUndefinedLiteral():boolean;
		NumberLiteral(ok:boolean):number;
		StringLiteral():string;
	}
	function NewQQmlScriptStringFromPointer(ptr:number):QQmlScriptString;
	function NewQQmlScriptString():QQmlScriptString;
	function NewQQmlScriptString2(other:QQmlScriptString_ITF):QQmlScriptString;
}