/// <reference path="core.d.ts" />
declare namespace network {
	interface QAbstractNetworkCache_ITF extends core.QObject_ITF {
		QAbstractNetworkCache_PTR():QAbstractNetworkCache;
	}

	class QAbstractNetworkCache extends core.QObject {
		___pointer: number;
		QAbstractNetworkCache_PTR():QAbstractNetworkCache;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCacheSize(f:()=>number):void;
		DisconnectCacheSize():void;
		CacheSize():number;
		ConnectClear(f:()=>void):void;
		DisconnectClear():void;
		Clear():void;
		ConnectData(f:(url:core.QUrl)=>core.QIODevice):void;
		DisconnectData():void;
		Data(url:core.QUrl_ITF):core.QIODevice;
		ConnectInsert(f:(device:core.QIODevice)=>void):void;
		DisconnectInsert():void;
		Insert(device:core.QIODevice_ITF):void;
		ConnectMetaData(f:(url:core.QUrl)=>QNetworkCacheMetaData):void;
		DisconnectMetaData():void;
		MetaData(url:core.QUrl_ITF):QNetworkCacheMetaData;
		ConnectPrepare(f:(metaData:QNetworkCacheMetaData)=>core.QIODevice):void;
		DisconnectPrepare():void;
		Prepare(metaData:QNetworkCacheMetaData_ITF):core.QIODevice;
		ConnectRemove(f:(url:core.QUrl)=>boolean):void;
		DisconnectRemove():void;
		Remove(url:core.QUrl_ITF):boolean;
		ConnectUpdateMetaData(f:(metaData:QNetworkCacheMetaData)=>void):void;
		DisconnectUpdateMetaData():void;
		UpdateMetaData(metaData:QNetworkCacheMetaData_ITF):void;
		ConnectDestroyQAbstractNetworkCache(f:()=>void):void;
		DisconnectDestroyQAbstractNetworkCache():void;
		DestroyQAbstractNetworkCache():void;
		DestroyQAbstractNetworkCacheDefault():void;
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
	function NewQAbstractNetworkCacheFromPointer(ptr:number):QAbstractNetworkCache;
	function NewQAbstractNetworkCache(parent:core.QObject_ITF):QAbstractNetworkCache;
	interface QAbstractSocket_ITF extends core.QIODevice_ITF {
		QAbstractSocket_PTR():QAbstractSocket;
	}

	class QAbstractSocket extends core.QIODevice {
		___pointer: number;
		QAbstractSocket_PTR():QAbstractSocket;
		Pointer():number;
		SetPointer(p:number):void;
		Abort():void;
		AtEndDefault():boolean;
		Bind(address:QHostAddress_ITF,port:number,mode:number):boolean;
		Bind2(port:number,mode:number):boolean;
		BytesAvailableDefault():number;
		BytesToWriteDefault():number;
		CanReadLineDefault():boolean;
		CloseDefault():void;
		ConnectConnectToHost(f:(hostName:string,port:number,openMode:number,protocol:number)=>void):void;
		DisconnectConnectToHost():void;
		ConnectToHost(hostName:string,port:number,openMode:number,protocol:number):void;
		ConnectToHostDefault(hostName:string,port:number,openMode:number,protocol:number):void;
		ConnectConnectToHost2(f:(address:QHostAddress,port:number,openMode:number)=>void):void;
		DisconnectConnectToHost2():void;
		ConnectToHost2(address:QHostAddress_ITF,port:number,openMode:number):void;
		ConnectToHost2Default(address:QHostAddress_ITF,port:number,openMode:number):void;
		ConnectConnected(f:()=>void):void;
		DisconnectConnected():void;
		Connected():void;
		ConnectDisconnectFromHost(f:()=>void):void;
		DisconnectDisconnectFromHost():void;
		DisconnectFromHost():void;
		DisconnectFromHostDefault():void;
		ConnectDisconnected(f:()=>void):void;
		DisconnectDisconnected():void;
		Disconnected():void;
		Error():number;
		ConnectError2(f:(socketError:number)=>void):void;
		DisconnectError2():void;
		Error2(socketError:number):void;
		Flush():boolean;
		ConnectHostFound(f:()=>void):void;
		DisconnectHostFound():void;
		HostFound():void;
		IsSequentialDefault():boolean;
		IsValid():boolean;
		LocalAddress():QHostAddress;
		LocalPort():number;
		PauseMode():number;
		PeerAddress():QHostAddress;
		PeerName():string;
		PeerPort():number;
		ProtocolTag():string;
		Proxy():QNetworkProxy;
		ConnectProxyAuthenticationRequired(f:(proxy:QNetworkProxy,authenticator:QAuthenticator)=>void):void;
		DisconnectProxyAuthenticationRequired():void;
		ProxyAuthenticationRequired(proxy:QNetworkProxy_ITF,authenticator:QAuthenticator_ITF):void;
		ReadBufferSize():number;
		ConnectReadData(f:(data:string,maxSize:number)=>number):void;
		DisconnectReadData():void;
		ReadData(data:string,maxSize:number):number;
		ReadDataDefault(data:string,maxSize:number):number;
		ReadLineDataDefault(data:string,maxlen:number):number;
		ConnectResume(f:()=>void):void;
		DisconnectResume():void;
		Resume():void;
		ResumeDefault():void;
		SetLocalAddress(address:QHostAddress_ITF):void;
		SetLocalPort(port:number):void;
		SetPauseMode(pauseMode:number):void;
		SetPeerAddress(address:QHostAddress_ITF):void;
		SetPeerName(name:string):void;
		SetPeerPort(port:number):void;
		SetProtocolTag(tag:string):void;
		SetProxy(networkProxy:QNetworkProxy_ITF):void;
		ConnectSetReadBufferSize(f:(size:number)=>void):void;
		DisconnectSetReadBufferSize():void;
		SetReadBufferSize(size:number):void;
		SetReadBufferSizeDefault(size:number):void;
		SetSocketError(socketError:number):void;
		ConnectSetSocketOption(f:(option:number,value:core.QVariant)=>void):void;
		DisconnectSetSocketOption():void;
		SetSocketOption(option:number,value:core.QVariant_ITF):void;
		SetSocketOptionDefault(option:number,value:core.QVariant_ITF):void;
		SetSocketState(state:number):void;
		ConnectSocketOption(f:(option:number)=>core.QVariant):void;
		DisconnectSocketOption():void;
		SocketOption(option:number):core.QVariant;
		SocketOptionDefault(option:number):core.QVariant;
		SocketType():number;
		State():number;
		ConnectStateChanged(f:(socketState:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(socketState:number):void;
		WaitForBytesWrittenDefault(msecs:number):boolean;
		ConnectWaitForConnected(f:(msecs:number)=>boolean):void;
		DisconnectWaitForConnected():void;
		WaitForConnected(msecs:number):boolean;
		WaitForConnectedDefault(msecs:number):boolean;
		ConnectWaitForDisconnected(f:(msecs:number)=>boolean):void;
		DisconnectWaitForDisconnected():void;
		WaitForDisconnected(msecs:number):boolean;
		WaitForDisconnectedDefault(msecs:number):boolean;
		WaitForReadyReadDefault(msecs:number):boolean;
		ConnectWriteData(f:(data:string,size:number)=>number):void;
		DisconnectWriteData():void;
		WriteData(data:string,size:number):number;
		WriteDataDefault(data:string,size:number):number;
		ConnectDestroyQAbstractSocket(f:()=>void):void;
		DisconnectDestroyQAbstractSocket():void;
		DestroyQAbstractSocket():void;
		DestroyQAbstractSocketDefault():void;
		OpenDefault(mode:number):boolean;
		PosDefault():number;
		ResetDefault():boolean;
		SeekDefault(pos:number):boolean;
		SizeDefault():number;
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
	function NewQAbstractSocketFromPointer(ptr:number):QAbstractSocket;
	function NewQAbstractSocket(socketType:number,parent:core.QObject_ITF):QAbstractSocket;
	const QAbstractSocket__TcpSocket: number;
	const QAbstractSocket__UdpSocket: number;
	const QAbstractSocket__SctpSocket: number;
	const QAbstractSocket__UnknownSocketType: number;
	const QAbstractSocket__IPv4Protocol: number;
	const QAbstractSocket__IPv6Protocol: number;
	const QAbstractSocket__AnyIPProtocol: number;
	const QAbstractSocket__UnknownNetworkLayerProtocol: number;
	const QAbstractSocket__ConnectionRefusedError: number;
	const QAbstractSocket__RemoteHostClosedError: number;
	const QAbstractSocket__HostNotFoundError: number;
	const QAbstractSocket__SocketAccessError: number;
	const QAbstractSocket__SocketResourceError: number;
	const QAbstractSocket__SocketTimeoutError: number;
	const QAbstractSocket__DatagramTooLargeError: number;
	const QAbstractSocket__NetworkError: number;
	const QAbstractSocket__AddressInUseError: number;
	const QAbstractSocket__SocketAddressNotAvailableError: number;
	const QAbstractSocket__UnsupportedSocketOperationError: number;
	const QAbstractSocket__UnfinishedSocketOperationError: number;
	const QAbstractSocket__ProxyAuthenticationRequiredError: number;
	const QAbstractSocket__SslHandshakeFailedError: number;
	const QAbstractSocket__ProxyConnectionRefusedError: number;
	const QAbstractSocket__ProxyConnectionClosedError: number;
	const QAbstractSocket__ProxyConnectionTimeoutError: number;
	const QAbstractSocket__ProxyNotFoundError: number;
	const QAbstractSocket__ProxyProtocolError: number;
	const QAbstractSocket__OperationError: number;
	const QAbstractSocket__SslInternalError: number;
	const QAbstractSocket__SslInvalidUserDataError: number;
	const QAbstractSocket__TemporaryError: number;
	const QAbstractSocket__UnknownSocketError: number;
	const QAbstractSocket__UnconnectedState: number;
	const QAbstractSocket__HostLookupState: number;
	const QAbstractSocket__ConnectingState: number;
	const QAbstractSocket__ConnectedState: number;
	const QAbstractSocket__BoundState: number;
	const QAbstractSocket__ListeningState: number;
	const QAbstractSocket__ClosingState: number;
	const QAbstractSocket__LowDelayOption: number;
	const QAbstractSocket__KeepAliveOption: number;
	const QAbstractSocket__MulticastTtlOption: number;
	const QAbstractSocket__MulticastLoopbackOption: number;
	const QAbstractSocket__TypeOfServiceOption: number;
	const QAbstractSocket__SendBufferSizeSocketOption: number;
	const QAbstractSocket__ReceiveBufferSizeSocketOption: number;
	const QAbstractSocket__PathMtuSocketOption: number;
	const QAbstractSocket__DefaultForPlatform: number;
	const QAbstractSocket__ShareAddress: number;
	const QAbstractSocket__DontShareAddress: number;
	const QAbstractSocket__ReuseAddressHint: number;
	const QAbstractSocket__PauseNever: number;
	const QAbstractSocket__PauseOnSslErrors: number;
	interface QAuthenticator_ITF {
		QAuthenticator_PTR():QAuthenticator;
	}

	class QAuthenticator {
		___pointer: number;
		QAuthenticator_PTR():QAuthenticator;
		Pointer():number;
		SetPointer(p:number):void;
		IsNull():boolean;
		Option(opt:string):core.QVariant;
		Options():Map<string,core.QVariant>;
		Password():string;
		Realm():string;
		SetOption(opt:string,value:core.QVariant_ITF):void;
		SetPassword(password:string):void;
		SetUser(user:string):void;
		User():string;
		DestroyQAuthenticator():void;
	}
	function NewQAuthenticatorFromPointer(ptr:number):QAuthenticator;
	function NewQAuthenticator():QAuthenticator;
	function NewQAuthenticator2(other:QAuthenticator_ITF):QAuthenticator;
	interface QDnsDomainNameRecord_ITF {
		QDnsDomainNameRecord_PTR():QDnsDomainNameRecord;
	}

	class QDnsDomainNameRecord {
		___pointer: number;
		QDnsDomainNameRecord_PTR():QDnsDomainNameRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Name():string;
		Swap(other:QDnsDomainNameRecord_ITF):void;
		TimeToLive():number;
		Value():string;
		DestroyQDnsDomainNameRecord():void;
	}
	function NewQDnsDomainNameRecordFromPointer(ptr:number):QDnsDomainNameRecord;
	function NewQDnsDomainNameRecord():QDnsDomainNameRecord;
	function NewQDnsDomainNameRecord2(other:QDnsDomainNameRecord_ITF):QDnsDomainNameRecord;
	interface QDnsHostAddressRecord_ITF {
		QDnsHostAddressRecord_PTR():QDnsHostAddressRecord;
	}

	class QDnsHostAddressRecord {
		___pointer: number;
		QDnsHostAddressRecord_PTR():QDnsHostAddressRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Name():string;
		Swap(other:QDnsHostAddressRecord_ITF):void;
		TimeToLive():number;
		Value():QHostAddress;
		DestroyQDnsHostAddressRecord():void;
	}
	function NewQDnsHostAddressRecordFromPointer(ptr:number):QDnsHostAddressRecord;
	function NewQDnsHostAddressRecord():QDnsHostAddressRecord;
	function NewQDnsHostAddressRecord2(other:QDnsHostAddressRecord_ITF):QDnsHostAddressRecord;
	interface QDnsLookup_ITF extends core.QObject_ITF {
		QDnsLookup_PTR():QDnsLookup;
	}

	class QDnsLookup extends core.QObject {
		___pointer: number;
		QDnsLookup_PTR():QDnsLookup;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAbort(f:()=>void):void;
		DisconnectAbort():void;
		Abort():void;
		AbortDefault():void;
		CanonicalNameRecords():QDnsDomainNameRecord[];
		Error():number;
		ErrorString():string;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		HostAddressRecords():QDnsHostAddressRecord[];
		IsFinished():boolean;
		ConnectLookup(f:()=>void):void;
		DisconnectLookup():void;
		Lookup():void;
		LookupDefault():void;
		MailExchangeRecords():QDnsMailExchangeRecord[];
		Name():string;
		ConnectNameChanged(f:(name:string)=>void):void;
		DisconnectNameChanged():void;
		NameChanged(name:string):void;
		NameServerRecords():QDnsDomainNameRecord[];
		Nameserver():QHostAddress;
		ConnectNameserverChanged(f:(nameserver:QHostAddress)=>void):void;
		DisconnectNameserverChanged():void;
		NameserverChanged(nameserver:QHostAddress_ITF):void;
		PointerRecords():QDnsDomainNameRecord[];
		ServiceRecords():QDnsServiceRecord[];
		SetName(name:string):void;
		SetNameserver(nameserver:QHostAddress_ITF):void;
		SetType(vqd:number):void;
		TextRecords():QDnsTextRecord[];
		Type():number;
		ConnectTypeChanged(f:(ty:number)=>void):void;
		DisconnectTypeChanged():void;
		TypeChanged(ty:number):void;
		ConnectDestroyQDnsLookup(f:()=>void):void;
		DisconnectDestroyQDnsLookup():void;
		DestroyQDnsLookup():void;
		DestroyQDnsLookupDefault():void;
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
	function NewQDnsLookupFromPointer(ptr:number):QDnsLookup;
	function NewQDnsLookup(parent:core.QObject_ITF):QDnsLookup;
	function NewQDnsLookup2(ty:number,name:string,parent:core.QObject_ITF):QDnsLookup;
	function NewQDnsLookup3(ty:number,name:string,nameserver:QHostAddress_ITF,parent:core.QObject_ITF):QDnsLookup;
	const QDnsLookup__NoError: number;
	const QDnsLookup__ResolverError: number;
	const QDnsLookup__OperationCancelledError: number;
	const QDnsLookup__InvalidRequestError: number;
	const QDnsLookup__InvalidReplyError: number;
	const QDnsLookup__ServerFailureError: number;
	const QDnsLookup__ServerRefusedError: number;
	const QDnsLookup__NotFoundError: number;
	const QDnsLookup__A: number;
	const QDnsLookup__AAAA: number;
	const QDnsLookup__ANY: number;
	const QDnsLookup__CNAME: number;
	const QDnsLookup__MX: number;
	const QDnsLookup__NS: number;
	const QDnsLookup__PTR: number;
	const QDnsLookup__SRV: number;
	const QDnsLookup__TXT: number;
	interface QDnsMailExchangeRecord_ITF {
		QDnsMailExchangeRecord_PTR():QDnsMailExchangeRecord;
	}

	class QDnsMailExchangeRecord {
		___pointer: number;
		QDnsMailExchangeRecord_PTR():QDnsMailExchangeRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Exchange():string;
		Name():string;
		Preference():number;
		Swap(other:QDnsMailExchangeRecord_ITF):void;
		TimeToLive():number;
		DestroyQDnsMailExchangeRecord():void;
	}
	function NewQDnsMailExchangeRecordFromPointer(ptr:number):QDnsMailExchangeRecord;
	function NewQDnsMailExchangeRecord():QDnsMailExchangeRecord;
	function NewQDnsMailExchangeRecord2(other:QDnsMailExchangeRecord_ITF):QDnsMailExchangeRecord;
	interface QDnsServiceRecord_ITF {
		QDnsServiceRecord_PTR():QDnsServiceRecord;
	}

	class QDnsServiceRecord {
		___pointer: number;
		QDnsServiceRecord_PTR():QDnsServiceRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Name():string;
		Port():number;
		Priority():number;
		Swap(other:QDnsServiceRecord_ITF):void;
		Target():string;
		TimeToLive():number;
		Weight():number;
		DestroyQDnsServiceRecord():void;
	}
	function NewQDnsServiceRecordFromPointer(ptr:number):QDnsServiceRecord;
	function NewQDnsServiceRecord():QDnsServiceRecord;
	function NewQDnsServiceRecord2(other:QDnsServiceRecord_ITF):QDnsServiceRecord;
	interface QDnsTextRecord_ITF {
		QDnsTextRecord_PTR():QDnsTextRecord;
	}

	class QDnsTextRecord {
		___pointer: number;
		QDnsTextRecord_PTR():QDnsTextRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Name():string;
		Swap(other:QDnsTextRecord_ITF):void;
		TimeToLive():number;
		Values():core.QByteArray[];
		DestroyQDnsTextRecord():void;
	}
	function NewQDnsTextRecordFromPointer(ptr:number):QDnsTextRecord;
	function NewQDnsTextRecord():QDnsTextRecord;
	function NewQDnsTextRecord2(other:QDnsTextRecord_ITF):QDnsTextRecord;
	const QDtls__NoError: number;
	const QDtls__InvalidInputParameters: number;
	const QDtls__InvalidOperation: number;
	const QDtls__UnderlyingSocketError: number;
	const QDtls__RemoteClosedConnectionError: number;
	const QDtls__PeerVerificationError: number;
	const QDtls__TlsInitializationError: number;
	const QDtls__TlsFatalError: number;
	const QDtls__TlsNonFatalError: number;
	const QDtls__HandshakeNotStarted: number;
	const QDtls__HandshakeInProgress: number;
	const QDtls__PeerVerificationFailed: number;
	const QDtls__HandshakeComplete: number;
	interface QHostAddress_ITF {
		QHostAddress_PTR():QHostAddress;
	}

	class QHostAddress {
		___pointer: number;
		QHostAddress_PTR():QHostAddress;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():void;
		IsBroadcast():boolean;
		IsEqual(other:QHostAddress_ITF,mode:number):boolean;
		IsGlobal():boolean;
		IsInSubnet(subnet:QHostAddress_ITF,netmask:number):boolean;
		IsLinkLocal():boolean;
		IsLoopback():boolean;
		IsMulticast():boolean;
		IsNull():boolean;
		IsSiteLocal():boolean;
		IsUniqueLocalUnicast():boolean;
		Protocol():number;
		ScopeId():string;
		SetAddress(ip4Addr:number):void;
		SetAddress2(ip6Addr:string):void;
		SetAddress3(ip6Addr:string):void;
		SetAddress6(address:string):boolean;
		SetAddress7(address:number):void;
		SetScopeId(id:string):void;
		Swap(other:QHostAddress_ITF):void;
		ToIPv4Address():number;
		ToIPv4Address2(ok:boolean):number;
		ToString():string;
		DestroyQHostAddress():void;
	}
	function NewQHostAddressFromPointer(ptr:number):QHostAddress;
	function NewQHostAddress():QHostAddress;
	function NewQHostAddress2(ip4Addr:number):QHostAddress;
	function NewQHostAddress3(ip6Addr:string):QHostAddress;
	function NewQHostAddress4(ip6Addr:string):QHostAddress;
	function NewQHostAddress7(address:string):QHostAddress;
	function NewQHostAddress8(address:QHostAddress_ITF):QHostAddress;
	function NewQHostAddress9(address:number):QHostAddress;
	const QHostAddress__Null: number;
	const QHostAddress__Broadcast: number;
	const QHostAddress__LocalHost: number;
	const QHostAddress__LocalHostIPv6: number;
	const QHostAddress__Any: number;
	const QHostAddress__AnyIPv6: number;
	const QHostAddress__AnyIPv4: number;
	const QHostAddress__ConvertV4MappedToIPv4: number;
	const QHostAddress__ConvertV4CompatToIPv4: number;
	const QHostAddress__ConvertUnspecifiedAddress: number;
	const QHostAddress__ConvertLocalHost: number;
	const QHostAddress__TolerantConversion: number;
	const QHostAddress__StrictConversion: number;
	interface QHostInfo_ITF {
		QHostInfo_PTR():QHostInfo;
	}

	class QHostInfo {
		___pointer: number;
		QHostInfo_PTR():QHostInfo;
		Pointer():number;
		SetPointer(p:number):void;
		AbortHostLookup(id:number):void;
		Addresses():QHostAddress[];
		Error():number;
		ErrorString():string;
		FromName(name:string):QHostInfo;
		HostName():string;
		LocalDomainName():string;
		LocalHostName():string;
		LookupHost(name:string,receiver:core.QObject_ITF,member:string):number;
		LookupId():number;
		SetAddresses(addresses:QHostAddress[]):void;
		SetError(error:number):void;
		SetErrorString(str:string):void;
		SetHostName(hostName:string):void;
		SetLookupId(id:number):void;
		Swap(other:QHostInfo_ITF):void;
		DestroyQHostInfo():void;
	}
	function NewQHostInfoFromPointer(ptr:number):QHostInfo;
	function NewQHostInfo(id:number):QHostInfo;
	function NewQHostInfo2(other:QHostInfo_ITF):QHostInfo;
	function QHostInfo_AbortHostLookup(id:number):void;
	function QHostInfo_FromName(name:string):QHostInfo;
	function QHostInfo_LocalDomainName():string;
	function QHostInfo_LocalHostName():string;
	function QHostInfo_LookupHost(name:string,receiver:core.QObject_ITF,member:string):number;
	const QHostInfo__NoError: number;
	const QHostInfo__HostNotFound: number;
	const QHostInfo__UnknownError: number;
	interface QHstsPolicy_ITF {
		QHstsPolicy_PTR():QHstsPolicy;
	}

	class QHstsPolicy {
		___pointer: number;
		QHstsPolicy_PTR():QHstsPolicy;
		Pointer():number;
		SetPointer(p:number):void;
		Expiry():core.QDateTime;
		Host(options:number):string;
		IncludesSubDomains():boolean;
		IsExpired():boolean;
		SetExpiry(expiry:core.QDateTime_ITF):void;
		SetHost(host:string,mode:number):void;
		SetIncludesSubDomains(include:boolean):void;
		Swap(other:QHstsPolicy_ITF):void;
		DestroyQHstsPolicy():void;
	}
	function NewQHstsPolicyFromPointer(ptr:number):QHstsPolicy;
	function NewQHstsPolicy():QHstsPolicy;
	function NewQHstsPolicy2(expiry:core.QDateTime_ITF,flags:number,host:string,mode:number):QHstsPolicy;
	function NewQHstsPolicy3(other:QHstsPolicy_ITF):QHstsPolicy;
	const QHstsPolicy__IncludeSubDomains: number;
	interface QHttpMultiPart_ITF extends core.QObject_ITF {
		QHttpMultiPart_PTR():QHttpMultiPart;
	}

	class QHttpMultiPart extends core.QObject {
		___pointer: number;
		QHttpMultiPart_PTR():QHttpMultiPart;
		Pointer():number;
		SetPointer(p:number):void;
		Append(httpPart:QHttpPart_ITF):void;
		Boundary():core.QByteArray;
		SetBoundary(boundary:core.QByteArray_ITF):void;
		SetContentType(contentType:number):void;
		ConnectDestroyQHttpMultiPart(f:()=>void):void;
		DisconnectDestroyQHttpMultiPart():void;
		DestroyQHttpMultiPart():void;
		DestroyQHttpMultiPartDefault():void;
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
	function NewQHttpMultiPartFromPointer(ptr:number):QHttpMultiPart;
	function NewQHttpMultiPart(parent:core.QObject_ITF):QHttpMultiPart;
	function NewQHttpMultiPart2(contentType:number,parent:core.QObject_ITF):QHttpMultiPart;
	const QHttpMultiPart__MixedType: number;
	const QHttpMultiPart__RelatedType: number;
	const QHttpMultiPart__FormDataType: number;
	const QHttpMultiPart__AlternativeType: number;
	interface QHttpPart_ITF {
		QHttpPart_PTR():QHttpPart;
	}

	class QHttpPart {
		___pointer: number;
		QHttpPart_PTR():QHttpPart;
		Pointer():number;
		SetPointer(p:number):void;
		SetBody(body:core.QByteArray_ITF):void;
		SetBodyDevice(device:core.QIODevice_ITF):void;
		SetHeader(header:number,value:core.QVariant_ITF):void;
		SetRawHeader(headerName:core.QByteArray_ITF,headerValue:core.QByteArray_ITF):void;
		Swap(other:QHttpPart_ITF):void;
		DestroyQHttpPart():void;
	}
	function NewQHttpPartFromPointer(ptr:number):QHttpPart;
	function NewQHttpPart():QHttpPart;
	function NewQHttpPart2(other:QHttpPart_ITF):QHttpPart;
	interface QIPv6Address_ITF {
		QIPv6Address_PTR():QIPv6Address;
	}

	class QIPv6Address {
		___pointer: number;
		QIPv6Address_PTR():QIPv6Address;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQIPv6Address():void;
	}
	function NewQIPv6AddressFromPointer(ptr:number):QIPv6Address;
	interface QLocalServer_ITF extends core.QObject_ITF {
		QLocalServer_PTR():QLocalServer;
	}

	class QLocalServer extends core.QObject {
		___pointer: number;
		QLocalServer_PTR():QLocalServer;
		Pointer():number;
		SetPointer(p:number):void;
		Close():void;
		ErrorString():string;
		FullServerName():string;
		ConnectHasPendingConnections(f:()=>boolean):void;
		DisconnectHasPendingConnections():void;
		HasPendingConnections():boolean;
		HasPendingConnectionsDefault():boolean;
		ConnectIncomingConnection(f:(socketDescriptor:number)=>void):void;
		DisconnectIncomingConnection():void;
		IncomingConnection(socketDescriptor:number):void;
		IncomingConnectionDefault(socketDescriptor:number):void;
		IsListening():boolean;
		Listen(name:string):boolean;
		MaxPendingConnections():number;
		ConnectNewConnection(f:()=>void):void;
		DisconnectNewConnection():void;
		NewConnection():void;
		ConnectNextPendingConnection(f:()=>QLocalSocket):void;
		DisconnectNextPendingConnection():void;
		NextPendingConnection():QLocalSocket;
		NextPendingConnectionDefault():QLocalSocket;
		RemoveServer(name:string):boolean;
		ServerError():number;
		ServerName():string;
		SetMaxPendingConnections(numConnections:number):void;
		SetSocketOptions(options:number):void;
		SocketOptions():number;
		WaitForNewConnection(msec:number,timedOut:boolean):boolean;
		ConnectDestroyQLocalServer(f:()=>void):void;
		DisconnectDestroyQLocalServer():void;
		DestroyQLocalServer():void;
		DestroyQLocalServerDefault():void;
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
	function NewQLocalServerFromPointer(ptr:number):QLocalServer;
	function NewQLocalServer(parent:core.QObject_ITF):QLocalServer;
	function QLocalServer_RemoveServer(name:string):boolean;
	const QLocalServer__NoOptions: number;
	const QLocalServer__UserAccessOption: number;
	const QLocalServer__GroupAccessOption: number;
	const QLocalServer__OtherAccessOption: number;
	const QLocalServer__WorldAccessOption: number;
	interface QLocalSocket_ITF extends core.QIODevice_ITF {
		QLocalSocket_PTR():QLocalSocket;
	}

	class QLocalSocket extends core.QIODevice {
		___pointer: number;
		QLocalSocket_PTR():QLocalSocket;
		Pointer():number;
		SetPointer(p:number):void;
		Abort():void;
		BytesAvailableDefault():number;
		BytesToWriteDefault():number;
		CanReadLineDefault():boolean;
		CloseDefault():void;
		ConnectToServer(openMode:number):void;
		ConnectToServer2(name:string,openMode:number):void;
		ConnectConnected(f:()=>void):void;
		DisconnectConnected():void;
		Connected():void;
		DisconnectFromServer():void;
		ConnectDisconnected(f:()=>void):void;
		DisconnectDisconnected():void;
		Disconnected():void;
		Error():number;
		ConnectError2(f:(socketError:number)=>void):void;
		DisconnectError2():void;
		Error2(socketError:number):void;
		Flush():boolean;
		FullServerName():string;
		IsSequentialDefault():boolean;
		IsValid():boolean;
		OpenDefault(openMode:number):boolean;
		ReadBufferSize():number;
		ConnectReadData(f:(data:string,c:number)=>number):void;
		DisconnectReadData():void;
		ReadData(data:string,c:number):number;
		ReadDataDefault(data:string,c:number):number;
		ServerName():string;
		SetReadBufferSize(size:number):void;
		SetServerName(name:string):void;
		State():number;
		ConnectStateChanged(f:(socketState:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(socketState:number):void;
		WaitForBytesWrittenDefault(msecs:number):boolean;
		WaitForConnected(msecs:number):boolean;
		WaitForDisconnected(msecs:number):boolean;
		WaitForReadyReadDefault(msecs:number):boolean;
		ConnectWriteData(f:(data:string,c:number)=>number):void;
		DisconnectWriteData():void;
		WriteData(data:string,c:number):number;
		WriteDataDefault(data:string,c:number):number;
		ConnectDestroyQLocalSocket(f:()=>void):void;
		DisconnectDestroyQLocalSocket():void;
		DestroyQLocalSocket():void;
		DestroyQLocalSocketDefault():void;
		AtEndDefault():boolean;
		PosDefault():number;
		ReadLineDataDefault(data:string,maxSize:number):number;
		ResetDefault():boolean;
		SeekDefault(pos:number):boolean;
		SizeDefault():number;
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
	function NewQLocalSocketFromPointer(ptr:number):QLocalSocket;
	function NewQLocalSocket(parent:core.QObject_ITF):QLocalSocket;
	const QLocalSocket__ConnectionRefusedError: number;
	const QLocalSocket__PeerClosedError: number;
	const QLocalSocket__ServerNotFoundError: number;
	const QLocalSocket__SocketAccessError: number;
	const QLocalSocket__SocketResourceError: number;
	const QLocalSocket__SocketTimeoutError: number;
	const QLocalSocket__DatagramTooLargeError: number;
	const QLocalSocket__ConnectionError: number;
	const QLocalSocket__UnsupportedSocketOperationError: number;
	const QLocalSocket__UnknownSocketError: number;
	const QLocalSocket__OperationError: number;
	const QLocalSocket__UnconnectedState: number;
	const QLocalSocket__ConnectingState: number;
	const QLocalSocket__ConnectedState: number;
	const QLocalSocket__ClosingState: number;
	interface QNetworkAccessManager_ITF extends core.QObject_ITF {
		QNetworkAccessManager_PTR():QNetworkAccessManager;
	}

	class QNetworkAccessManager extends core.QObject {
		___pointer: number;
		QNetworkAccessManager_PTR():QNetworkAccessManager;
		Pointer():number;
		SetPointer(p:number):void;
		ActiveConfiguration():QNetworkConfiguration;
		AddStrictTransportSecurityHosts(knownHosts:QHstsPolicy[]):void;
		ConnectAuthenticationRequired(f:(reply:QNetworkReply,authenticator:QAuthenticator)=>void):void;
		DisconnectAuthenticationRequired():void;
		AuthenticationRequired(reply:QNetworkReply_ITF,authenticator:QAuthenticator_ITF):void;
		Cache():QAbstractNetworkCache;
		ClearAccessCache():void;
		ClearConnectionCache():void;
		Configuration():QNetworkConfiguration;
		ConnectToHost(hostName:string,port:number):void;
		ConnectToHostEncrypted(hostName:string,port:number,sslConfiguration:QSslConfiguration_ITF):void;
		ConnectToHostEncrypted2(hostName:string,port:number,sslConfiguration:QSslConfiguration_ITF,peerName:string):void;
		CookieJar():QNetworkCookieJar;
		ConnectCreateRequest(f:(op:number,originalReq:QNetworkRequest,outgoingData:core.QIODevice)=>QNetworkReply):void;
		DisconnectCreateRequest():void;
		CreateRequest(op:number,originalReq:QNetworkRequest_ITF,outgoingData:core.QIODevice_ITF):QNetworkReply;
		CreateRequestDefault(op:number,originalReq:QNetworkRequest_ITF,outgoingData:core.QIODevice_ITF):QNetworkReply;
		DeleteResource(request:QNetworkRequest_ITF):QNetworkReply;
		EnableStrictTransportSecurityStore(enabled:boolean,storeDir:string):void;
		ConnectEncrypted(f:(reply:QNetworkReply)=>void):void;
		DisconnectEncrypted():void;
		Encrypted(reply:QNetworkReply_ITF):void;
		ConnectFinished(f:(reply:QNetworkReply)=>void):void;
		DisconnectFinished():void;
		Finished(reply:QNetworkReply_ITF):void;
		Get(request:QNetworkRequest_ITF):QNetworkReply;
		Head(request:QNetworkRequest_ITF):QNetworkReply;
		IsStrictTransportSecurityEnabled():boolean;
		IsStrictTransportSecurityStoreEnabled():boolean;
		NetworkAccessible():number;
		ConnectNetworkAccessibleChanged(f:(accessible:number)=>void):void;
		DisconnectNetworkAccessibleChanged():void;
		NetworkAccessibleChanged(accessible:number):void;
		Post(request:QNetworkRequest_ITF,data:core.QIODevice_ITF):QNetworkReply;
		Post2(request:QNetworkRequest_ITF,data:core.QByteArray_ITF):QNetworkReply;
		Post3(request:QNetworkRequest_ITF,multiPart:QHttpMultiPart_ITF):QNetworkReply;
		ConnectPreSharedKeyAuthenticationRequired(f:(reply:QNetworkReply,authenticator:QSslPreSharedKeyAuthenticator)=>void):void;
		DisconnectPreSharedKeyAuthenticationRequired():void;
		PreSharedKeyAuthenticationRequired(reply:QNetworkReply_ITF,authenticator:QSslPreSharedKeyAuthenticator_ITF):void;
		Proxy():QNetworkProxy;
		ConnectProxyAuthenticationRequired(f:(proxy:QNetworkProxy,authenticator:QAuthenticator)=>void):void;
		DisconnectProxyAuthenticationRequired():void;
		ProxyAuthenticationRequired(proxy:QNetworkProxy_ITF,authenticator:QAuthenticator_ITF):void;
		ProxyFactory():QNetworkProxyFactory;
		Put(request:QNetworkRequest_ITF,data:core.QIODevice_ITF):QNetworkReply;
		Put2(request:QNetworkRequest_ITF,data:core.QByteArray_ITF):QNetworkReply;
		Put3(request:QNetworkRequest_ITF,multiPart:QHttpMultiPart_ITF):QNetworkReply;
		RedirectPolicy():number;
		SendCustomRequest(request:QNetworkRequest_ITF,verb:core.QByteArray_ITF,data:core.QIODevice_ITF):QNetworkReply;
		SendCustomRequest2(request:QNetworkRequest_ITF,verb:core.QByteArray_ITF,data:core.QByteArray_ITF):QNetworkReply;
		SendCustomRequest3(request:QNetworkRequest_ITF,verb:core.QByteArray_ITF,multiPart:QHttpMultiPart_ITF):QNetworkReply;
		SetCache(cache:QAbstractNetworkCache_ITF):void;
		SetConfiguration(config:QNetworkConfiguration_ITF):void;
		SetCookieJar(cookieJar:QNetworkCookieJar_ITF):void;
		SetNetworkAccessible(accessible:number):void;
		SetProxy(proxy:QNetworkProxy_ITF):void;
		SetProxyFactory(factory:QNetworkProxyFactory_ITF):void;
		SetRedirectPolicy(policy:number):void;
		SetStrictTransportSecurityEnabled(enabled:boolean):void;
		ConnectSslErrors(f:(reply:QNetworkReply,errors:QSslError[])=>void):void;
		DisconnectSslErrors():void;
		SslErrors(reply:QNetworkReply_ITF,errors:QSslError[]):void;
		StrictTransportSecurityHosts():QHstsPolicy[];
		SupportedSchemes():string[];
		ConnectSupportedSchemesImplementation(f:()=>string[]):void;
		DisconnectSupportedSchemesImplementation():void;
		SupportedSchemesImplementation():string[];
		SupportedSchemesImplementationDefault():string[];
		ConnectDestroyQNetworkAccessManager(f:()=>void):void;
		DisconnectDestroyQNetworkAccessManager():void;
		DestroyQNetworkAccessManager():void;
		DestroyQNetworkAccessManagerDefault():void;
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
	function NewQNetworkAccessManagerFromPointer(ptr:number):QNetworkAccessManager;
	function NewQNetworkAccessManager(parent:core.QObject_ITF):QNetworkAccessManager;
	const QNetworkAccessManager__HeadOperation: number;
	const QNetworkAccessManager__GetOperation: number;
	const QNetworkAccessManager__PutOperation: number;
	const QNetworkAccessManager__PostOperation: number;
	const QNetworkAccessManager__DeleteOperation: number;
	const QNetworkAccessManager__CustomOperation: number;
	const QNetworkAccessManager__UnknownOperation: number;
	const QNetworkAccessManager__UnknownAccessibility: number;
	const QNetworkAccessManager__NotAccessible: number;
	const QNetworkAccessManager__Accessible: number;
	interface QNetworkAddressEntry_ITF {
		QNetworkAddressEntry_PTR():QNetworkAddressEntry;
	}

	class QNetworkAddressEntry {
		___pointer: number;
		QNetworkAddressEntry_PTR():QNetworkAddressEntry;
		Pointer():number;
		SetPointer(p:number):void;
		Broadcast():QHostAddress;
		ClearAddressLifetime():void;
		DnsEligibility():number;
		Ip():QHostAddress;
		IsLifetimeKnown():boolean;
		IsPermanent():boolean;
		IsTemporary():boolean;
		Netmask():QHostAddress;
		PrefixLength():number;
		SetAddressLifetime(preferred:core.QDeadlineTimer_ITF,validity:core.QDeadlineTimer_ITF):void;
		SetBroadcast(newBroadcast:QHostAddress_ITF):void;
		SetDnsEligibility(status:number):void;
		SetIp(newIp:QHostAddress_ITF):void;
		SetNetmask(newNetmask:QHostAddress_ITF):void;
		SetPrefixLength(length:number):void;
		Swap(other:QNetworkAddressEntry_ITF):void;
		DestroyQNetworkAddressEntry():void;
	}
	function NewQNetworkAddressEntryFromPointer(ptr:number):QNetworkAddressEntry;
	function NewQNetworkAddressEntry():QNetworkAddressEntry;
	function NewQNetworkAddressEntry2(other:QNetworkAddressEntry_ITF):QNetworkAddressEntry;
	const QNetworkAddressEntry__DnsEligibilityUnknown: number;
	const QNetworkAddressEntry__DnsIneligible: number;
	const QNetworkAddressEntry__DnsEligible: number;
	interface QNetworkCacheMetaData_ITF {
		QNetworkCacheMetaData_PTR():QNetworkCacheMetaData;
	}

	class QNetworkCacheMetaData {
		___pointer: number;
		QNetworkCacheMetaData_PTR():QNetworkCacheMetaData;
		Pointer():number;
		SetPointer(p:number):void;
		ExpirationDate():core.QDateTime;
		IsValid():boolean;
		LastModified():core.QDateTime;
		RawHeaders():RawHeader[];
		SaveToDisk():boolean;
		SetExpirationDate(dateTime:core.QDateTime_ITF):void;
		SetLastModified(dateTime:core.QDateTime_ITF):void;
		SetRawHeaders(list:RawHeader[]):void;
		SetSaveToDisk(allow:boolean):void;
		SetUrl(url:core.QUrl_ITF):void;
		Swap(other:QNetworkCacheMetaData_ITF):void;
		Url():core.QUrl;
		DestroyQNetworkCacheMetaData():void;
	}
	function NewQNetworkCacheMetaDataFromPointer(ptr:number):QNetworkCacheMetaData;
	function NewQNetworkCacheMetaData():QNetworkCacheMetaData;
	function NewQNetworkCacheMetaData2(other:QNetworkCacheMetaData_ITF):QNetworkCacheMetaData;
	interface QNetworkConfiguration_ITF {
		QNetworkConfiguration_PTR():QNetworkConfiguration;
	}

	class QNetworkConfiguration {
		___pointer: number;
		QNetworkConfiguration_PTR():QNetworkConfiguration;
		Pointer():number;
		SetPointer(p:number):void;
		BearerType():number;
		BearerTypeFamily():number;
		BearerTypeName():string;
		Children():QNetworkConfiguration[];
		ConnectTimeout():number;
		Identifier():string;
		IsRoamingAvailable():boolean;
		IsValid():boolean;
		Name():string;
		Purpose():number;
		SetConnectTimeout(timeout:number):boolean;
		State():number;
		Swap(other:QNetworkConfiguration_ITF):void;
		Type():number;
		DestroyQNetworkConfiguration():void;
	}
	function NewQNetworkConfigurationFromPointer(ptr:number):QNetworkConfiguration;
	function NewQNetworkConfiguration():QNetworkConfiguration;
	function NewQNetworkConfiguration2(other:QNetworkConfiguration_ITF):QNetworkConfiguration;
	function NewQNetworkConfigurationManager(parent:core.QObject_ITF):QNetworkConfigurationManager;
	const QNetworkConfiguration__InternetAccessPoint: number;
	const QNetworkConfiguration__ServiceNetwork: number;
	const QNetworkConfiguration__UserChoice: number;
	const QNetworkConfiguration__Invalid: number;
	const QNetworkConfiguration__UnknownPurpose: number;
	const QNetworkConfiguration__PublicPurpose: number;
	const QNetworkConfiguration__PrivatePurpose: number;
	const QNetworkConfiguration__ServiceSpecificPurpose: number;
	const QNetworkConfiguration__Undefined: number;
	const QNetworkConfiguration__Defined: number;
	const QNetworkConfiguration__Discovered: number;
	const QNetworkConfiguration__Active: number;
	const QNetworkConfiguration__BearerUnknown: number;
	const QNetworkConfiguration__BearerEthernet: number;
	const QNetworkConfiguration__BearerWLAN: number;
	const QNetworkConfiguration__Bearer2G: number;
	const QNetworkConfiguration__BearerCDMA2000: number;
	const QNetworkConfiguration__BearerWCDMA: number;
	const QNetworkConfiguration__BearerHSPA: number;
	const QNetworkConfiguration__BearerBluetooth: number;
	const QNetworkConfiguration__BearerWiMAX: number;
	const QNetworkConfiguration__BearerEVDO: number;
	const QNetworkConfiguration__BearerLTE: number;
	const QNetworkConfiguration__Bearer3G: number;
	const QNetworkConfiguration__Bearer4G: number;
	interface QNetworkConfigurationManager_ITF extends core.QObject_ITF {
		QNetworkConfigurationManager_PTR():QNetworkConfigurationManager;
	}

	class QNetworkConfigurationManager extends core.QObject {
		___pointer: number;
		QNetworkConfigurationManager_PTR():QNetworkConfigurationManager;
		Pointer():number;
		SetPointer(p:number):void;
		AllConfigurations(filter:number):QNetworkConfiguration[];
		Capabilities():number;
		ConnectConfigurationAdded(f:(config:QNetworkConfiguration)=>void):void;
		DisconnectConfigurationAdded():void;
		ConfigurationAdded(config:QNetworkConfiguration_ITF):void;
		ConnectConfigurationChanged(f:(config:QNetworkConfiguration)=>void):void;
		DisconnectConfigurationChanged():void;
		ConfigurationChanged(config:QNetworkConfiguration_ITF):void;
		ConfigurationFromIdentifier(identifier:string):QNetworkConfiguration;
		ConnectConfigurationRemoved(f:(config:QNetworkConfiguration)=>void):void;
		DisconnectConfigurationRemoved():void;
		ConfigurationRemoved(config:QNetworkConfiguration_ITF):void;
		DefaultConfiguration():QNetworkConfiguration;
		IsOnline():boolean;
		ConnectOnlineStateChanged(f:(isOnline:boolean)=>void):void;
		DisconnectOnlineStateChanged():void;
		OnlineStateChanged(isOnline:boolean):void;
		ConnectUpdateCompleted(f:()=>void):void;
		DisconnectUpdateCompleted():void;
		UpdateCompleted():void;
		ConnectUpdateConfigurations(f:()=>void):void;
		DisconnectUpdateConfigurations():void;
		UpdateConfigurations():void;
		UpdateConfigurationsDefault():void;
		ConnectDestroyQNetworkConfigurationManager(f:()=>void):void;
		DisconnectDestroyQNetworkConfigurationManager():void;
		DestroyQNetworkConfigurationManager():void;
		DestroyQNetworkConfigurationManagerDefault():void;
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
	function NewQNetworkConfigurationManagerFromPointer(ptr:number):QNetworkConfigurationManager;
	function NewQNetworkConfigurationManager(parent:core.QObject_ITF):QNetworkConfigurationManager;
	const QNetworkConfigurationManager__CanStartAndStopInterfaces: number;
	const QNetworkConfigurationManager__DirectConnectionRouting: number;
	const QNetworkConfigurationManager__SystemSessionSupport: number;
	const QNetworkConfigurationManager__ApplicationLevelRoaming: number;
	const QNetworkConfigurationManager__ForcedRoaming: number;
	const QNetworkConfigurationManager__DataStatistics: number;
	const QNetworkConfigurationManager__NetworkSessionRequired: number;
	interface QNetworkCookie_ITF {
		QNetworkCookie_PTR():QNetworkCookie;
	}

	class QNetworkCookie {
		___pointer: number;
		QNetworkCookie_PTR():QNetworkCookie;
		Pointer():number;
		SetPointer(p:number):void;
		Domain():string;
		ExpirationDate():core.QDateTime;
		HasSameIdentifier(other:QNetworkCookie_ITF):boolean;
		IsHttpOnly():boolean;
		IsSecure():boolean;
		IsSessionCookie():boolean;
		Name():core.QByteArray;
		Normalize(url:core.QUrl_ITF):void;
		ParseCookies(cookieString:core.QByteArray_ITF):QNetworkCookie[];
		Path():string;
		SetDomain(domai:string):void;
		SetExpirationDate(date:core.QDateTime_ITF):void;
		SetHttpOnly(enable:boolean):void;
		SetName(cookieName:core.QByteArray_ITF):void;
		SetPath(path:string):void;
		SetSecure(enable:boolean):void;
		SetValue(value:core.QByteArray_ITF):void;
		Swap(other:QNetworkCookie_ITF):void;
		ToRawForm(form:number):core.QByteArray;
		Value():core.QByteArray;
		DestroyQNetworkCookie():void;
	}
	function NewQNetworkCookieFromPointer(ptr:number):QNetworkCookie;
	function NewQNetworkCookie(name:core.QByteArray_ITF,value:core.QByteArray_ITF):QNetworkCookie;
	function NewQNetworkCookie2(other:QNetworkCookie_ITF):QNetworkCookie;
	function QNetworkCookie_ParseCookies(cookieString:core.QByteArray_ITF):QNetworkCookie[];
	function NewQNetworkCookieJar(parent:core.QObject_ITF):QNetworkCookieJar;
	const QNetworkCookie__NameAndValueOnly: number;
	const QNetworkCookie__Full: number;
	interface QNetworkCookieJar_ITF extends core.QObject_ITF {
		QNetworkCookieJar_PTR():QNetworkCookieJar;
	}

	class QNetworkCookieJar extends core.QObject {
		___pointer: number;
		QNetworkCookieJar_PTR():QNetworkCookieJar;
		Pointer():number;
		SetPointer(p:number):void;
		AllCookies():QNetworkCookie[];
		ConnectCookiesForUrl(f:(url:core.QUrl)=>QNetworkCookie[]):void;
		DisconnectCookiesForUrl():void;
		CookiesForUrl(url:core.QUrl_ITF):QNetworkCookie[];
		CookiesForUrlDefault(url:core.QUrl_ITF):QNetworkCookie[];
		ConnectDeleteCookie(f:(cookie:QNetworkCookie)=>boolean):void;
		DisconnectDeleteCookie():void;
		DeleteCookie(cookie:QNetworkCookie_ITF):boolean;
		DeleteCookieDefault(cookie:QNetworkCookie_ITF):boolean;
		ConnectInsertCookie(f:(cookie:QNetworkCookie)=>boolean):void;
		DisconnectInsertCookie():void;
		InsertCookie(cookie:QNetworkCookie_ITF):boolean;
		InsertCookieDefault(cookie:QNetworkCookie_ITF):boolean;
		SetAllCookies(cookieList:QNetworkCookie[]):void;
		ConnectSetCookiesFromUrl(f:(cookieList:QNetworkCookie[],url:core.QUrl)=>boolean):void;
		DisconnectSetCookiesFromUrl():void;
		SetCookiesFromUrl(cookieList:QNetworkCookie[],url:core.QUrl_ITF):boolean;
		SetCookiesFromUrlDefault(cookieList:QNetworkCookie[],url:core.QUrl_ITF):boolean;
		ConnectUpdateCookie(f:(cookie:QNetworkCookie)=>boolean):void;
		DisconnectUpdateCookie():void;
		UpdateCookie(cookie:QNetworkCookie_ITF):boolean;
		UpdateCookieDefault(cookie:QNetworkCookie_ITF):boolean;
		ConnectValidateCookie(f:(cookie:QNetworkCookie,url:core.QUrl)=>boolean):void;
		DisconnectValidateCookie():void;
		ValidateCookie(cookie:QNetworkCookie_ITF,url:core.QUrl_ITF):boolean;
		ValidateCookieDefault(cookie:QNetworkCookie_ITF,url:core.QUrl_ITF):boolean;
		ConnectDestroyQNetworkCookieJar(f:()=>void):void;
		DisconnectDestroyQNetworkCookieJar():void;
		DestroyQNetworkCookieJar():void;
		DestroyQNetworkCookieJarDefault():void;
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
	function NewQNetworkCookieJarFromPointer(ptr:number):QNetworkCookieJar;
	function NewQNetworkCookieJar(parent:core.QObject_ITF):QNetworkCookieJar;
	interface QNetworkDatagram_ITF {
		QNetworkDatagram_PTR():QNetworkDatagram;
	}

	class QNetworkDatagram {
		___pointer: number;
		QNetworkDatagram_PTR():QNetworkDatagram;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQNetworkDatagram():void;
		Clear():void;
		Data():core.QByteArray;
		DestinationAddress():QHostAddress;
		DestinationPort():number;
		HopLimit():number;
		InterfaceIndex():number;
		IsNull():boolean;
		IsValid():boolean;
		MakeReply(payload:core.QByteArray_ITF):QNetworkDatagram;
		MakeReply2(payload:core.QByteArray_ITF):QNetworkDatagram;
		SenderAddress():QHostAddress;
		SenderPort():number;
		SetData(data:core.QByteArray_ITF):void;
		SetDestination(address:QHostAddress_ITF,port:number):void;
		SetHopLimit(count:number):void;
		SetInterfaceIndex(index:number):void;
		SetSender(address:QHostAddress_ITF,port:number):void;
		Swap(other:QNetworkDatagram_ITF):void;
	}
	function NewQNetworkDatagramFromPointer(ptr:number):QNetworkDatagram;
	function NewQNetworkDatagram():QNetworkDatagram;
	function NewQNetworkDatagram2(data:core.QByteArray_ITF,destinationAddress:QHostAddress_ITF,port:number):QNetworkDatagram;
	function NewQNetworkDatagram3(other:QNetworkDatagram_ITF):QNetworkDatagram;
	interface QNetworkDiskCache_ITF extends QAbstractNetworkCache_ITF {
		QNetworkDiskCache_PTR():QNetworkDiskCache;
	}

	class QNetworkDiskCache extends QAbstractNetworkCache {
		___pointer: number;
		QNetworkDiskCache_PTR():QNetworkDiskCache;
		Pointer():number;
		SetPointer(p:number):void;
		CacheDirectory():string;
		ConnectCacheSize(f:()=>number):void;
		DisconnectCacheSize():void;
		CacheSize():number;
		CacheSizeDefault():number;
		ConnectClear(f:()=>void):void;
		DisconnectClear():void;
		Clear():void;
		ClearDefault():void;
		ConnectData(f:(url:core.QUrl)=>core.QIODevice):void;
		DisconnectData():void;
		Data(url:core.QUrl_ITF):core.QIODevice;
		DataDefault(url:core.QUrl_ITF):core.QIODevice;
		ConnectExpire(f:()=>number):void;
		DisconnectExpire():void;
		Expire():number;
		ExpireDefault():number;
		FileMetaData(fileName:string):QNetworkCacheMetaData;
		ConnectInsert(f:(device:core.QIODevice)=>void):void;
		DisconnectInsert():void;
		Insert(device:core.QIODevice_ITF):void;
		InsertDefault(device:core.QIODevice_ITF):void;
		MaximumCacheSize():number;
		ConnectMetaData(f:(url:core.QUrl)=>QNetworkCacheMetaData):void;
		DisconnectMetaData():void;
		MetaData(url:core.QUrl_ITF):QNetworkCacheMetaData;
		MetaDataDefault(url:core.QUrl_ITF):QNetworkCacheMetaData;
		ConnectPrepare(f:(metaData:QNetworkCacheMetaData)=>core.QIODevice):void;
		DisconnectPrepare():void;
		Prepare(metaData:QNetworkCacheMetaData_ITF):core.QIODevice;
		PrepareDefault(metaData:QNetworkCacheMetaData_ITF):core.QIODevice;
		ConnectRemove(f:(url:core.QUrl)=>boolean):void;
		DisconnectRemove():void;
		Remove(url:core.QUrl_ITF):boolean;
		RemoveDefault(url:core.QUrl_ITF):boolean;
		SetCacheDirectory(cacheDir:string):void;
		SetMaximumCacheSize(size:number):void;
		ConnectUpdateMetaData(f:(metaData:QNetworkCacheMetaData)=>void):void;
		DisconnectUpdateMetaData():void;
		UpdateMetaData(metaData:QNetworkCacheMetaData_ITF):void;
		UpdateMetaDataDefault(metaData:QNetworkCacheMetaData_ITF):void;
		ConnectDestroyQNetworkDiskCache(f:()=>void):void;
		DisconnectDestroyQNetworkDiskCache():void;
		DestroyQNetworkDiskCache():void;
		DestroyQNetworkDiskCacheDefault():void;
	}
	function NewQNetworkDiskCacheFromPointer(ptr:number):QNetworkDiskCache;
	function NewQNetworkDiskCache(parent:core.QObject_ITF):QNetworkDiskCache;
	interface QNetworkInterface_ITF {
		QNetworkInterface_PTR():QNetworkInterface;
	}

	class QNetworkInterface {
		___pointer: number;
		QNetworkInterface_PTR():QNetworkInterface;
		Pointer():number;
		SetPointer(p:number):void;
		AddressEntries():QNetworkAddressEntry[];
		AllAddresses():QHostAddress[];
		AllInterfaces():QNetworkInterface[];
		Flags():number;
		HardwareAddress():string;
		HumanReadableName():string;
		Index():number;
		InterfaceFromIndex(index:number):QNetworkInterface;
		InterfaceFromName(name:string):QNetworkInterface;
		InterfaceIndexFromName(name:string):number;
		InterfaceNameFromIndex(index:number):string;
		IsValid():boolean;
		MaximumTransmissionUnit():number;
		Name():string;
		Swap(other:QNetworkInterface_ITF):void;
		Type():number;
		DestroyQNetworkInterface():void;
	}
	function NewQNetworkInterfaceFromPointer(ptr:number):QNetworkInterface;
	function NewQNetworkInterface():QNetworkInterface;
	function NewQNetworkInterface2(other:QNetworkInterface_ITF):QNetworkInterface;
	function QNetworkInterface_AllAddresses():QHostAddress[];
	function QNetworkInterface_AllInterfaces():QNetworkInterface[];
	function QNetworkInterface_InterfaceFromIndex(index:number):QNetworkInterface;
	function QNetworkInterface_InterfaceFromName(name:string):QNetworkInterface;
	function QNetworkInterface_InterfaceIndexFromName(name:string):number;
	function QNetworkInterface_InterfaceNameFromIndex(index:number):string;
	const QNetworkInterface__Loopback: number;
	const QNetworkInterface__Virtual: number;
	const QNetworkInterface__Ethernet: number;
	const QNetworkInterface__Slip: number;
	const QNetworkInterface__CanBus: number;
	const QNetworkInterface__Ppp: number;
	const QNetworkInterface__Fddi: number;
	const QNetworkInterface__Wifi: number;
	const QNetworkInterface__Ieee80211: number;
	const QNetworkInterface__Phonet: number;
	const QNetworkInterface__Ieee802154: number;
	const QNetworkInterface__SixLoWPAN: number;
	const QNetworkInterface__Ieee80216: number;
	const QNetworkInterface__Ieee1394: number;
	const QNetworkInterface__Unknown: number;
	const QNetworkInterface__IsUp: number;
	const QNetworkInterface__IsRunning: number;
	const QNetworkInterface__CanBroadcast: number;
	const QNetworkInterface__IsLoopBack: number;
	const QNetworkInterface__IsPointToPoint: number;
	const QNetworkInterface__CanMulticast: number;
	interface QNetworkProxy_ITF {
		QNetworkProxy_PTR():QNetworkProxy;
	}

	class QNetworkProxy {
		___pointer: number;
		QNetworkProxy_PTR():QNetworkProxy;
		Pointer():number;
		SetPointer(p:number):void;
		ApplicationProxy():QNetworkProxy;
		Capabilities():number;
		HasRawHeader(headerName:core.QByteArray_ITF):boolean;
		Header(header:number):core.QVariant;
		HostName():string;
		IsCachingProxy():boolean;
		IsTransparentProxy():boolean;
		Password():string;
		Port():number;
		RawHeader(headerName:core.QByteArray_ITF):core.QByteArray;
		RawHeaderList():core.QByteArray[];
		SetApplicationProxy(networkProxy:QNetworkProxy_ITF):void;
		SetCapabilities(capabilities:number):void;
		SetHeader(header:number,value:core.QVariant_ITF):void;
		SetHostName(hostName:string):void;
		SetPassword(password:string):void;
		SetPort(port:number):void;
		SetRawHeader(headerName:core.QByteArray_ITF,headerValue:core.QByteArray_ITF):void;
		SetType(ty:number):void;
		SetUser(user:string):void;
		Swap(other:QNetworkProxy_ITF):void;
		Type():number;
		User():string;
		DestroyQNetworkProxy():void;
	}
	function NewQNetworkProxyFromPointer(ptr:number):QNetworkProxy;
	function NewQNetworkProxy():QNetworkProxy;
	function NewQNetworkProxy2(ty:number,hostName:string,port:number,user:string,password:string):QNetworkProxy;
	function NewQNetworkProxy3(other:QNetworkProxy_ITF):QNetworkProxy;
	function QNetworkProxy_ApplicationProxy():QNetworkProxy;
	function QNetworkProxy_SetApplicationProxy(networkProxy:QNetworkProxy_ITF):void;
	function NewQNetworkProxyFactory():QNetworkProxyFactory;
	function NewQNetworkProxyQuery():QNetworkProxyQuery;
	function NewQNetworkProxyQuery2(requestUrl:core.QUrl_ITF,queryType:number):QNetworkProxyQuery;
	function NewQNetworkProxyQuery3(hostname:string,port:number,protocolTag:string,queryType:number):QNetworkProxyQuery;
	function NewQNetworkProxyQuery4(bindPort:number,protocolTag:string,queryType:number):QNetworkProxyQuery;
	function NewQNetworkProxyQuery8(other:QNetworkProxyQuery_ITF):QNetworkProxyQuery;
	const QNetworkProxy__DefaultProxy: number;
	const QNetworkProxy__Socks5Proxy: number;
	const QNetworkProxy__NoProxy: number;
	const QNetworkProxy__HttpProxy: number;
	const QNetworkProxy__HttpCachingProxy: number;
	const QNetworkProxy__FtpCachingProxy: number;
	const QNetworkProxy__TunnelingCapability: number;
	const QNetworkProxy__ListeningCapability: number;
	const QNetworkProxy__UdpTunnelingCapability: number;
	const QNetworkProxy__CachingCapability: number;
	const QNetworkProxy__HostNameLookupCapability: number;
	const QNetworkProxy__SctpTunnelingCapability: number;
	const QNetworkProxy__SctpListeningCapability: number;
	interface QNetworkProxyFactory_ITF {
		QNetworkProxyFactory_PTR():QNetworkProxyFactory;
	}

	class QNetworkProxyFactory {
		___pointer: number;
		QNetworkProxyFactory_PTR():QNetworkProxyFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ProxyForQuery(query:QNetworkProxyQuery_ITF):QNetworkProxy[];
		ConnectQueryProxy(f:(query:QNetworkProxyQuery)=>QNetworkProxy[]):void;
		DisconnectQueryProxy():void;
		QueryProxy(query:QNetworkProxyQuery_ITF):QNetworkProxy[];
		SetApplicationProxyFactory(factory:QNetworkProxyFactory_ITF):void;
		SetUseSystemConfiguration(enable:boolean):void;
		SystemProxyForQuery(query:QNetworkProxyQuery_ITF):QNetworkProxy[];
		UsesSystemConfiguration():boolean;
		ConnectDestroyQNetworkProxyFactory(f:()=>void):void;
		DisconnectDestroyQNetworkProxyFactory():void;
		DestroyQNetworkProxyFactory():void;
		DestroyQNetworkProxyFactoryDefault():void;
	}
	function NewQNetworkProxyFactoryFromPointer(ptr:number):QNetworkProxyFactory;
	function NewQNetworkProxyFactory():QNetworkProxyFactory;
	function QNetworkProxyFactory_ProxyForQuery(query:QNetworkProxyQuery_ITF):QNetworkProxy[];
	function QNetworkProxyFactory_SetApplicationProxyFactory(factory:QNetworkProxyFactory_ITF):void;
	function QNetworkProxyFactory_SetUseSystemConfiguration(enable:boolean):void;
	function QNetworkProxyFactory_SystemProxyForQuery(query:QNetworkProxyQuery_ITF):QNetworkProxy[];
	function QNetworkProxyFactory_UsesSystemConfiguration():boolean;
	interface QNetworkProxyQuery_ITF {
		QNetworkProxyQuery_PTR():QNetworkProxyQuery;
	}

	class QNetworkProxyQuery {
		___pointer: number;
		QNetworkProxyQuery_PTR():QNetworkProxyQuery;
		Pointer():number;
		SetPointer(p:number):void;
		LocalPort():number;
		PeerHostName():string;
		PeerPort():number;
		ProtocolTag():string;
		QueryType():number;
		SetLocalPort(port:number):void;
		SetPeerHostName(hostname:string):void;
		SetPeerPort(port:number):void;
		SetProtocolTag(protocolTag:string):void;
		SetQueryType(ty:number):void;
		SetUrl(url:core.QUrl_ITF):void;
		Swap(other:QNetworkProxyQuery_ITF):void;
		Url():core.QUrl;
		DestroyQNetworkProxyQuery():void;
	}
	function NewQNetworkProxyQueryFromPointer(ptr:number):QNetworkProxyQuery;
	function NewQNetworkProxyQuery():QNetworkProxyQuery;
	function NewQNetworkProxyQuery2(requestUrl:core.QUrl_ITF,queryType:number):QNetworkProxyQuery;
	function NewQNetworkProxyQuery3(hostname:string,port:number,protocolTag:string,queryType:number):QNetworkProxyQuery;
	function NewQNetworkProxyQuery4(bindPort:number,protocolTag:string,queryType:number):QNetworkProxyQuery;
	function NewQNetworkProxyQuery8(other:QNetworkProxyQuery_ITF):QNetworkProxyQuery;
	const QNetworkProxyQuery__TcpSocket: number;
	const QNetworkProxyQuery__UdpSocket: number;
	const QNetworkProxyQuery__SctpSocket: number;
	const QNetworkProxyQuery__TcpServer: number;
	const QNetworkProxyQuery__UrlRequest: number;
	const QNetworkProxyQuery__SctpServer: number;
	interface QNetworkReply_ITF extends core.QIODevice_ITF {
		QNetworkReply_PTR():QNetworkReply;
	}

	class QNetworkReply extends core.QIODevice {
		___pointer: number;
		QNetworkReply_PTR():QNetworkReply;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAbort(f:()=>void):void;
		DisconnectAbort():void;
		Abort():void;
		Attribute(code:number):core.QVariant;
		CloseDefault():void;
		ConnectDownloadProgress(f:(bytesReceived:number,bytesTotal:number)=>void):void;
		DisconnectDownloadProgress():void;
		DownloadProgress(bytesReceived:number,bytesTotal:number):void;
		ConnectEncrypted(f:()=>void):void;
		DisconnectEncrypted():void;
		Encrypted():void;
		Error():number;
		ConnectError2(f:(code:number)=>void):void;
		DisconnectError2():void;
		Error2(code:number):void;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		HasRawHeader(headerName:core.QByteArray_ITF):boolean;
		Header(header:number):core.QVariant;
		ConnectIgnoreSslErrors(f:()=>void):void;
		DisconnectIgnoreSslErrors():void;
		IgnoreSslErrors():void;
		IgnoreSslErrorsDefault():void;
		IgnoreSslErrors2(errors:QSslError[]):void;
		ConnectIgnoreSslErrorsImplementation(f:(errors:QSslError[])=>void):void;
		DisconnectIgnoreSslErrorsImplementation():void;
		IgnoreSslErrorsImplementation(errors:QSslError[]):void;
		IgnoreSslErrorsImplementationDefault(errors:QSslError[]):void;
		IsFinished():boolean;
		IsRunning():boolean;
		Manager():QNetworkAccessManager;
		ConnectMetaDataChanged(f:()=>void):void;
		DisconnectMetaDataChanged():void;
		MetaDataChanged():void;
		Operation():number;
		ConnectPreSharedKeyAuthenticationRequired(f:(authenticator:QSslPreSharedKeyAuthenticator)=>void):void;
		DisconnectPreSharedKeyAuthenticationRequired():void;
		PreSharedKeyAuthenticationRequired(authenticator:QSslPreSharedKeyAuthenticator_ITF):void;
		RawHeader(headerName:core.QByteArray_ITF):core.QByteArray;
		RawHeaderList():core.QByteArray[];
		ReadBufferSize():number;
		ConnectRedirectAllowed(f:()=>void):void;
		DisconnectRedirectAllowed():void;
		RedirectAllowed():void;
		ConnectRedirected(f:(url:core.QUrl)=>void):void;
		DisconnectRedirected():void;
		Redirected(url:core.QUrl_ITF):void;
		Request():QNetworkRequest;
		SetAttribute(code:number,value:core.QVariant_ITF):void;
		SetError(errorCode:number,errorString:string):void;
		SetFinished(finished:boolean):void;
		SetHeader(header:number,value:core.QVariant_ITF):void;
		SetOperation(operation:number):void;
		SetRawHeader(headerName:core.QByteArray_ITF,value:core.QByteArray_ITF):void;
		ConnectSetReadBufferSize(f:(size:number)=>void):void;
		DisconnectSetReadBufferSize():void;
		SetReadBufferSize(size:number):void;
		SetReadBufferSizeDefault(size:number):void;
		SetRequest(request:QNetworkRequest_ITF):void;
		SetSslConfiguration(config:QSslConfiguration_ITF):void;
		ConnectSetSslConfigurationImplementation(f:(configuration:QSslConfiguration)=>void):void;
		DisconnectSetSslConfigurationImplementation():void;
		SetSslConfigurationImplementation(configuration:QSslConfiguration_ITF):void;
		SetSslConfigurationImplementationDefault(configuration:QSslConfiguration_ITF):void;
		SetUrl(url:core.QUrl_ITF):void;
		SslConfiguration():QSslConfiguration;
		ConnectSslConfigurationImplementation(f:(configuration:QSslConfiguration)=>void):void;
		DisconnectSslConfigurationImplementation():void;
		SslConfigurationImplementation(configuration:QSslConfiguration_ITF):void;
		SslConfigurationImplementationDefault(configuration:QSslConfiguration_ITF):void;
		ConnectSslErrors(f:(errors:QSslError[])=>void):void;
		DisconnectSslErrors():void;
		SslErrors(errors:QSslError[]):void;
		ConnectUploadProgress(f:(bytesSent:number,bytesTotal:number)=>void):void;
		DisconnectUploadProgress():void;
		UploadProgress(bytesSent:number,bytesTotal:number):void;
		Url():core.QUrl;
		ConnectDestroyQNetworkReply(f:()=>void):void;
		DisconnectDestroyQNetworkReply():void;
		DestroyQNetworkReply():void;
		DestroyQNetworkReplyDefault():void;
		AtEndDefault():boolean;
		BytesAvailableDefault():number;
		BytesToWriteDefault():number;
		CanReadLineDefault():boolean;
		IsSequentialDefault():boolean;
		OpenDefault(mode:number):boolean;
		PosDefault():number;
		ReadData(data:string,maxSize:number):number;
		ReadDataDefault(data:string,maxSize:number):number;
		ReadLineDataDefault(data:string,maxSize:number):number;
		ResetDefault():boolean;
		SeekDefault(pos:number):boolean;
		SizeDefault():number;
		WaitForBytesWrittenDefault(msecs:number):boolean;
		WaitForReadyReadDefault(msecs:number):boolean;
		WriteData(data:string,maxSize:number):number;
		WriteDataDefault(data:string,maxSize:number):number;
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
	function NewQNetworkReplyFromPointer(ptr:number):QNetworkReply;
	function NewQNetworkReply(parent:core.QObject_ITF):QNetworkReply;
	const QNetworkReply__NoError: number;
	const QNetworkReply__ConnectionRefusedError: number;
	const QNetworkReply__RemoteHostClosedError: number;
	const QNetworkReply__HostNotFoundError: number;
	const QNetworkReply__TimeoutError: number;
	const QNetworkReply__OperationCanceledError: number;
	const QNetworkReply__SslHandshakeFailedError: number;
	const QNetworkReply__TemporaryNetworkFailureError: number;
	const QNetworkReply__NetworkSessionFailedError: number;
	const QNetworkReply__BackgroundRequestNotAllowedError: number;
	const QNetworkReply__TooManyRedirectsError: number;
	const QNetworkReply__InsecureRedirectError: number;
	const QNetworkReply__UnknownNetworkError: number;
	const QNetworkReply__ProxyConnectionRefusedError: number;
	const QNetworkReply__ProxyConnectionClosedError: number;
	const QNetworkReply__ProxyNotFoundError: number;
	const QNetworkReply__ProxyTimeoutError: number;
	const QNetworkReply__ProxyAuthenticationRequiredError: number;
	const QNetworkReply__UnknownProxyError: number;
	const QNetworkReply__ContentAccessDenied: number;
	const QNetworkReply__ContentOperationNotPermittedError: number;
	const QNetworkReply__ContentNotFoundError: number;
	const QNetworkReply__AuthenticationRequiredError: number;
	const QNetworkReply__ContentReSendError: number;
	const QNetworkReply__ContentConflictError: number;
	const QNetworkReply__ContentGoneError: number;
	const QNetworkReply__UnknownContentError: number;
	const QNetworkReply__ProtocolUnknownError: number;
	const QNetworkReply__ProtocolInvalidOperationError: number;
	const QNetworkReply__ProtocolFailure: number;
	const QNetworkReply__InternalServerError: number;
	const QNetworkReply__OperationNotImplementedError: number;
	const QNetworkReply__ServiceUnavailableError: number;
	const QNetworkReply__UnknownServerError: number;
	interface QNetworkRequest_ITF {
		QNetworkRequest_PTR():QNetworkRequest;
	}

	class QNetworkRequest {
		___pointer: number;
		QNetworkRequest_PTR():QNetworkRequest;
		Pointer():number;
		SetPointer(p:number):void;
		Attribute(code:number,defaultValue:core.QVariant_ITF):core.QVariant;
		HasRawHeader(headerName:core.QByteArray_ITF):boolean;
		Header(header:number):core.QVariant;
		MaximumRedirectsAllowed():number;
		OriginatingObject():core.QObject;
		PeerVerifyName():string;
		Priority():number;
		RawHeader(headerName:core.QByteArray_ITF):core.QByteArray;
		RawHeaderList():core.QByteArray[];
		SetAttribute(code:number,value:core.QVariant_ITF):void;
		SetHeader(header:number,value:core.QVariant_ITF):void;
		SetMaximumRedirectsAllowed(maxRedirectsAllowed:number):void;
		SetOriginatingObject(object:core.QObject_ITF):void;
		SetPeerVerifyName(peerName:string):void;
		SetPriority(priority:number):void;
		SetRawHeader(headerName:core.QByteArray_ITF,headerValue:core.QByteArray_ITF):void;
		SetSslConfiguration(config:QSslConfiguration_ITF):void;
		SetUrl(url:core.QUrl_ITF):void;
		SslConfiguration():QSslConfiguration;
		Swap(other:QNetworkRequest_ITF):void;
		Url():core.QUrl;
		DestroyQNetworkRequest():void;
	}
	function NewQNetworkRequestFromPointer(ptr:number):QNetworkRequest;
	function NewQNetworkRequest(url:core.QUrl_ITF):QNetworkRequest;
	function NewQNetworkRequest2(other:QNetworkRequest_ITF):QNetworkRequest;
	const QNetworkRequest__HttpStatusCodeAttribute: number;
	const QNetworkRequest__HttpReasonPhraseAttribute: number;
	const QNetworkRequest__RedirectionTargetAttribute: number;
	const QNetworkRequest__ConnectionEncryptedAttribute: number;
	const QNetworkRequest__CacheLoadControlAttribute: number;
	const QNetworkRequest__CacheSaveControlAttribute: number;
	const QNetworkRequest__SourceIsFromCacheAttribute: number;
	const QNetworkRequest__DoNotBufferUploadDataAttribute: number;
	const QNetworkRequest__HttpPipeliningAllowedAttribute: number;
	const QNetworkRequest__HttpPipeliningWasUsedAttribute: number;
	const QNetworkRequest__CustomVerbAttribute: number;
	const QNetworkRequest__CookieLoadControlAttribute: number;
	const QNetworkRequest__AuthenticationReuseAttribute: number;
	const QNetworkRequest__CookieSaveControlAttribute: number;
	const QNetworkRequest__MaximumDownloadBufferSizeAttribute: number;
	const QNetworkRequest__DownloadBufferAttribute: number;
	const QNetworkRequest__SynchronousRequestAttribute: number;
	const QNetworkRequest__BackgroundRequestAttribute: number;
	const QNetworkRequest__SpdyAllowedAttribute: number;
	const QNetworkRequest__SpdyWasUsedAttribute: number;
	const QNetworkRequest__EmitAllUploadProgressSignalsAttribute: number;
	const QNetworkRequest__FollowRedirectsAttribute: number;
	const QNetworkRequest__HTTP2AllowedAttribute: number;
	const QNetworkRequest__HTTP2WasUsedAttribute: number;
	const QNetworkRequest__OriginalContentLengthAttribute: number;
	const QNetworkRequest__RedirectPolicyAttribute: number;
	const QNetworkRequest__Http2DirectAttribute: number;
	const QNetworkRequest__ResourceTypeAttribute: number;
	const QNetworkRequest__User: number;
	const QNetworkRequest__UserMax: number;
	const QNetworkRequest__ContentTypeHeader: number;
	const QNetworkRequest__ContentLengthHeader: number;
	const QNetworkRequest__LocationHeader: number;
	const QNetworkRequest__LastModifiedHeader: number;
	const QNetworkRequest__CookieHeader: number;
	const QNetworkRequest__SetCookieHeader: number;
	const QNetworkRequest__ContentDispositionHeader: number;
	const QNetworkRequest__UserAgentHeader: number;
	const QNetworkRequest__ServerHeader: number;
	const QNetworkRequest__IfModifiedSinceHeader: number;
	const QNetworkRequest__ETagHeader: number;
	const QNetworkRequest__IfMatchHeader: number;
	const QNetworkRequest__IfNoneMatchHeader: number;
	const QNetworkRequest__AlwaysNetwork: number;
	const QNetworkRequest__PreferNetwork: number;
	const QNetworkRequest__PreferCache: number;
	const QNetworkRequest__AlwaysCache: number;
	const QNetworkRequest__Automatic: number;
	const QNetworkRequest__Manual: number;
	const QNetworkRequest__HighPriority: number;
	const QNetworkRequest__NormalPriority: number;
	const QNetworkRequest__LowPriority: number;
	const QNetworkRequest__ManualRedirectPolicy: number;
	const QNetworkRequest__NoLessSafeRedirectPolicy: number;
	const QNetworkRequest__SameOriginRedirectPolicy: number;
	const QNetworkRequest__UserVerifiedRedirectPolicy: number;
	interface QNetworkSession_ITF extends core.QObject_ITF {
		QNetworkSession_PTR():QNetworkSession;
	}

	class QNetworkSession extends core.QObject {
		___pointer: number;
		QNetworkSession_PTR():QNetworkSession;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAccept(f:()=>void):void;
		DisconnectAccept():void;
		Accept():void;
		AcceptDefault():void;
		ActiveTime():number;
		BytesReceived():number;
		BytesWritten():number;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		CloseDefault():void;
		ConnectClosed(f:()=>void):void;
		DisconnectClosed():void;
		Closed():void;
		Configuration():QNetworkConfiguration;
		Error():number;
		ConnectError2(f:(error:number)=>void):void;
		DisconnectError2():void;
		Error2(error:number):void;
		ErrorString():string;
		ConnectIgnore(f:()=>void):void;
		DisconnectIgnore():void;
		Ignore():void;
		IgnoreDefault():void;
		Interface():QNetworkInterface;
		IsOpen():boolean;
		ConnectMigrate(f:()=>void):void;
		DisconnectMigrate():void;
		Migrate():void;
		MigrateDefault():void;
		ConnectNewConfigurationActivated(f:()=>void):void;
		DisconnectNewConfigurationActivated():void;
		NewConfigurationActivated():void;
		ConnectOpen(f:()=>void):void;
		DisconnectOpen():void;
		Open():void;
		OpenDefault():void;
		ConnectOpened(f:()=>void):void;
		DisconnectOpened():void;
		Opened():void;
		ConnectPreferredConfigurationChanged(f:(config:QNetworkConfiguration,isSeamless:boolean)=>void):void;
		DisconnectPreferredConfigurationChanged():void;
		PreferredConfigurationChanged(config:QNetworkConfiguration_ITF,isSeamless:boolean):void;
		ConnectReject(f:()=>void):void;
		DisconnectReject():void;
		Reject():void;
		RejectDefault():void;
		SessionProperty(key:string):core.QVariant;
		SetSessionProperty(key:string,value:core.QVariant_ITF):void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		UsagePolicies():number;
		ConnectUsagePoliciesChanged(f:(usagePolicies:number)=>void):void;
		DisconnectUsagePoliciesChanged():void;
		UsagePoliciesChanged(usagePolicies:number):void;
		WaitForOpened(msecs:number):boolean;
		ConnectDestroyQNetworkSession(f:()=>void):void;
		DisconnectDestroyQNetworkSession():void;
		DestroyQNetworkSession():void;
		DestroyQNetworkSessionDefault():void;
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
	function NewQNetworkSessionFromPointer(ptr:number):QNetworkSession;
	function NewQNetworkSession(connectionConfig:QNetworkConfiguration_ITF,parent:core.QObject_ITF):QNetworkSession;
	const QNetworkSession__Invalid: number;
	const QNetworkSession__NotAvailable: number;
	const QNetworkSession__Connecting: number;
	const QNetworkSession__Connected: number;
	const QNetworkSession__Closing: number;
	const QNetworkSession__Disconnected: number;
	const QNetworkSession__Roaming: number;
	const QNetworkSession__UnknownSessionError: number;
	const QNetworkSession__SessionAbortedError: number;
	const QNetworkSession__RoamingError: number;
	const QNetworkSession__OperationNotSupportedError: number;
	const QNetworkSession__InvalidConfigurationError: number;
	const QNetworkSession__NoPolicy: number;
	const QNetworkSession__NoBackgroundTrafficPolicy: number;
	interface QOcspResponse_ITF {
		QOcspResponse_PTR():QOcspResponse;
	}

	class QOcspResponse {
		___pointer: number;
		QOcspResponse_PTR():QOcspResponse;
		Pointer():number;
		SetPointer(p:number):void;
		Subject():QSslCertificate;
		Swap(other:QOcspResponse_ITF):void;
		DestroyQOcspResponse():void;
	}
	function NewQOcspResponseFromPointer(ptr:number):QOcspResponse;
	function NewQOcspResponse():QOcspResponse;
	function NewQOcspResponse2(other:QOcspResponse_ITF):QOcspResponse;
	function NewQOcspResponse3(other:QOcspResponse_ITF):QOcspResponse;
	const QOcspResponse__Good: number;
	const QOcspResponse__Revoked: number;
	const QOcspResponse__Unknown: number;
	const QOcspResponse__None: number;
	const QOcspResponse__Unspecified: number;
	const QOcspResponse__KeyCompromise: number;
	const QOcspResponse__CACompromise: number;
	const QOcspResponse__AffiliationChanged: number;
	const QOcspResponse__Superseded: number;
	const QOcspResponse__CessationOfOperation: number;
	const QOcspResponse__CertificateHold: number;
	const QOcspResponse__RemoveFromCRL: number;
	interface QSsl_ITF {
		QSsl_PTR():QSsl;
	}

	class QSsl {
		___pointer: number;
		QSsl_PTR():QSsl;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSsl():void;
	}
	function NewQSslFromPointer(ptr:number):QSsl;
	function NewQSslCertificate(device:core.QIODevice_ITF,format:number):QSslCertificate;
	function NewQSslCertificate2(data:core.QByteArray_ITF,format:number):QSslCertificate;
	function NewQSslCertificate3(other:QSslCertificate_ITF):QSslCertificate;
	function NewQSslCertificateExtension():QSslCertificateExtension;
	function NewQSslCertificateExtension2(other:QSslCertificateExtension_ITF):QSslCertificateExtension;
	function NewQSslCipher():QSslCipher;
	function NewQSslCipher2(name:string):QSslCipher;
	function NewQSslCipher3(name:string,protocol:number):QSslCipher;
	function NewQSslCipher4(other:QSslCipher_ITF):QSslCipher;
	function NewQSslConfiguration():QSslConfiguration;
	function NewQSslConfiguration2(other:QSslConfiguration_ITF):QSslConfiguration;
	function NewQSslDiffieHellmanParameters():QSslDiffieHellmanParameters;
	function NewQSslDiffieHellmanParameters2(other:QSslDiffieHellmanParameters_ITF):QSslDiffieHellmanParameters;
	function NewQSslDiffieHellmanParameters3(other:QSslDiffieHellmanParameters_ITF):QSslDiffieHellmanParameters;
	function NewQSslEllipticCurve():QSslEllipticCurve;
	function NewQSslError():QSslError;
	function NewQSslError2(error:number):QSslError;
	function NewQSslError3(error:number,certificate:QSslCertificate_ITF):QSslError;
	function NewQSslError4(other:QSslError_ITF):QSslError;
	function NewQSslKey():QSslKey;
	function NewQSslKey2(encoded:core.QByteArray_ITF,algorithm:number,encoding:number,ty:number,passPhrase:core.QByteArray_ITF):QSslKey;
	function NewQSslKey3(device:core.QIODevice_ITF,algorithm:number,encoding:number,ty:number,passPhrase:core.QByteArray_ITF):QSslKey;
	function NewQSslKey5(other:QSslKey_ITF):QSslKey;
	function NewQSslPreSharedKeyAuthenticator():QSslPreSharedKeyAuthenticator;
	function NewQSslPreSharedKeyAuthenticator2(authenticator:QSslPreSharedKeyAuthenticator_ITF):QSslPreSharedKeyAuthenticator;
	function NewQSslSocket(parent:core.QObject_ITF):QSslSocket;
	const QSsl__PrivateKey: number;
	const QSsl__PublicKey: number;
	const QSsl__Pem: number;
	const QSsl__Der: number;
	const QSsl__Opaque: number;
	const QSsl__Rsa: number;
	const QSsl__Dsa: number;
	const QSsl__Ec: number;
	const QSsl__Dh: number;
	const QSsl__EmailEntry: number;
	const QSsl__DnsEntry: number;
	const QSsl__IpAddressEntry: number;
	const QSsl__SslV3: number;
	const QSsl__SslV2: number;
	const QSsl__TlsV1_0: number;
	const QSsl__TlsV1: number;
	const QSsl__TlsV1_1: number;
	const QSsl__TlsV1_2: number;
	const QSsl__AnyProtocol: number;
	const QSsl__TlsV1SslV3: number;
	const QSsl__SecureProtocols: number;
	const QSsl__TlsV1_0OrLater: number;
	const QSsl__TlsV1_1OrLater: number;
	const QSsl__TlsV1_2OrLater: number;
	const QSsl__DtlsV1_0: number;
	const QSsl__DtlsV1_0OrLater: number;
	const QSsl__DtlsV1_2: number;
	const QSsl__DtlsV1_2OrLater: number;
	const QSsl__TlsV1_3: number;
	const QSsl__TlsV1_3OrLater: number;
	const QSsl__UnknownProtocol: number;
	const QSsl__SslOptionDisableEmptyFragments: number;
	const QSsl__SslOptionDisableSessionTickets: number;
	const QSsl__SslOptionDisableCompression: number;
	const QSsl__SslOptionDisableServerNameIndication: number;
	const QSsl__SslOptionDisableLegacyRenegotiation: number;
	const QSsl__SslOptionDisableSessionSharing: number;
	const QSsl__SslOptionDisableSessionPersistence: number;
	const QSsl__SslOptionDisableServerCipherPreference: number;
	interface QSslCertificate_ITF {
		QSslCertificate_PTR():QSslCertificate;
	}

	class QSslCertificate {
		___pointer: number;
		QSslCertificate_PTR():QSslCertificate;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():void;
		Digest(algorithm:number):core.QByteArray;
		EffectiveDate():core.QDateTime;
		ExpiryDate():core.QDateTime;
		Extensions():QSslCertificateExtension[];
		FromData(data:core.QByteArray_ITF,format:number):QSslCertificate[];
		FromDevice(device:core.QIODevice_ITF,format:number):QSslCertificate[];
		FromPath(path:string,format:number,syntax:number):QSslCertificate[];
		ImportPkcs12(device:core.QIODevice_ITF,key:QSslKey_ITF,certificate:QSslCertificate_ITF,caCertificates:QSslCertificate[],passPhrase:core.QByteArray_ITF):boolean;
		IsBlacklisted():boolean;
		IsNull():boolean;
		IsSelfSigned():boolean;
		IssuerDisplayName():string;
		IssuerInfo(subject:number):string[];
		IssuerInfo2(attribute:core.QByteArray_ITF):string[];
		IssuerInfoAttributes():core.QByteArray[];
		PublicKey():QSslKey;
		SerialNumber():core.QByteArray;
		SubjectAlternativeNames():number,string>;
		SubjectDisplayName():string;
		SubjectInfo(subject:number):string[];
		SubjectInfo2(attribute:core.QByteArray_ITF):string[];
		SubjectInfoAttributes():core.QByteArray[];
		Swap(other:QSslCertificate_ITF):void;
		ToDer():core.QByteArray;
		ToPem():core.QByteArray;
		ToText():string;
		Verify(certificateChai:QSslCertificate[],hostName:string):QSslError[];
		Version():core.QByteArray;
		DestroyQSslCertificate():void;
	}
	function NewQSslCertificateFromPointer(ptr:number):QSslCertificate;
	function NewQSslCertificate(device:core.QIODevice_ITF,format:number):QSslCertificate;
	function NewQSslCertificate2(data:core.QByteArray_ITF,format:number):QSslCertificate;
	function NewQSslCertificate3(other:QSslCertificate_ITF):QSslCertificate;
	function QSslCertificate_FromData(data:core.QByteArray_ITF,format:number):QSslCertificate[];
	function QSslCertificate_FromDevice(device:core.QIODevice_ITF,format:number):QSslCertificate[];
	function QSslCertificate_FromPath(path:string,format:number,syntax:number):QSslCertificate[];
	function QSslCertificate_ImportPkcs12(device:core.QIODevice_ITF,key:QSslKey_ITF,certificate:QSslCertificate_ITF,caCertificates:QSslCertificate[],passPhrase:core.QByteArray_ITF):boolean;
	function QSslCertificate_Verify(certificateChai:QSslCertificate[],hostName:string):QSslError[];
	function NewQSslCertificateExtension():QSslCertificateExtension;
	function NewQSslCertificateExtension2(other:QSslCertificateExtension_ITF):QSslCertificateExtension;
	const QSslCertificate__Organization: number;
	const QSslCertificate__CommonName: number;
	const QSslCertificate__LocalityName: number;
	const QSslCertificate__OrganizationalUnitName: number;
	const QSslCertificate__CountryName: number;
	const QSslCertificate__StateOrProvinceName: number;
	const QSslCertificate__DistinguishedNameQualifier: number;
	const QSslCertificate__SerialNumber: number;
	const QSslCertificate__EmailAddress: number;
	interface QSslCertificateExtension_ITF {
		QSslCertificateExtension_PTR():QSslCertificateExtension;
	}

	class QSslCertificateExtension {
		___pointer: number;
		QSslCertificateExtension_PTR():QSslCertificateExtension;
		Pointer():number;
		SetPointer(p:number):void;
		IsCritical():boolean;
		IsSupported():boolean;
		Name():string;
		Oid():string;
		Swap(other:QSslCertificateExtension_ITF):void;
		Value():core.QVariant;
		DestroyQSslCertificateExtension():void;
	}
	function NewQSslCertificateExtensionFromPointer(ptr:number):QSslCertificateExtension;
	function NewQSslCertificateExtension():QSslCertificateExtension;
	function NewQSslCertificateExtension2(other:QSslCertificateExtension_ITF):QSslCertificateExtension;
	interface QSslCipher_ITF {
		QSslCipher_PTR():QSslCipher;
	}

	class QSslCipher {
		___pointer: number;
		QSslCipher_PTR():QSslCipher;
		Pointer():number;
		SetPointer(p:number):void;
		AuthenticationMethod():string;
		EncryptionMethod():string;
		IsNull():boolean;
		KeyExchangeMethod():string;
		Name():string;
		Protocol():number;
		ProtocolString():string;
		SupportedBits():number;
		Swap(other:QSslCipher_ITF):void;
		UsedBits():number;
		DestroyQSslCipher():void;
	}
	function NewQSslCipherFromPointer(ptr:number):QSslCipher;
	function NewQSslCipher():QSslCipher;
	function NewQSslCipher2(name:string):QSslCipher;
	function NewQSslCipher3(name:string,protocol:number):QSslCipher;
	function NewQSslCipher4(other:QSslCipher_ITF):QSslCipher;
	interface QSslConfiguration_ITF {
		QSslConfiguration_PTR():QSslConfiguration;
	}

	class QSslConfiguration {
		___pointer: number;
		QSslConfiguration_PTR():QSslConfiguration;
		Pointer():number;
		SetPointer(p:number):void;
		AllowedNextProtocols():core.QByteArray[];
		BackendConfiguration():Map<core.QByteArray,core.QVariant>;
		CaCertificates():QSslCertificate[];
		Ciphers():QSslCipher[];
		DefaultConfiguration():QSslConfiguration;
		DiffieHellmanParameters():QSslDiffieHellmanParameters;
		EphemeralServerKey():QSslKey;
		IsNull():boolean;
		LocalCertificate():QSslCertificate;
		LocalCertificateChain():QSslCertificate[];
		NextNegotiatedProtocol():core.QByteArray;
		NextProtocolNegotiationStatus():number;
		OcspStaplingEnabled():boolean;
		PeerCertificate():QSslCertificate;
		PeerCertificateChain():QSslCertificate[];
		PeerVerifyDepth():number;
		PeerVerifyMode():number;
		PreSharedKeyIdentityHint():core.QByteArray;
		PrivateKey():QSslKey;
		Protocol():number;
		SessionCipher():QSslCipher;
		SessionProtocol():number;
		SessionTicket():core.QByteArray;
		SessionTicketLifeTimeHint():number;
		SetAllowedNextProtocols(protocols:core.QByteArray[]):void;
		SetBackendConfiguration(backendConfiguration:Map<core.QByteArray,core.QVariant>):void;
		SetBackendConfigurationOption(name:core.QByteArray_ITF,value:core.QVariant_ITF):void;
		SetCaCertificates(certificates:QSslCertificate[]):void;
		SetCiphers(ciphers:QSslCipher[]):void;
		SetDefaultConfiguration(configuration:QSslConfiguration_ITF):void;
		SetDiffieHellmanParameters(dhparams:QSslDiffieHellmanParameters_ITF):void;
		SetEllipticCurves(curves:QSslEllipticCurve[]):void;
		SetLocalCertificate(certificate:QSslCertificate_ITF):void;
		SetLocalCertificateChain(localChai:QSslCertificate[]):void;
		SetOcspStaplingEnabled(enabled:boolean):void;
		SetPeerVerifyDepth(depth:number):void;
		SetPeerVerifyMode(mode:number):void;
		SetPreSharedKeyIdentityHint(hint:core.QByteArray_ITF):void;
		SetPrivateKey(key:QSslKey_ITF):void;
		SetProtocol(protocol:number):void;
		SetSessionTicket(sessionTicket:core.QByteArray_ITF):void;
		SetSslOption(option:number,on:boolean):void;
		SupportedCiphers():QSslCipher[];
		Swap(other:QSslConfiguration_ITF):void;
		SystemCaCertificates():QSslCertificate[];
		TestSslOption(option:number):boolean;
		DestroyQSslConfiguration():void;
	}
	function NewQSslConfigurationFromPointer(ptr:number):QSslConfiguration;
	function NewQSslConfiguration():QSslConfiguration;
	function NewQSslConfiguration2(other:QSslConfiguration_ITF):QSslConfiguration;
	function QSslConfiguration_DefaultConfiguration():QSslConfiguration;
	function QSslConfiguration_SetDefaultConfiguration(configuration:QSslConfiguration_ITF):void;
	function QSslConfiguration_SupportedCiphers():QSslCipher[];
	function QSslConfiguration_SystemCaCertificates():QSslCertificate[];
	const QSslConfiguration__NextProtocolNegotiationNone: number;
	const QSslConfiguration__NextProtocolNegotiationNegotiated: number;
	const QSslConfiguration__NextProtocolNegotiationUnsupported: number;
	interface QSslDiffieHellmanParameters_ITF {
		QSslDiffieHellmanParameters_PTR():QSslDiffieHellmanParameters;
	}

	class QSslDiffieHellmanParameters {
		___pointer: number;
		QSslDiffieHellmanParameters_PTR():QSslDiffieHellmanParameters;
		Pointer():number;
		SetPointer(p:number):void;
		DefaultParameters():QSslDiffieHellmanParameters;
		Error():number;
		ErrorString():string;
		FromEncoded(encoded:core.QByteArray_ITF,encoding:number):QSslDiffieHellmanParameters;
		FromEncoded2(device:core.QIODevice_ITF,encoding:number):QSslDiffieHellmanParameters;
		IsEmpty():boolean;
		IsValid():boolean;
		Swap(other:QSslDiffieHellmanParameters_ITF):void;
		DestroyQSslDiffieHellmanParameters():void;
	}
	function NewQSslDiffieHellmanParametersFromPointer(ptr:number):QSslDiffieHellmanParameters;
	function NewQSslDiffieHellmanParameters():QSslDiffieHellmanParameters;
	function NewQSslDiffieHellmanParameters2(other:QSslDiffieHellmanParameters_ITF):QSslDiffieHellmanParameters;
	function NewQSslDiffieHellmanParameters3(other:QSslDiffieHellmanParameters_ITF):QSslDiffieHellmanParameters;
	function QSslDiffieHellmanParameters_DefaultParameters():QSslDiffieHellmanParameters;
	function QSslDiffieHellmanParameters_FromEncoded(encoded:core.QByteArray_ITF,encoding:number):QSslDiffieHellmanParameters;
	function QSslDiffieHellmanParameters_FromEncoded2(device:core.QIODevice_ITF,encoding:number):QSslDiffieHellmanParameters;
	const QSslDiffieHellmanParameters__NoError: number;
	const QSslDiffieHellmanParameters__InvalidInputDataError: number;
	const QSslDiffieHellmanParameters__UnsafeParametersError: number;
	interface QSslEllipticCurve_ITF {
		QSslEllipticCurve_PTR():QSslEllipticCurve;
	}

	class QSslEllipticCurve {
		___pointer: number;
		QSslEllipticCurve_PTR():QSslEllipticCurve;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSslEllipticCurve():void;
		FromLongName(name:string):QSslEllipticCurve;
		FromShortName(name:string):QSslEllipticCurve;
		IsTlsNamedCurve():boolean;
		IsValid():boolean;
		LongName():string;
		ShortName():string;
	}
	function NewQSslEllipticCurveFromPointer(ptr:number):QSslEllipticCurve;
	function NewQSslEllipticCurve():QSslEllipticCurve;
	function QSslEllipticCurve_FromLongName(name:string):QSslEllipticCurve;
	function QSslEllipticCurve_FromShortName(name:string):QSslEllipticCurve;
	interface QSslError_ITF {
		QSslError_PTR():QSslError;
	}

	class QSslError {
		___pointer: number;
		QSslError_PTR():QSslError;
		Pointer():number;
		SetPointer(p:number):void;
		Certificate():QSslCertificate;
		Error():number;
		ErrorString():string;
		Swap(other:QSslError_ITF):void;
		DestroyQSslError():void;
	}
	function NewQSslErrorFromPointer(ptr:number):QSslError;
	function NewQSslError():QSslError;
	function NewQSslError2(error:number):QSslError;
	function NewQSslError3(error:number,certificate:QSslCertificate_ITF):QSslError;
	function NewQSslError4(other:QSslError_ITF):QSslError;
	const QSslError__NoError: number;
	const QSslError__UnableToGetIssuerCertificate: number;
	const QSslError__UnableToDecryptCertificateSignature: number;
	const QSslError__UnableToDecodeIssuerPublicKey: number;
	const QSslError__CertificateSignatureFailed: number;
	const QSslError__CertificateNotYetValid: number;
	const QSslError__CertificateExpired: number;
	const QSslError__InvalidNotBeforeField: number;
	const QSslError__InvalidNotAfterField: number;
	const QSslError__SelfSignedCertificate: number;
	const QSslError__SelfSignedCertificateInChain: number;
	const QSslError__UnableToGetLocalIssuerCertificate: number;
	const QSslError__UnableToVerifyFirstCertificate: number;
	const QSslError__CertificateRevoked: number;
	const QSslError__InvalidCaCertificate: number;
	const QSslError__PathLengthExceeded: number;
	const QSslError__InvalidPurpose: number;
	const QSslError__CertificateUntrusted: number;
	const QSslError__CertificateRejected: number;
	const QSslError__SubjectIssuerMismatch: number;
	const QSslError__AuthorityIssuerSerialNumberMismatch: number;
	const QSslError__NoPeerCertificate: number;
	const QSslError__HostNameMismatch: number;
	const QSslError__NoSslSupport: number;
	const QSslError__CertificateBlacklisted: number;
	const QSslError__CertificateStatusUnknown: number;
	const QSslError__OcspNoResponseFound: number;
	const QSslError__OcspMalformedRequest: number;
	const QSslError__OcspMalformedResponse: number;
	const QSslError__OcspInternalError: number;
	const QSslError__OcspTryLater: number;
	const QSslError__OcspSigRequred: number;
	const QSslError__OcspUnauthorized: number;
	const QSslError__OcspResponseCannotBeTrusted: number;
	const QSslError__OcspResponseCertIdUnknown: number;
	const QSslError__OcspResponseExpired: number;
	const QSslError__OcspStatusUnknown: number;
	const QSslError__UnspecifiedError: number;
	interface QSslKey_ITF {
		QSslKey_PTR():QSslKey;
	}

	class QSslKey {
		___pointer: number;
		QSslKey_PTR():QSslKey;
		Pointer():number;
		SetPointer(p:number):void;
		Algorithm():number;
		Clear():void;
		IsNull():boolean;
		Length():number;
		Swap(other:QSslKey_ITF):void;
		ToDer(passPhrase:core.QByteArray_ITF):core.QByteArray;
		ToPem(passPhrase:core.QByteArray_ITF):core.QByteArray;
		Type():number;
		DestroyQSslKey():void;
	}
	function NewQSslKeyFromPointer(ptr:number):QSslKey;
	function NewQSslKey():QSslKey;
	function NewQSslKey2(encoded:core.QByteArray_ITF,algorithm:number,encoding:number,ty:number,passPhrase:core.QByteArray_ITF):QSslKey;
	function NewQSslKey3(device:core.QIODevice_ITF,algorithm:number,encoding:number,ty:number,passPhrase:core.QByteArray_ITF):QSslKey;
	function NewQSslKey5(other:QSslKey_ITF):QSslKey;
	interface QSslPreSharedKeyAuthenticator_ITF {
		QSslPreSharedKeyAuthenticator_PTR():QSslPreSharedKeyAuthenticator;
	}

	class QSslPreSharedKeyAuthenticator {
		___pointer: number;
		QSslPreSharedKeyAuthenticator_PTR():QSslPreSharedKeyAuthenticator;
		Pointer():number;
		SetPointer(p:number):void;
		Identity():core.QByteArray;
		IdentityHint():core.QByteArray;
		MaximumIdentityLength():number;
		MaximumPreSharedKeyLength():number;
		PreSharedKey():core.QByteArray;
		SetIdentity(identity:core.QByteArray_ITF):void;
		SetPreSharedKey(preSharedKey:core.QByteArray_ITF):void;
		Swap(authenticator:QSslPreSharedKeyAuthenticator_ITF):void;
		DestroyQSslPreSharedKeyAuthenticator():void;
	}
	function NewQSslPreSharedKeyAuthenticatorFromPointer(ptr:number):QSslPreSharedKeyAuthenticator;
	function NewQSslPreSharedKeyAuthenticator():QSslPreSharedKeyAuthenticator;
	function NewQSslPreSharedKeyAuthenticator2(authenticator:QSslPreSharedKeyAuthenticator_ITF):QSslPreSharedKeyAuthenticator;
	interface QSslSocket_ITF extends QTcpSocket_ITF {
		QSslSocket_PTR():QSslSocket;
	}

	class QSslSocket extends QTcpSocket {
		___pointer: number;
		QSslSocket_PTR():QSslSocket;
		Pointer():number;
		SetPointer(p:number):void;
		AddCaCertificate(certificate:QSslCertificate_ITF):void;
		AddCaCertificates(path:string,format:number,syntax:number):boolean;
		AddCaCertificates2(certificates:QSslCertificate[]):void;
		AddDefaultCaCertificate(certificate:QSslCertificate_ITF):void;
		AddDefaultCaCertificates(path:string,encoding:number,syntax:number):boolean;
		AddDefaultCaCertificates2(certificates:QSslCertificate[]):void;
		ConnectToHostEncrypted(hostName:string,port:number,mode:number,protocol:number):void;
		ConnectToHostEncrypted2(hostName:string,port:number,sslPeerName:string,mode:number,protocol:number):void;
		ConnectEncrypted(f:()=>void):void;
		DisconnectEncrypted():void;
		Encrypted():void;
		EncryptedBytesAvailable():number;
		EncryptedBytesToWrite():number;
		ConnectEncryptedBytesWritten(f:(written:number)=>void):void;
		DisconnectEncryptedBytesWritten():void;
		EncryptedBytesWritten(written:number):void;
		ConnectIgnoreSslErrors(f:()=>void):void;
		DisconnectIgnoreSslErrors():void;
		IgnoreSslErrors():void;
		IgnoreSslErrorsDefault():void;
		IgnoreSslErrors2(errors:QSslError[]):void;
		IsEncrypted():boolean;
		LocalCertificate():QSslCertificate;
		LocalCertificateChain():QSslCertificate[];
		Mode():number;
		ConnectModeChanged(f:(mode:number)=>void):void;
		DisconnectModeChanged():void;
		ModeChanged(mode:number):void;
		OcspResponses():QOcspResponse[];
		PeerCertificate():QSslCertificate;
		PeerCertificateChain():QSslCertificate[];
		PeerVerifyDepth():number;
		ConnectPeerVerifyError(f:(error:QSslError)=>void):void;
		DisconnectPeerVerifyError():void;
		PeerVerifyError(error:QSslError_ITF):void;
		PeerVerifyMode():number;
		PeerVerifyName():string;
		ConnectPreSharedKeyAuthenticationRequired(f:(authenticator:QSslPreSharedKeyAuthenticator)=>void):void;
		DisconnectPreSharedKeyAuthenticationRequired():void;
		PreSharedKeyAuthenticationRequired(authenticator:QSslPreSharedKeyAuthenticator_ITF):void;
		PrivateKey():QSslKey;
		Protocol():number;
		SessionCipher():QSslCipher;
		SessionProtocol():number;
		SetLocalCertificate(certificate:QSslCertificate_ITF):void;
		SetLocalCertificate2(path:string,format:number):void;
		SetLocalCertificateChain(localChai:QSslCertificate[]):void;
		SetPeerVerifyDepth(depth:number):void;
		SetPeerVerifyMode(mode:number):void;
		SetPeerVerifyName(hostName:string):void;
		SetPrivateKey(key:QSslKey_ITF):void;
		SetPrivateKey2(fileName:string,algorithm:number,format:number,passPhrase:core.QByteArray_ITF):void;
		SetProtocol(protocol:number):void;
		SetSslConfiguration(configuration:QSslConfiguration_ITF):void;
		SslConfiguration():QSslConfiguration;
		SslErrors():QSslError[];
		ConnectSslErrors2(f:(errors:QSslError[])=>void):void;
		DisconnectSslErrors2():void;
		SslErrors2(errors:QSslError[]):void;
		SslLibraryBuildVersionNumber():number;
		SslLibraryBuildVersionString():string;
		SslLibraryVersionNumber():number;
		SslLibraryVersionString():string;
		ConnectStartClientEncryption(f:()=>void):void;
		DisconnectStartClientEncryption():void;
		StartClientEncryption():void;
		StartClientEncryptionDefault():void;
		ConnectStartServerEncryption(f:()=>void):void;
		DisconnectStartServerEncryption():void;
		StartServerEncryption():void;
		StartServerEncryptionDefault():void;
		SupportsSsl():boolean;
		WaitForEncrypted(msecs:number):boolean;
		ConnectDestroyQSslSocket(f:()=>void):void;
		DisconnectDestroyQSslSocket():void;
		DestroyQSslSocket():void;
		DestroyQSslSocketDefault():void;
	}
	function NewQSslSocketFromPointer(ptr:number):QSslSocket;
	function NewQSslSocket(parent:core.QObject_ITF):QSslSocket;
	function QSslSocket_AddDefaultCaCertificate(certificate:QSslCertificate_ITF):void;
	function QSslSocket_AddDefaultCaCertificates(path:string,encoding:number,syntax:number):boolean;
	function QSslSocket_AddDefaultCaCertificates2(certificates:QSslCertificate[]):void;
	function QSslSocket_SslLibraryBuildVersionNumber():number;
	function QSslSocket_SslLibraryBuildVersionString():string;
	function QSslSocket_SslLibraryVersionNumber():number;
	function QSslSocket_SslLibraryVersionString():string;
	function QSslSocket_SupportsSsl():boolean;
	const QSslSocket__UnencryptedMode: number;
	const QSslSocket__SslClientMode: number;
	const QSslSocket__SslServerMode: number;
	const QSslSocket__VerifyNone: number;
	const QSslSocket__QueryPeer: number;
	const QSslSocket__VerifyPeer: number;
	const QSslSocket__AutoVerifyPeer: number;
	interface QTcpServer_ITF extends core.QObject_ITF {
		QTcpServer_PTR():QTcpServer;
	}

	class QTcpServer extends core.QObject {
		___pointer: number;
		QTcpServer_PTR():QTcpServer;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAcceptError(f:(socketError:number)=>void):void;
		DisconnectAcceptError():void;
		AcceptError(socketError:number):void;
		AddPendingConnection(socket:QTcpSocket_ITF):void;
		Close():void;
		ErrorString():string;
		ConnectHasPendingConnections(f:()=>boolean):void;
		DisconnectHasPendingConnections():void;
		HasPendingConnections():boolean;
		HasPendingConnectionsDefault():boolean;
		IsListening():boolean;
		Listen(address:QHostAddress_ITF,port:number):boolean;
		MaxPendingConnections():number;
		ConnectNewConnection(f:()=>void):void;
		DisconnectNewConnection():void;
		NewConnection():void;
		ConnectNextPendingConnection(f:()=>QTcpSocket):void;
		DisconnectNextPendingConnection():void;
		NextPendingConnection():QTcpSocket;
		NextPendingConnectionDefault():QTcpSocket;
		PauseAccepting():void;
		Proxy():QNetworkProxy;
		ResumeAccepting():void;
		ServerAddress():QHostAddress;
		ServerError():number;
		ServerPort():number;
		SetMaxPendingConnections(numConnections:number):void;
		SetProxy(networkProxy:QNetworkProxy_ITF):void;
		WaitForNewConnection(msec:number,timedOut:boolean):boolean;
		ConnectDestroyQTcpServer(f:()=>void):void;
		DisconnectDestroyQTcpServer():void;
		DestroyQTcpServer():void;
		DestroyQTcpServerDefault():void;
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
	function NewQTcpServerFromPointer(ptr:number):QTcpServer;
	function NewQTcpServer(parent:core.QObject_ITF):QTcpServer;
	interface QTcpSocket_ITF extends QAbstractSocket_ITF {
		QTcpSocket_PTR():QTcpSocket;
	}

	class QTcpSocket extends QAbstractSocket {
		___pointer: number;
		QTcpSocket_PTR():QTcpSocket;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQTcpSocket(f:()=>void):void;
		DisconnectDestroyQTcpSocket():void;
		DestroyQTcpSocket():void;
		DestroyQTcpSocketDefault():void;
	}
	function NewQTcpSocketFromPointer(ptr:number):QTcpSocket;
	function NewQTcpSocket(parent:core.QObject_ITF):QTcpSocket;
	interface QUdpSocket_ITF extends QAbstractSocket_ITF {
		QUdpSocket_PTR():QUdpSocket;
	}

	class QUdpSocket extends QAbstractSocket {
		___pointer: number;
		QUdpSocket_PTR():QUdpSocket;
		Pointer():number;
		SetPointer(p:number):void;
		HasPendingDatagrams():boolean;
		JoinMulticastGroup(groupAddress:QHostAddress_ITF):boolean;
		JoinMulticastGroup2(groupAddress:QHostAddress_ITF,iface:QNetworkInterface_ITF):boolean;
		LeaveMulticastGroup(groupAddress:QHostAddress_ITF):boolean;
		LeaveMulticastGroup2(groupAddress:QHostAddress_ITF,iface:QNetworkInterface_ITF):boolean;
		MulticastInterface():QNetworkInterface;
		PendingDatagramSize():number;
		ReadDatagram(data:string,maxSize:number,address:QHostAddress_ITF,port:number):number;
		ReceiveDatagram(maxSize:number):QNetworkDatagram;
		SetMulticastInterface(iface:QNetworkInterface_ITF):void;
		WriteDatagram(data:string,size:number,address:QHostAddress_ITF,port:number):number;
		WriteDatagram2(datagram:QNetworkDatagram_ITF):number;
		WriteDatagram3(datagram:core.QByteArray_ITF,host:QHostAddress_ITF,port:number):number;
		ConnectDestroyQUdpSocket(f:()=>void):void;
		DisconnectDestroyQUdpSocket():void;
		DestroyQUdpSocket():void;
		DestroyQUdpSocketDefault():void;
	}
	function NewQUdpSocketFromPointer(ptr:number):QUdpSocket;
	function NewQUdpSocket(parent:core.QObject_ITF):QUdpSocket;
	interface RawHeader_ITF {
		RawHeader_PTR():RawHeader;
	}

	class RawHeader {
		___pointer: number;
		RawHeader_PTR():RawHeader;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyRawHeader():void;
		First():core.QByteArray;
		SetFirst(vqb:core.QByteArray_ITF):void;
		Second():core.QByteArray;
		SetSecond(vqb:core.QByteArray_ITF):void;
	}
	function NewRawHeaderFromPointer(ptr:number):RawHeader;
	function NewRawHeader():RawHeader;
	function NewRawHeader2(first:core.QByteArray_ITF,second:core.QByteArray_ITF):RawHeader;
}