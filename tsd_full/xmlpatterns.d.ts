/// <reference path="core.d.ts" />
/// <reference path="network.d.ts" />
declare namespace xmlpatterns {
	interface QAbstractMessageHandler_ITF extends core.QObject_ITF {
		QAbstractMessageHandler_PTR():QAbstractMessageHandler;
	}

	class QAbstractMessageHandler extends core.QObject {
		___pointer: number;
		QAbstractMessageHandler_PTR():QAbstractMessageHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQAbstractMessageHandler(f:()=>void):void;
		DisconnectDestroyQAbstractMessageHandler():void;
		DestroyQAbstractMessageHandler():void;
		DestroyQAbstractMessageHandlerDefault():void;
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
	function NewQAbstractMessageHandlerFromPointer(ptr:number):QAbstractMessageHandler;
	interface QAbstractUriResolver_ITF extends core.QObject_ITF {
		QAbstractUriResolver_PTR():QAbstractUriResolver;
	}

	class QAbstractUriResolver extends core.QObject {
		___pointer: number;
		QAbstractUriResolver_PTR():QAbstractUriResolver;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectResolve(f:(relative:core.QUrl,baseURI:core.QUrl)=>core.QUrl):void;
		DisconnectResolve():void;
		Resolve(relative:core.QUrl_ITF,baseURI:core.QUrl_ITF):core.QUrl;
		ConnectDestroyQAbstractUriResolver(f:()=>void):void;
		DisconnectDestroyQAbstractUriResolver():void;
		DestroyQAbstractUriResolver():void;
		DestroyQAbstractUriResolverDefault():void;
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
	function NewQAbstractUriResolverFromPointer(ptr:number):QAbstractUriResolver;
	function NewQAbstractUriResolver(parent:core.QObject_ITF):QAbstractUriResolver;
	interface QAbstractXmlNodeModel_ITF extends core.QSharedData_ITF {
		QAbstractXmlNodeModel_PTR():QAbstractXmlNodeModel;
	}

	class QAbstractXmlNodeModel extends core.QSharedData {
		___pointer: number;
		QAbstractXmlNodeModel_PTR():QAbstractXmlNodeModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBaseUri(f:(n:QXmlNodeModelIndex)=>core.QUrl):void;
		DisconnectBaseUri():void;
		BaseUri(n:QXmlNodeModelIndex_ITF):core.QUrl;
		ConnectCompareOrder(f:(ni1:QXmlNodeModelIndex,ni2:QXmlNodeModelIndex)=>number):void;
		DisconnectCompareOrder():void;
		CompareOrder(ni1:QXmlNodeModelIndex_ITF,ni2:QXmlNodeModelIndex_ITF):number;
		CreateIndex(data:number):QXmlNodeModelIndex;
		CreateIndex2(pointer:number,additionalData:number):QXmlNodeModelIndex;
		CreateIndex3(data:number,additionalData:number):QXmlNodeModelIndex;
		ConnectDocumentUri(f:(n:QXmlNodeModelIndex)=>core.QUrl):void;
		DisconnectDocumentUri():void;
		DocumentUri(n:QXmlNodeModelIndex_ITF):core.QUrl;
		ConnectElementById(f:(id:QXmlName)=>QXmlNodeModelIndex):void;
		DisconnectElementById():void;
		ElementById(id:QXmlName_ITF):QXmlNodeModelIndex;
		ConnectKind(f:(ni:QXmlNodeModelIndex)=>number):void;
		DisconnectKind():void;
		Kind(ni:QXmlNodeModelIndex_ITF):number;
		ConnectName(f:(ni:QXmlNodeModelIndex)=>QXmlName):void;
		DisconnectName():void;
		Name(ni:QXmlNodeModelIndex_ITF):QXmlName;
		ConnectNamespaceBindings(f:(n:QXmlNodeModelIndex)=>QXmlName[]):void;
		DisconnectNamespaceBindings():void;
		NamespaceBindings(n:QXmlNodeModelIndex_ITF):QXmlName[];
		ConnectNextFromSimpleAxis(f:(axis:number,origi:QXmlNodeModelIndex)=>QXmlNodeModelIndex):void;
		DisconnectNextFromSimpleAxis():void;
		NextFromSimpleAxis(axis:number,origi:QXmlNodeModelIndex_ITF):QXmlNodeModelIndex;
		ConnectNodesByIdref(f:(idref:QXmlName)=>QXmlNodeModelIndex[]):void;
		DisconnectNodesByIdref():void;
		NodesByIdref(idref:QXmlName_ITF):QXmlNodeModelIndex[];
		ConnectRoot(f:(n:QXmlNodeModelIndex)=>QXmlNodeModelIndex):void;
		DisconnectRoot():void;
		Root(n:QXmlNodeModelIndex_ITF):QXmlNodeModelIndex;
		SourceLocation(index:QXmlNodeModelIndex_ITF):QSourceLocation;
		ConnectStringValue(f:(n:QXmlNodeModelIndex)=>string):void;
		DisconnectStringValue():void;
		StringValue(n:QXmlNodeModelIndex_ITF):string;
		ConnectTypedValue(f:(node:QXmlNodeModelIndex)=>core.QVariant):void;
		DisconnectTypedValue():void;
		TypedValue(node:QXmlNodeModelIndex_ITF):core.QVariant;
		ConnectDestroyQAbstractXmlNodeModel(f:()=>void):void;
		DisconnectDestroyQAbstractXmlNodeModel():void;
		DestroyQAbstractXmlNodeModel():void;
		DestroyQAbstractXmlNodeModelDefault():void;
	}
	function NewQAbstractXmlNodeModelFromPointer(ptr:number):QAbstractXmlNodeModel;
	const QAbstractXmlNodeModel__Parent: number;
	const QAbstractXmlNodeModel__FirstChild: number;
	const QAbstractXmlNodeModel__PreviousSibling: number;
	const QAbstractXmlNodeModel__NextSibling: number;
	interface QAbstractXmlReceiver_ITF {
		QAbstractXmlReceiver_PTR():QAbstractXmlReceiver;
	}

	class QAbstractXmlReceiver {
		___pointer: number;
		QAbstractXmlReceiver_PTR():QAbstractXmlReceiver;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAtomicValue(f:(value:core.QVariant)=>void):void;
		DisconnectAtomicValue():void;
		AtomicValue(value:core.QVariant_ITF):void;
		ConnectAttribute(f:(name:QXmlName,value:core.QStringRef)=>void):void;
		DisconnectAttribute():void;
		Attribute(name:QXmlName_ITF,value:core.QStringRef_ITF):void;
		ConnectCharacters(f:(value:core.QStringRef)=>void):void;
		DisconnectCharacters():void;
		Characters(value:core.QStringRef_ITF):void;
		ConnectComment(f:(value:string)=>void):void;
		DisconnectComment():void;
		Comment(value:string):void;
		ConnectEndDocument(f:()=>void):void;
		DisconnectEndDocument():void;
		EndDocument():void;
		ConnectEndElement(f:()=>void):void;
		DisconnectEndElement():void;
		EndElement():void;
		ConnectEndOfSequence(f:()=>void):void;
		DisconnectEndOfSequence():void;
		EndOfSequence():void;
		ConnectNamespaceBinding(f:(name:QXmlName)=>void):void;
		DisconnectNamespaceBinding():void;
		NamespaceBinding(name:QXmlName_ITF):void;
		ConnectProcessingInstruction(f:(target:QXmlName,value:string)=>void):void;
		DisconnectProcessingInstruction():void;
		ProcessingInstruction(target:QXmlName_ITF,value:string):void;
		ConnectStartDocument(f:()=>void):void;
		DisconnectStartDocument():void;
		StartDocument():void;
		ConnectStartElement(f:(name:QXmlName)=>void):void;
		DisconnectStartElement():void;
		StartElement(name:QXmlName_ITF):void;
		ConnectStartOfSequence(f:()=>void):void;
		DisconnectStartOfSequence():void;
		StartOfSequence():void;
		ConnectDestroyQAbstractXmlReceiver(f:()=>void):void;
		DisconnectDestroyQAbstractXmlReceiver():void;
		DestroyQAbstractXmlReceiver():void;
		DestroyQAbstractXmlReceiverDefault():void;
	}
	function NewQAbstractXmlReceiverFromPointer(ptr:number):QAbstractXmlReceiver;
	function NewQAbstractXmlReceiver():QAbstractXmlReceiver;
	interface QSimpleXmlNodeModel_ITF extends QAbstractXmlNodeModel_ITF {
		QSimpleXmlNodeModel_PTR():QSimpleXmlNodeModel;
	}

	class QSimpleXmlNodeModel extends QAbstractXmlNodeModel {
		___pointer: number;
		QSimpleXmlNodeModel_PTR():QSimpleXmlNodeModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBaseUri(f:(node:QXmlNodeModelIndex)=>core.QUrl):void;
		DisconnectBaseUri():void;
		BaseUri(node:QXmlNodeModelIndex_ITF):core.QUrl;
		BaseUriDefault(node:QXmlNodeModelIndex_ITF):core.QUrl;
		ConnectElementById(f:(id:QXmlName)=>QXmlNodeModelIndex):void;
		DisconnectElementById():void;
		ElementById(id:QXmlName_ITF):QXmlNodeModelIndex;
		ElementByIdDefault(id:QXmlName_ITF):QXmlNodeModelIndex;
		NamePool():QXmlNamePool;
		ConnectNamespaceBindings(f:(node:QXmlNodeModelIndex)=>QXmlName[]):void;
		DisconnectNamespaceBindings():void;
		NamespaceBindings(node:QXmlNodeModelIndex_ITF):QXmlName[];
		NamespaceBindingsDefault(node:QXmlNodeModelIndex_ITF):QXmlName[];
		ConnectNodesByIdref(f:(idref:QXmlName)=>QXmlNodeModelIndex[]):void;
		DisconnectNodesByIdref():void;
		NodesByIdref(idref:QXmlName_ITF):QXmlNodeModelIndex[];
		NodesByIdrefDefault(idref:QXmlName_ITF):QXmlNodeModelIndex[];
		ConnectStringValue(f:(node:QXmlNodeModelIndex)=>string):void;
		DisconnectStringValue():void;
		StringValue(node:QXmlNodeModelIndex_ITF):string;
		StringValueDefault(node:QXmlNodeModelIndex_ITF):string;
		ConnectDestroyQSimpleXmlNodeModel(f:()=>void):void;
		DisconnectDestroyQSimpleXmlNodeModel():void;
		DestroyQSimpleXmlNodeModel():void;
		DestroyQSimpleXmlNodeModelDefault():void;
		CompareOrder(ni1:QXmlNodeModelIndex_ITF,ni2:QXmlNodeModelIndex_ITF):number;
		CompareOrderDefault(ni1:QXmlNodeModelIndex_ITF,ni2:QXmlNodeModelIndex_ITF):number;
		DocumentUri(n:QXmlNodeModelIndex_ITF):core.QUrl;
		DocumentUriDefault(n:QXmlNodeModelIndex_ITF):core.QUrl;
		Kind(ni:QXmlNodeModelIndex_ITF):number;
		KindDefault(ni:QXmlNodeModelIndex_ITF):number;
		Name(ni:QXmlNodeModelIndex_ITF):QXmlName;
		NameDefault(ni:QXmlNodeModelIndex_ITF):QXmlName;
		NextFromSimpleAxis(axis:number,origi:QXmlNodeModelIndex_ITF):QXmlNodeModelIndex;
		NextFromSimpleAxisDefault(axis:number,origi:QXmlNodeModelIndex_ITF):QXmlNodeModelIndex;
		Root(n:QXmlNodeModelIndex_ITF):QXmlNodeModelIndex;
		RootDefault(n:QXmlNodeModelIndex_ITF):QXmlNodeModelIndex;
		TypedValue(node:QXmlNodeModelIndex_ITF):core.QVariant;
		TypedValueDefault(node:QXmlNodeModelIndex_ITF):core.QVariant;
	}
	function NewQSimpleXmlNodeModelFromPointer(ptr:number):QSimpleXmlNodeModel;
	interface QSourceLocation_ITF {
		QSourceLocation_PTR():QSourceLocation;
	}

	class QSourceLocation {
		___pointer: number;
		QSourceLocation_PTR():QSourceLocation;
		Pointer():number;
		SetPointer(p:number):void;
		Column():number;
		IsNull():boolean;
		Line():number;
		SetColumn(newColumn:number):void;
		SetLine(newLine:number):void;
		SetUri(newUri:core.QUrl_ITF):void;
		Uri():core.QUrl;
		DestroyQSourceLocation():void;
	}
	function NewQSourceLocationFromPointer(ptr:number):QSourceLocation;
	function NewQSourceLocation():QSourceLocation;
	function NewQSourceLocation2(other:QSourceLocation_ITF):QSourceLocation;
	function NewQSourceLocation3(u:core.QUrl_ITF,l:number,c:number):QSourceLocation;
	interface QXmlFormatter_ITF extends QXmlSerializer_ITF {
		QXmlFormatter_PTR():QXmlFormatter;
	}

	class QXmlFormatter extends QXmlSerializer {
		___pointer: number;
		QXmlFormatter_PTR():QXmlFormatter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQXmlFormatter():void;
		IndentationDepth():number;
		SetIndentationDepth(depth:number):void;
	}
	function NewQXmlFormatterFromPointer(ptr:number):QXmlFormatter;
	function NewQXmlFormatter(query:QXmlQuery_ITF,outputDevice:core.QIODevice_ITF):QXmlFormatter;
	interface QXmlItem_ITF {
		QXmlItem_PTR():QXmlItem;
	}

	class QXmlItem {
		___pointer: number;
		QXmlItem_PTR():QXmlItem;
		Pointer():number;
		SetPointer(p:number):void;
		IsAtomicValue():boolean;
		IsNode():boolean;
		IsNull():boolean;
		ToAtomicValue():core.QVariant;
		ToNodeModelIndex():QXmlNodeModelIndex;
		DestroyQXmlItem():void;
	}
	function NewQXmlItemFromPointer(ptr:number):QXmlItem;
	function NewQXmlItem():QXmlItem;
	function NewQXmlItem2(other:QXmlItem_ITF):QXmlItem;
	function NewQXmlItem3(node:QXmlNodeModelIndex_ITF):QXmlItem;
	function NewQXmlItem4(atomicValue:core.QVariant_ITF):QXmlItem;
	interface QXmlName_ITF {
		QXmlName_PTR():QXmlName;
	}

	class QXmlName {
		___pointer: number;
		QXmlName_PTR():QXmlName;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQXmlName():void;
		FromClarkName(clarkName:string,namePool:QXmlNamePool_ITF):QXmlName;
		IsNCName(candidate:string):boolean;
		IsNull():boolean;
		LocalName(namePool:QXmlNamePool_ITF):string;
		NamespaceUri(namePool:QXmlNamePool_ITF):string;
		Prefix(namePool:QXmlNamePool_ITF):string;
		ToClarkName(namePool:QXmlNamePool_ITF):string;
	}
	function NewQXmlNameFromPointer(ptr:number):QXmlName;
	function NewQXmlName():QXmlName;
	function NewQXmlName2(namePool:QXmlNamePool_ITF,localName:string,namespaceURI:string,prefix:string):QXmlName;
	function NewQXmlName3(other:QXmlName_ITF):QXmlName;
	function QXmlName_FromClarkName(clarkName:string,namePool:QXmlNamePool_ITF):QXmlName;
	function QXmlName_IsNCName(candidate:string):boolean;
	function NewQXmlNamePool():QXmlNamePool;
	function NewQXmlNamePool2(other:QXmlNamePool_ITF):QXmlNamePool;
	interface QXmlNamePool_ITF {
		QXmlNamePool_PTR():QXmlNamePool;
	}

	class QXmlNamePool {
		___pointer: number;
		QXmlNamePool_PTR():QXmlNamePool;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQXmlNamePool():void;
	}
	function NewQXmlNamePoolFromPointer(ptr:number):QXmlNamePool;
	function NewQXmlNamePool():QXmlNamePool;
	function NewQXmlNamePool2(other:QXmlNamePool_ITF):QXmlNamePool;
	interface QXmlNodeModelIndex_ITF {
		QXmlNodeModelIndex_PTR():QXmlNodeModelIndex;
	}

	class QXmlNodeModelIndex {
		___pointer: number;
		QXmlNodeModelIndex_PTR():QXmlNodeModelIndex;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQXmlNodeModelIndex():void;
		AdditionalData():number;
		Data():number;
		InternalPointer():number;
		IsNull():boolean;
		Model():QAbstractXmlNodeModel;
	}
	function NewQXmlNodeModelIndexFromPointer(ptr:number):QXmlNodeModelIndex;
	function NewQXmlNodeModelIndex():QXmlNodeModelIndex;
	function NewQXmlNodeModelIndex2(other:QXmlNodeModelIndex_ITF):QXmlNodeModelIndex;
	const QXmlNodeModelIndex__Attribute: number;
	const QXmlNodeModelIndex__Comment: number;
	const QXmlNodeModelIndex__Document: number;
	const QXmlNodeModelIndex__Element: number;
	const QXmlNodeModelIndex__Namespace: number;
	const QXmlNodeModelIndex__ProcessingInstruction: number;
	const QXmlNodeModelIndex__Text: number;
	const QXmlNodeModelIndex__Precedes: number;
	const QXmlNodeModelIndex__Is: number;
	const QXmlNodeModelIndex__Follows: number;
	interface QXmlQuery_ITF {
		QXmlQuery_PTR():QXmlQuery;
	}

	class QXmlQuery {
		___pointer: number;
		QXmlQuery_PTR():QXmlQuery;
		Pointer():number;
		SetPointer(p:number):void;
		BindVariable(name:QXmlName_ITF,value:QXmlItem_ITF):void;
		BindVariable2(localName:string,value:QXmlItem_ITF):void;
		BindVariable3(name:QXmlName_ITF,device:core.QIODevice_ITF):void;
		BindVariable4(localName:string,device:core.QIODevice_ITF):void;
		BindVariable5(name:QXmlName_ITF,query:QXmlQuery_ITF):void;
		BindVariable6(localName:string,query:QXmlQuery_ITF):void;
		EvaluateTo(result:QXmlResultItems_ITF):void;
		EvaluateTo2(callback:QAbstractXmlReceiver_ITF):boolean;
		EvaluateTo3(target:string[]):boolean;
		EvaluateTo4(target:core.QIODevice_ITF):boolean;
		EvaluateTo5(output:string):boolean;
		InitialTemplateName():QXmlName;
		IsValid():boolean;
		MessageHandler():QAbstractMessageHandler;
		NamePool():QXmlNamePool;
		NetworkAccessManager():network.QNetworkAccessManager;
		QueryLanguage():number;
		SetFocus(item:QXmlItem_ITF):void;
		SetFocus2(documentURI:core.QUrl_ITF):boolean;
		SetFocus3(document:core.QIODevice_ITF):boolean;
		SetFocus4(focus:string):boolean;
		SetInitialTemplateName(name:QXmlName_ITF):void;
		SetInitialTemplateName2(localName:string):void;
		SetMessageHandler(aMessageHandler:QAbstractMessageHandler_ITF):void;
		SetNetworkAccessManager(newManager:network.QNetworkAccessManager_ITF):void;
		SetQuery(sourceCode:core.QIODevice_ITF,documentURI:core.QUrl_ITF):void;
		SetQuery2(sourceCode:string,documentURI:core.QUrl_ITF):void;
		SetQuery3(queryURI:core.QUrl_ITF,baseURI:core.QUrl_ITF):void;
		SetUriResolver(resolver:QAbstractUriResolver_ITF):void;
		UriResolver():QAbstractUriResolver;
		DestroyQXmlQuery():void;
	}
	function NewQXmlQueryFromPointer(ptr:number):QXmlQuery;
	function NewQXmlQuery():QXmlQuery;
	function NewQXmlQuery2(other:QXmlQuery_ITF):QXmlQuery;
	function NewQXmlQuery3(np:QXmlNamePool_ITF):QXmlQuery;
	function NewQXmlQuery4(queryLanguage:number,np:QXmlNamePool_ITF):QXmlQuery;
	const QXmlQuery__XQuery10: number;
	const QXmlQuery__XSLT20: number;
	const QXmlQuery__XmlSchema11IdentityConstraintSelector: number;
	const QXmlQuery__XmlSchema11IdentityConstraintField: number;
	const QXmlQuery__XPath20: number;
	interface QXmlResultItems_ITF {
		QXmlResultItems_PTR():QXmlResultItems;
	}

	class QXmlResultItems {
		___pointer: number;
		QXmlResultItems_PTR():QXmlResultItems;
		Pointer():number;
		SetPointer(p:number):void;
		Current():QXmlItem;
		HasError():boolean;
		Next():QXmlItem;
		ConnectDestroyQXmlResultItems(f:()=>void):void;
		DisconnectDestroyQXmlResultItems():void;
		DestroyQXmlResultItems():void;
		DestroyQXmlResultItemsDefault():void;
	}
	function NewQXmlResultItemsFromPointer(ptr:number):QXmlResultItems;
	function NewQXmlResultItems():QXmlResultItems;
	interface QXmlSchema_ITF {
		QXmlSchema_PTR():QXmlSchema;
	}

	class QXmlSchema {
		___pointer: number;
		QXmlSchema_PTR():QXmlSchema;
		Pointer():number;
		SetPointer(p:number):void;
		DocumentUri():core.QUrl;
		IsValid():boolean;
		Load(source:core.QUrl_ITF):boolean;
		Load2(source:core.QIODevice_ITF,documentUri:core.QUrl_ITF):boolean;
		Load3(data:core.QByteArray_ITF,documentUri:core.QUrl_ITF):boolean;
		MessageHandler():QAbstractMessageHandler;
		NamePool():QXmlNamePool;
		NetworkAccessManager():network.QNetworkAccessManager;
		SetMessageHandler(handler:QAbstractMessageHandler_ITF):void;
		SetNetworkAccessManager(manager:network.QNetworkAccessManager_ITF):void;
		SetUriResolver(resolver:QAbstractUriResolver_ITF):void;
		UriResolver():QAbstractUriResolver;
		DestroyQXmlSchema():void;
	}
	function NewQXmlSchemaFromPointer(ptr:number):QXmlSchema;
	function NewQXmlSchema():QXmlSchema;
	function NewQXmlSchema2(other:QXmlSchema_ITF):QXmlSchema;
	function NewQXmlSchemaValidator():QXmlSchemaValidator;
	function NewQXmlSchemaValidator2(schema:QXmlSchema_ITF):QXmlSchemaValidator;
	interface QXmlSchemaValidator_ITF {
		QXmlSchemaValidator_PTR():QXmlSchemaValidator;
	}

	class QXmlSchemaValidator {
		___pointer: number;
		QXmlSchemaValidator_PTR():QXmlSchemaValidator;
		Pointer():number;
		SetPointer(p:number):void;
		MessageHandler():QAbstractMessageHandler;
		NamePool():QXmlNamePool;
		NetworkAccessManager():network.QNetworkAccessManager;
		Schema():QXmlSchema;
		SetMessageHandler(handler:QAbstractMessageHandler_ITF):void;
		SetNetworkAccessManager(manager:network.QNetworkAccessManager_ITF):void;
		SetSchema(schema:QXmlSchema_ITF):void;
		SetUriResolver(resolver:QAbstractUriResolver_ITF):void;
		UriResolver():QAbstractUriResolver;
		Validate(source:core.QUrl_ITF):boolean;
		Validate2(source:core.QIODevice_ITF,documentUri:core.QUrl_ITF):boolean;
		Validate3(data:core.QByteArray_ITF,documentUri:core.QUrl_ITF):boolean;
		DestroyQXmlSchemaValidator():void;
	}
	function NewQXmlSchemaValidatorFromPointer(ptr:number):QXmlSchemaValidator;
	function NewQXmlSchemaValidator():QXmlSchemaValidator;
	function NewQXmlSchemaValidator2(schema:QXmlSchema_ITF):QXmlSchemaValidator;
	interface QXmlSerializer_ITF extends QAbstractXmlReceiver_ITF {
		QXmlSerializer_PTR():QXmlSerializer;
	}

	class QXmlSerializer extends QAbstractXmlReceiver {
		___pointer: number;
		QXmlSerializer_PTR():QXmlSerializer;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQXmlSerializer():void;
		ConnectAtomicValue(f:(value:core.QVariant)=>void):void;
		DisconnectAtomicValue():void;
		AtomicValue(value:core.QVariant_ITF):void;
		AtomicValueDefault(value:core.QVariant_ITF):void;
		ConnectAttribute(f:(name:QXmlName,value:core.QStringRef)=>void):void;
		DisconnectAttribute():void;
		Attribute(name:QXmlName_ITF,value:core.QStringRef_ITF):void;
		AttributeDefault(name:QXmlName_ITF,value:core.QStringRef_ITF):void;
		ConnectCharacters(f:(value:core.QStringRef)=>void):void;
		DisconnectCharacters():void;
		Characters(value:core.QStringRef_ITF):void;
		CharactersDefault(value:core.QStringRef_ITF):void;
		Codec():core.QTextCodec;
		ConnectComment(f:(value:string)=>void):void;
		DisconnectComment():void;
		Comment(value:string):void;
		CommentDefault(value:string):void;
		ConnectEndDocument(f:()=>void):void;
		DisconnectEndDocument():void;
		EndDocument():void;
		EndDocumentDefault():void;
		ConnectEndElement(f:()=>void):void;
		DisconnectEndElement():void;
		EndElement():void;
		EndElementDefault():void;
		ConnectEndOfSequence(f:()=>void):void;
		DisconnectEndOfSequence():void;
		EndOfSequence():void;
		EndOfSequenceDefault():void;
		ConnectNamespaceBinding(f:(nb:QXmlName)=>void):void;
		DisconnectNamespaceBinding():void;
		NamespaceBinding(nb:QXmlName_ITF):void;
		NamespaceBindingDefault(nb:QXmlName_ITF):void;
		OutputDevice():core.QIODevice;
		ConnectProcessingInstruction(f:(name:QXmlName,value:string)=>void):void;
		DisconnectProcessingInstruction():void;
		ProcessingInstruction(name:QXmlName_ITF,value:string):void;
		ProcessingInstructionDefault(name:QXmlName_ITF,value:string):void;
		SetCodec(outputCodec:core.QTextCodec_ITF):void;
		ConnectStartDocument(f:()=>void):void;
		DisconnectStartDocument():void;
		StartDocument():void;
		StartDocumentDefault():void;
		ConnectStartElement(f:(name:QXmlName)=>void):void;
		DisconnectStartElement():void;
		StartElement(name:QXmlName_ITF):void;
		StartElementDefault(name:QXmlName_ITF):void;
		ConnectStartOfSequence(f:()=>void):void;
		DisconnectStartOfSequence():void;
		StartOfSequence():void;
		StartOfSequenceDefault():void;
	}
	function NewQXmlSerializerFromPointer(ptr:number):QXmlSerializer;
	function NewQXmlSerializer(query:QXmlQuery_ITF,outputDevice:core.QIODevice_ITF):QXmlSerializer;
}