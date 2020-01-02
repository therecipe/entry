/// <reference path="core.d.ts" />
declare namespace xml {
	interface QDomAttr_ITF extends QDomNode_ITF {
		QDomAttr_PTR():QDomAttr;
	}

	class QDomAttr extends QDomNode {
		___pointer: number;
		QDomAttr_PTR():QDomAttr;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomAttr():void;
		Name():string;
		OwnerElement():QDomElement;
		SetValue(v:string):void;
		Specified():boolean;
		Value():string;
	}
	function NewQDomAttrFromPointer(ptr:number):QDomAttr;
	function NewQDomAttr():QDomAttr;
	function NewQDomAttr2(x:QDomAttr_ITF):QDomAttr;
	interface QDomCDATASection_ITF extends QDomText_ITF {
		QDomCDATASection_PTR():QDomCDATASection;
	}

	class QDomCDATASection extends QDomText {
		___pointer: number;
		QDomCDATASection_PTR():QDomCDATASection;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomCDATASection():void;
	}
	function NewQDomCDATASectionFromPointer(ptr:number):QDomCDATASection;
	function NewQDomCDATASection():QDomCDATASection;
	function NewQDomCDATASection2(x:QDomCDATASection_ITF):QDomCDATASection;
	interface QDomCharacterData_ITF extends QDomNode_ITF {
		QDomCharacterData_PTR():QDomCharacterData;
	}

	class QDomCharacterData extends QDomNode {
		___pointer: number;
		QDomCharacterData_PTR():QDomCharacterData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomCharacterData():void;
		AppendData(arg:string):void;
		Data():string;
		DeleteData(offset:number,count:number):void;
		InsertData(offset:number,arg:string):void;
		Length():number;
		ReplaceData(offset:number,count:number,arg:string):void;
		SetData(v:string):void;
		SubstringData(offset:number,count:number):string;
	}
	function NewQDomCharacterDataFromPointer(ptr:number):QDomCharacterData;
	function NewQDomCharacterData():QDomCharacterData;
	function NewQDomCharacterData2(x:QDomCharacterData_ITF):QDomCharacterData;
	interface QDomComment_ITF extends QDomCharacterData_ITF {
		QDomComment_PTR():QDomComment;
	}

	class QDomComment extends QDomCharacterData {
		___pointer: number;
		QDomComment_PTR():QDomComment;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomComment():void;
	}
	function NewQDomCommentFromPointer(ptr:number):QDomComment;
	function NewQDomComment():QDomComment;
	function NewQDomComment2(x:QDomComment_ITF):QDomComment;
	interface QDomDocument_ITF extends QDomNode_ITF {
		QDomDocument_PTR():QDomDocument;
	}

	class QDomDocument extends QDomNode {
		___pointer: number;
		QDomDocument_PTR():QDomDocument;
		Pointer():number;
		SetPointer(p:number):void;
		CreateAttribute(name:string):QDomAttr;
		CreateAttributeNS(nsURI:string,qName:string):QDomAttr;
		CreateCDATASection(value:string):QDomCDATASection;
		CreateComment(value:string):QDomComment;
		CreateDocumentFragment():QDomDocumentFragment;
		CreateElement(tagName:string):QDomElement;
		CreateElementNS(nsURI:string,qName:string):QDomElement;
		CreateEntityReference(name:string):QDomEntityReference;
		CreateProcessingInstruction(target:string,data:string):QDomProcessingInstruction;
		CreateTextNode(value:string):QDomText;
		Doctype():QDomDocumentType;
		DocumentElement():QDomElement;
		ElementById(elementId:string):QDomElement;
		ElementsByTagName(tagname:string):QDomNodeList;
		ElementsByTagNameNS(nsURI:string,localName:string):QDomNodeList;
		Implementation():QDomImplementation;
		ImportNode(importedNode:QDomNode_ITF,deep:boolean):QDomNode;
		SetContent(data:core.QByteArray_ITF,namespaceProcessing:boolean,errorMsg:string,errorLine:number,errorColumn:number):boolean;
		SetContent2(text:string,namespaceProcessing:boolean,errorMsg:string,errorLine:number,errorColumn:number):boolean;
		SetContent3(dev:core.QIODevice_ITF,namespaceProcessing:boolean,errorMsg:string,errorLine:number,errorColumn:number):boolean;
		SetContent4(source:QXmlInputSource_ITF,namespaceProcessing:boolean,errorMsg:string,errorLine:number,errorColumn:number):boolean;
		SetContent5(buffer:core.QByteArray_ITF,errorMsg:string,errorLine:number,errorColumn:number):boolean;
		SetContent6(text:string,errorMsg:string,errorLine:number,errorColumn:number):boolean;
		SetContent7(dev:core.QIODevice_ITF,errorMsg:string,errorLine:number,errorColumn:number):boolean;
		SetContent8(source:QXmlInputSource_ITF,reader:QXmlReader_ITF,errorMsg:string,errorLine:number,errorColumn:number):boolean;
		ToByteArray(indent:number):core.QByteArray;
		ToString(indent:number):string;
		DestroyQDomDocument():void;
	}
	function NewQDomDocumentFromPointer(ptr:number):QDomDocument;
	function NewQDomDocument():QDomDocument;
	function NewQDomDocument2(name:string):QDomDocument;
	function NewQDomDocument3(doctype:QDomDocumentType_ITF):QDomDocument;
	function NewQDomDocument4(x:QDomDocument_ITF):QDomDocument;
	function NewQDomDocumentFragment():QDomDocumentFragment;
	function NewQDomDocumentFragment2(x:QDomDocumentFragment_ITF):QDomDocumentFragment;
	function NewQDomDocumentType():QDomDocumentType;
	function NewQDomDocumentType2(n:QDomDocumentType_ITF):QDomDocumentType;
	interface QDomDocumentFragment_ITF extends QDomNode_ITF {
		QDomDocumentFragment_PTR():QDomDocumentFragment;
	}

	class QDomDocumentFragment extends QDomNode {
		___pointer: number;
		QDomDocumentFragment_PTR():QDomDocumentFragment;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomDocumentFragment():void;
	}
	function NewQDomDocumentFragmentFromPointer(ptr:number):QDomDocumentFragment;
	function NewQDomDocumentFragment():QDomDocumentFragment;
	function NewQDomDocumentFragment2(x:QDomDocumentFragment_ITF):QDomDocumentFragment;
	interface QDomDocumentType_ITF extends QDomNode_ITF {
		QDomDocumentType_PTR():QDomDocumentType;
	}

	class QDomDocumentType extends QDomNode {
		___pointer: number;
		QDomDocumentType_PTR():QDomDocumentType;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomDocumentType():void;
		Entities():QDomNamedNodeMap;
		InternalSubset():string;
		Name():string;
		Notations():QDomNamedNodeMap;
		PublicId():string;
		SystemId():string;
	}
	function NewQDomDocumentTypeFromPointer(ptr:number):QDomDocumentType;
	function NewQDomDocumentType():QDomDocumentType;
	function NewQDomDocumentType2(n:QDomDocumentType_ITF):QDomDocumentType;
	interface QDomElement_ITF extends QDomNode_ITF {
		QDomElement_PTR():QDomElement;
	}

	class QDomElement extends QDomNode {
		___pointer: number;
		QDomElement_PTR():QDomElement;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomElement():void;
		Attribute(name:string,defValue:string):string;
		AttributeNS(nsURI:string,localName:string,defValue:string):string;
		AttributeNode(name:string):QDomAttr;
		AttributeNodeNS(nsURI:string,localName:string):QDomAttr;
		ElementsByTagName(tagname:string):QDomNodeList;
		ElementsByTagNameNS(nsURI:string,localName:string):QDomNodeList;
		HasAttribute(name:string):boolean;
		HasAttributeNS(nsURI:string,localName:string):boolean;
		RemoveAttribute(name:string):void;
		RemoveAttributeNS(nsURI:string,localName:string):void;
		RemoveAttributeNode(oldAttr:QDomAttr_ITF):QDomAttr;
		SetAttribute(name:string,value:string):void;
		SetAttribute2(name:string,value:number):void;
		SetAttribute3(name:string,value:number):void;
		SetAttribute4(name:string,value:number):void;
		SetAttribute5(name:string,value:number):void;
		SetAttribute6(name:string,value:number):void;
		SetAttribute7(name:string,value:number):void;
		SetAttributeNS(nsURI:string,qName:string,value:string):void;
		SetAttributeNS2(nsURI:string,qName:string,value:number):void;
		SetAttributeNS3(nsURI:string,qName:string,value:number):void;
		SetAttributeNS4(nsURI:string,qName:string,value:number):void;
		SetAttributeNS5(nsURI:string,qName:string,value:number):void;
		SetAttributeNS6(nsURI:string,qName:string,value:number):void;
		SetAttributeNode(newAttr:QDomAttr_ITF):QDomAttr;
		SetAttributeNodeNS(newAttr:QDomAttr_ITF):QDomAttr;
		SetTagName(name:string):void;
		TagName():string;
		Text():string;
	}
	function NewQDomElementFromPointer(ptr:number):QDomElement;
	function NewQDomElement():QDomElement;
	function NewQDomElement2(x:QDomElement_ITF):QDomElement;
	interface QDomEntity_ITF extends QDomNode_ITF {
		QDomEntity_PTR():QDomEntity;
	}

	class QDomEntity extends QDomNode {
		___pointer: number;
		QDomEntity_PTR():QDomEntity;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomEntity():void;
		NotationName():string;
		PublicId():string;
		SystemId():string;
	}
	function NewQDomEntityFromPointer(ptr:number):QDomEntity;
	function NewQDomEntity():QDomEntity;
	function NewQDomEntity2(x:QDomEntity_ITF):QDomEntity;
	function NewQDomEntityReference():QDomEntityReference;
	function NewQDomEntityReference2(x:QDomEntityReference_ITF):QDomEntityReference;
	interface QDomEntityReference_ITF extends QDomNode_ITF {
		QDomEntityReference_PTR():QDomEntityReference;
	}

	class QDomEntityReference extends QDomNode {
		___pointer: number;
		QDomEntityReference_PTR():QDomEntityReference;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomEntityReference():void;
	}
	function NewQDomEntityReferenceFromPointer(ptr:number):QDomEntityReference;
	function NewQDomEntityReference():QDomEntityReference;
	function NewQDomEntityReference2(x:QDomEntityReference_ITF):QDomEntityReference;
	interface QDomImplementation_ITF {
		QDomImplementation_PTR():QDomImplementation;
	}

	class QDomImplementation {
		___pointer: number;
		QDomImplementation_PTR():QDomImplementation;
		Pointer():number;
		SetPointer(p:number):void;
		CreateDocument(nsURI:string,qName:string,doctype:QDomDocumentType_ITF):QDomDocument;
		CreateDocumentType(qName:string,publicId:string,systemId:string):QDomDocumentType;
		HasFeature(feature:string,version:string):boolean;
		InvalidDataPolicy():number;
		IsNull():boolean;
		SetInvalidDataPolicy(policy:number):void;
		DestroyQDomImplementation():void;
	}
	function NewQDomImplementationFromPointer(ptr:number):QDomImplementation;
	function NewQDomImplementation():QDomImplementation;
	function NewQDomImplementation2(x:QDomImplementation_ITF):QDomImplementation;
	function QDomImplementation_InvalidDataPolicy():number;
	function QDomImplementation_SetInvalidDataPolicy(policy:number):void;
	const QDomImplementation__AcceptInvalidChars: number;
	const QDomImplementation__DropInvalidChars: number;
	const QDomImplementation__ReturnNullNode: number;
	interface QDomNamedNodeMap_ITF {
		QDomNamedNodeMap_PTR():QDomNamedNodeMap;
	}

	class QDomNamedNodeMap {
		___pointer: number;
		QDomNamedNodeMap_PTR():QDomNamedNodeMap;
		Pointer():number;
		SetPointer(p:number):void;
		Contains(name:string):boolean;
		Count():number;
		IsEmpty():boolean;
		Item(index:number):QDomNode;
		Length():number;
		NamedItem(name:string):QDomNode;
		NamedItemNS(nsURI:string,localName:string):QDomNode;
		RemoveNamedItem(name:string):QDomNode;
		RemoveNamedItemNS(nsURI:string,localName:string):QDomNode;
		SetNamedItem(newNode:QDomNode_ITF):QDomNode;
		SetNamedItemNS(newNode:QDomNode_ITF):QDomNode;
		Size():number;
		DestroyQDomNamedNodeMap():void;
	}
	function NewQDomNamedNodeMapFromPointer(ptr:number):QDomNamedNodeMap;
	function NewQDomNamedNodeMap():QDomNamedNodeMap;
	function NewQDomNamedNodeMap2(n:QDomNamedNodeMap_ITF):QDomNamedNodeMap;
	interface QDomNode_ITF {
		QDomNode_PTR():QDomNode;
	}

	class QDomNode {
		___pointer: number;
		QDomNode_PTR():QDomNode;
		Pointer():number;
		SetPointer(p:number):void;
		AppendChild(newChild:QDomNode_ITF):QDomNode;
		ChildNodes():QDomNodeList;
		Clear():void;
		CloneNode(deep:boolean):QDomNode;
		ColumnNumber():number;
		FirstChild():QDomNode;
		FirstChildElement(tagName:string):QDomElement;
		HasAttributes():boolean;
		HasChildNodes():boolean;
		InsertAfter(newChild:QDomNode_ITF,refChild:QDomNode_ITF):QDomNode;
		InsertBefore(newChild:QDomNode_ITF,refChild:QDomNode_ITF):QDomNode;
		IsAttr():boolean;
		IsCDATASection():boolean;
		IsCharacterData():boolean;
		IsComment():boolean;
		IsDocument():boolean;
		IsDocumentFragment():boolean;
		IsDocumentType():boolean;
		IsElement():boolean;
		IsEntity():boolean;
		IsEntityReference():boolean;
		IsNotation():boolean;
		IsNull():boolean;
		IsProcessingInstruction():boolean;
		IsSupported(feature:string,version:string):boolean;
		IsText():boolean;
		LastChild():QDomNode;
		LastChildElement(tagName:string):QDomElement;
		LineNumber():number;
		LocalName():string;
		NamedItem(name:string):QDomNode;
		NamespaceURI():string;
		NextSibling():QDomNode;
		NextSiblingElement(tagName:string):QDomElement;
		NodeName():string;
		NodeType():number;
		NodeValue():string;
		Normalize():void;
		OwnerDocument():QDomDocument;
		ParentNode():QDomNode;
		Prefix():string;
		PreviousSibling():QDomNode;
		PreviousSiblingElement(tagName:string):QDomElement;
		RemoveChild(oldChild:QDomNode_ITF):QDomNode;
		ReplaceChild(newChild:QDomNode_ITF,oldChild:QDomNode_ITF):QDomNode;
		Save(stream:core.QTextStream_ITF,indent:number,encodingPolicy:number):void;
		SetNodeValue(v:string):void;
		SetPrefix(pre:string):void;
		ToAttr():QDomAttr;
		ToCDATASection():QDomCDATASection;
		ToCharacterData():QDomCharacterData;
		ToComment():QDomComment;
		ToDocument():QDomDocument;
		ToDocumentFragment():QDomDocumentFragment;
		ToDocumentType():QDomDocumentType;
		ToElement():QDomElement;
		ToEntity():QDomEntity;
		ToEntityReference():QDomEntityReference;
		ToNotation():QDomNotation;
		ToProcessingInstruction():QDomProcessingInstruction;
		ToText():QDomText;
		DestroyQDomNode():void;
	}
	function NewQDomNodeFromPointer(ptr:number):QDomNode;
	function NewQDomNode():QDomNode;
	function NewQDomNode2(n:QDomNode_ITF):QDomNode;
	function NewQDomNodeList():QDomNodeList;
	function NewQDomNodeList2(n:QDomNodeList_ITF):QDomNodeList;
	const QDomNode__ElementNode: number;
	const QDomNode__AttributeNode: number;
	const QDomNode__TextNode: number;
	const QDomNode__CDATASectionNode: number;
	const QDomNode__EntityReferenceNode: number;
	const QDomNode__EntityNode: number;
	const QDomNode__ProcessingInstructionNode: number;
	const QDomNode__CommentNode: number;
	const QDomNode__DocumentNode: number;
	const QDomNode__DocumentTypeNode: number;
	const QDomNode__DocumentFragmentNode: number;
	const QDomNode__NotationNode: number;
	const QDomNode__BaseNode: number;
	const QDomNode__CharacterDataNode: number;
	const QDomNode__EncodingFromDocument: number;
	const QDomNode__EncodingFromTextStream: number;
	interface QDomNodeList_ITF {
		QDomNodeList_PTR():QDomNodeList;
	}

	class QDomNodeList {
		___pointer: number;
		QDomNodeList_PTR():QDomNodeList;
		Pointer():number;
		SetPointer(p:number):void;
		At(index:number):QDomNode;
		Count():number;
		IsEmpty():boolean;
		Item(index:number):QDomNode;
		Length():number;
		Size():number;
		DestroyQDomNodeList():void;
	}
	function NewQDomNodeListFromPointer(ptr:number):QDomNodeList;
	function NewQDomNodeList():QDomNodeList;
	function NewQDomNodeList2(n:QDomNodeList_ITF):QDomNodeList;
	interface QDomNotation_ITF extends QDomNode_ITF {
		QDomNotation_PTR():QDomNotation;
	}

	class QDomNotation extends QDomNode {
		___pointer: number;
		QDomNotation_PTR():QDomNotation;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomNotation():void;
		PublicId():string;
		SystemId():string;
	}
	function NewQDomNotationFromPointer(ptr:number):QDomNotation;
	function NewQDomNotation():QDomNotation;
	function NewQDomNotation2(x:QDomNotation_ITF):QDomNotation;
	interface QDomProcessingInstruction_ITF extends QDomNode_ITF {
		QDomProcessingInstruction_PTR():QDomProcessingInstruction;
	}

	class QDomProcessingInstruction extends QDomNode {
		___pointer: number;
		QDomProcessingInstruction_PTR():QDomProcessingInstruction;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomProcessingInstruction():void;
		Data():string;
		SetData(d:string):void;
		Target():string;
	}
	function NewQDomProcessingInstructionFromPointer(ptr:number):QDomProcessingInstruction;
	function NewQDomProcessingInstruction():QDomProcessingInstruction;
	function NewQDomProcessingInstruction2(x:QDomProcessingInstruction_ITF):QDomProcessingInstruction;
	interface QDomText_ITF extends QDomCharacterData_ITF {
		QDomText_PTR():QDomText;
	}

	class QDomText extends QDomCharacterData {
		___pointer: number;
		QDomText_PTR():QDomText;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDomText():void;
		SplitText(offset:number):QDomText;
	}
	function NewQDomTextFromPointer(ptr:number):QDomText;
	function NewQDomText():QDomText;
	function NewQDomText2(x:QDomText_ITF):QDomText;
	interface QXmlAttributes_ITF {
		QXmlAttributes_PTR():QXmlAttributes;
	}

	class QXmlAttributes {
		___pointer: number;
		QXmlAttributes_PTR():QXmlAttributes;
		Pointer():number;
		SetPointer(p:number):void;
		Append(qName:string,uri:string,localPart:string,value:string):void;
		Clear():void;
		Count():number;
		Index(qName:string):number;
		Index2(qName:core.QLatin1String_ITF):number;
		Index3(uri:string,localPart:string):number;
		Length():number;
		LocalName(index:number):string;
		QName(index:number):string;
		Swap(other:QXmlAttributes_ITF):void;
		Type(index:number):string;
		Type2(qName:string):string;
		Type3(uri:string,localName:string):string;
		Uri(index:number):string;
		Value(index:number):string;
		Value2(qName:string):string;
		Value3(qName:core.QLatin1String_ITF):string;
		Value4(uri:string,localName:string):string;
		ConnectDestroyQXmlAttributes(f:()=>void):void;
		DisconnectDestroyQXmlAttributes():void;
		DestroyQXmlAttributes():void;
		DestroyQXmlAttributesDefault():void;
	}
	function NewQXmlAttributesFromPointer(ptr:number):QXmlAttributes;
	function NewQXmlAttributes():QXmlAttributes;
	interface QXmlContentHandler_ITF {
		QXmlContentHandler_PTR():QXmlContentHandler;
	}

	class QXmlContentHandler {
		___pointer: number;
		QXmlContentHandler_PTR():QXmlContentHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCharacters(f:(ch:string)=>boolean):void;
		DisconnectCharacters():void;
		Characters(ch:string):boolean;
		ConnectEndDocument(f:()=>boolean):void;
		DisconnectEndDocument():void;
		EndDocument():boolean;
		ConnectEndElement(f:(namespaceURI:string,localName:string,qName:string)=>boolean):void;
		DisconnectEndElement():void;
		EndElement(namespaceURI:string,localName:string,qName:string):boolean;
		ConnectEndPrefixMapping(f:(prefix:string)=>boolean):void;
		DisconnectEndPrefixMapping():void;
		EndPrefixMapping(prefix:string):boolean;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ConnectIgnorableWhitespace(f:(ch:string)=>boolean):void;
		DisconnectIgnorableWhitespace():void;
		IgnorableWhitespace(ch:string):boolean;
		ConnectProcessingInstruction(f:(target:string,data:string)=>boolean):void;
		DisconnectProcessingInstruction():void;
		ProcessingInstruction(target:string,data:string):boolean;
		ConnectSetDocumentLocator(f:(locator:QXmlLocator)=>void):void;
		DisconnectSetDocumentLocator():void;
		SetDocumentLocator(locator:QXmlLocator_ITF):void;
		ConnectSkippedEntity(f:(name:string)=>boolean):void;
		DisconnectSkippedEntity():void;
		SkippedEntity(name:string):boolean;
		ConnectStartDocument(f:()=>boolean):void;
		DisconnectStartDocument():void;
		StartDocument():boolean;
		ConnectStartElement(f:(namespaceURI:string,localName:string,qName:string,atts:QXmlAttributes)=>boolean):void;
		DisconnectStartElement():void;
		StartElement(namespaceURI:string,localName:string,qName:string,atts:QXmlAttributes_ITF):boolean;
		ConnectStartPrefixMapping(f:(prefix:string,uri:string)=>boolean):void;
		DisconnectStartPrefixMapping():void;
		StartPrefixMapping(prefix:string,uri:string):boolean;
		ConnectDestroyQXmlContentHandler(f:()=>void):void;
		DisconnectDestroyQXmlContentHandler():void;
		DestroyQXmlContentHandler():void;
		DestroyQXmlContentHandlerDefault():void;
	}
	function NewQXmlContentHandlerFromPointer(ptr:number):QXmlContentHandler;
	interface QXmlDTDHandler_ITF {
		QXmlDTDHandler_PTR():QXmlDTDHandler;
	}

	class QXmlDTDHandler {
		___pointer: number;
		QXmlDTDHandler_PTR():QXmlDTDHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ConnectNotationDecl(f:(name:string,publicId:string,systemId:string)=>boolean):void;
		DisconnectNotationDecl():void;
		NotationDecl(name:string,publicId:string,systemId:string):boolean;
		ConnectUnparsedEntityDecl(f:(name:string,publicId:string,systemId:string,notationName:string)=>boolean):void;
		DisconnectUnparsedEntityDecl():void;
		UnparsedEntityDecl(name:string,publicId:string,systemId:string,notationName:string):boolean;
		ConnectDestroyQXmlDTDHandler(f:()=>void):void;
		DisconnectDestroyQXmlDTDHandler():void;
		DestroyQXmlDTDHandler():void;
		DestroyQXmlDTDHandlerDefault():void;
	}
	function NewQXmlDTDHandlerFromPointer(ptr:number):QXmlDTDHandler;
	interface QXmlDeclHandler_ITF {
		QXmlDeclHandler_PTR():QXmlDeclHandler;
	}

	class QXmlDeclHandler {
		___pointer: number;
		QXmlDeclHandler_PTR():QXmlDeclHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAttributeDecl(f:(eName:string,aName:string,ty:string,valueDefault:string,value:string)=>boolean):void;
		DisconnectAttributeDecl():void;
		AttributeDecl(eName:string,aName:string,ty:string,valueDefault:string,value:string):boolean;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ConnectExternalEntityDecl(f:(name:string,publicId:string,systemId:string)=>boolean):void;
		DisconnectExternalEntityDecl():void;
		ExternalEntityDecl(name:string,publicId:string,systemId:string):boolean;
		ConnectInternalEntityDecl(f:(name:string,value:string)=>boolean):void;
		DisconnectInternalEntityDecl():void;
		InternalEntityDecl(name:string,value:string):boolean;
		ConnectDestroyQXmlDeclHandler(f:()=>void):void;
		DisconnectDestroyQXmlDeclHandler():void;
		DestroyQXmlDeclHandler():void;
		DestroyQXmlDeclHandlerDefault():void;
	}
	function NewQXmlDeclHandlerFromPointer(ptr:number):QXmlDeclHandler;
	interface QXmlDefaultHandler_ITF extends QXmlDeclHandler_ITF {
		QXmlDefaultHandler_PTR():QXmlDefaultHandler;
		QXmlContentHandler_PTR():QXmlContentHandler;
		QXmlErrorHandler_PTR():QXmlContentHandler;
		QXmlDTDHandler_PTR():QXmlContentHandler;
		QXmlEntityResolver_PTR():QXmlContentHandler;
		QXmlLexicalHandler_PTR():QXmlContentHandler;
	}

	class QXmlDefaultHandler extends QXmlDeclHandler {
		QXmlContentHandler_PTR():QXmlContentHandler
		QXmlErrorHandler_PTR():QXmlContentHandler
		QXmlDTDHandler_PTR():QXmlContentHandler
		QXmlEntityResolver_PTR():QXmlContentHandler
		QXmlLexicalHandler_PTR():QXmlContentHandler
		___pointer: number;
		QXmlDefaultHandler_PTR():QXmlDefaultHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAttributeDecl(f:(eName:string,aName:string,ty:string,valueDefault:string,value:string)=>boolean):void;
		DisconnectAttributeDecl():void;
		AttributeDecl(eName:string,aName:string,ty:string,valueDefault:string,value:string):boolean;
		AttributeDeclDefault(eName:string,aName:string,ty:string,valueDefault:string,value:string):boolean;
		ConnectCharacters(f:(ch:string)=>boolean):void;
		DisconnectCharacters():void;
		Characters(ch:string):boolean;
		CharactersDefault(ch:string):boolean;
		ConnectComment(f:(ch:string)=>boolean):void;
		DisconnectComment():void;
		Comment(ch:string):boolean;
		CommentDefault(ch:string):boolean;
		ConnectEndCDATA(f:()=>boolean):void;
		DisconnectEndCDATA():void;
		EndCDATA():boolean;
		EndCDATADefault():boolean;
		ConnectEndDTD(f:()=>boolean):void;
		DisconnectEndDTD():void;
		EndDTD():boolean;
		EndDTDDefault():boolean;
		ConnectEndDocument(f:()=>boolean):void;
		DisconnectEndDocument():void;
		EndDocument():boolean;
		EndDocumentDefault():boolean;
		ConnectEndElement(f:(namespaceURI:string,localName:string,qName:string)=>boolean):void;
		DisconnectEndElement():void;
		EndElement(namespaceURI:string,localName:string,qName:string):boolean;
		EndElementDefault(namespaceURI:string,localName:string,qName:string):boolean;
		ConnectEndEntity(f:(name:string)=>boolean):void;
		DisconnectEndEntity():void;
		EndEntity(name:string):boolean;
		EndEntityDefault(name:string):boolean;
		ConnectEndPrefixMapping(f:(prefix:string)=>boolean):void;
		DisconnectEndPrefixMapping():void;
		EndPrefixMapping(prefix:string):boolean;
		EndPrefixMappingDefault(prefix:string):boolean;
		ConnectError(f:(exception:QXmlParseException)=>boolean):void;
		DisconnectError():void;
		Error(exception:QXmlParseException_ITF):boolean;
		ErrorDefault(exception:QXmlParseException_ITF):boolean;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ErrorStringDefault():string;
		ConnectExternalEntityDecl(f:(name:string,publicId:string,systemId:string)=>boolean):void;
		DisconnectExternalEntityDecl():void;
		ExternalEntityDecl(name:string,publicId:string,systemId:string):boolean;
		ExternalEntityDeclDefault(name:string,publicId:string,systemId:string):boolean;
		ConnectFatalError(f:(exception:QXmlParseException)=>boolean):void;
		DisconnectFatalError():void;
		FatalError(exception:QXmlParseException_ITF):boolean;
		FatalErrorDefault(exception:QXmlParseException_ITF):boolean;
		ConnectIgnorableWhitespace(f:(ch:string)=>boolean):void;
		DisconnectIgnorableWhitespace():void;
		IgnorableWhitespace(ch:string):boolean;
		IgnorableWhitespaceDefault(ch:string):boolean;
		ConnectInternalEntityDecl(f:(name:string,value:string)=>boolean):void;
		DisconnectInternalEntityDecl():void;
		InternalEntityDecl(name:string,value:string):boolean;
		InternalEntityDeclDefault(name:string,value:string):boolean;
		ConnectNotationDecl(f:(name:string,publicId:string,systemId:string)=>boolean):void;
		DisconnectNotationDecl():void;
		NotationDecl(name:string,publicId:string,systemId:string):boolean;
		NotationDeclDefault(name:string,publicId:string,systemId:string):boolean;
		ConnectProcessingInstruction(f:(target:string,data:string)=>boolean):void;
		DisconnectProcessingInstruction():void;
		ProcessingInstruction(target:string,data:string):boolean;
		ProcessingInstructionDefault(target:string,data:string):boolean;
		ConnectSetDocumentLocator(f:(locator:QXmlLocator)=>void):void;
		DisconnectSetDocumentLocator():void;
		SetDocumentLocator(locator:QXmlLocator_ITF):void;
		SetDocumentLocatorDefault(locator:QXmlLocator_ITF):void;
		ConnectSkippedEntity(f:(name:string)=>boolean):void;
		DisconnectSkippedEntity():void;
		SkippedEntity(name:string):boolean;
		SkippedEntityDefault(name:string):boolean;
		ConnectStartCDATA(f:()=>boolean):void;
		DisconnectStartCDATA():void;
		StartCDATA():boolean;
		StartCDATADefault():boolean;
		ConnectStartDTD(f:(name:string,publicId:string,systemId:string)=>boolean):void;
		DisconnectStartDTD():void;
		StartDTD(name:string,publicId:string,systemId:string):boolean;
		StartDTDDefault(name:string,publicId:string,systemId:string):boolean;
		ConnectStartDocument(f:()=>boolean):void;
		DisconnectStartDocument():void;
		StartDocument():boolean;
		StartDocumentDefault():boolean;
		ConnectStartElement(f:(namespaceURI:string,localName:string,qName:string,atts:QXmlAttributes)=>boolean):void;
		DisconnectStartElement():void;
		StartElement(namespaceURI:string,localName:string,qName:string,atts:QXmlAttributes_ITF):boolean;
		StartElementDefault(namespaceURI:string,localName:string,qName:string,atts:QXmlAttributes_ITF):boolean;
		ConnectStartEntity(f:(name:string)=>boolean):void;
		DisconnectStartEntity():void;
		StartEntity(name:string):boolean;
		StartEntityDefault(name:string):boolean;
		ConnectStartPrefixMapping(f:(prefix:string,uri:string)=>boolean):void;
		DisconnectStartPrefixMapping():void;
		StartPrefixMapping(prefix:string,uri:string):boolean;
		StartPrefixMappingDefault(prefix:string,uri:string):boolean;
		ConnectUnparsedEntityDecl(f:(name:string,publicId:string,systemId:string,notationName:string)=>boolean):void;
		DisconnectUnparsedEntityDecl():void;
		UnparsedEntityDecl(name:string,publicId:string,systemId:string,notationName:string):boolean;
		UnparsedEntityDeclDefault(name:string,publicId:string,systemId:string,notationName:string):boolean;
		ConnectWarning(f:(exception:QXmlParseException)=>boolean):void;
		DisconnectWarning():void;
		Warning(exception:QXmlParseException_ITF):boolean;
		WarningDefault(exception:QXmlParseException_ITF):boolean;
		ConnectDestroyQXmlDefaultHandler(f:()=>void):void;
		DisconnectDestroyQXmlDefaultHandler():void;
		DestroyQXmlDefaultHandler():void;
		DestroyQXmlDefaultHandlerDefault():void;
	}
	function NewQXmlDefaultHandlerFromPointer(ptr:number):QXmlDefaultHandler;
	function NewQXmlDefaultHandler():QXmlDefaultHandler;
	interface QXmlEntityResolver_ITF {
		QXmlEntityResolver_PTR():QXmlEntityResolver;
	}

	class QXmlEntityResolver {
		___pointer: number;
		QXmlEntityResolver_PTR():QXmlEntityResolver;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ConnectDestroyQXmlEntityResolver(f:()=>void):void;
		DisconnectDestroyQXmlEntityResolver():void;
		DestroyQXmlEntityResolver():void;
		DestroyQXmlEntityResolverDefault():void;
	}
	function NewQXmlEntityResolverFromPointer(ptr:number):QXmlEntityResolver;
	interface QXmlErrorHandler_ITF {
		QXmlErrorHandler_PTR():QXmlErrorHandler;
	}

	class QXmlErrorHandler {
		___pointer: number;
		QXmlErrorHandler_PTR():QXmlErrorHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectError(f:(exception:QXmlParseException)=>boolean):void;
		DisconnectError():void;
		Error(exception:QXmlParseException_ITF):boolean;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ConnectFatalError(f:(exception:QXmlParseException)=>boolean):void;
		DisconnectFatalError():void;
		FatalError(exception:QXmlParseException_ITF):boolean;
		ConnectWarning(f:(exception:QXmlParseException)=>boolean):void;
		DisconnectWarning():void;
		Warning(exception:QXmlParseException_ITF):boolean;
		ConnectDestroyQXmlErrorHandler(f:()=>void):void;
		DisconnectDestroyQXmlErrorHandler():void;
		DestroyQXmlErrorHandler():void;
		DestroyQXmlErrorHandlerDefault():void;
	}
	function NewQXmlErrorHandlerFromPointer(ptr:number):QXmlErrorHandler;
	interface QXmlInputSource_ITF {
		QXmlInputSource_PTR():QXmlInputSource;
	}

	class QXmlInputSource {
		___pointer: number;
		QXmlInputSource_PTR():QXmlInputSource;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectData(f:()=>string):void;
		DisconnectData():void;
		Data():string;
		DataDefault():string;
		ConnectFetchData(f:()=>void):void;
		DisconnectFetchData():void;
		FetchData():void;
		FetchDataDefault():void;
		ConnectFromRawData(f:(data:core.QByteArray,beginning:boolean)=>string):void;
		DisconnectFromRawData():void;
		FromRawData(data:core.QByteArray_ITF,beginning:boolean):string;
		FromRawDataDefault(data:core.QByteArray_ITF,beginning:boolean):string;
		ConnectNext(f:()=>core.QChar):void;
		DisconnectNext():void;
		Next():core.QChar;
		NextDefault():core.QChar;
		ConnectReset(f:()=>void):void;
		DisconnectReset():void;
		Reset():void;
		ResetDefault():void;
		ConnectSetData(f:(dat:string)=>void):void;
		DisconnectSetData():void;
		SetData(dat:string):void;
		SetDataDefault(dat:string):void;
		ConnectSetData2(f:(dat:core.QByteArray)=>void):void;
		DisconnectSetData2():void;
		SetData2(dat:core.QByteArray_ITF):void;
		SetData2Default(dat:core.QByteArray_ITF):void;
		ConnectDestroyQXmlInputSource(f:()=>void):void;
		DisconnectDestroyQXmlInputSource():void;
		DestroyQXmlInputSource():void;
		DestroyQXmlInputSourceDefault():void;
	}
	function NewQXmlInputSourceFromPointer(ptr:number):QXmlInputSource;
	function NewQXmlInputSource():QXmlInputSource;
	function NewQXmlInputSource2(dev:core.QIODevice_ITF):QXmlInputSource;
	interface QXmlLexicalHandler_ITF {
		QXmlLexicalHandler_PTR():QXmlLexicalHandler;
	}

	class QXmlLexicalHandler {
		___pointer: number;
		QXmlLexicalHandler_PTR():QXmlLexicalHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectComment(f:(ch:string)=>boolean):void;
		DisconnectComment():void;
		Comment(ch:string):boolean;
		ConnectEndCDATA(f:()=>boolean):void;
		DisconnectEndCDATA():void;
		EndCDATA():boolean;
		ConnectEndDTD(f:()=>boolean):void;
		DisconnectEndDTD():void;
		EndDTD():boolean;
		ConnectEndEntity(f:(name:string)=>boolean):void;
		DisconnectEndEntity():void;
		EndEntity(name:string):boolean;
		ConnectErrorString(f:()=>string):void;
		DisconnectErrorString():void;
		ErrorString():string;
		ConnectStartCDATA(f:()=>boolean):void;
		DisconnectStartCDATA():void;
		StartCDATA():boolean;
		ConnectStartDTD(f:(name:string,publicId:string,systemId:string)=>boolean):void;
		DisconnectStartDTD():void;
		StartDTD(name:string,publicId:string,systemId:string):boolean;
		ConnectStartEntity(f:(name:string)=>boolean):void;
		DisconnectStartEntity():void;
		StartEntity(name:string):boolean;
		ConnectDestroyQXmlLexicalHandler(f:()=>void):void;
		DisconnectDestroyQXmlLexicalHandler():void;
		DestroyQXmlLexicalHandler():void;
		DestroyQXmlLexicalHandlerDefault():void;
	}
	function NewQXmlLexicalHandlerFromPointer(ptr:number):QXmlLexicalHandler;
	interface QXmlLocator_ITF {
		QXmlLocator_PTR():QXmlLocator;
	}

	class QXmlLocator {
		___pointer: number;
		QXmlLocator_PTR():QXmlLocator;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectColumnNumber(f:()=>number):void;
		DisconnectColumnNumber():void;
		ColumnNumber():number;
		ConnectLineNumber(f:()=>number):void;
		DisconnectLineNumber():void;
		LineNumber():number;
		ConnectDestroyQXmlLocator(f:()=>void):void;
		DisconnectDestroyQXmlLocator():void;
		DestroyQXmlLocator():void;
		DestroyQXmlLocatorDefault():void;
	}
	function NewQXmlLocatorFromPointer(ptr:number):QXmlLocator;
	function NewQXmlLocator():QXmlLocator;
	interface QXmlNamespaceSupport_ITF {
		QXmlNamespaceSupport_PTR():QXmlNamespaceSupport;
	}

	class QXmlNamespaceSupport {
		___pointer: number;
		QXmlNamespaceSupport_PTR():QXmlNamespaceSupport;
		Pointer():number;
		SetPointer(p:number):void;
		PopContext():void;
		Prefix(uri:string):string;
		Prefixes():string[];
		Prefixes2(uri:string):string[];
		ProcessName(qname:string,isAttribute:boolean,nsuri:string,localname:string):void;
		PushContext():void;
		Reset():void;
		SetPrefix(pre:string,uri:string):void;
		SplitName(qname:string,prefix:string,localname:string):void;
		Uri(prefix:string):string;
		DestroyQXmlNamespaceSupport():void;
	}
	function NewQXmlNamespaceSupportFromPointer(ptr:number):QXmlNamespaceSupport;
	function NewQXmlNamespaceSupport():QXmlNamespaceSupport;
	interface QXmlParseException_ITF {
		QXmlParseException_PTR():QXmlParseException;
	}

	class QXmlParseException {
		___pointer: number;
		QXmlParseException_PTR():QXmlParseException;
		Pointer():number;
		SetPointer(p:number):void;
		ColumnNumber():number;
		LineNumber():number;
		Message():string;
		PublicId():string;
		SystemId():string;
		DestroyQXmlParseException():void;
	}
	function NewQXmlParseExceptionFromPointer(ptr:number):QXmlParseException;
	function NewQXmlParseException(name:string,c:number,l:number,p:string,s:string):QXmlParseException;
	function NewQXmlParseException2(other:QXmlParseException_ITF):QXmlParseException;
	interface QXmlReader_ITF {
		QXmlReader_PTR():QXmlReader;
	}

	class QXmlReader {
		___pointer: number;
		QXmlReader_PTR():QXmlReader;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDTDHandler(f:()=>QXmlDTDHandler):void;
		DisconnectDTDHandler():void;
		DTDHandler():QXmlDTDHandler;
		ConnectContentHandler(f:()=>QXmlContentHandler):void;
		DisconnectContentHandler():void;
		ContentHandler():QXmlContentHandler;
		ConnectDeclHandler(f:()=>QXmlDeclHandler):void;
		DisconnectDeclHandler():void;
		DeclHandler():QXmlDeclHandler;
		ConnectEntityResolver(f:()=>QXmlEntityResolver):void;
		DisconnectEntityResolver():void;
		EntityResolver():QXmlEntityResolver;
		ConnectErrorHandler(f:()=>QXmlErrorHandler):void;
		DisconnectErrorHandler():void;
		ErrorHandler():QXmlErrorHandler;
		ConnectFeature(f:(name:string,ok:boolean)=>boolean):void;
		DisconnectFeature():void;
		Feature(name:string,ok:boolean):boolean;
		ConnectHasFeature(f:(name:string)=>boolean):void;
		DisconnectHasFeature():void;
		HasFeature(name:string):boolean;
		ConnectHasProperty(f:(name:string)=>boolean):void;
		DisconnectHasProperty():void;
		HasProperty(name:string):boolean;
		ConnectLexicalHandler(f:()=>QXmlLexicalHandler):void;
		DisconnectLexicalHandler():void;
		LexicalHandler():QXmlLexicalHandler;
		ConnectProperty(f:(name:string,ok:boolean)=>number):void;
		DisconnectProperty():void;
		Property(name:string,ok:boolean):number;
		ConnectSetContentHandler(f:(handler:QXmlContentHandler)=>void):void;
		DisconnectSetContentHandler():void;
		SetContentHandler(handler:QXmlContentHandler_ITF):void;
		ConnectSetDTDHandler(f:(handler:QXmlDTDHandler)=>void):void;
		DisconnectSetDTDHandler():void;
		SetDTDHandler(handler:QXmlDTDHandler_ITF):void;
		ConnectSetDeclHandler(f:(handler:QXmlDeclHandler)=>void):void;
		DisconnectSetDeclHandler():void;
		SetDeclHandler(handler:QXmlDeclHandler_ITF):void;
		ConnectSetEntityResolver(f:(handler:QXmlEntityResolver)=>void):void;
		DisconnectSetEntityResolver():void;
		SetEntityResolver(handler:QXmlEntityResolver_ITF):void;
		ConnectSetErrorHandler(f:(handler:QXmlErrorHandler)=>void):void;
		DisconnectSetErrorHandler():void;
		SetErrorHandler(handler:QXmlErrorHandler_ITF):void;
		ConnectSetFeature(f:(name:string,value:boolean)=>void):void;
		DisconnectSetFeature():void;
		SetFeature(name:string,value:boolean):void;
		ConnectSetLexicalHandler(f:(handler:QXmlLexicalHandler)=>void):void;
		DisconnectSetLexicalHandler():void;
		SetLexicalHandler(handler:QXmlLexicalHandler_ITF):void;
		ConnectSetProperty(f:(name:string,value:number)=>void):void;
		DisconnectSetProperty():void;
		SetProperty(name:string,value:number):void;
		ConnectDestroyQXmlReader(f:()=>void):void;
		DisconnectDestroyQXmlReader():void;
		DestroyQXmlReader():void;
		DestroyQXmlReaderDefault():void;
	}
	function NewQXmlReaderFromPointer(ptr:number):QXmlReader;
	interface QXmlSimpleReader_ITF extends QXmlReader_ITF {
		QXmlSimpleReader_PTR():QXmlSimpleReader;
	}

	class QXmlSimpleReader extends QXmlReader {
		___pointer: number;
		QXmlSimpleReader_PTR():QXmlSimpleReader;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDTDHandler(f:()=>QXmlDTDHandler):void;
		DisconnectDTDHandler():void;
		DTDHandler():QXmlDTDHandler;
		DTDHandlerDefault():QXmlDTDHandler;
		ConnectContentHandler(f:()=>QXmlContentHandler):void;
		DisconnectContentHandler():void;
		ContentHandler():QXmlContentHandler;
		ContentHandlerDefault():QXmlContentHandler;
		ConnectDeclHandler(f:()=>QXmlDeclHandler):void;
		DisconnectDeclHandler():void;
		DeclHandler():QXmlDeclHandler;
		DeclHandlerDefault():QXmlDeclHandler;
		ConnectEntityResolver(f:()=>QXmlEntityResolver):void;
		DisconnectEntityResolver():void;
		EntityResolver():QXmlEntityResolver;
		EntityResolverDefault():QXmlEntityResolver;
		ConnectErrorHandler(f:()=>QXmlErrorHandler):void;
		DisconnectErrorHandler():void;
		ErrorHandler():QXmlErrorHandler;
		ErrorHandlerDefault():QXmlErrorHandler;
		ConnectFeature(f:(name:string,ok:boolean)=>boolean):void;
		DisconnectFeature():void;
		Feature(name:string,ok:boolean):boolean;
		FeatureDefault(name:string,ok:boolean):boolean;
		ConnectHasFeature(f:(name:string)=>boolean):void;
		DisconnectHasFeature():void;
		HasFeature(name:string):boolean;
		HasFeatureDefault(name:string):boolean;
		ConnectHasProperty(f:(name:string)=>boolean):void;
		DisconnectHasProperty():void;
		HasProperty(name:string):boolean;
		HasPropertyDefault(name:string):boolean;
		ConnectLexicalHandler(f:()=>QXmlLexicalHandler):void;
		DisconnectLexicalHandler():void;
		LexicalHandler():QXmlLexicalHandler;
		LexicalHandlerDefault():QXmlLexicalHandler;
		ConnectParse(f:(input:QXmlInputSource)=>boolean):void;
		DisconnectParse():void;
		Parse(input:QXmlInputSource_ITF):boolean;
		ParseDefault(input:QXmlInputSource_ITF):boolean;
		ConnectParse2(f:(input:QXmlInputSource)=>boolean):void;
		DisconnectParse2():void;
		Parse2(input:QXmlInputSource_ITF):boolean;
		Parse2Default(input:QXmlInputSource_ITF):boolean;
		ConnectParse3(f:(input:QXmlInputSource,incremental:boolean)=>boolean):void;
		DisconnectParse3():void;
		Parse3(input:QXmlInputSource_ITF,incremental:boolean):boolean;
		Parse3Default(input:QXmlInputSource_ITF,incremental:boolean):boolean;
		ConnectParseContinue(f:()=>boolean):void;
		DisconnectParseContinue():void;
		ParseContinue():boolean;
		ParseContinueDefault():boolean;
		ConnectProperty(f:(name:string,ok:boolean)=>number):void;
		DisconnectProperty():void;
		Property(name:string,ok:boolean):number;
		PropertyDefault(name:string,ok:boolean):number;
		ConnectSetContentHandler(f:(handler:QXmlContentHandler)=>void):void;
		DisconnectSetContentHandler():void;
		SetContentHandler(handler:QXmlContentHandler_ITF):void;
		SetContentHandlerDefault(handler:QXmlContentHandler_ITF):void;
		ConnectSetDTDHandler(f:(handler:QXmlDTDHandler)=>void):void;
		DisconnectSetDTDHandler():void;
		SetDTDHandler(handler:QXmlDTDHandler_ITF):void;
		SetDTDHandlerDefault(handler:QXmlDTDHandler_ITF):void;
		ConnectSetDeclHandler(f:(handler:QXmlDeclHandler)=>void):void;
		DisconnectSetDeclHandler():void;
		SetDeclHandler(handler:QXmlDeclHandler_ITF):void;
		SetDeclHandlerDefault(handler:QXmlDeclHandler_ITF):void;
		ConnectSetEntityResolver(f:(handler:QXmlEntityResolver)=>void):void;
		DisconnectSetEntityResolver():void;
		SetEntityResolver(handler:QXmlEntityResolver_ITF):void;
		SetEntityResolverDefault(handler:QXmlEntityResolver_ITF):void;
		ConnectSetErrorHandler(f:(handler:QXmlErrorHandler)=>void):void;
		DisconnectSetErrorHandler():void;
		SetErrorHandler(handler:QXmlErrorHandler_ITF):void;
		SetErrorHandlerDefault(handler:QXmlErrorHandler_ITF):void;
		ConnectSetFeature(f:(name:string,enable:boolean)=>void):void;
		DisconnectSetFeature():void;
		SetFeature(name:string,enable:boolean):void;
		SetFeatureDefault(name:string,enable:boolean):void;
		ConnectSetLexicalHandler(f:(handler:QXmlLexicalHandler)=>void):void;
		DisconnectSetLexicalHandler():void;
		SetLexicalHandler(handler:QXmlLexicalHandler_ITF):void;
		SetLexicalHandlerDefault(handler:QXmlLexicalHandler_ITF):void;
		ConnectSetProperty(f:(name:string,value:number)=>void):void;
		DisconnectSetProperty():void;
		SetProperty(name:string,value:number):void;
		SetPropertyDefault(name:string,value:number):void;
		ConnectDestroyQXmlSimpleReader(f:()=>void):void;
		DisconnectDestroyQXmlSimpleReader():void;
		DestroyQXmlSimpleReader():void;
		DestroyQXmlSimpleReaderDefault():void;
	}
	function NewQXmlSimpleReaderFromPointer(ptr:number):QXmlSimpleReader;
	function NewQXmlSimpleReader():QXmlSimpleReader;
}