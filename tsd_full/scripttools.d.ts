/// <reference path="core.d.ts" />
/// <reference path="script.d.ts" />
/// <reference path="widgets.d.ts" />
declare namespace scripttools {
	interface QScriptEngineDebugger_ITF extends core.QObject_ITF {
		QScriptEngineDebugger_PTR():QScriptEngineDebugger;
	}

	class QScriptEngineDebugger extends core.QObject {
		___pointer: number;
		QScriptEngineDebugger_PTR():QScriptEngineDebugger;
		Pointer():number;
		SetPointer(p:number):void;
		Action(action:number):widgets.QAction;
		AttachTo(engine:script.QScriptEngine_ITF):void;
		AutoShowStandardWindow():boolean;
		CreateStandardMenu(parent:widgets.QWidget_ITF):widgets.QMenu;
		CreateStandardToolBar(parent:widgets.QWidget_ITF):widgets.QToolBar;
		Detach():void;
		ConnectEvaluationResumed(f:()=>void):void;
		DisconnectEvaluationResumed():void;
		EvaluationResumed():void;
		ConnectEvaluationSuspended(f:()=>void):void;
		DisconnectEvaluationSuspended():void;
		EvaluationSuspended():void;
		SetAutoShowStandardWindow(autoShow:boolean):void;
		StandardWindow():widgets.QMainWindow;
		State():number;
		Widget(widget:number):widgets.QWidget;
		ConnectDestroyQScriptEngineDebugger(f:()=>void):void;
		DisconnectDestroyQScriptEngineDebugger():void;
		DestroyQScriptEngineDebugger():void;
		DestroyQScriptEngineDebuggerDefault():void;
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
	function NewQScriptEngineDebuggerFromPointer(ptr:number):QScriptEngineDebugger;
	function NewQScriptEngineDebugger(parent:core.QObject_ITF):QScriptEngineDebugger;
	const QScriptEngineDebugger__InterruptAction: number;
	const QScriptEngineDebugger__ContinueAction: number;
	const QScriptEngineDebugger__StepIntoAction: number;
	const QScriptEngineDebugger__StepOverAction: number;
	const QScriptEngineDebugger__StepOutAction: number;
	const QScriptEngineDebugger__RunToCursorAction: number;
	const QScriptEngineDebugger__RunToNewScriptAction: number;
	const QScriptEngineDebugger__ToggleBreakpointAction: number;
	const QScriptEngineDebugger__ClearDebugOutputAction: number;
	const QScriptEngineDebugger__ClearErrorLogAction: number;
	const QScriptEngineDebugger__ClearConsoleAction: number;
	const QScriptEngineDebugger__FindInScriptAction: number;
	const QScriptEngineDebugger__FindNextInScriptAction: number;
	const QScriptEngineDebugger__FindPreviousInScriptAction: number;
	const QScriptEngineDebugger__GoToLineAction: number;
	const QScriptEngineDebugger__ConsoleWidget: number;
	const QScriptEngineDebugger__StackWidget: number;
	const QScriptEngineDebugger__ScriptsWidget: number;
	const QScriptEngineDebugger__LocalsWidget: number;
	const QScriptEngineDebugger__CodeWidget: number;
	const QScriptEngineDebugger__CodeFinderWidget: number;
	const QScriptEngineDebugger__BreakpointsWidget: number;
	const QScriptEngineDebugger__DebugOutputWidget: number;
	const QScriptEngineDebugger__ErrorLogWidget: number;
	const QScriptEngineDebugger__RunningState: number;
	const QScriptEngineDebugger__SuspendedState: number;
}