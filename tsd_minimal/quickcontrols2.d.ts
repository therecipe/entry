/// <reference path="core.d.ts" />
declare namespace quickcontrols2 {
	interface QQuickStyle_ITF {
		QQuickStyle_PTR():QQuickStyle;
	}

	class QQuickStyle {
		___pointer: number;
		QQuickStyle_PTR():QQuickStyle;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQuickStyle():void;
		Name():string;
		Path():string;
		SetStyle(style:string):void;
	}
	function NewQQuickStyleFromPointer(ptr:number):QQuickStyle;
	function QQuickStyle_Name():string;
	function QQuickStyle_Path():string;
	function QQuickStyle_SetStyle(style:string):void;
}