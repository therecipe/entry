/// <reference path="core.d.ts" />
declare namespace script {
	interface QScriptClass_ITF {
		QScriptClass_PTR():QScriptClass;
	}

	class QScriptClass {
		___pointer: number;
		QScriptClass_PTR():QScriptClass;
		Pointer():number;
		SetPointer(p:number):void;
		Engine():QScriptEngine;
		ConnectExtension(f:(extensi:number,argument:core.QVariant)=>core.QVariant):void;
		DisconnectExtension():void;
		Extension(extensi:number,argument:core.QVariant_ITF):core.QVariant;
		ExtensionDefault(extensi:number,argument:core.QVariant_ITF):core.QVariant;
		ConnectName(f:()=>string):void;
		DisconnectName():void;
		Name():string;
		NameDefault():string;
		ConnectNewIterator(f:(object:QScriptValue)=>QScriptClassPropertyIterator):void;
		DisconnectNewIterator():void;
		NewIterator(object:QScriptValue_ITF):QScriptClassPropertyIterator;
		NewIteratorDefault(object:QScriptValue_ITF):QScriptClassPropertyIterator;
		ConnectProperty(f:(object:QScriptValue,name:QScriptString,id:number)=>QScriptValue):void;
		DisconnectProperty():void;
		Property(object:QScriptValue_ITF,name:QScriptString_ITF,id:number):QScriptValue;
		PropertyDefault(object:QScriptValue_ITF,name:QScriptString_ITF,id:number):QScriptValue;
		ConnectPropertyFlags(f:(object:QScriptValue,name:QScriptString,id:number)=>number):void;
		DisconnectPropertyFlags():void;
		PropertyFlags(object:QScriptValue_ITF,name:QScriptString_ITF,id:number):number;
		PropertyFlagsDefault(object:QScriptValue_ITF,name:QScriptString_ITF,id:number):number;
		ConnectPrototype(f:()=>QScriptValue):void;
		DisconnectPrototype():void;
		Prototype():QScriptValue;
		PrototypeDefault():QScriptValue;
		ConnectQueryProperty(f:(object:QScriptValue,name:QScriptString,flags:number,id:number)=>number):void;
		DisconnectQueryProperty():void;
		QueryProperty(object:QScriptValue_ITF,name:QScriptString_ITF,flags:number,id:number):number;
		QueryPropertyDefault(object:QScriptValue_ITF,name:QScriptString_ITF,flags:number,id:number):number;
		ConnectSetProperty(f:(object:QScriptValue,name:QScriptString,id:number,value:QScriptValue)=>void):void;
		DisconnectSetProperty():void;
		SetProperty(object:QScriptValue_ITF,name:QScriptString_ITF,id:number,value:QScriptValue_ITF):void;
		SetPropertyDefault(object:QScriptValue_ITF,name:QScriptString_ITF,id:number,value:QScriptValue_ITF):void;
		ConnectSupportsExtension(f:(extensi:number)=>boolean):void;
		DisconnectSupportsExtension():void;
		SupportsExtension(extensi:number):boolean;
		SupportsExtensionDefault(extensi:number):boolean;
		ConnectDestroyQScriptClass(f:()=>void):void;
		DisconnectDestroyQScriptClass():void;
		DestroyQScriptClass():void;
		DestroyQScriptClassDefault():void;
	}
	function NewQScriptClassFromPointer(ptr:number):QScriptClass;
	function NewQScriptClass(engine:QScriptEngine_ITF):QScriptClass;
	const QScriptClass__HandlesReadAccess: number;
	const QScriptClass__HandlesWriteAccess: number;
	const QScriptClass__Callable: number;
	const QScriptClass__HasInstance: number;
	interface QScriptClassPropertyIterator_ITF {
		QScriptClassPropertyIterator_PTR():QScriptClassPropertyIterator;
	}

	class QScriptClassPropertyIterator {
		___pointer: number;
		QScriptClassPropertyIterator_PTR():QScriptClassPropertyIterator;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QScriptContext_ITF {
		QScriptContext_PTR():QScriptContext;
	}

	class QScriptContext {
		___pointer: number;
		QScriptContext_PTR():QScriptContext;
		Pointer():number;
		SetPointer(p:number):void;
		ActivationObject():QScriptValue;
		Argument(index:number):QScriptValue;
		ArgumentCount():number;
		ArgumentsObject():QScriptValue;
		Backtrace():string[];
		Callee():QScriptValue;
		Engine():QScriptEngine;
		IsCalledAsConstructor():boolean;
		ParentContext():QScriptContext;
		SetActivationObject(activation:QScriptValue_ITF):void;
		SetThisObject(thisObject:QScriptValue_ITF):void;
		State():number;
		ThisObject():QScriptValue;
		ThrowError(error:number,text:string):QScriptValue;
		ThrowError2(text:string):QScriptValue;
		ThrowValue(value:QScriptValue_ITF):QScriptValue;
		ToString():string;
		DestroyQScriptContext():void;
	}
	function NewQScriptContextFromPointer(ptr:number):QScriptContext;
	const QScriptContext__NormalState: number;
	const QScriptContext__ExceptionState: number;
	const QScriptContext__UnknownError: number;
	const QScriptContext__ReferenceError: number;
	const QScriptContext__SyntaxError: number;
	const QScriptContext__TypeError: number;
	const QScriptContext__RangeError: number;
	const QScriptContext__URIError: number;
	interface QScriptContextInfo_ITF {
		QScriptContextInfo_PTR():QScriptContextInfo;
	}

	class QScriptContextInfo {
		___pointer: number;
		QScriptContextInfo_PTR():QScriptContextInfo;
		Pointer():number;
		SetPointer(p:number):void;
		FileName():string;
		FunctionEndLineNumber():number;
		FunctionMetaIndex():number;
		FunctionName():string;
		FunctionParameterNames():string[];
		FunctionStartLineNumber():number;
		FunctionType():number;
		IsNull():boolean;
		LineNumber():number;
		ScriptId():number;
		DestroyQScriptContextInfo():void;
	}
	function NewQScriptContextInfoFromPointer(ptr:number):QScriptContextInfo;
	function NewQScriptContextInfo(context:QScriptContext_ITF):QScriptContextInfo;
	function NewQScriptContextInfo2(other:QScriptContextInfo_ITF):QScriptContextInfo;
	function NewQScriptContextInfo3():QScriptContextInfo;
	const QScriptContextInfo__ScriptFunction: number;
	const QScriptContextInfo__QtFunction: number;
	const QScriptContextInfo__QtPropertyFunction: number;
	const QScriptContextInfo__NativeFunction: number;
	interface QScriptEngine_ITF extends core.QObject_ITF {
		QScriptEngine_PTR():QScriptEngine;
	}

	class QScriptEngine extends core.QObject {
		___pointer: number;
		QScriptEngine_PTR():QScriptEngine;
		Pointer():number;
		SetPointer(p:number):void;
		AbortEvaluation(result:QScriptValue_ITF):void;
		Agent():QScriptEngineAgent;
		AvailableExtensions():string[];
		CheckSyntax(program:string):QScriptSyntaxCheckResult;
		ClearExceptions():void;
		CollectGarbage():void;
		CurrentContext():QScriptContext;
		DefaultPrototype(metaTypeId:number):QScriptValue;
		Evaluate(program:string,fileName:string,lineNumber:number):QScriptValue;
		Evaluate2(program:QScriptProgram_ITF):QScriptValue;
		GlobalObject():QScriptValue;
		HasUncaughtException():boolean;
		ImportExtension(extensi:string):QScriptValue;
		ImportedExtensions():string[];
		InstallTranslatorFunctions(object:QScriptValue_ITF):void;
		IsEvaluating():boolean;
		NewArray(length:number):QScriptValue;
		NewDate2(value:core.QDateTime_ITF):QScriptValue;
		NewObject():QScriptValue;
		NewObject2(scriptClass:QScriptClass_ITF,data:QScriptValue_ITF):QScriptValue;
		NewQMetaObject(metaObject:core.QMetaObject_ITF,ctor:QScriptValue_ITF):QScriptValue;
		NewQObject(object:core.QObject_ITF,ownership:number,options:number):QScriptValue;
		NewQObject2(scriptObject:QScriptValue_ITF,qtObject:core.QObject_ITF,ownership:number,options:number):QScriptValue;
		NewRegExp(regexp:core.QRegExp_ITF):QScriptValue;
		NewRegExp2(pattern:string,flags:string):QScriptValue;
		NewVariant(value:core.QVariant_ITF):QScriptValue;
		NewVariant2(object:QScriptValue_ITF,value:core.QVariant_ITF):QScriptValue;
		NullValue():QScriptValue;
		PopContext():void;
		ProcessEventsInterval():number;
		PushContext():QScriptContext;
		ReportAdditionalMemoryCost(size:number):void;
		SetAgent(agent:QScriptEngineAgent_ITF):void;
		SetDefaultPrototype(metaTypeId:number,prototype:QScriptValue_ITF):void;
		SetGlobalObject(object:QScriptValue_ITF):void;
		SetProcessEventsInterval(interval:number):void;
		ConnectSignalHandlerException(f:(exception:QScriptValue)=>void):void;
		DisconnectSignalHandlerException():void;
		SignalHandlerException(exception:QScriptValue_ITF):void;
		ToObject(value:QScriptValue_ITF):QScriptValue;
		ToStringHandle(str:string):QScriptString;
		UncaughtException():QScriptValue;
		UncaughtExceptionBacktrace():string[];
		UncaughtExceptionLineNumber():number;
		UndefinedValue():QScriptValue;
		ConnectDestroyQScriptEngine(f:()=>void):void;
		DisconnectDestroyQScriptEngine():void;
		DestroyQScriptEngine():void;
		DestroyQScriptEngineDefault():void;
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
	function NewQScriptEngineFromPointer(ptr:number):QScriptEngine;
	function NewQScriptEngine():QScriptEngine;
	function NewQScriptEngine2(parent:core.QObject_ITF):QScriptEngine;
	function QScriptEngine_CheckSyntax(program:string):QScriptSyntaxCheckResult;
	const QScriptEngine__QtOwnership: number;
	const QScriptEngine__ScriptOwnership: number;
	const QScriptEngine__AutoOwnership: number;
	const QScriptEngine__ExcludeChildObjects: number;
	const QScriptEngine__ExcludeSuperClassMethods: number;
	const QScriptEngine__ExcludeSuperClassProperties: number;
	const QScriptEngine__ExcludeSuperClassContents: number;
	const QScriptEngine__SkipMethodsInEnumeration: number;
	const QScriptEngine__ExcludeDeleteLater: number;
	const QScriptEngine__ExcludeSlots: number;
	const QScriptEngine__AutoCreateDynamicProperties: number;
	const QScriptEngine__PreferExistingWrapperObject: number;
	interface QScriptEngineAgent_ITF {
		QScriptEngineAgent_PTR():QScriptEngineAgent;
	}

	class QScriptEngineAgent {
		___pointer: number;
		QScriptEngineAgent_PTR():QScriptEngineAgent;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectContextPop(f:()=>void):void;
		DisconnectContextPop():void;
		ContextPop():void;
		ContextPopDefault():void;
		ConnectContextPush(f:()=>void):void;
		DisconnectContextPush():void;
		ContextPush():void;
		ContextPushDefault():void;
		Engine():QScriptEngine;
		ConnectExceptionCatch(f:(scriptId:number,exception:QScriptValue)=>void):void;
		DisconnectExceptionCatch():void;
		ExceptionCatch(scriptId:number,exception:QScriptValue_ITF):void;
		ExceptionCatchDefault(scriptId:number,exception:QScriptValue_ITF):void;
		ConnectExceptionThrow(f:(scriptId:number,exception:QScriptValue,hasHandler:boolean)=>void):void;
		DisconnectExceptionThrow():void;
		ExceptionThrow(scriptId:number,exception:QScriptValue_ITF,hasHandler:boolean):void;
		ExceptionThrowDefault(scriptId:number,exception:QScriptValue_ITF,hasHandler:boolean):void;
		ConnectExtension(f:(extensi:number,argument:core.QVariant)=>core.QVariant):void;
		DisconnectExtension():void;
		Extension(extensi:number,argument:core.QVariant_ITF):core.QVariant;
		ExtensionDefault(extensi:number,argument:core.QVariant_ITF):core.QVariant;
		ConnectFunctionEntry(f:(scriptId:number)=>void):void;
		DisconnectFunctionEntry():void;
		FunctionEntry(scriptId:number):void;
		FunctionEntryDefault(scriptId:number):void;
		ConnectFunctionExit(f:(scriptId:number,returnValue:QScriptValue)=>void):void;
		DisconnectFunctionExit():void;
		FunctionExit(scriptId:number,returnValue:QScriptValue_ITF):void;
		FunctionExitDefault(scriptId:number,returnValue:QScriptValue_ITF):void;
		ConnectPositionChange(f:(scriptId:number,lineNumber:number,columnNumber:number)=>void):void;
		DisconnectPositionChange():void;
		PositionChange(scriptId:number,lineNumber:number,columnNumber:number):void;
		PositionChangeDefault(scriptId:number,lineNumber:number,columnNumber:number):void;
		ConnectScriptLoad(f:(id:number,program:string,fileName:string,baseLineNumber:number)=>void):void;
		DisconnectScriptLoad():void;
		ScriptLoad(id:number,program:string,fileName:string,baseLineNumber:number):void;
		ScriptLoadDefault(id:number,program:string,fileName:string,baseLineNumber:number):void;
		ConnectScriptUnload(f:(id:number)=>void):void;
		DisconnectScriptUnload():void;
		ScriptUnload(id:number):void;
		ScriptUnloadDefault(id:number):void;
		ConnectSupportsExtension(f:(extensi:number)=>boolean):void;
		DisconnectSupportsExtension():void;
		SupportsExtension(extensi:number):boolean;
		SupportsExtensionDefault(extensi:number):boolean;
		ConnectDestroyQScriptEngineAgent(f:()=>void):void;
		DisconnectDestroyQScriptEngineAgent():void;
		DestroyQScriptEngineAgent():void;
		DestroyQScriptEngineAgentDefault():void;
	}
	function NewQScriptEngineAgentFromPointer(ptr:number):QScriptEngineAgent;
	function NewQScriptEngineAgent(engine:QScriptEngine_ITF):QScriptEngineAgent;
	const QScriptEngineAgent__DebuggerInvocationRequest: number;
	interface QScriptExtensionInterface_ITF {
		QScriptExtensionInterface_PTR():QScriptExtensionInterface;
	}

	class QScriptExtensionInterface {
		___pointer: number;
		QScriptExtensionInterface_PTR():QScriptExtensionInterface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQScriptExtensionInterface():void;
	}
	function NewQScriptExtensionInterfaceFromPointer(ptr:number):QScriptExtensionInterface;
	interface QScriptExtensionPlugin_ITF extends QScriptExtensionInterface_ITF {
		QScriptExtensionPlugin_PTR():QScriptExtensionPlugin;
		QObject_PTR():core.QObject;
	}

	class QScriptExtensionPlugin extends QScriptExtensionInterface {
		QObject_PTR():core.QObject
		___pointer: number;
		QScriptExtensionPlugin_PTR():QScriptExtensionPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectInitialize(f:(key:string,engine:QScriptEngine)=>void):void;
		DisconnectInitialize():void;
		Initialize(key:string,engine:QScriptEngine_ITF):void;
		ConnectKeys(f:()=>string[]):void;
		DisconnectKeys():void;
		Keys():string[];
		SetupPackage(key:string,engine:QScriptEngine_ITF):QScriptValue;
		ConnectDestroyQScriptExtensionPlugin(f:()=>void):void;
		DisconnectDestroyQScriptExtensionPlugin():void;
		DestroyQScriptExtensionPlugin():void;
		DestroyQScriptExtensionPluginDefault():void;
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
	function NewQScriptExtensionPluginFromPointer(ptr:number):QScriptExtensionPlugin;
	function NewQScriptExtensionPlugin(parent:core.QObject_ITF):QScriptExtensionPlugin;
	interface QScriptProgram_ITF {
		QScriptProgram_PTR():QScriptProgram;
	}

	class QScriptProgram {
		___pointer: number;
		QScriptProgram_PTR():QScriptProgram;
		Pointer():number;
		SetPointer(p:number):void;
		FileName():string;
		FirstLineNumber():number;
		IsNull():boolean;
		SourceCode():string;
		DestroyQScriptProgram():void;
	}
	function NewQScriptProgramFromPointer(ptr:number):QScriptProgram;
	function NewQScriptProgram():QScriptProgram;
	function NewQScriptProgram2(sourceCode:string,fileName:string,firstLineNumber:number):QScriptProgram;
	function NewQScriptProgram3(other:QScriptProgram_ITF):QScriptProgram;
	interface QScriptString_ITF {
		QScriptString_PTR():QScriptString;
	}

	class QScriptString {
		___pointer: number;
		QScriptString_PTR():QScriptString;
		Pointer():number;
		SetPointer(p:number):void;
		IsValid():boolean;
		ToArrayIndex(ok:boolean):number;
		ToString():string;
		DestroyQScriptString():void;
	}
	function NewQScriptStringFromPointer(ptr:number):QScriptString;
	function NewQScriptString():QScriptString;
	function NewQScriptString2(other:QScriptString_ITF):QScriptString;
	interface QScriptSyntaxCheckResult_ITF {
		QScriptSyntaxCheckResult_PTR():QScriptSyntaxCheckResult;
	}

	class QScriptSyntaxCheckResult {
		___pointer: number;
		QScriptSyntaxCheckResult_PTR():QScriptSyntaxCheckResult;
		Pointer():number;
		SetPointer(p:number):void;
		ErrorColumnNumber():number;
		ErrorLineNumber():number;
		ErrorMessage():string;
		State():number;
		DestroyQScriptSyntaxCheckResult():void;
	}
	function NewQScriptSyntaxCheckResultFromPointer(ptr:number):QScriptSyntaxCheckResult;
	function NewQScriptSyntaxCheckResult(other:QScriptSyntaxCheckResult_ITF):QScriptSyntaxCheckResult;
	const QScriptSyntaxCheckResult__Error: number;
	const QScriptSyntaxCheckResult__Intermediate: number;
	const QScriptSyntaxCheckResult__Valid: number;
	interface QScriptValue_ITF {
		QScriptValue_PTR():QScriptValue;
	}

	class QScriptValue {
		___pointer: number;
		QScriptValue_PTR():QScriptValue;
		Pointer():number;
		SetPointer(p:number):void;
		Call2(thisObject:QScriptValue_ITF,arguments:QScriptValue_ITF):QScriptValue;
		Construct2(arguments:QScriptValue_ITF):QScriptValue;
		Data():QScriptValue;
		Engine():QScriptEngine;
		Equals(other:QScriptValue_ITF):boolean;
		InstanceOf(other:QScriptValue_ITF):boolean;
		IsArray():boolean;
		IsBool():boolean;
		IsDate():boolean;
		IsError():boolean;
		IsFunction():boolean;
		IsNull():boolean;
		IsNumber():boolean;
		IsObject():boolean;
		IsQMetaObject():boolean;
		IsQObject():boolean;
		IsRegExp():boolean;
		IsString():boolean;
		IsUndefined():boolean;
		IsValid():boolean;
		IsVariant():boolean;
		LessThan(other:QScriptValue_ITF):boolean;
		Property(name:string,mode:number):QScriptValue;
		Property2(arrayIndex:number,mode:number):QScriptValue;
		Property3(name:QScriptString_ITF,mode:number):QScriptValue;
		PropertyFlags(name:string,mode:number):number;
		PropertyFlags2(name:QScriptString_ITF,mode:number):number;
		Prototype():QScriptValue;
		ScriptClass():QScriptClass;
		SetData(data:QScriptValue_ITF):void;
		SetProperty(name:string,value:QScriptValue_ITF,flags:number):void;
		SetProperty2(arrayIndex:number,value:QScriptValue_ITF,flags:number):void;
		SetProperty3(name:QScriptString_ITF,value:QScriptValue_ITF,flags:number):void;
		SetPrototype(prototype:QScriptValue_ITF):void;
		SetScriptClass(scriptClass:QScriptClass_ITF):void;
		StrictlyEquals(other:QScriptValue_ITF):boolean;
		ToBool():boolean;
		ToDateTime():core.QDateTime;
		ToInt32():number;
		ToQMetaObject():core.QMetaObject;
		ToQObject():core.QObject;
		ToRegExp():core.QRegExp;
		ToString():string;
		ToUInt16():number;
		ToUInt32():number;
		ToVariant():core.QVariant;
		DestroyQScriptValue():void;
	}
	function NewQScriptValueFromPointer(ptr:number):QScriptValue;
	function NewQScriptValue():QScriptValue;
	function NewQScriptValue2(other:QScriptValue_ITF):QScriptValue;
	function NewQScriptValue10(value:number):QScriptValue;
	function NewQScriptValue11(value:boolean):QScriptValue;
	function NewQScriptValue12(value:number):QScriptValue;
	function NewQScriptValue13(value:number):QScriptValue;
	function NewQScriptValue15(value:string):QScriptValue;
	function NewQScriptValue16(value:core.QLatin1String_ITF):QScriptValue;
	function NewQScriptValue17(value:string):QScriptValue;
	const QScriptValue__ResolveLocal: number;
	const QScriptValue__ResolvePrototype: number;
	const QScriptValue__ResolveScope: number;
	const QScriptValue__ResolveFull: number;
	const QScriptValue__NullValue: number;
	const QScriptValue__UndefinedValue: number;
	const QScriptValue__ReadOnly: number;
	const QScriptValue__Undeletable: number;
	const QScriptValue__SkipInEnumeration: number;
	const QScriptValue__PropertyGetter: number;
	const QScriptValue__PropertySetter: number;
	const QScriptValue__QObjectMember: number;
	const QScriptValue__KeepExistingFlags: number;
	const QScriptValue__UserRange: number;
	interface QScriptValueIterator_ITF {
		QScriptValueIterator_PTR():QScriptValueIterator;
	}

	class QScriptValueIterator {
		___pointer: number;
		QScriptValueIterator_PTR():QScriptValueIterator;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QScriptable_ITF {
		QScriptable_PTR():QScriptable;
	}

	class QScriptable {
		___pointer: number;
		QScriptable_PTR():QScriptable;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQScriptable():void;
		Argument(index:number):QScriptValue;
		ArgumentCount():number;
		Context():QScriptContext;
		Engine():QScriptEngine;
		ThisObject():QScriptValue;
	}
	function NewQScriptableFromPointer(ptr:number):QScriptable;
}