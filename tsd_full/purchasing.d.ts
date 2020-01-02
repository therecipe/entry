/// <reference path="core.d.ts" />
declare namespace purchasing {
	interface QInAppProduct_ITF extends core.QObject_ITF {
		QInAppProduct_PTR():QInAppProduct;
	}

	class QInAppProduct extends core.QObject {
		___pointer: number;
		QInAppProduct_PTR():QInAppProduct;
		Pointer():number;
		SetPointer(p:number):void;
		Description():string;
		Identifier():string;
		Price():string;
		ProductType():number;
		ConnectPurchase(f:()=>void):void;
		DisconnectPurchase():void;
		Purchase():void;
		Title():string;
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
	function NewQInAppProductFromPointer(ptr:number):QInAppProduct;
	const QInAppProduct__Consumable: number;
	const QInAppProduct__Unlockable: number;
	interface QInAppStore_ITF extends core.QObject_ITF {
		QInAppStore_PTR():QInAppStore;
	}

	class QInAppStore extends core.QObject {
		___pointer: number;
		QInAppStore_PTR():QInAppStore;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectProductRegistered(f:(product:QInAppProduct)=>void):void;
		DisconnectProductRegistered():void;
		ProductRegistered(product:QInAppProduct_ITF):void;
		ConnectProductUnknown(f:(productType:number,identifier:string)=>void):void;
		DisconnectProductUnknown():void;
		ProductUnknown(productType:number,identifier:string):void;
		RegisterProduct(productType:number,identifier:string):void;
		RegisteredProduct(identifier:string):QInAppProduct;
		RestorePurchases():void;
		SetPlatformProperty(propertyName:string,value:string):void;
		ConnectTransactionReady(f:(transaction:QInAppTransaction)=>void):void;
		DisconnectTransactionReady():void;
		TransactionReady(transaction:QInAppTransaction_ITF):void;
		ConnectDestroyQInAppStore(f:()=>void):void;
		DisconnectDestroyQInAppStore():void;
		DestroyQInAppStore():void;
		DestroyQInAppStoreDefault():void;
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
	function NewQInAppStoreFromPointer(ptr:number):QInAppStore;
	function NewQInAppStore(parent:core.QObject_ITF):QInAppStore;
	interface QInAppTransaction_ITF extends core.QObject_ITF {
		QInAppTransaction_PTR():QInAppTransaction;
	}

	class QInAppTransaction extends core.QObject {
		___pointer: number;
		QInAppTransaction_PTR():QInAppTransaction;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ErrorStringDefault():string;
		ConnectFailureReason(f:()=>number):void;
		DisconnectFailureReason():void;
		FailureReason():number;
		FailureReasonDefault():number;
		ConnectFinalize(f:()=>void):void;
		DisconnectFinalize():void;
		Finalize():void;
		ConnectOrderId(f:()=>string):void;
		DisconnectOrderId():void;
		OrderId():string;
		OrderIdDefault():string;
		ConnectPlatformProperty(f:(propertyName:string)=>string):void;
		DisconnectPlatformProperty():void;
		PlatformProperty(propertyName:string):string;
		PlatformPropertyDefault(propertyName:string):string;
		Product():QInAppProduct;
		Status():number;
		ConnectTimestamp(f:()=>core.QDateTime):void;
		DisconnectTimestamp():void;
		Timestamp():core.QDateTime;
		TimestampDefault():core.QDateTime;
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
	function NewQInAppTransactionFromPointer(ptr:number):QInAppTransaction;
	const QInAppTransaction__Unknown: number;
	const QInAppTransaction__PurchaseApproved: number;
	const QInAppTransaction__PurchaseFailed: number;
	const QInAppTransaction__PurchaseRestored: number;
	const QInAppTransaction__NoFailure: number;
	const QInAppTransaction__CanceledByUser: number;
	const QInAppTransaction__ErrorOccurred: number;
}