/// <reference path="core.d.ts" />
/// <reference path="network.d.ts" />
declare namespace websockets {
	interface QMaskGenerator_ITF extends core.QObject_ITF {
		QMaskGenerator_PTR():QMaskGenerator;
	}

	class QMaskGenerator extends core.QObject {
		___pointer: number;
		QMaskGenerator_PTR():QMaskGenerator;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectNextMask(f:()=>number):void;
		DisconnectNextMask():void;
		NextMask():number;
		ConnectSeed(f:()=>boolean):void;
		DisconnectSeed():void;
		Seed():boolean;
		ConnectDestroyQMaskGenerator(f:()=>void):void;
		DisconnectDestroyQMaskGenerator():void;
		DestroyQMaskGenerator():void;
		DestroyQMaskGeneratorDefault():void;
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
	function NewQMaskGeneratorFromPointer(ptr:number):QMaskGenerator;
	function NewQMaskGenerator2(parent:core.QObject_ITF):QMaskGenerator;
	interface QQmlWebSocket_ITF extends core.QObject_ITF {
		QQmlWebSocket_PTR():QQmlWebSocket;
	}

	class QQmlWebSocket extends core.QObject {
		___pointer: number;
		QQmlWebSocket_PTR():QQmlWebSocket;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QQmlWebSocketServer_ITF extends core.QObject_ITF {
		QQmlWebSocketServer_PTR():QQmlWebSocketServer;
	}

	class QQmlWebSocketServer extends core.QObject {
		___pointer: number;
		QQmlWebSocketServer_PTR():QQmlWebSocketServer;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QWebSocket_ITF extends core.QObject_ITF {
		QWebSocket_PTR():QWebSocket;
	}

	class QWebSocket extends core.QObject {
		___pointer: number;
		QWebSocket_PTR():QWebSocket;
		Pointer():number;
		SetPointer(p:number):void;
		Abort():void;
		ConnectAboutToClose(f:()=>void):void;
		DisconnectAboutToClose():void;
		AboutToClose():void;
		ConnectBinaryFrameReceived(f:(frame:core.QByteArray,isLastFrame:boolean)=>void):void;
		DisconnectBinaryFrameReceived():void;
		BinaryFrameReceived(frame:core.QByteArray_ITF,isLastFrame:boolean):void;
		ConnectBinaryMessageReceived(f:(message:core.QByteArray)=>void):void;
		DisconnectBinaryMessageReceived():void;
		BinaryMessageReceived(message:core.QByteArray_ITF):void;
		BytesToWrite():number;
		ConnectBytesWritten(f:(bytes:number)=>void):void;
		DisconnectBytesWritten():void;
		BytesWritten(bytes:number):void;
		ConnectClose(f:(closeCode:number,reason:string)=>void):void;
		DisconnectClose():void;
		Close(closeCode:number,reason:string):void;
		CloseDefault(closeCode:number,reason:string):void;
		CloseCode():number;
		CloseReason():string;
		ConnectConnected(f:()=>void):void;
		DisconnectConnected():void;
		Connected():void;
		ConnectDisconnected(f:()=>void):void;
		DisconnectDisconnected():void;
		Disconnected():void;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ErrorString():string;
		Flush():boolean;
		ConnectIgnoreSslErrors(f:()=>void):void;
		DisconnectIgnoreSslErrors():void;
		IgnoreSslErrors():void;
		IgnoreSslErrorsDefault():void;
		IgnoreSslErrors2(errors:network.QSslError[]):void;
		IsValid():boolean;
		LocalAddress():network.QHostAddress;
		LocalPort():number;
		MaskGenerator():QMaskGenerator;
		ConnectOpen(f:(url:core.QUrl)=>void):void;
		DisconnectOpen():void;
		Open(url:core.QUrl_ITF):void;
		OpenDefault(url:core.QUrl_ITF):void;
		ConnectOpen2(f:(request:network.QNetworkRequest)=>void):void;
		DisconnectOpen2():void;
		Open2(request:network.QNetworkRequest_ITF):void;
		Open2Default(request:network.QNetworkRequest_ITF):void;
		Origin():string;
		PauseMode():number;
		PeerAddress():network.QHostAddress;
		PeerName():string;
		PeerPort():number;
		ConnectPing(f:(payload:core.QByteArray)=>void):void;
		DisconnectPing():void;
		Ping(payload:core.QByteArray_ITF):void;
		PingDefault(payload:core.QByteArray_ITF):void;
		ConnectPong(f:(elapsedTime:number,payload:core.QByteArray)=>void):void;
		DisconnectPong():void;
		Pong(elapsedTime:number,payload:core.QByteArray_ITF):void;
		ConnectPreSharedKeyAuthenticationRequired(f:(authenticator:network.QSslPreSharedKeyAuthenticator)=>void):void;
		DisconnectPreSharedKeyAuthenticationRequired():void;
		PreSharedKeyAuthenticationRequired(authenticator:network.QSslPreSharedKeyAuthenticator_ITF):void;
		Proxy():network.QNetworkProxy;
		ConnectProxyAuthenticationRequired(f:(proxy:network.QNetworkProxy,authenticator:network.QAuthenticator)=>void):void;
		DisconnectProxyAuthenticationRequired():void;
		ProxyAuthenticationRequired(proxy:network.QNetworkProxy_ITF,authenticator:network.QAuthenticator_ITF):void;
		ReadBufferSize():number;
		ConnectReadChannelFinished(f:()=>void):void;
		DisconnectReadChannelFinished():void;
		ReadChannelFinished():void;
		Request():network.QNetworkRequest;
		RequestUrl():core.QUrl;
		ResourceName():string;
		Resume():void;
		SendBinaryMessage(data:core.QByteArray_ITF):number;
		SendTextMessage(message:string):number;
		SetMaskGenerator(maskGenerator:QMaskGenerator_ITF):void;
		SetPauseMode(pauseMode:number):void;
		SetProxy(networkProxy:network.QNetworkProxy_ITF):void;
		SetReadBufferSize(size:number):void;
		SetSslConfiguration(sslConfiguration:network.QSslConfiguration_ITF):void;
		SslConfiguration():network.QSslConfiguration;
		ConnectSslErrors(f:(errors:network.QSslError[])=>void):void;
		DisconnectSslErrors():void;
		SslErrors(errors:network.QSslError[]):void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectTextFrameReceived(f:(frame:string,isLastFrame:boolean)=>void):void;
		DisconnectTextFrameReceived():void;
		TextFrameReceived(frame:string,isLastFrame:boolean):void;
		ConnectTextMessageReceived(f:(message:string)=>void):void;
		DisconnectTextMessageReceived():void;
		TextMessageReceived(message:string):void;
		Version():number;
		ConnectDestroyQWebSocket(f:()=>void):void;
		DisconnectDestroyQWebSocket():void;
		DestroyQWebSocket():void;
		DestroyQWebSocketDefault():void;
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
	function NewQWebSocketFromPointer(ptr:number):QWebSocket;
	function NewQWebSocket2(origi:string,version:number,parent:core.QObject_ITF):QWebSocket;
	interface QWebSocketCorsAuthenticator_ITF {
		QWebSocketCorsAuthenticator_PTR():QWebSocketCorsAuthenticator;
	}

	class QWebSocketCorsAuthenticator {
		___pointer: number;
		QWebSocketCorsAuthenticator_PTR():QWebSocketCorsAuthenticator;
		Pointer():number;
		SetPointer(p:number):void;
		Allowed():boolean;
		Origin():string;
		SetAllowed(allowed:boolean):void;
		Swap(other:QWebSocketCorsAuthenticator_ITF):void;
		DestroyQWebSocketCorsAuthenticator():void;
	}
	function NewQWebSocketCorsAuthenticatorFromPointer(ptr:number):QWebSocketCorsAuthenticator;
	function NewQWebSocketCorsAuthenticator(origi:string):QWebSocketCorsAuthenticator;
	function NewQWebSocketCorsAuthenticator2(other:QWebSocketCorsAuthenticator_ITF):QWebSocketCorsAuthenticator;
	function NewQWebSocketCorsAuthenticator3(other:QWebSocketCorsAuthenticator_ITF):QWebSocketCorsAuthenticator;
	interface QWebSocketProtocol_ITF {
		QWebSocketProtocol_PTR():QWebSocketProtocol;
	}

	class QWebSocketProtocol {
		___pointer: number;
		QWebSocketProtocol_PTR():QWebSocketProtocol;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQWebSocketProtocol():void;
	}
	function NewQWebSocketProtocolFromPointer(ptr:number):QWebSocketProtocol;
	const QWebSocketProtocol__CloseCodeNormal: number;
	const QWebSocketProtocol__CloseCodeGoingAway: number;
	const QWebSocketProtocol__CloseCodeProtocolError: number;
	const QWebSocketProtocol__CloseCodeDatatypeNotSupported: number;
	const QWebSocketProtocol__CloseCodeReserved1004: number;
	const QWebSocketProtocol__CloseCodeMissingStatusCode: number;
	const QWebSocketProtocol__CloseCodeAbnormalDisconnection: number;
	const QWebSocketProtocol__CloseCodeWrongDatatype: number;
	const QWebSocketProtocol__CloseCodePolicyViolated: number;
	const QWebSocketProtocol__CloseCodeTooMuchData: number;
	const QWebSocketProtocol__CloseCodeMissingExtension: number;
	const QWebSocketProtocol__CloseCodeBadOperation: number;
	const QWebSocketProtocol__CloseCodeTlsHandshakeFailed: number;
	const QWebSocketProtocol__VersionUnknown: number;
	const QWebSocketProtocol__Version0: number;
	const QWebSocketProtocol__Version4: number;
	const QWebSocketProtocol__Version5: number;
	const QWebSocketProtocol__Version6: number;
	const QWebSocketProtocol__Version7: number;
	const QWebSocketProtocol__Version8: number;
	const QWebSocketProtocol__Version13: number;
	const QWebSocketProtocol__VersionLatest: number;
	interface QWebSocketServer_ITF extends core.QObject_ITF {
		QWebSocketServer_PTR():QWebSocketServer;
	}

	class QWebSocketServer extends core.QObject {
		___pointer: number;
		QWebSocketServer_PTR():QWebSocketServer;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAcceptError(f:(socketError:number)=>void):void;
		DisconnectAcceptError():void;
		AcceptError(socketError:number):void;
		Close():void;
		ConnectClosed(f:()=>void):void;
		DisconnectClosed():void;
		Closed():void;
		Error():number;
		ErrorString():string;
		HandleConnection(socket:network.QTcpSocket_ITF):void;
		HasPendingConnections():boolean;
		IsListening():boolean;
		Listen(address:network.QHostAddress_ITF,port:number):boolean;
		MaxPendingConnections():number;
		ConnectNewConnection(f:()=>void):void;
		DisconnectNewConnection():void;
		NewConnection():void;
		ConnectNextPendingConnection(f:()=>QWebSocket):void;
		DisconnectNextPendingConnection():void;
		NextPendingConnection():QWebSocket;
		NextPendingConnectionDefault():QWebSocket;
		ConnectOriginAuthenticationRequired(f:(authenticator:QWebSocketCorsAuthenticator)=>void):void;
		DisconnectOriginAuthenticationRequired():void;
		OriginAuthenticationRequired(authenticator:QWebSocketCorsAuthenticator_ITF):void;
		PauseAccepting():void;
		ConnectPeerVerifyError(f:(error:network.QSslError)=>void):void;
		DisconnectPeerVerifyError():void;
		PeerVerifyError(error:network.QSslError_ITF):void;
		ConnectPreSharedKeyAuthenticationRequired(f:(authenticator:network.QSslPreSharedKeyAuthenticator)=>void):void;
		DisconnectPreSharedKeyAuthenticationRequired():void;
		PreSharedKeyAuthenticationRequired(authenticator:network.QSslPreSharedKeyAuthenticator_ITF):void;
		Proxy():network.QNetworkProxy;
		ResumeAccepting():void;
		SecureMode():number;
		ServerAddress():network.QHostAddress;
		ConnectServerError(f:(closeCode:number)=>void):void;
		DisconnectServerError():void;
		ServerError(closeCode:number):void;
		ServerName():string;
		ServerPort():number;
		ServerUrl():core.QUrl;
		SetMaxPendingConnections(numConnections:number):void;
		SetProxy(networkProxy:network.QNetworkProxy_ITF):void;
		SetServerName(serverName:string):void;
		SetSslConfiguration(sslConfiguration:network.QSslConfiguration_ITF):void;
		SslConfiguration():network.QSslConfiguration;
		ConnectSslErrors(f:(errors:network.QSslError[])=>void):void;
		DisconnectSslErrors():void;
		SslErrors(errors:network.QSslError[]):void;
		SupportedVersions():number;
		ConnectDestroyQWebSocketServer(f:()=>void):void;
		DisconnectDestroyQWebSocketServer():void;
		DestroyQWebSocketServer():void;
		DestroyQWebSocketServerDefault():void;
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
	function NewQWebSocketServerFromPointer(ptr:number):QWebSocketServer;
	function NewQWebSocketServer2(serverName:string,secureMode:number,parent:core.QObject_ITF):QWebSocketServer;
	const QWebSocketServer__SecureMode: number;
	const QWebSocketServer__NonSecureMode: number;
	interface QtWebSocketsDeclarativeModule_ITF {
		QtWebSocketsDeclarativeModule_PTR():QtWebSocketsDeclarativeModule;
	}

	class QtWebSocketsDeclarativeModule {
		___pointer: number;
		QtWebSocketsDeclarativeModule_PTR():QtWebSocketsDeclarativeModule;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQtWebSocketsDeclarativeModule():void;
	}
	function NewQtWebSocketsDeclarativeModuleFromPointer(ptr:number):QtWebSocketsDeclarativeModule;
}