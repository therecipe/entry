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
		AddStylePath(path:string):void;
		AvailableStyles():string[];
		Name():string;
		Path():string;
		SetFallbackStyle(style:string):void;
		SetStyle(style:string):void;
		StylePathList():string[];
	}
	function NewQQuickStyleFromPointer(ptr:number):QQuickStyle;
	function QQuickStyle_AddStylePath(path:string):void;
	function QQuickStyle_AvailableStyles():string[];
	function QQuickStyle_Name():string;
	function QQuickStyle_Path():string;
	function QQuickStyle_SetFallbackStyle(style:string):void;
	function QQuickStyle_SetStyle(style:string):void;
	function QQuickStyle_StylePathList():string[];
}