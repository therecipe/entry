/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="widgets.d.ts" />
declare namespace svg {
	interface QGraphicsSvgItem_ITF extends widgets.QGraphicsObject_ITF {
		QGraphicsSvgItem_PTR():QGraphicsSvgItem;
	}

	class QGraphicsSvgItem extends widgets.QGraphicsObject {
		___pointer: number;
		QGraphicsSvgItem_PTR():QGraphicsSvgItem;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBoundingRect(f:()=>core.QRectF):void;
		DisconnectBoundingRect():void;
		BoundingRect():core.QRectF;
		BoundingRectDefault():core.QRectF;
		ElementId():string;
		MaximumCacheSize():core.QSize;
		ConnectPaint(f:(painter:gui.QPainter,option:widgets.QStyleOptionGraphicsItem,widget:widgets.QWidget)=>void):void;
		DisconnectPaint():void;
		Paint(painter:gui.QPainter_ITF,option:widgets.QStyleOptionGraphicsItem_ITF,widget:widgets.QWidget_ITF):void;
		PaintDefault(painter:gui.QPainter_ITF,option:widgets.QStyleOptionGraphicsItem_ITF,widget:widgets.QWidget_ITF):void;
		Renderer():QSvgRenderer;
		SetElementId(id:string):void;
		SetMaximumCacheSize(size:core.QSize_ITF):void;
		SetSharedRenderer(renderer:QSvgRenderer_ITF):void;
		TypeDefault():number;
		EventDefault(ev:core.QEvent_ITF):boolean;
		UpdateMicroFocusDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
		AdvanceDefault(phase:number):void;
		CollidesWithItemDefault(other:widgets.QGraphicsItem_ITF,mode:number):boolean;
		CollidesWithPathDefault(path:gui.QPainterPath_ITF,mode:number):boolean;
		ContainsDefault(point:core.QPointF_ITF):boolean;
		ContextMenuEventDefault(event:widgets.QGraphicsSceneContextMenuEvent_ITF):void;
		DragEnterEventDefault(event:widgets.QGraphicsSceneDragDropEvent_ITF):void;
		DragLeaveEventDefault(event:widgets.QGraphicsSceneDragDropEvent_ITF):void;
		DragMoveEventDefault(event:widgets.QGraphicsSceneDragDropEvent_ITF):void;
		DropEventDefault(event:widgets.QGraphicsSceneDragDropEvent_ITF):void;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HoverEnterEventDefault(event:widgets.QGraphicsSceneHoverEvent_ITF):void;
		HoverLeaveEventDefault(event:widgets.QGraphicsSceneHoverEvent_ITF):void;
		HoverMoveEventDefault(event:widgets.QGraphicsSceneHoverEvent_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		IsObscuredByDefault(item:widgets.QGraphicsItem_ITF):boolean;
		ItemChangeDefault(change:number,value:core.QVariant_ITF):core.QVariant;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		MouseDoubleClickEventDefault(event:widgets.QGraphicsSceneMouseEvent_ITF):void;
		MouseMoveEventDefault(event:widgets.QGraphicsSceneMouseEvent_ITF):void;
		MousePressEventDefault(event:widgets.QGraphicsSceneMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:widgets.QGraphicsSceneMouseEvent_ITF):void;
		OpaqueAreaDefault():gui.QPainterPath;
		SceneEventDefault(event:core.QEvent_ITF):boolean;
		SceneEventFilterDefault(watched:widgets.QGraphicsItem_ITF,event:core.QEvent_ITF):boolean;
		ShapeDefault():gui.QPainterPath;
		WheelEventDefault(event:widgets.QGraphicsSceneWheelEvent_ITF):void;
	}
	function NewQGraphicsSvgItemFromPointer(ptr:number):QGraphicsSvgItem;
	function NewQGraphicsSvgItem(parent:widgets.QGraphicsItem_ITF):QGraphicsSvgItem;
	function NewQGraphicsSvgItem2(fileName:string,parent:widgets.QGraphicsItem_ITF):QGraphicsSvgItem;
	interface QSvgGenerator_ITF extends gui.QPaintDevice_ITF {
		QSvgGenerator_PTR():QSvgGenerator;
	}

	class QSvgGenerator extends gui.QPaintDevice {
		___pointer: number;
		QSvgGenerator_PTR():QSvgGenerator;
		Pointer():number;
		SetPointer(p:number):void;
		Description():string;
		FileName():string;
		OutputDevice():core.QIODevice;
		ConnectPaintEngine(f:()=>gui.QPaintEngine):void;
		DisconnectPaintEngine():void;
		PaintEngine():gui.QPaintEngine;
		PaintEngineDefault():gui.QPaintEngine;
		Resolution():number;
		SetDescription(description:string):void;
		SetFileName(fileName:string):void;
		SetOutputDevice(outputDevice:core.QIODevice_ITF):void;
		SetResolution(dpi:number):void;
		SetSize(size:core.QSize_ITF):void;
		SetTitle(title:string):void;
		SetViewBox(viewBox:core.QRect_ITF):void;
		SetViewBox2(viewBox:core.QRectF_ITF):void;
		Size():core.QSize;
		Title():string;
		ViewBox():core.QRect;
		ViewBoxF():core.QRectF;
		ConnectDestroyQSvgGenerator(f:()=>void):void;
		DisconnectDestroyQSvgGenerator():void;
		DestroyQSvgGenerator():void;
		DestroyQSvgGeneratorDefault():void;
	}
	function NewQSvgGeneratorFromPointer(ptr:number):QSvgGenerator;
	function NewQSvgGenerator():QSvgGenerator;
	interface QSvgIOHandler_ITF extends gui.QImageIOHandler_ITF {
		QSvgIOHandler_PTR():QSvgIOHandler;
	}

	class QSvgIOHandler extends gui.QImageIOHandler {
		___pointer: number;
		QSvgIOHandler_PTR():QSvgIOHandler;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSvgIOHandler():void;
	}
	interface QSvgIconEngine_ITF extends gui.QIconEngine_ITF {
		QSvgIconEngine_PTR():QSvgIconEngine;
	}

	class QSvgIconEngine extends gui.QIconEngine {
		___pointer: number;
		QSvgIconEngine_PTR():QSvgIconEngine;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSvgIconEngine():void;
	}
	interface QSvgRenderer_ITF extends core.QObject_ITF {
		QSvgRenderer_PTR():QSvgRenderer;
	}

	class QSvgRenderer extends core.QObject {
		___pointer: number;
		QSvgRenderer_PTR():QSvgRenderer;
		Pointer():number;
		SetPointer(p:number):void;
		Animated():boolean;
		BoundsOnElement(id:string):core.QRectF;
		DefaultSize():core.QSize;
		ElementExists(id:string):boolean;
		FramesPerSecond():number;
		IsValid():boolean;
		ConnectLoad(f:(filename:string)=>boolean):void;
		DisconnectLoad():void;
		Load(filename:string):boolean;
		LoadDefault(filename:string):boolean;
		ConnectLoad2(f:(contents:core.QByteArray)=>boolean):void;
		DisconnectLoad2():void;
		Load2(contents:core.QByteArray_ITF):boolean;
		Load2Default(contents:core.QByteArray_ITF):boolean;
		ConnectLoad3(f:(contents:core.QXmlStreamReader)=>boolean):void;
		DisconnectLoad3():void;
		Load3(contents:core.QXmlStreamReader_ITF):boolean;
		Load3Default(contents:core.QXmlStreamReader_ITF):boolean;
		MatrixForElement(id:string):gui.QMatrix;
		ConnectRender(f:(painter:gui.QPainter)=>void):void;
		DisconnectRender():void;
		Render(painter:gui.QPainter_ITF):void;
		RenderDefault(painter:gui.QPainter_ITF):void;
		ConnectRender2(f:(painter:gui.QPainter,bounds:core.QRectF)=>void):void;
		DisconnectRender2():void;
		Render2(painter:gui.QPainter_ITF,bounds:core.QRectF_ITF):void;
		Render2Default(painter:gui.QPainter_ITF,bounds:core.QRectF_ITF):void;
		ConnectRender3(f:(painter:gui.QPainter,elementId:string,bounds:core.QRectF)=>void):void;
		DisconnectRender3():void;
		Render3(painter:gui.QPainter_ITF,elementId:string,bounds:core.QRectF_ITF):void;
		Render3Default(painter:gui.QPainter_ITF,elementId:string,bounds:core.QRectF_ITF):void;
		ConnectRepaintNeeded(f:()=>void):void;
		DisconnectRepaintNeeded():void;
		RepaintNeeded():void;
		SetFramesPerSecond(num:number):void;
		SetViewBox(viewbox:core.QRect_ITF):void;
		SetViewBox2(viewbox:core.QRectF_ITF):void;
		ViewBox():core.QRect;
		ViewBoxF():core.QRectF;
		ConnectDestroyQSvgRenderer(f:()=>void):void;
		DisconnectDestroyQSvgRenderer():void;
		DestroyQSvgRenderer():void;
		DestroyQSvgRendererDefault():void;
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
	function NewQSvgRendererFromPointer(ptr:number):QSvgRenderer;
	function NewQSvgRenderer(parent:core.QObject_ITF):QSvgRenderer;
	function NewQSvgRenderer2(filename:string,parent:core.QObject_ITF):QSvgRenderer;
	function NewQSvgRenderer3(contents:core.QByteArray_ITF,parent:core.QObject_ITF):QSvgRenderer;
	function NewQSvgRenderer4(contents:core.QXmlStreamReader_ITF,parent:core.QObject_ITF):QSvgRenderer;
	interface QSvgWidget_ITF extends widgets.QWidget_ITF {
		QSvgWidget_PTR():QSvgWidget;
	}

	class QSvgWidget extends widgets.QWidget {
		___pointer: number;
		QSvgWidget_PTR():QSvgWidget;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectLoad(f:(file:string)=>void):void;
		DisconnectLoad():void;
		Load(file:string):void;
		LoadDefault(file:string):void;
		ConnectLoad2(f:(contents:core.QByteArray)=>void):void;
		DisconnectLoad2():void;
		Load2(contents:core.QByteArray_ITF):void;
		Load2Default(contents:core.QByteArray_ITF):void;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		Renderer():QSvgRenderer;
		SizeHintDefault():core.QSize;
		ConnectDestroyQSvgWidget(f:()=>void):void;
		DisconnectDestroyQSvgWidget():void;
		DestroyQSvgWidget():void;
		DestroyQSvgWidgetDefault():void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		EventDefault(event:core.QEvent_ITF):boolean;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
		HideEventDefault(event:gui.QHideEvent_ITF):void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MetricDefault(m:number):number;
		MinimumSizeHintDefault():core.QSize;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		PaintEngineDefault():gui.QPaintEngine;
		RaiseDefault():void;
		RepaintDefault():void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetFocus2Default():void;
		SetHiddenDefault(hidden:boolean):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowModifiedDefault(vbo:boolean):void;
		SetWindowTitleDefault(vqs:string):void;
		ShowDefault():void;
		ShowEventDefault(event:gui.QShowEvent_ITF):void;
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		UpdateDefault():void;
		UpdateMicroFocusDefault():void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSvgWidgetFromPointer(ptr:number):QSvgWidget;
	function NewQSvgWidget(parent:widgets.QWidget_ITF):QSvgWidget;
	function NewQSvgWidget2(file:string,parent:widgets.QWidget_ITF):QSvgWidget;
}