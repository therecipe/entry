/// <reference path="core.d.ts" />
declare namespace gui {
	interface QAbstractOpenGLFunctions_ITF {
		QAbstractOpenGLFunctions_PTR():QAbstractOpenGLFunctions;
	}

	class QAbstractOpenGLFunctions {
		___pointer: number;
		QAbstractOpenGLFunctions_PTR():QAbstractOpenGLFunctions;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QAbstractTextDocumentLayout_ITF extends core.QObject_ITF {
		QAbstractTextDocumentLayout_PTR():QAbstractTextDocumentLayout;
	}

	class QAbstractTextDocumentLayout extends core.QObject {
		___pointer: number;
		QAbstractTextDocumentLayout_PTR():QAbstractTextDocumentLayout;
		Pointer():number;
		SetPointer(p:number):void;
		AnchorAt(position:core.QPointF_ITF):string;
		ConnectBlockBoundingRect(f:(block:QTextBlock)=>core.QRectF):void;
		DisconnectBlockBoundingRect():void;
		BlockBoundingRect(block:QTextBlock_ITF):core.QRectF;
		Document():QTextDocument;
		ConnectDocumentChanged(f:(position:number,charsRemoved:number,charsAdded:number)=>void):void;
		DisconnectDocumentChanged():void;
		DocumentChanged(position:number,charsRemoved:number,charsAdded:number):void;
		ConnectDocumentSize(f:()=>core.QSizeF):void;
		DisconnectDocumentSize():void;
		DocumentSize():core.QSizeF;
		ConnectDocumentSizeChanged(f:(newSize:core.QSizeF)=>void):void;
		DisconnectDocumentSizeChanged():void;
		DocumentSizeChanged(newSize:core.QSizeF_ITF):void;
		ConnectDrawInlineObject(f:(painter:QPainter,rect:core.QRectF,object:QTextInlineObject,posInDocument:number,format:QTextFormat)=>void):void;
		DisconnectDrawInlineObject():void;
		DrawInlineObject(painter:QPainter_ITF,rect:core.QRectF_ITF,object:QTextInlineObject_ITF,posInDocument:number,format:QTextFormat_ITF):void;
		DrawInlineObjectDefault(painter:QPainter_ITF,rect:core.QRectF_ITF,object:QTextInlineObject_ITF,posInDocument:number,format:QTextFormat_ITF):void;
		Format(position:number):QTextCharFormat;
		FormatAt(pos:core.QPointF_ITF):QTextFormat;
		ConnectFrameBoundingRect(f:(frame:QTextFrame)=>core.QRectF):void;
		DisconnectFrameBoundingRect():void;
		FrameBoundingRect(frame:QTextFrame_ITF):core.QRectF;
		HandlerForObject(objectType:number):QTextObjectInterface;
		ConnectHitTest(f:(point:core.QPointF,accuracy:number)=>number):void;
		DisconnectHitTest():void;
		HitTest(point:core.QPointF_ITF,accuracy:number):number;
		ImageAt(pos:core.QPointF_ITF):string;
		ConnectPageCount(f:()=>number):void;
		DisconnectPageCount():void;
		PageCount():number;
		ConnectPageCountChanged(f:(newPages:number)=>void):void;
		DisconnectPageCountChanged():void;
		PageCountChanged(newPages:number):void;
		PaintDevice():QPaintDevice;
		ConnectPositionInlineObject(f:(item:QTextInlineObject,posInDocument:number,format:QTextFormat)=>void):void;
		DisconnectPositionInlineObject():void;
		PositionInlineObject(item:QTextInlineObject_ITF,posInDocument:number,format:QTextFormat_ITF):void;
		PositionInlineObjectDefault(item:QTextInlineObject_ITF,posInDocument:number,format:QTextFormat_ITF):void;
		RegisterHandler(objectType:number,component:core.QObject_ITF):void;
		ConnectResizeInlineObject(f:(item:QTextInlineObject,posInDocument:number,format:QTextFormat)=>void):void;
		DisconnectResizeInlineObject():void;
		ResizeInlineObject(item:QTextInlineObject_ITF,posInDocument:number,format:QTextFormat_ITF):void;
		ResizeInlineObjectDefault(item:QTextInlineObject_ITF,posInDocument:number,format:QTextFormat_ITF):void;
		SetPaintDevice(device:QPaintDevice_ITF):void;
		UnregisterHandler(objectType:number,component:core.QObject_ITF):void;
		ConnectUpdate(f:(rect:core.QRectF)=>void):void;
		DisconnectUpdate():void;
		Update(rect:core.QRectF_ITF):void;
		ConnectUpdateBlock(f:(block:QTextBlock)=>void):void;
		DisconnectUpdateBlock():void;
		UpdateBlock(block:QTextBlock_ITF):void;
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
	function NewQAbstractTextDocumentLayoutFromPointer(ptr:number):QAbstractTextDocumentLayout;
	interface QAbstractUndoItem_ITF {
		QAbstractUndoItem_PTR():QAbstractUndoItem;
	}

	class QAbstractUndoItem {
		___pointer: number;
		QAbstractUndoItem_PTR():QAbstractUndoItem;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAbstractUndoItem():void;
	}
	function NewQAbstractUndoItemFromPointer(ptr:number):QAbstractUndoItem;
	interface QAccessible_ITF {
		QAccessible_PTR():QAccessible;
	}

	class QAccessible {
		___pointer: number;
		QAccessible_PTR():QAccessible;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessible():void;
		IsActive():boolean;
		QueryAccessibleInterface(object:core.QObject_ITF):QAccessibleInterface;
		SetRootObject(object:core.QObject_ITF):void;
		UpdateAccessibility2(event:QAccessibleEvent_ITF):void;
	}
	function NewQAccessibleFromPointer(ptr:number):QAccessible;
	function QAccessible_IsActive():boolean;
	function QAccessible_QueryAccessibleInterface(object:core.QObject_ITF):QAccessibleInterface;
	function QAccessible_SetRootObject(object:core.QObject_ITF):void;
	function QAccessible_UpdateAccessibility2(event:QAccessibleEvent_ITF):void;
	const QAccessible__SoundPlayed: number;
	const QAccessible__Alert: number;
	const QAccessible__ForegroundChanged: number;
	const QAccessible__MenuStart: number;
	const QAccessible__MenuEnd: number;
	const QAccessible__PopupMenuStart: number;
	const QAccessible__PopupMenuEnd: number;
	const QAccessible__ContextHelpStart: number;
	const QAccessible__ContextHelpEnd: number;
	const QAccessible__DragDropStart: number;
	const QAccessible__DragDropEnd: number;
	const QAccessible__DialogStart: number;
	const QAccessible__DialogEnd: number;
	const QAccessible__ScrollingStart: number;
	const QAccessible__ScrollingEnd: number;
	const QAccessible__MenuCommand: number;
	const QAccessible__ActionChanged: number;
	const QAccessible__ActiveDescendantChanged: number;
	const QAccessible__AttributeChanged: number;
	const QAccessible__DocumentContentChanged: number;
	const QAccessible__DocumentLoadComplete: number;
	const QAccessible__DocumentLoadStopped: number;
	const QAccessible__DocumentReload: number;
	const QAccessible__HyperlinkEndIndexChanged: number;
	const QAccessible__HyperlinkNumberOfAnchorsChanged: number;
	const QAccessible__HyperlinkSelectedLinkChanged: number;
	const QAccessible__HypertextLinkActivated: number;
	const QAccessible__HypertextLinkSelected: number;
	const QAccessible__HyperlinkStartIndexChanged: number;
	const QAccessible__HypertextChanged: number;
	const QAccessible__HypertextNLinksChanged: number;
	const QAccessible__ObjectAttributeChanged: number;
	const QAccessible__PageChanged: number;
	const QAccessible__SectionChanged: number;
	const QAccessible__TableCaptionChanged: number;
	const QAccessible__TableColumnDescriptionChanged: number;
	const QAccessible__TableColumnHeaderChanged: number;
	const QAccessible__TableModelChanged: number;
	const QAccessible__TableRowDescriptionChanged: number;
	const QAccessible__TableRowHeaderChanged: number;
	const QAccessible__TableSummaryChanged: number;
	const QAccessible__TextAttributeChanged: number;
	const QAccessible__TextCaretMoved: number;
	const QAccessible__TextColumnChanged: number;
	const QAccessible__TextInserted: number;
	const QAccessible__TextRemoved: number;
	const QAccessible__TextUpdated: number;
	const QAccessible__TextSelectionChanged: number;
	const QAccessible__VisibleDataChanged: number;
	const QAccessible__ObjectCreated: number;
	const QAccessible__ObjectDestroyed: number;
	const QAccessible__ObjectShow: number;
	const QAccessible__ObjectHide: number;
	const QAccessible__ObjectReorder: number;
	const QAccessible__Focus: number;
	const QAccessible__Selection: number;
	const QAccessible__SelectionAdd: number;
	const QAccessible__SelectionRemove: number;
	const QAccessible__SelectionWithin: number;
	const QAccessible__StateChanged: number;
	const QAccessible__LocationChanged: number;
	const QAccessible__NameChanged: number;
	const QAccessible__DescriptionChanged: number;
	const QAccessible__ValueChanged: number;
	const QAccessible__ParentChanged: number;
	const QAccessible__HelpChanged: number;
	const QAccessible__DefaultActionChanged: number;
	const QAccessible__AcceleratorChanged: number;
	const QAccessible__InvalidEvent: number;
	const QAccessible__NoRole: number;
	const QAccessible__TitleBar: number;
	const QAccessible__MenuBar: number;
	const QAccessible__ScrollBar: number;
	const QAccessible__Grip: number;
	const QAccessible__Sound: number;
	const QAccessible__Cursor: number;
	const QAccessible__Caret: number;
	const QAccessible__AlertMessage: number;
	const QAccessible__Window: number;
	const QAccessible__Client: number;
	const QAccessible__PopupMenu: number;
	const QAccessible__MenuItem: number;
	const QAccessible__ToolTip: number;
	const QAccessible__Application: number;
	const QAccessible__Document: number;
	const QAccessible__Pane: number;
	const QAccessible__Chart: number;
	const QAccessible__Dialog: number;
	const QAccessible__Border: number;
	const QAccessible__Grouping: number;
	const QAccessible__Separator: number;
	const QAccessible__ToolBar: number;
	const QAccessible__StatusBar: number;
	const QAccessible__Table: number;
	const QAccessible__ColumnHeader: number;
	const QAccessible__RowHeader: number;
	const QAccessible__Column: number;
	const QAccessible__Row: number;
	const QAccessible__Cell: number;
	const QAccessible__Link: number;
	const QAccessible__HelpBalloon: number;
	const QAccessible__Assistant: number;
	const QAccessible__List: number;
	const QAccessible__ListItem: number;
	const QAccessible__Tree: number;
	const QAccessible__TreeItem: number;
	const QAccessible__PageTab: number;
	const QAccessible__PropertyPage: number;
	const QAccessible__Indicator: number;
	const QAccessible__Graphic: number;
	const QAccessible__StaticText: number;
	const QAccessible__EditableText: number;
	const QAccessible__Button: number;
	const QAccessible__CheckBox: number;
	const QAccessible__RadioButton: number;
	const QAccessible__ComboBox: number;
	const QAccessible__ProgressBar: number;
	const QAccessible__Dial: number;
	const QAccessible__HotkeyField: number;
	const QAccessible__Slider: number;
	const QAccessible__SpinBox: number;
	const QAccessible__Canvas: number;
	const QAccessible__Animation: number;
	const QAccessible__Equation: number;
	const QAccessible__ButtonDropDown: number;
	const QAccessible__ButtonMenu: number;
	const QAccessible__ButtonDropGrid: number;
	const QAccessible__Whitespace: number;
	const QAccessible__PageTabList: number;
	const QAccessible__Clock: number;
	const QAccessible__Splitter: number;
	const QAccessible__LayeredPane: number;
	const QAccessible__Terminal: number;
	const QAccessible__Desktop: number;
	const QAccessible__Paragraph: number;
	const QAccessible__WebDocument: number;
	const QAccessible__Section: number;
	const QAccessible__ColorChooser: number;
	const QAccessible__Footer: number;
	const QAccessible__Form: number;
	const QAccessible__Heading: number;
	const QAccessible__Note: number;
	const QAccessible__ComplementaryContent: number;
	const QAccessible__UserRole: number;
	const QAccessible__Name: number;
	const QAccessible__Description: number;
	const QAccessible__Value: number;
	const QAccessible__Help: number;
	const QAccessible__Accelerator: number;
	const QAccessible__DebugDescription: number;
	const QAccessible__UserText: number;
	const QAccessible__Label: number;
	const QAccessible__Labelled: number;
	const QAccessible__Controller: number;
	const QAccessible__Controlled: number;
	const QAccessible__AllRelations: number;
	const QAccessible__TextInterface: number;
	const QAccessible__EditableTextInterface: number;
	const QAccessible__ValueInterface: number;
	const QAccessible__ActionInterface: number;
	const QAccessible__ImageInterface: number;
	const QAccessible__TableInterface: number;
	const QAccessible__TableCellInterface: number;
	const QAccessible__CharBoundary: number;
	const QAccessible__WordBoundary: number;
	const QAccessible__SentenceBoundary: number;
	const QAccessible__ParagraphBoundary: number;
	const QAccessible__LineBoundary: number;
	const QAccessible__NoBoundary: number;
	interface QAccessibleActionInterface_ITF {
		QAccessibleActionInterface_PTR():QAccessibleActionInterface;
	}

	class QAccessibleActionInterface {
		___pointer: number;
		QAccessibleActionInterface_PTR():QAccessibleActionInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActionNames(f:()=>string[]):void;
		DisconnectActionNames():void;
		ActionNames():string[];
		DecreaseAction():string;
		ConnectDoAction(f:(actionName:string)=>void):void;
		DisconnectDoAction():void;
		DoAction(actionName:string):void;
		IncreaseAction():string;
		ConnectKeyBindingsForAction(f:(actionName:string)=>string[]):void;
		DisconnectKeyBindingsForAction():void;
		KeyBindingsForAction(actionName:string):string[];
		ConnectLocalizedActionDescription(f:(actionName:string)=>string):void;
		DisconnectLocalizedActionDescription():void;
		LocalizedActionDescription(actionName:string):string;
		LocalizedActionDescriptionDefault(actionName:string):string;
		ConnectLocalizedActionName(f:(actionName:string)=>string):void;
		DisconnectLocalizedActionName():void;
		LocalizedActionName(actionName:string):string;
		LocalizedActionNameDefault(actionName:string):string;
		NextPageAction():string;
		PressAction():string;
		PreviousPageAction():string;
		ScrollDownAction():string;
		ScrollLeftAction():string;
		ScrollRightAction():string;
		ScrollUpAction():string;
		SetFocusAction():string;
		ShowMenuAction():string;
		ToggleAction():string;
		ConnectDestroyQAccessibleActionInterface(f:()=>void):void;
		DisconnectDestroyQAccessibleActionInterface():void;
		DestroyQAccessibleActionInterface():void;
		DestroyQAccessibleActionInterfaceDefault():void;
	}
	function NewQAccessibleActionInterfaceFromPointer(ptr:number):QAccessibleActionInterface;
	function QAccessibleActionInterface_DecreaseAction():string;
	function QAccessibleActionInterface_IncreaseAction():string;
	function QAccessibleActionInterface_NextPageAction():string;
	function QAccessibleActionInterface_PressAction():string;
	function QAccessibleActionInterface_PreviousPageAction():string;
	function QAccessibleActionInterface_ScrollDownAction():string;
	function QAccessibleActionInterface_ScrollLeftAction():string;
	function QAccessibleActionInterface_ScrollRightAction():string;
	function QAccessibleActionInterface_ScrollUpAction():string;
	function QAccessibleActionInterface_SetFocusAction():string;
	function QAccessibleActionInterface_ShowMenuAction():string;
	function QAccessibleActionInterface_ToggleAction():string;
	interface QAccessibleEditableTextInterface_ITF {
		QAccessibleEditableTextInterface_PTR():QAccessibleEditableTextInterface;
	}

	class QAccessibleEditableTextInterface {
		___pointer: number;
		QAccessibleEditableTextInterface_PTR():QAccessibleEditableTextInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDeleteText(f:(startOffset:number,endOffset:number)=>void):void;
		DisconnectDeleteText():void;
		DeleteText(startOffset:number,endOffset:number):void;
		ConnectInsertText(f:(offset:number,text:string)=>void):void;
		DisconnectInsertText():void;
		InsertText(offset:number,text:string):void;
		ConnectReplaceText(f:(startOffset:number,endOffset:number,text:string)=>void):void;
		DisconnectReplaceText():void;
		ReplaceText(startOffset:number,endOffset:number,text:string):void;
		ConnectDestroyQAccessibleEditableTextInterface(f:()=>void):void;
		DisconnectDestroyQAccessibleEditableTextInterface():void;
		DestroyQAccessibleEditableTextInterface():void;
		DestroyQAccessibleEditableTextInterfaceDefault():void;
	}
	function NewQAccessibleEditableTextInterfaceFromPointer(ptr:number):QAccessibleEditableTextInterface;
	interface QAccessibleEvent_ITF {
		QAccessibleEvent_PTR():QAccessibleEvent;
	}

	class QAccessibleEvent {
		___pointer: number;
		QAccessibleEvent_PTR():QAccessibleEvent;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAccessibleInterface(f:()=>QAccessibleInterface):void;
		DisconnectAccessibleInterface():void;
		AccessibleInterface():QAccessibleInterface;
		AccessibleInterfaceDefault():QAccessibleInterface;
		Child():number;
		Object():core.QObject;
		SetChild(child:number):void;
		Type():number;
		ConnectDestroyQAccessibleEvent(f:()=>void):void;
		DisconnectDestroyQAccessibleEvent():void;
		DestroyQAccessibleEvent():void;
		DestroyQAccessibleEventDefault():void;
	}
	function NewQAccessibleEventFromPointer(ptr:number):QAccessibleEvent;
	function NewQAccessibleEvent2(object:core.QObject_ITF,ty:number):QAccessibleEvent;
	function NewQAccessibleEvent3(interfa:QAccessibleInterface_ITF,ty:number):QAccessibleEvent;
	interface QAccessibleInterface_ITF {
		QAccessibleInterface_PTR():QAccessibleInterface;
	}

	class QAccessibleInterface {
		___pointer: number;
		QAccessibleInterface_PTR():QAccessibleInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ActionInterface():QAccessibleActionInterface;
		ConnectBackgroundColor(f:()=>QColor):void;
		DisconnectBackgroundColor():void;
		BackgroundColor():QColor;
		BackgroundColorDefault():QColor;
		ConnectChild(f:(index:number)=>QAccessibleInterface):void;
		DisconnectChild():void;
		Child(index:number):QAccessibleInterface;
		ConnectChildAt(f:(x:number,y:number)=>QAccessibleInterface):void;
		DisconnectChildAt():void;
		ChildAt(x:number,y:number):QAccessibleInterface;
		ConnectChildCount(f:()=>number):void;
		DisconnectChildCount():void;
		ChildCount():number;
		ConnectFocusChild(f:()=>QAccessibleInterface):void;
		DisconnectFocusChild():void;
		FocusChild():QAccessibleInterface;
		FocusChildDefault():QAccessibleInterface;
		ConnectForegroundColor(f:()=>QColor):void;
		DisconnectForegroundColor():void;
		ForegroundColor():QColor;
		ForegroundColorDefault():QColor;
		ConnectIndexOfChild(f:(child:QAccessibleInterface)=>number):void;
		DisconnectIndexOfChild():void;
		IndexOfChild(child:QAccessibleInterface_ITF):number;
		ConnectInterface_cast(f:(ty:number)=>number):void;
		DisconnectInterface_cast():void;
		Interface_cast(ty:number):number;
		Interface_castDefault(ty:number):number;
		ConnectIsValid(f:()=>boolean):void;
		DisconnectIsValid():void;
		IsValid():boolean;
		ConnectObject(f:()=>core.QObject):void;
		DisconnectObject():void;
		Object():core.QObject;
		ConnectParent(f:()=>QAccessibleInterface):void;
		DisconnectParent():void;
		Parent():QAccessibleInterface;
		ConnectRect(f:()=>core.QRect):void;
		DisconnectRect():void;
		Rect():core.QRect;
		ConnectRole(f:()=>number):void;
		DisconnectRole():void;
		Role():number;
		ConnectSetText(f:(t:number,text:string)=>void):void;
		DisconnectSetText():void;
		SetText(t:number,text:string):void;
		TableCellInterface():QAccessibleTableCellInterface;
		TableInterface():QAccessibleTableInterface;
		ConnectText(f:(t:number)=>string):void;
		DisconnectText():void;
		Text(t:number):string;
		TextInterface():QAccessibleTextInterface;
		ValueInterface():QAccessibleValueInterface;
		ConnectWindow(f:()=>QWindow):void;
		DisconnectWindow():void;
		Window():QWindow;
		WindowDefault():QWindow;
		ConnectDestroyQAccessibleInterface(f:()=>void):void;
		DisconnectDestroyQAccessibleInterface():void;
		DestroyQAccessibleInterface():void;
		DestroyQAccessibleInterfaceDefault():void;
	}
	function NewQAccessibleInterfaceFromPointer(ptr:number):QAccessibleInterface;
	interface QAccessibleObject_ITF extends QAccessibleInterface_ITF {
		QAccessibleObject_PTR():QAccessibleObject;
	}

	class QAccessibleObject extends QAccessibleInterface {
		___pointer: number;
		QAccessibleObject_PTR():QAccessibleObject;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectChildAt(f:(x:number,y:number)=>QAccessibleInterface):void;
		DisconnectChildAt():void;
		ChildAt(x:number,y:number):QAccessibleInterface;
		ChildAtDefault(x:number,y:number):QAccessibleInterface;
		ConnectIsValid(f:()=>boolean):void;
		DisconnectIsValid():void;
		IsValid():boolean;
		IsValidDefault():boolean;
		ConnectObject(f:()=>core.QObject):void;
		DisconnectObject():void;
		Object():core.QObject;
		ObjectDefault():core.QObject;
		ConnectRect(f:()=>core.QRect):void;
		DisconnectRect():void;
		Rect():core.QRect;
		RectDefault():core.QRect;
		ConnectSetText(f:(t:number,text:string)=>void):void;
		DisconnectSetText():void;
		SetText(t:number,text:string):void;
		SetTextDefault(t:number,text:string):void;
		ConnectDestroyQAccessibleObject(f:()=>void):void;
		DisconnectDestroyQAccessibleObject():void;
		DestroyQAccessibleObject():void;
		DestroyQAccessibleObjectDefault():void;
		Child(index:number):QAccessibleInterface;
		ChildDefault(index:number):QAccessibleInterface;
		ChildCount():number;
		ChildCountDefault():number;
		IndexOfChild(child:QAccessibleInterface_ITF):number;
		IndexOfChildDefault(child:QAccessibleInterface_ITF):number;
		Parent():QAccessibleInterface;
		ParentDefault():QAccessibleInterface;
		Role():number;
		RoleDefault():number;
		Text(t:number):string;
		TextDefault(t:number):string;
	}
	function NewQAccessibleObjectFromPointer(ptr:number):QAccessibleObject;
	interface QAccessiblePlugin_ITF extends core.QObject_ITF {
		QAccessiblePlugin_PTR():QAccessiblePlugin;
	}

	class QAccessiblePlugin extends core.QObject {
		___pointer: number;
		QAccessiblePlugin_PTR():QAccessiblePlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreate(f:(key:string,object:core.QObject)=>QAccessibleInterface):void;
		DisconnectCreate():void;
		Create(key:string,object:core.QObject_ITF):QAccessibleInterface;
		ConnectDestroyQAccessiblePlugin(f:()=>void):void;
		DisconnectDestroyQAccessiblePlugin():void;
		DestroyQAccessiblePlugin():void;
		DestroyQAccessiblePluginDefault():void;
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
	function NewQAccessiblePluginFromPointer(ptr:number):QAccessiblePlugin;
	function NewQAccessiblePlugin(parent:core.QObject_ITF):QAccessiblePlugin;
	interface QAccessibleStateChangeEvent_ITF extends QAccessibleEvent_ITF {
		QAccessibleStateChangeEvent_PTR():QAccessibleStateChangeEvent;
	}

	class QAccessibleStateChangeEvent extends QAccessibleEvent {
		___pointer: number;
		QAccessibleStateChangeEvent_PTR():QAccessibleStateChangeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessibleStateChangeEvent():void;
	}
	function NewQAccessibleStateChangeEventFromPointer(ptr:number):QAccessibleStateChangeEvent;
	interface QAccessibleTableCellInterface_ITF {
		QAccessibleTableCellInterface_PTR():QAccessibleTableCellInterface;
	}

	class QAccessibleTableCellInterface {
		___pointer: number;
		QAccessibleTableCellInterface_PTR():QAccessibleTableCellInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectColumnExtent(f:()=>number):void;
		DisconnectColumnExtent():void;
		ColumnExtent():number;
		ConnectColumnHeaderCells(f:()=>QAccessibleInterface[]):void;
		DisconnectColumnHeaderCells():void;
		ColumnHeaderCells():QAccessibleInterface[];
		ConnectColumnIndex(f:()=>number):void;
		DisconnectColumnIndex():void;
		ColumnIndex():number;
		ConnectIsSelected(f:()=>boolean):void;
		DisconnectIsSelected():void;
		IsSelected():boolean;
		ConnectRowExtent(f:()=>number):void;
		DisconnectRowExtent():void;
		RowExtent():number;
		ConnectRowHeaderCells(f:()=>QAccessibleInterface[]):void;
		DisconnectRowHeaderCells():void;
		RowHeaderCells():QAccessibleInterface[];
		ConnectRowIndex(f:()=>number):void;
		DisconnectRowIndex():void;
		RowIndex():number;
		ConnectTable(f:()=>QAccessibleInterface):void;
		DisconnectTable():void;
		Table():QAccessibleInterface;
		ConnectDestroyQAccessibleTableCellInterface(f:()=>void):void;
		DisconnectDestroyQAccessibleTableCellInterface():void;
		DestroyQAccessibleTableCellInterface():void;
		DestroyQAccessibleTableCellInterfaceDefault():void;
	}
	function NewQAccessibleTableCellInterfaceFromPointer(ptr:number):QAccessibleTableCellInterface;
	interface QAccessibleTableInterface_ITF {
		QAccessibleTableInterface_PTR():QAccessibleTableInterface;
	}

	class QAccessibleTableInterface {
		___pointer: number;
		QAccessibleTableInterface_PTR():QAccessibleTableInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCaption(f:()=>QAccessibleInterface):void;
		DisconnectCaption():void;
		Caption():QAccessibleInterface;
		ConnectCellAt(f:(row:number,column:number)=>QAccessibleInterface):void;
		DisconnectCellAt():void;
		CellAt(row:number,column:number):QAccessibleInterface;
		ConnectColumnCount(f:()=>number):void;
		DisconnectColumnCount():void;
		ColumnCount():number;
		ConnectColumnDescription(f:(column:number)=>string):void;
		DisconnectColumnDescription():void;
		ColumnDescription(column:number):string;
		ConnectIsColumnSelected(f:(column:number)=>boolean):void;
		DisconnectIsColumnSelected():void;
		IsColumnSelected(column:number):boolean;
		ConnectIsRowSelected(f:(row:number)=>boolean):void;
		DisconnectIsRowSelected():void;
		IsRowSelected(row:number):boolean;
		ConnectModelChange(f:(event:QAccessibleTableModelChangeEvent)=>void):void;
		DisconnectModelChange():void;
		ModelChange(event:QAccessibleTableModelChangeEvent_ITF):void;
		ConnectRowCount(f:()=>number):void;
		DisconnectRowCount():void;
		RowCount():number;
		ConnectRowDescription(f:(row:number)=>string):void;
		DisconnectRowDescription():void;
		RowDescription(row:number):string;
		ConnectSelectColumn(f:(column:number)=>boolean):void;
		DisconnectSelectColumn():void;
		SelectColumn(column:number):boolean;
		ConnectSelectRow(f:(row:number)=>boolean):void;
		DisconnectSelectRow():void;
		SelectRow(row:number):boolean;
		ConnectSelectedCellCount(f:()=>number):void;
		DisconnectSelectedCellCount():void;
		SelectedCellCount():number;
		ConnectSelectedCells(f:()=>QAccessibleInterface[]):void;
		DisconnectSelectedCells():void;
		SelectedCells():QAccessibleInterface[];
		ConnectSelectedColumnCount(f:()=>number):void;
		DisconnectSelectedColumnCount():void;
		SelectedColumnCount():number;
		ConnectSelectedColumns(f:()=>number[]):void;
		DisconnectSelectedColumns():void;
		SelectedColumns():number[];
		ConnectSelectedRowCount(f:()=>number):void;
		DisconnectSelectedRowCount():void;
		SelectedRowCount():number;
		ConnectSelectedRows(f:()=>number[]):void;
		DisconnectSelectedRows():void;
		SelectedRows():number[];
		ConnectSummary(f:()=>QAccessibleInterface):void;
		DisconnectSummary():void;
		Summary():QAccessibleInterface;
		ConnectUnselectColumn(f:(column:number)=>boolean):void;
		DisconnectUnselectColumn():void;
		UnselectColumn(column:number):boolean;
		ConnectUnselectRow(f:(row:number)=>boolean):void;
		DisconnectUnselectRow():void;
		UnselectRow(row:number):boolean;
		ConnectDestroyQAccessibleTableInterface(f:()=>void):void;
		DisconnectDestroyQAccessibleTableInterface():void;
		DestroyQAccessibleTableInterface():void;
		DestroyQAccessibleTableInterfaceDefault():void;
	}
	function NewQAccessibleTableInterfaceFromPointer(ptr:number):QAccessibleTableInterface;
	interface QAccessibleTableModelChangeEvent_ITF extends QAccessibleEvent_ITF {
		QAccessibleTableModelChangeEvent_PTR():QAccessibleTableModelChangeEvent;
	}

	class QAccessibleTableModelChangeEvent extends QAccessibleEvent {
		___pointer: number;
		QAccessibleTableModelChangeEvent_PTR():QAccessibleTableModelChangeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessibleTableModelChangeEvent():void;
		FirstColumn():number;
		FirstRow():number;
		LastColumn():number;
		LastRow():number;
		ModelChangeType():number;
		SetFirstColumn(column:number):void;
		SetFirstRow(row:number):void;
		SetLastColumn(column:number):void;
		SetLastRow(row:number):void;
		SetModelChangeType(changeType:number):void;
	}
	function NewQAccessibleTableModelChangeEventFromPointer(ptr:number):QAccessibleTableModelChangeEvent;
	function NewQAccessibleTableModelChangeEvent(object:core.QObject_ITF,changeType:number):QAccessibleTableModelChangeEvent;
	function NewQAccessibleTableModelChangeEvent2(iface:QAccessibleInterface_ITF,changeType:number):QAccessibleTableModelChangeEvent;
	const QAccessibleTableModelChangeEvent__ModelReset: number;
	const QAccessibleTableModelChangeEvent__DataChanged: number;
	const QAccessibleTableModelChangeEvent__RowsInserted: number;
	const QAccessibleTableModelChangeEvent__ColumnsInserted: number;
	const QAccessibleTableModelChangeEvent__RowsRemoved: number;
	const QAccessibleTableModelChangeEvent__ColumnsRemoved: number;
	interface QAccessibleTextCursorEvent_ITF extends QAccessibleEvent_ITF {
		QAccessibleTextCursorEvent_PTR():QAccessibleTextCursorEvent;
	}

	class QAccessibleTextCursorEvent extends QAccessibleEvent {
		___pointer: number;
		QAccessibleTextCursorEvent_PTR():QAccessibleTextCursorEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessibleTextCursorEvent():void;
		CursorPosition():number;
		SetCursorPosition(position:number):void;
	}
	function NewQAccessibleTextCursorEventFromPointer(ptr:number):QAccessibleTextCursorEvent;
	function NewQAccessibleTextCursorEvent(object:core.QObject_ITF,cursorPos:number):QAccessibleTextCursorEvent;
	function NewQAccessibleTextCursorEvent2(iface:QAccessibleInterface_ITF,cursorPos:number):QAccessibleTextCursorEvent;
	interface QAccessibleTextInsertEvent_ITF extends QAccessibleTextCursorEvent_ITF {
		QAccessibleTextInsertEvent_PTR():QAccessibleTextInsertEvent;
	}

	class QAccessibleTextInsertEvent extends QAccessibleTextCursorEvent {
		___pointer: number;
		QAccessibleTextInsertEvent_PTR():QAccessibleTextInsertEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessibleTextInsertEvent():void;
		ChangePosition():number;
		TextInserted():string;
	}
	function NewQAccessibleTextInsertEventFromPointer(ptr:number):QAccessibleTextInsertEvent;
	function NewQAccessibleTextInsertEvent(object:core.QObject_ITF,position:number,text:string):QAccessibleTextInsertEvent;
	function NewQAccessibleTextInsertEvent2(iface:QAccessibleInterface_ITF,position:number,text:string):QAccessibleTextInsertEvent;
	interface QAccessibleTextInterface_ITF {
		QAccessibleTextInterface_PTR():QAccessibleTextInterface;
	}

	class QAccessibleTextInterface {
		___pointer: number;
		QAccessibleTextInterface_PTR():QAccessibleTextInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAddSelection(f:(startOffset:number,endOffset:number)=>void):void;
		DisconnectAddSelection():void;
		AddSelection(startOffset:number,endOffset:number):void;
		ConnectCharacterCount(f:()=>number):void;
		DisconnectCharacterCount():void;
		CharacterCount():number;
		ConnectCharacterRect(f:(offset:number)=>core.QRect):void;
		DisconnectCharacterRect():void;
		CharacterRect(offset:number):core.QRect;
		ConnectCursorPosition(f:()=>number):void;
		DisconnectCursorPosition():void;
		CursorPosition():number;
		ConnectOffsetAtPoint(f:(point:core.QPoint)=>number):void;
		DisconnectOffsetAtPoint():void;
		OffsetAtPoint(point:core.QPoint_ITF):number;
		ConnectRemoveSelection(f:(selectionIndex:number)=>void):void;
		DisconnectRemoveSelection():void;
		RemoveSelection(selectionIndex:number):void;
		ConnectScrollToSubstring(f:(startIndex:number,endIndex:number)=>void):void;
		DisconnectScrollToSubstring():void;
		ScrollToSubstring(startIndex:number,endIndex:number):void;
		ConnectSelection(f:(selectionIndex:number,startOffset:number,endOffset:number)=>void):void;
		DisconnectSelection():void;
		Selection(selectionIndex:number,startOffset:number,endOffset:number):void;
		ConnectSelectionCount(f:()=>number):void;
		DisconnectSelectionCount():void;
		SelectionCount():number;
		ConnectSetCursorPosition(f:(position:number)=>void):void;
		DisconnectSetCursorPosition():void;
		SetCursorPosition(position:number):void;
		ConnectSetSelection(f:(selectionIndex:number,startOffset:number,endOffset:number)=>void):void;
		DisconnectSetSelection():void;
		SetSelection(selectionIndex:number,startOffset:number,endOffset:number):void;
		ConnectText(f:(startOffset:number,endOffset:number)=>string):void;
		DisconnectText():void;
		Text(startOffset:number,endOffset:number):string;
		ConnectTextAfterOffset(f:(offset:number,boundaryType:number,startOffset:number,endOffset:number)=>string):void;
		DisconnectTextAfterOffset():void;
		TextAfterOffset(offset:number,boundaryType:number,startOffset:number,endOffset:number):string;
		TextAfterOffsetDefault(offset:number,boundaryType:number,startOffset:number,endOffset:number):string;
		ConnectTextAtOffset(f:(offset:number,boundaryType:number,startOffset:number,endOffset:number)=>string):void;
		DisconnectTextAtOffset():void;
		TextAtOffset(offset:number,boundaryType:number,startOffset:number,endOffset:number):string;
		TextAtOffsetDefault(offset:number,boundaryType:number,startOffset:number,endOffset:number):string;
		ConnectTextBeforeOffset(f:(offset:number,boundaryType:number,startOffset:number,endOffset:number)=>string):void;
		DisconnectTextBeforeOffset():void;
		TextBeforeOffset(offset:number,boundaryType:number,startOffset:number,endOffset:number):string;
		TextBeforeOffsetDefault(offset:number,boundaryType:number,startOffset:number,endOffset:number):string;
		ConnectDestroyQAccessibleTextInterface(f:()=>void):void;
		DisconnectDestroyQAccessibleTextInterface():void;
		DestroyQAccessibleTextInterface():void;
		DestroyQAccessibleTextInterfaceDefault():void;
	}
	function NewQAccessibleTextInterfaceFromPointer(ptr:number):QAccessibleTextInterface;
	interface QAccessibleTextRemoveEvent_ITF extends QAccessibleTextCursorEvent_ITF {
		QAccessibleTextRemoveEvent_PTR():QAccessibleTextRemoveEvent;
	}

	class QAccessibleTextRemoveEvent extends QAccessibleTextCursorEvent {
		___pointer: number;
		QAccessibleTextRemoveEvent_PTR():QAccessibleTextRemoveEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessibleTextRemoveEvent():void;
		ChangePosition():number;
		TextRemoved():string;
	}
	function NewQAccessibleTextRemoveEventFromPointer(ptr:number):QAccessibleTextRemoveEvent;
	function NewQAccessibleTextRemoveEvent(object:core.QObject_ITF,position:number,text:string):QAccessibleTextRemoveEvent;
	function NewQAccessibleTextRemoveEvent2(iface:QAccessibleInterface_ITF,position:number,text:string):QAccessibleTextRemoveEvent;
	interface QAccessibleTextSelectionEvent_ITF extends QAccessibleTextCursorEvent_ITF {
		QAccessibleTextSelectionEvent_PTR():QAccessibleTextSelectionEvent;
	}

	class QAccessibleTextSelectionEvent extends QAccessibleTextCursorEvent {
		___pointer: number;
		QAccessibleTextSelectionEvent_PTR():QAccessibleTextSelectionEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessibleTextSelectionEvent():void;
		SelectionEnd():number;
		SelectionStart():number;
		SetSelection(start:number,end:number):void;
	}
	function NewQAccessibleTextSelectionEventFromPointer(ptr:number):QAccessibleTextSelectionEvent;
	function NewQAccessibleTextSelectionEvent(object:core.QObject_ITF,start:number,end:number):QAccessibleTextSelectionEvent;
	function NewQAccessibleTextSelectionEvent2(iface:QAccessibleInterface_ITF,start:number,end:number):QAccessibleTextSelectionEvent;
	interface QAccessibleTextUpdateEvent_ITF extends QAccessibleTextCursorEvent_ITF {
		QAccessibleTextUpdateEvent_PTR():QAccessibleTextUpdateEvent;
	}

	class QAccessibleTextUpdateEvent extends QAccessibleTextCursorEvent {
		___pointer: number;
		QAccessibleTextUpdateEvent_PTR():QAccessibleTextUpdateEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessibleTextUpdateEvent():void;
		ChangePosition():number;
		TextInserted():string;
		TextRemoved():string;
	}
	function NewQAccessibleTextUpdateEventFromPointer(ptr:number):QAccessibleTextUpdateEvent;
	function NewQAccessibleTextUpdateEvent(object:core.QObject_ITF,position:number,oldText:string,text:string):QAccessibleTextUpdateEvent;
	function NewQAccessibleTextUpdateEvent2(iface:QAccessibleInterface_ITF,position:number,oldText:string,text:string):QAccessibleTextUpdateEvent;
	interface QAccessibleValueChangeEvent_ITF extends QAccessibleEvent_ITF {
		QAccessibleValueChangeEvent_PTR():QAccessibleValueChangeEvent;
	}

	class QAccessibleValueChangeEvent extends QAccessibleEvent {
		___pointer: number;
		QAccessibleValueChangeEvent_PTR():QAccessibleValueChangeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccessibleValueChangeEvent():void;
		SetValue(value:core.QVariant_ITF):void;
		Value():core.QVariant;
	}
	function NewQAccessibleValueChangeEventFromPointer(ptr:number):QAccessibleValueChangeEvent;
	function NewQAccessibleValueChangeEvent(object:core.QObject_ITF,value:core.QVariant_ITF):QAccessibleValueChangeEvent;
	function NewQAccessibleValueChangeEvent2(iface:QAccessibleInterface_ITF,val:core.QVariant_ITF):QAccessibleValueChangeEvent;
	interface QAccessibleValueInterface_ITF {
		QAccessibleValueInterface_PTR():QAccessibleValueInterface;
	}

	class QAccessibleValueInterface {
		___pointer: number;
		QAccessibleValueInterface_PTR():QAccessibleValueInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCurrentValue(f:()=>core.QVariant):void;
		DisconnectCurrentValue():void;
		CurrentValue():core.QVariant;
		ConnectMaximumValue(f:()=>core.QVariant):void;
		DisconnectMaximumValue():void;
		MaximumValue():core.QVariant;
		ConnectMinimumStepSize(f:()=>core.QVariant):void;
		DisconnectMinimumStepSize():void;
		MinimumStepSize():core.QVariant;
		ConnectMinimumValue(f:()=>core.QVariant):void;
		DisconnectMinimumValue():void;
		MinimumValue():core.QVariant;
		ConnectSetCurrentValue(f:(value:core.QVariant)=>void):void;
		DisconnectSetCurrentValue():void;
		SetCurrentValue(value:core.QVariant_ITF):void;
		ConnectDestroyQAccessibleValueInterface(f:()=>void):void;
		DisconnectDestroyQAccessibleValueInterface():void;
		DestroyQAccessibleValueInterface():void;
		DestroyQAccessibleValueInterfaceDefault():void;
	}
	function NewQAccessibleValueInterfaceFromPointer(ptr:number):QAccessibleValueInterface;
	interface QActionEvent_ITF extends core.QEvent_ITF {
		QActionEvent_PTR():QActionEvent;
	}

	class QActionEvent extends core.QEvent {
		___pointer: number;
		QActionEvent_PTR():QActionEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQActionEvent():void;
		Action():number;
		Before():number;
	}
	function NewQActionEventFromPointer(ptr:number):QActionEvent;
	function NewQActionEvent(ty:number,action:number,before:number):QActionEvent;
	interface QApplicationStateChangeEvent_ITF extends core.QEvent_ITF {
		QApplicationStateChangeEvent_PTR():QApplicationStateChangeEvent;
	}

	class QApplicationStateChangeEvent extends core.QEvent {
		___pointer: number;
		QApplicationStateChangeEvent_PTR():QApplicationStateChangeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQApplicationStateChangeEvent():void;
		ApplicationState():number;
	}
	function NewQApplicationStateChangeEventFromPointer(ptr:number):QApplicationStateChangeEvent;
	function NewQApplicationStateChangeEvent(applicationState:number):QApplicationStateChangeEvent;
	interface QBackingStore_ITF {
		QBackingStore_PTR():QBackingStore;
	}

	class QBackingStore {
		___pointer: number;
		QBackingStore_PTR():QBackingStore;
		Pointer():number;
		SetPointer(p:number):void;
		BeginPaint(region:QRegion_ITF):void;
		EndPaint():void;
		Flush(region:QRegion_ITF,window:QWindow_ITF,offset:core.QPoint_ITF):void;
		HasStaticContents():boolean;
		PaintDevice():QPaintDevice;
		Resize(size:core.QSize_ITF):void;
		Scroll(area:QRegion_ITF,dx:number,dy:number):boolean;
		SetStaticContents(region:QRegion_ITF):void;
		Size():core.QSize;
		StaticContents():QRegion;
		Window():QWindow;
		DestroyQBackingStore():void;
	}
	function NewQBackingStoreFromPointer(ptr:number):QBackingStore;
	function NewQBackingStore(window:QWindow_ITF):QBackingStore;
	interface QBitmap_ITF extends QPixmap_ITF {
		QBitmap_PTR():QBitmap;
	}

	class QBitmap extends QPixmap {
		___pointer: number;
		QBitmap_PTR():QBitmap;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():void;
		FromData(size:core.QSize_ITF,bits:string,monoFormat:number):QBitmap;
		FromImage(image:QImage_ITF,flags:number):QBitmap;
		FromImage2(image:QImage_ITF,flags:number):QBitmap;
		Swap(other:QBitmap_ITF):void;
		Transformed(matrix:QTransform_ITF):QBitmap;
		ConnectDestroyQBitmap(f:()=>void):void;
		DisconnectDestroyQBitmap():void;
		DestroyQBitmap():void;
		DestroyQBitmapDefault():void;
	}
	function NewQBitmapFromPointer(ptr:number):QBitmap;
	function NewQBitmap():QBitmap;
	function NewQBitmap2(pixmap:QPixmap_ITF):QBitmap;
	function NewQBitmap3(width:number,height:number):QBitmap;
	function NewQBitmap4(size:core.QSize_ITF):QBitmap;
	function NewQBitmap5(fileName:string,format:string):QBitmap;
	function QBitmap_FromData(size:core.QSize_ITF,bits:string,monoFormat:number):QBitmap;
	function QBitmap_FromImage(image:QImage_ITF,flags:number):QBitmap;
	function QBitmap_FromImage2(image:QImage_ITF,flags:number):QBitmap;
	interface QBrush_ITF {
		QBrush_PTR():QBrush;
	}

	class QBrush {
		___pointer: number;
		QBrush_PTR():QBrush;
		Pointer():number;
		SetPointer(p:number):void;
		Color():QColor;
		Gradient():QGradient;
		IsOpaque():boolean;
		Matrix():QMatrix;
		SetColor(color:QColor_ITF):void;
		SetColor2(color:number):void;
		SetMatrix(matrix:QMatrix_ITF):void;
		SetStyle(style:number):void;
		SetTexture(pixmap:QPixmap_ITF):void;
		SetTextureImage(image:QImage_ITF):void;
		SetTransform(matrix:QTransform_ITF):void;
		Style():number;
		Swap(other:QBrush_ITF):void;
		Texture():QPixmap;
		TextureImage():QImage;
		Transform():QTransform;
		DestroyQBrush():void;
		ToVariant():core.QVariant;
	}
	function NewQBrushFromPointer(ptr:number):QBrush;
	function NewQBrush():QBrush;
	function NewQBrush2(style:number):QBrush;
	function NewQBrush3(color:QColor_ITF,style:number):QBrush;
	function NewQBrush4(color:number,style:number):QBrush;
	function NewQBrush5(color:QColor_ITF,pixmap:QPixmap_ITF):QBrush;
	function NewQBrush6(color:number,pixmap:QPixmap_ITF):QBrush;
	function NewQBrush7(pixmap:QPixmap_ITF):QBrush;
	function NewQBrush8(image:QImage_ITF):QBrush;
	function NewQBrush9(other:QBrush_ITF):QBrush;
	function NewQBrush10(gradient:QGradient_ITF):QBrush;
	interface QClipboard_ITF extends core.QObject_ITF {
		QClipboard_PTR():QClipboard;
	}

	class QClipboard extends core.QObject {
		___pointer: number;
		QClipboard_PTR():QClipboard;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectChanged(f:(mode:number)=>void):void;
		DisconnectChanged():void;
		Changed(mode:number):void;
		Clear(mode:number):void;
		ConnectDataChanged(f:()=>void):void;
		DisconnectDataChanged():void;
		DataChanged():void;
		ConnectFindBufferChanged(f:()=>void):void;
		DisconnectFindBufferChanged():void;
		FindBufferChanged():void;
		Image(mode:number):QImage;
		MimeData(mode:number):core.QMimeData;
		OwnsClipboard():boolean;
		OwnsFindBuffer():boolean;
		OwnsSelection():boolean;
		Pixmap(mode:number):QPixmap;
		ConnectSelectionChanged(f:()=>void):void;
		DisconnectSelectionChanged():void;
		SelectionChanged():void;
		SetImage(image:QImage_ITF,mode:number):void;
		SetMimeData(src:core.QMimeData_ITF,mode:number):void;
		SetPixmap(pixmap:QPixmap_ITF,mode:number):void;
		SetText(text:string,mode:number):void;
		SupportsFindBuffer():boolean;
		SupportsSelection():boolean;
		Text(mode:number):string;
		Text2(subtype:string,mode:number):string;
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
	function NewQClipboardFromPointer(ptr:number):QClipboard;
	const QClipboard__Clipboard: number;
	const QClipboard__Selection: number;
	const QClipboard__FindBuffer: number;
	const QClipboard__LastMode: number;
	interface QCloseEvent_ITF extends core.QEvent_ITF {
		QCloseEvent_PTR():QCloseEvent;
	}

	class QCloseEvent extends core.QEvent {
		___pointer: number;
		QCloseEvent_PTR():QCloseEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQCloseEvent():void;
	}
	function NewQCloseEventFromPointer(ptr:number):QCloseEvent;
	function NewQCloseEvent():QCloseEvent;
	interface QColor_ITF {
		QColor_PTR():QColor;
	}

	class QColor {
		___pointer: number;
		QColor_PTR():QColor;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQColor():void;
		Alpha():number;
		AlphaF():number;
		Black():number;
		BlackF():number;
		Blue():number;
		BlueF():number;
		ColorNames():string[];
		ConvertTo(colorSpec:number):QColor;
		Cyan():number;
		CyanF():number;
		Darker(factor:number):QColor;
		FromCmyk(c:number,m:number,y:number,k:number,a:number):QColor;
		FromCmykF(c:number,m:number,y:number,k:number,a:number):QColor;
		FromHsl(h:number,s:number,l:number,a:number):QColor;
		FromHslF(h:number,s:number,l:number,a:number):QColor;
		FromHsv(h:number,s:number,v:number,a:number):QColor;
		FromHsvF(h:number,s:number,v:number,a:number):QColor;
		FromRgb(rgb:number):QColor;
		FromRgb2(r:number,g:number,b:number,a:number):QColor;
		FromRgbF(r:number,g:number,b:number,a:number):QColor;
		FromRgba(rgba:number):QColor;
		FromRgba64(r:number,g:number,b:number,a:number):QColor;
		FromRgba642(rgba64:QRgba64_ITF):QColor;
		GetCmyk2(c:number,m:number,y:number,k:number,a:number):void;
		GetCmykF2(c:number,m:number,y:number,k:number,a:number):void;
		GetHsl(h:number,s:number,l:number,a:number):void;
		GetHslF(h:number,s:number,l:number,a:number):void;
		GetHsv(h:number,s:number,v:number,a:number):void;
		GetHsvF(h:number,s:number,v:number,a:number):void;
		GetRgb(r:number,g:number,b:number,a:number):void;
		GetRgbF(r:number,g:number,b:number,a:number):void;
		Green():number;
		GreenF():number;
		HslHue():number;
		HslHueF():number;
		HslSaturation():number;
		HslSaturationF():number;
		HsvHue():number;
		HsvHueF():number;
		HsvSaturation():number;
		HsvSaturationF():number;
		Hue():number;
		HueF():number;
		IsValid():boolean;
		IsValidColor(name:string):boolean;
		IsValidColor2(name:core.QStringView_ITF):boolean;
		IsValidColor3(name:core.QLatin1String_ITF):boolean;
		Lighter(factor:number):QColor;
		Lightness():number;
		LightnessF():number;
		Magenta():number;
		MagentaF():number;
		Name():string;
		Name2(format:number):string;
		Red():number;
		RedF():number;
		Rgb():number;
		Rgba():number;
		Saturation():number;
		SaturationF():number;
		SetAlpha(alpha:number):void;
		SetAlphaF(alpha:number):void;
		SetBlue(blue:number):void;
		SetBlueF(blue:number):void;
		SetCmyk(c:number,m:number,y:number,k:number,a:number):void;
		SetCmykF(c:number,m:number,y:number,k:number,a:number):void;
		SetGreen(green:number):void;
		SetGreenF(green:number):void;
		SetHsl(h:number,s:number,l:number,a:number):void;
		SetHslF(h:number,s:number,l:number,a:number):void;
		SetHsv(h:number,s:number,v:number,a:number):void;
		SetHsvF(h:number,s:number,v:number,a:number):void;
		SetNamedColor(name:string):void;
		SetNamedColor2(name:core.QStringView_ITF):void;
		SetNamedColor3(name:core.QLatin1String_ITF):void;
		SetRed(red:number):void;
		SetRedF(red:number):void;
		SetRgb(r:number,g:number,b:number,a:number):void;
		SetRgb2(rgb:number):void;
		SetRgbF(r:number,g:number,b:number,a:number):void;
		SetRgba(rgba:number):void;
		SetRgba64(rgba:QRgba64_ITF):void;
		Spec():number;
		ToCmyk():QColor;
		ToHsl():QColor;
		ToHsv():QColor;
		ToRgb():QColor;
		Value():number;
		ValueF():number;
		Yellow():number;
		YellowF():number;
		ToVariant():core.QVariant;
	}
	function NewQColorFromPointer(ptr:number):QColor;
	function NewQColor():QColor;
	function NewQColor2(color:number):QColor;
	function NewQColor3(r:number,g:number,b:number,a:number):QColor;
	function NewQColor4(color:number):QColor;
	function NewQColor5(rgba64:QRgba64_ITF):QColor;
	function NewQColor6(name:string):QColor;
	function NewQColor8(name:string):QColor;
	function NewQColor9(name:core.QLatin1String_ITF):QColor;
	function QColor_ColorNames():string[];
	function QColor_FromCmyk(c:number,m:number,y:number,k:number,a:number):QColor;
	function QColor_FromCmykF(c:number,m:number,y:number,k:number,a:number):QColor;
	function QColor_FromHsl(h:number,s:number,l:number,a:number):QColor;
	function QColor_FromHslF(h:number,s:number,l:number,a:number):QColor;
	function QColor_FromHsv(h:number,s:number,v:number,a:number):QColor;
	function QColor_FromHsvF(h:number,s:number,v:number,a:number):QColor;
	function QColor_FromRgb(rgb:number):QColor;
	function QColor_FromRgb2(r:number,g:number,b:number,a:number):QColor;
	function QColor_FromRgbF(r:number,g:number,b:number,a:number):QColor;
	function QColor_FromRgba(rgba:number):QColor;
	function QColor_FromRgba64(r:number,g:number,b:number,a:number):QColor;
	function QColor_FromRgba642(rgba64:QRgba64_ITF):QColor;
	function QColor_IsValidColor(name:string):boolean;
	function QColor_IsValidColor2(name:core.QStringView_ITF):boolean;
	function QColor_IsValidColor3(name:core.QLatin1String_ITF):boolean;
	const QColor__Invalid: number;
	const QColor__Rgb: number;
	const QColor__Hsv: number;
	const QColor__Cmyk: number;
	const QColor__Hsl: number;
	const QColor__HexRgb: number;
	const QColor__HexArgb: number;
	interface QColorDialogOptions_ITF {
		QColorDialogOptions_PTR():QColorDialogOptions;
	}

	class QColorDialogOptions {
		___pointer: number;
		QColorDialogOptions_PTR():QColorDialogOptions;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQColorDialogOptions():void;
	}
	function NewQColorDialogOptionsFromPointer(ptr:number):QColorDialogOptions;
	interface QConicalGradient_ITF extends QGradient_ITF {
		QConicalGradient_PTR():QConicalGradient;
	}

	class QConicalGradient extends QGradient {
		___pointer: number;
		QConicalGradient_PTR():QConicalGradient;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQConicalGradient():void;
		Angle():number;
		Center():core.QPointF;
		SetAngle(angle:number):void;
		SetCenter(center:core.QPointF_ITF):void;
		SetCenter2(x:number,y:number):void;
	}
	function NewQConicalGradientFromPointer(ptr:number):QConicalGradient;
	function NewQConicalGradient():QConicalGradient;
	function NewQConicalGradient2(center:core.QPointF_ITF,angle:number):QConicalGradient;
	function NewQConicalGradient3(cx:number,cy:number,angle:number):QConicalGradient;
	interface QContextMenuEvent_ITF extends QInputEvent_ITF {
		QContextMenuEvent_PTR():QContextMenuEvent;
	}

	class QContextMenuEvent extends QInputEvent {
		___pointer: number;
		QContextMenuEvent_PTR():QContextMenuEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQContextMenuEvent():void;
		GlobalPos():core.QPoint;
		GlobalX():number;
		GlobalY():number;
		Pos():core.QPoint;
		Reason():number;
		X():number;
		Y():number;
	}
	function NewQContextMenuEventFromPointer(ptr:number):QContextMenuEvent;
	function NewQContextMenuEvent(reason:number,pos:core.QPoint_ITF,globalPos:core.QPoint_ITF,modifiers:number):QContextMenuEvent;
	function NewQContextMenuEvent2(reason:number,pos:core.QPoint_ITF,globalPos:core.QPoint_ITF):QContextMenuEvent;
	function NewQContextMenuEvent3(reason:number,pos:core.QPoint_ITF):QContextMenuEvent;
	const QContextMenuEvent__Mouse: number;
	const QContextMenuEvent__Keyboard: number;
	const QContextMenuEvent__Other: number;
	interface QCursor_ITF {
		QCursor_PTR():QCursor;
	}

	class QCursor {
		___pointer: number;
		QCursor_PTR():QCursor;
		Pointer():number;
		SetPointer(p:number):void;
		Bitmap():QBitmap;
		HotSpot():core.QPoint;
		Mask():QBitmap;
		Pixmap():QPixmap;
		Pos():core.QPoint;
		Pos2(screen:QScreen_ITF):core.QPoint;
		SetPos(x:number,y:number):void;
		SetPos2(screen:QScreen_ITF,x:number,y:number):void;
		SetPos3(p:core.QPoint_ITF):void;
		SetPos4(screen:QScreen_ITF,p:core.QPoint_ITF):void;
		SetShape(shape:number):void;
		Shape():number;
		Swap(other:QCursor_ITF):void;
		DestroyQCursor():void;
	}
	function NewQCursorFromPointer(ptr:number):QCursor;
	function NewQCursor():QCursor;
	function NewQCursor2(shape:number):QCursor;
	function NewQCursor3(bitmap:QBitmap_ITF,mask:QBitmap_ITF,hotX:number,hotY:number):QCursor;
	function NewQCursor4(pixmap:QPixmap_ITF,hotX:number,hotY:number):QCursor;
	function NewQCursor5(c:QCursor_ITF):QCursor;
	function NewQCursor6(other:QCursor_ITF):QCursor;
	function QCursor_Pos():core.QPoint;
	function QCursor_Pos2(screen:QScreen_ITF):core.QPoint;
	function QCursor_SetPos(x:number,y:number):void;
	function QCursor_SetPos2(screen:QScreen_ITF,x:number,y:number):void;
	function QCursor_SetPos3(p:core.QPoint_ITF):void;
	function QCursor_SetPos4(screen:QScreen_ITF,p:core.QPoint_ITF):void;
	interface QDesktopServices_ITF {
		QDesktopServices_PTR():QDesktopServices;
	}

	class QDesktopServices {
		___pointer: number;
		QDesktopServices_PTR():QDesktopServices;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDesktopServices():void;
		OpenUrl(url:core.QUrl_ITF):boolean;
		SetUrlHandler(scheme:string,receiver:core.QObject_ITF,method:string):void;
		UnsetUrlHandler(scheme:string):void;
	}
	function NewQDesktopServicesFromPointer(ptr:number):QDesktopServices;
	function QDesktopServices_OpenUrl(url:core.QUrl_ITF):boolean;
	function QDesktopServices_SetUrlHandler(scheme:string,receiver:core.QObject_ITF,method:string):void;
	function QDesktopServices_UnsetUrlHandler(scheme:string):void;
	interface QDoubleValidator_ITF extends QValidator_ITF {
		QDoubleValidator_PTR():QDoubleValidator;
	}

	class QDoubleValidator extends QValidator {
		___pointer: number;
		QDoubleValidator_PTR():QDoubleValidator;
		Pointer():number;
		SetPointer(p:number):void;
		Bottom():number;
		ConnectBottomChanged(f:(bottom:number)=>void):void;
		DisconnectBottomChanged():void;
		BottomChanged(bottom:number):void;
		Decimals():number;
		ConnectDecimalsChanged(f:(decimals:number)=>void):void;
		DisconnectDecimalsChanged():void;
		DecimalsChanged(decimals:number):void;
		Notation():number;
		ConnectNotationChanged(f:(notation:number)=>void):void;
		DisconnectNotationChanged():void;
		NotationChanged(notation:number):void;
		SetBottom(vdo:number):void;
		SetDecimals(vi:number):void;
		SetNotation(vqd:number):void;
		ConnectSetRange(f:(minimum:number,maximum:number,decimals:number)=>void):void;
		DisconnectSetRange():void;
		SetRange(minimum:number,maximum:number,decimals:number):void;
		SetRangeDefault(minimum:number,maximum:number,decimals:number):void;
		SetTop(vdo:number):void;
		Top():number;
		ConnectTopChanged(f:(top:number)=>void):void;
		DisconnectTopChanged():void;
		TopChanged(top:number):void;
		ConnectValidate(f:(input:string,pos:number)=>number):void;
		DisconnectValidate():void;
		Validate(input:string,pos:number):number;
		ValidateDefault(input:string,pos:number):number;
		ConnectDestroyQDoubleValidator(f:()=>void):void;
		DisconnectDestroyQDoubleValidator():void;
		DestroyQDoubleValidator():void;
		DestroyQDoubleValidatorDefault():void;
	}
	function NewQDoubleValidatorFromPointer(ptr:number):QDoubleValidator;
	function NewQDoubleValidator(parent:core.QObject_ITF):QDoubleValidator;
	function NewQDoubleValidator2(bottom:number,top:number,decimals:number,parent:core.QObject_ITF):QDoubleValidator;
	const QDoubleValidator__StandardNotation: number;
	const QDoubleValidator__ScientificNotation: number;
	interface QDrag_ITF extends core.QObject_ITF {
		QDrag_PTR():QDrag;
	}

	class QDrag extends core.QObject {
		___pointer: number;
		QDrag_PTR():QDrag;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActionChanged(f:(action:number)=>void):void;
		DisconnectActionChanged():void;
		ActionChanged(action:number):void;
		Cancel():void;
		DefaultAction():number;
		DragCursor(action:number):QPixmap;
		Exec(supportedActions:number):number;
		Exec2(supportedActions:number,defaultDropAction:number):number;
		HotSpot():core.QPoint;
		MimeData():core.QMimeData;
		Pixmap():QPixmap;
		SetDragCursor(cursor:QPixmap_ITF,action:number):void;
		SetHotSpot(hotspot:core.QPoint_ITF):void;
		SetMimeData(data:core.QMimeData_ITF):void;
		SetPixmap(pixmap:QPixmap_ITF):void;
		Source():core.QObject;
		SupportedActions():number;
		Target():core.QObject;
		ConnectTargetChanged(f:(newTarget:core.QObject)=>void):void;
		DisconnectTargetChanged():void;
		TargetChanged(newTarget:core.QObject_ITF):void;
		ConnectDestroyQDrag(f:()=>void):void;
		DisconnectDestroyQDrag():void;
		DestroyQDrag():void;
		DestroyQDragDefault():void;
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
	function NewQDragFromPointer(ptr:number):QDrag;
	function NewQDrag(dragSource:core.QObject_ITF):QDrag;
	function QDrag_Cancel():void;
	interface QDragEnterEvent_ITF extends QDragMoveEvent_ITF {
		QDragEnterEvent_PTR():QDragEnterEvent;
	}

	class QDragEnterEvent extends QDragMoveEvent {
		___pointer: number;
		QDragEnterEvent_PTR():QDragEnterEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDragEnterEvent():void;
	}
	function NewQDragEnterEventFromPointer(ptr:number):QDragEnterEvent;
	function NewQDragEnterEvent(point:core.QPoint_ITF,actions:number,data:core.QMimeData_ITF,buttons:number,modifiers:number):QDragEnterEvent;
	interface QDragLeaveEvent_ITF extends core.QEvent_ITF {
		QDragLeaveEvent_PTR():QDragLeaveEvent;
	}

	class QDragLeaveEvent extends core.QEvent {
		___pointer: number;
		QDragLeaveEvent_PTR():QDragLeaveEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDragLeaveEvent():void;
	}
	function NewQDragLeaveEventFromPointer(ptr:number):QDragLeaveEvent;
	function NewQDragLeaveEvent():QDragLeaveEvent;
	interface QDragMoveEvent_ITF extends QDropEvent_ITF {
		QDragMoveEvent_PTR():QDragMoveEvent;
	}

	class QDragMoveEvent extends QDropEvent {
		___pointer: number;
		QDragMoveEvent_PTR():QDragMoveEvent;
		Pointer():number;
		SetPointer(p:number):void;
		Accept(rectangle:core.QRect_ITF):void;
		AnswerRect():core.QRect;
		Ignore(rectangle:core.QRect_ITF):void;
		ConnectDestroyQDragMoveEvent(f:()=>void):void;
		DisconnectDestroyQDragMoveEvent():void;
		DestroyQDragMoveEvent():void;
		DestroyQDragMoveEventDefault():void;
	}
	function NewQDragMoveEventFromPointer(ptr:number):QDragMoveEvent;
	function NewQDragMoveEvent(pos:core.QPoint_ITF,actions:number,data:core.QMimeData_ITF,buttons:number,modifiers:number,ty:number):QDragMoveEvent;
	interface QDropEvent_ITF extends core.QEvent_ITF {
		QDropEvent_PTR():QDropEvent;
	}

	class QDropEvent extends core.QEvent {
		___pointer: number;
		QDropEvent_PTR():QDropEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDropEvent():void;
		AcceptProposedAction():void;
		DropAction():number;
		KeyboardModifiers():number;
		MimeData():core.QMimeData;
		MouseButtons():number;
		Pos():core.QPoint;
		PosF():core.QPointF;
		PossibleActions():number;
		ProposedAction():number;
		SetDropAction(action:number):void;
		Source():core.QObject;
	}
	function NewQDropEventFromPointer(ptr:number):QDropEvent;
	function NewQDropEvent(pos:core.QPointF_ITF,actions:number,data:core.QMimeData_ITF,buttons:number,modifiers:number,ty:number):QDropEvent;
	interface QEnterEvent_ITF extends core.QEvent_ITF {
		QEnterEvent_PTR():QEnterEvent;
	}

	class QEnterEvent extends core.QEvent {
		___pointer: number;
		QEnterEvent_PTR():QEnterEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQEnterEvent():void;
		GlobalPos():core.QPoint;
		GlobalX():number;
		GlobalY():number;
		LocalPos():core.QPointF;
		Pos():core.QPoint;
		ScreenPos():core.QPointF;
		WindowPos():core.QPointF;
		X():number;
		Y():number;
	}
	function NewQEnterEventFromPointer(ptr:number):QEnterEvent;
	function NewQEnterEvent(localPos:core.QPointF_ITF,windowPos:core.QPointF_ITF,screenPos:core.QPointF_ITF):QEnterEvent;
	interface QExposeEvent_ITF extends core.QEvent_ITF {
		QExposeEvent_PTR():QExposeEvent;
	}

	class QExposeEvent extends core.QEvent {
		___pointer: number;
		QExposeEvent_PTR():QExposeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQExposeEvent():void;
		Region():QRegion;
	}
	function NewQExposeEventFromPointer(ptr:number):QExposeEvent;
	function NewQExposeEvent(exposeRegion:QRegion_ITF):QExposeEvent;
	interface QFileDialogOptions_ITF {
		QFileDialogOptions_PTR():QFileDialogOptions;
	}

	class QFileDialogOptions {
		___pointer: number;
		QFileDialogOptions_PTR():QFileDialogOptions;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFileDialogOptions():void;
	}
	interface QFileOpenEvent_ITF extends core.QEvent_ITF {
		QFileOpenEvent_PTR():QFileOpenEvent;
	}

	class QFileOpenEvent extends core.QEvent {
		___pointer: number;
		QFileOpenEvent_PTR():QFileOpenEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFileOpenEvent():void;
		File():string;
		OpenFile(file:core.QFile_ITF,flags:number):boolean;
		Url():core.QUrl;
	}
	function NewQFileOpenEventFromPointer(ptr:number):QFileOpenEvent;
	interface QFocusEvent_ITF extends core.QEvent_ITF {
		QFocusEvent_PTR():QFocusEvent;
	}

	class QFocusEvent extends core.QEvent {
		___pointer: number;
		QFocusEvent_PTR():QFocusEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFocusEvent():void;
		GotFocus():boolean;
		LostFocus():boolean;
		Reason():number;
	}
	function NewQFocusEventFromPointer(ptr:number):QFocusEvent;
	function NewQFocusEvent(ty:number,reason:number):QFocusEvent;
	interface QFont_ITF {
		QFont_PTR():QFont;
	}

	class QFont {
		___pointer: number;
		QFont_PTR():QFont;
		Pointer():number;
		SetPointer(p:number):void;
		Bold():boolean;
		Capitalization():number;
		DefaultFamily():string;
		ExactMatch():boolean;
		Families():string[];
		Family():string;
		FixedPitch():boolean;
		FromString(descrip:string):boolean;
		HintingPreference():number;
		InsertSubstitution(familyName:string,substituteName:string):void;
		InsertSubstitutions(familyName:string,substituteNames:string[]):void;
		IsCopyOf(ff:QFont_ITF):boolean;
		Italic():boolean;
		Kerning():boolean;
		Key():string;
		LetterSpacing():number;
		LetterSpacingType():number;
		Overline():boolean;
		PixelSize():number;
		PointSize():number;
		PointSizeF():number;
		RemoveSubstitutions(familyName:string):void;
		Resolve(other:QFont_ITF):QFont;
		SetBold(enable:boolean):void;
		SetCapitalization(caps:number):void;
		SetFamilies(families:string[]):void;
		SetFamily(family:string):void;
		SetFixedPitch(enable:boolean):void;
		SetHintingPreference(hintingPreference:number):void;
		SetItalic(enable:boolean):void;
		SetKerning(enable:boolean):void;
		SetLetterSpacing(ty:number,spacing:number):void;
		SetOverline(enable:boolean):void;
		SetPixelSize(pixelSize:number):void;
		SetPointSize(pointSize:number):void;
		SetPointSizeF(pointSize:number):void;
		SetStretch(factor:number):void;
		SetStrikeOut(enable:boolean):void;
		SetStyle(style:number):void;
		SetStyleHint(hint:number,strategy:number):void;
		SetStyleName(styleName:string):void;
		SetStyleStrategy(s:number):void;
		SetUnderline(enable:boolean):void;
		SetWeight(weight:number):void;
		SetWordSpacing(spacing:number):void;
		Stretch():number;
		StrikeOut():boolean;
		Style():number;
		StyleHint():number;
		StyleName():string;
		StyleStrategy():number;
		Substitute(familyName:string):string;
		Substitutes(familyName:string):string[];
		Substitutions():string[];
		Swap(other:QFont_ITF):void;
		ToString():string;
		Underline():boolean;
		Weight():number;
		WordSpacing():number;
		DestroyQFont():void;
		ToVariant():core.QVariant;
	}
	function NewQFontFromPointer(ptr:number):QFont;
	function NewQFont():QFont;
	function NewQFont2(family:string,pointSize:number,weight:number,italic:boolean):QFont;
	function NewQFont4(font:QFont_ITF,pd:QPaintDevice_ITF):QFont;
	function NewQFont5(font:QFont_ITF):QFont;
	function QFont_InsertSubstitution(familyName:string,substituteName:string):void;
	function QFont_InsertSubstitutions(familyName:string,substituteNames:string[]):void;
	function QFont_RemoveSubstitutions(familyName:string):void;
	function QFont_Substitute(familyName:string):string;
	function QFont_Substitutes(familyName:string):string[];
	function QFont_Substitutions():string[];
	const QFont__Helvetica: number;
	const QFont__SansSerif: number;
	const QFont__Times: number;
	const QFont__Serif: number;
	const QFont__Courier: number;
	const QFont__TypeWriter: number;
	const QFont__OldEnglish: number;
	const QFont__Decorative: number;
	const QFont__System: number;
	const QFont__AnyStyle: number;
	const QFont__Cursive: number;
	const QFont__Monospace: number;
	const QFont__Fantasy: number;
	const QFont__PreferDefault: number;
	const QFont__PreferBitmap: number;
	const QFont__PreferDevice: number;
	const QFont__PreferOutline: number;
	const QFont__ForceOutline: number;
	const QFont__PreferMatch: number;
	const QFont__PreferQuality: number;
	const QFont__PreferAntialias: number;
	const QFont__NoAntialias: number;
	const QFont__OpenGLCompatible: number;
	const QFont__ForceIntegerMetrics: number;
	const QFont__NoSubpixelAntialias: number;
	const QFont__PreferNoShaping: number;
	const QFont__NoFontMerging: number;
	const QFont__PreferDefaultHinting: number;
	const QFont__PreferNoHinting: number;
	const QFont__PreferVerticalHinting: number;
	const QFont__PreferFullHinting: number;
	const QFont__Thin: number;
	const QFont__ExtraLight: number;
	const QFont__Light: number;
	const QFont__Normal: number;
	const QFont__Medium: number;
	const QFont__DemiBold: number;
	const QFont__Bold: number;
	const QFont__ExtraBold: number;
	const QFont__Black: number;
	const QFont__StyleNormal: number;
	const QFont__StyleItalic: number;
	const QFont__StyleOblique: number;
	const QFont__AnyStretch: number;
	const QFont__UltraCondensed: number;
	const QFont__ExtraCondensed: number;
	const QFont__Condensed: number;
	const QFont__SemiCondensed: number;
	const QFont__Unstretched: number;
	const QFont__SemiExpanded: number;
	const QFont__Expanded: number;
	const QFont__ExtraExpanded: number;
	const QFont__UltraExpanded: number;
	const QFont__MixedCase: number;
	const QFont__AllUppercase: number;
	const QFont__AllLowercase: number;
	const QFont__SmallCaps: number;
	const QFont__Capitalize: number;
	const QFont__PercentageSpacing: number;
	const QFont__AbsoluteSpacing: number;
	interface QFontDatabase_ITF {
		QFontDatabase_PTR():QFontDatabase;
	}

	class QFontDatabase {
		___pointer: number;
		QFontDatabase_PTR():QFontDatabase;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFontDatabase():void;
		AddApplicationFont(fileName:string):number;
		AddApplicationFontFromData(fontData:core.QByteArray_ITF):number;
		ApplicationFontFamilies(id:number):string[];
		Bold(family:string,style:string):boolean;
		Families(writingSystem:number):string[];
		Font(family:string,style:string,pointSize:number):QFont;
		IsBitmapScalable(family:string,style:string):boolean;
		IsFixedPitch(family:string,style:string):boolean;
		IsPrivateFamily(family:string):boolean;
		IsScalable(family:string,style:string):boolean;
		IsSmoothlyScalable(family:string,style:string):boolean;
		Italic(family:string,style:string):boolean;
		PointSizes(family:string,styleName:string):number[];
		RemoveAllApplicationFonts():boolean;
		RemoveApplicationFont(id:number):boolean;
		SmoothSizes(family:string,styleName:string):number[];
		StandardSizes():number[];
		StyleString(font:QFont_ITF):string;
		StyleString2(fontInfo:QFontInfo_ITF):string;
		Styles(family:string):string[];
		SystemFont(ty:number):QFont;
		Weight(family:string,style:string):number;
	}
	function NewQFontDatabaseFromPointer(ptr:number):QFontDatabase;
	function NewQFontDatabase():QFontDatabase;
	function QFontDatabase_AddApplicationFont(fileName:string):number;
	function QFontDatabase_AddApplicationFontFromData(fontData:core.QByteArray_ITF):number;
	function QFontDatabase_ApplicationFontFamilies(id:number):string[];
	function QFontDatabase_RemoveAllApplicationFonts():boolean;
	function QFontDatabase_RemoveApplicationFont(id:number):boolean;
	function QFontDatabase_StandardSizes():number[];
	function QFontDatabase_SystemFont(ty:number):QFont;
	const QFontDatabase__Any: number;
	const QFontDatabase__Latin: number;
	const QFontDatabase__Greek: number;
	const QFontDatabase__Cyrillic: number;
	const QFontDatabase__Armenian: number;
	const QFontDatabase__Hebrew: number;
	const QFontDatabase__Arabic: number;
	const QFontDatabase__Syriac: number;
	const QFontDatabase__Thaana: number;
	const QFontDatabase__Devanagari: number;
	const QFontDatabase__Bengali: number;
	const QFontDatabase__Gurmukhi: number;
	const QFontDatabase__Gujarati: number;
	const QFontDatabase__Oriya: number;
	const QFontDatabase__Tamil: number;
	const QFontDatabase__Telugu: number;
	const QFontDatabase__Kannada: number;
	const QFontDatabase__Malayalam: number;
	const QFontDatabase__Sinhala: number;
	const QFontDatabase__Thai: number;
	const QFontDatabase__Lao: number;
	const QFontDatabase__Tibetan: number;
	const QFontDatabase__Myanmar: number;
	const QFontDatabase__Georgian: number;
	const QFontDatabase__Khmer: number;
	const QFontDatabase__SimplifiedChinese: number;
	const QFontDatabase__TraditionalChinese: number;
	const QFontDatabase__Japanese: number;
	const QFontDatabase__Korean: number;
	const QFontDatabase__Vietnamese: number;
	const QFontDatabase__Symbol: number;
	const QFontDatabase__Other: number;
	const QFontDatabase__Ogham: number;
	const QFontDatabase__Runic: number;
	const QFontDatabase__Nko: number;
	const QFontDatabase__WritingSystemsCount: number;
	const QFontDatabase__GeneralFont: number;
	const QFontDatabase__FixedFont: number;
	const QFontDatabase__TitleFont: number;
	const QFontDatabase__SmallestReadableFont: number;
	interface QFontDialogOptions_ITF {
		QFontDialogOptions_PTR():QFontDialogOptions;
	}

	class QFontDialogOptions {
		___pointer: number;
		QFontDialogOptions_PTR():QFontDialogOptions;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFontDialogOptions():void;
	}
	function NewQFontDialogOptionsFromPointer(ptr:number):QFontDialogOptions;
	interface QFontInfo_ITF {
		QFontInfo_PTR():QFontInfo;
	}

	class QFontInfo {
		___pointer: number;
		QFontInfo_PTR():QFontInfo;
		Pointer():number;
		SetPointer(p:number):void;
		Bold():boolean;
		ExactMatch():boolean;
		Family():string;
		FixedPitch():boolean;
		Italic():boolean;
		PixelSize():number;
		PointSize():number;
		PointSizeF():number;
		Style():number;
		StyleHint():number;
		StyleName():string;
		Swap(other:QFontInfo_ITF):void;
		Weight():number;
		DestroyQFontInfo():void;
	}
	function NewQFontInfoFromPointer(ptr:number):QFontInfo;
	function NewQFontInfo(font:QFont_ITF):QFontInfo;
	function NewQFontInfo2(fi:QFontInfo_ITF):QFontInfo;
	interface QFontMetrics_ITF {
		QFontMetrics_PTR():QFontMetrics;
	}

	class QFontMetrics {
		___pointer: number;
		QFontMetrics_PTR():QFontMetrics;
		Pointer():number;
		SetPointer(p:number):void;
		Ascent():number;
		AverageCharWidth():number;
		BoundingRect(ch:core.QChar_ITF):core.QRect;
		BoundingRect2(text:string):core.QRect;
		BoundingRect3(rect:core.QRect_ITF,flags:number,text:string,tabStops:number,tabArray:number):core.QRect;
		BoundingRect4(x:number,y:number,width:number,height:number,flags:number,text:string,tabStops:number,tabArray:number):core.QRect;
		CapHeight():number;
		Descent():number;
		ElidedText(text:string,mode:number,width:number,flags:number):string;
		Height():number;
		HorizontalAdvance(text:string,l:number):number;
		HorizontalAdvance2(ch:core.QChar_ITF):number;
		InFont(ch:core.QChar_ITF):boolean;
		InFontUcs4(ucs4:number):boolean;
		Leading():number;
		LeftBearing(ch:core.QChar_ITF):number;
		LineSpacing():number;
		LineWidth():number;
		MaxWidth():number;
		MinLeftBearing():number;
		MinRightBearing():number;
		OverlinePos():number;
		RightBearing(ch:core.QChar_ITF):number;
		Size(flags:number,text:string,tabStops:number,tabArray:number):core.QSize;
		StrikeOutPos():number;
		Swap(other:QFontMetrics_ITF):void;
		TightBoundingRect(text:string):core.QRect;
		UnderlinePos():number;
		XHeight():number;
		DestroyQFontMetrics():void;
	}
	function NewQFontMetricsFromPointer(ptr:number):QFontMetrics;
	function NewQFontMetrics(font:QFont_ITF):QFontMetrics;
	function NewQFontMetrics3(font:QFont_ITF,paintdevice:QPaintDevice_ITF):QFontMetrics;
	function NewQFontMetrics4(fm:QFontMetrics_ITF):QFontMetrics;
	interface QFontMetricsF_ITF {
		QFontMetricsF_PTR():QFontMetricsF;
	}

	class QFontMetricsF {
		___pointer: number;
		QFontMetricsF_PTR():QFontMetricsF;
		Pointer():number;
		SetPointer(p:number):void;
		Ascent():number;
		AverageCharWidth():number;
		BoundingRect(text:string):core.QRectF;
		BoundingRect2(ch:core.QChar_ITF):core.QRectF;
		BoundingRect3(rect:core.QRectF_ITF,flags:number,text:string,tabStops:number,tabArray:number):core.QRectF;
		CapHeight():number;
		Descent():number;
		ElidedText(text:string,mode:number,width:number,flags:number):string;
		Height():number;
		HorizontalAdvance(text:string,length:number):number;
		HorizontalAdvance2(ch:core.QChar_ITF):number;
		InFont(ch:core.QChar_ITF):boolean;
		InFontUcs4(ch:number):boolean;
		Leading():number;
		LeftBearing(ch:core.QChar_ITF):number;
		LineSpacing():number;
		LineWidth():number;
		MaxWidth():number;
		MinLeftBearing():number;
		MinRightBearing():number;
		OverlinePos():number;
		RightBearing(ch:core.QChar_ITF):number;
		Size(flags:number,text:string,tabStops:number,tabArray:number):core.QSizeF;
		StrikeOutPos():number;
		Swap(other:QFontMetricsF_ITF):void;
		TightBoundingRect(text:string):core.QRectF;
		UnderlinePos():number;
		XHeight():number;
		DestroyQFontMetricsF():void;
	}
	function NewQFontMetricsFFromPointer(ptr:number):QFontMetricsF;
	function NewQFontMetricsF(font:QFont_ITF):QFontMetricsF;
	function NewQFontMetricsF3(font:QFont_ITF,paintdevice:QPaintDevice_ITF):QFontMetricsF;
	function NewQFontMetricsF4(fontMetrics:QFontMetrics_ITF):QFontMetricsF;
	function NewQFontMetricsF5(fm:QFontMetricsF_ITF):QFontMetricsF;
	interface QGenericMatrix_ITF {
		QGenericMatrix_PTR():QGenericMatrix;
	}

	class QGenericMatrix {
		___pointer: number;
		QGenericMatrix_PTR():QGenericMatrix;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQGenericMatrix():void;
	}
	interface QGenericPlugin_ITF extends core.QObject_ITF {
		QGenericPlugin_PTR():QGenericPlugin;
	}

	class QGenericPlugin extends core.QObject {
		___pointer: number;
		QGenericPlugin_PTR():QGenericPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreate(f:(key:string,specification:string)=>core.QObject):void;
		DisconnectCreate():void;
		Create(key:string,specification:string):core.QObject;
		ConnectDestroyQGenericPlugin(f:()=>void):void;
		DisconnectDestroyQGenericPlugin():void;
		DestroyQGenericPlugin():void;
		DestroyQGenericPluginDefault():void;
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
	function NewQGenericPluginFromPointer(ptr:number):QGenericPlugin;
	function NewQGenericPlugin(parent:core.QObject_ITF):QGenericPlugin;
	interface QGenericPluginFactory_ITF {
		QGenericPluginFactory_PTR():QGenericPluginFactory;
	}

	class QGenericPluginFactory {
		___pointer: number;
		QGenericPluginFactory_PTR():QGenericPluginFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQGenericPluginFactory():void;
		Create(key:string,specification:string):core.QObject;
		Keys():string[];
	}
	function NewQGenericPluginFactoryFromPointer(ptr:number):QGenericPluginFactory;
	function QGenericPluginFactory_Create(key:string,specification:string):core.QObject;
	function QGenericPluginFactory_Keys():string[];
	interface QGlyphRun_ITF {
		QGlyphRun_PTR():QGlyphRun;
	}

	class QGlyphRun {
		___pointer: number;
		QGlyphRun_PTR():QGlyphRun;
		Pointer():number;
		SetPointer(p:number):void;
		BoundingRect():core.QRectF;
		Clear():void;
		Flags():number;
		GlyphIndexes():number[];
		IsEmpty():boolean;
		IsRightToLeft():boolean;
		Overline():boolean;
		Positions():core.QPointF[];
		RawFont():QRawFont;
		SetBoundingRect(boundingRect:core.QRectF_ITF):void;
		SetFlag(flag:number,enabled:boolean):void;
		SetFlags(flags:number):void;
		SetGlyphIndexes(glyphIndexes:number[]):void;
		SetOverline(overline:boolean):void;
		SetPositions(positions:core.QPointF[]):void;
		SetRawData(glyphIndexArray:number,glyphPositionArray:core.QPointF_ITF,size:number):void;
		SetRawFont(rawFont:QRawFont_ITF):void;
		SetRightToLeft(rightToLeft:boolean):void;
		SetStrikeOut(strikeOut:boolean):void;
		SetUnderline(underline:boolean):void;
		StrikeOut():boolean;
		Swap(other:QGlyphRun_ITF):void;
		Underline():boolean;
		DestroyQGlyphRun():void;
	}
	function NewQGlyphRunFromPointer(ptr:number):QGlyphRun;
	function NewQGlyphRun():QGlyphRun;
	function NewQGlyphRun2(other:QGlyphRun_ITF):QGlyphRun;
	const QGlyphRun__Overline: number;
	const QGlyphRun__Underline: number;
	const QGlyphRun__StrikeOut: number;
	const QGlyphRun__RightToLeft: number;
	const QGlyphRun__SplitLigature: number;
	interface QGradient_ITF {
		QGradient_PTR():QGradient;
	}

	class QGradient {
		___pointer: number;
		QGradient_PTR():QGradient;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQGradient():void;
		CoordinateMode():number;
		SetColorAt(position:number,color:QColor_ITF):void;
		SetCoordinateMode(mode:number):void;
		SetSpread(method:number):void;
		Spread():number;
		Type():number;
	}
	function NewQGradientFromPointer(ptr:number):QGradient;
	function NewQGradient2(preset:number):QGradient;
	const QGradient__LinearGradient: number;
	const QGradient__RadialGradient: number;
	const QGradient__ConicalGradient: number;
	const QGradient__NoGradient: number;
	const QGradient__PadSpread: number;
	const QGradient__ReflectSpread: number;
	const QGradient__RepeatSpread: number;
	const QGradient__LogicalMode: number;
	const QGradient__StretchToDeviceMode: number;
	const QGradient__ObjectBoundingMode: number;
	const QGradient__ObjectMode: number;
	const QGradient__WarmFlame: number;
	const QGradient__NightFade: number;
	const QGradient__SpringWarmth: number;
	const QGradient__JuicyPeach: number;
	const QGradient__YoungPassion: number;
	const QGradient__LadyLips: number;
	const QGradient__SunnyMorning: number;
	const QGradient__RainyAshville: number;
	const QGradient__FrozenDreams: number;
	const QGradient__WinterNeva: number;
	const QGradient__DustyGrass: number;
	const QGradient__TemptingAzure: number;
	const QGradient__HeavyRain: number;
	const QGradient__AmyCrisp: number;
	const QGradient__MeanFruit: number;
	const QGradient__DeepBlue: number;
	const QGradient__RipeMalinka: number;
	const QGradient__CloudyKnoxville: number;
	const QGradient__MalibuBeach: number;
	const QGradient__NewLife: number;
	const QGradient__TrueSunset: number;
	const QGradient__MorpheusDen: number;
	const QGradient__RareWind: number;
	const QGradient__NearMoon: number;
	const QGradient__WildApple: number;
	const QGradient__SaintPetersburg: number;
	const QGradient__PlumPlate: number;
	const QGradient__EverlastingSky: number;
	const QGradient__HappyFisher: number;
	const QGradient__Blessing: number;
	const QGradient__SharpeyeEagle: number;
	const QGradient__LadogaBottom: number;
	const QGradient__LemonGate: number;
	const QGradient__ItmeoBranding: number;
	const QGradient__ZeusMiracle: number;
	const QGradient__OldHat: number;
	const QGradient__StarWine: number;
	const QGradient__HappyAcid: number;
	const QGradient__AwesomePine: number;
	const QGradient__NewYork: number;
	const QGradient__ShyRainbow: number;
	const QGradient__MixedHopes: number;
	const QGradient__FlyHigh: number;
	const QGradient__StrongBliss: number;
	const QGradient__FreshMilk: number;
	const QGradient__SnowAgain: number;
	const QGradient__FebruaryInk: number;
	const QGradient__KindSteel: number;
	const QGradient__SoftGrass: number;
	const QGradient__GrownEarly: number;
	const QGradient__SharpBlues: number;
	const QGradient__ShadyWater: number;
	const QGradient__DirtyBeauty: number;
	const QGradient__GreatWhale: number;
	const QGradient__TeenNotebook: number;
	const QGradient__PoliteRumors: number;
	const QGradient__SweetPeriod: number;
	const QGradient__WideMatrix: number;
	const QGradient__SoftCherish: number;
	const QGradient__RedSalvation: number;
	const QGradient__BurningSpring: number;
	const QGradient__NightParty: number;
	const QGradient__SkyGlider: number;
	const QGradient__HeavenPeach: number;
	const QGradient__PurpleDivision: number;
	const QGradient__AquaSplash: number;
	const QGradient__SpikyNaga: number;
	const QGradient__LoveKiss: number;
	const QGradient__CleanMirror: number;
	const QGradient__PremiumDark: number;
	const QGradient__ColdEvening: number;
	const QGradient__CochitiLake: number;
	const QGradient__SummerGames: number;
	const QGradient__PassionateBed: number;
	const QGradient__MountainRock: number;
	const QGradient__DesertHump: number;
	const QGradient__JungleDay: number;
	const QGradient__PhoenixStart: number;
	const QGradient__OctoberSilence: number;
	const QGradient__FarawayRiver: number;
	const QGradient__AlchemistLab: number;
	const QGradient__OverSun: number;
	const QGradient__PremiumWhite: number;
	const QGradient__MarsParty: number;
	const QGradient__EternalConstance: number;
	const QGradient__JapanBlush: number;
	const QGradient__SmilingRain: number;
	const QGradient__CloudyApple: number;
	const QGradient__BigMango: number;
	const QGradient__HealthyWater: number;
	const QGradient__AmourAmour: number;
	const QGradient__RiskyConcrete: number;
	const QGradient__StrongStick: number;
	const QGradient__ViciousStance: number;
	const QGradient__PaloAlto: number;
	const QGradient__HappyMemories: number;
	const QGradient__MidnightBloom: number;
	const QGradient__Crystalline: number;
	const QGradient__PartyBliss: number;
	const QGradient__ConfidentCloud: number;
	const QGradient__LeCocktail: number;
	const QGradient__RiverCity: number;
	const QGradient__FrozenBerry: number;
	const QGradient__ChildCare: number;
	const QGradient__FlyingLemon: number;
	const QGradient__NewRetrowave: number;
	const QGradient__HiddenJaguar: number;
	const QGradient__AboveTheSky: number;
	const QGradient__Nega: number;
	const QGradient__DenseWater: number;
	const QGradient__Seashore: number;
	const QGradient__MarbleWall: number;
	const QGradient__CheerfulCaramel: number;
	const QGradient__NightSky: number;
	const QGradient__MagicLake: number;
	const QGradient__YoungGrass: number;
	const QGradient__ColorfulPeach: number;
	const QGradient__GentleCare: number;
	const QGradient__PlumBath: number;
	const QGradient__HappyUnicorn: number;
	const QGradient__AfricanField: number;
	const QGradient__SolidStone: number;
	const QGradient__OrangeJuice: number;
	const QGradient__GlassWater: number;
	const QGradient__NorthMiracle: number;
	const QGradient__FruitBlend: number;
	const QGradient__MillenniumPine: number;
	const QGradient__HighFlight: number;
	const QGradient__MoleHall: number;
	const QGradient__SpaceShift: number;
	const QGradient__ForestInei: number;
	const QGradient__RoyalGarden: number;
	const QGradient__RichMetal: number;
	const QGradient__JuicyCake: number;
	const QGradient__SmartIndigo: number;
	const QGradient__SandStrike: number;
	const QGradient__NorseBeauty: number;
	const QGradient__AquaGuidance: number;
	const QGradient__SunVeggie: number;
	const QGradient__SeaLord: number;
	const QGradient__BlackSea: number;
	const QGradient__GrassShampoo: number;
	const QGradient__LandingAircraft: number;
	const QGradient__WitchDance: number;
	const QGradient__SleeplessNight: number;
	const QGradient__AngelCare: number;
	const QGradient__CrystalRiver: number;
	const QGradient__SoftLipstick: number;
	const QGradient__SaltMountain: number;
	const QGradient__PerfectWhite: number;
	const QGradient__FreshOasis: number;
	const QGradient__StrictNovember: number;
	const QGradient__MorningSalad: number;
	const QGradient__DeepRelief: number;
	const QGradient__SeaStrike: number;
	const QGradient__NightCall: number;
	const QGradient__SupremeSky: number;
	const QGradient__LightBlue: number;
	const QGradient__MindCrawl: number;
	const QGradient__LilyMeadow: number;
	const QGradient__SugarLollipop: number;
	const QGradient__SweetDessert: number;
	const QGradient__MagicRay: number;
	const QGradient__TeenParty: number;
	const QGradient__FrozenHeat: number;
	const QGradient__GagarinView: number;
	const QGradient__FabledSunset: number;
	const QGradient__PerfectBlue: number;
	interface QGuiApplication_ITF extends core.QCoreApplication_ITF {
		QGuiApplication_PTR():QGuiApplication;
	}

	class QGuiApplication extends core.QCoreApplication {
		___pointer: number;
		QGuiApplication_PTR():QGuiApplication;
		Pointer():number;
		SetPointer(p:number):void;
		ApplicationDisplayName():string;
		ConnectApplicationDisplayNameChanged(f:()=>void):void;
		DisconnectApplicationDisplayNameChanged():void;
		ApplicationDisplayNameChanged():void;
		ApplicationState():number;
		ConnectApplicationStateChanged(f:(state:number)=>void):void;
		DisconnectApplicationStateChanged():void;
		ApplicationStateChanged(state:number):void;
		ChangeOverrideCursor(cursor:QCursor_ITF):void;
		Clipboard():QClipboard;
		ConnectCommitDataRequest(f:(manager:QSessionManager)=>void):void;
		DisconnectCommitDataRequest():void;
		CommitDataRequest(manager:QSessionManager_ITF):void;
		DesktopFileName():string;
		DesktopSettingsAware():boolean;
		DevicePixelRatio():number;
		EventDefault(e:core.QEvent_ITF):boolean;
		Exec():number;
		FocusObject():core.QObject;
		ConnectFocusObjectChanged(f:(focusObject:core.QObject)=>void):void;
		DisconnectFocusObjectChanged():void;
		FocusObjectChanged(focusObject:core.QObject_ITF):void;
		FocusWindow():QWindow;
		ConnectFocusWindowChanged(f:(focusWindow:QWindow)=>void):void;
		DisconnectFocusWindowChanged():void;
		FocusWindowChanged(focusWindow:QWindow_ITF):void;
		Font():QFont;
		ConnectFontChanged(f:(font:QFont)=>void):void;
		DisconnectFontChanged():void;
		FontChanged(font:QFont_ITF):void;
		ConnectFontDatabaseChanged(f:()=>void):void;
		DisconnectFontDatabaseChanged():void;
		FontDatabaseChanged():void;
		InputMethod():QInputMethod;
		IsFallbackSessionManagementEnabled():boolean;
		IsLeftToRight():boolean;
		IsRightToLeft():boolean;
		IsSavingSession():boolean;
		IsSessionRestored():boolean;
		KeyboardModifiers():number;
		ConnectLastWindowClosed(f:()=>void):void;
		DisconnectLastWindowClosed():void;
		LastWindowClosed():void;
		LayoutDirection():number;
		ConnectLayoutDirectionChanged(f:(direction:number)=>void):void;
		DisconnectLayoutDirectionChanged():void;
		LayoutDirectionChanged(direction:number):void;
		ModalWindow():QWindow;
		MouseButtons():number;
		OverrideCursor():QCursor;
		Palette():QPalette;
		ConnectPaletteChanged(f:(palette:QPalette)=>void):void;
		DisconnectPaletteChanged():void;
		PaletteChanged(palette:QPalette_ITF):void;
		PlatformFunction(func:core.QByteArray_ITF):number;
		PlatformName():string;
		PrimaryScreen():QScreen;
		ConnectPrimaryScreenChanged(f:(screen:QScreen)=>void):void;
		DisconnectPrimaryScreenChanged():void;
		PrimaryScreenChanged(screen:QScreen_ITF):void;
		QueryKeyboardModifiers():number;
		QuitOnLastWindowClosed():boolean;
		RestoreOverrideCursor():void;
		ConnectSaveStateRequest(f:(manager:QSessionManager)=>void):void;
		DisconnectSaveStateRequest():void;
		SaveStateRequest(manager:QSessionManager_ITF):void;
		ConnectScreenAdded(f:(screen:QScreen)=>void):void;
		DisconnectScreenAdded():void;
		ScreenAdded(screen:QScreen_ITF):void;
		ScreenAt(point:core.QPoint_ITF):QScreen;
		ConnectScreenRemoved(f:(screen:QScreen)=>void):void;
		DisconnectScreenRemoved():void;
		ScreenRemoved(screen:QScreen_ITF):void;
		Screens():QScreen[];
		SessionId():string;
		SessionKey():string;
		SetApplicationDisplayName(name:string):void;
		SetDesktopFileName(name:string):void;
		SetDesktopSettingsAware(on:boolean):void;
		SetFallbackSessionManagementEnabled(enabled:boolean):void;
		SetFont(font:QFont_ITF):void;
		SetLayoutDirection(direction:number):void;
		SetOverrideCursor(cursor:QCursor_ITF):void;
		SetPalette(pal:QPalette_ITF):void;
		SetQuitOnLastWindowClosed(quit:boolean):void;
		SetWindowIcon(icon:QIcon_ITF):void;
		StyleHints():QStyleHints;
		Sync():void;
		TopLevelAt(pos:core.QPoint_ITF):QWindow;
		WindowIcon():QIcon;
		ConnectDestroyQGuiApplication(f:()=>void):void;
		DisconnectDestroyQGuiApplication():void;
		DestroyQGuiApplication():void;
		DestroyQGuiApplicationDefault():void;
		QuitDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQGuiApplicationFromPointer(ptr:number):QGuiApplication;
	function NewQGuiApplication(argc:number,argv:string[]):QGuiApplication;
	function QGuiApplication_ApplicationDisplayName():string;
	function QGuiApplication_ApplicationState():number;
	function QGuiApplication_ChangeOverrideCursor(cursor:QCursor_ITF):void;
	function QGuiApplication_Clipboard():QClipboard;
	function QGuiApplication_DesktopFileName():string;
	function QGuiApplication_DesktopSettingsAware():boolean;
	function QGuiApplication_Exec():number;
	function QGuiApplication_FocusObject():core.QObject;
	function QGuiApplication_FocusWindow():QWindow;
	function QGuiApplication_Font():QFont;
	function QGuiApplication_InputMethod():QInputMethod;
	function QGuiApplication_IsFallbackSessionManagementEnabled():boolean;
	function QGuiApplication_IsLeftToRight():boolean;
	function QGuiApplication_IsRightToLeft():boolean;
	function QGuiApplication_KeyboardModifiers():number;
	function QGuiApplication_LayoutDirection():number;
	function QGuiApplication_ModalWindow():QWindow;
	function QGuiApplication_MouseButtons():number;
	function QGuiApplication_OverrideCursor():QCursor;
	function QGuiApplication_Palette():QPalette;
	function QGuiApplication_PlatformFunction(func:core.QByteArray_ITF):number;
	function QGuiApplication_PlatformName():string;
	function QGuiApplication_PrimaryScreen():QScreen;
	function QGuiApplication_QueryKeyboardModifiers():number;
	function QGuiApplication_QuitOnLastWindowClosed():boolean;
	function QGuiApplication_RestoreOverrideCursor():void;
	function QGuiApplication_ScreenAt(point:core.QPoint_ITF):QScreen;
	function QGuiApplication_Screens():QScreen[];
	function QGuiApplication_SetApplicationDisplayName(name:string):void;
	function QGuiApplication_SetDesktopFileName(name:string):void;
	function QGuiApplication_SetDesktopSettingsAware(on:boolean):void;
	function QGuiApplication_SetFallbackSessionManagementEnabled(enabled:boolean):void;
	function QGuiApplication_SetFont(font:QFont_ITF):void;
	function QGuiApplication_SetLayoutDirection(direction:number):void;
	function QGuiApplication_SetOverrideCursor(cursor:QCursor_ITF):void;
	function QGuiApplication_SetPalette(pal:QPalette_ITF):void;
	function QGuiApplication_SetQuitOnLastWindowClosed(quit:boolean):void;
	function QGuiApplication_SetWindowIcon(icon:QIcon_ITF):void;
	function QGuiApplication_StyleHints():QStyleHints;
	function QGuiApplication_Sync():void;
	function QGuiApplication_TopLevelAt(pos:core.QPoint_ITF):QWindow;
	function QGuiApplication_WindowIcon():QIcon;
	interface QHelpEvent_ITF extends core.QEvent_ITF {
		QHelpEvent_PTR():QHelpEvent;
	}

	class QHelpEvent extends core.QEvent {
		___pointer: number;
		QHelpEvent_PTR():QHelpEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQHelpEvent():void;
		GlobalPos():core.QPoint;
		GlobalX():number;
		GlobalY():number;
		Pos():core.QPoint;
		X():number;
		Y():number;
	}
	function NewQHelpEventFromPointer(ptr:number):QHelpEvent;
	function NewQHelpEvent(ty:number,pos:core.QPoint_ITF,globalPos:core.QPoint_ITF):QHelpEvent;
	interface QHideEvent_ITF extends core.QEvent_ITF {
		QHideEvent_PTR():QHideEvent;
	}

	class QHideEvent extends core.QEvent {
		___pointer: number;
		QHideEvent_PTR():QHideEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQHideEvent():void;
	}
	function NewQHideEventFromPointer(ptr:number):QHideEvent;
	function NewQHideEvent():QHideEvent;
	interface QHoverEvent_ITF extends QInputEvent_ITF {
		QHoverEvent_PTR():QHoverEvent;
	}

	class QHoverEvent extends QInputEvent {
		___pointer: number;
		QHoverEvent_PTR():QHoverEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQHoverEvent():void;
		OldPos():core.QPoint;
		OldPosF():core.QPointF;
		Pos():core.QPoint;
		PosF():core.QPointF;
	}
	function NewQHoverEventFromPointer(ptr:number):QHoverEvent;
	function NewQHoverEvent(ty:number,pos:core.QPointF_ITF,oldPos:core.QPointF_ITF,modifiers:number):QHoverEvent;
	interface QIcon_ITF {
		QIcon_PTR():QIcon;
	}

	class QIcon {
		___pointer: number;
		QIcon_PTR():QIcon;
		Pointer():number;
		SetPointer(p:number):void;
		ActualSize(size:core.QSize_ITF,mode:number,state:number):core.QSize;
		ActualSize2(window:QWindow_ITF,size:core.QSize_ITF,mode:number,state:number):core.QSize;
		AddFile(fileName:string,size:core.QSize_ITF,mode:number,state:number):void;
		AddPixmap(pixmap:QPixmap_ITF,mode:number,state:number):void;
		AvailableSizes(mode:number,state:number):core.QSize[];
		CacheKey():number;
		FallbackSearchPaths():string[];
		FallbackThemeName():string;
		FromTheme(name:string):QIcon;
		FromTheme2(name:string,fallback:QIcon_ITF):QIcon;
		HasThemeIcon(name:string):boolean;
		IsMask():boolean;
		IsNull():boolean;
		Name():string;
		Paint(painter:QPainter_ITF,rect:core.QRect_ITF,alignment:number,mode:number,state:number):void;
		Paint2(painter:QPainter_ITF,x:number,y:number,w:number,h:number,alignment:number,mode:number,state:number):void;
		Pixmap(size:core.QSize_ITF,mode:number,state:number):QPixmap;
		Pixmap2(w:number,h:number,mode:number,state:number):QPixmap;
		Pixmap3(extent:number,mode:number,state:number):QPixmap;
		Pixmap4(window:QWindow_ITF,size:core.QSize_ITF,mode:number,state:number):QPixmap;
		SetFallbackSearchPaths(paths:string[]):void;
		SetFallbackThemeName(name:string):void;
		SetIsMask(isMask:boolean):void;
		SetThemeName(name:string):void;
		SetThemeSearchPaths(paths:string[]):void;
		Swap(other:QIcon_ITF):void;
		ThemeName():string;
		ThemeSearchPaths():string[];
		DestroyQIcon():void;
		ToVariant():core.QVariant;
	}
	function NewQIconFromPointer(ptr:number):QIcon;
	function NewQIcon():QIcon;
	function NewQIcon2(pixmap:QPixmap_ITF):QIcon;
	function NewQIcon3(other:QIcon_ITF):QIcon;
	function NewQIcon4(other:QIcon_ITF):QIcon;
	function NewQIcon5(fileName:string):QIcon;
	function NewQIcon6(engine:QIconEngine_ITF):QIcon;
	function QIcon_FallbackSearchPaths():string[];
	function QIcon_FallbackThemeName():string;
	function QIcon_FromTheme(name:string):QIcon;
	function QIcon_FromTheme2(name:string,fallback:QIcon_ITF):QIcon;
	function QIcon_HasThemeIcon(name:string):boolean;
	function QIcon_SetFallbackSearchPaths(paths:string[]):void;
	function QIcon_SetFallbackThemeName(name:string):void;
	function QIcon_SetThemeName(name:string):void;
	function QIcon_SetThemeSearchPaths(paths:string[]):void;
	function QIcon_ThemeName():string;
	function QIcon_ThemeSearchPaths():string[];
	const QIcon__Normal: number;
	const QIcon__Disabled: number;
	const QIcon__Active: number;
	const QIcon__Selected: number;
	const QIcon__On: number;
	const QIcon__Off: number;
	interface QIconDragEvent_ITF extends core.QEvent_ITF {
		QIconDragEvent_PTR():QIconDragEvent;
	}

	class QIconDragEvent extends core.QEvent {
		___pointer: number;
		QIconDragEvent_PTR():QIconDragEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQIconDragEvent():void;
	}
	function NewQIconDragEventFromPointer(ptr:number):QIconDragEvent;
	function NewQIconDragEvent():QIconDragEvent;
	interface QIconEngine_ITF {
		QIconEngine_PTR():QIconEngine;
	}

	class QIconEngine {
		___pointer: number;
		QIconEngine_PTR():QIconEngine;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActualSize(f:(size:core.QSize,mode:number,state:number)=>core.QSize):void;
		DisconnectActualSize():void;
		ActualSize(size:core.QSize_ITF,mode:number,state:number):core.QSize;
		ActualSizeDefault(size:core.QSize_ITF,mode:number,state:number):core.QSize;
		ConnectAddFile(f:(fileName:string,size:core.QSize,mode:number,state:number)=>void):void;
		DisconnectAddFile():void;
		AddFile(fileName:string,size:core.QSize_ITF,mode:number,state:number):void;
		AddFileDefault(fileName:string,size:core.QSize_ITF,mode:number,state:number):void;
		ConnectAddPixmap(f:(pixmap:QPixmap,mode:number,state:number)=>void):void;
		DisconnectAddPixmap():void;
		AddPixmap(pixmap:QPixmap_ITF,mode:number,state:number):void;
		AddPixmapDefault(pixmap:QPixmap_ITF,mode:number,state:number):void;
		ConnectAvailableSizes(f:(mode:number,state:number)=>core.QSize[]):void;
		DisconnectAvailableSizes():void;
		AvailableSizes(mode:number,state:number):core.QSize[];
		AvailableSizesDefault(mode:number,state:number):core.QSize[];
		ConnectClone(f:()=>QIconEngine):void;
		DisconnectClone():void;
		Clone():QIconEngine;
		ConnectIconName(f:()=>string):void;
		DisconnectIconName():void;
		IconName():string;
		IconNameDefault():string;
		IsNull():boolean;
		ConnectKey(f:()=>string):void;
		DisconnectKey():void;
		Key():string;
		KeyDefault():string;
		ConnectPaint(f:(painter:QPainter,rect:core.QRect,mode:number,state:number)=>void):void;
		DisconnectPaint():void;
		Paint(painter:QPainter_ITF,rect:core.QRect_ITF,mode:number,state:number):void;
		ConnectPixmap(f:(size:core.QSize,mode:number,state:number)=>QPixmap):void;
		DisconnectPixmap():void;
		Pixmap(size:core.QSize_ITF,mode:number,state:number):QPixmap;
		PixmapDefault(size:core.QSize_ITF,mode:number,state:number):QPixmap;
		ConnectRead(f:(i:core.QDataStream)=>boolean):void;
		DisconnectRead():void;
		Read(i:core.QDataStream_ITF):boolean;
		ReadDefault(i:core.QDataStream_ITF):boolean;
		ScaledPixmap(size:core.QSize_ITF,mode:number,state:number,scale:number):QPixmap;
		ConnectVirtual_hook(f:(id:number,data:number)=>void):void;
		DisconnectVirtual_hook():void;
		Virtual_hook(id:number,data:number):void;
		Virtual_hookDefault(id:number,data:number):void;
		ConnectWrite(f:(out:core.QDataStream)=>boolean):void;
		DisconnectWrite():void;
		Write(out:core.QDataStream_ITF):boolean;
		WriteDefault(out:core.QDataStream_ITF):boolean;
		ConnectDestroyQIconEngine(f:()=>void):void;
		DisconnectDestroyQIconEngine():void;
		DestroyQIconEngine():void;
		DestroyQIconEngineDefault():void;
	}
	function NewQIconEngineFromPointer(ptr:number):QIconEngine;
	function NewQIconEngine():QIconEngine;
	const QIconEngine__AvailableSizesHook: number;
	const QIconEngine__IconNameHook: number;
	const QIconEngine__IsNullHook: number;
	const QIconEngine__ScaledPixmapHook: number;
	interface QIconEnginePlugin_ITF extends core.QObject_ITF {
		QIconEnginePlugin_PTR():QIconEnginePlugin;
	}

	class QIconEnginePlugin extends core.QObject {
		___pointer: number;
		QIconEnginePlugin_PTR():QIconEnginePlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreate(f:(filename:string)=>QIconEngine):void;
		DisconnectCreate():void;
		Create(filename:string):QIconEngine;
		ConnectDestroyQIconEnginePlugin(f:()=>void):void;
		DisconnectDestroyQIconEnginePlugin():void;
		DestroyQIconEnginePlugin():void;
		DestroyQIconEnginePluginDefault():void;
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
	function NewQIconEnginePluginFromPointer(ptr:number):QIconEnginePlugin;
	function NewQIconEnginePlugin(parent:core.QObject_ITF):QIconEnginePlugin;
	interface QImage_ITF extends QPaintDevice_ITF {
		QImage_PTR():QImage;
	}

	class QImage extends QPaintDevice {
		___pointer: number;
		QImage_PTR():QImage;
		Pointer():number;
		SetPointer(p:number):void;
		AllGray():boolean;
		BitPlaneCount():number;
		Bits():string;
		Bits2():string;
		BytesPerLine():number;
		CacheKey():number;
		Color(i:number):number;
		ColorTable():number[];
		ConstBits():string;
		ConstScanLine(i:number):string;
		ConvertTo(format:number,flags:number):void;
		ConvertToFormat(format:number,flags:number):QImage;
		ConvertToFormat2(format:number,flags:number):QImage;
		ConvertToFormat3(format:number,colorTable:number[],flags:number):QImage;
		Copy(rectangle:core.QRect_ITF):QImage;
		Copy2(x:number,y:number,width:number,height:number):QImage;
		CreateAlphaMask(flags:number):QImage;
		CreateHeuristicMask(clipTight:boolean):QImage;
		CreateMaskFromColor(color:number,mode:number):QImage;
		DevicePixelRatio():number;
		DotsPerMeterX():number;
		DotsPerMeterY():number;
		Fill(pixelValue:number):void;
		Fill2(color:QColor_ITF):void;
		Fill3(color:number):void;
		Format():number;
		FromData(data:string,size:number,format:string):QImage;
		FromData2(data:core.QByteArray_ITF,format:string):QImage;
		HasAlphaChannel():boolean;
		InvertPixels(mode:number):void;
		IsGrayscale():boolean;
		IsNull():boolean;
		Load(fileName:string,format:string):boolean;
		Load2(device:core.QIODevice_ITF,format:string):boolean;
		LoadFromData(data:string,l:number,format:string):boolean;
		LoadFromData2(data:core.QByteArray_ITF,format:string):boolean;
		Mirrored(horizontal:boolean,vertical:boolean):QImage;
		Mirrored2(horizontal:boolean,vertical:boolean):QImage;
		Offset():core.QPoint;
		Pixel(position:core.QPoint_ITF):number;
		Pixel2(x:number,y:number):number;
		PixelColor(position:core.QPoint_ITF):QColor;
		PixelColor2(x:number,y:number):QColor;
		PixelFormat():QPixelFormat;
		PixelIndex(position:core.QPoint_ITF):number;
		PixelIndex2(x:number,y:number):number;
		Rect():core.QRect;
		ReinterpretAsFormat(format:number):boolean;
		RgbSwapped():QImage;
		RgbSwapped2():QImage;
		Save(fileName:string,format:string,quality:number):boolean;
		Save2(device:core.QIODevice_ITF,format:string,quality:number):boolean;
		Scaled(size:core.QSize_ITF,aspectRatioMode:number,transformMode:number):QImage;
		Scaled2(width:number,height:number,aspectRatioMode:number,transformMode:number):QImage;
		ScaledToHeight(height:number,mode:number):QImage;
		ScaledToWidth(width:number,mode:number):QImage;
		ScanLine(i:number):string;
		ScanLine2(i:number):string;
		SetColor(index:number,colorValue:number):void;
		SetColorCount(colorCount:number):void;
		SetColorTable(colors:number[]):void;
		SetDevicePixelRatio(scaleFactor:number):void;
		SetDotsPerMeterX(x:number):void;
		SetDotsPerMeterY(y:number):void;
		SetOffset(offset:core.QPoint_ITF):void;
		SetPixel(position:core.QPoint_ITF,index_or_rgb:number):void;
		SetPixel2(x:number,y:number,index_or_rgb:number):void;
		SetPixelColor(position:core.QPoint_ITF,color:QColor_ITF):void;
		SetPixelColor2(x:number,y:number,color:QColor_ITF):void;
		SetText(key:string,text:string):void;
		Size():core.QSize;
		SmoothScaled(w:number,h:number):QImage;
		Swap(other:QImage_ITF):void;
		Text(key:string):string;
		TextKeys():string[];
		ToImageFormat(format:QPixelFormat_ITF):number;
		ToPixelFormat(format:number):QPixelFormat;
		Transformed(matrix:QMatrix_ITF,mode:number):QImage;
		Transformed2(matrix:QTransform_ITF,mode:number):QImage;
		TrueMatrix(matrix:QMatrix_ITF,width:number,height:number):QMatrix;
		TrueMatrix2(matrix:QTransform_ITF,width:number,height:number):QTransform;
		Valid(pos:core.QPoint_ITF):boolean;
		Valid2(x:number,y:number):boolean;
		ConnectDestroyQImage(f:()=>void):void;
		DisconnectDestroyQImage():void;
		DestroyQImage():void;
		DestroyQImageDefault():void;
		ToVariant():core.QVariant;
		PaintEngine():QPaintEngine;
		PaintEngineDefault():QPaintEngine;
	}
	function NewQImageFromPointer(ptr:number):QImage;
	function NewQImage():QImage;
	function NewQImage2(size:core.QSize_ITF,format:number):QImage;
	function NewQImage3(width:number,height:number,format:number):QImage;
	function NewQImage4(data:string,width:number,height:number,format:number):QImage;
	function NewQImage5(data:string,width:number,height:number,format:number):QImage;
	function NewQImage6(data:string,width:number,height:number,bytesPerLine:number,format:number):QImage;
	function NewQImage7(data:string,width:number,height:number,bytesPerLine:number,format:number):QImage;
	function NewQImage9(fileName:string,format:string):QImage;
	function NewQImage10(image:QImage_ITF):QImage;
	function NewQImage11(other:QImage_ITF):QImage;
	function QImage_FromData(data:string,size:number,format:string):QImage;
	function QImage_FromData2(data:core.QByteArray_ITF,format:string):QImage;
	function QImage_ToImageFormat(format:QPixelFormat_ITF):number;
	function QImage_ToPixelFormat(format:number):QPixelFormat;
	function QImage_TrueMatrix(matrix:QMatrix_ITF,width:number,height:number):QMatrix;
	function QImage_TrueMatrix2(matrix:QTransform_ITF,width:number,height:number):QTransform;
	const QImage__InvertRgb: number;
	const QImage__InvertRgba: number;
	const QImage__Format_Invalid: number;
	const QImage__Format_Mono: number;
	const QImage__Format_MonoLSB: number;
	const QImage__Format_Indexed8: number;
	const QImage__Format_RGB32: number;
	const QImage__Format_ARGB32: number;
	const QImage__Format_ARGB32_Premultiplied: number;
	const QImage__Format_RGB16: number;
	const QImage__Format_ARGB8565_Premultiplied: number;
	const QImage__Format_RGB666: number;
	const QImage__Format_ARGB6666_Premultiplied: number;
	const QImage__Format_RGB555: number;
	const QImage__Format_ARGB8555_Premultiplied: number;
	const QImage__Format_RGB888: number;
	const QImage__Format_RGB444: number;
	const QImage__Format_ARGB4444_Premultiplied: number;
	const QImage__Format_RGBX8888: number;
	const QImage__Format_RGBA8888: number;
	const QImage__Format_RGBA8888_Premultiplied: number;
	const QImage__Format_BGR30: number;
	const QImage__Format_A2BGR30_Premultiplied: number;
	const QImage__Format_RGB30: number;
	const QImage__Format_A2RGB30_Premultiplied: number;
	const QImage__Format_Alpha8: number;
	const QImage__Format_Grayscale8: number;
	const QImage__Format_RGBX64: number;
	const QImage__Format_RGBA64: number;
	const QImage__Format_RGBA64_Premultiplied: number;
	const QImage__Format_Grayscale16: number;
	interface QImageIOHandler_ITF {
		QImageIOHandler_PTR():QImageIOHandler;
	}

	class QImageIOHandler {
		___pointer: number;
		QImageIOHandler_PTR():QImageIOHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCanRead(f:()=>boolean):void;
		DisconnectCanRead():void;
		CanRead():boolean;
		ConnectCurrentImageNumber(f:()=>number):void;
		DisconnectCurrentImageNumber():void;
		CurrentImageNumber():number;
		CurrentImageNumberDefault():number;
		ConnectCurrentImageRect(f:()=>core.QRect):void;
		DisconnectCurrentImageRect():void;
		CurrentImageRect():core.QRect;
		CurrentImageRectDefault():core.QRect;
		Device():core.QIODevice;
		Format():core.QByteArray;
		ConnectImageCount(f:()=>number):void;
		DisconnectImageCount():void;
		ImageCount():number;
		ImageCountDefault():number;
		ConnectJumpToImage(f:(imageNumber:number)=>boolean):void;
		DisconnectJumpToImage():void;
		JumpToImage(imageNumber:number):boolean;
		JumpToImageDefault(imageNumber:number):boolean;
		ConnectJumpToNextImage(f:()=>boolean):void;
		DisconnectJumpToNextImage():void;
		JumpToNextImage():boolean;
		JumpToNextImageDefault():boolean;
		ConnectLoopCount(f:()=>number):void;
		DisconnectLoopCount():void;
		LoopCount():number;
		LoopCountDefault():number;
		ConnectNextImageDelay(f:()=>number):void;
		DisconnectNextImageDelay():void;
		NextImageDelay():number;
		NextImageDelayDefault():number;
		ConnectOption(f:(option:number)=>core.QVariant):void;
		DisconnectOption():void;
		Option(option:number):core.QVariant;
		OptionDefault(option:number):core.QVariant;
		ConnectRead(f:(image:QImage)=>boolean):void;
		DisconnectRead():void;
		Read(image:QImage_ITF):boolean;
		SetDevice(device:core.QIODevice_ITF):void;
		SetFormat(format:core.QByteArray_ITF):void;
		SetFormat2(format:core.QByteArray_ITF):void;
		ConnectSetOption(f:(option:number,value:core.QVariant)=>void):void;
		DisconnectSetOption():void;
		SetOption(option:number,value:core.QVariant_ITF):void;
		SetOptionDefault(option:number,value:core.QVariant_ITF):void;
		ConnectSupportsOption(f:(option:number)=>boolean):void;
		DisconnectSupportsOption():void;
		SupportsOption(option:number):boolean;
		SupportsOptionDefault(option:number):boolean;
		ConnectWrite(f:(image:QImage)=>boolean):void;
		DisconnectWrite():void;
		Write(image:QImage_ITF):boolean;
		WriteDefault(image:QImage_ITF):boolean;
		ConnectDestroyQImageIOHandler(f:()=>void):void;
		DisconnectDestroyQImageIOHandler():void;
		DestroyQImageIOHandler():void;
		DestroyQImageIOHandlerDefault():void;
	}
	function NewQImageIOHandlerFromPointer(ptr:number):QImageIOHandler;
	function NewQImageIOHandler():QImageIOHandler;
	const QImageIOHandler__Size: number;
	const QImageIOHandler__ClipRect: number;
	const QImageIOHandler__Description: number;
	const QImageIOHandler__ScaledClipRect: number;
	const QImageIOHandler__ScaledSize: number;
	const QImageIOHandler__CompressionRatio: number;
	const QImageIOHandler__Gamma: number;
	const QImageIOHandler__Quality: number;
	const QImageIOHandler__Name: number;
	const QImageIOHandler__SubType: number;
	const QImageIOHandler__IncrementalReading: number;
	const QImageIOHandler__Endianness: number;
	const QImageIOHandler__Animation: number;
	const QImageIOHandler__BackgroundColor: number;
	const QImageIOHandler__ImageFormat: number;
	const QImageIOHandler__SupportedSubTypes: number;
	const QImageIOHandler__OptimizedWrite: number;
	const QImageIOHandler__ProgressiveScanWrite: number;
	const QImageIOHandler__ImageTransformation: number;
	const QImageIOHandler__TransformedByDefault: number;
	const QImageIOHandler__TransformationNone: number;
	const QImageIOHandler__TransformationMirror: number;
	const QImageIOHandler__TransformationFlip: number;
	const QImageIOHandler__TransformationRotate180: number;
	const QImageIOHandler__TransformationRotate90: number;
	const QImageIOHandler__TransformationMirrorAndRotate90: number;
	const QImageIOHandler__TransformationFlipAndRotate90: number;
	const QImageIOHandler__TransformationRotate270: number;
	interface QImageIOPlugin_ITF extends core.QObject_ITF {
		QImageIOPlugin_PTR():QImageIOPlugin;
	}

	class QImageIOPlugin extends core.QObject {
		___pointer: number;
		QImageIOPlugin_PTR():QImageIOPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCapabilities(f:(device:core.QIODevice,format:core.QByteArray)=>number):void;
		DisconnectCapabilities():void;
		Capabilities(device:core.QIODevice_ITF,format:core.QByteArray_ITF):number;
		ConnectCreate(f:(device:core.QIODevice,format:core.QByteArray)=>QImageIOHandler):void;
		DisconnectCreate():void;
		Create(device:core.QIODevice_ITF,format:core.QByteArray_ITF):QImageIOHandler;
		ConnectDestroyQImageIOPlugin(f:()=>void):void;
		DisconnectDestroyQImageIOPlugin():void;
		DestroyQImageIOPlugin():void;
		DestroyQImageIOPluginDefault():void;
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
	function NewQImageIOPluginFromPointer(ptr:number):QImageIOPlugin;
	function NewQImageIOPlugin(parent:core.QObject_ITF):QImageIOPlugin;
	const QImageIOPlugin__CanRead: number;
	const QImageIOPlugin__CanWrite: number;
	const QImageIOPlugin__CanReadIncremental: number;
	interface QImageReader_ITF {
		QImageReader_PTR():QImageReader;
	}

	class QImageReader {
		___pointer: number;
		QImageReader_PTR():QImageReader;
		Pointer():number;
		SetPointer(p:number):void;
		AutoDetectImageFormat():boolean;
		AutoTransform():boolean;
		BackgroundColor():QColor;
		CanRead():boolean;
		ClipRect():core.QRect;
		CurrentImageNumber():number;
		CurrentImageRect():core.QRect;
		DecideFormatFromContent():boolean;
		Device():core.QIODevice;
		Error():number;
		ErrorString():string;
		FileName():string;
		Format():core.QByteArray;
		Gamma():number;
		ImageCount():number;
		ImageFormat():number;
		ImageFormat2(fileName:string):core.QByteArray;
		ImageFormat3(device:core.QIODevice_ITF):core.QByteArray;
		ImageFormatsForMimeType(mimeType:core.QByteArray_ITF):core.QByteArray[];
		JumpToImage(imageNumber:number):boolean;
		JumpToNextImage():boolean;
		LoopCount():number;
		NextImageDelay():number;
		Quality():number;
		Read():QImage;
		Read2(image:QImage_ITF):boolean;
		ScaledClipRect():core.QRect;
		ScaledSize():core.QSize;
		SetAutoDetectImageFormat(enabled:boolean):void;
		SetAutoTransform(enabled:boolean):void;
		SetBackgroundColor(color:QColor_ITF):void;
		SetClipRect(rect:core.QRect_ITF):void;
		SetDecideFormatFromContent(ignored:boolean):void;
		SetDevice(device:core.QIODevice_ITF):void;
		SetFileName(fileName:string):void;
		SetFormat(format:core.QByteArray_ITF):void;
		SetGamma(gamma:number):void;
		SetQuality(quality:number):void;
		SetScaledClipRect(rect:core.QRect_ITF):void;
		SetScaledSize(size:core.QSize_ITF):void;
		Size():core.QSize;
		SubType():core.QByteArray;
		SupportedImageFormats():core.QByteArray[];
		SupportedMimeTypes():core.QByteArray[];
		SupportedSubTypes():core.QByteArray[];
		SupportsAnimation():boolean;
		SupportsOption(option:number):boolean;
		Text(key:string):string;
		TextKeys():string[];
		Transformation():number;
		DestroyQImageReader():void;
	}
	function NewQImageReaderFromPointer(ptr:number):QImageReader;
	function NewQImageReader():QImageReader;
	function NewQImageReader2(device:core.QIODevice_ITF,format:core.QByteArray_ITF):QImageReader;
	function NewQImageReader3(fileName:string,format:core.QByteArray_ITF):QImageReader;
	function QImageReader_ImageFormat2(fileName:string):core.QByteArray;
	function QImageReader_ImageFormat3(device:core.QIODevice_ITF):core.QByteArray;
	function QImageReader_ImageFormatsForMimeType(mimeType:core.QByteArray_ITF):core.QByteArray[];
	function QImageReader_SupportedImageFormats():core.QByteArray[];
	function QImageReader_SupportedMimeTypes():core.QByteArray[];
	const QImageReader__UnknownError: number;
	const QImageReader__FileNotFoundError: number;
	const QImageReader__DeviceError: number;
	const QImageReader__UnsupportedFormatError: number;
	const QImageReader__InvalidDataError: number;
	interface QImageTextKeyLang_ITF {
		QImageTextKeyLang_PTR():QImageTextKeyLang;
	}

	class QImageTextKeyLang {
		___pointer: number;
		QImageTextKeyLang_PTR():QImageTextKeyLang;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQImageTextKeyLang():void;
	}
	function NewQImageTextKeyLangFromPointer(ptr:number):QImageTextKeyLang;
	interface QImageWriter_ITF {
		QImageWriter_PTR():QImageWriter;
	}

	class QImageWriter {
		___pointer: number;
		QImageWriter_PTR():QImageWriter;
		Pointer():number;
		SetPointer(p:number):void;
		CanWrite():boolean;
		Compression():number;
		Device():core.QIODevice;
		Error():number;
		ErrorString():string;
		FileName():string;
		Format():core.QByteArray;
		Gamma():number;
		ImageFormatsForMimeType(mimeType:core.QByteArray_ITF):core.QByteArray[];
		OptimizedWrite():boolean;
		ProgressiveScanWrite():boolean;
		Quality():number;
		SetCompression(compression:number):void;
		SetDevice(device:core.QIODevice_ITF):void;
		SetFileName(fileName:string):void;
		SetFormat(format:core.QByteArray_ITF):void;
		SetGamma(gamma:number):void;
		SetOptimizedWrite(optimize:boolean):void;
		SetProgressiveScanWrite(progressive:boolean):void;
		SetQuality(quality:number):void;
		SetSubType(ty:core.QByteArray_ITF):void;
		SetText(key:string,text:string):void;
		SetTransformation(transform:number):void;
		SubType():core.QByteArray;
		SupportedImageFormats():core.QByteArray[];
		SupportedMimeTypes():core.QByteArray[];
		SupportedSubTypes():core.QByteArray[];
		SupportsOption(option:number):boolean;
		Transformation():number;
		Write(image:QImage_ITF):boolean;
		DestroyQImageWriter():void;
	}
	function NewQImageWriterFromPointer(ptr:number):QImageWriter;
	function NewQImageWriter():QImageWriter;
	function NewQImageWriter2(device:core.QIODevice_ITF,format:core.QByteArray_ITF):QImageWriter;
	function NewQImageWriter3(fileName:string,format:core.QByteArray_ITF):QImageWriter;
	function QImageWriter_ImageFormatsForMimeType(mimeType:core.QByteArray_ITF):core.QByteArray[];
	function QImageWriter_SupportedImageFormats():core.QByteArray[];
	function QImageWriter_SupportedMimeTypes():core.QByteArray[];
	const QImageWriter__UnknownError: number;
	const QImageWriter__DeviceError: number;
	const QImageWriter__UnsupportedFormatError: number;
	const QImageWriter__InvalidImageError: number;
	interface QInputEvent_ITF extends core.QEvent_ITF {
		QInputEvent_PTR():QInputEvent;
	}

	class QInputEvent extends core.QEvent {
		___pointer: number;
		QInputEvent_PTR():QInputEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQInputEvent():void;
		Modifiers():number;
		Timestamp():number;
	}
	function NewQInputEventFromPointer(ptr:number):QInputEvent;
	interface QInputMethod_ITF extends core.QObject_ITF {
		QInputMethod_PTR():QInputMethod;
	}

	class QInputMethod extends core.QObject {
		___pointer: number;
		QInputMethod_PTR():QInputMethod;
		Pointer():number;
		SetPointer(p:number):void;
		AnchorRectangle():core.QRectF;
		ConnectAnchorRectangleChanged(f:()=>void):void;
		DisconnectAnchorRectangleChanged():void;
		AnchorRectangleChanged():void;
		ConnectAnimatingChanged(f:()=>void):void;
		DisconnectAnimatingChanged():void;
		AnimatingChanged():void;
		ConnectCommit(f:()=>void):void;
		DisconnectCommit():void;
		Commit():void;
		CommitDefault():void;
		CursorRectangle():core.QRectF;
		ConnectCursorRectangleChanged(f:()=>void):void;
		DisconnectCursorRectangleChanged():void;
		CursorRectangleChanged():void;
		ConnectHide(f:()=>void):void;
		DisconnectHide():void;
		Hide():void;
		HideDefault():void;
		InputDirection():number;
		ConnectInputDirectionChanged(f:(newDirection:number)=>void):void;
		DisconnectInputDirectionChanged():void;
		InputDirectionChanged(newDirection:number):void;
		InputItemClipRectangle():core.QRectF;
		ConnectInputItemClipRectangleChanged(f:()=>void):void;
		DisconnectInputItemClipRectangleChanged():void;
		InputItemClipRectangleChanged():void;
		InputItemRectangle():core.QRectF;
		InputItemTransform():QTransform;
		ConnectInvokeAction(f:(a:number,cursorPosition:number)=>void):void;
		DisconnectInvokeAction():void;
		InvokeAction(a:number,cursorPosition:number):void;
		InvokeActionDefault(a:number,cursorPosition:number):void;
		IsAnimating():boolean;
		IsVisible():boolean;
		KeyboardRectangle():core.QRectF;
		ConnectKeyboardRectangleChanged(f:()=>void):void;
		DisconnectKeyboardRectangleChanged():void;
		KeyboardRectangleChanged():void;
		Locale():core.QLocale;
		ConnectLocaleChanged(f:()=>void):void;
		DisconnectLocaleChanged():void;
		LocaleChanged():void;
		QueryFocusObject(query:number,argument:core.QVariant_ITF):core.QVariant;
		ConnectReset(f:()=>void):void;
		DisconnectReset():void;
		Reset():void;
		ResetDefault():void;
		SetInputItemRectangle(rect:core.QRectF_ITF):void;
		SetInputItemTransform(transform:QTransform_ITF):void;
		SetVisible(visible:boolean):void;
		ConnectShow(f:()=>void):void;
		DisconnectShow():void;
		Show():void;
		ShowDefault():void;
		ConnectUpdate(f:(queries:number)=>void):void;
		DisconnectUpdate():void;
		Update(queries:number):void;
		UpdateDefault(queries:number):void;
		ConnectVisibleChanged(f:()=>void):void;
		DisconnectVisibleChanged():void;
		VisibleChanged():void;
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
	function NewQInputMethodFromPointer(ptr:number):QInputMethod;
	function QInputMethod_QueryFocusObject(query:number,argument:core.QVariant_ITF):core.QVariant;
	const QInputMethod__Click: number;
	const QInputMethod__ContextMenu: number;
	interface QInputMethodEvent_ITF extends core.QEvent_ITF {
		QInputMethodEvent_PTR():QInputMethodEvent;
	}

	class QInputMethodEvent extends core.QEvent {
		___pointer: number;
		QInputMethodEvent_PTR():QInputMethodEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQInputMethodEvent():void;
		CommitString():string;
		PreeditString():string;
		ReplacementLength():number;
		ReplacementStart():number;
		SetCommitString(commitString:string,replaceFrom:number,replaceLength:number):void;
	}
	function NewQInputMethodEventFromPointer(ptr:number):QInputMethodEvent;
	function NewQInputMethodEvent():QInputMethodEvent;
	function NewQInputMethodEvent3(other:QInputMethodEvent_ITF):QInputMethodEvent;
	const QInputMethodEvent__TextFormat: number;
	const QInputMethodEvent__Cursor: number;
	const QInputMethodEvent__Language: number;
	const QInputMethodEvent__Ruby: number;
	const QInputMethodEvent__Selection: number;
	interface QInputMethodQueryEvent_ITF extends core.QEvent_ITF {
		QInputMethodQueryEvent_PTR():QInputMethodQueryEvent;
	}

	class QInputMethodQueryEvent extends core.QEvent {
		___pointer: number;
		QInputMethodQueryEvent_PTR():QInputMethodQueryEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQInputMethodQueryEvent():void;
		Queries():number;
		SetValue(query:number,value:core.QVariant_ITF):void;
		Value(query:number):core.QVariant;
	}
	function NewQInputMethodQueryEventFromPointer(ptr:number):QInputMethodQueryEvent;
	function NewQInputMethodQueryEvent(queries:number):QInputMethodQueryEvent;
	interface QIntValidator_ITF extends QValidator_ITF {
		QIntValidator_PTR():QIntValidator;
	}

	class QIntValidator extends QValidator {
		___pointer: number;
		QIntValidator_PTR():QIntValidator;
		Pointer():number;
		SetPointer(p:number):void;
		Bottom():number;
		ConnectBottomChanged(f:(bottom:number)=>void):void;
		DisconnectBottomChanged():void;
		BottomChanged(bottom:number):void;
		SetBottom(vi:number):void;
		ConnectSetRange(f:(bottom:number,top:number)=>void):void;
		DisconnectSetRange():void;
		SetRange(bottom:number,top:number):void;
		SetRangeDefault(bottom:number,top:number):void;
		SetTop(vi:number):void;
		Top():number;
		ConnectTopChanged(f:(top:number)=>void):void;
		DisconnectTopChanged():void;
		TopChanged(top:number):void;
		ConnectValidate(f:(input:string,pos:number)=>number):void;
		DisconnectValidate():void;
		Validate(input:string,pos:number):number;
		ValidateDefault(input:string,pos:number):number;
		ConnectDestroyQIntValidator(f:()=>void):void;
		DisconnectDestroyQIntValidator():void;
		DestroyQIntValidator():void;
		DestroyQIntValidatorDefault():void;
	}
	function NewQIntValidatorFromPointer(ptr:number):QIntValidator;
	function NewQIntValidator(parent:core.QObject_ITF):QIntValidator;
	function NewQIntValidator2(minimum:number,maximum:number,parent:core.QObject_ITF):QIntValidator;
	interface QKeyEvent_ITF extends QInputEvent_ITF {
		QKeyEvent_PTR():QKeyEvent;
	}

	class QKeyEvent extends QInputEvent {
		___pointer: number;
		QKeyEvent_PTR():QKeyEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQKeyEvent():void;
		Count():number;
		IsAutoRepeat():boolean;
		Key():number;
		Matches(key:number):boolean;
		NativeModifiers():number;
		NativeScanCode():number;
		NativeVirtualKey():number;
		Text():string;
	}
	function NewQKeyEventFromPointer(ptr:number):QKeyEvent;
	function NewQKeyEvent(ty:number,key:number,modifiers:number,text:string,autorep:boolean,count:number):QKeyEvent;
	function NewQKeyEvent2(ty:number,key:number,modifiers:number,nativeScanCode:number,nativeVirtualKey:number,nativeModifiers:number,text:string,autorep:boolean,count:number):QKeyEvent;
	interface QKeySequence_ITF {
		QKeySequence_PTR():QKeySequence;
	}

	class QKeySequence {
		___pointer: number;
		QKeySequence_PTR():QKeySequence;
		Pointer():number;
		SetPointer(p:number):void;
		Count():number;
		FromString(str:string,format:number):QKeySequence;
		IsEmpty():boolean;
		KeyBindings(key:number):QKeySequence[];
		ListFromString(str:string,format:number):QKeySequence[];
		ListToString(list:QKeySequence[],format:number):string;
		Matches(seq:QKeySequence_ITF):number;
		Mnemonic(text:string):QKeySequence;
		Swap(other:QKeySequence_ITF):void;
		ToString(format:number):string;
		DestroyQKeySequence():void;
	}
	function NewQKeySequenceFromPointer(ptr:number):QKeySequence;
	function NewQKeySequence():QKeySequence;
	function NewQKeySequence2(key:string,format:number):QKeySequence;
	function NewQKeySequence3(k1:number,k2:number,k3:number,k4:number):QKeySequence;
	function NewQKeySequence4(keysequence:QKeySequence_ITF):QKeySequence;
	function NewQKeySequence5(key:number):QKeySequence;
	function QKeySequence_FromString(str:string,format:number):QKeySequence;
	function QKeySequence_KeyBindings(key:number):QKeySequence[];
	function QKeySequence_ListFromString(str:string,format:number):QKeySequence[];
	function QKeySequence_ListToString(list:QKeySequence[],format:number):string;
	function QKeySequence_Mnemonic(text:string):QKeySequence;
	const QKeySequence__UnknownKey: number;
	const QKeySequence__HelpContents: number;
	const QKeySequence__WhatsThis: number;
	const QKeySequence__Open: number;
	const QKeySequence__Close: number;
	const QKeySequence__Save: number;
	const QKeySequence__New: number;
	const QKeySequence__Delete: number;
	const QKeySequence__Cut: number;
	const QKeySequence__Copy: number;
	const QKeySequence__Paste: number;
	const QKeySequence__Undo: number;
	const QKeySequence__Redo: number;
	const QKeySequence__Back: number;
	const QKeySequence__Forward: number;
	const QKeySequence__Refresh: number;
	const QKeySequence__ZoomIn: number;
	const QKeySequence__ZoomOut: number;
	const QKeySequence__Print: number;
	const QKeySequence__AddTab: number;
	const QKeySequence__NextChild: number;
	const QKeySequence__PreviousChild: number;
	const QKeySequence__Find: number;
	const QKeySequence__FindNext: number;
	const QKeySequence__FindPrevious: number;
	const QKeySequence__Replace: number;
	const QKeySequence__SelectAll: number;
	const QKeySequence__Bold: number;
	const QKeySequence__Italic: number;
	const QKeySequence__Underline: number;
	const QKeySequence__MoveToNextChar: number;
	const QKeySequence__MoveToPreviousChar: number;
	const QKeySequence__MoveToNextWord: number;
	const QKeySequence__MoveToPreviousWord: number;
	const QKeySequence__MoveToNextLine: number;
	const QKeySequence__MoveToPreviousLine: number;
	const QKeySequence__MoveToNextPage: number;
	const QKeySequence__MoveToPreviousPage: number;
	const QKeySequence__MoveToStartOfLine: number;
	const QKeySequence__MoveToEndOfLine: number;
	const QKeySequence__MoveToStartOfBlock: number;
	const QKeySequence__MoveToEndOfBlock: number;
	const QKeySequence__MoveToStartOfDocument: number;
	const QKeySequence__MoveToEndOfDocument: number;
	const QKeySequence__SelectNextChar: number;
	const QKeySequence__SelectPreviousChar: number;
	const QKeySequence__SelectNextWord: number;
	const QKeySequence__SelectPreviousWord: number;
	const QKeySequence__SelectNextLine: number;
	const QKeySequence__SelectPreviousLine: number;
	const QKeySequence__SelectNextPage: number;
	const QKeySequence__SelectPreviousPage: number;
	const QKeySequence__SelectStartOfLine: number;
	const QKeySequence__SelectEndOfLine: number;
	const QKeySequence__SelectStartOfBlock: number;
	const QKeySequence__SelectEndOfBlock: number;
	const QKeySequence__SelectStartOfDocument: number;
	const QKeySequence__SelectEndOfDocument: number;
	const QKeySequence__DeleteStartOfWord: number;
	const QKeySequence__DeleteEndOfWord: number;
	const QKeySequence__DeleteEndOfLine: number;
	const QKeySequence__InsertParagraphSeparator: number;
	const QKeySequence__InsertLineSeparator: number;
	const QKeySequence__SaveAs: number;
	const QKeySequence__Preferences: number;
	const QKeySequence__Quit: number;
	const QKeySequence__FullScreen: number;
	const QKeySequence__Deselect: number;
	const QKeySequence__DeleteCompleteLine: number;
	const QKeySequence__Backspace: number;
	const QKeySequence__Cancel: number;
	const QKeySequence__NativeText: number;
	const QKeySequence__PortableText: number;
	const QKeySequence__NoMatch: number;
	const QKeySequence__PartialMatch: number;
	const QKeySequence__ExactMatch: number;
	interface QLinearGradient_ITF extends QGradient_ITF {
		QLinearGradient_PTR():QLinearGradient;
	}

	class QLinearGradient extends QGradient {
		___pointer: number;
		QLinearGradient_PTR():QLinearGradient;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLinearGradient():void;
		FinalStop():core.QPointF;
		SetFinalStop(stop:core.QPointF_ITF):void;
		SetFinalStop2(x:number,y:number):void;
		SetStart(start:core.QPointF_ITF):void;
		SetStart2(x:number,y:number):void;
		Start():core.QPointF;
	}
	function NewQLinearGradientFromPointer(ptr:number):QLinearGradient;
	function NewQLinearGradient():QLinearGradient;
	function NewQLinearGradient2(start:core.QPointF_ITF,finalStop:core.QPointF_ITF):QLinearGradient;
	function NewQLinearGradient3(x1:number,y1:number,x2:number,y2:number):QLinearGradient;
	interface QMatrix_ITF {
		QMatrix_PTR():QMatrix;
	}

	class QMatrix {
		___pointer: number;
		QMatrix_PTR():QMatrix;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMatrix():void;
		Determinant():number;
		Dx():number;
		Dy():number;
		Inverted(invertible:boolean):QMatrix;
		IsIdentity():boolean;
		IsInvertible():boolean;
		M11():number;
		M12():number;
		M21():number;
		M22():number;
		Map(x:number,y:number,tx:number,ty:number):void;
		Map2(x:number,y:number,tx:number,ty:number):void;
		Map3(point:core.QPoint_ITF):core.QPoint;
		Map4(point:core.QPointF_ITF):core.QPointF;
		Map5(line:core.QLine_ITF):core.QLine;
		Map6(line:core.QLineF_ITF):core.QLineF;
		Map7(polygon:QPolygonF_ITF):QPolygonF;
		Map8(polygon:QPolygon_ITF):QPolygon;
		Map9(region:QRegion_ITF):QRegion;
		Map10(path:QPainterPath_ITF):QPainterPath;
		MapRect(rectangle:core.QRectF_ITF):core.QRectF;
		MapRect2(rectangle:core.QRect_ITF):core.QRect;
		MapToPolygon(rectangle:core.QRect_ITF):QPolygon;
		Reset():void;
		Rotate(degrees:number):QMatrix;
		Scale(sx:number,sy:number):QMatrix;
		SetMatrix(m11:number,m12:number,m21:number,m22:number,dx:number,dy:number):void;
		Shear(sh:number,sv:number):QMatrix;
		Translate(dx:number,dy:number):QMatrix;
	}
	function NewQMatrixFromPointer(ptr:number):QMatrix;
	function NewQMatrix2():QMatrix;
	function NewQMatrix3(m11:number,m12:number,m21:number,m22:number,dx:number,dy:number):QMatrix;
	function NewQMatrix5(matrix:QMatrix_ITF):QMatrix;
	interface QMatrix4x4_ITF {
		QMatrix4x4_PTR():QMatrix4x4;
	}

	class QMatrix4x4 {
		___pointer: number;
		QMatrix4x4_PTR():QMatrix4x4;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMatrix4x4():void;
		Column(index:number):QVector4D;
		ConstData():number;
		CopyDataTo(values:number):void;
		Data():number;
		Data2():number;
		Determinant():number;
		Fill(value:number):void;
		Frustum(left:number,right:number,bottom:number,top:number,nearPlane:number,farPlane:number):void;
		Inverted(invertible:boolean):QMatrix4x4;
		IsAffine():boolean;
		IsIdentity():boolean;
		LookAt(eye:QVector3D_ITF,center:QVector3D_ITF,up:QVector3D_ITF):void;
		Map(point:core.QPoint_ITF):core.QPoint;
		Map2(point:core.QPointF_ITF):core.QPointF;
		Map3(point:QVector3D_ITF):QVector3D;
		Map4(point:QVector4D_ITF):QVector4D;
		MapRect(rect:core.QRect_ITF):core.QRect;
		MapRect2(rect:core.QRectF_ITF):core.QRectF;
		MapVector(vector:QVector3D_ITF):QVector3D;
		Optimize():void;
		Ortho(left:number,right:number,bottom:number,top:number,nearPlane:number,farPlane:number):void;
		Ortho2(rect:core.QRect_ITF):void;
		Ortho3(rect:core.QRectF_ITF):void;
		Perspective(verticalAngle:number,aspectRatio:number,nearPlane:number,farPlane:number):void;
		Rotate(angle:number,vector:QVector3D_ITF):void;
		Rotate2(angle:number,x:number,y:number,z:number):void;
		Rotate3(quaternion:QQuaternion_ITF):void;
		Row(index:number):QVector4D;
		Scale(vector:QVector3D_ITF):void;
		Scale2(x:number,y:number):void;
		Scale3(x:number,y:number,z:number):void;
		Scale4(factor:number):void;
		SetColumn(index:number,value:QVector4D_ITF):void;
		SetRow(index:number,value:QVector4D_ITF):void;
		SetToIdentity():void;
		ToAffine():QMatrix;
		ToTransform():QTransform;
		ToTransform2(distanceToPlane:number):QTransform;
		Translate(vector:QVector3D_ITF):void;
		Translate2(x:number,y:number):void;
		Translate3(x:number,y:number,z:number):void;
		Transposed():QMatrix4x4;
		Viewport(left:number,bottom:number,width:number,height:number,nearPlane:number,farPlane:number):void;
		Viewport2(rect:core.QRectF_ITF):void;
	}
	function NewQMatrix4x4FromPointer(ptr:number):QMatrix4x4;
	function NewQMatrix4x4():QMatrix4x4;
	function NewQMatrix4x43(values:number):QMatrix4x4;
	function NewQMatrix4x44(m11:number,m12:number,m13:number,m14:number,m21:number,m22:number,m23:number,m24:number,m31:number,m32:number,m33:number,m34:number,m41:number,m42:number,m43:number,m44:number):QMatrix4x4;
	function NewQMatrix4x46(matrix:QMatrix_ITF):QMatrix4x4;
	interface QMessageDialogOptions_ITF {
		QMessageDialogOptions_PTR():QMessageDialogOptions;
	}

	class QMessageDialogOptions {
		___pointer: number;
		QMessageDialogOptions_PTR():QMessageDialogOptions;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMessageDialogOptions():void;
	}
	interface QMouseEvent_ITF extends QInputEvent_ITF {
		QMouseEvent_PTR():QMouseEvent;
	}

	class QMouseEvent extends QInputEvent {
		___pointer: number;
		QMouseEvent_PTR():QMouseEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMouseEvent():void;
		Button():number;
		Buttons():number;
		Flags():number;
		GlobalPos():core.QPoint;
		GlobalX():number;
		GlobalY():number;
		LocalPos():core.QPointF;
		Pos():core.QPoint;
		ScreenPos():core.QPointF;
		Source():number;
		WindowPos():core.QPointF;
		X():number;
		Y():number;
	}
	function NewQMouseEventFromPointer(ptr:number):QMouseEvent;
	function NewQMouseEvent(ty:number,localPos:core.QPointF_ITF,button:number,buttons:number,modifiers:number):QMouseEvent;
	function NewQMouseEvent2(ty:number,localPos:core.QPointF_ITF,screenPos:core.QPointF_ITF,button:number,buttons:number,modifiers:number):QMouseEvent;
	function NewQMouseEvent3(ty:number,localPos:core.QPointF_ITF,windowPos:core.QPointF_ITF,screenPos:core.QPointF_ITF,button:number,buttons:number,modifiers:number):QMouseEvent;
	function NewQMouseEvent4(ty:number,localPos:core.QPointF_ITF,windowPos:core.QPointF_ITF,screenPos:core.QPointF_ITF,button:number,buttons:number,modifiers:number,source:number):QMouseEvent;
	interface QMoveEvent_ITF extends core.QEvent_ITF {
		QMoveEvent_PTR():QMoveEvent;
	}

	class QMoveEvent extends core.QEvent {
		___pointer: number;
		QMoveEvent_PTR():QMoveEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMoveEvent():void;
		OldPos():core.QPoint;
		Pos():core.QPoint;
	}
	function NewQMoveEventFromPointer(ptr:number):QMoveEvent;
	function NewQMoveEvent(pos:core.QPoint_ITF,oldPos:core.QPoint_ITF):QMoveEvent;
	interface QMovie_ITF extends core.QObject_ITF {
		QMovie_PTR():QMovie;
	}

	class QMovie extends core.QObject {
		___pointer: number;
		QMovie_PTR():QMovie;
		Pointer():number;
		SetPointer(p:number):void;
		BackgroundColor():QColor;
		CacheMode():number;
		CurrentFrameNumber():number;
		CurrentImage():QImage;
		CurrentPixmap():QPixmap;
		Device():core.QIODevice;
		ConnectError(f:(error:number)=>void):void;
		DisconnectError():void;
		Error(error:number):void;
		FileName():string;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		Format():core.QByteArray;
		ConnectFrameChanged(f:(frameNumber:number)=>void):void;
		DisconnectFrameChanged():void;
		FrameChanged(frameNumber:number):void;
		FrameCount():number;
		FrameRect():core.QRect;
		IsValid():boolean;
		JumpToFrame(frameNumber:number):boolean;
		ConnectJumpToNextFrame(f:()=>boolean):void;
		DisconnectJumpToNextFrame():void;
		JumpToNextFrame():boolean;
		JumpToNextFrameDefault():boolean;
		LastError():number;
		LastErrorString():string;
		LoopCount():number;
		NextFrameDelay():number;
		ConnectResized(f:(size:core.QSize)=>void):void;
		DisconnectResized():void;
		Resized(size:core.QSize_ITF):void;
		ScaledSize():core.QSize;
		SetBackgroundColor(color:QColor_ITF):void;
		SetCacheMode(mode:number):void;
		SetDevice(device:core.QIODevice_ITF):void;
		SetFileName(fileName:string):void;
		SetFormat(format:core.QByteArray_ITF):void;
		ConnectSetPaused(f:(paused:boolean)=>void):void;
		DisconnectSetPaused():void;
		SetPaused(paused:boolean):void;
		SetPausedDefault(paused:boolean):void;
		SetScaledSize(size:core.QSize_ITF):void;
		ConnectSetSpeed(f:(percentSpeed:number)=>void):void;
		DisconnectSetSpeed():void;
		SetSpeed(percentSpeed:number):void;
		SetSpeedDefault(percentSpeed:number):void;
		Speed():number;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		StartDefault():void;
		ConnectStarted(f:()=>void):void;
		DisconnectStarted():void;
		Started():void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		SupportedFormats():core.QByteArray[];
		ConnectUpdated(f:(rect:core.QRect)=>void):void;
		DisconnectUpdated():void;
		Updated(rect:core.QRect_ITF):void;
		ConnectDestroyQMovie(f:()=>void):void;
		DisconnectDestroyQMovie():void;
		DestroyQMovie():void;
		DestroyQMovieDefault():void;
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
	function NewQMovieFromPointer(ptr:number):QMovie;
	function NewQMovie(parent:core.QObject_ITF):QMovie;
	function NewQMovie2(device:core.QIODevice_ITF,format:core.QByteArray_ITF,parent:core.QObject_ITF):QMovie;
	function NewQMovie3(fileName:string,format:core.QByteArray_ITF,parent:core.QObject_ITF):QMovie;
	function QMovie_SupportedFormats():core.QByteArray[];
	const QMovie__NotRunning: number;
	const QMovie__Paused: number;
	const QMovie__Running: number;
	const QMovie__CacheNone: number;
	const QMovie__CacheAll: number;
	interface QNativeGestureEvent_ITF extends QInputEvent_ITF {
		QNativeGestureEvent_PTR():QNativeGestureEvent;
	}

	class QNativeGestureEvent extends QInputEvent {
		___pointer: number;
		QNativeGestureEvent_PTR():QNativeGestureEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQNativeGestureEvent():void;
		Device():QTouchDevice;
		GestureType():number;
		GlobalPos():core.QPoint;
		LocalPos():core.QPointF;
		Pos():core.QPoint;
		ScreenPos():core.QPointF;
		Value():number;
		WindowPos():core.QPointF;
	}
	function NewQNativeGestureEventFromPointer(ptr:number):QNativeGestureEvent;
	function NewQNativeGestureEvent2(ty:number,device:QTouchDevice_ITF,localPos:core.QPointF_ITF,windowPos:core.QPointF_ITF,screenPos:core.QPointF_ITF,realValue:number,sequenceId:number,intValue:number):QNativeGestureEvent;
	interface QOffscreenSurface_ITF extends QSurface_ITF {
		QOffscreenSurface_PTR():QOffscreenSurface;
		QObject_PTR():core.QObject;
	}

	class QOffscreenSurface extends QSurface {
		QObject_PTR():core.QObject
		___pointer: number;
		QOffscreenSurface_PTR():QOffscreenSurface;
		Pointer():number;
		SetPointer(p:number):void;
		Create():void;
		Destroy():void;
		ConnectFormat(f:()=>QSurfaceFormat):void;
		DisconnectFormat():void;
		Format():QSurfaceFormat;
		FormatDefault():QSurfaceFormat;
		IsValid():boolean;
		NativeHandle():number;
		RequestedFormat():QSurfaceFormat;
		Screen():QScreen;
		ConnectScreenChanged(f:(screen:QScreen)=>void):void;
		DisconnectScreenChanged():void;
		ScreenChanged(screen:QScreen_ITF):void;
		SetFormat(format:QSurfaceFormat_ITF):void;
		SetNativeHandle(handle:number):void;
		SetScreen(newScreen:QScreen_ITF):void;
		ConnectSize(f:()=>core.QSize):void;
		DisconnectSize():void;
		Size():core.QSize;
		SizeDefault():core.QSize;
		ConnectSurfaceType(f:()=>number):void;
		DisconnectSurfaceType():void;
		SurfaceType():number;
		SurfaceTypeDefault():number;
		ConnectDestroyQOffscreenSurface(f:()=>void):void;
		DisconnectDestroyQOffscreenSurface():void;
		DestroyQOffscreenSurface():void;
		DestroyQOffscreenSurfaceDefault():void;
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
		Event(e:core.QEvent_ITF):boolean;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilter(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQOffscreenSurfaceFromPointer(ptr:number):QOffscreenSurface;
	function NewQOffscreenSurface(targetScreen:QScreen_ITF,parent:core.QObject_ITF):QOffscreenSurface;
	function NewQOffscreenSurface2(targetScreen:QScreen_ITF):QOffscreenSurface;
	interface QOpenGLBuffer_ITF {
		QOpenGLBuffer_PTR():QOpenGLBuffer;
	}

	class QOpenGLBuffer {
		___pointer: number;
		QOpenGLBuffer_PTR():QOpenGLBuffer;
		Pointer():number;
		SetPointer(p:number):void;
		Allocate(data:number,count:number):void;
		Allocate2(count:number):void;
		Bind():boolean;
		BufferId():number;
		Create():boolean;
		Destroy():void;
		IsCreated():boolean;
		Map(access:number):number;
		MapRange(offset:number,count:number,access:number):number;
		Read(offset:number,data:number,count:number):boolean;
		Release():void;
		Release2(ty:number):void;
		SetUsagePattern(value:number):void;
		Size():number;
		Type():number;
		Unmap():boolean;
		UsagePattern():number;
		Write(offset:number,data:number,count:number):void;
		DestroyQOpenGLBuffer():void;
	}
	function NewQOpenGLBufferFromPointer(ptr:number):QOpenGLBuffer;
	function NewQOpenGLBuffer():QOpenGLBuffer;
	function NewQOpenGLBuffer2(ty:number):QOpenGLBuffer;
	function NewQOpenGLBuffer3(other:QOpenGLBuffer_ITF):QOpenGLBuffer;
	function QOpenGLBuffer_Release2(ty:number):void;
	const QOpenGLBuffer__VertexBuffer: number;
	const QOpenGLBuffer__IndexBuffer: number;
	const QOpenGLBuffer__PixelPackBuffer: number;
	const QOpenGLBuffer__PixelUnpackBuffer: number;
	const QOpenGLBuffer__StreamDraw: number;
	const QOpenGLBuffer__StreamRead: number;
	const QOpenGLBuffer__StreamCopy: number;
	const QOpenGLBuffer__StaticDraw: number;
	const QOpenGLBuffer__StaticRead: number;
	const QOpenGLBuffer__StaticCopy: number;
	const QOpenGLBuffer__DynamicDraw: number;
	const QOpenGLBuffer__DynamicRead: number;
	const QOpenGLBuffer__DynamicCopy: number;
	const QOpenGLBuffer__ReadOnly: number;
	const QOpenGLBuffer__WriteOnly: number;
	const QOpenGLBuffer__ReadWrite: number;
	const QOpenGLBuffer__RangeRead: number;
	const QOpenGLBuffer__RangeWrite: number;
	const QOpenGLBuffer__RangeInvalidate: number;
	const QOpenGLBuffer__RangeInvalidateBuffer: number;
	const QOpenGLBuffer__RangeFlushExplicit: number;
	const QOpenGLBuffer__RangeUnsynchronized: number;
	interface QOpenGLContext_ITF extends core.QObject_ITF {
		QOpenGLContext_PTR():QOpenGLContext;
	}

	class QOpenGLContext extends core.QObject {
		___pointer: number;
		QOpenGLContext_PTR():QOpenGLContext;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAboutToBeDestroyed(f:()=>void):void;
		DisconnectAboutToBeDestroyed():void;
		AboutToBeDestroyed():void;
		AreSharing(first:QOpenGLContext_ITF,second:QOpenGLContext_ITF):boolean;
		Create():boolean;
		CurrentContext():QOpenGLContext;
		DefaultFramebufferObject():number;
		DoneCurrent():void;
		ExtraFunctions():QOpenGLExtraFunctions;
		Format():QSurfaceFormat;
		Functions():QOpenGLFunctions;
		GetProcAddress(procName:core.QByteArray_ITF):number;
		GetProcAddress2(procName:string):number;
		GlobalShareContext():QOpenGLContext;
		HasExtension(extensi:core.QByteArray_ITF):boolean;
		IsOpenGLES():boolean;
		IsValid():boolean;
		MakeCurrent(surface:QSurface_ITF):boolean;
		NativeHandle():core.QVariant;
		OpenGLModuleHandle():number;
		OpenGLModuleType():number;
		Screen():QScreen;
		SetFormat(format:QSurfaceFormat_ITF):void;
		SetNativeHandle(handle:core.QVariant_ITF):void;
		SetScreen(screen:QScreen_ITF):void;
		SetShareContext(shareContext:QOpenGLContext_ITF):void;
		ShareContext():QOpenGLContext;
		ShareGroup():QOpenGLContextGroup;
		SupportsThreadedOpenGL():boolean;
		Surface():QSurface;
		SwapBuffers(surface:QSurface_ITF):void;
		VersionFunctions(versionProfile:QOpenGLVersionProfile_ITF):QAbstractOpenGLFunctions;
		ConnectDestroyQOpenGLContext(f:()=>void):void;
		DisconnectDestroyQOpenGLContext():void;
		DestroyQOpenGLContext():void;
		DestroyQOpenGLContextDefault():void;
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
	function NewQOpenGLContextFromPointer(ptr:number):QOpenGLContext;
	function NewQOpenGLContext(parent:core.QObject_ITF):QOpenGLContext;
	function QOpenGLContext_AreSharing(first:QOpenGLContext_ITF,second:QOpenGLContext_ITF):boolean;
	function QOpenGLContext_CurrentContext():QOpenGLContext;
	function QOpenGLContext_GlobalShareContext():QOpenGLContext;
	function QOpenGLContext_OpenGLModuleHandle():number;
	function QOpenGLContext_OpenGLModuleType():number;
	function QOpenGLContext_SupportsThreadedOpenGL():boolean;
	const QOpenGLContext__LibGL: number;
	const QOpenGLContext__LibGLES: number;
	interface QOpenGLContextGroup_ITF extends core.QObject_ITF {
		QOpenGLContextGroup_PTR():QOpenGLContextGroup;
	}

	class QOpenGLContextGroup extends core.QObject {
		___pointer: number;
		QOpenGLContextGroup_PTR():QOpenGLContextGroup;
		Pointer():number;
		SetPointer(p:number):void;
		CurrentContextGroup():QOpenGLContextGroup;
		Shares():QOpenGLContext[];
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
	function NewQOpenGLContextGroupFromPointer(ptr:number):QOpenGLContextGroup;
	function QOpenGLContextGroup_CurrentContextGroup():QOpenGLContextGroup;
	interface QOpenGLDebugLogger_ITF extends core.QObject_ITF {
		QOpenGLDebugLogger_PTR():QOpenGLDebugLogger;
	}

	class QOpenGLDebugLogger extends core.QObject {
		___pointer: number;
		QOpenGLDebugLogger_PTR():QOpenGLDebugLogger;
		Pointer():number;
		SetPointer(p:number):void;
		DisableMessages(sources:number,types:number,severities:number):void;
		DisableMessages2(ids:number[],sources:number,types:number):void;
		EnableMessages(sources:number,types:number,severities:number):void;
		EnableMessages2(ids:number[],sources:number,types:number):void;
		Initialize():boolean;
		IsLogging():boolean;
		ConnectLogMessage(f:(debugMessage:QOpenGLDebugMessage)=>void):void;
		DisconnectLogMessage():void;
		LogMessage(debugMessage:QOpenGLDebugMessage_ITF):void;
		LogMessageDefault(debugMessage:QOpenGLDebugMessage_ITF):void;
		LoggedMessages():QOpenGLDebugMessage[];
		LoggingMode():number;
		MaximumMessageLength():number;
		ConnectMessageLogged(f:(debugMessage:QOpenGLDebugMessage)=>void):void;
		DisconnectMessageLogged():void;
		MessageLogged(debugMessage:QOpenGLDebugMessage_ITF):void;
		PopGroup():void;
		PushGroup(name:string,id:number,source:number):void;
		ConnectStartLogging(f:(loggingMode:number)=>void):void;
		DisconnectStartLogging():void;
		StartLogging(loggingMode:number):void;
		StartLoggingDefault(loggingMode:number):void;
		ConnectStopLogging(f:()=>void):void;
		DisconnectStopLogging():void;
		StopLogging():void;
		StopLoggingDefault():void;
		ConnectDestroyQOpenGLDebugLogger(f:()=>void):void;
		DisconnectDestroyQOpenGLDebugLogger():void;
		DestroyQOpenGLDebugLogger():void;
		DestroyQOpenGLDebugLoggerDefault():void;
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
	function NewQOpenGLDebugLoggerFromPointer(ptr:number):QOpenGLDebugLogger;
	function NewQOpenGLDebugLogger(parent:core.QObject_ITF):QOpenGLDebugLogger;
	const QOpenGLDebugLogger__AsynchronousLogging: number;
	const QOpenGLDebugLogger__SynchronousLogging: number;
	interface QOpenGLDebugMessage_ITF {
		QOpenGLDebugMessage_PTR():QOpenGLDebugMessage;
	}

	class QOpenGLDebugMessage {
		___pointer: number;
		QOpenGLDebugMessage_PTR():QOpenGLDebugMessage;
		Pointer():number;
		SetPointer(p:number):void;
		CreateApplicationMessage(text:string,id:number,severity:number,ty:number):QOpenGLDebugMessage;
		CreateThirdPartyMessage(text:string,id:number,severity:number,ty:number):QOpenGLDebugMessage;
		Id():number;
		Message():string;
		Severity():number;
		Source():number;
		Swap(debugMessage:QOpenGLDebugMessage_ITF):void;
		Type():number;
		DestroyQOpenGLDebugMessage():void;
	}
	function NewQOpenGLDebugMessageFromPointer(ptr:number):QOpenGLDebugMessage;
	function NewQOpenGLDebugMessage():QOpenGLDebugMessage;
	function NewQOpenGLDebugMessage2(debugMessage:QOpenGLDebugMessage_ITF):QOpenGLDebugMessage;
	function QOpenGLDebugMessage_CreateApplicationMessage(text:string,id:number,severity:number,ty:number):QOpenGLDebugMessage;
	function QOpenGLDebugMessage_CreateThirdPartyMessage(text:string,id:number,severity:number,ty:number):QOpenGLDebugMessage;
	const QOpenGLDebugMessage__InvalidSource: number;
	const QOpenGLDebugMessage__APISource: number;
	const QOpenGLDebugMessage__WindowSystemSource: number;
	const QOpenGLDebugMessage__ShaderCompilerSource: number;
	const QOpenGLDebugMessage__ThirdPartySource: number;
	const QOpenGLDebugMessage__ApplicationSource: number;
	const QOpenGLDebugMessage__OtherSource: number;
	const QOpenGLDebugMessage__LastSource: number;
	const QOpenGLDebugMessage__AnySource: number;
	const QOpenGLDebugMessage__InvalidType: number;
	const QOpenGLDebugMessage__ErrorType: number;
	const QOpenGLDebugMessage__DeprecatedBehaviorType: number;
	const QOpenGLDebugMessage__UndefinedBehaviorType: number;
	const QOpenGLDebugMessage__PortabilityType: number;
	const QOpenGLDebugMessage__PerformanceType: number;
	const QOpenGLDebugMessage__OtherType: number;
	const QOpenGLDebugMessage__MarkerType: number;
	const QOpenGLDebugMessage__GroupPushType: number;
	const QOpenGLDebugMessage__GroupPopType: number;
	const QOpenGLDebugMessage__LastType: number;
	const QOpenGLDebugMessage__AnyType: number;
	const QOpenGLDebugMessage__InvalidSeverity: number;
	const QOpenGLDebugMessage__HighSeverity: number;
	const QOpenGLDebugMessage__MediumSeverity: number;
	const QOpenGLDebugMessage__LowSeverity: number;
	const QOpenGLDebugMessage__NotificationSeverity: number;
	const QOpenGLDebugMessage__LastSeverity: number;
	const QOpenGLDebugMessage__AnySeverity: number;
	interface QOpenGLExtraFunctions_ITF extends QOpenGLFunctions_ITF {
		QOpenGLExtraFunctions_PTR():QOpenGLExtraFunctions;
	}

	class QOpenGLExtraFunctions extends QOpenGLFunctions {
		___pointer: number;
		QOpenGLExtraFunctions_PTR():QOpenGLExtraFunctions;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLExtraFunctions():void;
		GlActiveShaderProgram(pipeline:number,program:number):void;
		GlBeginQuery(target:number,id:number):void;
		GlBeginTransformFeedback(primitiveMode:number):void;
		GlBindBufferBase(target:number,index:number,buffer:number):void;
		GlBindImageTexture(unit:number,texture:number,level:number,layered:boolean,layer:number,access:number,format:number):void;
		GlBindProgramPipeline(pipeline:number):void;
		GlBindSampler(unit:number,sampler:number):void;
		GlBindTransformFeedback(target:number,id:number):void;
		GlBindVertexArray(array:number):void;
		GlBlendBarrier():void;
		GlBlendEquationSeparatei(buf:number,modeRGB:number,modeAlpha:number):void;
		GlBlendEquationi(buf:number,mode:number):void;
		GlBlendFuncSeparatei(buf:number,srcRGB:number,dstRGB:number,srcAlpha:number,dstAlpha:number):void;
		GlBlendFunci(buf:number,src:number,dst:number):void;
		GlBlitFramebuffer(srcX0:number,srcY0:number,srcX1:number,srcY1:number,dstX0:number,dstY0:number,dstX1:number,dstY1:number,mask:number,filter:number):void;
		GlClearBufferfi(buffer:number,drawbuffer:number,depth:number,stencil:number):void;
		GlClearBufferfv(buffer:number,drawbuffer:number,value:number):void;
		GlClearBufferiv(buffer:number,drawbuffer:number,value:number):void;
		GlClearBufferuiv(buffer:number,drawbuffer:number,value:number):void;
		GlColorMaski(index:number,r:boolean,g:boolean,b:boolean,a:boolean):void;
		GlCompressedTexImage3D(target:number,level:number,internalformat:number,width:number,height:number,depth:number,border:number,imageSize:number,data:number):void;
		GlCompressedTexSubImage3D(target:number,level:number,xoffset:number,yoffset:number,zoffset:number,width:number,height:number,depth:number,format:number,imageSize:number,data:number):void;
		GlCopyImageSubData(srcName:number,srcTarget:number,srcLevel:number,srcX:number,srcY:number,srcZ:number,dstName:number,dstTarget:number,dstLevel:number,dstX:number,dstY:number,dstZ:number,srcWidth:number,srcHeight:number,srcDepth:number):void;
		GlCopyTexSubImage3D(target:number,level:number,xoffset:number,yoffset:number,zoffset:number,x:number,y:number,width:number,height:number):void;
		GlDebugMessageControl(source:number,ty:number,severity:number,count:number,ids:number,enabled:boolean):void;
		GlDeleteProgramPipelines(n:number,pipelines:number):void;
		GlDeleteQueries(n:number,ids:number):void;
		GlDeleteSamplers(count:number,samplers:number):void;
		GlDeleteTransformFeedbacks(n:number,ids:number):void;
		GlDeleteVertexArrays(n:number,arrays:number):void;
		GlDisablei(target:number,index:number):void;
		GlDispatchCompute(num_groups_x:number,num_groups_y:number,num_groups_z:number):void;
		GlDrawArraysIndirect(mode:number,indirect:number):void;
		GlDrawArraysInstanced(mode:number,first:number,count:number,instancecount:number):void;
		GlDrawBuffers(n:number,bufs:number):void;
		GlDrawElementsBaseVertex(mode:number,count:number,ty:number,indices:number,basevertex:number):void;
		GlDrawElementsIndirect(mode:number,ty:number,indirect:number):void;
		GlDrawElementsInstanced(mode:number,count:number,ty:number,indices:number,instancecount:number):void;
		GlDrawElementsInstancedBaseVertex(mode:number,count:number,ty:number,indices:number,instancecount:number,basevertex:number):void;
		GlDrawRangeElements(mode:number,start:number,end:number,count:number,ty:number,indices:number):void;
		GlDrawRangeElementsBaseVertex(mode:number,start:number,end:number,count:number,ty:number,indices:number,basevertex:number):void;
		GlEnablei(target:number,index:number):void;
		GlEndQuery(target:number):void;
		GlEndTransformFeedback():void;
		GlFramebufferParameteri(target:number,pname:number,param:number):void;
		GlFramebufferTexture(target:number,attachment:number,texture:number,level:number):void;
		GlFramebufferTextureLayer(target:number,attachment:number,texture:number,level:number,layer:number):void;
		GlGenProgramPipelines(n:number,pipelines:number):void;
		GlGenQueries(n:number,ids:number):void;
		GlGenSamplers(count:number,samplers:number):void;
		GlGenTransformFeedbacks(n:number,ids:number):void;
		GlGenVertexArrays(n:number,arrays:number):void;
		GlGetActiveUniformBlockiv(program:number,uniformBlockIndex:number,pname:number,params:number):void;
		GlGetActiveUniformsiv(program:number,uniformCount:number,uniformIndices:number,pname:number,params:number):void;
		GlGetBooleani_v(target:number,index:number,data:boolean):void;
		GlGetBufferPointerv(target:number,pname:number,params:number):void;
		GlGetFramebufferParameteriv(target:number,pname:number,params:number):void;
		GlGetGraphicsResetStatus():number;
		GlGetIntegeri_v(target:number,index:number,data:number):void;
		GlGetInternalformativ(target:number,internalformat:number,pname:number,bufSize:number,params:number):void;
		GlGetMultisamplefv(pname:number,index:number,val:number):void;
		GlGetPointerv(pname:number,params:number):void;
		GlGetProgramBinary(program:number,bufSize:number,length:number,binaryFormat:number,binary:number):void;
		GlGetProgramInterfaceiv(program:number,programInterface:number,pname:number,params:number):void;
		GlGetProgramPipelineiv(pipeline:number,pname:number,params:number):void;
		GlGetProgramResourceiv(program:number,programInterface:number,index:number,propCount:number,props:number,bufSize:number,length:number,params:number):void;
		GlGetQueryObjectuiv(id:number,pname:number,params:number):void;
		GlGetQueryiv(target:number,pname:number,params:number):void;
		GlGetSamplerParameterIiv(sampler:number,pname:number,params:number):void;
		GlGetSamplerParameterIuiv(sampler:number,pname:number,params:number):void;
		GlGetSamplerParameterfv(sampler:number,pname:number,params:number):void;
		GlGetSamplerParameteriv(sampler:number,pname:number,params:number):void;
		GlGetStringi(name:number,index:number):string;
		GlGetTexLevelParameterfv(target:number,level:number,pname:number,params:number):void;
		GlGetTexLevelParameteriv(target:number,level:number,pname:number,params:number):void;
		GlGetTexParameterIiv(target:number,pname:number,params:number):void;
		GlGetTexParameterIuiv(target:number,pname:number,params:number):void;
		GlGetUniformuiv(program:number,location:number,params:number):void;
		GlGetVertexAttribIiv(index:number,pname:number,params:number):void;
		GlGetVertexAttribIuiv(index:number,pname:number,params:number):void;
		GlGetnUniformfv(program:number,location:number,bufSize:number,params:number):void;
		GlGetnUniformiv(program:number,location:number,bufSize:number,params:number):void;
		GlGetnUniformuiv(program:number,location:number,bufSize:number,params:number):void;
		GlInvalidateFramebuffer(target:number,numAttachments:number,attachments:number):void;
		GlInvalidateSubFramebuffer(target:number,numAttachments:number,attachments:number,x:number,y:number,width:number,height:number):void;
		GlIsEnabledi(target:number,index:number):boolean;
		GlIsProgramPipeline(pipeline:number):boolean;
		GlIsQuery(id:number):boolean;
		GlIsSampler(sampler:number):boolean;
		GlIsTransformFeedback(id:number):boolean;
		GlIsVertexArray(array:number):boolean;
		GlMemoryBarrier(barriers:number):void;
		GlMemoryBarrierByRegion(barriers:number):void;
		GlMinSampleShading(value:number):void;
		GlPatchParameteri(pname:number,value:number):void;
		GlPauseTransformFeedback():void;
		GlPopDebugGroup():void;
		GlPrimitiveBoundingBox(minX:number,minY:number,minZ:number,minW:number,maxX:number,maxY:number,maxZ:number,maxW:number):void;
		GlProgramBinary(program:number,binaryFormat:number,binary:number,length:number):void;
		GlProgramParameteri(program:number,pname:number,value:number):void;
		GlProgramUniform1f(program:number,location:number,v0:number):void;
		GlProgramUniform1fv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform1i(program:number,location:number,v0:number):void;
		GlProgramUniform1iv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform1ui(program:number,location:number,v0:number):void;
		GlProgramUniform1uiv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform2f(program:number,location:number,v0:number,v1:number):void;
		GlProgramUniform2fv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform2i(program:number,location:number,v0:number,v1:number):void;
		GlProgramUniform2iv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform2ui(program:number,location:number,v0:number,v1:number):void;
		GlProgramUniform2uiv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform3f(program:number,location:number,v0:number,v1:number,v2:number):void;
		GlProgramUniform3fv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform3i(program:number,location:number,v0:number,v1:number,v2:number):void;
		GlProgramUniform3iv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform3ui(program:number,location:number,v0:number,v1:number,v2:number):void;
		GlProgramUniform3uiv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform4f(program:number,location:number,v0:number,v1:number,v2:number,v3:number):void;
		GlProgramUniform4fv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform4i(program:number,location:number,v0:number,v1:number,v2:number,v3:number):void;
		GlProgramUniform4iv(program:number,location:number,count:number,value:number):void;
		GlProgramUniform4ui(program:number,location:number,v0:number,v1:number,v2:number,v3:number):void;
		GlProgramUniform4uiv(program:number,location:number,count:number,value:number):void;
		GlProgramUniformMatrix2fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlProgramUniformMatrix2x3fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlProgramUniformMatrix2x4fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlProgramUniformMatrix3fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlProgramUniformMatrix3x2fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlProgramUniformMatrix3x4fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlProgramUniformMatrix4fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlProgramUniformMatrix4x2fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlProgramUniformMatrix4x3fv(program:number,location:number,count:number,transpose:boolean,value:number):void;
		GlReadBuffer(src:number):void;
		GlReadnPixels(x:number,y:number,width:number,height:number,format:number,ty:number,bufSize:number,data:number):void;
		GlRenderbufferStorageMultisample(target:number,samples:number,internalformat:number,width:number,height:number):void;
		GlResumeTransformFeedback():void;
		GlSampleMaski(maskNumber:number,mask:number):void;
		GlSamplerParameterIiv(sampler:number,pname:number,param:number):void;
		GlSamplerParameterIuiv(sampler:number,pname:number,param:number):void;
		GlSamplerParameterf(sampler:number,pname:number,param:number):void;
		GlSamplerParameterfv(sampler:number,pname:number,param:number):void;
		GlSamplerParameteri(sampler:number,pname:number,param:number):void;
		GlSamplerParameteriv(sampler:number,pname:number,param:number):void;
		GlTexBuffer(target:number,internalformat:number,buffer:number):void;
		GlTexImage3D(target:number,level:number,internalformat:number,width:number,height:number,depth:number,border:number,format:number,ty:number,pixels:number):void;
		GlTexParameterIiv(target:number,pname:number,params:number):void;
		GlTexParameterIuiv(target:number,pname:number,params:number):void;
		GlTexStorage2D(target:number,levels:number,internalformat:number,width:number,height:number):void;
		GlTexStorage2DMultisample(target:number,samples:number,internalformat:number,width:number,height:number,fixedsamplelocations:boolean):void;
		GlTexStorage3D(target:number,levels:number,internalformat:number,width:number,height:number,depth:number):void;
		GlTexStorage3DMultisample(target:number,samples:number,internalformat:number,width:number,height:number,depth:number,fixedsamplelocations:boolean):void;
		GlTexSubImage3D(target:number,level:number,xoffset:number,yoffset:number,zoffset:number,width:number,height:number,depth:number,format:number,ty:number,pixels:number):void;
		GlUniform1ui(location:number,v0:number):void;
		GlUniform1uiv(location:number,count:number,value:number):void;
		GlUniform2ui(location:number,v0:number,v1:number):void;
		GlUniform2uiv(location:number,count:number,value:number):void;
		GlUniform3ui(location:number,v0:number,v1:number,v2:number):void;
		GlUniform3uiv(location:number,count:number,value:number):void;
		GlUniform4ui(location:number,v0:number,v1:number,v2:number,v3:number):void;
		GlUniform4uiv(location:number,count:number,value:number):void;
		GlUniformBlockBinding(program:number,uniformBlockIndex:number,uniformBlockBinding:number):void;
		GlUniformMatrix2x3fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUniformMatrix2x4fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUniformMatrix3x2fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUniformMatrix3x4fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUniformMatrix4x2fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUniformMatrix4x3fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUnmapBuffer(target:number):boolean;
		GlUseProgramStages(pipeline:number,stages:number,program:number):void;
		GlValidateProgramPipeline(pipeline:number):void;
		GlVertexAttribBinding(attribindex:number,bindingindex:number):void;
		GlVertexAttribDivisor(index:number,divisor:number):void;
		GlVertexAttribFormat(attribindex:number,size:number,ty:number,normalized:boolean,relativeoffset:number):void;
		GlVertexAttribI4i(index:number,x:number,y:number,z:number,w:number):void;
		GlVertexAttribI4iv(index:number,v:number):void;
		GlVertexAttribI4ui(index:number,x:number,y:number,z:number,w:number):void;
		GlVertexAttribI4uiv(index:number,v:number):void;
		GlVertexAttribIFormat(attribindex:number,size:number,ty:number,relativeoffset:number):void;
		GlVertexAttribIPointer(index:number,size:number,ty:number,stride:number,pointer:number):void;
		GlVertexBindingDivisor(bindingindex:number,divisor:number):void;
	}
	function NewQOpenGLExtraFunctionsFromPointer(ptr:number):QOpenGLExtraFunctions;
	function NewQOpenGLExtraFunctions():QOpenGLExtraFunctions;
	function NewQOpenGLExtraFunctions2(context:QOpenGLContext_ITF):QOpenGLExtraFunctions;
	interface QOpenGLFramebufferObject_ITF {
		QOpenGLFramebufferObject_PTR():QOpenGLFramebufferObject;
	}

	class QOpenGLFramebufferObject {
		___pointer: number;
		QOpenGLFramebufferObject_PTR():QOpenGLFramebufferObject;
		Pointer():number;
		SetPointer(p:number):void;
		AddColorAttachment(size:core.QSize_ITF,internalFormat:number):void;
		AddColorAttachment2(width:number,height:number,internalFormat:number):void;
		Attachment():number;
		Bind():boolean;
		BindDefault():boolean;
		BlitFramebuffer(target:QOpenGLFramebufferObject_ITF,targetRect:core.QRect_ITF,source:QOpenGLFramebufferObject_ITF,sourceRect:core.QRect_ITF,buffers:number,filter:number,readColorAttachmentIndex:number,drawColorAttachmentIndex:number,restorePolicy:number):void;
		BlitFramebuffer2(target:QOpenGLFramebufferObject_ITF,targetRect:core.QRect_ITF,source:QOpenGLFramebufferObject_ITF,sourceRect:core.QRect_ITF,buffers:number,filter:number,readColorAttachmentIndex:number,drawColorAttachmentIndex:number):void;
		BlitFramebuffer3(target:QOpenGLFramebufferObject_ITF,targetRect:core.QRect_ITF,source:QOpenGLFramebufferObject_ITF,sourceRect:core.QRect_ITF,buffers:number,filter:number):void;
		BlitFramebuffer4(target:QOpenGLFramebufferObject_ITF,source:QOpenGLFramebufferObject_ITF,buffers:number,filter:number):void;
		Format():QOpenGLFramebufferObjectFormat;
		Handle():number;
		HasOpenGLFramebufferBlit():boolean;
		HasOpenGLFramebufferObjects():boolean;
		Height():number;
		IsBound():boolean;
		IsValid():boolean;
		Release():boolean;
		SetAttachment(attachment:number):void;
		Size():core.QSize;
		Sizes():core.QSize[];
		TakeTexture():number;
		TakeTexture2(colorAttachmentIndex:number):number;
		Texture():number;
		Textures():number[];
		ToImage(flipped:boolean):QImage;
		ToImage2():QImage;
		ToImage3(flipped:boolean,colorAttachmentIndex:number):QImage;
		Width():number;
		ConnectDestroyQOpenGLFramebufferObject(f:()=>void):void;
		DisconnectDestroyQOpenGLFramebufferObject():void;
		DestroyQOpenGLFramebufferObject():void;
		DestroyQOpenGLFramebufferObjectDefault():void;
	}
	function NewQOpenGLFramebufferObjectFromPointer(ptr:number):QOpenGLFramebufferObject;
	function NewQOpenGLFramebufferObject(size:core.QSize_ITF,target:number):QOpenGLFramebufferObject;
	function NewQOpenGLFramebufferObject2(width:number,height:number,target:number):QOpenGLFramebufferObject;
	function NewQOpenGLFramebufferObject3(size:core.QSize_ITF,attachment:number,target:number,internalFormat:number):QOpenGLFramebufferObject;
	function NewQOpenGLFramebufferObject4(width:number,height:number,attachment:number,target:number,internalFormat:number):QOpenGLFramebufferObject;
	function NewQOpenGLFramebufferObject5(size:core.QSize_ITF,format:QOpenGLFramebufferObjectFormat_ITF):QOpenGLFramebufferObject;
	function NewQOpenGLFramebufferObject6(width:number,height:number,format:QOpenGLFramebufferObjectFormat_ITF):QOpenGLFramebufferObject;
	function QOpenGLFramebufferObject_BindDefault():boolean;
	function QOpenGLFramebufferObject_BlitFramebuffer(target:QOpenGLFramebufferObject_ITF,targetRect:core.QRect_ITF,source:QOpenGLFramebufferObject_ITF,sourceRect:core.QRect_ITF,buffers:number,filter:number,readColorAttachmentIndex:number,drawColorAttachmentIndex:number,restorePolicy:number):void;
	function QOpenGLFramebufferObject_BlitFramebuffer2(target:QOpenGLFramebufferObject_ITF,targetRect:core.QRect_ITF,source:QOpenGLFramebufferObject_ITF,sourceRect:core.QRect_ITF,buffers:number,filter:number,readColorAttachmentIndex:number,drawColorAttachmentIndex:number):void;
	function QOpenGLFramebufferObject_BlitFramebuffer3(target:QOpenGLFramebufferObject_ITF,targetRect:core.QRect_ITF,source:QOpenGLFramebufferObject_ITF,sourceRect:core.QRect_ITF,buffers:number,filter:number):void;
	function QOpenGLFramebufferObject_BlitFramebuffer4(target:QOpenGLFramebufferObject_ITF,source:QOpenGLFramebufferObject_ITF,buffers:number,filter:number):void;
	function QOpenGLFramebufferObject_HasOpenGLFramebufferBlit():boolean;
	function QOpenGLFramebufferObject_HasOpenGLFramebufferObjects():boolean;
	const QOpenGLFramebufferObject__NoAttachment: number;
	const QOpenGLFramebufferObject__CombinedDepthStencil: number;
	const QOpenGLFramebufferObject__Depth: number;
	const QOpenGLFramebufferObject__DontRestoreFramebufferBinding: number;
	const QOpenGLFramebufferObject__RestoreFramebufferBindingToDefault: number;
	const QOpenGLFramebufferObject__RestoreFrameBufferBinding: number;
	interface QOpenGLFramebufferObjectFormat_ITF {
		QOpenGLFramebufferObjectFormat_PTR():QOpenGLFramebufferObjectFormat;
	}

	class QOpenGLFramebufferObjectFormat {
		___pointer: number;
		QOpenGLFramebufferObjectFormat_PTR():QOpenGLFramebufferObjectFormat;
		Pointer():number;
		SetPointer(p:number):void;
		Attachment():number;
		InternalTextureFormat():number;
		Mipmap():boolean;
		Samples():number;
		SetAttachment(attachment:number):void;
		SetInternalTextureFormat(internalTextureFormat:number):void;
		SetMipmap(enabled:boolean):void;
		SetSamples(samples:number):void;
		SetTextureTarget(target:number):void;
		TextureTarget():number;
		DestroyQOpenGLFramebufferObjectFormat():void;
	}
	function NewQOpenGLFramebufferObjectFormatFromPointer(ptr:number):QOpenGLFramebufferObjectFormat;
	function NewQOpenGLFramebufferObjectFormat():QOpenGLFramebufferObjectFormat;
	function NewQOpenGLFramebufferObjectFormat2(other:QOpenGLFramebufferObjectFormat_ITF):QOpenGLFramebufferObjectFormat;
	interface QOpenGLFunctions_ITF {
		QOpenGLFunctions_PTR():QOpenGLFunctions;
	}

	class QOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_PTR():QOpenGLFunctions;
		Pointer():number;
		SetPointer(p:number):void;
		GlActiveTexture(texture:number):void;
		GlAttachShader(program:number,shader:number):void;
		GlBindAttribLocation(program:number,index:number,name:string):void;
		GlBindBuffer(target:number,buffer:number):void;
		GlBindFramebuffer(target:number,framebuffer:number):void;
		GlBindRenderbuffer(target:number,renderbuffer:number):void;
		GlBindTexture(target:number,texture:number):void;
		GlBlendColor(red:number,green:number,blue:number,alpha:number):void;
		GlBlendEquation(mode:number):void;
		GlBlendEquationSeparate(modeRGB:number,modeAlpha:number):void;
		GlBlendFunc(sfactor:number,dfactor:number):void;
		GlBlendFuncSeparate(srcRGB:number,dstRGB:number,srcAlpha:number,dstAlpha:number):void;
		GlCheckFramebufferStatus(target:number):number;
		GlClear(mask:number):void;
		GlClearColor(red:number,green:number,blue:number,alpha:number):void;
		GlClearDepthf(depth:number):void;
		GlClearStencil(s:number):void;
		GlColorMask(red:boolean,green:boolean,blue:boolean,alpha:boolean):void;
		GlCompileShader(shader:number):void;
		GlCompressedTexImage2D(target:number,level:number,internalformat:number,width:number,height:number,border:number,imageSize:number,data:number):void;
		GlCompressedTexSubImage2D(target:number,level:number,xoffset:number,yoffset:number,width:number,height:number,format:number,imageSize:number,data:number):void;
		GlCopyTexImage2D(target:number,level:number,internalformat:number,x:number,y:number,width:number,height:number,border:number):void;
		GlCopyTexSubImage2D(target:number,level:number,xoffset:number,yoffset:number,x:number,y:number,width:number,height:number):void;
		GlCreateProgram():number;
		GlCreateShader(ty:number):number;
		GlCullFace(mode:number):void;
		GlDeleteBuffers(n:number,buffers:number):void;
		GlDeleteFramebuffers(n:number,framebuffers:number):void;
		GlDeleteProgram(program:number):void;
		GlDeleteRenderbuffers(n:number,renderbuffers:number):void;
		GlDeleteShader(shader:number):void;
		GlDeleteTextures(n:number,textures:number):void;
		GlDepthFunc(fu:number):void;
		GlDepthMask(flag:boolean):void;
		GlDepthRangef(zNear:number,zFar:number):void;
		GlDetachShader(program:number,shader:number):void;
		GlDisable(cap:number):void;
		GlDisableVertexAttribArray(index:number):void;
		GlDrawArrays(mode:number,first:number,count:number):void;
		GlDrawElements(mode:number,count:number,ty:number,indices:number):void;
		GlEnable(cap:number):void;
		GlEnableVertexAttribArray(index:number):void;
		GlFinish():void;
		GlFlush():void;
		GlFramebufferRenderbuffer(target:number,attachment:number,renderbuffertarget:number,renderbuffer:number):void;
		GlFramebufferTexture2D(target:number,attachment:number,textarget:number,texture:number,level:number):void;
		GlFrontFace(mode:number):void;
		GlGenBuffers(n:number,buffers:number):void;
		GlGenFramebuffers(n:number,framebuffers:number):void;
		GlGenRenderbuffers(n:number,renderbuffers:number):void;
		GlGenTextures(n:number,textures:number):void;
		GlGenerateMipmap(target:number):void;
		GlGetActiveAttrib(program:number,index:number,bufsize:number,length:number,size:number,ty:number,name:string):void;
		GlGetActiveUniform(program:number,index:number,bufsize:number,length:number,size:number,ty:number,name:string):void;
		GlGetAttachedShaders(program:number,maxcount:number,count:number,shaders:number):void;
		GlGetAttribLocation(program:number,name:string):number;
		GlGetBooleanv(pname:number,params:boolean):void;
		GlGetBufferParameteriv(target:number,pname:number,params:number):void;
		GlGetError():number;
		GlGetFloatv(pname:number,params:number):void;
		GlGetFramebufferAttachmentParameteriv(target:number,attachment:number,pname:number,params:number):void;
		GlGetIntegerv(pname:number,params:number):void;
		GlGetProgramInfoLog(program:number,bufsize:number,length:number,infolog:string):void;
		GlGetProgramiv(program:number,pname:number,params:number):void;
		GlGetRenderbufferParameteriv(target:number,pname:number,params:number):void;
		GlGetShaderInfoLog(shader:number,bufsize:number,length:number,infolog:string):void;
		GlGetShaderPrecisionFormat(shadertype:number,precisiontype:number,ran:number,precision:number):void;
		GlGetShaderSource(shader:number,bufsize:number,length:number,source:string):void;
		GlGetShaderiv(shader:number,pname:number,params:number):void;
		GlGetString(name:number):string;
		GlGetTexParameterfv(target:number,pname:number,params:number):void;
		GlGetTexParameteriv(target:number,pname:number,params:number):void;
		GlGetUniformLocation(program:number,name:string):number;
		GlGetUniformfv(program:number,location:number,params:number):void;
		GlGetUniformiv(program:number,location:number,params:number):void;
		GlGetVertexAttribPointerv(index:number,pname:number,pointer:number):void;
		GlGetVertexAttribfv(index:number,pname:number,params:number):void;
		GlGetVertexAttribiv(index:number,pname:number,params:number):void;
		GlHint(target:number,mode:number):void;
		GlIsBuffer(buffer:number):boolean;
		GlIsEnabled(cap:number):boolean;
		GlIsFramebuffer(framebuffer:number):boolean;
		GlIsProgram(program:number):boolean;
		GlIsRenderbuffer(renderbuffer:number):boolean;
		GlIsShader(shader:number):boolean;
		GlIsTexture(texture:number):boolean;
		GlLineWidth(width:number):void;
		GlLinkProgram(program:number):void;
		GlPixelStorei(pname:number,param:number):void;
		GlPolygonOffset(factor:number,units:number):void;
		GlReadPixels(x:number,y:number,width:number,height:number,format:number,ty:number,pixels:number):void;
		GlReleaseShaderCompiler():void;
		GlRenderbufferStorage(target:number,internalformat:number,width:number,height:number):void;
		GlSampleCoverage(value:number,invert:boolean):void;
		GlScissor(x:number,y:number,width:number,height:number):void;
		GlShaderBinary(n:number,shaders:number,binaryformat:number,binary:number,length:number):void;
		GlStencilFunc(fu:number,ref:number,mask:number):void;
		GlStencilFuncSeparate(face:number,fu:number,ref:number,mask:number):void;
		GlStencilMask(mask:number):void;
		GlStencilMaskSeparate(face:number,mask:number):void;
		GlStencilOp(fail:number,zfail:number,zpass:number):void;
		GlStencilOpSeparate(face:number,fail:number,zfail:number,zpass:number):void;
		GlTexImage2D(target:number,level:number,internalformat:number,width:number,height:number,border:number,format:number,ty:number,pixels:number):void;
		GlTexParameterf(target:number,pname:number,param:number):void;
		GlTexParameterfv(target:number,pname:number,params:number):void;
		GlTexParameteri(target:number,pname:number,param:number):void;
		GlTexParameteriv(target:number,pname:number,params:number):void;
		GlTexSubImage2D(target:number,level:number,xoffset:number,yoffset:number,width:number,height:number,format:number,ty:number,pixels:number):void;
		GlUniform1f(location:number,x:number):void;
		GlUniform1fv(location:number,count:number,v:number):void;
		GlUniform1i(location:number,x:number):void;
		GlUniform1iv(location:number,count:number,v:number):void;
		GlUniform2f(location:number,x:number,y:number):void;
		GlUniform2fv(location:number,count:number,v:number):void;
		GlUniform2i(location:number,x:number,y:number):void;
		GlUniform2iv(location:number,count:number,v:number):void;
		GlUniform3f(location:number,x:number,y:number,z:number):void;
		GlUniform3fv(location:number,count:number,v:number):void;
		GlUniform3i(location:number,x:number,y:number,z:number):void;
		GlUniform3iv(location:number,count:number,v:number):void;
		GlUniform4f(location:number,x:number,y:number,z:number,w:number):void;
		GlUniform4fv(location:number,count:number,v:number):void;
		GlUniform4i(location:number,x:number,y:number,z:number,w:number):void;
		GlUniform4iv(location:number,count:number,v:number):void;
		GlUniformMatrix2fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUniformMatrix3fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUniformMatrix4fv(location:number,count:number,transpose:boolean,value:number):void;
		GlUseProgram(program:number):void;
		GlValidateProgram(program:number):void;
		GlVertexAttrib1f(indx:number,x:number):void;
		GlVertexAttrib1fv(indx:number,values:number):void;
		GlVertexAttrib2f(indx:number,x:number,y:number):void;
		GlVertexAttrib2fv(indx:number,values:number):void;
		GlVertexAttrib3f(indx:number,x:number,y:number,z:number):void;
		GlVertexAttrib3fv(indx:number,values:number):void;
		GlVertexAttrib4f(indx:number,x:number,y:number,z:number,w:number):void;
		GlVertexAttrib4fv(indx:number,values:number):void;
		GlVertexAttribPointer(indx:number,size:number,ty:number,normalized:boolean,stride:number,p:number):void;
		GlViewport(x:number,y:number,width:number,height:number):void;
		HasOpenGLFeature(feature:number):boolean;
		InitializeOpenGLFunctions():void;
		OpenGLFeatures():number;
		DestroyQOpenGLFunctions():void;
	}
	function NewQOpenGLFunctionsFromPointer(ptr:number):QOpenGLFunctions;
	function NewQOpenGLFunctions():QOpenGLFunctions;
	function NewQOpenGLFunctions2(context:QOpenGLContext_ITF):QOpenGLFunctions;
	const QOpenGLFunctions__Multitexture: number;
	const QOpenGLFunctions__Shaders: number;
	const QOpenGLFunctions__Buffers: number;
	const QOpenGLFunctions__Framebuffers: number;
	const QOpenGLFunctions__BlendColor: number;
	const QOpenGLFunctions__BlendEquation: number;
	const QOpenGLFunctions__BlendEquationSeparate: number;
	const QOpenGLFunctions__BlendFuncSeparate: number;
	const QOpenGLFunctions__BlendSubtract: number;
	const QOpenGLFunctions__CompressedTextures: number;
	const QOpenGLFunctions__Multisample: number;
	const QOpenGLFunctions__StencilSeparate: number;
	const QOpenGLFunctions__NPOTTextures: number;
	const QOpenGLFunctions__NPOTTextureRepeat: number;
	const QOpenGLFunctions__FixedFunctionPipeline: number;
	const QOpenGLFunctions__TextureRGFormats: number;
	const QOpenGLFunctions__MultipleRenderTargets: number;
	const QOpenGLFunctions__BlendEquationAdvanced: number;
	interface QOpenGLFunctions_1_0_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_1_0_PTR():QOpenGLFunctions_1_0;
	}

	class QOpenGLFunctions_1_0 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_1_0_PTR():QOpenGLFunctions_1_0;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_0():void;
	}
	interface QOpenGLFunctions_1_0_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_0_CoreBackend_PTR():QOpenGLFunctions_1_0_CoreBackend;
	}

	class QOpenGLFunctions_1_0_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_0_CoreBackend_PTR():QOpenGLFunctions_1_0_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_0_CoreBackend():void;
	}
	interface QOpenGLFunctions_1_0_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_0_DeprecatedBackend_PTR():QOpenGLFunctions_1_0_DeprecatedBackend;
	}

	class QOpenGLFunctions_1_0_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_0_DeprecatedBackend_PTR():QOpenGLFunctions_1_0_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_0_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_1_1_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_1_1_PTR():QOpenGLFunctions_1_1;
	}

	class QOpenGLFunctions_1_1 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_1_1_PTR():QOpenGLFunctions_1_1;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_1():void;
	}
	interface QOpenGLFunctions_1_1_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_1_CoreBackend_PTR():QOpenGLFunctions_1_1_CoreBackend;
	}

	class QOpenGLFunctions_1_1_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_1_CoreBackend_PTR():QOpenGLFunctions_1_1_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_1_CoreBackend():void;
	}
	interface QOpenGLFunctions_1_1_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_1_DeprecatedBackend_PTR():QOpenGLFunctions_1_1_DeprecatedBackend;
	}

	class QOpenGLFunctions_1_1_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_1_DeprecatedBackend_PTR():QOpenGLFunctions_1_1_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_1_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_1_2_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_1_2_PTR():QOpenGLFunctions_1_2;
	}

	class QOpenGLFunctions_1_2 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_1_2_PTR():QOpenGLFunctions_1_2;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_2():void;
	}
	interface QOpenGLFunctions_1_2_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_2_CoreBackend_PTR():QOpenGLFunctions_1_2_CoreBackend;
	}

	class QOpenGLFunctions_1_2_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_2_CoreBackend_PTR():QOpenGLFunctions_1_2_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_2_CoreBackend():void;
	}
	interface QOpenGLFunctions_1_2_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_2_DeprecatedBackend_PTR():QOpenGLFunctions_1_2_DeprecatedBackend;
	}

	class QOpenGLFunctions_1_2_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_2_DeprecatedBackend_PTR():QOpenGLFunctions_1_2_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_2_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_1_3_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_1_3_PTR():QOpenGLFunctions_1_3;
	}

	class QOpenGLFunctions_1_3 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_1_3_PTR():QOpenGLFunctions_1_3;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_3():void;
	}
	interface QOpenGLFunctions_1_3_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_3_CoreBackend_PTR():QOpenGLFunctions_1_3_CoreBackend;
	}

	class QOpenGLFunctions_1_3_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_3_CoreBackend_PTR():QOpenGLFunctions_1_3_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_3_CoreBackend():void;
	}
	interface QOpenGLFunctions_1_3_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_3_DeprecatedBackend_PTR():QOpenGLFunctions_1_3_DeprecatedBackend;
	}

	class QOpenGLFunctions_1_3_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_3_DeprecatedBackend_PTR():QOpenGLFunctions_1_3_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_3_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_1_4_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_1_4_PTR():QOpenGLFunctions_1_4;
	}

	class QOpenGLFunctions_1_4 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_1_4_PTR():QOpenGLFunctions_1_4;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_4():void;
	}
	interface QOpenGLFunctions_1_4_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_4_CoreBackend_PTR():QOpenGLFunctions_1_4_CoreBackend;
	}

	class QOpenGLFunctions_1_4_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_4_CoreBackend_PTR():QOpenGLFunctions_1_4_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_4_CoreBackend():void;
	}
	interface QOpenGLFunctions_1_4_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_4_DeprecatedBackend_PTR():QOpenGLFunctions_1_4_DeprecatedBackend;
	}

	class QOpenGLFunctions_1_4_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_4_DeprecatedBackend_PTR():QOpenGLFunctions_1_4_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_4_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_1_5_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_1_5_PTR():QOpenGLFunctions_1_5;
	}

	class QOpenGLFunctions_1_5 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_1_5_PTR():QOpenGLFunctions_1_5;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_5():void;
	}
	interface QOpenGLFunctions_1_5_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_1_5_CoreBackend_PTR():QOpenGLFunctions_1_5_CoreBackend;
	}

	class QOpenGLFunctions_1_5_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_1_5_CoreBackend_PTR():QOpenGLFunctions_1_5_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_1_5_CoreBackend():void;
	}
	interface QOpenGLFunctions_2_0_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_2_0_PTR():QOpenGLFunctions_2_0;
	}

	class QOpenGLFunctions_2_0 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_2_0_PTR():QOpenGLFunctions_2_0;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_2_0():void;
	}
	interface QOpenGLFunctions_2_0_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_2_0_CoreBackend_PTR():QOpenGLFunctions_2_0_CoreBackend;
	}

	class QOpenGLFunctions_2_0_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_2_0_CoreBackend_PTR():QOpenGLFunctions_2_0_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_2_0_CoreBackend():void;
	}
	interface QOpenGLFunctions_2_0_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_2_0_DeprecatedBackend_PTR():QOpenGLFunctions_2_0_DeprecatedBackend;
	}

	class QOpenGLFunctions_2_0_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_2_0_DeprecatedBackend_PTR():QOpenGLFunctions_2_0_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_2_0_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_2_1_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_2_1_PTR():QOpenGLFunctions_2_1;
	}

	class QOpenGLFunctions_2_1 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_2_1_PTR():QOpenGLFunctions_2_1;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_2_1():void;
	}
	interface QOpenGLFunctions_2_1_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_2_1_CoreBackend_PTR():QOpenGLFunctions_2_1_CoreBackend;
	}

	class QOpenGLFunctions_2_1_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_2_1_CoreBackend_PTR():QOpenGLFunctions_2_1_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_2_1_CoreBackend():void;
	}
	interface QOpenGLFunctions_3_0_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_3_0_PTR():QOpenGLFunctions_3_0;
	}

	class QOpenGLFunctions_3_0 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_3_0_PTR():QOpenGLFunctions_3_0;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_0():void;
	}
	interface QOpenGLFunctions_3_0_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_3_0_CoreBackend_PTR():QOpenGLFunctions_3_0_CoreBackend;
	}

	class QOpenGLFunctions_3_0_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_3_0_CoreBackend_PTR():QOpenGLFunctions_3_0_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_0_CoreBackend():void;
	}
	interface QOpenGLFunctions_3_0_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_3_0_DeprecatedBackend_PTR():QOpenGLFunctions_3_0_DeprecatedBackend;
	}

	class QOpenGLFunctions_3_0_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_3_0_DeprecatedBackend_PTR():QOpenGLFunctions_3_0_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_0_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_3_1_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_3_1_PTR():QOpenGLFunctions_3_1;
	}

	class QOpenGLFunctions_3_1 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_3_1_PTR():QOpenGLFunctions_3_1;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_1():void;
	}
	interface QOpenGLFunctions_3_1_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_3_1_CoreBackend_PTR():QOpenGLFunctions_3_1_CoreBackend;
	}

	class QOpenGLFunctions_3_1_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_3_1_CoreBackend_PTR():QOpenGLFunctions_3_1_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_1_CoreBackend():void;
	}
	interface QOpenGLFunctions_3_2_Compatibility_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_3_2_Compatibility_PTR():QOpenGLFunctions_3_2_Compatibility;
	}

	class QOpenGLFunctions_3_2_Compatibility extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_3_2_Compatibility_PTR():QOpenGLFunctions_3_2_Compatibility;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_2_Compatibility():void;
	}
	interface QOpenGLFunctions_3_2_Core_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_3_2_Core_PTR():QOpenGLFunctions_3_2_Core;
	}

	class QOpenGLFunctions_3_2_Core extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_3_2_Core_PTR():QOpenGLFunctions_3_2_Core;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_2_Core():void;
	}
	interface QOpenGLFunctions_3_2_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_3_2_CoreBackend_PTR():QOpenGLFunctions_3_2_CoreBackend;
	}

	class QOpenGLFunctions_3_2_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_3_2_CoreBackend_PTR():QOpenGLFunctions_3_2_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_2_CoreBackend():void;
	}
	interface QOpenGLFunctions_3_3_Compatibility_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_3_3_Compatibility_PTR():QOpenGLFunctions_3_3_Compatibility;
	}

	class QOpenGLFunctions_3_3_Compatibility extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_3_3_Compatibility_PTR():QOpenGLFunctions_3_3_Compatibility;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_3_Compatibility():void;
	}
	interface QOpenGLFunctions_3_3_Core_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_3_3_Core_PTR():QOpenGLFunctions_3_3_Core;
	}

	class QOpenGLFunctions_3_3_Core extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_3_3_Core_PTR():QOpenGLFunctions_3_3_Core;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_3_Core():void;
	}
	interface QOpenGLFunctions_3_3_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_3_3_CoreBackend_PTR():QOpenGLFunctions_3_3_CoreBackend;
	}

	class QOpenGLFunctions_3_3_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_3_3_CoreBackend_PTR():QOpenGLFunctions_3_3_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_3_CoreBackend():void;
	}
	interface QOpenGLFunctions_3_3_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_3_3_DeprecatedBackend_PTR():QOpenGLFunctions_3_3_DeprecatedBackend;
	}

	class QOpenGLFunctions_3_3_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_3_3_DeprecatedBackend_PTR():QOpenGLFunctions_3_3_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_3_3_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_4_0_Compatibility_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_0_Compatibility_PTR():QOpenGLFunctions_4_0_Compatibility;
	}

	class QOpenGLFunctions_4_0_Compatibility extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_0_Compatibility_PTR():QOpenGLFunctions_4_0_Compatibility;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_0_Compatibility():void;
	}
	interface QOpenGLFunctions_4_0_Core_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_0_Core_PTR():QOpenGLFunctions_4_0_Core;
	}

	class QOpenGLFunctions_4_0_Core extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_0_Core_PTR():QOpenGLFunctions_4_0_Core;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_0_Core():void;
	}
	interface QOpenGLFunctions_4_0_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_4_0_CoreBackend_PTR():QOpenGLFunctions_4_0_CoreBackend;
	}

	class QOpenGLFunctions_4_0_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_4_0_CoreBackend_PTR():QOpenGLFunctions_4_0_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_0_CoreBackend():void;
	}
	interface QOpenGLFunctions_4_1_Compatibility_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_1_Compatibility_PTR():QOpenGLFunctions_4_1_Compatibility;
	}

	class QOpenGLFunctions_4_1_Compatibility extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_1_Compatibility_PTR():QOpenGLFunctions_4_1_Compatibility;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_1_Compatibility():void;
	}
	interface QOpenGLFunctions_4_1_Core_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_1_Core_PTR():QOpenGLFunctions_4_1_Core;
	}

	class QOpenGLFunctions_4_1_Core extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_1_Core_PTR():QOpenGLFunctions_4_1_Core;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_1_Core():void;
	}
	interface QOpenGLFunctions_4_1_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_4_1_CoreBackend_PTR():QOpenGLFunctions_4_1_CoreBackend;
	}

	class QOpenGLFunctions_4_1_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_4_1_CoreBackend_PTR():QOpenGLFunctions_4_1_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_1_CoreBackend():void;
	}
	interface QOpenGLFunctions_4_2_Compatibility_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_2_Compatibility_PTR():QOpenGLFunctions_4_2_Compatibility;
	}

	class QOpenGLFunctions_4_2_Compatibility extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_2_Compatibility_PTR():QOpenGLFunctions_4_2_Compatibility;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_2_Compatibility():void;
	}
	interface QOpenGLFunctions_4_2_Core_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_2_Core_PTR():QOpenGLFunctions_4_2_Core;
	}

	class QOpenGLFunctions_4_2_Core extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_2_Core_PTR():QOpenGLFunctions_4_2_Core;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_2_Core():void;
	}
	interface QOpenGLFunctions_4_2_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_4_2_CoreBackend_PTR():QOpenGLFunctions_4_2_CoreBackend;
	}

	class QOpenGLFunctions_4_2_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_4_2_CoreBackend_PTR():QOpenGLFunctions_4_2_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_2_CoreBackend():void;
	}
	interface QOpenGLFunctions_4_3_Compatibility_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_3_Compatibility_PTR():QOpenGLFunctions_4_3_Compatibility;
	}

	class QOpenGLFunctions_4_3_Compatibility extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_3_Compatibility_PTR():QOpenGLFunctions_4_3_Compatibility;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_3_Compatibility():void;
	}
	interface QOpenGLFunctions_4_3_Core_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_3_Core_PTR():QOpenGLFunctions_4_3_Core;
	}

	class QOpenGLFunctions_4_3_Core extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_3_Core_PTR():QOpenGLFunctions_4_3_Core;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_3_Core():void;
	}
	interface QOpenGLFunctions_4_3_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_4_3_CoreBackend_PTR():QOpenGLFunctions_4_3_CoreBackend;
	}

	class QOpenGLFunctions_4_3_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_4_3_CoreBackend_PTR():QOpenGLFunctions_4_3_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_3_CoreBackend():void;
	}
	interface QOpenGLFunctions_4_4_Compatibility_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_4_Compatibility_PTR():QOpenGLFunctions_4_4_Compatibility;
	}

	class QOpenGLFunctions_4_4_Compatibility extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_4_Compatibility_PTR():QOpenGLFunctions_4_4_Compatibility;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_4_Compatibility():void;
	}
	interface QOpenGLFunctions_4_4_Core_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_4_Core_PTR():QOpenGLFunctions_4_4_Core;
	}

	class QOpenGLFunctions_4_4_Core extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_4_Core_PTR():QOpenGLFunctions_4_4_Core;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_4_Core():void;
	}
	interface QOpenGLFunctions_4_4_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_4_4_CoreBackend_PTR():QOpenGLFunctions_4_4_CoreBackend;
	}

	class QOpenGLFunctions_4_4_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_4_4_CoreBackend_PTR():QOpenGLFunctions_4_4_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_4_CoreBackend():void;
	}
	interface QOpenGLFunctions_4_5_Compatibility_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_5_Compatibility_PTR():QOpenGLFunctions_4_5_Compatibility;
	}

	class QOpenGLFunctions_4_5_Compatibility extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_5_Compatibility_PTR():QOpenGLFunctions_4_5_Compatibility;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_5_Compatibility():void;
	}
	interface QOpenGLFunctions_4_5_Core_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_4_5_Core_PTR():QOpenGLFunctions_4_5_Core;
	}

	class QOpenGLFunctions_4_5_Core extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_4_5_Core_PTR():QOpenGLFunctions_4_5_Core;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_5_Core():void;
	}
	interface QOpenGLFunctions_4_5_CoreBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_4_5_CoreBackend_PTR():QOpenGLFunctions_4_5_CoreBackend;
	}

	class QOpenGLFunctions_4_5_CoreBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_4_5_CoreBackend_PTR():QOpenGLFunctions_4_5_CoreBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_5_CoreBackend():void;
	}
	interface QOpenGLFunctions_4_5_DeprecatedBackend_ITF extends QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLFunctions_4_5_DeprecatedBackend_PTR():QOpenGLFunctions_4_5_DeprecatedBackend;
	}

	class QOpenGLFunctions_4_5_DeprecatedBackend extends QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLFunctions_4_5_DeprecatedBackend_PTR():QOpenGLFunctions_4_5_DeprecatedBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_4_5_DeprecatedBackend():void;
	}
	interface QOpenGLFunctions_ES2_ITF extends QAbstractOpenGLFunctions_ITF {
		QOpenGLFunctions_ES2_PTR():QOpenGLFunctions_ES2;
	}

	class QOpenGLFunctions_ES2 extends QAbstractOpenGLFunctions {
		___pointer: number;
		QOpenGLFunctions_ES2_PTR():QOpenGLFunctions_ES2;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLFunctions_ES2():void;
	}
	interface QOpenGLPaintDevice_ITF extends QPaintDevice_ITF {
		QOpenGLPaintDevice_PTR():QOpenGLPaintDevice;
	}

	class QOpenGLPaintDevice extends QPaintDevice {
		___pointer: number;
		QOpenGLPaintDevice_PTR():QOpenGLPaintDevice;
		Pointer():number;
		SetPointer(p:number):void;
		Context():QOpenGLContext;
		DotsPerMeterX():number;
		DotsPerMeterY():number;
		ConnectEnsureActiveTarget(f:()=>void):void;
		DisconnectEnsureActiveTarget():void;
		EnsureActiveTarget():void;
		EnsureActiveTargetDefault():void;
		ConnectPaintEngine(f:()=>QPaintEngine):void;
		DisconnectPaintEngine():void;
		PaintEngine():QPaintEngine;
		PaintEngineDefault():QPaintEngine;
		PaintFlipped():boolean;
		SetDevicePixelRatio(devicePixelRatio:number):void;
		SetDotsPerMeterX(dpmx:number):void;
		SetDotsPerMeterY(dpmy:number):void;
		SetPaintFlipped(flipped:boolean):void;
		SetSize(size:core.QSize_ITF):void;
		Size():core.QSize;
		ConnectDestroyQOpenGLPaintDevice(f:()=>void):void;
		DisconnectDestroyQOpenGLPaintDevice():void;
		DestroyQOpenGLPaintDevice():void;
		DestroyQOpenGLPaintDeviceDefault():void;
	}
	function NewQOpenGLPaintDeviceFromPointer(ptr:number):QOpenGLPaintDevice;
	function NewQOpenGLPaintDevice():QOpenGLPaintDevice;
	function NewQOpenGLPaintDevice2(size:core.QSize_ITF):QOpenGLPaintDevice;
	function NewQOpenGLPaintDevice3(width:number,height:number):QOpenGLPaintDevice;
	interface QOpenGLPixelTransferOptions_ITF {
		QOpenGLPixelTransferOptions_PTR():QOpenGLPixelTransferOptions;
	}

	class QOpenGLPixelTransferOptions {
		___pointer: number;
		QOpenGLPixelTransferOptions_PTR():QOpenGLPixelTransferOptions;
		Pointer():number;
		SetPointer(p:number):void;
		Alignment():number;
		ImageHeight():number;
		IsLeastSignificantBitFirst():boolean;
		IsSwapBytesEnabled():boolean;
		RowLength():number;
		SetAlignment(alignment:number):void;
		SetImageHeight(imageHeight:number):void;
		SetLeastSignificantByteFirst(lsbFirst:boolean):void;
		SetRowLength(rowLength:number):void;
		SetSkipImages(skipImages:number):void;
		SetSkipPixels(skipPixels:number):void;
		SetSkipRows(skipRows:number):void;
		SetSwapBytesEnabled(swapBytes:boolean):void;
		SkipImages():number;
		SkipPixels():number;
		SkipRows():number;
		DestroyQOpenGLPixelTransferOptions():void;
	}
	function NewQOpenGLPixelTransferOptionsFromPointer(ptr:number):QOpenGLPixelTransferOptions;
	function NewQOpenGLPixelTransferOptions():QOpenGLPixelTransferOptions;
	interface QOpenGLShader_ITF extends core.QObject_ITF {
		QOpenGLShader_PTR():QOpenGLShader;
	}

	class QOpenGLShader extends core.QObject {
		___pointer: number;
		QOpenGLShader_PTR():QOpenGLShader;
		Pointer():number;
		SetPointer(p:number):void;
		CompileSourceCode(source:string):boolean;
		CompileSourceCode2(source:core.QByteArray_ITF):boolean;
		CompileSourceCode3(source:string):boolean;
		CompileSourceFile(fileName:string):boolean;
		HasOpenGLShaders(ty:number,context:QOpenGLContext_ITF):boolean;
		IsCompiled():boolean;
		Log():string;
		ShaderId():number;
		ShaderType():number;
		SourceCode():core.QByteArray;
		ConnectDestroyQOpenGLShader(f:()=>void):void;
		DisconnectDestroyQOpenGLShader():void;
		DestroyQOpenGLShader():void;
		DestroyQOpenGLShaderDefault():void;
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
	function NewQOpenGLShaderFromPointer(ptr:number):QOpenGLShader;
	function NewQOpenGLShader(ty:number,parent:core.QObject_ITF):QOpenGLShader;
	function QOpenGLShader_HasOpenGLShaders(ty:number,context:QOpenGLContext_ITF):boolean;
	const QOpenGLShader__Vertex: number;
	const QOpenGLShader__Fragment: number;
	const QOpenGLShader__Geometry: number;
	const QOpenGLShader__TessellationControl: number;
	const QOpenGLShader__TessellationEvaluation: number;
	const QOpenGLShader__Compute: number;
	interface QOpenGLShaderProgram_ITF extends core.QObject_ITF {
		QOpenGLShaderProgram_PTR():QOpenGLShaderProgram;
	}

	class QOpenGLShaderProgram extends core.QObject {
		___pointer: number;
		QOpenGLShaderProgram_PTR():QOpenGLShaderProgram;
		Pointer():number;
		SetPointer(p:number):void;
		AddCacheableShaderFromSourceCode(ty:number,source:string):boolean;
		AddCacheableShaderFromSourceCode2(ty:number,source:core.QByteArray_ITF):boolean;
		AddCacheableShaderFromSourceCode3(ty:number,source:string):boolean;
		AddCacheableShaderFromSourceFile(ty:number,fileName:string):boolean;
		AddShader(shader:QOpenGLShader_ITF):boolean;
		AddShaderFromSourceCode(ty:number,source:string):boolean;
		AddShaderFromSourceCode2(ty:number,source:core.QByteArray_ITF):boolean;
		AddShaderFromSourceCode3(ty:number,source:string):boolean;
		AddShaderFromSourceFile(ty:number,fileName:string):boolean;
		AttributeLocation(name:string):number;
		AttributeLocation2(name:core.QByteArray_ITF):number;
		AttributeLocation3(name:string):number;
		Bind():boolean;
		BindAttributeLocation(name:string,location:number):void;
		BindAttributeLocation2(name:core.QByteArray_ITF,location:number):void;
		BindAttributeLocation3(name:string,location:number):void;
		Create():boolean;
		DefaultInnerTessellationLevels():number[];
		DefaultOuterTessellationLevels():number[];
		DisableAttributeArray(location:number):void;
		DisableAttributeArray2(name:string):void;
		EnableAttributeArray(location:number):void;
		EnableAttributeArray2(name:string):void;
		HasOpenGLShaderPrograms(context:QOpenGLContext_ITF):boolean;
		IsLinked():boolean;
		ConnectLink(f:()=>boolean):void;
		DisconnectLink():void;
		Link():boolean;
		LinkDefault():boolean;
		Log():string;
		MaxGeometryOutputVertices():number;
		PatchVertexCount():number;
		ProgramId():number;
		Release():void;
		RemoveAllShaders():void;
		RemoveShader(shader:QOpenGLShader_ITF):void;
		SetAttributeArray(location:number,values:number,tupleSize:number,stride:number):void;
		SetAttributeArray2(location:number,values:QVector2D_ITF,stride:number):void;
		SetAttributeArray3(location:number,values:QVector3D_ITF,stride:number):void;
		SetAttributeArray4(location:number,values:QVector4D_ITF,stride:number):void;
		SetAttributeArray5(location:number,ty:number,values:number,tupleSize:number,stride:number):void;
		SetAttributeArray6(name:string,values:number,tupleSize:number,stride:number):void;
		SetAttributeArray7(name:string,values:QVector2D_ITF,stride:number):void;
		SetAttributeArray8(name:string,values:QVector3D_ITF,stride:number):void;
		SetAttributeArray9(name:string,values:QVector4D_ITF,stride:number):void;
		SetAttributeArray10(name:string,ty:number,values:number,tupleSize:number,stride:number):void;
		SetAttributeBuffer(location:number,ty:number,offset:number,tupleSize:number,stride:number):void;
		SetAttributeBuffer2(name:string,ty:number,offset:number,tupleSize:number,stride:number):void;
		SetAttributeValue(location:number,value:number):void;
		SetAttributeValue2(location:number,x:number,y:number):void;
		SetAttributeValue3(location:number,x:number,y:number,z:number):void;
		SetAttributeValue4(location:number,x:number,y:number,z:number,w:number):void;
		SetAttributeValue5(location:number,value:QVector2D_ITF):void;
		SetAttributeValue6(location:number,value:QVector3D_ITF):void;
		SetAttributeValue7(location:number,value:QVector4D_ITF):void;
		SetAttributeValue8(location:number,value:QColor_ITF):void;
		SetAttributeValue9(location:number,values:number,columns:number,rows:number):void;
		SetAttributeValue10(name:string,value:number):void;
		SetAttributeValue11(name:string,x:number,y:number):void;
		SetAttributeValue12(name:string,x:number,y:number,z:number):void;
		SetAttributeValue13(name:string,x:number,y:number,z:number,w:number):void;
		SetAttributeValue14(name:string,value:QVector2D_ITF):void;
		SetAttributeValue15(name:string,value:QVector3D_ITF):void;
		SetAttributeValue16(name:string,value:QVector4D_ITF):void;
		SetAttributeValue17(name:string,value:QColor_ITF):void;
		SetAttributeValue18(name:string,values:number,columns:number,rows:number):void;
		SetDefaultInnerTessellationLevels(levels:number[]):void;
		SetDefaultOuterTessellationLevels(levels:number[]):void;
		SetPatchVertexCount(count:number):void;
		SetUniformValue(location:number,value:number):void;
		SetUniformValue2(location:number,value:number):void;
		SetUniformValue3(location:number,value:number):void;
		SetUniformValue4(location:number,x:number,y:number):void;
		SetUniformValue5(location:number,x:number,y:number,z:number):void;
		SetUniformValue6(location:number,x:number,y:number,z:number,w:number):void;
		SetUniformValue7(location:number,value:QVector2D_ITF):void;
		SetUniformValue8(location:number,value:QVector3D_ITF):void;
		SetUniformValue9(location:number,value:QVector4D_ITF):void;
		SetUniformValue10(location:number,color:QColor_ITF):void;
		SetUniformValue11(location:number,point:core.QPoint_ITF):void;
		SetUniformValue12(location:number,point:core.QPointF_ITF):void;
		SetUniformValue13(location:number,size:core.QSize_ITF):void;
		SetUniformValue14(location:number,size:core.QSizeF_ITF):void;
		SetUniformValue23(location:number,value:QMatrix4x4_ITF):void;
		SetUniformValue27(location:number,value:QTransform_ITF):void;
		SetUniformValue28(name:string,value:number):void;
		SetUniformValue29(name:string,value:number):void;
		SetUniformValue30(name:string,value:number):void;
		SetUniformValue31(name:string,x:number,y:number):void;
		SetUniformValue32(name:string,x:number,y:number,z:number):void;
		SetUniformValue33(name:string,x:number,y:number,z:number,w:number):void;
		SetUniformValue34(name:string,value:QVector2D_ITF):void;
		SetUniformValue35(name:string,value:QVector3D_ITF):void;
		SetUniformValue36(name:string,value:QVector4D_ITF):void;
		SetUniformValue37(name:string,color:QColor_ITF):void;
		SetUniformValue38(name:string,point:core.QPoint_ITF):void;
		SetUniformValue39(name:string,point:core.QPointF_ITF):void;
		SetUniformValue40(name:string,size:core.QSize_ITF):void;
		SetUniformValue41(name:string,size:core.QSizeF_ITF):void;
		SetUniformValue50(name:string,value:QMatrix4x4_ITF):void;
		SetUniformValue54(name:string,value:QTransform_ITF):void;
		SetUniformValueArray(location:number,values:number,count:number,tupleSize:number):void;
		SetUniformValueArray2(location:number,values:number,count:number):void;
		SetUniformValueArray3(location:number,values:number,count:number):void;
		SetUniformValueArray4(location:number,values:QVector2D_ITF,count:number):void;
		SetUniformValueArray5(location:number,values:QVector3D_ITF,count:number):void;
		SetUniformValueArray6(location:number,values:QVector4D_ITF,count:number):void;
		SetUniformValueArray15(location:number,values:QMatrix4x4_ITF,count:number):void;
		SetUniformValueArray16(name:string,values:number,count:number,tupleSize:number):void;
		SetUniformValueArray17(name:string,values:number,count:number):void;
		SetUniformValueArray18(name:string,values:number,count:number):void;
		SetUniformValueArray19(name:string,values:QVector2D_ITF,count:number):void;
		SetUniformValueArray20(name:string,values:QVector3D_ITF,count:number):void;
		SetUniformValueArray21(name:string,values:QVector4D_ITF,count:number):void;
		SetUniformValueArray30(name:string,values:QMatrix4x4_ITF,count:number):void;
		Shaders():QOpenGLShader[];
		UniformLocation(name:string):number;
		UniformLocation2(name:core.QByteArray_ITF):number;
		UniformLocation3(name:string):number;
		ConnectDestroyQOpenGLShaderProgram(f:()=>void):void;
		DisconnectDestroyQOpenGLShaderProgram():void;
		DestroyQOpenGLShaderProgram():void;
		DestroyQOpenGLShaderProgramDefault():void;
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
	function NewQOpenGLShaderProgramFromPointer(ptr:number):QOpenGLShaderProgram;
	function NewQOpenGLShaderProgram(parent:core.QObject_ITF):QOpenGLShaderProgram;
	function QOpenGLShaderProgram_HasOpenGLShaderPrograms(context:QOpenGLContext_ITF):boolean;
	interface QOpenGLTexture_ITF {
		QOpenGLTexture_PTR():QOpenGLTexture;
	}

	class QOpenGLTexture {
		___pointer: number;
		QOpenGLTexture_PTR():QOpenGLTexture;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLTexture():void;
		AllocateStorage():void;
		AllocateStorage2(pixelFormat:number,pixelType:number):void;
		Bind():void;
		Bind2(unit:number,reset:number):void;
		BorderColor():QColor;
		BorderColor2(border:number):void;
		BorderColor3(border:number):void;
		BorderColor4(border:number):void;
		BoundTextureId(target:number):number;
		BoundTextureId2(unit:number,target:number):number;
		ComparisonFunction():number;
		ComparisonMode():number;
		Create():boolean;
		CreateTextureView(target:number,viewFormat:number,minimumMipmapLevel:number,maximumMipmapLevel:number,minimumLayer:number,maximumLayer:number):QOpenGLTexture;
		Depth():number;
		DepthStencilMode():number;
		Destroy():void;
		Faces():number;
		Format():number;
		GenerateMipMaps():void;
		GenerateMipMaps2(baseLevel:number,resetBaseLevel:boolean):void;
		HasFeature(feature:number):boolean;
		Height():number;
		IsAutoMipMapGenerationEnabled():boolean;
		IsBound():boolean;
		IsBound2(unit:number):boolean;
		IsCreated():boolean;
		IsFixedSamplePositions():boolean;
		IsStorageAllocated():boolean;
		IsTextureView():boolean;
		Layers():number;
		LevelofDetailBias():number;
		MagnificationFilter():number;
		MaximumAnisotropy():number;
		MaximumLevelOfDetail():number;
		MaximumMipLevels():number;
		MinificationFilter():number;
		MinimumLevelOfDetail():number;
		MipBaseLevel():number;
		MipLevels():number;
		MipMaxLevel():number;
		Release():void;
		Release2(unit:number,reset:number):void;
		Samples():number;
		SetAutoMipMapGenerationEnabled(enabled:boolean):void;
		SetBorderColor(color:QColor_ITF):void;
		SetBorderColor2(r:number,g:number,b:number,a:number):void;
		SetBorderColor3(r:number,g:number,b:number,a:number):void;
		SetBorderColor4(r:number,g:number,b:number,a:number):void;
		SetComparisonFunction(func:number):void;
		SetComparisonMode(mode:number):void;
		SetCompressedData(mipLevel:number,layer:number,cubeFace:number,dataSize:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetCompressedData6(mipLevel:number,layer:number,layerCount:number,cubeFace:number,dataSize:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetCompressedData7(mipLevel:number,layer:number,dataSize:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetCompressedData8(mipLevel:number,dataSize:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetCompressedData9(dataSize:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetData(mipLevel:number,layer:number,cubeFace:number,sourceFormat:number,sourceType:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetData6(mipLevel:number,layer:number,layerCount:number,cubeFace:number,sourceFormat:number,sourceType:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetData7(mipLevel:number,layer:number,sourceFormat:number,sourceType:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetData8(mipLevel:number,sourceFormat:number,sourceType:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetData9(sourceFormat:number,sourceType:number,data:number,options:QOpenGLPixelTransferOptions_ITF):void;
		SetData10(image:QImage_ITF,genMipMaps:number):void;
		SetDepthStencilMode(mode:number):void;
		SetFixedSamplePositions(fixed:boolean):void;
		SetFormat(format:number):void;
		SetLayers(layers:number):void;
		SetLevelOfDetailRange(mi:number,max:number):void;
		SetLevelofDetailBias(bias:number):void;
		SetMagnificationFilter(filter:number):void;
		SetMaximumAnisotropy(anisotropy:number):void;
		SetMaximumLevelOfDetail(value:number):void;
		SetMinMagFilters(minificationFilter:number,magnificationFilter:number):void;
		SetMinificationFilter(filter:number):void;
		SetMinimumLevelOfDetail(value:number):void;
		SetMipBaseLevel(baseLevel:number):void;
		SetMipLevelRange(baseLevel:number,maxLevel:number):void;
		SetMipLevels(levels:number):void;
		SetMipMaxLevel(maxLevel:number):void;
		SetSamples(samples:number):void;
		SetSize(width:number,height:number,depth:number):void;
		SetSwizzleMask(component:number,value:number):void;
		SetSwizzleMask2(r:number,g:number,b:number,a:number):void;
		SetWrapMode(mode:number):void;
		SetWrapMode2(direction:number,mode:number):void;
		SwizzleMask(component:number):number;
		Target():number;
		TextureId():number;
		Width():number;
		WrapMode(direction:number):number;
	}
	function NewQOpenGLTextureFromPointer(ptr:number):QOpenGLTexture;
	function NewQOpenGLTexture(target:number):QOpenGLTexture;
	function NewQOpenGLTexture2(image:QImage_ITF,genMipMaps:number):QOpenGLTexture;
	function QOpenGLTexture_BoundTextureId(target:number):number;
	function QOpenGLTexture_BoundTextureId2(unit:number,target:number):number;
	function QOpenGLTexture_HasFeature(feature:number):boolean;
	const QOpenGLTexture__Target1D: number;
	const QOpenGLTexture__Target1DArray: number;
	const QOpenGLTexture__Target2D: number;
	const QOpenGLTexture__Target2DArray: number;
	const QOpenGLTexture__Target3D: number;
	const QOpenGLTexture__TargetCubeMap: number;
	const QOpenGLTexture__TargetCubeMapArray: number;
	const QOpenGLTexture__Target2DMultisample: number;
	const QOpenGLTexture__Target2DMultisampleArray: number;
	const QOpenGLTexture__TargetRectangle: number;
	const QOpenGLTexture__TargetBuffer: number;
	const QOpenGLTexture__BindingTarget1D: number;
	const QOpenGLTexture__BindingTarget1DArray: number;
	const QOpenGLTexture__BindingTarget2D: number;
	const QOpenGLTexture__BindingTarget2DArray: number;
	const QOpenGLTexture__BindingTarget3D: number;
	const QOpenGLTexture__BindingTargetCubeMap: number;
	const QOpenGLTexture__BindingTargetCubeMapArray: number;
	const QOpenGLTexture__BindingTarget2DMultisample: number;
	const QOpenGLTexture__BindingTarget2DMultisampleArray: number;
	const QOpenGLTexture__BindingTargetRectangle: number;
	const QOpenGLTexture__BindingTargetBuffer: number;
	const QOpenGLTexture__GenerateMipMaps: number;
	const QOpenGLTexture__DontGenerateMipMaps: number;
	const QOpenGLTexture__ResetTextureUnit: number;
	const QOpenGLTexture__DontResetTextureUnit: number;
	const QOpenGLTexture__NoFormat: number;
	const QOpenGLTexture__R8_UNorm: number;
	const QOpenGLTexture__RG8_UNorm: number;
	const QOpenGLTexture__RGB8_UNorm: number;
	const QOpenGLTexture__RGBA8_UNorm: number;
	const QOpenGLTexture__R16_UNorm: number;
	const QOpenGLTexture__RG16_UNorm: number;
	const QOpenGLTexture__RGB16_UNorm: number;
	const QOpenGLTexture__RGBA16_UNorm: number;
	const QOpenGLTexture__R8_SNorm: number;
	const QOpenGLTexture__RG8_SNorm: number;
	const QOpenGLTexture__RGB8_SNorm: number;
	const QOpenGLTexture__RGBA8_SNorm: number;
	const QOpenGLTexture__R16_SNorm: number;
	const QOpenGLTexture__RG16_SNorm: number;
	const QOpenGLTexture__RGB16_SNorm: number;
	const QOpenGLTexture__RGBA16_SNorm: number;
	const QOpenGLTexture__R8U: number;
	const QOpenGLTexture__RG8U: number;
	const QOpenGLTexture__RGB8U: number;
	const QOpenGLTexture__RGBA8U: number;
	const QOpenGLTexture__R16U: number;
	const QOpenGLTexture__RG16U: number;
	const QOpenGLTexture__RGB16U: number;
	const QOpenGLTexture__RGBA16U: number;
	const QOpenGLTexture__R32U: number;
	const QOpenGLTexture__RG32U: number;
	const QOpenGLTexture__RGB32U: number;
	const QOpenGLTexture__RGBA32U: number;
	const QOpenGLTexture__R8I: number;
	const QOpenGLTexture__RG8I: number;
	const QOpenGLTexture__RGB8I: number;
	const QOpenGLTexture__RGBA8I: number;
	const QOpenGLTexture__R16I: number;
	const QOpenGLTexture__RG16I: number;
	const QOpenGLTexture__RGB16I: number;
	const QOpenGLTexture__RGBA16I: number;
	const QOpenGLTexture__R32I: number;
	const QOpenGLTexture__RG32I: number;
	const QOpenGLTexture__RGB32I: number;
	const QOpenGLTexture__RGBA32I: number;
	const QOpenGLTexture__R16F: number;
	const QOpenGLTexture__RG16F: number;
	const QOpenGLTexture__RGB16F: number;
	const QOpenGLTexture__RGBA16F: number;
	const QOpenGLTexture__R32F: number;
	const QOpenGLTexture__RG32F: number;
	const QOpenGLTexture__RGB32F: number;
	const QOpenGLTexture__RGBA32F: number;
	const QOpenGLTexture__RGB9E5: number;
	const QOpenGLTexture__RG11B10F: number;
	const QOpenGLTexture__RG3B2: number;
	const QOpenGLTexture__R5G6B5: number;
	const QOpenGLTexture__RGB5A1: number;
	const QOpenGLTexture__RGBA4: number;
	const QOpenGLTexture__RGB10A2: number;
	const QOpenGLTexture__D16: number;
	const QOpenGLTexture__D24: number;
	const QOpenGLTexture__D24S8: number;
	const QOpenGLTexture__D32: number;
	const QOpenGLTexture__D32F: number;
	const QOpenGLTexture__D32FS8X24: number;
	const QOpenGLTexture__S8: number;
	const QOpenGLTexture__RGB_DXT1: number;
	const QOpenGLTexture__RGBA_DXT1: number;
	const QOpenGLTexture__RGBA_DXT3: number;
	const QOpenGLTexture__RGBA_DXT5: number;
	const QOpenGLTexture__R_ATI1N_UNorm: number;
	const QOpenGLTexture__R_ATI1N_SNorm: number;
	const QOpenGLTexture__RG_ATI2N_UNorm: number;
	const QOpenGLTexture__RG_ATI2N_SNorm: number;
	const QOpenGLTexture__RGB_BP_UNSIGNED_FLOAT: number;
	const QOpenGLTexture__RGB_BP_SIGNED_FLOAT: number;
	const QOpenGLTexture__RGB_BP_UNorm: number;
	const QOpenGLTexture__R11_EAC_UNorm: number;
	const QOpenGLTexture__R11_EAC_SNorm: number;
	const QOpenGLTexture__RG11_EAC_UNorm: number;
	const QOpenGLTexture__RG11_EAC_SNorm: number;
	const QOpenGLTexture__RGB8_ETC2: number;
	const QOpenGLTexture__SRGB8_ETC2: number;
	const QOpenGLTexture__RGB8_PunchThrough_Alpha1_ETC2: number;
	const QOpenGLTexture__SRGB8_PunchThrough_Alpha1_ETC2: number;
	const QOpenGLTexture__RGBA8_ETC2_EAC: number;
	const QOpenGLTexture__SRGB8_Alpha8_ETC2_EAC: number;
	const QOpenGLTexture__RGB8_ETC1: number;
	const QOpenGLTexture__RGBA_ASTC_4x4: number;
	const QOpenGLTexture__RGBA_ASTC_5x4: number;
	const QOpenGLTexture__RGBA_ASTC_5x5: number;
	const QOpenGLTexture__RGBA_ASTC_6x5: number;
	const QOpenGLTexture__RGBA_ASTC_6x6: number;
	const QOpenGLTexture__RGBA_ASTC_8x5: number;
	const QOpenGLTexture__RGBA_ASTC_8x6: number;
	const QOpenGLTexture__RGBA_ASTC_8x8: number;
	const QOpenGLTexture__RGBA_ASTC_10x5: number;
	const QOpenGLTexture__RGBA_ASTC_10x6: number;
	const QOpenGLTexture__RGBA_ASTC_10x8: number;
	const QOpenGLTexture__RGBA_ASTC_10x10: number;
	const QOpenGLTexture__RGBA_ASTC_12x10: number;
	const QOpenGLTexture__RGBA_ASTC_12x12: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_4x4: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_5x4: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_5x5: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_6x5: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_6x6: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_8x5: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_8x6: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_8x8: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_10x5: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_10x6: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_10x8: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_10x10: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_12x10: number;
	const QOpenGLTexture__SRGB8_Alpha8_ASTC_12x12: number;
	const QOpenGLTexture__SRGB8: number;
	const QOpenGLTexture__SRGB8_Alpha8: number;
	const QOpenGLTexture__SRGB_DXT1: number;
	const QOpenGLTexture__SRGB_Alpha_DXT1: number;
	const QOpenGLTexture__SRGB_Alpha_DXT3: number;
	const QOpenGLTexture__SRGB_Alpha_DXT5: number;
	const QOpenGLTexture__SRGB_BP_UNorm: number;
	const QOpenGLTexture__DepthFormat: number;
	const QOpenGLTexture__AlphaFormat: number;
	const QOpenGLTexture__RGBFormat: number;
	const QOpenGLTexture__RGBAFormat: number;
	const QOpenGLTexture__LuminanceFormat: number;
	const QOpenGLTexture__LuminanceAlphaFormat: number;
	const QOpenGLTexture__CubeMapPositiveX: number;
	const QOpenGLTexture__CubeMapNegativeX: number;
	const QOpenGLTexture__CubeMapPositiveY: number;
	const QOpenGLTexture__CubeMapNegativeY: number;
	const QOpenGLTexture__CubeMapPositiveZ: number;
	const QOpenGLTexture__CubeMapNegativeZ: number;
	const QOpenGLTexture__NoSourceFormat: number;
	const QOpenGLTexture__Red: number;
	const QOpenGLTexture__RG: number;
	const QOpenGLTexture__RGB: number;
	const QOpenGLTexture__BGR: number;
	const QOpenGLTexture__RGBA: number;
	const QOpenGLTexture__BGRA: number;
	const QOpenGLTexture__Red_Integer: number;
	const QOpenGLTexture__RG_Integer: number;
	const QOpenGLTexture__RGB_Integer: number;
	const QOpenGLTexture__BGR_Integer: number;
	const QOpenGLTexture__RGBA_Integer: number;
	const QOpenGLTexture__BGRA_Integer: number;
	const QOpenGLTexture__Stencil: number;
	const QOpenGLTexture__Depth: number;
	const QOpenGLTexture__DepthStencil: number;
	const QOpenGLTexture__Alpha: number;
	const QOpenGLTexture__Luminance: number;
	const QOpenGLTexture__LuminanceAlpha: number;
	const QOpenGLTexture__NoPixelType: number;
	const QOpenGLTexture__Int8: number;
	const QOpenGLTexture__UInt8: number;
	const QOpenGLTexture__Int16: number;
	const QOpenGLTexture__UInt16: number;
	const QOpenGLTexture__Int32: number;
	const QOpenGLTexture__UInt32: number;
	const QOpenGLTexture__Float16: number;
	const QOpenGLTexture__Float16OES: number;
	const QOpenGLTexture__Float32: number;
	const QOpenGLTexture__UInt32_RGB9_E5: number;
	const QOpenGLTexture__UInt32_RG11B10F: number;
	const QOpenGLTexture__UInt8_RG3B2: number;
	const QOpenGLTexture__UInt8_RG3B2_Rev: number;
	const QOpenGLTexture__UInt16_RGB5A1: number;
	const QOpenGLTexture__UInt16_RGB5A1_Rev: number;
	const QOpenGLTexture__UInt16_R5G6B5: number;
	const QOpenGLTexture__UInt16_R5G6B5_Rev: number;
	const QOpenGLTexture__UInt16_RGBA4: number;
	const QOpenGLTexture__UInt16_RGBA4_Rev: number;
	const QOpenGLTexture__UInt32_RGBA8: number;
	const QOpenGLTexture__UInt32_RGBA8_Rev: number;
	const QOpenGLTexture__UInt32_RGB10A2: number;
	const QOpenGLTexture__UInt32_RGB10A2_Rev: number;
	const QOpenGLTexture__UInt32_D24S8: number;
	const QOpenGLTexture__Float32_D32_UInt32_S8_X24: number;
	const QOpenGLTexture__SwizzleRed: number;
	const QOpenGLTexture__SwizzleGreen: number;
	const QOpenGLTexture__SwizzleBlue: number;
	const QOpenGLTexture__SwizzleAlpha: number;
	const QOpenGLTexture__RedValue: number;
	const QOpenGLTexture__GreenValue: number;
	const QOpenGLTexture__BlueValue: number;
	const QOpenGLTexture__AlphaValue: number;
	const QOpenGLTexture__ZeroValue: number;
	const QOpenGLTexture__OneValue: number;
	const QOpenGLTexture__Repeat: number;
	const QOpenGLTexture__MirroredRepeat: number;
	const QOpenGLTexture__ClampToEdge: number;
	const QOpenGLTexture__ClampToBorder: number;
	const QOpenGLTexture__DirectionS: number;
	const QOpenGLTexture__DirectionT: number;
	const QOpenGLTexture__DirectionR: number;
	const QOpenGLTexture__ImmutableStorage: number;
	const QOpenGLTexture__ImmutableMultisampleStorage: number;
	const QOpenGLTexture__TextureRectangle: number;
	const QOpenGLTexture__TextureArrays: number;
	const QOpenGLTexture__Texture3D: number;
	const QOpenGLTexture__TextureMultisample: number;
	const QOpenGLTexture__TextureBuffer: number;
	const QOpenGLTexture__TextureCubeMapArrays: number;
	const QOpenGLTexture__Swizzle: number;
	const QOpenGLTexture__StencilTexturing: number;
	const QOpenGLTexture__AnisotropicFiltering: number;
	const QOpenGLTexture__NPOTTextures: number;
	const QOpenGLTexture__NPOTTextureRepeat: number;
	const QOpenGLTexture__Texture1D: number;
	const QOpenGLTexture__TextureComparisonOperators: number;
	const QOpenGLTexture__TextureMipMapLevel: number;
	const QOpenGLTexture__DepthMode: number;
	const QOpenGLTexture__StencilMode: number;
	const QOpenGLTexture__CompareLessEqual: number;
	const QOpenGLTexture__CompareGreaterEqual: number;
	const QOpenGLTexture__CompareLess: number;
	const QOpenGLTexture__CompareGreater: number;
	const QOpenGLTexture__CompareEqual: number;
	const QOpenGLTexture__CommpareNotEqual: number;
	const QOpenGLTexture__CompareAlways: number;
	const QOpenGLTexture__CompareNever: number;
	const QOpenGLTexture__CompareRefToTexture: number;
	const QOpenGLTexture__CompareNone: number;
	const QOpenGLTexture__Nearest: number;
	const QOpenGLTexture__Linear: number;
	const QOpenGLTexture__NearestMipMapNearest: number;
	const QOpenGLTexture__NearestMipMapLinear: number;
	const QOpenGLTexture__LinearMipMapNearest: number;
	const QOpenGLTexture__LinearMipMapLinear: number;
	interface QOpenGLTextureBlitter_ITF {
		QOpenGLTextureBlitter_PTR():QOpenGLTextureBlitter;
	}

	class QOpenGLTextureBlitter {
		___pointer: number;
		QOpenGLTextureBlitter_PTR():QOpenGLTextureBlitter;
		Pointer():number;
		SetPointer(p:number):void;
		Bind(target:number):void;
		Blit(texture:number,targetTransform:QMatrix4x4_ITF,sourceOrigi:number):void;
		Create():boolean;
		Destroy():void;
		IsCreated():boolean;
		Release():void;
		SetOpacity(opacity:number):void;
		SetRedBlueSwizzle(swizzle:boolean):void;
		SupportsExternalOESTarget():boolean;
		TargetTransform(target:core.QRectF_ITF,viewport:core.QRect_ITF):QMatrix4x4;
		DestroyQOpenGLTextureBlitter():void;
	}
	function NewQOpenGLTextureBlitterFromPointer(ptr:number):QOpenGLTextureBlitter;
	function NewQOpenGLTextureBlitter():QOpenGLTextureBlitter;
	function QOpenGLTextureBlitter_TargetTransform(target:core.QRectF_ITF,viewport:core.QRect_ITF):QMatrix4x4;
	const QOpenGLTextureBlitter__OriginBottomLeft: number;
	const QOpenGLTextureBlitter__OriginTopLeft: number;
	interface QOpenGLTimeMonitor_ITF extends core.QObject_ITF {
		QOpenGLTimeMonitor_PTR():QOpenGLTimeMonitor;
	}

	class QOpenGLTimeMonitor extends core.QObject {
		___pointer: number;
		QOpenGLTimeMonitor_PTR():QOpenGLTimeMonitor;
		Pointer():number;
		SetPointer(p:number):void;
		Create():boolean;
		Destroy():void;
		IsCreated():boolean;
		IsResultAvailable():boolean;
		ObjectIds():number[];
		RecordSample():number;
		Reset():void;
		SampleCount():number;
		SetSampleCount(sampleCount:number):void;
		ConnectDestroyQOpenGLTimeMonitor(f:()=>void):void;
		DisconnectDestroyQOpenGLTimeMonitor():void;
		DestroyQOpenGLTimeMonitor():void;
		DestroyQOpenGLTimeMonitorDefault():void;
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
	function NewQOpenGLTimeMonitorFromPointer(ptr:number):QOpenGLTimeMonitor;
	function NewQOpenGLTimeMonitor(parent:core.QObject_ITF):QOpenGLTimeMonitor;
	interface QOpenGLTimerQuery_ITF extends core.QObject_ITF {
		QOpenGLTimerQuery_PTR():QOpenGLTimerQuery;
	}

	class QOpenGLTimerQuery extends core.QObject {
		___pointer: number;
		QOpenGLTimerQuery_PTR():QOpenGLTimerQuery;
		Pointer():number;
		SetPointer(p:number):void;
		Begin():void;
		Create():boolean;
		Destroy():void;
		End():void;
		IsCreated():boolean;
		IsResultAvailable():boolean;
		ObjectId():number;
		RecordTimestamp():void;
		ConnectDestroyQOpenGLTimerQuery(f:()=>void):void;
		DisconnectDestroyQOpenGLTimerQuery():void;
		DestroyQOpenGLTimerQuery():void;
		DestroyQOpenGLTimerQueryDefault():void;
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
	function NewQOpenGLTimerQueryFromPointer(ptr:number):QOpenGLTimerQuery;
	function NewQOpenGLTimerQuery(parent:core.QObject_ITF):QOpenGLTimerQuery;
	interface QOpenGLVersionFunctionsBackend_ITF {
		QOpenGLVersionFunctionsBackend_PTR():QOpenGLVersionFunctionsBackend;
	}

	class QOpenGLVersionFunctionsBackend {
		___pointer: number;
		QOpenGLVersionFunctionsBackend_PTR():QOpenGLVersionFunctionsBackend;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLVersionFunctionsBackend():void;
	}
	function NewQOpenGLVersionFunctionsBackendFromPointer(ptr:number):QOpenGLVersionFunctionsBackend;
	interface QOpenGLVersionFunctionsStorage_ITF {
		QOpenGLVersionFunctionsStorage_PTR():QOpenGLVersionFunctionsStorage;
	}

	class QOpenGLVersionFunctionsStorage {
		___pointer: number;
		QOpenGLVersionFunctionsStorage_PTR():QOpenGLVersionFunctionsStorage;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLVersionFunctionsStorage():void;
	}
	function NewQOpenGLVersionFunctionsStorageFromPointer(ptr:number):QOpenGLVersionFunctionsStorage;
	interface QOpenGLVersionProfile_ITF {
		QOpenGLVersionProfile_PTR():QOpenGLVersionProfile;
	}

	class QOpenGLVersionProfile {
		___pointer: number;
		QOpenGLVersionProfile_PTR():QOpenGLVersionProfile;
		Pointer():number;
		SetPointer(p:number):void;
		HasProfiles():boolean;
		IsLegacyVersion():boolean;
		IsValid():boolean;
		Profile():number;
		SetProfile(profile:number):void;
		SetVersion(majorVersion:number,minorVersion:number):void;
		DestroyQOpenGLVersionProfile():void;
	}
	function NewQOpenGLVersionProfileFromPointer(ptr:number):QOpenGLVersionProfile;
	function NewQOpenGLVersionProfile():QOpenGLVersionProfile;
	function NewQOpenGLVersionProfile2(format:QSurfaceFormat_ITF):QOpenGLVersionProfile;
	function NewQOpenGLVersionProfile3(other:QOpenGLVersionProfile_ITF):QOpenGLVersionProfile;
	interface QOpenGLVersionStatus_ITF {
		QOpenGLVersionStatus_PTR():QOpenGLVersionStatus;
	}

	class QOpenGLVersionStatus {
		___pointer: number;
		QOpenGLVersionStatus_PTR():QOpenGLVersionStatus;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOpenGLVersionStatus():void;
	}
	function NewQOpenGLVersionStatusFromPointer(ptr:number):QOpenGLVersionStatus;
	interface QOpenGLVertexArrayObject_ITF extends core.QObject_ITF {
		QOpenGLVertexArrayObject_PTR():QOpenGLVertexArrayObject;
	}

	class QOpenGLVertexArrayObject extends core.QObject {
		___pointer: number;
		QOpenGLVertexArrayObject_PTR():QOpenGLVertexArrayObject;
		Pointer():number;
		SetPointer(p:number):void;
		Bind():void;
		Create():boolean;
		Destroy():void;
		IsCreated():boolean;
		ObjectId():number;
		Release():void;
		ConnectDestroyQOpenGLVertexArrayObject(f:()=>void):void;
		DisconnectDestroyQOpenGLVertexArrayObject():void;
		DestroyQOpenGLVertexArrayObject():void;
		DestroyQOpenGLVertexArrayObjectDefault():void;
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
	function NewQOpenGLVertexArrayObjectFromPointer(ptr:number):QOpenGLVertexArrayObject;
	function NewQOpenGLVertexArrayObject(parent:core.QObject_ITF):QOpenGLVertexArrayObject;
	interface QOpenGLWindow_ITF extends QPaintDeviceWindow_ITF {
		QOpenGLWindow_PTR():QOpenGLWindow;
	}

	class QOpenGLWindow extends QPaintDeviceWindow {
		___pointer: number;
		QOpenGLWindow_PTR():QOpenGLWindow;
		Pointer():number;
		SetPointer(p:number):void;
		Context():QOpenGLContext;
		DefaultFramebufferObject():number;
		DoneCurrent():void;
		ConnectFrameSwapped(f:()=>void):void;
		DisconnectFrameSwapped():void;
		FrameSwapped():void;
		GrabFramebuffer():QImage;
		ConnectInitializeGL(f:()=>void):void;
		DisconnectInitializeGL():void;
		InitializeGL():void;
		InitializeGLDefault():void;
		IsValid():boolean;
		MakeCurrent():void;
		ConnectPaintGL(f:()=>void):void;
		DisconnectPaintGL():void;
		PaintGL():void;
		PaintGLDefault():void;
		ConnectPaintOverGL(f:()=>void):void;
		DisconnectPaintOverGL():void;
		PaintOverGL():void;
		PaintOverGLDefault():void;
		ConnectPaintUnderGL(f:()=>void):void;
		DisconnectPaintUnderGL():void;
		PaintUnderGL():void;
		PaintUnderGLDefault():void;
		ConnectResizeGL(f:(w:number,h:number)=>void):void;
		DisconnectResizeGL():void;
		ResizeGL(w:number,h:number):void;
		ResizeGLDefault(w:number,h:number):void;
		ShareContext():QOpenGLContext;
		UpdateBehavior():number;
		ConnectDestroyQOpenGLWindow(f:()=>void):void;
		DisconnectDestroyQOpenGLWindow():void;
		DestroyQOpenGLWindow():void;
		DestroyQOpenGLWindowDefault():void;
	}
	function NewQOpenGLWindowFromPointer(ptr:number):QOpenGLWindow;
	function NewQOpenGLWindow(updateBehavior:number,parent:QWindow_ITF):QOpenGLWindow;
	function NewQOpenGLWindow2(shareContext:QOpenGLContext_ITF,updateBehavior:number,parent:QWindow_ITF):QOpenGLWindow;
	const QOpenGLWindow__NoPartialUpdate: number;
	const QOpenGLWindow__PartialUpdateBlit: number;
	const QOpenGLWindow__PartialUpdateBlend: number;
	interface QPageLayout_ITF {
		QPageLayout_PTR():QPageLayout;
	}

	class QPageLayout {
		___pointer: number;
		QPageLayout_PTR():QPageLayout;
		Pointer():number;
		SetPointer(p:number):void;
		FullRect():core.QRectF;
		FullRect2(units:number):core.QRectF;
		FullRectPixels(resolution:number):core.QRect;
		FullRectPoints():core.QRect;
		IsEquivalentTo(other:QPageLayout_ITF):boolean;
		IsValid():boolean;
		Margins():core.QMarginsF;
		Margins2(units:number):core.QMarginsF;
		MarginsPixels(resolution:number):core.QMargins;
		MarginsPoints():core.QMargins;
		MaximumMargins():core.QMarginsF;
		MinimumMargins():core.QMarginsF;
		Mode():number;
		Orientation():number;
		PageSize():QPageSize;
		PaintRect():core.QRectF;
		PaintRect2(units:number):core.QRectF;
		PaintRectPixels(resolution:number):core.QRect;
		PaintRectPoints():core.QRect;
		SetBottomMargin(bottomMargi:number):boolean;
		SetLeftMargin(leftMargi:number):boolean;
		SetMargins(margins:core.QMarginsF_ITF):boolean;
		SetMinimumMargins(minMargins:core.QMarginsF_ITF):void;
		SetMode(mode:number):void;
		SetOrientation(orientation:number):void;
		SetPageSize(pageSize:QPageSize_ITF,minMargins:core.QMarginsF_ITF):void;
		SetRightMargin(rightMargi:number):boolean;
		SetTopMargin(topMargi:number):boolean;
		SetUnits(units:number):void;
		Swap(other:QPageLayout_ITF):void;
		Units():number;
		DestroyQPageLayout():void;
	}
	function NewQPageLayoutFromPointer(ptr:number):QPageLayout;
	function NewQPageLayout():QPageLayout;
	function NewQPageLayout2(pageSize:QPageSize_ITF,orientation:number,margins:core.QMarginsF_ITF,units:number,minMargins:core.QMarginsF_ITF):QPageLayout;
	function NewQPageLayout3(other:QPageLayout_ITF):QPageLayout;
	const QPageLayout__Millimeter: number;
	const QPageLayout__Point: number;
	const QPageLayout__Inch: number;
	const QPageLayout__Pica: number;
	const QPageLayout__Didot: number;
	const QPageLayout__Cicero: number;
	const QPageLayout__Portrait: number;
	const QPageLayout__Landscape: number;
	const QPageLayout__StandardMode: number;
	const QPageLayout__FullPageMode: number;
	interface QPageSize_ITF {
		QPageSize_PTR():QPageSize;
	}

	class QPageSize {
		___pointer: number;
		QPageSize_PTR():QPageSize;
		Pointer():number;
		SetPointer(p:number):void;
		DefinitionSize():core.QSizeF;
		DefinitionSize2(pageSizeId:number):core.QSizeF;
		DefinitionUnits():number;
		DefinitionUnits2(pageSizeId:number):number;
		Id():number;
		Id2(pointSize:core.QSize_ITF,matchPolicy:number):number;
		Id3(size:core.QSizeF_ITF,units:number,matchPolicy:number):number;
		Id4(windowsId:number):number;
		IsEquivalentTo(other:QPageSize_ITF):boolean;
		IsValid():boolean;
		Key():string;
		Key2(pageSizeId:number):string;
		Name():string;
		Name2(pageSizeId:number):string;
		Rect(units:number):core.QRectF;
		RectPixels(resolution:number):core.QRect;
		RectPoints():core.QRect;
		Size(units:number):core.QSizeF;
		Size2(pageSizeId:number,units:number):core.QSizeF;
		SizePixels(resolution:number):core.QSize;
		SizePixels2(pageSizeId:number,resolution:number):core.QSize;
		SizePoints():core.QSize;
		SizePoints2(pageSizeId:number):core.QSize;
		Swap(other:QPageSize_ITF):void;
		WindowsId():number;
		WindowsId2(pageSizeId:number):number;
		DestroyQPageSize():void;
	}
	function NewQPageSizeFromPointer(ptr:number):QPageSize;
	function NewQPageSize():QPageSize;
	function NewQPageSize2(pageSize:number):QPageSize;
	function NewQPageSize3(pointSize:core.QSize_ITF,name:string,matchPolicy:number):QPageSize;
	function NewQPageSize4(size:core.QSizeF_ITF,units:number,name:string,matchPolicy:number):QPageSize;
	function NewQPageSize5(other:QPageSize_ITF):QPageSize;
	function QPageSize_DefinitionSize2(pageSizeId:number):core.QSizeF;
	function QPageSize_DefinitionUnits2(pageSizeId:number):number;
	function QPageSize_Id2(pointSize:core.QSize_ITF,matchPolicy:number):number;
	function QPageSize_Id3(size:core.QSizeF_ITF,units:number,matchPolicy:number):number;
	function QPageSize_Id4(windowsId:number):number;
	function QPageSize_Key2(pageSizeId:number):string;
	function QPageSize_Name2(pageSizeId:number):string;
	function QPageSize_Size2(pageSizeId:number,units:number):core.QSizeF;
	function QPageSize_SizePixels2(pageSizeId:number,resolution:number):core.QSize;
	function QPageSize_SizePoints2(pageSizeId:number):core.QSize;
	function QPageSize_WindowsId2(pageSizeId:number):number;
	const QPageSize__A4: number;
	const QPageSize__B5: number;
	const QPageSize__Letter: number;
	const QPageSize__Legal: number;
	const QPageSize__Executive: number;
	const QPageSize__A0: number;
	const QPageSize__A1: number;
	const QPageSize__A2: number;
	const QPageSize__A3: number;
	const QPageSize__A5: number;
	const QPageSize__A6: number;
	const QPageSize__A7: number;
	const QPageSize__A8: number;
	const QPageSize__A9: number;
	const QPageSize__B0: number;
	const QPageSize__B1: number;
	const QPageSize__B10: number;
	const QPageSize__B2: number;
	const QPageSize__B3: number;
	const QPageSize__B4: number;
	const QPageSize__B6: number;
	const QPageSize__B7: number;
	const QPageSize__B8: number;
	const QPageSize__B9: number;
	const QPageSize__C5E: number;
	const QPageSize__Comm10E: number;
	const QPageSize__DLE: number;
	const QPageSize__Folio: number;
	const QPageSize__Ledger: number;
	const QPageSize__Tabloid: number;
	const QPageSize__Custom: number;
	const QPageSize__A10: number;
	const QPageSize__A3Extra: number;
	const QPageSize__A4Extra: number;
	const QPageSize__A4Plus: number;
	const QPageSize__A4Small: number;
	const QPageSize__A5Extra: number;
	const QPageSize__B5Extra: number;
	const QPageSize__JisB0: number;
	const QPageSize__JisB1: number;
	const QPageSize__JisB2: number;
	const QPageSize__JisB3: number;
	const QPageSize__JisB4: number;
	const QPageSize__JisB5: number;
	const QPageSize__JisB6: number;
	const QPageSize__JisB7: number;
	const QPageSize__JisB8: number;
	const QPageSize__JisB9: number;
	const QPageSize__JisB10: number;
	const QPageSize__AnsiC: number;
	const QPageSize__AnsiD: number;
	const QPageSize__AnsiE: number;
	const QPageSize__LegalExtra: number;
	const QPageSize__LetterExtra: number;
	const QPageSize__LetterPlus: number;
	const QPageSize__LetterSmall: number;
	const QPageSize__TabloidExtra: number;
	const QPageSize__ArchA: number;
	const QPageSize__ArchB: number;
	const QPageSize__ArchC: number;
	const QPageSize__ArchD: number;
	const QPageSize__ArchE: number;
	const QPageSize__Imperial7x9: number;
	const QPageSize__Imperial8x10: number;
	const QPageSize__Imperial9x11: number;
	const QPageSize__Imperial9x12: number;
	const QPageSize__Imperial10x11: number;
	const QPageSize__Imperial10x13: number;
	const QPageSize__Imperial10x14: number;
	const QPageSize__Imperial12x11: number;
	const QPageSize__Imperial15x11: number;
	const QPageSize__ExecutiveStandard: number;
	const QPageSize__Note: number;
	const QPageSize__Quarto: number;
	const QPageSize__Statement: number;
	const QPageSize__SuperA: number;
	const QPageSize__SuperB: number;
	const QPageSize__Postcard: number;
	const QPageSize__DoublePostcard: number;
	const QPageSize__Prc16K: number;
	const QPageSize__Prc32K: number;
	const QPageSize__Prc32KBig: number;
	const QPageSize__FanFoldUS: number;
	const QPageSize__FanFoldGerman: number;
	const QPageSize__FanFoldGermanLegal: number;
	const QPageSize__EnvelopeB4: number;
	const QPageSize__EnvelopeB5: number;
	const QPageSize__EnvelopeB6: number;
	const QPageSize__EnvelopeC0: number;
	const QPageSize__EnvelopeC1: number;
	const QPageSize__EnvelopeC2: number;
	const QPageSize__EnvelopeC3: number;
	const QPageSize__EnvelopeC4: number;
	const QPageSize__EnvelopeC6: number;
	const QPageSize__EnvelopeC65: number;
	const QPageSize__EnvelopeC7: number;
	const QPageSize__Envelope9: number;
	const QPageSize__Envelope11: number;
	const QPageSize__Envelope12: number;
	const QPageSize__Envelope14: number;
	const QPageSize__EnvelopeMonarch: number;
	const QPageSize__EnvelopePersonal: number;
	const QPageSize__EnvelopeChou3: number;
	const QPageSize__EnvelopeChou4: number;
	const QPageSize__EnvelopeInvite: number;
	const QPageSize__EnvelopeItalian: number;
	const QPageSize__EnvelopeKaku2: number;
	const QPageSize__EnvelopeKaku3: number;
	const QPageSize__EnvelopePrc1: number;
	const QPageSize__EnvelopePrc2: number;
	const QPageSize__EnvelopePrc3: number;
	const QPageSize__EnvelopePrc4: number;
	const QPageSize__EnvelopePrc5: number;
	const QPageSize__EnvelopePrc6: number;
	const QPageSize__EnvelopePrc7: number;
	const QPageSize__EnvelopePrc8: number;
	const QPageSize__EnvelopePrc9: number;
	const QPageSize__EnvelopePrc10: number;
	const QPageSize__EnvelopeYou4: number;
	const QPageSize__LastPageSize: number;
	const QPageSize__NPageSize: number;
	const QPageSize__NPaperSize: number;
	const QPageSize__AnsiA: number;
	const QPageSize__AnsiB: number;
	const QPageSize__EnvelopeC5: number;
	const QPageSize__EnvelopeDL: number;
	const QPageSize__Envelope10: number;
	const QPageSize__Millimeter: number;
	const QPageSize__Point: number;
	const QPageSize__Inch: number;
	const QPageSize__Pica: number;
	const QPageSize__Didot: number;
	const QPageSize__Cicero: number;
	const QPageSize__FuzzyMatch: number;
	const QPageSize__FuzzyOrientationMatch: number;
	const QPageSize__ExactMatch: number;
	interface QPagedPaintDevice_ITF extends QPaintDevice_ITF {
		QPagedPaintDevice_PTR():QPagedPaintDevice;
	}

	class QPagedPaintDevice extends QPaintDevice {
		___pointer: number;
		QPagedPaintDevice_PTR():QPagedPaintDevice;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectNewPage(f:()=>boolean):void;
		DisconnectNewPage():void;
		NewPage():boolean;
		PageLayout():QPageLayout;
		PageSize():number;
		PageSizeMM():core.QSizeF;
		SetPageLayout(newPageLayout:QPageLayout_ITF):boolean;
		SetPageMargins(margins:core.QMarginsF_ITF):boolean;
		SetPageMargins2(margins:core.QMarginsF_ITF,units:number):boolean;
		SetPageOrientation(orientation:number):boolean;
		SetPageSize(pageSize:QPageSize_ITF):boolean;
		ConnectSetPageSize2(f:(size:number)=>void):void;
		DisconnectSetPageSize2():void;
		SetPageSize2(size:number):void;
		SetPageSize2Default(size:number):void;
		ConnectSetPageSizeMM(f:(size:core.QSizeF)=>void):void;
		DisconnectSetPageSizeMM():void;
		SetPageSizeMM(size:core.QSizeF_ITF):void;
		SetPageSizeMMDefault(size:core.QSizeF_ITF):void;
		ConnectDestroyQPagedPaintDevice(f:()=>void):void;
		DisconnectDestroyQPagedPaintDevice():void;
		DestroyQPagedPaintDevice():void;
		DestroyQPagedPaintDeviceDefault():void;
		PaintEngine():QPaintEngine;
		PaintEngineDefault():QPaintEngine;
	}
	function NewQPagedPaintDeviceFromPointer(ptr:number):QPagedPaintDevice;
	const QPagedPaintDevice__A4: number;
	const QPagedPaintDevice__B5: number;
	const QPagedPaintDevice__Letter: number;
	const QPagedPaintDevice__Legal: number;
	const QPagedPaintDevice__Executive: number;
	const QPagedPaintDevice__A0: number;
	const QPagedPaintDevice__A1: number;
	const QPagedPaintDevice__A2: number;
	const QPagedPaintDevice__A3: number;
	const QPagedPaintDevice__A5: number;
	const QPagedPaintDevice__A6: number;
	const QPagedPaintDevice__A7: number;
	const QPagedPaintDevice__A8: number;
	const QPagedPaintDevice__A9: number;
	const QPagedPaintDevice__B0: number;
	const QPagedPaintDevice__B1: number;
	const QPagedPaintDevice__B10: number;
	const QPagedPaintDevice__B2: number;
	const QPagedPaintDevice__B3: number;
	const QPagedPaintDevice__B4: number;
	const QPagedPaintDevice__B6: number;
	const QPagedPaintDevice__B7: number;
	const QPagedPaintDevice__B8: number;
	const QPagedPaintDevice__B9: number;
	const QPagedPaintDevice__C5E: number;
	const QPagedPaintDevice__Comm10E: number;
	const QPagedPaintDevice__DLE: number;
	const QPagedPaintDevice__Folio: number;
	const QPagedPaintDevice__Ledger: number;
	const QPagedPaintDevice__Tabloid: number;
	const QPagedPaintDevice__Custom: number;
	const QPagedPaintDevice__A10: number;
	const QPagedPaintDevice__A3Extra: number;
	const QPagedPaintDevice__A4Extra: number;
	const QPagedPaintDevice__A4Plus: number;
	const QPagedPaintDevice__A4Small: number;
	const QPagedPaintDevice__A5Extra: number;
	const QPagedPaintDevice__B5Extra: number;
	const QPagedPaintDevice__JisB0: number;
	const QPagedPaintDevice__JisB1: number;
	const QPagedPaintDevice__JisB2: number;
	const QPagedPaintDevice__JisB3: number;
	const QPagedPaintDevice__JisB4: number;
	const QPagedPaintDevice__JisB5: number;
	const QPagedPaintDevice__JisB6: number;
	const QPagedPaintDevice__JisB7: number;
	const QPagedPaintDevice__JisB8: number;
	const QPagedPaintDevice__JisB9: number;
	const QPagedPaintDevice__JisB10: number;
	const QPagedPaintDevice__AnsiC: number;
	const QPagedPaintDevice__AnsiD: number;
	const QPagedPaintDevice__AnsiE: number;
	const QPagedPaintDevice__LegalExtra: number;
	const QPagedPaintDevice__LetterExtra: number;
	const QPagedPaintDevice__LetterPlus: number;
	const QPagedPaintDevice__LetterSmall: number;
	const QPagedPaintDevice__TabloidExtra: number;
	const QPagedPaintDevice__ArchA: number;
	const QPagedPaintDevice__ArchB: number;
	const QPagedPaintDevice__ArchC: number;
	const QPagedPaintDevice__ArchD: number;
	const QPagedPaintDevice__ArchE: number;
	const QPagedPaintDevice__Imperial7x9: number;
	const QPagedPaintDevice__Imperial8x10: number;
	const QPagedPaintDevice__Imperial9x11: number;
	const QPagedPaintDevice__Imperial9x12: number;
	const QPagedPaintDevice__Imperial10x11: number;
	const QPagedPaintDevice__Imperial10x13: number;
	const QPagedPaintDevice__Imperial10x14: number;
	const QPagedPaintDevice__Imperial12x11: number;
	const QPagedPaintDevice__Imperial15x11: number;
	const QPagedPaintDevice__ExecutiveStandard: number;
	const QPagedPaintDevice__Note: number;
	const QPagedPaintDevice__Quarto: number;
	const QPagedPaintDevice__Statement: number;
	const QPagedPaintDevice__SuperA: number;
	const QPagedPaintDevice__SuperB: number;
	const QPagedPaintDevice__Postcard: number;
	const QPagedPaintDevice__DoublePostcard: number;
	const QPagedPaintDevice__Prc16K: number;
	const QPagedPaintDevice__Prc32K: number;
	const QPagedPaintDevice__Prc32KBig: number;
	const QPagedPaintDevice__FanFoldUS: number;
	const QPagedPaintDevice__FanFoldGerman: number;
	const QPagedPaintDevice__FanFoldGermanLegal: number;
	const QPagedPaintDevice__EnvelopeB4: number;
	const QPagedPaintDevice__EnvelopeB5: number;
	const QPagedPaintDevice__EnvelopeB6: number;
	const QPagedPaintDevice__EnvelopeC0: number;
	const QPagedPaintDevice__EnvelopeC1: number;
	const QPagedPaintDevice__EnvelopeC2: number;
	const QPagedPaintDevice__EnvelopeC3: number;
	const QPagedPaintDevice__EnvelopeC4: number;
	const QPagedPaintDevice__EnvelopeC6: number;
	const QPagedPaintDevice__EnvelopeC65: number;
	const QPagedPaintDevice__EnvelopeC7: number;
	const QPagedPaintDevice__Envelope9: number;
	const QPagedPaintDevice__Envelope11: number;
	const QPagedPaintDevice__Envelope12: number;
	const QPagedPaintDevice__Envelope14: number;
	const QPagedPaintDevice__EnvelopeMonarch: number;
	const QPagedPaintDevice__EnvelopePersonal: number;
	const QPagedPaintDevice__EnvelopeChou3: number;
	const QPagedPaintDevice__EnvelopeChou4: number;
	const QPagedPaintDevice__EnvelopeInvite: number;
	const QPagedPaintDevice__EnvelopeItalian: number;
	const QPagedPaintDevice__EnvelopeKaku2: number;
	const QPagedPaintDevice__EnvelopeKaku3: number;
	const QPagedPaintDevice__EnvelopePrc1: number;
	const QPagedPaintDevice__EnvelopePrc2: number;
	const QPagedPaintDevice__EnvelopePrc3: number;
	const QPagedPaintDevice__EnvelopePrc4: number;
	const QPagedPaintDevice__EnvelopePrc5: number;
	const QPagedPaintDevice__EnvelopePrc6: number;
	const QPagedPaintDevice__EnvelopePrc7: number;
	const QPagedPaintDevice__EnvelopePrc8: number;
	const QPagedPaintDevice__EnvelopePrc9: number;
	const QPagedPaintDevice__EnvelopePrc10: number;
	const QPagedPaintDevice__EnvelopeYou4: number;
	const QPagedPaintDevice__LastPageSize: number;
	const QPagedPaintDevice__NPageSize: number;
	const QPagedPaintDevice__NPaperSize: number;
	const QPagedPaintDevice__AnsiA: number;
	const QPagedPaintDevice__AnsiB: number;
	const QPagedPaintDevice__EnvelopeC5: number;
	const QPagedPaintDevice__EnvelopeDL: number;
	const QPagedPaintDevice__Envelope10: number;
	const QPagedPaintDevice__PdfVersion_1_4: number;
	const QPagedPaintDevice__PdfVersion_A1b: number;
	const QPagedPaintDevice__PdfVersion_1_6: number;
	interface QPaintDevice_ITF {
		QPaintDevice_PTR():QPaintDevice;
	}

	class QPaintDevice {
		___pointer: number;
		QPaintDevice_PTR():QPaintDevice;
		Pointer():number;
		SetPointer(p:number):void;
		ColorCount():number;
		Depth():number;
		DevicePixelRatio():number;
		DevicePixelRatioF():number;
		Height():number;
		HeightMM():number;
		LogicalDpiX():number;
		LogicalDpiY():number;
		ConnectMetric(f:(metric:number)=>number):void;
		DisconnectMetric():void;
		Metric(metric:number):number;
		MetricDefault(metric:number):number;
		ConnectPaintEngine(f:()=>QPaintEngine):void;
		DisconnectPaintEngine():void;
		PaintEngine():QPaintEngine;
		PaintingActive():boolean;
		PhysicalDpiX():number;
		PhysicalDpiY():number;
		Width():number;
		WidthMM():number;
		ConnectDestroyQPaintDevice(f:()=>void):void;
		DisconnectDestroyQPaintDevice():void;
		DestroyQPaintDevice():void;
		DestroyQPaintDeviceDefault():void;
	}
	function NewQPaintDeviceFromPointer(ptr:number):QPaintDevice;
	function NewQPaintDevice():QPaintDevice;
	const QPaintDevice__PdmWidth: number;
	const QPaintDevice__PdmHeight: number;
	const QPaintDevice__PdmWidthMM: number;
	const QPaintDevice__PdmHeightMM: number;
	const QPaintDevice__PdmNumColors: number;
	const QPaintDevice__PdmDepth: number;
	const QPaintDevice__PdmDpiX: number;
	const QPaintDevice__PdmDpiY: number;
	const QPaintDevice__PdmPhysicalDpiX: number;
	const QPaintDevice__PdmPhysicalDpiY: number;
	const QPaintDevice__PdmDevicePixelRatio: number;
	const QPaintDevice__PdmDevicePixelRatioScaled: number;
	interface QPaintDeviceWindow_ITF extends QPaintDevice_ITF {
		QPaintDeviceWindow_PTR():QPaintDeviceWindow;
		QWindow_PTR():QWindow;
	}

	class QPaintDeviceWindow extends QPaintDevice {
		QWindow_PTR():QWindow
		___pointer: number;
		QPaintDeviceWindow_PTR():QPaintDeviceWindow;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectPaintEvent(f:(event:QPaintEvent)=>void):void;
		DisconnectPaintEvent():void;
		PaintEvent(event:QPaintEvent_ITF):void;
		PaintEventDefault(event:QPaintEvent_ITF):void;
		Update(rect:core.QRect_ITF):void;
		Update2(region:QRegion_ITF):void;
		ConnectUpdate3(f:()=>void):void;
		DisconnectUpdate3():void;
		Update3():void;
		Update3Default():void;
		PaintEngine():QPaintEngine;
		PaintEngineDefault():QPaintEngine;
	}
	function NewQPaintDeviceWindowFromPointer(ptr:number):QPaintDeviceWindow;
	interface QPaintEngine_ITF {
		QPaintEngine_PTR():QPaintEngine;
	}

	class QPaintEngine {
		___pointer: number;
		QPaintEngine_PTR():QPaintEngine;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBegin(f:(pdev:QPaintDevice)=>boolean):void;
		DisconnectBegin():void;
		Begin(pdev:QPaintDevice_ITF):boolean;
		ConnectDrawEllipse(f:(rect:core.QRectF)=>void):void;
		DisconnectDrawEllipse():void;
		DrawEllipse(rect:core.QRectF_ITF):void;
		DrawEllipseDefault(rect:core.QRectF_ITF):void;
		ConnectDrawEllipse2(f:(rect:core.QRect)=>void):void;
		DisconnectDrawEllipse2():void;
		DrawEllipse2(rect:core.QRect_ITF):void;
		DrawEllipse2Default(rect:core.QRect_ITF):void;
		ConnectDrawImage(f:(rectangle:core.QRectF,image:QImage,sr:core.QRectF,flags:number)=>void):void;
		DisconnectDrawImage():void;
		DrawImage(rectangle:core.QRectF_ITF,image:QImage_ITF,sr:core.QRectF_ITF,flags:number):void;
		DrawImageDefault(rectangle:core.QRectF_ITF,image:QImage_ITF,sr:core.QRectF_ITF,flags:number):void;
		ConnectDrawLines(f:(lines:core.QLineF,lineCount:number)=>void):void;
		DisconnectDrawLines():void;
		DrawLines(lines:core.QLineF_ITF,lineCount:number):void;
		DrawLinesDefault(lines:core.QLineF_ITF,lineCount:number):void;
		ConnectDrawLines2(f:(lines:core.QLine,lineCount:number)=>void):void;
		DisconnectDrawLines2():void;
		DrawLines2(lines:core.QLine_ITF,lineCount:number):void;
		DrawLines2Default(lines:core.QLine_ITF,lineCount:number):void;
		ConnectDrawPath(f:(path:QPainterPath)=>void):void;
		DisconnectDrawPath():void;
		DrawPath(path:QPainterPath_ITF):void;
		DrawPathDefault(path:QPainterPath_ITF):void;
		ConnectDrawPixmap(f:(r:core.QRectF,pm:QPixmap,sr:core.QRectF)=>void):void;
		DisconnectDrawPixmap():void;
		DrawPixmap(r:core.QRectF_ITF,pm:QPixmap_ITF,sr:core.QRectF_ITF):void;
		ConnectDrawPoints(f:(points:core.QPointF,pointCount:number)=>void):void;
		DisconnectDrawPoints():void;
		DrawPoints(points:core.QPointF_ITF,pointCount:number):void;
		DrawPointsDefault(points:core.QPointF_ITF,pointCount:number):void;
		ConnectDrawPoints2(f:(points:core.QPoint,pointCount:number)=>void):void;
		DisconnectDrawPoints2():void;
		DrawPoints2(points:core.QPoint_ITF,pointCount:number):void;
		DrawPoints2Default(points:core.QPoint_ITF,pointCount:number):void;
		ConnectDrawPolygon(f:(points:core.QPointF,pointCount:number,mode:number)=>void):void;
		DisconnectDrawPolygon():void;
		DrawPolygon(points:core.QPointF_ITF,pointCount:number,mode:number):void;
		DrawPolygonDefault(points:core.QPointF_ITF,pointCount:number,mode:number):void;
		ConnectDrawPolygon2(f:(points:core.QPoint,pointCount:number,mode:number)=>void):void;
		DisconnectDrawPolygon2():void;
		DrawPolygon2(points:core.QPoint_ITF,pointCount:number,mode:number):void;
		DrawPolygon2Default(points:core.QPoint_ITF,pointCount:number,mode:number):void;
		ConnectDrawRects(f:(rects:core.QRectF,rectCount:number)=>void):void;
		DisconnectDrawRects():void;
		DrawRects(rects:core.QRectF_ITF,rectCount:number):void;
		DrawRectsDefault(rects:core.QRectF_ITF,rectCount:number):void;
		ConnectDrawRects2(f:(rects:core.QRect,rectCount:number)=>void):void;
		DisconnectDrawRects2():void;
		DrawRects2(rects:core.QRect_ITF,rectCount:number):void;
		DrawRects2Default(rects:core.QRect_ITF,rectCount:number):void;
		ConnectDrawTextItem(f:(p:core.QPointF,textItem:QTextItem)=>void):void;
		DisconnectDrawTextItem():void;
		DrawTextItem(p:core.QPointF_ITF,textItem:QTextItem_ITF):void;
		DrawTextItemDefault(p:core.QPointF_ITF,textItem:QTextItem_ITF):void;
		ConnectDrawTiledPixmap(f:(rect:core.QRectF,pixmap:QPixmap,p:core.QPointF)=>void):void;
		DisconnectDrawTiledPixmap():void;
		DrawTiledPixmap(rect:core.QRectF_ITF,pixmap:QPixmap_ITF,p:core.QPointF_ITF):void;
		DrawTiledPixmapDefault(rect:core.QRectF_ITF,pixmap:QPixmap_ITF,p:core.QPointF_ITF):void;
		ConnectEnd(f:()=>boolean):void;
		DisconnectEnd():void;
		End():boolean;
		HasFeature(feature:number):boolean;
		IsActive():boolean;
		PaintDevice():QPaintDevice;
		Painter():QPainter;
		SetActive(state:boolean):void;
		ConnectType(f:()=>number):void;
		DisconnectType():void;
		Type():number;
		ConnectUpdateState(f:(state:QPaintEngineState)=>void):void;
		DisconnectUpdateState():void;
		UpdateState(state:QPaintEngineState_ITF):void;
		ConnectDestroyQPaintEngine(f:()=>void):void;
		DisconnectDestroyQPaintEngine():void;
		DestroyQPaintEngine():void;
		DestroyQPaintEngineDefault():void;
	}
	function NewQPaintEngineFromPointer(ptr:number):QPaintEngine;
	function NewQPaintEngine(caps:number):QPaintEngine;
	const QPaintEngine__PrimitiveTransform: number;
	const QPaintEngine__PatternTransform: number;
	const QPaintEngine__PixmapTransform: number;
	const QPaintEngine__PatternBrush: number;
	const QPaintEngine__LinearGradientFill: number;
	const QPaintEngine__RadialGradientFill: number;
	const QPaintEngine__ConicalGradientFill: number;
	const QPaintEngine__AlphaBlend: number;
	const QPaintEngine__PorterDuff: number;
	const QPaintEngine__PainterPaths: number;
	const QPaintEngine__Antialiasing: number;
	const QPaintEngine__BrushStroke: number;
	const QPaintEngine__ConstantOpacity: number;
	const QPaintEngine__MaskedBrush: number;
	const QPaintEngine__PerspectiveTransform: number;
	const QPaintEngine__BlendModes: number;
	const QPaintEngine__ObjectBoundingModeGradients: number;
	const QPaintEngine__RasterOpModes: number;
	const QPaintEngine__PaintOutsidePaintEvent: number;
	const QPaintEngine__AllFeatures: number;
	const QPaintEngine__DirtyPen: number;
	const QPaintEngine__DirtyBrush: number;
	const QPaintEngine__DirtyBrushOrigin: number;
	const QPaintEngine__DirtyFont: number;
	const QPaintEngine__DirtyBackground: number;
	const QPaintEngine__DirtyBackgroundMode: number;
	const QPaintEngine__DirtyTransform: number;
	const QPaintEngine__DirtyClipRegion: number;
	const QPaintEngine__DirtyClipPath: number;
	const QPaintEngine__DirtyHints: number;
	const QPaintEngine__DirtyCompositionMode: number;
	const QPaintEngine__DirtyClipEnabled: number;
	const QPaintEngine__DirtyOpacity: number;
	const QPaintEngine__AllDirty: number;
	const QPaintEngine__OddEvenMode: number;
	const QPaintEngine__WindingMode: number;
	const QPaintEngine__ConvexMode: number;
	const QPaintEngine__PolylineMode: number;
	const QPaintEngine__X11: number;
	const QPaintEngine__Windows: number;
	const QPaintEngine__QuickDraw: number;
	const QPaintEngine__CoreGraphics: number;
	const QPaintEngine__MacPrinter: number;
	const QPaintEngine__QWindowSystem: number;
	const QPaintEngine__PostScript: number;
	const QPaintEngine__OpenGL: number;
	const QPaintEngine__Picture: number;
	const QPaintEngine__SVG: number;
	const QPaintEngine__Raster: number;
	const QPaintEngine__Direct3D: number;
	const QPaintEngine__Pdf: number;
	const QPaintEngine__OpenVG: number;
	const QPaintEngine__OpenGL2: number;
	const QPaintEngine__PaintBuffer: number;
	const QPaintEngine__Blitter: number;
	const QPaintEngine__Direct2D: number;
	const QPaintEngine__User: number;
	const QPaintEngine__MaxUser: number;
	interface QPaintEngineState_ITF {
		QPaintEngineState_PTR():QPaintEngineState;
	}

	class QPaintEngineState {
		___pointer: number;
		QPaintEngineState_PTR():QPaintEngineState;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPaintEngineState():void;
		BackgroundBrush():QBrush;
		BackgroundMode():number;
		Brush():QBrush;
		BrushNeedsResolving():boolean;
		BrushOrigin():core.QPointF;
		ClipOperation():number;
		ClipPath():QPainterPath;
		ClipRegion():QRegion;
		CompositionMode():number;
		Font():QFont;
		IsClipEnabled():boolean;
		Opacity():number;
		Painter():QPainter;
		Pen():QPen;
		PenNeedsResolving():boolean;
		RenderHints():number;
		State():number;
		Transform():QTransform;
	}
	function NewQPaintEngineStateFromPointer(ptr:number):QPaintEngineState;
	interface QPaintEvent_ITF extends core.QEvent_ITF {
		QPaintEvent_PTR():QPaintEvent;
	}

	class QPaintEvent extends core.QEvent {
		___pointer: number;
		QPaintEvent_PTR():QPaintEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPaintEvent():void;
		Rect():core.QRect;
		Region():QRegion;
	}
	function NewQPaintEventFromPointer(ptr:number):QPaintEvent;
	function NewQPaintEvent(paintRegion:QRegion_ITF):QPaintEvent;
	function NewQPaintEvent2(paintRect:core.QRect_ITF):QPaintEvent;
	interface QPainter_ITF {
		QPainter_PTR():QPainter;
	}

	class QPainter {
		___pointer: number;
		QPainter_PTR():QPainter;
		Pointer():number;
		SetPointer(p:number):void;
		Background():QBrush;
		BackgroundMode():number;
		Begin(device:QPaintDevice_ITF):boolean;
		BeginNativePainting():void;
		BoundingRect(rectangle:core.QRectF_ITF,flags:number,text:string):core.QRectF;
		BoundingRect2(rectangle:core.QRect_ITF,flags:number,text:string):core.QRect;
		BoundingRect3(x:number,y:number,w:number,h:number,flags:number,text:string):core.QRect;
		BoundingRect4(rectangle:core.QRectF_ITF,text:string,option:QTextOption_ITF):core.QRectF;
		Brush():QBrush;
		BrushOrigin():core.QPoint;
		ClipBoundingRect():core.QRectF;
		ClipPath():QPainterPath;
		ClipRegion():QRegion;
		CombinedTransform():QTransform;
		CompositionMode():number;
		Device():QPaintDevice;
		DeviceTransform():QTransform;
		DrawArc(rectangle:core.QRectF_ITF,startAngle:number,spanAngle:number):void;
		DrawArc2(rectangle:core.QRect_ITF,startAngle:number,spanAngle:number):void;
		DrawArc3(x:number,y:number,width:number,height:number,startAngle:number,spanAngle:number):void;
		DrawChord(rectangle:core.QRectF_ITF,startAngle:number,spanAngle:number):void;
		DrawChord2(x:number,y:number,width:number,height:number,startAngle:number,spanAngle:number):void;
		DrawChord3(rectangle:core.QRect_ITF,startAngle:number,spanAngle:number):void;
		DrawConvexPolygon(points:core.QPointF_ITF,pointCount:number):void;
		DrawConvexPolygon2(polygon:QPolygonF_ITF):void;
		DrawConvexPolygon3(points:core.QPoint_ITF,pointCount:number):void;
		DrawConvexPolygon4(polygon:QPolygon_ITF):void;
		DrawEllipse(rectangle:core.QRectF_ITF):void;
		DrawEllipse2(rectangle:core.QRect_ITF):void;
		DrawEllipse3(x:number,y:number,width:number,height:number):void;
		DrawEllipse4(center:core.QPointF_ITF,rx:number,ry:number):void;
		DrawEllipse5(center:core.QPoint_ITF,rx:number,ry:number):void;
		DrawGlyphRun(position:core.QPointF_ITF,glyphs:QGlyphRun_ITF):void;
		DrawImage(target:core.QRectF_ITF,image:QImage_ITF,source:core.QRectF_ITF,flags:number):void;
		DrawImage2(target:core.QRect_ITF,image:QImage_ITF,source:core.QRect_ITF,flags:number):void;
		DrawImage3(point:core.QPointF_ITF,image:QImage_ITF,source:core.QRectF_ITF,flags:number):void;
		DrawImage4(point:core.QPoint_ITF,image:QImage_ITF,source:core.QRect_ITF,flags:number):void;
		DrawImage5(rectangle:core.QRectF_ITF,image:QImage_ITF):void;
		DrawImage6(rectangle:core.QRect_ITF,image:QImage_ITF):void;
		DrawImage7(point:core.QPointF_ITF,image:QImage_ITF):void;
		DrawImage8(point:core.QPoint_ITF,image:QImage_ITF):void;
		DrawImage9(x:number,y:number,image:QImage_ITF,sx:number,sy:number,sw:number,sh:number,flags:number):void;
		DrawLine(line:core.QLineF_ITF):void;
		DrawLine2(line:core.QLine_ITF):void;
		DrawLine3(x1:number,y1:number,x2:number,y2:number):void;
		DrawLine4(p1:core.QPoint_ITF,p2:core.QPoint_ITF):void;
		DrawLine5(p1:core.QPointF_ITF,p2:core.QPointF_ITF):void;
		DrawLines(lines:core.QLineF_ITF,lineCount:number):void;
		DrawLines2(lines:core.QLineF[]):void;
		DrawLines3(pointPairs:core.QPointF_ITF,lineCount:number):void;
		DrawLines4(pointPairs:core.QPointF[]):void;
		DrawLines5(lines:core.QLine_ITF,lineCount:number):void;
		DrawLines6(lines:core.QLine[]):void;
		DrawLines7(pointPairs:core.QPoint_ITF,lineCount:number):void;
		DrawLines8(pointPairs:core.QPoint[]):void;
		DrawPath(path:QPainterPath_ITF):void;
		DrawPicture(point:core.QPointF_ITF,picture:QPicture_ITF):void;
		DrawPicture2(x:number,y:number,picture:QPicture_ITF):void;
		DrawPicture3(point:core.QPoint_ITF,picture:QPicture_ITF):void;
		DrawPie(rectangle:core.QRectF_ITF,startAngle:number,spanAngle:number):void;
		DrawPie2(x:number,y:number,width:number,height:number,startAngle:number,spanAngle:number):void;
		DrawPie3(rectangle:core.QRect_ITF,startAngle:number,spanAngle:number):void;
		DrawPixmap(target:core.QRectF_ITF,pixmap:QPixmap_ITF,source:core.QRectF_ITF):void;
		DrawPixmap2(target:core.QRect_ITF,pixmap:QPixmap_ITF,source:core.QRect_ITF):void;
		DrawPixmap3(x:number,y:number,w:number,h:number,pixmap:QPixmap_ITF,sx:number,sy:number,sw:number,sh:number):void;
		DrawPixmap4(x:number,y:number,pixmap:QPixmap_ITF,sx:number,sy:number,sw:number,sh:number):void;
		DrawPixmap5(point:core.QPointF_ITF,pixmap:QPixmap_ITF,source:core.QRectF_ITF):void;
		DrawPixmap6(point:core.QPoint_ITF,pixmap:QPixmap_ITF,source:core.QRect_ITF):void;
		DrawPixmap7(point:core.QPointF_ITF,pixmap:QPixmap_ITF):void;
		DrawPixmap8(point:core.QPoint_ITF,pixmap:QPixmap_ITF):void;
		DrawPixmap9(x:number,y:number,pixmap:QPixmap_ITF):void;
		DrawPixmap10(rectangle:core.QRect_ITF,pixmap:QPixmap_ITF):void;
		DrawPixmap11(x:number,y:number,width:number,height:number,pixmap:QPixmap_ITF):void;
		DrawPoint(position:core.QPointF_ITF):void;
		DrawPoint2(position:core.QPoint_ITF):void;
		DrawPoint3(x:number,y:number):void;
		DrawPoints(points:core.QPointF_ITF,pointCount:number):void;
		DrawPoints2(points:QPolygonF_ITF):void;
		DrawPoints3(points:core.QPoint_ITF,pointCount:number):void;
		DrawPoints4(points:QPolygon_ITF):void;
		DrawPolygon(points:core.QPointF_ITF,pointCount:number,fillRule:number):void;
		DrawPolygon2(points:QPolygonF_ITF,fillRule:number):void;
		DrawPolygon3(points:core.QPoint_ITF,pointCount:number,fillRule:number):void;
		DrawPolygon4(points:QPolygon_ITF,fillRule:number):void;
		DrawPolyline(points:core.QPointF_ITF,pointCount:number):void;
		DrawPolyline2(points:QPolygonF_ITF):void;
		DrawPolyline3(points:core.QPoint_ITF,pointCount:number):void;
		DrawPolyline4(points:QPolygon_ITF):void;
		DrawRect(rectangle:core.QRectF_ITF):void;
		DrawRect2(x:number,y:number,width:number,height:number):void;
		DrawRect3(rectangle:core.QRect_ITF):void;
		DrawRects(rectangles:core.QRectF_ITF,rectCount:number):void;
		DrawRects2(rectangles:core.QRectF[]):void;
		DrawRects3(rectangles:core.QRect_ITF,rectCount:number):void;
		DrawRects4(rectangles:core.QRect[]):void;
		DrawRoundedRect(rect:core.QRectF_ITF,xRadius:number,yRadius:number,mode:number):void;
		DrawRoundedRect2(x:number,y:number,w:number,h:number,xRadius:number,yRadius:number,mode:number):void;
		DrawRoundedRect3(rect:core.QRect_ITF,xRadius:number,yRadius:number,mode:number):void;
		DrawStaticText(topLeftPosition:core.QPointF_ITF,staticText:QStaticText_ITF):void;
		DrawStaticText2(topLeftPosition:core.QPoint_ITF,staticText:QStaticText_ITF):void;
		DrawStaticText3(left:number,top:number,staticText:QStaticText_ITF):void;
		DrawText(position:core.QPointF_ITF,text:string):void;
		DrawText2(position:core.QPoint_ITF,text:string):void;
		DrawText3(x:number,y:number,text:string):void;
		DrawText4(rectangle:core.QRect_ITF,flags:number,text:string,boundingRect:core.QRect_ITF):void;
		DrawText5(x:number,y:number,width:number,height:number,flags:number,text:string,boundingRect:core.QRect_ITF):void;
		DrawText6(rectangle:core.QRectF_ITF,text:string,option:QTextOption_ITF):void;
		DrawTiledPixmap(rectangle:core.QRectF_ITF,pixmap:QPixmap_ITF,position:core.QPointF_ITF):void;
		DrawTiledPixmap2(x:number,y:number,width:number,height:number,pixmap:QPixmap_ITF,sx:number,sy:number):void;
		DrawTiledPixmap3(rectangle:core.QRect_ITF,pixmap:QPixmap_ITF,position:core.QPoint_ITF):void;
		End():boolean;
		EndNativePainting():void;
		EraseRect(rectangle:core.QRectF_ITF):void;
		EraseRect2(x:number,y:number,width:number,height:number):void;
		EraseRect3(rectangle:core.QRect_ITF):void;
		FillPath(path:QPainterPath_ITF,brush:QBrush_ITF):void;
		FillRect(rectangle:core.QRectF_ITF,brush:QBrush_ITF):void;
		FillRect2(x:number,y:number,width:number,height:number,brush:QBrush_ITF):void;
		FillRect3(rectangle:core.QRect_ITF,brush:QBrush_ITF):void;
		FillRect4(rectangle:core.QRectF_ITF,color:QColor_ITF):void;
		FillRect5(x:number,y:number,width:number,height:number,color:QColor_ITF):void;
		FillRect6(rectangle:core.QRect_ITF,color:QColor_ITF):void;
		FillRect7(x:number,y:number,width:number,height:number,color:number):void;
		FillRect8(rectangle:core.QRect_ITF,color:number):void;
		FillRect9(rectangle:core.QRectF_ITF,color:number):void;
		FillRect10(x:number,y:number,width:number,height:number,style:number):void;
		FillRect11(rectangle:core.QRect_ITF,style:number):void;
		FillRect12(rectangle:core.QRectF_ITF,style:number):void;
		FillRect13(x:number,y:number,width:number,height:number,preset:number):void;
		FillRect14(rectangle:core.QRect_ITF,preset:number):void;
		FillRect15(rectangle:core.QRectF_ITF,preset:number):void;
		Font():QFont;
		FontInfo():QFontInfo;
		FontMetrics():QFontMetrics;
		HasClipping():boolean;
		IsActive():boolean;
		LayoutDirection():number;
		Opacity():number;
		PaintEngine():QPaintEngine;
		Pen():QPen;
		RenderHints():number;
		ResetTransform():void;
		Restore():void;
		Rotate(angle:number):void;
		Save():void;
		Scale(sx:number,sy:number):void;
		SetBackground(brush:QBrush_ITF):void;
		SetBackgroundMode(mode:number):void;
		SetBrush(brush:QBrush_ITF):void;
		SetBrush2(style:number):void;
		SetBrushOrigin(position:core.QPointF_ITF):void;
		SetBrushOrigin2(x:number,y:number):void;
		SetBrushOrigin3(position:core.QPoint_ITF):void;
		SetClipPath(path:QPainterPath_ITF,operation:number):void;
		SetClipRect(rectangle:core.QRectF_ITF,operation:number):void;
		SetClipRect2(rectangle:core.QRect_ITF,operation:number):void;
		SetClipRect3(x:number,y:number,width:number,height:number,operation:number):void;
		SetClipRegion(region:QRegion_ITF,operation:number):void;
		SetClipping(enable:boolean):void;
		SetCompositionMode(mode:number):void;
		SetFont(font:QFont_ITF):void;
		SetLayoutDirection(direction:number):void;
		SetOpacity(opacity:number):void;
		SetPen(pen:QPen_ITF):void;
		SetPen2(color:QColor_ITF):void;
		SetPen3(style:number):void;
		SetRenderHint(hint:number,on:boolean):void;
		SetRenderHints(hints:number,on:boolean):void;
		SetTransform(transform:QTransform_ITF,combine:boolean):void;
		SetViewTransformEnabled(enable:boolean):void;
		SetViewport(rectangle:core.QRect_ITF):void;
		SetViewport2(x:number,y:number,width:number,height:number):void;
		SetWindow(rectangle:core.QRect_ITF):void;
		SetWindow2(x:number,y:number,width:number,height:number):void;
		SetWorldMatrixEnabled(enable:boolean):void;
		SetWorldTransform(matrix:QTransform_ITF,combine:boolean):void;
		Shear(sh:number,sv:number):void;
		StrokePath(path:QPainterPath_ITF,pen:QPen_ITF):void;
		TestRenderHint(hint:number):boolean;
		Transform():QTransform;
		Translate(offset:core.QPointF_ITF):void;
		Translate2(offset:core.QPoint_ITF):void;
		Translate3(dx:number,dy:number):void;
		ViewTransformEnabled():boolean;
		Viewport():core.QRect;
		Window():core.QRect;
		WorldMatrixEnabled():boolean;
		WorldTransform():QTransform;
		DestroyQPainter():void;
	}
	function NewQPainterFromPointer(ptr:number):QPainter;
	function NewQPainter():QPainter;
	function NewQPainter2(device:QPaintDevice_ITF):QPainter;
	const QPainter__Antialiasing: number;
	const QPainter__TextAntialiasing: number;
	const QPainter__SmoothPixmapTransform: number;
	const QPainter__HighQualityAntialiasing: number;
	const QPainter__NonCosmeticDefaultPen: number;
	const QPainter__Qt4CompatiblePainting: number;
	const QPainter__LosslessImageRendering: number;
	const QPainter__OpaqueHint: number;
	const QPainter__CompositionMode_SourceOver: number;
	const QPainter__CompositionMode_DestinationOver: number;
	const QPainter__CompositionMode_Clear: number;
	const QPainter__CompositionMode_Source: number;
	const QPainter__CompositionMode_Destination: number;
	const QPainter__CompositionMode_SourceIn: number;
	const QPainter__CompositionMode_DestinationIn: number;
	const QPainter__CompositionMode_SourceOut: number;
	const QPainter__CompositionMode_DestinationOut: number;
	const QPainter__CompositionMode_SourceAtop: number;
	const QPainter__CompositionMode_DestinationAtop: number;
	const QPainter__CompositionMode_Xor: number;
	const QPainter__CompositionMode_Plus: number;
	const QPainter__CompositionMode_Multiply: number;
	const QPainter__CompositionMode_Screen: number;
	const QPainter__CompositionMode_Overlay: number;
	const QPainter__CompositionMode_Darken: number;
	const QPainter__CompositionMode_Lighten: number;
	const QPainter__CompositionMode_ColorDodge: number;
	const QPainter__CompositionMode_ColorBurn: number;
	const QPainter__CompositionMode_HardLight: number;
	const QPainter__CompositionMode_SoftLight: number;
	const QPainter__CompositionMode_Difference: number;
	const QPainter__CompositionMode_Exclusion: number;
	const QPainter__RasterOp_SourceOrDestination: number;
	const QPainter__RasterOp_SourceAndDestination: number;
	const QPainter__RasterOp_SourceXorDestination: number;
	const QPainter__RasterOp_NotSourceAndNotDestination: number;
	const QPainter__RasterOp_NotSourceOrNotDestination: number;
	const QPainter__RasterOp_NotSourceXorDestination: number;
	const QPainter__RasterOp_NotSource: number;
	const QPainter__RasterOp_NotSourceAndDestination: number;
	const QPainter__RasterOp_SourceAndNotDestination: number;
	const QPainter__RasterOp_NotSourceOrDestination: number;
	const QPainter__RasterOp_SourceOrNotDestination: number;
	const QPainter__RasterOp_ClearDestination: number;
	const QPainter__RasterOp_SetDestination: number;
	const QPainter__RasterOp_NotDestination: number;
	interface QPainterPath_ITF {
		QPainterPath_PTR():QPainterPath;
	}

	class QPainterPath {
		___pointer: number;
		QPainterPath_PTR():QPainterPath;
		Pointer():number;
		SetPointer(p:number):void;
		AddEllipse(boundingRectangle:core.QRectF_ITF):void;
		AddEllipse2(x:number,y:number,width:number,height:number):void;
		AddEllipse3(center:core.QPointF_ITF,rx:number,ry:number):void;
		AddPath(path:QPainterPath_ITF):void;
		AddPolygon(polygon:QPolygonF_ITF):void;
		AddRect(rectangle:core.QRectF_ITF):void;
		AddRect2(x:number,y:number,width:number,height:number):void;
		AddRegion(region:QRegion_ITF):void;
		AddRoundedRect(rect:core.QRectF_ITF,xRadius:number,yRadius:number,mode:number):void;
		AddRoundedRect2(x:number,y:number,w:number,h:number,xRadius:number,yRadius:number,mode:number):void;
		AddText(point:core.QPointF_ITF,font:QFont_ITF,text:string):void;
		AddText2(x:number,y:number,font:QFont_ITF,text:string):void;
		AngleAtPercent(t:number):number;
		ArcMoveTo(rectangle:core.QRectF_ITF,angle:number):void;
		ArcMoveTo2(x:number,y:number,width:number,height:number,angle:number):void;
		ArcTo(rectangle:core.QRectF_ITF,startAngle:number,sweepLength:number):void;
		ArcTo2(x:number,y:number,width:number,height:number,startAngle:number,sweepLength:number):void;
		BoundingRect():core.QRectF;
		Capacity():number;
		Clear():void;
		CloseSubpath():void;
		ConnectPath(path:QPainterPath_ITF):void;
		Contains(point:core.QPointF_ITF):boolean;
		Contains2(rectangle:core.QRectF_ITF):boolean;
		Contains3(p:QPainterPath_ITF):boolean;
		ControlPointRect():core.QRectF;
		CubicTo(c1:core.QPointF_ITF,c2:core.QPointF_ITF,endPoint:core.QPointF_ITF):void;
		CubicTo2(c1X:number,c1Y:number,c2X:number,c2Y:number,endPointX:number,endPointY:number):void;
		CurrentPosition():core.QPointF;
		ElementCount():number;
		FillRule():number;
		Intersected(p:QPainterPath_ITF):QPainterPath;
		Intersects(rectangle:core.QRectF_ITF):boolean;
		Intersects2(p:QPainterPath_ITF):boolean;
		IsEmpty():boolean;
		Length():number;
		LineTo(endPoint:core.QPointF_ITF):void;
		LineTo2(x:number,y:number):void;
		MoveTo(point:core.QPointF_ITF):void;
		MoveTo2(x:number,y:number):void;
		PercentAtLength(l:number):number;
		PointAtPercent(t:number):core.QPointF;
		QuadTo(c:core.QPointF_ITF,endPoint:core.QPointF_ITF):void;
		QuadTo2(cx:number,cy:number,endPointX:number,endPointY:number):void;
		Reserve(size:number):void;
		SetElementPositionAt(index:number,x:number,y:number):void;
		SetFillRule(fillRule:number):void;
		Simplified():QPainterPath;
		SlopeAtPercent(t:number):number;
		Subtracted(p:QPainterPath_ITF):QPainterPath;
		Swap(other:QPainterPath_ITF):void;
		ToFillPolygon(matrix:QTransform_ITF):QPolygonF;
		ToFillPolygon2(matrix:QMatrix_ITF):QPolygonF;
		ToFillPolygons(matrix:QTransform_ITF):QPolygonF[];
		ToFillPolygons2(matrix:QMatrix_ITF):QPolygonF[];
		ToReversed():QPainterPath;
		ToSubpathPolygons(matrix:QTransform_ITF):QPolygonF[];
		ToSubpathPolygons2(matrix:QMatrix_ITF):QPolygonF[];
		Translate(dx:number,dy:number):void;
		Translate2(offset:core.QPointF_ITF):void;
		Translated(dx:number,dy:number):QPainterPath;
		Translated2(offset:core.QPointF_ITF):QPainterPath;
		United(p:QPainterPath_ITF):QPainterPath;
		DestroyQPainterPath():void;
	}
	function NewQPainterPathFromPointer(ptr:number):QPainterPath;
	function NewQPainterPath():QPainterPath;
	function NewQPainterPath2(startPoint:core.QPointF_ITF):QPainterPath;
	function NewQPainterPath3(path:QPainterPath_ITF):QPainterPath;
	const QPainterPath__MoveToElement: number;
	const QPainterPath__LineToElement: number;
	const QPainterPath__CurveToElement: number;
	const QPainterPath__CurveToDataElement: number;
	interface QPainterPathStroker_ITF {
		QPainterPathStroker_PTR():QPainterPathStroker;
	}

	class QPainterPathStroker {
		___pointer: number;
		QPainterPathStroker_PTR():QPainterPathStroker;
		Pointer():number;
		SetPointer(p:number):void;
		CapStyle():number;
		CreateStroke(path:QPainterPath_ITF):QPainterPath;
		CurveThreshold():number;
		DashOffset():number;
		DashPattern():number[];
		JoinStyle():number;
		MiterLimit():number;
		SetCapStyle(style:number):void;
		SetCurveThreshold(threshold:number):void;
		SetDashOffset(offset:number):void;
		SetDashPattern(style:number):void;
		SetDashPattern2(dashPattern:number[]):void;
		SetJoinStyle(style:number):void;
		SetMiterLimit(limit:number):void;
		SetWidth(width:number):void;
		Width():number;
		DestroyQPainterPathStroker():void;
	}
	function NewQPainterPathStrokerFromPointer(ptr:number):QPainterPathStroker;
	function NewQPainterPathStroker():QPainterPathStroker;
	function NewQPainterPathStroker2(pen:QPen_ITF):QPainterPathStroker;
	interface QPalette_ITF {
		QPalette_PTR():QPalette;
	}

	class QPalette {
		___pointer: number;
		QPalette_PTR():QPalette;
		Pointer():number;
		SetPointer(p:number):void;
		AlternateBase():QBrush;
		Base():QBrush;
		BrightText():QBrush;
		Brush(group:number,role:number):QBrush;
		Brush2(role:number):QBrush;
		Button():QBrush;
		ButtonText():QBrush;
		CacheKey():number;
		Color(group:number,role:number):QColor;
		Color2(role:number):QColor;
		CurrentColorGroup():number;
		Dark():QBrush;
		Highlight():QBrush;
		HighlightedText():QBrush;
		IsBrushSet(cg:number,cr:number):boolean;
		IsCopyOf(p:QPalette_ITF):boolean;
		IsEqual(cg1:number,cg2:number):boolean;
		Light():QBrush;
		Link():QBrush;
		LinkVisited():QBrush;
		Mid():QBrush;
		Midlight():QBrush;
		PlaceholderText():QBrush;
		Resolve(other:QPalette_ITF):QPalette;
		SetBrush(role:number,brush:QBrush_ITF):void;
		SetBrush2(group:number,role:number,brush:QBrush_ITF):void;
		SetColor(group:number,role:number,color:QColor_ITF):void;
		SetColor2(role:number,color:QColor_ITF):void;
		SetColorGroup(cg:number,windowText:QBrush_ITF,button:QBrush_ITF,light:QBrush_ITF,dark:QBrush_ITF,mid:QBrush_ITF,text:QBrush_ITF,bright_text:QBrush_ITF,base:QBrush_ITF,window:QBrush_ITF):void;
		SetCurrentColorGroup(cg:number):void;
		Shadow():QBrush;
		Swap(other:QPalette_ITF):void;
		Text():QBrush;
		ToolTipBase():QBrush;
		ToolTipText():QBrush;
		Window():QBrush;
		WindowText():QBrush;
		DestroyQPalette():void;
	}
	function NewQPaletteFromPointer(ptr:number):QPalette;
	function NewQPalette():QPalette;
	function NewQPalette2(button:QColor_ITF):QPalette;
	function NewQPalette3(button:number):QPalette;
	function NewQPalette4(button:QColor_ITF,window:QColor_ITF):QPalette;
	function NewQPalette5(windowText:QBrush_ITF,button:QBrush_ITF,light:QBrush_ITF,dark:QBrush_ITF,mid:QBrush_ITF,text:QBrush_ITF,bright_text:QBrush_ITF,base:QBrush_ITF,window:QBrush_ITF):QPalette;
	function NewQPalette7(p:QPalette_ITF):QPalette;
	function NewQPalette8(other:QPalette_ITF):QPalette;
	const QPalette__Active: number;
	const QPalette__Disabled: number;
	const QPalette__Inactive: number;
	const QPalette__NColorGroups: number;
	const QPalette__Current: number;
	const QPalette__All: number;
	const QPalette__Normal: number;
	const QPalette__WindowText: number;
	const QPalette__Button: number;
	const QPalette__Light: number;
	const QPalette__Midlight: number;
	const QPalette__Dark: number;
	const QPalette__Mid: number;
	const QPalette__Text: number;
	const QPalette__BrightText: number;
	const QPalette__ButtonText: number;
	const QPalette__Base: number;
	const QPalette__Window: number;
	const QPalette__Shadow: number;
	const QPalette__Highlight: number;
	const QPalette__HighlightedText: number;
	const QPalette__Link: number;
	const QPalette__LinkVisited: number;
	const QPalette__AlternateBase: number;
	const QPalette__NoRole: number;
	const QPalette__ToolTipBase: number;
	const QPalette__ToolTipText: number;
	const QPalette__PlaceholderText: number;
	const QPalette__NColorRoles: number;
	const QPalette__Foreground: number;
	const QPalette__Background: number;
	interface QPdfWriter_ITF extends QPagedPaintDevice_ITF {
		QPdfWriter_PTR():QPdfWriter;
		QObject_PTR():core.QObject;
	}

	class QPdfWriter extends QPagedPaintDevice {
		QObject_PTR():core.QObject
		___pointer: number;
		QPdfWriter_PTR():QPdfWriter;
		Pointer():number;
		SetPointer(p:number):void;
		Creator():string;
		ConnectNewPage(f:()=>boolean):void;
		DisconnectNewPage():void;
		NewPage():boolean;
		NewPageDefault():boolean;
		ConnectPaintEngine(f:()=>QPaintEngine):void;
		DisconnectPaintEngine():void;
		PaintEngine():QPaintEngine;
		PaintEngineDefault():QPaintEngine;
		PdfVersion():number;
		Resolution():number;
		SetCreator(creator:string):void;
		SetPdfVersion(version:number):void;
		SetResolution(resolution:number):void;
		SetTitle(title:string):void;
		Title():string;
		ConnectDestroyQPdfWriter(f:()=>void):void;
		DisconnectDestroyQPdfWriter():void;
		DestroyQPdfWriter():void;
		DestroyQPdfWriterDefault():void;
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
		Event(e:core.QEvent_ITF):boolean;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilter(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQPdfWriterFromPointer(ptr:number):QPdfWriter;
	function NewQPdfWriter(filename:string):QPdfWriter;
	function NewQPdfWriter2(device:core.QIODevice_ITF):QPdfWriter;
	interface QPen_ITF {
		QPen_PTR():QPen;
	}

	class QPen {
		___pointer: number;
		QPen_PTR():QPen;
		Pointer():number;
		SetPointer(p:number):void;
		Brush():QBrush;
		CapStyle():number;
		Color():QColor;
		DashOffset():number;
		DashPattern():number[];
		IsCosmetic():boolean;
		IsSolid():boolean;
		JoinStyle():number;
		MiterLimit():number;
		SetBrush(brush:QBrush_ITF):void;
		SetCapStyle(style:number):void;
		SetColor(color:QColor_ITF):void;
		SetCosmetic(cosmetic:boolean):void;
		SetDashOffset(offset:number):void;
		SetDashPattern(pattern:number[]):void;
		SetJoinStyle(style:number):void;
		SetMiterLimit(limit:number):void;
		SetStyle(style:number):void;
		SetWidth(width:number):void;
		SetWidthF(width:number):void;
		Style():number;
		Swap(other:QPen_ITF):void;
		Width():number;
		WidthF():number;
		DestroyQPen():void;
	}
	function NewQPenFromPointer(ptr:number):QPen;
	function NewQPen():QPen;
	function NewQPen2(style:number):QPen;
	function NewQPen3(color:QColor_ITF):QPen;
	function NewQPen4(brush:QBrush_ITF,width:number,style:number,cap:number,joi:number):QPen;
	function NewQPen5(pen:QPen_ITF):QPen;
	function NewQPen6(pen:QPen_ITF):QPen;
	interface QPicture_ITF extends QPaintDevice_ITF {
		QPicture_PTR():QPicture;
	}

	class QPicture extends QPaintDevice {
		___pointer: number;
		QPicture_PTR():QPicture;
		Pointer():number;
		SetPointer(p:number):void;
		BoundingRect():core.QRect;
		Data():string;
		IsNull():boolean;
		Load(fileName:string,format:string):boolean;
		Load2(dev:core.QIODevice_ITF,format:string):boolean;
		Play(painter:QPainter_ITF):boolean;
		Save(fileName:string,format:string):boolean;
		Save2(dev:core.QIODevice_ITF,format:string):boolean;
		SetBoundingRect(r:core.QRect_ITF):void;
		ConnectSetData(f:(data:string,size:number)=>void):void;
		DisconnectSetData():void;
		SetData(data:string,size:number):void;
		SetDataDefault(data:string,size:number):void;
		Size():number;
		Swap(other:QPicture_ITF):void;
		ConnectDestroyQPicture(f:()=>void):void;
		DisconnectDestroyQPicture():void;
		DestroyQPicture():void;
		DestroyQPictureDefault():void;
		PaintEngine():QPaintEngine;
		PaintEngineDefault():QPaintEngine;
	}
	function NewQPictureFromPointer(ptr:number):QPicture;
	function NewQPicture(formatVersion:number):QPicture;
	function NewQPicture2(pic:QPicture_ITF):QPicture;
	interface QPictureFormatPlugin_ITF extends core.QObject_ITF {
		QPictureFormatPlugin_PTR():QPictureFormatPlugin;
	}

	class QPictureFormatPlugin extends core.QObject {
		___pointer: number;
		QPictureFormatPlugin_PTR():QPictureFormatPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectInstallIOHandler(f:(format:string)=>boolean):void;
		DisconnectInstallIOHandler():void;
		InstallIOHandler(format:string):boolean;
		ConnectLoadPicture(f:(format:string,fileName:string,picture:QPicture)=>boolean):void;
		DisconnectLoadPicture():void;
		LoadPicture(format:string,fileName:string,picture:QPicture_ITF):boolean;
		LoadPictureDefault(format:string,fileName:string,picture:QPicture_ITF):boolean;
		ConnectSavePicture(f:(format:string,fileName:string,picture:QPicture)=>boolean):void;
		DisconnectSavePicture():void;
		SavePicture(format:string,fileName:string,picture:QPicture_ITF):boolean;
		SavePictureDefault(format:string,fileName:string,picture:QPicture_ITF):boolean;
		ConnectDestroyQPictureFormatPlugin(f:()=>void):void;
		DisconnectDestroyQPictureFormatPlugin():void;
		DestroyQPictureFormatPlugin():void;
		DestroyQPictureFormatPluginDefault():void;
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
	function NewQPictureFormatPluginFromPointer(ptr:number):QPictureFormatPlugin;
	function NewQPictureFormatPlugin(parent:core.QObject_ITF):QPictureFormatPlugin;
	interface QPictureIO_ITF {
		QPictureIO_PTR():QPictureIO;
	}

	class QPictureIO {
		___pointer: number;
		QPictureIO_PTR():QPictureIO;
		Pointer():number;
		SetPointer(p:number):void;
		Description():string;
		FileName():string;
		Format():string;
		Gamma():number;
		InputFormats():core.QByteArray[];
		IoDevice():core.QIODevice;
		OutputFormats():core.QByteArray[];
		Parameters():string;
		Picture():QPicture;
		PictureFormat(fileName:string):core.QByteArray;
		PictureFormat2(d:core.QIODevice_ITF):core.QByteArray;
		Quality():number;
		Read():boolean;
		SetDescription(description:string):void;
		SetFileName(fileName:string):void;
		SetFormat(format:string):void;
		SetGamma(gamma:number):void;
		SetIODevice(ioDevice:core.QIODevice_ITF):void;
		SetParameters(parameters:string):void;
		SetPicture(picture:QPicture_ITF):void;
		SetQuality(q:number):void;
		SetStatus(status:number):void;
		Status():number;
		Write():boolean;
		DestroyQPictureIO():void;
	}
	function NewQPictureIOFromPointer(ptr:number):QPictureIO;
	function NewQPictureIO():QPictureIO;
	function NewQPictureIO2(ioDevice:core.QIODevice_ITF,format:string):QPictureIO;
	function NewQPictureIO3(fileName:string,format:string):QPictureIO;
	function QPictureIO_InputFormats():core.QByteArray[];
	function QPictureIO_OutputFormats():core.QByteArray[];
	function QPictureIO_PictureFormat(fileName:string):core.QByteArray;
	function QPictureIO_PictureFormat2(d:core.QIODevice_ITF):core.QByteArray;
	interface QPixelFormat_ITF {
		QPixelFormat_PTR():QPixelFormat;
	}

	class QPixelFormat {
		___pointer: number;
		QPixelFormat_PTR():QPixelFormat;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPixelFormat():void;
		AlphaPosition():number;
		AlphaSize():string;
		AlphaUsage():number;
		BitsPerPixel():string;
		BlackSize():string;
		BlueSize():string;
		BrightnessSize():string;
		ByteOrder():number;
		ChannelCount():string;
		ColorModel():number;
		CyanSize():string;
		GreenSize():string;
		HueSize():string;
		LightnessSize():string;
		MagentaSize():string;
		Premultiplied():number;
		RedSize():string;
		SaturationSize():string;
		TypeInterpretation():number;
		YellowSize():string;
		YuvLayout():number;
	}
	function NewQPixelFormatFromPointer(ptr:number):QPixelFormat;
	function NewQPixelFormat():QPixelFormat;
	function NewQPixelFormat2(colorModel:number,firstSize:string,secondSize:string,thirdSize:string,fourthSize:string,fifthSize:string,alphaSize:string,alphaUsage:number,alphaPosition:number,premultiplied:number,typeInterpretation:number,byteOrder:number,subEnum:string):QPixelFormat;
	const QPixelFormat__RGB: number;
	const QPixelFormat__BGR: number;
	const QPixelFormat__Indexed: number;
	const QPixelFormat__Grayscale: number;
	const QPixelFormat__CMYK: number;
	const QPixelFormat__HSL: number;
	const QPixelFormat__HSV: number;
	const QPixelFormat__YUV: number;
	const QPixelFormat__Alpha: number;
	const QPixelFormat__UsesAlpha: number;
	const QPixelFormat__IgnoresAlpha: number;
	const QPixelFormat__AtBeginning: number;
	const QPixelFormat__AtEnd: number;
	const QPixelFormat__NotPremultiplied: number;
	const QPixelFormat__Premultiplied: number;
	const QPixelFormat__UnsignedInteger: number;
	const QPixelFormat__UnsignedShort: number;
	const QPixelFormat__UnsignedByte: number;
	const QPixelFormat__FloatingPoint: number;
	const QPixelFormat__YUV444: number;
	const QPixelFormat__YUV422: number;
	const QPixelFormat__YUV411: number;
	const QPixelFormat__YUV420P: number;
	const QPixelFormat__YUV420SP: number;
	const QPixelFormat__YV12: number;
	const QPixelFormat__UYVY: number;
	const QPixelFormat__YUYV: number;
	const QPixelFormat__NV12: number;
	const QPixelFormat__NV21: number;
	const QPixelFormat__IMC1: number;
	const QPixelFormat__IMC2: number;
	const QPixelFormat__IMC3: number;
	const QPixelFormat__IMC4: number;
	const QPixelFormat__Y8: number;
	const QPixelFormat__Y16: number;
	const QPixelFormat__LittleEndian: number;
	const QPixelFormat__BigEndian: number;
	const QPixelFormat__CurrentSystemEndian: number;
	interface QPixmap_ITF extends QPaintDevice_ITF {
		QPixmap_PTR():QPixmap;
	}

	class QPixmap extends QPaintDevice {
		___pointer: number;
		QPixmap_PTR():QPixmap;
		Pointer():number;
		SetPointer(p:number):void;
		CacheKey():number;
		ConvertFromImage(image:QImage_ITF,flags:number):boolean;
		Copy(rectangle:core.QRect_ITF):QPixmap;
		Copy2(x:number,y:number,width:number,height:number):QPixmap;
		CreateHeuristicMask(clipTight:boolean):QBitmap;
		CreateMaskFromColor(maskColor:QColor_ITF,mode:number):QBitmap;
		DefaultDepth():number;
		Detach():void;
		DevicePixelRatio():number;
		Fill(color:QColor_ITF):void;
		FromImage(image:QImage_ITF,flags:number):QPixmap;
		FromImage2(image:QImage_ITF,flags:number):QPixmap;
		FromImageReader(imageReader:QImageReader_ITF,flags:number):QPixmap;
		HasAlpha():boolean;
		HasAlphaChannel():boolean;
		IsNull():boolean;
		IsQBitmap():boolean;
		Load(fileName:string,format:string,flags:number):boolean;
		LoadFromData(data:string,l:number,format:string,flags:number):boolean;
		LoadFromData2(data:core.QByteArray_ITF,format:string,flags:number):boolean;
		Mask():QBitmap;
		Rect():core.QRect;
		Save(fileName:string,format:string,quality:number):boolean;
		Save2(device:core.QIODevice_ITF,format:string,quality:number):boolean;
		Scaled(size:core.QSize_ITF,aspectRatioMode:number,transformMode:number):QPixmap;
		Scaled2(width:number,height:number,aspectRatioMode:number,transformMode:number):QPixmap;
		ScaledToHeight(height:number,mode:number):QPixmap;
		ScaledToWidth(width:number,mode:number):QPixmap;
		Scroll(dx:number,dy:number,x:number,y:number,width:number,height:number,exposed:QRegion_ITF):void;
		Scroll2(dx:number,dy:number,rect:core.QRect_ITF,exposed:QRegion_ITF):void;
		SetDevicePixelRatio(scaleFactor:number):void;
		SetMask(mask:QBitmap_ITF):void;
		Size():core.QSize;
		Swap(other:QPixmap_ITF):void;
		ToImage():QImage;
		Transformed(transform:QTransform_ITF,mode:number):QPixmap;
		Transformed2(matrix:QMatrix_ITF,mode:number):QPixmap;
		TrueMatrix(matrix:QTransform_ITF,width:number,height:number):QTransform;
		TrueMatrix2(m:QMatrix_ITF,w:number,h:number):QMatrix;
		ConnectDestroyQPixmap(f:()=>void):void;
		DisconnectDestroyQPixmap():void;
		DestroyQPixmap():void;
		DestroyQPixmapDefault():void;
		ToVariant():core.QVariant;
		PaintEngine():QPaintEngine;
		PaintEngineDefault():QPaintEngine;
	}
	function NewQPixmapFromPointer(ptr:number):QPixmap;
	function NewQPixmap():QPixmap;
	function NewQPixmap2(size:core.QSize_ITF):QPixmap;
	function NewQPixmap3(fileName:string,format:string,flags:number):QPixmap;
	function NewQPixmap5(pixmap:QPixmap_ITF):QPixmap;
	function QPixmap_DefaultDepth():number;
	function QPixmap_FromImage(image:QImage_ITF,flags:number):QPixmap;
	function QPixmap_FromImage2(image:QImage_ITF,flags:number):QPixmap;
	function QPixmap_FromImageReader(imageReader:QImageReader_ITF,flags:number):QPixmap;
	function QPixmap_TrueMatrix(matrix:QTransform_ITF,width:number,height:number):QTransform;
	function QPixmap_TrueMatrix2(m:QMatrix_ITF,w:number,h:number):QMatrix;
	interface QPixmapCache_ITF {
		QPixmapCache_PTR():QPixmapCache;
	}

	class QPixmapCache {
		___pointer: number;
		QPixmapCache_PTR():QPixmapCache;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPixmapCache():void;
		CacheLimit():number;
		Clear():void;
		Find3(key:string,pixmap:QPixmap_ITF):boolean;
		Insert(key:string,pixmap:QPixmap_ITF):boolean;
		Remove(key:string):void;
		SetCacheLimit(n:number):void;
	}
	function NewQPixmapCacheFromPointer(ptr:number):QPixmapCache;
	function QPixmapCache_CacheLimit():number;
	function QPixmapCache_Clear():void;
	function QPixmapCache_Find3(key:string,pixmap:QPixmap_ITF):boolean;
	function QPixmapCache_Insert(key:string,pixmap:QPixmap_ITF):boolean;
	function QPixmapCache_Remove(key:string):void;
	function QPixmapCache_SetCacheLimit(n:number):void;
	interface QPlatformDragQtResponse_ITF extends QPlatformDropQtResponse_ITF {
		QPlatformDragQtResponse_PTR():QPlatformDragQtResponse;
	}

	class QPlatformDragQtResponse extends QPlatformDropQtResponse {
		___pointer: number;
		QPlatformDragQtResponse_PTR():QPlatformDragQtResponse;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPlatformDragQtResponse():void;
	}
	interface QPlatformDropQtResponse_ITF {
		QPlatformDropQtResponse_PTR():QPlatformDropQtResponse;
	}

	class QPlatformDropQtResponse {
		___pointer: number;
		QPlatformDropQtResponse_PTR():QPlatformDropQtResponse;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPlatformDropQtResponse():void;
	}
	interface QPlatformIntegrationPlugin_ITF extends core.QObject_ITF {
		QPlatformIntegrationPlugin_PTR():QPlatformIntegrationPlugin;
	}

	class QPlatformIntegrationPlugin extends core.QObject {
		___pointer: number;
		QPlatformIntegrationPlugin_PTR():QPlatformIntegrationPlugin;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QPlatformMenu_ITF extends core.QObject_ITF {
		QPlatformMenu_PTR():QPlatformMenu;
	}

	class QPlatformMenu extends core.QObject {
		___pointer: number;
		QPlatformMenu_PTR():QPlatformMenu;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QPlatformMenuBar_ITF extends core.QObject_ITF {
		QPlatformMenuBar_PTR():QPlatformMenuBar;
	}

	class QPlatformMenuBar extends core.QObject {
		___pointer: number;
		QPlatformMenuBar_PTR():QPlatformMenuBar;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QPlatformMenuItem_ITF extends core.QObject_ITF {
		QPlatformMenuItem_PTR():QPlatformMenuItem;
	}

	class QPlatformMenuItem extends core.QObject {
		___pointer: number;
		QPlatformMenuItem_PTR():QPlatformMenuItem;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QPlatformOffscreenSurface_ITF {
		QPlatformOffscreenSurface_PTR():QPlatformOffscreenSurface;
	}

	class QPlatformOffscreenSurface {
		___pointer: number;
		QPlatformOffscreenSurface_PTR():QPlatformOffscreenSurface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPlatformOffscreenSurface():void;
	}
	interface QPlatformSessionManager_ITF {
		QPlatformSessionManager_PTR():QPlatformSessionManager;
	}

	class QPlatformSessionManager {
		___pointer: number;
		QPlatformSessionManager_PTR():QPlatformSessionManager;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPlatformSessionManager():void;
	}
	interface QPlatformSurfaceEvent_ITF extends core.QEvent_ITF {
		QPlatformSurfaceEvent_PTR():QPlatformSurfaceEvent;
	}

	class QPlatformSurfaceEvent extends core.QEvent {
		___pointer: number;
		QPlatformSurfaceEvent_PTR():QPlatformSurfaceEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPlatformSurfaceEvent():void;
		SurfaceEventType():number;
	}
	function NewQPlatformSurfaceEventFromPointer(ptr:number):QPlatformSurfaceEvent;
	function NewQPlatformSurfaceEvent(surfaceEventType:number):QPlatformSurfaceEvent;
	const QPlatformSurfaceEvent__SurfaceCreated: number;
	const QPlatformSurfaceEvent__SurfaceAboutToBeDestroyed: number;
	interface QPlatformTextureList_ITF extends core.QObject_ITF {
		QPlatformTextureList_PTR():QPlatformTextureList;
	}

	class QPlatformTextureList extends core.QObject {
		___pointer: number;
		QPlatformTextureList_PTR():QPlatformTextureList;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QPointingDeviceUniqueId_ITF {
		QPointingDeviceUniqueId_PTR():QPointingDeviceUniqueId;
	}

	class QPointingDeviceUniqueId {
		___pointer: number;
		QPointingDeviceUniqueId_PTR():QPointingDeviceUniqueId;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPointingDeviceUniqueId():void;
		FromNumericId(id:number):QPointingDeviceUniqueId;
		IsValid():boolean;
		NumericId():number;
	}
	function NewQPointingDeviceUniqueIdFromPointer(ptr:number):QPointingDeviceUniqueId;
	function NewQPointingDeviceUniqueId():QPointingDeviceUniqueId;
	function QPointingDeviceUniqueId_FromNumericId(id:number):QPointingDeviceUniqueId;
	interface QPolygon_ITF extends core.QVector_ITF {
		QPolygon_PTR():QPolygon;
	}

	class QPolygon extends core.QVector {
		___pointer: number;
		QPolygon_PTR():QPolygon;
		Pointer():number;
		SetPointer(p:number):void;
		BoundingRect():core.QRect;
		ContainsPoint(point:core.QPoint_ITF,fillRule:number):boolean;
		Intersected(r:QPolygon_ITF):QPolygon;
		Intersects(p:QPolygon_ITF):boolean;
		Point(index:number,x:number,y:number):void;
		Point2(index:number):core.QPoint;
		PutPoints(index:number,nPoints:number,fromPolygon:QPolygon_ITF,fromIndex:number):void;
		SetPoint(index:number,x:number,y:number):void;
		SetPoint2(index:number,point:core.QPoint_ITF):void;
		SetPoints(nPoints:number,points:number):void;
		Subtracted(r:QPolygon_ITF):QPolygon;
		Swap(other:QPolygon_ITF):void;
		Translate(dx:number,dy:number):void;
		Translate2(offset:core.QPoint_ITF):void;
		Translated(dx:number,dy:number):QPolygon;
		Translated2(offset:core.QPoint_ITF):QPolygon;
		United(r:QPolygon_ITF):QPolygon;
		DestroyQPolygon():void;
	}
	function NewQPolygonFromPointer(ptr:number):QPolygon;
	function NewQPolygon():QPolygon;
	function NewQPolygon2(size:number):QPolygon;
	function NewQPolygon3(points:core.QPoint[]):QPolygon;
	function NewQPolygon5(rectangle:core.QRect_ITF,closed:boolean):QPolygon;
	interface QPolygonF_ITF extends core.QVector_ITF {
		QPolygonF_PTR():QPolygonF;
	}

	class QPolygonF extends core.QVector {
		___pointer: number;
		QPolygonF_PTR():QPolygonF;
		Pointer():number;
		SetPointer(p:number):void;
		BoundingRect():core.QRectF;
		ContainsPoint(point:core.QPointF_ITF,fillRule:number):boolean;
		Intersected(r:QPolygonF_ITF):QPolygonF;
		Intersects(p:QPolygonF_ITF):boolean;
		IsClosed():boolean;
		Subtracted(r:QPolygonF_ITF):QPolygonF;
		Swap(other:QPolygonF_ITF):void;
		ToPolygon():QPolygon;
		Translate(offset:core.QPointF_ITF):void;
		Translate2(dx:number,dy:number):void;
		Translated(offset:core.QPointF_ITF):QPolygonF;
		Translated2(dx:number,dy:number):QPolygonF;
		United(r:QPolygonF_ITF):QPolygonF;
		DestroyQPolygonF():void;
	}
	function NewQPolygonFFromPointer(ptr:number):QPolygonF;
	function NewQPolygonF():QPolygonF;
	function NewQPolygonF2(size:number):QPolygonF;
	function NewQPolygonF3(points:core.QPointF[]):QPolygonF;
	function NewQPolygonF5(rectangle:core.QRectF_ITF):QPolygonF;
	function NewQPolygonF6(polygon:QPolygon_ITF):QPolygonF;
	function NewQPolygonF7(polygon:QPolygonF_ITF):QPolygonF;
	interface QQuaternion_ITF {
		QQuaternion_PTR():QQuaternion;
	}

	class QQuaternion {
		___pointer: number;
		QQuaternion_PTR():QQuaternion;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQQuaternion():void;
		Conjugated():QQuaternion;
		DotProduct(q1:QQuaternion_ITF,q2:QQuaternion_ITF):number;
		FromAxes(xAxis:QVector3D_ITF,yAxis:QVector3D_ITF,zAxis:QVector3D_ITF):QQuaternion;
		FromAxisAndAngle(axis:QVector3D_ITF,angle:number):QQuaternion;
		FromAxisAndAngle2(x:number,y:number,z:number,angle:number):QQuaternion;
		FromDirection(direction:QVector3D_ITF,up:QVector3D_ITF):QQuaternion;
		FromEulerAngles(pitch:number,yaw:number,roll:number):QQuaternion;
		FromEulerAngles2(eulerAngles:QVector3D_ITF):QQuaternion;
		GetAxes(xAxis:QVector3D_ITF,yAxis:QVector3D_ITF,zAxis:QVector3D_ITF):void;
		GetAxisAndAngle(x:number,y:number,z:number,angle:number):void;
		GetAxisAndAngle2(axis:QVector3D_ITF,angle:number):void;
		GetEulerAngles(pitch:number,yaw:number,roll:number):void;
		Inverted():QQuaternion;
		IsIdentity():boolean;
		IsNull():boolean;
		Length():number;
		LengthSquared():number;
		Nlerp(q1:QQuaternion_ITF,q2:QQuaternion_ITF,t:number):QQuaternion;
		Normalize():void;
		Normalized():QQuaternion;
		RotatedVector(vector:QVector3D_ITF):QVector3D;
		RotationTo(from:QVector3D_ITF,to:QVector3D_ITF):QQuaternion;
		Scalar():number;
		SetScalar(scalar:number):void;
		SetVector(vector:QVector3D_ITF):void;
		SetVector2(x:number,y:number,z:number):void;
		SetX(x:number):void;
		SetY(y:number):void;
		SetZ(z:number):void;
		Slerp(q1:QQuaternion_ITF,q2:QQuaternion_ITF,t:number):QQuaternion;
		ToEulerAngles():QVector3D;
		ToVector4D():QVector4D;
		Vector():QVector3D;
		X():number;
		Y():number;
		Z():number;
	}
	function NewQQuaternionFromPointer(ptr:number):QQuaternion;
	function NewQQuaternion():QQuaternion;
	function NewQQuaternion3(scalar:number,xpos:number,ypos:number,zpos:number):QQuaternion;
	function NewQQuaternion4(scalar:number,vector:QVector3D_ITF):QQuaternion;
	function NewQQuaternion5(vector:QVector4D_ITF):QQuaternion;
	function QQuaternion_DotProduct(q1:QQuaternion_ITF,q2:QQuaternion_ITF):number;
	function QQuaternion_FromAxes(xAxis:QVector3D_ITF,yAxis:QVector3D_ITF,zAxis:QVector3D_ITF):QQuaternion;
	function QQuaternion_FromAxisAndAngle(axis:QVector3D_ITF,angle:number):QQuaternion;
	function QQuaternion_FromAxisAndAngle2(x:number,y:number,z:number,angle:number):QQuaternion;
	function QQuaternion_FromDirection(direction:QVector3D_ITF,up:QVector3D_ITF):QQuaternion;
	function QQuaternion_FromEulerAngles(pitch:number,yaw:number,roll:number):QQuaternion;
	function QQuaternion_FromEulerAngles2(eulerAngles:QVector3D_ITF):QQuaternion;
	function QQuaternion_Nlerp(q1:QQuaternion_ITF,q2:QQuaternion_ITF,t:number):QQuaternion;
	function QQuaternion_RotationTo(from:QVector3D_ITF,to:QVector3D_ITF):QQuaternion;
	function QQuaternion_Slerp(q1:QQuaternion_ITF,q2:QQuaternion_ITF,t:number):QQuaternion;
	interface QRadialGradient_ITF extends QGradient_ITF {
		QRadialGradient_PTR():QRadialGradient;
	}

	class QRadialGradient extends QGradient {
		___pointer: number;
		QRadialGradient_PTR():QRadialGradient;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRadialGradient():void;
		Center():core.QPointF;
		CenterRadius():number;
		FocalPoint():core.QPointF;
		FocalRadius():number;
		Radius():number;
		SetCenter(center:core.QPointF_ITF):void;
		SetCenter2(x:number,y:number):void;
		SetCenterRadius(radius:number):void;
		SetFocalPoint(focalPoint:core.QPointF_ITF):void;
		SetFocalPoint2(x:number,y:number):void;
		SetFocalRadius(radius:number):void;
		SetRadius(radius:number):void;
	}
	function NewQRadialGradientFromPointer(ptr:number):QRadialGradient;
	function NewQRadialGradient():QRadialGradient;
	function NewQRadialGradient2(center:core.QPointF_ITF,radius:number,focalPoint:core.QPointF_ITF):QRadialGradient;
	function NewQRadialGradient3(cx:number,cy:number,radius:number,fx:number,fy:number):QRadialGradient;
	function NewQRadialGradient4(center:core.QPointF_ITF,radius:number):QRadialGradient;
	function NewQRadialGradient5(cx:number,cy:number,radius:number):QRadialGradient;
	function NewQRadialGradient6(center:core.QPointF_ITF,centerRadius:number,focalPoint:core.QPointF_ITF,focalRadius:number):QRadialGradient;
	function NewQRadialGradient7(cx:number,cy:number,centerRadius:number,fx:number,fy:number,focalRadius:number):QRadialGradient;
	interface QRasterPaintEngine_ITF extends QPaintEngine_ITF {
		QRasterPaintEngine_PTR():QRasterPaintEngine;
	}

	class QRasterPaintEngine extends QPaintEngine {
		___pointer: number;
		QRasterPaintEngine_PTR():QRasterPaintEngine;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QRasterWindow_ITF extends QPaintDeviceWindow_ITF {
		QRasterWindow_PTR():QRasterWindow;
	}

	class QRasterWindow extends QPaintDeviceWindow {
		___pointer: number;
		QRasterWindow_PTR():QRasterWindow;
		Pointer():number;
		SetPointer(p:number):void;
	}
	function NewQRasterWindowFromPointer(ptr:number):QRasterWindow;
	function NewQRasterWindow(parent:QWindow_ITF):QRasterWindow;
	interface QRawFont_ITF {
		QRawFont_PTR():QRawFont;
	}

	class QRawFont {
		___pointer: number;
		QRawFont_PTR():QRawFont;
		Pointer():number;
		SetPointer(p:number):void;
		AdvancesForGlyphIndexes(glyphIndexes:number[],layoutFlags:number):core.QPointF[];
		AdvancesForGlyphIndexes2(glyphIndexes:number[]):core.QPointF[];
		AdvancesForGlyphIndexes3(glyphIndexes:number,advances:core.QPointF_ITF,numGlyphs:number):boolean;
		AdvancesForGlyphIndexes4(glyphIndexes:number,advances:core.QPointF_ITF,numGlyphs:number,layoutFlags:number):boolean;
		AlphaMapForGlyph(glyphIndex:number,antialiasingType:number,transform:QTransform_ITF):QImage;
		Ascent():number;
		AverageCharWidth():number;
		BoundingRect(glyphIndex:number):core.QRectF;
		CapHeight():number;
		Descent():number;
		FamilyName():string;
		FontTable(tagName:string):core.QByteArray;
		FromFont(font:QFont_ITF,writingSystem:number):QRawFont;
		GlyphIndexesForChars(chars:core.QChar_ITF,numChars:number,glyphIndexes:number,numGlyphs:number):boolean;
		GlyphIndexesForString(text:string):number[];
		HintingPreference():number;
		IsValid():boolean;
		Leading():number;
		LineThickness():number;
		LoadFromData(fontData:core.QByteArray_ITF,pixelSize:number,hintingPreference:number):void;
		LoadFromFile(fileName:string,pixelSize:number,hintingPreference:number):void;
		MaxCharWidth():number;
		PathForGlyph(glyphIndex:number):QPainterPath;
		PixelSize():number;
		SetPixelSize(pixelSize:number):void;
		Style():number;
		StyleName():string;
		SupportedWritingSystems():number;
		SupportsCharacter(character:core.QChar_ITF):boolean;
		SupportsCharacter2(ucs4:number):boolean;
		Swap(other:QRawFont_ITF):void;
		UnderlinePosition():number;
		UnitsPerEm():number;
		Weight():number;
		XHeight():number;
		DestroyQRawFont():void;
	}
	function NewQRawFontFromPointer(ptr:number):QRawFont;
	function NewQRawFont():QRawFont;
	function NewQRawFont2(fileName:string,pixelSize:number,hintingPreference:number):QRawFont;
	function NewQRawFont3(fontData:core.QByteArray_ITF,pixelSize:number,hintingPreference:number):QRawFont;
	function NewQRawFont4(other:QRawFont_ITF):QRawFont;
	function QRawFont_FromFont(font:QFont_ITF,writingSystem:number):QRawFont;
	const QRawFont__PixelAntialiasing: number;
	const QRawFont__SubPixelAntialiasing: number;
	const QRawFont__SeparateAdvances: number;
	const QRawFont__KernedAdvances: number;
	const QRawFont__UseDesignMetrics: number;
	interface QRegExpValidator_ITF extends QValidator_ITF {
		QRegExpValidator_PTR():QRegExpValidator;
	}

	class QRegExpValidator extends QValidator {
		___pointer: number;
		QRegExpValidator_PTR():QRegExpValidator;
		Pointer():number;
		SetPointer(p:number):void;
		RegExp():core.QRegExp;
		ConnectRegExpChanged(f:(regExp:core.QRegExp)=>void):void;
		DisconnectRegExpChanged():void;
		RegExpChanged(regExp:core.QRegExp_ITF):void;
		SetRegExp(rx:core.QRegExp_ITF):void;
		ConnectValidate(f:(input:string,pos:number)=>number):void;
		DisconnectValidate():void;
		Validate(input:string,pos:number):number;
		ValidateDefault(input:string,pos:number):number;
		ConnectDestroyQRegExpValidator(f:()=>void):void;
		DisconnectDestroyQRegExpValidator():void;
		DestroyQRegExpValidator():void;
		DestroyQRegExpValidatorDefault():void;
	}
	function NewQRegExpValidatorFromPointer(ptr:number):QRegExpValidator;
	function NewQRegExpValidator(parent:core.QObject_ITF):QRegExpValidator;
	function NewQRegExpValidator2(rx:core.QRegExp_ITF,parent:core.QObject_ITF):QRegExpValidator;
	interface QRegion_ITF {
		QRegion_PTR():QRegion;
	}

	class QRegion {
		___pointer: number;
		QRegion_PTR():QRegion;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRegion():void;
		BoundingRect():core.QRect;
		Contains(p:core.QPoint_ITF):boolean;
		Contains2(r:core.QRect_ITF):boolean;
		Intersected(r:QRegion_ITF):QRegion;
		Intersected2(rect:core.QRect_ITF):QRegion;
		Intersects(region:QRegion_ITF):boolean;
		Intersects2(rect:core.QRect_ITF):boolean;
		IsEmpty():boolean;
		IsNull():boolean;
		RectCount():number;
		SetRects(rects:core.QRect_ITF,number:number):void;
		Subtracted(r:QRegion_ITF):QRegion;
		Swap(other:QRegion_ITF):void;
		Translate(dx:number,dy:number):void;
		Translate2(point:core.QPoint_ITF):void;
		Translated(dx:number,dy:number):QRegion;
		Translated2(p:core.QPoint_ITF):QRegion;
		United(r:QRegion_ITF):QRegion;
		United2(rect:core.QRect_ITF):QRegion;
		Xored(r:QRegion_ITF):QRegion;
	}
	function NewQRegionFromPointer(ptr:number):QRegion;
	function NewQRegion():QRegion;
	function NewQRegion2(x:number,y:number,w:number,h:number,t:number):QRegion;
	function NewQRegion3(r:core.QRect_ITF,t:number):QRegion;
	function NewQRegion4(a:QPolygon_ITF,fillRule:number):QRegion;
	function NewQRegion5(r:QRegion_ITF):QRegion;
	function NewQRegion6(other:QRegion_ITF):QRegion;
	function NewQRegion7(bm:QBitmap_ITF):QRegion;
	const QRegion__Rectangle: number;
	const QRegion__Ellipse: number;
	interface QRegularExpressionValidator_ITF extends QValidator_ITF {
		QRegularExpressionValidator_PTR():QRegularExpressionValidator;
	}

	class QRegularExpressionValidator extends QValidator {
		___pointer: number;
		QRegularExpressionValidator_PTR():QRegularExpressionValidator;
		Pointer():number;
		SetPointer(p:number):void;
		RegularExpression():core.QRegularExpression;
		ConnectRegularExpressionChanged(f:(re:core.QRegularExpression)=>void):void;
		DisconnectRegularExpressionChanged():void;
		RegularExpressionChanged(re:core.QRegularExpression_ITF):void;
		ConnectSetRegularExpression(f:(re:core.QRegularExpression)=>void):void;
		DisconnectSetRegularExpression():void;
		SetRegularExpression(re:core.QRegularExpression_ITF):void;
		SetRegularExpressionDefault(re:core.QRegularExpression_ITF):void;
		ConnectValidate(f:(input:string,pos:number)=>number):void;
		DisconnectValidate():void;
		Validate(input:string,pos:number):number;
		ValidateDefault(input:string,pos:number):number;
		ConnectDestroyQRegularExpressionValidator(f:()=>void):void;
		DisconnectDestroyQRegularExpressionValidator():void;
		DestroyQRegularExpressionValidator():void;
		DestroyQRegularExpressionValidatorDefault():void;
	}
	function NewQRegularExpressionValidatorFromPointer(ptr:number):QRegularExpressionValidator;
	function NewQRegularExpressionValidator(parent:core.QObject_ITF):QRegularExpressionValidator;
	function NewQRegularExpressionValidator2(re:core.QRegularExpression_ITF,parent:core.QObject_ITF):QRegularExpressionValidator;
	interface QResizeEvent_ITF extends core.QEvent_ITF {
		QResizeEvent_PTR():QResizeEvent;
	}

	class QResizeEvent extends core.QEvent {
		___pointer: number;
		QResizeEvent_PTR():QResizeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQResizeEvent():void;
		OldSize():core.QSize;
		Size():core.QSize;
	}
	function NewQResizeEventFromPointer(ptr:number):QResizeEvent;
	function NewQResizeEvent(size:core.QSize_ITF,oldSize:core.QSize_ITF):QResizeEvent;
	interface QRgba64_ITF {
		QRgba64_PTR():QRgba64;
	}

	class QRgba64 {
		___pointer: number;
		QRgba64_PTR():QRgba64;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRgba64():void;
		Alpha():number;
		Alpha8():string;
		Blue():number;
		Blue8():string;
		Green():number;
		Green8():string;
		IsOpaque():boolean;
		IsTransparent():boolean;
		Red():number;
		Red8():string;
		SetAlpha(alpha:number):void;
		SetBlue(blue:number):void;
		SetGreen(green:number):void;
		SetRed(red:number):void;
		ToArgb32():number;
		ToRgb16():number;
	}
	function NewQRgba64FromPointer(ptr:number):QRgba64;
	interface QScreen_ITF extends core.QObject_ITF {
		QScreen_PTR():QScreen;
	}

	class QScreen extends core.QObject {
		___pointer: number;
		QScreen_PTR():QScreen;
		Pointer():number;
		SetPointer(p:number):void;
		AngleBetween(a:number,b:number):number;
		AvailableGeometry():core.QRect;
		ConnectAvailableGeometryChanged(f:(geometry:core.QRect)=>void):void;
		DisconnectAvailableGeometryChanged():void;
		AvailableGeometryChanged(geometry:core.QRect_ITF):void;
		AvailableSize():core.QSize;
		AvailableVirtualGeometry():core.QRect;
		AvailableVirtualSize():core.QSize;
		Depth():number;
		DevicePixelRatio():number;
		Geometry():core.QRect;
		ConnectGeometryChanged(f:(geometry:core.QRect)=>void):void;
		DisconnectGeometryChanged():void;
		GeometryChanged(geometry:core.QRect_ITF):void;
		GrabWindow(window:number,x:number,y:number,width:number,height:number):QPixmap;
		IsLandscape(o:number):boolean;
		IsPortrait(o:number):boolean;
		LogicalDotsPerInch():number;
		ConnectLogicalDotsPerInchChanged(f:(dpi:number)=>void):void;
		DisconnectLogicalDotsPerInchChanged():void;
		LogicalDotsPerInchChanged(dpi:number):void;
		LogicalDotsPerInchX():number;
		LogicalDotsPerInchY():number;
		Manufacturer():string;
		MapBetween(a:number,b:number,rect:core.QRect_ITF):core.QRect;
		Model():string;
		Name():string;
		NativeOrientation():number;
		Orientation():number;
		ConnectOrientationChanged(f:(orientation:number)=>void):void;
		DisconnectOrientationChanged():void;
		OrientationChanged(orientation:number):void;
		OrientationUpdateMask():number;
		PhysicalDotsPerInch():number;
		ConnectPhysicalDotsPerInchChanged(f:(dpi:number)=>void):void;
		DisconnectPhysicalDotsPerInchChanged():void;
		PhysicalDotsPerInchChanged(dpi:number):void;
		PhysicalDotsPerInchX():number;
		PhysicalDotsPerInchY():number;
		PhysicalSize():core.QSizeF;
		ConnectPhysicalSizeChanged(f:(size:core.QSizeF)=>void):void;
		DisconnectPhysicalSizeChanged():void;
		PhysicalSizeChanged(size:core.QSizeF_ITF):void;
		PrimaryOrientation():number;
		ConnectPrimaryOrientationChanged(f:(orientation:number)=>void):void;
		DisconnectPrimaryOrientationChanged():void;
		PrimaryOrientationChanged(orientation:number):void;
		RefreshRate():number;
		ConnectRefreshRateChanged(f:(refreshRate:number)=>void):void;
		DisconnectRefreshRateChanged():void;
		RefreshRateChanged(refreshRate:number):void;
		SerialNumber():string;
		SetOrientationUpdateMask(mask:number):void;
		Size():core.QSize;
		TransformBetween(a:number,b:number,target:core.QRect_ITF):QTransform;
		VirtualGeometry():core.QRect;
		ConnectVirtualGeometryChanged(f:(rect:core.QRect)=>void):void;
		DisconnectVirtualGeometryChanged():void;
		VirtualGeometryChanged(rect:core.QRect_ITF):void;
		VirtualSiblings():QScreen[];
		VirtualSize():core.QSize;
		ConnectDestroyQScreen(f:()=>void):void;
		DisconnectDestroyQScreen():void;
		DestroyQScreen():void;
		DestroyQScreenDefault():void;
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
	function NewQScreenFromPointer(ptr:number):QScreen;
	interface QScreenOrientationChangeEvent_ITF extends core.QEvent_ITF {
		QScreenOrientationChangeEvent_PTR():QScreenOrientationChangeEvent;
	}

	class QScreenOrientationChangeEvent extends core.QEvent {
		___pointer: number;
		QScreenOrientationChangeEvent_PTR():QScreenOrientationChangeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		Orientation():number;
		Screen():QScreen;
		ConnectDestroyQScreenOrientationChangeEvent(f:()=>void):void;
		DisconnectDestroyQScreenOrientationChangeEvent():void;
		DestroyQScreenOrientationChangeEvent():void;
		DestroyQScreenOrientationChangeEventDefault():void;
	}
	function NewQScreenOrientationChangeEventFromPointer(ptr:number):QScreenOrientationChangeEvent;
	function NewQScreenOrientationChangeEvent(screen:QScreen_ITF,screenOrientation:number):QScreenOrientationChangeEvent;
	interface QScrollEvent_ITF extends core.QEvent_ITF {
		QScrollEvent_PTR():QScrollEvent;
	}

	class QScrollEvent extends core.QEvent {
		___pointer: number;
		QScrollEvent_PTR():QScrollEvent;
		Pointer():number;
		SetPointer(p:number):void;
		ContentPos():core.QPointF;
		OvershootDistance():core.QPointF;
		ScrollState():number;
		ConnectDestroyQScrollEvent(f:()=>void):void;
		DisconnectDestroyQScrollEvent():void;
		DestroyQScrollEvent():void;
		DestroyQScrollEventDefault():void;
	}
	function NewQScrollEventFromPointer(ptr:number):QScrollEvent;
	function NewQScrollEvent(contentPos:core.QPointF_ITF,overshootDistance:core.QPointF_ITF,scrollState:number):QScrollEvent;
	const QScrollEvent__ScrollStarted: number;
	const QScrollEvent__ScrollUpdated: number;
	const QScrollEvent__ScrollFinished: number;
	interface QScrollPrepareEvent_ITF extends core.QEvent_ITF {
		QScrollPrepareEvent_PTR():QScrollPrepareEvent;
	}

	class QScrollPrepareEvent extends core.QEvent {
		___pointer: number;
		QScrollPrepareEvent_PTR():QScrollPrepareEvent;
		Pointer():number;
		SetPointer(p:number):void;
		ContentPos():core.QPointF;
		ContentPosRange():core.QRectF;
		SetContentPos(pos:core.QPointF_ITF):void;
		SetContentPosRange(rect:core.QRectF_ITF):void;
		SetViewportSize(size:core.QSizeF_ITF):void;
		StartPos():core.QPointF;
		ViewportSize():core.QSizeF;
		ConnectDestroyQScrollPrepareEvent(f:()=>void):void;
		DisconnectDestroyQScrollPrepareEvent():void;
		DestroyQScrollPrepareEvent():void;
		DestroyQScrollPrepareEventDefault():void;
	}
	function NewQScrollPrepareEventFromPointer(ptr:number):QScrollPrepareEvent;
	function NewQScrollPrepareEvent(startPos:core.QPointF_ITF):QScrollPrepareEvent;
	interface QSessionManager_ITF extends core.QObject_ITF {
		QSessionManager_PTR():QSessionManager;
	}

	class QSessionManager extends core.QObject {
		___pointer: number;
		QSessionManager_PTR():QSessionManager;
		Pointer():number;
		SetPointer(p:number):void;
		AllowsErrorInteraction():boolean;
		AllowsInteraction():boolean;
		Cancel():void;
		DiscardCommand():string[];
		IsPhase2():boolean;
		Release():void;
		RequestPhase2():void;
		RestartCommand():string[];
		RestartHint():number;
		SessionId():string;
		SessionKey():string;
		SetDiscardCommand(command:string[]):void;
		SetManagerProperty(name:string,value:string[]):void;
		SetManagerProperty2(name:string,value:string):void;
		SetRestartCommand(command:string[]):void;
		SetRestartHint(hint:number):void;
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
	function NewQSessionManagerFromPointer(ptr:number):QSessionManager;
	const QSessionManager__RestartIfRunning: number;
	const QSessionManager__RestartAnyway: number;
	const QSessionManager__RestartImmediately: number;
	const QSessionManager__RestartNever: number;
	interface QShortcutEvent_ITF extends core.QEvent_ITF {
		QShortcutEvent_PTR():QShortcutEvent;
	}

	class QShortcutEvent extends core.QEvent {
		___pointer: number;
		QShortcutEvent_PTR():QShortcutEvent;
		Pointer():number;
		SetPointer(p:number):void;
		IsAmbiguous():boolean;
		Key():QKeySequence;
		ShortcutId():number;
		ConnectDestroyQShortcutEvent(f:()=>void):void;
		DisconnectDestroyQShortcutEvent():void;
		DestroyQShortcutEvent():void;
		DestroyQShortcutEventDefault():void;
	}
	function NewQShortcutEventFromPointer(ptr:number):QShortcutEvent;
	function NewQShortcutEvent(key:QKeySequence_ITF,id:number,ambiguous:boolean):QShortcutEvent;
	interface QShowEvent_ITF extends core.QEvent_ITF {
		QShowEvent_PTR():QShowEvent;
	}

	class QShowEvent extends core.QEvent {
		___pointer: number;
		QShowEvent_PTR():QShowEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQShowEvent():void;
	}
	function NewQShowEventFromPointer(ptr:number):QShowEvent;
	function NewQShowEvent():QShowEvent;
	interface QStandardItem_ITF {
		QStandardItem_PTR():QStandardItem;
	}

	class QStandardItem {
		___pointer: number;
		QStandardItem_PTR():QStandardItem;
		Pointer():number;
		SetPointer(p:number):void;
		AccessibleDescription():string;
		AccessibleText():string;
		AppendColumn(items:QStandardItem[]):void;
		AppendRow(items:QStandardItem[]):void;
		AppendRow2(item:QStandardItem_ITF):void;
		AppendRows(items:QStandardItem[]):void;
		Background():QBrush;
		CheckState():number;
		Child(row:number,column:number):QStandardItem;
		ClearData():void;
		ConnectClone(f:()=>QStandardItem):void;
		DisconnectClone():void;
		Clone():QStandardItem;
		CloneDefault():QStandardItem;
		Column():number;
		ColumnCount():number;
		ConnectData(f:(role:number)=>core.QVariant):void;
		DisconnectData():void;
		Data(role:number):core.QVariant;
		DataDefault(role:number):core.QVariant;
		EmitDataChanged():void;
		Flags():number;
		Font():QFont;
		Foreground():QBrush;
		HasChildren():boolean;
		Icon():QIcon;
		Index():core.QModelIndex;
		InsertColumn(column:number,items:QStandardItem[]):void;
		InsertColumns(column:number,count:number):void;
		InsertRow(row:number,items:QStandardItem[]):void;
		InsertRow2(row:number,item:QStandardItem_ITF):void;
		InsertRows(row:number,items:QStandardItem[]):void;
		InsertRows2(row:number,count:number):void;
		IsAutoTristate():boolean;
		IsCheckable():boolean;
		IsDragEnabled():boolean;
		IsDropEnabled():boolean;
		IsEditable():boolean;
		IsEnabled():boolean;
		IsSelectable():boolean;
		IsUserTristate():boolean;
		Model():QStandardItemModel;
		Parent():QStandardItem;
		ConnectRead(f:(i:core.QDataStream)=>void):void;
		DisconnectRead():void;
		Read(i:core.QDataStream_ITF):void;
		ReadDefault(i:core.QDataStream_ITF):void;
		RemoveColumn(column:number):void;
		RemoveColumns(column:number,count:number):void;
		RemoveRow(row:number):void;
		RemoveRows(row:number,count:number):void;
		Row():number;
		RowCount():number;
		SetAccessibleDescription(accessibleDescription:string):void;
		SetAccessibleText(accessibleText:string):void;
		SetAutoTristate(tristate:boolean):void;
		SetBackground(brush:QBrush_ITF):void;
		SetCheckState(state:number):void;
		SetCheckable(checkable:boolean):void;
		SetChild(row:number,column:number,item:QStandardItem_ITF):void;
		SetChild2(row:number,item:QStandardItem_ITF):void;
		SetColumnCount(columns:number):void;
		ConnectSetData(f:(value:core.QVariant,role:number)=>void):void;
		DisconnectSetData():void;
		SetData(value:core.QVariant_ITF,role:number):void;
		SetDataDefault(value:core.QVariant_ITF,role:number):void;
		SetDragEnabled(dragEnabled:boolean):void;
		SetDropEnabled(dropEnabled:boolean):void;
		SetEditable(editable:boolean):void;
		SetEnabled(enabled:boolean):void;
		SetFlags(flags:number):void;
		SetFont(font:QFont_ITF):void;
		SetForeground(brush:QBrush_ITF):void;
		SetIcon(icon:QIcon_ITF):void;
		SetRowCount(rows:number):void;
		SetSelectable(selectable:boolean):void;
		SetSizeHint(size:core.QSize_ITF):void;
		SetStatusTip(statusTip:string):void;
		SetText(text:string):void;
		SetTextAlignment(alignment:number):void;
		SetToolTip(toolTip:string):void;
		SetUserTristate(tristate:boolean):void;
		SetWhatsThis(whatsThis:string):void;
		SizeHint():core.QSize;
		SortChildren(column:number,order:number):void;
		StatusTip():string;
		TakeChild(row:number,column:number):QStandardItem;
		TakeColumn(column:number):QStandardItem[];
		TakeRow(row:number):QStandardItem[];
		Text():string;
		TextAlignment():number;
		ToolTip():string;
		ConnectType(f:()=>number):void;
		DisconnectType():void;
		Type():number;
		TypeDefault():number;
		WhatsThis():string;
		ConnectWrite(f:(out:core.QDataStream)=>void):void;
		DisconnectWrite():void;
		Write(out:core.QDataStream_ITF):void;
		WriteDefault(out:core.QDataStream_ITF):void;
		ConnectDestroyQStandardItem(f:()=>void):void;
		DisconnectDestroyQStandardItem():void;
		DestroyQStandardItem():void;
		DestroyQStandardItemDefault():void;
	}
	function NewQStandardItemFromPointer(ptr:number):QStandardItem;
	function NewQStandardItem():QStandardItem;
	function NewQStandardItem2(text:string):QStandardItem;
	function NewQStandardItem3(icon:QIcon_ITF,text:string):QStandardItem;
	function NewQStandardItem4(rows:number,columns:number):QStandardItem;
	function NewQStandardItem5(other:QStandardItem_ITF):QStandardItem;
	const QStandardItem__Type: number;
	const QStandardItem__UserType: number;
	interface QStandardItemModel_ITF extends core.QAbstractItemModel_ITF {
		QStandardItemModel_PTR():QStandardItemModel;
	}

	class QStandardItemModel extends core.QAbstractItemModel {
		___pointer: number;
		QStandardItemModel_PTR():QStandardItemModel;
		Pointer():number;
		SetPointer(p:number):void;
		AppendColumn(items:QStandardItem[]):void;
		AppendRow(items:QStandardItem[]):void;
		AppendRow2(item:QStandardItem_ITF):void;
		Clear():void;
		ClearItemData(index:core.QModelIndex_ITF):boolean;
		ConnectColumnCount(f:(parent:core.QModelIndex)=>number):void;
		DisconnectColumnCount():void;
		ColumnCount(parent:core.QModelIndex_ITF):number;
		ColumnCountDefault(parent:core.QModelIndex_ITF):number;
		ConnectData(f:(index:core.QModelIndex,role:number)=>core.QVariant):void;
		DisconnectData():void;
		Data(index:core.QModelIndex_ITF,role:number):core.QVariant;
		DataDefault(index:core.QModelIndex_ITF,role:number):core.QVariant;
		DropMimeDataDefault(data:core.QMimeData_ITF,action:number,row:number,column:number,parent:core.QModelIndex_ITF):boolean;
		FindItems(text:string,flags:number,column:number):QStandardItem[];
		FlagsDefault(index:core.QModelIndex_ITF):number;
		HasChildrenDefault(parent:core.QModelIndex_ITF):boolean;
		HeaderDataDefault(section:number,orientation:number,role:number):core.QVariant;
		HorizontalHeaderItem(column:number):QStandardItem;
		ConnectIndex(f:(row:number,column:number,parent:core.QModelIndex)=>core.QModelIndex):void;
		DisconnectIndex():void;
		Index(row:number,column:number,parent:core.QModelIndex_ITF):core.QModelIndex;
		IndexDefault(row:number,column:number,parent:core.QModelIndex_ITF):core.QModelIndex;
		IndexFromItem(item:QStandardItem_ITF):core.QModelIndex;
		InsertColumn(column:number,items:QStandardItem[]):void;
		InsertColumnsDefault(column:number,count:number,parent:core.QModelIndex_ITF):boolean;
		InsertRow(row:number,items:QStandardItem[]):void;
		InsertRow2(row:number,item:QStandardItem_ITF):void;
		InsertRowsDefault(row:number,count:number,parent:core.QModelIndex_ITF):boolean;
		InvisibleRootItem():QStandardItem;
		Item(row:number,column:number):QStandardItem;
		ConnectItemChanged(f:(item:QStandardItem)=>void):void;
		DisconnectItemChanged():void;
		ItemChanged(item:QStandardItem_ITF):void;
		ItemDataDefault(index:core.QModelIndex_ITF):Map<number,core.QVariant>;
		ItemFromIndex(index:core.QModelIndex_ITF):QStandardItem;
		ItemPrototype():QStandardItem;
		MimeDataDefault(indexes:core.QModelIndex[]):core.QMimeData;
		MimeTypesDefault():string[];
		ConnectParent(f:(child:core.QModelIndex)=>core.QModelIndex):void;
		DisconnectParent():void;
		Parent(child:core.QModelIndex_ITF):core.QModelIndex;
		ParentDefault(child:core.QModelIndex_ITF):core.QModelIndex;
		RemoveColumnsDefault(column:number,count:number,parent:core.QModelIndex_ITF):boolean;
		RemoveRowsDefault(row:number,count:number,parent:core.QModelIndex_ITF):boolean;
		ConnectRowCount(f:(parent:core.QModelIndex)=>number):void;
		DisconnectRowCount():void;
		RowCount(parent:core.QModelIndex_ITF):number;
		RowCountDefault(parent:core.QModelIndex_ITF):number;
		SetColumnCount(columns:number):void;
		SetDataDefault(index:core.QModelIndex_ITF,value:core.QVariant_ITF,role:number):boolean;
		SetHeaderDataDefault(section:number,orientation:number,value:core.QVariant_ITF,role:number):boolean;
		SetHorizontalHeaderItem(column:number,item:QStandardItem_ITF):void;
		SetHorizontalHeaderLabels(labels:string[]):void;
		SetItem(row:number,column:number,item:QStandardItem_ITF):void;
		SetItem2(row:number,item:QStandardItem_ITF):void;
		SetItemDataDefault(index:core.QModelIndex_ITF,roles:Map<number,core.QVariant>):boolean;
		SetItemPrototype(item:QStandardItem_ITF):void;
		SetItemRoleNames(roleNames:Map<number,core.QByteArray>):void;
		SetRowCount(rows:number):void;
		SetSortRole(role:number):void;
		SetVerticalHeaderItem(row:number,item:QStandardItem_ITF):void;
		SetVerticalHeaderLabels(labels:string[]):void;
		SiblingDefault(row:number,column:number,idx:core.QModelIndex_ITF):core.QModelIndex;
		SortDefault(column:number,order:number):void;
		SortRole():number;
		SupportedDropActionsDefault():number;
		TakeColumn(column:number):QStandardItem[];
		TakeHorizontalHeaderItem(column:number):QStandardItem;
		TakeItem(row:number,column:number):QStandardItem;
		TakeRow(row:number):QStandardItem[];
		TakeVerticalHeaderItem(row:number):QStandardItem;
		VerticalHeaderItem(row:number):QStandardItem;
		ConnectDestroyQStandardItemModel(f:()=>void):void;
		DisconnectDestroyQStandardItemModel():void;
		DestroyQStandardItemModel():void;
		DestroyQStandardItemModelDefault():void;
		BuddyDefault(index:core.QModelIndex_ITF):core.QModelIndex;
		CanDropMimeDataDefault(data:core.QMimeData_ITF,action:number,row:number,column:number,parent:core.QModelIndex_ITF):boolean;
		CanFetchMoreDefault(parent:core.QModelIndex_ITF):boolean;
		FetchMoreDefault(parent:core.QModelIndex_ITF):void;
		MatchDefault(start:core.QModelIndex_ITF,role:number,value:core.QVariant_ITF,hits:number,flags:number):core.QModelIndex[];
		MoveColumnsDefault(sourceParent:core.QModelIndex_ITF,sourceColumn:number,count:number,destinationParent:core.QModelIndex_ITF,destinationChild:number):boolean;
		MoveRowsDefault(sourceParent:core.QModelIndex_ITF,sourceRow:number,count:number,destinationParent:core.QModelIndex_ITF,destinationChild:number):boolean;
		ResetInternalDataDefault():void;
		RevertDefault():void;
		RoleNamesDefault():Map<number,core.QByteArray>;
		SpanDefault(index:core.QModelIndex_ITF):core.QSize;
		SubmitDefault():boolean;
		SupportedDragActionsDefault():number;
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
	function NewQStandardItemModelFromPointer(ptr:number):QStandardItemModel;
	function NewQStandardItemModel(parent:core.QObject_ITF):QStandardItemModel;
	function NewQStandardItemModel2(rows:number,columns:number,parent:core.QObject_ITF):QStandardItemModel;
	interface QStaticText_ITF {
		QStaticText_PTR():QStaticText;
	}

	class QStaticText {
		___pointer: number;
		QStaticText_PTR():QStaticText;
		Pointer():number;
		SetPointer(p:number):void;
		PerformanceHint():number;
		Prepare(matrix:QTransform_ITF,font:QFont_ITF):void;
		SetPerformanceHint(performanceHint:number):void;
		SetText(text:string):void;
		SetTextFormat(textFormat:number):void;
		SetTextOption(textOption:QTextOption_ITF):void;
		SetTextWidth(textWidth:number):void;
		Size():core.QSizeF;
		Swap(other:QStaticText_ITF):void;
		Text():string;
		TextFormat():number;
		TextOption():QTextOption;
		TextWidth():number;
		DestroyQStaticText():void;
	}
	function NewQStaticTextFromPointer(ptr:number):QStaticText;
	function NewQStaticText():QStaticText;
	function NewQStaticText2(text:string):QStaticText;
	function NewQStaticText3(other:QStaticText_ITF):QStaticText;
	const QStaticText__ModerateCaching: number;
	const QStaticText__AggressiveCaching: number;
	interface QStatusTipEvent_ITF extends core.QEvent_ITF {
		QStatusTipEvent_PTR():QStatusTipEvent;
	}

	class QStatusTipEvent extends core.QEvent {
		___pointer: number;
		QStatusTipEvent_PTR():QStatusTipEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQStatusTipEvent():void;
		Tip():string;
	}
	function NewQStatusTipEventFromPointer(ptr:number):QStatusTipEvent;
	function NewQStatusTipEvent(tip:string):QStatusTipEvent;
	interface QStyleHints_ITF extends core.QObject_ITF {
		QStyleHints_PTR():QStyleHints;
	}

	class QStyleHints extends core.QObject {
		___pointer: number;
		QStyleHints_PTR():QStyleHints;
		Pointer():number;
		SetPointer(p:number):void;
		CursorFlashTime():number;
		ConnectCursorFlashTimeChanged(f:(cursorFlashTime:number)=>void):void;
		DisconnectCursorFlashTimeChanged():void;
		CursorFlashTimeChanged(cursorFlashTime:number):void;
		FontSmoothingGamma():number;
		KeyboardAutoRepeatRate():number;
		KeyboardInputInterval():number;
		ConnectKeyboardInputIntervalChanged(f:(keyboardInputInterval:number)=>void):void;
		DisconnectKeyboardInputIntervalChanged():void;
		KeyboardInputIntervalChanged(keyboardInputInterval:number):void;
		MouseDoubleClickInterval():number;
		ConnectMouseDoubleClickIntervalChanged(f:(mouseDoubleClickInterval:number)=>void):void;
		DisconnectMouseDoubleClickIntervalChanged():void;
		MouseDoubleClickIntervalChanged(mouseDoubleClickInterval:number):void;
		MousePressAndHoldInterval():number;
		ConnectMousePressAndHoldIntervalChanged(f:(mousePressAndHoldInterval:number)=>void):void;
		DisconnectMousePressAndHoldIntervalChanged():void;
		MousePressAndHoldIntervalChanged(mousePressAndHoldInterval:number):void;
		MouseQuickSelectionThreshold():number;
		ConnectMouseQuickSelectionThresholdChanged(f:(threshold:number)=>void):void;
		DisconnectMouseQuickSelectionThresholdChanged():void;
		MouseQuickSelectionThresholdChanged(threshold:number):void;
		PasswordMaskCharacter():core.QChar;
		PasswordMaskDelay():number;
		SetFocusOnTouchRelease():boolean;
		SetShowShortcutsInContextMenus(showShortcutsInContextMenus:boolean):void;
		SetUseHoverEffects(useHoverEffects:boolean):void;
		ShowIsFullScreen():boolean;
		ShowIsMaximized():boolean;
		ShowShortcutsInContextMenus():boolean;
		ConnectShowShortcutsInContextMenusChanged(f:(vbo:boolean)=>void):void;
		DisconnectShowShortcutsInContextMenusChanged():void;
		ShowShortcutsInContextMenusChanged(vbo:boolean):void;
		SingleClickActivation():boolean;
		StartDragDistance():number;
		ConnectStartDragDistanceChanged(f:(startDragDistance:number)=>void):void;
		DisconnectStartDragDistanceChanged():void;
		StartDragDistanceChanged(startDragDistance:number):void;
		StartDragTime():number;
		ConnectStartDragTimeChanged(f:(startDragTime:number)=>void):void;
		DisconnectStartDragTimeChanged():void;
		StartDragTimeChanged(startDragTime:number):void;
		StartDragVelocity():number;
		TabFocusBehavior():number;
		ConnectTabFocusBehaviorChanged(f:(tabFocusBehavior:number)=>void):void;
		DisconnectTabFocusBehaviorChanged():void;
		TabFocusBehaviorChanged(tabFocusBehavior:number):void;
		UseHoverEffects():boolean;
		ConnectUseHoverEffectsChanged(f:(useHoverEffects:boolean)=>void):void;
		DisconnectUseHoverEffectsChanged():void;
		UseHoverEffectsChanged(useHoverEffects:boolean):void;
		UseRtlExtensions():boolean;
		WheelScrollLines():number;
		ConnectWheelScrollLinesChanged(f:(scrollLines:number)=>void):void;
		DisconnectWheelScrollLinesChanged():void;
		WheelScrollLinesChanged(scrollLines:number):void;
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
	function NewQStyleHintsFromPointer(ptr:number):QStyleHints;
	interface QSupportedWritingSystems_ITF {
		QSupportedWritingSystems_PTR():QSupportedWritingSystems;
	}

	class QSupportedWritingSystems {
		___pointer: number;
		QSupportedWritingSystems_PTR():QSupportedWritingSystems;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QSurface_ITF {
		QSurface_PTR():QSurface;
	}

	class QSurface {
		___pointer: number;
		QSurface_PTR():QSurface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectFormat(f:()=>QSurfaceFormat):void;
		DisconnectFormat():void;
		Format():QSurfaceFormat;
		ConnectSize(f:()=>core.QSize):void;
		DisconnectSize():void;
		Size():core.QSize;
		SupportsOpenGL():boolean;
		SurfaceClass():number;
		ConnectSurfaceType(f:()=>number):void;
		DisconnectSurfaceType():void;
		SurfaceType():number;
		ConnectDestroyQSurface(f:()=>void):void;
		DisconnectDestroyQSurface():void;
		DestroyQSurface():void;
		DestroyQSurfaceDefault():void;
	}
	function NewQSurfaceFromPointer(ptr:number):QSurface;
	const QSurface__Window: number;
	const QSurface__Offscreen: number;
	const QSurface__RasterSurface: number;
	const QSurface__OpenGLSurface: number;
	const QSurface__RasterGLSurface: number;
	const QSurface__OpenVGSurface: number;
	const QSurface__VulkanSurface: number;
	const QSurface__MetalSurface: number;
	interface QSurfaceFormat_ITF {
		QSurfaceFormat_PTR():QSurfaceFormat;
	}

	class QSurfaceFormat {
		___pointer: number;
		QSurfaceFormat_PTR():QSurfaceFormat;
		Pointer():number;
		SetPointer(p:number):void;
		AlphaBufferSize():number;
		BlueBufferSize():number;
		ColorSpace():number;
		DefaultFormat():QSurfaceFormat;
		DepthBufferSize():number;
		GreenBufferSize():number;
		HasAlpha():boolean;
		MajorVersion():number;
		MinorVersion():number;
		Options():number;
		Profile():number;
		RedBufferSize():number;
		RenderableType():number;
		Samples():number;
		SetAlphaBufferSize(size:number):void;
		SetBlueBufferSize(size:number):void;
		SetColorSpace(colorSpace:number):void;
		SetDefaultFormat(format:QSurfaceFormat_ITF):void;
		SetDepthBufferSize(size:number):void;
		SetGreenBufferSize(size:number):void;
		SetMajorVersion(major:number):void;
		SetMinorVersion(minor:number):void;
		SetOption(option:number,on:boolean):void;
		SetOptions(options:number):void;
		SetProfile(profile:number):void;
		SetRedBufferSize(size:number):void;
		SetRenderableType(ty:number):void;
		SetSamples(numSamples:number):void;
		SetStencilBufferSize(size:number):void;
		SetStereo(enable:boolean):void;
		SetSwapBehavior(behavior:number):void;
		SetSwapInterval(interval:number):void;
		SetVersion(major:number,minor:number):void;
		StencilBufferSize():number;
		Stereo():boolean;
		SwapBehavior():number;
		SwapInterval():number;
		TestOption(option:number):boolean;
		DestroyQSurfaceFormat():void;
	}
	function NewQSurfaceFormatFromPointer(ptr:number):QSurfaceFormat;
	function NewQSurfaceFormat():QSurfaceFormat;
	function NewQSurfaceFormat2(options:number):QSurfaceFormat;
	function NewQSurfaceFormat3(other:QSurfaceFormat_ITF):QSurfaceFormat;
	function QSurfaceFormat_DefaultFormat():QSurfaceFormat;
	function QSurfaceFormat_SetDefaultFormat(format:QSurfaceFormat_ITF):void;
	const QSurfaceFormat__StereoBuffers: number;
	const QSurfaceFormat__DebugContext: number;
	const QSurfaceFormat__DeprecatedFunctions: number;
	const QSurfaceFormat__ResetNotification: number;
	const QSurfaceFormat__DefaultSwapBehavior: number;
	const QSurfaceFormat__SingleBuffer: number;
	const QSurfaceFormat__DoubleBuffer: number;
	const QSurfaceFormat__TripleBuffer: number;
	const QSurfaceFormat__DefaultRenderableType: number;
	const QSurfaceFormat__OpenGL: number;
	const QSurfaceFormat__OpenGLES: number;
	const QSurfaceFormat__OpenVG: number;
	const QSurfaceFormat__NoProfile: number;
	const QSurfaceFormat__CoreProfile: number;
	const QSurfaceFormat__CompatibilityProfile: number;
	const QSurfaceFormat__DefaultColorSpace: number;
	const QSurfaceFormat__sRGBColorSpace: number;
	interface QSyntaxHighlighter_ITF extends core.QObject_ITF {
		QSyntaxHighlighter_PTR():QSyntaxHighlighter;
	}

	class QSyntaxHighlighter extends core.QObject {
		___pointer: number;
		QSyntaxHighlighter_PTR():QSyntaxHighlighter;
		Pointer():number;
		SetPointer(p:number):void;
		CurrentBlock():QTextBlock;
		CurrentBlockState():number;
		CurrentBlockUserData():QTextBlockUserData;
		Document():QTextDocument;
		Format(position:number):QTextCharFormat;
		ConnectHighlightBlock(f:(text:string)=>void):void;
		DisconnectHighlightBlock():void;
		HighlightBlock(text:string):void;
		PreviousBlockState():number;
		ConnectRehighlight(f:()=>void):void;
		DisconnectRehighlight():void;
		Rehighlight():void;
		RehighlightDefault():void;
		ConnectRehighlightBlock(f:(block:QTextBlock)=>void):void;
		DisconnectRehighlightBlock():void;
		RehighlightBlock(block:QTextBlock_ITF):void;
		RehighlightBlockDefault(block:QTextBlock_ITF):void;
		SetCurrentBlockState(newState:number):void;
		SetCurrentBlockUserData(data:QTextBlockUserData_ITF):void;
		SetDocument(doc:QTextDocument_ITF):void;
		SetFormat(start:number,count:number,format:QTextCharFormat_ITF):void;
		SetFormat2(start:number,count:number,color:QColor_ITF):void;
		SetFormat3(start:number,count:number,font:QFont_ITF):void;
		ConnectDestroyQSyntaxHighlighter(f:()=>void):void;
		DisconnectDestroyQSyntaxHighlighter():void;
		DestroyQSyntaxHighlighter():void;
		DestroyQSyntaxHighlighterDefault():void;
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
	function NewQSyntaxHighlighterFromPointer(ptr:number):QSyntaxHighlighter;
	function NewQSyntaxHighlighter(parent:core.QObject_ITF):QSyntaxHighlighter;
	function NewQSyntaxHighlighter2(parent:QTextDocument_ITF):QSyntaxHighlighter;
	interface QTabletEvent_ITF extends QInputEvent_ITF {
		QTabletEvent_PTR():QTabletEvent;
	}

	class QTabletEvent extends QInputEvent {
		___pointer: number;
		QTabletEvent_PTR():QTabletEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTabletEvent():void;
		Button():number;
		Buttons():number;
		Device():number;
		GlobalPos():core.QPoint;
		GlobalPosF():core.QPointF;
		GlobalX():number;
		GlobalY():number;
		HiResGlobalX():number;
		HiResGlobalY():number;
		PointerType():number;
		Pos():core.QPoint;
		PosF():core.QPointF;
		Pressure():number;
		Rotation():number;
		TangentialPressure():number;
		UniqueId():number;
		X():number;
		XTilt():number;
		Y():number;
		YTilt():number;
		Z():number;
	}
	function NewQTabletEventFromPointer(ptr:number):QTabletEvent;
	function NewQTabletEvent2(ty:number,pos:core.QPointF_ITF,globalPos:core.QPointF_ITF,device:number,pointerType:number,pressure:number,xTilt:number,yTilt:number,tangentialPressure:number,rotation:number,z:number,keyState:number,uniqueID:number,button:number,buttons:number):QTabletEvent;
	const QTabletEvent__NoDevice: number;
	const QTabletEvent__Puck: number;
	const QTabletEvent__Stylus: number;
	const QTabletEvent__Airbrush: number;
	const QTabletEvent__FourDMouse: number;
	const QTabletEvent__XFreeEraser: number;
	const QTabletEvent__RotationStylus: number;
	const QTabletEvent__UnknownPointer: number;
	const QTabletEvent__Pen: number;
	const QTabletEvent__Cursor: number;
	const QTabletEvent__Eraser: number;
	interface QTextBlock_ITF {
		QTextBlock_PTR():QTextBlock;
	}

	class QTextBlock {
		___pointer: number;
		QTextBlock_PTR():QTextBlock;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextBlock():void;
		BlockFormat():QTextBlockFormat;
		BlockFormatIndex():number;
		BlockNumber():number;
		CharFormat():QTextCharFormat;
		CharFormatIndex():number;
		ClearLayout():void;
		Contains(position:number):boolean;
		Document():QTextDocument;
		FirstLineNumber():number;
		IsValid():boolean;
		IsVisible():boolean;
		Layout():QTextLayout;
		Length():number;
		LineCount():number;
		Next():QTextBlock;
		Position():number;
		Previous():QTextBlock;
		Revision():number;
		SetLineCount(count:number):void;
		SetRevision(rev:number):void;
		SetUserData(data:QTextBlockUserData_ITF):void;
		SetUserState(state:number):void;
		SetVisible(visible:boolean):void;
		Text():string;
		TextDirection():number;
		UserData():QTextBlockUserData;
		UserState():number;
	}
	function NewQTextBlockFromPointer(ptr:number):QTextBlock;
	function NewQTextBlock3(other:QTextBlock_ITF):QTextBlock;
	interface QTextBlockFormat_ITF extends QTextFormat_ITF {
		QTextBlockFormat_PTR():QTextBlockFormat;
	}

	class QTextBlockFormat extends QTextFormat {
		___pointer: number;
		QTextBlockFormat_PTR():QTextBlockFormat;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextBlockFormat():void;
		Alignment():number;
		BottomMargin():number;
		HeadingLevel():number;
		Indent():number;
		LeftMargin():number;
		LineHeight(scriptLineHeight:number,scaling:number):number;
		LineHeight2():number;
		LineHeightType():number;
		NonBreakableLines():boolean;
		PageBreakPolicy():number;
		RightMargin():number;
		SetAlignment(alignment:number):void;
		SetBottomMargin(margi:number):void;
		SetHeadingLevel(level:number):void;
		SetIndent(indentation:number):void;
		SetLeftMargin(margi:number):void;
		SetLineHeight(height:number,heightType:number):void;
		SetNonBreakableLines(b:boolean):void;
		SetPageBreakPolicy(policy:number):void;
		SetRightMargin(margi:number):void;
		SetTextIndent(indent:number):void;
		SetTopMargin(margi:number):void;
		TextIndent():number;
		TopMargin():number;
	}
	function NewQTextBlockFormatFromPointer(ptr:number):QTextBlockFormat;
	function NewQTextBlockFormat():QTextBlockFormat;
	const QTextBlockFormat__SingleHeight: number;
	const QTextBlockFormat__ProportionalHeight: number;
	const QTextBlockFormat__FixedHeight: number;
	const QTextBlockFormat__MinimumHeight: number;
	const QTextBlockFormat__LineDistanceHeight: number;
	interface QTextBlockGroup_ITF extends QTextObject_ITF {
		QTextBlockGroup_PTR():QTextBlockGroup;
	}

	class QTextBlockGroup extends QTextObject {
		___pointer: number;
		QTextBlockGroup_PTR():QTextBlockGroup;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBlockFormatChanged(f:(block:QTextBlock)=>void):void;
		DisconnectBlockFormatChanged():void;
		BlockFormatChanged(block:QTextBlock_ITF):void;
		BlockFormatChangedDefault(block:QTextBlock_ITF):void;
		ConnectBlockInserted(f:(block:QTextBlock)=>void):void;
		DisconnectBlockInserted():void;
		BlockInserted(block:QTextBlock_ITF):void;
		BlockInsertedDefault(block:QTextBlock_ITF):void;
		BlockList():QTextBlock[];
		ConnectBlockRemoved(f:(block:QTextBlock)=>void):void;
		DisconnectBlockRemoved():void;
		BlockRemoved(block:QTextBlock_ITF):void;
		BlockRemovedDefault(block:QTextBlock_ITF):void;
		ConnectDestroyQTextBlockGroup(f:()=>void):void;
		DisconnectDestroyQTextBlockGroup():void;
		DestroyQTextBlockGroup():void;
		DestroyQTextBlockGroupDefault():void;
	}
	function NewQTextBlockGroupFromPointer(ptr:number):QTextBlockGroup;
	function NewQTextBlockGroup(document:QTextDocument_ITF):QTextBlockGroup;
	interface QTextBlockUserData_ITF {
		QTextBlockUserData_PTR():QTextBlockUserData;
	}

	class QTextBlockUserData {
		___pointer: number;
		QTextBlockUserData_PTR():QTextBlockUserData;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQTextBlockUserData(f:()=>void):void;
		DisconnectDestroyQTextBlockUserData():void;
		DestroyQTextBlockUserData():void;
		DestroyQTextBlockUserDataDefault():void;
	}
	function NewQTextBlockUserDataFromPointer(ptr:number):QTextBlockUserData;
	interface QTextCharFormat_ITF extends QTextFormat_ITF {
		QTextCharFormat_PTR():QTextCharFormat;
	}

	class QTextCharFormat extends QTextFormat {
		___pointer: number;
		QTextCharFormat_PTR():QTextCharFormat;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextCharFormat():void;
		AnchorHref():string;
		AnchorNames():string[];
		Font():QFont;
		FontCapitalization():number;
		FontFamilies():core.QVariant;
		FontFamily():string;
		FontFixedPitch():boolean;
		FontHintingPreference():number;
		FontItalic():boolean;
		FontKerning():boolean;
		FontLetterSpacing():number;
		FontLetterSpacingType():number;
		FontOverline():boolean;
		FontPointSize():number;
		FontStretch():number;
		FontStrikeOut():boolean;
		FontStyleHint():number;
		FontStyleName():core.QVariant;
		FontStyleStrategy():number;
		FontUnderline():boolean;
		FontWeight():number;
		FontWordSpacing():number;
		IsAnchor():boolean;
		SetAnchor(anchor:boolean):void;
		SetAnchorHref(value:string):void;
		SetAnchorNames(names:string[]):void;
		SetFont(font:QFont_ITF,behavior:number):void;
		SetFont2(font:QFont_ITF):void;
		SetFontCapitalization(capitalization:number):void;
		SetFontFamilies(families:string[]):void;
		SetFontFamily(family:string):void;
		SetFontFixedPitch(fixedPitch:boolean):void;
		SetFontHintingPreference(hintingPreference:number):void;
		SetFontItalic(italic:boolean):void;
		SetFontKerning(enable:boolean):void;
		SetFontLetterSpacing(spacing:number):void;
		SetFontLetterSpacingType(letterSpacingType:number):void;
		SetFontOverline(overline:boolean):void;
		SetFontPointSize(size:number):void;
		SetFontStretch(factor:number):void;
		SetFontStrikeOut(strikeOut:boolean):void;
		SetFontStyleHint(hint:number,strategy:number):void;
		SetFontStyleName(styleName:string):void;
		SetFontStyleStrategy(strategy:number):void;
		SetFontUnderline(underline:boolean):void;
		SetFontWeight(weight:number):void;
		SetFontWordSpacing(spacing:number):void;
		SetTextOutline(pen:QPen_ITF):void;
		SetToolTip(text:string):void;
		SetUnderlineColor(color:QColor_ITF):void;
		SetUnderlineStyle(style:number):void;
		SetVerticalAlignment(alignment:number):void;
		TextOutline():QPen;
		ToolTip():string;
		UnderlineColor():QColor;
		UnderlineStyle():number;
		VerticalAlignment():number;
	}
	function NewQTextCharFormatFromPointer(ptr:number):QTextCharFormat;
	function NewQTextCharFormat():QTextCharFormat;
	const QTextCharFormat__AlignNormal: number;
	const QTextCharFormat__AlignSuperScript: number;
	const QTextCharFormat__AlignSubScript: number;
	const QTextCharFormat__AlignMiddle: number;
	const QTextCharFormat__AlignTop: number;
	const QTextCharFormat__AlignBottom: number;
	const QTextCharFormat__AlignBaseline: number;
	const QTextCharFormat__NoUnderline: number;
	const QTextCharFormat__SingleUnderline: number;
	const QTextCharFormat__DashUnderline: number;
	const QTextCharFormat__DotLine: number;
	const QTextCharFormat__DashDotLine: number;
	const QTextCharFormat__DashDotDotLine: number;
	const QTextCharFormat__WaveUnderline: number;
	const QTextCharFormat__SpellCheckUnderline: number;
	const QTextCharFormat__FontPropertiesSpecifiedOnly: number;
	const QTextCharFormat__FontPropertiesAll: number;
	interface QTextCursor_ITF {
		QTextCursor_PTR():QTextCursor;
	}

	class QTextCursor {
		___pointer: number;
		QTextCursor_PTR():QTextCursor;
		Pointer():number;
		SetPointer(p:number):void;
		Anchor():number;
		AtBlockEnd():boolean;
		AtBlockStart():boolean;
		AtEnd():boolean;
		AtStart():boolean;
		BeginEditBlock():void;
		Block():QTextBlock;
		BlockCharFormat():QTextCharFormat;
		BlockFormat():QTextBlockFormat;
		BlockNumber():number;
		CharFormat():QTextCharFormat;
		ClearSelection():void;
		ColumnNumber():number;
		CreateList(format:QTextListFormat_ITF):QTextList;
		CreateList2(style:number):QTextList;
		CurrentFrame():QTextFrame;
		CurrentList():QTextList;
		CurrentTable():QTextTable;
		DeleteChar():void;
		DeletePreviousChar():void;
		Document():QTextDocument;
		EndEditBlock():void;
		HasComplexSelection():boolean;
		HasSelection():boolean;
		InsertBlock():void;
		InsertBlock2(format:QTextBlockFormat_ITF):void;
		InsertBlock3(format:QTextBlockFormat_ITF,charFormat:QTextCharFormat_ITF):void;
		InsertFragment(fragment:QTextDocumentFragment_ITF):void;
		InsertFrame(format:QTextFrameFormat_ITF):QTextFrame;
		InsertHtml(html:string):void;
		InsertImage(format:QTextImageFormat_ITF):void;
		InsertImage2(format:QTextImageFormat_ITF,alignment:number):void;
		InsertImage3(name:string):void;
		InsertImage4(image:QImage_ITF,name:string):void;
		InsertList(format:QTextListFormat_ITF):QTextList;
		InsertList2(style:number):QTextList;
		InsertTable(rows:number,columns:number,format:QTextTableFormat_ITF):QTextTable;
		InsertTable2(rows:number,columns:number):QTextTable;
		InsertText(text:string):void;
		InsertText2(text:string,format:QTextCharFormat_ITF):void;
		IsCopyOf(other:QTextCursor_ITF):boolean;
		IsNull():boolean;
		JoinPreviousEditBlock():void;
		KeepPositionOnInsert():boolean;
		MergeBlockCharFormat(modifier:QTextCharFormat_ITF):void;
		MergeBlockFormat(modifier:QTextBlockFormat_ITF):void;
		MergeCharFormat(modifier:QTextCharFormat_ITF):void;
		MovePosition(operation:number,mode:number,n:number):boolean;
		Position():number;
		PositionInBlock():number;
		RemoveSelectedText():void;
		Select(selection:number):void;
		SelectedTableCells(firstRow:number,numRows:number,firstColumn:number,numColumns:number):void;
		SelectedText():string;
		Selection():QTextDocumentFragment;
		SelectionEnd():number;
		SelectionStart():number;
		SetBlockCharFormat(format:QTextCharFormat_ITF):void;
		SetBlockFormat(format:QTextBlockFormat_ITF):void;
		SetCharFormat(format:QTextCharFormat_ITF):void;
		SetKeepPositionOnInsert(b:boolean):void;
		SetPosition(pos:number,m:number):void;
		SetVerticalMovementX(x:number):void;
		SetVisualNavigation(b:boolean):void;
		Swap(other:QTextCursor_ITF):void;
		VerticalMovementX():number;
		VisualNavigation():boolean;
		DestroyQTextCursor():void;
	}
	function NewQTextCursorFromPointer(ptr:number):QTextCursor;
	function NewQTextCursor():QTextCursor;
	function NewQTextCursor2(document:QTextDocument_ITF):QTextCursor;
	function NewQTextCursor3(frame:QTextFrame_ITF):QTextCursor;
	function NewQTextCursor4(block:QTextBlock_ITF):QTextCursor;
	function NewQTextCursor5(cursor:QTextCursor_ITF):QTextCursor;
	const QTextCursor__MoveAnchor: number;
	const QTextCursor__KeepAnchor: number;
	const QTextCursor__NoMove: number;
	const QTextCursor__Start: number;
	const QTextCursor__Up: number;
	const QTextCursor__StartOfLine: number;
	const QTextCursor__StartOfBlock: number;
	const QTextCursor__StartOfWord: number;
	const QTextCursor__PreviousBlock: number;
	const QTextCursor__PreviousCharacter: number;
	const QTextCursor__PreviousWord: number;
	const QTextCursor__Left: number;
	const QTextCursor__WordLeft: number;
	const QTextCursor__End: number;
	const QTextCursor__Down: number;
	const QTextCursor__EndOfLine: number;
	const QTextCursor__EndOfWord: number;
	const QTextCursor__EndOfBlock: number;
	const QTextCursor__NextBlock: number;
	const QTextCursor__NextCharacter: number;
	const QTextCursor__NextWord: number;
	const QTextCursor__Right: number;
	const QTextCursor__WordRight: number;
	const QTextCursor__NextCell: number;
	const QTextCursor__PreviousCell: number;
	const QTextCursor__NextRow: number;
	const QTextCursor__PreviousRow: number;
	const QTextCursor__WordUnderCursor: number;
	const QTextCursor__LineUnderCursor: number;
	const QTextCursor__BlockUnderCursor: number;
	const QTextCursor__Document: number;
	interface QTextDocument_ITF extends core.QObject_ITF {
		QTextDocument_PTR():QTextDocument;
	}

	class QTextDocument extends core.QObject {
		___pointer: number;
		QTextDocument_PTR():QTextDocument;
		Pointer():number;
		SetPointer(p:number):void;
		AddResource(ty:number,name:core.QUrl_ITF,resource:core.QVariant_ITF):void;
		AdjustSize():void;
		AllFormats():QTextFormat[];
		AvailableRedoSteps():number;
		AvailableUndoSteps():number;
		BaseUrl():core.QUrl;
		ConnectBaseUrlChanged(f:(url:core.QUrl)=>void):void;
		DisconnectBaseUrlChanged():void;
		BaseUrlChanged(url:core.QUrl_ITF):void;
		Begin():QTextBlock;
		BlockCount():number;
		ConnectBlockCountChanged(f:(newBlockCount:number)=>void):void;
		DisconnectBlockCountChanged():void;
		BlockCountChanged(newBlockCount:number):void;
		CharacterAt(pos:number):core.QChar;
		CharacterCount():number;
		ConnectClear(f:()=>void):void;
		DisconnectClear():void;
		Clear():void;
		ClearDefault():void;
		ClearUndoRedoStacks(stacksToClear:number):void;
		Clone(parent:core.QObject_ITF):QTextDocument;
		ConnectContentsChange(f:(position:number,charsRemoved:number,charsAdded:number)=>void):void;
		DisconnectContentsChange():void;
		ContentsChange(position:number,charsRemoved:number,charsAdded:number):void;
		ConnectContentsChanged(f:()=>void):void;
		DisconnectContentsChanged():void;
		ContentsChanged():void;
		ConnectCreateObject(f:(format:QTextFormat)=>QTextObject):void;
		DisconnectCreateObject():void;
		CreateObject(format:QTextFormat_ITF):QTextObject;
		CreateObjectDefault(format:QTextFormat_ITF):QTextObject;
		ConnectCursorPositionChanged(f:(cursor:QTextCursor)=>void):void;
		DisconnectCursorPositionChanged():void;
		CursorPositionChanged(cursor:QTextCursor_ITF):void;
		DefaultCursorMoveStyle():number;
		DefaultFont():QFont;
		DefaultStyleSheet():string;
		DefaultTextOption():QTextOption;
		DocumentLayout():QAbstractTextDocumentLayout;
		ConnectDocumentLayoutChanged(f:()=>void):void;
		DisconnectDocumentLayoutChanged():void;
		DocumentLayoutChanged():void;
		DocumentMargin():number;
		DrawContents(p:QPainter_ITF,rect:core.QRectF_ITF):void;
		End():QTextBlock;
		Find(subString:string,cursor:QTextCursor_ITF,options:number):QTextCursor;
		Find2(subString:string,position:number,options:number):QTextCursor;
		Find3(expr:core.QRegExp_ITF,from:number,options:number):QTextCursor;
		Find4(expr:core.QRegExp_ITF,cursor:QTextCursor_ITF,options:number):QTextCursor;
		Find5(expr:core.QRegularExpression_ITF,from:number,options:number):QTextCursor;
		Find6(expr:core.QRegularExpression_ITF,cursor:QTextCursor_ITF,options:number):QTextCursor;
		FindBlock(pos:number):QTextBlock;
		FindBlockByLineNumber(lineNumber:number):QTextBlock;
		FindBlockByNumber(blockNumber:number):QTextBlock;
		FirstBlock():QTextBlock;
		IdealWidth():number;
		IndentWidth():number;
		IsEmpty():boolean;
		IsModified():boolean;
		IsRedoAvailable():boolean;
		IsUndoAvailable():boolean;
		IsUndoRedoEnabled():boolean;
		LastBlock():QTextBlock;
		LineCount():number;
		ConnectLoadResource(f:(ty:number,name:core.QUrl)=>core.QVariant):void;
		DisconnectLoadResource():void;
		LoadResource(ty:number,name:core.QUrl_ITF):core.QVariant;
		LoadResourceDefault(ty:number,name:core.QUrl_ITF):core.QVariant;
		MarkContentsDirty(position:number,length:number):void;
		MaximumBlockCount():number;
		MetaInformation(info:number):string;
		ConnectModificationChanged(f:(changed:boolean)=>void):void;
		DisconnectModificationChanged():void;
		ModificationChanged(changed:boolean):void;
		Object(objectIndex:number):QTextObject;
		ObjectForFormat(ff:QTextFormat_ITF):QTextObject;
		PageCount():number;
		PageSize():core.QSizeF;
		Print(printer:QPagedPaintDevice_ITF):void;
		Redo(cursor:QTextCursor_ITF):void;
		ConnectRedo2(f:()=>void):void;
		DisconnectRedo2():void;
		Redo2():void;
		Redo2Default():void;
		ConnectRedoAvailable(f:(available:boolean)=>void):void;
		DisconnectRedoAvailable():void;
		RedoAvailable(available:boolean):void;
		Resource(ty:number,name:core.QUrl_ITF):core.QVariant;
		Revision():number;
		RootFrame():QTextFrame;
		SetBaseUrl(url:core.QUrl_ITF):void;
		SetDefaultCursorMoveStyle(style:number):void;
		SetDefaultFont(font:QFont_ITF):void;
		SetDefaultStyleSheet(sheet:string):void;
		SetDefaultTextOption(option:QTextOption_ITF):void;
		SetDocumentLayout(layout:QAbstractTextDocumentLayout_ITF):void;
		SetDocumentMargin(margi:number):void;
		SetHtml(html:string):void;
		SetIndentWidth(width:number):void;
		SetMaximumBlockCount(maximum:number):void;
		SetMetaInformation(info:number,stri:string):void;
		ConnectSetModified(f:(m:boolean)=>void):void;
		DisconnectSetModified():void;
		SetModified(m:boolean):void;
		SetModifiedDefault(m:boolean):void;
		SetPageSize(size:core.QSizeF_ITF):void;
		SetPlainText(text:string):void;
		SetTextWidth(width:number):void;
		SetUndoRedoEnabled(enable:boolean):void;
		SetUseDesignMetrics(b:boolean):void;
		Size():core.QSizeF;
		TextWidth():number;
		ToHtml(encoding:core.QByteArray_ITF):string;
		ToPlainText():string;
		ToRawText():string;
		Undo(cursor:QTextCursor_ITF):void;
		ConnectUndo2(f:()=>void):void;
		DisconnectUndo2():void;
		Undo2():void;
		Undo2Default():void;
		ConnectUndoAvailable(f:(available:boolean)=>void):void;
		DisconnectUndoAvailable():void;
		UndoAvailable(available:boolean):void;
		ConnectUndoCommandAdded(f:()=>void):void;
		DisconnectUndoCommandAdded():void;
		UndoCommandAdded():void;
		UseDesignMetrics():boolean;
		ConnectDestroyQTextDocument(f:()=>void):void;
		DisconnectDestroyQTextDocument():void;
		DestroyQTextDocument():void;
		DestroyQTextDocumentDefault():void;
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
	function NewQTextDocumentFromPointer(ptr:number):QTextDocument;
	function NewQTextDocument(parent:core.QObject_ITF):QTextDocument;
	function NewQTextDocument2(text:string,parent:core.QObject_ITF):QTextDocument;
	const QTextDocument__DocumentTitle: number;
	const QTextDocument__DocumentUrl: number;
	const QTextDocument__FindBackward: number;
	const QTextDocument__FindCaseSensitively: number;
	const QTextDocument__FindWholeWords: number;
	const QTextDocument__HtmlResource: number;
	const QTextDocument__ImageResource: number;
	const QTextDocument__StyleSheetResource: number;
	const QTextDocument__UserResource: number;
	const QTextDocument__UndoStack: number;
	const QTextDocument__RedoStack: number;
	const QTextDocument__UndoAndRedoStacks: number;
	interface QTextDocumentFragment_ITF {
		QTextDocumentFragment_PTR():QTextDocumentFragment;
	}

	class QTextDocumentFragment {
		___pointer: number;
		QTextDocumentFragment_PTR():QTextDocumentFragment;
		Pointer():number;
		SetPointer(p:number):void;
		FromHtml(text:string):QTextDocumentFragment;
		FromHtml2(text:string,resourceProvider:QTextDocument_ITF):QTextDocumentFragment;
		FromPlainText(plainText:string):QTextDocumentFragment;
		IsEmpty():boolean;
		ToHtml(encoding:core.QByteArray_ITF):string;
		ToPlainText():string;
		DestroyQTextDocumentFragment():void;
	}
	function NewQTextDocumentFragmentFromPointer(ptr:number):QTextDocumentFragment;
	function NewQTextDocumentFragment():QTextDocumentFragment;
	function NewQTextDocumentFragment2(document:QTextDocument_ITF):QTextDocumentFragment;
	function NewQTextDocumentFragment3(cursor:QTextCursor_ITF):QTextDocumentFragment;
	function NewQTextDocumentFragment4(other:QTextDocumentFragment_ITF):QTextDocumentFragment;
	function QTextDocumentFragment_FromHtml(text:string):QTextDocumentFragment;
	function QTextDocumentFragment_FromHtml2(text:string,resourceProvider:QTextDocument_ITF):QTextDocumentFragment;
	function QTextDocumentFragment_FromPlainText(plainText:string):QTextDocumentFragment;
	interface QTextDocumentWriter_ITF {
		QTextDocumentWriter_PTR():QTextDocumentWriter;
	}

	class QTextDocumentWriter {
		___pointer: number;
		QTextDocumentWriter_PTR():QTextDocumentWriter;
		Pointer():number;
		SetPointer(p:number):void;
		Codec():core.QTextCodec;
		Device():core.QIODevice;
		FileName():string;
		Format():core.QByteArray;
		SetCodec(codec:core.QTextCodec_ITF):void;
		SetDevice(device:core.QIODevice_ITF):void;
		SetFileName(fileName:string):void;
		SetFormat(format:core.QByteArray_ITF):void;
		SupportedDocumentFormats():core.QByteArray[];
		Write(document:QTextDocument_ITF):boolean;
		Write2(fragment:QTextDocumentFragment_ITF):boolean;
		DestroyQTextDocumentWriter():void;
	}
	function NewQTextDocumentWriterFromPointer(ptr:number):QTextDocumentWriter;
	function NewQTextDocumentWriter():QTextDocumentWriter;
	function NewQTextDocumentWriter2(device:core.QIODevice_ITF,format:core.QByteArray_ITF):QTextDocumentWriter;
	function NewQTextDocumentWriter3(fileName:string,format:core.QByteArray_ITF):QTextDocumentWriter;
	function QTextDocumentWriter_SupportedDocumentFormats():core.QByteArray[];
	interface QTextFormat_ITF {
		QTextFormat_PTR():QTextFormat;
	}

	class QTextFormat {
		___pointer: number;
		QTextFormat_PTR():QTextFormat;
		Pointer():number;
		SetPointer(p:number):void;
		Background():QBrush;
		BoolProperty(propertyId:number):boolean;
		BrushProperty(propertyId:number):QBrush;
		ClearBackground():void;
		ClearForeground():void;
		ClearProperty(propertyId:number):void;
		ColorProperty(propertyId:number):QColor;
		DoubleProperty(propertyId:number):number;
		Foreground():QBrush;
		HasProperty(propertyId:number):boolean;
		IntProperty(propertyId:number):number;
		IsBlockFormat():boolean;
		IsCharFormat():boolean;
		IsEmpty():boolean;
		IsFrameFormat():boolean;
		IsImageFormat():boolean;
		IsListFormat():boolean;
		IsTableCellFormat():boolean;
		IsTableFormat():boolean;
		IsValid():boolean;
		LayoutDirection():number;
		LengthProperty(propertyId:number):QTextLength;
		Merge(other:QTextFormat_ITF):void;
		ObjectIndex():number;
		ObjectType():number;
		PenProperty(propertyId:number):QPen;
		Properties():Map<number,core.QVariant>;
		Property(propertyId:number):core.QVariant;
		PropertyCount():number;
		SetBackground(brush:QBrush_ITF):void;
		SetForeground(brush:QBrush_ITF):void;
		SetLayoutDirection(direction:number):void;
		SetObjectIndex(index:number):void;
		SetObjectType(ty:number):void;
		SetProperty(propertyId:number,value:core.QVariant_ITF):void;
		SetProperty2(propertyId:number,value:QTextLength[]):void;
		StringProperty(propertyId:number):string;
		Swap(other:QTextFormat_ITF):void;
		ToBlockFormat():QTextBlockFormat;
		ToCharFormat():QTextCharFormat;
		ToFrameFormat():QTextFrameFormat;
		ToImageFormat():QTextImageFormat;
		ToListFormat():QTextListFormat;
		ToTableCellFormat():QTextTableCellFormat;
		ToTableFormat():QTextTableFormat;
		Type():number;
		DestroyQTextFormat():void;
	}
	function NewQTextFormatFromPointer(ptr:number):QTextFormat;
	function NewQTextFormat():QTextFormat;
	function NewQTextFormat2(ty:number):QTextFormat;
	function NewQTextFormat3(other:QTextFormat_ITF):QTextFormat;
	const QTextFormat__InvalidFormat: number;
	const QTextFormat__BlockFormat: number;
	const QTextFormat__CharFormat: number;
	const QTextFormat__ListFormat: number;
	const QTextFormat__TableFormat: number;
	const QTextFormat__FrameFormat: number;
	const QTextFormat__UserFormat: number;
	const QTextFormat__ObjectIndex: number;
	const QTextFormat__CssFloat: number;
	const QTextFormat__LayoutDirection: number;
	const QTextFormat__OutlinePen: number;
	const QTextFormat__BackgroundBrush: number;
	const QTextFormat__ForegroundBrush: number;
	const QTextFormat__BackgroundImageUrl: number;
	const QTextFormat__BlockAlignment: number;
	const QTextFormat__BlockTopMargin: number;
	const QTextFormat__BlockBottomMargin: number;
	const QTextFormat__BlockLeftMargin: number;
	const QTextFormat__BlockRightMargin: number;
	const QTextFormat__TextIndent: number;
	const QTextFormat__TabPositions: number;
	const QTextFormat__BlockIndent: number;
	const QTextFormat__LineHeight: number;
	const QTextFormat__LineHeightType: number;
	const QTextFormat__BlockNonBreakableLines: number;
	const QTextFormat__BlockTrailingHorizontalRulerWidth: number;
	const QTextFormat__HeadingLevel: number;
	const QTextFormat__FirstFontProperty: number;
	const QTextFormat__FontCapitalization: number;
	const QTextFormat__FontLetterSpacingType: number;
	const QTextFormat__FontLetterSpacing: number;
	const QTextFormat__FontWordSpacing: number;
	const QTextFormat__FontStretch: number;
	const QTextFormat__FontStyleHint: number;
	const QTextFormat__FontStyleStrategy: number;
	const QTextFormat__FontKerning: number;
	const QTextFormat__FontHintingPreference: number;
	const QTextFormat__FontFamilies: number;
	const QTextFormat__FontStyleName: number;
	const QTextFormat__FontFamily: number;
	const QTextFormat__FontPointSize: number;
	const QTextFormat__FontSizeAdjustment: number;
	const QTextFormat__FontSizeIncrement: number;
	const QTextFormat__FontWeight: number;
	const QTextFormat__FontItalic: number;
	const QTextFormat__FontUnderline: number;
	const QTextFormat__FontOverline: number;
	const QTextFormat__FontStrikeOut: number;
	const QTextFormat__FontFixedPitch: number;
	const QTextFormat__FontPixelSize: number;
	const QTextFormat__LastFontProperty: number;
	const QTextFormat__TextUnderlineColor: number;
	const QTextFormat__TextVerticalAlignment: number;
	const QTextFormat__TextOutline: number;
	const QTextFormat__TextUnderlineStyle: number;
	const QTextFormat__TextToolTip: number;
	const QTextFormat__IsAnchor: number;
	const QTextFormat__AnchorHref: number;
	const QTextFormat__AnchorName: number;
	const QTextFormat__ObjectType: number;
	const QTextFormat__ListStyle: number;
	const QTextFormat__ListIndent: number;
	const QTextFormat__ListNumberPrefix: number;
	const QTextFormat__ListNumberSuffix: number;
	const QTextFormat__FrameBorder: number;
	const QTextFormat__FrameMargin: number;
	const QTextFormat__FramePadding: number;
	const QTextFormat__FrameWidth: number;
	const QTextFormat__FrameHeight: number;
	const QTextFormat__FrameTopMargin: number;
	const QTextFormat__FrameBottomMargin: number;
	const QTextFormat__FrameLeftMargin: number;
	const QTextFormat__FrameRightMargin: number;
	const QTextFormat__FrameBorderBrush: number;
	const QTextFormat__FrameBorderStyle: number;
	const QTextFormat__TableColumns: number;
	const QTextFormat__TableColumnWidthConstraints: number;
	const QTextFormat__TableCellSpacing: number;
	const QTextFormat__TableCellPadding: number;
	const QTextFormat__TableHeaderRowCount: number;
	const QTextFormat__TableCellRowSpan: number;
	const QTextFormat__TableCellColumnSpan: number;
	const QTextFormat__TableCellTopPadding: number;
	const QTextFormat__TableCellBottomPadding: number;
	const QTextFormat__TableCellLeftPadding: number;
	const QTextFormat__TableCellRightPadding: number;
	const QTextFormat__ImageName: number;
	const QTextFormat__ImageWidth: number;
	const QTextFormat__ImageHeight: number;
	const QTextFormat__ImageQuality: number;
	const QTextFormat__FullWidthSelection: number;
	const QTextFormat__PageBreakPolicy: number;
	const QTextFormat__UserProperty: number;
	const QTextFormat__NoObject: number;
	const QTextFormat__ImageObject: number;
	const QTextFormat__TableObject: number;
	const QTextFormat__TableCellObject: number;
	const QTextFormat__UserObject: number;
	const QTextFormat__PageBreak_Auto: number;
	const QTextFormat__PageBreak_AlwaysBefore: number;
	const QTextFormat__PageBreak_AlwaysAfter: number;
	interface QTextFragment_ITF {
		QTextFragment_PTR():QTextFragment;
	}

	class QTextFragment {
		___pointer: number;
		QTextFragment_PTR():QTextFragment;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextFragment():void;
		CharFormat():QTextCharFormat;
		CharFormatIndex():number;
		Contains(position:number):boolean;
		GlyphRuns(pos:number,l:number):QGlyphRun[];
		IsValid():boolean;
		Length():number;
		Position():number;
		Text():string;
	}
	function NewQTextFragmentFromPointer(ptr:number):QTextFragment;
	function NewQTextFragment2():QTextFragment;
	function NewQTextFragment3(other:QTextFragment_ITF):QTextFragment;
	interface QTextFrame_ITF extends QTextObject_ITF {
		QTextFrame_PTR():QTextFrame;
	}

	class QTextFrame extends QTextObject {
		___pointer: number;
		QTextFrame_PTR():QTextFrame;
		Pointer():number;
		SetPointer(p:number):void;
		ChildFrames():QTextFrame[];
		FirstCursorPosition():QTextCursor;
		FirstPosition():number;
		FrameFormat():QTextFrameFormat;
		LastCursorPosition():QTextCursor;
		LastPosition():number;
		ParentFrame():QTextFrame;
		SetFrameFormat(format:QTextFrameFormat_ITF):void;
		ConnectDestroyQTextFrame(f:()=>void):void;
		DisconnectDestroyQTextFrame():void;
		DestroyQTextFrame():void;
		DestroyQTextFrameDefault():void;
	}
	function NewQTextFrameFromPointer(ptr:number):QTextFrame;
	function NewQTextFrame(document:QTextDocument_ITF):QTextFrame;
	interface QTextFrameFormat_ITF extends QTextFormat_ITF {
		QTextFrameFormat_PTR():QTextFrameFormat;
	}

	class QTextFrameFormat extends QTextFormat {
		___pointer: number;
		QTextFrameFormat_PTR():QTextFrameFormat;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextFrameFormat():void;
		Border():number;
		BorderBrush():QBrush;
		BorderStyle():number;
		BottomMargin():number;
		Height():QTextLength;
		LeftMargin():number;
		Margin():number;
		Padding():number;
		PageBreakPolicy():number;
		Position():number;
		RightMargin():number;
		SetBorder(width:number):void;
		SetBorderBrush(brush:QBrush_ITF):void;
		SetBorderStyle(style:number):void;
		SetBottomMargin(margi:number):void;
		SetHeight(height:QTextLength_ITF):void;
		SetHeight2(height:number):void;
		SetLeftMargin(margi:number):void;
		SetMargin(margi:number):void;
		SetPadding(width:number):void;
		SetPageBreakPolicy(policy:number):void;
		SetPosition(policy:number):void;
		SetRightMargin(margi:number):void;
		SetTopMargin(margi:number):void;
		SetWidth(width:QTextLength_ITF):void;
		SetWidth2(width:number):void;
		TopMargin():number;
		Width():QTextLength;
	}
	function NewQTextFrameFormatFromPointer(ptr:number):QTextFrameFormat;
	function NewQTextFrameFormat():QTextFrameFormat;
	const QTextFrameFormat__InFlow: number;
	const QTextFrameFormat__FloatLeft: number;
	const QTextFrameFormat__FloatRight: number;
	const QTextFrameFormat__BorderStyle_None: number;
	const QTextFrameFormat__BorderStyle_Dotted: number;
	const QTextFrameFormat__BorderStyle_Dashed: number;
	const QTextFrameFormat__BorderStyle_Solid: number;
	const QTextFrameFormat__BorderStyle_Double: number;
	const QTextFrameFormat__BorderStyle_DotDash: number;
	const QTextFrameFormat__BorderStyle_DotDotDash: number;
	const QTextFrameFormat__BorderStyle_Groove: number;
	const QTextFrameFormat__BorderStyle_Ridge: number;
	const QTextFrameFormat__BorderStyle_Inset: number;
	const QTextFrameFormat__BorderStyle_Outset: number;
	interface QTextFrameLayoutData_ITF {
		QTextFrameLayoutData_PTR():QTextFrameLayoutData;
	}

	class QTextFrameLayoutData {
		___pointer: number;
		QTextFrameLayoutData_PTR():QTextFrameLayoutData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextFrameLayoutData():void;
	}
	function NewQTextFrameLayoutDataFromPointer(ptr:number):QTextFrameLayoutData;
	interface QTextImageFormat_ITF extends QTextCharFormat_ITF {
		QTextImageFormat_PTR():QTextImageFormat;
	}

	class QTextImageFormat extends QTextCharFormat {
		___pointer: number;
		QTextImageFormat_PTR():QTextImageFormat;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextImageFormat():void;
		Height():number;
		Name():string;
		Quality():number;
		SetHeight(height:number):void;
		SetName(name:string):void;
		SetQuality(quality:number):void;
		SetWidth(width:number):void;
		Width():number;
	}
	function NewQTextImageFormatFromPointer(ptr:number):QTextImageFormat;
	function NewQTextImageFormat():QTextImageFormat;
	interface QTextInlineObject_ITF {
		QTextInlineObject_PTR():QTextInlineObject;
	}

	class QTextInlineObject {
		___pointer: number;
		QTextInlineObject_PTR():QTextInlineObject;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextInlineObject():void;
		Ascent():number;
		Descent():number;
		Format():QTextFormat;
		FormatIndex():number;
		Height():number;
		IsValid():boolean;
		Rect():core.QRectF;
		SetAscent(a:number):void;
		SetDescent(d:number):void;
		SetWidth(w:number):void;
		TextDirection():number;
		TextPosition():number;
		Width():number;
	}
	function NewQTextInlineObjectFromPointer(ptr:number):QTextInlineObject;
	interface QTextItem_ITF {
		QTextItem_PTR():QTextItem;
	}

	class QTextItem {
		___pointer: number;
		QTextItem_PTR():QTextItem;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextItem():void;
		Ascent():number;
		Descent():number;
		Font():QFont;
		RenderFlags():number;
		Text():string;
		Width():number;
	}
	function NewQTextItemFromPointer(ptr:number):QTextItem;
	const QTextItem__RightToLeft: number;
	const QTextItem__Overline: number;
	const QTextItem__Underline: number;
	const QTextItem__StrikeOut: number;
	const QTextItem__Dummy: number;
	interface QTextLayout_ITF {
		QTextLayout_PTR():QTextLayout;
	}

	class QTextLayout {
		___pointer: number;
		QTextLayout_PTR():QTextLayout;
		Pointer():number;
		SetPointer(p:number):void;
		BeginLayout():void;
		BoundingRect():core.QRectF;
		CacheEnabled():boolean;
		ClearFormats():void;
		ClearLayout():void;
		CreateLine():QTextLine;
		CursorMoveStyle():number;
		DrawCursor(painter:QPainter_ITF,position:core.QPointF_ITF,cursorPosition:number,width:number):void;
		DrawCursor2(painter:QPainter_ITF,position:core.QPointF_ITF,cursorPosition:number):void;
		EndLayout():void;
		Font():QFont;
		GlyphRuns(from:number,length:number):QGlyphRun[];
		IsValidCursorPosition(pos:number):boolean;
		LeftCursorPosition(oldPos:number):number;
		LineAt(i:number):QTextLine;
		LineCount():number;
		LineForTextPosition(pos:number):QTextLine;
		MaximumWidth():number;
		MinimumWidth():number;
		NextCursorPosition(oldPos:number,mode:number):number;
		Position():core.QPointF;
		PreeditAreaPosition():number;
		PreeditAreaText():string;
		PreviousCursorPosition(oldPos:number,mode:number):number;
		RightCursorPosition(oldPos:number):number;
		SetCacheEnabled(enable:boolean):void;
		SetCursorMoveStyle(style:number):void;
		SetFont(font:QFont_ITF):void;
		SetPosition(p:core.QPointF_ITF):void;
		SetPreeditArea(position:number,text:string):void;
		SetText(stri:string):void;
		SetTextOption(option:QTextOption_ITF):void;
		Text():string;
		TextOption():QTextOption;
		DestroyQTextLayout():void;
	}
	function NewQTextLayoutFromPointer(ptr:number):QTextLayout;
	function NewQTextLayout():QTextLayout;
	function NewQTextLayout2(text:string):QTextLayout;
	function NewQTextLayout4(text:string,font:QFont_ITF,paintdevice:QPaintDevice_ITF):QTextLayout;
	const QTextLayout__SkipCharacters: number;
	const QTextLayout__SkipWords: number;
	interface QTextLength_ITF {
		QTextLength_PTR():QTextLength;
	}

	class QTextLength {
		___pointer: number;
		QTextLength_PTR():QTextLength;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextLength():void;
		RawValue():number;
		Type():number;
		Value(maximumLength:number):number;
	}
	function NewQTextLengthFromPointer(ptr:number):QTextLength;
	function NewQTextLength():QTextLength;
	function NewQTextLength2(ty:number,value:number):QTextLength;
	const QTextLength__VariableLength: number;
	const QTextLength__FixedLength: number;
	const QTextLength__PercentageLength: number;
	interface QTextLine_ITF {
		QTextLine_PTR():QTextLine;
	}

	class QTextLine {
		___pointer: number;
		QTextLine_PTR():QTextLine;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextLine():void;
		Ascent():number;
		CursorToX(cursorPos:number,edge:number):number;
		CursorToX2(cursorPos:number,edge:number):number;
		Descent():number;
		GlyphRuns(from:number,length:number):QGlyphRun[];
		Height():number;
		HorizontalAdvance():number;
		IsValid():boolean;
		Leading():number;
		LeadingIncluded():boolean;
		LineNumber():number;
		NaturalTextRect():core.QRectF;
		NaturalTextWidth():number;
		Position():core.QPointF;
		Rect():core.QRectF;
		SetLeadingIncluded(included:boolean):void;
		SetLineWidth(width:number):void;
		SetNumColumns(numColumns:number):void;
		SetNumColumns2(numColumns:number,alignmentWidth:number):void;
		SetPosition(pos:core.QPointF_ITF):void;
		TextLength():number;
		TextStart():number;
		Width():number;
		X():number;
		XToCursor(x:number,cpos:number):number;
		Y():number;
	}
	function NewQTextLineFromPointer(ptr:number):QTextLine;
	function NewQTextLine():QTextLine;
	const QTextLine__Leading: number;
	const QTextLine__Trailing: number;
	const QTextLine__CursorBetweenCharacters: number;
	const QTextLine__CursorOnCharacter: number;
	interface QTextList_ITF extends QTextBlockGroup_ITF {
		QTextList_PTR():QTextList;
	}

	class QTextList extends QTextBlockGroup {
		___pointer: number;
		QTextList_PTR():QTextList;
		Pointer():number;
		SetPointer(p:number):void;
		Add(block:QTextBlock_ITF):void;
		Count():number;
		Format():QTextListFormat;
		Item(i:number):QTextBlock;
		ItemNumber(block:QTextBlock_ITF):number;
		ItemText(block:QTextBlock_ITF):string;
		Remove(block:QTextBlock_ITF):void;
		RemoveItem(i:number):void;
		SetFormat(format:QTextListFormat_ITF):void;
	}
	function NewQTextListFromPointer(ptr:number):QTextList;
	interface QTextListFormat_ITF extends QTextFormat_ITF {
		QTextListFormat_PTR():QTextListFormat;
	}

	class QTextListFormat extends QTextFormat {
		___pointer: number;
		QTextListFormat_PTR():QTextListFormat;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextListFormat():void;
		Indent():number;
		NumberPrefix():string;
		NumberSuffix():string;
		SetIndent(indentation:number):void;
		SetNumberPrefix(numberPrefix:string):void;
		SetNumberSuffix(numberSuffix:string):void;
		SetStyle(style:number):void;
		Style():number;
	}
	function NewQTextListFormatFromPointer(ptr:number):QTextListFormat;
	function NewQTextListFormat():QTextListFormat;
	const QTextListFormat__ListDisc: number;
	const QTextListFormat__ListCircle: number;
	const QTextListFormat__ListSquare: number;
	const QTextListFormat__ListDecimal: number;
	const QTextListFormat__ListLowerAlpha: number;
	const QTextListFormat__ListUpperAlpha: number;
	const QTextListFormat__ListLowerRoman: number;
	const QTextListFormat__ListUpperRoman: number;
	const QTextListFormat__ListStyleUndefined: number;
	interface QTextObject_ITF extends core.QObject_ITF {
		QTextObject_PTR():QTextObject;
	}

	class QTextObject extends core.QObject {
		___pointer: number;
		QTextObject_PTR():QTextObject;
		Pointer():number;
		SetPointer(p:number):void;
		Document():QTextDocument;
		Format():QTextFormat;
		FormatIndex():number;
		ObjectIndex():number;
		SetFormat(format:QTextFormat_ITF):void;
		ConnectDestroyQTextObject(f:()=>void):void;
		DisconnectDestroyQTextObject():void;
		DestroyQTextObject():void;
		DestroyQTextObjectDefault():void;
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
	function NewQTextObjectFromPointer(ptr:number):QTextObject;
	function NewQTextObject(document:QTextDocument_ITF):QTextObject;
	interface QTextObjectInterface_ITF {
		QTextObjectInterface_PTR():QTextObjectInterface;
	}

	class QTextObjectInterface {
		___pointer: number;
		QTextObjectInterface_PTR():QTextObjectInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDrawObject(f:(painter:QPainter,rect:core.QRectF,doc:QTextDocument,posInDocument:number,format:QTextFormat)=>void):void;
		DisconnectDrawObject():void;
		DrawObject(painter:QPainter_ITF,rect:core.QRectF_ITF,doc:QTextDocument_ITF,posInDocument:number,format:QTextFormat_ITF):void;
		ConnectIntrinsicSize(f:(doc:QTextDocument,posInDocument:number,format:QTextFormat)=>core.QSizeF):void;
		DisconnectIntrinsicSize():void;
		IntrinsicSize(doc:QTextDocument_ITF,posInDocument:number,format:QTextFormat_ITF):core.QSizeF;
		ConnectDestroyQTextObjectInterface(f:()=>void):void;
		DisconnectDestroyQTextObjectInterface():void;
		DestroyQTextObjectInterface():void;
		DestroyQTextObjectInterfaceDefault():void;
	}
	function NewQTextObjectInterfaceFromPointer(ptr:number):QTextObjectInterface;
	interface QTextOption_ITF {
		QTextOption_PTR():QTextOption;
	}

	class QTextOption {
		___pointer: number;
		QTextOption_PTR():QTextOption;
		Pointer():number;
		SetPointer(p:number):void;
		Alignment():number;
		Flags():number;
		SetAlignment(alignment:number):void;
		SetFlags(flags:number):void;
		SetTabArray(tabStops:number[]):void;
		SetTabStopDistance(tabStopDistance:number):void;
		SetTextDirection(direction:number):void;
		SetUseDesignMetrics(enable:boolean):void;
		SetWrapMode(mode:number):void;
		TabArray():number[];
		TabStopDistance():number;
		TextDirection():number;
		UseDesignMetrics():boolean;
		WrapMode():number;
		DestroyQTextOption():void;
	}
	function NewQTextOptionFromPointer(ptr:number):QTextOption;
	function NewQTextOption():QTextOption;
	function NewQTextOption2(alignment:number):QTextOption;
	function NewQTextOption3(other:QTextOption_ITF):QTextOption;
	const QTextOption__LeftTab: number;
	const QTextOption__RightTab: number;
	const QTextOption__CenterTab: number;
	const QTextOption__DelimiterTab: number;
	const QTextOption__NoWrap: number;
	const QTextOption__WordWrap: number;
	const QTextOption__ManualWrap: number;
	const QTextOption__WrapAnywhere: number;
	const QTextOption__WrapAtWordBoundaryOrAnywhere: number;
	const QTextOption__ShowTabsAndSpaces: number;
	const QTextOption__ShowLineAndParagraphSeparators: number;
	const QTextOption__AddSpaceForLineAndParagraphSeparators: number;
	const QTextOption__SuppressColors: number;
	const QTextOption__ShowDocumentTerminator: number;
	const QTextOption__IncludeTrailingSpaces: number;
	interface QTextTable_ITF extends QTextFrame_ITF {
		QTextTable_PTR():QTextTable;
	}

	class QTextTable extends QTextFrame {
		___pointer: number;
		QTextTable_PTR():QTextTable;
		Pointer():number;
		SetPointer(p:number):void;
		AppendColumns(count:number):void;
		AppendRows(count:number):void;
		CellAt(row:number,column:number):QTextTableCell;
		CellAt2(position:number):QTextTableCell;
		CellAt3(cursor:QTextCursor_ITF):QTextTableCell;
		Columns():number;
		Format():QTextTableFormat;
		InsertColumns(index:number,columns:number):void;
		InsertRows(index:number,rows:number):void;
		MergeCells(row:number,column:number,numRows:number,numCols:number):void;
		MergeCells2(cursor:QTextCursor_ITF):void;
		RemoveColumns(index:number,columns:number):void;
		RemoveRows(index:number,rows:number):void;
		Resize(rows:number,columns:number):void;
		RowEnd(cursor:QTextCursor_ITF):QTextCursor;
		RowStart(cursor:QTextCursor_ITF):QTextCursor;
		Rows():number;
		SetFormat(format:QTextTableFormat_ITF):void;
		SplitCell(row:number,column:number,numRows:number,numCols:number):void;
	}
	function NewQTextTableFromPointer(ptr:number):QTextTable;
	interface QTextTableCell_ITF {
		QTextTableCell_PTR():QTextTableCell;
	}

	class QTextTableCell {
		___pointer: number;
		QTextTableCell_PTR():QTextTableCell;
		Pointer():number;
		SetPointer(p:number):void;
		Column():number;
		ColumnSpan():number;
		FirstCursorPosition():QTextCursor;
		Format():QTextCharFormat;
		IsValid():boolean;
		LastCursorPosition():QTextCursor;
		Row():number;
		RowSpan():number;
		SetFormat(format:QTextCharFormat_ITF):void;
		TableCellFormatIndex():number;
		DestroyQTextTableCell():void;
	}
	function NewQTextTableCellFromPointer(ptr:number):QTextTableCell;
	function NewQTextTableCell():QTextTableCell;
	function NewQTextTableCell2(other:QTextTableCell_ITF):QTextTableCell;
	interface QTextTableCellFormat_ITF extends QTextCharFormat_ITF {
		QTextTableCellFormat_PTR():QTextTableCellFormat;
	}

	class QTextTableCellFormat extends QTextCharFormat {
		___pointer: number;
		QTextTableCellFormat_PTR():QTextTableCellFormat;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextTableCellFormat():void;
		BottomPadding():number;
		LeftPadding():number;
		RightPadding():number;
		SetBottomPadding(padding:number):void;
		SetLeftPadding(padding:number):void;
		SetPadding(padding:number):void;
		SetRightPadding(padding:number):void;
		SetTopPadding(padding:number):void;
		TopPadding():number;
	}
	function NewQTextTableCellFormatFromPointer(ptr:number):QTextTableCellFormat;
	function NewQTextTableCellFormat():QTextTableCellFormat;
	interface QTextTableFormat_ITF extends QTextFrameFormat_ITF {
		QTextTableFormat_PTR():QTextTableFormat;
	}

	class QTextTableFormat extends QTextFrameFormat {
		___pointer: number;
		QTextTableFormat_PTR():QTextTableFormat;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextTableFormat():void;
		Alignment():number;
		CellPadding():number;
		CellSpacing():number;
		ClearColumnWidthConstraints():void;
		Columns():number;
		HeaderRowCount():number;
		SetAlignment(alignment:number):void;
		SetCellPadding(padding:number):void;
		SetCellSpacing(spacing:number):void;
		SetColumnWidthConstraints(constraints:QTextLength[]):void;
		SetHeaderRowCount(count:number):void;
	}
	function NewQTextTableFormatFromPointer(ptr:number):QTextTableFormat;
	function NewQTextTableFormat():QTextTableFormat;
	interface QTouchDevice_ITF {
		QTouchDevice_PTR():QTouchDevice;
	}

	class QTouchDevice {
		___pointer: number;
		QTouchDevice_PTR():QTouchDevice;
		Pointer():number;
		SetPointer(p:number):void;
		Capabilities():number;
		Devices():QTouchDevice[];
		MaximumTouchPoints():number;
		Name():string;
		SetCapabilities(caps:number):void;
		SetMaximumTouchPoints(max:number):void;
		SetName(name:string):void;
		SetType(devType:number):void;
		Type():number;
		DestroyQTouchDevice():void;
	}
	function NewQTouchDeviceFromPointer(ptr:number):QTouchDevice;
	function NewQTouchDevice():QTouchDevice;
	function QTouchDevice_Devices():QTouchDevice[];
	const QTouchDevice__TouchScreen: number;
	const QTouchDevice__TouchPad: number;
	const QTouchDevice__Position: number;
	const QTouchDevice__Area: number;
	const QTouchDevice__Pressure: number;
	const QTouchDevice__Velocity: number;
	const QTouchDevice__RawPositions: number;
	const QTouchDevice__NormalizedPosition: number;
	const QTouchDevice__MouseEmulation: number;
	interface QTouchEvent_ITF extends QInputEvent_ITF {
		QTouchEvent_PTR():QTouchEvent;
	}

	class QTouchEvent extends QInputEvent {
		___pointer: number;
		QTouchEvent_PTR():QTouchEvent;
		Pointer():number;
		SetPointer(p:number):void;
		Device():QTouchDevice;
		Target():core.QObject;
		TouchPointStates():number;
		Window():QWindow;
		ConnectDestroyQTouchEvent(f:()=>void):void;
		DisconnectDestroyQTouchEvent():void;
		DestroyQTouchEvent():void;
		DestroyQTouchEventDefault():void;
	}
	function NewQTouchEventFromPointer(ptr:number):QTouchEvent;
	interface QTransform_ITF {
		QTransform_PTR():QTransform;
	}

	class QTransform {
		___pointer: number;
		QTransform_PTR():QTransform;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTransform():void;
		Adjoint():QTransform;
		Determinant():number;
		Dx():number;
		Dy():number;
		FromScale(sx:number,sy:number):QTransform;
		FromTranslate(dx:number,dy:number):QTransform;
		Inverted(invertible:boolean):QTransform;
		IsAffine():boolean;
		IsIdentity():boolean;
		IsInvertible():boolean;
		IsRotating():boolean;
		IsScaling():boolean;
		IsTranslating():boolean;
		M11():number;
		M12():number;
		M13():number;
		M21():number;
		M22():number;
		M23():number;
		M31():number;
		M32():number;
		M33():number;
		Map(x:number,y:number,tx:number,ty:number):void;
		Map2(point:core.QPoint_ITF):core.QPoint;
		Map3(p:core.QPointF_ITF):core.QPointF;
		Map4(l:core.QLine_ITF):core.QLine;
		Map5(line:core.QLineF_ITF):core.QLineF;
		Map6(polygon:QPolygonF_ITF):QPolygonF;
		Map7(polygon:QPolygon_ITF):QPolygon;
		Map8(region:QRegion_ITF):QRegion;
		Map9(path:QPainterPath_ITF):QPainterPath;
		Map10(x:number,y:number,tx:number,ty:number):void;
		MapRect(rectangle:core.QRectF_ITF):core.QRectF;
		MapRect2(rectangle:core.QRect_ITF):core.QRect;
		MapToPolygon(rectangle:core.QRect_ITF):QPolygon;
		QuadToQuad(one:QPolygonF_ITF,two:QPolygonF_ITF,trans:QTransform_ITF):boolean;
		QuadToSquare(quad:QPolygonF_ITF,trans:QTransform_ITF):boolean;
		Reset():void;
		Rotate(angle:number,axis:number):QTransform;
		RotateRadians(angle:number,axis:number):QTransform;
		Scale(sx:number,sy:number):QTransform;
		SetMatrix(m11:number,m12:number,m13:number,m21:number,m22:number,m23:number,m31:number,m32:number,m33:number):void;
		Shear(sh:number,sv:number):QTransform;
		SquareToQuad(quad:QPolygonF_ITF,trans:QTransform_ITF):boolean;
		ToAffine():QMatrix;
		Translate(dx:number,dy:number):QTransform;
		Transposed():QTransform;
		Type():number;
	}
	function NewQTransformFromPointer(ptr:number):QTransform;
	function NewQTransform2():QTransform;
	function NewQTransform3(m11:number,m12:number,m13:number,m21:number,m22:number,m23:number,m31:number,m32:number,m33:number):QTransform;
	function NewQTransform4(m11:number,m12:number,m21:number,m22:number,dx:number,dy:number):QTransform;
	function NewQTransform5(matrix:QMatrix_ITF):QTransform;
	function QTransform_FromScale(sx:number,sy:number):QTransform;
	function QTransform_FromTranslate(dx:number,dy:number):QTransform;
	function QTransform_QuadToQuad(one:QPolygonF_ITF,two:QPolygonF_ITF,trans:QTransform_ITF):boolean;
	function QTransform_QuadToSquare(quad:QPolygonF_ITF,trans:QTransform_ITF):boolean;
	function QTransform_SquareToQuad(quad:QPolygonF_ITF,trans:QTransform_ITF):boolean;
	const QTransform__TxNone: number;
	const QTransform__TxTranslate: number;
	const QTransform__TxScale: number;
	const QTransform__TxRotate: number;
	const QTransform__TxShear: number;
	const QTransform__TxProject: number;
	interface QValidator_ITF extends core.QObject_ITF {
		QValidator_PTR():QValidator;
	}

	class QValidator extends core.QObject {
		___pointer: number;
		QValidator_PTR():QValidator;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectChanged(f:()=>void):void;
		DisconnectChanged():void;
		Changed():void;
		ConnectFixup(f:(input:string)=>void):void;
		DisconnectFixup():void;
		Fixup(input:string):void;
		FixupDefault(input:string):void;
		Locale():core.QLocale;
		SetLocale(locale:core.QLocale_ITF):void;
		ConnectValidate(f:(input:string,pos:number)=>number):void;
		DisconnectValidate():void;
		Validate(input:string,pos:number):number;
		ConnectDestroyQValidator(f:()=>void):void;
		DisconnectDestroyQValidator():void;
		DestroyQValidator():void;
		DestroyQValidatorDefault():void;
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
	function NewQValidatorFromPointer(ptr:number):QValidator;
	function NewQValidator(parent:core.QObject_ITF):QValidator;
	const QValidator__Invalid: number;
	const QValidator__Intermediate: number;
	const QValidator__Acceptable: number;
	interface QVector2D_ITF {
		QVector2D_PTR():QVector2D;
	}

	class QVector2D {
		___pointer: number;
		QVector2D_PTR():QVector2D;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVector2D():void;
		DistanceToLine(point:QVector2D_ITF,direction:QVector2D_ITF):number;
		DistanceToPoint(point:QVector2D_ITF):number;
		DotProduct(v1:QVector2D_ITF,v2:QVector2D_ITF):number;
		IsNull():boolean;
		Length():number;
		LengthSquared():number;
		Normalize():void;
		Normalized():QVector2D;
		SetX(x:number):void;
		SetY(y:number):void;
		ToPoint():core.QPoint;
		ToPointF():core.QPointF;
		ToVector3D():QVector3D;
		ToVector4D():QVector4D;
		X():number;
		Y():number;
	}
	function NewQVector2DFromPointer(ptr:number):QVector2D;
	function NewQVector2D():QVector2D;
	function NewQVector2D3(xpos:number,ypos:number):QVector2D;
	function NewQVector2D4(point:core.QPoint_ITF):QVector2D;
	function NewQVector2D5(point:core.QPointF_ITF):QVector2D;
	function NewQVector2D6(vector:QVector3D_ITF):QVector2D;
	function NewQVector2D7(vector:QVector4D_ITF):QVector2D;
	function QVector2D_DotProduct(v1:QVector2D_ITF,v2:QVector2D_ITF):number;
	interface QVector3D_ITF {
		QVector3D_PTR():QVector3D;
	}

	class QVector3D {
		___pointer: number;
		QVector3D_PTR():QVector3D;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVector3D():void;
		CrossProduct(v1:QVector3D_ITF,v2:QVector3D_ITF):QVector3D;
		DistanceToLine(point:QVector3D_ITF,direction:QVector3D_ITF):number;
		DistanceToPlane(plane:QVector3D_ITF,normal:QVector3D_ITF):number;
		DistanceToPlane2(plane1:QVector3D_ITF,plane2:QVector3D_ITF,plane3:QVector3D_ITF):number;
		DistanceToPoint(point:QVector3D_ITF):number;
		DotProduct(v1:QVector3D_ITF,v2:QVector3D_ITF):number;
		IsNull():boolean;
		Length():number;
		LengthSquared():number;
		Normal(v1:QVector3D_ITF,v2:QVector3D_ITF):QVector3D;
		Normal2(v1:QVector3D_ITF,v2:QVector3D_ITF,v3:QVector3D_ITF):QVector3D;
		Normalize():void;
		Normalized():QVector3D;
		Project(modelView:QMatrix4x4_ITF,projection:QMatrix4x4_ITF,viewport:core.QRect_ITF):QVector3D;
		SetX(x:number):void;
		SetY(y:number):void;
		SetZ(z:number):void;
		ToPoint():core.QPoint;
		ToPointF():core.QPointF;
		ToVector2D():QVector2D;
		ToVector4D():QVector4D;
		Unproject(modelView:QMatrix4x4_ITF,projection:QMatrix4x4_ITF,viewport:core.QRect_ITF):QVector3D;
		X():number;
		Y():number;
		Z():number;
	}
	function NewQVector3DFromPointer(ptr:number):QVector3D;
	function NewQVector3D():QVector3D;
	function NewQVector3D3(xpos:number,ypos:number,zpos:number):QVector3D;
	function NewQVector3D4(point:core.QPoint_ITF):QVector3D;
	function NewQVector3D5(point:core.QPointF_ITF):QVector3D;
	function NewQVector3D6(vector:QVector2D_ITF):QVector3D;
	function NewQVector3D7(vector:QVector2D_ITF,zpos:number):QVector3D;
	function NewQVector3D8(vector:QVector4D_ITF):QVector3D;
	function QVector3D_CrossProduct(v1:QVector3D_ITF,v2:QVector3D_ITF):QVector3D;
	function QVector3D_DotProduct(v1:QVector3D_ITF,v2:QVector3D_ITF):number;
	function QVector3D_Normal(v1:QVector3D_ITF,v2:QVector3D_ITF):QVector3D;
	function QVector3D_Normal2(v1:QVector3D_ITF,v2:QVector3D_ITF,v3:QVector3D_ITF):QVector3D;
	interface QVector4D_ITF {
		QVector4D_PTR():QVector4D;
	}

	class QVector4D {
		___pointer: number;
		QVector4D_PTR():QVector4D;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVector4D():void;
		DotProduct(v1:QVector4D_ITF,v2:QVector4D_ITF):number;
		IsNull():boolean;
		Length():number;
		LengthSquared():number;
		Normalize():void;
		Normalized():QVector4D;
		SetW(w:number):void;
		SetX(x:number):void;
		SetY(y:number):void;
		SetZ(z:number):void;
		ToPoint():core.QPoint;
		ToPointF():core.QPointF;
		ToVector2D():QVector2D;
		ToVector2DAffine():QVector2D;
		ToVector3D():QVector3D;
		ToVector3DAffine():QVector3D;
		W():number;
		X():number;
		Y():number;
		Z():number;
	}
	function NewQVector4DFromPointer(ptr:number):QVector4D;
	function NewQVector4D():QVector4D;
	function NewQVector4D3(xpos:number,ypos:number,zpos:number,wpos:number):QVector4D;
	function NewQVector4D4(point:core.QPoint_ITF):QVector4D;
	function NewQVector4D5(point:core.QPointF_ITF):QVector4D;
	function NewQVector4D6(vector:QVector2D_ITF):QVector4D;
	function NewQVector4D7(vector:QVector2D_ITF,zpos:number,wpos:number):QVector4D;
	function NewQVector4D8(vector:QVector3D_ITF):QVector4D;
	function NewQVector4D9(vector:QVector3D_ITF,wpos:number):QVector4D;
	function QVector4D_DotProduct(v1:QVector4D_ITF,v2:QVector4D_ITF):number;
	interface QVulkanDeviceFunctions_ITF {
		QVulkanDeviceFunctions_PTR():QVulkanDeviceFunctions;
	}

	class QVulkanDeviceFunctions {
		___pointer: number;
		QVulkanDeviceFunctions_PTR():QVulkanDeviceFunctions;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVulkanDeviceFunctions():void;
	}
	interface QVulkanExtension_ITF {
		QVulkanExtension_PTR():QVulkanExtension;
	}

	class QVulkanExtension {
		___pointer: number;
		QVulkanExtension_PTR():QVulkanExtension;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVulkanExtension():void;
	}
	interface QVulkanFunctions_ITF {
		QVulkanFunctions_PTR():QVulkanFunctions;
	}

	class QVulkanFunctions {
		___pointer: number;
		QVulkanFunctions_PTR():QVulkanFunctions;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVulkanFunctions():void;
	}
	interface QVulkanInfoVector_ITF extends core.QVector_ITF {
		QVulkanInfoVector_PTR():QVulkanInfoVector;
	}

	class QVulkanInfoVector extends core.QVector {
		___pointer: number;
		QVulkanInfoVector_PTR():QVulkanInfoVector;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVulkanInfoVector():void;
	}
	interface QVulkanInstance_ITF {
		QVulkanInstance_PTR():QVulkanInstance;
	}

	class QVulkanInstance {
		___pointer: number;
		QVulkanInstance_PTR():QVulkanInstance;
		Pointer():number;
		SetPointer(p:number):void;
	}
	const QVulkanInstance__NoDebugOutputRedirect: number;
	interface QVulkanLayer_ITF {
		QVulkanLayer_PTR():QVulkanLayer;
	}

	class QVulkanLayer {
		___pointer: number;
		QVulkanLayer_PTR():QVulkanLayer;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVulkanLayer():void;
	}
	interface QVulkanWindow_ITF extends QWindow_ITF {
		QVulkanWindow_PTR():QVulkanWindow;
	}

	class QVulkanWindow extends QWindow {
		___pointer: number;
		QVulkanWindow_PTR():QVulkanWindow;
		Pointer():number;
		SetPointer(p:number):void;
	}
	const QVulkanWindow__PersistentResources: number;
	interface QVulkanWindowRenderer_ITF {
		QVulkanWindowRenderer_PTR():QVulkanWindowRenderer;
	}

	class QVulkanWindowRenderer {
		___pointer: number;
		QVulkanWindowRenderer_PTR():QVulkanWindowRenderer;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QWhatsThisClickedEvent_ITF extends core.QEvent_ITF {
		QWhatsThisClickedEvent_PTR():QWhatsThisClickedEvent;
	}

	class QWhatsThisClickedEvent extends core.QEvent {
		___pointer: number;
		QWhatsThisClickedEvent_PTR():QWhatsThisClickedEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWhatsThisClickedEvent():void;
		Href():string;
	}
	function NewQWhatsThisClickedEventFromPointer(ptr:number):QWhatsThisClickedEvent;
	function NewQWhatsThisClickedEvent(href:string):QWhatsThisClickedEvent;
	interface QWheelEvent_ITF extends QInputEvent_ITF {
		QWheelEvent_PTR():QWheelEvent;
	}

	class QWheelEvent extends QInputEvent {
		___pointer: number;
		QWheelEvent_PTR():QWheelEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWheelEvent():void;
		AngleDelta():core.QPoint;
		Buttons():number;
		GlobalPos():core.QPoint;
		GlobalPosF():core.QPointF;
		GlobalX():number;
		GlobalY():number;
		Inverted():boolean;
		Phase():number;
		PixelDelta():core.QPoint;
		Pos():core.QPoint;
		PosF():core.QPointF;
		Source():number;
		X():number;
		Y():number;
	}
	function NewQWheelEventFromPointer(ptr:number):QWheelEvent;
	function NewQWheelEvent3(pos:core.QPointF_ITF,globalPos:core.QPointF_ITF,pixelDelta:core.QPoint_ITF,angleDelta:core.QPoint_ITF,qt4Delta:number,qt4Orientation:number,buttons:number,modifiers:number):QWheelEvent;
	function NewQWheelEvent4(pos:core.QPointF_ITF,globalPos:core.QPointF_ITF,pixelDelta:core.QPoint_ITF,angleDelta:core.QPoint_ITF,qt4Delta:number,qt4Orientation:number,buttons:number,modifiers:number,phase:number):QWheelEvent;
	function NewQWheelEvent5(pos:core.QPointF_ITF,globalPos:core.QPointF_ITF,pixelDelta:core.QPoint_ITF,angleDelta:core.QPoint_ITF,qt4Delta:number,qt4Orientation:number,buttons:number,modifiers:number,phase:number,source:number):QWheelEvent;
	function NewQWheelEvent6(pos:core.QPointF_ITF,globalPos:core.QPointF_ITF,pixelDelta:core.QPoint_ITF,angleDelta:core.QPoint_ITF,qt4Delta:number,qt4Orientation:number,buttons:number,modifiers:number,phase:number,source:number,inverted:boolean):QWheelEvent;
	function NewQWheelEvent7(pos:core.QPointF_ITF,globalPos:core.QPointF_ITF,pixelDelta:core.QPoint_ITF,angleDelta:core.QPoint_ITF,buttons:number,modifiers:number,phase:number,inverted:boolean,source:number):QWheelEvent;
	interface QWindow_ITF extends QSurface_ITF {
		QWindow_PTR():QWindow;
		QObject_PTR():core.QObject;
	}

	class QWindow extends QSurface {
		QObject_PTR():core.QObject
		___pointer: number;
		QWindow_PTR():QWindow;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActiveChanged(f:()=>void):void;
		DisconnectActiveChanged():void;
		ActiveChanged():void;
		ConnectAlert(f:(msec:number)=>void):void;
		DisconnectAlert():void;
		Alert(msec:number):void;
		AlertDefault(msec:number):void;
		BaseSize():core.QSize;
		ConnectClose(f:()=>boolean):void;
		DisconnectClose():void;
		Close():boolean;
		CloseDefault():boolean;
		ContentOrientation():number;
		ConnectContentOrientationChanged(f:(orientation:number)=>void):void;
		DisconnectContentOrientationChanged():void;
		ContentOrientationChanged(orientation:number):void;
		Create():void;
		Cursor():QCursor;
		Destroy():void;
		DevicePixelRatio():number;
		ConnectEvent(f:(ev:core.QEvent)=>boolean):void;
		DisconnectEvent():void;
		Event(ev:core.QEvent_ITF):boolean;
		EventDefault(ev:core.QEvent_ITF):boolean;
		ConnectExposeEvent(f:(ev:QExposeEvent)=>void):void;
		DisconnectExposeEvent():void;
		ExposeEvent(ev:QExposeEvent_ITF):void;
		ExposeEventDefault(ev:QExposeEvent_ITF):void;
		FilePath():string;
		Flags():number;
		ConnectFocusInEvent(f:(ev:QFocusEvent)=>void):void;
		DisconnectFocusInEvent():void;
		FocusInEvent(ev:QFocusEvent_ITF):void;
		FocusInEventDefault(ev:QFocusEvent_ITF):void;
		ConnectFocusObject(f:()=>core.QObject):void;
		DisconnectFocusObject():void;
		FocusObject():core.QObject;
		FocusObjectDefault():core.QObject;
		ConnectFocusObjectChanged(f:(object:core.QObject)=>void):void;
		DisconnectFocusObjectChanged():void;
		FocusObjectChanged(object:core.QObject_ITF):void;
		ConnectFocusOutEvent(f:(ev:QFocusEvent)=>void):void;
		DisconnectFocusOutEvent():void;
		FocusOutEvent(ev:QFocusEvent_ITF):void;
		FocusOutEventDefault(ev:QFocusEvent_ITF):void;
		ConnectFormat(f:()=>QSurfaceFormat):void;
		DisconnectFormat():void;
		Format():QSurfaceFormat;
		FormatDefault():QSurfaceFormat;
		FrameGeometry():core.QRect;
		FrameMargins():core.QMargins;
		FramePosition():core.QPoint;
		FromWinId(id:number):QWindow;
		Geometry():core.QRect;
		Height():number;
		ConnectHeightChanged(f:(arg:number)=>void):void;
		DisconnectHeightChanged():void;
		HeightChanged(arg:number):void;
		ConnectHide(f:()=>void):void;
		DisconnectHide():void;
		Hide():void;
		HideDefault():void;
		ConnectHideEvent(f:(ev:QHideEvent)=>void):void;
		DisconnectHideEvent():void;
		HideEvent(ev:QHideEvent_ITF):void;
		HideEventDefault(ev:QHideEvent_ITF):void;
		Icon():QIcon;
		IsActive():boolean;
		IsAncestorOf(child:QWindow_ITF,mode:number):boolean;
		IsExposed():boolean;
		IsModal():boolean;
		IsTopLevel():boolean;
		IsVisible():boolean;
		ConnectKeyPressEvent(f:(ev:QKeyEvent)=>void):void;
		DisconnectKeyPressEvent():void;
		KeyPressEvent(ev:QKeyEvent_ITF):void;
		KeyPressEventDefault(ev:QKeyEvent_ITF):void;
		ConnectKeyReleaseEvent(f:(ev:QKeyEvent)=>void):void;
		DisconnectKeyReleaseEvent():void;
		KeyReleaseEvent(ev:QKeyEvent_ITF):void;
		KeyReleaseEventDefault(ev:QKeyEvent_ITF):void;
		ConnectLower(f:()=>void):void;
		DisconnectLower():void;
		Lower():void;
		LowerDefault():void;
		MapFromGlobal(pos:core.QPoint_ITF):core.QPoint;
		MapToGlobal(pos:core.QPoint_ITF):core.QPoint;
		Mask():QRegion;
		MaximumHeight():number;
		ConnectMaximumHeightChanged(f:(arg:number)=>void):void;
		DisconnectMaximumHeightChanged():void;
		MaximumHeightChanged(arg:number):void;
		MaximumSize():core.QSize;
		MaximumWidth():number;
		ConnectMaximumWidthChanged(f:(arg:number)=>void):void;
		DisconnectMaximumWidthChanged():void;
		MaximumWidthChanged(arg:number):void;
		MinimumHeight():number;
		ConnectMinimumHeightChanged(f:(arg:number)=>void):void;
		DisconnectMinimumHeightChanged():void;
		MinimumHeightChanged(arg:number):void;
		MinimumSize():core.QSize;
		MinimumWidth():number;
		ConnectMinimumWidthChanged(f:(arg:number)=>void):void;
		DisconnectMinimumWidthChanged():void;
		MinimumWidthChanged(arg:number):void;
		Modality():number;
		ConnectModalityChanged(f:(modality:number)=>void):void;
		DisconnectModalityChanged():void;
		ModalityChanged(modality:number):void;
		ConnectMouseDoubleClickEvent(f:(ev:QMouseEvent)=>void):void;
		DisconnectMouseDoubleClickEvent():void;
		MouseDoubleClickEvent(ev:QMouseEvent_ITF):void;
		MouseDoubleClickEventDefault(ev:QMouseEvent_ITF):void;
		ConnectMouseMoveEvent(f:(ev:QMouseEvent)=>void):void;
		DisconnectMouseMoveEvent():void;
		MouseMoveEvent(ev:QMouseEvent_ITF):void;
		MouseMoveEventDefault(ev:QMouseEvent_ITF):void;
		ConnectMousePressEvent(f:(ev:QMouseEvent)=>void):void;
		DisconnectMousePressEvent():void;
		MousePressEvent(ev:QMouseEvent_ITF):void;
		MousePressEventDefault(ev:QMouseEvent_ITF):void;
		ConnectMouseReleaseEvent(f:(ev:QMouseEvent)=>void):void;
		DisconnectMouseReleaseEvent():void;
		MouseReleaseEvent(ev:QMouseEvent_ITF):void;
		MouseReleaseEventDefault(ev:QMouseEvent_ITF):void;
		ConnectMoveEvent(f:(ev:QMoveEvent)=>void):void;
		DisconnectMoveEvent():void;
		MoveEvent(ev:QMoveEvent_ITF):void;
		MoveEventDefault(ev:QMoveEvent_ITF):void;
		ConnectNativeEvent(f:(eventType:core.QByteArray,message:number,result:number)=>boolean):void;
		DisconnectNativeEvent():void;
		NativeEvent(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		Opacity():number;
		ConnectOpacityChanged(f:(opacity:number)=>void):void;
		DisconnectOpacityChanged():void;
		OpacityChanged(opacity:number):void;
		Parent(mode:number):QWindow;
		Parent2():QWindow;
		Position():core.QPoint;
		ConnectRaise(f:()=>void):void;
		DisconnectRaise():void;
		Raise():void;
		RaiseDefault():void;
		ReportContentOrientationChange(orientation:number):void;
		ConnectRequestActivate(f:()=>void):void;
		DisconnectRequestActivate():void;
		RequestActivate():void;
		RequestActivateDefault():void;
		ConnectRequestUpdate(f:()=>void):void;
		DisconnectRequestUpdate():void;
		RequestUpdate():void;
		RequestUpdateDefault():void;
		RequestedFormat():QSurfaceFormat;
		Resize(newSize:core.QSize_ITF):void;
		Resize2(w:number,h:number):void;
		ConnectResizeEvent(f:(ev:QResizeEvent)=>void):void;
		DisconnectResizeEvent():void;
		ResizeEvent(ev:QResizeEvent_ITF):void;
		ResizeEventDefault(ev:QResizeEvent_ITF):void;
		Screen():QScreen;
		ConnectScreenChanged(f:(screen:QScreen)=>void):void;
		DisconnectScreenChanged():void;
		ScreenChanged(screen:QScreen_ITF):void;
		SetBaseSize(size:core.QSize_ITF):void;
		SetCursor(cursor:QCursor_ITF):void;
		SetFilePath(filePath:string):void;
		SetFlag(flag:number,on:boolean):void;
		SetFlags(flags:number):void;
		SetFormat(format:QSurfaceFormat_ITF):void;
		SetFramePosition(point:core.QPoint_ITF):void;
		ConnectSetGeometry(f:(posx:number,posy:number,w:number,h:number)=>void):void;
		DisconnectSetGeometry():void;
		SetGeometry(posx:number,posy:number,w:number,h:number):void;
		SetGeometryDefault(posx:number,posy:number,w:number,h:number):void;
		ConnectSetGeometry2(f:(rect:core.QRect)=>void):void;
		DisconnectSetGeometry2():void;
		SetGeometry2(rect:core.QRect_ITF):void;
		SetGeometry2Default(rect:core.QRect_ITF):void;
		ConnectSetHeight(f:(arg:number)=>void):void;
		DisconnectSetHeight():void;
		SetHeight(arg:number):void;
		SetHeightDefault(arg:number):void;
		SetIcon(icon:QIcon_ITF):void;
		SetKeyboardGrabEnabled(grab:boolean):boolean;
		SetMask(region:QRegion_ITF):void;
		ConnectSetMaximumHeight(f:(h:number)=>void):void;
		DisconnectSetMaximumHeight():void;
		SetMaximumHeight(h:number):void;
		SetMaximumHeightDefault(h:number):void;
		SetMaximumSize(size:core.QSize_ITF):void;
		ConnectSetMaximumWidth(f:(w:number)=>void):void;
		DisconnectSetMaximumWidth():void;
		SetMaximumWidth(w:number):void;
		SetMaximumWidthDefault(w:number):void;
		ConnectSetMinimumHeight(f:(h:number)=>void):void;
		DisconnectSetMinimumHeight():void;
		SetMinimumHeight(h:number):void;
		SetMinimumHeightDefault(h:number):void;
		SetMinimumSize(size:core.QSize_ITF):void;
		ConnectSetMinimumWidth(f:(w:number)=>void):void;
		DisconnectSetMinimumWidth():void;
		SetMinimumWidth(w:number):void;
		SetMinimumWidthDefault(w:number):void;
		SetModality(modality:number):void;
		SetMouseGrabEnabled(grab:boolean):boolean;
		SetOpacity(level:number):void;
		SetParent(parent:QWindow_ITF):void;
		SetPosition(pt:core.QPoint_ITF):void;
		SetPosition2(posx:number,posy:number):void;
		SetScreen(newScreen:QScreen_ITF):void;
		SetSizeIncrement(size:core.QSize_ITF):void;
		SetSurfaceType(surfaceType:number):void;
		ConnectSetTitle(f:(vqs:string)=>void):void;
		DisconnectSetTitle():void;
		SetTitle(vqs:string):void;
		SetTitleDefault(vqs:string):void;
		SetVisibility(v:number):void;
		ConnectSetVisible(f:(visible:boolean)=>void):void;
		DisconnectSetVisible():void;
		SetVisible(visible:boolean):void;
		SetVisibleDefault(visible:boolean):void;
		ConnectSetWidth(f:(arg:number)=>void):void;
		DisconnectSetWidth():void;
		SetWidth(arg:number):void;
		SetWidthDefault(arg:number):void;
		SetWindowState(state:number):void;
		SetWindowStates(state:number):void;
		ConnectSetX(f:(arg:number)=>void):void;
		DisconnectSetX():void;
		SetX(arg:number):void;
		SetXDefault(arg:number):void;
		ConnectSetY(f:(arg:number)=>void):void;
		DisconnectSetY():void;
		SetY(arg:number):void;
		SetYDefault(arg:number):void;
		ConnectShow(f:()=>void):void;
		DisconnectShow():void;
		Show():void;
		ShowDefault():void;
		ConnectShowEvent(f:(ev:QShowEvent)=>void):void;
		DisconnectShowEvent():void;
		ShowEvent(ev:QShowEvent_ITF):void;
		ShowEventDefault(ev:QShowEvent_ITF):void;
		ConnectShowFullScreen(f:()=>void):void;
		DisconnectShowFullScreen():void;
		ShowFullScreen():void;
		ShowFullScreenDefault():void;
		ConnectShowMaximized(f:()=>void):void;
		DisconnectShowMaximized():void;
		ShowMaximized():void;
		ShowMaximizedDefault():void;
		ConnectShowMinimized(f:()=>void):void;
		DisconnectShowMinimized():void;
		ShowMinimized():void;
		ShowMinimizedDefault():void;
		ConnectShowNormal(f:()=>void):void;
		DisconnectShowNormal():void;
		ShowNormal():void;
		ShowNormalDefault():void;
		ConnectSize(f:()=>core.QSize):void;
		DisconnectSize():void;
		Size():core.QSize;
		SizeDefault():core.QSize;
		SizeIncrement():core.QSize;
		ConnectSurfaceType(f:()=>number):void;
		DisconnectSurfaceType():void;
		SurfaceType():number;
		SurfaceTypeDefault():number;
		ConnectTabletEvent(f:(ev:QTabletEvent)=>void):void;
		DisconnectTabletEvent():void;
		TabletEvent(ev:QTabletEvent_ITF):void;
		TabletEventDefault(ev:QTabletEvent_ITF):void;
		Title():string;
		ConnectTouchEvent(f:(ev:QTouchEvent)=>void):void;
		DisconnectTouchEvent():void;
		TouchEvent(ev:QTouchEvent_ITF):void;
		TouchEventDefault(ev:QTouchEvent_ITF):void;
		Type():number;
		UnsetCursor():void;
		Visibility():number;
		ConnectVisibilityChanged(f:(visibility:number)=>void):void;
		DisconnectVisibilityChanged():void;
		VisibilityChanged(visibility:number):void;
		ConnectVisibleChanged(f:(arg:boolean)=>void):void;
		DisconnectVisibleChanged():void;
		VisibleChanged(arg:boolean):void;
		ConnectWheelEvent(f:(ev:QWheelEvent)=>void):void;
		DisconnectWheelEvent():void;
		WheelEvent(ev:QWheelEvent_ITF):void;
		WheelEventDefault(ev:QWheelEvent_ITF):void;
		Width():number;
		ConnectWidthChanged(f:(arg:number)=>void):void;
		DisconnectWidthChanged():void;
		WidthChanged(arg:number):void;
		WinId():number;
		WindowState():number;
		ConnectWindowStateChanged(f:(windowState:number)=>void):void;
		DisconnectWindowStateChanged():void;
		WindowStateChanged(windowState:number):void;
		WindowStates():number;
		ConnectWindowTitleChanged(f:(title:string)=>void):void;
		DisconnectWindowTitleChanged():void;
		WindowTitleChanged(title:string):void;
		X():number;
		ConnectXChanged(f:(arg:number)=>void):void;
		DisconnectXChanged():void;
		XChanged(arg:number):void;
		Y():number;
		ConnectYChanged(f:(arg:number)=>void):void;
		DisconnectYChanged():void;
		YChanged(arg:number):void;
		ConnectDestroyQWindow(f:()=>void):void;
		DisconnectDestroyQWindow():void;
		DestroyQWindow():void;
		DestroyQWindowDefault():void;
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
	function NewQWindowFromPointer(ptr:number):QWindow;
	function NewQWindow(targetScreen:QScreen_ITF):QWindow;
	function NewQWindow2(parent:QWindow_ITF):QWindow;
	function QWindow_FromWinId(id:number):QWindow;
	const QWindow__Hidden: number;
	const QWindow__AutomaticVisibility: number;
	const QWindow__Windowed: number;
	const QWindow__Minimized: number;
	const QWindow__Maximized: number;
	const QWindow__FullScreen: number;
	const QWindow__ExcludeTransients: number;
	const QWindow__IncludeTransients: number;
	interface QWindowStateChangeEvent_ITF extends core.QEvent_ITF {
		QWindowStateChangeEvent_PTR():QWindowStateChangeEvent;
	}

	class QWindowStateChangeEvent extends core.QEvent {
		___pointer: number;
		QWindowStateChangeEvent_PTR():QWindowStateChangeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWindowStateChangeEvent():void;
		OldState():number;
	}
	function NewQWindowStateChangeEventFromPointer(ptr:number):QWindowStateChangeEvent;
}