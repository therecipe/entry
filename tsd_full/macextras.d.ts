/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
declare namespace macextras {
	interface QMacPasteboardMime_ITF {
		QMacPasteboardMime_PTR():QMacPasteboardMime;
	}

	class QMacPasteboardMime {
		___pointer: number;
		QMacPasteboardMime_PTR():QMacPasteboardMime;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMacPasteboardMime():void;
		ConnectCanConvert(f:(mime:string,flav:string)=>boolean):void;
		DisconnectCanConvert():void;
		CanConvert(mime:string,flav:string):boolean;
		ConnectConvertFromMime(f:(mime:string,data:core.QVariant,flav:string)=>core.QByteArray[]):void;
		DisconnectConvertFromMime():void;
		ConvertFromMime(mime:string,data:core.QVariant_ITF,flav:string):core.QByteArray[];
		ConnectConvertToMime(f:(mime:string,data:core.QByteArray[],flav:string)=>core.QVariant):void;
		DisconnectConvertToMime():void;
		ConvertToMime(mime:string,data:core.QByteArray[],flav:string):core.QVariant;
		ConnectConvertorName(f:()=>string):void;
		DisconnectConvertorName():void;
		ConvertorName():string;
		ConnectFlavorFor(f:(mime:string)=>string):void;
		DisconnectFlavorFor():void;
		FlavorFor(mime:string):string;
		ConnectMimeFor(f:(flav:string)=>string):void;
		DisconnectMimeFor():void;
		MimeFor(flav:string):string;
	}
	function NewQMacPasteboardMimeFromPointer(ptr:number):QMacPasteboardMime;
	interface QMacToolBar_ITF extends core.QObject_ITF {
		QMacToolBar_PTR():QMacToolBar;
	}

	class QMacToolBar extends core.QObject {
		___pointer: number;
		QMacToolBar_PTR():QMacToolBar;
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
	function NewQMacToolBarFromPointer(ptr:number):QMacToolBar;
	function NewQMacToolBarItem(parent:core.QObject_ITF):QMacToolBarItem;
	interface QMacToolBarItem_ITF extends core.QObject_ITF {
		QMacToolBarItem_PTR():QMacToolBarItem;
	}

	class QMacToolBarItem extends core.QObject {
		___pointer: number;
		QMacToolBarItem_PTR():QMacToolBarItem;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActivated(f:()=>void):void;
		DisconnectActivated():void;
		Activated():void;
		Icon():gui.QIcon;
		Selectable():boolean;
		SetIcon(icon:gui.QIcon_ITF):void;
		SetSelectable(selectable:boolean):void;
		SetStandardItem(standardItem:number):void;
		SetText(text:string):void;
		StandardItem():number;
		Text():string;
		ConnectDestroyQMacToolBarItem(f:()=>void):void;
		DisconnectDestroyQMacToolBarItem():void;
		DestroyQMacToolBarItem():void;
		DestroyQMacToolBarItemDefault():void;
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
	function NewQMacToolBarItemFromPointer(ptr:number):QMacToolBarItem;
	function NewQMacToolBarItem(parent:core.QObject_ITF):QMacToolBarItem;
	const QMacToolBarItem__NoStandardItem: number;
	const QMacToolBarItem__Space: number;
	const QMacToolBarItem__FlexibleSpace: number;
}