/// <reference path="../tsd_full/core.d.ts" />
/// <reference path="../tsd_full/gui.d.ts" />
/// <reference path="../tsd_full/widgets.d.ts" />
/// <reference path="../tsd_full/qml.d.ts" />

declare namespace main {
	function NewGolangHighlighter2(parent: gui.QTextDocument_ITF):gui.QSyntaxHighlighter
	function SetStandardIcon(button:widgets.QPushButton_ITF, flag:number):void

	function restart():void
	function watchBoot(path:string):void
	function watchPayload(path:string):void
	function updateEngineReference(engine:qml.QJSEngine_ITF):void

	function deploy(target:string, patch:string, pointer:number, self:boolean):void
	function patchSelf(text:string, hard:boolean, boot:boolean):void

	function updateBrowserHash(data:string):void
}

declare namespace qt {
	function runAsync(f:()=>void):void
	function setInterval(f:()=>void, msec:number, parent:core.QObject_ITF):void
}

var nil
var isMain
var bootPayload
var bootPayloadDirty
var mainPayload
var isDev
var isInsideBrowser
var isBrowserJSEngine
var isWinXP
var isDeployed
var recursionCounter
var isTesting
var isTestingVisible
var softRestart
var gc
var userAgent