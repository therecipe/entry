/// <reference path="core.d.ts" />
/// <reference path="widgets.d.ts" />
declare namespace testlib {
	interface QAbstractItemModelTester_ITF {
		QAbstractItemModelTester_PTR():QAbstractItemModelTester;
	}

	class QAbstractItemModelTester {
		___pointer: number;
		QAbstractItemModelTester_PTR():QAbstractItemModelTester;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAbstractItemModelTester():void;
		Model():core.QAbstractItemModel;
	}
	function NewQAbstractItemModelTesterFromPointer(ptr:number):QAbstractItemModelTester;
	function NewQAbstractItemModelTester(model:core.QAbstractItemModel_ITF,parent:core.QObject_ITF):QAbstractItemModelTester;
	function NewQAbstractItemModelTester2(model:core.QAbstractItemModel_ITF,mode:number,parent:core.QObject_ITF):QAbstractItemModelTester;
	const QAbstractItemModelTester__QtTest: number;
	const QAbstractItemModelTester__Warning: number;
	const QAbstractItemModelTester__Fatal: number;
	interface QEventSizeOfChecker_ITF {
		QEventSizeOfChecker_PTR():QEventSizeOfChecker;
	}

	class QEventSizeOfChecker {
		___pointer: number;
		QEventSizeOfChecker_PTR():QEventSizeOfChecker;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQEventSizeOfChecker():void;
	}
	function NewQEventSizeOfCheckerFromPointer(ptr:number):QEventSizeOfChecker;
	interface QSignalSpy_ITF extends core.QObject_ITF {
		QSignalSpy_PTR():QSignalSpy;
	}

	class QSignalSpy extends core.QObject {
		___pointer: number;
		QSignalSpy_PTR():QSignalSpy;
		Pointer():number;
		SetPointer(p:number):void;
		IsValid():boolean;
		Signal():core.QByteArray;
		Wait(timeout:number):boolean;
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
	function NewQSignalSpyFromPointer(ptr:number):QSignalSpy;
	function NewQSignalSpy(object:core.QObject_ITF,sign:string):QSignalSpy;
	interface QSpontaneKeyEvent_ITF {
		QSpontaneKeyEvent_PTR():QSpontaneKeyEvent;
	}

	class QSpontaneKeyEvent {
		___pointer: number;
		QSpontaneKeyEvent_PTR():QSpontaneKeyEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSpontaneKeyEvent():void;
	}
	function NewQSpontaneKeyEventFromPointer(ptr:number):QSpontaneKeyEvent;
	interface QTest_ITF {
		QTest_PTR():QTest;
	}

	class QTest {
		___pointer: number;
		QTest_PTR():QTest;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTest():void;
	}
	const QTest__Abort: number;
	const QTest__Continue: number;
	const QTest__FramesPerSecond: number;
	const QTest__BitsPerSecond: number;
	const QTest__BytesPerSecond: number;
	const QTest__WalltimeMilliseconds: number;
	const QTest__CPUTicks: number;
	const QTest__InstructionReads: number;
	const QTest__Events: number;
	const QTest__WalltimeNanoseconds: number;
	const QTest__BytesAllocated: number;
	const QTest__CPUMigrations: number;
	const QTest__CPUCycles: number;
	const QTest__BusCycles: number;
	const QTest__StalledCycles: number;
	const QTest__Instructions: number;
	const QTest__BranchInstructions: number;
	const QTest__BranchMisses: number;
	const QTest__CacheReferences: number;
	const QTest__CacheReads: number;
	const QTest__CacheWrites: number;
	const QTest__CachePrefetches: number;
	const QTest__CacheMisses: number;
	const QTest__CacheReadMisses: number;
	const QTest__CacheWriteMisses: number;
	const QTest__CachePrefetchMisses: number;
	const QTest__ContextSwitches: number;
	const QTest__PageFaults: number;
	const QTest__MinorPageFaults: number;
	const QTest__MajorPageFaults: number;
	const QTest__AlignmentFaults: number;
	const QTest__EmulationFaults: number;
	const QTest__RefCPUCycles: number;
	const QTest__Press: number;
	const QTest__Release: number;
	const QTest__Click: number;
	const QTest__Shortcut: number;
	const QTest__MousePress: number;
	const QTest__MouseRelease: number;
	const QTest__MouseClick: number;
	const QTest__MouseDClick: number;
	const QTest__MouseMove: number;
	const QTest__AI_Undefined: number;
	const QTest__AI_Name: number;
	const QTest__AI_Result: number;
	const QTest__AI_Tests: number;
	const QTest__AI_Failures: number;
	const QTest__AI_Errors: number;
	const QTest__AI_Type: number;
	const QTest__AI_Description: number;
	const QTest__AI_PropertyValue: number;
	const QTest__AI_QTestVersion: number;
	const QTest__AI_QtVersion: number;
	const QTest__AI_File: number;
	const QTest__AI_Line: number;
	const QTest__AI_Metric: number;
	const QTest__AI_Tag: number;
	const QTest__AI_Value: number;
	const QTest__AI_Iterations: number;
	const QTest__LET_Undefined: number;
	const QTest__LET_Property: number;
	const QTest__LET_Properties: number;
	const QTest__LET_Failure: number;
	const QTest__LET_Error: number;
	const QTest__LET_TestCase: number;
	const QTest__LET_TestSuite: number;
	const QTest__LET_Benchmark: number;
	const QTest__LET_SystemError: number;
	interface QTestData_ITF {
		QTestData_PTR():QTestData;
	}

	class QTestData {
		___pointer: number;
		QTestData_PTR():QTestData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTestData():void;
	}
	function NewQTestDataFromPointer(ptr:number):QTestData;
	interface QTestDelayEvent_ITF extends QTestEvent_ITF {
		QTestDelayEvent_PTR():QTestDelayEvent;
	}

	class QTestDelayEvent extends QTestEvent {
		___pointer: number;
		QTestDelayEvent_PTR():QTestDelayEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTestDelayEvent():void;
	}
	function NewQTestDelayEventFromPointer(ptr:number):QTestDelayEvent;
	interface QTestEvent_ITF {
		QTestEvent_PTR():QTestEvent;
	}

	class QTestEvent {
		___pointer: number;
		QTestEvent_PTR():QTestEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTestEvent():void;
	}
	function NewQTestEventFromPointer(ptr:number):QTestEvent;
	interface QTestEventList_ITF {
		QTestEventList_PTR():QTestEventList;
	}

	class QTestEventList {
		___pointer: number;
		QTestEventList_PTR():QTestEventList;
		Pointer():number;
		SetPointer(p:number):void;
		AddDelay(msecs:number):void;
		AddKeyClick(qtKey:number,modifiers:number,msecs:number):void;
		AddKeyClick2(ascii:string,modifiers:number,msecs:number):void;
		AddKeyClicks(keys:string,modifiers:number,msecs:number):void;
		AddKeyPress(qtKey:number,modifiers:number,msecs:number):void;
		AddKeyPress2(ascii:string,modifiers:number,msecs:number):void;
		AddKeyRelease(qtKey:number,modifiers:number,msecs:number):void;
		AddKeyRelease2(ascii:string,modifiers:number,msecs:number):void;
		AddMouseClick(button:number,modifiers:number,pos:core.QPoint_ITF,delay:number):void;
		AddMouseDClick(button:number,modifiers:number,pos:core.QPoint_ITF,delay:number):void;
		AddMouseMove(pos:core.QPoint_ITF,delay:number):void;
		AddMousePress(button:number,modifiers:number,pos:core.QPoint_ITF,delay:number):void;
		AddMouseRelease(button:number,modifiers:number,pos:core.QPoint_ITF,delay:number):void;
		Clear():void;
		Simulate(w:widgets.QWidget_ITF):void;
		DestroyQTestEventList():void;
	}
	function NewQTestEventListFromPointer(ptr:number):QTestEventList;
	function NewQTestEventList():QTestEventList;
	function NewQTestEventList2(other:QTestEventList_ITF):QTestEventList;
	interface QTestEventLoop_ITF {
		QTestEventLoop_PTR():QTestEventLoop;
	}

	class QTestEventLoop {
		___pointer: number;
		QTestEventLoop_PTR():QTestEventLoop;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTestEventLoop():void;
	}
	function NewQTestEventLoopFromPointer(ptr:number):QTestEventLoop;
	interface QTestKeyClicksEvent_ITF extends QTestEvent_ITF {
		QTestKeyClicksEvent_PTR():QTestKeyClicksEvent;
	}

	class QTestKeyClicksEvent extends QTestEvent {
		___pointer: number;
		QTestKeyClicksEvent_PTR():QTestKeyClicksEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTestKeyClicksEvent():void;
	}
	function NewQTestKeyClicksEventFromPointer(ptr:number):QTestKeyClicksEvent;
	interface QTestKeyEvent_ITF extends QTestEvent_ITF {
		QTestKeyEvent_PTR():QTestKeyEvent;
	}

	class QTestKeyEvent extends QTestEvent {
		___pointer: number;
		QTestKeyEvent_PTR():QTestKeyEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTestKeyEvent():void;
	}
	function NewQTestKeyEventFromPointer(ptr:number):QTestKeyEvent;
	interface QTestMouseEvent_ITF extends QTestEvent_ITF {
		QTestMouseEvent_PTR():QTestMouseEvent;
	}

	class QTestMouseEvent extends QTestEvent {
		___pointer: number;
		QTestMouseEvent_PTR():QTestMouseEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTestMouseEvent():void;
	}
	function NewQTestMouseEventFromPointer(ptr:number):QTestMouseEvent;
}