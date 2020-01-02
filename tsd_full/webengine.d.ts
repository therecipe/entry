/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="network.d.ts" />
/// <reference path="widgets.d.ts" />
/// <reference path="webchannel.d.ts" />
/// <reference path="printsupport.d.ts" />
declare namespace webengine {
	interface QQuickWebEngineProfile_ITF extends core.QObject_ITF {
		QQuickWebEngineProfile_PTR():QQuickWebEngineProfile;
	}

	class QQuickWebEngineProfile extends core.QObject {
		___pointer: number;
		QQuickWebEngineProfile_PTR():QQuickWebEngineProfile;
		Pointer():number;
		SetPointer(p:number):void;
		CachePath():string;
		ConnectCachePathChanged(f:()=>void):void;
		DisconnectCachePathChanged():void;
		CachePathChanged():void;
		ClearHttpCache():void;
		ClientCertificateStore():QWebEngineClientCertificateStore;
		CookieStore():QWebEngineCookieStore;
		DefaultProfile():QQuickWebEngineProfile;
		DownloadPath():string;
		ConnectDownloadPathChanged(f:()=>void):void;
		DisconnectDownloadPathChanged():void;
		DownloadPathChanged():void;
		HttpAcceptLanguage():string;
		ConnectHttpAcceptLanguageChanged(f:()=>void):void;
		DisconnectHttpAcceptLanguageChanged():void;
		HttpAcceptLanguageChanged():void;
		HttpCacheMaximumSize():number;
		ConnectHttpCacheMaximumSizeChanged(f:()=>void):void;
		DisconnectHttpCacheMaximumSizeChanged():void;
		HttpCacheMaximumSizeChanged():void;
		HttpCacheType():number;
		ConnectHttpCacheTypeChanged(f:()=>void):void;
		DisconnectHttpCacheTypeChanged():void;
		HttpCacheTypeChanged():void;
		HttpUserAgent():string;
		ConnectHttpUserAgentChanged(f:()=>void):void;
		DisconnectHttpUserAgentChanged():void;
		HttpUserAgentChanged():void;
		InstallUrlSchemeHandler(scheme:core.QByteArray_ITF,handler:QWebEngineUrlSchemeHandler_ITF):void;
		IsOffTheRecord():boolean;
		IsSpellCheckEnabled():boolean;
		IsUsedForGlobalCertificateVerification():boolean;
		ConnectOffTheRecordChanged(f:()=>void):void;
		DisconnectOffTheRecordChanged():void;
		OffTheRecordChanged():void;
		PersistentCookiesPolicy():number;
		ConnectPersistentCookiesPolicyChanged(f:()=>void):void;
		DisconnectPersistentCookiesPolicyChanged():void;
		PersistentCookiesPolicyChanged():void;
		PersistentStoragePath():string;
		ConnectPersistentStoragePathChanged(f:()=>void):void;
		DisconnectPersistentStoragePathChanged():void;
		PersistentStoragePathChanged():void;
		ConnectPresentNotification(f:(notification:QWebEngineNotification)=>void):void;
		DisconnectPresentNotification():void;
		PresentNotification(notification:QWebEngineNotification_ITF):void;
		RemoveAllUrlSchemeHandlers():void;
		RemoveUrlScheme(scheme:core.QByteArray_ITF):void;
		RemoveUrlSchemeHandler(handler:QWebEngineUrlSchemeHandler_ITF):void;
		SetCachePath(path:string):void;
		SetDownloadPath(path:string):void;
		SetHttpAcceptLanguage(httpAcceptLanguage:string):void;
		SetHttpCacheMaximumSize(maxSize:number):void;
		SetHttpCacheType(vqq:number):void;
		SetHttpUserAgent(userAgent:string):void;
		SetOffTheRecord(offTheRecord:boolean):void;
		SetPersistentCookiesPolicy(vqq:number):void;
		SetPersistentStoragePath(path:string):void;
		SetSpellCheckEnabled(enabled:boolean):void;
		SetSpellCheckLanguages(languages:string[]):void;
		SetStorageName(name:string):void;
		SetUrlRequestInterceptor(interceptor:QWebEngineUrlRequestInterceptor_ITF):void;
		SetUseForGlobalCertificateVerification(b:boolean):void;
		ConnectSpellCheckEnabledChanged(f:()=>void):void;
		DisconnectSpellCheckEnabledChanged():void;
		SpellCheckEnabledChanged():void;
		SpellCheckLanguages():string[];
		ConnectSpellCheckLanguagesChanged(f:()=>void):void;
		DisconnectSpellCheckLanguagesChanged():void;
		SpellCheckLanguagesChanged():void;
		StorageName():string;
		ConnectStorageNameChanged(f:()=>void):void;
		DisconnectStorageNameChanged():void;
		StorageNameChanged():void;
		UrlSchemeHandler(scheme:core.QByteArray_ITF):QWebEngineUrlSchemeHandler;
		ConnectUseForGlobalCertificateVerificationChanged(f:()=>void):void;
		DisconnectUseForGlobalCertificateVerificationChanged():void;
		UseForGlobalCertificateVerificationChanged():void;
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
	function NewQQuickWebEngineProfileFromPointer(ptr:number):QQuickWebEngineProfile;
	function NewQQuickWebEngineProfile(parent:core.QObject_ITF):QQuickWebEngineProfile;
	function QQuickWebEngineProfile_DefaultProfile():QQuickWebEngineProfile;
	const QQuickWebEngineProfile__MemoryHttpCache: number;
	const QQuickWebEngineProfile__DiskHttpCache: number;
	const QQuickWebEngineProfile__NoCache: number;
	const QQuickWebEngineProfile__NoPersistentCookies: number;
	const QQuickWebEngineProfile__AllowPersistentCookies: number;
	const QQuickWebEngineProfile__ForcePersistentCookies: number;
	interface QQuickWebEngineScript_ITF extends core.QObject_ITF {
		QQuickWebEngineScript_PTR():QQuickWebEngineScript;
	}

	class QQuickWebEngineScript extends core.QObject {
		___pointer: number;
		QQuickWebEngineScript_PTR():QQuickWebEngineScript;
		Pointer():number;
		SetPointer(p:number):void;
		InjectionPoint():number;
		ConnectInjectionPointChanged(f:(injectionPoint:number)=>void):void;
		DisconnectInjectionPointChanged():void;
		InjectionPointChanged(injectionPoint:number):void;
		Name():string;
		ConnectNameChanged(f:(name:string)=>void):void;
		DisconnectNameChanged():void;
		NameChanged(name:string):void;
		RunOnSubframes():boolean;
		ConnectRunOnSubframesChanged(f:(on:boolean)=>void):void;
		DisconnectRunOnSubframesChanged():void;
		RunOnSubframesChanged(on:boolean):void;
		SetInjectionPoint(injectionPoint:number):void;
		SetName(name:string):void;
		SetRunOnSubframes(on:boolean):void;
		SetSourceCode(code:string):void;
		SetSourceUrl(url:core.QUrl_ITF):void;
		SetWorldId(scriptWorldId:number):void;
		SourceCode():string;
		ConnectSourceCodeChanged(f:(code:string)=>void):void;
		DisconnectSourceCodeChanged():void;
		SourceCodeChanged(code:string):void;
		SourceUrl():core.QUrl;
		ConnectSourceUrlChanged(f:(url:core.QUrl)=>void):void;
		DisconnectSourceUrlChanged():void;
		SourceUrlChanged(url:core.QUrl_ITF):void;
		ToString():string;
		WorldId():number;
		ConnectWorldIdChanged(f:(scriptWorldId:number)=>void):void;
		DisconnectWorldIdChanged():void;
		WorldIdChanged(scriptWorldId:number):void;
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
	function NewQQuickWebEngineScriptFromPointer(ptr:number):QQuickWebEngineScript;
	function NewQQuickWebEngineScript(parent:core.QObject_ITF):QQuickWebEngineScript;
	const QQuickWebEngineScript__Deferred: number;
	const QQuickWebEngineScript__DocumentReady: number;
	const QQuickWebEngineScript__DocumentCreation: number;
	const QQuickWebEngineScript__MainWorld: number;
	const QQuickWebEngineScript__ApplicationWorld: number;
	const QQuickWebEngineScript__UserWorld: number;
	interface QWebEngineCallback_ITF {
		QWebEngineCallback_PTR():QWebEngineCallback;
	}

	class QWebEngineCallback {
		___pointer: number;
		QWebEngineCallback_PTR():QWebEngineCallback;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineCallback():void;
	}
	function NewQWebEngineCallbackFromPointer(ptr:number):QWebEngineCallback;
	interface QWebEngineCertificateError_ITF {
		QWebEngineCertificateError_PTR():QWebEngineCertificateError;
	}

	class QWebEngineCertificateError {
		___pointer: number;
		QWebEngineCertificateError_PTR():QWebEngineCertificateError;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineCertificateError():void;
		Error():number;
		ErrorDescription():string;
		IsOverridable():boolean;
		Url():core.QUrl;
	}
	function NewQWebEngineCertificateErrorFromPointer(ptr:number):QWebEngineCertificateError;
	const QWebEngineCertificateError__SslPinnedKeyNotInCertificateChain: number;
	const QWebEngineCertificateError__CertificateCommonNameInvalid: number;
	const QWebEngineCertificateError__CertificateDateInvalid: number;
	const QWebEngineCertificateError__CertificateAuthorityInvalid: number;
	const QWebEngineCertificateError__CertificateContainsErrors: number;
	const QWebEngineCertificateError__CertificateNoRevocationMechanism: number;
	const QWebEngineCertificateError__CertificateUnableToCheckRevocation: number;
	const QWebEngineCertificateError__CertificateRevoked: number;
	const QWebEngineCertificateError__CertificateInvalid: number;
	const QWebEngineCertificateError__CertificateWeakSignatureAlgorithm: number;
	const QWebEngineCertificateError__CertificateNonUniqueName: number;
	const QWebEngineCertificateError__CertificateWeakKey: number;
	const QWebEngineCertificateError__CertificateNameConstraintViolation: number;
	const QWebEngineCertificateError__CertificateValidityTooLong: number;
	const QWebEngineCertificateError__CertificateTransparencyRequired: number;
	interface QWebEngineClientCertificateSelection_ITF {
		QWebEngineClientCertificateSelection_PTR():QWebEngineClientCertificateSelection;
	}

	class QWebEngineClientCertificateSelection {
		___pointer: number;
		QWebEngineClientCertificateSelection_PTR():QWebEngineClientCertificateSelection;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineClientCertificateSelection():void;
		Certificates():network.QSslCertificate[];
		Host():core.QUrl;
		Select(certificate:network.QSslCertificate_ITF):void;
		SelectNone():void;
	}
	function NewQWebEngineClientCertificateSelectionFromPointer(ptr:number):QWebEngineClientCertificateSelection;
	function NewQWebEngineClientCertificateSelection(vqw:QWebEngineClientCertificateSelection_ITF):QWebEngineClientCertificateSelection;
	interface QWebEngineClientCertificateStore_ITF {
		QWebEngineClientCertificateStore_PTR():QWebEngineClientCertificateStore;
	}

	class QWebEngineClientCertificateStore {
		___pointer: number;
		QWebEngineClientCertificateStore_PTR():QWebEngineClientCertificateStore;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineClientCertificateStore():void;
		Add(certificate:network.QSslCertificate_ITF,privateKey:network.QSslKey_ITF):void;
		Certificates():network.QSslCertificate[];
		Clear():void;
		Remove(certificate:network.QSslCertificate_ITF):void;
	}
	function NewQWebEngineClientCertificateStoreFromPointer(ptr:number):QWebEngineClientCertificateStore;
	interface QWebEngineContextMenuData_ITF {
		QWebEngineContextMenuData_PTR():QWebEngineContextMenuData;
	}

	class QWebEngineContextMenuData {
		___pointer: number;
		QWebEngineContextMenuData_PTR():QWebEngineContextMenuData;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineContextMenuData():void;
	}
	function NewQWebEngineContextMenuDataFromPointer(ptr:number):QWebEngineContextMenuData;
	interface QWebEngineCookieStore_ITF extends core.QObject_ITF {
		QWebEngineCookieStore_PTR():QWebEngineCookieStore;
	}

	class QWebEngineCookieStore extends core.QObject {
		___pointer: number;
		QWebEngineCookieStore_PTR():QWebEngineCookieStore;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCookieAdded(f:(cookie:network.QNetworkCookie)=>void):void;
		DisconnectCookieAdded():void;
		CookieAdded(cookie:network.QNetworkCookie_ITF):void;
		ConnectCookieRemoved(f:(cookie:network.QNetworkCookie)=>void):void;
		DisconnectCookieRemoved():void;
		CookieRemoved(cookie:network.QNetworkCookie_ITF):void;
		DeleteAllCookies():void;
		DeleteCookie(cookie:network.QNetworkCookie_ITF,origi:core.QUrl_ITF):void;
		DeleteSessionCookies():void;
		LoadAllCookies():void;
		SetCookie(cookie:network.QNetworkCookie_ITF,origi:core.QUrl_ITF):void;
		ConnectDestroyQWebEngineCookieStore(f:()=>void):void;
		DisconnectDestroyQWebEngineCookieStore():void;
		DestroyQWebEngineCookieStore():void;
		DestroyQWebEngineCookieStoreDefault():void;
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
	function NewQWebEngineCookieStoreFromPointer(ptr:number):QWebEngineCookieStore;
	interface QWebEngineHttpRequest_ITF {
		QWebEngineHttpRequest_PTR():QWebEngineHttpRequest;
	}

	class QWebEngineHttpRequest {
		___pointer: number;
		QWebEngineHttpRequest_PTR():QWebEngineHttpRequest;
		Pointer():number;
		SetPointer(p:number):void;
		HasHeader(headerName:core.QByteArray_ITF):boolean;
		Header(headerName:core.QByteArray_ITF):core.QByteArray;
		Headers():core.QByteArray[];
		Method():number;
		PostData():core.QByteArray;
		PostRequest(url:core.QUrl_ITF,postData:Map<string,string>):QWebEngineHttpRequest;
		SetHeader(headerName:core.QByteArray_ITF,headerValue:core.QByteArray_ITF):void;
		SetMethod(method:number):void;
		SetPostData(postData:core.QByteArray_ITF):void;
		SetUrl(url:core.QUrl_ITF):void;
		Swap(other:QWebEngineHttpRequest_ITF):void;
		UnsetHeader(key:core.QByteArray_ITF):void;
		Url():core.QUrl;
		DestroyQWebEngineHttpRequest():void;
	}
	function NewQWebEngineHttpRequestFromPointer(ptr:number):QWebEngineHttpRequest;
	function NewQWebEngineHttpRequest(url:core.QUrl_ITF,method:number):QWebEngineHttpRequest;
	function NewQWebEngineHttpRequest2(other:QWebEngineHttpRequest_ITF):QWebEngineHttpRequest;
	function QWebEngineHttpRequest_PostRequest(url:core.QUrl_ITF,postData:Map<string,string>):QWebEngineHttpRequest;
	const QWebEngineHttpRequest__Get: number;
	const QWebEngineHttpRequest__Post: number;
	interface QWebEngineNotification_ITF extends core.QObject_ITF {
		QWebEngineNotification_PTR():QWebEngineNotification;
	}

	class QWebEngineNotification extends core.QObject {
		___pointer: number;
		QWebEngineNotification_PTR():QWebEngineNotification;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectClick(f:()=>void):void;
		DisconnectClick():void;
		Click():void;
		ClickDefault():void;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		CloseDefault():void;
		ConnectClosed(f:()=>void):void;
		DisconnectClosed():void;
		Closed():void;
		Direction():number;
		Icon():gui.QImage;
		Language():string;
		Matches(other:QWebEngineNotification_ITF):boolean;
		Message():string;
		Origin():core.QUrl;
		ConnectShow(f:()=>void):void;
		DisconnectShow():void;
		Show():void;
		ShowDefault():void;
		Tag():string;
		Title():string;
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
	function NewQWebEngineNotificationFromPointer(ptr:number):QWebEngineNotification;
	interface QWebEnginePage_ITF extends core.QObject_ITF {
		QWebEnginePage_PTR():QWebEnginePage;
	}

	class QWebEnginePage extends core.QObject {
		___pointer: number;
		QWebEnginePage_PTR():QWebEnginePage;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAcceptNavigationRequest(f:(url:core.QUrl,ty:number,isMainFrame:boolean)=>boolean):void;
		DisconnectAcceptNavigationRequest():void;
		AcceptNavigationRequest(url:core.QUrl_ITF,ty:number,isMainFrame:boolean):boolean;
		AcceptNavigationRequestDefault(url:core.QUrl_ITF,ty:number,isMainFrame:boolean):boolean;
		Action(action:number):widgets.QAction;
		ConnectAudioMutedChanged(f:(muted:boolean)=>void):void;
		DisconnectAudioMutedChanged():void;
		AudioMutedChanged(muted:boolean):void;
		ConnectAuthenticationRequired(f:(requestUrl:core.QUrl,authenticator:network.QAuthenticator)=>void):void;
		DisconnectAuthenticationRequired():void;
		AuthenticationRequired(requestUrl:core.QUrl_ITF,authenticator:network.QAuthenticator_ITF):void;
		BackgroundColor():gui.QColor;
		ConnectCertificateError(f:(certificateError:QWebEngineCertificateError)=>boolean):void;
		DisconnectCertificateError():void;
		CertificateError(certificateError:QWebEngineCertificateError_ITF):boolean;
		CertificateErrorDefault(certificateError:QWebEngineCertificateError_ITF):boolean;
		ConnectChooseFiles(f:(mode:number,oldFiles:string[],acceptedMimeTypes:string[])=>string[]):void;
		DisconnectChooseFiles():void;
		ChooseFiles(mode:number,oldFiles:string[],acceptedMimeTypes:string[]):string[];
		ChooseFilesDefault(mode:number,oldFiles:string[],acceptedMimeTypes:string[]):string[];
		ContentsSize():core.QSizeF;
		ConnectContentsSizeChanged(f:(size:core.QSizeF)=>void):void;
		DisconnectContentsSizeChanged():void;
		ContentsSizeChanged(size:core.QSizeF_ITF):void;
		ContextMenuData():QWebEngineContextMenuData;
		CreateStandardContextMenu():widgets.QMenu;
		ConnectCreateWindow(f:(ty:number)=>QWebEnginePage):void;
		DisconnectCreateWindow():void;
		CreateWindow(ty:number):QWebEnginePage;
		CreateWindowDefault(ty:number):QWebEnginePage;
		DevToolsPage():QWebEnginePage;
		Download(url:core.QUrl_ITF,filename:string):void;
		EventDefault(vqe:core.QEvent_ITF):boolean;
		ConnectFeaturePermissionRequestCanceled(f:(securityOrigi:core.QUrl,feature:number)=>void):void;
		DisconnectFeaturePermissionRequestCanceled():void;
		FeaturePermissionRequestCanceled(securityOrigi:core.QUrl_ITF,feature:number):void;
		ConnectFeaturePermissionRequested(f:(securityOrigi:core.QUrl,feature:number)=>void):void;
		DisconnectFeaturePermissionRequested():void;
		FeaturePermissionRequested(securityOrigi:core.QUrl_ITF,feature:number):void;
		ConnectGeometryChangeRequested(f:(geom:core.QRect)=>void):void;
		DisconnectGeometryChangeRequested():void;
		GeometryChangeRequested(geom:core.QRect_ITF):void;
		HasSelection():boolean;
		Icon():gui.QIcon;
		ConnectIconChanged(f:(icon:gui.QIcon)=>void):void;
		DisconnectIconChanged():void;
		IconChanged(icon:gui.QIcon_ITF):void;
		IconUrl():core.QUrl;
		ConnectIconUrlChanged(f:(url:core.QUrl)=>void):void;
		DisconnectIconUrlChanged():void;
		IconUrlChanged(url:core.QUrl_ITF):void;
		InspectedPage():QWebEnginePage;
		IsAudioMuted():boolean;
		ConnectJavaScriptAlert(f:(securityOrigi:core.QUrl,msg:string)=>void):void;
		DisconnectJavaScriptAlert():void;
		JavaScriptAlert(securityOrigi:core.QUrl_ITF,msg:string):void;
		JavaScriptAlertDefault(securityOrigi:core.QUrl_ITF,msg:string):void;
		ConnectJavaScriptConfirm(f:(securityOrigi:core.QUrl,msg:string)=>boolean):void;
		DisconnectJavaScriptConfirm():void;
		JavaScriptConfirm(securityOrigi:core.QUrl_ITF,msg:string):boolean;
		JavaScriptConfirmDefault(securityOrigi:core.QUrl_ITF,msg:string):boolean;
		ConnectJavaScriptConsoleMessage(f:(level:number,message:string,lineNumber:number,sourceID:string)=>void):void;
		DisconnectJavaScriptConsoleMessage():void;
		JavaScriptConsoleMessage(level:number,message:string,lineNumber:number,sourceID:string):void;
		JavaScriptConsoleMessageDefault(level:number,message:string,lineNumber:number,sourceID:string):void;
		ConnectJavaScriptPrompt(f:(securityOrigi:core.QUrl,msg:string,defaultValue:string,result:string)=>boolean):void;
		DisconnectJavaScriptPrompt():void;
		JavaScriptPrompt(securityOrigi:core.QUrl_ITF,msg:string,defaultValue:string,result:string):boolean;
		JavaScriptPromptDefault(securityOrigi:core.QUrl_ITF,msg:string,defaultValue:string,result:string):boolean;
		ConnectLinkHovered(f:(url:string)=>void):void;
		DisconnectLinkHovered():void;
		LinkHovered(url:string):void;
		Load(url:core.QUrl_ITF):void;
		Load2(request:QWebEngineHttpRequest_ITF):void;
		ConnectLoadFinished(f:(ok:boolean)=>void):void;
		DisconnectLoadFinished():void;
		LoadFinished(ok:boolean):void;
		ConnectLoadProgress(f:(progress:number)=>void):void;
		DisconnectLoadProgress():void;
		LoadProgress(progress:number):void;
		ConnectLoadStarted(f:()=>void):void;
		DisconnectLoadStarted():void;
		LoadStarted():void;
		MetaObjectDefault():core.QMetaObject;
		ConnectPdfPrintingFinished(f:(filePath:string,success:boolean)=>void):void;
		DisconnectPdfPrintingFinished():void;
		PdfPrintingFinished(filePath:string,success:boolean):void;
		Print(printer:printsupport.QPrinter_ITF):void;
		ConnectPrintRequested(f:()=>void):void;
		DisconnectPrintRequested():void;
		PrintRequested():void;
		PrintToPdf(filePath:string,layout:gui.QPageLayout_ITF):void;
		Profile():QWebEngineProfile;
		ConnectProxyAuthenticationRequired(f:(requestUrl:core.QUrl,authenticator:network.QAuthenticator,proxyHost:string)=>void):void;
		DisconnectProxyAuthenticationRequired():void;
		ProxyAuthenticationRequired(requestUrl:core.QUrl_ITF,authenticator:network.QAuthenticator_ITF,proxyHost:string):void;
		RecentlyAudible():boolean;
		ConnectRecentlyAudibleChanged(f:(recentlyAudible:boolean)=>void):void;
		DisconnectRecentlyAudibleChanged():void;
		RecentlyAudibleChanged(recentlyAudible:boolean):void;
		ReplaceMisspelledWord(replacement:string):void;
		RequestedUrl():core.QUrl;
		RunJavaScript(scriptSource:string):void;
		RunJavaScript2(scriptSource:string,worldId:number):void;
		ScrollPosition():core.QPointF;
		ConnectScrollPositionChanged(f:(position:core.QPointF)=>void):void;
		DisconnectScrollPositionChanged():void;
		ScrollPositionChanged(position:core.QPointF_ITF):void;
		ConnectSelectClientCertificate(f:(clientCertSelection:QWebEngineClientCertificateSelection)=>void):void;
		DisconnectSelectClientCertificate():void;
		SelectClientCertificate(clientCertSelection:QWebEngineClientCertificateSelection_ITF):void;
		SelectedText():string;
		ConnectSelectionChanged(f:()=>void):void;
		DisconnectSelectionChanged():void;
		SelectionChanged():void;
		SetAudioMuted(muted:boolean):void;
		SetBackgroundColor(color:gui.QColor_ITF):void;
		SetContent(data:core.QByteArray_ITF,mimeType:string,baseUrl:core.QUrl_ITF):void;
		SetDevToolsPage(page:QWebEnginePage_ITF):void;
		SetFeaturePermission(securityOrigi:core.QUrl_ITF,feature:number,policy:number):void;
		SetHtml(html:string,baseUrl:core.QUrl_ITF):void;
		SetInspectedPage(page:QWebEnginePage_ITF):void;
		SetUrl(url:core.QUrl_ITF):void;
		SetUrlRequestInterceptor(interceptor:QWebEngineUrlRequestInterceptor_ITF):void;
		SetView(view:widgets.QWidget_ITF):void;
		SetWebChannel(vqw:webchannel.QWebChannel_ITF):void;
		SetWebChannel2(vqw:webchannel.QWebChannel_ITF,worldId:number):void;
		SetZoomFactor(factor:number):void;
		Settings():QWebEngineSettings;
		Title():string;
		ConnectTitleChanged(f:(title:string)=>void):void;
		DisconnectTitleChanged():void;
		TitleChanged(title:string):void;
		Tr(s:string,c:string,n:number):string;
		ConnectTriggerAction(f:(action:number,checked:boolean)=>void):void;
		DisconnectTriggerAction():void;
		TriggerAction(action:number,checked:boolean):void;
		TriggerActionDefault(action:number,checked:boolean):void;
		Url():core.QUrl;
		ConnectUrlChanged(f:(url:core.QUrl)=>void):void;
		DisconnectUrlChanged():void;
		UrlChanged(url:core.QUrl_ITF):void;
		View():widgets.QWidget;
		WebChannel():webchannel.QWebChannel;
		ConnectWindowCloseRequested(f:()=>void):void;
		DisconnectWindowCloseRequested():void;
		WindowCloseRequested():void;
		ZoomFactor():number;
		ConnectDestroyQWebEnginePage(f:()=>void):void;
		DisconnectDestroyQWebEnginePage():void;
		DestroyQWebEnginePage():void;
		DestroyQWebEnginePageDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQWebEnginePageFromPointer(ptr:number):QWebEnginePage;
	function NewQWebEnginePage(parent:core.QObject_ITF):QWebEnginePage;
	function NewQWebEnginePage2(profile:QWebEngineProfile_ITF,parent:core.QObject_ITF):QWebEnginePage;
	function QWebEnginePage_Tr(s:string,c:string,n:number):string;
	const QWebEnginePage__FileSelectOpen: number;
	const QWebEnginePage__FileSelectOpenMultiple: number;
	const QWebEnginePage__InfoMessageLevel: number;
	const QWebEnginePage__WarningMessageLevel: number;
	const QWebEnginePage__ErrorMessageLevel: number;
	const QWebEnginePage__Back: number;
	const QWebEnginePage__Forward: number;
	const QWebEnginePage__Stop: number;
	const QWebEnginePage__Reload: number;
	const QWebEnginePage__Cut: number;
	const QWebEnginePage__Copy: number;
	const QWebEnginePage__Paste: number;
	const QWebEnginePage__Undo: number;
	const QWebEnginePage__Redo: number;
	const QWebEnginePage__SelectAll: number;
	const QWebEnginePage__ReloadAndBypassCache: number;
	const QWebEnginePage__PasteAndMatchStyle: number;
	const QWebEnginePage__OpenLinkInThisWindow: number;
	const QWebEnginePage__OpenLinkInNewWindow: number;
	const QWebEnginePage__OpenLinkInNewTab: number;
	const QWebEnginePage__CopyLinkToClipboard: number;
	const QWebEnginePage__DownloadLinkToDisk: number;
	const QWebEnginePage__CopyImageToClipboard: number;
	const QWebEnginePage__CopyImageUrlToClipboard: number;
	const QWebEnginePage__DownloadImageToDisk: number;
	const QWebEnginePage__CopyMediaUrlToClipboard: number;
	const QWebEnginePage__ToggleMediaControls: number;
	const QWebEnginePage__ToggleMediaLoop: number;
	const QWebEnginePage__ToggleMediaPlayPause: number;
	const QWebEnginePage__ToggleMediaMute: number;
	const QWebEnginePage__DownloadMediaToDisk: number;
	const QWebEnginePage__InspectElement: number;
	const QWebEnginePage__ExitFullScreen: number;
	const QWebEnginePage__RequestClose: number;
	const QWebEnginePage__Unselect: number;
	const QWebEnginePage__SavePage: number;
	const QWebEnginePage__OpenLinkInNewBackgroundTab: number;
	const QWebEnginePage__ViewSource: number;
	const QWebEnginePage__ToggleBold: number;
	const QWebEnginePage__ToggleItalic: number;
	const QWebEnginePage__ToggleUnderline: number;
	const QWebEnginePage__ToggleStrikethrough: number;
	const QWebEnginePage__AlignLeft: number;
	const QWebEnginePage__AlignCenter: number;
	const QWebEnginePage__AlignRight: number;
	const QWebEnginePage__AlignJustified: number;
	const QWebEnginePage__Indent: number;
	const QWebEnginePage__Outdent: number;
	const QWebEnginePage__InsertOrderedList: number;
	const QWebEnginePage__InsertUnorderedList: number;
	const QWebEnginePage__WebActionCount: number;
	const QWebEnginePage__WebBrowserWindow: number;
	const QWebEnginePage__WebBrowserTab: number;
	const QWebEnginePage__WebDialog: number;
	const QWebEnginePage__WebBrowserBackgroundTab: number;
	const QWebEnginePage__PermissionUnknown: number;
	const QWebEnginePage__PermissionGrantedByUser: number;
	const QWebEnginePage__PermissionDeniedByUser: number;
	const QWebEnginePage__NavigationTypeLinkClicked: number;
	const QWebEnginePage__NavigationTypeTyped: number;
	const QWebEnginePage__NavigationTypeFormSubmitted: number;
	const QWebEnginePage__NavigationTypeBackForward: number;
	const QWebEnginePage__NavigationTypeReload: number;
	const QWebEnginePage__NavigationTypeOther: number;
	const QWebEnginePage__FindBackward: number;
	const QWebEnginePage__FindCaseSensitively: number;
	const QWebEnginePage__Notifications: number;
	const QWebEnginePage__Geolocation: number;
	const QWebEnginePage__MediaAudioCapture: number;
	const QWebEnginePage__MediaVideoCapture: number;
	const QWebEnginePage__MediaAudioVideoCapture: number;
	const QWebEnginePage__MouseLock: number;
	const QWebEnginePage__DesktopVideoCapture: number;
	const QWebEnginePage__DesktopAudioVideoCapture: number;
	interface QWebEngineProfile_ITF extends core.QObject_ITF {
		QWebEngineProfile_PTR():QWebEngineProfile;
	}

	class QWebEngineProfile extends core.QObject {
		___pointer: number;
		QWebEngineProfile_PTR():QWebEngineProfile;
		Pointer():number;
		SetPointer(p:number):void;
		CachePath():string;
		ClearAllVisitedLinks():void;
		ClearHttpCache():void;
		ClearVisitedLinks(urls:core.QUrl[]):void;
		ClientCertificateStore():QWebEngineClientCertificateStore;
		CookieStore():QWebEngineCookieStore;
		DefaultProfile():QWebEngineProfile;
		DownloadPath():string;
		HttpAcceptLanguage():string;
		HttpCacheMaximumSize():number;
		HttpCacheType():number;
		HttpUserAgent():string;
		InstallUrlSchemeHandler(scheme:core.QByteArray_ITF,vqw:QWebEngineUrlSchemeHandler_ITF):void;
		IsOffTheRecord():boolean;
		IsSpellCheckEnabled():boolean;
		IsUsedForGlobalCertificateVerification():boolean;
		MetaObjectDefault():core.QMetaObject;
		PersistentCookiesPolicy():number;
		PersistentStoragePath():string;
		RemoveAllUrlSchemeHandlers():void;
		RemoveUrlScheme(scheme:core.QByteArray_ITF):void;
		RemoveUrlSchemeHandler(vqw:QWebEngineUrlSchemeHandler_ITF):void;
		Scripts():QWebEngineScriptCollection;
		SetCachePath(path:string):void;
		SetDownloadPath(path:string):void;
		SetHttpAcceptLanguage(httpAcceptLanguage:string):void;
		SetHttpCacheMaximumSize(maxSize:number):void;
		SetHttpCacheType(vqw:number):void;
		SetHttpUserAgent(userAgent:string):void;
		SetPersistentCookiesPolicy(vqw:number):void;
		SetPersistentStoragePath(path:string):void;
		SetRequestInterceptor(interceptor:QWebEngineUrlRequestInterceptor_ITF):void;
		SetSpellCheckEnabled(enabled:boolean):void;
		SetSpellCheckLanguages(languages:string[]):void;
		SetUrlRequestInterceptor(interceptor:QWebEngineUrlRequestInterceptor_ITF):void;
		SetUseForGlobalCertificateVerification(enabled:boolean):void;
		Settings():QWebEngineSettings;
		SpellCheckLanguages():string[];
		StorageName():string;
		Tr(s:string,c:string,n:number):string;
		UrlSchemeHandler(vqb:core.QByteArray_ITF):QWebEngineUrlSchemeHandler;
		VisitedLinksContainsUrl(url:core.QUrl_ITF):boolean;
		ConnectDestroyQWebEngineProfile(f:()=>void):void;
		DisconnectDestroyQWebEngineProfile():void;
		DestroyQWebEngineProfile():void;
		DestroyQWebEngineProfileDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQWebEngineProfileFromPointer(ptr:number):QWebEngineProfile;
	function NewQWebEngineProfile(parent:core.QObject_ITF):QWebEngineProfile;
	function NewQWebEngineProfile2(name:string,parent:core.QObject_ITF):QWebEngineProfile;
	function QWebEngineProfile_DefaultProfile():QWebEngineProfile;
	function QWebEngineProfile_Tr(s:string,c:string,n:number):string;
	const QWebEngineProfile__MemoryHttpCache: number;
	const QWebEngineProfile__DiskHttpCache: number;
	const QWebEngineProfile__NoCache: number;
	const QWebEngineProfile__NoPersistentCookies: number;
	const QWebEngineProfile__AllowPersistentCookies: number;
	const QWebEngineProfile__ForcePersistentCookies: number;
	interface QWebEngineQuotaRequest_ITF {
		QWebEngineQuotaRequest_PTR():QWebEngineQuotaRequest;
	}

	class QWebEngineQuotaRequest {
		___pointer: number;
		QWebEngineQuotaRequest_PTR():QWebEngineQuotaRequest;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineQuotaRequest():void;
		Accept():void;
		Origin():core.QUrl;
		Reject():void;
		RequestedSize():number;
	}
	function NewQWebEngineQuotaRequestFromPointer(ptr:number):QWebEngineQuotaRequest;
	interface QWebEngineRegisterProtocolHandlerRequest_ITF {
		QWebEngineRegisterProtocolHandlerRequest_PTR():QWebEngineRegisterProtocolHandlerRequest;
	}

	class QWebEngineRegisterProtocolHandlerRequest {
		___pointer: number;
		QWebEngineRegisterProtocolHandlerRequest_PTR():QWebEngineRegisterProtocolHandlerRequest;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineRegisterProtocolHandlerRequest():void;
		Accept():void;
		Origin():core.QUrl;
		Reject():void;
		Scheme():string;
	}
	function NewQWebEngineRegisterProtocolHandlerRequestFromPointer(ptr:number):QWebEngineRegisterProtocolHandlerRequest;
	interface QWebEngineScript_ITF {
		QWebEngineScript_PTR():QWebEngineScript;
	}

	class QWebEngineScript {
		___pointer: number;
		QWebEngineScript_PTR():QWebEngineScript;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineScript():void;
	}
	function NewQWebEngineScriptFromPointer(ptr:number):QWebEngineScript;
	const QWebEngineScript__Deferred: number;
	const QWebEngineScript__DocumentReady: number;
	const QWebEngineScript__DocumentCreation: number;
	const QWebEngineScript__MainWorld: number;
	const QWebEngineScript__ApplicationWorld: number;
	const QWebEngineScript__UserWorld: number;
	interface QWebEngineScriptCollection_ITF {
		QWebEngineScriptCollection_PTR():QWebEngineScriptCollection;
	}

	class QWebEngineScriptCollection {
		___pointer: number;
		QWebEngineScriptCollection_PTR():QWebEngineScriptCollection;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineScriptCollection():void;
	}
	function NewQWebEngineScriptCollectionFromPointer(ptr:number):QWebEngineScriptCollection;
	interface QWebEngineSettings_ITF {
		QWebEngineSettings_PTR():QWebEngineSettings;
	}

	class QWebEngineSettings {
		___pointer: number;
		QWebEngineSettings_PTR():QWebEngineSettings;
		Pointer():number;
		SetPointer(p:number):void;
		DefaultSettings():QWebEngineSettings;
		DefaultTextEncoding():string;
		FontFamily(which:number):string;
		FontSize(ty:number):number;
		GlobalSettings():QWebEngineSettings;
		ResetAttribute(attr:number):void;
		ResetFontFamily(which:number):void;
		ResetFontSize(ty:number):void;
		ResetUnknownUrlSchemePolicy():void;
		SetAttribute(attr:number,on:boolean):void;
		SetDefaultTextEncoding(encoding:string):void;
		SetFontFamily(which:number,family:string):void;
		SetFontSize(ty:number,size:number):void;
		SetUnknownUrlSchemePolicy(policy:number):void;
		TestAttribute(attr:number):boolean;
		UnknownUrlSchemePolicy():number;
		DestroyQWebEngineSettings():void;
	}
	function NewQWebEngineSettingsFromPointer(ptr:number):QWebEngineSettings;
	function NewQWebEngineSettings2(parentSettings:QWebEngineSettings_ITF):QWebEngineSettings;
	function QWebEngineSettings_DefaultSettings():QWebEngineSettings;
	function QWebEngineSettings_GlobalSettings():QWebEngineSettings;
	const QWebEngineSettings__StandardFont: number;
	const QWebEngineSettings__FixedFont: number;
	const QWebEngineSettings__SerifFont: number;
	const QWebEngineSettings__SansSerifFont: number;
	const QWebEngineSettings__CursiveFont: number;
	const QWebEngineSettings__FantasyFont: number;
	const QWebEngineSettings__PictographFont: number;
	const QWebEngineSettings__AutoLoadImages: number;
	const QWebEngineSettings__JavascriptEnabled: number;
	const QWebEngineSettings__JavascriptCanOpenWindows: number;
	const QWebEngineSettings__JavascriptCanAccessClipboard: number;
	const QWebEngineSettings__LinksIncludedInFocusChain: number;
	const QWebEngineSettings__LocalStorageEnabled: number;
	const QWebEngineSettings__LocalContentCanAccessRemoteUrls: number;
	const QWebEngineSettings__XSSAuditingEnabled: number;
	const QWebEngineSettings__SpatialNavigationEnabled: number;
	const QWebEngineSettings__LocalContentCanAccessFileUrls: number;
	const QWebEngineSettings__HyperlinkAuditingEnabled: number;
	const QWebEngineSettings__ScrollAnimatorEnabled: number;
	const QWebEngineSettings__ErrorPageEnabled: number;
	const QWebEngineSettings__PluginsEnabled: number;
	const QWebEngineSettings__FullScreenSupportEnabled: number;
	const QWebEngineSettings__ScreenCaptureEnabled: number;
	const QWebEngineSettings__WebGLEnabled: number;
	const QWebEngineSettings__Accelerated2dCanvasEnabled: number;
	const QWebEngineSettings__AutoLoadIconsForPage: number;
	const QWebEngineSettings__TouchIconsEnabled: number;
	const QWebEngineSettings__FocusOnNavigationEnabled: number;
	const QWebEngineSettings__PrintElementBackgrounds: number;
	const QWebEngineSettings__AllowRunningInsecureContent: number;
	const QWebEngineSettings__AllowGeolocationOnInsecureOrigins: number;
	const QWebEngineSettings__AllowWindowActivationFromJavaScript: number;
	const QWebEngineSettings__ShowScrollBars: number;
	const QWebEngineSettings__PlaybackRequiresUserGesture: number;
	const QWebEngineSettings__WebRTCPublicInterfacesOnly: number;
	const QWebEngineSettings__JavascriptCanPaste: number;
	const QWebEngineSettings__DnsPrefetchEnabled: number;
	const QWebEngineSettings__PdfViewerEnabled: number;
	const QWebEngineSettings__MinimumFontSize: number;
	const QWebEngineSettings__MinimumLogicalFontSize: number;
	const QWebEngineSettings__DefaultFontSize: number;
	const QWebEngineSettings__DefaultFixedFontSize: number;
	const QWebEngineSettings__DisallowUnknownUrlSchemes: number;
	const QWebEngineSettings__AllowUnknownUrlSchemesFromUserInteraction: number;
	const QWebEngineSettings__AllowAllUnknownUrlSchemes: number;
	interface QWebEngineUrlRequestInfo_ITF {
		QWebEngineUrlRequestInfo_PTR():QWebEngineUrlRequestInfo;
	}

	class QWebEngineUrlRequestInfo {
		___pointer: number;
		QWebEngineUrlRequestInfo_PTR():QWebEngineUrlRequestInfo;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebEngineUrlRequestInfo():void;
		Block(shouldBlock:boolean):void;
		FirstPartyUrl():core.QUrl;
		NavigationType():number;
		Redirect(url:core.QUrl_ITF):void;
		RequestMethod():core.QByteArray;
		RequestUrl():core.QUrl;
		ResourceType():number;
		SetHttpHeader(name:core.QByteArray_ITF,value:core.QByteArray_ITF):void;
	}
	function NewQWebEngineUrlRequestInfoFromPointer(ptr:number):QWebEngineUrlRequestInfo;
	const QWebEngineUrlRequestInfo__ResourceTypeMainFrame: number;
	const QWebEngineUrlRequestInfo__ResourceTypeSubFrame: number;
	const QWebEngineUrlRequestInfo__ResourceTypeStylesheet: number;
	const QWebEngineUrlRequestInfo__ResourceTypeScript: number;
	const QWebEngineUrlRequestInfo__ResourceTypeImage: number;
	const QWebEngineUrlRequestInfo__ResourceTypeFontResource: number;
	const QWebEngineUrlRequestInfo__ResourceTypeSubResource: number;
	const QWebEngineUrlRequestInfo__ResourceTypeObject: number;
	const QWebEngineUrlRequestInfo__ResourceTypeMedia: number;
	const QWebEngineUrlRequestInfo__ResourceTypeWorker: number;
	const QWebEngineUrlRequestInfo__ResourceTypeSharedWorker: number;
	const QWebEngineUrlRequestInfo__ResourceTypePrefetch: number;
	const QWebEngineUrlRequestInfo__ResourceTypeFavicon: number;
	const QWebEngineUrlRequestInfo__ResourceTypeXhr: number;
	const QWebEngineUrlRequestInfo__ResourceTypePing: number;
	const QWebEngineUrlRequestInfo__ResourceTypeServiceWorker: number;
	const QWebEngineUrlRequestInfo__ResourceTypeCspReport: number;
	const QWebEngineUrlRequestInfo__ResourceTypePluginResource: number;
	const QWebEngineUrlRequestInfo__ResourceTypeUnknown: number;
	const QWebEngineUrlRequestInfo__NavigationTypeLink: number;
	const QWebEngineUrlRequestInfo__NavigationTypeTyped: number;
	const QWebEngineUrlRequestInfo__NavigationTypeFormSubmitted: number;
	const QWebEngineUrlRequestInfo__NavigationTypeBackForward: number;
	const QWebEngineUrlRequestInfo__NavigationTypeReload: number;
	const QWebEngineUrlRequestInfo__NavigationTypeOther: number;
	interface QWebEngineUrlRequestInterceptor_ITF extends core.QObject_ITF {
		QWebEngineUrlRequestInterceptor_PTR():QWebEngineUrlRequestInterceptor;
	}

	class QWebEngineUrlRequestInterceptor extends core.QObject {
		___pointer: number;
		QWebEngineUrlRequestInterceptor_PTR():QWebEngineUrlRequestInterceptor;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectInterceptRequest(f:(info:QWebEngineUrlRequestInfo)=>void):void;
		DisconnectInterceptRequest():void;
		InterceptRequest(info:QWebEngineUrlRequestInfo_ITF):void;
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
	function NewQWebEngineUrlRequestInterceptorFromPointer(ptr:number):QWebEngineUrlRequestInterceptor;
	function NewQWebEngineUrlRequestInterceptor2(p:core.QObject_ITF):QWebEngineUrlRequestInterceptor;
	interface QWebEngineUrlRequestJob_ITF extends core.QObject_ITF {
		QWebEngineUrlRequestJob_PTR():QWebEngineUrlRequestJob;
	}

	class QWebEngineUrlRequestJob extends core.QObject {
		___pointer: number;
		QWebEngineUrlRequestJob_PTR():QWebEngineUrlRequestJob;
		Pointer():number;
		SetPointer(p:number):void;
		Fail(r:number):void;
		Initiator():core.QUrl;
		Redirect(url:core.QUrl_ITF):void;
		Reply(contentType:core.QByteArray_ITF,device:core.QIODevice_ITF):void;
		RequestHeaders():Map<core.QByteArray,core.QByteArray>;
		RequestMethod():core.QByteArray;
		RequestUrl():core.QUrl;
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
	function NewQWebEngineUrlRequestJobFromPointer(ptr:number):QWebEngineUrlRequestJob;
	const QWebEngineUrlRequestJob__NoError: number;
	const QWebEngineUrlRequestJob__UrlNotFound: number;
	const QWebEngineUrlRequestJob__UrlInvalid: number;
	const QWebEngineUrlRequestJob__RequestAborted: number;
	const QWebEngineUrlRequestJob__RequestDenied: number;
	const QWebEngineUrlRequestJob__RequestFailed: number;
	interface QWebEngineUrlScheme_ITF {
		QWebEngineUrlScheme_PTR():QWebEngineUrlScheme;
	}

	class QWebEngineUrlScheme {
		___pointer: number;
		QWebEngineUrlScheme_PTR():QWebEngineUrlScheme;
		Pointer():number;
		SetPointer(p:number):void;
		DefaultPort():number;
		Flags():number;
		Name():core.QByteArray;
		RegisterScheme(scheme:QWebEngineUrlScheme_ITF):void;
		SchemeByName(name:core.QByteArray_ITF):QWebEngineUrlScheme;
		SetDefaultPort(newValue:number):void;
		SetFlags(newValue:number):void;
		SetName(newValue:core.QByteArray_ITF):void;
		SetSyntax(newValue:number):void;
		DestroyQWebEngineUrlScheme():void;
	}
	function NewQWebEngineUrlSchemeFromPointer(ptr:number):QWebEngineUrlScheme;
	function NewQWebEngineUrlScheme():QWebEngineUrlScheme;
	function NewQWebEngineUrlScheme2(name:core.QByteArray_ITF):QWebEngineUrlScheme;
	function NewQWebEngineUrlScheme3(that:QWebEngineUrlScheme_ITF):QWebEngineUrlScheme;
	function NewQWebEngineUrlScheme4(that:QWebEngineUrlScheme_ITF):QWebEngineUrlScheme;
	function QWebEngineUrlScheme_RegisterScheme(scheme:QWebEngineUrlScheme_ITF):void;
	function QWebEngineUrlScheme_SchemeByName(name:core.QByteArray_ITF):QWebEngineUrlScheme;
	function NewQWebEngineUrlSchemeHandler(parent:core.QObject_ITF):QWebEngineUrlSchemeHandler;
	const QWebEngineUrlScheme__HostPortAndUserInformation: number;
	const QWebEngineUrlScheme__HostAndPort: number;
	const QWebEngineUrlScheme__Host: number;
	const QWebEngineUrlScheme__Path: number;
	const QWebEngineUrlScheme__PortUnspecified: number;
	const QWebEngineUrlScheme__SecureScheme: number;
	const QWebEngineUrlScheme__LocalScheme: number;
	const QWebEngineUrlScheme__LocalAccessAllowed: number;
	const QWebEngineUrlScheme__NoAccessAllowed: number;
	const QWebEngineUrlScheme__ServiceWorkersAllowed: number;
	const QWebEngineUrlScheme__ViewSourceAllowed: number;
	const QWebEngineUrlScheme__ContentSecurityPolicyIgnored: number;
	interface QWebEngineUrlSchemeHandler_ITF extends core.QObject_ITF {
		QWebEngineUrlSchemeHandler_PTR():QWebEngineUrlSchemeHandler;
	}

	class QWebEngineUrlSchemeHandler extends core.QObject {
		___pointer: number;
		QWebEngineUrlSchemeHandler_PTR():QWebEngineUrlSchemeHandler;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectRequestStarted(f:(request:QWebEngineUrlRequestJob)=>void):void;
		DisconnectRequestStarted():void;
		RequestStarted(request:QWebEngineUrlRequestJob_ITF):void;
		ConnectDestroyQWebEngineUrlSchemeHandler(f:()=>void):void;
		DisconnectDestroyQWebEngineUrlSchemeHandler():void;
		DestroyQWebEngineUrlSchemeHandler():void;
		DestroyQWebEngineUrlSchemeHandlerDefault():void;
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
	function NewQWebEngineUrlSchemeHandlerFromPointer(ptr:number):QWebEngineUrlSchemeHandler;
	function NewQWebEngineUrlSchemeHandler(parent:core.QObject_ITF):QWebEngineUrlSchemeHandler;
	interface QWebEngineView_ITF extends widgets.QWidget_ITF {
		QWebEngineView_PTR():QWebEngineView;
	}

	class QWebEngineView extends widgets.QWidget {
		___pointer: number;
		QWebEngineView_PTR():QWebEngineView;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBack(f:()=>void):void;
		DisconnectBack():void;
		Back():void;
		BackDefault():void;
		ContextMenuEventDefault(vqc:gui.QContextMenuEvent_ITF):void;
		DragEnterEventDefault(e:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(e:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(e:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(e:gui.QDropEvent_ITF):void;
		EventDefault(vqe:core.QEvent_ITF):boolean;
		ConnectForward(f:()=>void):void;
		DisconnectForward():void;
		Forward():void;
		ForwardDefault():void;
		HasSelection():boolean;
		HideEventDefault(vqh:gui.QHideEvent_ITF):void;
		Icon():gui.QIcon;
		ConnectIconChanged(f:(vqi:gui.QIcon)=>void):void;
		DisconnectIconChanged():void;
		IconChanged(vqi:gui.QIcon_ITF):void;
		IconUrl():core.QUrl;
		ConnectIconUrlChanged(f:(vqu:core.QUrl)=>void):void;
		DisconnectIconUrlChanged():void;
		IconUrlChanged(vqu:core.QUrl_ITF):void;
		Load(url:core.QUrl_ITF):void;
		Load2(request:QWebEngineHttpRequest_ITF):void;
		ConnectLoadFinished(f:(vbo:boolean)=>void):void;
		DisconnectLoadFinished():void;
		LoadFinished(vbo:boolean):void;
		ConnectLoadProgress(f:(progress:number)=>void):void;
		DisconnectLoadProgress():void;
		LoadProgress(progress:number):void;
		ConnectLoadStarted(f:()=>void):void;
		DisconnectLoadStarted():void;
		LoadStarted():void;
		MetaObjectDefault():core.QMetaObject;
		Page():QWebEnginePage;
		ConnectReload(f:()=>void):void;
		DisconnectReload():void;
		Reload():void;
		ReloadDefault():void;
		SelectedText():string;
		ConnectSelectionChanged(f:()=>void):void;
		DisconnectSelectionChanged():void;
		SelectionChanged():void;
		SetContent(data:core.QByteArray_ITF,mimeType:string,baseUrl:core.QUrl_ITF):void;
		SetHtml(html:string,baseUrl:core.QUrl_ITF):void;
		SetPage(page:QWebEnginePage_ITF):void;
		SetUrl(url:core.QUrl_ITF):void;
		SetZoomFactor(factor:number):void;
		Settings():QWebEngineSettings;
		ShowEventDefault(vqs:gui.QShowEvent_ITF):void;
		SizeHintDefault():core.QSize;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		Title():string;
		ConnectTitleChanged(f:(title:string)=>void):void;
		DisconnectTitleChanged():void;
		TitleChanged(title:string):void;
		Tr(s:string,c:string,n:number):string;
		Url():core.QUrl;
		ConnectUrlChanged(f:(vqu:core.QUrl)=>void):void;
		DisconnectUrlChanged():void;
		UrlChanged(vqu:core.QUrl_ITF):void;
		ZoomFactor():number;
		ConnectDestroyQWebEngineView(f:()=>void):void;
		DisconnectDestroyQWebEngineView():void;
		DestroyQWebEngineView():void;
		DestroyQWebEngineViewDefault():void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
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
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
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
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQWebEngineViewFromPointer(ptr:number):QWebEngineView;
	function NewQWebEngineView(parent:widgets.QWidget_ITF):QWebEngineView;
	function QWebEngineView_Tr(s:string,c:string,n:number):string;
	interface QtWebEngine_ITF {
		QtWebEngine_PTR():QtWebEngine;
	}

	class QtWebEngine {
		___pointer: number;
		QtWebEngine_PTR():QtWebEngine;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQtWebEngine():void;
		Initialize():void;
	}
	function NewQtWebEngineFromPointer(ptr:number):QtWebEngine;
	function QtWebEngine_Initialize():void;
}