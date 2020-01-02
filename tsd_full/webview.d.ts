/// <reference path="core.d.ts" />
declare namespace webview {
	interface QtWebView_ITF {
		QtWebView_PTR():QtWebView;
	}

	class QtWebView {
		___pointer: number;
		QtWebView_PTR():QtWebView;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQtWebView():void;
		Initialize():void;
	}
	function NewQtWebViewFromPointer(ptr:number):QtWebView;
	function QtWebView_Initialize():void;
}