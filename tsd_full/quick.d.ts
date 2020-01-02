/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="widgets.d.ts" />
/// <reference path="qml.d.ts" />
declare namespace quick {
	interface QDebugMessageServiceFactory_ITF {
		QDebugMessageServiceFactory_PTR():QDebugMessageServiceFactory;
	}

	class QDebugMessageServiceFactory {
		___pointer: number;
		QDebugMessageServiceFactory_PTR():QDebugMessageServiceFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDebugMessageServiceFactory():void;
	}
	function NewQDebugMessageServiceFactoryFromPointer(ptr:number):QDebugMessageServiceFactory;
	interface QDebugMessageServiceImpl_ITF {
		QDebugMessageServiceImpl_PTR():QDebugMessageServiceImpl;
	}

	class QDebugMessageServiceImpl {
		___pointer: number;
		QDebugMessageServiceImpl_PTR():QDebugMessageServiceImpl;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDebugMessageServiceImpl():void;
	}
	function NewQDebugMessageServiceImplFromPointer(ptr:number):QDebugMessageServiceImpl;
	interface QLocalClientConnectionFactory_ITF {
		QLocalClientConnectionFactory_PTR():QLocalClientConnectionFactory;
	}

	class QLocalClientConnectionFactory {
		___pointer: number;
		QLocalClientConnectionFactory_PTR():QLocalClientConnectionFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLocalClientConnectionFactory():void;
	}
	function NewQLocalClientConnectionFactoryFromPointer(ptr:number):QLocalClientConnectionFactory;
	interface QOpenVGOffscreenSurface_ITF {
		QOpenVGOffscreenSurface_PTR():QOpenVGOffscreenSurface;
	}

	class QOpenVGOffscreenSurface {
		___pointer: number;
		QOpenVGOffscreenSurface_PTR():QOpenVGOffscreenSurface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenVGOffscreenSurface():void;
	}
	function NewQOpenVGOffscreenSurfaceFromPointer(ptr:number):QOpenVGOffscreenSurface;
	interface QQuickAsyncImageProvider_ITF extends QQuickImageProvider_ITF {
		QQuickAsyncImageProvider_PTR():QQuickAsyncImageProvider;
	}

	class QQuickAsyncImageProvider extends QQuickImageProvider {
		___pointer: number;
		QQuickAsyncImageProvider_PTR():QQuickAsyncImageProvider;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectRequestImageResponse(f:(id:string,requestedSize:core.QSize)=>QQuickImageResponse):void;
		DisconnectRequestImageResponse():void;
		RequestImageResponse(id:string,requestedSize:core.QSize_ITF):QQuickImageResponse;
		ConnectDestroyQQuickAsyncImageProvider(f:()=>void):void;
		DisconnectDestroyQQuickAsyncImageProvider():void;
		DestroyQQuickAsyncImageProvider():void;
		DestroyQQuickAsyncImageProviderDefault():void;
	}
	function NewQQuickAsyncImageProviderFromPointer(ptr:number):QQuickAsyncImageProvider;
	function NewQQuickAsyncImageProvider():QQuickAsyncImageProvider;
	interface QQuickFramebufferObject_ITF extends QQuickItem_ITF {
		QQuickFramebufferObject_PTR():QQuickFramebufferObject;
	}

	class QQuickFramebufferObject extends QQuickItem {
		___pointer: number;
		QQuickFramebufferObject_PTR():QQuickFramebufferObject;
		Pointer():number;
		SetPointer(p:number):void;
		MirrorVertically():boolean;
		ConnectMirrorVerticallyChanged(f:(vbo:boolean)=>void):void;
		DisconnectMirrorVerticallyChanged():void;
		MirrorVerticallyChanged(vbo:boolean):void;
		SetMirrorVertically(enable:boolean):void;
		SetTextureFollowsItemSize(follows:boolean):void;
		TextureFollowsItemSize():boolean;
		ConnectTextureFollowsItemSizeChanged(f:(vbo:boolean)=>void):void;
		DisconnectTextureFollowsItemSizeChanged():void;
		TextureFollowsItemSizeChanged(vbo:boolean):void;
	}
	function NewQQuickFramebufferObjectFromPointer(ptr:number):QQuickFramebufferObject;
	interface QQuickImageProvider_ITF extends qml.QQmlImageProviderBase_ITF {
		QQuickImageProvider_PTR():QQuickImageProvider;
	}

	class QQuickImageProvider extends qml.QQmlImageProviderBase {
		___pointer: number;
		QQuickImageProvider_PTR():QQuickImageProvider;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectFlags(f:()=>number):void;
		DisconnectFlags():void;
		Flags():number;
		FlagsDefault():number;
		ConnectImageType(f:()=>number):void;
		DisconnectImageType():void;
		ImageType():number;
		ImageTypeDefault():number;
		ConnectRequestImage(f:(id:string,size:core.QSize,requestedSize:core.QSize)=>gui.QImage):void;
		DisconnectRequestImage():void;
		RequestImage(id:string,size:core.QSize_ITF,requestedSize:core.QSize_ITF):gui.QImage;
		RequestImageDefault(id:string,size:core.QSize_ITF,requestedSize:core.QSize_ITF):gui.QImage;
		ConnectRequestPixmap(f:(id:string,size:core.QSize,requestedSize:core.QSize)=>gui.QPixmap):void;
		DisconnectRequestPixmap():void;
		RequestPixmap(id:string,size:core.QSize_ITF,requestedSize:core.QSize_ITF):gui.QPixmap;
		RequestPixmapDefault(id:string,size:core.QSize_ITF,requestedSize:core.QSize_ITF):gui.QPixmap;
		ConnectRequestTexture(f:(id:string,size:core.QSize,requestedSize:core.QSize)=>QQuickTextureFactory):void;
		DisconnectRequestTexture():void;
		RequestTexture(id:string,size:core.QSize_ITF,requestedSize:core.QSize_ITF):QQuickTextureFactory;
		RequestTextureDefault(id:string,size:core.QSize_ITF,requestedSize:core.QSize_ITF):QQuickTextureFactory;
		ConnectDestroyQQuickImageProvider(f:()=>void):void;
		DisconnectDestroyQQuickImageProvider():void;
		DestroyQQuickImageProvider():void;
		DestroyQQuickImageProviderDefault():void;
	}
	function NewQQuickImageProviderFromPointer(ptr:number):QQuickImageProvider;
	function NewQQuickImageProvider(ty:number,flags:number):QQuickImageProvider;
	interface QQuickImageResponse_ITF extends core.QObject_ITF {
		QQuickImageResponse_PTR():QQuickImageResponse;
	}

	class QQuickImageResponse extends core.QObject {
		___pointer: number;
		QQuickImageResponse_PTR():QQuickImageResponse;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCancel(f:()=>void):void;
		DisconnectCancel():void;
		Cancel():void;
		CancelDefault():void;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ErrorStringDefault():string;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		ConnectTextureFactory(f:()=>QQuickTextureFactory):void;
		DisconnectTextureFactory():void;
		TextureFactory():QQuickTextureFactory;
		ConnectDestroyQQuickImageResponse(f:()=>void):void;
		DisconnectDestroyQQuickImageResponse():void;
		DestroyQQuickImageResponse():void;
		DestroyQQuickImageResponseDefault():void;
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
	function NewQQuickImageResponseFromPointer(ptr:number):QQuickImageResponse;
	function NewQQuickImageResponse():QQuickImageResponse;
	interface QQuickItem_ITF extends qml.QQmlParserStatus_ITF {
		QQuickItem_PTR():QQuickItem;
		QObject_PTR():core.QObject;
	}

	class QQuickItem extends qml.QQmlParserStatus {
		QObject_PTR():core.QObject
		___pointer: number;
		QQuickItem_PTR():QQuickItem;
		Pointer():number;
		SetPointer(p:number):void;
		AcceptHoverEvents():boolean;
		AcceptTouchEvents():boolean;
		AcceptedMouseButtons():number;
		ConnectActiveFocusChanged(f:(vbo:boolean)=>void):void;
		DisconnectActiveFocusChanged():void;
		ActiveFocusChanged(vbo:boolean):void;
		ActiveFocusOnTab():boolean;
		ConnectActiveFocusOnTabChanged(f:(vbo:boolean)=>void):void;
		DisconnectActiveFocusOnTabChanged():void;
		ActiveFocusOnTabChanged(vbo:boolean):void;
		Antialiasing():boolean;
		ConnectAntialiasingChanged(f:(vbo:boolean)=>void):void;
		DisconnectAntialiasingChanged():void;
		AntialiasingChanged(vbo:boolean):void;
		BaselineOffset():number;
		ConnectBaselineOffsetChanged(f:(vqr:number)=>void):void;
		DisconnectBaselineOffsetChanged():void;
		BaselineOffsetChanged(vqr:number):void;
		ChildAt(x:number,y:number):QQuickItem;
		ChildItems():QQuickItem[];
		ConnectChildMouseEventFilter(f:(item:QQuickItem,event:core.QEvent)=>boolean):void;
		DisconnectChildMouseEventFilter():void;
		ChildMouseEventFilter(item:QQuickItem_ITF,event:core.QEvent_ITF):boolean;
		ChildMouseEventFilterDefault(item:QQuickItem_ITF,event:core.QEvent_ITF):boolean;
		ChildrenRect():core.QRectF;
		ConnectChildrenRectChanged(f:(vqr:core.QRectF)=>void):void;
		DisconnectChildrenRectChanged():void;
		ChildrenRectChanged(vqr:core.QRectF_ITF):void;
		ConnectClassBegin(f:()=>void):void;
		DisconnectClassBegin():void;
		ClassBegin():void;
		ClassBeginDefault():void;
		Clip():boolean;
		ConnectClipChanged(f:(vbo:boolean)=>void):void;
		DisconnectClipChanged():void;
		ClipChanged(vbo:boolean):void;
		ConnectComponentComplete(f:()=>void):void;
		DisconnectComponentComplete():void;
		ComponentComplete():void;
		ComponentCompleteDefault():void;
		ContainmentMask():core.QObject;
		ConnectContainmentMaskChanged(f:()=>void):void;
		DisconnectContainmentMaskChanged():void;
		ContainmentMaskChanged():void;
		ConnectContains(f:(point:core.QPointF)=>boolean):void;
		DisconnectContains():void;
		Contains(point:core.QPointF_ITF):boolean;
		ContainsDefault(point:core.QPointF_ITF):boolean;
		Cursor():gui.QCursor;
		ConnectDragEnterEvent(f:(event:gui.QDragEnterEvent)=>void):void;
		DisconnectDragEnterEvent():void;
		DragEnterEvent(event:gui.QDragEnterEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		ConnectDragLeaveEvent(f:(event:gui.QDragLeaveEvent)=>void):void;
		DisconnectDragLeaveEvent():void;
		DragLeaveEvent(event:gui.QDragLeaveEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		ConnectDragMoveEvent(f:(event:gui.QDragMoveEvent)=>void):void;
		DisconnectDragMoveEvent():void;
		DragMoveEvent(event:gui.QDragMoveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		ConnectDropEvent(f:(event:gui.QDropEvent)=>void):void;
		DisconnectDropEvent():void;
		DropEvent(event:gui.QDropEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		ConnectEnabledChanged(f:()=>void):void;
		DisconnectEnabledChanged():void;
		EnabledChanged():void;
		ConnectEvent(f:(ev:core.QEvent)=>boolean):void;
		DisconnectEvent():void;
		Event(ev:core.QEvent_ITF):boolean;
		EventDefault(ev:core.QEvent_ITF):boolean;
		FiltersChildMouseEvents():boolean;
		Flags():number;
		ConnectFocusChanged(f:(vbo:boolean)=>void):void;
		DisconnectFocusChanged():void;
		FocusChanged(vbo:boolean):void;
		ConnectFocusInEvent(f:(vqf:gui.QFocusEvent)=>void):void;
		DisconnectFocusInEvent():void;
		FocusInEvent(vqf:gui.QFocusEvent_ITF):void;
		FocusInEventDefault(vqf:gui.QFocusEvent_ITF):void;
		ConnectFocusOutEvent(f:(vqf:gui.QFocusEvent)=>void):void;
		DisconnectFocusOutEvent():void;
		FocusOutEvent(vqf:gui.QFocusEvent_ITF):void;
		FocusOutEventDefault(vqf:gui.QFocusEvent_ITF):void;
		ForceActiveFocus():void;
		ForceActiveFocus2(reason:number):void;
		ConnectGeometryChanged(f:(newGeometry:core.QRectF,oldGeometry:core.QRectF)=>void):void;
		DisconnectGeometryChanged():void;
		GeometryChanged(newGeometry:core.QRectF_ITF,oldGeometry:core.QRectF_ITF):void;
		GeometryChangedDefault(newGeometry:core.QRectF_ITF,oldGeometry:core.QRectF_ITF):void;
		GrabMouse():void;
		GrabTouchPoints(ids:number[]):void;
		HasActiveFocus():boolean;
		HasFocus():boolean;
		Height():number;
		ConnectHeightChanged(f:()=>void):void;
		DisconnectHeightChanged():void;
		HeightChanged():void;
		HeightValid():boolean;
		ConnectHoverEnterEvent(f:(event:gui.QHoverEvent)=>void):void;
		DisconnectHoverEnterEvent():void;
		HoverEnterEvent(event:gui.QHoverEvent_ITF):void;
		HoverEnterEventDefault(event:gui.QHoverEvent_ITF):void;
		ConnectHoverLeaveEvent(f:(event:gui.QHoverEvent)=>void):void;
		DisconnectHoverLeaveEvent():void;
		HoverLeaveEvent(event:gui.QHoverEvent_ITF):void;
		HoverLeaveEventDefault(event:gui.QHoverEvent_ITF):void;
		ConnectHoverMoveEvent(f:(event:gui.QHoverEvent)=>void):void;
		DisconnectHoverMoveEvent():void;
		HoverMoveEvent(event:gui.QHoverEvent_ITF):void;
		HoverMoveEventDefault(event:gui.QHoverEvent_ITF):void;
		ImplicitHeight():number;
		ConnectImplicitHeightChanged(f:()=>void):void;
		DisconnectImplicitHeightChanged():void;
		ImplicitHeightChanged():void;
		ImplicitWidth():number;
		ConnectImplicitWidthChanged(f:()=>void):void;
		DisconnectImplicitWidthChanged():void;
		ImplicitWidthChanged():void;
		ConnectInputMethodEvent(f:(event:gui.QInputMethodEvent)=>void):void;
		DisconnectInputMethodEvent():void;
		InputMethodEvent(event:gui.QInputMethodEvent_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		ConnectInputMethodQuery(f:(query:number)=>core.QVariant):void;
		DisconnectInputMethodQuery():void;
		InputMethodQuery(query:number):core.QVariant;
		InputMethodQueryDefault(query:number):core.QVariant;
		IsAncestorOf(child:QQuickItem_ITF):boolean;
		IsComponentComplete():boolean;
		IsEnabled():boolean;
		IsFocusScope():boolean;
		ConnectIsTextureProvider(f:()=>boolean):void;
		DisconnectIsTextureProvider():void;
		IsTextureProvider():boolean;
		IsTextureProviderDefault():boolean;
		IsVisible():boolean;
		KeepMouseGrab():boolean;
		KeepTouchGrab():boolean;
		ConnectKeyPressEvent(f:(event:gui.QKeyEvent)=>void):void;
		DisconnectKeyPressEvent():void;
		KeyPressEvent(event:gui.QKeyEvent_ITF):void;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		ConnectKeyReleaseEvent(f:(event:gui.QKeyEvent)=>void):void;
		DisconnectKeyReleaseEvent():void;
		KeyReleaseEvent(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		MapFromGlobal(point:core.QPointF_ITF):core.QPointF;
		MapFromItem(item:QQuickItem_ITF,point:core.QPointF_ITF):core.QPointF;
		MapFromScene(point:core.QPointF_ITF):core.QPointF;
		MapRectFromItem(item:QQuickItem_ITF,rect:core.QRectF_ITF):core.QRectF;
		MapRectFromScene(rect:core.QRectF_ITF):core.QRectF;
		MapRectToItem(item:QQuickItem_ITF,rect:core.QRectF_ITF):core.QRectF;
		MapRectToScene(rect:core.QRectF_ITF):core.QRectF;
		MapToGlobal(point:core.QPointF_ITF):core.QPointF;
		MapToItem(item:QQuickItem_ITF,point:core.QPointF_ITF):core.QPointF;
		MapToScene(point:core.QPointF_ITF):core.QPointF;
		ConnectMouseDoubleClickEvent(f:(event:gui.QMouseEvent)=>void):void;
		DisconnectMouseDoubleClickEvent():void;
		MouseDoubleClickEvent(event:gui.QMouseEvent_ITF):void;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		ConnectMouseMoveEvent(f:(event:gui.QMouseEvent)=>void):void;
		DisconnectMouseMoveEvent():void;
		MouseMoveEvent(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		ConnectMousePressEvent(f:(event:gui.QMouseEvent)=>void):void;
		DisconnectMousePressEvent():void;
		MousePressEvent(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		ConnectMouseReleaseEvent(f:(event:gui.QMouseEvent)=>void):void;
		DisconnectMouseReleaseEvent():void;
		MouseReleaseEvent(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		ConnectMouseUngrabEvent(f:()=>void):void;
		DisconnectMouseUngrabEvent():void;
		MouseUngrabEvent():void;
		MouseUngrabEventDefault():void;
		NextItemInFocusChain(forward:boolean):QQuickItem;
		Opacity():number;
		ConnectOpacityChanged(f:()=>void):void;
		DisconnectOpacityChanged():void;
		OpacityChanged():void;
		ConnectParentChanged(f:(vqq:QQuickItem)=>void):void;
		DisconnectParentChanged():void;
		ParentChanged(vqq:QQuickItem_ITF):void;
		ParentItem():QQuickItem;
		Polish():void;
		ConnectReleaseResources(f:()=>void):void;
		DisconnectReleaseResources():void;
		ReleaseResources():void;
		ReleaseResourcesDefault():void;
		ResetAntialiasing():void;
		ResetHeight():void;
		ResetWidth():void;
		Rotation():number;
		ConnectRotationChanged(f:()=>void):void;
		DisconnectRotationChanged():void;
		RotationChanged():void;
		Scale():number;
		ConnectScaleChanged(f:()=>void):void;
		DisconnectScaleChanged():void;
		ScaleChanged():void;
		ScopedFocusItem():QQuickItem;
		SetAcceptHoverEvents(enabled:boolean):void;
		SetAcceptTouchEvents(enabled:boolean):void;
		SetAcceptedMouseButtons(buttons:number):void;
		SetActiveFocusOnTab(vbo:boolean):void;
		SetAntialiasing(vbo:boolean):void;
		SetBaselineOffset(vqr:number):void;
		SetClip(vbo:boolean):void;
		SetContainmentMask(mask:core.QObject_ITF):void;
		SetCursor(cursor:gui.QCursor_ITF):void;
		SetEnabled(vbo:boolean):void;
		SetFiltersChildMouseEvents(filter:boolean):void;
		SetFlag(flag:number,enabled:boolean):void;
		SetFlags(flags:number):void;
		SetFocus(vbo:boolean):void;
		SetFocus2(focus:boolean,reason:number):void;
		SetHeight(vqr:number):void;
		SetImplicitHeight(vqr:number):void;
		SetImplicitWidth(vqr:number):void;
		SetKeepMouseGrab(keep:boolean):void;
		SetKeepTouchGrab(keep:boolean):void;
		SetOpacity(vqr:number):void;
		SetParentItem(parent:QQuickItem_ITF):void;
		SetRotation(vqr:number):void;
		SetScale(vqr:number):void;
		SetSize(size:core.QSizeF_ITF):void;
		SetSmooth(vbo:boolean):void;
		SetState(vqs:string):void;
		SetTransformOrigin(vqq:number):void;
		SetVisible(vbo:boolean):void;
		SetWidth(vqr:number):void;
		SetX(vqr:number):void;
		SetY(vqr:number):void;
		SetZ(vqr:number):void;
		Size():core.QSizeF;
		Smooth():boolean;
		ConnectSmoothChanged(f:(vbo:boolean)=>void):void;
		DisconnectSmoothChanged():void;
		SmoothChanged(vbo:boolean):void;
		StackAfter(sibling:QQuickItem_ITF):void;
		StackBefore(sibling:QQuickItem_ITF):void;
		State():string;
		ConnectStateChanged(f:(vqs:string)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(vqs:string):void;
		ConnectTextureProvider(f:()=>QSGTextureProvider):void;
		DisconnectTextureProvider():void;
		TextureProvider():QSGTextureProvider;
		TextureProviderDefault():QSGTextureProvider;
		ConnectTouchEvent(f:(event:gui.QTouchEvent)=>void):void;
		DisconnectTouchEvent():void;
		TouchEvent(event:gui.QTouchEvent_ITF):void;
		TouchEventDefault(event:gui.QTouchEvent_ITF):void;
		ConnectTouchUngrabEvent(f:()=>void):void;
		DisconnectTouchUngrabEvent():void;
		TouchUngrabEvent():void;
		TouchUngrabEventDefault():void;
		TransformOrigin():number;
		ConnectTransformOriginChanged(f:(vqq:number)=>void):void;
		DisconnectTransformOriginChanged():void;
		TransformOriginChanged(vqq:number):void;
		UngrabMouse():void;
		UngrabTouchPoints():void;
		UnsetCursor():void;
		ConnectUpdate(f:()=>void):void;
		DisconnectUpdate():void;
		Update():void;
		UpdateDefault():void;
		UpdateInputMethod(queries:number):void;
		ConnectUpdatePolish(f:()=>void):void;
		DisconnectUpdatePolish():void;
		UpdatePolish():void;
		UpdatePolishDefault():void;
		ConnectVisibleChanged(f:()=>void):void;
		DisconnectVisibleChanged():void;
		VisibleChanged():void;
		ConnectWheelEvent(f:(event:gui.QWheelEvent)=>void):void;
		DisconnectWheelEvent():void;
		WheelEvent(event:gui.QWheelEvent_ITF):void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		Width():number;
		ConnectWidthChanged(f:()=>void):void;
		DisconnectWidthChanged():void;
		WidthChanged():void;
		WidthValid():boolean;
		Window():QQuickWindow;
		ConnectWindowChanged(f:(window:QQuickWindow)=>void):void;
		DisconnectWindowChanged():void;
		WindowChanged(window:QQuickWindow_ITF):void;
		X():number;
		ConnectXChanged(f:()=>void):void;
		DisconnectXChanged():void;
		XChanged():void;
		Y():number;
		ConnectYChanged(f:()=>void):void;
		DisconnectYChanged():void;
		YChanged():void;
		Z():number;
		ConnectZChanged(f:()=>void):void;
		DisconnectZChanged():void;
		ZChanged():void;
		ConnectDestroyQQuickItem(f:()=>void):void;
		DisconnectDestroyQQuickItem():void;
		DestroyQQuickItem():void;
		DestroyQQuickItemDefault():void;
		ChildEvent(event:core.QChildEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotify(sign:core.QMetaMethod_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEvent(event:core.QEvent_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLater():void;
		DeleteLaterDefault():void;
		DisconnectNotify(sign:core.QMetaMethod_ITF):void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilter(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQQuickItemFromPointer(ptr:number):QQuickItem;
	function NewQQuickItem(parent:QQuickItem_ITF):QQuickItem;
	const QQuickItem__ItemClipsChildrenToShape: number;
	const QQuickItem__ItemAcceptsInputMethod: number;
	const QQuickItem__ItemIsFocusScope: number;
	const QQuickItem__ItemHasContents: number;
	const QQuickItem__ItemAcceptsDrops: number;
	const QQuickItem__ItemChildAddedChange: number;
	const QQuickItem__ItemChildRemovedChange: number;
	const QQuickItem__ItemSceneChange: number;
	const QQuickItem__ItemVisibleHasChanged: number;
	const QQuickItem__ItemParentHasChanged: number;
	const QQuickItem__ItemOpacityHasChanged: number;
	const QQuickItem__ItemActiveFocusHasChanged: number;
	const QQuickItem__ItemRotationHasChanged: number;
	const QQuickItem__ItemAntialiasingHasChanged: number;
	const QQuickItem__ItemDevicePixelRatioHasChanged: number;
	const QQuickItem__ItemEnabledHasChanged: number;
	const QQuickItem__TopLeft: number;
	const QQuickItem__Top: number;
	const QQuickItem__TopRight: number;
	const QQuickItem__Left: number;
	const QQuickItem__Center: number;
	const QQuickItem__Right: number;
	const QQuickItem__BottomLeft: number;
	const QQuickItem__Bottom: number;
	const QQuickItem__BottomRight: number;
	interface QQuickItemGrabResult_ITF extends core.QObject_ITF {
		QQuickItemGrabResult_PTR():QQuickItemGrabResult;
	}

	class QQuickItemGrabResult extends core.QObject {
		___pointer: number;
		QQuickItemGrabResult_PTR():QQuickItemGrabResult;
		Pointer():number;
		SetPointer(p:number):void;
		Image():gui.QImage;
		ConnectReady(f:()=>void):void;
		DisconnectReady():void;
		Ready():void;
		SaveToFile(fileName:string):boolean;
		Url():core.QUrl;
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
	function NewQQuickItemGrabResultFromPointer(ptr:number):QQuickItemGrabResult;
	interface QQuickPaintedItem_ITF extends QQuickItem_ITF {
		QQuickPaintedItem_PTR():QQuickPaintedItem;
	}

	class QQuickPaintedItem extends QQuickItem {
		___pointer: number;
		QQuickPaintedItem_PTR():QQuickPaintedItem;
		Pointer():number;
		SetPointer(p:number):void;
		ContentsScale():number;
		ConnectContentsScaleChanged(f:()=>void):void;
		DisconnectContentsScaleChanged():void;
		ContentsScaleChanged():void;
		ContentsSize():core.QSize;
		ConnectContentsSizeChanged(f:()=>void):void;
		DisconnectContentsSizeChanged():void;
		ContentsSizeChanged():void;
		FillColor():gui.QColor;
		ConnectFillColorChanged(f:()=>void):void;
		DisconnectFillColorChanged():void;
		FillColorChanged():void;
		Mipmap():boolean;
		OpaquePainting():boolean;
		ConnectPaint(f:(painter:gui.QPainter)=>void):void;
		DisconnectPaint():void;
		Paint(painter:gui.QPainter_ITF):void;
		PerformanceHints():number;
		RenderTarget():number;
		ConnectRenderTargetChanged(f:()=>void):void;
		DisconnectRenderTargetChanged():void;
		RenderTargetChanged():void;
		SetContentsScale(vqr:number):void;
		SetContentsSize(vqs:core.QSize_ITF):void;
		SetFillColor(vqc:gui.QColor_ITF):void;
		SetMipmap(enable:boolean):void;
		SetOpaquePainting(opaque:boolean):void;
		SetPerformanceHint(hint:number,enabled:boolean):void;
		SetPerformanceHints(hints:number):void;
		SetRenderTarget(target:number):void;
		SetTextureSize(size:core.QSize_ITF):void;
		TextureSize():core.QSize;
		ConnectTextureSizeChanged(f:()=>void):void;
		DisconnectTextureSizeChanged():void;
		TextureSizeChanged():void;
		Update(rect:core.QRect_ITF):void;
		ConnectDestroyQQuickPaintedItem(f:()=>void):void;
		DisconnectDestroyQQuickPaintedItem():void;
		DestroyQQuickPaintedItem():void;
		DestroyQQuickPaintedItemDefault():void;
	}
	function NewQQuickPaintedItemFromPointer(ptr:number):QQuickPaintedItem;
	function NewQQuickPaintedItem(parent:QQuickItem_ITF):QQuickPaintedItem;
	const QQuickPaintedItem__Image: number;
	const QQuickPaintedItem__FramebufferObject: number;
	const QQuickPaintedItem__InvertedYFramebufferObject: number;
	const QQuickPaintedItem__FastFBOResizing: number;
	interface QQuickProfilerAdapterFactory_ITF {
		QQuickProfilerAdapterFactory_PTR():QQuickProfilerAdapterFactory;
	}

	class QQuickProfilerAdapterFactory {
		___pointer: number;
		QQuickProfilerAdapterFactory_PTR():QQuickProfilerAdapterFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQuickProfilerAdapterFactory():void;
	}
	function NewQQuickProfilerAdapterFactoryFromPointer(ptr:number):QQuickProfilerAdapterFactory;
	interface QQuickRenderControl_ITF extends core.QObject_ITF {
		QQuickRenderControl_PTR():QQuickRenderControl;
	}

	class QQuickRenderControl extends core.QObject {
		___pointer: number;
		QQuickRenderControl_PTR():QQuickRenderControl;
		Pointer():number;
		SetPointer(p:number):void;
		Grab():gui.QImage;
		Initialize(gl:gui.QOpenGLContext_ITF):void;
		Invalidate():void;
		PolishItems():void;
		PrepareThread(targetThread:core.QThread_ITF):void;
		Render():void;
		ConnectRenderRequested(f:()=>void):void;
		DisconnectRenderRequested():void;
		RenderRequested():void;
		ConnectRenderWindow(f:(offset:core.QPoint)=>gui.QWindow):void;
		DisconnectRenderWindow():void;
		RenderWindow(offset:core.QPoint_ITF):gui.QWindow;
		RenderWindowDefault(offset:core.QPoint_ITF):gui.QWindow;
		RenderWindowFor(wi:QQuickWindow_ITF,offset:core.QPoint_ITF):gui.QWindow;
		ConnectSceneChanged(f:()=>void):void;
		DisconnectSceneChanged():void;
		SceneChanged():void;
		Sync():boolean;
		ConnectDestroyQQuickRenderControl(f:()=>void):void;
		DisconnectDestroyQQuickRenderControl():void;
		DestroyQQuickRenderControl():void;
		DestroyQQuickRenderControlDefault():void;
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
	function NewQQuickRenderControlFromPointer(ptr:number):QQuickRenderControl;
	function NewQQuickRenderControl(parent:core.QObject_ITF):QQuickRenderControl;
	function QQuickRenderControl_RenderWindowFor(wi:QQuickWindow_ITF,offset:core.QPoint_ITF):gui.QWindow;
	interface QQuickTextDocument_ITF extends core.QObject_ITF {
		QQuickTextDocument_PTR():QQuickTextDocument;
	}

	class QQuickTextDocument extends core.QObject {
		___pointer: number;
		QQuickTextDocument_PTR():QQuickTextDocument;
		Pointer():number;
		SetPointer(p:number):void;
		TextDocument():gui.QTextDocument;
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
	function NewQQuickTextDocumentFromPointer(ptr:number):QQuickTextDocument;
	function NewQQuickTextDocument(parent:QQuickItem_ITF):QQuickTextDocument;
	interface QQuickTextureFactory_ITF extends core.QObject_ITF {
		QQuickTextureFactory_PTR():QQuickTextureFactory;
	}

	class QQuickTextureFactory extends core.QObject {
		___pointer: number;
		QQuickTextureFactory_PTR():QQuickTextureFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreateTexture(f:(window:QQuickWindow)=>QSGTexture):void;
		DisconnectCreateTexture():void;
		CreateTexture(window:QQuickWindow_ITF):QSGTexture;
		ConnectImage(f:()=>gui.QImage):void;
		DisconnectImage():void;
		Image():gui.QImage;
		ImageDefault():gui.QImage;
		ConnectTextureByteCount(f:()=>number):void;
		DisconnectTextureByteCount():void;
		TextureByteCount():number;
		TextureFactoryForImage(image:gui.QImage_ITF):QQuickTextureFactory;
		ConnectTextureSize(f:()=>core.QSize):void;
		DisconnectTextureSize():void;
		TextureSize():core.QSize;
		ConnectDestroyQQuickTextureFactory(f:()=>void):void;
		DisconnectDestroyQQuickTextureFactory():void;
		DestroyQQuickTextureFactory():void;
		DestroyQQuickTextureFactoryDefault():void;
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
	function NewQQuickTextureFactoryFromPointer(ptr:number):QQuickTextureFactory;
	function NewQQuickTextureFactory():QQuickTextureFactory;
	function QQuickTextureFactory_TextureFactoryForImage(image:gui.QImage_ITF):QQuickTextureFactory;
	interface QQuickTransform_ITF extends core.QObject_ITF {
		QQuickTransform_PTR():QQuickTransform;
	}

	class QQuickTransform extends core.QObject {
		___pointer: number;
		QQuickTransform_PTR():QQuickTransform;
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
	function NewQQuickTransformFromPointer(ptr:number):QQuickTransform;
	interface QQuickView_ITF extends QQuickWindow_ITF {
		QQuickView_PTR():QQuickView;
	}

	class QQuickView extends QQuickWindow {
		___pointer: number;
		QQuickView_PTR():QQuickView;
		Pointer():number;
		SetPointer(p:number):void;
		Engine():qml.QQmlEngine;
		Errors():qml.QQmlError[];
		InitialSize():core.QSize;
		ResizeMode():number;
		RootContext():qml.QQmlContext;
		RootObject():QQuickItem;
		SetResizeMode(vqq:number):void;
		ConnectSetSource(f:(url:core.QUrl)=>void):void;
		DisconnectSetSource():void;
		SetSource(url:core.QUrl_ITF):void;
		SetSourceDefault(url:core.QUrl_ITF):void;
		Source():core.QUrl;
		Status():number;
		ConnectStatusChanged(f:(status:number)=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged(status:number):void;
		ConnectDestroyQQuickView(f:()=>void):void;
		DisconnectDestroyQQuickView():void;
		DestroyQQuickView():void;
		DestroyQQuickViewDefault():void;
	}
	function NewQQuickViewFromPointer(ptr:number):QQuickView;
	function NewQQuickView(parent:gui.QWindow_ITF):QQuickView;
	function NewQQuickView2(engine:qml.QQmlEngine_ITF,parent:gui.QWindow_ITF):QQuickView;
	function NewQQuickView3(source:core.QUrl_ITF,parent:gui.QWindow_ITF):QQuickView;
	const QQuickView__SizeViewToRootObject: number;
	const QQuickView__SizeRootObjectToView: number;
	const QQuickView__Null: number;
	const QQuickView__Ready: number;
	const QQuickView__Loading: number;
	const QQuickView__Error: number;
	interface QQuickWidget_ITF extends widgets.QWidget_ITF {
		QQuickWidget_PTR():QQuickWidget;
	}

	class QQuickWidget extends widgets.QWidget {
		___pointer: number;
		QQuickWidget_PTR():QQuickWidget;
		Pointer():number;
		SetPointer(p:number):void;
		DragEnterEventDefault(e:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(e:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(e:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(e:gui.QDropEvent_ITF):void;
		Engine():qml.QQmlEngine;
		Errors():qml.QQmlError[];
		EventDefault(e:core.QEvent_ITF):boolean;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		Format():gui.QSurfaceFormat;
		GrabFramebuffer():gui.QImage;
		HideEventDefault(vqh:gui.QHideEvent_ITF):void;
		InitialSize():core.QSize;
		KeyPressEventDefault(e:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(e:gui.QKeyEvent_ITF):void;
		MouseDoubleClickEventDefault(e:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(e:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(e:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(e:gui.QMouseEvent_ITF):void;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		QuickWindow():QQuickWindow;
		ResizeMode():number;
		RootContext():qml.QQmlContext;
		RootObject():QQuickItem;
		ConnectSceneGraphError(f:(error:number,message:string)=>void):void;
		DisconnectSceneGraphError():void;
		SceneGraphError(error:number,message:string):void;
		SetClearColor(color:gui.QColor_ITF):void;
		SetFormat(format:gui.QSurfaceFormat_ITF):void;
		SetResizeMode(vqq:number):void;
		ConnectSetSource(f:(url:core.QUrl)=>void):void;
		DisconnectSetSource():void;
		SetSource(url:core.QUrl_ITF):void;
		SetSourceDefault(url:core.QUrl_ITF):void;
		ShowEventDefault(vqs:gui.QShowEvent_ITF):void;
		Source():core.QUrl;
		Status():number;
		ConnectStatusChanged(f:(status:number)=>void):void;
		DisconnectStatusChanged():void;
		StatusChanged(status:number):void;
		WheelEventDefault(e:gui.QWheelEvent_ITF):void;
		ConnectDestroyQQuickWidget(f:()=>void):void;
		DisconnectDestroyQQuickWidget():void;
		DestroyQQuickWidget():void;
		DestroyQQuickWidgetDefault():void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MetricDefault(m:number):number;
		MinimumSizeHintDefault():core.QSize;
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
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		SizeHintDefault():core.QSize;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		UpdateDefault():void;
		UpdateMicroFocusDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQQuickWidgetFromPointer(ptr:number):QQuickWidget;
	function NewQQuickWidget(parent:widgets.QWidget_ITF):QQuickWidget;
	function NewQQuickWidget2(engine:qml.QQmlEngine_ITF,parent:widgets.QWidget_ITF):QQuickWidget;
	function NewQQuickWidget3(source:core.QUrl_ITF,parent:widgets.QWidget_ITF):QQuickWidget;
	const QQuickWidget__SizeViewToRootObject: number;
	const QQuickWidget__SizeRootObjectToView: number;
	const QQuickWidget__Null: number;
	const QQuickWidget__Ready: number;
	const QQuickWidget__Loading: number;
	const QQuickWidget__Error: number;
	interface QQuickWindow_ITF extends gui.QWindow_ITF {
		QQuickWindow_PTR():QQuickWindow;
	}

	class QQuickWindow extends gui.QWindow {
		___pointer: number;
		QQuickWindow_PTR():QQuickWindow;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAccessibleRoot(f:()=>gui.QAccessibleInterface):void;
		DisconnectAccessibleRoot():void;
		AccessibleRoot():gui.QAccessibleInterface;
		AccessibleRootDefault():gui.QAccessibleInterface;
		ActiveFocusItem():QQuickItem;
		ConnectActiveFocusItemChanged(f:()=>void):void;
		DisconnectActiveFocusItemChanged():void;
		ActiveFocusItemChanged():void;
		ConnectAfterAnimating(f:()=>void):void;
		DisconnectAfterAnimating():void;
		AfterAnimating():void;
		ConnectAfterRendering(f:()=>void):void;
		DisconnectAfterRendering():void;
		AfterRendering():void;
		ConnectAfterSynchronizing(f:()=>void):void;
		DisconnectAfterSynchronizing():void;
		AfterSynchronizing():void;
		ConnectBeforeRendering(f:()=>void):void;
		DisconnectBeforeRendering():void;
		BeforeRendering():void;
		ConnectBeforeSynchronizing(f:()=>void):void;
		DisconnectBeforeSynchronizing():void;
		BeforeSynchronizing():void;
		ClearBeforeRendering():boolean;
		Color():gui.QColor;
		ConnectColorChanged(f:(vqc:gui.QColor)=>void):void;
		DisconnectColorChanged():void;
		ColorChanged(vqc:gui.QColor_ITF):void;
		ContentItem():QQuickItem;
		CreateImageNode():QSGImageNode;
		CreateRectangleNode():QSGRectangleNode;
		CreateTextureFromId(id:number,size:core.QSize_ITF,options:number):QSGTexture;
		CreateTextureFromImage(image:gui.QImage_ITF,options:number):QSGTexture;
		CreateTextureFromImage2(image:gui.QImage_ITF):QSGTexture;
		EffectiveDevicePixelRatio():number;
		EventDefault(e:core.QEvent_ITF):boolean;
		ExposeEventDefault(vqe:gui.QExposeEvent_ITF):void;
		FocusInEventDefault(ev:gui.QFocusEvent_ITF):void;
		FocusOutEventDefault(ev:gui.QFocusEvent_ITF):void;
		ConnectFrameSwapped(f:()=>void):void;
		DisconnectFrameSwapped():void;
		FrameSwapped():void;
		GrabWindow():gui.QImage;
		HasDefaultAlphaBuffer():boolean;
		HideEventDefault(vqh:gui.QHideEvent_ITF):void;
		IncubationController():qml.QQmlIncubationController;
		IsPersistentOpenGLContext():boolean;
		IsPersistentSceneGraph():boolean;
		IsSceneGraphInitialized():boolean;
		KeyPressEventDefault(e:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(e:gui.QKeyEvent_ITF):void;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseGrabberItem():QQuickItem;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		OpenglContext():gui.QOpenGLContext;
		ConnectOpenglContextCreated(f:(context:gui.QOpenGLContext)=>void):void;
		DisconnectOpenglContextCreated():void;
		OpenglContextCreated(context:gui.QOpenGLContext_ITF):void;
		ConnectReleaseResources(f:()=>void):void;
		DisconnectReleaseResources():void;
		ReleaseResources():void;
		ReleaseResourcesDefault():void;
		RenderTarget():gui.QOpenGLFramebufferObject;
		RenderTargetId():number;
		RenderTargetSize():core.QSize;
		RendererInterface():QSGRendererInterface;
		ResetOpenGLState():void;
		ResizeEventDefault(ev:gui.QResizeEvent_ITF):void;
		ConnectSceneGraphAboutToStop(f:()=>void):void;
		DisconnectSceneGraphAboutToStop():void;
		SceneGraphAboutToStop():void;
		SceneGraphBackend():string;
		ConnectSceneGraphError(f:(error:number,message:string)=>void):void;
		DisconnectSceneGraphError():void;
		SceneGraphError(error:number,message:string):void;
		ConnectSceneGraphInitialized(f:()=>void):void;
		DisconnectSceneGraphInitialized():void;
		SceneGraphInitialized():void;
		ConnectSceneGraphInvalidated(f:()=>void):void;
		DisconnectSceneGraphInvalidated():void;
		SceneGraphInvalidated():void;
		ScheduleRenderJob(job:core.QRunnable_ITF,stage:number):void;
		SetClearBeforeRendering(enabled:boolean):void;
		SetColor(color:gui.QColor_ITF):void;
		SetDefaultAlphaBuffer(useAlpha:boolean):void;
		SetPersistentOpenGLContext(persistent:boolean):void;
		SetPersistentSceneGraph(persistent:boolean):void;
		SetRenderTarget(fbo:gui.QOpenGLFramebufferObject_ITF):void;
		SetRenderTarget2(fboId:number,size:core.QSize_ITF):void;
		SetSceneGraphBackend(api:number):void;
		SetSceneGraphBackend2(backend:string):void;
		SetTextRenderType(renderType:number):void;
		ShowEventDefault(vqs:gui.QShowEvent_ITF):void;
		TextRenderType():number;
		ConnectUpdate(f:()=>void):void;
		DisconnectUpdate():void;
		Update():void;
		UpdateDefault():void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ConnectDestroyQQuickWindow(f:()=>void):void;
		DisconnectDestroyQQuickWindow():void;
		DestroyQQuickWindow():void;
		DestroyQQuickWindowDefault():void;
		AlertDefault(msec:number):void;
		CloseDefault():boolean;
		FocusObjectDefault():core.QObject;
		FormatDefault():gui.QSurfaceFormat;
		HideDefault():void;
		LowerDefault():void;
		MoveEventDefault(ev:gui.QMoveEvent_ITF):void;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		RaiseDefault():void;
		RequestActivateDefault():void;
		RequestUpdateDefault():void;
		SetGeometryDefault(posx:number,posy:number,w:number,h:number):void;
		SetGeometry2Default(rect:core.QRect_ITF):void;
		SetHeightDefault(arg:number):void;
		SetMaximumHeightDefault(h:number):void;
		SetMaximumWidthDefault(w:number):void;
		SetMinimumHeightDefault(h:number):void;
		SetMinimumWidthDefault(w:number):void;
		SetTitleDefault(vqs:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWidthDefault(arg:number):void;
		SetXDefault(arg:number):void;
		SetYDefault(arg:number):void;
		ShowDefault():void;
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		SizeDefault():core.QSize;
		SurfaceTypeDefault():number;
		TabletEventDefault(ev:gui.QTabletEvent_ITF):void;
		TouchEventDefault(ev:gui.QTouchEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQQuickWindowFromPointer(ptr:number):QQuickWindow;
	function NewQQuickWindow(parent:gui.QWindow_ITF):QQuickWindow;
	function QQuickWindow_HasDefaultAlphaBuffer():boolean;
	function QQuickWindow_SceneGraphBackend():string;
	function QQuickWindow_SetDefaultAlphaBuffer(useAlpha:boolean):void;
	function QQuickWindow_SetSceneGraphBackend(api:number):void;
	function QQuickWindow_SetSceneGraphBackend2(backend:string):void;
	function QQuickWindow_SetTextRenderType(renderType:number):void;
	function QQuickWindow_TextRenderType():number;
	const QQuickWindow__TextureHasAlphaChannel: number;
	const QQuickWindow__TextureHasMipmaps: number;
	const QQuickWindow__TextureOwnsGLTexture: number;
	const QQuickWindow__TextureCanUseAtlas: number;
	const QQuickWindow__TextureIsOpaque: number;
	const QQuickWindow__BeforeSynchronizingStage: number;
	const QQuickWindow__AfterSynchronizingStage: number;
	const QQuickWindow__BeforeRenderingStage: number;
	const QQuickWindow__AfterRenderingStage: number;
	const QQuickWindow__AfterSwapStage: number;
	const QQuickWindow__NoStage: number;
	const QQuickWindow__ContextNotAvailable: number;
	const QQuickWindow__QtTextRendering: number;
	const QQuickWindow__NativeTextRendering: number;
	interface QSGAbstractRenderer_ITF extends core.QObject_ITF {
		QSGAbstractRenderer_PTR():QSGAbstractRenderer;
	}

	class QSGAbstractRenderer extends core.QObject {
		___pointer: number;
		QSGAbstractRenderer_PTR():QSGAbstractRenderer;
		Pointer():number;
		SetPointer(p:number):void;
		ClearColor():gui.QColor;
		ClearMode():number;
		DeviceRect():core.QRect;
		ProjectionMatrix():gui.QMatrix4x4;
		ConnectRenderScene(f:(fboId:number)=>void):void;
		DisconnectRenderScene():void;
		RenderScene(fboId:number):void;
		ConnectSceneGraphChanged(f:()=>void):void;
		DisconnectSceneGraphChanged():void;
		SceneGraphChanged():void;
		SetClearColor(color:gui.QColor_ITF):void;
		SetClearMode(mode:number):void;
		SetDeviceRect(rect:core.QRect_ITF):void;
		SetDeviceRect2(size:core.QSize_ITF):void;
		SetProjectionMatrix(matrix:gui.QMatrix4x4_ITF):void;
		SetProjectionMatrixToRect(rect:core.QRectF_ITF):void;
		SetViewportRect(rect:core.QRect_ITF):void;
		SetViewportRect2(size:core.QSize_ITF):void;
		ViewportRect():core.QRect;
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
	function NewQSGAbstractRendererFromPointer(ptr:number):QSGAbstractRenderer;
	const QSGAbstractRenderer__ClearColorBuffer: number;
	const QSGAbstractRenderer__ClearDepthBuffer: number;
	const QSGAbstractRenderer__ClearStencilBuffer: number;
	interface QSGBasicGeometryNode_ITF extends QSGNode_ITF {
		QSGBasicGeometryNode_PTR():QSGBasicGeometryNode;
	}

	class QSGBasicGeometryNode extends QSGNode {
		___pointer: number;
		QSGBasicGeometryNode_PTR():QSGBasicGeometryNode;
		Pointer():number;
		SetPointer(p:number):void;
		Geometry():QSGGeometry;
		Geometry2():QSGGeometry;
		SetGeometry(geometry:QSGGeometry_ITF):void;
		ConnectDestroyQSGBasicGeometryNode(f:()=>void):void;
		DisconnectDestroyQSGBasicGeometryNode():void;
		DestroyQSGBasicGeometryNode():void;
		DestroyQSGBasicGeometryNodeDefault():void;
	}
	function NewQSGBasicGeometryNodeFromPointer(ptr:number):QSGBasicGeometryNode;
	interface QSGClipNode_ITF extends QSGBasicGeometryNode_ITF {
		QSGClipNode_PTR():QSGClipNode;
	}

	class QSGClipNode extends QSGBasicGeometryNode {
		___pointer: number;
		QSGClipNode_PTR():QSGClipNode;
		Pointer():number;
		SetPointer(p:number):void;
		ClipRect():core.QRectF;
		IsRectangular():boolean;
		SetClipRect(rect:core.QRectF_ITF):void;
		SetIsRectangular(rectHint:boolean):void;
		ConnectDestroyQSGClipNode(f:()=>void):void;
		DisconnectDestroyQSGClipNode():void;
		DestroyQSGClipNode():void;
		DestroyQSGClipNodeDefault():void;
	}
	function NewQSGClipNodeFromPointer(ptr:number):QSGClipNode;
	function NewQSGClipNode():QSGClipNode;
	interface QSGDynamicTexture_ITF extends QSGTexture_ITF {
		QSGDynamicTexture_PTR():QSGDynamicTexture;
	}

	class QSGDynamicTexture extends QSGTexture {
		___pointer: number;
		QSGDynamicTexture_PTR():QSGDynamicTexture;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectUpdateTexture(f:()=>boolean):void;
		DisconnectUpdateTexture():void;
		UpdateTexture():boolean;
		Bind():void;
		BindDefault():void;
		HasAlphaChannel():boolean;
		HasAlphaChannelDefault():boolean;
		HasMipmaps():boolean;
		HasMipmapsDefault():boolean;
		TextureId():number;
		TextureIdDefault():number;
		TextureSize():core.QSize;
		TextureSizeDefault():core.QSize;
	}
	function NewQSGDynamicTextureFromPointer(ptr:number):QSGDynamicTexture;
	interface QSGEngine_ITF extends core.QObject_ITF {
		QSGEngine_PTR():QSGEngine;
	}

	class QSGEngine extends core.QObject {
		___pointer: number;
		QSGEngine_PTR():QSGEngine;
		Pointer():number;
		SetPointer(p:number):void;
		CreateImageNode():QSGImageNode;
		CreateRectangleNode():QSGRectangleNode;
		CreateRenderer():QSGAbstractRenderer;
		CreateTextureFromId(id:number,size:core.QSize_ITF,options:number):QSGTexture;
		CreateTextureFromImage(image:gui.QImage_ITF,options:number):QSGTexture;
		Initialize(context:gui.QOpenGLContext_ITF):void;
		Invalidate():void;
		RendererInterface():QSGRendererInterface;
		ConnectDestroyQSGEngine(f:()=>void):void;
		DisconnectDestroyQSGEngine():void;
		DestroyQSGEngine():void;
		DestroyQSGEngineDefault():void;
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
	function NewQSGEngineFromPointer(ptr:number):QSGEngine;
	function NewQSGEngine(parent:core.QObject_ITF):QSGEngine;
	const QSGEngine__TextureHasAlphaChannel: number;
	const QSGEngine__TextureOwnsGLTexture: number;
	const QSGEngine__TextureCanUseAtlas: number;
	const QSGEngine__TextureIsOpaque: number;
	interface QSGFlatColorMaterial_ITF extends QSGMaterial_ITF {
		QSGFlatColorMaterial_PTR():QSGFlatColorMaterial;
	}

	class QSGFlatColorMaterial extends QSGMaterial {
		___pointer: number;
		QSGFlatColorMaterial_PTR():QSGFlatColorMaterial;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGFlatColorMaterial():void;
		Color():gui.QColor;
		SetColor(color:gui.QColor_ITF):void;
		CreateShader():QSGMaterialShader;
		CreateShaderDefault():QSGMaterialShader;
		Type():QSGMaterialType;
		TypeDefault():QSGMaterialType;
	}
	function NewQSGFlatColorMaterialFromPointer(ptr:number):QSGFlatColorMaterial;
	function NewQSGFlatColorMaterial():QSGFlatColorMaterial;
	interface QSGGeometry_ITF {
		QSGGeometry_PTR():QSGGeometry;
	}

	class QSGGeometry {
		___pointer: number;
		QSGGeometry_PTR():QSGGeometry;
		Pointer():number;
		SetPointer(p:number):void;
		Allocate(vertexCount:number,indexCount:number):void;
		AttributeCount():number;
		DrawingMode():number;
		IndexCount():number;
		IndexData():number;
		IndexData2():number;
		IndexDataAsUInt():number;
		IndexDataAsUInt2():number;
		IndexDataAsUShort():number;
		IndexDataAsUShort2():number;
		IndexDataPattern():number;
		IndexType():number;
		LineWidth():number;
		MarkIndexDataDirty():void;
		MarkVertexDataDirty():void;
		SetDrawingMode(mode:number):void;
		SetIndexDataPattern(p:number):void;
		SetLineWidth(width:number):void;
		SetVertexDataPattern(p:number):void;
		SizeOfIndex():number;
		SizeOfVertex():number;
		UpdateColoredRectGeometry(g:QSGGeometry_ITF,rect:core.QRectF_ITF):void;
		UpdateRectGeometry(g:QSGGeometry_ITF,rect:core.QRectF_ITF):void;
		UpdateTexturedRectGeometry(g:QSGGeometry_ITF,rect:core.QRectF_ITF,textureRect:core.QRectF_ITF):void;
		VertexCount():number;
		VertexData():number;
		VertexData2():number;
		VertexDataPattern():number;
		ConnectDestroyQSGGeometry(f:()=>void):void;
		DisconnectDestroyQSGGeometry():void;
		DestroyQSGGeometry():void;
		DestroyQSGGeometryDefault():void;
	}
	function NewQSGGeometryFromPointer(ptr:number):QSGGeometry;
	function QSGGeometry_UpdateColoredRectGeometry(g:QSGGeometry_ITF,rect:core.QRectF_ITF):void;
	function QSGGeometry_UpdateRectGeometry(g:QSGGeometry_ITF,rect:core.QRectF_ITF):void;
	function QSGGeometry_UpdateTexturedRectGeometry(g:QSGGeometry_ITF,rect:core.QRectF_ITF,textureRect:core.QRectF_ITF):void;
	function NewQSGGeometryNode():QSGGeometryNode;
	const QSGGeometry__UnknownAttribute: number;
	const QSGGeometry__PositionAttribute: number;
	const QSGGeometry__ColorAttribute: number;
	const QSGGeometry__TexCoordAttribute: number;
	const QSGGeometry__TexCoord1Attribute: number;
	const QSGGeometry__TexCoord2Attribute: number;
	const QSGGeometry__AlwaysUploadPattern: number;
	const QSGGeometry__StreamPattern: number;
	const QSGGeometry__DynamicPattern: number;
	const QSGGeometry__StaticPattern: number;
	const QSGGeometry__DrawPoints: number;
	const QSGGeometry__DrawLines: number;
	const QSGGeometry__DrawLineLoop: number;
	const QSGGeometry__DrawLineStrip: number;
	const QSGGeometry__DrawTriangles: number;
	const QSGGeometry__DrawTriangleStrip: number;
	const QSGGeometry__DrawTriangleFan: number;
	const QSGGeometry__ByteType: number;
	const QSGGeometry__UnsignedByteType: number;
	const QSGGeometry__ShortType: number;
	const QSGGeometry__UnsignedShortType: number;
	const QSGGeometry__IntType: number;
	const QSGGeometry__UnsignedIntType: number;
	const QSGGeometry__FloatType: number;
	interface QSGGeometryNode_ITF extends QSGBasicGeometryNode_ITF {
		QSGGeometryNode_PTR():QSGGeometryNode;
	}

	class QSGGeometryNode extends QSGBasicGeometryNode {
		___pointer: number;
		QSGGeometryNode_PTR():QSGGeometryNode;
		Pointer():number;
		SetPointer(p:number):void;
		Material():QSGMaterial;
		OpaqueMaterial():QSGMaterial;
		SetMaterial(material:QSGMaterial_ITF):void;
		SetOpaqueMaterial(material:QSGMaterial_ITF):void;
		ConnectDestroyQSGGeometryNode(f:()=>void):void;
		DisconnectDestroyQSGGeometryNode():void;
		DestroyQSGGeometryNode():void;
		DestroyQSGGeometryNodeDefault():void;
	}
	function NewQSGGeometryNodeFromPointer(ptr:number):QSGGeometryNode;
	function NewQSGGeometryNode():QSGGeometryNode;
	interface QSGImageNode_ITF extends QSGGeometryNode_ITF {
		QSGImageNode_PTR():QSGImageNode;
	}

	class QSGImageNode extends QSGGeometryNode {
		___pointer: number;
		QSGImageNode_PTR():QSGImageNode;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGImageNode():void;
		ConnectFiltering(f:()=>number):void;
		DisconnectFiltering():void;
		Filtering():number;
		ConnectMipmapFiltering(f:()=>number):void;
		DisconnectMipmapFiltering():void;
		MipmapFiltering():number;
		ConnectOwnsTexture(f:()=>boolean):void;
		DisconnectOwnsTexture():void;
		OwnsTexture():boolean;
		RebuildGeometry(g:QSGGeometry_ITF,texture:QSGTexture_ITF,rect:core.QRectF_ITF,sourceRect:core.QRectF_ITF,texCoordMode:number):void;
		ConnectRect(f:()=>core.QRectF):void;
		DisconnectRect():void;
		Rect():core.QRectF;
		ConnectSetFiltering(f:(filtering:number)=>void):void;
		DisconnectSetFiltering():void;
		SetFiltering(filtering:number):void;
		ConnectSetMipmapFiltering(f:(filtering:number)=>void):void;
		DisconnectSetMipmapFiltering():void;
		SetMipmapFiltering(filtering:number):void;
		ConnectSetOwnsTexture(f:(owns:boolean)=>void):void;
		DisconnectSetOwnsTexture():void;
		SetOwnsTexture(owns:boolean):void;
		ConnectSetRect(f:(rect:core.QRectF)=>void):void;
		DisconnectSetRect():void;
		SetRect(rect:core.QRectF_ITF):void;
		SetRect2(x:number,y:number,w:number,h:number):void;
		ConnectSetSourceRect(f:(rect:core.QRectF)=>void):void;
		DisconnectSetSourceRect():void;
		SetSourceRect(rect:core.QRectF_ITF):void;
		SetSourceRect2(x:number,y:number,w:number,h:number):void;
		ConnectSetTexture(f:(texture:QSGTexture)=>void):void;
		DisconnectSetTexture():void;
		SetTexture(texture:QSGTexture_ITF):void;
		ConnectSetTextureCoordinatesTransform(f:(mode:number)=>void):void;
		DisconnectSetTextureCoordinatesTransform():void;
		SetTextureCoordinatesTransform(mode:number):void;
		ConnectSourceRect(f:()=>core.QRectF):void;
		DisconnectSourceRect():void;
		SourceRect():core.QRectF;
		ConnectTexture(f:()=>QSGTexture):void;
		DisconnectTexture():void;
		Texture():QSGTexture;
		ConnectTextureCoordinatesTransform(f:()=>number):void;
		DisconnectTextureCoordinatesTransform():void;
		TextureCoordinatesTransform():number;
	}
	function NewQSGImageNodeFromPointer(ptr:number):QSGImageNode;
	function QSGImageNode_RebuildGeometry(g:QSGGeometry_ITF,texture:QSGTexture_ITF,rect:core.QRectF_ITF,sourceRect:core.QRectF_ITF,texCoordMode:number):void;
	const QSGImageNode__NoTransform: number;
	const QSGImageNode__MirrorHorizontally: number;
	const QSGImageNode__MirrorVertically: number;
	interface QSGMaterial_ITF {
		QSGMaterial_PTR():QSGMaterial;
	}

	class QSGMaterial {
		___pointer: number;
		QSGMaterial_PTR():QSGMaterial;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGMaterial():void;
		ConnectCompare(f:(other:QSGMaterial)=>number):void;
		DisconnectCompare():void;
		Compare(other:QSGMaterial_ITF):number;
		CompareDefault(other:QSGMaterial_ITF):number;
		ConnectCreateShader(f:()=>QSGMaterialShader):void;
		DisconnectCreateShader():void;
		CreateShader():QSGMaterialShader;
		Flags():number;
		SetFlag(flags:number,on:boolean):void;
		ConnectType(f:()=>QSGMaterialType):void;
		DisconnectType():void;
		Type():QSGMaterialType;
	}
	function NewQSGMaterialFromPointer(ptr:number):QSGMaterial;
	const QSGMaterial__Blending: number;
	const QSGMaterial__RequiresDeterminant: number;
	const QSGMaterial__RequiresFullMatrixExceptTranslate: number;
	const QSGMaterial__RequiresFullMatrix: number;
	const QSGMaterial__CustomCompileStep: number;
	interface QSGMaterialShader_ITF {
		QSGMaterialShader_PTR():QSGMaterialShader;
	}

	class QSGMaterialShader {
		___pointer: number;
		QSGMaterialShader_PTR():QSGMaterialShader;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGMaterialShader():void;
		ConnectActivate(f:()=>void):void;
		DisconnectActivate():void;
		Activate():void;
		ActivateDefault():void;
		ConnectCompile(f:()=>void):void;
		DisconnectCompile():void;
		Compile():void;
		CompileDefault():void;
		ConnectDeactivate(f:()=>void):void;
		DisconnectDeactivate():void;
		Deactivate():void;
		DeactivateDefault():void;
		ConnectFragmentShader(f:()=>string):void;
		DisconnectFragmentShader():void;
		FragmentShader():string;
		FragmentShaderDefault():string;
		ConnectInitialize(f:()=>void):void;
		DisconnectInitialize():void;
		Initialize():void;
		InitializeDefault():void;
		Program():gui.QOpenGLShaderProgram;
		SetShaderSourceFile(ty:number,sourceFile:string):void;
		SetShaderSourceFiles(ty:number,sourceFiles:string[]):void;
		ConnectVertexShader(f:()=>string):void;
		DisconnectVertexShader():void;
		VertexShader():string;
		VertexShaderDefault():string;
	}
	function NewQSGMaterialShaderFromPointer(ptr:number):QSGMaterialShader;
	interface QSGMaterialType_ITF {
		QSGMaterialType_PTR():QSGMaterialType;
	}

	class QSGMaterialType {
		___pointer: number;
		QSGMaterialType_PTR():QSGMaterialType;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGMaterialType():void;
	}
	function NewQSGMaterialTypeFromPointer(ptr:number):QSGMaterialType;
	interface QSGNode_ITF {
		QSGNode_PTR():QSGNode;
	}

	class QSGNode {
		___pointer: number;
		QSGNode_PTR():QSGNode;
		Pointer():number;
		SetPointer(p:number):void;
		AppendChildNode(node:QSGNode_ITF):void;
		ChildAtIndex(i:number):QSGNode;
		ChildCount():number;
		FirstChild():QSGNode;
		Flags():number;
		InsertChildNodeAfter(node:QSGNode_ITF,after:QSGNode_ITF):void;
		InsertChildNodeBefore(node:QSGNode_ITF,before:QSGNode_ITF):void;
		ConnectIsSubtreeBlocked(f:()=>boolean):void;
		DisconnectIsSubtreeBlocked():void;
		IsSubtreeBlocked():boolean;
		IsSubtreeBlockedDefault():boolean;
		LastChild():QSGNode;
		MarkDirty(bits:number):void;
		NextSibling():QSGNode;
		Parent():QSGNode;
		PrependChildNode(node:QSGNode_ITF):void;
		ConnectPreprocess(f:()=>void):void;
		DisconnectPreprocess():void;
		Preprocess():void;
		PreprocessDefault():void;
		PreviousSibling():QSGNode;
		RemoveAllChildNodes():void;
		RemoveChildNode(node:QSGNode_ITF):void;
		SetFlag(ff:number,enabled:boolean):void;
		SetFlags(ff:number,enabled:boolean):void;
		Type():number;
		ConnectDestroyQSGNode(f:()=>void):void;
		DisconnectDestroyQSGNode():void;
		DestroyQSGNode():void;
		DestroyQSGNodeDefault():void;
	}
	function NewQSGNodeFromPointer(ptr:number):QSGNode;
	function NewQSGNode():QSGNode;
	const QSGNode__BasicNodeType: number;
	const QSGNode__GeometryNodeType: number;
	const QSGNode__TransformNodeType: number;
	const QSGNode__ClipNodeType: number;
	const QSGNode__OpacityNodeType: number;
	const QSGNode__RootNodeType: number;
	const QSGNode__RenderNodeType: number;
	const QSGNode__OwnedByParent: number;
	const QSGNode__UsePreprocess: number;
	const QSGNode__OwnsGeometry: number;
	const QSGNode__OwnsMaterial: number;
	const QSGNode__OwnsOpaqueMaterial: number;
	const QSGNode__IsVisitableNode: number;
	const QSGNode__InternalReserved: number;
	const QSGNode__DirtySubtreeBlocked: number;
	const QSGNode__DirtyMatrix: number;
	const QSGNode__DirtyNodeAdded: number;
	const QSGNode__DirtyNodeRemoved: number;
	const QSGNode__DirtyGeometry: number;
	const QSGNode__DirtyMaterial: number;
	const QSGNode__DirtyOpacity: number;
	const QSGNode__DirtyForceUpdate: number;
	const QSGNode__DirtyUsePreprocess: number;
	interface QSGOpacityNode_ITF extends QSGNode_ITF {
		QSGOpacityNode_PTR():QSGOpacityNode;
	}

	class QSGOpacityNode extends QSGNode {
		___pointer: number;
		QSGOpacityNode_PTR():QSGOpacityNode;
		Pointer():number;
		SetPointer(p:number):void;
		Opacity():number;
		SetOpacity(opacity:number):void;
		ConnectDestroyQSGOpacityNode(f:()=>void):void;
		DisconnectDestroyQSGOpacityNode():void;
		DestroyQSGOpacityNode():void;
		DestroyQSGOpacityNodeDefault():void;
	}
	function NewQSGOpacityNodeFromPointer(ptr:number):QSGOpacityNode;
	function NewQSGOpacityNode():QSGOpacityNode;
	interface QSGOpaqueTextureMaterial_ITF extends QSGMaterial_ITF {
		QSGOpaqueTextureMaterial_PTR():QSGOpaqueTextureMaterial;
	}

	class QSGOpaqueTextureMaterial extends QSGMaterial {
		___pointer: number;
		QSGOpaqueTextureMaterial_PTR():QSGOpaqueTextureMaterial;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGOpaqueTextureMaterial():void;
		AnisotropyLevel():number;
		Filtering():number;
		HorizontalWrapMode():number;
		MipmapFiltering():number;
		SetAnisotropyLevel(level:number):void;
		SetFiltering(filtering:number):void;
		SetHorizontalWrapMode(mode:number):void;
		SetMipmapFiltering(filtering:number):void;
		SetTexture(texture:QSGTexture_ITF):void;
		SetVerticalWrapMode(mode:number):void;
		Texture():QSGTexture;
		VerticalWrapMode():number;
		CreateShader():QSGMaterialShader;
		CreateShaderDefault():QSGMaterialShader;
		Type():QSGMaterialType;
		TypeDefault():QSGMaterialType;
	}
	function NewQSGOpaqueTextureMaterialFromPointer(ptr:number):QSGOpaqueTextureMaterial;
	function NewQSGOpaqueTextureMaterial():QSGOpaqueTextureMaterial;
	interface QSGRectangleNode_ITF extends QSGGeometryNode_ITF {
		QSGRectangleNode_PTR():QSGRectangleNode;
	}

	class QSGRectangleNode extends QSGGeometryNode {
		___pointer: number;
		QSGRectangleNode_PTR():QSGRectangleNode;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGRectangleNode():void;
		ConnectColor(f:()=>gui.QColor):void;
		DisconnectColor():void;
		Color():gui.QColor;
		ConnectRect(f:()=>core.QRectF):void;
		DisconnectRect():void;
		Rect():core.QRectF;
		ConnectSetColor(f:(color:gui.QColor)=>void):void;
		DisconnectSetColor():void;
		SetColor(color:gui.QColor_ITF):void;
		ConnectSetRect(f:(rect:core.QRectF)=>void):void;
		DisconnectSetRect():void;
		SetRect(rect:core.QRectF_ITF):void;
		SetRect2(x:number,y:number,w:number,h:number):void;
	}
	function NewQSGRectangleNodeFromPointer(ptr:number):QSGRectangleNode;
	interface QSGRenderNode_ITF extends QSGNode_ITF {
		QSGRenderNode_PTR():QSGRenderNode;
	}

	class QSGRenderNode extends QSGNode {
		___pointer: number;
		QSGRenderNode_PTR():QSGRenderNode;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectChangedStates(f:()=>number):void;
		DisconnectChangedStates():void;
		ChangedStates():number;
		ChangedStatesDefault():number;
		ClipList():QSGClipNode;
		ConnectFlags(f:()=>number):void;
		DisconnectFlags():void;
		Flags():number;
		FlagsDefault():number;
		InheritedOpacity():number;
		Matrix():gui.QMatrix4x4;
		ConnectRect(f:()=>core.QRectF):void;
		DisconnectRect():void;
		Rect():core.QRectF;
		RectDefault():core.QRectF;
		ConnectReleaseResources(f:()=>void):void;
		DisconnectReleaseResources():void;
		ReleaseResources():void;
		ReleaseResourcesDefault():void;
		ConnectDestroyQSGRenderNode(f:()=>void):void;
		DisconnectDestroyQSGRenderNode():void;
		DestroyQSGRenderNode():void;
		DestroyQSGRenderNodeDefault():void;
	}
	function NewQSGRenderNodeFromPointer(ptr:number):QSGRenderNode;
	const QSGRenderNode__DepthState: number;
	const QSGRenderNode__StencilState: number;
	const QSGRenderNode__ScissorState: number;
	const QSGRenderNode__ColorState: number;
	const QSGRenderNode__BlendState: number;
	const QSGRenderNode__CullState: number;
	const QSGRenderNode__ViewportState: number;
	const QSGRenderNode__RenderTargetState: number;
	const QSGRenderNode__BoundedRectRendering: number;
	const QSGRenderNode__DepthAwareRendering: number;
	const QSGRenderNode__OpaqueRendering: number;
	interface QSGRendererInterface_ITF {
		QSGRendererInterface_PTR():QSGRendererInterface;
	}

	class QSGRendererInterface {
		___pointer: number;
		QSGRendererInterface_PTR():QSGRendererInterface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGRendererInterface():void;
		ConnectGetResource(f:(window:QQuickWindow,resource:number)=>number):void;
		DisconnectGetResource():void;
		GetResource(window:QQuickWindow_ITF,resource:number):number;
		GetResourceDefault(window:QQuickWindow_ITF,resource:number):number;
		ConnectGetResource2(f:(window:QQuickWindow,resource:string)=>number):void;
		DisconnectGetResource2():void;
		GetResource2(window:QQuickWindow_ITF,resource:string):number;
		GetResource2Default(window:QQuickWindow_ITF,resource:string):number;
		ConnectGraphicsApi(f:()=>number):void;
		DisconnectGraphicsApi():void;
		GraphicsApi():number;
		ConnectShaderCompilationType(f:()=>number):void;
		DisconnectShaderCompilationType():void;
		ShaderCompilationType():number;
		ConnectShaderSourceType(f:()=>number):void;
		DisconnectShaderSourceType():void;
		ShaderSourceType():number;
		ConnectShaderType(f:()=>number):void;
		DisconnectShaderType():void;
		ShaderType():number;
	}
	function NewQSGRendererInterfaceFromPointer(ptr:number):QSGRendererInterface;
	const QSGRendererInterface__Unknown: number;
	const QSGRendererInterface__Software: number;
	const QSGRendererInterface__OpenGL: number;
	const QSGRendererInterface__Direct3D12: number;
	const QSGRendererInterface__OpenVG: number;
	const QSGRendererInterface__DeviceResource: number;
	const QSGRendererInterface__CommandQueueResource: number;
	const QSGRendererInterface__CommandListResource: number;
	const QSGRendererInterface__PainterResource: number;
	const QSGRendererInterface__UnknownShadingLanguage: number;
	const QSGRendererInterface__GLSL: number;
	const QSGRendererInterface__HLSL: number;
	const QSGRendererInterface__RuntimeCompilation: number;
	const QSGRendererInterface__OfflineCompilation: number;
	const QSGRendererInterface__ShaderSourceString: number;
	const QSGRendererInterface__ShaderSourceFile: number;
	const QSGRendererInterface__ShaderByteCode: number;
	interface QSGSimpleRectNode_ITF extends QSGGeometryNode_ITF {
		QSGSimpleRectNode_PTR():QSGSimpleRectNode;
	}

	class QSGSimpleRectNode extends QSGGeometryNode {
		___pointer: number;
		QSGSimpleRectNode_PTR():QSGSimpleRectNode;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGSimpleRectNode():void;
		Color():gui.QColor;
		Rect():core.QRectF;
		SetColor(color:gui.QColor_ITF):void;
		SetRect(rect:core.QRectF_ITF):void;
		SetRect2(x:number,y:number,w:number,h:number):void;
	}
	function NewQSGSimpleRectNodeFromPointer(ptr:number):QSGSimpleRectNode;
	function NewQSGSimpleRectNode(rect:core.QRectF_ITF,color:gui.QColor_ITF):QSGSimpleRectNode;
	function NewQSGSimpleRectNode2():QSGSimpleRectNode;
	interface QSGSimpleTextureNode_ITF extends QSGGeometryNode_ITF {
		QSGSimpleTextureNode_PTR():QSGSimpleTextureNode;
	}

	class QSGSimpleTextureNode extends QSGGeometryNode {
		___pointer: number;
		QSGSimpleTextureNode_PTR():QSGSimpleTextureNode;
		Pointer():number;
		SetPointer(p:number):void;
		Filtering():number;
		OwnsTexture():boolean;
		Rect():core.QRectF;
		SetFiltering(filtering:number):void;
		SetOwnsTexture(owns:boolean):void;
		SetRect(r:core.QRectF_ITF):void;
		SetRect2(x:number,y:number,w:number,h:number):void;
		SetSourceRect(r:core.QRectF_ITF):void;
		SetSourceRect2(x:number,y:number,w:number,h:number):void;
		SetTexture(texture:QSGTexture_ITF):void;
		SetTextureCoordinatesTransform(mode:number):void;
		SourceRect():core.QRectF;
		Texture():QSGTexture;
		TextureCoordinatesTransform():number;
		ConnectDestroyQSGSimpleTextureNode(f:()=>void):void;
		DisconnectDestroyQSGSimpleTextureNode():void;
		DestroyQSGSimpleTextureNode():void;
		DestroyQSGSimpleTextureNodeDefault():void;
	}
	function NewQSGSimpleTextureNodeFromPointer(ptr:number):QSGSimpleTextureNode;
	function NewQSGSimpleTextureNode():QSGSimpleTextureNode;
	const QSGSimpleTextureNode__NoTransform: number;
	const QSGSimpleTextureNode__MirrorHorizontally: number;
	const QSGSimpleTextureNode__MirrorVertically: number;
	interface QSGTexture_ITF extends core.QObject_ITF {
		QSGTexture_PTR():QSGTexture;
	}

	class QSGTexture extends core.QObject {
		___pointer: number;
		QSGTexture_PTR():QSGTexture;
		Pointer():number;
		SetPointer(p:number):void;
		AnisotropyLevel():number;
		ConnectBind(f:()=>void):void;
		DisconnectBind():void;
		Bind():void;
		ConvertToNormalizedSourceRect(rect:core.QRectF_ITF):core.QRectF;
		Filtering():number;
		ConnectHasAlphaChannel(f:()=>boolean):void;
		DisconnectHasAlphaChannel():void;
		HasAlphaChannel():boolean;
		ConnectHasMipmaps(f:()=>boolean):void;
		DisconnectHasMipmaps():void;
		HasMipmaps():boolean;
		HorizontalWrapMode():number;
		ConnectIsAtlasTexture(f:()=>boolean):void;
		DisconnectIsAtlasTexture():void;
		IsAtlasTexture():boolean;
		IsAtlasTextureDefault():boolean;
		MipmapFiltering():number;
		ConnectNormalizedTextureSubRect(f:()=>core.QRectF):void;
		DisconnectNormalizedTextureSubRect():void;
		NormalizedTextureSubRect():core.QRectF;
		NormalizedTextureSubRectDefault():core.QRectF;
		ConnectRemovedFromAtlas(f:()=>QSGTexture):void;
		DisconnectRemovedFromAtlas():void;
		RemovedFromAtlas():QSGTexture;
		RemovedFromAtlasDefault():QSGTexture;
		SetAnisotropyLevel(level:number):void;
		SetFiltering(filter:number):void;
		SetHorizontalWrapMode(hwrap:number):void;
		SetMipmapFiltering(filter:number):void;
		SetVerticalWrapMode(vwrap:number):void;
		ConnectTextureId(f:()=>number):void;
		DisconnectTextureId():void;
		TextureId():number;
		ConnectTextureSize(f:()=>core.QSize):void;
		DisconnectTextureSize():void;
		TextureSize():core.QSize;
		UpdateBindOptions(force:boolean):void;
		VerticalWrapMode():number;
		ConnectDestroyQSGTexture(f:()=>void):void;
		DisconnectDestroyQSGTexture():void;
		DestroyQSGTexture():void;
		DestroyQSGTextureDefault():void;
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
	function NewQSGTextureFromPointer(ptr:number):QSGTexture;
	function NewQSGTexture():QSGTexture;
	const QSGTexture__Repeat: number;
	const QSGTexture__ClampToEdge: number;
	const QSGTexture__MirroredRepeat: number;
	const QSGTexture__None: number;
	const QSGTexture__Nearest: number;
	const QSGTexture__Linear: number;
	const QSGTexture__AnisotropyNone: number;
	const QSGTexture__Anisotropy2x: number;
	const QSGTexture__Anisotropy4x: number;
	const QSGTexture__Anisotropy8x: number;
	const QSGTexture__Anisotropy16x: number;
	interface QSGTextureMaterial_ITF extends QSGOpaqueTextureMaterial_ITF {
		QSGTextureMaterial_PTR():QSGTextureMaterial;
	}

	class QSGTextureMaterial extends QSGOpaqueTextureMaterial {
		___pointer: number;
		QSGTextureMaterial_PTR():QSGTextureMaterial;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGTextureMaterial():void;
	}
	function NewQSGTextureMaterialFromPointer(ptr:number):QSGTextureMaterial;
	interface QSGTextureProvider_ITF extends core.QObject_ITF {
		QSGTextureProvider_PTR():QSGTextureProvider;
	}

	class QSGTextureProvider extends core.QObject {
		___pointer: number;
		QSGTextureProvider_PTR():QSGTextureProvider;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectTexture(f:()=>QSGTexture):void;
		DisconnectTexture():void;
		Texture():QSGTexture;
		ConnectTextureChanged(f:()=>void):void;
		DisconnectTextureChanged():void;
		TextureChanged():void;
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
	function NewQSGTextureProviderFromPointer(ptr:number):QSGTextureProvider;
	interface QSGTransformNode_ITF extends QSGNode_ITF {
		QSGTransformNode_PTR():QSGTransformNode;
	}

	class QSGTransformNode extends QSGNode {
		___pointer: number;
		QSGTransformNode_PTR():QSGTransformNode;
		Pointer():number;
		SetPointer(p:number):void;
		Matrix():gui.QMatrix4x4;
		SetMatrix(matrix:gui.QMatrix4x4_ITF):void;
		ConnectDestroyQSGTransformNode(f:()=>void):void;
		DisconnectDestroyQSGTransformNode():void;
		DestroyQSGTransformNode():void;
		DestroyQSGTransformNodeDefault():void;
	}
	function NewQSGTransformNodeFromPointer(ptr:number):QSGTransformNode;
	function NewQSGTransformNode():QSGTransformNode;
	interface QSGVertexColorMaterial_ITF extends QSGMaterial_ITF {
		QSGVertexColorMaterial_PTR():QSGVertexColorMaterial;
	}

	class QSGVertexColorMaterial extends QSGMaterial {
		___pointer: number;
		QSGVertexColorMaterial_PTR():QSGVertexColorMaterial;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSGVertexColorMaterial():void;
		CreateShader():QSGMaterialShader;
		CreateShaderDefault():QSGMaterialShader;
		Type():QSGMaterialType;
		TypeDefault():QSGMaterialType;
	}
	function NewQSGVertexColorMaterialFromPointer(ptr:number):QSGVertexColorMaterial;
	function NewQSGVertexColorMaterial():QSGVertexColorMaterial;
	interface QTcpServerConnectionFactory_ITF {
		QTcpServerConnectionFactory_PTR():QTcpServerConnectionFactory;
	}

	class QTcpServerConnectionFactory {
		___pointer: number;
		QTcpServerConnectionFactory_PTR():QTcpServerConnectionFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTcpServerConnectionFactory():void;
	}
	function NewQTcpServerConnectionFactoryFromPointer(ptr:number):QTcpServerConnectionFactory;
}