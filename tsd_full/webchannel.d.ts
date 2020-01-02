/// <reference path="core.d.ts" />
declare namespace webchannel {
	interface QQmlWebChannel_ITF extends QWebChannel_ITF {
		QQmlWebChannel_PTR():QQmlWebChannel;
	}

	class QQmlWebChannel extends QWebChannel {
		___pointer: number;
		QQmlWebChannel_PTR():QQmlWebChannel;
		Pointer():number;
		SetPointer(p:number):void;
	}
	function NewQQmlWebChannelFromPointer(ptr:number):QQmlWebChannel;
	interface QWebChannel_ITF extends core.QObject_ITF {
		QWebChannel_PTR():QWebChannel;
	}

	class QWebChannel extends core.QObject {
		___pointer: number;
		QWebChannel_PTR():QWebChannel;
		Pointer():number;
		SetPointer(p:number):void;
		BlockUpdates():boolean;
		ConnectBlockUpdatesChanged(f:(block:boolean)=>void):void;
		DisconnectBlockUpdatesChanged():void;
		BlockUpdatesChanged(block:boolean):void;
		ConnectConnectTo(f:(transport:QWebChannelAbstractTransport)=>void):void;
		DisconnectConnectTo():void;
		ConnectTo(transport:QWebChannelAbstractTransport_ITF):void;
		ConnectToDefault(transport:QWebChannelAbstractTransport_ITF):void;
		DeregisterObject(object:core.QObject_ITF):void;
		ConnectDisconnectFrom(f:(transport:QWebChannelAbstractTransport)=>void):void;
		DisconnectDisconnectFrom():void;
		DisconnectFrom(transport:QWebChannelAbstractTransport_ITF):void;
		DisconnectFromDefault(transport:QWebChannelAbstractTransport_ITF):void;
		RegisterObject(id:string,object:core.QObject_ITF):void;
		RegisterObjects(objects:Map<string,core.QObject>):void;
		RegisteredObjects():Map<string,core.QObject>;
		SetBlockUpdates(block:boolean):void;
		ConnectDestroyQWebChannel(f:()=>void):void;
		DisconnectDestroyQWebChannel():void;
		DestroyQWebChannel():void;
		DestroyQWebChannelDefault():void;
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
	function NewQWebChannelFromPointer(ptr:number):QWebChannel;
	function NewQWebChannel(parent:core.QObject_ITF):QWebChannel;
	function NewQWebChannelAbstractTransport(parent:core.QObject_ITF):QWebChannelAbstractTransport;
	interface QWebChannelAbstractTransport_ITF extends core.QObject_ITF {
		QWebChannelAbstractTransport_PTR():QWebChannelAbstractTransport;
	}

	class QWebChannelAbstractTransport extends core.QObject {
		___pointer: number;
		QWebChannelAbstractTransport_PTR():QWebChannelAbstractTransport;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectMessageReceived(f:(message:core.QJsonObject,transport:QWebChannelAbstractTransport)=>void):void;
		DisconnectMessageReceived():void;
		MessageReceived(message:core.QJsonObject_ITF,transport:QWebChannelAbstractTransport_ITF):void;
		ConnectSendMessage(f:(message:core.QJsonObject)=>void):void;
		DisconnectSendMessage():void;
		SendMessage(message:core.QJsonObject_ITF):void;
		ConnectDestroyQWebChannelAbstractTransport(f:()=>void):void;
		DisconnectDestroyQWebChannelAbstractTransport():void;
		DestroyQWebChannelAbstractTransport():void;
		DestroyQWebChannelAbstractTransportDefault():void;
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
	function NewQWebChannelAbstractTransportFromPointer(ptr:number):QWebChannelAbstractTransport;
	function NewQWebChannelAbstractTransport(parent:core.QObject_ITF):QWebChannelAbstractTransport;
}