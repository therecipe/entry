/// <reference path="core.d.ts" />
/// <reference path="widgets.d.ts" />
declare namespace uitools {
	interface QUiLoader_ITF extends core.QObject_ITF {
		QUiLoader_PTR():QUiLoader;
	}

	class QUiLoader extends core.QObject {
		___pointer: number;
		QUiLoader_PTR():QUiLoader;
		Pointer():number;
		SetPointer(p:number):void;
		AddPluginPath(path:string):void;
		AvailableLayouts():string[];
		AvailableWidgets():string[];
		ClearPluginPaths():void;
		ConnectCreateAction(f:(parent:core.QObject,name:string)=>widgets.QAction):void;
		DisconnectCreateAction():void;
		CreateAction(parent:core.QObject_ITF,name:string):widgets.QAction;
		CreateActionDefault(parent:core.QObject_ITF,name:string):widgets.QAction;
		ConnectCreateActionGroup(f:(parent:core.QObject,name:string)=>widgets.QActionGroup):void;
		DisconnectCreateActionGroup():void;
		CreateActionGroup(parent:core.QObject_ITF,name:string):widgets.QActionGroup;
		CreateActionGroupDefault(parent:core.QObject_ITF,name:string):widgets.QActionGroup;
		ConnectCreateLayout(f:(className:string,parent:core.QObject,name:string)=>widgets.QLayout):void;
		DisconnectCreateLayout():void;
		CreateLayout(className:string,parent:core.QObject_ITF,name:string):widgets.QLayout;
		CreateLayoutDefault(className:string,parent:core.QObject_ITF,name:string):widgets.QLayout;
		ConnectCreateWidget(f:(className:string,parent:widgets.QWidget,name:string)=>widgets.QWidget):void;
		DisconnectCreateWidget():void;
		CreateWidget(className:string,parent:widgets.QWidget_ITF,name:string):widgets.QWidget;
		CreateWidgetDefault(className:string,parent:widgets.QWidget_ITF,name:string):widgets.QWidget;
		ErrorString():string;
		IsLanguageChangeEnabled():boolean;
		Load(device:core.QIODevice_ITF,parentWidget:widgets.QWidget_ITF):widgets.QWidget;
		PluginPaths():string[];
		SetLanguageChangeEnabled(enabled:boolean):void;
		SetWorkingDirectory(dir:core.QDir_ITF):void;
		WorkingDirectory():core.QDir;
		ConnectDestroyQUiLoader(f:()=>void):void;
		DisconnectDestroyQUiLoader():void;
		DestroyQUiLoader():void;
		DestroyQUiLoaderDefault():void;
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
	function NewQUiLoaderFromPointer(ptr:number):QUiLoader;
	function NewQUiLoader(parent:core.QObject_ITF):QUiLoader;
}