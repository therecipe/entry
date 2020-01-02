/// <reference path="core.d.ts" />
declare namespace androidextras {
	interface QAndroidActivityResultReceiver_ITF {
		QAndroidActivityResultReceiver_PTR():QAndroidActivityResultReceiver;
	}

	class QAndroidActivityResultReceiver {
		___pointer: number;
		QAndroidActivityResultReceiver_PTR():QAndroidActivityResultReceiver;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAndroidActivityResultReceiver():{};
		ConnectHandleActivityResult(f:(receiverRequestCode:number,resultCode:number,data:QAndroidJniObject)=>void):void;
		DisconnectHandleActivityResult():void;
		HandleActivityResult(receiverRequestCode:number,resultCode:number,data:QAndroidJniObject_ITF):void;
	}
	function NewQAndroidActivityResultReceiverFromPointer(ptr:number):QAndroidActivityResultReceiver;
	interface QAndroidBinder_ITF {
		QAndroidBinder_PTR():QAndroidBinder;
	}

	class QAndroidBinder {
		___pointer: number;
		QAndroidBinder_PTR():QAndroidBinder;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAndroidBinder():{};
		Handle():QAndroidJniObject;
		Transact(code:number,data:QAndroidParcel_ITF,reply:QAndroidParcel_ITF,flags:number):boolean;
	}
	function NewQAndroidBinderFromPointer(ptr:number):QAndroidBinder;
	function NewQAndroidBinder():QAndroidBinder;
	function NewQAndroidBinder2(binder:QAndroidJniObject_ITF):QAndroidBinder;
	const QAndroidBinder__Normal: number;
	const QAndroidBinder__OneWay: number;
	interface QAndroidIntent_ITF {
		QAndroidIntent_PTR():QAndroidIntent;
	}

	class QAndroidIntent {
		___pointer: number;
		QAndroidIntent_PTR():QAndroidIntent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAndroidIntent():{};
		ExtraBytes(key:string):core.QByteArray;
		ExtraVariant(key:string):core.QVariant;
		Handle():QAndroidJniObject;
		PutExtra(key:string,data:core.QByteArray_ITF):void;
		PutExtra2(key:string,value:core.QVariant_ITF):void;
	}
	function NewQAndroidIntentFromPointer(ptr:number):QAndroidIntent;
	function NewQAndroidIntent():QAndroidIntent;
	function NewQAndroidIntent2(intent:QAndroidJniObject_ITF):QAndroidIntent;
	function NewQAndroidIntent3(action:string):QAndroidIntent;
	function NewQAndroidIntent4(packageContext:QAndroidJniObject_ITF,className:string):QAndroidIntent;
	interface QAndroidJniEnvironment_ITF {
		QAndroidJniEnvironment_PTR():QAndroidJniEnvironment;
	}

	class QAndroidJniEnvironment {
		___pointer: number;
		QAndroidJniEnvironment_PTR():QAndroidJniEnvironment;
		Pointer():number;
		SetPointer(p:number):void;
		FindClass(className:string):number;
		JavaVM():number;
		DestroyQAndroidJniEnvironment():void;
		ExceptionCheck():boolean;
		ExceptionDescribe():void;
		ExceptionClear():void;
		ExceptionOccurred():number;
	}
	function NewQAndroidJniEnvironmentFromPointer(ptr:number):QAndroidJniEnvironment;
	function NewQAndroidJniEnvironment():QAndroidJniEnvironment;
	function QAndroidJniEnvironment_JavaVM():number;
	function QAndroidJniEnvironment_ExceptionCheck():boolean;
	function QAndroidJniEnvironment_ExceptionDescribe():void;
	function QAndroidJniEnvironment_ExceptionClear():void;
	function QAndroidJniEnvironment_ExceptionOccurred():number;
	interface QAndroidJniExceptionCleaner_ITF {
		QAndroidJniExceptionCleaner_PTR():QAndroidJniExceptionCleaner;
	}

	class QAndroidJniExceptionCleaner {
		___pointer: number;
		QAndroidJniExceptionCleaner_PTR():QAndroidJniExceptionCleaner;
		Pointer():number;
		SetPointer(p:number):void;
		Clean():void;
		DestroyQAndroidJniExceptionCleaner():void;
	}
	function NewQAndroidJniExceptionCleanerFromPointer(ptr:number):QAndroidJniExceptionCleaner;
	function NewQAndroidJniExceptionCleaner(outputMode:number):QAndroidJniExceptionCleaner;
	const QAndroidJniExceptionCleaner__Silent: number;
	const QAndroidJniExceptionCleaner__Verbose: number;
	interface QAndroidJniObject_ITF {
		QAndroidJniObject_PTR():QAndroidJniObject;
	}

	class QAndroidJniObject {
		___pointer: number;
		QAndroidJniObject_PTR():QAndroidJniObject;
		Pointer():number;
		SetPointer(p:number):void;
		CallMethodInt(methodName:string):number;
		CallMethodIntCaught(methodName:string):[number,string];
		CallMethodBoolean(methodName:string):boolean;
		CallMethodBooleanCaught(methodName:string):[boolean,string];
		CallMethodVoid(methodName:string):void;
		CallMethodVoidCaught(methodName:string):string;
		CallMethodInt2(methodName:string,sig:string,v:any[]):number;
		CallMethodInt2Caught(methodName:string,sig:string,v:any[]):[number,string];
		CallMethodBoolean2(methodName:string,sig:string,v:any[]):boolean;
		CallMethodBoolean2Caught(methodName:string,sig:string,v:any[]):[boolean,string];
		CallMethodVoid2(methodName:string,sig:string,v:any[]):void;
		CallMethodVoid2Caught(methodName:string,sig:string,v:any[]):string;
		CallObjectMethod(methodName:string):QAndroidJniObject;
		CallObjectMethodCaught(methodName:string):[QAndroidJniObject,string];
		CallMethodString(methodName:string):string;
		CallMethodStringCaught(methodName:string):[string,string];
		CallObjectMethod2(methodName:string,signature:string,v:any[]):QAndroidJniObject;
		CallObjectMethod2Caught(methodName:string,signature:string,v:any[]):[QAndroidJniObject,string];
		CallMethodString2(methodName:string,signature:string,v:any[]):string;
		CallMethodString2Caught(methodName:string,signature:string,v:any[]):[string,string];
		FromLocalRef(localRef:number):QAndroidJniObject;
		FromString(stri:string):QAndroidJniObject;
		GetFieldInt(fieldName:string):number;
		GetFieldIntCaught(fieldName:string):[number,string];
		GetFieldBoolean(fieldName:string):boolean;
		GetFieldBooleanCaught(fieldName:string):[boolean,string];
		GetObjectField(fieldName:string):QAndroidJniObject;
		GetObjectFieldCaught(fieldName:string):[QAndroidJniObject,string];
		GetFieldString(fieldName:string):string;
		GetFieldStringCaught(fieldName:string):[string,string];
		GetObjectField2(fieldName:string,signature:string):QAndroidJniObject;
		GetObjectField2Caught(fieldName:string,signature:string):[QAndroidJniObject,string];
		GetFieldString2(fieldName:string,signature:string):string;
		GetFieldString2Caught(fieldName:string,signature:string):[string,string];
		IsClassAvailable(className:string):boolean;
		IsValid():boolean;
		Object():number;
		SetField(fieldName:string,value:any):void;
		SetField2(fieldName:string,signature:string,value:any):void;
		SetStaticField(className:string,fieldName:string,signature:string,value:any):void;
		SetStaticField3(clazz:number,fieldName:string,signature:string,value:any):void;
		ToString():string;
		DestroyQAndroidJniObject():void;
	}
	function NewQAndroidJniObjectFromPointer(ptr:number):QAndroidJniObject;
	function NewQAndroidJniObject():QAndroidJniObject;
	function NewQAndroidJniObject2(className:string):QAndroidJniObject;
	function NewQAndroidJniObject3(className:string,signature:string,v:any[]):QAndroidJniObject;
	function NewQAndroidJniObject4(clazz:number):QAndroidJniObject;
	function NewQAndroidJniObject5(clazz:number,signature:string,v:any[]):QAndroidJniObject;
	function NewQAndroidJniObject6(object:number):QAndroidJniObject;
	function QAndroidJniObject_CallStaticMethodInt(className:string,methodName:string):number;
	function QAndroidJniObject_CallStaticMethodIntCaught(className:string,methodName:string):[number,string];
	function QAndroidJniObject_CallStaticMethodBoolean(className:string,methodName:string):boolean;
	function QAndroidJniObject_CallStaticMethodBooleanCaught(className:string,methodName:string):[boolean,string];
	function QAndroidJniObject_CallStaticMethodVoid(className:string,methodName:string):void;
	function QAndroidJniObject_CallStaticMethodVoidCaught(className:string,methodName:string):string;
	function QAndroidJniObject_CallStaticMethodInt2(className:string,methodName:string,signature:string,v:any[]):number;
	function QAndroidJniObject_CallStaticMethodInt2Caught(className:string,methodName:string,signature:string,v:any[]):[number,string];
	function QAndroidJniObject_CallStaticMethodBoolean2(className:string,methodName:string,signature:string,v:any[]):boolean;
	function QAndroidJniObject_CallStaticMethodBoolean2Caught(className:string,methodName:string,signature:string,v:any[]):[boolean,string];
	function QAndroidJniObject_CallStaticMethodVoid2(className:string,methodName:string,signature:string,v:any[]):void;
	function QAndroidJniObject_CallStaticMethodVoid2Caught(className:string,methodName:string,signature:string,v:any[]):string;
	function QAndroidJniObject_CallStaticMethodInt3(clazz:number,methodName:string):number;
	function QAndroidJniObject_CallStaticMethodInt3Caught(clazz:number,methodName:string):[number,string];
	function QAndroidJniObject_CallStaticMethodBoolean3(clazz:number,methodName:string):boolean;
	function QAndroidJniObject_CallStaticMethodBoolean3Caught(clazz:number,methodName:string):[boolean,string];
	function QAndroidJniObject_CallStaticMethodVoid3(clazz:number,methodName:string):void;
	function QAndroidJniObject_CallStaticMethodVoid3Caught(clazz:number,methodName:string):string;
	function QAndroidJniObject_CallStaticMethodInt4(clazz:number,methodName:string,signature:string,v:any[]):number;
	function QAndroidJniObject_CallStaticMethodInt4Caught(clazz:number,methodName:string,signature:string,v:any[]):[number,string];
	function QAndroidJniObject_CallStaticMethodBoolean4(clazz:number,methodName:string,signature:string,v:any[]):boolean;
	function QAndroidJniObject_CallStaticMethodBoolean4Caught(clazz:number,methodName:string,signature:string,v:any[]):[boolean,string];
	function QAndroidJniObject_CallStaticMethodVoid4(clazz:number,methodName:string,signature:string,v:any[]):void;
	function QAndroidJniObject_CallStaticMethodVoid4Caught(clazz:number,methodName:string,signature:string,v:any[]):string;
	function QAndroidJniObject_CallStaticObjectMethod(className:string,methodName:string):QAndroidJniObject;
	function QAndroidJniObject_CallStaticObjectMethodCaught(className:string,methodName:string):[QAndroidJniObject,string];
	function QAndroidJniObject_CallStaticMethodString(className:string,methodName:string):string;
	function QAndroidJniObject_CallStaticMethodStringCaught(className:string,methodName:string):[string,string];
	function QAndroidJniObject_CallStaticObjectMethod2(className:string,methodName:string,signature:string,v:any[]):QAndroidJniObject;
	function QAndroidJniObject_CallStaticObjectMethod2Caught(className:string,methodName:string,signature:string,v:any[]):[QAndroidJniObject,string];
	function QAndroidJniObject_CallStaticMethodString2(className:string,methodName:string,signature:string,v:any[]):string;
	function QAndroidJniObject_CallStaticMethodString2Caught(className:string,methodName:string,signature:string,v:any[]):[string,string];
	function QAndroidJniObject_CallStaticObjectMethod3(clazz:number,methodName:string):QAndroidJniObject;
	function QAndroidJniObject_CallStaticObjectMethod3Caught(clazz:number,methodName:string):[QAndroidJniObject,string];
	function QAndroidJniObject_CallStaticMethodString3(clazz:number,methodName:string):string;
	function QAndroidJniObject_CallStaticMethodString3Caught(clazz:number,methodName:string):[string,string];
	function QAndroidJniObject_CallStaticObjectMethod4(clazz:number,methodName:string,signature:string,v:any[]):QAndroidJniObject;
	function QAndroidJniObject_CallStaticObjectMethod4Caught(clazz:number,methodName:string,signature:string,v:any[]):[QAndroidJniObject,string];
	function QAndroidJniObject_CallStaticMethodString4(clazz:number,methodName:string,signature:string,v:any[]):string;
	function QAndroidJniObject_CallStaticMethodString4Caught(clazz:number,methodName:string,signature:string,v:any[]):[string,string];
	function QAndroidJniObject_FromLocalRef(localRef:number):QAndroidJniObject;
	function QAndroidJniObject_FromString(stri:string):QAndroidJniObject;
	function QAndroidJniObject_GetStaticFieldInt(className:string,fieldName:string):number;
	function QAndroidJniObject_GetStaticFieldIntCaught(className:string,fieldName:string):[number,string];
	function QAndroidJniObject_GetStaticFieldBoolean(className:string,fieldName:string):boolean;
	function QAndroidJniObject_GetStaticFieldBooleanCaught(className:string,fieldName:string):[boolean,string];
	function QAndroidJniObject_GetStaticFieldInt2(clazz:number,fieldName:string):number;
	function QAndroidJniObject_GetStaticFieldInt2Caught(clazz:number,fieldName:string):[number,string];
	function QAndroidJniObject_GetStaticFieldBoolean2(clazz:number,fieldName:string):boolean;
	function QAndroidJniObject_GetStaticFieldBoolean2Caught(clazz:number,fieldName:string):[boolean,string];
	function QAndroidJniObject_GetStaticObjectField(className:string,fieldName:string):QAndroidJniObject;
	function QAndroidJniObject_GetStaticObjectFieldCaught(className:string,fieldName:string):[QAndroidJniObject,string];
	function QAndroidJniObject_GetStaticFieldString(className:string,fieldName:string):string;
	function QAndroidJniObject_GetStaticFieldStringCaught(className:string,fieldName:string):[string,string];
	function QAndroidJniObject_GetStaticObjectField2(className:string,fieldName:string,signature:string):QAndroidJniObject;
	function QAndroidJniObject_GetStaticObjectField2Caught(className:string,fieldName:string,signature:string):[QAndroidJniObject,string];
	function QAndroidJniObject_GetStaticFieldString2(className:string,fieldName:string,signature:string):string;
	function QAndroidJniObject_GetStaticFieldString2Caught(className:string,fieldName:string,signature:string):[string,string];
	function QAndroidJniObject_GetStaticObjectField3(clazz:number,fieldName:string):QAndroidJniObject;
	function QAndroidJniObject_GetStaticObjectField3Caught(clazz:number,fieldName:string):[QAndroidJniObject,string];
	function QAndroidJniObject_GetStaticFieldString3(clazz:number,fieldName:string):string;
	function QAndroidJniObject_GetStaticFieldString3Caught(clazz:number,fieldName:string):[string,string];
	function QAndroidJniObject_GetStaticObjectField4(clazz:number,fieldName:string,signature:string):QAndroidJniObject;
	function QAndroidJniObject_GetStaticObjectField4Caught(clazz:number,fieldName:string,signature:string):[QAndroidJniObject,string];
	function QAndroidJniObject_GetStaticFieldString4(clazz:number,fieldName:string,signature:string):string;
	function QAndroidJniObject_GetStaticFieldString4Caught(clazz:number,fieldName:string,signature:string):[string,string];
	function QAndroidJniObject_IsClassAvailable(className:string):boolean;
	function QAndroidJniObject_SetStaticField(className:string,fieldName:string,signature:string,value:any):void;
	function QAndroidJniObject_SetStaticFieldInt2(className:string,fieldName:string,value:number):void;
	function QAndroidJniObject_SetStaticFieldInt2Caught(className:string,fieldName:string,value:number):string;
	function QAndroidJniObject_SetStaticFieldBoolean2(className:string,fieldName:string,value:boolean):void;
	function QAndroidJniObject_SetStaticFieldBoolean2Caught(className:string,fieldName:string,value:boolean):string;
	function QAndroidJniObject_SetStaticField3(clazz:number,fieldName:string,signature:string,value:any):void;
	function QAndroidJniObject_SetStaticFieldInt4(clazz:number,fieldName:string,value:number):void;
	function QAndroidJniObject_SetStaticFieldInt4Caught(clazz:number,fieldName:string,value:number):string;
	function QAndroidJniObject_SetStaticFieldBoolean4(clazz:number,fieldName:string,value:boolean):void;
	function QAndroidJniObject_SetStaticFieldBoolean4Caught(clazz:number,fieldName:string,value:boolean):string;
	interface QAndroidParcel_ITF {
		QAndroidParcel_PTR():QAndroidParcel;
	}

	class QAndroidParcel {
		___pointer: number;
		QAndroidParcel_PTR():QAndroidParcel;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAndroidParcel():{};
		Handle():QAndroidJniObject;
		ReadBinder():QAndroidBinder;
		ReadData():core.QByteArray;
		ReadFileDescriptor():number;
		ReadVariant():core.QVariant;
		WriteBinder(binder:QAndroidBinder_ITF):void;
		WriteData(data:core.QByteArray_ITF):void;
		WriteFileDescriptor(fd:number):void;
		WriteVariant(value:core.QVariant_ITF):void;
	}
	function NewQAndroidParcelFromPointer(ptr:number):QAndroidParcel;
	function NewQAndroidParcel():QAndroidParcel;
	function NewQAndroidParcel2(parcel:QAndroidJniObject_ITF):QAndroidParcel;
	interface QAndroidService_ITF extends core.QCoreApplication_ITF {
		QAndroidService_PTR():QAndroidService;
	}

	class QAndroidService extends core.QCoreApplication {
		___pointer: number;
		QAndroidService_PTR():QAndroidService;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAndroidService():{};
		ConnectOnBind(f:(intent:QAndroidIntent)=>QAndroidBinder):void;
		DisconnectOnBind():void;
		OnBind(intent:QAndroidIntent_ITF):QAndroidBinder;
		OnBindDefault(intent:QAndroidIntent_ITF):QAndroidBinder;
		EventDefault(e:core.QEvent_ITF):boolean;
		QuitDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQAndroidServiceFromPointer(ptr:number):QAndroidService;
	function NewQAndroidService(argc:number,argv:string[]):QAndroidService;
	function NewQAndroidServiceConnection():QAndroidServiceConnection;
	function NewQAndroidServiceConnection2(serviceConnection:QAndroidJniObject_ITF):QAndroidServiceConnection;
	interface QAndroidServiceConnection_ITF {
		QAndroidServiceConnection_PTR():QAndroidServiceConnection;
	}

	class QAndroidServiceConnection {
		___pointer: number;
		QAndroidServiceConnection_PTR():QAndroidServiceConnection;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAndroidServiceConnection():{};
		Handle():QAndroidJniObject;
		ConnectOnServiceConnected(f:(name:string,serviceBinder:QAndroidBinder)=>void):void;
		DisconnectOnServiceConnected():void;
		OnServiceConnected(name:string,serviceBinder:QAndroidBinder_ITF):void;
		ConnectOnServiceDisconnected(f:(name:string)=>void):void;
		DisconnectOnServiceDisconnected():void;
		OnServiceDisconnected(name:string):void;
	}
	function NewQAndroidServiceConnectionFromPointer(ptr:number):QAndroidServiceConnection;
	function NewQAndroidServiceConnection():QAndroidServiceConnection;
	function NewQAndroidServiceConnection2(serviceConnection:QAndroidJniObject_ITF):QAndroidServiceConnection;
	interface QtAndroid_ITF {
		QtAndroid_PTR():QtAndroid;
	}

	class QtAndroid {
		___pointer: number;
		QtAndroid_PTR():QtAndroid;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQtAndroid():{};
		AndroidActivity():QAndroidJniObject;
		AndroidContext():QAndroidJniObject;
		AndroidSdkVersion():number;
		AndroidService():QAndroidJniObject;
		BindService(serviceIntent:QAndroidIntent_ITF,serviceConnection:QAndroidServiceConnection_ITF,flags:number):boolean;
		HideSplashScreen():void;
		HideSplashScreen2(duration:number):void;
		ShouldShowRequestPermissionRationale(permission:string):boolean;
		StartActivity(intent:QAndroidJniObject_ITF,receiverRequestCode:number,resultReceiver:QAndroidActivityResultReceiver_ITF):void;
		StartActivity2(intent:QAndroidIntent_ITF,receiverRequestCode:number,resultReceiver:QAndroidActivityResultReceiver_ITF):void;
		StartIntentSender(intentSender:QAndroidJniObject_ITF,receiverRequestCode:number,resultReceiver:QAndroidActivityResultReceiver_ITF):void;
	}
	function NewQtAndroidFromPointer(ptr:number):QtAndroid;
	function QtAndroid_AndroidActivity():QAndroidJniObject;
	function QtAndroid_AndroidContext():QAndroidJniObject;
	function QtAndroid_AndroidSdkVersion():number;
	function QtAndroid_AndroidService():QAndroidJniObject;
	function QtAndroid_BindService(serviceIntent:QAndroidIntent_ITF,serviceConnection:QAndroidServiceConnection_ITF,flags:number):boolean;
	function QtAndroid_HideSplashScreen():void;
	function QtAndroid_HideSplashScreen2(duration:number):void;
	function QtAndroid_ShouldShowRequestPermissionRationale(permission:string):boolean;
	function QtAndroid_StartActivity(intent:QAndroidJniObject_ITF,receiverRequestCode:number,resultReceiver:QAndroidActivityResultReceiver_ITF):void;
	function QtAndroid_StartActivity2(intent:QAndroidIntent_ITF,receiverRequestCode:number,resultReceiver:QAndroidActivityResultReceiver_ITF):void;
	function QtAndroid_StartIntentSender(intentSender:QAndroidJniObject_ITF,receiverRequestCode:number,resultReceiver:QAndroidActivityResultReceiver_ITF):void;
	const QtAndroid__None: number;
	const QtAndroid__AutoCreate: number;
	const QtAndroid__DebugUnbind: number;
	const QtAndroid__NotForeground: number;
	const QtAndroid__AboveClient: number;
	const QtAndroid__AllowOomManagement: number;
	const QtAndroid__WaivePriority: number;
	const QtAndroid__Important: number;
	const QtAndroid__AdjustWithActivity: number;
	const QtAndroid__ExternalService: number;
	const QtAndroid__Granted: number;
	const QtAndroid__Denied: number;
}