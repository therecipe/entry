declare namespace core {
	interface QAbstractAnimation_ITF extends QObject_ITF {
		QAbstractAnimation_PTR():QAbstractAnimation;
	}

	class QAbstractAnimation extends QObject {
		___pointer: number;
		QAbstractAnimation_PTR():QAbstractAnimation;
		Pointer():number;
		SetPointer(p:number):void;
		CurrentLoop():number;
		ConnectCurrentLoopChanged(f:(currentLoop:number)=>void):void;
		DisconnectCurrentLoopChanged():void;
		CurrentLoopChanged(currentLoop:number):void;
		CurrentLoopTime():number;
		CurrentTime():number;
		Direction():number;
		ConnectDirectionChanged(f:(newDirection:number)=>void):void;
		DisconnectDirectionChanged():void;
		DirectionChanged(newDirection:number):void;
		ConnectDuration(f:()=>number):void;
		DisconnectDuration():void;
		Duration():number;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		Group():QAnimationGroup;
		LoopCount():number;
		ConnectPause(f:()=>void):void;
		DisconnectPause():void;
		Pause():void;
		PauseDefault():void;
		ConnectResume(f:()=>void):void;
		DisconnectResume():void;
		Resume():void;
		ResumeDefault():void;
		ConnectSetCurrentTime(f:(msecs:number)=>void):void;
		DisconnectSetCurrentTime():void;
		SetCurrentTime(msecs:number):void;
		SetCurrentTimeDefault(msecs:number):void;
		SetDirection(direction:number):void;
		SetLoopCount(loopCount:number):void;
		ConnectSetPaused(f:(paused:boolean)=>void):void;
		DisconnectSetPaused():void;
		SetPaused(paused:boolean):void;
		SetPausedDefault(paused:boolean):void;
		ConnectStart(f:(policy:number)=>void):void;
		DisconnectStart():void;
		Start(policy:number):void;
		StartDefault(policy:number):void;
		State():number;
		ConnectStateChanged(f:(newState:number,oldState:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(newState:number,oldState:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		TotalDuration():number;
		ConnectUpdateCurrentTime(f:(currentTime:number)=>void):void;
		DisconnectUpdateCurrentTime():void;
		UpdateCurrentTime(currentTime:number):void;
		ConnectUpdateDirection(f:(direction:number)=>void):void;
		DisconnectUpdateDirection():void;
		UpdateDirection(direction:number):void;
		UpdateDirectionDefault(direction:number):void;
		ConnectUpdateState(f:(newState:number,oldState:number)=>void):void;
		DisconnectUpdateState():void;
		UpdateState(newState:number,oldState:number):void;
		UpdateStateDefault(newState:number,oldState:number):void;
		ConnectDestroyQAbstractAnimation(f:()=>void):void;
		DisconnectDestroyQAbstractAnimation():void;
		DestroyQAbstractAnimation():void;
		DestroyQAbstractAnimationDefault():void;
	}
	function NewQAbstractAnimationFromPointer(ptr:number):QAbstractAnimation;
	function NewQAbstractAnimation(parent:QObject_ITF):QAbstractAnimation;
	const QAbstractAnimation__Forward: number;
	const QAbstractAnimation__Backward: number;
	const QAbstractAnimation__Stopped: number;
	const QAbstractAnimation__Paused: number;
	const QAbstractAnimation__Running: number;
	const QAbstractAnimation__KeepWhenStopped: number;
	const QAbstractAnimation__DeleteWhenStopped: number;
	interface QAbstractConcatenable_ITF {
		QAbstractConcatenable_PTR():QAbstractConcatenable;
	}

	class QAbstractConcatenable {
		___pointer: number;
		QAbstractConcatenable_PTR():QAbstractConcatenable;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAbstractConcatenable():void;
	}
	function NewQAbstractConcatenableFromPointer(ptr:number):QAbstractConcatenable;
	interface QAbstractEventDispatcher_ITF extends QObject_ITF {
		QAbstractEventDispatcher_PTR():QAbstractEventDispatcher;
	}

	class QAbstractEventDispatcher extends QObject {
		___pointer: number;
		QAbstractEventDispatcher_PTR():QAbstractEventDispatcher;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAboutToBlock(f:()=>void):void;
		DisconnectAboutToBlock():void;
		AboutToBlock():void;
		ConnectAwake(f:()=>void):void;
		DisconnectAwake():void;
		Awake():void;
		FilterNativeEvent(eventType:QByteArray_ITF,message:number,result:number):boolean;
		InstallNativeEventFilter(filterObj:QAbstractNativeEventFilter_ITF):void;
		Instance(thread:QThread_ITF):QAbstractEventDispatcher;
		ConnectInterrupt(f:()=>void):void;
		DisconnectInterrupt():void;
		Interrupt():void;
		ConnectProcessEvents(f:(flags:number)=>boolean):void;
		DisconnectProcessEvents():void;
		ProcessEvents(flags:number):boolean;
		ConnectRegisterEventNotifier(f:(notifier:QWinEventNotifier)=>boolean):void;
		DisconnectRegisterEventNotifier():void;
		RegisterEventNotifier(notifier:QWinEventNotifier_ITF):boolean;
		ConnectRegisterSocketNotifier(f:(notifier:QSocketNotifier)=>void):void;
		DisconnectRegisterSocketNotifier():void;
		RegisterSocketNotifier(notifier:QSocketNotifier_ITF):void;
		RegisterTimer3(interval:number,timerType:number,object:QObject_ITF):number;
		ConnectRegisterTimer4(f:(timerId:number,interval:number,timerType:number,object:QObject)=>void):void;
		DisconnectRegisterTimer4():void;
		RegisterTimer4(timerId:number,interval:number,timerType:number,object:QObject_ITF):void;
		ConnectRemainingTime(f:(timerId:number)=>number):void;
		DisconnectRemainingTime():void;
		RemainingTime(timerId:number):number;
		RemoveNativeEventFilter(filter:QAbstractNativeEventFilter_ITF):void;
		ConnectUnregisterEventNotifier(f:(notifier:QWinEventNotifier)=>void):void;
		DisconnectUnregisterEventNotifier():void;
		UnregisterEventNotifier(notifier:QWinEventNotifier_ITF):void;
		ConnectUnregisterSocketNotifier(f:(notifier:QSocketNotifier)=>void):void;
		DisconnectUnregisterSocketNotifier():void;
		UnregisterSocketNotifier(notifier:QSocketNotifier_ITF):void;
		ConnectUnregisterTimer(f:(timerId:number)=>boolean):void;
		DisconnectUnregisterTimer():void;
		UnregisterTimer(timerId:number):boolean;
		ConnectUnregisterTimers(f:(object:QObject)=>boolean):void;
		DisconnectUnregisterTimers():void;
		UnregisterTimers(object:QObject_ITF):boolean;
		ConnectWakeUp(f:()=>void):void;
		DisconnectWakeUp():void;
		WakeUp():void;
		ConnectDestroyQAbstractEventDispatcher(f:()=>void):void;
		DisconnectDestroyQAbstractEventDispatcher():void;
		DestroyQAbstractEventDispatcher():void;
		DestroyQAbstractEventDispatcherDefault():void;
	}
	function NewQAbstractEventDispatcherFromPointer(ptr:number):QAbstractEventDispatcher;
	function QAbstractEventDispatcher_Instance(thread:QThread_ITF):QAbstractEventDispatcher;
	interface QAbstractItemModel_ITF extends QObject_ITF {
		QAbstractItemModel_PTR():QAbstractItemModel;
	}

	class QAbstractItemModel extends QObject {
		___pointer: number;
		QAbstractItemModel_PTR():QAbstractItemModel;
		Pointer():number;
		SetPointer(p:number):void;
		BeginInsertColumns(parent:QModelIndex_ITF,first:number,last:number):void;
		BeginInsertRows(parent:QModelIndex_ITF,first:number,last:number):void;
		BeginMoveColumns(sourceParent:QModelIndex_ITF,sourceFirst:number,sourceLast:number,destinationParent:QModelIndex_ITF,destinationChild:number):boolean;
		BeginMoveRows(sourceParent:QModelIndex_ITF,sourceFirst:number,sourceLast:number,destinationParent:QModelIndex_ITF,destinationChild:number):boolean;
		BeginRemoveColumns(parent:QModelIndex_ITF,first:number,last:number):void;
		BeginRemoveRows(parent:QModelIndex_ITF,first:number,last:number):void;
		BeginResetModel():void;
		ConnectBuddy(f:(index:QModelIndex)=>QModelIndex):void;
		DisconnectBuddy():void;
		Buddy(index:QModelIndex_ITF):QModelIndex;
		BuddyDefault(index:QModelIndex_ITF):QModelIndex;
		ConnectCanDropMimeData(f:(data:QMimeData,action:number,row:number,column:number,parent:QModelIndex)=>boolean):void;
		DisconnectCanDropMimeData():void;
		CanDropMimeData(data:QMimeData_ITF,action:number,row:number,column:number,parent:QModelIndex_ITF):boolean;
		CanDropMimeDataDefault(data:QMimeData_ITF,action:number,row:number,column:number,parent:QModelIndex_ITF):boolean;
		ConnectCanFetchMore(f:(parent:QModelIndex)=>boolean):void;
		DisconnectCanFetchMore():void;
		CanFetchMore(parent:QModelIndex_ITF):boolean;
		CanFetchMoreDefault(parent:QModelIndex_ITF):boolean;
		ChangePersistentIndex(from:QModelIndex_ITF,to:QModelIndex_ITF):void;
		ChangePersistentIndexList(from:QModelIndex[],to:QModelIndex[]):void;
		CheckIndex(index:QModelIndex_ITF,options:number):boolean;
		ConnectColumnCount(f:(parent:QModelIndex)=>number):void;
		DisconnectColumnCount():void;
		ColumnCount(parent:QModelIndex_ITF):number;
		ConnectColumnsAboutToBeInserted(f:(parent:QModelIndex,first:number,last:number)=>void):void;
		DisconnectColumnsAboutToBeInserted():void;
		ConnectColumnsAboutToBeMoved(f:(sourceParent:QModelIndex,sourceStart:number,sourceEnd:number,destinationParent:QModelIndex,destinationColumn:number)=>void):void;
		DisconnectColumnsAboutToBeMoved():void;
		ConnectColumnsAboutToBeRemoved(f:(parent:QModelIndex,first:number,last:number)=>void):void;
		DisconnectColumnsAboutToBeRemoved():void;
		ConnectColumnsInserted(f:(parent:QModelIndex,first:number,last:number)=>void):void;
		DisconnectColumnsInserted():void;
		ConnectColumnsMoved(f:(parent:QModelIndex,start:number,end:number,destination:QModelIndex,column:number)=>void):void;
		DisconnectColumnsMoved():void;
		ConnectColumnsRemoved(f:(parent:QModelIndex,first:number,last:number)=>void):void;
		DisconnectColumnsRemoved():void;
		CreateIndex(row:number,column:number,p:number):QModelIndex;
		CreateIndex2(row:number,column:number,id:number):QModelIndex;
		ConnectData(f:(index:QModelIndex,role:number)=>QVariant):void;
		DisconnectData():void;
		Data(index:QModelIndex_ITF,role:number):QVariant;
		ConnectDataChanged(f:(topLeft:QModelIndex,bottomRight:QModelIndex,roles:number[])=>void):void;
		DisconnectDataChanged():void;
		DataChanged(topLeft:QModelIndex_ITF,bottomRight:QModelIndex_ITF,roles:number[]):void;
		ConnectDropMimeData(f:(data:QMimeData,action:number,row:number,column:number,parent:QModelIndex)=>boolean):void;
		DisconnectDropMimeData():void;
		DropMimeData(data:QMimeData_ITF,action:number,row:number,column:number,parent:QModelIndex_ITF):boolean;
		DropMimeDataDefault(data:QMimeData_ITF,action:number,row:number,column:number,parent:QModelIndex_ITF):boolean;
		EndInsertColumns():void;
		EndInsertRows():void;
		EndMoveColumns():void;
		EndMoveRows():void;
		EndRemoveColumns():void;
		EndRemoveRows():void;
		EndResetModel():void;
		ConnectFetchMore(f:(parent:QModelIndex)=>void):void;
		DisconnectFetchMore():void;
		FetchMore(parent:QModelIndex_ITF):void;
		FetchMoreDefault(parent:QModelIndex_ITF):void;
		ConnectFlags(f:(index:QModelIndex)=>number):void;
		DisconnectFlags():void;
		Flags(index:QModelIndex_ITF):number;
		FlagsDefault(index:QModelIndex_ITF):number;
		ConnectHasChildren(f:(parent:QModelIndex)=>boolean):void;
		DisconnectHasChildren():void;
		HasChildren(parent:QModelIndex_ITF):boolean;
		HasChildrenDefault(parent:QModelIndex_ITF):boolean;
		HasIndex(row:number,column:number,parent:QModelIndex_ITF):boolean;
		ConnectHeaderData(f:(section:number,orientation:number,role:number)=>QVariant):void;
		DisconnectHeaderData():void;
		HeaderData(section:number,orientation:number,role:number):QVariant;
		HeaderDataDefault(section:number,orientation:number,role:number):QVariant;
		ConnectHeaderDataChanged(f:(orientation:number,first:number,last:number)=>void):void;
		DisconnectHeaderDataChanged():void;
		HeaderDataChanged(orientation:number,first:number,last:number):void;
		ConnectIndex(f:(row:number,column:number,parent:QModelIndex)=>QModelIndex):void;
		DisconnectIndex():void;
		Index(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		InsertColumn(column:number,parent:QModelIndex_ITF):boolean;
		ConnectInsertColumns(f:(column:number,count:number,parent:QModelIndex)=>boolean):void;
		DisconnectInsertColumns():void;
		InsertColumns(column:number,count:number,parent:QModelIndex_ITF):boolean;
		InsertColumnsDefault(column:number,count:number,parent:QModelIndex_ITF):boolean;
		InsertRow(row:number,parent:QModelIndex_ITF):boolean;
		ConnectInsertRows(f:(row:number,count:number,parent:QModelIndex)=>boolean):void;
		DisconnectInsertRows():void;
		InsertRows(row:number,count:number,parent:QModelIndex_ITF):boolean;
		InsertRowsDefault(row:number,count:number,parent:QModelIndex_ITF):boolean;
		ConnectItemData(f:(index:QModelIndex)=>Map<number,QVariant>):void;
		DisconnectItemData():void;
		ItemData(index:QModelIndex_ITF):Map<number,QVariant>;
		ItemDataDefault(index:QModelIndex_ITF):Map<number,QVariant>;
		ConnectLayoutAboutToBeChanged(f:(parents:QPersistentModelIndex[],hint:number)=>void):void;
		DisconnectLayoutAboutToBeChanged():void;
		LayoutAboutToBeChanged(parents:QPersistentModelIndex[],hint:number):void;
		ConnectLayoutChanged(f:(parents:QPersistentModelIndex[],hint:number)=>void):void;
		DisconnectLayoutChanged():void;
		LayoutChanged(parents:QPersistentModelIndex[],hint:number):void;
		ConnectMatch(f:(start:QModelIndex,role:number,value:QVariant,hits:number,flags:number)=>QModelIndex[]):void;
		DisconnectMatch():void;
		Match(start:QModelIndex_ITF,role:number,value:QVariant_ITF,hits:number,flags:number):QModelIndex[];
		MatchDefault(start:QModelIndex_ITF,role:number,value:QVariant_ITF,hits:number,flags:number):QModelIndex[];
		ConnectMimeData(f:(indexes:QModelIndex[])=>QMimeData):void;
		DisconnectMimeData():void;
		MimeData(indexes:QModelIndex[]):QMimeData;
		MimeDataDefault(indexes:QModelIndex[]):QMimeData;
		ConnectMimeTypes(f:()=>string[]):void;
		DisconnectMimeTypes():void;
		MimeTypes():string[];
		MimeTypesDefault():string[];
		ConnectModelAboutToBeReset(f:()=>void):void;
		DisconnectModelAboutToBeReset():void;
		ConnectModelReset(f:()=>void):void;
		DisconnectModelReset():void;
		MoveColumn(sourceParent:QModelIndex_ITF,sourceColumn:number,destinationParent:QModelIndex_ITF,destinationChild:number):boolean;
		ConnectMoveColumns(f:(sourceParent:QModelIndex,sourceColumn:number,count:number,destinationParent:QModelIndex,destinationChild:number)=>boolean):void;
		DisconnectMoveColumns():void;
		MoveColumns(sourceParent:QModelIndex_ITF,sourceColumn:number,count:number,destinationParent:QModelIndex_ITF,destinationChild:number):boolean;
		MoveColumnsDefault(sourceParent:QModelIndex_ITF,sourceColumn:number,count:number,destinationParent:QModelIndex_ITF,destinationChild:number):boolean;
		MoveRow(sourceParent:QModelIndex_ITF,sourceRow:number,destinationParent:QModelIndex_ITF,destinationChild:number):boolean;
		ConnectMoveRows(f:(sourceParent:QModelIndex,sourceRow:number,count:number,destinationParent:QModelIndex,destinationChild:number)=>boolean):void;
		DisconnectMoveRows():void;
		MoveRows(sourceParent:QModelIndex_ITF,sourceRow:number,count:number,destinationParent:QModelIndex_ITF,destinationChild:number):boolean;
		MoveRowsDefault(sourceParent:QModelIndex_ITF,sourceRow:number,count:number,destinationParent:QModelIndex_ITF,destinationChild:number):boolean;
		ConnectParent(f:(index:QModelIndex)=>QModelIndex):void;
		DisconnectParent():void;
		Parent(index:QModelIndex_ITF):QModelIndex;
		PersistentIndexList():QModelIndex[];
		RemoveColumn(column:number,parent:QModelIndex_ITF):boolean;
		ConnectRemoveColumns(f:(column:number,count:number,parent:QModelIndex)=>boolean):void;
		DisconnectRemoveColumns():void;
		RemoveColumns(column:number,count:number,parent:QModelIndex_ITF):boolean;
		RemoveColumnsDefault(column:number,count:number,parent:QModelIndex_ITF):boolean;
		RemoveRow(row:number,parent:QModelIndex_ITF):boolean;
		ConnectRemoveRows(f:(row:number,count:number,parent:QModelIndex)=>boolean):void;
		DisconnectRemoveRows():void;
		RemoveRows(row:number,count:number,parent:QModelIndex_ITF):boolean;
		RemoveRowsDefault(row:number,count:number,parent:QModelIndex_ITF):boolean;
		ConnectResetInternalData(f:()=>void):void;
		DisconnectResetInternalData():void;
		ResetInternalData():void;
		ResetInternalDataDefault():void;
		ConnectRevert(f:()=>void):void;
		DisconnectRevert():void;
		Revert():void;
		RevertDefault():void;
		ConnectRoleNames(f:()=>Map<number,QByteArray>):void;
		DisconnectRoleNames():void;
		RoleNames():Map<number,QByteArray>;
		RoleNamesDefault():Map<number,QByteArray>;
		ConnectRowCount(f:(parent:QModelIndex)=>number):void;
		DisconnectRowCount():void;
		RowCount(parent:QModelIndex_ITF):number;
		ConnectRowsAboutToBeInserted(f:(parent:QModelIndex,start:number,end:number)=>void):void;
		DisconnectRowsAboutToBeInserted():void;
		ConnectRowsAboutToBeMoved(f:(sourceParent:QModelIndex,sourceStart:number,sourceEnd:number,destinationParent:QModelIndex,destinationRow:number)=>void):void;
		DisconnectRowsAboutToBeMoved():void;
		ConnectRowsAboutToBeRemoved(f:(parent:QModelIndex,first:number,last:number)=>void):void;
		DisconnectRowsAboutToBeRemoved():void;
		ConnectRowsInserted(f:(parent:QModelIndex,first:number,last:number)=>void):void;
		DisconnectRowsInserted():void;
		ConnectRowsMoved(f:(parent:QModelIndex,start:number,end:number,destination:QModelIndex,row:number)=>void):void;
		DisconnectRowsMoved():void;
		ConnectRowsRemoved(f:(parent:QModelIndex,first:number,last:number)=>void):void;
		DisconnectRowsRemoved():void;
		ConnectSetData(f:(index:QModelIndex,value:QVariant,role:number)=>boolean):void;
		DisconnectSetData():void;
		SetData(index:QModelIndex_ITF,value:QVariant_ITF,role:number):boolean;
		SetDataDefault(index:QModelIndex_ITF,value:QVariant_ITF,role:number):boolean;
		ConnectSetHeaderData(f:(section:number,orientation:number,value:QVariant,role:number)=>boolean):void;
		DisconnectSetHeaderData():void;
		SetHeaderData(section:number,orientation:number,value:QVariant_ITF,role:number):boolean;
		SetHeaderDataDefault(section:number,orientation:number,value:QVariant_ITF,role:number):boolean;
		ConnectSetItemData(f:(index:QModelIndex,roles:Map<number,QVariant>)=>boolean):void;
		DisconnectSetItemData():void;
		SetItemData(index:QModelIndex_ITF,roles:Map<number,QVariant>):boolean;
		SetItemDataDefault(index:QModelIndex_ITF,roles:Map<number,QVariant>):boolean;
		ConnectSibling(f:(row:number,column:number,index:QModelIndex)=>QModelIndex):void;
		DisconnectSibling():void;
		Sibling(row:number,column:number,index:QModelIndex_ITF):QModelIndex;
		SiblingDefault(row:number,column:number,index:QModelIndex_ITF):QModelIndex;
		ConnectSort(f:(column:number,order:number)=>void):void;
		DisconnectSort():void;
		Sort(column:number,order:number):void;
		SortDefault(column:number,order:number):void;
		ConnectSpan(f:(index:QModelIndex)=>QSize):void;
		DisconnectSpan():void;
		Span(index:QModelIndex_ITF):QSize;
		SpanDefault(index:QModelIndex_ITF):QSize;
		ConnectSubmit(f:()=>boolean):void;
		DisconnectSubmit():void;
		Submit():boolean;
		SubmitDefault():boolean;
		ConnectSupportedDragActions(f:()=>number):void;
		DisconnectSupportedDragActions():void;
		SupportedDragActions():number;
		SupportedDragActionsDefault():number;
		ConnectSupportedDropActions(f:()=>number):void;
		DisconnectSupportedDropActions():void;
		SupportedDropActions():number;
		SupportedDropActionsDefault():number;
		ConnectDestroyQAbstractItemModel(f:()=>void):void;
		DisconnectDestroyQAbstractItemModel():void;
		DestroyQAbstractItemModel():void;
		DestroyQAbstractItemModelDefault():void;
	}
	function NewQAbstractItemModelFromPointer(ptr:number):QAbstractItemModel;
	function NewQAbstractItemModel(parent:QObject_ITF):QAbstractItemModel;
	const QAbstractItemModel__NoLayoutChangeHint: number;
	const QAbstractItemModel__VerticalSortHint: number;
	const QAbstractItemModel__HorizontalSortHint: number;
	const QAbstractItemModel__NoOption: number;
	const QAbstractItemModel__IndexIsValid: number;
	const QAbstractItemModel__DoNotUseParent: number;
	const QAbstractItemModel__ParentIsInvalid: number;
	interface QAbstractListModel_ITF extends QAbstractItemModel_ITF {
		QAbstractListModel_PTR():QAbstractListModel;
	}

	class QAbstractListModel extends QAbstractItemModel {
		___pointer: number;
		QAbstractListModel_PTR():QAbstractListModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectIndex(f:(row:number,column:number,parent:QModelIndex)=>QModelIndex):void;
		DisconnectIndex():void;
		Index(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		IndexDefault(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		ConnectDestroyQAbstractListModel(f:()=>void):void;
		DisconnectDestroyQAbstractListModel():void;
		DestroyQAbstractListModel():void;
		DestroyQAbstractListModelDefault():void;
		ColumnCount(parent:QModelIndex_ITF):number;
		ColumnCountDefault(parent:QModelIndex_ITF):number;
		Data(index:QModelIndex_ITF,role:number):QVariant;
		DataDefault(index:QModelIndex_ITF,role:number):QVariant;
		Parent(index:QModelIndex_ITF):QModelIndex;
		ParentDefault(index:QModelIndex_ITF):QModelIndex;
		RowCount(parent:QModelIndex_ITF):number;
		RowCountDefault(parent:QModelIndex_ITF):number;
	}
	function NewQAbstractListModelFromPointer(ptr:number):QAbstractListModel;
	function NewQAbstractListModel(parent:QObject_ITF):QAbstractListModel;
	interface QAbstractNativeEventFilter_ITF {
		QAbstractNativeEventFilter_PTR():QAbstractNativeEventFilter;
	}

	class QAbstractNativeEventFilter {
		___pointer: number;
		QAbstractNativeEventFilter_PTR():QAbstractNativeEventFilter;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectNativeEventFilter(f:(eventType:QByteArray,message:number,result:number)=>boolean):void;
		DisconnectNativeEventFilter():void;
		NativeEventFilter(eventType:QByteArray_ITF,message:number,result:number):boolean;
		ConnectDestroyQAbstractNativeEventFilter(f:()=>void):void;
		DisconnectDestroyQAbstractNativeEventFilter():void;
		DestroyQAbstractNativeEventFilter():void;
		DestroyQAbstractNativeEventFilterDefault():void;
	}
	function NewQAbstractNativeEventFilterFromPointer(ptr:number):QAbstractNativeEventFilter;
	function NewQAbstractNativeEventFilter():QAbstractNativeEventFilter;
	interface QAbstractProxyModel_ITF extends QAbstractItemModel_ITF {
		QAbstractProxyModel_PTR():QAbstractProxyModel;
	}

	class QAbstractProxyModel extends QAbstractItemModel {
		___pointer: number;
		QAbstractProxyModel_PTR():QAbstractProxyModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectData(f:(proxyIndex:QModelIndex,role:number)=>QVariant):void;
		DisconnectData():void;
		Data(proxyIndex:QModelIndex_ITF,role:number):QVariant;
		DataDefault(proxyIndex:QModelIndex_ITF,role:number):QVariant;
		ConnectMapFromSource(f:(sourceIndex:QModelIndex)=>QModelIndex):void;
		DisconnectMapFromSource():void;
		MapFromSource(sourceIndex:QModelIndex_ITF):QModelIndex;
		ConnectMapSelectionFromSource(f:(sourceSelection:QItemSelection)=>QItemSelection):void;
		DisconnectMapSelectionFromSource():void;
		MapSelectionFromSource(sourceSelection:QItemSelection_ITF):QItemSelection;
		MapSelectionFromSourceDefault(sourceSelection:QItemSelection_ITF):QItemSelection;
		ConnectMapSelectionToSource(f:(proxySelection:QItemSelection)=>QItemSelection):void;
		DisconnectMapSelectionToSource():void;
		MapSelectionToSource(proxySelection:QItemSelection_ITF):QItemSelection;
		MapSelectionToSourceDefault(proxySelection:QItemSelection_ITF):QItemSelection;
		ConnectMapToSource(f:(proxyIndex:QModelIndex)=>QModelIndex):void;
		DisconnectMapToSource():void;
		MapToSource(proxyIndex:QModelIndex_ITF):QModelIndex;
		ConnectRevert(f:()=>void):void;
		DisconnectRevert():void;
		Revert():void;
		RevertDefault():void;
		ConnectSetSourceModel(f:(sourceModel:QAbstractItemModel)=>void):void;
		DisconnectSetSourceModel():void;
		SetSourceModel(sourceModel:QAbstractItemModel_ITF):void;
		SetSourceModelDefault(sourceModel:QAbstractItemModel_ITF):void;
		SourceModel():QAbstractItemModel;
		ConnectSourceModelChanged(f:()=>void):void;
		DisconnectSourceModelChanged():void;
		ConnectSubmit(f:()=>boolean):void;
		DisconnectSubmit():void;
		Submit():boolean;
		SubmitDefault():boolean;
		ConnectDestroyQAbstractProxyModel(f:()=>void):void;
		DisconnectDestroyQAbstractProxyModel():void;
		DestroyQAbstractProxyModel():void;
		DestroyQAbstractProxyModelDefault():void;
		ColumnCount(parent:QModelIndex_ITF):number;
		ColumnCountDefault(parent:QModelIndex_ITF):number;
		Index(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		IndexDefault(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		Parent(index:QModelIndex_ITF):QModelIndex;
		ParentDefault(index:QModelIndex_ITF):QModelIndex;
		RowCount(parent:QModelIndex_ITF):number;
		RowCountDefault(parent:QModelIndex_ITF):number;
	}
	function NewQAbstractProxyModelFromPointer(ptr:number):QAbstractProxyModel;
	function NewQAbstractProxyModel(parent:QObject_ITF):QAbstractProxyModel;
	interface QAbstractState_ITF extends QObject_ITF {
		QAbstractState_PTR():QAbstractState;
	}

	class QAbstractState extends QObject {
		___pointer: number;
		QAbstractState_PTR():QAbstractState;
		Pointer():number;
		SetPointer(p:number):void;
		Active():boolean;
		ConnectActiveChanged(f:(active:boolean)=>void):void;
		DisconnectActiveChanged():void;
		ActiveChanged(active:boolean):void;
		ConnectEntered(f:()=>void):void;
		DisconnectEntered():void;
		ConnectExited(f:()=>void):void;
		DisconnectExited():void;
		Machine():QStateMachine;
		ConnectOnEntry(f:(event:QEvent)=>void):void;
		DisconnectOnEntry():void;
		OnEntry(event:QEvent_ITF):void;
		ConnectOnExit(f:(event:QEvent)=>void):void;
		DisconnectOnExit():void;
		OnExit(event:QEvent_ITF):void;
		ParentState():QState;
		ConnectDestroyQAbstractState(f:()=>void):void;
		DisconnectDestroyQAbstractState():void;
		DestroyQAbstractState():void;
		DestroyQAbstractStateDefault():void;
	}
	function NewQAbstractStateFromPointer(ptr:number):QAbstractState;
	function NewQAbstractState(parent:QState_ITF):QAbstractState;
	interface QAbstractTableModel_ITF extends QAbstractItemModel_ITF {
		QAbstractTableModel_PTR():QAbstractTableModel;
	}

	class QAbstractTableModel extends QAbstractItemModel {
		___pointer: number;
		QAbstractTableModel_PTR():QAbstractTableModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectIndex(f:(row:number,column:number,parent:QModelIndex)=>QModelIndex):void;
		DisconnectIndex():void;
		Index(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		IndexDefault(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		ConnectDestroyQAbstractTableModel(f:()=>void):void;
		DisconnectDestroyQAbstractTableModel():void;
		DestroyQAbstractTableModel():void;
		DestroyQAbstractTableModelDefault():void;
		ColumnCount(parent:QModelIndex_ITF):number;
		ColumnCountDefault(parent:QModelIndex_ITF):number;
		Data(index:QModelIndex_ITF,role:number):QVariant;
		DataDefault(index:QModelIndex_ITF,role:number):QVariant;
		Parent(index:QModelIndex_ITF):QModelIndex;
		ParentDefault(index:QModelIndex_ITF):QModelIndex;
		RowCount(parent:QModelIndex_ITF):number;
		RowCountDefault(parent:QModelIndex_ITF):number;
	}
	function NewQAbstractTableModelFromPointer(ptr:number):QAbstractTableModel;
	function NewQAbstractTableModel(parent:QObject_ITF):QAbstractTableModel;
	interface QAbstractTransition_ITF extends QObject_ITF {
		QAbstractTransition_PTR():QAbstractTransition;
	}

	class QAbstractTransition extends QObject {
		___pointer: number;
		QAbstractTransition_PTR():QAbstractTransition;
		Pointer():number;
		SetPointer(p:number):void;
		AddAnimation(animation:QAbstractAnimation_ITF):void;
		Animations():QAbstractAnimation[];
		ConnectEventTest(f:(event:QEvent)=>boolean):void;
		DisconnectEventTest():void;
		EventTest(event:QEvent_ITF):boolean;
		Machine():QStateMachine;
		ConnectOnTransition(f:(event:QEvent)=>void):void;
		DisconnectOnTransition():void;
		OnTransition(event:QEvent_ITF):void;
		RemoveAnimation(animation:QAbstractAnimation_ITF):void;
		SetTargetState(target:QAbstractState_ITF):void;
		SetTargetStates(targets:QAbstractState[]):void;
		SetTransitionType(ty:number):void;
		SourceState():QState;
		TargetState():QAbstractState;
		ConnectTargetStateChanged(f:()=>void):void;
		DisconnectTargetStateChanged():void;
		TargetStates():QAbstractState[];
		ConnectTargetStatesChanged(f:()=>void):void;
		DisconnectTargetStatesChanged():void;
		TransitionType():number;
		ConnectTriggered(f:()=>void):void;
		DisconnectTriggered():void;
		ConnectDestroyQAbstractTransition(f:()=>void):void;
		DisconnectDestroyQAbstractTransition():void;
		DestroyQAbstractTransition():void;
		DestroyQAbstractTransitionDefault():void;
	}
	function NewQAbstractTransitionFromPointer(ptr:number):QAbstractTransition;
	function NewQAbstractTransition(sourceState:QState_ITF):QAbstractTransition;
	const QAbstractTransition__ExternalTransition: number;
	const QAbstractTransition__InternalTransition: number;
	interface QAnimationGroup_ITF extends QAbstractAnimation_ITF {
		QAnimationGroup_PTR():QAnimationGroup;
	}

	class QAnimationGroup extends QAbstractAnimation {
		___pointer: number;
		QAnimationGroup_PTR():QAnimationGroup;
		Pointer():number;
		SetPointer(p:number):void;
		AddAnimation(animation:QAbstractAnimation_ITF):void;
		AnimationAt(index:number):QAbstractAnimation;
		AnimationCount():number;
		Clear():void;
		IndexOfAnimation(animation:QAbstractAnimation_ITF):number;
		InsertAnimation(index:number,animation:QAbstractAnimation_ITF):void;
		RemoveAnimation(animation:QAbstractAnimation_ITF):void;
		TakeAnimation(index:number):QAbstractAnimation;
		ConnectDestroyQAnimationGroup(f:()=>void):void;
		DisconnectDestroyQAnimationGroup():void;
		DestroyQAnimationGroup():void;
		DestroyQAnimationGroupDefault():void;
		Duration():number;
		DurationDefault():number;
		UpdateCurrentTime(currentTime:number):void;
		UpdateCurrentTimeDefault(currentTime:number):void;
	}
	function NewQAnimationGroupFromPointer(ptr:number):QAnimationGroup;
	function NewQAnimationGroup(parent:QObject_ITF):QAnimationGroup;
	interface QArgument_ITF extends QGenericArgument_ITF {
		QArgument_PTR():QArgument;
	}

	class QArgument extends QGenericArgument {
		___pointer: number;
		QArgument_PTR():QArgument;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQArgument():void;
	}
	function NewQArgumentFromPointer(ptr:number):QArgument;
	interface QArrayData_ITF {
		QArrayData_PTR():QArrayData;
	}

	class QArrayData {
		___pointer: number;
		QArrayData_PTR():QArrayData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQArrayData():void;
	}
	function NewQArrayDataFromPointer(ptr:number):QArrayData;
	interface QArrayDataPointer_ITF {
		QArrayDataPointer_PTR():QArrayDataPointer;
	}

	class QArrayDataPointer {
		___pointer: number;
		QArrayDataPointer_PTR():QArrayDataPointer;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQArrayDataPointer():void;
	}
	function NewQArrayDataPointerFromPointer(ptr:number):QArrayDataPointer;
	interface QAssociativeIterable_ITF {
		QAssociativeIterable_PTR():QAssociativeIterable;
	}

	class QAssociativeIterable {
		___pointer: number;
		QAssociativeIterable_PTR():QAssociativeIterable;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAssociativeIterable():void;
		Size():number;
		Value(key:QVariant_ITF):QVariant;
	}
	function NewQAssociativeIterableFromPointer(ptr:number):QAssociativeIterable;
	interface QBEInteger_ITF {
		QBEInteger_PTR():QBEInteger;
	}

	class QBEInteger {
		___pointer: number;
		QBEInteger_PTR():QBEInteger;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQBEInteger():void;
	}
	function NewQBEIntegerFromPointer(ptr:number):QBEInteger;
	interface QBasicAtomicInteger_ITF {
		QBasicAtomicInteger_PTR():QBasicAtomicInteger;
	}

	class QBasicAtomicInteger {
		___pointer: number;
		QBasicAtomicInteger_PTR():QBasicAtomicInteger;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQBasicAtomicInteger():void;
	}
	function NewQBasicAtomicIntegerFromPointer(ptr:number):QBasicAtomicInteger;
	interface QBasicAtomicPointer_ITF {
		QBasicAtomicPointer_PTR():QBasicAtomicPointer;
	}

	class QBasicAtomicPointer {
		___pointer: number;
		QBasicAtomicPointer_PTR():QBasicAtomicPointer;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQBasicAtomicPointer():void;
	}
	function NewQBasicAtomicPointerFromPointer(ptr:number):QBasicAtomicPointer;
	interface QBasicMutex_ITF {
		QBasicMutex_PTR():QBasicMutex;
	}

	class QBasicMutex {
		___pointer: number;
		QBasicMutex_PTR():QBasicMutex;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQBasicMutex():void;
		IsRecursive2():boolean;
	}
	function NewQBasicMutexFromPointer(ptr:number):QBasicMutex;
	interface QBasicTimer_ITF {
		QBasicTimer_PTR():QBasicTimer;
	}

	class QBasicTimer {
		___pointer: number;
		QBasicTimer_PTR():QBasicTimer;
		Pointer():number;
		SetPointer(p:number):void;
		IsActive():boolean;
		Start(msec:number,object:QObject_ITF):void;
		Start2(msec:number,timerType:number,obj:QObject_ITF):void;
		Stop():void;
		TimerId():number;
		DestroyQBasicTimer():void;
	}
	function NewQBasicTimerFromPointer(ptr:number):QBasicTimer;
	function NewQBasicTimer():QBasicTimer;
	interface QBigEndianStorageType_ITF {
		QBigEndianStorageType_PTR():QBigEndianStorageType;
	}

	class QBigEndianStorageType {
		___pointer: number;
		QBigEndianStorageType_PTR():QBigEndianStorageType;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQBigEndianStorageType():void;
	}
	function NewQBigEndianStorageTypeFromPointer(ptr:number):QBigEndianStorageType;
	interface QBitArray_ITF {
		QBitArray_PTR():QBitArray;
	}

	class QBitArray {
		___pointer: number;
		QBitArray_PTR():QBitArray;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQBitArray():void;
		At(i:number):boolean;
		Bits():string;
		Clear():void;
		ClearBit(i:number):void;
		Count():number;
		Count2(on:boolean):number;
		Fill(value:boolean,size:number):boolean;
		Fill2(value:boolean,begi:number,end:number):void;
		IsEmpty():boolean;
		IsNull():boolean;
		Resize(size:number):void;
		SetBit(i:number):void;
		SetBit2(i:number,value:boolean):void;
		Size():number;
		Swap(other:QBitArray_ITF):void;
		TestBit(i:number):boolean;
		ToggleBit(i:number):boolean;
		Truncate(pos:number):void;
	}
	function NewQBitArrayFromPointer(ptr:number):QBitArray;
	function NewQBitArray():QBitArray;
	function NewQBitArray2(size:number,value:boolean):QBitArray;
	function NewQBitArray3(other:QBitArray_ITF):QBitArray;
	function NewQBitArray4(other:QBitArray_ITF):QBitArray;
	interface QBuffer_ITF extends QIODevice_ITF {
		QBuffer_PTR():QBuffer;
	}

	class QBuffer extends QIODevice {
		___pointer: number;
		QBuffer_PTR():QBuffer;
		Pointer():number;
		SetPointer(p:number):void;
		Buffer():QByteArray;
		Buffer2():QByteArray;
		Data():QByteArray;
		ConnectReadData(f:(data:string,l:number)=>number):void;
		DisconnectReadData():void;
		ReadData(data:string,l:number):number;
		ReadDataDefault(data:string,l:number):number;
		SetBuffer(byteArray:QByteArray_ITF):void;
		SetData(data:QByteArray_ITF):void;
		SetData2(data:string,size:number):void;
		ConnectWriteData(f:(data:string,l:number)=>number):void;
		DisconnectWriteData():void;
		WriteData(data:string,l:number):number;
		WriteDataDefault(data:string,l:number):number;
		ConnectDestroyQBuffer(f:()=>void):void;
		DisconnectDestroyQBuffer():void;
		DestroyQBuffer():void;
		DestroyQBufferDefault():void;
	}
	function NewQBufferFromPointer(ptr:number):QBuffer;
	function NewQBuffer(parent:QObject_ITF):QBuffer;
	function NewQBuffer2(byteArray:QByteArray_ITF,parent:QObject_ITF):QBuffer;
	interface QByteArray_ITF {
		QByteArray_PTR():QByteArray;
	}

	class QByteArray {
		___pointer: number;
		QByteArray_PTR():QByteArray;
		Pointer():number;
		SetPointer(p:number):void;
		Append(ba:QByteArray_ITF):QByteArray;
		Append2(ch:string):QByteArray;
		Append3(count:number,ch:string):QByteArray;
		Append4(str:string):QByteArray;
		Append5(str:string,l:number):QByteArray;
		Append6(str:string):QByteArray;
		At(i:number):string;
		Back():string;
		Capacity():number;
		Chop(n:number):void;
		Chopped(l:number):QByteArray;
		Clear():void;
		Compare(c:string,cs:number):number;
		Compare2(a:QByteArray_ITF,cs:number):number;
		ConstData():string;
		Contains(ba:QByteArray_ITF):boolean;
		Contains2(ch:string):boolean;
		Contains3(str:string):boolean;
		Count(ba:QByteArray_ITF):number;
		Count2(ch:string):number;
		Count3(str:string):number;
		Count4():number;
		Data():string;
		Data2():string;
		EndsWith(ba:QByteArray_ITF):boolean;
		EndsWith2(ch:string):boolean;
		EndsWith3(str:string):boolean;
		Fill(ch:string,size:number):QByteArray;
		FromBase64(base64:QByteArray_ITF):QByteArray;
		FromBase642(base64:QByteArray_ITF,options:number):QByteArray;
		FromHex(hexEncoded:QByteArray_ITF):QByteArray;
		FromPercentEncoding(input:QByteArray_ITF,percent:string):QByteArray;
		FromRawData(data:string,size:number):QByteArray;
		Front():string;
		IndexOf(ba:QByteArray_ITF,from:number):number;
		IndexOf2(ch:string,from:number):number;
		IndexOf3(str:string,from:number):number;
		IndexOf4(str:string,from:number):number;
		Insert(i:number,ba:QByteArray_ITF):QByteArray;
		Insert2(i:number,ch:string):QByteArray;
		Insert3(i:number,count:number,ch:string):QByteArray;
		Insert4(i:number,str:string):QByteArray;
		Insert5(i:number,str:string,l:number):QByteArray;
		Insert6(i:number,str:string):QByteArray;
		IsEmpty():boolean;
		IsLower():boolean;
		IsNull():boolean;
		IsUpper():boolean;
		LastIndexOf(ba:QByteArray_ITF,from:number):number;
		LastIndexOf2(ch:string,from:number):number;
		LastIndexOf3(str:string,from:number):number;
		LastIndexOf4(str:string,from:number):number;
		Left(l:number):QByteArray;
		LeftJustified(width:number,fill:string,truncate:boolean):QByteArray;
		Length():number;
		Mid(pos:number,l:number):QByteArray;
		Number(n:number,base:number):QByteArray;
		Number2(n:number,base:number):QByteArray;
		Number3(n:number,base:number):QByteArray;
		Number4(n:number,base:number):QByteArray;
		Number5(n:number,ff:string,prec:number):QByteArray;
		Prepend(ba:QByteArray_ITF):QByteArray;
		Prepend2(ch:string):QByteArray;
		Prepend3(count:number,ch:string):QByteArray;
		Prepend4(str:string):QByteArray;
		Prepend5(str:string,l:number):QByteArray;
		Push_back(other:QByteArray_ITF):void;
		Push_back2(ch:string):void;
		Push_back3(str:string):void;
		Push_front(other:QByteArray_ITF):void;
		Push_front2(ch:string):void;
		Push_front3(str:string):void;
		Remove(pos:number,l:number):QByteArray;
		Repeated(times:number):QByteArray;
		Replace(pos:number,l:number,after:QByteArray_ITF):QByteArray;
		Replace2(pos:number,l:number,after:string):QByteArray;
		Replace3(pos:number,l:number,after:string,alen:number):QByteArray;
		Replace4(before:string,after:string):QByteArray;
		Replace5(before:string,after:QByteArray_ITF):QByteArray;
		Replace6(before:string,after:string):QByteArray;
		Replace7(before:string,bsize:number,after:string,asize:number):QByteArray;
		Replace8(before:QByteArray_ITF,after:QByteArray_ITF):QByteArray;
		Replace9(before:QByteArray_ITF,after:string):QByteArray;
		Replace10(before:string,after:QByteArray_ITF):QByteArray;
		Replace11(before:string,after:string):QByteArray;
		Replace12(before:string,after:string):QByteArray;
		Replace13(before:string,after:string):QByteArray;
		Replace14(before:string,after:QByteArray_ITF):QByteArray;
		Reserve(size:number):void;
		Resize(size:number):void;
		Right(l:number):QByteArray;
		RightJustified(width:number,fill:string,truncate:boolean):QByteArray;
		SetNum(n:number,base:number):QByteArray;
		SetNum2(n:number,base:number):QByteArray;
		SetNum3(n:number,base:number):QByteArray;
		SetNum4(n:number,base:number):QByteArray;
		SetNum5(n:number,base:number):QByteArray;
		SetNum6(n:number,base:number):QByteArray;
		SetNum7(n:number,ff:string,prec:number):QByteArray;
		SetNum8(n:number,ff:string,prec:number):QByteArray;
		SetRawData(data:string,size:number):QByteArray;
		Shrink_to_fit():void;
		Simplified():QByteArray;
		Size():number;
		Split(sep:string):QByteArray[];
		Squeeze():void;
		StartsWith(ba:QByteArray_ITF):boolean;
		StartsWith2(ch:string):boolean;
		StartsWith3(str:string):boolean;
		Swap(other:QByteArray_ITF):void;
		ToBase64():QByteArray;
		ToBase642(options:number):QByteArray;
		ToDouble(ok:boolean):number;
		ToFloat(ok:boolean):number;
		ToHex():QByteArray;
		ToHex2(separator:string):QByteArray;
		ToInt(ok:boolean,base:number):number;
		ToLong(ok:boolean,base:number):number;
		ToLongLong(ok:boolean,base:number):number;
		ToLower():QByteArray;
		ToPercentEncoding(exclude:QByteArray_ITF,include:QByteArray_ITF,percent:string):QByteArray;
		ToShort(ok:boolean,base:number):number;
		ToUInt(ok:boolean,base:number):number;
		ToULong(ok:boolean,base:number):number;
		ToULongLong(ok:boolean,base:number):number;
		ToUShort(ok:boolean,base:number):number;
		ToUpper():QByteArray;
		Trimmed():QByteArray;
		Truncate(pos:number):void;
		DestroyQByteArray():void;
	}
	function NewQByteArrayFromPointer(ptr:number):QByteArray;
	function NewQByteArray():QByteArray;
	function NewQByteArray2(data:string,size:number):QByteArray;
	function NewQByteArray3(size:number,ch:string):QByteArray;
	function NewQByteArray4(other:QByteArray_ITF):QByteArray;
	function QByteArray_FromBase64(base64:QByteArray_ITF):QByteArray;
	function QByteArray_FromBase642(base64:QByteArray_ITF,options:number):QByteArray;
	function QByteArray_FromHex(hexEncoded:QByteArray_ITF):QByteArray;
	function QByteArray_FromPercentEncoding(input:QByteArray_ITF,percent:string):QByteArray;
	function QByteArray_FromRawData(data:string,size:number):QByteArray;
	function QByteArray_Number(n:number,base:number):QByteArray;
	function QByteArray_Number2(n:number,base:number):QByteArray;
	function QByteArray_Number3(n:number,base:number):QByteArray;
	function QByteArray_Number4(n:number,base:number):QByteArray;
	function QByteArray_Number5(n:number,ff:string,prec:number):QByteArray;
	function NewQByteArrayMatcher():QByteArrayMatcher;
	function NewQByteArrayMatcher2(pattern:QByteArray_ITF):QByteArrayMatcher;
	function NewQByteArrayMatcher3(pattern:string,length:number):QByteArrayMatcher;
	function NewQByteArrayMatcher4(other:QByteArrayMatcher_ITF):QByteArrayMatcher;
	const QByteArray__Base64Encoding: number;
	const QByteArray__Base64UrlEncoding: number;
	const QByteArray__KeepTrailingEquals: number;
	const QByteArray__OmitTrailingEquals: number;
	interface QByteArrayList_ITF {
		QByteArrayList_PTR():QByteArrayList;
	}

	class QByteArrayList {
		___pointer: number;
		QByteArrayList_PTR():QByteArrayList;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQByteArrayList():void;
		IndexOf(needle:string,from:number):number;
		Join():QByteArray;
		Join2(separator:QByteArray_ITF):QByteArray;
		Join3(separator:string):QByteArray;
	}
	function NewQByteArrayListFromPointer(ptr:number):QByteArrayList;
	interface QByteArrayMatcher_ITF {
		QByteArrayMatcher_PTR():QByteArrayMatcher;
	}

	class QByteArrayMatcher {
		___pointer: number;
		QByteArrayMatcher_PTR():QByteArrayMatcher;
		Pointer():number;
		SetPointer(p:number):void;
		IndexIn(ba:QByteArray_ITF,from:number):number;
		IndexIn2(str:string,l:number,from:number):number;
		Pattern():QByteArray;
		SetPattern(pattern:QByteArray_ITF):void;
		DestroyQByteArrayMatcher():void;
	}
	function NewQByteArrayMatcherFromPointer(ptr:number):QByteArrayMatcher;
	function NewQByteArrayMatcher():QByteArrayMatcher;
	function NewQByteArrayMatcher2(pattern:QByteArray_ITF):QByteArrayMatcher;
	function NewQByteArrayMatcher3(pattern:string,length:number):QByteArrayMatcher;
	function NewQByteArrayMatcher4(other:QByteArrayMatcher_ITF):QByteArrayMatcher;
	interface QByteRef_ITF {
		QByteRef_PTR():QByteRef;
	}

	class QByteRef {
		___pointer: number;
		QByteRef_PTR():QByteRef;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQByteRef():void;
	}
	function NewQByteRefFromPointer(ptr:number):QByteRef;
	interface QCborArray_ITF {
		QCborArray_PTR():QCborArray;
	}

	class QCborArray {
		___pointer: number;
		QCborArray_PTR():QCborArray;
		Pointer():number;
		SetPointer(p:number):void;
		Append(value:QCborValue_ITF):void;
		Append2(value:QCborValue_ITF):void;
		Clear():void;
		Compare(other:QCborArray_ITF):number;
		Contains(value:QCborValue_ITF):boolean;
		Empty():boolean;
		First():QCborValue;
		FromJsonArray(array:QJsonArray_ITF):QCborArray;
		FromStringList(list:string[]):QCborArray;
		FromVariantList(list:QVariant[]):QCborArray;
		IsEmpty():boolean;
		Last():QCborValue;
		Pop_back():void;
		Pop_front():void;
		Prepend(value:QCborValue_ITF):void;
		Prepend2(value:QCborValue_ITF):void;
		Push_back(t:QCborValue_ITF):void;
		Push_front(t:QCborValue_ITF):void;
		RemoveFirst():void;
		RemoveLast():void;
		Swap(other:QCborArray_ITF):void;
		TakeFirst():QCborValue;
		TakeLast():QCborValue;
		ToCborValue():QCborValue;
		ToJsonArray():QJsonArray;
		ToVariantList():QVariant[];
		DestroyQCborArray():void;
	}
	function NewQCborArrayFromPointer(ptr:number):QCborArray;
	function NewQCborArray():QCborArray;
	function NewQCborArray2(other:QCborArray_ITF):QCborArray;
	function QCborArray_FromJsonArray(array:QJsonArray_ITF):QCborArray;
	function QCborArray_FromStringList(list:string[]):QCborArray;
	function QCborArray_FromVariantList(list:QVariant[]):QCborArray;
	interface QCborError_ITF {
		QCborError_PTR():QCborError;
	}

	class QCborError {
		___pointer: number;
		QCborError_PTR():QCborError;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQCborError():void;
		ToString():string;
	}
	function NewQCborErrorFromPointer(ptr:number):QCborError;
	const QCborError__UnknownError: number;
	const QCborError__AdvancePastEnd: number;
	const QCborError__InputOutputError: number;
	const QCborError__GarbageAtEnd: number;
	const QCborError__EndOfFile: number;
	const QCborError__UnexpectedBreak: number;
	const QCborError__UnknownType: number;
	const QCborError__IllegalType: number;
	const QCborError__IllegalNumber: number;
	const QCborError__IllegalSimpleType: number;
	const QCborError__InvalidUtf8String: number;
	const QCborError__DataTooLarge: number;
	const QCborError__NestingTooDeep: number;
	const QCborError__UnsupportedType: number;
	const QCborError__NoError: number;
	interface QCborMap_ITF {
		QCborMap_PTR():QCborMap;
	}

	class QCborMap {
		___pointer: number;
		QCborMap_PTR():QCborMap;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():void;
		Compare(other:QCborMap_ITF):number;
		Contains(key:number):boolean;
		Contains2(key:QLatin1String_ITF):boolean;
		Contains3(key:string):boolean;
		Contains4(key:QCborValue_ITF):boolean;
		Empty():boolean;
		FromJsonObject(obj:QJsonObject_ITF):QCborMap;
		FromVariantHash(hash:Map<string,QVariant>):QCborMap;
		IsEmpty():boolean;
		Keys():QCborValue[];
		Remove(key:number):void;
		Remove2(key:QLatin1String_ITF):void;
		Remove3(key:string):void;
		Remove4(key:QCborValue_ITF):void;
		Swap(other:QCborMap_ITF):void;
		Take(key:number):QCborValue;
		Take2(key:QLatin1String_ITF):QCborValue;
		Take3(key:string):QCborValue;
		Take4(key:QCborValue_ITF):QCborValue;
		ToCborValue():QCborValue;
		ToJsonObject():QJsonObject;
		ToVariantHash():Map<string,QVariant>;
		ToVariantMap():Map<string,QVariant>;
		Value(key:number):QCborValue;
		Value2(key:QLatin1String_ITF):QCborValue;
		Value3(key:string):QCborValue;
		Value4(key:QCborValue_ITF):QCborValue;
		DestroyQCborMap():void;
	}
	function NewQCborMapFromPointer(ptr:number):QCborMap;
	function NewQCborMap():QCborMap;
	function NewQCborMap2(other:QCborMap_ITF):QCborMap;
	function QCborMap_FromJsonObject(obj:QJsonObject_ITF):QCborMap;
	function QCborMap_FromVariantHash(hash:Map<string,QVariant>):QCborMap;
	interface QCborParserError_ITF {
		QCborParserError_PTR():QCborParserError;
	}

	class QCborParserError {
		___pointer: number;
		QCborParserError_PTR():QCborParserError;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQCborParserError():void;
		ErrorString():string;
		Offset():number;
		SetOffset(vqi:number):void;
		SetError(vqc:QCborError_ITF):void;
	}
	function NewQCborParserErrorFromPointer(ptr:number):QCborParserError;
	const QCborStreamReader__UnsignedInteger: number;
	const QCborStreamReader__NegativeInteger: number;
	const QCborStreamReader__ByteString: number;
	const QCborStreamReader__ByteArray: number;
	const QCborStreamReader__TextString: number;
	const QCborStreamReader__String: number;
	const QCborStreamReader__Array: number;
	const QCborStreamReader__Map: number;
	const QCborStreamReader__Tag: number;
	const QCborStreamReader__SimpleType: number;
	const QCborStreamReader__HalfFloat: number;
	const QCborStreamReader__Float16: number;
	const QCborStreamReader__Float: number;
	const QCborStreamReader__Double: number;
	const QCborStreamReader__Invalid: number;
	const QCborStreamReader__EndOfString: number;
	const QCborStreamReader__Ok: number;
	const QCborStreamReader__Error: number;
	const QCborValue__SortKeysInMaps: number;
	const QCborValue__UseFloat: number;
	const QCborValue__UseFloat16: number;
	const QCborValue__UseIntegers: number;
	const QCborValue__NoTransformation: number;
	const QCborValue__Compact: number;
	const QCborValue__LineWrapped: number;
	const QCborValue__ExtendedFormat: number;
	const QCborValue__Integer: number;
	const QCborValue__ByteArray: number;
	const QCborValue__String: number;
	const QCborValue__Array: number;
	const QCborValue__Map: number;
	const QCborValue__Tag: number;
	const QCborValue__SimpleType: number;
	const QCborValue__False: number;
	const QCborValue__True: number;
	const QCborValue__Null: number;
	const QCborValue__Undefined: number;
	const QCborValue__Double: number;
	const QCborValue__DateTime: number;
	const QCborValue__Url: number;
	const QCborValue__RegularExpression: number;
	const QCborValue__Uuid: number;
	const QCborValue__Invalid: number;
	interface QCborValueRef_ITF {
		QCborValueRef_PTR():QCborValueRef;
	}

	class QCborValueRef {
		___pointer: number;
		QCborValueRef_PTR():QCborValueRef;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQCborValueRef():void;
	}
	function NewQCborValueRefFromPointer(ptr:number):QCborValueRef;
	interface QChar_ITF {
		QChar_PTR():QChar;
	}

	class QChar {
		___pointer: number;
		QChar_PTR():QChar;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQChar():void;
		Category():number;
		Category2(ucs4:number):number;
		Cell():string;
		CurrentUnicodeVersion():number;
		Decomposition():string;
		Decomposition2(ucs4:number):string;
		DecompositionTag():number;
		DecompositionTag2(ucs4:number):number;
		DigitValue():number;
		DigitValue2(ucs4:number):number;
		Direction():number;
		Direction2(ucs4:number):number;
		FromLatin1(c:string):QChar;
		HasMirrored():boolean;
		HasMirrored2(ucs4:number):boolean;
		HighSurrogate(ucs4:number):number;
		IsDigit():boolean;
		IsDigit2(ucs4:number):boolean;
		IsHighSurrogate():boolean;
		IsHighSurrogate2(ucs4:number):boolean;
		IsLetter():boolean;
		IsLetter2(ucs4:number):boolean;
		IsLetterOrNumber():boolean;
		IsLetterOrNumber2(ucs4:number):boolean;
		IsLowSurrogate():boolean;
		IsLowSurrogate2(ucs4:number):boolean;
		IsLower():boolean;
		IsLower2(ucs4:number):boolean;
		IsMark():boolean;
		IsMark2(ucs4:number):boolean;
		IsNonCharacter():boolean;
		IsNonCharacter2(ucs4:number):boolean;
		IsNull():boolean;
		IsNumber():boolean;
		IsNumber2(ucs4:number):boolean;
		IsPrint():boolean;
		IsPrint2(ucs4:number):boolean;
		IsPunct():boolean;
		IsPunct2(ucs4:number):boolean;
		IsSpace():boolean;
		IsSpace2(ucs4:number):boolean;
		IsSurrogate():boolean;
		IsSurrogate2(ucs4:number):boolean;
		IsSymbol():boolean;
		IsSymbol2(ucs4:number):boolean;
		IsTitleCase():boolean;
		IsTitleCase2(ucs4:number):boolean;
		IsUpper():boolean;
		IsUpper2(ucs4:number):boolean;
		JoiningType():number;
		JoiningType2(ucs4:number):number;
		LowSurrogate(ucs4:number):number;
		MirroredChar():QChar;
		MirroredChar2(ucs4:number):number;
		RequiresSurrogates(ucs4:number):boolean;
		Row():string;
		Script():number;
		Script2(ucs4:number):number;
		SurrogateToUcs4(high:number,low:number):number;
		SurrogateToUcs42(high:QChar_ITF,low:QChar_ITF):number;
		ToCaseFolded():QChar;
		ToCaseFolded2(ucs4:number):number;
		ToLatin1():string;
		ToLower():QChar;
		ToLower2(ucs4:number):number;
		ToTitleCase():QChar;
		ToTitleCase2(ucs4:number):number;
		ToUpper():QChar;
		ToUpper2(ucs4:number):number;
		Unicode():number;
		Unicode2():number;
		UnicodeVersion():number;
		UnicodeVersion2(ucs4:number):number;
	}
	function NewQCharFromPointer(ptr:number):QChar;
	function NewQChar():QChar;
	function NewQChar2(code:number):QChar;
	function NewQChar3(cell:string,row:string):QChar;
	function NewQChar4(code:number):QChar;
	function NewQChar5(code:number):QChar;
	function NewQChar6(code:number):QChar;
	function NewQChar7(ch:number):QChar;
	function NewQChar8(ch:QLatin1Char_ITF):QChar;
	function NewQChar11(ch:string):QChar;
	function NewQChar12(ch:string):QChar;
	function QChar_Category2(ucs4:number):number;
	function QChar_CurrentUnicodeVersion():number;
	function QChar_Decomposition2(ucs4:number):string;
	function QChar_DecompositionTag2(ucs4:number):number;
	function QChar_DigitValue2(ucs4:number):number;
	function QChar_Direction2(ucs4:number):number;
	function QChar_FromLatin1(c:string):QChar;
	function QChar_HasMirrored2(ucs4:number):boolean;
	function QChar_HighSurrogate(ucs4:number):number;
	function QChar_IsDigit2(ucs4:number):boolean;
	function QChar_IsHighSurrogate2(ucs4:number):boolean;
	function QChar_IsLetter2(ucs4:number):boolean;
	function QChar_IsLetterOrNumber2(ucs4:number):boolean;
	function QChar_IsLowSurrogate2(ucs4:number):boolean;
	function QChar_IsLower2(ucs4:number):boolean;
	function QChar_IsMark2(ucs4:number):boolean;
	function QChar_IsNonCharacter2(ucs4:number):boolean;
	function QChar_IsNumber2(ucs4:number):boolean;
	function QChar_IsPrint2(ucs4:number):boolean;
	function QChar_IsPunct2(ucs4:number):boolean;
	function QChar_IsSpace2(ucs4:number):boolean;
	function QChar_IsSurrogate2(ucs4:number):boolean;
	function QChar_IsSymbol2(ucs4:number):boolean;
	function QChar_IsTitleCase2(ucs4:number):boolean;
	function QChar_IsUpper2(ucs4:number):boolean;
	function QChar_JoiningType2(ucs4:number):number;
	function QChar_LowSurrogate(ucs4:number):number;
	function QChar_MirroredChar2(ucs4:number):number;
	function QChar_RequiresSurrogates(ucs4:number):boolean;
	function QChar_Script2(ucs4:number):number;
	function QChar_SurrogateToUcs4(high:number,low:number):number;
	function QChar_SurrogateToUcs42(high:QChar_ITF,low:QChar_ITF):number;
	function QChar_ToCaseFolded2(ucs4:number):number;
	function QChar_ToLower2(ucs4:number):number;
	function QChar_ToTitleCase2(ucs4:number):number;
	function QChar_ToUpper2(ucs4:number):number;
	function QChar_UnicodeVersion2(ucs4:number):number;
	const QChar__Null: number;
	const QChar__Tabulation: number;
	const QChar__LineFeed: number;
	const QChar__CarriageReturn: number;
	const QChar__Space: number;
	const QChar__Nbsp: number;
	const QChar__SoftHyphen: number;
	const QChar__ReplacementCharacter: number;
	const QChar__ObjectReplacementCharacter: number;
	const QChar__ByteOrderMark: number;
	const QChar__ByteOrderSwapped: number;
	const QChar__ParagraphSeparator: number;
	const QChar__LineSeparator: number;
	const QChar__LastValidCodePoint: number;
	const QChar__Mark_NonSpacing: number;
	const QChar__Mark_SpacingCombining: number;
	const QChar__Mark_Enclosing: number;
	const QChar__Number_DecimalDigit: number;
	const QChar__Number_Letter: number;
	const QChar__Number_Other: number;
	const QChar__Separator_Space: number;
	const QChar__Separator_Line: number;
	const QChar__Separator_Paragraph: number;
	const QChar__Other_Control: number;
	const QChar__Other_Format: number;
	const QChar__Other_Surrogate: number;
	const QChar__Other_PrivateUse: number;
	const QChar__Other_NotAssigned: number;
	const QChar__Letter_Uppercase: number;
	const QChar__Letter_Lowercase: number;
	const QChar__Letter_Titlecase: number;
	const QChar__Letter_Modifier: number;
	const QChar__Letter_Other: number;
	const QChar__Punctuation_Connector: number;
	const QChar__Punctuation_Dash: number;
	const QChar__Punctuation_Open: number;
	const QChar__Punctuation_Close: number;
	const QChar__Punctuation_InitialQuote: number;
	const QChar__Punctuation_FinalQuote: number;
	const QChar__Punctuation_Other: number;
	const QChar__Symbol_Math: number;
	const QChar__Symbol_Currency: number;
	const QChar__Symbol_Modifier: number;
	const QChar__Symbol_Other: number;
	const QChar__Script_Unknown: number;
	const QChar__Script_Inherited: number;
	const QChar__Script_Common: number;
	const QChar__Script_Latin: number;
	const QChar__Script_Greek: number;
	const QChar__Script_Cyrillic: number;
	const QChar__Script_Armenian: number;
	const QChar__Script_Hebrew: number;
	const QChar__Script_Arabic: number;
	const QChar__Script_Syriac: number;
	const QChar__Script_Thaana: number;
	const QChar__Script_Devanagari: number;
	const QChar__Script_Bengali: number;
	const QChar__Script_Gurmukhi: number;
	const QChar__Script_Gujarati: number;
	const QChar__Script_Oriya: number;
	const QChar__Script_Tamil: number;
	const QChar__Script_Telugu: number;
	const QChar__Script_Kannada: number;
	const QChar__Script_Malayalam: number;
	const QChar__Script_Sinhala: number;
	const QChar__Script_Thai: number;
	const QChar__Script_Lao: number;
	const QChar__Script_Tibetan: number;
	const QChar__Script_Myanmar: number;
	const QChar__Script_Georgian: number;
	const QChar__Script_Hangul: number;
	const QChar__Script_Ethiopic: number;
	const QChar__Script_Cherokee: number;
	const QChar__Script_CanadianAboriginal: number;
	const QChar__Script_Ogham: number;
	const QChar__Script_Runic: number;
	const QChar__Script_Khmer: number;
	const QChar__Script_Mongolian: number;
	const QChar__Script_Hiragana: number;
	const QChar__Script_Katakana: number;
	const QChar__Script_Bopomofo: number;
	const QChar__Script_Han: number;
	const QChar__Script_Yi: number;
	const QChar__Script_OldItalic: number;
	const QChar__Script_Gothic: number;
	const QChar__Script_Deseret: number;
	const QChar__Script_Tagalog: number;
	const QChar__Script_Hanunoo: number;
	const QChar__Script_Buhid: number;
	const QChar__Script_Tagbanwa: number;
	const QChar__Script_Coptic: number;
	const QChar__Script_Limbu: number;
	const QChar__Script_TaiLe: number;
	const QChar__Script_LinearB: number;
	const QChar__Script_Ugaritic: number;
	const QChar__Script_Shavian: number;
	const QChar__Script_Osmanya: number;
	const QChar__Script_Cypriot: number;
	const QChar__Script_Braille: number;
	const QChar__Script_Buginese: number;
	const QChar__Script_NewTaiLue: number;
	const QChar__Script_Glagolitic: number;
	const QChar__Script_Tifinagh: number;
	const QChar__Script_SylotiNagri: number;
	const QChar__Script_OldPersian: number;
	const QChar__Script_Kharoshthi: number;
	const QChar__Script_Balinese: number;
	const QChar__Script_Cuneiform: number;
	const QChar__Script_Phoenician: number;
	const QChar__Script_PhagsPa: number;
	const QChar__Script_Nko: number;
	const QChar__Script_Sundanese: number;
	const QChar__Script_Lepcha: number;
	const QChar__Script_OlChiki: number;
	const QChar__Script_Vai: number;
	const QChar__Script_Saurashtra: number;
	const QChar__Script_KayahLi: number;
	const QChar__Script_Rejang: number;
	const QChar__Script_Lycian: number;
	const QChar__Script_Carian: number;
	const QChar__Script_Lydian: number;
	const QChar__Script_Cham: number;
	const QChar__Script_TaiTham: number;
	const QChar__Script_TaiViet: number;
	const QChar__Script_Avestan: number;
	const QChar__Script_EgyptianHieroglyphs: number;
	const QChar__Script_Samaritan: number;
	const QChar__Script_Lisu: number;
	const QChar__Script_Bamum: number;
	const QChar__Script_Javanese: number;
	const QChar__Script_MeeteiMayek: number;
	const QChar__Script_ImperialAramaic: number;
	const QChar__Script_OldSouthArabian: number;
	const QChar__Script_InscriptionalParthian: number;
	const QChar__Script_InscriptionalPahlavi: number;
	const QChar__Script_OldTurkic: number;
	const QChar__Script_Kaithi: number;
	const QChar__Script_Batak: number;
	const QChar__Script_Brahmi: number;
	const QChar__Script_Mandaic: number;
	const QChar__Script_Chakma: number;
	const QChar__Script_MeroiticCursive: number;
	const QChar__Script_MeroiticHieroglyphs: number;
	const QChar__Script_Miao: number;
	const QChar__Script_Sharada: number;
	const QChar__Script_SoraSompeng: number;
	const QChar__Script_Takri: number;
	const QChar__Script_CaucasianAlbanian: number;
	const QChar__Script_BassaVah: number;
	const QChar__Script_Duployan: number;
	const QChar__Script_Elbasan: number;
	const QChar__Script_Grantha: number;
	const QChar__Script_PahawhHmong: number;
	const QChar__Script_Khojki: number;
	const QChar__Script_LinearA: number;
	const QChar__Script_Mahajani: number;
	const QChar__Script_Manichaean: number;
	const QChar__Script_MendeKikakui: number;
	const QChar__Script_Modi: number;
	const QChar__Script_Mro: number;
	const QChar__Script_OldNorthArabian: number;
	const QChar__Script_Nabataean: number;
	const QChar__Script_Palmyrene: number;
	const QChar__Script_PauCinHau: number;
	const QChar__Script_OldPermic: number;
	const QChar__Script_PsalterPahlavi: number;
	const QChar__Script_Siddham: number;
	const QChar__Script_Khudawadi: number;
	const QChar__Script_Tirhuta: number;
	const QChar__Script_WarangCiti: number;
	const QChar__Script_Ahom: number;
	const QChar__Script_AnatolianHieroglyphs: number;
	const QChar__Script_Hatran: number;
	const QChar__Script_Multani: number;
	const QChar__Script_OldHungarian: number;
	const QChar__Script_SignWriting: number;
	const QChar__Script_Adlam: number;
	const QChar__Script_Bhaiksuki: number;
	const QChar__Script_Marchen: number;
	const QChar__Script_Newa: number;
	const QChar__Script_Osage: number;
	const QChar__Script_Tangut: number;
	const QChar__Script_MasaramGondi: number;
	const QChar__Script_Nushu: number;
	const QChar__Script_Soyombo: number;
	const QChar__Script_ZanabazarSquare: number;
	const QChar__ScriptCount: number;
	const QChar__DirL: number;
	const QChar__DirR: number;
	const QChar__DirEN: number;
	const QChar__DirES: number;
	const QChar__DirET: number;
	const QChar__DirAN: number;
	const QChar__DirCS: number;
	const QChar__DirB: number;
	const QChar__DirS: number;
	const QChar__DirWS: number;
	const QChar__DirON: number;
	const QChar__DirLRE: number;
	const QChar__DirLRO: number;
	const QChar__DirAL: number;
	const QChar__DirRLE: number;
	const QChar__DirRLO: number;
	const QChar__DirPDF: number;
	const QChar__DirNSM: number;
	const QChar__DirBN: number;
	const QChar__DirLRI: number;
	const QChar__DirRLI: number;
	const QChar__DirFSI: number;
	const QChar__DirPDI: number;
	const QChar__NoDecomposition: number;
	const QChar__Canonical: number;
	const QChar__Font: number;
	const QChar__NoBreak: number;
	const QChar__Initial: number;
	const QChar__Medial: number;
	const QChar__Final: number;
	const QChar__Isolated: number;
	const QChar__Circle: number;
	const QChar__Super: number;
	const QChar__Sub: number;
	const QChar__Vertical: number;
	const QChar__Wide: number;
	const QChar__Narrow: number;
	const QChar__Small: number;
	const QChar__Square: number;
	const QChar__Compat: number;
	const QChar__Fraction: number;
	const QChar__Joining_None: number;
	const QChar__Joining_Causing: number;
	const QChar__Joining_Dual: number;
	const QChar__Joining_Right: number;
	const QChar__Joining_Left: number;
	const QChar__Joining_Transparent: number;
	const QChar__Unicode_Unassigned: number;
	const QChar__Unicode_1_1: number;
	const QChar__Unicode_2_0: number;
	const QChar__Unicode_2_1_2: number;
	const QChar__Unicode_3_0: number;
	const QChar__Unicode_3_1: number;
	const QChar__Unicode_3_2: number;
	const QChar__Unicode_4_0: number;
	const QChar__Unicode_4_1: number;
	const QChar__Unicode_5_0: number;
	const QChar__Unicode_5_1: number;
	const QChar__Unicode_5_2: number;
	const QChar__Unicode_6_0: number;
	const QChar__Unicode_6_1: number;
	const QChar__Unicode_6_2: number;
	const QChar__Unicode_6_3: number;
	const QChar__Unicode_7_0: number;
	const QChar__Unicode_8_0: number;
	const QChar__Unicode_9_0: number;
	const QChar__Unicode_10_0: number;
	interface QChildEvent_ITF extends QEvent_ITF {
		QChildEvent_PTR():QChildEvent;
	}

	class QChildEvent extends QEvent {
		___pointer: number;
		QChildEvent_PTR():QChildEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQChildEvent():void;
		Added():boolean;
		Child():QObject;
		Polished():boolean;
		Removed():boolean;
	}
	function NewQChildEventFromPointer(ptr:number):QChildEvent;
	function NewQChildEvent(ty:number,child:QObject_ITF):QChildEvent;
	interface QCollator_ITF {
		QCollator_PTR():QCollator;
	}

	class QCollator {
		___pointer: number;
		QCollator_PTR():QCollator;
		Pointer():number;
		SetPointer(p:number):void;
		CaseSensitivity():number;
		Compare(s1:string,s2:string):number;
		Compare2(s1:QStringRef_ITF,s2:QStringRef_ITF):number;
		Compare3(s1:QChar_ITF,len1:number,s2:QChar_ITF,len2:number):number;
		IgnorePunctuation():boolean;
		Locale():QLocale;
		NumericMode():boolean;
		SetCaseSensitivity(sensitivity:number):void;
		SetIgnorePunctuation(on:boolean):void;
		SetLocale(locale:QLocale_ITF):void;
		SetNumericMode(on:boolean):void;
		SortKey(stri:string):QCollatorSortKey;
		Swap(other:QCollator_ITF):void;
		DestroyQCollator():void;
	}
	function NewQCollatorFromPointer(ptr:number):QCollator;
	function NewQCollator(locale:QLocale_ITF):QCollator;
	function NewQCollator2(other:QCollator_ITF):QCollator;
	function NewQCollator3(other:QCollator_ITF):QCollator;
	function NewQCollatorSortKey(other:QCollatorSortKey_ITF):QCollatorSortKey;
	interface QCollatorSortKey_ITF {
		QCollatorSortKey_PTR():QCollatorSortKey;
	}

	class QCollatorSortKey {
		___pointer: number;
		QCollatorSortKey_PTR():QCollatorSortKey;
		Pointer():number;
		SetPointer(p:number):void;
		Compare(otherKey:QCollatorSortKey_ITF):number;
		Swap(other:QCollatorSortKey_ITF):void;
		DestroyQCollatorSortKey():void;
	}
	function NewQCollatorSortKeyFromPointer(ptr:number):QCollatorSortKey;
	function NewQCollatorSortKey(other:QCollatorSortKey_ITF):QCollatorSortKey;
	interface QCommandLineOption_ITF {
		QCommandLineOption_PTR():QCommandLineOption;
	}

	class QCommandLineOption {
		___pointer: number;
		QCommandLineOption_PTR():QCommandLineOption;
		Pointer():number;
		SetPointer(p:number):void;
		DefaultValues():string[];
		Description():string;
		Flags():number;
		Names():string[];
		SetDefaultValue(defaultValue:string):void;
		SetDefaultValues(defaultValues:string[]):void;
		SetDescription(description:string):void;
		SetFlags(flags:number):void;
		SetValueName(valueName:string):void;
		Swap(other:QCommandLineOption_ITF):void;
		ValueName():string;
		DestroyQCommandLineOption():void;
	}
	function NewQCommandLineOptionFromPointer(ptr:number):QCommandLineOption;
	function NewQCommandLineOption(name:string):QCommandLineOption;
	function NewQCommandLineOption2(names:string[]):QCommandLineOption;
	function NewQCommandLineOption3(name:string,description:string,valueName:string,defaultValue:string):QCommandLineOption;
	function NewQCommandLineOption4(names:string[],description:string,valueName:string,defaultValue:string):QCommandLineOption;
	function NewQCommandLineOption5(other:QCommandLineOption_ITF):QCommandLineOption;
	const QCommandLineOption__HiddenFromHelp: number;
	const QCommandLineOption__ShortOptionStyle: number;
	interface QCommandLineParser_ITF {
		QCommandLineParser_PTR():QCommandLineParser;
	}

	class QCommandLineParser {
		___pointer: number;
		QCommandLineParser_PTR():QCommandLineParser;
		Pointer():number;
		SetPointer(p:number):void;
		AddHelpOption():QCommandLineOption;
		AddOption(option:QCommandLineOption_ITF):boolean;
		AddOptions(options:QCommandLineOption[]):boolean;
		AddPositionalArgument(name:string,description:string,syntax:string):void;
		AddVersionOption():QCommandLineOption;
		ApplicationDescription():string;
		ClearPositionalArguments():void;
		ErrorText():string;
		HelpText():string;
		IsSet(name:string):boolean;
		IsSet2(option:QCommandLineOption_ITF):boolean;
		OptionNames():string[];
		Parse(arguments:string[]):boolean;
		PositionalArguments():string[];
		Process(arguments:string[]):void;
		Process2(app:QCoreApplication_ITF):void;
		SetApplicationDescription(description:string):void;
		SetOptionsAfterPositionalArgumentsMode(parsingMode:number):void;
		SetSingleDashWordOptionMode(singleDashWordOptionMode:number):void;
		ShowHelp(exitCode:number):void;
		ShowVersion():void;
		UnknownOptionNames():string[];
		Value(optionName:string):string;
		Value2(option:QCommandLineOption_ITF):string;
		Values(optionName:string):string[];
		Values2(option:QCommandLineOption_ITF):string[];
		DestroyQCommandLineParser():void;
	}
	function NewQCommandLineParserFromPointer(ptr:number):QCommandLineParser;
	function NewQCommandLineParser():QCommandLineParser;
	const QCommandLineParser__ParseAsCompactedShortOptions: number;
	const QCommandLineParser__ParseAsLongOptions: number;
	const QCommandLineParser__ParseAsOptions: number;
	const QCommandLineParser__ParseAsPositionalArguments: number;
	interface QConcatenateTablesProxyModel_ITF extends QAbstractItemModel_ITF {
		QConcatenateTablesProxyModel_PTR():QConcatenateTablesProxyModel;
	}

	class QConcatenateTablesProxyModel extends QAbstractItemModel {
		___pointer: number;
		QConcatenateTablesProxyModel_PTR():QConcatenateTablesProxyModel;
		Pointer():number;
		SetPointer(p:number):void;
		AddSourceModel(sourceModel:QAbstractItemModel_ITF):void;
		ConnectColumnCount(f:(parent:QModelIndex)=>number):void;
		DisconnectColumnCount():void;
		ColumnCount(parent:QModelIndex_ITF):number;
		ColumnCountDefault(parent:QModelIndex_ITF):number;
		ConnectData(f:(index:QModelIndex,role:number)=>QVariant):void;
		DisconnectData():void;
		Data(index:QModelIndex_ITF,role:number):QVariant;
		DataDefault(index:QModelIndex_ITF,role:number):QVariant;
		ConnectIndex(f:(row:number,column:number,parent:QModelIndex)=>QModelIndex):void;
		DisconnectIndex():void;
		Index(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		IndexDefault(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		MapFromSource(sourceIndex:QModelIndex_ITF):QModelIndex;
		MapToSource(proxyIndex:QModelIndex_ITF):QModelIndex;
		ConnectParent(f:(index:QModelIndex)=>QModelIndex):void;
		DisconnectParent():void;
		Parent(index:QModelIndex_ITF):QModelIndex;
		ParentDefault(index:QModelIndex_ITF):QModelIndex;
		RemoveSourceModel(sourceModel:QAbstractItemModel_ITF):void;
		ConnectRowCount(f:(parent:QModelIndex)=>number):void;
		DisconnectRowCount():void;
		RowCount(parent:QModelIndex_ITF):number;
		RowCountDefault(parent:QModelIndex_ITF):number;
		ConnectDestroyQConcatenateTablesProxyModel(f:()=>void):void;
		DisconnectDestroyQConcatenateTablesProxyModel():void;
		DestroyQConcatenateTablesProxyModel():void;
		DestroyQConcatenateTablesProxyModelDefault():void;
	}
	function NewQConcatenateTablesProxyModelFromPointer(ptr:number):QConcatenateTablesProxyModel;
	function NewQConcatenateTablesProxyModel(parent:QObject_ITF):QConcatenateTablesProxyModel;
	interface QContiguousCacheData_ITF {
		QContiguousCacheData_PTR():QContiguousCacheData;
	}

	class QContiguousCacheData {
		___pointer: number;
		QContiguousCacheData_PTR():QContiguousCacheData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQContiguousCacheData():void;
	}
	function NewQContiguousCacheDataFromPointer(ptr:number):QContiguousCacheData;
	interface QContiguousCacheTypedData_ITF {
		QContiguousCacheTypedData_PTR():QContiguousCacheTypedData;
	}

	class QContiguousCacheTypedData {
		___pointer: number;
		QContiguousCacheTypedData_PTR():QContiguousCacheTypedData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQContiguousCacheTypedData():void;
	}
	function NewQContiguousCacheTypedDataFromPointer(ptr:number):QContiguousCacheTypedData;
	interface QCoreApplication_ITF extends QObject_ITF {
		QCoreApplication_PTR():QCoreApplication;
	}

	class QCoreApplication extends QObject {
		___pointer: number;
		QCoreApplication_PTR():QCoreApplication;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAboutToQuit(f:()=>void):void;
		DisconnectAboutToQuit():void;
		AddLibraryPath(path:string):void;
		ApplicationDirPath():string;
		ApplicationFilePath():string;
		ApplicationName():string;
		ConnectApplicationNameChanged(f:()=>void):void;
		DisconnectApplicationNameChanged():void;
		ApplicationNameChanged():void;
		ApplicationPid():number;
		ApplicationVersion():string;
		ConnectApplicationVersionChanged(f:()=>void):void;
		DisconnectApplicationVersionChanged():void;
		ApplicationVersionChanged():void;
		Arguments():string[];
		ClosingDown():boolean;
		EventDispatcher():QAbstractEventDispatcher;
		Exec():number;
		Exit(returnCode:number):void;
		InstallNativeEventFilter(filterObj:QAbstractNativeEventFilter_ITF):void;
		InstallTranslator(translationFile:QTranslator_ITF):boolean;
		Instance():QCoreApplication;
		IsQuitLockEnabled():boolean;
		IsSetuidAllowed():boolean;
		LibraryPaths():string[];
		OrganizationDomain():string;
		ConnectOrganizationDomainChanged(f:()=>void):void;
		DisconnectOrganizationDomainChanged():void;
		OrganizationDomainChanged():void;
		OrganizationName():string;
		ConnectOrganizationNameChanged(f:()=>void):void;
		DisconnectOrganizationNameChanged():void;
		OrganizationNameChanged():void;
		PostEvent(receiver:QObject_ITF,event:QEvent_ITF,priority:number):void;
		ProcessEvents(flags:number):void;
		ProcessEvents2(flags:number,ms:number):void;
		ConnectQuit(f:()=>void):void;
		DisconnectQuit():void;
		Quit():void;
		QuitDefault():void;
		RemoveLibraryPath(path:string):void;
		RemoveNativeEventFilter(filterObject:QAbstractNativeEventFilter_ITF):void;
		RemovePostedEvents(receiver:QObject_ITF,eventType:number):void;
		RemoveTranslator(translationFile:QTranslator_ITF):boolean;
		SendEvent(receiver:QObject_ITF,event:QEvent_ITF):boolean;
		SendPostedEvents(receiver:QObject_ITF,event_type:number):void;
		SetApplicationName(application:string):void;
		SetApplicationVersion(version:string):void;
		SetAttribute(attribute:number,on:boolean):void;
		SetEventDispatcher(eventDispatcher:QAbstractEventDispatcher_ITF):void;
		SetLibraryPaths(paths:string[]):void;
		SetOrganizationDomain(orgDomai:string):void;
		SetOrganizationName(orgName:string):void;
		SetQuitLockEnabled(enabled:boolean):void;
		SetSetuidAllowed(allow:boolean):void;
		StartingUp():boolean;
		TestAttribute(attribute:number):boolean;
		Translate(context:string,sourceText:string,disambiguation:string,n:number):string;
		ConnectDestroyQCoreApplication(f:()=>void):void;
		DisconnectDestroyQCoreApplication():void;
		DestroyQCoreApplication():void;
		DestroyQCoreApplicationDefault():void;
	}
	function NewQCoreApplicationFromPointer(ptr:number):QCoreApplication;
	function NewQCoreApplication(argc:number,argv:string[]):QCoreApplication;
	function QCoreApplication_AddLibraryPath(path:string):void;
	function QCoreApplication_ApplicationDirPath():string;
	function QCoreApplication_ApplicationFilePath():string;
	function QCoreApplication_ApplicationName():string;
	function QCoreApplication_ApplicationPid():number;
	function QCoreApplication_ApplicationVersion():string;
	function QCoreApplication_Arguments():string[];
	function QCoreApplication_ClosingDown():boolean;
	function QCoreApplication_EventDispatcher():QAbstractEventDispatcher;
	function QCoreApplication_Exec():number;
	function QCoreApplication_Exit(returnCode:number):void;
	function QCoreApplication_InstallTranslator(translationFile:QTranslator_ITF):boolean;
	function QCoreApplication_Instance():QCoreApplication;
	function QCoreApplication_IsQuitLockEnabled():boolean;
	function QCoreApplication_IsSetuidAllowed():boolean;
	function QCoreApplication_LibraryPaths():string[];
	function QCoreApplication_OrganizationDomain():string;
	function QCoreApplication_OrganizationName():string;
	function QCoreApplication_PostEvent(receiver:QObject_ITF,event:QEvent_ITF,priority:number):void;
	function QCoreApplication_ProcessEvents(flags:number):void;
	function QCoreApplication_ProcessEvents2(flags:number,ms:number):void;
	function QCoreApplication_RemoveLibraryPath(path:string):void;
	function QCoreApplication_RemovePostedEvents(receiver:QObject_ITF,eventType:number):void;
	function QCoreApplication_RemoveTranslator(translationFile:QTranslator_ITF):boolean;
	function QCoreApplication_SendEvent(receiver:QObject_ITF,event:QEvent_ITF):boolean;
	function QCoreApplication_SendPostedEvents(receiver:QObject_ITF,event_type:number):void;
	function QCoreApplication_SetApplicationName(application:string):void;
	function QCoreApplication_SetApplicationVersion(version:string):void;
	function QCoreApplication_SetAttribute(attribute:number,on:boolean):void;
	function QCoreApplication_SetEventDispatcher(eventDispatcher:QAbstractEventDispatcher_ITF):void;
	function QCoreApplication_SetLibraryPaths(paths:string[]):void;
	function QCoreApplication_SetOrganizationDomain(orgDomai:string):void;
	function QCoreApplication_SetOrganizationName(orgName:string):void;
	function QCoreApplication_SetQuitLockEnabled(enabled:boolean):void;
	function QCoreApplication_SetSetuidAllowed(allow:boolean):void;
	function QCoreApplication_StartingUp():boolean;
	function QCoreApplication_TestAttribute(attribute:number):boolean;
	function QCoreApplication_Translate(context:string,sourceText:string,disambiguation:string,n:number):string;
	interface QCryptographicHash_ITF {
		QCryptographicHash_PTR():QCryptographicHash;
	}

	class QCryptographicHash {
		___pointer: number;
		QCryptographicHash_PTR():QCryptographicHash;
		Pointer():number;
		SetPointer(p:number):void;
		AddData(data:string,length:number):void;
		AddData2(data:QByteArray_ITF):void;
		AddData3(device:QIODevice_ITF):boolean;
		Hash(data:QByteArray_ITF,method:number):QByteArray;
		HashLength(method:number):number;
		Reset():void;
		Result():QByteArray;
		DestroyQCryptographicHash():void;
	}
	function NewQCryptographicHashFromPointer(ptr:number):QCryptographicHash;
	function NewQCryptographicHash(method:number):QCryptographicHash;
	function QCryptographicHash_Hash(data:QByteArray_ITF,method:number):QByteArray;
	function QCryptographicHash_HashLength(method:number):number;
	const QCryptographicHash__Md4: number;
	const QCryptographicHash__Md5: number;
	const QCryptographicHash__Sha1: number;
	const QCryptographicHash__Sha224: number;
	const QCryptographicHash__Sha256: number;
	const QCryptographicHash__Sha384: number;
	const QCryptographicHash__Sha512: number;
	const QCryptographicHash__Keccak_224: number;
	const QCryptographicHash__Keccak_256: number;
	const QCryptographicHash__Keccak_384: number;
	const QCryptographicHash__Keccak_512: number;
	const QCryptographicHash__RealSha3_224: number;
	const QCryptographicHash__RealSha3_256: number;
	const QCryptographicHash__RealSha3_384: number;
	const QCryptographicHash__RealSha3_512: number;
	const QCryptographicHash__Sha3_224: number;
	const QCryptographicHash__Sha3_256: number;
	const QCryptographicHash__Sha3_384: number;
	const QCryptographicHash__Sha3_512: number;
	interface QDataStream_ITF {
		QDataStream_PTR():QDataStream;
	}

	class QDataStream {
		___pointer: number;
		QDataStream_PTR():QDataStream;
		Pointer():number;
		SetPointer(p:number):void;
		AbortTransaction():void;
		AtEnd():boolean;
		ByteOrder():number;
		CommitTransaction():boolean;
		Device():QIODevice;
		FloatingPointPrecision():number;
		ReadRawData(s:string,l:number):number;
		ResetStatus():void;
		RollbackTransaction():void;
		SetByteOrder(bo:number):void;
		SetDevice(d:QIODevice_ITF):void;
		SetFloatingPointPrecision(precision:number):void;
		SetStatus(status:number):void;
		SetVersion(v:number):void;
		SkipRawData(l:number):number;
		StartTransaction():void;
		Status():number;
		Version():number;
		WriteRawData(s:string,l:number):number;
		DestroyQDataStream():void;
	}
	function NewQDataStreamFromPointer(ptr:number):QDataStream;
	function NewQDataStream():QDataStream;
	function NewQDataStream2(d:QIODevice_ITF):QDataStream;
	function NewQDataStream3(a:QByteArray_ITF,mode:number):QDataStream;
	function NewQDataStream4(a:QByteArray_ITF):QDataStream;
	const QDataStream__Qt_1_0: number;
	const QDataStream__Qt_2_0: number;
	const QDataStream__Qt_2_1: number;
	const QDataStream__Qt_3_0: number;
	const QDataStream__Qt_3_1: number;
	const QDataStream__Qt_3_3: number;
	const QDataStream__Qt_4_0: number;
	const QDataStream__Qt_4_1: number;
	const QDataStream__Qt_4_2: number;
	const QDataStream__Qt_4_3: number;
	const QDataStream__Qt_4_4: number;
	const QDataStream__Qt_4_5: number;
	const QDataStream__Qt_4_6: number;
	const QDataStream__Qt_4_7: number;
	const QDataStream__Qt_4_8: number;
	const QDataStream__Qt_4_9: number;
	const QDataStream__Qt_5_0: number;
	const QDataStream__Qt_5_1: number;
	const QDataStream__Qt_5_2: number;
	const QDataStream__Qt_5_3: number;
	const QDataStream__Qt_5_4: number;
	const QDataStream__Qt_5_5: number;
	const QDataStream__Qt_5_6: number;
	const QDataStream__Qt_5_7: number;
	const QDataStream__Qt_5_8: number;
	const QDataStream__Qt_5_9: number;
	const QDataStream__Qt_5_10: number;
	const QDataStream__Qt_5_11: number;
	const QDataStream__Qt_5_12: number;
	const QDataStream__Qt_5_13: number;
	const QDataStream__Qt_DefaultCompiledVersion: number;
	const QDataStream__BigEndian: number;
	const QDataStream__LittleEndian: number;
	const QDataStream__Ok: number;
	const QDataStream__ReadPastEnd: number;
	const QDataStream__ReadCorruptData: number;
	const QDataStream__WriteFailed: number;
	const QDataStream__SinglePrecision: number;
	const QDataStream__DoublePrecision: number;
	interface QDate_ITF {
		QDate_PTR():QDate;
	}

	class QDate {
		___pointer: number;
		QDate_PTR():QDate;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDate():void;
		AddDays(ndays:number):QDate;
		AddMonths(nmonths:number):QDate;
		AddYears(nyears:number):QDate;
		CurrentDate():QDate;
		Day():number;
		DayOfWeek():number;
		DayOfYear():number;
		DaysInMonth():number;
		DaysInYear():number;
		DaysTo(d:QDate_ITF):number;
		FromJulianDay(jd:number):QDate;
		FromString(stri:string,format:number):QDate;
		FromString2(stri:string,format:string):QDate;
		GetDate(year:number,month:number,day:number):void;
		IsLeapYear(year:number):boolean;
		IsNull():boolean;
		IsValid():boolean;
		IsValid2(year:number,month:number,day:number):boolean;
		Month():number;
		SetDate(year:number,month:number,day:number):boolean;
		ToJulianDay():number;
		ToString(format:string):string;
		ToString2(format:number):string;
		ToString3(format:QStringView_ITF):string;
		WeekNumber(yearNumber:number):number;
		Year():number;
	}
	function NewQDateFromPointer(ptr:number):QDate;
	function NewQDate2():QDate;
	function NewQDate3(y:number,m:number,d:number):QDate;
	function QDate_CurrentDate():QDate;
	function QDate_FromJulianDay(jd:number):QDate;
	function QDate_FromString(stri:string,format:number):QDate;
	function QDate_FromString2(stri:string,format:string):QDate;
	function QDate_IsLeapYear(year:number):boolean;
	function QDate_IsValid2(year:number,month:number,day:number):boolean;
	function NewQDateTime():QDateTime;
	function NewQDateTime2(date:QDate_ITF):QDateTime;
	function NewQDateTime3(date:QDate_ITF,ti:QTime_ITF,spec:number):QDateTime;
	function NewQDateTime4(date:QDate_ITF,ti:QTime_ITF,spec:number,offsetSeconds:number):QDateTime;
	function NewQDateTime5(date:QDate_ITF,ti:QTime_ITF,timeZone:QTimeZone_ITF):QDateTime;
	function NewQDateTime6(other:QDateTime_ITF):QDateTime;
	function NewQDateTime7(other:QDateTime_ITF):QDateTime;
	const QDate__DateFormat: number;
	const QDate__StandaloneFormat: number;
	interface QDateTime_ITF {
		QDateTime_PTR():QDateTime;
	}

	class QDateTime {
		___pointer: number;
		QDateTime_PTR():QDateTime;
		Pointer():number;
		SetPointer(p:number):void;
		AddDays(ndays:number):QDateTime;
		AddMSecs(msecs:number):QDateTime;
		AddMonths(nmonths:number):QDateTime;
		AddSecs(s:number):QDateTime;
		AddYears(nyears:number):QDateTime;
		CurrentDateTime():QDateTime;
		CurrentDateTimeUtc():QDateTime;
		CurrentMSecsSinceEpoch():number;
		CurrentSecsSinceEpoch():number;
		Date():QDate;
		DaysTo(other:QDateTime_ITF):number;
		FromMSecsSinceEpoch(msecs:number):QDateTime;
		FromMSecsSinceEpoch2(msecs:number,spec:number,offsetSeconds:number):QDateTime;
		FromMSecsSinceEpoch3(msecs:number,timeZone:QTimeZone_ITF):QDateTime;
		FromSecsSinceEpoch(secs:number,spec:number,offsetSeconds:number):QDateTime;
		FromSecsSinceEpoch2(secs:number,timeZone:QTimeZone_ITF):QDateTime;
		FromString(stri:string,format:number):QDateTime;
		FromString2(stri:string,format:string):QDateTime;
		IsDaylightTime():boolean;
		IsNull():boolean;
		IsValid():boolean;
		MsecsTo(other:QDateTime_ITF):number;
		OffsetFromUtc():number;
		SecsTo(other:QDateTime_ITF):number;
		SetDate(date:QDate_ITF):void;
		SetMSecsSinceEpoch(msecs:number):void;
		SetOffsetFromUtc(offsetSeconds:number):void;
		SetSecsSinceEpoch(secs:number):void;
		SetTime(ti:QTime_ITF):void;
		SetTimeSpec(spec:number):void;
		SetTimeZone(toZone:QTimeZone_ITF):void;
		Swap(other:QDateTime_ITF):void;
		Time():QTime;
		TimeSpec():number;
		TimeZone():QTimeZone;
		TimeZoneAbbreviation():string;
		ToLocalTime():QDateTime;
		ToMSecsSinceEpoch():number;
		ToOffsetFromUtc(offsetSeconds:number):QDateTime;
		ToSecsSinceEpoch():number;
		ToString(format:string):string;
		ToString2(format:number):string;
		ToString3(format:QStringView_ITF):string;
		ToTimeSpec(spec:number):QDateTime;
		ToTimeZone(timeZone:QTimeZone_ITF):QDateTime;
		ToUTC():QDateTime;
		DestroyQDateTime():void;
	}
	function NewQDateTimeFromPointer(ptr:number):QDateTime;
	function NewQDateTime():QDateTime;
	function NewQDateTime2(date:QDate_ITF):QDateTime;
	function NewQDateTime3(date:QDate_ITF,ti:QTime_ITF,spec:number):QDateTime;
	function NewQDateTime4(date:QDate_ITF,ti:QTime_ITF,spec:number,offsetSeconds:number):QDateTime;
	function NewQDateTime5(date:QDate_ITF,ti:QTime_ITF,timeZone:QTimeZone_ITF):QDateTime;
	function NewQDateTime6(other:QDateTime_ITF):QDateTime;
	function NewQDateTime7(other:QDateTime_ITF):QDateTime;
	function QDateTime_CurrentDateTime():QDateTime;
	function QDateTime_CurrentDateTimeUtc():QDateTime;
	function QDateTime_CurrentMSecsSinceEpoch():number;
	function QDateTime_CurrentSecsSinceEpoch():number;
	function QDateTime_FromMSecsSinceEpoch(msecs:number):QDateTime;
	function QDateTime_FromMSecsSinceEpoch2(msecs:number,spec:number,offsetSeconds:number):QDateTime;
	function QDateTime_FromMSecsSinceEpoch3(msecs:number,timeZone:QTimeZone_ITF):QDateTime;
	function QDateTime_FromSecsSinceEpoch(secs:number,spec:number,offsetSeconds:number):QDateTime;
	function QDateTime_FromSecsSinceEpoch2(secs:number,timeZone:QTimeZone_ITF):QDateTime;
	function QDateTime_FromString(stri:string,format:number):QDateTime;
	function QDateTime_FromString2(stri:string,format:string):QDateTime;
	interface QDeadlineTimer_ITF {
		QDeadlineTimer_PTR():QDeadlineTimer;
	}

	class QDeadlineTimer {
		___pointer: number;
		QDeadlineTimer_PTR():QDeadlineTimer;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDeadlineTimer():void;
		Deadline():number;
		DeadlineNSecs():number;
		HasExpired():boolean;
		IsForever():boolean;
		RemainingTime():number;
		RemainingTimeNSecs():number;
		SetDeadline(msecs:number,timerType:number):void;
		SetPreciseDeadline(secs:number,nsecs:number,timerType:number):void;
		SetPreciseRemainingTime(secs:number,nsecs:number,timerType:number):void;
		SetRemainingTime(msecs:number,timerType:number):void;
		SetTimerType(timerType:number):void;
		Swap(other:QDeadlineTimer_ITF):void;
		TimerType():number;
	}
	function NewQDeadlineTimerFromPointer(ptr:number):QDeadlineTimer;
	function NewQDeadlineTimer(timerType:number):QDeadlineTimer;
	function NewQDeadlineTimer2(vqd:number,timerType:number):QDeadlineTimer;
	function NewQDeadlineTimer3(msecs:number,ty:number):QDeadlineTimer;
	const QDeadlineTimer__Forever: number;
	interface QDebug_ITF {
		QDebug_PTR():QDebug;
	}

	class QDebug {
		___pointer: number;
		QDebug_PTR():QDebug;
		Pointer():number;
		SetPointer(p:number):void;
		AutoInsertSpaces():boolean;
		MaybeQuote(c:string):QDebug;
		MaybeSpace():QDebug;
		Noquote():QDebug;
		Nospace():QDebug;
		Quote():QDebug;
		ResetFormat():QDebug;
		SetAutoInsertSpaces(b:boolean):void;
		SetVerbosity(verbosityLevel:number):void;
		Space():QDebug;
		Swap(other:QDebug_ITF):void;
		Verbosity(verbosityLevel:number):QDebug;
		Verbosity2():number;
		DestroyQDebug():void;
	}
	function NewQDebugFromPointer(ptr:number):QDebug;
	function NewQDebug(device:QIODevice_ITF):QDebug;
	function NewQDebug2(stri:string):QDebug;
	function NewQDebug4(o:QDebug_ITF):QDebug;
	function NewQDebugStateSaver(dbg:QDebug_ITF):QDebugStateSaver;
	const QDebug__MinimumVerbosity: number;
	const QDebug__DefaultVerbosity: number;
	const QDebug__MaximumVerbosity: number;
	interface QDebugStateSaver_ITF {
		QDebugStateSaver_PTR():QDebugStateSaver;
	}

	class QDebugStateSaver {
		___pointer: number;
		QDebugStateSaver_PTR():QDebugStateSaver;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDebugStateSaver():void;
	}
	function NewQDebugStateSaverFromPointer(ptr:number):QDebugStateSaver;
	function NewQDebugStateSaver(dbg:QDebug_ITF):QDebugStateSaver;
	interface QDeferredDeleteEvent_ITF extends QEvent_ITF {
		QDeferredDeleteEvent_PTR():QDeferredDeleteEvent;
	}

	class QDeferredDeleteEvent extends QEvent {
		___pointer: number;
		QDeferredDeleteEvent_PTR():QDeferredDeleteEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDeferredDeleteEvent():void;
		LoopLevel():number;
	}
	function NewQDeferredDeleteEventFromPointer(ptr:number):QDeferredDeleteEvent;
	function NewQDeferredDeleteEvent():QDeferredDeleteEvent;
	interface QDir_ITF {
		QDir_PTR():QDir;
	}

	class QDir {
		___pointer: number;
		QDir_PTR():QDir;
		Pointer():number;
		SetPointer(p:number):void;
		AbsoluteFilePath(fileName:string):string;
		AbsolutePath():string;
		AddSearchPath(prefix:string,path:string):void;
		CanonicalPath():string;
		Cd(dirName:string):boolean;
		CdUp():boolean;
		CleanPath(path:string):string;
		Count():number;
		Current():QDir;
		CurrentPath():string;
		DirName():string;
		Drives():QFileInfo[];
		EntryInfoList(nameFilters:string[],filters:number,sort:number):QFileInfo[];
		EntryInfoList2(filters:number,sort:number):QFileInfo[];
		EntryList(nameFilters:string[],filters:number,sort:number):string[];
		EntryList2(filters:number,sort:number):string[];
		Exists(name:string):boolean;
		Exists2():boolean;
		FilePath(fileName:string):string;
		Filter():number;
		FromNativeSeparators(pathName:string):string;
		Home():QDir;
		HomePath():string;
		IsAbsolute():boolean;
		IsAbsolutePath(path:string):boolean;
		IsEmpty(filters:number):boolean;
		IsReadable():boolean;
		IsRelative():boolean;
		IsRelativePath(path:string):boolean;
		IsRoot():boolean;
		ListSeparator():QChar;
		MakeAbsolute():boolean;
		Match(filter:string,fileName:string):boolean;
		Match2(filters:string[],fileName:string):boolean;
		Mkdir(dirName:string):boolean;
		Mkpath(dirPath:string):boolean;
		NameFilters():string[];
		Path():string;
		Refresh():void;
		RelativeFilePath(fileName:string):string;
		Remove(fileName:string):boolean;
		RemoveRecursively():boolean;
		Rename(oldName:string,newName:string):boolean;
		Rmdir(dirName:string):boolean;
		Rmpath(dirPath:string):boolean;
		Root():QDir;
		RootPath():string;
		SearchPaths(prefix:string):string[];
		Separator():QChar;
		SetCurrent(path:string):boolean;
		SetFilter(filters:number):void;
		SetNameFilters(nameFilters:string[]):void;
		SetPath(path:string):void;
		SetSearchPaths(prefix:string,searchPaths:string[]):void;
		SetSorting(sort:number):void;
		Sorting():number;
		Swap(other:QDir_ITF):void;
		Temp():QDir;
		TempPath():string;
		ToNativeSeparators(pathName:string):string;
		DestroyQDir():void;
	}
	function NewQDirFromPointer(ptr:number):QDir;
	function NewQDir(dir:QDir_ITF):QDir;
	function NewQDir2(path:string):QDir;
	function NewQDir3(path:string,nameFilter:string,sort:number,filters:number):QDir;
	function QDir_AddSearchPath(prefix:string,path:string):void;
	function QDir_CleanPath(path:string):string;
	function QDir_Current():QDir;
	function QDir_CurrentPath():string;
	function QDir_Drives():QFileInfo[];
	function QDir_FromNativeSeparators(pathName:string):string;
	function QDir_Home():QDir;
	function QDir_HomePath():string;
	function QDir_IsAbsolutePath(path:string):boolean;
	function QDir_IsRelativePath(path:string):boolean;
	function QDir_ListSeparator():QChar;
	function QDir_Match(filter:string,fileName:string):boolean;
	function QDir_Match2(filters:string[],fileName:string):boolean;
	function QDir_Root():QDir;
	function QDir_RootPath():string;
	function QDir_SearchPaths(prefix:string):string[];
	function QDir_Separator():QChar;
	function QDir_SetCurrent(path:string):boolean;
	function QDir_SetSearchPaths(prefix:string,searchPaths:string[]):void;
	function QDir_Temp():QDir;
	function QDir_TempPath():string;
	function QDir_ToNativeSeparators(pathName:string):string;
	const QDir__Dirs: number;
	const QDir__Files: number;
	const QDir__Drives: number;
	const QDir__NoSymLinks: number;
	const QDir__AllEntries: number;
	const QDir__TypeMask: number;
	const QDir__Readable: number;
	const QDir__Writable: number;
	const QDir__Executable: number;
	const QDir__PermissionMask: number;
	const QDir__Modified: number;
	const QDir__Hidden: number;
	const QDir__System: number;
	const QDir__AccessMask: number;
	const QDir__AllDirs: number;
	const QDir__CaseSensitive: number;
	const QDir__NoDot: number;
	const QDir__NoDotDot: number;
	const QDir__NoDotAndDotDot: number;
	const QDir__NoFilter: number;
	const QDir__Name: number;
	const QDir__Time: number;
	const QDir__Size: number;
	const QDir__Unsorted: number;
	const QDir__SortByMask: number;
	const QDir__DirsFirst: number;
	const QDir__Reversed: number;
	const QDir__IgnoreCase: number;
	const QDir__DirsLast: number;
	const QDir__LocaleAware: number;
	const QDir__Type: number;
	const QDir__NoSort: number;
	const QDirIterator__NoIteratorFlags: number;
	const QDirIterator__FollowSymlinks: number;
	const QDirIterator__Subdirectories: number;
	interface QDynamicPropertyChangeEvent_ITF extends QEvent_ITF {
		QDynamicPropertyChangeEvent_PTR():QDynamicPropertyChangeEvent;
	}

	class QDynamicPropertyChangeEvent extends QEvent {
		___pointer: number;
		QDynamicPropertyChangeEvent_PTR():QDynamicPropertyChangeEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDynamicPropertyChangeEvent():void;
		PropertyName():QByteArray;
	}
	function NewQDynamicPropertyChangeEventFromPointer(ptr:number):QDynamicPropertyChangeEvent;
	function NewQDynamicPropertyChangeEvent(name:QByteArray_ITF):QDynamicPropertyChangeEvent;
	interface QEasingCurve_ITF {
		QEasingCurve_PTR():QEasingCurve;
	}

	class QEasingCurve {
		___pointer: number;
		QEasingCurve_PTR():QEasingCurve;
		Pointer():number;
		SetPointer(p:number):void;
		AddCubicBezierSegment(c1:QPointF_ITF,c2:QPointF_ITF,endPoint:QPointF_ITF):void;
		AddTCBSegment(nextPoint:QPointF_ITF,t:number,c:number,b:number):void;
		Amplitude():number;
		Overshoot():number;
		Period():number;
		SetAmplitude(amplitude:number):void;
		SetOvershoot(overshoot:number):void;
		SetPeriod(period:number):void;
		SetType(ty:number):void;
		Swap(other:QEasingCurve_ITF):void;
		ToCubicSpline():QPointF[];
		Type():number;
		ValueForProgress(progress:number):number;
		DestroyQEasingCurve():void;
	}
	function NewQEasingCurveFromPointer(ptr:number):QEasingCurve;
	function NewQEasingCurve(ty:number):QEasingCurve;
	function NewQEasingCurve2(other:QEasingCurve_ITF):QEasingCurve;
	function NewQEasingCurve3(other:QEasingCurve_ITF):QEasingCurve;
	const QEasingCurve__Linear: number;
	const QEasingCurve__InQuad: number;
	const QEasingCurve__OutQuad: number;
	const QEasingCurve__InOutQuad: number;
	const QEasingCurve__OutInQuad: number;
	const QEasingCurve__InCubic: number;
	const QEasingCurve__OutCubic: number;
	const QEasingCurve__InOutCubic: number;
	const QEasingCurve__OutInCubic: number;
	const QEasingCurve__InQuart: number;
	const QEasingCurve__OutQuart: number;
	const QEasingCurve__InOutQuart: number;
	const QEasingCurve__OutInQuart: number;
	const QEasingCurve__InQuint: number;
	const QEasingCurve__OutQuint: number;
	const QEasingCurve__InOutQuint: number;
	const QEasingCurve__OutInQuint: number;
	const QEasingCurve__InSine: number;
	const QEasingCurve__OutSine: number;
	const QEasingCurve__InOutSine: number;
	const QEasingCurve__OutInSine: number;
	const QEasingCurve__InExpo: number;
	const QEasingCurve__OutExpo: number;
	const QEasingCurve__InOutExpo: number;
	const QEasingCurve__OutInExpo: number;
	const QEasingCurve__InCirc: number;
	const QEasingCurve__OutCirc: number;
	const QEasingCurve__InOutCirc: number;
	const QEasingCurve__OutInCirc: number;
	const QEasingCurve__InElastic: number;
	const QEasingCurve__OutElastic: number;
	const QEasingCurve__InOutElastic: number;
	const QEasingCurve__OutInElastic: number;
	const QEasingCurve__InBack: number;
	const QEasingCurve__OutBack: number;
	const QEasingCurve__InOutBack: number;
	const QEasingCurve__OutInBack: number;
	const QEasingCurve__InBounce: number;
	const QEasingCurve__OutBounce: number;
	const QEasingCurve__InOutBounce: number;
	const QEasingCurve__OutInBounce: number;
	const QEasingCurve__InCurve: number;
	const QEasingCurve__OutCurve: number;
	const QEasingCurve__SineCurve: number;
	const QEasingCurve__CosineCurve: number;
	const QEasingCurve__BezierSpline: number;
	const QEasingCurve__TCBSpline: number;
	const QEasingCurve__Custom: number;
	const QEasingCurve__NCurveTypes: number;
	interface QElapsedTimer_ITF {
		QElapsedTimer_PTR():QElapsedTimer;
	}

	class QElapsedTimer {
		___pointer: number;
		QElapsedTimer_PTR():QElapsedTimer;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQElapsedTimer():void;
		ClockType():number;
		Elapsed():number;
		HasExpired(timeout:number):boolean;
		Invalidate():void;
		IsMonotonic():boolean;
		IsValid():boolean;
		MsecsSinceReference():number;
		MsecsTo(other:QElapsedTimer_ITF):number;
		NsecsElapsed():number;
		Restart():number;
		SecsTo(other:QElapsedTimer_ITF):number;
		Start():void;
	}
	function NewQElapsedTimerFromPointer(ptr:number):QElapsedTimer;
	function NewQElapsedTimer():QElapsedTimer;
	function QElapsedTimer_ClockType():number;
	function QElapsedTimer_IsMonotonic():boolean;
	const QElapsedTimer__SystemTime: number;
	const QElapsedTimer__MonotonicClock: number;
	const QElapsedTimer__TickCounter: number;
	const QElapsedTimer__MachAbsoluteTime: number;
	const QElapsedTimer__PerformanceCounter: number;
	interface QEnableSharedFromThis_ITF {
		QEnableSharedFromThis_PTR():QEnableSharedFromThis;
	}

	class QEnableSharedFromThis {
		___pointer: number;
		QEnableSharedFromThis_PTR():QEnableSharedFromThis;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQEnableSharedFromThis():void;
	}
	function NewQEnableSharedFromThisFromPointer(ptr:number):QEnableSharedFromThis;
	interface QEvent_ITF {
		QEvent_PTR():QEvent;
	}

	class QEvent {
		___pointer: number;
		QEvent_PTR():QEvent;
		Pointer():number;
		SetPointer(p:number):void;
		Accept():void;
		Ignore():void;
		IsAccepted():boolean;
		RegisterEventType(hint:number):number;
		SetAccepted(accepted:boolean):void;
		Spontaneous():boolean;
		Type():number;
		ConnectDestroyQEvent(f:()=>void):void;
		DisconnectDestroyQEvent():void;
		DestroyQEvent():void;
		DestroyQEventDefault():void;
	}
	function NewQEventFromPointer(ptr:number):QEvent;
	function NewQEvent(ty:number):QEvent;
	function QEvent_RegisterEventType(hint:number):number;
	function NewQEventLoop(parent:QObject_ITF):QEventLoop;
	function NewQEventLoopLocker():QEventLoopLocker;
	function NewQEventLoopLocker2(loop:QEventLoop_ITF):QEventLoopLocker;
	function NewQEventLoopLocker3(thread:QThread_ITF):QEventLoopLocker;
	function NewQEventTransition(sourceState:QState_ITF):QEventTransition;
	function NewQEventTransition2(object:QObject_ITF,ty:number,sourceState:QState_ITF):QEventTransition;
	const QEvent__None: number;
	const QEvent__Timer: number;
	const QEvent__MouseButtonPress: number;
	const QEvent__MouseButtonRelease: number;
	const QEvent__MouseButtonDblClick: number;
	const QEvent__MouseMove: number;
	const QEvent__KeyPress: number;
	const QEvent__KeyRelease: number;
	const QEvent__FocusIn: number;
	const QEvent__FocusOut: number;
	const QEvent__FocusAboutToChange: number;
	const QEvent__Enter: number;
	const QEvent__Leave: number;
	const QEvent__Paint: number;
	const QEvent__Move: number;
	const QEvent__Resize: number;
	const QEvent__Create: number;
	const QEvent__Destroy: number;
	const QEvent__Show: number;
	const QEvent__Hide: number;
	const QEvent__Close: number;
	const QEvent__Quit: number;
	const QEvent__ParentChange: number;
	const QEvent__ParentAboutToChange: number;
	const QEvent__ThreadChange: number;
	const QEvent__WindowActivate: number;
	const QEvent__WindowDeactivate: number;
	const QEvent__ShowToParent: number;
	const QEvent__HideToParent: number;
	const QEvent__Wheel: number;
	const QEvent__WindowTitleChange: number;
	const QEvent__WindowIconChange: number;
	const QEvent__ApplicationWindowIconChange: number;
	const QEvent__ApplicationFontChange: number;
	const QEvent__ApplicationLayoutDirectionChange: number;
	const QEvent__ApplicationPaletteChange: number;
	const QEvent__PaletteChange: number;
	const QEvent__Clipboard: number;
	const QEvent__Speech: number;
	const QEvent__MetaCall: number;
	const QEvent__SockAct: number;
	const QEvent__WinEventAct: number;
	const QEvent__DeferredDelete: number;
	const QEvent__DragEnter: number;
	const QEvent__DragMove: number;
	const QEvent__DragLeave: number;
	const QEvent__Drop: number;
	const QEvent__DragResponse: number;
	const QEvent__ChildAdded: number;
	const QEvent__ChildPolished: number;
	const QEvent__ChildRemoved: number;
	const QEvent__ShowWindowRequest: number;
	const QEvent__PolishRequest: number;
	const QEvent__Polish: number;
	const QEvent__LayoutRequest: number;
	const QEvent__UpdateRequest: number;
	const QEvent__UpdateLater: number;
	const QEvent__EmbeddingControl: number;
	const QEvent__ActivateControl: number;
	const QEvent__DeactivateControl: number;
	const QEvent__ContextMenu: number;
	const QEvent__InputMethod: number;
	const QEvent__TabletMove: number;
	const QEvent__LocaleChange: number;
	const QEvent__LanguageChange: number;
	const QEvent__LayoutDirectionChange: number;
	const QEvent__Style: number;
	const QEvent__TabletPress: number;
	const QEvent__TabletRelease: number;
	const QEvent__OkRequest: number;
	const QEvent__HelpRequest: number;
	const QEvent__IconDrag: number;
	const QEvent__FontChange: number;
	const QEvent__EnabledChange: number;
	const QEvent__ActivationChange: number;
	const QEvent__StyleChange: number;
	const QEvent__IconTextChange: number;
	const QEvent__ModifiedChange: number;
	const QEvent__MouseTrackingChange: number;
	const QEvent__WindowBlocked: number;
	const QEvent__WindowUnblocked: number;
	const QEvent__WindowStateChange: number;
	const QEvent__ReadOnlyChange: number;
	const QEvent__ToolTip: number;
	const QEvent__WhatsThis: number;
	const QEvent__StatusTip: number;
	const QEvent__ActionChanged: number;
	const QEvent__ActionAdded: number;
	const QEvent__ActionRemoved: number;
	const QEvent__FileOpen: number;
	const QEvent__Shortcut: number;
	const QEvent__ShortcutOverride: number;
	const QEvent__WhatsThisClicked: number;
	const QEvent__ToolBarChange: number;
	const QEvent__ApplicationActivate: number;
	const QEvent__ApplicationActivated: number;
	const QEvent__ApplicationDeactivate: number;
	const QEvent__ApplicationDeactivated: number;
	const QEvent__QueryWhatsThis: number;
	const QEvent__EnterWhatsThisMode: number;
	const QEvent__LeaveWhatsThisMode: number;
	const QEvent__ZOrderChange: number;
	const QEvent__HoverEnter: number;
	const QEvent__HoverLeave: number;
	const QEvent__HoverMove: number;
	const QEvent__EnterEditFocus: number;
	const QEvent__LeaveEditFocus: number;
	const QEvent__AcceptDropsChange: number;
	const QEvent__ZeroTimerEvent: number;
	const QEvent__GraphicsSceneMouseMove: number;
	const QEvent__GraphicsSceneMousePress: number;
	const QEvent__GraphicsSceneMouseRelease: number;
	const QEvent__GraphicsSceneMouseDoubleClick: number;
	const QEvent__GraphicsSceneContextMenu: number;
	const QEvent__GraphicsSceneHoverEnter: number;
	const QEvent__GraphicsSceneHoverMove: number;
	const QEvent__GraphicsSceneHoverLeave: number;
	const QEvent__GraphicsSceneHelp: number;
	const QEvent__GraphicsSceneDragEnter: number;
	const QEvent__GraphicsSceneDragMove: number;
	const QEvent__GraphicsSceneDragLeave: number;
	const QEvent__GraphicsSceneDrop: number;
	const QEvent__GraphicsSceneWheel: number;
	const QEvent__KeyboardLayoutChange: number;
	const QEvent__DynamicPropertyChange: number;
	const QEvent__TabletEnterProximity: number;
	const QEvent__TabletLeaveProximity: number;
	const QEvent__NonClientAreaMouseMove: number;
	const QEvent__NonClientAreaMouseButtonPress: number;
	const QEvent__NonClientAreaMouseButtonRelease: number;
	const QEvent__NonClientAreaMouseButtonDblClick: number;
	const QEvent__MacSizeChange: number;
	const QEvent__ContentsRectChange: number;
	const QEvent__MacGLWindowChange: number;
	const QEvent__FutureCallOut: number;
	const QEvent__GraphicsSceneResize: number;
	const QEvent__GraphicsSceneMove: number;
	const QEvent__CursorChange: number;
	const QEvent__ToolTipChange: number;
	const QEvent__NetworkReplyUpdated: number;
	const QEvent__GrabMouse: number;
	const QEvent__UngrabMouse: number;
	const QEvent__GrabKeyboard: number;
	const QEvent__UngrabKeyboard: number;
	const QEvent__MacGLClearDrawable: number;
	const QEvent__StateMachineSignal: number;
	const QEvent__StateMachineWrapped: number;
	const QEvent__TouchBegin: number;
	const QEvent__TouchUpdate: number;
	const QEvent__TouchEnd: number;
	const QEvent__NativeGesture: number;
	const QEvent__RequestSoftwareInputPanel: number;
	const QEvent__CloseSoftwareInputPanel: number;
	const QEvent__WinIdChange: number;
	const QEvent__Gesture: number;
	const QEvent__GestureOverride: number;
	const QEvent__ScrollPrepare: number;
	const QEvent__Scroll: number;
	const QEvent__Expose: number;
	const QEvent__InputMethodQuery: number;
	const QEvent__OrientationChange: number;
	const QEvent__TouchCancel: number;
	const QEvent__ThemeChange: number;
	const QEvent__SockClose: number;
	const QEvent__PlatformPanel: number;
	const QEvent__StyleAnimationUpdate: number;
	const QEvent__ApplicationStateChange: number;
	const QEvent__WindowChangeInternal: number;
	const QEvent__ScreenChangeInternal: number;
	const QEvent__PlatformSurface: number;
	const QEvent__Pointer: number;
	const QEvent__TabletTrackingChange: number;
	const QEvent__User: number;
	const QEvent__MaxUser: number;
	interface QEventLoop_ITF extends QObject_ITF {
		QEventLoop_PTR():QEventLoop;
	}

	class QEventLoop extends QObject {
		___pointer: number;
		QEventLoop_PTR():QEventLoop;
		Pointer():number;
		SetPointer(p:number):void;
		Exec(flags:number):number;
		Exit(returnCode:number):void;
		IsRunning():boolean;
		ProcessEvents(flags:number):boolean;
		ProcessEvents2(flags:number,maxTime:number):void;
		ConnectQuit(f:()=>void):void;
		DisconnectQuit():void;
		Quit():void;
		QuitDefault():void;
		WakeUp():void;
		ConnectDestroyQEventLoop(f:()=>void):void;
		DisconnectDestroyQEventLoop():void;
		DestroyQEventLoop():void;
		DestroyQEventLoopDefault():void;
	}
	function NewQEventLoopFromPointer(ptr:number):QEventLoop;
	function NewQEventLoop(parent:QObject_ITF):QEventLoop;
	function NewQEventLoopLocker():QEventLoopLocker;
	function NewQEventLoopLocker2(loop:QEventLoop_ITF):QEventLoopLocker;
	function NewQEventLoopLocker3(thread:QThread_ITF):QEventLoopLocker;
	const QEventLoop__AllEvents: number;
	const QEventLoop__ExcludeUserInputEvents: number;
	const QEventLoop__ExcludeSocketNotifiers: number;
	const QEventLoop__WaitForMoreEvents: number;
	const QEventLoop__X11ExcludeTimers: number;
	const QEventLoop__EventLoopExec: number;
	const QEventLoop__DialogExec: number;
	interface QEventLoopLocker_ITF {
		QEventLoopLocker_PTR():QEventLoopLocker;
	}

	class QEventLoopLocker {
		___pointer: number;
		QEventLoopLocker_PTR():QEventLoopLocker;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQEventLoopLocker():void;
	}
	function NewQEventLoopLockerFromPointer(ptr:number):QEventLoopLocker;
	function NewQEventLoopLocker():QEventLoopLocker;
	function NewQEventLoopLocker2(loop:QEventLoop_ITF):QEventLoopLocker;
	function NewQEventLoopLocker3(thread:QThread_ITF):QEventLoopLocker;
	interface QEventTransition_ITF extends QAbstractTransition_ITF {
		QEventTransition_PTR():QEventTransition;
	}

	class QEventTransition extends QAbstractTransition {
		___pointer: number;
		QEventTransition_PTR():QEventTransition;
		Pointer():number;
		SetPointer(p:number):void;
		EventSource():QObject;
		ConnectEventTest(f:(event:QEvent)=>boolean):void;
		DisconnectEventTest():void;
		EventTest(event:QEvent_ITF):boolean;
		EventTestDefault(event:QEvent_ITF):boolean;
		EventType():number;
		ConnectOnTransition(f:(event:QEvent)=>void):void;
		DisconnectOnTransition():void;
		OnTransition(event:QEvent_ITF):void;
		OnTransitionDefault(event:QEvent_ITF):void;
		SetEventSource(object:QObject_ITF):void;
		SetEventType(ty:number):void;
		ConnectDestroyQEventTransition(f:()=>void):void;
		DisconnectDestroyQEventTransition():void;
		DestroyQEventTransition():void;
		DestroyQEventTransitionDefault():void;
	}
	function NewQEventTransitionFromPointer(ptr:number):QEventTransition;
	function NewQEventTransition(sourceState:QState_ITF):QEventTransition;
	function NewQEventTransition2(object:QObject_ITF,ty:number,sourceState:QState_ITF):QEventTransition;
	interface QFactoryInterface_ITF {
		QFactoryInterface_PTR():QFactoryInterface;
	}

	class QFactoryInterface {
		___pointer: number;
		QFactoryInterface_PTR():QFactoryInterface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFactoryInterface():void;
	}
	function NewQFactoryInterfaceFromPointer(ptr:number):QFactoryInterface;
	interface QFile_ITF extends QFileDevice_ITF {
		QFile_PTR():QFile;
	}

	class QFile extends QFileDevice {
		___pointer: number;
		QFile_PTR():QFile;
		Pointer():number;
		SetPointer(p:number):void;
		Copy(newName:string):boolean;
		Copy2(fileName:string,newName:string):boolean;
		DecodeName(localFileName:QByteArray_ITF):string;
		DecodeName2(localFileName:string):string;
		EncodeName(fileName:string):QByteArray;
		Exists(fileName:string):boolean;
		Exists2():boolean;
		Link(linkName:string):boolean;
		Link2(fileName:string,linkName:string):boolean;
		Open3(fd:number,mode:number,handleFlags:number):boolean;
		Permissions2(fileName:string):number;
		Remove():boolean;
		Remove2(fileName:string):boolean;
		Rename(newName:string):boolean;
		Rename2(oldName:string,newName:string):boolean;
		Resize2(fileName:string,sz:number):boolean;
		SetFileName(name:string):void;
		SetPermissions2(fileName:string,permissions:number):boolean;
		SymLinkTarget(fileName:string):string;
		SymLinkTarget2():string;
		ConnectDestroyQFile(f:()=>void):void;
		DisconnectDestroyQFile():void;
		DestroyQFile():void;
		DestroyQFileDefault():void;
	}
	function NewQFileFromPointer(ptr:number):QFile;
	function NewQFile():QFile;
	function NewQFile2(name:string):QFile;
	function NewQFile3(parent:QObject_ITF):QFile;
	function NewQFile4(name:string,parent:QObject_ITF):QFile;
	function QFile_Copy2(fileName:string,newName:string):boolean;
	function QFile_DecodeName(localFileName:QByteArray_ITF):string;
	function QFile_DecodeName2(localFileName:string):string;
	function QFile_EncodeName(fileName:string):QByteArray;
	function QFile_Exists(fileName:string):boolean;
	function QFile_Link2(fileName:string,linkName:string):boolean;
	function QFile_Permissions2(fileName:string):number;
	function QFile_Remove2(fileName:string):boolean;
	function QFile_Rename2(oldName:string,newName:string):boolean;
	function QFile_Resize2(fileName:string,sz:number):boolean;
	function QFile_SetPermissions2(fileName:string,permissions:number):boolean;
	function QFile_SymLinkTarget(fileName:string):string;
	function NewQFileInfo2():QFileInfo;
	function NewQFileInfo3(file:string):QFileInfo;
	function NewQFileInfo4(file:QFile_ITF):QFileInfo;
	function NewQFileInfo5(dir:QDir_ITF,file:string):QFileInfo;
	function NewQFileInfo6(fileinfo:QFileInfo_ITF):QFileInfo;
	function NewQFileSelector(parent:QObject_ITF):QFileSelector;
	function NewQFileSystemWatcher(parent:QObject_ITF):QFileSystemWatcher;
	function NewQFileSystemWatcher2(paths:string[],parent:QObject_ITF):QFileSystemWatcher;
	interface QFileDevice_ITF extends QIODevice_ITF {
		QFileDevice_PTR():QFileDevice;
	}

	class QFileDevice extends QIODevice {
		___pointer: number;
		QFileDevice_PTR():QFileDevice;
		Pointer():number;
		SetPointer(p:number):void;
		Error():number;
		ConnectFileName(f:()=>string):void;
		DisconnectFileName():void;
		FileName():string;
		FileNameDefault():string;
		FileTime(ti:number):QDateTime;
		Flush():boolean;
		Handle():number;
		Map(offset:number,size:number,flags:number):string;
		ConnectPermissions(f:()=>number):void;
		DisconnectPermissions():void;
		Permissions():number;
		PermissionsDefault():number;
		ConnectReadData(f:(data:string,l:number)=>number):void;
		DisconnectReadData():void;
		ReadData(data:string,l:number):number;
		ReadDataDefault(data:string,l:number):number;
		ConnectResize(f:(sz:number)=>boolean):void;
		DisconnectResize():void;
		Resize(sz:number):boolean;
		ResizeDefault(sz:number):boolean;
		SetFileTime(newDate:QDateTime_ITF,fileTime:number):boolean;
		ConnectSetPermissions(f:(permissions:number)=>boolean):void;
		DisconnectSetPermissions():void;
		SetPermissions(permissions:number):boolean;
		SetPermissionsDefault(permissions:number):boolean;
		Unmap(address:string):boolean;
		UnsetError():void;
		ConnectWriteData(f:(data:string,l:number)=>number):void;
		DisconnectWriteData():void;
		WriteData(data:string,l:number):number;
		WriteDataDefault(data:string,l:number):number;
		ConnectDestroyQFileDevice(f:()=>void):void;
		DisconnectDestroyQFileDevice():void;
		DestroyQFileDevice():void;
		DestroyQFileDeviceDefault():void;
	}
	function NewQFileDeviceFromPointer(ptr:number):QFileDevice;
	const QFileDevice__NoError: number;
	const QFileDevice__ReadError: number;
	const QFileDevice__WriteError: number;
	const QFileDevice__FatalError: number;
	const QFileDevice__ResourceError: number;
	const QFileDevice__OpenError: number;
	const QFileDevice__AbortError: number;
	const QFileDevice__TimeOutError: number;
	const QFileDevice__UnspecifiedError: number;
	const QFileDevice__RemoveError: number;
	const QFileDevice__RenameError: number;
	const QFileDevice__PositionError: number;
	const QFileDevice__ResizeError: number;
	const QFileDevice__PermissionsError: number;
	const QFileDevice__CopyError: number;
	const QFileDevice__FileAccessTime: number;
	const QFileDevice__FileBirthTime: number;
	const QFileDevice__FileMetadataChangeTime: number;
	const QFileDevice__FileModificationTime: number;
	const QFileDevice__ReadOwner: number;
	const QFileDevice__WriteOwner: number;
	const QFileDevice__ExeOwner: number;
	const QFileDevice__ReadUser: number;
	const QFileDevice__WriteUser: number;
	const QFileDevice__ExeUser: number;
	const QFileDevice__ReadGroup: number;
	const QFileDevice__WriteGroup: number;
	const QFileDevice__ExeGroup: number;
	const QFileDevice__ReadOther: number;
	const QFileDevice__WriteOther: number;
	const QFileDevice__ExeOther: number;
	const QFileDevice__AutoCloseHandle: number;
	const QFileDevice__DontCloseHandle: number;
	const QFileDevice__NoOptions: number;
	const QFileDevice__MapPrivateOption: number;
	interface QFileInfo_ITF {
		QFileInfo_PTR():QFileInfo;
	}

	class QFileInfo {
		___pointer: number;
		QFileInfo_PTR():QFileInfo;
		Pointer():number;
		SetPointer(p:number):void;
		AbsoluteDir():QDir;
		AbsoluteFilePath():string;
		AbsolutePath():string;
		BaseName():string;
		BirthTime():QDateTime;
		BundleName():string;
		Caching():boolean;
		CanonicalFilePath():string;
		CanonicalPath():string;
		CompleteBaseName():string;
		CompleteSuffix():string;
		Dir():QDir;
		Exists():boolean;
		Exists2(file:string):boolean;
		FileName():string;
		FilePath():string;
		Group():string;
		GroupId():number;
		IsAbsolute():boolean;
		IsBundle():boolean;
		IsDir():boolean;
		IsExecutable():boolean;
		IsFile():boolean;
		IsHidden():boolean;
		IsNativePath():boolean;
		IsReadable():boolean;
		IsRelative():boolean;
		IsRoot():boolean;
		IsSymLink():boolean;
		IsWritable():boolean;
		LastModified():QDateTime;
		LastRead():QDateTime;
		MakeAbsolute():boolean;
		MetadataChangeTime():QDateTime;
		Owner():string;
		OwnerId():number;
		Path():string;
		Refresh():void;
		SetCaching(enable:boolean):void;
		SetFile(file:string):void;
		SetFile2(file:QFile_ITF):void;
		SetFile3(dir:QDir_ITF,file:string):void;
		Size():number;
		Suffix():string;
		Swap(other:QFileInfo_ITF):void;
		SymLinkTarget():string;
		DestroyQFileInfo():void;
	}
	function NewQFileInfoFromPointer(ptr:number):QFileInfo;
	function NewQFileInfo2():QFileInfo;
	function NewQFileInfo3(file:string):QFileInfo;
	function NewQFileInfo4(file:QFile_ITF):QFileInfo;
	function NewQFileInfo5(dir:QDir_ITF,file:string):QFileInfo;
	function NewQFileInfo6(fileinfo:QFileInfo_ITF):QFileInfo;
	function QFileInfo_Exists2(file:string):boolean;
	interface QFileSelector_ITF extends QObject_ITF {
		QFileSelector_PTR():QFileSelector;
	}

	class QFileSelector extends QObject {
		___pointer: number;
		QFileSelector_PTR():QFileSelector;
		Pointer():number;
		SetPointer(p:number):void;
		AllSelectors():string[];
		ExtraSelectors():string[];
		Select(filePath:string):string;
		Select2(filePath:QUrl_ITF):QUrl;
		SetExtraSelectors(list:string[]):void;
		ConnectDestroyQFileSelector(f:()=>void):void;
		DisconnectDestroyQFileSelector():void;
		DestroyQFileSelector():void;
		DestroyQFileSelectorDefault():void;
	}
	function NewQFileSelectorFromPointer(ptr:number):QFileSelector;
	function NewQFileSelector(parent:QObject_ITF):QFileSelector;
	interface QFileSystemWatcher_ITF extends QObject_ITF {
		QFileSystemWatcher_PTR():QFileSystemWatcher;
	}

	class QFileSystemWatcher extends QObject {
		___pointer: number;
		QFileSystemWatcher_PTR():QFileSystemWatcher;
		Pointer():number;
		SetPointer(p:number):void;
		AddPath(path:string):boolean;
		AddPaths(paths:string[]):string[];
		Directories():string[];
		ConnectDirectoryChanged(f:(path:string)=>void):void;
		DisconnectDirectoryChanged():void;
		ConnectFileChanged(f:(path:string)=>void):void;
		DisconnectFileChanged():void;
		Files():string[];
		RemovePath(path:string):boolean;
		RemovePaths(paths:string[]):string[];
		ConnectDestroyQFileSystemWatcher(f:()=>void):void;
		DisconnectDestroyQFileSystemWatcher():void;
		DestroyQFileSystemWatcher():void;
		DestroyQFileSystemWatcherDefault():void;
	}
	function NewQFileSystemWatcherFromPointer(ptr:number):QFileSystemWatcher;
	function NewQFileSystemWatcher(parent:QObject_ITF):QFileSystemWatcher;
	function NewQFileSystemWatcher2(paths:string[],parent:QObject_ITF):QFileSystemWatcher;
	interface QFinalState_ITF extends QAbstractState_ITF {
		QFinalState_PTR():QFinalState;
	}

	class QFinalState extends QAbstractState {
		___pointer: number;
		QFinalState_PTR():QFinalState;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectOnEntry(f:(event:QEvent)=>void):void;
		DisconnectOnEntry():void;
		OnEntry(event:QEvent_ITF):void;
		OnEntryDefault(event:QEvent_ITF):void;
		ConnectOnExit(f:(event:QEvent)=>void):void;
		DisconnectOnExit():void;
		OnExit(event:QEvent_ITF):void;
		OnExitDefault(event:QEvent_ITF):void;
		ConnectDestroyQFinalState(f:()=>void):void;
		DisconnectDestroyQFinalState():void;
		DestroyQFinalState():void;
		DestroyQFinalStateDefault():void;
	}
	function NewQFinalStateFromPointer(ptr:number):QFinalState;
	function NewQFinalState(parent:QState_ITF):QFinalState;
	interface QFlag_ITF {
		QFlag_PTR():QFlag;
	}

	class QFlag {
		___pointer: number;
		QFlag_PTR():QFlag;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFlag():void;
	}
	function NewQFlagFromPointer(ptr:number):QFlag;
	function NewQFlag(value:number):QFlag;
	function NewQFlag2(value:number):QFlag;
	function NewQFlag3(value:number):QFlag;
	function NewQFlag4(value:number):QFlag;
	interface QFutureInterface_ITF extends QFutureInterfaceBase_ITF {
		QFutureInterface_PTR():QFutureInterface;
	}

	class QFutureInterface extends QFutureInterfaceBase {
		___pointer: number;
		QFutureInterface_PTR():QFutureInterface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFutureInterface():void;
	}
	function NewQFutureInterfaceFromPointer(ptr:number):QFutureInterface;
	interface QFutureInterfaceBase_ITF {
		QFutureInterfaceBase_PTR():QFutureInterfaceBase;
	}

	class QFutureInterfaceBase {
		___pointer: number;
		QFutureInterfaceBase_PTR():QFutureInterfaceBase;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQFutureInterfaceBase():void;
	}
	function NewQFutureInterfaceBaseFromPointer(ptr:number):QFutureInterfaceBase;
	interface QFutureWatcherBase_ITF extends QObject_ITF {
		QFutureWatcherBase_PTR():QFutureWatcherBase;
	}

	class QFutureWatcherBase extends QObject {
		___pointer: number;
		QFutureWatcherBase_PTR():QFutureWatcherBase;
		Pointer():number;
		SetPointer(p:number):void;
	}
	function NewQFutureWatcherBaseFromPointer(ptr:number):QFutureWatcherBase;
	interface QGenericArgument_ITF {
		QGenericArgument_PTR():QGenericArgument;
	}

	class QGenericArgument {
		___pointer: number;
		QGenericArgument_PTR():QGenericArgument;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQGenericArgument():void;
		Data():number;
		Name():string;
	}
	function NewQGenericArgumentFromPointer(ptr:number):QGenericArgument;
	function NewQGenericArgument(name:string,data:number):QGenericArgument;
	interface QGenericAtomicOps_ITF {
		QGenericAtomicOps_PTR():QGenericAtomicOps;
	}

	class QGenericAtomicOps {
		___pointer: number;
		QGenericAtomicOps_PTR():QGenericAtomicOps;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQGenericAtomicOps():void;
	}
	function NewQGenericAtomicOpsFromPointer(ptr:number):QGenericAtomicOps;
	interface QGenericReturnArgument_ITF extends QGenericArgument_ITF {
		QGenericReturnArgument_PTR():QGenericReturnArgument;
	}

	class QGenericReturnArgument extends QGenericArgument {
		___pointer: number;
		QGenericReturnArgument_PTR():QGenericReturnArgument;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQGenericReturnArgument():void;
	}
	function NewQGenericReturnArgumentFromPointer(ptr:number):QGenericReturnArgument;
	function NewQGenericReturnArgument(name:string,data:number):QGenericReturnArgument;
	interface QHashData_ITF {
		QHashData_PTR():QHashData;
	}

	class QHashData {
		___pointer: number;
		QHashData_PTR():QHashData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQHashData():void;
	}
	function NewQHashDataFromPointer(ptr:number):QHashData;
	interface QHashNode_ITF {
		QHashNode_PTR():QHashNode;
	}

	class QHashNode {
		___pointer: number;
		QHashNode_PTR():QHashNode;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQHashNode():void;
	}
	function NewQHashNodeFromPointer(ptr:number):QHashNode;
	interface QHistoryState_ITF extends QAbstractState_ITF {
		QHistoryState_PTR():QHistoryState;
	}

	class QHistoryState extends QAbstractState {
		___pointer: number;
		QHistoryState_PTR():QHistoryState;
		Pointer():number;
		SetPointer(p:number):void;
		DefaultState():QAbstractState;
		ConnectDefaultStateChanged(f:()=>void):void;
		DisconnectDefaultStateChanged():void;
		DefaultTransition():QAbstractTransition;
		ConnectDefaultTransitionChanged(f:()=>void):void;
		DisconnectDefaultTransitionChanged():void;
		HistoryType():number;
		ConnectHistoryTypeChanged(f:()=>void):void;
		DisconnectHistoryTypeChanged():void;
		ConnectOnEntry(f:(event:QEvent)=>void):void;
		DisconnectOnEntry():void;
		OnEntry(event:QEvent_ITF):void;
		OnEntryDefault(event:QEvent_ITF):void;
		ConnectOnExit(f:(event:QEvent)=>void):void;
		DisconnectOnExit():void;
		OnExit(event:QEvent_ITF):void;
		OnExitDefault(event:QEvent_ITF):void;
		SetDefaultState(state:QAbstractState_ITF):void;
		SetDefaultTransition(transition:QAbstractTransition_ITF):void;
		SetHistoryType(ty:number):void;
		ConnectDestroyQHistoryState(f:()=>void):void;
		DisconnectDestroyQHistoryState():void;
		DestroyQHistoryState():void;
		DestroyQHistoryStateDefault():void;
	}
	function NewQHistoryStateFromPointer(ptr:number):QHistoryState;
	function NewQHistoryState(parent:QState_ITF):QHistoryState;
	function NewQHistoryState2(ty:number,parent:QState_ITF):QHistoryState;
	const QHistoryState__ShallowHistory: number;
	const QHistoryState__DeepHistory: number;
	interface QIODevice_ITF extends QObject_ITF {
		QIODevice_PTR():QIODevice;
	}

	class QIODevice extends QObject {
		___pointer: number;
		QIODevice_PTR():QIODevice;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAboutToClose(f:()=>void):void;
		DisconnectAboutToClose():void;
		AboutToClose():void;
		ConnectAtEnd(f:()=>boolean):void;
		DisconnectAtEnd():void;
		AtEnd():boolean;
		AtEndDefault():boolean;
		ConnectBytesAvailable(f:()=>number):void;
		DisconnectBytesAvailable():void;
		BytesAvailable():number;
		BytesAvailableDefault():number;
		ConnectBytesToWrite(f:()=>number):void;
		DisconnectBytesToWrite():void;
		BytesToWrite():number;
		BytesToWriteDefault():number;
		ConnectBytesWritten(f:(bytes:number)=>void):void;
		DisconnectBytesWritten():void;
		BytesWritten(bytes:number):void;
		ConnectCanReadLine(f:()=>boolean):void;
		DisconnectCanReadLine():void;
		CanReadLine():boolean;
		CanReadLineDefault():boolean;
		ConnectChannelBytesWritten(f:(channel:number,bytes:number)=>void):void;
		DisconnectChannelBytesWritten():void;
		ChannelBytesWritten(channel:number,bytes:number):void;
		ConnectChannelReadyRead(f:(channel:number)=>void):void;
		DisconnectChannelReadyRead():void;
		ChannelReadyRead(channel:number):void;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		CloseDefault():void;
		CommitTransaction():void;
		CurrentReadChannel():number;
		CurrentWriteChannel():number;
		ErrorString():string;
		GetChar(c:string):boolean;
		IsOpen():boolean;
		IsReadable():boolean;
		ConnectIsSequential(f:()=>boolean):void;
		DisconnectIsSequential():void;
		IsSequential():boolean;
		IsSequentialDefault():boolean;
		IsTextModeEnabled():boolean;
		IsTransactionStarted():boolean;
		IsWritable():boolean;
		ConnectOpen(f:(mode:number)=>boolean):void;
		DisconnectOpen():void;
		Open(mode:number):boolean;
		OpenDefault(mode:number):boolean;
		OpenMode():number;
		Peek(data:string,maxSize:number):number;
		Peek2(maxSize:number):QByteArray;
		ConnectPos(f:()=>number):void;
		DisconnectPos():void;
		Pos():number;
		PosDefault():number;
		PutChar(c:string):boolean;
		Read(data:string,maxSize:number):number;
		Read2(maxSize:number):QByteArray;
		ReadAll():QByteArray;
		ReadChannelCount():number;
		ConnectReadChannelFinished(f:()=>void):void;
		DisconnectReadChannelFinished():void;
		ReadChannelFinished():void;
		ConnectReadData(f:(data:string,maxSize:number)=>number):void;
		DisconnectReadData():void;
		ReadData(data:string,maxSize:number):number;
		ReadLine(data:string,maxSize:number):number;
		ReadLine2(maxSize:number):QByteArray;
		ConnectReadLineData(f:(data:string,maxSize:number)=>number):void;
		DisconnectReadLineData():void;
		ReadLineData(data:string,maxSize:number):number;
		ReadLineDataDefault(data:string,maxSize:number):number;
		ConnectReadyRead(f:()=>void):void;
		DisconnectReadyRead():void;
		ReadyRead():void;
		ConnectReset(f:()=>boolean):void;
		DisconnectReset():void;
		Reset():boolean;
		ResetDefault():boolean;
		RollbackTransaction():void;
		ConnectSeek(f:(pos:number)=>boolean):void;
		DisconnectSeek():void;
		Seek(pos:number):boolean;
		SeekDefault(pos:number):boolean;
		SetCurrentReadChannel(channel:number):void;
		SetCurrentWriteChannel(channel:number):void;
		SetErrorString(str:string):void;
		SetOpenMode(openMode:number):void;
		SetTextModeEnabled(enabled:boolean):void;
		ConnectSize(f:()=>number):void;
		DisconnectSize():void;
		Size():number;
		SizeDefault():number;
		Skip(maxSize:number):number;
		StartTransaction():void;
		UngetChar(c:string):void;
		ConnectWaitForBytesWritten(f:(msecs:number)=>boolean):void;
		DisconnectWaitForBytesWritten():void;
		WaitForBytesWritten(msecs:number):boolean;
		WaitForBytesWrittenDefault(msecs:number):boolean;
		ConnectWaitForReadyRead(f:(msecs:number)=>boolean):void;
		DisconnectWaitForReadyRead():void;
		WaitForReadyRead(msecs:number):boolean;
		WaitForReadyReadDefault(msecs:number):boolean;
		Write(data:string,maxSize:number):number;
		Write2(data:string):number;
		Write3(byteArray:QByteArray_ITF):number;
		WriteChannelCount():number;
		ConnectWriteData(f:(data:string,maxSize:number)=>number):void;
		DisconnectWriteData():void;
		WriteData(data:string,maxSize:number):number;
		ConnectDestroyQIODevice(f:()=>void):void;
		DisconnectDestroyQIODevice():void;
		DestroyQIODevice():void;
		DestroyQIODeviceDefault():void;
	}
	function NewQIODeviceFromPointer(ptr:number):QIODevice;
	function NewQIODevice():QIODevice;
	function NewQIODevice2(parent:QObject_ITF):QIODevice;
	const QIODevice__NotOpen: number;
	const QIODevice__ReadOnly: number;
	const QIODevice__WriteOnly: number;
	const QIODevice__ReadWrite: number;
	const QIODevice__Append: number;
	const QIODevice__Truncate: number;
	const QIODevice__Text: number;
	const QIODevice__Unbuffered: number;
	const QIODevice__NewOnly: number;
	const QIODevice__ExistingOnly: number;
	interface QIdentityProxyModel_ITF extends QAbstractProxyModel_ITF {
		QIdentityProxyModel_PTR():QIdentityProxyModel;
	}

	class QIdentityProxyModel extends QAbstractProxyModel {
		___pointer: number;
		QIdentityProxyModel_PTR():QIdentityProxyModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectColumnCount(f:(parent:QModelIndex)=>number):void;
		DisconnectColumnCount():void;
		ColumnCount(parent:QModelIndex_ITF):number;
		ColumnCountDefault(parent:QModelIndex_ITF):number;
		ConnectIndex(f:(row:number,column:number,parent:QModelIndex)=>QModelIndex):void;
		DisconnectIndex():void;
		Index(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		IndexDefault(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		ConnectMapFromSource(f:(sourceIndex:QModelIndex)=>QModelIndex):void;
		DisconnectMapFromSource():void;
		MapFromSource(sourceIndex:QModelIndex_ITF):QModelIndex;
		MapFromSourceDefault(sourceIndex:QModelIndex_ITF):QModelIndex;
		ConnectMapToSource(f:(proxyIndex:QModelIndex)=>QModelIndex):void;
		DisconnectMapToSource():void;
		MapToSource(proxyIndex:QModelIndex_ITF):QModelIndex;
		MapToSourceDefault(proxyIndex:QModelIndex_ITF):QModelIndex;
		ConnectParent(f:(child:QModelIndex)=>QModelIndex):void;
		DisconnectParent():void;
		Parent(child:QModelIndex_ITF):QModelIndex;
		ParentDefault(child:QModelIndex_ITF):QModelIndex;
		ConnectRowCount(f:(parent:QModelIndex)=>number):void;
		DisconnectRowCount():void;
		RowCount(parent:QModelIndex_ITF):number;
		RowCountDefault(parent:QModelIndex_ITF):number;
		ConnectDestroyQIdentityProxyModel(f:()=>void):void;
		DisconnectDestroyQIdentityProxyModel():void;
		DestroyQIdentityProxyModel():void;
		DestroyQIdentityProxyModelDefault():void;
	}
	function NewQIdentityProxyModelFromPointer(ptr:number):QIdentityProxyModel;
	function NewQIdentityProxyModel(parent:QObject_ITF):QIdentityProxyModel;
	interface QIncompatibleFlag_ITF {
		QIncompatibleFlag_PTR():QIncompatibleFlag;
	}

	class QIncompatibleFlag {
		___pointer: number;
		QIncompatibleFlag_PTR():QIncompatibleFlag;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQIncompatibleFlag():void;
	}
	function NewQIncompatibleFlagFromPointer(ptr:number):QIncompatibleFlag;
	interface QInternal_ITF {
		QInternal_PTR():QInternal;
	}

	class QInternal {
		___pointer: number;
		QInternal_PTR():QInternal;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQInternal():void;
	}
	function NewQInternalFromPointer(ptr:number):QInternal;
	interface QItemSelection_ITF {
		QItemSelection_PTR():QItemSelection;
	}

	class QItemSelection {
		___pointer: number;
		QItemSelection_PTR():QItemSelection;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQItemSelection():void;
		Contains(index:QModelIndex_ITF):boolean;
		Indexes():QModelIndex[];
		Merge(other:QItemSelection_ITF,command:number):void;
		Select(topLeft:QModelIndex_ITF,bottomRight:QModelIndex_ITF):void;
		Split(ran:QItemSelectionRange_ITF,other:QItemSelectionRange_ITF,result:QItemSelection_ITF):void;
	}
	function NewQItemSelectionFromPointer(ptr:number):QItemSelection;
	function NewQItemSelection():QItemSelection;
	function NewQItemSelection2(topLeft:QModelIndex_ITF,bottomRight:QModelIndex_ITF):QItemSelection;
	function QItemSelection_Split(ran:QItemSelectionRange_ITF,other:QItemSelectionRange_ITF,result:QItemSelection_ITF):void;
	function NewQItemSelectionModel(model:QAbstractItemModel_ITF):QItemSelectionModel;
	function NewQItemSelectionModel2(model:QAbstractItemModel_ITF,parent:QObject_ITF):QItemSelectionModel;
	function NewQItemSelectionRange():QItemSelectionRange;
	function NewQItemSelectionRange2(other:QItemSelectionRange_ITF):QItemSelectionRange;
	function NewQItemSelectionRange4(topLeft:QModelIndex_ITF,bottomRight:QModelIndex_ITF):QItemSelectionRange;
	function NewQItemSelectionRange5(index:QModelIndex_ITF):QItemSelectionRange;
	interface QItemSelectionModel_ITF extends QObject_ITF {
		QItemSelectionModel_PTR():QItemSelectionModel;
	}

	class QItemSelectionModel extends QObject {
		___pointer: number;
		QItemSelectionModel_PTR():QItemSelectionModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectClear(f:()=>void):void;
		DisconnectClear():void;
		Clear():void;
		ClearDefault():void;
		ConnectClearCurrentIndex(f:()=>void):void;
		DisconnectClearCurrentIndex():void;
		ClearCurrentIndex():void;
		ClearCurrentIndexDefault():void;
		ConnectClearSelection(f:()=>void):void;
		DisconnectClearSelection():void;
		ClearSelection():void;
		ClearSelectionDefault():void;
		ColumnIntersectsSelection(column:number,parent:QModelIndex_ITF):boolean;
		ConnectCurrentChanged(f:(current:QModelIndex,previous:QModelIndex)=>void):void;
		DisconnectCurrentChanged():void;
		CurrentChanged(current:QModelIndex_ITF,previous:QModelIndex_ITF):void;
		ConnectCurrentColumnChanged(f:(current:QModelIndex,previous:QModelIndex)=>void):void;
		DisconnectCurrentColumnChanged():void;
		CurrentColumnChanged(current:QModelIndex_ITF,previous:QModelIndex_ITF):void;
		CurrentIndex():QModelIndex;
		ConnectCurrentRowChanged(f:(current:QModelIndex,previous:QModelIndex)=>void):void;
		DisconnectCurrentRowChanged():void;
		CurrentRowChanged(current:QModelIndex_ITF,previous:QModelIndex_ITF):void;
		EmitSelectionChanged(newSelection:QItemSelection_ITF,oldSelection:QItemSelection_ITF):void;
		HasSelection():boolean;
		IsColumnSelected(column:number,parent:QModelIndex_ITF):boolean;
		IsRowSelected(row:number,parent:QModelIndex_ITF):boolean;
		IsSelected(index:QModelIndex_ITF):boolean;
		Model():QAbstractItemModel;
		Model2():QAbstractItemModel;
		ConnectModelChanged(f:(model:QAbstractItemModel)=>void):void;
		DisconnectModelChanged():void;
		ModelChanged(model:QAbstractItemModel_ITF):void;
		ConnectReset(f:()=>void):void;
		DisconnectReset():void;
		Reset():void;
		ResetDefault():void;
		RowIntersectsSelection(row:number,parent:QModelIndex_ITF):boolean;
		ConnectSelect(f:(index:QModelIndex,command:number)=>void):void;
		DisconnectSelect():void;
		Select(index:QModelIndex_ITF,command:number):void;
		SelectDefault(index:QModelIndex_ITF,command:number):void;
		ConnectSelect2(f:(selection:QItemSelection,command:number)=>void):void;
		DisconnectSelect2():void;
		Select2(selection:QItemSelection_ITF,command:number):void;
		Select2Default(selection:QItemSelection_ITF,command:number):void;
		SelectedColumns(row:number):QModelIndex[];
		SelectedIndexes():QModelIndex[];
		SelectedRows(column:number):QModelIndex[];
		Selection():QItemSelection;
		ConnectSelectionChanged(f:(selected:QItemSelection,deselected:QItemSelection)=>void):void;
		DisconnectSelectionChanged():void;
		SelectionChanged(selected:QItemSelection_ITF,deselected:QItemSelection_ITF):void;
		ConnectSetCurrentIndex(f:(index:QModelIndex,command:number)=>void):void;
		DisconnectSetCurrentIndex():void;
		SetCurrentIndex(index:QModelIndex_ITF,command:number):void;
		SetCurrentIndexDefault(index:QModelIndex_ITF,command:number):void;
		SetModel(model:QAbstractItemModel_ITF):void;
		ConnectDestroyQItemSelectionModel(f:()=>void):void;
		DisconnectDestroyQItemSelectionModel():void;
		DestroyQItemSelectionModel():void;
		DestroyQItemSelectionModelDefault():void;
	}
	function NewQItemSelectionModelFromPointer(ptr:number):QItemSelectionModel;
	function NewQItemSelectionModel(model:QAbstractItemModel_ITF):QItemSelectionModel;
	function NewQItemSelectionModel2(model:QAbstractItemModel_ITF,parent:QObject_ITF):QItemSelectionModel;
	const QItemSelectionModel__NoUpdate: number;
	const QItemSelectionModel__Clear: number;
	const QItemSelectionModel__Select: number;
	const QItemSelectionModel__Deselect: number;
	const QItemSelectionModel__Toggle: number;
	const QItemSelectionModel__Current: number;
	const QItemSelectionModel__Rows: number;
	const QItemSelectionModel__Columns: number;
	const QItemSelectionModel__SelectCurrent: number;
	const QItemSelectionModel__ToggleCurrent: number;
	const QItemSelectionModel__ClearAndSelect: number;
	interface QItemSelectionRange_ITF {
		QItemSelectionRange_PTR():QItemSelectionRange;
	}

	class QItemSelectionRange {
		___pointer: number;
		QItemSelectionRange_PTR():QItemSelectionRange;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQItemSelectionRange():void;
		Bottom():number;
		BottomRight():QPersistentModelIndex;
		Contains(index:QModelIndex_ITF):boolean;
		Contains2(row:number,column:number,parentIndex:QModelIndex_ITF):boolean;
		Height():number;
		Indexes():QModelIndex[];
		Intersected(other:QItemSelectionRange_ITF):QItemSelectionRange;
		Intersects(other:QItemSelectionRange_ITF):boolean;
		IsEmpty():boolean;
		IsValid():boolean;
		Left():number;
		Model():QAbstractItemModel;
		Parent():QModelIndex;
		Right():number;
		Swap(other:QItemSelectionRange_ITF):void;
		Top():number;
		TopLeft():QPersistentModelIndex;
		Width():number;
	}
	function NewQItemSelectionRangeFromPointer(ptr:number):QItemSelectionRange;
	function NewQItemSelectionRange():QItemSelectionRange;
	function NewQItemSelectionRange2(other:QItemSelectionRange_ITF):QItemSelectionRange;
	function NewQItemSelectionRange4(topLeft:QModelIndex_ITF,bottomRight:QModelIndex_ITF):QItemSelectionRange;
	function NewQItemSelectionRange5(index:QModelIndex_ITF):QItemSelectionRange;
	interface QJsonArray_ITF {
		QJsonArray_PTR():QJsonArray;
	}

	class QJsonArray {
		___pointer: number;
		QJsonArray_PTR():QJsonArray;
		Pointer():number;
		SetPointer(p:number):void;
		Append(value:QJsonValue_ITF):void;
		At(i:number):QJsonValue;
		Contains(value:QJsonValue_ITF):boolean;
		Count():number;
		Empty():boolean;
		First():QJsonValue;
		FromStringList(list:string[]):QJsonArray;
		FromVariantList(list:QVariant[]):QJsonArray;
		Insert(i:number,value:QJsonValue_ITF):void;
		IsEmpty():boolean;
		Last():QJsonValue;
		Pop_back():void;
		Pop_front():void;
		Prepend(value:QJsonValue_ITF):void;
		Push_back(value:QJsonValue_ITF):void;
		Push_front(value:QJsonValue_ITF):void;
		RemoveAt(i:number):void;
		RemoveFirst():void;
		RemoveLast():void;
		Replace(i:number,value:QJsonValue_ITF):void;
		Size():number;
		Swap(other:QJsonArray_ITF):void;
		TakeAt(i:number):QJsonValue;
		ToVariantList():QVariant[];
		DestroyQJsonArray():void;
	}
	function NewQJsonArrayFromPointer(ptr:number):QJsonArray;
	function NewQJsonArray():QJsonArray;
	function NewQJsonArray3(other:QJsonArray_ITF):QJsonArray;
	function NewQJsonArray4(other:QJsonArray_ITF):QJsonArray;
	function QJsonArray_FromStringList(list:string[]):QJsonArray;
	function QJsonArray_FromVariantList(list:QVariant[]):QJsonArray;
	interface QJsonDocument_ITF {
		QJsonDocument_PTR():QJsonDocument;
	}

	class QJsonDocument {
		___pointer: number;
		QJsonDocument_PTR():QJsonDocument;
		Pointer():number;
		SetPointer(p:number):void;
		Array():QJsonArray;
		FromBinaryData(data:QByteArray_ITF,validation:number):QJsonDocument;
		FromJson(json:QByteArray_ITF,error:QJsonParseError_ITF):QJsonDocument;
		FromRawData(data:string,size:number,validation:number):QJsonDocument;
		FromVariant(variant:QVariant_ITF):QJsonDocument;
		IsArray():boolean;
		IsEmpty():boolean;
		IsNull():boolean;
		IsObject():boolean;
		Object():QJsonObject;
		RawData(size:number):string;
		SetArray(array:QJsonArray_ITF):void;
		SetObject(object:QJsonObject_ITF):void;
		Swap(other:QJsonDocument_ITF):void;
		ToBinaryData():QByteArray;
		ToJson():QByteArray;
		ToJson2(format:number):QByteArray;
		ToVariant():QVariant;
		DestroyQJsonDocument():void;
	}
	function NewQJsonDocumentFromPointer(ptr:number):QJsonDocument;
	function NewQJsonDocument():QJsonDocument;
	function NewQJsonDocument2(object:QJsonObject_ITF):QJsonDocument;
	function NewQJsonDocument3(array:QJsonArray_ITF):QJsonDocument;
	function NewQJsonDocument4(other:QJsonDocument_ITF):QJsonDocument;
	function NewQJsonDocument5(other:QJsonDocument_ITF):QJsonDocument;
	function QJsonDocument_FromBinaryData(data:QByteArray_ITF,validation:number):QJsonDocument;
	function QJsonDocument_FromJson(json:QByteArray_ITF,error:QJsonParseError_ITF):QJsonDocument;
	function QJsonDocument_FromRawData(data:string,size:number,validation:number):QJsonDocument;
	function QJsonDocument_FromVariant(variant:QVariant_ITF):QJsonDocument;
	const QJsonDocument__Validate: number;
	const QJsonDocument__BypassValidation: number;
	const QJsonDocument__Indented: number;
	const QJsonDocument__Compact: number;
	interface QJsonObject_ITF {
		QJsonObject_PTR():QJsonObject;
	}

	class QJsonObject {
		___pointer: number;
		QJsonObject_PTR():QJsonObject;
		Pointer():number;
		SetPointer(p:number):void;
		Contains(key:string):boolean;
		Contains2(key:QLatin1String_ITF):boolean;
		Count():number;
		Empty():boolean;
		FromVariantHash(hash:Map<string,QVariant>):QJsonObject;
		IsEmpty():boolean;
		Keys():string[];
		Length():number;
		Remove(key:string):void;
		Size():number;
		Swap(other:QJsonObject_ITF):void;
		Take(key:string):QJsonValue;
		ToVariantHash():Map<string,QVariant>;
		ToVariantMap():Map<string,QVariant>;
		Value(key:string):QJsonValue;
		Value2(key:QLatin1String_ITF):QJsonValue;
		DestroyQJsonObject():void;
	}
	function NewQJsonObjectFromPointer(ptr:number):QJsonObject;
	function NewQJsonObject():QJsonObject;
	function NewQJsonObject3(other:QJsonObject_ITF):QJsonObject;
	function NewQJsonObject4(other:QJsonObject_ITF):QJsonObject;
	function QJsonObject_FromVariantHash(hash:Map<string,QVariant>):QJsonObject;
	interface QJsonParseError_ITF {
		QJsonParseError_PTR():QJsonParseError;
	}

	class QJsonParseError {
		___pointer: number;
		QJsonParseError_PTR():QJsonParseError;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQJsonParseError():void;
		ErrorString():string;
		Offset():number;
		SetOffset(vi:number):void;
		Error():number;
		SetError(vqj:number):void;
	}
	function NewQJsonParseErrorFromPointer(ptr:number):QJsonParseError;
	const QJsonParseError__NoError: number;
	const QJsonParseError__UnterminatedObject: number;
	const QJsonParseError__MissingNameSeparator: number;
	const QJsonParseError__UnterminatedArray: number;
	const QJsonParseError__MissingValueSeparator: number;
	const QJsonParseError__IllegalValue: number;
	const QJsonParseError__TerminationByNumber: number;
	const QJsonParseError__IllegalNumber: number;
	const QJsonParseError__IllegalEscapeSequence: number;
	const QJsonParseError__IllegalUTF8String: number;
	const QJsonParseError__UnterminatedString: number;
	const QJsonParseError__MissingObject: number;
	const QJsonParseError__DeepNesting: number;
	const QJsonParseError__DocumentTooLarge: number;
	const QJsonParseError__GarbageAtEnd: number;
	interface QJsonValue_ITF {
		QJsonValue_PTR():QJsonValue;
	}

	class QJsonValue {
		___pointer: number;
		QJsonValue_PTR():QJsonValue;
		Pointer():number;
		SetPointer(p:number):void;
		FromVariant(variant:QVariant_ITF):QJsonValue;
		IsArray():boolean;
		IsBool():boolean;
		IsDouble():boolean;
		IsNull():boolean;
		IsObject():boolean;
		IsString():boolean;
		IsUndefined():boolean;
		Swap(other:QJsonValue_ITF):void;
		ToArray(defaultValue:QJsonArray_ITF):QJsonArray;
		ToArray2():QJsonArray;
		ToBool(defaultValue:boolean):boolean;
		ToDouble(defaultValue:number):number;
		ToInt(defaultValue:number):number;
		ToObject(defaultValue:QJsonObject_ITF):QJsonObject;
		ToObject2():QJsonObject;
		ToString():string;
		ToString2(defaultValue:string):string;
		ToVariant():QVariant;
		Type():number;
		DestroyQJsonValue():void;
	}
	function NewQJsonValueFromPointer(ptr:number):QJsonValue;
	function NewQJsonValue(ty:number):QJsonValue;
	function NewQJsonValue2(b:boolean):QJsonValue;
	function NewQJsonValue3(n:number):QJsonValue;
	function NewQJsonValue4(n:number):QJsonValue;
	function NewQJsonValue5(n:number):QJsonValue;
	function NewQJsonValue6(s:string):QJsonValue;
	function NewQJsonValue7(s:QLatin1String_ITF):QJsonValue;
	function NewQJsonValue8(s:string):QJsonValue;
	function NewQJsonValue9(a:QJsonArray_ITF):QJsonValue;
	function NewQJsonValue10(o:QJsonObject_ITF):QJsonValue;
	function NewQJsonValue11(other:QJsonValue_ITF):QJsonValue;
	function NewQJsonValue12(other:QJsonValue_ITF):QJsonValue;
	function QJsonValue_FromVariant(variant:QVariant_ITF):QJsonValue;
	const QJsonValue__Null: number;
	const QJsonValue__Bool: number;
	const QJsonValue__Double: number;
	const QJsonValue__String: number;
	const QJsonValue__Array: number;
	const QJsonValue__Object: number;
	const QJsonValue__Undefined: number;
	interface QJsonValuePtr_ITF {
		QJsonValuePtr_PTR():QJsonValuePtr;
	}

	class QJsonValuePtr {
		___pointer: number;
		QJsonValuePtr_PTR():QJsonValuePtr;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQJsonValuePtr():void;
	}
	function NewQJsonValuePtrFromPointer(ptr:number):QJsonValuePtr;
	interface QJsonValueRefPtr_ITF {
		QJsonValueRefPtr_PTR():QJsonValueRefPtr;
	}

	class QJsonValueRefPtr {
		___pointer: number;
		QJsonValueRefPtr_PTR():QJsonValueRefPtr;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQJsonValueRefPtr():void;
	}
	function NewQJsonValueRefPtrFromPointer(ptr:number):QJsonValueRefPtr;
	interface QLEInteger_ITF {
		QLEInteger_PTR():QLEInteger;
	}

	class QLEInteger {
		___pointer: number;
		QLEInteger_PTR():QLEInteger;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLEInteger():void;
	}
	function NewQLEIntegerFromPointer(ptr:number):QLEInteger;
	interface QLatin1Char_ITF {
		QLatin1Char_PTR():QLatin1Char;
	}

	class QLatin1Char {
		___pointer: number;
		QLatin1Char_PTR():QLatin1Char;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLatin1Char():void;
		ToLatin1():string;
		Unicode():number;
	}
	function NewQLatin1CharFromPointer(ptr:number):QLatin1Char;
	function NewQLatin1Char(c:string):QLatin1Char;
	interface QLatin1String_ITF {
		QLatin1String_PTR():QLatin1String;
	}

	class QLatin1String {
		___pointer: number;
		QLatin1String_PTR():QLatin1String;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLatin1String():void;
		Chop(length:number):void;
		Chopped(length:number):QLatin1String;
		Data():string;
		EndsWith(str:QStringView_ITF,cs:number):boolean;
		EndsWith2(l1:QLatin1String_ITF,cs:number):boolean;
		EndsWith3(ch:QChar_ITF):boolean;
		EndsWith4(ch:QChar_ITF,cs:number):boolean;
		IsEmpty():boolean;
		IsNull():boolean;
		Latin1():string;
		Left(length:number):QLatin1String;
		Mid(start:number):QLatin1String;
		Mid2(start:number,length:number):QLatin1String;
		Right(length:number):QLatin1String;
		Size():number;
		StartsWith(str:QStringView_ITF,cs:number):boolean;
		StartsWith2(l1:QLatin1String_ITF,cs:number):boolean;
		StartsWith3(ch:QChar_ITF):boolean;
		StartsWith4(ch:QChar_ITF,cs:number):boolean;
		Trimmed():QLatin1String;
		Truncate(length:number):void;
	}
	function NewQLatin1StringFromPointer(ptr:number):QLatin1String;
	function NewQLatin1String():QLatin1String;
	function NewQLatin1String2(str:string):QLatin1String;
	function NewQLatin1String3(first:string,last:string):QLatin1String;
	function NewQLatin1String4(str:string,size:number):QLatin1String;
	function NewQLatin1String5(str:QByteArray_ITF):QLatin1String;
	interface QLibrary_ITF extends QObject_ITF {
		QLibrary_PTR():QLibrary;
	}

	class QLibrary extends QObject {
		___pointer: number;
		QLibrary_PTR():QLibrary;
		Pointer():number;
		SetPointer(p:number):void;
		ErrorString():string;
		FileName():string;
		IsLibrary(fileName:string):boolean;
		IsLoaded():boolean;
		Load():boolean;
		LoadHints():number;
		SetFileName(fileName:string):void;
		SetFileNameAndVersion(fileName:string,versionNumber:number):void;
		SetFileNameAndVersion2(fileName:string,version:string):void;
		SetLoadHints(hints:number):void;
		Unload():boolean;
		ConnectDestroyQLibrary(f:()=>void):void;
		DisconnectDestroyQLibrary():void;
		DestroyQLibrary():void;
		DestroyQLibraryDefault():void;
	}
	function NewQLibraryFromPointer(ptr:number):QLibrary;
	function NewQLibrary(parent:QObject_ITF):QLibrary;
	function NewQLibrary2(fileName:string,parent:QObject_ITF):QLibrary;
	function NewQLibrary3(fileName:string,verNum:number,parent:QObject_ITF):QLibrary;
	function NewQLibrary4(fileName:string,version:string,parent:QObject_ITF):QLibrary;
	function QLibrary_IsLibrary(fileName:string):boolean;
	const QLibrary__ResolveAllSymbolsHint: number;
	const QLibrary__ExportExternalSymbolsHint: number;
	const QLibrary__LoadArchiveMemberHint: number;
	const QLibrary__PreventUnloadHint: number;
	const QLibrary__DeepBindHint: number;
	interface QLibraryInfo_ITF {
		QLibraryInfo_PTR():QLibraryInfo;
	}

	class QLibraryInfo {
		___pointer: number;
		QLibraryInfo_PTR():QLibraryInfo;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLibraryInfo():void;
		IsDebugBuild():boolean;
		Location(loc:number):string;
		Version():QVersionNumber;
	}
	function NewQLibraryInfoFromPointer(ptr:number):QLibraryInfo;
	function QLibraryInfo_IsDebugBuild():boolean;
	function QLibraryInfo_Location(loc:number):string;
	function QLibraryInfo_Version():QVersionNumber;
	const QLibraryInfo__PrefixPath: number;
	const QLibraryInfo__DocumentationPath: number;
	const QLibraryInfo__HeadersPath: number;
	const QLibraryInfo__LibrariesPath: number;
	const QLibraryInfo__LibraryExecutablesPath: number;
	const QLibraryInfo__BinariesPath: number;
	const QLibraryInfo__PluginsPath: number;
	const QLibraryInfo__ImportsPath: number;
	const QLibraryInfo__Qml2ImportsPath: number;
	const QLibraryInfo__ArchDataPath: number;
	const QLibraryInfo__DataPath: number;
	const QLibraryInfo__TranslationsPath: number;
	const QLibraryInfo__ExamplesPath: number;
	const QLibraryInfo__TestsPath: number;
	const QLibraryInfo__SettingsPath: number;
	interface QLine_ITF {
		QLine_PTR():QLine;
	}

	class QLine {
		___pointer: number;
		QLine_PTR():QLine;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLine():void;
		Center():QPoint;
		Dx():number;
		Dy():number;
		IsNull():boolean;
		P1():QPoint;
		P2():QPoint;
		SetLine(x1:number,y1:number,x2:number,y2:number):void;
		SetP1(p1:QPoint_ITF):void;
		SetP2(p2:QPoint_ITF):void;
		SetPoints(p1:QPoint_ITF,p2:QPoint_ITF):void;
		Translate(offset:QPoint_ITF):void;
		Translate2(dx:number,dy:number):void;
		Translated(offset:QPoint_ITF):QLine;
		Translated2(dx:number,dy:number):QLine;
		X1():number;
		X2():number;
		Y1():number;
		Y2():number;
	}
	function NewQLineFromPointer(ptr:number):QLine;
	function NewQLine():QLine;
	function NewQLine2(p1:QPoint_ITF,p2:QPoint_ITF):QLine;
	function NewQLine3(x1:number,y1:number,x2:number,y2:number):QLine;
	function NewQLineF():QLineF;
	function NewQLineF2(p1:QPointF_ITF,p2:QPointF_ITF):QLineF;
	function NewQLineF3(x1:number,y1:number,x2:number,y2:number):QLineF;
	function NewQLineF4(line:QLine_ITF):QLineF;
	interface QLineF_ITF {
		QLineF_PTR():QLineF;
	}

	class QLineF {
		___pointer: number;
		QLineF_PTR():QLineF;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLineF():void;
		Angle():number;
		AngleTo(line:QLineF_ITF):number;
		Center():QPointF;
		Dx():number;
		Dy():number;
		FromPolar(length:number,angle:number):QLineF;
		Intersect(line:QLineF_ITF,intersectionPoint:QPointF_ITF):number;
		IsNull():boolean;
		Length():number;
		NormalVector():QLineF;
		P1():QPointF;
		P2():QPointF;
		PointAt(t:number):QPointF;
		SetAngle(angle:number):void;
		SetLength(length:number):void;
		SetLine(x1:number,y1:number,x2:number,y2:number):void;
		SetP1(p1:QPointF_ITF):void;
		SetP2(p2:QPointF_ITF):void;
		SetPoints(p1:QPointF_ITF,p2:QPointF_ITF):void;
		ToLine():QLine;
		Translate(offset:QPointF_ITF):void;
		Translate2(dx:number,dy:number):void;
		Translated(offset:QPointF_ITF):QLineF;
		Translated2(dx:number,dy:number):QLineF;
		UnitVector():QLineF;
		X1():number;
		X2():number;
		Y1():number;
		Y2():number;
	}
	function NewQLineFFromPointer(ptr:number):QLineF;
	function NewQLineF():QLineF;
	function NewQLineF2(p1:QPointF_ITF,p2:QPointF_ITF):QLineF;
	function NewQLineF3(x1:number,y1:number,x2:number,y2:number):QLineF;
	function NewQLineF4(line:QLine_ITF):QLineF;
	function QLineF_FromPolar(length:number,angle:number):QLineF;
	const QLineF__NoIntersection: number;
	const QLineF__BoundedIntersection: number;
	const QLineF__UnboundedIntersection: number;
	interface QLinkedListNode_ITF {
		QLinkedListNode_PTR():QLinkedListNode;
	}

	class QLinkedListNode {
		___pointer: number;
		QLinkedListNode_PTR():QLinkedListNode;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLinkedListNode():void;
	}
	function NewQLinkedListNodeFromPointer(ptr:number):QLinkedListNode;
	interface QListData_ITF {
		QListData_PTR():QListData;
	}

	class QListData {
		___pointer: number;
		QListData_PTR():QListData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQListData():void;
	}
	function NewQListDataFromPointer(ptr:number):QListData;
	interface QListSpecialMethods_ITF {
		QListSpecialMethods_PTR():QListSpecialMethods;
	}

	class QListSpecialMethods {
		___pointer: number;
		QListSpecialMethods_PTR():QListSpecialMethods;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQListSpecialMethods():void;
	}
	function NewQListSpecialMethodsFromPointer(ptr:number):QListSpecialMethods;
	interface QLittleEndianStorageType_ITF {
		QLittleEndianStorageType_PTR():QLittleEndianStorageType;
	}

	class QLittleEndianStorageType {
		___pointer: number;
		QLittleEndianStorageType_PTR():QLittleEndianStorageType;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLittleEndianStorageType():void;
	}
	function NewQLittleEndianStorageTypeFromPointer(ptr:number):QLittleEndianStorageType;
	interface QLocale_ITF {
		QLocale_PTR():QLocale;
	}

	class QLocale {
		___pointer: number;
		QLocale_PTR():QLocale;
		Pointer():number;
		SetPointer(p:number):void;
		AmText():string;
		Bcp47Name():string;
		C():QLocale;
		Country():number;
		CountryToString(country:number):string;
		CreateSeparatedList(list:string[]):string;
		CurrencySymbol(format:number):string;
		DateFormat(format:number):string;
		DateTimeFormat(format:number):string;
		DayName(day:number,ty:number):string;
		DecimalPoint():QChar;
		Exponential():QChar;
		FirstDayOfWeek():number;
		FormattedDataSize2(bytes:number,precision:number,format:number):string;
		GroupSeparator():QChar;
		Language():number;
		LanguageToString(language:number):string;
		MatchingLocales(language:number,scri:number,country:number):QLocale[];
		MeasurementSystem():number;
		MonthName(month:number,ty:number):string;
		Name():string;
		NativeCountryName():string;
		NativeLanguageName():string;
		NegativeSign():QChar;
		NumberOptions():number;
		Percent():QChar;
		PmText():string;
		PositiveSign():QChar;
		QuoteString(str:string,style:number):string;
		QuoteString2(str:QStringRef_ITF,style:number):string;
		Script():number;
		ScriptToString(scri:number):string;
		SetDefault(locale:QLocale_ITF):void;
		SetNumberOptions(options:number):void;
		StandaloneDayName(day:number,ty:number):string;
		StandaloneMonthName(month:number,ty:number):string;
		Swap(other:QLocale_ITF):void;
		System():QLocale;
		TextDirection():number;
		TimeFormat(format:number):string;
		ToCurrencyString(value:number,symbol:string):string;
		ToCurrencyString2(value:number,symbol:string):string;
		ToCurrencyString3(value:number,symbol:string):string;
		ToCurrencyString4(value:number,symbol:string):string;
		ToCurrencyString5(value:number,symbol:string):string;
		ToCurrencyString6(value:number,symbol:string):string;
		ToCurrencyString7(value:number,symbol:string):string;
		ToCurrencyString8(value:number,symbol:string,precision:number):string;
		ToCurrencyString9(value:number,symbol:string):string;
		ToCurrencyString10(i:number,symbol:string,precision:number):string;
		ToDate(stri:string,format:number):QDate;
		ToDate2(stri:string,format:string):QDate;
		ToDateTime(stri:string,format:number):QDateTime;
		ToDateTime2(stri:string,format:string):QDateTime;
		ToDouble(s:string,ok:boolean):number;
		ToDouble2(s:QStringRef_ITF,ok:boolean):number;
		ToDouble3(s:QStringView_ITF,ok:boolean):number;
		ToFloat(s:string,ok:boolean):number;
		ToFloat2(s:QStringRef_ITF,ok:boolean):number;
		ToFloat3(s:QStringView_ITF,ok:boolean):number;
		ToInt(s:string,ok:boolean):number;
		ToInt2(s:QStringRef_ITF,ok:boolean):number;
		ToInt3(s:QStringView_ITF,ok:boolean):number;
		ToLong(s:string,ok:boolean):number;
		ToLong2(s:QStringRef_ITF,ok:boolean):number;
		ToLong3(s:QStringView_ITF,ok:boolean):number;
		ToLongLong(s:string,ok:boolean):number;
		ToLongLong2(s:QStringRef_ITF,ok:boolean):number;
		ToLongLong3(s:QStringView_ITF,ok:boolean):number;
		ToLower(str:string):string;
		ToShort(s:string,ok:boolean):number;
		ToShort2(s:QStringRef_ITF,ok:boolean):number;
		ToShort3(s:QStringView_ITF,ok:boolean):number;
		ToString(i:number):string;
		ToString2(i:number):string;
		ToString3(i:number):string;
		ToString4(i:number):string;
		ToString5(i:number):string;
		ToString6(i:number):string;
		ToString7(i:number):string;
		ToString8(i:number):string;
		ToString9(i:number,ff:string,prec:number):string;
		ToString10(i:number,ff:string,prec:number):string;
		ToString11(date:QDate_ITF,format:string):string;
		ToString12(ti:QTime_ITF,format:string):string;
		ToString13(dateTime:QDateTime_ITF,format:string):string;
		ToString14(date:QDate_ITF,format:QStringView_ITF):string;
		ToString15(ti:QTime_ITF,format:QStringView_ITF):string;
		ToString16(dateTime:QDateTime_ITF,format:QStringView_ITF):string;
		ToString17(date:QDate_ITF,format:number):string;
		ToString18(ti:QTime_ITF,format:number):string;
		ToString19(dateTime:QDateTime_ITF,format:number):string;
		ToTime(stri:string,format:number):QTime;
		ToTime2(stri:string,format:string):QTime;
		ToUInt(s:string,ok:boolean):number;
		ToUInt2(s:QStringRef_ITF,ok:boolean):number;
		ToUInt3(s:QStringView_ITF,ok:boolean):number;
		ToULong(s:string,ok:boolean):number;
		ToULong2(s:QStringRef_ITF,ok:boolean):number;
		ToULong3(s:QStringView_ITF,ok:boolean):number;
		ToULongLong(s:string,ok:boolean):number;
		ToULongLong2(s:QStringRef_ITF,ok:boolean):number;
		ToULongLong3(s:QStringView_ITF,ok:boolean):number;
		ToUShort(s:string,ok:boolean):number;
		ToUShort2(s:QStringRef_ITF,ok:boolean):number;
		ToUShort3(s:QStringView_ITF,ok:boolean):number;
		ToUpper(str:string):string;
		UiLanguages():string[];
		Weekdays():number;
		ZeroDigit():QChar;
		DestroyQLocale():void;
	}
	function NewQLocaleFromPointer(ptr:number):QLocale;
	function NewQLocale():QLocale;
	function NewQLocale2(name:string):QLocale;
	function NewQLocale3(language:number,country:number):QLocale;
	function NewQLocale4(language:number,scri:number,country:number):QLocale;
	function NewQLocale5(other:QLocale_ITF):QLocale;
	function QLocale_C():QLocale;
	function QLocale_CountryToString(country:number):string;
	function QLocale_LanguageToString(language:number):string;
	function QLocale_MatchingLocales(language:number,scri:number,country:number):QLocale[];
	function QLocale_ScriptToString(scri:number):string;
	function QLocale_SetDefault(locale:QLocale_ITF):void;
	function QLocale_System():QLocale;
	const QLocale__AnyLanguage: number;
	const QLocale__C: number;
	const QLocale__Abkhazian: number;
	const QLocale__Oromo: number;
	const QLocale__Afar: number;
	const QLocale__Afrikaans: number;
	const QLocale__Albanian: number;
	const QLocale__Amharic: number;
	const QLocale__Arabic: number;
	const QLocale__Armenian: number;
	const QLocale__Assamese: number;
	const QLocale__Aymara: number;
	const QLocale__Azerbaijani: number;
	const QLocale__Bashkir: number;
	const QLocale__Basque: number;
	const QLocale__Bengali: number;
	const QLocale__Dzongkha: number;
	const QLocale__Bihari: number;
	const QLocale__Bislama: number;
	const QLocale__Breton: number;
	const QLocale__Bulgarian: number;
	const QLocale__Burmese: number;
	const QLocale__Belarusian: number;
	const QLocale__Khmer: number;
	const QLocale__Catalan: number;
	const QLocale__Chinese: number;
	const QLocale__Corsican: number;
	const QLocale__Croatian: number;
	const QLocale__Czech: number;
	const QLocale__Danish: number;
	const QLocale__Dutch: number;
	const QLocale__English: number;
	const QLocale__Esperanto: number;
	const QLocale__Estonian: number;
	const QLocale__Faroese: number;
	const QLocale__Fijian: number;
	const QLocale__Finnish: number;
	const QLocale__French: number;
	const QLocale__WesternFrisian: number;
	const QLocale__Gaelic: number;
	const QLocale__Galician: number;
	const QLocale__Georgian: number;
	const QLocale__German: number;
	const QLocale__Greek: number;
	const QLocale__Greenlandic: number;
	const QLocale__Guarani: number;
	const QLocale__Gujarati: number;
	const QLocale__Hausa: number;
	const QLocale__Hebrew: number;
	const QLocale__Hindi: number;
	const QLocale__Hungarian: number;
	const QLocale__Icelandic: number;
	const QLocale__Indonesian: number;
	const QLocale__Interlingua: number;
	const QLocale__Interlingue: number;
	const QLocale__Inuktitut: number;
	const QLocale__Inupiak: number;
	const QLocale__Irish: number;
	const QLocale__Italian: number;
	const QLocale__Japanese: number;
	const QLocale__Javanese: number;
	const QLocale__Kannada: number;
	const QLocale__Kashmiri: number;
	const QLocale__Kazakh: number;
	const QLocale__Kinyarwanda: number;
	const QLocale__Kirghiz: number;
	const QLocale__Korean: number;
	const QLocale__Kurdish: number;
	const QLocale__Rundi: number;
	const QLocale__Lao: number;
	const QLocale__Latin: number;
	const QLocale__Latvian: number;
	const QLocale__Lingala: number;
	const QLocale__Lithuanian: number;
	const QLocale__Macedonian: number;
	const QLocale__Malagasy: number;
	const QLocale__Malay: number;
	const QLocale__Malayalam: number;
	const QLocale__Maltese: number;
	const QLocale__Maori: number;
	const QLocale__Marathi: number;
	const QLocale__Marshallese: number;
	const QLocale__Mongolian: number;
	const QLocale__NauruLanguage: number;
	const QLocale__Nepali: number;
	const QLocale__NorwegianBokmal: number;
	const QLocale__Occitan: number;
	const QLocale__Oriya: number;
	const QLocale__Pashto: number;
	const QLocale__Persian: number;
	const QLocale__Polish: number;
	const QLocale__Portuguese: number;
	const QLocale__Punjabi: number;
	const QLocale__Quechua: number;
	const QLocale__Romansh: number;
	const QLocale__Romanian: number;
	const QLocale__Russian: number;
	const QLocale__Samoan: number;
	const QLocale__Sango: number;
	const QLocale__Sanskrit: number;
	const QLocale__Serbian: number;
	const QLocale__Ossetic: number;
	const QLocale__SouthernSotho: number;
	const QLocale__Tswana: number;
	const QLocale__Shona: number;
	const QLocale__Sindhi: number;
	const QLocale__Sinhala: number;
	const QLocale__Swati: number;
	const QLocale__Slovak: number;
	const QLocale__Slovenian: number;
	const QLocale__Somali: number;
	const QLocale__Spanish: number;
	const QLocale__Sundanese: number;
	const QLocale__Swahili: number;
	const QLocale__Swedish: number;
	const QLocale__Sardinian: number;
	const QLocale__Tajik: number;
	const QLocale__Tamil: number;
	const QLocale__Tatar: number;
	const QLocale__Telugu: number;
	const QLocale__Thai: number;
	const QLocale__Tibetan: number;
	const QLocale__Tigrinya: number;
	const QLocale__Tongan: number;
	const QLocale__Tsonga: number;
	const QLocale__Turkish: number;
	const QLocale__Turkmen: number;
	const QLocale__Tahitian: number;
	const QLocale__Uighur: number;
	const QLocale__Ukrainian: number;
	const QLocale__Urdu: number;
	const QLocale__Uzbek: number;
	const QLocale__Vietnamese: number;
	const QLocale__Volapuk: number;
	const QLocale__Welsh: number;
	const QLocale__Wolof: number;
	const QLocale__Xhosa: number;
	const QLocale__Yiddish: number;
	const QLocale__Yoruba: number;
	const QLocale__Zhuang: number;
	const QLocale__Zulu: number;
	const QLocale__NorwegianNynorsk: number;
	const QLocale__Bosnian: number;
	const QLocale__Divehi: number;
	const QLocale__Manx: number;
	const QLocale__Cornish: number;
	const QLocale__Akan: number;
	const QLocale__Konkani: number;
	const QLocale__Ga: number;
	const QLocale__Igbo: number;
	const QLocale__Kamba: number;
	const QLocale__Syriac: number;
	const QLocale__Blin: number;
	const QLocale__Geez: number;
	const QLocale__Koro: number;
	const QLocale__Sidamo: number;
	const QLocale__Atsam: number;
	const QLocale__Tigre: number;
	const QLocale__Jju: number;
	const QLocale__Friulian: number;
	const QLocale__Venda: number;
	const QLocale__Ewe: number;
	const QLocale__Walamo: number;
	const QLocale__Hawaiian: number;
	const QLocale__Tyap: number;
	const QLocale__Nyanja: number;
	const QLocale__Filipino: number;
	const QLocale__SwissGerman: number;
	const QLocale__SichuanYi: number;
	const QLocale__Kpelle: number;
	const QLocale__LowGerman: number;
	const QLocale__SouthNdebele: number;
	const QLocale__NorthernSotho: number;
	const QLocale__NorthernSami: number;
	const QLocale__Taroko: number;
	const QLocale__Gusii: number;
	const QLocale__Taita: number;
	const QLocale__Fulah: number;
	const QLocale__Kikuyu: number;
	const QLocale__Samburu: number;
	const QLocale__Sena: number;
	const QLocale__NorthNdebele: number;
	const QLocale__Rombo: number;
	const QLocale__Tachelhit: number;
	const QLocale__Kabyle: number;
	const QLocale__Nyankole: number;
	const QLocale__Bena: number;
	const QLocale__Vunjo: number;
	const QLocale__Bambara: number;
	const QLocale__Embu: number;
	const QLocale__Cherokee: number;
	const QLocale__Morisyen: number;
	const QLocale__Makonde: number;
	const QLocale__Langi: number;
	const QLocale__Ganda: number;
	const QLocale__Bemba: number;
	const QLocale__Kabuverdianu: number;
	const QLocale__Meru: number;
	const QLocale__Kalenjin: number;
	const QLocale__Nama: number;
	const QLocale__Machame: number;
	const QLocale__Colognian: number;
	const QLocale__Masai: number;
	const QLocale__Soga: number;
	const QLocale__Luyia: number;
	const QLocale__Asu: number;
	const QLocale__Teso: number;
	const QLocale__Saho: number;
	const QLocale__KoyraChiini: number;
	const QLocale__Rwa: number;
	const QLocale__Luo: number;
	const QLocale__Chiga: number;
	const QLocale__CentralMoroccoTamazight: number;
	const QLocale__KoyraboroSenni: number;
	const QLocale__Shambala: number;
	const QLocale__Bodo: number;
	const QLocale__Avaric: number;
	const QLocale__Chamorro: number;
	const QLocale__Chechen: number;
	const QLocale__Church: number;
	const QLocale__Chuvash: number;
	const QLocale__Cree: number;
	const QLocale__Haitian: number;
	const QLocale__Herero: number;
	const QLocale__HiriMotu: number;
	const QLocale__Kanuri: number;
	const QLocale__Komi: number;
	const QLocale__Kongo: number;
	const QLocale__Kwanyama: number;
	const QLocale__Limburgish: number;
	const QLocale__LubaKatanga: number;
	const QLocale__Luxembourgish: number;
	const QLocale__Navaho: number;
	const QLocale__Ndonga: number;
	const QLocale__Ojibwa: number;
	const QLocale__Pali: number;
	const QLocale__Walloon: number;
	const QLocale__Aghem: number;
	const QLocale__Basaa: number;
	const QLocale__Zarma: number;
	const QLocale__Duala: number;
	const QLocale__JolaFonyi: number;
	const QLocale__Ewondo: number;
	const QLocale__Bafia: number;
	const QLocale__MakhuwaMeetto: number;
	const QLocale__Mundang: number;
	const QLocale__Kwasio: number;
	const QLocale__Nuer: number;
	const QLocale__Sakha: number;
	const QLocale__Sangu: number;
	const QLocale__CongoSwahili: number;
	const QLocale__Tasawaq: number;
	const QLocale__Vai: number;
	const QLocale__Walser: number;
	const QLocale__Yangben: number;
	const QLocale__Avestan: number;
	const QLocale__Asturian: number;
	const QLocale__Ngomba: number;
	const QLocale__Kako: number;
	const QLocale__Meta: number;
	const QLocale__Ngiemboon: number;
	const QLocale__Aragonese: number;
	const QLocale__Akkadian: number;
	const QLocale__AncientEgyptian: number;
	const QLocale__AncientGreek: number;
	const QLocale__Aramaic: number;
	const QLocale__Balinese: number;
	const QLocale__Bamun: number;
	const QLocale__BatakToba: number;
	const QLocale__Buginese: number;
	const QLocale__Buhid: number;
	const QLocale__Carian: number;
	const QLocale__Chakma: number;
	const QLocale__ClassicalMandaic: number;
	const QLocale__Coptic: number;
	const QLocale__Dogri: number;
	const QLocale__EasternCham: number;
	const QLocale__EasternKayah: number;
	const QLocale__Etruscan: number;
	const QLocale__Gothic: number;
	const QLocale__Hanunoo: number;
	const QLocale__Ingush: number;
	const QLocale__LargeFloweryMiao: number;
	const QLocale__Lepcha: number;
	const QLocale__Limbu: number;
	const QLocale__Lisu: number;
	const QLocale__Lu: number;
	const QLocale__Lycian: number;
	const QLocale__Lydian: number;
	const QLocale__Mandingo: number;
	const QLocale__Manipuri: number;
	const QLocale__Meroitic: number;
	const QLocale__NorthernThai: number;
	const QLocale__OldIrish: number;
	const QLocale__OldNorse: number;
	const QLocale__OldPersian: number;
	const QLocale__OldTurkish: number;
	const QLocale__Pahlavi: number;
	const QLocale__Parthian: number;
	const QLocale__Phoenician: number;
	const QLocale__PrakritLanguage: number;
	const QLocale__Rejang: number;
	const QLocale__Sabaean: number;
	const QLocale__Samaritan: number;
	const QLocale__Santali: number;
	const QLocale__Saurashtra: number;
	const QLocale__Sora: number;
	const QLocale__Sylheti: number;
	const QLocale__Tagbanwa: number;
	const QLocale__TaiDam: number;
	const QLocale__TaiNua: number;
	const QLocale__Ugaritic: number;
	const QLocale__Akoose: number;
	const QLocale__Lakota: number;
	const QLocale__StandardMoroccanTamazight: number;
	const QLocale__Mapuche: number;
	const QLocale__CentralKurdish: number;
	const QLocale__LowerSorbian: number;
	const QLocale__UpperSorbian: number;
	const QLocale__Kenyang: number;
	const QLocale__Mohawk: number;
	const QLocale__Nko: number;
	const QLocale__Prussian: number;
	const QLocale__Kiche: number;
	const QLocale__SouthernSami: number;
	const QLocale__LuleSami: number;
	const QLocale__InariSami: number;
	const QLocale__SkoltSami: number;
	const QLocale__Warlpiri: number;
	const QLocale__ManichaeanMiddlePersian: number;
	const QLocale__Mende: number;
	const QLocale__AncientNorthArabian: number;
	const QLocale__LinearA: number;
	const QLocale__HmongNjua: number;
	const QLocale__Ho: number;
	const QLocale__Lezghian: number;
	const QLocale__Bassa: number;
	const QLocale__Mono: number;
	const QLocale__TedimChin: number;
	const QLocale__Maithili: number;
	const QLocale__Ahom: number;
	const QLocale__AmericanSignLanguage: number;
	const QLocale__ArdhamagadhiPrakrit: number;
	const QLocale__Bhojpuri: number;
	const QLocale__HieroglyphicLuwian: number;
	const QLocale__LiteraryChinese: number;
	const QLocale__Mazanderani: number;
	const QLocale__Mru: number;
	const QLocale__Newari: number;
	const QLocale__NorthernLuri: number;
	const QLocale__Palauan: number;
	const QLocale__Papiamento: number;
	const QLocale__Saraiki: number;
	const QLocale__TokelauLanguage: number;
	const QLocale__TokPisin: number;
	const QLocale__TuvaluLanguage: number;
	const QLocale__UncodedLanguages: number;
	const QLocale__Cantonese: number;
	const QLocale__Osage: number;
	const QLocale__Tangut: number;
	const QLocale__Ido: number;
	const QLocale__Lojban: number;
	const QLocale__Sicilian: number;
	const QLocale__SouthernKurdish: number;
	const QLocale__WesternBalochi: number;
	const QLocale__Afan: number;
	const QLocale__Bhutani: number;
	const QLocale__Byelorussian: number;
	const QLocale__Cambodian: number;
	const QLocale__Chewa: number;
	const QLocale__Frisian: number;
	const QLocale__Kurundi: number;
	const QLocale__Moldavian: number;
	const QLocale__Norwegian: number;
	const QLocale__RhaetoRomance: number;
	const QLocale__SerboCroatian: number;
	const QLocale__Tagalog: number;
	const QLocale__Twi: number;
	const QLocale__Uigur: number;
	const QLocale__LastLanguage: number;
	const QLocale__AnyScript: number;
	const QLocale__ArabicScript: number;
	const QLocale__CyrillicScript: number;
	const QLocale__DeseretScript: number;
	const QLocale__GurmukhiScript: number;
	const QLocale__SimplifiedHanScript: number;
	const QLocale__TraditionalHanScript: number;
	const QLocale__LatinScript: number;
	const QLocale__MongolianScript: number;
	const QLocale__TifinaghScript: number;
	const QLocale__ArmenianScript: number;
	const QLocale__BengaliScript: number;
	const QLocale__CherokeeScript: number;
	const QLocale__DevanagariScript: number;
	const QLocale__EthiopicScript: number;
	const QLocale__GeorgianScript: number;
	const QLocale__GreekScript: number;
	const QLocale__GujaratiScript: number;
	const QLocale__HebrewScript: number;
	const QLocale__JapaneseScript: number;
	const QLocale__KhmerScript: number;
	const QLocale__KannadaScript: number;
	const QLocale__KoreanScript: number;
	const QLocale__LaoScript: number;
	const QLocale__MalayalamScript: number;
	const QLocale__MyanmarScript: number;
	const QLocale__OriyaScript: number;
	const QLocale__TamilScript: number;
	const QLocale__TeluguScript: number;
	const QLocale__ThaanaScript: number;
	const QLocale__ThaiScript: number;
	const QLocale__TibetanScript: number;
	const QLocale__SinhalaScript: number;
	const QLocale__SyriacScript: number;
	const QLocale__YiScript: number;
	const QLocale__VaiScript: number;
	const QLocale__AvestanScript: number;
	const QLocale__BalineseScript: number;
	const QLocale__BamumScript: number;
	const QLocale__BatakScript: number;
	const QLocale__BopomofoScript: number;
	const QLocale__BrahmiScript: number;
	const QLocale__BugineseScript: number;
	const QLocale__BuhidScript: number;
	const QLocale__CanadianAboriginalScript: number;
	const QLocale__CarianScript: number;
	const QLocale__ChakmaScript: number;
	const QLocale__ChamScript: number;
	const QLocale__CopticScript: number;
	const QLocale__CypriotScript: number;
	const QLocale__EgyptianHieroglyphsScript: number;
	const QLocale__FraserScript: number;
	const QLocale__GlagoliticScript: number;
	const QLocale__GothicScript: number;
	const QLocale__HanScript: number;
	const QLocale__HangulScript: number;
	const QLocale__HanunooScript: number;
	const QLocale__ImperialAramaicScript: number;
	const QLocale__InscriptionalPahlaviScript: number;
	const QLocale__InscriptionalParthianScript: number;
	const QLocale__JavaneseScript: number;
	const QLocale__KaithiScript: number;
	const QLocale__KatakanaScript: number;
	const QLocale__KayahLiScript: number;
	const QLocale__KharoshthiScript: number;
	const QLocale__LannaScript: number;
	const QLocale__LepchaScript: number;
	const QLocale__LimbuScript: number;
	const QLocale__LinearBScript: number;
	const QLocale__LycianScript: number;
	const QLocale__LydianScript: number;
	const QLocale__MandaeanScript: number;
	const QLocale__MeiteiMayekScript: number;
	const QLocale__MeroiticScript: number;
	const QLocale__MeroiticCursiveScript: number;
	const QLocale__NkoScript: number;
	const QLocale__NewTaiLueScript: number;
	const QLocale__OghamScript: number;
	const QLocale__OlChikiScript: number;
	const QLocale__OldItalicScript: number;
	const QLocale__OldPersianScript: number;
	const QLocale__OldSouthArabianScript: number;
	const QLocale__OrkhonScript: number;
	const QLocale__OsmanyaScript: number;
	const QLocale__PhagsPaScript: number;
	const QLocale__PhoenicianScript: number;
	const QLocale__PollardPhoneticScript: number;
	const QLocale__RejangScript: number;
	const QLocale__RunicScript: number;
	const QLocale__SamaritanScript: number;
	const QLocale__SaurashtraScript: number;
	const QLocale__SharadaScript: number;
	const QLocale__ShavianScript: number;
	const QLocale__SoraSompengScript: number;
	const QLocale__CuneiformScript: number;
	const QLocale__SundaneseScript: number;
	const QLocale__SylotiNagriScript: number;
	const QLocale__TagalogScript: number;
	const QLocale__TagbanwaScript: number;
	const QLocale__TaiLeScript: number;
	const QLocale__TaiVietScript: number;
	const QLocale__TakriScript: number;
	const QLocale__UgariticScript: number;
	const QLocale__BrailleScript: number;
	const QLocale__HiraganaScript: number;
	const QLocale__CaucasianAlbanianScript: number;
	const QLocale__BassaVahScript: number;
	const QLocale__DuployanScript: number;
	const QLocale__ElbasanScript: number;
	const QLocale__GranthaScript: number;
	const QLocale__PahawhHmongScript: number;
	const QLocale__KhojkiScript: number;
	const QLocale__LinearAScript: number;
	const QLocale__MahajaniScript: number;
	const QLocale__ManichaeanScript: number;
	const QLocale__MendeKikakuiScript: number;
	const QLocale__ModiScript: number;
	const QLocale__MroScript: number;
	const QLocale__OldNorthArabianScript: number;
	const QLocale__NabataeanScript: number;
	const QLocale__PalmyreneScript: number;
	const QLocale__PauCinHauScript: number;
	const QLocale__OldPermicScript: number;
	const QLocale__PsalterPahlaviScript: number;
	const QLocale__SiddhamScript: number;
	const QLocale__KhudawadiScript: number;
	const QLocale__TirhutaScript: number;
	const QLocale__VarangKshitiScript: number;
	const QLocale__AhomScript: number;
	const QLocale__AnatolianHieroglyphsScript: number;
	const QLocale__HatranScript: number;
	const QLocale__MultaniScript: number;
	const QLocale__OldHungarianScript: number;
	const QLocale__SignWritingScript: number;
	const QLocale__AdlamScript: number;
	const QLocale__BhaiksukiScript: number;
	const QLocale__MarchenScript: number;
	const QLocale__NewaScript: number;
	const QLocale__OsageScript: number;
	const QLocale__TangutScript: number;
	const QLocale__HanWithBopomofoScript: number;
	const QLocale__JamoScript: number;
	const QLocale__SimplifiedChineseScript: number;
	const QLocale__TraditionalChineseScript: number;
	const QLocale__LastScript: number;
	const QLocale__AnyCountry: number;
	const QLocale__Afghanistan: number;
	const QLocale__Albania: number;
	const QLocale__Algeria: number;
	const QLocale__AmericanSamoa: number;
	const QLocale__Andorra: number;
	const QLocale__Angola: number;
	const QLocale__Anguilla: number;
	const QLocale__Antarctica: number;
	const QLocale__AntiguaAndBarbuda: number;
	const QLocale__Argentina: number;
	const QLocale__Armenia: number;
	const QLocale__Aruba: number;
	const QLocale__Australia: number;
	const QLocale__Austria: number;
	const QLocale__Azerbaijan: number;
	const QLocale__Bahamas: number;
	const QLocale__Bahrain: number;
	const QLocale__Bangladesh: number;
	const QLocale__Barbados: number;
	const QLocale__Belarus: number;
	const QLocale__Belgium: number;
	const QLocale__Belize: number;
	const QLocale__Benin: number;
	const QLocale__Bermuda: number;
	const QLocale__Bhutan: number;
	const QLocale__Bolivia: number;
	const QLocale__BosniaAndHerzegowina: number;
	const QLocale__Botswana: number;
	const QLocale__BouvetIsland: number;
	const QLocale__Brazil: number;
	const QLocale__BritishIndianOceanTerritory: number;
	const QLocale__Brunei: number;
	const QLocale__Bulgaria: number;
	const QLocale__BurkinaFaso: number;
	const QLocale__Burundi: number;
	const QLocale__Cambodia: number;
	const QLocale__Cameroon: number;
	const QLocale__Canada: number;
	const QLocale__CapeVerde: number;
	const QLocale__CaymanIslands: number;
	const QLocale__CentralAfricanRepublic: number;
	const QLocale__Chad: number;
	const QLocale__Chile: number;
	const QLocale__China: number;
	const QLocale__ChristmasIsland: number;
	const QLocale__CocosIslands: number;
	const QLocale__Colombia: number;
	const QLocale__Comoros: number;
	const QLocale__CongoKinshasa: number;
	const QLocale__CongoBrazzaville: number;
	const QLocale__CookIslands: number;
	const QLocale__CostaRica: number;
	const QLocale__IvoryCoast: number;
	const QLocale__Croatia: number;
	const QLocale__Cuba: number;
	const QLocale__Cyprus: number;
	const QLocale__CzechRepublic: number;
	const QLocale__Denmark: number;
	const QLocale__Djibouti: number;
	const QLocale__Dominica: number;
	const QLocale__DominicanRepublic: number;
	const QLocale__EastTimor: number;
	const QLocale__Ecuador: number;
	const QLocale__Egypt: number;
	const QLocale__ElSalvador: number;
	const QLocale__EquatorialGuinea: number;
	const QLocale__Eritrea: number;
	const QLocale__Estonia: number;
	const QLocale__Ethiopia: number;
	const QLocale__FalklandIslands: number;
	const QLocale__FaroeIslands: number;
	const QLocale__Fiji: number;
	const QLocale__Finland: number;
	const QLocale__France: number;
	const QLocale__Guernsey: number;
	const QLocale__FrenchGuiana: number;
	const QLocale__FrenchPolynesia: number;
	const QLocale__FrenchSouthernTerritories: number;
	const QLocale__Gabon: number;
	const QLocale__Gambia: number;
	const QLocale__Georgia: number;
	const QLocale__Germany: number;
	const QLocale__Ghana: number;
	const QLocale__Gibraltar: number;
	const QLocale__Greece: number;
	const QLocale__Greenland: number;
	const QLocale__Grenada: number;
	const QLocale__Guadeloupe: number;
	const QLocale__Guam: number;
	const QLocale__Guatemala: number;
	const QLocale__Guinea: number;
	const QLocale__GuineaBissau: number;
	const QLocale__Guyana: number;
	const QLocale__Haiti: number;
	const QLocale__HeardAndMcDonaldIslands: number;
	const QLocale__Honduras: number;
	const QLocale__HongKong: number;
	const QLocale__Hungary: number;
	const QLocale__Iceland: number;
	const QLocale__India: number;
	const QLocale__Indonesia: number;
	const QLocale__Iran: number;
	const QLocale__Iraq: number;
	const QLocale__Ireland: number;
	const QLocale__Israel: number;
	const QLocale__Italy: number;
	const QLocale__Jamaica: number;
	const QLocale__Japan: number;
	const QLocale__Jordan: number;
	const QLocale__Kazakhstan: number;
	const QLocale__Kenya: number;
	const QLocale__Kiribati: number;
	const QLocale__NorthKorea: number;
	const QLocale__SouthKorea: number;
	const QLocale__Kuwait: number;
	const QLocale__Kyrgyzstan: number;
	const QLocale__Laos: number;
	const QLocale__Latvia: number;
	const QLocale__Lebanon: number;
	const QLocale__Lesotho: number;
	const QLocale__Liberia: number;
	const QLocale__Libya: number;
	const QLocale__Liechtenstein: number;
	const QLocale__Lithuania: number;
	const QLocale__Luxembourg: number;
	const QLocale__Macau: number;
	const QLocale__Macedonia: number;
	const QLocale__Madagascar: number;
	const QLocale__Malawi: number;
	const QLocale__Malaysia: number;
	const QLocale__Maldives: number;
	const QLocale__Mali: number;
	const QLocale__Malta: number;
	const QLocale__MarshallIslands: number;
	const QLocale__Martinique: number;
	const QLocale__Mauritania: number;
	const QLocale__Mauritius: number;
	const QLocale__Mayotte: number;
	const QLocale__Mexico: number;
	const QLocale__Micronesia: number;
	const QLocale__Moldova: number;
	const QLocale__Monaco: number;
	const QLocale__Mongolia: number;
	const QLocale__Montserrat: number;
	const QLocale__Morocco: number;
	const QLocale__Mozambique: number;
	const QLocale__Myanmar: number;
	const QLocale__Namibia: number;
	const QLocale__NauruCountry: number;
	const QLocale__Nepal: number;
	const QLocale__Netherlands: number;
	const QLocale__CuraSao: number;
	const QLocale__NewCaledonia: number;
	const QLocale__NewZealand: number;
	const QLocale__Nicaragua: number;
	const QLocale__Niger: number;
	const QLocale__Nigeria: number;
	const QLocale__Niue: number;
	const QLocale__NorfolkIsland: number;
	const QLocale__NorthernMarianaIslands: number;
	const QLocale__Norway: number;
	const QLocale__Oman: number;
	const QLocale__Pakistan: number;
	const QLocale__Palau: number;
	const QLocale__PalestinianTerritories: number;
	const QLocale__Panama: number;
	const QLocale__PapuaNewGuinea: number;
	const QLocale__Paraguay: number;
	const QLocale__Peru: number;
	const QLocale__Philippines: number;
	const QLocale__Pitcairn: number;
	const QLocale__Poland: number;
	const QLocale__Portugal: number;
	const QLocale__PuertoRico: number;
	const QLocale__Qatar: number;
	const QLocale__Reunion: number;
	const QLocale__Romania: number;
	const QLocale__Russia: number;
	const QLocale__Rwanda: number;
	const QLocale__SaintKittsAndNevis: number;
	const QLocale__SaintLucia: number;
	const QLocale__SaintVincentAndTheGrenadines: number;
	const QLocale__Samoa: number;
	const QLocale__SanMarino: number;
	const QLocale__SaoTomeAndPrincipe: number;
	const QLocale__SaudiArabia: number;
	const QLocale__Senegal: number;
	const QLocale__Seychelles: number;
	const QLocale__SierraLeone: number;
	const QLocale__Singapore: number;
	const QLocale__Slovakia: number;
	const QLocale__Slovenia: number;
	const QLocale__SolomonIslands: number;
	const QLocale__Somalia: number;
	const QLocale__SouthAfrica: number;
	const QLocale__SouthGeorgiaAndTheSouthSandwichIslands: number;
	const QLocale__Spain: number;
	const QLocale__SriLanka: number;
	const QLocale__SaintHelena: number;
	const QLocale__SaintPierreAndMiquelon: number;
	const QLocale__Sudan: number;
	const QLocale__Suriname: number;
	const QLocale__SvalbardAndJanMayenIslands: number;
	const QLocale__Swaziland: number;
	const QLocale__Sweden: number;
	const QLocale__Switzerland: number;
	const QLocale__Syria: number;
	const QLocale__Taiwan: number;
	const QLocale__Tajikistan: number;
	const QLocale__Tanzania: number;
	const QLocale__Thailand: number;
	const QLocale__Togo: number;
	const QLocale__TokelauCountry: number;
	const QLocale__Tonga: number;
	const QLocale__TrinidadAndTobago: number;
	const QLocale__Tunisia: number;
	const QLocale__Turkey: number;
	const QLocale__Turkmenistan: number;
	const QLocale__TurksAndCaicosIslands: number;
	const QLocale__TuvaluCountry: number;
	const QLocale__Uganda: number;
	const QLocale__Ukraine: number;
	const QLocale__UnitedArabEmirates: number;
	const QLocale__UnitedKingdom: number;
	const QLocale__UnitedStates: number;
	const QLocale__UnitedStatesMinorOutlyingIslands: number;
	const QLocale__Uruguay: number;
	const QLocale__Uzbekistan: number;
	const QLocale__Vanuatu: number;
	const QLocale__VaticanCityState: number;
	const QLocale__Venezuela: number;
	const QLocale__Vietnam: number;
	const QLocale__BritishVirginIslands: number;
	const QLocale__UnitedStatesVirginIslands: number;
	const QLocale__WallisAndFutunaIslands: number;
	const QLocale__WesternSahara: number;
	const QLocale__Yemen: number;
	const QLocale__CanaryIslands: number;
	const QLocale__Zambia: number;
	const QLocale__Zimbabwe: number;
	const QLocale__ClippertonIsland: number;
	const QLocale__Montenegro: number;
	const QLocale__Serbia: number;
	const QLocale__SaintBarthelemy: number;
	const QLocale__SaintMartin: number;
	const QLocale__LatinAmerica: number;
	const QLocale__AscensionIsland: number;
	const QLocale__AlandIslands: number;
	const QLocale__DiegoGarcia: number;
	const QLocale__CeutaAndMelilla: number;
	const QLocale__IsleOfMan: number;
	const QLocale__Jersey: number;
	const QLocale__TristanDaCunha: number;
	const QLocale__SouthSudan: number;
	const QLocale__Bonaire: number;
	const QLocale__SintMaarten: number;
	const QLocale__Kosovo: number;
	const QLocale__EuropeanUnion: number;
	const QLocale__OutlyingOceania: number;
	const QLocale__World: number;
	const QLocale__Europe: number;
	const QLocale__DemocraticRepublicOfCongo: number;
	const QLocale__DemocraticRepublicOfKorea: number;
	const QLocale__LatinAmericaAndTheCaribbean: number;
	const QLocale__PeoplesRepublicOfCongo: number;
	const QLocale__RepublicOfKorea: number;
	const QLocale__RussianFederation: number;
	const QLocale__SyrianArabRepublic: number;
	const QLocale__Tokelau: number;
	const QLocale__Tuvalu: number;
	const QLocale__LastCountry: number;
	const QLocale__MetricSystem: number;
	const QLocale__ImperialUSSystem: number;
	const QLocale__ImperialUKSystem: number;
	const QLocale__ImperialSystem: number;
	const QLocale__LongFormat: number;
	const QLocale__ShortFormat: number;
	const QLocale__NarrowFormat: number;
	const QLocale__DefaultNumberOptions: number;
	const QLocale__OmitGroupSeparator: number;
	const QLocale__RejectGroupSeparator: number;
	const QLocale__OmitLeadingZeroInExponent: number;
	const QLocale__RejectLeadingZeroInExponent: number;
	const QLocale__IncludeTrailingZeroesAfterDot: number;
	const QLocale__RejectTrailingZeroesAfterDot: number;
	const QLocale__FloatingPointShortest: number;
	const QLocale__CurrencyIsoCode: number;
	const QLocale__CurrencySymbol: number;
	const QLocale__CurrencyDisplayName: number;
	const QLocale__DataSizeBase1000: number;
	const QLocale__DataSizeSIQuantifiers: number;
	const QLocale__DataSizeIecFormat: number;
	const QLocale__DataSizeTraditionalFormat: number;
	const QLocale__DataSizeSIFormat: number;
	const QLocale__StandardQuotation: number;
	const QLocale__AlternateQuotation: number;
	interface QLockFile_ITF {
		QLockFile_PTR():QLockFile;
	}

	class QLockFile {
		___pointer: number;
		QLockFile_PTR():QLockFile;
		Pointer():number;
		SetPointer(p:number):void;
		Error():number;
		GetLockInfo(pid:number,hostname:string,appname:string):boolean;
		IsLocked():boolean;
		Lock():boolean;
		RemoveStaleLockFile():boolean;
		SetStaleLockTime(staleLockTime:number):void;
		StaleLockTime():number;
		TryLock(timeout:number):boolean;
		Unlock():void;
		DestroyQLockFile():void;
	}
	function NewQLockFileFromPointer(ptr:number):QLockFile;
	function NewQLockFile(fileName:string):QLockFile;
	const QLockFile__NoError: number;
	const QLockFile__LockFailedError: number;
	const QLockFile__PermissionError: number;
	const QLockFile__UnknownError: number;
	interface QLoggingCategory_ITF {
		QLoggingCategory_PTR():QLoggingCategory;
	}

	class QLoggingCategory {
		___pointer: number;
		QLoggingCategory_PTR():QLoggingCategory;
		Pointer():number;
		SetPointer(p:number):void;
		CategoryName():string;
		DefaultCategory():QLoggingCategory;
		IsCriticalEnabled():boolean;
		IsDebugEnabled():boolean;
		IsInfoEnabled():boolean;
		IsWarningEnabled():boolean;
		SetFilterRules(rules:string):void;
		DestroyQLoggingCategory():void;
	}
	function NewQLoggingCategoryFromPointer(ptr:number):QLoggingCategory;
	function NewQLoggingCategory2(category:string):QLoggingCategory;
	function QLoggingCategory_DefaultCategory():QLoggingCategory;
	function QLoggingCategory_SetFilterRules(rules:string):void;
	interface QMapData_ITF {
		QMapData_PTR():QMapData;
	}

	class QMapData {
		___pointer: number;
		QMapData_PTR():QMapData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMapData():void;
	}
	function NewQMapDataFromPointer(ptr:number):QMapData;
	interface QMapDataBase_ITF {
		QMapDataBase_PTR():QMapDataBase;
	}

	class QMapDataBase {
		___pointer: number;
		QMapDataBase_PTR():QMapDataBase;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMapDataBase():void;
	}
	function NewQMapDataBaseFromPointer(ptr:number):QMapDataBase;
	interface QMapNode_ITF {
		QMapNode_PTR():QMapNode;
	}

	class QMapNode {
		___pointer: number;
		QMapNode_PTR():QMapNode;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMapNode():void;
	}
	function NewQMapNodeFromPointer(ptr:number):QMapNode;
	interface QMapNodeBase_ITF {
		QMapNodeBase_PTR():QMapNodeBase;
	}

	class QMapNodeBase {
		___pointer: number;
		QMapNodeBase_PTR():QMapNodeBase;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMapNodeBase():void;
	}
	function NewQMapNodeBaseFromPointer(ptr:number):QMapNodeBase;
	interface QMargins_ITF {
		QMargins_PTR():QMargins;
	}

	class QMargins {
		___pointer: number;
		QMargins_PTR():QMargins;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMargins():void;
		Bottom():number;
		IsNull():boolean;
		Left():number;
		Right():number;
		SetBottom(bottom:number):void;
		SetLeft(left:number):void;
		SetRight(right:number):void;
		SetTop(Top:number):void;
		Top():number;
	}
	function NewQMarginsFromPointer(ptr:number):QMargins;
	function NewQMargins():QMargins;
	function NewQMargins2(left:number,top:number,right:number,bottom:number):QMargins;
	function NewQMarginsF():QMarginsF;
	function NewQMarginsF2(left:number,top:number,right:number,bottom:number):QMarginsF;
	function NewQMarginsF3(margins:QMargins_ITF):QMarginsF;
	interface QMarginsF_ITF {
		QMarginsF_PTR():QMarginsF;
	}

	class QMarginsF {
		___pointer: number;
		QMarginsF_PTR():QMarginsF;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMarginsF():void;
		Bottom():number;
		IsNull():boolean;
		Left():number;
		Right():number;
		SetBottom(bottom:number):void;
		SetLeft(left:number):void;
		SetRight(right:number):void;
		SetTop(Top:number):void;
		ToMargins():QMargins;
		Top():number;
	}
	function NewQMarginsFFromPointer(ptr:number):QMarginsF;
	function NewQMarginsF():QMarginsF;
	function NewQMarginsF2(left:number,top:number,right:number,bottom:number):QMarginsF;
	function NewQMarginsF3(margins:QMargins_ITF):QMarginsF;
	interface QMessageAuthenticationCode_ITF {
		QMessageAuthenticationCode_PTR():QMessageAuthenticationCode;
	}

	class QMessageAuthenticationCode {
		___pointer: number;
		QMessageAuthenticationCode_PTR():QMessageAuthenticationCode;
		Pointer():number;
		SetPointer(p:number):void;
		AddData(data:string,length:number):void;
		AddData2(data:QByteArray_ITF):void;
		AddData3(device:QIODevice_ITF):boolean;
		Hash(message:QByteArray_ITF,key:QByteArray_ITF,method:number):QByteArray;
		Reset():void;
		Result():QByteArray;
		SetKey(key:QByteArray_ITF):void;
		DestroyQMessageAuthenticationCode():void;
	}
	function NewQMessageAuthenticationCodeFromPointer(ptr:number):QMessageAuthenticationCode;
	function NewQMessageAuthenticationCode(method:number,key:QByteArray_ITF):QMessageAuthenticationCode;
	function QMessageAuthenticationCode_Hash(message:QByteArray_ITF,key:QByteArray_ITF,method:number):QByteArray;
	interface QMessageLogContext_ITF {
		QMessageLogContext_PTR():QMessageLogContext;
	}

	class QMessageLogContext {
		___pointer: number;
		QMessageLogContext_PTR():QMessageLogContext;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMessageLogContext():void;
	}
	function NewQMessageLogContextFromPointer(ptr:number):QMessageLogContext;
	interface QMessageLogger_ITF {
		QMessageLogger_PTR():QMessageLogger;
	}

	class QMessageLogger {
		___pointer: number;
		QMessageLogger_PTR():QMessageLogger;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMessageLogger():void;
		Critical4():QDebug;
		Critical5(cat:QLoggingCategory_ITF):QDebug;
		Debug4():QDebug;
		Debug5(cat:QLoggingCategory_ITF):QDebug;
		Info4():QDebug;
		Info5(cat:QLoggingCategory_ITF):QDebug;
		Warning4():QDebug;
		Warning5(cat:QLoggingCategory_ITF):QDebug;
	}
	function NewQMessageLoggerFromPointer(ptr:number):QMessageLogger;
	function NewQMessageLogger2():QMessageLogger;
	function NewQMessageLogger3(file:string,line:number,func:string):QMessageLogger;
	function NewQMessageLogger4(file:string,line:number,func:string,category:string):QMessageLogger;
	interface QMetaClassInfo_ITF {
		QMetaClassInfo_PTR():QMetaClassInfo;
	}

	class QMetaClassInfo {
		___pointer: number;
		QMetaClassInfo_PTR():QMetaClassInfo;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMetaClassInfo():void;
		Name():string;
		Value():string;
	}
	function NewQMetaClassInfoFromPointer(ptr:number):QMetaClassInfo;
	interface QMetaEnum_ITF {
		QMetaEnum_PTR():QMetaEnum;
	}

	class QMetaEnum {
		___pointer: number;
		QMetaEnum_PTR():QMetaEnum;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMetaEnum():void;
		EnumName():string;
		IsFlag():boolean;
		IsScoped():boolean;
		IsValid():boolean;
		Key(index:number):string;
		KeyCount():number;
		KeyToValue(key:string,ok:boolean):number;
		KeysToValue(keys:string,ok:boolean):number;
		Name():string;
		Scope():string;
		Value(index:number):number;
		ValueToKey(value:number):string;
		ValueToKeys(value:number):QByteArray;
	}
	function NewQMetaEnumFromPointer(ptr:number):QMetaEnum;
	interface QMetaMethod_ITF {
		QMetaMethod_PTR():QMetaMethod;
	}

	class QMetaMethod {
		___pointer: number;
		QMetaMethod_PTR():QMetaMethod;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMetaMethod():void;
		Access():number;
		Invoke(object:QObject_ITF,connectionType:number,returnValue:QGenericReturnArgument_ITF,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		Invoke2(object:QObject_ITF,returnValue:QGenericReturnArgument_ITF,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		Invoke3(object:QObject_ITF,connectionType:number,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		Invoke4(object:QObject_ITF,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		InvokeOnGadget(gadget:number,returnValue:QGenericReturnArgument_ITF,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		InvokeOnGadget2(gadget:number,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		IsValid():boolean;
		MethodIndex():number;
		MethodSignature():QByteArray;
		MethodType():number;
		Name():QByteArray;
		ParameterCount():number;
		ParameterNames():QByteArray[];
		ParameterType(index:number):number;
		ParameterTypes():QByteArray[];
		ReturnType():number;
		Revision():number;
		Tag():string;
		TypeName():string;
	}
	function NewQMetaMethodFromPointer(ptr:number):QMetaMethod;
	const QMetaMethod__Private: number;
	const QMetaMethod__Protected: number;
	const QMetaMethod__Public: number;
	const QMetaMethod__Method: number;
	const QMetaMethod__Signal: number;
	const QMetaMethod__Slot: number;
	const QMetaMethod__Constructor: number;
	interface QMetaObject_ITF {
		QMetaObject_PTR():QMetaObject;
	}

	class QMetaObject {
		___pointer: number;
		QMetaObject_PTR():QMetaObject;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMetaObject():void;
		CheckConnectArgs(sign:string,method:string):boolean;
		CheckConnectArgs2(sign:QMetaMethod_ITF,method:QMetaMethod_ITF):boolean;
		ClassInfoCount():number;
		ClassInfoOffset():number;
		ClassName():string;
		ConnectSlotsByName(object:QObject_ITF):void;
		Constructor(index:number):QMetaMethod;
		ConstructorCount():number;
		EnumeratorCount():number;
		EnumeratorOffset():number;
		IndexOfClassInfo(name:string):number;
		IndexOfConstructor(constructor:string):number;
		IndexOfEnumerator(name:string):number;
		IndexOfMethod(method:string):number;
		IndexOfProperty(name:string):number;
		IndexOfSignal(sign:string):number;
		IndexOfSlot(slot:string):number;
		Inherits(metaObject:QMetaObject_ITF):boolean;
		InvokeMethod(obj:QObject_ITF,member:string,ty:number,ret:QGenericReturnArgument_ITF,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		InvokeMethod2(obj:QObject_ITF,member:string,ret:QGenericReturnArgument_ITF,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		InvokeMethod3(obj:QObject_ITF,member:string,ty:number,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		InvokeMethod4(obj:QObject_ITF,member:string,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
		Method(index:number):QMetaMethod;
		MethodCount():number;
		MethodOffset():number;
		NewInstance(val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):QObject;
		NormalizedSignature(method:string):QByteArray;
		NormalizedType(ty:string):QByteArray;
		PropertyCount():number;
		PropertyOffset():number;
		SuperClass():QMetaObject;
	}
	function NewQMetaObjectFromPointer(ptr:number):QMetaObject;
	function QMetaObject_CheckConnectArgs(sign:string,method:string):boolean;
	function QMetaObject_CheckConnectArgs2(sign:QMetaMethod_ITF,method:QMetaMethod_ITF):boolean;
	function QMetaObject_ConnectSlotsByName(object:QObject_ITF):void;
	function QMetaObject_InvokeMethod(obj:QObject_ITF,member:string,ty:number,ret:QGenericReturnArgument_ITF,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
	function QMetaObject_InvokeMethod2(obj:QObject_ITF,member:string,ret:QGenericReturnArgument_ITF,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
	function QMetaObject_InvokeMethod3(obj:QObject_ITF,member:string,ty:number,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
	function QMetaObject_InvokeMethod4(obj:QObject_ITF,member:string,val0:QGenericArgument_ITF,val1:QGenericArgument_ITF,val2:QGenericArgument_ITF,val3:QGenericArgument_ITF,val4:QGenericArgument_ITF,val5:QGenericArgument_ITF,val6:QGenericArgument_ITF,val7:QGenericArgument_ITF,val8:QGenericArgument_ITF,val9:QGenericArgument_ITF):boolean;
	function QMetaObject_NormalizedSignature(method:string):QByteArray;
	function QMetaObject_NormalizedType(ty:string):QByteArray;
	interface QMetaProperty_ITF {
		QMetaProperty_PTR():QMetaProperty;
	}

	class QMetaProperty {
		___pointer: number;
		QMetaProperty_PTR():QMetaProperty;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMetaProperty():void;
		HasNotifySignal():boolean;
		IsConstant():boolean;
		IsDesignable(object:QObject_ITF):boolean;
		IsEnumType():boolean;
		IsFinal():boolean;
		IsFlagType():boolean;
		IsReadable():boolean;
		IsResettable():boolean;
		IsScriptable(object:QObject_ITF):boolean;
		IsStored(object:QObject_ITF):boolean;
		IsUser(object:QObject_ITF):boolean;
		IsValid():boolean;
		IsWritable():boolean;
		Name():string;
		NotifySignal():QMetaMethod;
		NotifySignalIndex():number;
		PropertyIndex():number;
		Read(object:QObject_ITF):QVariant;
		ReadOnGadget(gadget:number):QVariant;
		Reset(object:QObject_ITF):boolean;
		ResetOnGadget(gadget:number):boolean;
		Revision():number;
		Type():number;
		TypeName():string;
		UserType():number;
		Write(object:QObject_ITF,value:QVariant_ITF):boolean;
		WriteOnGadget(gadget:number,value:QVariant_ITF):boolean;
	}
	function NewQMetaPropertyFromPointer(ptr:number):QMetaProperty;
	interface QMetaType_ITF {
		QMetaType_PTR():QMetaType;
	}

	class QMetaType {
		___pointer: number;
		QMetaType_PTR():QMetaType;
		Pointer():number;
		SetPointer(p:number):void;
		Compare(lhs:number,rhs:number,typeId:number,result:number):boolean;
		Construct2(ty:number,where:number,copy:number):number;
		Construct3(where:number,copy:number):number;
		Convert(from:number,fromTypeId:number,to:number,toTypeId:number):boolean;
		Create(ty:number,copy:number):number;
		Create2(copy:number):number;
		DebugStream(dbg:QDebug_ITF,rhs:number,typeId:number):boolean;
		Destroy(ty:number,data:number):void;
		Destroy2(data:number):void;
		Destruct(ty:number,where:number):void;
		Destruct2(data:number):void;
		Equals(lhs:number,rhs:number,typeId:number,result:number):boolean;
		Flags():number;
		Id():number;
		IsRegistered(ty:number):boolean;
		IsRegistered2():boolean;
		IsValid():boolean;
		Load(stream:QDataStream_ITF,ty:number,data:number):boolean;
		MetaObject():QMetaObject;
		MetaObjectForType(ty:number):QMetaObject;
		Save(stream:QDataStream_ITF,ty:number,data:number):boolean;
		SizeOf(ty:number):number;
		SizeOf2():number;
		Type(typeName:string):number;
		Type2(typeName:QByteArray_ITF):number;
		TypeFlags(ty:number):number;
		TypeName(typeId:number):string;
		DestroyQMetaType():void;
	}
	function NewQMetaTypeFromPointer(ptr:number):QMetaType;
	function NewQMetaType(typeId:number):QMetaType;
	function QMetaType_Compare(lhs:number,rhs:number,typeId:number,result:number):boolean;
	function QMetaType_Construct2(ty:number,where:number,copy:number):number;
	function QMetaType_Convert(from:number,fromTypeId:number,to:number,toTypeId:number):boolean;
	function QMetaType_Create(ty:number,copy:number):number;
	function QMetaType_DebugStream(dbg:QDebug_ITF,rhs:number,typeId:number):boolean;
	function QMetaType_Destroy(ty:number,data:number):void;
	function QMetaType_Destruct(ty:number,where:number):void;
	function QMetaType_Equals(lhs:number,rhs:number,typeId:number,result:number):boolean;
	function QMetaType_IsRegistered(ty:number):boolean;
	function QMetaType_Load(stream:QDataStream_ITF,ty:number,data:number):boolean;
	function QMetaType_MetaObjectForType(ty:number):QMetaObject;
	function QMetaType_Save(stream:QDataStream_ITF,ty:number,data:number):boolean;
	function QMetaType_SizeOf(ty:number):number;
	function QMetaType_Type(typeName:string):number;
	function QMetaType_Type2(typeName:QByteArray_ITF):number;
	function QMetaType_TypeFlags(ty:number):number;
	function QMetaType_TypeName(typeId:number):string;
	const QMetaType__UnknownType: number;
	const QMetaType__Bool: number;
	const QMetaType__Int: number;
	const QMetaType__UInt: number;
	const QMetaType__LongLong: number;
	const QMetaType__ULongLong: number;
	const QMetaType__Double: number;
	const QMetaType__Long: number;
	const QMetaType__Short: number;
	const QMetaType__Char: number;
	const QMetaType__ULong: number;
	const QMetaType__UShort: number;
	const QMetaType__UChar: number;
	const QMetaType__Float: number;
	const QMetaType__VoidStar: number;
	const QMetaType__QChar: number;
	const QMetaType__QString: number;
	const QMetaType__QStringList: number;
	const QMetaType__QByteArray: number;
	const QMetaType__QBitArray: number;
	const QMetaType__QDate: number;
	const QMetaType__QTime: number;
	const QMetaType__QDateTime: number;
	const QMetaType__QUrl: number;
	const QMetaType__QLocale: number;
	const QMetaType__QRect: number;
	const QMetaType__QRectF: number;
	const QMetaType__QSize: number;
	const QMetaType__QSizeF: number;
	const QMetaType__QLine: number;
	const QMetaType__QLineF: number;
	const QMetaType__QPoint: number;
	const QMetaType__QPointF: number;
	const QMetaType__QRegExp: number;
	const QMetaType__QEasingCurve: number;
	const QMetaType__QUuid: number;
	const QMetaType__QVariant: number;
	const QMetaType__QModelIndex: number;
	const QMetaType__QPersistentModelIndex: number;
	const QMetaType__QRegularExpression: number;
	const QMetaType__QJsonValue: number;
	const QMetaType__QJsonObject: number;
	const QMetaType__QJsonArray: number;
	const QMetaType__QJsonDocument: number;
	const QMetaType__QByteArrayList: number;
	const QMetaType__QObjectStar: number;
	const QMetaType__SChar: number;
	const QMetaType__Void: number;
	const QMetaType__Nullptr: number;
	const QMetaType__QVariantMap: number;
	const QMetaType__QVariantList: number;
	const QMetaType__QVariantHash: number;
	const QMetaType__QCborSimpleType: number;
	const QMetaType__QCborValue: number;
	const QMetaType__QCborArray: number;
	const QMetaType__QCborMap: number;
	const QMetaType__QFont: number;
	const QMetaType__QPixmap: number;
	const QMetaType__QBrush: number;
	const QMetaType__QColor: number;
	const QMetaType__QPalette: number;
	const QMetaType__QIcon: number;
	const QMetaType__QImage: number;
	const QMetaType__QPolygon: number;
	const QMetaType__QRegion: number;
	const QMetaType__QBitmap: number;
	const QMetaType__QCursor: number;
	const QMetaType__QKeySequence: number;
	const QMetaType__QPen: number;
	const QMetaType__QTextLength: number;
	const QMetaType__QTextFormat: number;
	const QMetaType__QMatrix: number;
	const QMetaType__QTransform: number;
	const QMetaType__QMatrix4x4: number;
	const QMetaType__QVector2D: number;
	const QMetaType__QVector3D: number;
	const QMetaType__QVector4D: number;
	const QMetaType__QQuaternion: number;
	const QMetaType__QPolygonF: number;
	const QMetaType__QSizePolicy: number;
	const QMetaType__LastCoreType: number;
	const QMetaType__LastGuiType: number;
	const QMetaType__User: number;
	const QMetaType__NeedsConstruction: number;
	const QMetaType__NeedsDestruction: number;
	const QMetaType__MovableType: number;
	const QMetaType__PointerToQObject: number;
	const QMetaType__IsEnumeration: number;
	const QMetaType__SharedPointerToQObject: number;
	const QMetaType__WeakPointerToQObject: number;
	const QMetaType__TrackingPointerToQObject: number;
	const QMetaType__WasDeclaredAsMetaType: number;
	const QMetaType__IsGadget: number;
	const QMetaType__PointerToGadget: number;
	interface QMimeData_ITF extends QObject_ITF {
		QMimeData_PTR():QMimeData;
	}

	class QMimeData extends QObject {
		___pointer: number;
		QMimeData_PTR():QMimeData;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():void;
		ColorData():QVariant;
		Data(mimeType:string):QByteArray;
		ConnectFormats(f:()=>string[]):void;
		DisconnectFormats():void;
		Formats():string[];
		FormatsDefault():string[];
		HasColor():boolean;
		ConnectHasFormat(f:(mimeType:string)=>boolean):void;
		DisconnectHasFormat():void;
		HasFormat(mimeType:string):boolean;
		HasFormatDefault(mimeType:string):boolean;
		HasHtml():boolean;
		HasImage():boolean;
		HasText():boolean;
		HasUrls():boolean;
		Html():string;
		ImageData():QVariant;
		RemoveFormat(mimeType:string):void;
		ConnectRetrieveData(f:(mimeType:string,ty:number)=>QVariant):void;
		DisconnectRetrieveData():void;
		RetrieveData(mimeType:string,ty:number):QVariant;
		RetrieveDataDefault(mimeType:string,ty:number):QVariant;
		SetColorData(color:QVariant_ITF):void;
		SetData(mimeType:string,data:QByteArray_ITF):void;
		SetHtml(html:string):void;
		SetImageData(image:QVariant_ITF):void;
		SetText(text:string):void;
		SetUrls(urls:QUrl[]):void;
		Text():string;
		Urls():QUrl[];
		ConnectDestroyQMimeData(f:()=>void):void;
		DisconnectDestroyQMimeData():void;
		DestroyQMimeData():void;
		DestroyQMimeDataDefault():void;
	}
	function NewQMimeDataFromPointer(ptr:number):QMimeData;
	function NewQMimeData():QMimeData;
	function NewQMimeDatabase2():QMimeDatabase;
	interface QMimeDatabase_ITF {
		QMimeDatabase_PTR():QMimeDatabase;
	}

	class QMimeDatabase {
		___pointer: number;
		QMimeDatabase_PTR():QMimeDatabase;
		Pointer():number;
		SetPointer(p:number):void;
		AllMimeTypes():QMimeType[];
		MimeTypeForData(data:QByteArray_ITF):QMimeType;
		MimeTypeForData2(device:QIODevice_ITF):QMimeType;
		MimeTypeForFile(fileInfo:QFileInfo_ITF,mode:number):QMimeType;
		MimeTypeForFile2(fileName:string,mode:number):QMimeType;
		MimeTypeForFileNameAndData(fileName:string,device:QIODevice_ITF):QMimeType;
		MimeTypeForFileNameAndData2(fileName:string,data:QByteArray_ITF):QMimeType;
		MimeTypeForName(nameOrAlias:string):QMimeType;
		MimeTypeForUrl(url:QUrl_ITF):QMimeType;
		MimeTypesForFileName(fileName:string):QMimeType[];
		SuffixForFileName(fileName:string):string;
		DestroyQMimeDatabase():void;
	}
	function NewQMimeDatabaseFromPointer(ptr:number):QMimeDatabase;
	function NewQMimeDatabase2():QMimeDatabase;
	const QMimeDatabase__MatchDefault: number;
	const QMimeDatabase__MatchExtension: number;
	const QMimeDatabase__MatchContent: number;
	interface QMimeType_ITF {
		QMimeType_PTR():QMimeType;
	}

	class QMimeType {
		___pointer: number;
		QMimeType_PTR():QMimeType;
		Pointer():number;
		SetPointer(p:number):void;
		Aliases():string[];
		AllAncestors():string[];
		Comment():string;
		FilterString():string;
		GenericIconName():string;
		GlobPatterns():string[];
		IconName():string;
		Inherits(mimeTypeName:string):boolean;
		IsDefault():boolean;
		IsValid():boolean;
		Name():string;
		ParentMimeTypes():string[];
		PreferredSuffix():string;
		Suffixes():string[];
		Swap(other:QMimeType_ITF):void;
		DestroyQMimeType():void;
	}
	function NewQMimeTypeFromPointer(ptr:number):QMimeType;
	function NewQMimeType():QMimeType;
	function NewQMimeType2(other:QMimeType_ITF):QMimeType;
	interface QModelIndex_ITF {
		QModelIndex_PTR():QModelIndex;
	}

	class QModelIndex {
		___pointer: number;
		QModelIndex_PTR():QModelIndex;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQModelIndex():void;
		Column():number;
		Data(role:number):QVariant;
		Flags():number;
		InternalId():number;
		InternalPointer():number;
		IsValid():boolean;
		Model():QAbstractItemModel;
		Parent():QModelIndex;
		Row():number;
		Sibling(row:number,column:number):QModelIndex;
		SiblingAtColumn(column:number):QModelIndex;
		SiblingAtRow(row:number):QModelIndex;
	}
	function NewQModelIndexFromPointer(ptr:number):QModelIndex;
	function NewQModelIndex():QModelIndex;
	interface QMutex_ITF extends QBasicMutex_ITF {
		QMutex_PTR():QMutex;
	}

	class QMutex extends QBasicMutex {
		___pointer: number;
		QMutex_PTR():QMutex;
		Pointer():number;
		SetPointer(p:number):void;
		Lock():void;
		TryLock(timeout:number):boolean;
		Try_lock():boolean;
		Unlock():void;
		DestroyQMutex():void;
	}
	function NewQMutexFromPointer(ptr:number):QMutex;
	function NewQMutex(mode:number):QMutex;
	function NewQMutexLocker(mutex:QMutex_ITF):QMutexLocker;
	const QMutex__NonRecursive: number;
	const QMutex__Recursive: number;
	interface QMutexLocker_ITF {
		QMutexLocker_PTR():QMutexLocker;
	}

	class QMutexLocker {
		___pointer: number;
		QMutexLocker_PTR():QMutexLocker;
		Pointer():number;
		SetPointer(p:number):void;
		Mutex():QMutex;
		Relock():void;
		Unlock():void;
		DestroyQMutexLocker():void;
	}
	function NewQMutexLockerFromPointer(ptr:number):QMutexLocker;
	function NewQMutexLocker(mutex:QMutex_ITF):QMutexLocker;
	interface QNoDebug_ITF {
		QNoDebug_PTR():QNoDebug;
	}

	class QNoDebug {
		___pointer: number;
		QNoDebug_PTR():QNoDebug;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQNoDebug():void;
	}
	function NewQNoDebugFromPointer(ptr:number):QNoDebug;
	interface QObject_ITF {
		QObject_PTR():QObject;
	}

	class QObject {
		___pointer: number;
		QObject_PTR():QObject;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectSignal(f:any,a:any,t:number):void;
		BlockSignals(block:boolean):boolean;
		ConnectChildEvent(f:(event:QChildEvent)=>void):void;
		DisconnectChildEvent():void;
		ChildEvent(event:QChildEvent_ITF):void;
		ChildEventDefault(event:QChildEvent_ITF):void;
		Children():QObject[];
		ConnectConnectNotify(f:(sign:QMetaMethod)=>void):void;
		DisconnectConnectNotify():void;
		ConnectNotify(sign:QMetaMethod_ITF):void;
		ConnectNotifyDefault(sign:QMetaMethod_ITF):void;
		ConnectCustomEvent(f:(event:QEvent)=>void):void;
		DisconnectCustomEvent():void;
		CustomEvent(event:QEvent_ITF):void;
		CustomEventDefault(event:QEvent_ITF):void;
		ConnectDeleteLater(f:()=>void):void;
		DisconnectDeleteLater():void;
		DeleteLater():void;
		DeleteLaterDefault():void;
		ConnectDestroyed(f:(obj:QObject)=>void):void;
		DisconnectDestroyed():void;
		Destroyed(obj:QObject_ITF):void;
		Disconnect(sender:QObject_ITF,sign:string,receiver:QObject_ITF,method:string):boolean;
		Disconnect2(sender:QObject_ITF,sign:QMetaMethod_ITF,receiver:QObject_ITF,method:QMetaMethod_ITF):boolean;
		Disconnect3(sign:string,receiver:QObject_ITF,method:string):boolean;
		Disconnect4(receiver:QObject_ITF,method:string):boolean;
		ConnectDisconnectNotify(f:(sign:QMetaMethod)=>void):void;
		DisconnectDisconnectNotify():void;
		DisconnectNotify(sign:QMetaMethod_ITF):void;
		DisconnectNotifyDefault(sign:QMetaMethod_ITF):void;
		DumpObjectInfo():void;
		DumpObjectTree():void;
		DynamicPropertyNames():QByteArray[];
		ConnectEvent(f:(e:QEvent)=>boolean):void;
		DisconnectEvent():void;
		Event(e:QEvent_ITF):boolean;
		EventDefault(e:QEvent_ITF):boolean;
		ConnectEventFilter(f:(watched:QObject,event:QEvent)=>boolean):void;
		DisconnectEventFilter():void;
		EventFilter(watched:QObject_ITF,event:QEvent_ITF):boolean;
		EventFilterDefault(watched:QObject_ITF,event:QEvent_ITF):boolean;
		FindChild(name:string,options:number):QObject;
		FindChildren(name:string,options:number):QObject[];
		FindChildren3(re:QRegularExpression_ITF,options:number):QObject[];
		Inherits(className:string):boolean;
		InstallEventFilter(filterObj:QObject_ITF):void;
		IsSignalConnected(sign:QMetaMethod_ITF):boolean;
		IsWidgetType():boolean;
		IsWindowType():boolean;
		KillTimer(id:number):void;
		ConnectMetaObject(f:()=>QMetaObject):void;
		DisconnectMetaObject():void;
		MetaObject():QMetaObject;
		MetaObjectDefault():QMetaObject;
		MoveToThread(targetThread:QThread_ITF):void;
		ObjectName():string;
		ConnectObjectNameChanged(f:(objectName:string)=>void):void;
		DisconnectObjectNameChanged():void;
		Parent():QObject;
		Property(name:string):QVariant;
		Receivers(sign:string):number;
		RemoveEventFilter(obj:QObject_ITF):void;
		Sender():QObject;
		SenderSignalIndex():number;
		SetObjectName(name:string):void;
		SetParent(parent:QObject_ITF):void;
		SetProperty(name:string,value:QVariant_ITF):boolean;
		SignalsBlocked():boolean;
		StartTimer(interval:number,timerType:number):number;
		Thread():QThread;
		ConnectTimerEvent(f:(event:QTimerEvent)=>void):void;
		DisconnectTimerEvent():void;
		TimerEvent(event:QTimerEvent_ITF):void;
		TimerEventDefault(event:QTimerEvent_ITF):void;
		Tr(sourceText:string,disambiguation:string,n:number):string;
		ConnectDestroyQObject(f:()=>void):void;
		DisconnectDestroyQObject():void;
		DestroyQObject():void;
		DestroyQObjectDefault():void;
		InvokeMethod(name:string,arg:QVariant_ITF):QVariant;
		ToVariant():QVariant;
	}
	function NewQObjectFromPointer(ptr:number):QObject;
	function NewQObject(parent:QObject_ITF):QObject;
	function QObject_Disconnect(sender:QObject_ITF,sign:string,receiver:QObject_ITF,method:string):boolean;
	function QObject_Disconnect2(sender:QObject_ITF,sign:QMetaMethod_ITF,receiver:QObject_ITF,method:QMetaMethod_ITF):boolean;
	function QObject_Tr(sourceText:string,disambiguation:string,n:number):string;
	function NewQObjectCleanupHandler():QObjectCleanupHandler;
	interface QObjectCleanupHandler_ITF extends QObject_ITF {
		QObjectCleanupHandler_PTR():QObjectCleanupHandler;
	}

	class QObjectCleanupHandler extends QObject {
		___pointer: number;
		QObjectCleanupHandler_PTR():QObjectCleanupHandler;
		Pointer():number;
		SetPointer(p:number):void;
		Add(object:QObject_ITF):QObject;
		Clear():void;
		IsEmpty():boolean;
		Remove(object:QObject_ITF):void;
		ConnectDestroyQObjectCleanupHandler(f:()=>void):void;
		DisconnectDestroyQObjectCleanupHandler():void;
		DestroyQObjectCleanupHandler():void;
		DestroyQObjectCleanupHandlerDefault():void;
	}
	function NewQObjectCleanupHandlerFromPointer(ptr:number):QObjectCleanupHandler;
	function NewQObjectCleanupHandler():QObjectCleanupHandler;
	interface QObjectData_ITF {
		QObjectData_PTR():QObjectData;
	}

	class QObjectData {
		___pointer: number;
		QObjectData_PTR():QObjectData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQObjectData():void;
	}
	function NewQObjectDataFromPointer(ptr:number):QObjectData;
	interface QObjectUserData_ITF {
		QObjectUserData_PTR():QObjectUserData;
	}

	class QObjectUserData {
		___pointer: number;
		QObjectUserData_PTR():QObjectUserData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQObjectUserData():void;
	}
	function NewQObjectUserDataFromPointer(ptr:number):QObjectUserData;
	interface QOperatingSystemVersion_ITF {
		QOperatingSystemVersion_PTR():QOperatingSystemVersion;
	}

	class QOperatingSystemVersion {
		___pointer: number;
		QOperatingSystemVersion_PTR():QOperatingSystemVersion;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOperatingSystemVersion():void;
		Current():QOperatingSystemVersion;
		CurrentType():number;
		MajorVersion():number;
		MicroVersion():number;
		MinorVersion():number;
		Name():string;
		SegmentCount():number;
		Type():number;
		Windows7():QOperatingSystemVersion;
		Windows8():QOperatingSystemVersion;
		Windows8_1():QOperatingSystemVersion;
		Windows10():QOperatingSystemVersion;
		OSXMavericks():QOperatingSystemVersion;
		OSXYosemite():QOperatingSystemVersion;
		OSXElCapitan():QOperatingSystemVersion;
		MacOSSierra():QOperatingSystemVersion;
		MacOSHighSierra():QOperatingSystemVersion;
		MacOSMojave():QOperatingSystemVersion;
		AndroidJellyBean():QOperatingSystemVersion;
		AndroidJellyBean_MR1():QOperatingSystemVersion;
		AndroidJellyBean_MR2():QOperatingSystemVersion;
		AndroidKitKat():QOperatingSystemVersion;
		AndroidLollipop():QOperatingSystemVersion;
		AndroidLollipop_MR1():QOperatingSystemVersion;
		AndroidMarshmallow():QOperatingSystemVersion;
		AndroidNougat():QOperatingSystemVersion;
		AndroidNougat_MR1():QOperatingSystemVersion;
		AndroidOreo():QOperatingSystemVersion;
	}
	function NewQOperatingSystemVersionFromPointer(ptr:number):QOperatingSystemVersion;
	function NewQOperatingSystemVersion2(osType:number,vmajor:number,vminor:number,vmicro:number):QOperatingSystemVersion;
	function QOperatingSystemVersion_Current():QOperatingSystemVersion;
	function QOperatingSystemVersion_CurrentType():number;
	function QOperatingSystemVersion_Windows7():QOperatingSystemVersion;
	function QOperatingSystemVersion_Windows8():QOperatingSystemVersion;
	function QOperatingSystemVersion_Windows8_1():QOperatingSystemVersion;
	function QOperatingSystemVersion_Windows10():QOperatingSystemVersion;
	function QOperatingSystemVersion_OSXMavericks():QOperatingSystemVersion;
	function QOperatingSystemVersion_OSXYosemite():QOperatingSystemVersion;
	function QOperatingSystemVersion_OSXElCapitan():QOperatingSystemVersion;
	function QOperatingSystemVersion_MacOSSierra():QOperatingSystemVersion;
	function QOperatingSystemVersion_MacOSHighSierra():QOperatingSystemVersion;
	function QOperatingSystemVersion_MacOSMojave():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidJellyBean():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidJellyBean_MR1():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidJellyBean_MR2():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidKitKat():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidLollipop():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidLollipop_MR1():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidMarshmallow():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidNougat():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidNougat_MR1():QOperatingSystemVersion;
	function QOperatingSystemVersion_AndroidOreo():QOperatingSystemVersion;
	function NewQOperatingSystemVersion(other:QOperatingSystemVersion_ITF):QOperatingSystemVersion;
	const QOperatingSystemVersion__Unknown: number;
	const QOperatingSystemVersion__Windows: number;
	const QOperatingSystemVersion__MacOS: number;
	const QOperatingSystemVersion__IOS: number;
	const QOperatingSystemVersion__TvOS: number;
	const QOperatingSystemVersion__WatchOS: number;
	const QOperatingSystemVersion__Android: number;
	interface QParallelAnimationGroup_ITF extends QAnimationGroup_ITF {
		QParallelAnimationGroup_PTR():QParallelAnimationGroup;
	}

	class QParallelAnimationGroup extends QAnimationGroup {
		___pointer: number;
		QParallelAnimationGroup_PTR():QParallelAnimationGroup;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDuration(f:()=>number):void;
		DisconnectDuration():void;
		Duration():number;
		DurationDefault():number;
		ConnectUpdateCurrentTime(f:(currentTime:number)=>void):void;
		DisconnectUpdateCurrentTime():void;
		UpdateCurrentTime(currentTime:number):void;
		UpdateCurrentTimeDefault(currentTime:number):void;
		ConnectDestroyQParallelAnimationGroup(f:()=>void):void;
		DisconnectDestroyQParallelAnimationGroup():void;
		DestroyQParallelAnimationGroup():void;
		DestroyQParallelAnimationGroupDefault():void;
	}
	function NewQParallelAnimationGroupFromPointer(ptr:number):QParallelAnimationGroup;
	function NewQParallelAnimationGroup(parent:QObject_ITF):QParallelAnimationGroup;
	interface QPauseAnimation_ITF extends QAbstractAnimation_ITF {
		QPauseAnimation_PTR():QPauseAnimation;
	}

	class QPauseAnimation extends QAbstractAnimation {
		___pointer: number;
		QPauseAnimation_PTR():QPauseAnimation;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDuration(f:()=>number):void;
		DisconnectDuration():void;
		Duration():number;
		DurationDefault():number;
		SetDuration(msecs:number):void;
		ConnectUpdateCurrentTime(f:(vi:number)=>void):void;
		DisconnectUpdateCurrentTime():void;
		UpdateCurrentTime(vi:number):void;
		UpdateCurrentTimeDefault(vi:number):void;
		ConnectDestroyQPauseAnimation(f:()=>void):void;
		DisconnectDestroyQPauseAnimation():void;
		DestroyQPauseAnimation():void;
		DestroyQPauseAnimationDefault():void;
	}
	function NewQPauseAnimationFromPointer(ptr:number):QPauseAnimation;
	function NewQPauseAnimation(parent:QObject_ITF):QPauseAnimation;
	function NewQPauseAnimation2(msecs:number,parent:QObject_ITF):QPauseAnimation;
	interface QPersistentModelIndex_ITF {
		QPersistentModelIndex_PTR():QPersistentModelIndex;
	}

	class QPersistentModelIndex {
		___pointer: number;
		QPersistentModelIndex_PTR():QPersistentModelIndex;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPersistentModelIndex():void;
		Column():number;
		Data(role:number):QVariant;
		Flags():number;
		IsValid():boolean;
		Model():QAbstractItemModel;
		Parent():QModelIndex;
		Row():number;
		Sibling(row:number,column:number):QModelIndex;
		Swap(other:QPersistentModelIndex_ITF):void;
	}
	function NewQPersistentModelIndexFromPointer(ptr:number):QPersistentModelIndex;
	function NewQPersistentModelIndex2(index:QModelIndex_ITF):QPersistentModelIndex;
	function NewQPersistentModelIndex3(other:QPersistentModelIndex_ITF):QPersistentModelIndex;
	function NewQPersistentModelIndex4(other:QPersistentModelIndex_ITF):QPersistentModelIndex;
	interface QPluginLoader_ITF extends QObject_ITF {
		QPluginLoader_PTR():QPluginLoader;
	}

	class QPluginLoader extends QObject {
		___pointer: number;
		QPluginLoader_PTR():QPluginLoader;
		Pointer():number;
		SetPointer(p:number):void;
		ErrorString():string;
		FileName():string;
		Instance():QObject;
		IsLoaded():boolean;
		Load():boolean;
		LoadHints():number;
		MetaData():QJsonObject;
		SetFileName(fileName:string):void;
		SetLoadHints(loadHints:number):void;
		StaticInstances():QObject[];
		Unload():boolean;
		ConnectDestroyQPluginLoader(f:()=>void):void;
		DisconnectDestroyQPluginLoader():void;
		DestroyQPluginLoader():void;
		DestroyQPluginLoaderDefault():void;
	}
	function NewQPluginLoaderFromPointer(ptr:number):QPluginLoader;
	function NewQPluginLoader(parent:QObject_ITF):QPluginLoader;
	function NewQPluginLoader2(fileName:string,parent:QObject_ITF):QPluginLoader;
	function QPluginLoader_StaticInstances():QObject[];
	interface QPoint_ITF {
		QPoint_PTR():QPoint;
	}

	class QPoint {
		___pointer: number;
		QPoint_PTR():QPoint;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPoint():void;
		DotProduct(p1:QPoint_ITF,p2:QPoint_ITF):number;
		IsNull():boolean;
		ManhattanLength():number;
		Rx():number;
		Ry():number;
		SetX(x:number):void;
		SetY(y:number):void;
		X():number;
		Y():number;
	}
	function NewQPointFromPointer(ptr:number):QPoint;
	function NewQPoint():QPoint;
	function NewQPoint2(xpos:number,ypos:number):QPoint;
	function QPoint_DotProduct(p1:QPoint_ITF,p2:QPoint_ITF):number;
	function NewQPointF():QPointF;
	function NewQPointF2(point:QPoint_ITF):QPointF;
	function NewQPointF3(xpos:number,ypos:number):QPointF;
	interface QPointF_ITF {
		QPointF_PTR():QPointF;
	}

	class QPointF {
		___pointer: number;
		QPointF_PTR():QPointF;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPointF():void;
		DotProduct(p1:QPointF_ITF,p2:QPointF_ITF):number;
		IsNull():boolean;
		ManhattanLength():number;
		Rx():number;
		Ry():number;
		SetX(x:number):void;
		SetY(y:number):void;
		ToPoint():QPoint;
		X():number;
		Y():number;
	}
	function NewQPointFFromPointer(ptr:number):QPointF;
	function NewQPointF():QPointF;
	function NewQPointF2(point:QPoint_ITF):QPointF;
	function NewQPointF3(xpos:number,ypos:number):QPointF;
	function QPointF_DotProduct(p1:QPointF_ITF,p2:QPointF_ITF):number;
	interface QProcess_ITF extends QIODevice_ITF {
		QProcess_PTR():QProcess;
	}

	class QProcess extends QIODevice {
		___pointer: number;
		QProcess_PTR():QProcess;
		Pointer():number;
		SetPointer(p:number):void;
		Arguments():string[];
		CloseReadChannel(channel:number):void;
		CloseWriteChannel():void;
		Error():number;
		ConnectErrorOccurred(f:(error:number)=>void):void;
		DisconnectErrorOccurred():void;
		ErrorOccurred(error:number):void;
		Execute(program:string,arguments:string[]):number;
		Execute2(command:string):number;
		ExitCode():number;
		ExitStatus():number;
		ConnectFinished(f:(exitCode:number,exitStatus:number)=>void):void;
		DisconnectFinished():void;
		Finished(exitCode:number,exitStatus:number):void;
		InputChannelMode():number;
		ConnectKill(f:()=>void):void;
		DisconnectKill():void;
		Kill():void;
		KillDefault():void;
		NativeArguments():string;
		NullDevice():string;
		ProcessChannelMode():number;
		ProcessEnvironment():QProcessEnvironment;
		ProcessId():number;
		Program():string;
		ReadAllStandardError():QByteArray;
		ReadAllStandardOutput():QByteArray;
		ReadChannel():number;
		ConnectReadData(f:(data:string,maxlen:number)=>number):void;
		DisconnectReadData():void;
		ReadData(data:string,maxlen:number):number;
		ReadDataDefault(data:string,maxlen:number):number;
		ConnectReadyReadStandardError(f:()=>void):void;
		DisconnectReadyReadStandardError():void;
		ConnectReadyReadStandardOutput(f:()=>void):void;
		DisconnectReadyReadStandardOutput():void;
		SetArguments(arguments:string[]):void;
		SetInputChannelMode(mode:number):void;
		SetNativeArguments(arguments:string):void;
		SetProcessChannelMode(mode:number):void;
		SetProcessEnvironment(environment:QProcessEnvironment_ITF):void;
		SetProcessState(state:number):void;
		SetProgram(program:string):void;
		SetReadChannel(channel:number):void;
		SetStandardErrorFile(fileName:string,mode:number):void;
		SetStandardInputFile(fileName:string):void;
		SetStandardOutputFile(fileName:string,mode:number):void;
		SetStandardOutputProcess(destination:QProcess_ITF):void;
		SetWorkingDirectory(dir:string):void;
		ConnectSetupChildProcess(f:()=>void):void;
		DisconnectSetupChildProcess():void;
		SetupChildProcess():void;
		SetupChildProcessDefault():void;
		Start(program:string,arguments:string[],mode:number):void;
		Start2(command:string,mode:number):void;
		Start3(mode:number):void;
		StartDetached(pid:number):boolean;
		StartDetached2(program:string,arguments:string[],workingDirectory:string,pid:number):boolean;
		StartDetached3(command:string):boolean;
		ConnectStarted(f:()=>void):void;
		DisconnectStarted():void;
		State():number;
		ConnectStateChanged(f:(newState:number)=>void):void;
		DisconnectStateChanged():void;
		SystemEnvironment():string[];
		ConnectTerminate(f:()=>void):void;
		DisconnectTerminate():void;
		Terminate():void;
		TerminateDefault():void;
		WaitForFinished(msecs:number):boolean;
		WaitForStarted(msecs:number):boolean;
		WorkingDirectory():string;
		ConnectWriteData(f:(data:string,l:number)=>number):void;
		DisconnectWriteData():void;
		WriteData(data:string,l:number):number;
		WriteDataDefault(data:string,l:number):number;
		ConnectDestroyQProcess(f:()=>void):void;
		DisconnectDestroyQProcess():void;
		DestroyQProcess():void;
		DestroyQProcessDefault():void;
	}
	function NewQProcessFromPointer(ptr:number):QProcess;
	function NewQProcess(parent:QObject_ITF):QProcess;
	function QProcess_Execute(program:string,arguments:string[]):number;
	function QProcess_Execute2(command:string):number;
	function QProcess_NullDevice():string;
	function QProcess_StartDetached2(program:string,arguments:string[],workingDirectory:string,pid:number):boolean;
	function QProcess_StartDetached3(command:string):boolean;
	function QProcess_SystemEnvironment():string[];
	function NewQProcessEnvironment():QProcessEnvironment;
	function NewQProcessEnvironment2(other:QProcessEnvironment_ITF):QProcessEnvironment;
	const QProcess__FailedToStart: number;
	const QProcess__Crashed: number;
	const QProcess__Timedout: number;
	const QProcess__ReadError: number;
	const QProcess__WriteError: number;
	const QProcess__UnknownError: number;
	const QProcess__NotRunning: number;
	const QProcess__Starting: number;
	const QProcess__Running: number;
	const QProcess__StandardOutput: number;
	const QProcess__StandardError: number;
	const QProcess__SeparateChannels: number;
	const QProcess__MergedChannels: number;
	const QProcess__ForwardedChannels: number;
	const QProcess__ForwardedOutputChannel: number;
	const QProcess__ForwardedErrorChannel: number;
	const QProcess__ManagedInputChannel: number;
	const QProcess__ForwardedInputChannel: number;
	const QProcess__NormalExit: number;
	const QProcess__CrashExit: number;
	interface QProcessEnvironment_ITF {
		QProcessEnvironment_PTR():QProcessEnvironment;
	}

	class QProcessEnvironment {
		___pointer: number;
		QProcessEnvironment_PTR():QProcessEnvironment;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():void;
		Contains(name:string):boolean;
		Insert(name:string,value:string):void;
		Insert2(e:QProcessEnvironment_ITF):void;
		IsEmpty():boolean;
		Keys():string[];
		Remove(name:string):void;
		Swap(other:QProcessEnvironment_ITF):void;
		SystemEnvironment():QProcessEnvironment;
		ToStringList():string[];
		Value(name:string,defaultValue:string):string;
		DestroyQProcessEnvironment():void;
	}
	function NewQProcessEnvironmentFromPointer(ptr:number):QProcessEnvironment;
	function NewQProcessEnvironment():QProcessEnvironment;
	function NewQProcessEnvironment2(other:QProcessEnvironment_ITF):QProcessEnvironment;
	function QProcessEnvironment_SystemEnvironment():QProcessEnvironment;
	interface QPropertyAnimation_ITF extends QVariantAnimation_ITF {
		QPropertyAnimation_PTR():QPropertyAnimation;
	}

	class QPropertyAnimation extends QVariantAnimation {
		___pointer: number;
		QPropertyAnimation_PTR():QPropertyAnimation;
		Pointer():number;
		SetPointer(p:number):void;
		PropertyName():QByteArray;
		SetPropertyName(propertyName:QByteArray_ITF):void;
		SetTargetObject(target:QObject_ITF):void;
		TargetObject():QObject;
		ConnectDestroyQPropertyAnimation(f:()=>void):void;
		DisconnectDestroyQPropertyAnimation():void;
		DestroyQPropertyAnimation():void;
		DestroyQPropertyAnimationDefault():void;
	}
	function NewQPropertyAnimationFromPointer(ptr:number):QPropertyAnimation;
	function NewQPropertyAnimation(parent:QObject_ITF):QPropertyAnimation;
	function NewQPropertyAnimation2(target:QObject_ITF,propertyName:QByteArray_ITF,parent:QObject_ITF):QPropertyAnimation;
	interface QRandomGenerator_ITF {
		QRandomGenerator_PTR():QRandomGenerator;
	}

	class QRandomGenerator {
		___pointer: number;
		QRandomGenerator_PTR():QRandomGenerator;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRandomGenerator():void;
		Bounded(highest:number):number;
		Bounded2(highest:number):number;
		Bounded3(highest:number):number;
		Bounded4(lowest:number,highest:number):number;
		Bounded5(lowest:number,highest:number):number;
		Discard(z:number):void;
		Generate():number;
		Generate64():number;
		GenerateDouble():number;
		Global():QRandomGenerator;
		SecurelySeeded():QRandomGenerator;
		Seed(seed:number):void;
		System():QRandomGenerator;
	}
	function NewQRandomGeneratorFromPointer(ptr:number):QRandomGenerator;
	function NewQRandomGenerator(seedValue:number):QRandomGenerator;
	function NewQRandomGenerator5(begi:number,end:number):QRandomGenerator;
	function NewQRandomGenerator6(other:QRandomGenerator_ITF):QRandomGenerator;
	function QRandomGenerator_Global():QRandomGenerator;
	function QRandomGenerator_SecurelySeeded():QRandomGenerator;
	function QRandomGenerator_System():QRandomGenerator;
	interface QRandomGenerator64_ITF extends QRandomGenerator_ITF {
		QRandomGenerator64_PTR():QRandomGenerator64;
	}

	class QRandomGenerator64 extends QRandomGenerator {
		___pointer: number;
		QRandomGenerator64_PTR():QRandomGenerator64;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRandomGenerator64():void;
		Generate():number;
	}
	function NewQRandomGenerator64FromPointer(ptr:number):QRandomGenerator64;
	interface QReadLocker_ITF {
		QReadLocker_PTR():QReadLocker;
	}

	class QReadLocker {
		___pointer: number;
		QReadLocker_PTR():QReadLocker;
		Pointer():number;
		SetPointer(p:number):void;
		ReadWriteLock():QReadWriteLock;
		Relock():void;
		Unlock():void;
		DestroyQReadLocker():void;
	}
	function NewQReadLockerFromPointer(ptr:number):QReadLocker;
	function NewQReadLocker(lock:QReadWriteLock_ITF):QReadLocker;
	interface QReadWriteLock_ITF {
		QReadWriteLock_PTR():QReadWriteLock;
	}

	class QReadWriteLock {
		___pointer: number;
		QReadWriteLock_PTR():QReadWriteLock;
		Pointer():number;
		SetPointer(p:number):void;
		LockForRead():void;
		LockForWrite():void;
		TryLockForRead():boolean;
		TryLockForRead2(timeout:number):boolean;
		TryLockForWrite():boolean;
		TryLockForWrite2(timeout:number):boolean;
		Unlock():void;
		DestroyQReadWriteLock():void;
	}
	function NewQReadWriteLockFromPointer(ptr:number):QReadWriteLock;
	function NewQReadWriteLock(recursionMode:number):QReadWriteLock;
	const QReadWriteLock__NonRecursive: number;
	const QReadWriteLock__Recursive: number;
	interface QRect_ITF {
		QRect_PTR():QRect;
	}

	class QRect {
		___pointer: number;
		QRect_PTR():QRect;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRect():void;
		Adjust(dx1:number,dy1:number,dx2:number,dy2:number):void;
		Adjusted(dx1:number,dy1:number,dx2:number,dy2:number):QRect;
		Bottom():number;
		BottomLeft():QPoint;
		BottomRight():QPoint;
		Center():QPoint;
		Contains(point:QPoint_ITF,proper:boolean):boolean;
		Contains2(rectangle:QRect_ITF,proper:boolean):boolean;
		Contains3(x:number,y:number):boolean;
		Contains4(x:number,y:number,proper:boolean):boolean;
		GetCoords(x1:number,y1:number,x2:number,y2:number):void;
		GetRect(x:number,y:number,width:number,height:number):void;
		Height():number;
		Intersected(rectangle:QRect_ITF):QRect;
		Intersects(rectangle:QRect_ITF):boolean;
		IsEmpty():boolean;
		IsNull():boolean;
		IsValid():boolean;
		Left():number;
		MarginsAdded(margins:QMargins_ITF):QRect;
		MarginsRemoved(margins:QMargins_ITF):QRect;
		MoveBottom(y:number):void;
		MoveBottomLeft(position:QPoint_ITF):void;
		MoveBottomRight(position:QPoint_ITF):void;
		MoveCenter(position:QPoint_ITF):void;
		MoveLeft(x:number):void;
		MoveRight(x:number):void;
		MoveTo(x:number,y:number):void;
		MoveTo2(position:QPoint_ITF):void;
		MoveTop(y:number):void;
		MoveTopLeft(position:QPoint_ITF):void;
		MoveTopRight(position:QPoint_ITF):void;
		Normalized():QRect;
		Right():number;
		SetBottom(y:number):void;
		SetBottomLeft(position:QPoint_ITF):void;
		SetBottomRight(position:QPoint_ITF):void;
		SetCoords(x1:number,y1:number,x2:number,y2:number):void;
		SetHeight(height:number):void;
		SetLeft(x:number):void;
		SetRect(x:number,y:number,width:number,height:number):void;
		SetRight(x:number):void;
		SetSize(size:QSize_ITF):void;
		SetTop(y:number):void;
		SetTopLeft(position:QPoint_ITF):void;
		SetTopRight(position:QPoint_ITF):void;
		SetWidth(width:number):void;
		SetX(x:number):void;
		SetY(y:number):void;
		Size():QSize;
		Top():number;
		TopLeft():QPoint;
		TopRight():QPoint;
		Translate(dx:number,dy:number):void;
		Translate2(offset:QPoint_ITF):void;
		Translated(dx:number,dy:number):QRect;
		Translated2(offset:QPoint_ITF):QRect;
		Transposed():QRect;
		United(rectangle:QRect_ITF):QRect;
		Width():number;
		X():number;
		Y():number;
	}
	function NewQRectFromPointer(ptr:number):QRect;
	function NewQRect():QRect;
	function NewQRect2(topLeft:QPoint_ITF,bottomRight:QPoint_ITF):QRect;
	function NewQRect3(topLeft:QPoint_ITF,size:QSize_ITF):QRect;
	function NewQRect4(x:number,y:number,width:number,height:number):QRect;
	function NewQRectF():QRectF;
	function NewQRectF2(topLeft:QPointF_ITF,size:QSizeF_ITF):QRectF;
	function NewQRectF3(topLeft:QPointF_ITF,bottomRight:QPointF_ITF):QRectF;
	function NewQRectF4(x:number,y:number,width:number,height:number):QRectF;
	function NewQRectF5(rectangle:QRect_ITF):QRectF;
	interface QRectF_ITF {
		QRectF_PTR():QRectF;
	}

	class QRectF {
		___pointer: number;
		QRectF_PTR():QRectF;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRectF():void;
		Adjust(dx1:number,dy1:number,dx2:number,dy2:number):void;
		Adjusted(dx1:number,dy1:number,dx2:number,dy2:number):QRectF;
		Bottom():number;
		BottomLeft():QPointF;
		BottomRight():QPointF;
		Center():QPointF;
		Contains(point:QPointF_ITF):boolean;
		Contains2(rectangle:QRectF_ITF):boolean;
		Contains3(x:number,y:number):boolean;
		GetCoords(x1:number,y1:number,x2:number,y2:number):void;
		GetRect(x:number,y:number,width:number,height:number):void;
		Height():number;
		Intersected(rectangle:QRectF_ITF):QRectF;
		Intersects(rectangle:QRectF_ITF):boolean;
		IsEmpty():boolean;
		IsNull():boolean;
		IsValid():boolean;
		Left():number;
		MarginsAdded(margins:QMarginsF_ITF):QRectF;
		MarginsRemoved(margins:QMarginsF_ITF):QRectF;
		MoveBottom(y:number):void;
		MoveBottomLeft(position:QPointF_ITF):void;
		MoveBottomRight(position:QPointF_ITF):void;
		MoveCenter(position:QPointF_ITF):void;
		MoveLeft(x:number):void;
		MoveRight(x:number):void;
		MoveTo(x:number,y:number):void;
		MoveTo2(position:QPointF_ITF):void;
		MoveTop(y:number):void;
		MoveTopLeft(position:QPointF_ITF):void;
		MoveTopRight(position:QPointF_ITF):void;
		Normalized():QRectF;
		Right():number;
		SetBottom(y:number):void;
		SetBottomLeft(position:QPointF_ITF):void;
		SetBottomRight(position:QPointF_ITF):void;
		SetCoords(x1:number,y1:number,x2:number,y2:number):void;
		SetHeight(height:number):void;
		SetLeft(x:number):void;
		SetRect(x:number,y:number,width:number,height:number):void;
		SetRight(x:number):void;
		SetSize(size:QSizeF_ITF):void;
		SetTop(y:number):void;
		SetTopLeft(position:QPointF_ITF):void;
		SetTopRight(position:QPointF_ITF):void;
		SetWidth(width:number):void;
		SetX(x:number):void;
		SetY(y:number):void;
		Size():QSizeF;
		ToAlignedRect():QRect;
		ToRect():QRect;
		Top():number;
		TopLeft():QPointF;
		TopRight():QPointF;
		Translate(dx:number,dy:number):void;
		Translate2(offset:QPointF_ITF):void;
		Translated(dx:number,dy:number):QRectF;
		Translated2(offset:QPointF_ITF):QRectF;
		Transposed():QRectF;
		United(rectangle:QRectF_ITF):QRectF;
		Width():number;
		X():number;
		Y():number;
	}
	function NewQRectFFromPointer(ptr:number):QRectF;
	function NewQRectF():QRectF;
	function NewQRectF2(topLeft:QPointF_ITF,size:QSizeF_ITF):QRectF;
	function NewQRectF3(topLeft:QPointF_ITF,bottomRight:QPointF_ITF):QRectF;
	function NewQRectF4(x:number,y:number,width:number,height:number):QRectF;
	function NewQRectF5(rectangle:QRect_ITF):QRectF;
	interface QRegExp_ITF {
		QRegExp_PTR():QRegExp;
	}

	class QRegExp {
		___pointer: number;
		QRegExp_PTR():QRegExp;
		Pointer():number;
		SetPointer(p:number):void;
		Cap(nth:number):string;
		CaptureCount():number;
		CapturedTexts():string[];
		CaseSensitivity():number;
		ErrorString():string;
		Escape(str:string):string;
		ExactMatch(str:string):boolean;
		IndexIn(str:string,offset:number,caretMode:number):number;
		IsEmpty():boolean;
		IsMinimal():boolean;
		IsValid():boolean;
		LastIndexIn(str:string,offset:number,caretMode:number):number;
		MatchedLength():number;
		Pattern():string;
		PatternSyntax():number;
		Pos(nth:number):number;
		SetCaseSensitivity(cs:number):void;
		SetMinimal(minimal:boolean):void;
		SetPattern(pattern:string):void;
		SetPatternSyntax(syntax:number):void;
		Swap(other:QRegExp_ITF):void;
		DestroyQRegExp():void;
	}
	function NewQRegExpFromPointer(ptr:number):QRegExp;
	function NewQRegExp():QRegExp;
	function NewQRegExp2(pattern:string,cs:number,syntax:number):QRegExp;
	function NewQRegExp3(rx:QRegExp_ITF):QRegExp;
	function QRegExp_Escape(str:string):string;
	const QRegExp__RegExp: number;
	const QRegExp__Wildcard: number;
	const QRegExp__FixedString: number;
	const QRegExp__RegExp2: number;
	const QRegExp__WildcardUnix: number;
	const QRegExp__W3CXmlSchema11: number;
	const QRegExp__CaretAtZero: number;
	const QRegExp__CaretAtOffset: number;
	const QRegExp__CaretWontMatch: number;
	interface QRegularExpression_ITF {
		QRegularExpression_PTR():QRegularExpression;
	}

	class QRegularExpression {
		___pointer: number;
		QRegularExpression_PTR():QRegularExpression;
		Pointer():number;
		SetPointer(p:number):void;
		AnchoredPattern(expression:string):string;
		CaptureCount():number;
		ErrorString():string;
		Escape(str:string):string;
		GlobalMatch(subject:string,offset:number,matchType:number,matchOptions:number):QRegularExpressionMatchIterator;
		GlobalMatch2(subjectRef:QStringRef_ITF,offset:number,matchType:number,matchOptions:number):QRegularExpressionMatchIterator;
		IsValid():boolean;
		Match(subject:string,offset:number,matchType:number,matchOptions:number):QRegularExpressionMatch;
		Match2(subjectRef:QStringRef_ITF,offset:number,matchType:number,matchOptions:number):QRegularExpressionMatch;
		NamedCaptureGroups():string[];
		Optimize():void;
		Pattern():string;
		PatternErrorOffset():number;
		PatternOptions():number;
		SetPattern(pattern:string):void;
		SetPatternOptions(options:number):void;
		Swap(other:QRegularExpression_ITF):void;
		WildcardToRegularExpression(pattern:string):string;
		DestroyQRegularExpression():void;
	}
	function NewQRegularExpressionFromPointer(ptr:number):QRegularExpression;
	function NewQRegularExpression():QRegularExpression;
	function NewQRegularExpression2(pattern:string,options:number):QRegularExpression;
	function NewQRegularExpression3(re:QRegularExpression_ITF):QRegularExpression;
	function QRegularExpression_AnchoredPattern(expression:string):string;
	function QRegularExpression_Escape(str:string):string;
	function QRegularExpression_WildcardToRegularExpression(pattern:string):string;
	function NewQRegularExpressionMatch():QRegularExpressionMatch;
	function NewQRegularExpressionMatch2(match:QRegularExpressionMatch_ITF):QRegularExpressionMatch;
	const QRegularExpression__NoPatternOption: number;
	const QRegularExpression__CaseInsensitiveOption: number;
	const QRegularExpression__DotMatchesEverythingOption: number;
	const QRegularExpression__MultilineOption: number;
	const QRegularExpression__ExtendedPatternSyntaxOption: number;
	const QRegularExpression__InvertedGreedinessOption: number;
	const QRegularExpression__DontCaptureOption: number;
	const QRegularExpression__UseUnicodePropertiesOption: number;
	const QRegularExpression__OptimizeOnFirstUsageOption: number;
	const QRegularExpression__DontAutomaticallyOptimizeOption: number;
	const QRegularExpression__NormalMatch: number;
	const QRegularExpression__PartialPreferCompleteMatch: number;
	const QRegularExpression__PartialPreferFirstMatch: number;
	const QRegularExpression__NoMatch: number;
	const QRegularExpression__NoMatchOption: number;
	const QRegularExpression__AnchoredMatchOption: number;
	const QRegularExpression__DontCheckSubjectStringMatchOption: number;
	interface QRegularExpressionMatch_ITF {
		QRegularExpressionMatch_PTR():QRegularExpressionMatch;
	}

	class QRegularExpressionMatch {
		___pointer: number;
		QRegularExpressionMatch_PTR():QRegularExpressionMatch;
		Pointer():number;
		SetPointer(p:number):void;
		Captured(nth:number):string;
		Captured2(name:string):string;
		Captured3(name:QStringView_ITF):string;
		CapturedEnd(nth:number):number;
		CapturedEnd2(name:string):number;
		CapturedEnd3(name:QStringView_ITF):number;
		CapturedLength(nth:number):number;
		CapturedLength2(name:string):number;
		CapturedLength3(name:QStringView_ITF):number;
		CapturedRef(nth:number):QStringRef;
		CapturedRef2(name:string):QStringRef;
		CapturedRef3(name:QStringView_ITF):QStringRef;
		CapturedStart(nth:number):number;
		CapturedStart2(name:string):number;
		CapturedStart3(name:QStringView_ITF):number;
		CapturedTexts():string[];
		CapturedView(nth:number):QStringView;
		CapturedView2(name:QStringView_ITF):QStringView;
		HasMatch():boolean;
		HasPartialMatch():boolean;
		IsValid():boolean;
		LastCapturedIndex():number;
		MatchOptions():number;
		MatchType():number;
		RegularExpression():QRegularExpression;
		Swap(other:QRegularExpressionMatch_ITF):void;
		DestroyQRegularExpressionMatch():void;
	}
	function NewQRegularExpressionMatchFromPointer(ptr:number):QRegularExpressionMatch;
	function NewQRegularExpressionMatch():QRegularExpressionMatch;
	function NewQRegularExpressionMatch2(match:QRegularExpressionMatch_ITF):QRegularExpressionMatch;
	interface QResource_ITF {
		QResource_PTR():QResource;
	}

	class QResource {
		___pointer: number;
		QResource_PTR():QResource;
		Pointer():number;
		SetPointer(p:number):void;
		AbsoluteFilePath():string;
		Children():string[];
		CompressionAlgorithm():number;
		Data():string;
		FileName():string;
		IsCompressed():boolean;
		IsDir():boolean;
		IsFile():boolean;
		IsValid():boolean;
		LastModified():QDateTime;
		Locale():QLocale;
		RegisterResource(rccFileName:string,mapRoot:string):boolean;
		RegisterResource2(rccData:string,mapRoot:string):boolean;
		SetFileName(file:string):void;
		SetLocale(locale:QLocale_ITF):void;
		Size():number;
		UnregisterResource(rccFileName:string,mapRoot:string):boolean;
		UnregisterResource2(rccData:string,mapRoot:string):boolean;
		DestroyQResource():void;
	}
	function NewQResourceFromPointer(ptr:number):QResource;
	function NewQResource(file:string,locale:QLocale_ITF):QResource;
	function QResource_RegisterResource(rccFileName:string,mapRoot:string):boolean;
	function QResource_RegisterResource2(rccData:string,mapRoot:string):boolean;
	function QResource_UnregisterResource(rccFileName:string,mapRoot:string):boolean;
	function QResource_UnregisterResource2(rccData:string,mapRoot:string):boolean;
	const QResource__NoCompression: number;
	const QResource__ZlibCompression: number;
	const QResource__ZstdCompression: number;
	interface QReturnArgument_ITF extends QGenericReturnArgument_ITF {
		QReturnArgument_PTR():QReturnArgument;
	}

	class QReturnArgument extends QGenericReturnArgument {
		___pointer: number;
		QReturnArgument_PTR():QReturnArgument;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQReturnArgument():void;
	}
	function NewQReturnArgumentFromPointer(ptr:number):QReturnArgument;
	interface QRunnable_ITF {
		QRunnable_PTR():QRunnable;
	}

	class QRunnable {
		___pointer: number;
		QRunnable_PTR():QRunnable;
		Pointer():number;
		SetPointer(p:number):void;
		AutoDelete():boolean;
		ConnectRun(f:()=>void):void;
		DisconnectRun():void;
		Run():void;
		SetAutoDelete(autoDelete:boolean):void;
		ConnectDestroyQRunnable(f:()=>void):void;
		DisconnectDestroyQRunnable():void;
		DestroyQRunnable():void;
		DestroyQRunnableDefault():void;
	}
	function NewQRunnableFromPointer(ptr:number):QRunnable;
	function NewQRunnable():QRunnable;
	interface QSaveFile_ITF extends QFileDevice_ITF {
		QSaveFile_PTR():QSaveFile;
	}

	class QSaveFile extends QFileDevice {
		___pointer: number;
		QSaveFile_PTR():QSaveFile;
		Pointer():number;
		SetPointer(p:number):void;
		CancelWriting():void;
		Commit():boolean;
		DirectWriteFallback():boolean;
		SetDirectWriteFallback(enabled:boolean):void;
		SetFileName(name:string):void;
		ConnectDestroyQSaveFile(f:()=>void):void;
		DisconnectDestroyQSaveFile():void;
		DestroyQSaveFile():void;
		DestroyQSaveFileDefault():void;
	}
	function NewQSaveFileFromPointer(ptr:number):QSaveFile;
	function NewQSaveFile(name:string):QSaveFile;
	function NewQSaveFile2(parent:QObject_ITF):QSaveFile;
	function NewQSaveFile3(name:string,parent:QObject_ITF):QSaveFile;
	interface QScopedPointerArrayDeleter_ITF {
		QScopedPointerArrayDeleter_PTR():QScopedPointerArrayDeleter;
	}

	class QScopedPointerArrayDeleter {
		___pointer: number;
		QScopedPointerArrayDeleter_PTR():QScopedPointerArrayDeleter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQScopedPointerArrayDeleter():void;
	}
	function NewQScopedPointerArrayDeleterFromPointer(ptr:number):QScopedPointerArrayDeleter;
	interface QScopedPointerDeleter_ITF {
		QScopedPointerDeleter_PTR():QScopedPointerDeleter;
	}

	class QScopedPointerDeleter {
		___pointer: number;
		QScopedPointerDeleter_PTR():QScopedPointerDeleter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQScopedPointerDeleter():void;
	}
	function NewQScopedPointerDeleterFromPointer(ptr:number):QScopedPointerDeleter;
	interface QScopedPointerObjectDeleteLater_ITF {
		QScopedPointerObjectDeleteLater_PTR():QScopedPointerObjectDeleteLater;
	}

	class QScopedPointerObjectDeleteLater {
		___pointer: number;
		QScopedPointerObjectDeleteLater_PTR():QScopedPointerObjectDeleteLater;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQScopedPointerObjectDeleteLater():void;
	}
	function NewQScopedPointerObjectDeleteLaterFromPointer(ptr:number):QScopedPointerObjectDeleteLater;
	interface QScopedPointerPodDeleter_ITF {
		QScopedPointerPodDeleter_PTR():QScopedPointerPodDeleter;
	}

	class QScopedPointerPodDeleter {
		___pointer: number;
		QScopedPointerPodDeleter_PTR():QScopedPointerPodDeleter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQScopedPointerPodDeleter():void;
	}
	function NewQScopedPointerPodDeleterFromPointer(ptr:number):QScopedPointerPodDeleter;
	interface QSemaphore_ITF {
		QSemaphore_PTR():QSemaphore;
	}

	class QSemaphore {
		___pointer: number;
		QSemaphore_PTR():QSemaphore;
		Pointer():number;
		SetPointer(p:number):void;
		Acquire(n:number):void;
		Available():number;
		Release(n:number):void;
		TryAcquire(n:number):boolean;
		TryAcquire2(n:number,timeout:number):boolean;
		DestroyQSemaphore():void;
	}
	function NewQSemaphoreFromPointer(ptr:number):QSemaphore;
	function NewQSemaphore(n:number):QSemaphore;
	function NewQSemaphoreReleaser():QSemaphoreReleaser;
	function NewQSemaphoreReleaser2(sem:QSemaphore_ITF,n:number):QSemaphoreReleaser;
	function NewQSemaphoreReleaser3(sem:QSemaphore_ITF,n:number):QSemaphoreReleaser;
	interface QSemaphoreReleaser_ITF {
		QSemaphoreReleaser_PTR():QSemaphoreReleaser;
	}

	class QSemaphoreReleaser {
		___pointer: number;
		QSemaphoreReleaser_PTR():QSemaphoreReleaser;
		Pointer():number;
		SetPointer(p:number):void;
		Cancel():QSemaphore;
		Semaphore():QSemaphore;
		Swap(other:QSemaphoreReleaser_ITF):void;
		DestroyQSemaphoreReleaser():void;
	}
	function NewQSemaphoreReleaserFromPointer(ptr:number):QSemaphoreReleaser;
	function NewQSemaphoreReleaser():QSemaphoreReleaser;
	function NewQSemaphoreReleaser2(sem:QSemaphore_ITF,n:number):QSemaphoreReleaser;
	function NewQSemaphoreReleaser3(sem:QSemaphore_ITF,n:number):QSemaphoreReleaser;
	interface QSequentialAnimationGroup_ITF extends QAnimationGroup_ITF {
		QSequentialAnimationGroup_PTR():QSequentialAnimationGroup;
	}

	class QSequentialAnimationGroup extends QAnimationGroup {
		___pointer: number;
		QSequentialAnimationGroup_PTR():QSequentialAnimationGroup;
		Pointer():number;
		SetPointer(p:number):void;
		AddPause(msecs:number):QPauseAnimation;
		CurrentAnimation():QAbstractAnimation;
		ConnectCurrentAnimationChanged(f:(current:QAbstractAnimation)=>void):void;
		DisconnectCurrentAnimationChanged():void;
		CurrentAnimationChanged(current:QAbstractAnimation_ITF):void;
		ConnectDuration(f:()=>number):void;
		DisconnectDuration():void;
		Duration():number;
		DurationDefault():number;
		InsertPause(index:number,msecs:number):QPauseAnimation;
		ConnectUpdateCurrentTime(f:(currentTime:number)=>void):void;
		DisconnectUpdateCurrentTime():void;
		UpdateCurrentTime(currentTime:number):void;
		UpdateCurrentTimeDefault(currentTime:number):void;
		ConnectDestroyQSequentialAnimationGroup(f:()=>void):void;
		DisconnectDestroyQSequentialAnimationGroup():void;
		DestroyQSequentialAnimationGroup():void;
		DestroyQSequentialAnimationGroupDefault():void;
	}
	function NewQSequentialAnimationGroupFromPointer(ptr:number):QSequentialAnimationGroup;
	function NewQSequentialAnimationGroup(parent:QObject_ITF):QSequentialAnimationGroup;
	interface QSequentialIterable_ITF {
		QSequentialIterable_PTR():QSequentialIterable;
	}

	class QSequentialIterable {
		___pointer: number;
		QSequentialIterable_PTR():QSequentialIterable;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSequentialIterable():void;
		At(idx:number):QVariant;
		CanReverseIterate():boolean;
		Size():number;
	}
	function NewQSequentialIterableFromPointer(ptr:number):QSequentialIterable;
	interface QSettings_ITF extends QObject_ITF {
		QSettings_PTR():QSettings;
	}

	class QSettings extends QObject {
		___pointer: number;
		QSettings_PTR():QSettings;
		Pointer():number;
		SetPointer(p:number):void;
		AllKeys():string[];
		ApplicationName():string;
		BeginGroup(prefix:string):void;
		BeginReadArray(prefix:string):number;
		BeginWriteArray(prefix:string,size:number):void;
		ChildGroups():string[];
		ChildKeys():string[];
		Clear():void;
		Contains(key:string):boolean;
		DefaultFormat():number;
		EndArray():void;
		EndGroup():void;
		FallbacksEnabled():boolean;
		FileName():string;
		Format():number;
		Group():string;
		IniCodec():QTextCodec;
		IsAtomicSyncRequired():boolean;
		IsWritable():boolean;
		OrganizationName():string;
		Remove(key:string):void;
		Scope():number;
		SetArrayIndex(i:number):void;
		SetAtomicSyncRequired(enable:boolean):void;
		SetDefaultFormat(format:number):void;
		SetFallbacksEnabled(b:boolean):void;
		SetIniCodec(codec:QTextCodec_ITF):void;
		SetIniCodec2(codecName:string):void;
		SetPath(format:number,scope:number,path:string):void;
		SetValue(key:string,value:QVariant_ITF):void;
		Status():number;
		Sync():void;
		Value(key:string,defaultValue:QVariant_ITF):QVariant;
		ConnectDestroyQSettings(f:()=>void):void;
		DisconnectDestroyQSettings():void;
		DestroyQSettings():void;
		DestroyQSettingsDefault():void;
	}
	function NewQSettingsFromPointer(ptr:number):QSettings;
	function NewQSettings(organization:string,application:string,parent:QObject_ITF):QSettings;
	function NewQSettings2(scope:number,organization:string,application:string,parent:QObject_ITF):QSettings;
	function NewQSettings3(format:number,scope:number,organization:string,application:string,parent:QObject_ITF):QSettings;
	function NewQSettings4(fileName:string,format:number,parent:QObject_ITF):QSettings;
	function NewQSettings5(parent:QObject_ITF):QSettings;
	function NewQSettings6(scope:number,parent:QObject_ITF):QSettings;
	function QSettings_DefaultFormat():number;
	function QSettings_SetDefaultFormat(format:number):void;
	function QSettings_SetPath(format:number,scope:number,path:string):void;
	const QSettings__NoError: number;
	const QSettings__AccessError: number;
	const QSettings__FormatError: number;
	const QSettings__NativeFormat: number;
	const QSettings__IniFormat: number;
	const QSettings__Registry32Format: number;
	const QSettings__Registry64Format: number;
	const QSettings__InvalidFormat: number;
	const QSettings__CustomFormat1: number;
	const QSettings__CustomFormat2: number;
	const QSettings__CustomFormat3: number;
	const QSettings__CustomFormat4: number;
	const QSettings__CustomFormat5: number;
	const QSettings__CustomFormat6: number;
	const QSettings__CustomFormat7: number;
	const QSettings__CustomFormat8: number;
	const QSettings__CustomFormat9: number;
	const QSettings__CustomFormat10: number;
	const QSettings__CustomFormat11: number;
	const QSettings__CustomFormat12: number;
	const QSettings__CustomFormat13: number;
	const QSettings__CustomFormat14: number;
	const QSettings__CustomFormat15: number;
	const QSettings__CustomFormat16: number;
	const QSettings__UserScope: number;
	const QSettings__SystemScope: number;
	interface QSharedData_ITF {
		QSharedData_PTR():QSharedData;
	}

	class QSharedData {
		___pointer: number;
		QSharedData_PTR():QSharedData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSharedData():void;
	}
	function NewQSharedDataFromPointer(ptr:number):QSharedData;
	function NewQSharedData():QSharedData;
	function NewQSharedData2(vqs:QSharedData_ITF):QSharedData;
	interface QSharedMemory_ITF extends QObject_ITF {
		QSharedMemory_PTR():QSharedMemory;
	}

	class QSharedMemory extends QObject {
		___pointer: number;
		QSharedMemory_PTR():QSharedMemory;
		Pointer():number;
		SetPointer(p:number):void;
		Attach(mode:number):boolean;
		ConstData():number;
		Create(size:number,mode:number):boolean;
		Data():number;
		Data2():number;
		Detach():boolean;
		Error():number;
		ErrorString():string;
		IsAttached():boolean;
		Key():string;
		Lock():boolean;
		NativeKey():string;
		SetKey(key:string):void;
		SetNativeKey(key:string):void;
		Size():number;
		Unlock():boolean;
		ConnectDestroyQSharedMemory(f:()=>void):void;
		DisconnectDestroyQSharedMemory():void;
		DestroyQSharedMemory():void;
		DestroyQSharedMemoryDefault():void;
	}
	function NewQSharedMemoryFromPointer(ptr:number):QSharedMemory;
	function NewQSharedMemory(key:string,parent:QObject_ITF):QSharedMemory;
	function NewQSharedMemory2(parent:QObject_ITF):QSharedMemory;
	const QSharedMemory__ReadOnly: number;
	const QSharedMemory__ReadWrite: number;
	const QSharedMemory__NoError: number;
	const QSharedMemory__PermissionDenied: number;
	const QSharedMemory__InvalidSize: number;
	const QSharedMemory__KeyError: number;
	const QSharedMemory__AlreadyExists: number;
	const QSharedMemory__NotFound: number;
	const QSharedMemory__LockError: number;
	const QSharedMemory__OutOfResources: number;
	const QSharedMemory__UnknownError: number;
	interface QSignalBlocker_ITF {
		QSignalBlocker_PTR():QSignalBlocker;
	}

	class QSignalBlocker {
		___pointer: number;
		QSignalBlocker_PTR():QSignalBlocker;
		Pointer():number;
		SetPointer(p:number):void;
		Reblock():void;
		Unblock():void;
		DestroyQSignalBlocker():void;
	}
	function NewQSignalBlockerFromPointer(ptr:number):QSignalBlocker;
	function NewQSignalBlocker(object:QObject_ITF):QSignalBlocker;
	function NewQSignalBlocker2(object:QObject_ITF):QSignalBlocker;
	interface QSignalTransition_ITF extends QAbstractTransition_ITF {
		QSignalTransition_PTR():QSignalTransition;
	}

	class QSignalTransition extends QAbstractTransition {
		___pointer: number;
		QSignalTransition_PTR():QSignalTransition;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectEventTest(f:(event:QEvent)=>boolean):void;
		DisconnectEventTest():void;
		EventTest(event:QEvent_ITF):boolean;
		EventTestDefault(event:QEvent_ITF):boolean;
		ConnectOnTransition(f:(event:QEvent)=>void):void;
		DisconnectOnTransition():void;
		OnTransition(event:QEvent_ITF):void;
		OnTransitionDefault(event:QEvent_ITF):void;
		SenderObject():QObject;
		ConnectSenderObjectChanged(f:()=>void):void;
		DisconnectSenderObjectChanged():void;
		SetSenderObject(sender:QObject_ITF):void;
		SetSignal(sign:QByteArray_ITF):void;
		Signal():QByteArray;
		ConnectSignalChanged(f:()=>void):void;
		DisconnectSignalChanged():void;
		ConnectDestroyQSignalTransition(f:()=>void):void;
		DisconnectDestroyQSignalTransition():void;
		DestroyQSignalTransition():void;
		DestroyQSignalTransitionDefault():void;
	}
	function NewQSignalTransitionFromPointer(ptr:number):QSignalTransition;
	function NewQSignalTransition(sourceState:QState_ITF):QSignalTransition;
	function NewQSignalTransition2(sender:QObject_ITF,sign:string,sourceState:QState_ITF):QSignalTransition;
	interface QSize_ITF {
		QSize_PTR():QSize;
	}

	class QSize {
		___pointer: number;
		QSize_PTR():QSize;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSize():void;
		BoundedTo(otherSize:QSize_ITF):QSize;
		ExpandedTo(otherSize:QSize_ITF):QSize;
		Height():number;
		IsEmpty():boolean;
		IsNull():boolean;
		IsValid():boolean;
		Rheight():number;
		Rwidth():number;
		Scale(width:number,height:number,mode:number):void;
		Scale2(size:QSize_ITF,mode:number):void;
		Scaled(width:number,height:number,mode:number):QSize;
		Scaled2(s:QSize_ITF,mode:number):QSize;
		SetHeight(height:number):void;
		SetWidth(width:number):void;
		Transpose():void;
		Transposed():QSize;
		Width():number;
	}
	function NewQSizeFromPointer(ptr:number):QSize;
	function NewQSize():QSize;
	function NewQSize2(width:number,height:number):QSize;
	function NewQSizeF():QSizeF;
	function NewQSizeF2(size:QSize_ITF):QSizeF;
	function NewQSizeF3(width:number,height:number):QSizeF;
	interface QSizeF_ITF {
		QSizeF_PTR():QSizeF;
	}

	class QSizeF {
		___pointer: number;
		QSizeF_PTR():QSizeF;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSizeF():void;
		BoundedTo(otherSize:QSizeF_ITF):QSizeF;
		ExpandedTo(otherSize:QSizeF_ITF):QSizeF;
		Height():number;
		IsEmpty():boolean;
		IsNull():boolean;
		IsValid():boolean;
		Rheight():number;
		Rwidth():number;
		Scale(width:number,height:number,mode:number):void;
		Scale2(size:QSizeF_ITF,mode:number):void;
		Scaled(width:number,height:number,mode:number):QSizeF;
		Scaled2(s:QSizeF_ITF,mode:number):QSizeF;
		SetHeight(height:number):void;
		SetWidth(width:number):void;
		ToSize():QSize;
		Transpose():void;
		Transposed():QSizeF;
		Width():number;
	}
	function NewQSizeFFromPointer(ptr:number):QSizeF;
	function NewQSizeF():QSizeF;
	function NewQSizeF2(size:QSize_ITF):QSizeF;
	function NewQSizeF3(width:number,height:number):QSizeF;
	interface QSocketNotifier_ITF extends QObject_ITF {
		QSocketNotifier_PTR():QSocketNotifier;
	}

	class QSocketNotifier extends QObject {
		___pointer: number;
		QSocketNotifier_PTR():QSocketNotifier;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActivated(f:(socket:number)=>void):void;
		DisconnectActivated():void;
		IsEnabled():boolean;
		ConnectSetEnabled(f:(enable:boolean)=>void):void;
		DisconnectSetEnabled():void;
		SetEnabled(enable:boolean):void;
		SetEnabledDefault(enable:boolean):void;
		Type():number;
		ConnectDestroyQSocketNotifier(f:()=>void):void;
		DisconnectDestroyQSocketNotifier():void;
		DestroyQSocketNotifier():void;
		DestroyQSocketNotifierDefault():void;
	}
	function NewQSocketNotifierFromPointer(ptr:number):QSocketNotifier;
	const QSocketNotifier__Read: number;
	const QSocketNotifier__Write: number;
	const QSocketNotifier__Exception: number;
	interface QSortFilterProxyModel_ITF extends QAbstractProxyModel_ITF {
		QSortFilterProxyModel_PTR():QSortFilterProxyModel;
	}

	class QSortFilterProxyModel extends QAbstractProxyModel {
		___pointer: number;
		QSortFilterProxyModel_PTR():QSortFilterProxyModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectColumnCount(f:(parent:QModelIndex)=>number):void;
		DisconnectColumnCount():void;
		ColumnCount(parent:QModelIndex_ITF):number;
		ColumnCountDefault(parent:QModelIndex_ITF):number;
		DynamicSortFilter():boolean;
		ConnectFilterAcceptsColumn(f:(source_column:number,source_parent:QModelIndex)=>boolean):void;
		DisconnectFilterAcceptsColumn():void;
		FilterAcceptsColumn(source_column:number,source_parent:QModelIndex_ITF):boolean;
		FilterAcceptsColumnDefault(source_column:number,source_parent:QModelIndex_ITF):boolean;
		ConnectFilterAcceptsRow(f:(source_row:number,source_parent:QModelIndex)=>boolean):void;
		DisconnectFilterAcceptsRow():void;
		FilterAcceptsRow(source_row:number,source_parent:QModelIndex_ITF):boolean;
		FilterAcceptsRowDefault(source_row:number,source_parent:QModelIndex_ITF):boolean;
		FilterCaseSensitivity():number;
		FilterKeyColumn():number;
		FilterRegExp():QRegExp;
		FilterRegularExpression():QRegularExpression;
		FilterRole():number;
		ConnectIndex(f:(row:number,column:number,parent:QModelIndex)=>QModelIndex):void;
		DisconnectIndex():void;
		Index(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		IndexDefault(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		ConnectInvalidate(f:()=>void):void;
		DisconnectInvalidate():void;
		Invalidate():void;
		InvalidateDefault():void;
		InvalidateFilter():void;
		IsRecursiveFilteringEnabled():boolean;
		IsSortLocaleAware():boolean;
		ConnectLessThan(f:(source_left:QModelIndex,source_right:QModelIndex)=>boolean):void;
		DisconnectLessThan():void;
		LessThan(source_left:QModelIndex_ITF,source_right:QModelIndex_ITF):boolean;
		LessThanDefault(source_left:QModelIndex_ITF,source_right:QModelIndex_ITF):boolean;
		ConnectMapFromSource(f:(sourceIndex:QModelIndex)=>QModelIndex):void;
		DisconnectMapFromSource():void;
		MapFromSource(sourceIndex:QModelIndex_ITF):QModelIndex;
		MapFromSourceDefault(sourceIndex:QModelIndex_ITF):QModelIndex;
		ConnectMapToSource(f:(proxyIndex:QModelIndex)=>QModelIndex):void;
		DisconnectMapToSource():void;
		MapToSource(proxyIndex:QModelIndex_ITF):QModelIndex;
		MapToSourceDefault(proxyIndex:QModelIndex_ITF):QModelIndex;
		ConnectParent(f:(child:QModelIndex)=>QModelIndex):void;
		DisconnectParent():void;
		Parent(child:QModelIndex_ITF):QModelIndex;
		ParentDefault(child:QModelIndex_ITF):QModelIndex;
		ConnectRowCount(f:(parent:QModelIndex)=>number):void;
		DisconnectRowCount():void;
		RowCount(parent:QModelIndex_ITF):number;
		RowCountDefault(parent:QModelIndex_ITF):number;
		SetDynamicSortFilter(enable:boolean):void;
		SetFilterCaseSensitivity(cs:number):void;
		ConnectSetFilterFixedString(f:(pattern:string)=>void):void;
		DisconnectSetFilterFixedString():void;
		SetFilterFixedString(pattern:string):void;
		SetFilterFixedStringDefault(pattern:string):void;
		SetFilterKeyColumn(column:number):void;
		ConnectSetFilterRegExp(f:(regExp:QRegExp)=>void):void;
		DisconnectSetFilterRegExp():void;
		SetFilterRegExp(regExp:QRegExp_ITF):void;
		SetFilterRegExpDefault(regExp:QRegExp_ITF):void;
		ConnectSetFilterRegExp2(f:(pattern:string)=>void):void;
		DisconnectSetFilterRegExp2():void;
		SetFilterRegExp2(pattern:string):void;
		SetFilterRegExp2Default(pattern:string):void;
		ConnectSetFilterRegularExpression(f:(pattern:string)=>void):void;
		DisconnectSetFilterRegularExpression():void;
		SetFilterRegularExpression(pattern:string):void;
		SetFilterRegularExpressionDefault(pattern:string):void;
		ConnectSetFilterRegularExpression2(f:(regularExpression:QRegularExpression)=>void):void;
		DisconnectSetFilterRegularExpression2():void;
		SetFilterRegularExpression2(regularExpression:QRegularExpression_ITF):void;
		SetFilterRegularExpression2Default(regularExpression:QRegularExpression_ITF):void;
		SetFilterRole(role:number):void;
		ConnectSetFilterWildcard(f:(pattern:string)=>void):void;
		DisconnectSetFilterWildcard():void;
		SetFilterWildcard(pattern:string):void;
		SetFilterWildcardDefault(pattern:string):void;
		SetRecursiveFilteringEnabled(recursive:boolean):void;
		SetSortCaseSensitivity(cs:number):void;
		SetSortLocaleAware(on:boolean):void;
		SetSortRole(role:number):void;
		SortCaseSensitivity():number;
		SortColumn():number;
		SortOrder():number;
		SortRole():number;
		ConnectDestroyQSortFilterProxyModel(f:()=>void):void;
		DisconnectDestroyQSortFilterProxyModel():void;
		DestroyQSortFilterProxyModel():void;
		DestroyQSortFilterProxyModelDefault():void;
	}
	function NewQSortFilterProxyModelFromPointer(ptr:number):QSortFilterProxyModel;
	function NewQSortFilterProxyModel(parent:QObject_ITF):QSortFilterProxyModel;
	interface QSpecialInteger_ITF {
		QSpecialInteger_PTR():QSpecialInteger;
	}

	class QSpecialInteger {
		___pointer: number;
		QSpecialInteger_PTR():QSpecialInteger;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSpecialInteger():void;
	}
	function NewQSpecialIntegerFromPointer(ptr:number):QSpecialInteger;
	interface QStandardPaths_ITF {
		QStandardPaths_PTR():QStandardPaths;
	}

	class QStandardPaths {
		___pointer: number;
		QStandardPaths_PTR():QStandardPaths;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQStandardPaths():void;
		DisplayName(ty:number):string;
		FindExecutable(executableName:string,paths:string[]):string;
		Locate(ty:number,fileName:string,options:number):string;
		LocateAll(ty:number,fileName:string,options:number):string[];
		SetTestModeEnabled(testMode:boolean):void;
		StandardLocations(ty:number):string[];
		WritableLocation(ty:number):string;
	}
	function NewQStandardPathsFromPointer(ptr:number):QStandardPaths;
	function QStandardPaths_DisplayName(ty:number):string;
	function QStandardPaths_FindExecutable(executableName:string,paths:string[]):string;
	function QStandardPaths_Locate(ty:number,fileName:string,options:number):string;
	function QStandardPaths_LocateAll(ty:number,fileName:string,options:number):string[];
	function QStandardPaths_SetTestModeEnabled(testMode:boolean):void;
	function QStandardPaths_StandardLocations(ty:number):string[];
	function QStandardPaths_WritableLocation(ty:number):string;
	const QStandardPaths__DesktopLocation: number;
	const QStandardPaths__DocumentsLocation: number;
	const QStandardPaths__FontsLocation: number;
	const QStandardPaths__ApplicationsLocation: number;
	const QStandardPaths__MusicLocation: number;
	const QStandardPaths__MoviesLocation: number;
	const QStandardPaths__PicturesLocation: number;
	const QStandardPaths__TempLocation: number;
	const QStandardPaths__HomeLocation: number;
	const QStandardPaths__DataLocation: number;
	const QStandardPaths__CacheLocation: number;
	const QStandardPaths__GenericDataLocation: number;
	const QStandardPaths__RuntimeLocation: number;
	const QStandardPaths__ConfigLocation: number;
	const QStandardPaths__DownloadLocation: number;
	const QStandardPaths__GenericCacheLocation: number;
	const QStandardPaths__GenericConfigLocation: number;
	const QStandardPaths__AppDataLocation: number;
	const QStandardPaths__AppConfigLocation: number;
	const QStandardPaths__AppLocalDataLocation: number;
	const QStandardPaths__LocateFile: number;
	const QStandardPaths__LocateDirectory: number;
	interface QState_ITF extends QAbstractState_ITF {
		QState_PTR():QState;
	}

	class QState extends QAbstractState {
		___pointer: number;
		QState_PTR():QState;
		Pointer():number;
		SetPointer(p:number):void;
		AddTransition(transition:QAbstractTransition_ITF):void;
		AddTransition2(sender:QObject_ITF,sign:string,target:QAbstractState_ITF):QSignalTransition;
		AddTransition4(target:QAbstractState_ITF):QAbstractTransition;
		AssignProperty(object:QObject_ITF,name:string,value:QVariant_ITF):void;
		ChildMode():number;
		ConnectChildModeChanged(f:()=>void):void;
		DisconnectChildModeChanged():void;
		ErrorState():QAbstractState;
		ConnectErrorStateChanged(f:()=>void):void;
		DisconnectErrorStateChanged():void;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		InitialState():QAbstractState;
		ConnectInitialStateChanged(f:()=>void):void;
		DisconnectInitialStateChanged():void;
		ConnectOnEntry(f:(event:QEvent)=>void):void;
		DisconnectOnEntry():void;
		OnEntry(event:QEvent_ITF):void;
		OnEntryDefault(event:QEvent_ITF):void;
		ConnectOnExit(f:(event:QEvent)=>void):void;
		DisconnectOnExit():void;
		OnExit(event:QEvent_ITF):void;
		OnExitDefault(event:QEvent_ITF):void;
		ConnectPropertiesAssigned(f:()=>void):void;
		DisconnectPropertiesAssigned():void;
		RemoveTransition(transition:QAbstractTransition_ITF):void;
		SetChildMode(mode:number):void;
		SetErrorState(state:QAbstractState_ITF):void;
		SetInitialState(state:QAbstractState_ITF):void;
		Transitions():QAbstractTransition[];
		ConnectDestroyQState(f:()=>void):void;
		DisconnectDestroyQState():void;
		DestroyQState():void;
		DestroyQStateDefault():void;
	}
	function NewQStateFromPointer(ptr:number):QState;
	function NewQState(parent:QState_ITF):QState;
	function NewQState2(childMode:number,parent:QState_ITF):QState;
	function NewQStateMachine(parent:QObject_ITF):QStateMachine;
	function NewQStateMachine2(childMode:number,parent:QObject_ITF):QStateMachine;
	const QState__ExclusiveStates: number;
	const QState__ParallelStates: number;
	const QState__DontRestoreProperties: number;
	const QState__RestoreProperties: number;
	interface QStateMachine_ITF extends QState_ITF {
		QStateMachine_PTR():QStateMachine;
	}

	class QStateMachine extends QState {
		___pointer: number;
		QStateMachine_PTR():QStateMachine;
		Pointer():number;
		SetPointer(p:number):void;
		AddDefaultAnimation(animation:QAbstractAnimation_ITF):void;
		AddState(state:QAbstractState_ITF):void;
		CancelDelayedEvent(id:number):boolean;
		ClearError():void;
		DefaultAnimations():QAbstractAnimation[];
		Error():number;
		ErrorString():string;
		GlobalRestorePolicy():number;
		IsAnimated():boolean;
		IsRunning():boolean;
		PostDelayedEvent(event:QEvent_ITF,delay:number):number;
		PostEvent(event:QEvent_ITF,priority:number):void;
		RemoveDefaultAnimation(animation:QAbstractAnimation_ITF):void;
		RemoveState(state:QAbstractState_ITF):void;
		ConnectRunningChanged(f:(running:boolean)=>void):void;
		DisconnectRunningChanged():void;
		RunningChanged(running:boolean):void;
		SetAnimated(enabled:boolean):void;
		SetGlobalRestorePolicy(restorePolicy:number):void;
		ConnectSetRunning(f:(running:boolean)=>void):void;
		DisconnectSetRunning():void;
		SetRunning(running:boolean):void;
		SetRunningDefault(running:boolean):void;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		StartDefault():void;
		ConnectStarted(f:()=>void):void;
		DisconnectStarted():void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		ConnectStopped(f:()=>void):void;
		DisconnectStopped():void;
		ConnectDestroyQStateMachine(f:()=>void):void;
		DisconnectDestroyQStateMachine():void;
		DestroyQStateMachine():void;
		DestroyQStateMachineDefault():void;
	}
	function NewQStateMachineFromPointer(ptr:number):QStateMachine;
	function NewQStateMachine(parent:QObject_ITF):QStateMachine;
	function NewQStateMachine2(childMode:number,parent:QObject_ITF):QStateMachine;
	const QStateMachine__NormalPriority: number;
	const QStateMachine__HighPriority: number;
	const QStateMachine__NoError: number;
	const QStateMachine__NoInitialStateError: number;
	const QStateMachine__NoDefaultStateInHistoryStateError: number;
	const QStateMachine__NoCommonAncestorForTransitionError: number;
	interface QStaticByteArrayData_ITF {
		QStaticByteArrayData_PTR():QStaticByteArrayData;
	}

	class QStaticByteArrayData {
		___pointer: number;
		QStaticByteArrayData_PTR():QStaticByteArrayData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQStaticByteArrayData():void;
	}
	function NewQStaticByteArrayDataFromPointer(ptr:number):QStaticByteArrayData;
	interface QStaticPlugin_ITF {
		QStaticPlugin_PTR():QStaticPlugin;
	}

	class QStaticPlugin {
		___pointer: number;
		QStaticPlugin_PTR():QStaticPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQStaticPlugin():void;
		Instance():QObject;
		MetaData():QJsonObject;
		RawMetaData():string;
	}
	function NewQStaticPluginFromPointer(ptr:number):QStaticPlugin;
	interface QStaticStringData_ITF {
		QStaticStringData_PTR():QStaticStringData;
	}

	class QStaticStringData {
		___pointer: number;
		QStaticStringData_PTR():QStaticStringData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQStaticStringData():void;
	}
	function NewQStaticStringDataFromPointer(ptr:number):QStaticStringData;
	interface QStorageInfo_ITF {
		QStorageInfo_PTR():QStorageInfo;
	}

	class QStorageInfo {
		___pointer: number;
		QStorageInfo_PTR():QStorageInfo;
		Pointer():number;
		SetPointer(p:number):void;
		BlockSize():number;
		BytesAvailable():number;
		BytesFree():number;
		BytesTotal():number;
		Device():QByteArray;
		DisplayName():string;
		FileSystemType():QByteArray;
		IsReadOnly():boolean;
		IsReady():boolean;
		IsRoot():boolean;
		IsValid():boolean;
		MountedVolumes():QStorageInfo[];
		Name():string;
		Refresh():void;
		Root():QStorageInfo;
		RootPath():string;
		SetPath(path:string):void;
		Subvolume():QByteArray;
		Swap(other:QStorageInfo_ITF):void;
		DestroyQStorageInfo():void;
	}
	function NewQStorageInfoFromPointer(ptr:number):QStorageInfo;
	function NewQStorageInfo():QStorageInfo;
	function NewQStorageInfo2(path:string):QStorageInfo;
	function NewQStorageInfo3(dir:QDir_ITF):QStorageInfo;
	function NewQStorageInfo4(other:QStorageInfo_ITF):QStorageInfo;
	function QStorageInfo_MountedVolumes():QStorageInfo[];
	function QStorageInfo_Root():QStorageInfo;
	const QString__SectionDefault: number;
	const QString__SectionSkipEmpty: number;
	const QString__SectionIncludeLeadingSep: number;
	const QString__SectionIncludeTrailingSep: number;
	const QString__SectionCaseInsensitiveSeps: number;
	const QString__KeepEmptyParts: number;
	const QString__SkipEmptyParts: number;
	const QString__NormalizationForm_D: number;
	const QString__NormalizationForm_C: number;
	const QString__NormalizationForm_KD: number;
	const QString__NormalizationForm_KC: number;
	interface QStringBuilderCommon_ITF {
		QStringBuilderCommon_PTR():QStringBuilderCommon;
	}

	class QStringBuilderCommon {
		___pointer: number;
		QStringBuilderCommon_PTR():QStringBuilderCommon;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQStringBuilderCommon():void;
	}
	function NewQStringBuilderCommonFromPointer(ptr:number):QStringBuilderCommon;
	interface QStringListModel_ITF extends QAbstractListModel_ITF {
		QStringListModel_PTR():QStringListModel;
	}

	class QStringListModel extends QAbstractListModel {
		___pointer: number;
		QStringListModel_PTR():QStringListModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectData(f:(index:QModelIndex,role:number)=>QVariant):void;
		DisconnectData():void;
		Data(index:QModelIndex_ITF,role:number):QVariant;
		DataDefault(index:QModelIndex_ITF,role:number):QVariant;
		ConnectRowCount(f:(parent:QModelIndex)=>number):void;
		DisconnectRowCount():void;
		RowCount(parent:QModelIndex_ITF):number;
		RowCountDefault(parent:QModelIndex_ITF):number;
		SetStringList(stri:string[]):void;
		StringList():string[];
	}
	function NewQStringListModelFromPointer(ptr:number):QStringListModel;
	function NewQStringListModel(parent:QObject_ITF):QStringListModel;
	function NewQStringListModel2(stri:string[],parent:QObject_ITF):QStringListModel;
	interface QStringMatcher_ITF {
		QStringMatcher_PTR():QStringMatcher;
	}

	class QStringMatcher {
		___pointer: number;
		QStringMatcher_PTR():QStringMatcher;
		Pointer():number;
		SetPointer(p:number):void;
		CaseSensitivity():number;
		IndexIn(str:string,from:number):number;
		IndexIn2(str:QChar_ITF,length:number,from:number):number;
		Pattern():string;
		SetCaseSensitivity(cs:number):void;
		SetPattern(pattern:string):void;
		DestroyQStringMatcher():void;
	}
	function NewQStringMatcherFromPointer(ptr:number):QStringMatcher;
	function NewQStringMatcher():QStringMatcher;
	function NewQStringMatcher2(pattern:string,cs:number):QStringMatcher;
	function NewQStringMatcher3(uc:QChar_ITF,length:number,cs:number):QStringMatcher;
	function NewQStringMatcher4(other:QStringMatcher_ITF):QStringMatcher;
	interface QStringRef_ITF {
		QStringRef_PTR():QStringRef;
	}

	class QStringRef {
		___pointer: number;
		QStringRef_PTR():QStringRef;
		Pointer():number;
		SetPointer(p:number):void;
		AppendTo(stri:string):QStringRef;
		At(position:number):QChar;
		Back():QChar;
		Chop(n:number):void;
		Chopped(l:number):QStringRef;
		Clear():void;
		Compare(s1:QStringRef_ITF,s2:string,cs:number):number;
		Compare2(other:string,cs:number):number;
		Compare3(other:QStringRef_ITF,cs:number):number;
		Compare4(other:QLatin1String_ITF,cs:number):number;
		Compare5(other:QByteArray_ITF,cs:number):number;
		Compare6(s1:QStringRef_ITF,s2:QStringRef_ITF,cs:number):number;
		Compare7(s1:QStringRef_ITF,s2:QLatin1String_ITF,cs:number):number;
		ConstData():QChar;
		Contains(str:string,cs:number):boolean;
		Contains2(ch:QChar_ITF,cs:number):boolean;
		Contains3(str:QLatin1String_ITF,cs:number):boolean;
		Contains4(str:QStringRef_ITF,cs:number):boolean;
		Count():number;
		Count2(str:string,cs:number):number;
		Count3(ch:QChar_ITF,cs:number):number;
		Count4(str:QStringRef_ITF,cs:number):number;
		Data():QChar;
		EndsWith(str:string,cs:number):boolean;
		EndsWith2(str:QStringView_ITF,cs:number):boolean;
		EndsWith3(str:QLatin1String_ITF,cs:number):boolean;
		EndsWith4(ch:QChar_ITF,cs:number):boolean;
		EndsWith5(str:QStringRef_ITF,cs:number):boolean;
		Front():QChar;
		IndexOf(str:string,from:number,cs:number):number;
		IndexOf2(ch:QChar_ITF,from:number,cs:number):number;
		IndexOf3(str:QLatin1String_ITF,from:number,cs:number):number;
		IndexOf4(str:QStringRef_ITF,from:number,cs:number):number;
		IsEmpty():boolean;
		IsNull():boolean;
		IsRightToLeft():boolean;
		LastIndexOf(str:string,from:number,cs:number):number;
		LastIndexOf2(ch:QChar_ITF,from:number,cs:number):number;
		LastIndexOf3(str:QLatin1String_ITF,from:number,cs:number):number;
		LastIndexOf4(str:QStringRef_ITF,from:number,cs:number):number;
		Left(n:number):QStringRef;
		Length():number;
		LocaleAwareCompare(s1:QStringRef_ITF,s2:string):number;
		LocaleAwareCompare2(other:string):number;
		LocaleAwareCompare3(other:QStringRef_ITF):number;
		LocaleAwareCompare4(s1:QStringRef_ITF,s2:QStringRef_ITF):number;
		Mid(position:number,n:number):QStringRef;
		Position():number;
		Right(n:number):QStringRef;
		Size():number;
		Split(sep:string,behavior:number,cs:number):QStringRef[];
		Split2(sep:QChar_ITF,behavior:number,cs:number):QStringRef[];
		StartsWith(str:string,cs:number):boolean;
		StartsWith2(str:QStringView_ITF,cs:number):boolean;
		StartsWith3(str:QLatin1String_ITF,cs:number):boolean;
		StartsWith4(ch:QChar_ITF,cs:number):boolean;
		StartsWith5(str:QStringRef_ITF,cs:number):boolean;
		String():string;
		ToDouble(ok:boolean):number;
		ToFloat(ok:boolean):number;
		ToInt(ok:boolean,base:number):number;
		ToLatin1():QByteArray;
		ToLocal8Bit():QByteArray;
		ToLong(ok:boolean,base:number):number;
		ToLongLong(ok:boolean,base:number):number;
		ToShort(ok:boolean,base:number):number;
		ToString():string;
		ToUInt(ok:boolean,base:number):number;
		ToULong(ok:boolean,base:number):number;
		ToULongLong(ok:boolean,base:number):number;
		ToUShort(ok:boolean,base:number):number;
		ToUcs4():number[];
		ToUtf8():QByteArray;
		Trimmed():QStringRef;
		Truncate(position:number):void;
		Unicode():QChar;
		DestroyQStringRef():void;
	}
	function NewQStringRefFromPointer(ptr:number):QStringRef;
	function NewQStringRef():QStringRef;
	function NewQStringRef2(stri:string,position:number,length:number):QStringRef;
	function NewQStringRef3(stri:string):QStringRef;
	function NewQStringRef4(other:QStringRef_ITF):QStringRef;
	function QStringRef_Compare(s1:QStringRef_ITF,s2:string,cs:number):number;
	function QStringRef_Compare6(s1:QStringRef_ITF,s2:QStringRef_ITF,cs:number):number;
	function QStringRef_Compare7(s1:QStringRef_ITF,s2:QLatin1String_ITF,cs:number):number;
	function QStringRef_LocaleAwareCompare(s1:QStringRef_ITF,s2:string):number;
	function QStringRef_LocaleAwareCompare4(s1:QStringRef_ITF,s2:QStringRef_ITF):number;
	interface QStringView_ITF {
		QStringView_PTR():QStringView;
	}

	class QStringView {
		___pointer: number;
		QStringView_PTR():QStringView;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQStringView():void;
		Back():QChar;
		Compare(other:QStringView_ITF,cs:number):number;
		Empty():boolean;
		EndsWith(str:QStringView_ITF,cs:number):boolean;
		EndsWith2(l1:QLatin1String_ITF,cs:number):boolean;
		EndsWith3(ch:QChar_ITF):boolean;
		EndsWith4(ch:QChar_ITF,cs:number):boolean;
		First():QChar;
		Front():QChar;
		IsEmpty():boolean;
		IsNull():boolean;
		IsRightToLeft():boolean;
		Last():QChar;
		Length():number;
		StartsWith(str:QStringView_ITF,cs:number):boolean;
		StartsWith2(l1:QLatin1String_ITF,cs:number):boolean;
		StartsWith3(ch:QChar_ITF):boolean;
		StartsWith4(ch:QChar_ITF,cs:number):boolean;
		ToLatin1():QByteArray;
		ToLocal8Bit():QByteArray;
		ToString():string;
		ToUcs4():number[];
		ToUtf8():QByteArray;
		Trimmed():QStringView;
	}
	function NewQStringViewFromPointer(ptr:number):QStringView;
	function NewQStringView():QStringView;
	function NewQStringView7(str:string):QStringView;
	function NewQStringView8(str:QStringRef_ITF):QStringView;
	interface QSysInfo_ITF {
		QSysInfo_PTR():QSysInfo;
	}

	class QSysInfo {
		___pointer: number;
		QSysInfo_PTR():QSysInfo;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSysInfo():void;
		BootUniqueId():QByteArray;
		BuildAbi():string;
		BuildCpuArchitecture():string;
		CurrentCpuArchitecture():string;
		KernelType():string;
		KernelVersion():string;
		MachineHostName():string;
		MachineUniqueId():QByteArray;
		PrettyProductName():string;
		ProductType():string;
		ProductVersion():string;
	}
	function NewQSysInfoFromPointer(ptr:number):QSysInfo;
	function QSysInfo_BootUniqueId():QByteArray;
	function QSysInfo_BuildAbi():string;
	function QSysInfo_BuildCpuArchitecture():string;
	function QSysInfo_CurrentCpuArchitecture():string;
	function QSysInfo_KernelType():string;
	function QSysInfo_KernelVersion():string;
	function QSysInfo_MachineHostName():string;
	function QSysInfo_MachineUniqueId():QByteArray;
	function QSysInfo_PrettyProductName():string;
	function QSysInfo_ProductType():string;
	function QSysInfo_ProductVersion():string;
	const QSysInfo__WordSize: number;
	const QSysInfo__BigEndian: number;
	const QSysInfo__LittleEndian: number;
	interface QSystemSemaphore_ITF {
		QSystemSemaphore_PTR():QSystemSemaphore;
	}

	class QSystemSemaphore {
		___pointer: number;
		QSystemSemaphore_PTR():QSystemSemaphore;
		Pointer():number;
		SetPointer(p:number):void;
		Acquire():boolean;
		Error():number;
		ErrorString():string;
		Key():string;
		Release(n:number):boolean;
		SetKey(key:string,initialValue:number,mode:number):void;
		DestroyQSystemSemaphore():void;
	}
	function NewQSystemSemaphoreFromPointer(ptr:number):QSystemSemaphore;
	function NewQSystemSemaphore(key:string,initialValue:number,mode:number):QSystemSemaphore;
	const QSystemSemaphore__Open: number;
	const QSystemSemaphore__Create: number;
	const QSystemSemaphore__NoError: number;
	const QSystemSemaphore__PermissionDenied: number;
	const QSystemSemaphore__KeyError: number;
	const QSystemSemaphore__AlreadyExists: number;
	const QSystemSemaphore__NotFound: number;
	const QSystemSemaphore__OutOfResources: number;
	const QSystemSemaphore__UnknownError: number;
	interface QTemporaryDir_ITF {
		QTemporaryDir_PTR():QTemporaryDir;
	}

	class QTemporaryDir {
		___pointer: number;
		QTemporaryDir_PTR():QTemporaryDir;
		Pointer():number;
		SetPointer(p:number):void;
		AutoRemove():boolean;
		ErrorString():string;
		FilePath(fileName:string):string;
		IsValid():boolean;
		Path():string;
		Remove():boolean;
		SetAutoRemove(b:boolean):void;
		DestroyQTemporaryDir():void;
	}
	function NewQTemporaryDirFromPointer(ptr:number):QTemporaryDir;
	function NewQTemporaryDir():QTemporaryDir;
	function NewQTemporaryDir2(templatePath:string):QTemporaryDir;
	interface QTemporaryFile_ITF extends QFile_ITF {
		QTemporaryFile_PTR():QTemporaryFile;
	}

	class QTemporaryFile extends QFile {
		___pointer: number;
		QTemporaryFile_PTR():QTemporaryFile;
		Pointer():number;
		SetPointer(p:number):void;
		AutoRemove():boolean;
		CreateNativeFile(file:QFile_ITF):QTemporaryFile;
		CreateNativeFile2(fileName:string):QTemporaryFile;
		FileTemplate():string;
		Open():boolean;
		SetAutoRemove(b:boolean):void;
		SetFileTemplate(name:string):void;
		ConnectDestroyQTemporaryFile(f:()=>void):void;
		DisconnectDestroyQTemporaryFile():void;
		DestroyQTemporaryFile():void;
		DestroyQTemporaryFileDefault():void;
	}
	function NewQTemporaryFileFromPointer(ptr:number):QTemporaryFile;
	function NewQTemporaryFile():QTemporaryFile;
	function NewQTemporaryFile2(templateName:string):QTemporaryFile;
	function NewQTemporaryFile3(parent:QObject_ITF):QTemporaryFile;
	function NewQTemporaryFile4(templateName:string,parent:QObject_ITF):QTemporaryFile;
	function QTemporaryFile_CreateNativeFile(file:QFile_ITF):QTemporaryFile;
	function QTemporaryFile_CreateNativeFile2(fileName:string):QTemporaryFile;
	interface QTextBoundaryFinder_ITF {
		QTextBoundaryFinder_PTR():QTextBoundaryFinder;
	}

	class QTextBoundaryFinder {
		___pointer: number;
		QTextBoundaryFinder_PTR():QTextBoundaryFinder;
		Pointer():number;
		SetPointer(p:number):void;
		BoundaryReasons():number;
		IsAtBoundary():boolean;
		IsValid():boolean;
		Position():number;
		SetPosition(position:number):void;
		String():string;
		ToEnd():void;
		ToNextBoundary():number;
		ToPreviousBoundary():number;
		ToStart():void;
		Type():number;
		DestroyQTextBoundaryFinder():void;
	}
	function NewQTextBoundaryFinderFromPointer(ptr:number):QTextBoundaryFinder;
	function NewQTextBoundaryFinder():QTextBoundaryFinder;
	function NewQTextBoundaryFinder2(other:QTextBoundaryFinder_ITF):QTextBoundaryFinder;
	function NewQTextBoundaryFinder3(ty:number,stri:string):QTextBoundaryFinder;
	const QTextBoundaryFinder__Grapheme: number;
	const QTextBoundaryFinder__Word: number;
	const QTextBoundaryFinder__Sentence: number;
	const QTextBoundaryFinder__Line: number;
	const QTextBoundaryFinder__NotAtBoundary: number;
	const QTextBoundaryFinder__BreakOpportunity: number;
	const QTextBoundaryFinder__StartOfItem: number;
	const QTextBoundaryFinder__EndOfItem: number;
	const QTextBoundaryFinder__MandatoryBreak: number;
	const QTextBoundaryFinder__SoftHyphen: number;
	interface QTextCodec_ITF {
		QTextCodec_PTR():QTextCodec;
	}

	class QTextCodec {
		___pointer: number;
		QTextCodec_PTR():QTextCodec;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAliases(f:()=>QByteArray[]):void;
		DisconnectAliases():void;
		Aliases():QByteArray[];
		AliasesDefault():QByteArray[];
		AvailableCodecs():QByteArray[];
		AvailableMibs():number[];
		CanEncode(ch:QChar_ITF):boolean;
		CanEncode2(s:string):boolean;
		CanEncode3(s:QStringView_ITF):boolean;
		CodecForHtml(ba:QByteArray_ITF,defaultCodec:QTextCodec_ITF):QTextCodec;
		CodecForHtml2(ba:QByteArray_ITF):QTextCodec;
		CodecForLocale():QTextCodec;
		CodecForMib(mib:number):QTextCodec;
		CodecForName(name:QByteArray_ITF):QTextCodec;
		CodecForName2(name:string):QTextCodec;
		CodecForUtfText(ba:QByteArray_ITF,defaultCodec:QTextCodec_ITF):QTextCodec;
		CodecForUtfText2(ba:QByteArray_ITF):QTextCodec;
		FromUnicode(str:string):QByteArray;
		FromUnicode2(str:QStringView_ITF):QByteArray;
		MakeDecoder(flags:number):QTextDecoder;
		MakeEncoder(flags:number):QTextEncoder;
		ConnectMibEnum(f:()=>number):void;
		DisconnectMibEnum():void;
		MibEnum():number;
		ConnectName(f:()=>QByteArray):void;
		DisconnectName():void;
		Name():QByteArray;
		SetCodecForLocale(c:QTextCodec_ITF):void;
		ToUnicode(a:QByteArray_ITF):string;
		ToUnicode2(chars:string):string;
		ConnectDestroyQTextCodec(f:()=>void):void;
		DisconnectDestroyQTextCodec():void;
		DestroyQTextCodec():void;
		DestroyQTextCodecDefault():void;
	}
	function NewQTextCodecFromPointer(ptr:number):QTextCodec;
	function QTextCodec_AvailableCodecs():QByteArray[];
	function QTextCodec_AvailableMibs():number[];
	function QTextCodec_CodecForHtml(ba:QByteArray_ITF,defaultCodec:QTextCodec_ITF):QTextCodec;
	function QTextCodec_CodecForHtml2(ba:QByteArray_ITF):QTextCodec;
	function QTextCodec_CodecForLocale():QTextCodec;
	function QTextCodec_CodecForMib(mib:number):QTextCodec;
	function QTextCodec_CodecForName(name:QByteArray_ITF):QTextCodec;
	function QTextCodec_CodecForName2(name:string):QTextCodec;
	function QTextCodec_CodecForUtfText(ba:QByteArray_ITF,defaultCodec:QTextCodec_ITF):QTextCodec;
	function QTextCodec_CodecForUtfText2(ba:QByteArray_ITF):QTextCodec;
	function QTextCodec_SetCodecForLocale(c:QTextCodec_ITF):void;
	const QTextCodec__DefaultConversion: number;
	const QTextCodec__ConvertInvalidToNull: number;
	const QTextCodec__IgnoreHeader: number;
	const QTextCodec__FreeFunction: number;
	interface QTextDecoder_ITF {
		QTextDecoder_PTR():QTextDecoder;
	}

	class QTextDecoder {
		___pointer: number;
		QTextDecoder_PTR():QTextDecoder;
		Pointer():number;
		SetPointer(p:number):void;
		ToUnicode(chars:string,l:number):string;
		ToUnicode2(ba:QByteArray_ITF):string;
		ToUnicode3(target:string,chars:string,l:number):void;
		DestroyQTextDecoder():void;
	}
	function NewQTextDecoderFromPointer(ptr:number):QTextDecoder;
	function NewQTextDecoder2(codec:QTextCodec_ITF):QTextDecoder;
	function NewQTextDecoder3(codec:QTextCodec_ITF,flags:number):QTextDecoder;
	interface QTextEncoder_ITF {
		QTextEncoder_PTR():QTextEncoder;
	}

	class QTextEncoder {
		___pointer: number;
		QTextEncoder_PTR():QTextEncoder;
		Pointer():number;
		SetPointer(p:number):void;
		FromUnicode(str:string):QByteArray;
		FromUnicode2(str:QStringView_ITF):QByteArray;
		FromUnicode3(uc:QChar_ITF,l:number):QByteArray;
		DestroyQTextEncoder():void;
	}
	function NewQTextEncoderFromPointer(ptr:number):QTextEncoder;
	function NewQTextEncoder2(codec:QTextCodec_ITF):QTextEncoder;
	function NewQTextEncoder3(codec:QTextCodec_ITF,flags:number):QTextEncoder;
	interface QTextStream_ITF {
		QTextStream_PTR():QTextStream;
	}

	class QTextStream {
		___pointer: number;
		QTextStream_PTR():QTextStream;
		Pointer():number;
		SetPointer(p:number):void;
		AtEnd():boolean;
		AutoDetectUnicode():boolean;
		Codec():QTextCodec;
		Device():QIODevice;
		FieldAlignment():number;
		FieldWidth():number;
		Flush():void;
		GenerateByteOrderMark():boolean;
		IntegerBase():number;
		Locale():QLocale;
		NumberFlags():number;
		PadChar():QChar;
		Pos():number;
		Read(maxlen:number):string;
		ReadAll():string;
		ReadLine(maxlen:number):string;
		ReadLineInto(line:string,maxlen:number):boolean;
		RealNumberNotation():number;
		RealNumberPrecision():number;
		Reset():void;
		ResetStatus():void;
		Seek(pos:number):boolean;
		SetAutoDetectUnicode(enabled:boolean):void;
		SetCodec(codec:QTextCodec_ITF):void;
		SetCodec2(codecName:string):void;
		SetDevice(device:QIODevice_ITF):void;
		SetFieldAlignment(mode:number):void;
		SetFieldWidth(width:number):void;
		SetGenerateByteOrderMark(generate:boolean):void;
		SetIntegerBase(base:number):void;
		SetLocale(locale:QLocale_ITF):void;
		SetNumberFlags(flags:number):void;
		SetPadChar(ch:QChar_ITF):void;
		SetRealNumberNotation(notation:number):void;
		SetRealNumberPrecision(precision:number):void;
		SetStatus(status:number):void;
		SetString(stri:string,openMode:number):void;
		SkipWhiteSpace():void;
		Status():number;
		String():string;
		ConnectDestroyQTextStream(f:()=>void):void;
		DisconnectDestroyQTextStream():void;
		DestroyQTextStream():void;
		DestroyQTextStreamDefault():void;
	}
	function NewQTextStreamFromPointer(ptr:number):QTextStream;
	function NewQTextStream():QTextStream;
	function NewQTextStream2(device:QIODevice_ITF):QTextStream;
	function NewQTextStream4(stri:string,openMode:number):QTextStream;
	function NewQTextStream5(array:QByteArray_ITF,openMode:number):QTextStream;
	function NewQTextStream6(array:QByteArray_ITF,openMode:number):QTextStream;
	const QTextStream__SmartNotation: number;
	const QTextStream__FixedNotation: number;
	const QTextStream__ScientificNotation: number;
	const QTextStream__AlignLeft: number;
	const QTextStream__AlignRight: number;
	const QTextStream__AlignCenter: number;
	const QTextStream__AlignAccountingStyle: number;
	const QTextStream__Ok: number;
	const QTextStream__ReadPastEnd: number;
	const QTextStream__ReadCorruptData: number;
	const QTextStream__WriteFailed: number;
	const QTextStream__ShowBase: number;
	const QTextStream__ForcePoint: number;
	const QTextStream__ForceSign: number;
	const QTextStream__UppercaseBase: number;
	const QTextStream__UppercaseDigits: number;
	interface QTextStreamManipulator_ITF {
		QTextStreamManipulator_PTR():QTextStreamManipulator;
	}

	class QTextStreamManipulator {
		___pointer: number;
		QTextStreamManipulator_PTR():QTextStreamManipulator;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTextStreamManipulator():void;
	}
	function NewQTextStreamManipulatorFromPointer(ptr:number):QTextStreamManipulator;
	interface QThread_ITF extends QObject_ITF {
		QThread_PTR():QThread;
	}

	class QThread extends QObject {
		___pointer: number;
		QThread_PTR():QThread;
		Pointer():number;
		SetPointer(p:number):void;
		CurrentThread():QThread;
		EventDispatcher():QAbstractEventDispatcher;
		Exec():number;
		Exit(returnCode:number):void;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		IdealThreadCount():number;
		IsFinished():boolean;
		IsInterruptionRequested():boolean;
		IsRunning():boolean;
		LoopLevel():number;
		Msleep(msecs:number):void;
		Priority():number;
		ConnectQuit(f:()=>void):void;
		DisconnectQuit():void;
		Quit():void;
		QuitDefault():void;
		RequestInterruption():void;
		ConnectRun(f:()=>void):void;
		DisconnectRun():void;
		Run():void;
		RunDefault():void;
		SetEventDispatcher(eventDispatcher:QAbstractEventDispatcher_ITF):void;
		SetPriority(priority:number):void;
		SetStackSize(stackSize:number):void;
		SetTerminationEnabled(enabled:boolean):void;
		Sleep(secs:number):void;
		StackSize():number;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		StartDefault():void;
		ConnectStarted(f:()=>void):void;
		DisconnectStarted():void;
		ConnectTerminate(f:()=>void):void;
		DisconnectTerminate():void;
		Terminate():void;
		TerminateDefault():void;
		Usleep(usecs:number):void;
		Wait(ti:number):boolean;
		YieldCurrentThread():void;
		ConnectDestroyQThread(f:()=>void):void;
		DisconnectDestroyQThread():void;
		DestroyQThread():void;
		DestroyQThreadDefault():void;
	}
	function NewQThreadFromPointer(ptr:number):QThread;
	function NewQThread(parent:QObject_ITF):QThread;
	function QThread_CurrentThread():QThread;
	function QThread_IdealThreadCount():number;
	function QThread_Msleep(msecs:number):void;
	function QThread_SetTerminationEnabled(enabled:boolean):void;
	function QThread_Sleep(secs:number):void;
	function QThread_Usleep(usecs:number):void;
	function QThread_YieldCurrentThread():void;
	function NewQThreadPool(parent:QObject_ITF):QThreadPool;
	const QThread__IdlePriority: number;
	const QThread__LowestPriority: number;
	const QThread__LowPriority: number;
	const QThread__NormalPriority: number;
	const QThread__HighPriority: number;
	const QThread__HighestPriority: number;
	const QThread__TimeCriticalPriority: number;
	const QThread__InheritPriority: number;
	interface QThreadPool_ITF extends QObject_ITF {
		QThreadPool_PTR():QThreadPool;
	}

	class QThreadPool extends QObject {
		___pointer: number;
		QThreadPool_PTR():QThreadPool;
		Pointer():number;
		SetPointer(p:number):void;
		ActiveThreadCount():number;
		Clear():void;
		ExpiryTimeout():number;
		GlobalInstance():QThreadPool;
		MaxThreadCount():number;
		ReleaseThread():void;
		ReserveThread():void;
		SetExpiryTimeout(expiryTimeout:number):void;
		SetMaxThreadCount(maxThreadCount:number):void;
		SetStackSize(stackSize:number):void;
		StackSize():number;
		Start(runnable:QRunnable_ITF,priority:number):void;
		TryStart(runnable:QRunnable_ITF):boolean;
		TryTake(runnable:QRunnable_ITF):boolean;
		WaitForDone(msecs:number):boolean;
		ConnectDestroyQThreadPool(f:()=>void):void;
		DisconnectDestroyQThreadPool():void;
		DestroyQThreadPool():void;
		DestroyQThreadPoolDefault():void;
	}
	function NewQThreadPoolFromPointer(ptr:number):QThreadPool;
	function NewQThreadPool(parent:QObject_ITF):QThreadPool;
	function QThreadPool_GlobalInstance():QThreadPool;
	interface QThreadStorageData_ITF {
		QThreadStorageData_PTR():QThreadStorageData;
	}

	class QThreadStorageData {
		___pointer: number;
		QThreadStorageData_PTR():QThreadStorageData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQThreadStorageData():void;
	}
	function NewQThreadStorageDataFromPointer(ptr:number):QThreadStorageData;
	interface QTime_ITF {
		QTime_PTR():QTime;
	}

	class QTime {
		___pointer: number;
		QTime_PTR():QTime;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTime():void;
		AddMSecs(ms:number):QTime;
		AddSecs(s:number):QTime;
		CurrentTime():QTime;
		Elapsed():number;
		FromMSecsSinceStartOfDay(msecs:number):QTime;
		FromString(stri:string,format:number):QTime;
		FromString2(stri:string,format:string):QTime;
		Hour():number;
		IsNull():boolean;
		IsValid():boolean;
		IsValid2(h:number,m:number,s:number,ms:number):boolean;
		Minute():number;
		Msec():number;
		MsecsSinceStartOfDay():number;
		MsecsTo(t:QTime_ITF):number;
		Restart():number;
		Second():number;
		SecsTo(t:QTime_ITF):number;
		SetHMS(h:number,m:number,s:number,ms:number):boolean;
		Start():void;
		ToString(format:string):string;
		ToString2(format:number):string;
		ToString3(format:QStringView_ITF):string;
	}
	function NewQTimeFromPointer(ptr:number):QTime;
	function NewQTime2():QTime;
	function NewQTime3(h:number,m:number,s:number,ms:number):QTime;
	function QTime_CurrentTime():QTime;
	function QTime_FromMSecsSinceStartOfDay(msecs:number):QTime;
	function QTime_FromString(stri:string,format:number):QTime;
	function QTime_FromString2(stri:string,format:string):QTime;
	function QTime_IsValid2(h:number,m:number,s:number,ms:number):boolean;
	function NewQTimeLine(duration:number,parent:QObject_ITF):QTimeLine;
	function NewQTimeZone():QTimeZone;
	function NewQTimeZone2(ianaId:QByteArray_ITF):QTimeZone;
	function NewQTimeZone3(offsetSeconds:number):QTimeZone;
	function NewQTimeZone4(ianaId:QByteArray_ITF,offsetSeconds:number,name:string,abbreviation:string,country:number,comment:string):QTimeZone;
	function NewQTimeZone5(other:QTimeZone_ITF):QTimeZone;
	function NewQTimer(parent:QObject_ITF):QTimer;
	function NewQTimerEvent(timerId:number):QTimerEvent;
	interface QTimeLine_ITF extends QObject_ITF {
		QTimeLine_PTR():QTimeLine;
	}

	class QTimeLine extends QObject {
		___pointer: number;
		QTimeLine_PTR():QTimeLine;
		Pointer():number;
		SetPointer(p:number):void;
		CurrentFrame():number;
		CurrentTime():number;
		CurrentValue():number;
		CurveShape():number;
		Direction():number;
		Duration():number;
		EasingCurve():QEasingCurve;
		EndFrame():number;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		ConnectFrameChanged(f:(frame:number)=>void):void;
		DisconnectFrameChanged():void;
		FrameForTime(msec:number):number;
		LoopCount():number;
		ConnectResume(f:()=>void):void;
		DisconnectResume():void;
		Resume():void;
		ResumeDefault():void;
		ConnectSetCurrentTime(f:(msec:number)=>void):void;
		DisconnectSetCurrentTime():void;
		SetCurrentTime(msec:number):void;
		SetCurrentTimeDefault(msec:number):void;
		SetCurveShape(shape:number):void;
		SetDirection(direction:number):void;
		SetDuration(duration:number):void;
		SetEasingCurve(curve:QEasingCurve_ITF):void;
		SetEndFrame(frame:number):void;
		SetFrameRange(startFrame:number,endFrame:number):void;
		SetLoopCount(count:number):void;
		ConnectSetPaused(f:(paused:boolean)=>void):void;
		DisconnectSetPaused():void;
		SetPaused(paused:boolean):void;
		SetPausedDefault(paused:boolean):void;
		SetStartFrame(frame:number):void;
		SetUpdateInterval(interval:number):void;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		StartDefault():void;
		StartFrame():number;
		State():number;
		ConnectStateChanged(f:(newState:number)=>void):void;
		DisconnectStateChanged():void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		ConnectToggleDirection(f:()=>void):void;
		DisconnectToggleDirection():void;
		ToggleDirection():void;
		ToggleDirectionDefault():void;
		UpdateInterval():number;
		ConnectValueChanged(f:(value:number)=>void):void;
		DisconnectValueChanged():void;
		ConnectValueForTime(f:(msec:number)=>number):void;
		DisconnectValueForTime():void;
		ValueForTime(msec:number):number;
		ValueForTimeDefault(msec:number):number;
		ConnectDestroyQTimeLine(f:()=>void):void;
		DisconnectDestroyQTimeLine():void;
		DestroyQTimeLine():void;
		DestroyQTimeLineDefault():void;
	}
	function NewQTimeLineFromPointer(ptr:number):QTimeLine;
	function NewQTimeLine(duration:number,parent:QObject_ITF):QTimeLine;
	const QTimeLine__NotRunning: number;
	const QTimeLine__Paused: number;
	const QTimeLine__Running: number;
	const QTimeLine__Forward: number;
	const QTimeLine__Backward: number;
	const QTimeLine__EaseInCurve: number;
	const QTimeLine__EaseOutCurve: number;
	const QTimeLine__EaseInOutCurve: number;
	const QTimeLine__LinearCurve: number;
	const QTimeLine__SineCurve: number;
	const QTimeLine__CosineCurve: number;
	interface QTimeZone_ITF {
		QTimeZone_PTR():QTimeZone;
	}

	class QTimeZone {
		___pointer: number;
		QTimeZone_PTR():QTimeZone;
		Pointer():number;
		SetPointer(p:number):void;
		Abbreviation(atDateTime:QDateTime_ITF):string;
		AvailableTimeZoneIds():QByteArray[];
		AvailableTimeZoneIds2(country:number):QByteArray[];
		AvailableTimeZoneIds3(offsetSeconds:number):QByteArray[];
		Comment():string;
		Country():number;
		DaylightTimeOffset(atDateTime:QDateTime_ITF):number;
		DisplayName(atDateTime:QDateTime_ITF,nameType:number,locale:QLocale_ITF):string;
		DisplayName2(timeType:number,nameType:number,locale:QLocale_ITF):string;
		HasDaylightTime():boolean;
		HasTransitions():boolean;
		IanaIdToWindowsId(ianaId:QByteArray_ITF):QByteArray;
		Id():QByteArray;
		IsDaylightTime(atDateTime:QDateTime_ITF):boolean;
		IsTimeZoneIdAvailable(ianaId:QByteArray_ITF):boolean;
		IsValid():boolean;
		OffsetFromUtc(atDateTime:QDateTime_ITF):number;
		StandardTimeOffset(atDateTime:QDateTime_ITF):number;
		Swap(other:QTimeZone_ITF):void;
		SystemTimeZone():QTimeZone;
		SystemTimeZoneId():QByteArray;
		Utc():QTimeZone;
		WindowsIdToDefaultIanaId(windowsId:QByteArray_ITF):QByteArray;
		WindowsIdToDefaultIanaId2(windowsId:QByteArray_ITF,country:number):QByteArray;
		WindowsIdToIanaIds(windowsId:QByteArray_ITF):QByteArray[];
		WindowsIdToIanaIds2(windowsId:QByteArray_ITF,country:number):QByteArray[];
		DestroyQTimeZone():void;
	}
	function NewQTimeZoneFromPointer(ptr:number):QTimeZone;
	function NewQTimeZone():QTimeZone;
	function NewQTimeZone2(ianaId:QByteArray_ITF):QTimeZone;
	function NewQTimeZone3(offsetSeconds:number):QTimeZone;
	function NewQTimeZone4(ianaId:QByteArray_ITF,offsetSeconds:number,name:string,abbreviation:string,country:number,comment:string):QTimeZone;
	function NewQTimeZone5(other:QTimeZone_ITF):QTimeZone;
	function QTimeZone_AvailableTimeZoneIds():QByteArray[];
	function QTimeZone_AvailableTimeZoneIds2(country:number):QByteArray[];
	function QTimeZone_AvailableTimeZoneIds3(offsetSeconds:number):QByteArray[];
	function QTimeZone_IanaIdToWindowsId(ianaId:QByteArray_ITF):QByteArray;
	function QTimeZone_IsTimeZoneIdAvailable(ianaId:QByteArray_ITF):boolean;
	function QTimeZone_SystemTimeZone():QTimeZone;
	function QTimeZone_SystemTimeZoneId():QByteArray;
	function QTimeZone_Utc():QTimeZone;
	function QTimeZone_WindowsIdToDefaultIanaId(windowsId:QByteArray_ITF):QByteArray;
	function QTimeZone_WindowsIdToDefaultIanaId2(windowsId:QByteArray_ITF,country:number):QByteArray;
	function QTimeZone_WindowsIdToIanaIds(windowsId:QByteArray_ITF):QByteArray[];
	function QTimeZone_WindowsIdToIanaIds2(windowsId:QByteArray_ITF,country:number):QByteArray[];
	const QTimeZone__StandardTime: number;
	const QTimeZone__DaylightTime: number;
	const QTimeZone__GenericTime: number;
	const QTimeZone__DefaultName: number;
	const QTimeZone__LongName: number;
	const QTimeZone__ShortName: number;
	const QTimeZone__OffsetName: number;
	interface QTimer_ITF extends QObject_ITF {
		QTimer_PTR():QTimer;
	}

	class QTimer extends QObject {
		___pointer: number;
		QTimer_PTR():QTimer;
		Pointer():number;
		SetPointer(p:number):void;
		Interval():number;
		IsActive():boolean;
		IsSingleShot():boolean;
		RemainingTime():number;
		SetInterval(msec:number):void;
		SetSingleShot(singleShot:boolean):void;
		SetTimerType(atype:number):void;
		SingleShot(msec:number,receiver:QObject_ITF,member:string):void;
		SingleShot2(msec:number,timerType:number,receiver:QObject_ITF,member:string):void;
		ConnectStart(f:(msec:number)=>void):void;
		DisconnectStart():void;
		Start(msec:number):void;
		StartDefault(msec:number):void;
		ConnectStart2(f:()=>void):void;
		DisconnectStart2():void;
		Start2():void;
		Start2Default():void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		ConnectTimeout(f:()=>void):void;
		DisconnectTimeout():void;
		TimerId():number;
		TimerType():number;
		ConnectDestroyQTimer(f:()=>void):void;
		DisconnectDestroyQTimer():void;
		DestroyQTimer():void;
		DestroyQTimerDefault():void;
	}
	function NewQTimerFromPointer(ptr:number):QTimer;
	function NewQTimer(parent:QObject_ITF):QTimer;
	function QTimer_SingleShot(msec:number,receiver:QObject_ITF,member:string):void;
	function QTimer_SingleShot2(msec:number,timerType:number,receiver:QObject_ITF,member:string):void;
	function NewQTimerEvent(timerId:number):QTimerEvent;
	interface QTimerEvent_ITF extends QEvent_ITF {
		QTimerEvent_PTR():QTimerEvent;
	}

	class QTimerEvent extends QEvent {
		___pointer: number;
		QTimerEvent_PTR():QTimerEvent;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTimerEvent():void;
		TimerId():number;
	}
	function NewQTimerEventFromPointer(ptr:number):QTimerEvent;
	function NewQTimerEvent(timerId:number):QTimerEvent;
	interface QTranslator_ITF extends QObject_ITF {
		QTranslator_PTR():QTranslator;
	}

	class QTranslator extends QObject {
		___pointer: number;
		QTranslator_PTR():QTranslator;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectIsEmpty(f:()=>boolean):void;
		DisconnectIsEmpty():void;
		IsEmpty():boolean;
		IsEmptyDefault():boolean;
		Load(filename:string,directory:string,search_delimiters:string,suffix:string):boolean;
		Load2(locale:QLocale_ITF,filename:string,prefix:string,directory:string,suffix:string):boolean;
		Load3(data:string,l:number,directory:string):boolean;
		ConnectTranslate(f:(context:string,sourceText:string,disambiguation:string,n:number)=>string):void;
		DisconnectTranslate():void;
		Translate(context:string,sourceText:string,disambiguation:string,n:number):string;
		TranslateDefault(context:string,sourceText:string,disambiguation:string,n:number):string;
		ConnectDestroyQTranslator(f:()=>void):void;
		DisconnectDestroyQTranslator():void;
		DestroyQTranslator():void;
		DestroyQTranslatorDefault():void;
	}
	function NewQTranslatorFromPointer(ptr:number):QTranslator;
	function NewQTranslator(parent:QObject_ITF):QTranslator;
	interface QTransposeProxyModel_ITF extends QAbstractProxyModel_ITF {
		QTransposeProxyModel_PTR():QTransposeProxyModel;
	}

	class QTransposeProxyModel extends QAbstractProxyModel {
		___pointer: number;
		QTransposeProxyModel_PTR():QTransposeProxyModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectColumnCount(f:(parent:QModelIndex)=>number):void;
		DisconnectColumnCount():void;
		ColumnCount(parent:QModelIndex_ITF):number;
		ColumnCountDefault(parent:QModelIndex_ITF):number;
		ConnectIndex(f:(row:number,column:number,parent:QModelIndex)=>QModelIndex):void;
		DisconnectIndex():void;
		Index(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		IndexDefault(row:number,column:number,parent:QModelIndex_ITF):QModelIndex;
		ConnectMapFromSource(f:(sourceIndex:QModelIndex)=>QModelIndex):void;
		DisconnectMapFromSource():void;
		MapFromSource(sourceIndex:QModelIndex_ITF):QModelIndex;
		MapFromSourceDefault(sourceIndex:QModelIndex_ITF):QModelIndex;
		ConnectMapToSource(f:(proxyIndex:QModelIndex)=>QModelIndex):void;
		DisconnectMapToSource():void;
		MapToSource(proxyIndex:QModelIndex_ITF):QModelIndex;
		MapToSourceDefault(proxyIndex:QModelIndex_ITF):QModelIndex;
		ConnectParent(f:(index:QModelIndex)=>QModelIndex):void;
		DisconnectParent():void;
		Parent(index:QModelIndex_ITF):QModelIndex;
		ParentDefault(index:QModelIndex_ITF):QModelIndex;
		ConnectRowCount(f:(parent:QModelIndex)=>number):void;
		DisconnectRowCount():void;
		RowCount(parent:QModelIndex_ITF):number;
		RowCountDefault(parent:QModelIndex_ITF):number;
		ConnectDestroyQTransposeProxyModel(f:()=>void):void;
		DisconnectDestroyQTransposeProxyModel():void;
		DestroyQTransposeProxyModel():void;
		DestroyQTransposeProxyModelDefault():void;
	}
	function NewQTransposeProxyModelFromPointer(ptr:number):QTransposeProxyModel;
	function NewQTransposeProxyModel2(parent:QObject_ITF):QTransposeProxyModel;
	interface QTypedArrayData_ITF extends QArrayData_ITF {
		QTypedArrayData_PTR():QTypedArrayData;
	}

	class QTypedArrayData extends QArrayData {
		___pointer: number;
		QTypedArrayData_PTR():QTypedArrayData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTypedArrayData():void;
	}
	function NewQTypedArrayDataFromPointer(ptr:number):QTypedArrayData;
	interface QUnhandledException_ITF extends QException_ITF {
		QUnhandledException_PTR():QUnhandledException;
	}

	class QUnhandledException extends QException {
		___pointer: number;
		QUnhandledException_PTR():QUnhandledException;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQUnhandledException():void;
	}
	function NewQUnhandledExceptionFromPointer(ptr:number):QUnhandledException;
	interface QUrl_ITF {
		QUrl_PTR():QUrl;
	}

	class QUrl {
		___pointer: number;
		QUrl_PTR():QUrl;
		Pointer():number;
		SetPointer(p:number):void;
		Adjusted(options:number):QUrl;
		Authority(options:number):string;
		Clear():void;
		ErrorString():string;
		FileName(options:number):string;
		Fragment(options:number):string;
		FromAce(domai:QByteArray_ITF):string;
		FromEncoded(input:QByteArray_ITF,parsingMode:number):QUrl;
		FromLocalFile(localFile:string):QUrl;
		FromPercentEncoding(input:QByteArray_ITF):string;
		FromStringList(urls:string[],mode:number):QUrl[];
		FromUserInput(userInput:string):QUrl;
		FromUserInput2(userInput:string,workingDirectory:string,options:number):QUrl;
		HasFragment():boolean;
		HasQuery():boolean;
		Host(options:number):string;
		IdnWhitelist():string[];
		IsEmpty():boolean;
		IsLocalFile():boolean;
		IsParentOf(childUrl:QUrl_ITF):boolean;
		IsRelative():boolean;
		IsValid():boolean;
		Matches(url:QUrl_ITF,options:number):boolean;
		Password(options:number):string;
		Path(options:number):string;
		Port(defaultPort:number):number;
		Query(options:number):string;
		Resolved(relative:QUrl_ITF):QUrl;
		Scheme():string;
		SetAuthority(authority:string,mode:number):void;
		SetFragment(fragment:string,mode:number):void;
		SetHost(host:string,mode:number):void;
		SetIdnWhitelist(list:string[]):void;
		SetPassword(password:string,mode:number):void;
		SetPath(path:string,mode:number):void;
		SetPort(port:number):void;
		SetQuery(query:string,mode:number):void;
		SetQuery2(query:QUrlQuery_ITF):void;
		SetScheme(scheme:string):void;
		SetUrl(url:string,parsingMode:number):void;
		SetUserInfo(userInfo:string,mode:number):void;
		SetUserName(userName:string,mode:number):void;
		Swap(other:QUrl_ITF):void;
		ToAce(domai:string):QByteArray;
		ToDisplayString(options:number):string;
		ToEncoded(options:number):QByteArray;
		ToLocalFile():string;
		ToPercentEncoding(input:string,exclude:QByteArray_ITF,include:QByteArray_ITF):QByteArray;
		ToString(options:number):string;
		ToStringList(urls:QUrl[],options:number):string[];
		TopLevelDomain(options:number):string;
		Url(options:number):string;
		UserInfo(options:number):string;
		UserName(options:number):string;
		DestroyQUrl():void;
	}
	function NewQUrlFromPointer(ptr:number):QUrl;
	function NewQUrl():QUrl;
	function NewQUrl2(other:QUrl_ITF):QUrl;
	function NewQUrl3(url:string,parsingMode:number):QUrl;
	function NewQUrl4(other:QUrl_ITF):QUrl;
	function QUrl_FromAce(domai:QByteArray_ITF):string;
	function QUrl_FromEncoded(input:QByteArray_ITF,parsingMode:number):QUrl;
	function QUrl_FromLocalFile(localFile:string):QUrl;
	function QUrl_FromPercentEncoding(input:QByteArray_ITF):string;
	function QUrl_FromStringList(urls:string[],mode:number):QUrl[];
	function QUrl_FromUserInput(userInput:string):QUrl;
	function QUrl_FromUserInput2(userInput:string,workingDirectory:string,options:number):QUrl;
	function QUrl_IdnWhitelist():string[];
	function QUrl_SetIdnWhitelist(list:string[]):void;
	function QUrl_ToAce(domai:string):QByteArray;
	function QUrl_ToPercentEncoding(input:string,exclude:QByteArray_ITF,include:QByteArray_ITF):QByteArray;
	function QUrl_ToStringList(urls:QUrl[],options:number):string[];
	function NewQUrlQuery():QUrlQuery;
	function NewQUrlQuery2(url:QUrl_ITF):QUrlQuery;
	function NewQUrlQuery3(queryString:string):QUrlQuery;
	function NewQUrlQuery5(other:QUrlQuery_ITF):QUrlQuery;
	const QUrl__TolerantMode: number;
	const QUrl__StrictMode: number;
	const QUrl__DecodedMode: number;
	const QUrl__None: number;
	const QUrl__RemoveScheme: number;
	const QUrl__RemovePassword: number;
	const QUrl__RemoveUserInfo: number;
	const QUrl__RemovePort: number;
	const QUrl__RemoveAuthority: number;
	const QUrl__RemovePath: number;
	const QUrl__RemoveQuery: number;
	const QUrl__RemoveFragment: number;
	const QUrl__PreferLocalFile: number;
	const QUrl__StripTrailingSlash: number;
	const QUrl__RemoveFilename: number;
	const QUrl__NormalizePathSegments: number;
	const QUrl__PrettyDecoded: number;
	const QUrl__EncodeSpaces: number;
	const QUrl__EncodeUnicode: number;
	const QUrl__EncodeDelimiters: number;
	const QUrl__EncodeReserved: number;
	const QUrl__DecodeReserved: number;
	const QUrl__FullyEncoded: number;
	const QUrl__FullyDecoded: number;
	const QUrl__DefaultResolution: number;
	const QUrl__AssumeLocalFile: number;
	interface QUrlQuery_ITF {
		QUrlQuery_PTR():QUrlQuery;
	}

	class QUrlQuery {
		___pointer: number;
		QUrlQuery_PTR():QUrlQuery;
		Pointer():number;
		SetPointer(p:number):void;
		AddQueryItem(key:string,value:string):void;
		AllQueryItemValues(key:string,encoding:number):string[];
		Clear():void;
		DefaultQueryPairDelimiter():QChar;
		DefaultQueryValueDelimiter():QChar;
		HasQueryItem(key:string):boolean;
		IsEmpty():boolean;
		Query(encoding:number):string;
		QueryItemValue(key:string,encoding:number):string;
		QueryPairDelimiter():QChar;
		QueryValueDelimiter():QChar;
		RemoveAllQueryItems(key:string):void;
		RemoveQueryItem(key:string):void;
		SetQuery(queryString:string):void;
		SetQueryDelimiters(valueDelimiter:QChar_ITF,pairDelimiter:QChar_ITF):void;
		Swap(other:QUrlQuery_ITF):void;
		ToString(encoding:number):string;
		DestroyQUrlQuery():void;
	}
	function NewQUrlQueryFromPointer(ptr:number):QUrlQuery;
	function NewQUrlQuery():QUrlQuery;
	function NewQUrlQuery2(url:QUrl_ITF):QUrlQuery;
	function NewQUrlQuery3(queryString:string):QUrlQuery;
	function NewQUrlQuery5(other:QUrlQuery_ITF):QUrlQuery;
	function QUrlQuery_DefaultQueryPairDelimiter():QChar;
	function QUrlQuery_DefaultQueryValueDelimiter():QChar;
	interface QUrlTwoFlags_ITF {
		QUrlTwoFlags_PTR():QUrlTwoFlags;
	}

	class QUrlTwoFlags {
		___pointer: number;
		QUrlTwoFlags_PTR():QUrlTwoFlags;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQUrlTwoFlags():void;
	}
	function NewQUrlTwoFlagsFromPointer(ptr:number):QUrlTwoFlags;
	interface QUuid_ITF {
		QUuid_PTR():QUuid;
	}

	class QUuid {
		___pointer: number;
		QUuid_PTR():QUuid;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQUuid():void;
		CreateUuid():QUuid;
		CreateUuidV3(ns:QUuid_ITF,baseData:QByteArray_ITF):QUuid;
		CreateUuidV32(ns:QUuid_ITF,baseData:string):QUuid;
		CreateUuidV5(ns:QUuid_ITF,baseData:QByteArray_ITF):QUuid;
		CreateUuidV52(ns:QUuid_ITF,baseData:string):QUuid;
		FromRfc4122(bytes:QByteArray_ITF):QUuid;
		FromString(text:QStringView_ITF):QUuid;
		FromString2(text:QLatin1String_ITF):QUuid;
		IsNull():boolean;
		ToByteArray():QByteArray;
		ToByteArray2(mode:number):QByteArray;
		ToRfc4122():QByteArray;
		ToString():string;
		ToString2(mode:number):string;
		Variant():number;
		Version():number;
	}
	function NewQUuidFromPointer(ptr:number):QUuid;
	function NewQUuid2():QUuid;
	function NewQUuid3(l:number,w1:number,w2:number,b1:string,b2:string,b3:string,b4:string,b5:string,b6:string,b7:string,b8:string):QUuid;
	function NewQUuid4(text:string):QUuid;
	function NewQUuid(text:QByteArray_ITF):QUuid;
	function QUuid_CreateUuid():QUuid;
	function QUuid_CreateUuidV3(ns:QUuid_ITF,baseData:QByteArray_ITF):QUuid;
	function QUuid_CreateUuidV32(ns:QUuid_ITF,baseData:string):QUuid;
	function QUuid_CreateUuidV5(ns:QUuid_ITF,baseData:QByteArray_ITF):QUuid;
	function QUuid_CreateUuidV52(ns:QUuid_ITF,baseData:string):QUuid;
	function QUuid_FromRfc4122(bytes:QByteArray_ITF):QUuid;
	function QUuid_FromString(text:QStringView_ITF):QUuid;
	function QUuid_FromString2(text:QLatin1String_ITF):QUuid;
	const QUuid__VarUnknown: number;
	const QUuid__NCS: number;
	const QUuid__DCE: number;
	const QUuid__Microsoft: number;
	const QUuid__Reserved: number;
	const QUuid__VerUnknown: number;
	const QUuid__Time: number;
	const QUuid__EmbeddedPOSIX: number;
	const QUuid__Md5: number;
	const QUuid__Name: number;
	const QUuid__Random: number;
	const QUuid__Sha1: number;
	const QUuid__WithBraces: number;
	const QUuid__WithoutBraces: number;
	const QUuid__Id128: number;
	interface QVariant_ITF {
		QVariant_PTR():QVariant;
	}

	class QVariant {
		___pointer: number;
		QVariant_PTR():QVariant;
		Pointer():number;
		SetPointer(p:number):void;
		ToInterface():any;
		ToGoType(dst:any):void;
		CanConvert(targetTypeId:number):boolean;
		Clear():void;
		Convert(targetTypeId:number):boolean;
		IsNull():boolean;
		IsValid():boolean;
		NameToType(name:string):number;
		Swap(other:QVariant_ITF):void;
		ToBitArray():QBitArray;
		ToBool():boolean;
		ToByteArray():QByteArray;
		ToChar():QChar;
		ToDate():QDate;
		ToDateTime():QDateTime;
		ToDouble(ok:boolean):number;
		ToEasingCurve():QEasingCurve;
		ToFloat(ok:boolean):number;
		ToHash():Map<string,QVariant>;
		ToInt(ok:boolean):number;
		ToJsonArray():QJsonArray;
		ToJsonDocument():QJsonDocument;
		ToJsonObject():QJsonObject;
		ToJsonValue():QJsonValue;
		ToLine():QLine;
		ToLineF():QLineF;
		ToList():QVariant[];
		ToLocale():QLocale;
		ToLongLong(ok:boolean):number;
		ToMap():Map<string,QVariant>;
		ToModelIndex():QModelIndex;
		ToPersistentModelIndex():QPersistentModelIndex;
		ToPoint():QPoint;
		ToPointF():QPointF;
		ToReal(ok:boolean):number;
		ToRect():QRect;
		ToRectF():QRectF;
		ToRegExp():QRegExp;
		ToRegularExpression():QRegularExpression;
		ToSize():QSize;
		ToSizeF():QSizeF;
		ToString():string;
		ToStringList():string[];
		ToTime():QTime;
		ToUInt(ok:boolean):number;
		ToULongLong(ok:boolean):number;
		ToUrl():QUrl;
		ToUuid():QUuid;
		Type():number;
		TypeName():string;
		TypeToName(typeId:number):string;
		UserType():number;
		DestroyQVariant():void;
		ToColor():number;
		ToFont():number;
		ToImage():number;
		ToObject():QObject;
		ToIcon():number;
		ToBrush():number;
	}
	function NewQVariantFromPointer(ptr:number):QVariant;
	function NewQVariant1(i:any):QVariant;
	function NewQVariant():QVariant;
	function NewQVariant2(ty:number):QVariant;
	function NewQVariant3(typeId:number,copy:number):QVariant;
	function NewQVariant4(s:QDataStream_ITF):QVariant;
	function NewQVariant5(val:number):QVariant;
	function NewQVariant6(val:number):QVariant;
	function NewQVariant7(val:number):QVariant;
	function NewQVariant8(val:number):QVariant;
	function NewQVariant9(val:boolean):QVariant;
	function NewQVariant10(val:number):QVariant;
	function NewQVariant11(val:number):QVariant;
	function NewQVariant12(val:string):QVariant;
	function NewQVariant13(val:QByteArray_ITF):QVariant;
	function NewQVariant14(val:QBitArray_ITF):QVariant;
	function NewQVariant15(val:string):QVariant;
	function NewQVariant16(val:QLatin1String_ITF):QVariant;
	function NewQVariant17(val:string[]):QVariant;
	function NewQVariant18(c:QChar_ITF):QVariant;
	function NewQVariant19(val:QDate_ITF):QVariant;
	function NewQVariant20(val:QTime_ITF):QVariant;
	function NewQVariant21(val:QDateTime_ITF):QVariant;
	function NewQVariant22(val:QVariant[]):QVariant;
	function NewQVariant23(val:Map<string,QVariant>):QVariant;
	function NewQVariant24(val:Map<string,QVariant>):QVariant;
	function NewQVariant25(val:QSize_ITF):QVariant;
	function NewQVariant26(val:QSizeF_ITF):QVariant;
	function NewQVariant27(val:QPoint_ITF):QVariant;
	function NewQVariant28(val:QPointF_ITF):QVariant;
	function NewQVariant29(val:QLine_ITF):QVariant;
	function NewQVariant30(val:QLineF_ITF):QVariant;
	function NewQVariant31(val:QRect_ITF):QVariant;
	function NewQVariant32(val:QRectF_ITF):QVariant;
	function NewQVariant33(l:QLocale_ITF):QVariant;
	function NewQVariant34(regExp:QRegExp_ITF):QVariant;
	function NewQVariant35(re:QRegularExpression_ITF):QVariant;
	function NewQVariant36(val:QUrl_ITF):QVariant;
	function NewQVariant37(val:QEasingCurve_ITF):QVariant;
	function NewQVariant38(val:QUuid_ITF):QVariant;
	function NewQVariant39(val:QJsonValue_ITF):QVariant;
	function NewQVariant40(val:QJsonObject_ITF):QVariant;
	function NewQVariant41(val:QJsonArray_ITF):QVariant;
	function NewQVariant42(val:QJsonDocument_ITF):QVariant;
	function NewQVariant43(val:QModelIndex_ITF):QVariant;
	function NewQVariant44(val:QPersistentModelIndex_ITF):QVariant;
	function NewQVariant45(other:QVariant_ITF):QVariant;
	function QVariant_NameToType(name:string):number;
	function QVariant_TypeToName(typeId:number):string;
	function NewQVariantAnimation(parent:QObject_ITF):QVariantAnimation;
	const QVariant__Invalid: number;
	const QVariant__Bool: number;
	const QVariant__Int: number;
	const QVariant__UInt: number;
	const QVariant__LongLong: number;
	const QVariant__ULongLong: number;
	const QVariant__Double: number;
	const QVariant__Char: number;
	const QVariant__Map: number;
	const QVariant__List: number;
	const QVariant__String: number;
	const QVariant__StringList: number;
	const QVariant__ByteArray: number;
	const QVariant__BitArray: number;
	const QVariant__Date: number;
	const QVariant__Time: number;
	const QVariant__DateTime: number;
	const QVariant__Url: number;
	const QVariant__Locale: number;
	const QVariant__Rect: number;
	const QVariant__RectF: number;
	const QVariant__Size: number;
	const QVariant__SizeF: number;
	const QVariant__Line: number;
	const QVariant__LineF: number;
	const QVariant__Point: number;
	const QVariant__PointF: number;
	const QVariant__RegExp: number;
	const QVariant__RegularExpression: number;
	const QVariant__Hash: number;
	const QVariant__EasingCurve: number;
	const QVariant__Uuid: number;
	const QVariant__ModelIndex: number;
	const QVariant__PersistentModelIndex: number;
	const QVariant__Font: number;
	const QVariant__Pixmap: number;
	const QVariant__Brush: number;
	const QVariant__Color: number;
	const QVariant__Palette: number;
	const QVariant__Image: number;
	const QVariant__Polygon: number;
	const QVariant__Region: number;
	const QVariant__Bitmap: number;
	const QVariant__Cursor: number;
	const QVariant__KeySequence: number;
	const QVariant__Pen: number;
	const QVariant__TextLength: number;
	const QVariant__TextFormat: number;
	const QVariant__Matrix: number;
	const QVariant__Transform: number;
	const QVariant__Matrix4x4: number;
	const QVariant__Vector2D: number;
	const QVariant__Vector3D: number;
	const QVariant__Vector4D: number;
	const QVariant__Quaternion: number;
	const QVariant__PolygonF: number;
	const QVariant__Icon: number;
	const QVariant__SizePolicy: number;
	const QVariant__UserType: number;
	const QVariant__LastType: number;
	interface QVariantAnimation_ITF extends QAbstractAnimation_ITF {
		QVariantAnimation_PTR():QVariantAnimation;
	}

	class QVariantAnimation extends QAbstractAnimation {
		___pointer: number;
		QVariantAnimation_PTR():QVariantAnimation;
		Pointer():number;
		SetPointer(p:number):void;
		CurrentValue():QVariant;
		ConnectDuration(f:()=>number):void;
		DisconnectDuration():void;
		Duration():number;
		DurationDefault():number;
		EasingCurve():QEasingCurve;
		EndValue():QVariant;
		ConnectInterpolated(f:(from:QVariant,to:QVariant,progress:number)=>QVariant):void;
		DisconnectInterpolated():void;
		Interpolated(from:QVariant_ITF,to:QVariant_ITF,progress:number):QVariant;
		InterpolatedDefault(from:QVariant_ITF,to:QVariant_ITF,progress:number):QVariant;
		KeyValueAt(step:number):QVariant;
		SetDuration(msecs:number):void;
		SetEasingCurve(easing:QEasingCurve_ITF):void;
		SetEndValue(value:QVariant_ITF):void;
		SetKeyValueAt(step:number,value:QVariant_ITF):void;
		SetStartValue(value:QVariant_ITF):void;
		StartValue():QVariant;
		ConnectUpdateCurrentTime(f:(vi:number)=>void):void;
		DisconnectUpdateCurrentTime():void;
		UpdateCurrentTime(vi:number):void;
		UpdateCurrentTimeDefault(vi:number):void;
		ConnectUpdateCurrentValue(f:(value:QVariant)=>void):void;
		DisconnectUpdateCurrentValue():void;
		UpdateCurrentValue(value:QVariant_ITF):void;
		UpdateCurrentValueDefault(value:QVariant_ITF):void;
		ConnectValueChanged(f:(value:QVariant)=>void):void;
		DisconnectValueChanged():void;
		ValueChanged(value:QVariant_ITF):void;
		ConnectDestroyQVariantAnimation(f:()=>void):void;
		DisconnectDestroyQVariantAnimation():void;
		DestroyQVariantAnimation():void;
		DestroyQVariantAnimationDefault():void;
	}
	function NewQVariantAnimationFromPointer(ptr:number):QVariantAnimation;
	function NewQVariantAnimation(parent:QObject_ITF):QVariantAnimation;
	interface QVersionNumber_ITF {
		QVersionNumber_PTR():QVersionNumber;
	}

	class QVersionNumber {
		___pointer: number;
		QVersionNumber_PTR():QVersionNumber;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQVersionNumber():void;
		CommonPrefix(v1:QVersionNumber_ITF,v2:QVersionNumber_ITF):QVersionNumber;
		Compare(v1:QVersionNumber_ITF,v2:QVersionNumber_ITF):number;
		FromString(stri:string,suffixIndex:number):QVersionNumber;
		FromString2(stri:QLatin1String_ITF,suffixIndex:number):QVersionNumber;
		FromString3(stri:QStringView_ITF,suffixIndex:number):QVersionNumber;
		IsNormalized():boolean;
		IsNull():boolean;
		IsPrefixOf(other:QVersionNumber_ITF):boolean;
		MajorVersion():number;
		MicroVersion():number;
		MinorVersion():number;
		Normalized():QVersionNumber;
		SegmentAt(index:number):number;
		SegmentCount():number;
		Segments():number[];
		ToString():string;
	}
	function NewQVersionNumberFromPointer(ptr:number):QVersionNumber;
	function NewQVersionNumber():QVersionNumber;
	function NewQVersionNumber2(seg:number[]):QVersionNumber;
	function NewQVersionNumber3(seg:number[]):QVersionNumber;
	function NewQVersionNumber5(maj:number):QVersionNumber;
	function NewQVersionNumber6(maj:number,mi:number):QVersionNumber;
	function NewQVersionNumber7(maj:number,mi:number,mic:number):QVersionNumber;
	function QVersionNumber_CommonPrefix(v1:QVersionNumber_ITF,v2:QVersionNumber_ITF):QVersionNumber;
	function QVersionNumber_Compare(v1:QVersionNumber_ITF,v2:QVersionNumber_ITF):number;
	function QVersionNumber_FromString(stri:string,suffixIndex:number):QVersionNumber;
	function QVersionNumber_FromString2(stri:QLatin1String_ITF,suffixIndex:number):QVersionNumber;
	function QVersionNumber_FromString3(stri:QStringView_ITF,suffixIndex:number):QVersionNumber;
	interface QWaitCondition_ITF {
		QWaitCondition_PTR():QWaitCondition;
	}

	class QWaitCondition {
		___pointer: number;
		QWaitCondition_PTR():QWaitCondition;
		Pointer():number;
		SetPointer(p:number):void;
		Notify_all():void;
		Notify_one():void;
		Wait(lockedMutex:QMutex_ITF,ti:number):boolean;
		Wait3(lockedReadWriteLock:QReadWriteLock_ITF,ti:number):boolean;
		WakeAll():void;
		WakeOne():void;
		DestroyQWaitCondition():void;
	}
	function NewQWaitConditionFromPointer(ptr:number):QWaitCondition;
	function NewQWaitCondition():QWaitCondition;
	interface QWriteLocker_ITF {
		QWriteLocker_PTR():QWriteLocker;
	}

	class QWriteLocker {
		___pointer: number;
		QWriteLocker_PTR():QWriteLocker;
		Pointer():number;
		SetPointer(p:number):void;
		ReadWriteLock():QReadWriteLock;
		Relock():void;
		Unlock():void;
		DestroyQWriteLocker():void;
	}
	function NewQWriteLockerFromPointer(ptr:number):QWriteLocker;
	function NewQWriteLocker(lock:QReadWriteLock_ITF):QWriteLocker;
	interface QXmlStreamAttribute_ITF {
		QXmlStreamAttribute_PTR():QXmlStreamAttribute;
	}

	class QXmlStreamAttribute {
		___pointer: number;
		QXmlStreamAttribute_PTR():QXmlStreamAttribute;
		Pointer():number;
		SetPointer(p:number):void;
		IsDefault():boolean;
		Name():QStringRef;
		NamespaceUri():QStringRef;
		Prefix():QStringRef;
		QualifiedName():QStringRef;
		Value():QStringRef;
		DestroyQXmlStreamAttribute():void;
	}
	function NewQXmlStreamAttributeFromPointer(ptr:number):QXmlStreamAttribute;
	function NewQXmlStreamAttribute():QXmlStreamAttribute;
	function NewQXmlStreamAttribute2(qualifiedName:string,value:string):QXmlStreamAttribute;
	function NewQXmlStreamAttribute3(namespaceUri:string,name:string,value:string):QXmlStreamAttribute;
	function NewQXmlStreamAttribute4(other:QXmlStreamAttribute_ITF):QXmlStreamAttribute;
	function NewQXmlStreamAttributes():QXmlStreamAttributes;
	interface QXmlStreamAttributes_ITF extends QVector_ITF {
		QXmlStreamAttributes_PTR():QXmlStreamAttributes;
	}

	class QXmlStreamAttributes extends QVector {
		___pointer: number;
		QXmlStreamAttributes_PTR():QXmlStreamAttributes;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQXmlStreamAttributes():void;
		Append(namespaceUri:string,name:string,value:string):void;
		Append2(qualifiedName:string,value:string):void;
		HasAttribute(qualifiedName:string):boolean;
		HasAttribute2(qualifiedName:QLatin1String_ITF):boolean;
		HasAttribute3(namespaceUri:string,name:string):boolean;
		Value(namespaceUri:string,name:string):QStringRef;
		Value2(namespaceUri:string,name:QLatin1String_ITF):QStringRef;
		Value3(namespaceUri:QLatin1String_ITF,name:QLatin1String_ITF):QStringRef;
		Value4(qualifiedName:string):QStringRef;
		Value5(qualifiedName:QLatin1String_ITF):QStringRef;
	}
	function NewQXmlStreamAttributesFromPointer(ptr:number):QXmlStreamAttributes;
	function NewQXmlStreamAttributes():QXmlStreamAttributes;
	interface QXmlStreamEntityDeclaration_ITF {
		QXmlStreamEntityDeclaration_PTR():QXmlStreamEntityDeclaration;
	}

	class QXmlStreamEntityDeclaration {
		___pointer: number;
		QXmlStreamEntityDeclaration_PTR():QXmlStreamEntityDeclaration;
		Pointer():number;
		SetPointer(p:number):void;
		Name():QStringRef;
		NotationName():QStringRef;
		PublicId():QStringRef;
		SystemId():QStringRef;
		Value():QStringRef;
		DestroyQXmlStreamEntityDeclaration():void;
	}
	function NewQXmlStreamEntityDeclarationFromPointer(ptr:number):QXmlStreamEntityDeclaration;
	function NewQXmlStreamEntityDeclaration():QXmlStreamEntityDeclaration;
	function NewQXmlStreamEntityDeclaration2(other:QXmlStreamEntityDeclaration_ITF):QXmlStreamEntityDeclaration;
	interface QXmlStreamEntityResolver_ITF {
		QXmlStreamEntityResolver_PTR():QXmlStreamEntityResolver;
	}

	class QXmlStreamEntityResolver {
		___pointer: number;
		QXmlStreamEntityResolver_PTR():QXmlStreamEntityResolver;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectResolveUndeclaredEntity(f:(name:string)=>string):void;
		DisconnectResolveUndeclaredEntity():void;
		ResolveUndeclaredEntity(name:string):string;
		ResolveUndeclaredEntityDefault(name:string):string;
		ConnectDestroyQXmlStreamEntityResolver(f:()=>void):void;
		DisconnectDestroyQXmlStreamEntityResolver():void;
		DestroyQXmlStreamEntityResolver():void;
		DestroyQXmlStreamEntityResolverDefault():void;
	}
	function NewQXmlStreamEntityResolverFromPointer(ptr:number):QXmlStreamEntityResolver;
	interface QXmlStreamNamespaceDeclaration_ITF {
		QXmlStreamNamespaceDeclaration_PTR():QXmlStreamNamespaceDeclaration;
	}

	class QXmlStreamNamespaceDeclaration {
		___pointer: number;
		QXmlStreamNamespaceDeclaration_PTR():QXmlStreamNamespaceDeclaration;
		Pointer():number;
		SetPointer(p:number):void;
		NamespaceUri():QStringRef;
		Prefix():QStringRef;
		DestroyQXmlStreamNamespaceDeclaration():void;
	}
	function NewQXmlStreamNamespaceDeclarationFromPointer(ptr:number):QXmlStreamNamespaceDeclaration;
	function NewQXmlStreamNamespaceDeclaration():QXmlStreamNamespaceDeclaration;
	function NewQXmlStreamNamespaceDeclaration2(other:QXmlStreamNamespaceDeclaration_ITF):QXmlStreamNamespaceDeclaration;
	function NewQXmlStreamNamespaceDeclaration4(prefix:string,namespaceUri:string):QXmlStreamNamespaceDeclaration;
	interface QXmlStreamNotationDeclaration_ITF {
		QXmlStreamNotationDeclaration_PTR():QXmlStreamNotationDeclaration;
	}

	class QXmlStreamNotationDeclaration {
		___pointer: number;
		QXmlStreamNotationDeclaration_PTR():QXmlStreamNotationDeclaration;
		Pointer():number;
		SetPointer(p:number):void;
		Name():QStringRef;
		PublicId():QStringRef;
		SystemId():QStringRef;
		DestroyQXmlStreamNotationDeclaration():void;
	}
	function NewQXmlStreamNotationDeclarationFromPointer(ptr:number):QXmlStreamNotationDeclaration;
	function NewQXmlStreamNotationDeclaration():QXmlStreamNotationDeclaration;
	function NewQXmlStreamNotationDeclaration2(other:QXmlStreamNotationDeclaration_ITF):QXmlStreamNotationDeclaration;
	interface QXmlStreamReader_ITF {
		QXmlStreamReader_PTR():QXmlStreamReader;
	}

	class QXmlStreamReader {
		___pointer: number;
		QXmlStreamReader_PTR():QXmlStreamReader;
		Pointer():number;
		SetPointer(p:number):void;
		AddData(data:QByteArray_ITF):void;
		AddData2(data:string):void;
		AddData3(data:string):void;
		AddExtraNamespaceDeclaration(extraNamespaceDeclaration:QXmlStreamNamespaceDeclaration_ITF):void;
		AtEnd():boolean;
		CharacterOffset():number;
		Clear():void;
		ColumnNumber():number;
		Device():QIODevice;
		DocumentEncoding():QStringRef;
		DocumentVersion():QStringRef;
		DtdName():QStringRef;
		DtdPublicId():QStringRef;
		DtdSystemId():QStringRef;
		EntityResolver():QXmlStreamEntityResolver;
		Error():number;
		ErrorString():string;
		HasError():boolean;
		IsCDATA():boolean;
		IsCharacters():boolean;
		IsComment():boolean;
		IsDTD():boolean;
		IsEndDocument():boolean;
		IsEndElement():boolean;
		IsEntityReference():boolean;
		IsProcessingInstruction():boolean;
		IsStandaloneDocument():boolean;
		IsStartDocument():boolean;
		IsStartElement():boolean;
		IsWhitespace():boolean;
		LineNumber():number;
		Name():QStringRef;
		NamespaceProcessing():boolean;
		NamespaceUri():QStringRef;
		Prefix():QStringRef;
		ProcessingInstructionData():QStringRef;
		ProcessingInstructionTarget():QStringRef;
		QualifiedName():QStringRef;
		RaiseError(message:string):void;
		ReadElementText(behaviour:number):string;
		ReadNext():number;
		ReadNextStartElement():boolean;
		SetDevice(device:QIODevice_ITF):void;
		SetEntityResolver(resolver:QXmlStreamEntityResolver_ITF):void;
		SetNamespaceProcessing(vbo:boolean):void;
		SkipCurrentElement():void;
		Text():QStringRef;
		TokenString():string;
		TokenType():number;
		DestroyQXmlStreamReader():void;
	}
	function NewQXmlStreamReaderFromPointer(ptr:number):QXmlStreamReader;
	function NewQXmlStreamReader():QXmlStreamReader;
	function NewQXmlStreamReader2(device:QIODevice_ITF):QXmlStreamReader;
	function NewQXmlStreamReader3(data:QByteArray_ITF):QXmlStreamReader;
	function NewQXmlStreamReader4(data:string):QXmlStreamReader;
	function NewQXmlStreamReader5(data:string):QXmlStreamReader;
	const QXmlStreamReader__NoToken: number;
	const QXmlStreamReader__Invalid: number;
	const QXmlStreamReader__StartDocument: number;
	const QXmlStreamReader__EndDocument: number;
	const QXmlStreamReader__StartElement: number;
	const QXmlStreamReader__EndElement: number;
	const QXmlStreamReader__Characters: number;
	const QXmlStreamReader__Comment: number;
	const QXmlStreamReader__DTD: number;
	const QXmlStreamReader__EntityReference: number;
	const QXmlStreamReader__ProcessingInstruction: number;
	const QXmlStreamReader__ErrorOnUnexpectedElement: number;
	const QXmlStreamReader__IncludeChildElements: number;
	const QXmlStreamReader__SkipChildElements: number;
	const QXmlStreamReader__NoError: number;
	const QXmlStreamReader__UnexpectedElementError: number;
	const QXmlStreamReader__CustomError: number;
	const QXmlStreamReader__NotWellFormedError: number;
	const QXmlStreamReader__PrematureEndOfDocumentError: number;
	interface QXmlStreamWriter_ITF {
		QXmlStreamWriter_PTR():QXmlStreamWriter;
	}

	class QXmlStreamWriter {
		___pointer: number;
		QXmlStreamWriter_PTR():QXmlStreamWriter;
		Pointer():number;
		SetPointer(p:number):void;
		AutoFormatting():boolean;
		AutoFormattingIndent():number;
		Codec():QTextCodec;
		Device():QIODevice;
		HasError():boolean;
		SetAutoFormatting(enable:boolean):void;
		SetAutoFormattingIndent(spacesOrTabs:number):void;
		SetCodec(codec:QTextCodec_ITF):void;
		SetCodec2(codecName:string):void;
		SetDevice(device:QIODevice_ITF):void;
		WriteAttribute(namespaceUri:string,name:string,value:string):void;
		WriteAttribute2(qualifiedName:string,value:string):void;
		WriteAttribute3(attribute:QXmlStreamAttribute_ITF):void;
		WriteAttributes(attributes:QXmlStreamAttributes_ITF):void;
		WriteCDATA(text:string):void;
		WriteCharacters(text:string):void;
		WriteComment(text:string):void;
		WriteCurrentToken(reader:QXmlStreamReader_ITF):void;
		WriteDTD(dtd:string):void;
		WriteDefaultNamespace(namespaceUri:string):void;
		WriteEmptyElement(namespaceUri:string,name:string):void;
		WriteEmptyElement2(qualifiedName:string):void;
		WriteEndDocument():void;
		WriteEndElement():void;
		WriteEntityReference(name:string):void;
		WriteNamespace(namespaceUri:string,prefix:string):void;
		WriteProcessingInstruction(target:string,data:string):void;
		WriteStartDocument(version:string):void;
		WriteStartDocument2():void;
		WriteStartDocument3(version:string,standalone:boolean):void;
		WriteStartElement(namespaceUri:string,name:string):void;
		WriteStartElement2(qualifiedName:string):void;
		WriteTextElement(namespaceUri:string,name:string,text:string):void;
		WriteTextElement2(qualifiedName:string,text:string):void;
		DestroyQXmlStreamWriter():void;
	}
	function NewQXmlStreamWriterFromPointer(ptr:number):QXmlStreamWriter;
	function NewQXmlStreamWriter():QXmlStreamWriter;
	function NewQXmlStreamWriter2(device:QIODevice_ITF):QXmlStreamWriter;
	function NewQXmlStreamWriter3(array:QByteArray_ITF):QXmlStreamWriter;
	function NewQXmlStreamWriter4(stri:string):QXmlStreamWriter;
	interface Qt_ITF {
		Qt_PTR():Qt;
	}

	class Qt {
		___pointer: number;
		Qt_PTR():Qt;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQt():void;
		ConvertFromPlainText(plai:string,mode:number):string;
		MightBeRichText(text:string):boolean;
	}
	function NewQtFromPointer(ptr:number):Qt;
	function Qt_ConvertFromPlainText(plai:string,mode:number):string;
	function Qt_MightBeRichText(text:string):boolean;
	const Qt__color0: number;
	const Qt__color1: number;
	const Qt__black: number;
	const Qt__white: number;
	const Qt__darkGray: number;
	const Qt__gray: number;
	const Qt__lightGray: number;
	const Qt__red: number;
	const Qt__green: number;
	const Qt__blue: number;
	const Qt__cyan: number;
	const Qt__magenta: number;
	const Qt__yellow: number;
	const Qt__darkRed: number;
	const Qt__darkGreen: number;
	const Qt__darkBlue: number;
	const Qt__darkCyan: number;
	const Qt__darkMagenta: number;
	const Qt__darkYellow: number;
	const Qt__transparent: number;
	const Qt__NoModifier: number;
	const Qt__ShiftModifier: number;
	const Qt__ControlModifier: number;
	const Qt__AltModifier: number;
	const Qt__MetaModifier: number;
	const Qt__KeypadModifier: number;
	const Qt__GroupSwitchModifier: number;
	const Qt__KeyboardModifierMask: number;
	const Qt__META: number;
	const Qt__SHIFT: number;
	const Qt__CTRL: number;
	const Qt__ALT: number;
	const Qt__MODIFIER_MASK: number;
	const Qt__UNICODE_ACCEL: number;
	const Qt__NoButton: number;
	const Qt__LeftButton: number;
	const Qt__RightButton: number;
	const Qt__MidButton: number;
	const Qt__MiddleButton: number;
	const Qt__BackButton: number;
	const Qt__XButton1: number;
	const Qt__ExtraButton1: number;
	const Qt__ForwardButton: number;
	const Qt__XButton2: number;
	const Qt__ExtraButton2: number;
	const Qt__TaskButton: number;
	const Qt__ExtraButton3: number;
	const Qt__ExtraButton4: number;
	const Qt__ExtraButton5: number;
	const Qt__ExtraButton6: number;
	const Qt__ExtraButton7: number;
	const Qt__ExtraButton8: number;
	const Qt__ExtraButton9: number;
	const Qt__ExtraButton10: number;
	const Qt__ExtraButton11: number;
	const Qt__ExtraButton12: number;
	const Qt__ExtraButton13: number;
	const Qt__ExtraButton14: number;
	const Qt__ExtraButton15: number;
	const Qt__ExtraButton16: number;
	const Qt__ExtraButton17: number;
	const Qt__ExtraButton18: number;
	const Qt__ExtraButton19: number;
	const Qt__ExtraButton20: number;
	const Qt__ExtraButton21: number;
	const Qt__ExtraButton22: number;
	const Qt__ExtraButton23: number;
	const Qt__ExtraButton24: number;
	const Qt__AllButtons: number;
	const Qt__MaxMouseButton: number;
	const Qt__MouseButtonMask: number;
	const Qt__Horizontal: number;
	const Qt__Vertical: number;
	const Qt__NoFocus: number;
	const Qt__TabFocus: number;
	const Qt__ClickFocus: number;
	const Qt__StrongFocus: number;
	const Qt__WheelFocus: number;
	const Qt__NoTabFocus: number;
	const Qt__TabFocusTextControls: number;
	const Qt__TabFocusListControls: number;
	const Qt__TabFocusAllControls: number;
	const Qt__AscendingOrder: number;
	const Qt__DescendingOrder: number;
	const Qt__StretchTile: number;
	const Qt__RepeatTile: number;
	const Qt__RoundTile: number;
	const Qt__AlignLeft: number;
	const Qt__AlignLeading: number;
	const Qt__AlignRight: number;
	const Qt__AlignTrailing: number;
	const Qt__AlignHCenter: number;
	const Qt__AlignJustify: number;
	const Qt__AlignAbsolute: number;
	const Qt__AlignHorizontal_Mask: number;
	const Qt__AlignTop: number;
	const Qt__AlignBottom: number;
	const Qt__AlignVCenter: number;
	const Qt__AlignBaseline: number;
	const Qt__AlignVertical_Mask: number;
	const Qt__AlignCenter: number;
	const Qt__TextSingleLine: number;
	const Qt__TextDontClip: number;
	const Qt__TextExpandTabs: number;
	const Qt__TextShowMnemonic: number;
	const Qt__TextWordWrap: number;
	const Qt__TextWrapAnywhere: number;
	const Qt__TextDontPrint: number;
	const Qt__TextIncludeTrailingSpaces: number;
	const Qt__TextHideMnemonic: number;
	const Qt__TextJustificationForced: number;
	const Qt__TextForceLeftToRight: number;
	const Qt__TextForceRightToLeft: number;
	const Qt__TextLongestVariant: number;
	const Qt__TextBypassShaping: number;
	const Qt__ElideLeft: number;
	const Qt__ElideRight: number;
	const Qt__ElideMiddle: number;
	const Qt__ElideNone: number;
	const Qt__WhiteSpaceNormal: number;
	const Qt__WhiteSpacePre: number;
	const Qt__WhiteSpaceNoWrap: number;
	const Qt__WhiteSpaceModeUndefined: number;
	const Qt__ExactHit: number;
	const Qt__FuzzyHit: number;
	const Qt__Widget: number;
	const Qt__Window: number;
	const Qt__Dialog: number;
	const Qt__Sheet: number;
	const Qt__Drawer: number;
	const Qt__Popup: number;
	const Qt__Tool: number;
	const Qt__ToolTip: number;
	const Qt__SplashScreen: number;
	const Qt__Desktop: number;
	const Qt__SubWindow: number;
	const Qt__ForeignWindow: number;
	const Qt__CoverWindow: number;
	const Qt__WindowType_Mask: number;
	const Qt__MSWindowsFixedSizeDialogHint: number;
	const Qt__MSWindowsOwnDC: number;
	const Qt__BypassWindowManagerHint: number;
	const Qt__X11BypassWindowManagerHint: number;
	const Qt__FramelessWindowHint: number;
	const Qt__WindowTitleHint: number;
	const Qt__WindowSystemMenuHint: number;
	const Qt__WindowMinimizeButtonHint: number;
	const Qt__WindowMaximizeButtonHint: number;
	const Qt__WindowMinMaxButtonsHint: number;
	const Qt__WindowContextHelpButtonHint: number;
	const Qt__WindowShadeButtonHint: number;
	const Qt__WindowStaysOnTopHint: number;
	const Qt__WindowTransparentForInput: number;
	const Qt__WindowOverridesSystemGestures: number;
	const Qt__WindowDoesNotAcceptFocus: number;
	const Qt__MaximizeUsingFullscreenGeometryHint: number;
	const Qt__CustomizeWindowHint: number;
	const Qt__WindowStaysOnBottomHint: number;
	const Qt__WindowCloseButtonHint: number;
	const Qt__MacWindowToolBarButtonHint: number;
	const Qt__BypassGraphicsProxyWidget: number;
	const Qt__NoDropShadowWindowHint: number;
	const Qt__WindowFullscreenButtonHint: number;
	const Qt__WindowNoState: number;
	const Qt__WindowMinimized: number;
	const Qt__WindowMaximized: number;
	const Qt__WindowFullScreen: number;
	const Qt__WindowActive: number;
	const Qt__ApplicationSuspended: number;
	const Qt__ApplicationHidden: number;
	const Qt__ApplicationInactive: number;
	const Qt__ApplicationActive: number;
	const Qt__PrimaryOrientation: number;
	const Qt__PortraitOrientation: number;
	const Qt__LandscapeOrientation: number;
	const Qt__InvertedPortraitOrientation: number;
	const Qt__InvertedLandscapeOrientation: number;
	const Qt__WA_Disabled: number;
	const Qt__WA_UnderMouse: number;
	const Qt__WA_MouseTracking: number;
	const Qt__WA_ContentsPropagated: number;
	const Qt__WA_OpaquePaintEvent: number;
	const Qt__WA_NoBackground: number;
	const Qt__WA_StaticContents: number;
	const Qt__WA_LaidOut: number;
	const Qt__WA_PaintOnScreen: number;
	const Qt__WA_NoSystemBackground: number;
	const Qt__WA_UpdatesDisabled: number;
	const Qt__WA_Mapped: number;
	const Qt__WA_MacNoClickThrough: number;
	const Qt__WA_InputMethodEnabled: number;
	const Qt__WA_WState_Visible: number;
	const Qt__WA_WState_Hidden: number;
	const Qt__WA_ForceDisabled: number;
	const Qt__WA_KeyCompression: number;
	const Qt__WA_PendingMoveEvent: number;
	const Qt__WA_PendingResizeEvent: number;
	const Qt__WA_SetPalette: number;
	const Qt__WA_SetFont: number;
	const Qt__WA_SetCursor: number;
	const Qt__WA_NoChildEventsFromChildren: number;
	const Qt__WA_WindowModified: number;
	const Qt__WA_Resized: number;
	const Qt__WA_Moved: number;
	const Qt__WA_PendingUpdate: number;
	const Qt__WA_InvalidSize: number;
	const Qt__WA_MacBrushedMetal: number;
	const Qt__WA_MacMetalStyle: number;
	const Qt__WA_CustomWhatsThis: number;
	const Qt__WA_LayoutOnEntireRect: number;
	const Qt__WA_OutsideWSRange: number;
	const Qt__WA_GrabbedShortcut: number;
	const Qt__WA_TransparentForMouseEvents: number;
	const Qt__WA_PaintUnclipped: number;
	const Qt__WA_SetWindowIcon: number;
	const Qt__WA_NoMouseReplay: number;
	const Qt__WA_DeleteOnClose: number;
	const Qt__WA_RightToLeft: number;
	const Qt__WA_SetLayoutDirection: number;
	const Qt__WA_NoChildEventsForParent: number;
	const Qt__WA_ForceUpdatesDisabled: number;
	const Qt__WA_WState_Created: number;
	const Qt__WA_WState_CompressKeys: number;
	const Qt__WA_WState_InPaintEvent: number;
	const Qt__WA_WState_Reparented: number;
	const Qt__WA_WState_ConfigPending: number;
	const Qt__WA_WState_Polished: number;
	const Qt__WA_WState_DND: number;
	const Qt__WA_WState_OwnSizePolicy: number;
	const Qt__WA_WState_ExplicitShowHide: number;
	const Qt__WA_ShowModal: number;
	const Qt__WA_MouseNoMask: number;
	const Qt__WA_GroupLeader: number;
	const Qt__WA_NoMousePropagation: number;
	const Qt__WA_Hover: number;
	const Qt__WA_InputMethodTransparent: number;
	const Qt__WA_QuitOnClose: number;
	const Qt__WA_KeyboardFocusChange: number;
	const Qt__WA_AcceptDrops: number;
	const Qt__WA_DropSiteRegistered: number;
	const Qt__WA_ForceAcceptDrops: number;
	const Qt__WA_WindowPropagation: number;
	const Qt__WA_NoX11EventCompression: number;
	const Qt__WA_TintedBackground: number;
	const Qt__WA_X11OpenGLOverlay: number;
	const Qt__WA_AlwaysShowToolTips: number;
	const Qt__WA_MacOpaqueSizeGrip: number;
	const Qt__WA_SetStyle: number;
	const Qt__WA_SetLocale: number;
	const Qt__WA_MacShowFocusRect: number;
	const Qt__WA_MacNormalSize: number;
	const Qt__WA_MacSmallSize: number;
	const Qt__WA_MacMiniSize: number;
	const Qt__WA_LayoutUsesWidgetRect: number;
	const Qt__WA_StyledBackground: number;
	const Qt__WA_MSWindowsUseDirect3D: number;
	const Qt__WA_CanHostQMdiSubWindowTitleBar: number;
	const Qt__WA_MacAlwaysShowToolWindow: number;
	const Qt__WA_StyleSheet: number;
	const Qt__WA_ShowWithoutActivating: number;
	const Qt__WA_X11BypassTransientForHint: number;
	const Qt__WA_NativeWindow: number;
	const Qt__WA_DontCreateNativeAncestors: number;
	const Qt__WA_MacVariableSize: number;
	const Qt__WA_DontShowOnScreen: number;
	const Qt__WA_X11NetWmWindowTypeDesktop: number;
	const Qt__WA_X11NetWmWindowTypeDock: number;
	const Qt__WA_X11NetWmWindowTypeToolBar: number;
	const Qt__WA_X11NetWmWindowTypeMenu: number;
	const Qt__WA_X11NetWmWindowTypeUtility: number;
	const Qt__WA_X11NetWmWindowTypeSplash: number;
	const Qt__WA_X11NetWmWindowTypeDialog: number;
	const Qt__WA_X11NetWmWindowTypeDropDownMenu: number;
	const Qt__WA_X11NetWmWindowTypePopupMenu: number;
	const Qt__WA_X11NetWmWindowTypeToolTip: number;
	const Qt__WA_X11NetWmWindowTypeNotification: number;
	const Qt__WA_X11NetWmWindowTypeCombo: number;
	const Qt__WA_X11NetWmWindowTypeDND: number;
	const Qt__WA_MacFrameworkScaled: number;
	const Qt__WA_SetWindowModality: number;
	const Qt__WA_WState_WindowOpacitySet: number;
	const Qt__WA_TranslucentBackground: number;
	const Qt__WA_AcceptTouchEvents: number;
	const Qt__WA_WState_AcceptedTouchBeginEvent: number;
	const Qt__WA_TouchPadAcceptSingleTouchEvents: number;
	const Qt__WA_X11DoNotAcceptFocus: number;
	const Qt__WA_MacNoShadow: number;
	const Qt__WA_AlwaysStackOnTop: number;
	const Qt__WA_TabletTracking: number;
	const Qt__WA_ContentsMarginsRespectsSafeArea: number;
	const Qt__WA_StyleSheetTarget: number;
	const Qt__WA_AttributeCount: number;
	const Qt__AA_ImmediateWidgetCreation: number;
	const Qt__AA_MSWindowsUseDirect3DByDefault: number;
	const Qt__AA_DontShowIconsInMenus: number;
	const Qt__AA_NativeWindows: number;
	const Qt__AA_DontCreateNativeWidgetSiblings: number;
	const Qt__AA_PluginApplication: number;
	const Qt__AA_MacPluginApplication: number;
	const Qt__AA_DontUseNativeMenuBar: number;
	const Qt__AA_MacDontSwapCtrlAndMeta: number;
	const Qt__AA_Use96Dpi: number;
	const Qt__AA_X11InitThreads: number;
	const Qt__AA_SynthesizeTouchForUnhandledMouseEvents: number;
	const Qt__AA_SynthesizeMouseForUnhandledTouchEvents: number;
	const Qt__AA_UseHighDpiPixmaps: number;
	const Qt__AA_ForceRasterWidgets: number;
	const Qt__AA_UseDesktopOpenGL: number;
	const Qt__AA_UseOpenGLES: number;
	const Qt__AA_UseSoftwareOpenGL: number;
	const Qt__AA_ShareOpenGLContexts: number;
	const Qt__AA_SetPalette: number;
	const Qt__AA_EnableHighDpiScaling: number;
	const Qt__AA_DisableHighDpiScaling: number;
	const Qt__AA_UseStyleSheetPropagationInWidgetStyles: number;
	const Qt__AA_DontUseNativeDialogs: number;
	const Qt__AA_SynthesizeMouseForUnhandledTabletEvents: number;
	const Qt__AA_CompressHighFrequencyEvents: number;
	const Qt__AA_DontCheckOpenGLContextThreadAffinity: number;
	const Qt__AA_DisableShaderDiskCache: number;
	const Qt__AA_DontShowShortcutsInContextMenus: number;
	const Qt__AA_CompressTabletEvents: number;
	const Qt__AA_DisableWindowContextHelpButton: number;
	const Qt__AA_AttributeCount: number;
	const Qt__ColorMode_Mask: number;
	const Qt__AutoColor: number;
	const Qt__ColorOnly: number;
	const Qt__MonoOnly: number;
	const Qt__AlphaDither_Mask: number;
	const Qt__ThresholdAlphaDither: number;
	const Qt__OrderedAlphaDither: number;
	const Qt__DiffuseAlphaDither: number;
	const Qt__NoAlpha: number;
	const Qt__Dither_Mask: number;
	const Qt__DiffuseDither: number;
	const Qt__OrderedDither: number;
	const Qt__ThresholdDither: number;
	const Qt__DitherMode_Mask: number;
	const Qt__AutoDither: number;
	const Qt__PreferDither: number;
	const Qt__AvoidDither: number;
	const Qt__NoOpaqueDetection: number;
	const Qt__NoFormatConversion: number;
	const Qt__TransparentMode: number;
	const Qt__OpaqueMode: number;
	const Qt__Key_Escape: number;
	const Qt__Key_Tab: number;
	const Qt__Key_Backtab: number;
	const Qt__Key_Backspace: number;
	const Qt__Key_Return: number;
	const Qt__Key_Enter: number;
	const Qt__Key_Insert: number;
	const Qt__Key_Delete: number;
	const Qt__Key_Pause: number;
	const Qt__Key_Print: number;
	const Qt__Key_SysReq: number;
	const Qt__Key_Clear: number;
	const Qt__Key_Home: number;
	const Qt__Key_End: number;
	const Qt__Key_Left: number;
	const Qt__Key_Up: number;
	const Qt__Key_Right: number;
	const Qt__Key_Down: number;
	const Qt__Key_PageUp: number;
	const Qt__Key_PageDown: number;
	const Qt__Key_Shift: number;
	const Qt__Key_Control: number;
	const Qt__Key_Meta: number;
	const Qt__Key_Alt: number;
	const Qt__Key_CapsLock: number;
	const Qt__Key_NumLock: number;
	const Qt__Key_ScrollLock: number;
	const Qt__Key_F1: number;
	const Qt__Key_F2: number;
	const Qt__Key_F3: number;
	const Qt__Key_F4: number;
	const Qt__Key_F5: number;
	const Qt__Key_F6: number;
	const Qt__Key_F7: number;
	const Qt__Key_F8: number;
	const Qt__Key_F9: number;
	const Qt__Key_F10: number;
	const Qt__Key_F11: number;
	const Qt__Key_F12: number;
	const Qt__Key_F13: number;
	const Qt__Key_F14: number;
	const Qt__Key_F15: number;
	const Qt__Key_F16: number;
	const Qt__Key_F17: number;
	const Qt__Key_F18: number;
	const Qt__Key_F19: number;
	const Qt__Key_F20: number;
	const Qt__Key_F21: number;
	const Qt__Key_F22: number;
	const Qt__Key_F23: number;
	const Qt__Key_F24: number;
	const Qt__Key_F25: number;
	const Qt__Key_F26: number;
	const Qt__Key_F27: number;
	const Qt__Key_F28: number;
	const Qt__Key_F29: number;
	const Qt__Key_F30: number;
	const Qt__Key_F31: number;
	const Qt__Key_F32: number;
	const Qt__Key_F33: number;
	const Qt__Key_F34: number;
	const Qt__Key_F35: number;
	const Qt__Key_Super_L: number;
	const Qt__Key_Super_R: number;
	const Qt__Key_Menu: number;
	const Qt__Key_Hyper_L: number;
	const Qt__Key_Hyper_R: number;
	const Qt__Key_Help: number;
	const Qt__Key_Direction_L: number;
	const Qt__Key_Direction_R: number;
	const Qt__Key_Space: number;
	const Qt__Key_Any: number;
	const Qt__Key_Exclam: number;
	const Qt__Key_QuoteDbl: number;
	const Qt__Key_NumberSign: number;
	const Qt__Key_Dollar: number;
	const Qt__Key_Percent: number;
	const Qt__Key_Ampersand: number;
	const Qt__Key_Apostrophe: number;
	const Qt__Key_ParenLeft: number;
	const Qt__Key_ParenRight: number;
	const Qt__Key_Asterisk: number;
	const Qt__Key_Plus: number;
	const Qt__Key_Comma: number;
	const Qt__Key_Minus: number;
	const Qt__Key_Period: number;
	const Qt__Key_Slash: number;
	const Qt__Key_0: number;
	const Qt__Key_1: number;
	const Qt__Key_2: number;
	const Qt__Key_3: number;
	const Qt__Key_4: number;
	const Qt__Key_5: number;
	const Qt__Key_6: number;
	const Qt__Key_7: number;
	const Qt__Key_8: number;
	const Qt__Key_9: number;
	const Qt__Key_Colon: number;
	const Qt__Key_Semicolon: number;
	const Qt__Key_Less: number;
	const Qt__Key_Equal: number;
	const Qt__Key_Greater: number;
	const Qt__Key_Question: number;
	const Qt__Key_At: number;
	const Qt__Key_A: number;
	const Qt__Key_B: number;
	const Qt__Key_C: number;
	const Qt__Key_D: number;
	const Qt__Key_E: number;
	const Qt__Key_F: number;
	const Qt__Key_G: number;
	const Qt__Key_H: number;
	const Qt__Key_I: number;
	const Qt__Key_J: number;
	const Qt__Key_K: number;
	const Qt__Key_L: number;
	const Qt__Key_M: number;
	const Qt__Key_N: number;
	const Qt__Key_O: number;
	const Qt__Key_P: number;
	const Qt__Key_Q: number;
	const Qt__Key_R: number;
	const Qt__Key_S: number;
	const Qt__Key_T: number;
	const Qt__Key_U: number;
	const Qt__Key_V: number;
	const Qt__Key_W: number;
	const Qt__Key_X: number;
	const Qt__Key_Y: number;
	const Qt__Key_Z: number;
	const Qt__Key_BracketLeft: number;
	const Qt__Key_Backslash: number;
	const Qt__Key_BracketRight: number;
	const Qt__Key_AsciiCircum: number;
	const Qt__Key_Underscore: number;
	const Qt__Key_QuoteLeft: number;
	const Qt__Key_BraceLeft: number;
	const Qt__Key_Bar: number;
	const Qt__Key_BraceRight: number;
	const Qt__Key_AsciiTilde: number;
	const Qt__Key_nobreakspace: number;
	const Qt__Key_exclamdown: number;
	const Qt__Key_cent: number;
	const Qt__Key_sterling: number;
	const Qt__Key_currency: number;
	const Qt__Key_yen: number;
	const Qt__Key_brokenbar: number;
	const Qt__Key_section: number;
	const Qt__Key_diaeresis: number;
	const Qt__Key_copyright: number;
	const Qt__Key_ordfeminine: number;
	const Qt__Key_guillemotleft: number;
	const Qt__Key_notsign: number;
	const Qt__Key_hyphen: number;
	const Qt__Key_registered: number;
	const Qt__Key_macron: number;
	const Qt__Key_degree: number;
	const Qt__Key_plusminus: number;
	const Qt__Key_twosuperior: number;
	const Qt__Key_threesuperior: number;
	const Qt__Key_acute: number;
	const Qt__Key_mu: number;
	const Qt__Key_paragraph: number;
	const Qt__Key_periodcentered: number;
	const Qt__Key_cedilla: number;
	const Qt__Key_onesuperior: number;
	const Qt__Key_masculine: number;
	const Qt__Key_guillemotright: number;
	const Qt__Key_onequarter: number;
	const Qt__Key_onehalf: number;
	const Qt__Key_threequarters: number;
	const Qt__Key_questiondown: number;
	const Qt__Key_Agrave: number;
	const Qt__Key_Aacute: number;
	const Qt__Key_Acircumflex: number;
	const Qt__Key_Atilde: number;
	const Qt__Key_Adiaeresis: number;
	const Qt__Key_Aring: number;
	const Qt__Key_AE: number;
	const Qt__Key_Ccedilla: number;
	const Qt__Key_Egrave: number;
	const Qt__Key_Eacute: number;
	const Qt__Key_Ecircumflex: number;
	const Qt__Key_Ediaeresis: number;
	const Qt__Key_Igrave: number;
	const Qt__Key_Iacute: number;
	const Qt__Key_Icircumflex: number;
	const Qt__Key_Idiaeresis: number;
	const Qt__Key_ETH: number;
	const Qt__Key_Ntilde: number;
	const Qt__Key_Ograve: number;
	const Qt__Key_Oacute: number;
	const Qt__Key_Ocircumflex: number;
	const Qt__Key_Otilde: number;
	const Qt__Key_Odiaeresis: number;
	const Qt__Key_multiply: number;
	const Qt__Key_Ooblique: number;
	const Qt__Key_Ugrave: number;
	const Qt__Key_Uacute: number;
	const Qt__Key_Ucircumflex: number;
	const Qt__Key_Udiaeresis: number;
	const Qt__Key_Yacute: number;
	const Qt__Key_THORN: number;
	const Qt__Key_ssharp: number;
	const Qt__Key_division: number;
	const Qt__Key_ydiaeresis: number;
	const Qt__Key_AltGr: number;
	const Qt__Key_Multi_key: number;
	const Qt__Key_Codeinput: number;
	const Qt__Key_SingleCandidate: number;
	const Qt__Key_MultipleCandidate: number;
	const Qt__Key_PreviousCandidate: number;
	const Qt__Key_Mode_switch: number;
	const Qt__Key_Kanji: number;
	const Qt__Key_Muhenkan: number;
	const Qt__Key_Henkan: number;
	const Qt__Key_Romaji: number;
	const Qt__Key_Hiragana: number;
	const Qt__Key_Katakana: number;
	const Qt__Key_Hiragana_Katakana: number;
	const Qt__Key_Zenkaku: number;
	const Qt__Key_Hankaku: number;
	const Qt__Key_Zenkaku_Hankaku: number;
	const Qt__Key_Touroku: number;
	const Qt__Key_Massyo: number;
	const Qt__Key_Kana_Lock: number;
	const Qt__Key_Kana_Shift: number;
	const Qt__Key_Eisu_Shift: number;
	const Qt__Key_Eisu_toggle: number;
	const Qt__Key_Hangul: number;
	const Qt__Key_Hangul_Start: number;
	const Qt__Key_Hangul_End: number;
	const Qt__Key_Hangul_Hanja: number;
	const Qt__Key_Hangul_Jamo: number;
	const Qt__Key_Hangul_Romaja: number;
	const Qt__Key_Hangul_Jeonja: number;
	const Qt__Key_Hangul_Banja: number;
	const Qt__Key_Hangul_PreHanja: number;
	const Qt__Key_Hangul_PostHanja: number;
	const Qt__Key_Hangul_Special: number;
	const Qt__Key_Dead_Grave: number;
	const Qt__Key_Dead_Acute: number;
	const Qt__Key_Dead_Circumflex: number;
	const Qt__Key_Dead_Tilde: number;
	const Qt__Key_Dead_Macron: number;
	const Qt__Key_Dead_Breve: number;
	const Qt__Key_Dead_Abovedot: number;
	const Qt__Key_Dead_Diaeresis: number;
	const Qt__Key_Dead_Abovering: number;
	const Qt__Key_Dead_Doubleacute: number;
	const Qt__Key_Dead_Caron: number;
	const Qt__Key_Dead_Cedilla: number;
	const Qt__Key_Dead_Ogonek: number;
	const Qt__Key_Dead_Iota: number;
	const Qt__Key_Dead_Voiced_Sound: number;
	const Qt__Key_Dead_Semivoiced_Sound: number;
	const Qt__Key_Dead_Belowdot: number;
	const Qt__Key_Dead_Hook: number;
	const Qt__Key_Dead_Horn: number;
	const Qt__Key_Dead_Stroke: number;
	const Qt__Key_Dead_Abovecomma: number;
	const Qt__Key_Dead_Abovereversedcomma: number;
	const Qt__Key_Dead_Doublegrave: number;
	const Qt__Key_Dead_Belowring: number;
	const Qt__Key_Dead_Belowmacron: number;
	const Qt__Key_Dead_Belowcircumflex: number;
	const Qt__Key_Dead_Belowtilde: number;
	const Qt__Key_Dead_Belowbreve: number;
	const Qt__Key_Dead_Belowdiaeresis: number;
	const Qt__Key_Dead_Invertedbreve: number;
	const Qt__Key_Dead_Belowcomma: number;
	const Qt__Key_Dead_Currency: number;
	const Qt__Key_Dead_a: number;
	const Qt__Key_Dead_A: number;
	const Qt__Key_Dead_e: number;
	const Qt__Key_Dead_E: number;
	const Qt__Key_Dead_i: number;
	const Qt__Key_Dead_I: number;
	const Qt__Key_Dead_o: number;
	const Qt__Key_Dead_O: number;
	const Qt__Key_Dead_u: number;
	const Qt__Key_Dead_U: number;
	const Qt__Key_Dead_Small_Schwa: number;
	const Qt__Key_Dead_Capital_Schwa: number;
	const Qt__Key_Dead_Greek: number;
	const Qt__Key_Dead_Lowline: number;
	const Qt__Key_Dead_Aboveverticalline: number;
	const Qt__Key_Dead_Belowverticalline: number;
	const Qt__Key_Dead_Longsolidusoverlay: number;
	const Qt__Key_Back: number;
	const Qt__Key_Forward: number;
	const Qt__Key_Stop: number;
	const Qt__Key_Refresh: number;
	const Qt__Key_VolumeDown: number;
	const Qt__Key_VolumeMute: number;
	const Qt__Key_VolumeUp: number;
	const Qt__Key_BassBoost: number;
	const Qt__Key_BassUp: number;
	const Qt__Key_BassDown: number;
	const Qt__Key_TrebleUp: number;
	const Qt__Key_TrebleDown: number;
	const Qt__Key_MediaPlay: number;
	const Qt__Key_MediaStop: number;
	const Qt__Key_MediaPrevious: number;
	const Qt__Key_MediaNext: number;
	const Qt__Key_MediaRecord: number;
	const Qt__Key_MediaPause: number;
	const Qt__Key_MediaTogglePlayPause: number;
	const Qt__Key_HomePage: number;
	const Qt__Key_Favorites: number;
	const Qt__Key_Search: number;
	const Qt__Key_Standby: number;
	const Qt__Key_OpenUrl: number;
	const Qt__Key_LaunchMail: number;
	const Qt__Key_LaunchMedia: number;
	const Qt__Key_Launch0: number;
	const Qt__Key_Launch1: number;
	const Qt__Key_Launch2: number;
	const Qt__Key_Launch3: number;
	const Qt__Key_Launch4: number;
	const Qt__Key_Launch5: number;
	const Qt__Key_Launch6: number;
	const Qt__Key_Launch7: number;
	const Qt__Key_Launch8: number;
	const Qt__Key_Launch9: number;
	const Qt__Key_LaunchA: number;
	const Qt__Key_LaunchB: number;
	const Qt__Key_LaunchC: number;
	const Qt__Key_LaunchD: number;
	const Qt__Key_LaunchE: number;
	const Qt__Key_LaunchF: number;
	const Qt__Key_MonBrightnessUp: number;
	const Qt__Key_MonBrightnessDown: number;
	const Qt__Key_KeyboardLightOnOff: number;
	const Qt__Key_KeyboardBrightnessUp: number;
	const Qt__Key_KeyboardBrightnessDown: number;
	const Qt__Key_PowerOff: number;
	const Qt__Key_WakeUp: number;
	const Qt__Key_Eject: number;
	const Qt__Key_ScreenSaver: number;
	const Qt__Key_WWW: number;
	const Qt__Key_Memo: number;
	const Qt__Key_LightBulb: number;
	const Qt__Key_Shop: number;
	const Qt__Key_History: number;
	const Qt__Key_AddFavorite: number;
	const Qt__Key_HotLinks: number;
	const Qt__Key_BrightnessAdjust: number;
	const Qt__Key_Finance: number;
	const Qt__Key_Community: number;
	const Qt__Key_AudioRewind: number;
	const Qt__Key_BackForward: number;
	const Qt__Key_ApplicationLeft: number;
	const Qt__Key_ApplicationRight: number;
	const Qt__Key_Book: number;
	const Qt__Key_CD: number;
	const Qt__Key_Calculator: number;
	const Qt__Key_ToDoList: number;
	const Qt__Key_ClearGrab: number;
	const Qt__Key_Close: number;
	const Qt__Key_Copy: number;
	const Qt__Key_Cut: number;
	const Qt__Key_Display: number;
	const Qt__Key_DOS: number;
	const Qt__Key_Documents: number;
	const Qt__Key_Excel: number;
	const Qt__Key_Explorer: number;
	const Qt__Key_Game: number;
	const Qt__Key_Go: number;
	const Qt__Key_iTouch: number;
	const Qt__Key_LogOff: number;
	const Qt__Key_Market: number;
	const Qt__Key_Meeting: number;
	const Qt__Key_MenuKB: number;
	const Qt__Key_MenuPB: number;
	const Qt__Key_MySites: number;
	const Qt__Key_News: number;
	const Qt__Key_OfficeHome: number;
	const Qt__Key_Option: number;
	const Qt__Key_Paste: number;
	const Qt__Key_Phone: number;
	const Qt__Key_Calendar: number;
	const Qt__Key_Reply: number;
	const Qt__Key_Reload: number;
	const Qt__Key_RotateWindows: number;
	const Qt__Key_RotationPB: number;
	const Qt__Key_RotationKB: number;
	const Qt__Key_Save: number;
	const Qt__Key_Send: number;
	const Qt__Key_Spell: number;
	const Qt__Key_SplitScreen: number;
	const Qt__Key_Support: number;
	const Qt__Key_TaskPane: number;
	const Qt__Key_Terminal: number;
	const Qt__Key_Tools: number;
	const Qt__Key_Travel: number;
	const Qt__Key_Video: number;
	const Qt__Key_Word: number;
	const Qt__Key_Xfer: number;
	const Qt__Key_ZoomIn: number;
	const Qt__Key_ZoomOut: number;
	const Qt__Key_Away: number;
	const Qt__Key_Messenger: number;
	const Qt__Key_WebCam: number;
	const Qt__Key_MailForward: number;
	const Qt__Key_Pictures: number;
	const Qt__Key_Music: number;
	const Qt__Key_Battery: number;
	const Qt__Key_Bluetooth: number;
	const Qt__Key_WLAN: number;
	const Qt__Key_UWB: number;
	const Qt__Key_AudioForward: number;
	const Qt__Key_AudioRepeat: number;
	const Qt__Key_AudioRandomPlay: number;
	const Qt__Key_Subtitle: number;
	const Qt__Key_AudioCycleTrack: number;
	const Qt__Key_Time: number;
	const Qt__Key_Hibernate: number;
	const Qt__Key_View: number;
	const Qt__Key_TopMenu: number;
	const Qt__Key_PowerDown: number;
	const Qt__Key_Suspend: number;
	const Qt__Key_ContrastAdjust: number;
	const Qt__Key_LaunchG: number;
	const Qt__Key_LaunchH: number;
	const Qt__Key_TouchpadToggle: number;
	const Qt__Key_TouchpadOn: number;
	const Qt__Key_TouchpadOff: number;
	const Qt__Key_MicMute: number;
	const Qt__Key_Red: number;
	const Qt__Key_Green: number;
	const Qt__Key_Yellow: number;
	const Qt__Key_Blue: number;
	const Qt__Key_ChannelUp: number;
	const Qt__Key_ChannelDown: number;
	const Qt__Key_Guide: number;
	const Qt__Key_Info: number;
	const Qt__Key_Settings: number;
	const Qt__Key_MicVolumeUp: number;
	const Qt__Key_MicVolumeDown: number;
	const Qt__Key_New: number;
	const Qt__Key_Open: number;
	const Qt__Key_Find: number;
	const Qt__Key_Undo: number;
	const Qt__Key_Redo: number;
	const Qt__Key_MediaLast: number;
	const Qt__Key_Select: number;
	const Qt__Key_Yes: number;
	const Qt__Key_No: number;
	const Qt__Key_Cancel: number;
	const Qt__Key_Printer: number;
	const Qt__Key_Execute: number;
	const Qt__Key_Sleep: number;
	const Qt__Key_Play: number;
	const Qt__Key_Zoom: number;
	const Qt__Key_Exit: number;
	const Qt__Key_Context1: number;
	const Qt__Key_Context2: number;
	const Qt__Key_Context3: number;
	const Qt__Key_Context4: number;
	const Qt__Key_Call: number;
	const Qt__Key_Hangup: number;
	const Qt__Key_Flip: number;
	const Qt__Key_ToggleCallHangup: number;
	const Qt__Key_VoiceDial: number;
	const Qt__Key_LastNumberRedial: number;
	const Qt__Key_Camera: number;
	const Qt__Key_CameraFocus: number;
	const Qt__Key_unknown: number;
	const Qt__NoArrow: number;
	const Qt__UpArrow: number;
	const Qt__DownArrow: number;
	const Qt__LeftArrow: number;
	const Qt__RightArrow: number;
	const Qt__NoPen: number;
	const Qt__SolidLine: number;
	const Qt__DashLine: number;
	const Qt__DotLine: number;
	const Qt__DashDotLine: number;
	const Qt__DashDotDotLine: number;
	const Qt__CustomDashLine: number;
	const Qt__MPenStyle: number;
	const Qt__FlatCap: number;
	const Qt__SquareCap: number;
	const Qt__RoundCap: number;
	const Qt__MPenCapStyle: number;
	const Qt__MiterJoin: number;
	const Qt__BevelJoin: number;
	const Qt__RoundJoin: number;
	const Qt__SvgMiterJoin: number;
	const Qt__MPenJoinStyle: number;
	const Qt__NoBrush: number;
	const Qt__SolidPattern: number;
	const Qt__Dense1Pattern: number;
	const Qt__Dense2Pattern: number;
	const Qt__Dense3Pattern: number;
	const Qt__Dense4Pattern: number;
	const Qt__Dense5Pattern: number;
	const Qt__Dense6Pattern: number;
	const Qt__Dense7Pattern: number;
	const Qt__HorPattern: number;
	const Qt__VerPattern: number;
	const Qt__CrossPattern: number;
	const Qt__BDiagPattern: number;
	const Qt__FDiagPattern: number;
	const Qt__DiagCrossPattern: number;
	const Qt__LinearGradientPattern: number;
	const Qt__RadialGradientPattern: number;
	const Qt__ConicalGradientPattern: number;
	const Qt__TexturePattern: number;
	const Qt__AbsoluteSize: number;
	const Qt__RelativeSize: number;
	const Qt__UI_General: number;
	const Qt__UI_AnimateMenu: number;
	const Qt__UI_FadeMenu: number;
	const Qt__UI_AnimateCombo: number;
	const Qt__UI_AnimateTooltip: number;
	const Qt__UI_FadeTooltip: number;
	const Qt__UI_AnimateToolBox: number;
	const Qt__ArrowCursor: number;
	const Qt__UpArrowCursor: number;
	const Qt__CrossCursor: number;
	const Qt__WaitCursor: number;
	const Qt__IBeamCursor: number;
	const Qt__SizeVerCursor: number;
	const Qt__SizeHorCursor: number;
	const Qt__SizeBDiagCursor: number;
	const Qt__SizeFDiagCursor: number;
	const Qt__SizeAllCursor: number;
	const Qt__BlankCursor: number;
	const Qt__SplitVCursor: number;
	const Qt__SplitHCursor: number;
	const Qt__PointingHandCursor: number;
	const Qt__ForbiddenCursor: number;
	const Qt__WhatsThisCursor: number;
	const Qt__BusyCursor: number;
	const Qt__OpenHandCursor: number;
	const Qt__ClosedHandCursor: number;
	const Qt__DragCopyCursor: number;
	const Qt__DragMoveCursor: number;
	const Qt__DragLinkCursor: number;
	const Qt__LastCursor: number;
	const Qt__BitmapCursor: number;
	const Qt__CustomCursor: number;
	const Qt__PlainText: number;
	const Qt__RichText: number;
	const Qt__AutoText: number;
	const Qt__IgnoreAspectRatio: number;
	const Qt__KeepAspectRatio: number;
	const Qt__KeepAspectRatioByExpanding: number;
	const Qt__LeftDockWidgetArea: number;
	const Qt__RightDockWidgetArea: number;
	const Qt__TopDockWidgetArea: number;
	const Qt__BottomDockWidgetArea: number;
	const Qt__DockWidgetArea_Mask: number;
	const Qt__AllDockWidgetAreas: number;
	const Qt__NoDockWidgetArea: number;
	const Qt__LeftToolBarArea: number;
	const Qt__RightToolBarArea: number;
	const Qt__TopToolBarArea: number;
	const Qt__BottomToolBarArea: number;
	const Qt__ToolBarArea_Mask: number;
	const Qt__AllToolBarAreas: number;
	const Qt__NoToolBarArea: number;
	const Qt__TextDate: number;
	const Qt__ISODate: number;
	const Qt__SystemLocaleDate: number;
	const Qt__LocalDate: number;
	const Qt__LocaleDate: number;
	const Qt__SystemLocaleShortDate: number;
	const Qt__SystemLocaleLongDate: number;
	const Qt__DefaultLocaleShortDate: number;
	const Qt__DefaultLocaleLongDate: number;
	const Qt__RFC2822Date: number;
	const Qt__ISODateWithMs: number;
	const Qt__LocalTime: number;
	const Qt__UTC: number;
	const Qt__OffsetFromUTC: number;
	const Qt__TimeZone: number;
	const Qt__Monday: number;
	const Qt__Tuesday: number;
	const Qt__Wednesday: number;
	const Qt__Thursday: number;
	const Qt__Friday: number;
	const Qt__Saturday: number;
	const Qt__Sunday: number;
	const Qt__ScrollBarAsNeeded: number;
	const Qt__ScrollBarAlwaysOff: number;
	const Qt__ScrollBarAlwaysOn: number;
	const Qt__CaseInsensitive: number;
	const Qt__CaseSensitive: number;
	const Qt__TopLeftCorner: number;
	const Qt__TopRightCorner: number;
	const Qt__BottomLeftCorner: number;
	const Qt__BottomRightCorner: number;
	const Qt__TopEdge: number;
	const Qt__LeftEdge: number;
	const Qt__RightEdge: number;
	const Qt__BottomEdge: number;
	const Qt__WidgetShortcut: number;
	const Qt__WindowShortcut: number;
	const Qt__ApplicationShortcut: number;
	const Qt__WidgetWithChildrenShortcut: number;
	const Qt__AutoConnection: number;
	const Qt__DirectConnection: number;
	const Qt__QueuedConnection: number;
	const Qt__BlockingQueuedConnection: number;
	const Qt__UniqueConnection: number;
	const Qt__OddEvenFill: number;
	const Qt__WindingFill: number;
	const Qt__MaskInColor: number;
	const Qt__MaskOutColor: number;
	const Qt__NoClip: number;
	const Qt__ReplaceClip: number;
	const Qt__IntersectClip: number;
	const Qt__ContainsItemShape: number;
	const Qt__IntersectsItemShape: number;
	const Qt__ContainsItemBoundingRect: number;
	const Qt__IntersectsItemBoundingRect: number;
	const Qt__ReplaceSelection: number;
	const Qt__AddToSelection: number;
	const Qt__FastTransformation: number;
	const Qt__SmoothTransformation: number;
	const Qt__XAxis: number;
	const Qt__YAxis: number;
	const Qt__ZAxis: number;
	const Qt__MouseFocusReason: number;
	const Qt__TabFocusReason: number;
	const Qt__BacktabFocusReason: number;
	const Qt__ActiveWindowFocusReason: number;
	const Qt__PopupFocusReason: number;
	const Qt__ShortcutFocusReason: number;
	const Qt__MenuBarFocusReason: number;
	const Qt__OtherFocusReason: number;
	const Qt__NoFocusReason: number;
	const Qt__NoContextMenu: number;
	const Qt__DefaultContextMenu: number;
	const Qt__ActionsContextMenu: number;
	const Qt__CustomContextMenu: number;
	const Qt__PreventContextMenu: number;
	const Qt__ImEnabled: number;
	const Qt__ImCursorRectangle: number;
	const Qt__ImMicroFocus: number;
	const Qt__ImFont: number;
	const Qt__ImCursorPosition: number;
	const Qt__ImSurroundingText: number;
	const Qt__ImCurrentSelection: number;
	const Qt__ImMaximumTextLength: number;
	const Qt__ImAnchorPosition: number;
	const Qt__ImHints: number;
	const Qt__ImPreferredLanguage: number;
	const Qt__ImAbsolutePosition: number;
	const Qt__ImTextBeforeCursor: number;
	const Qt__ImTextAfterCursor: number;
	const Qt__ImEnterKeyType: number;
	const Qt__ImAnchorRectangle: number;
	const Qt__ImInputItemClipRectangle: number;
	const Qt__ImPlatformData: number;
	const Qt__ImQueryAll: number;
	const Qt__ImhNone: number;
	const Qt__ImhHiddenText: number;
	const Qt__ImhSensitiveData: number;
	const Qt__ImhNoAutoUppercase: number;
	const Qt__ImhPreferNumbers: number;
	const Qt__ImhPreferUppercase: number;
	const Qt__ImhPreferLowercase: number;
	const Qt__ImhNoPredictiveText: number;
	const Qt__ImhDate: number;
	const Qt__ImhTime: number;
	const Qt__ImhPreferLatin: number;
	const Qt__ImhMultiLine: number;
	const Qt__ImhNoEditMenu: number;
	const Qt__ImhNoTextHandles: number;
	const Qt__ImhDigitsOnly: number;
	const Qt__ImhFormattedNumbersOnly: number;
	const Qt__ImhUppercaseOnly: number;
	const Qt__ImhLowercaseOnly: number;
	const Qt__ImhDialableCharactersOnly: number;
	const Qt__ImhEmailCharactersOnly: number;
	const Qt__ImhUrlCharactersOnly: number;
	const Qt__ImhLatinOnly: number;
	const Qt__ImhExclusiveInputMask: number;
	const Qt__EnterKeyDefault: number;
	const Qt__EnterKeyReturn: number;
	const Qt__EnterKeyDone: number;
	const Qt__EnterKeyGo: number;
	const Qt__EnterKeySend: number;
	const Qt__EnterKeySearch: number;
	const Qt__EnterKeyNext: number;
	const Qt__EnterKeyPrevious: number;
	const Qt__ToolButtonIconOnly: number;
	const Qt__ToolButtonTextOnly: number;
	const Qt__ToolButtonTextBesideIcon: number;
	const Qt__ToolButtonTextUnderIcon: number;
	const Qt__ToolButtonFollowStyle: number;
	const Qt__LeftToRight: number;
	const Qt__RightToLeft: number;
	const Qt__LayoutDirectionAuto: number;
	const Qt__AnchorLeft: number;
	const Qt__AnchorHorizontalCenter: number;
	const Qt__AnchorRight: number;
	const Qt__AnchorTop: number;
	const Qt__AnchorVerticalCenter: number;
	const Qt__AnchorBottom: number;
	const Qt__FindDirectChildrenOnly: number;
	const Qt__FindChildrenRecursively: number;
	const Qt__CopyAction: number;
	const Qt__MoveAction: number;
	const Qt__LinkAction: number;
	const Qt__ActionMask: number;
	const Qt__TargetMoveAction: number;
	const Qt__IgnoreAction: number;
	const Qt__Unchecked: number;
	const Qt__PartiallyChecked: number;
	const Qt__Checked: number;
	const Qt__DisplayRole: number;
	const Qt__DecorationRole: number;
	const Qt__EditRole: number;
	const Qt__ToolTipRole: number;
	const Qt__StatusTipRole: number;
	const Qt__WhatsThisRole: number;
	const Qt__FontRole: number;
	const Qt__TextAlignmentRole: number;
	const Qt__BackgroundRole: number;
	const Qt__ForegroundRole: number;
	const Qt__BackgroundColorRole: number;
	const Qt__TextColorRole: number;
	const Qt__CheckStateRole: number;
	const Qt__AccessibleTextRole: number;
	const Qt__AccessibleDescriptionRole: number;
	const Qt__SizeHintRole: number;
	const Qt__InitialSortOrderRole: number;
	const Qt__DisplayPropertyRole: number;
	const Qt__DecorationPropertyRole: number;
	const Qt__ToolTipPropertyRole: number;
	const Qt__StatusTipPropertyRole: number;
	const Qt__WhatsThisPropertyRole: number;
	const Qt__UserRole: number;
	const Qt__NoItemFlags: number;
	const Qt__ItemIsSelectable: number;
	const Qt__ItemIsEditable: number;
	const Qt__ItemIsDragEnabled: number;
	const Qt__ItemIsDropEnabled: number;
	const Qt__ItemIsUserCheckable: number;
	const Qt__ItemIsEnabled: number;
	const Qt__ItemIsAutoTristate: number;
	const Qt__ItemIsTristate: number;
	const Qt__ItemNeverHasChildren: number;
	const Qt__ItemIsUserTristate: number;
	const Qt__MatchExactly: number;
	const Qt__MatchContains: number;
	const Qt__MatchStartsWith: number;
	const Qt__MatchEndsWith: number;
	const Qt__MatchRegExp: number;
	const Qt__MatchWildcard: number;
	const Qt__MatchFixedString: number;
	const Qt__MatchCaseSensitive: number;
	const Qt__MatchWrap: number;
	const Qt__MatchRecursive: number;
	const Qt__NonModal: number;
	const Qt__WindowModal: number;
	const Qt__ApplicationModal: number;
	const Qt__NoTextInteraction: number;
	const Qt__TextSelectableByMouse: number;
	const Qt__TextSelectableByKeyboard: number;
	const Qt__LinksAccessibleByMouse: number;
	const Qt__LinksAccessibleByKeyboard: number;
	const Qt__TextEditable: number;
	const Qt__TextEditorInteraction: number;
	const Qt__TextBrowserInteraction: number;
	const Qt__HighEventPriority: number;
	const Qt__NormalEventPriority: number;
	const Qt__LowEventPriority: number;
	const Qt__MinimumSize: number;
	const Qt__PreferredSize: number;
	const Qt__MaximumSize: number;
	const Qt__MinimumDescent: number;
	const Qt__NSizeHints: number;
	const Qt__NoSection: number;
	const Qt__LeftSection: number;
	const Qt__TopLeftSection: number;
	const Qt__TopSection: number;
	const Qt__TopRightSection: number;
	const Qt__RightSection: number;
	const Qt__BottomRightSection: number;
	const Qt__BottomSection: number;
	const Qt__BottomLeftSection: number;
	const Qt__TitleBarArea: number;
	const Qt__DeviceCoordinates: number;
	const Qt__LogicalCoordinates: number;
	const Qt__TouchPointPressed: number;
	const Qt__TouchPointMoved: number;
	const Qt__TouchPointStationary: number;
	const Qt__TouchPointReleased: number;
	const Qt__NoGesture: number;
	const Qt__GestureStarted: number;
	const Qt__GestureUpdated: number;
	const Qt__GestureFinished: number;
	const Qt__GestureCanceled: number;
	const Qt__TapGesture: number;
	const Qt__TapAndHoldGesture: number;
	const Qt__PanGesture: number;
	const Qt__PinchGesture: number;
	const Qt__SwipeGesture: number;
	const Qt__CustomGesture: number;
	const Qt__LastGestureType: number;
	const Qt__DontStartGestureOnChildren: number;
	const Qt__ReceivePartialGestures: number;
	const Qt__IgnoredGesturesPropagateToParent: number;
	const Qt__BeginNativeGesture: number;
	const Qt__EndNativeGesture: number;
	const Qt__PanNativeGesture: number;
	const Qt__ZoomNativeGesture: number;
	const Qt__SmartZoomNativeGesture: number;
	const Qt__RotateNativeGesture: number;
	const Qt__SwipeNativeGesture: number;
	const Qt__NavigationModeNone: number;
	const Qt__NavigationModeKeypadTabOrder: number;
	const Qt__NavigationModeKeypadDirectional: number;
	const Qt__NavigationModeCursorAuto: number;
	const Qt__NavigationModeCursorForceVisible: number;
	const Qt__LogicalMoveStyle: number;
	const Qt__VisualMoveStyle: number;
	const Qt__PreciseTimer: number;
	const Qt__CoarseTimer: number;
	const Qt__VeryCoarseTimer: number;
	const Qt__NoScrollPhase: number;
	const Qt__ScrollBegin: number;
	const Qt__ScrollUpdate: number;
	const Qt__ScrollEnd: number;
	const Qt__ScrollMomentum: number;
	const Qt__MouseEventNotSynthesized: number;
	const Qt__MouseEventSynthesizedBySystem: number;
	const Qt__MouseEventSynthesizedByQt: number;
	const Qt__MouseEventSynthesizedByApplication: number;
	const Qt__MouseEventCreatedDoubleClick: number;
	const Qt__MouseEventFlagMask: number;
	const Qt__ChecksumIso3309: number;
	const Qt__ChecksumItuV41: number;
	interface QtGlobal_ITF {
		QtGlobal_PTR():QtGlobal;
	}

	class QtGlobal {
		___pointer: number;
		QtGlobal_PTR():QtGlobal;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQtGlobal():void;
		qEnvironmentVariable(varName:string):string;
		qEnvironmentVariable2(varName:string,defaultValue:string):string;
		qEnvironmentVariableIntValue(varName:string,ok:boolean):number;
		qEnvironmentVariableIsEmpty(varName:string):boolean;
		qEnvironmentVariableIsSet(varName:string):boolean;
		qVersion():string;
		qgetenv(varName:string):QByteArray;
		qputenv(varName:string,value:QByteArray_ITF):boolean;
		qunsetenv(varName:string):boolean;
	}
	function NewQtGlobalFromPointer(ptr:number):QtGlobal;
	function QtGlobal_qEnvironmentVariable(varName:string):string;
	function QtGlobal_qEnvironmentVariable2(varName:string,defaultValue:string):string;
	function QtGlobal_qEnvironmentVariableIntValue(varName:string,ok:boolean):number;
	function QtGlobal_qEnvironmentVariableIsEmpty(varName:string):boolean;
	function QtGlobal_qEnvironmentVariableIsSet(varName:string):boolean;
	function QtGlobal_qVersion():string;
	function QtGlobal_qgetenv(varName:string):QByteArray;
	function QtGlobal_qputenv(varName:string,value:QByteArray_ITF):boolean;
	function QtGlobal_qunsetenv(varName:string):boolean;
}