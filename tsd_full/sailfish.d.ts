/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="quick.d.ts" />
declare namespace sailfish {
	interface SailfishApp_ITF {
		SailfishApp_PTR():SailfishApp;
	}

	class SailfishApp {
		___pointer: number;
		SailfishApp_PTR():SailfishApp;
		Pointer():number;
		SetPointer(p:number):void;
		DestroySailfishApp():void;
		Application(argc:number,argv:string[]):gui.QGuiApplication;
		Main(argc:number,argv:string[]):number;
		CreateView():quick.QQuickView;
		PathTo(filename:string):core.QUrl;
		PathToMainQml():core.QUrl;
	}
	function NewSailfishAppFromPointer(ptr:number):SailfishApp;
	function SailfishApp_Application(argc:number,argv:string[]):gui.QGuiApplication;
	function SailfishApp_Main(argc:number,argv:string[]):number;
	function SailfishApp_CreateView():quick.QQuickView;
	function SailfishApp_PathTo(filename:string):core.QUrl;
	function SailfishApp_PathToMainQml():core.QUrl;
}