/// <reference path="core.d.ts" />
/// <reference path="network.d.ts" />
declare namespace serialbus {
	interface QCanBus_ITF extends core.QObject_ITF {
		QCanBus_PTR():QCanBus;
	}

	class QCanBus extends core.QObject {
		___pointer: number;
		QCanBus_PTR():QCanBus;
		Pointer():number;
		SetPointer(p:number):void;
		AvailableDevices(plugi:string,errorMessage:string):QCanBusDeviceInfo[];
		CreateDevice(plugi:string,interfaceName:string,errorMessage:string):QCanBusDevice;
		Instance():QCanBus;
		Plugins():string[];
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
	function NewQCanBusFromPointer(ptr:number):QCanBus;
	function QCanBus_Instance():QCanBus;
	interface QCanBusDevice_ITF extends core.QObject_ITF {
		QCanBusDevice_PTR():QCanBusDevice;
	}

	class QCanBusDevice extends core.QObject {
		___pointer: number;
		QCanBusDevice_PTR():QCanBusDevice;
		Pointer():number;
		SetPointer(p:number):void;
		Clear(direction:number):void;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		ConfigurationKeys():number[];
		ConfigurationParameter(key:number):core.QVariant;
		ConnectDevice():boolean;
		DisconnectDevice():void;
		EnqueueOutgoingFrame(newFrame:QCanBusFrame_ITF):void;
		EnqueueReceivedFrames(newFrames:QCanBusFrame[]):void;
		Error():number;
		ConnectErrorOccurred(f:(vqc:number)=>void):void;
		DisconnectErrorOccurred():void;
		ErrorOccurred(vqc:number):void;
		ErrorString():string;
		FramesAvailable():number;
		ConnectFramesReceived(f:()=>void):void;
		DisconnectFramesReceived():void;
		FramesReceived():void;
		FramesToWrite():number;
		ConnectFramesWritten(f:(framesCount:number)=>void):void;
		DisconnectFramesWritten():void;
		FramesWritten(framesCount:number):void;
		HasOutgoingFrames():boolean;
		ConnectInterpretErrorFrame(f:(frame:QCanBusFrame)=>string):void;
		DisconnectInterpretErrorFrame():void;
		InterpretErrorFrame(frame:QCanBusFrame_ITF):string;
		ConnectOpen(f:()=>boolean):void;
		DisconnectOpen():void;
		Open():boolean;
		ConnectSetConfigurationParameter(f:(key:number,value:core.QVariant)=>void):void;
		DisconnectSetConfigurationParameter():void;
		SetConfigurationParameter(key:number,value:core.QVariant_ITF):void;
		SetConfigurationParameterDefault(key:number,value:core.QVariant_ITF):void;
		SetError(errorText:string,errorId:number):void;
		SetState(newState:number):void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectWaitForFramesReceived(f:(msecs:number)=>boolean):void;
		DisconnectWaitForFramesReceived():void;
		WaitForFramesReceived(msecs:number):boolean;
		WaitForFramesReceivedDefault(msecs:number):boolean;
		ConnectWaitForFramesWritten(f:(msecs:number)=>boolean):void;
		DisconnectWaitForFramesWritten():void;
		WaitForFramesWritten(msecs:number):boolean;
		WaitForFramesWrittenDefault(msecs:number):boolean;
		ConnectWriteFrame(f:(frame:QCanBusFrame)=>boolean):void;
		DisconnectWriteFrame():void;
		WriteFrame(frame:QCanBusFrame_ITF):boolean;
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
	function NewQCanBusDeviceFromPointer(ptr:number):QCanBusDevice;
	function NewQCanBusDevice2(parent:core.QObject_ITF):QCanBusDevice;
	const QCanBusDevice__NoError: number;
	const QCanBusDevice__ReadError: number;
	const QCanBusDevice__WriteError: number;
	const QCanBusDevice__ConnectionError: number;
	const QCanBusDevice__ConfigurationError: number;
	const QCanBusDevice__UnknownError: number;
	const QCanBusDevice__UnconnectedState: number;
	const QCanBusDevice__ConnectingState: number;
	const QCanBusDevice__ConnectedState: number;
	const QCanBusDevice__ClosingState: number;
	const QCanBusDevice__RawFilterKey: number;
	const QCanBusDevice__ErrorFilterKey: number;
	const QCanBusDevice__LoopbackKey: number;
	const QCanBusDevice__ReceiveOwnKey: number;
	const QCanBusDevice__BitRateKey: number;
	const QCanBusDevice__CanFdKey: number;
	const QCanBusDevice__DataBitRateKey: number;
	const QCanBusDevice__UserKey: number;
	const QCanBusDevice__Input: number;
	const QCanBusDevice__Output: number;
	const QCanBusDevice__AllDirections: number;
	interface QCanBusDeviceInfo_ITF {
		QCanBusDeviceInfo_PTR():QCanBusDeviceInfo;
	}

	class QCanBusDeviceInfo {
		___pointer: number;
		QCanBusDeviceInfo_PTR():QCanBusDeviceInfo;
		Pointer():number;
		SetPointer(p:number):void;
		Channel():number;
		Description():string;
		HasFlexibleDataRate():boolean;
		IsVirtual():boolean;
		Name():string;
		SerialNumber():string;
		Swap(other:QCanBusDeviceInfo_ITF):void;
		DestroyQCanBusDeviceInfo():void;
	}
	function NewQCanBusDeviceInfoFromPointer(ptr:number):QCanBusDeviceInfo;
	interface QCanBusFactory_ITF {
		QCanBusFactory_PTR():QCanBusFactory;
	}

	class QCanBusFactory {
		___pointer: number;
		QCanBusFactory_PTR():QCanBusFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQCanBusFactory():void;
		ConnectCreateDevice(f:(interfaceName:string,errorMessage:string)=>QCanBusDevice):void;
		DisconnectCreateDevice():void;
		CreateDevice(interfaceName:string,errorMessage:string):QCanBusDevice;
	}
	function NewQCanBusFactoryFromPointer(ptr:number):QCanBusFactory;
	interface QCanBusFactoryV2_ITF extends QCanBusFactory_ITF {
		QCanBusFactoryV2_PTR():QCanBusFactoryV2;
	}

	class QCanBusFactoryV2 extends QCanBusFactory {
		___pointer: number;
		QCanBusFactoryV2_PTR():QCanBusFactoryV2;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQCanBusFactoryV2():void;
		ConnectAvailableDevices(f:(errorMessage:string)=>QCanBusDeviceInfo[]):void;
		DisconnectAvailableDevices():void;
		AvailableDevices(errorMessage:string):QCanBusDeviceInfo[];
		ConnectCreateDevice(f:(interfaceName:string,errorMessage:string)=>QCanBusDevice):void;
		DisconnectCreateDevice():void;
		CreateDevice(interfaceName:string,errorMessage:string):QCanBusDevice;
	}
	function NewQCanBusFactoryV2FromPointer(ptr:number):QCanBusFactoryV2;
	interface QCanBusFrame_ITF {
		QCanBusFrame_PTR():QCanBusFrame;
	}

	class QCanBusFrame {
		___pointer: number;
		QCanBusFrame_PTR():QCanBusFrame;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQCanBusFrame():void;
		Error():number;
		FrameId():number;
		FrameType():number;
		HasBitrateSwitch():boolean;
		HasErrorStateIndicator():boolean;
		HasExtendedFrameFormat():boolean;
		HasFlexibleDataRateFormat():boolean;
		HasLocalEcho():boolean;
		IsValid():boolean;
		Payload():core.QByteArray;
		SetBitrateSwitch(bitrateSwitch:boolean):void;
		SetError(error:number):void;
		SetErrorStateIndicator(errorStateIndicator:boolean):void;
		SetExtendedFrameFormat(isExtended:boolean):void;
		SetFlexibleDataRateFormat(isFlexibleData:boolean):void;
		SetFrameId(newFrameId:number):void;
		SetFrameType(newType:number):void;
		SetLocalEcho(echo:boolean):void;
		SetPayload(data:core.QByteArray_ITF):void;
		ToString():string;
	}
	function NewQCanBusFrameFromPointer(ptr:number):QCanBusFrame;
	function NewQCanBusFrame(ty:number):QCanBusFrame;
	function NewQCanBusFrame2(identifier:number,data:core.QByteArray_ITF):QCanBusFrame;
	const QCanBusFrame__UnknownFrame: number;
	const QCanBusFrame__DataFrame: number;
	const QCanBusFrame__ErrorFrame: number;
	const QCanBusFrame__RemoteRequestFrame: number;
	const QCanBusFrame__InvalidFrame: number;
	const QCanBusFrame__NoError: number;
	const QCanBusFrame__TransmissionTimeoutError: number;
	const QCanBusFrame__LostArbitrationError: number;
	const QCanBusFrame__ControllerError: number;
	const QCanBusFrame__ProtocolViolationError: number;
	const QCanBusFrame__TransceiverError: number;
	const QCanBusFrame__MissingAcknowledgmentError: number;
	const QCanBusFrame__BusOffError: number;
	const QCanBusFrame__BusError: number;
	const QCanBusFrame__ControllerRestartError: number;
	const QCanBusFrame__UnknownError: number;
	const QCanBusFrame__AnyError: number;
	interface QModbusClient_ITF extends QModbusDevice_ITF {
		QModbusClient_PTR():QModbusClient;
	}

	class QModbusClient extends QModbusDevice {
		___pointer: number;
		QModbusClient_PTR():QModbusClient;
		Pointer():number;
		SetPointer(p:number):void;
		NumberOfRetries():number;
		ConnectProcessPrivateResponse(f:(response:QModbusResponse,data:QModbusDataUnit)=>boolean):void;
		DisconnectProcessPrivateResponse():void;
		ProcessPrivateResponse(response:QModbusResponse_ITF,data:QModbusDataUnit_ITF):boolean;
		ProcessPrivateResponseDefault(response:QModbusResponse_ITF,data:QModbusDataUnit_ITF):boolean;
		ConnectProcessResponse(f:(response:QModbusResponse,data:QModbusDataUnit)=>boolean):void;
		DisconnectProcessResponse():void;
		ProcessResponse(response:QModbusResponse_ITF,data:QModbusDataUnit_ITF):boolean;
		ProcessResponseDefault(response:QModbusResponse_ITF,data:QModbusDataUnit_ITF):boolean;
		SendRawRequest(request:QModbusRequest_ITF,serverAddress:number):QModbusReply;
		SendReadRequest(read:QModbusDataUnit_ITF,serverAddress:number):QModbusReply;
		SendReadWriteRequest(read:QModbusDataUnit_ITF,write:QModbusDataUnit_ITF,serverAddress:number):QModbusReply;
		SendWriteRequest(write:QModbusDataUnit_ITF,serverAddress:number):QModbusReply;
		SetNumberOfRetries(number:number):void;
		SetTimeout(newTimeout:number):void;
		Timeout():number;
		ConnectTimeoutChanged(f:(newTimeout:number)=>void):void;
		DisconnectTimeoutChanged():void;
		TimeoutChanged(newTimeout:number):void;
		Close():void;
		CloseDefault():void;
		Open():boolean;
		OpenDefault():boolean;
	}
	function NewQModbusClientFromPointer(ptr:number):QModbusClient;
	function NewQModbusClient(parent:core.QObject_ITF):QModbusClient;
	interface QModbusDataUnit_ITF {
		QModbusDataUnit_PTR():QModbusDataUnit;
	}

	class QModbusDataUnit {
		___pointer: number;
		QModbusDataUnit_PTR():QModbusDataUnit;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQModbusDataUnit():void;
		IsValid():boolean;
		RegisterType():number;
		SetRegisterType(ty:number):void;
		SetStartAddress(address:number):void;
		SetValue(index:number,value:number):void;
		SetValueCount(newCount:number):void;
		SetValues(values:number[]):void;
		StartAddress():number;
		Value(index:number):number;
		ValueCount():number;
		Values():number[];
	}
	function NewQModbusDataUnitFromPointer(ptr:number):QModbusDataUnit;
	function NewQModbusDataUnit():QModbusDataUnit;
	function NewQModbusDataUnit2(ty:number):QModbusDataUnit;
	function NewQModbusDataUnit3(ty:number,address:number,size:number):QModbusDataUnit;
	function NewQModbusDataUnit4(ty:number,address:number,data:number[]):QModbusDataUnit;
	const QModbusDataUnit__Invalid: number;
	const QModbusDataUnit__DiscreteInputs: number;
	const QModbusDataUnit__Coils: number;
	const QModbusDataUnit__InputRegisters: number;
	const QModbusDataUnit__HoldingRegisters: number;
	interface QModbusDevice_ITF extends core.QObject_ITF {
		QModbusDevice_PTR():QModbusDevice;
	}

	class QModbusDevice extends core.QObject {
		___pointer: number;
		QModbusDevice_PTR():QModbusDevice;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		ConnectDevice():boolean;
		ConnectionParameter(parameter:number):core.QVariant;
		DisconnectDevice():void;
		Error():number;
		ConnectErrorOccurred(f:(error:number)=>void):void;
		DisconnectErrorOccurred():void;
		ErrorOccurred(error:number):void;
		ErrorString():string;
		ConnectOpen(f:()=>boolean):void;
		DisconnectOpen():void;
		Open():boolean;
		SetConnectionParameter(parameter:number,value:core.QVariant_ITF):void;
		SetError(errorText:string,error:number):void;
		SetState(newState:number):void;
		State():number;
		ConnectStateChanged(f:(state:number)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(state:number):void;
		ConnectDestroyQModbusDevice(f:()=>void):void;
		DisconnectDestroyQModbusDevice():void;
		DestroyQModbusDevice():void;
		DestroyQModbusDeviceDefault():void;
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
	function NewQModbusDeviceFromPointer(ptr:number):QModbusDevice;
	function NewQModbusDevice(parent:core.QObject_ITF):QModbusDevice;
	const QModbusDevice__NoError: number;
	const QModbusDevice__ReadError: number;
	const QModbusDevice__WriteError: number;
	const QModbusDevice__ConnectionError: number;
	const QModbusDevice__ConfigurationError: number;
	const QModbusDevice__TimeoutError: number;
	const QModbusDevice__ProtocolError: number;
	const QModbusDevice__ReplyAbortedError: number;
	const QModbusDevice__UnknownError: number;
	const QModbusDevice__UnconnectedState: number;
	const QModbusDevice__ConnectingState: number;
	const QModbusDevice__ConnectedState: number;
	const QModbusDevice__ClosingState: number;
	const QModbusDevice__SerialPortNameParameter: number;
	const QModbusDevice__SerialParityParameter: number;
	const QModbusDevice__SerialBaudRateParameter: number;
	const QModbusDevice__SerialDataBitsParameter: number;
	const QModbusDevice__SerialStopBitsParameter: number;
	const QModbusDevice__NetworkPortParameter: number;
	const QModbusDevice__NetworkAddressParameter: number;
	const QModbusDevice__UserParameter: number;
	interface QModbusDeviceIdentification_ITF {
		QModbusDeviceIdentification_PTR():QModbusDeviceIdentification;
	}

	class QModbusDeviceIdentification {
		___pointer: number;
		QModbusDeviceIdentification_PTR():QModbusDeviceIdentification;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQModbusDeviceIdentification():void;
		ConformityLevel():number;
		Contains(objectId:number):boolean;
		FromByteArray(ba:core.QByteArray_ITF):QModbusDeviceIdentification;
		Insert(objectId:number,value:core.QByteArray_ITF):boolean;
		IsValid():boolean;
		ObjectIds():number[];
		Remove(objectId:number):void;
		SetConformityLevel(level:number):void;
		Value(objectId:number):core.QByteArray;
	}
	function NewQModbusDeviceIdentificationFromPointer(ptr:number):QModbusDeviceIdentification;
	function NewQModbusDeviceIdentification():QModbusDeviceIdentification;
	function QModbusDeviceIdentification_FromByteArray(ba:core.QByteArray_ITF):QModbusDeviceIdentification;
	const QModbusDeviceIdentification__VendorNameObjectId: number;
	const QModbusDeviceIdentification__ProductCodeObjectId: number;
	const QModbusDeviceIdentification__MajorMinorRevisionObjectId: number;
	const QModbusDeviceIdentification__VendorUrlObjectId: number;
	const QModbusDeviceIdentification__ProductNameObjectId: number;
	const QModbusDeviceIdentification__ModelNameObjectId: number;
	const QModbusDeviceIdentification__UserApplicationNameObjectId: number;
	const QModbusDeviceIdentification__ReservedObjectId: number;
	const QModbusDeviceIdentification__ProductDependentObjectId: number;
	const QModbusDeviceIdentification__UndefinedObjectId: number;
	const QModbusDeviceIdentification__BasicReadDeviceIdCode: number;
	const QModbusDeviceIdentification__RegularReadDeviceIdCode: number;
	const QModbusDeviceIdentification__ExtendedReadDeviceIdCode: number;
	const QModbusDeviceIdentification__IndividualReadDeviceIdCode: number;
	const QModbusDeviceIdentification__BasicConformityLevel: number;
	const QModbusDeviceIdentification__RegularConformityLevel: number;
	const QModbusDeviceIdentification__ExtendedConformityLevel: number;
	const QModbusDeviceIdentification__BasicIndividualConformityLevel: number;
	const QModbusDeviceIdentification__RegularIndividualConformityLevel: number;
	const QModbusDeviceIdentification__ExtendedIndividualConformityLevel: number;
	interface QModbusExceptionResponse_ITF extends QModbusResponse_ITF {
		QModbusExceptionResponse_PTR():QModbusExceptionResponse;
	}

	class QModbusExceptionResponse extends QModbusResponse {
		___pointer: number;
		QModbusExceptionResponse_PTR():QModbusExceptionResponse;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQModbusExceptionResponse():void;
		SetExceptionCode(ec:number):void;
	}
	function NewQModbusExceptionResponseFromPointer(ptr:number):QModbusExceptionResponse;
	function NewQModbusExceptionResponse():QModbusExceptionResponse;
	function NewQModbusExceptionResponse2(pdu:QModbusPdu_ITF):QModbusExceptionResponse;
	function NewQModbusExceptionResponse3(code:number,ec:number):QModbusExceptionResponse;
	interface QModbusPdu_ITF {
		QModbusPdu_PTR():QModbusPdu;
	}

	class QModbusPdu {
		___pointer: number;
		QModbusPdu_PTR():QModbusPdu;
		Pointer():number;
		SetPointer(p:number):void;
		Data():core.QByteArray;
		DataSize():number;
		ExceptionCode():number;
		FunctionCode():number;
		IsException():boolean;
		IsValid():boolean;
		SetData(data:core.QByteArray_ITF):void;
		ConnectSetFunctionCode(f:(code:number)=>void):void;
		DisconnectSetFunctionCode():void;
		SetFunctionCode(code:number):void;
		SetFunctionCodeDefault(code:number):void;
		Size():number;
		ConnectDestroyQModbusPdu(f:()=>void):void;
		DisconnectDestroyQModbusPdu():void;
		DestroyQModbusPdu():void;
		DestroyQModbusPduDefault():void;
		ExceptionByte():string;
	}
	function NewQModbusPduFromPointer(ptr:number):QModbusPdu;
	function NewQModbusPdu():QModbusPdu;
	function NewQModbusPdu2(code:number,data:core.QByteArray_ITF):QModbusPdu;
	function NewQModbusPdu3(other:QModbusPdu_ITF):QModbusPdu;
	function QModbusPdu_ExceptionByte():string;
	const QModbusPdu__IllegalFunction: number;
	const QModbusPdu__IllegalDataAddress: number;
	const QModbusPdu__IllegalDataValue: number;
	const QModbusPdu__ServerDeviceFailure: number;
	const QModbusPdu__Acknowledge: number;
	const QModbusPdu__ServerDeviceBusy: number;
	const QModbusPdu__NegativeAcknowledge: number;
	const QModbusPdu__MemoryParityError: number;
	const QModbusPdu__GatewayPathUnavailable: number;
	const QModbusPdu__GatewayTargetDeviceFailedToRespond: number;
	const QModbusPdu__ExtendedException: number;
	const QModbusPdu__Invalid: number;
	const QModbusPdu__ReadCoils: number;
	const QModbusPdu__ReadDiscreteInputs: number;
	const QModbusPdu__ReadHoldingRegisters: number;
	const QModbusPdu__ReadInputRegisters: number;
	const QModbusPdu__WriteSingleCoil: number;
	const QModbusPdu__WriteSingleRegister: number;
	const QModbusPdu__ReadExceptionStatus: number;
	const QModbusPdu__Diagnostics: number;
	const QModbusPdu__GetCommEventCounter: number;
	const QModbusPdu__GetCommEventLog: number;
	const QModbusPdu__WriteMultipleCoils: number;
	const QModbusPdu__WriteMultipleRegisters: number;
	const QModbusPdu__ReportServerId: number;
	const QModbusPdu__ReadFileRecord: number;
	const QModbusPdu__WriteFileRecord: number;
	const QModbusPdu__MaskWriteRegister: number;
	const QModbusPdu__ReadWriteMultipleRegisters: number;
	const QModbusPdu__ReadFifoQueue: number;
	const QModbusPdu__EncapsulatedInterfaceTransport: number;
	const QModbusPdu__UndefinedFunctionCode: number;
	interface QModbusReply_ITF extends core.QObject_ITF {
		QModbusReply_PTR():QModbusReply;
	}

	class QModbusReply extends core.QObject {
		___pointer: number;
		QModbusReply_PTR():QModbusReply;
		Pointer():number;
		SetPointer(p:number):void;
		Error():number;
		ConnectErrorOccurred(f:(error:number)=>void):void;
		DisconnectErrorOccurred():void;
		ErrorOccurred(error:number):void;
		ErrorString():string;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		IsFinished():boolean;
		RawResult():QModbusResponse;
		Result():QModbusDataUnit;
		ServerAddress():number;
		Type():number;
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
	function NewQModbusReplyFromPointer(ptr:number):QModbusReply;
	function NewQModbusReply(ty:number,serverAddress:number,parent:core.QObject_ITF):QModbusReply;
	const QModbusReply__Raw: number;
	const QModbusReply__Common: number;
	const QModbusReply__Broadcast: number;
	interface QModbusRequest_ITF extends QModbusPdu_ITF {
		QModbusRequest_PTR():QModbusRequest;
	}

	class QModbusRequest extends QModbusPdu {
		___pointer: number;
		QModbusRequest_PTR():QModbusRequest;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQModbusRequest():void;
		CalculateDataSize(request:QModbusRequest_ITF):number;
		MinimumDataSize(request:QModbusRequest_ITF):number;
	}
	function NewQModbusRequestFromPointer(ptr:number):QModbusRequest;
	function NewQModbusRequest():QModbusRequest;
	function NewQModbusRequest2(pdu:QModbusPdu_ITF):QModbusRequest;
	function NewQModbusRequest3(code:number,data:core.QByteArray_ITF):QModbusRequest;
	function QModbusRequest_CalculateDataSize(request:QModbusRequest_ITF):number;
	function QModbusRequest_MinimumDataSize(request:QModbusRequest_ITF):number;
	interface QModbusResponse_ITF extends QModbusPdu_ITF {
		QModbusResponse_PTR():QModbusResponse;
	}

	class QModbusResponse extends QModbusPdu {
		___pointer: number;
		QModbusResponse_PTR():QModbusResponse;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQModbusResponse():void;
		CalculateDataSize(response:QModbusResponse_ITF):number;
		MinimumDataSize(response:QModbusResponse_ITF):number;
	}
	function NewQModbusResponseFromPointer(ptr:number):QModbusResponse;
	function NewQModbusResponse():QModbusResponse;
	function NewQModbusResponse2(pdu:QModbusPdu_ITF):QModbusResponse;
	function NewQModbusResponse3(code:number,data:core.QByteArray_ITF):QModbusResponse;
	function QModbusResponse_CalculateDataSize(response:QModbusResponse_ITF):number;
	function QModbusResponse_MinimumDataSize(response:QModbusResponse_ITF):number;
	interface QModbusRtuSerialMaster_ITF extends QModbusClient_ITF {
		QModbusRtuSerialMaster_PTR():QModbusRtuSerialMaster;
	}

	class QModbusRtuSerialMaster extends QModbusClient {
		___pointer: number;
		QModbusRtuSerialMaster_PTR():QModbusRtuSerialMaster;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		CloseDefault():void;
		InterFrameDelay():number;
		ConnectOpen(f:()=>boolean):void;
		DisconnectOpen():void;
		Open():boolean;
		OpenDefault():boolean;
		SetInterFrameDelay(microseconds:number):void;
		SetTurnaroundDelay(turnaroundDelay:number):void;
		TurnaroundDelay():number;
	}
	function NewQModbusRtuSerialMasterFromPointer(ptr:number):QModbusRtuSerialMaster;
	function NewQModbusRtuSerialMaster(parent:core.QObject_ITF):QModbusRtuSerialMaster;
	interface QModbusRtuSerialSlave_ITF extends QModbusServer_ITF {
		QModbusRtuSerialSlave_PTR():QModbusRtuSerialSlave;
	}

	class QModbusRtuSerialSlave extends QModbusServer {
		___pointer: number;
		QModbusRtuSerialSlave_PTR():QModbusRtuSerialSlave;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		CloseDefault():void;
		ConnectOpen(f:()=>boolean):void;
		DisconnectOpen():void;
		Open():boolean;
		OpenDefault():boolean;
		ConnectDestroyQModbusRtuSerialSlave(f:()=>void):void;
		DisconnectDestroyQModbusRtuSerialSlave():void;
		DestroyQModbusRtuSerialSlave():void;
		DestroyQModbusRtuSerialSlaveDefault():void;
	}
	function NewQModbusRtuSerialSlaveFromPointer(ptr:number):QModbusRtuSerialSlave;
	function NewQModbusRtuSerialSlave(parent:core.QObject_ITF):QModbusRtuSerialSlave;
	interface QModbusServer_ITF extends QModbusDevice_ITF {
		QModbusServer_PTR():QModbusServer;
	}

	class QModbusServer extends QModbusDevice {
		___pointer: number;
		QModbusServer_PTR():QModbusServer;
		Pointer():number;
		SetPointer(p:number):void;
		Data(newData:QModbusDataUnit_ITF):boolean;
		Data2(table:number,address:number,data:number):boolean;
		ConnectDataWritten(f:(table:number,address:number,size:number)=>void):void;
		DisconnectDataWritten():void;
		DataWritten(table:number,address:number,size:number):void;
		ConnectProcessPrivateRequest(f:(request:QModbusPdu)=>QModbusResponse):void;
		DisconnectProcessPrivateRequest():void;
		ProcessPrivateRequest(request:QModbusPdu_ITF):QModbusResponse;
		ProcessPrivateRequestDefault(request:QModbusPdu_ITF):QModbusResponse;
		ConnectProcessRequest(f:(request:QModbusPdu)=>QModbusResponse):void;
		DisconnectProcessRequest():void;
		ProcessRequest(request:QModbusPdu_ITF):QModbusResponse;
		ProcessRequestDefault(request:QModbusPdu_ITF):QModbusResponse;
		ConnectProcessesBroadcast(f:()=>boolean):void;
		DisconnectProcessesBroadcast():void;
		ProcessesBroadcast():boolean;
		ProcessesBroadcastDefault():boolean;
		ConnectReadData(f:(newData:QModbusDataUnit)=>boolean):void;
		DisconnectReadData():void;
		ReadData(newData:QModbusDataUnit_ITF):boolean;
		ReadDataDefault(newData:QModbusDataUnit_ITF):boolean;
		ServerAddress():number;
		SetData(newData:QModbusDataUnit_ITF):boolean;
		SetData2(table:number,address:number,data:number):boolean;
		SetServerAddress(serverAddress:number):void;
		ConnectSetValue(f:(option:number,newValue:core.QVariant)=>boolean):void;
		DisconnectSetValue():void;
		SetValue(option:number,newValue:core.QVariant_ITF):boolean;
		SetValueDefault(option:number,newValue:core.QVariant_ITF):boolean;
		ConnectValue(f:(option:number)=>core.QVariant):void;
		DisconnectValue():void;
		Value(option:number):core.QVariant;
		ValueDefault(option:number):core.QVariant;
		ConnectWriteData(f:(newData:QModbusDataUnit)=>boolean):void;
		DisconnectWriteData():void;
		WriteData(newData:QModbusDataUnit_ITF):boolean;
		WriteDataDefault(newData:QModbusDataUnit_ITF):boolean;
		Close():void;
		CloseDefault():void;
		Open():boolean;
		OpenDefault():boolean;
	}
	function NewQModbusServerFromPointer(ptr:number):QModbusServer;
	function NewQModbusServer(parent:core.QObject_ITF):QModbusServer;
	const QModbusServer__DiagnosticRegister: number;
	const QModbusServer__ExceptionStatusOffset: number;
	const QModbusServer__DeviceBusy: number;
	const QModbusServer__AsciiInputDelimiter: number;
	const QModbusServer__ListenOnlyMode: number;
	const QModbusServer__ServerIdentifier: number;
	const QModbusServer__RunIndicatorStatus: number;
	const QModbusServer__AdditionalData: number;
	const QModbusServer__DeviceIdentification: number;
	const QModbusServer__UserOption: number;
	interface QModbusTcpClient_ITF extends QModbusClient_ITF {
		QModbusTcpClient_PTR():QModbusTcpClient;
	}

	class QModbusTcpClient extends QModbusClient {
		___pointer: number;
		QModbusTcpClient_PTR():QModbusTcpClient;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		CloseDefault():void;
		ConnectOpen(f:()=>boolean):void;
		DisconnectOpen():void;
		Open():boolean;
		OpenDefault():boolean;
		ConnectDestroyQModbusTcpClient(f:()=>void):void;
		DisconnectDestroyQModbusTcpClient():void;
		DestroyQModbusTcpClient():void;
		DestroyQModbusTcpClientDefault():void;
	}
	function NewQModbusTcpClientFromPointer(ptr:number):QModbusTcpClient;
	function NewQModbusTcpClient(parent:core.QObject_ITF):QModbusTcpClient;
	interface QModbusTcpConnectionObserver_ITF {
		QModbusTcpConnectionObserver_PTR():QModbusTcpConnectionObserver;
	}

	class QModbusTcpConnectionObserver {
		___pointer: number;
		QModbusTcpConnectionObserver_PTR():QModbusTcpConnectionObserver;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQModbusTcpConnectionObserver():void;
		ConnectAcceptNewConnection(f:(newClient:network.QTcpSocket)=>boolean):void;
		DisconnectAcceptNewConnection():void;
		AcceptNewConnection(newClient:network.QTcpSocket_ITF):boolean;
	}
	function NewQModbusTcpConnectionObserverFromPointer(ptr:number):QModbusTcpConnectionObserver;
	interface QModbusTcpServer_ITF extends QModbusServer_ITF {
		QModbusTcpServer_PTR():QModbusTcpServer;
	}

	class QModbusTcpServer extends QModbusServer {
		___pointer: number;
		QModbusTcpServer_PTR():QModbusTcpServer;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		CloseDefault():void;
		InstallConnectionObserver(observer:QModbusTcpConnectionObserver_ITF):void;
		ConnectModbusClientDisconnected(f:(modbusClient:network.QTcpSocket)=>void):void;
		DisconnectModbusClientDisconnected():void;
		ModbusClientDisconnected(modbusClient:network.QTcpSocket_ITF):void;
		ConnectOpen(f:()=>boolean):void;
		DisconnectOpen():void;
		Open():boolean;
		OpenDefault():boolean;
		ConnectDestroyQModbusTcpServer(f:()=>void):void;
		DisconnectDestroyQModbusTcpServer():void;
		DestroyQModbusTcpServer():void;
		DestroyQModbusTcpServerDefault():void;
	}
	function NewQModbusTcpServerFromPointer(ptr:number):QModbusTcpServer;
	function NewQModbusTcpServer(parent:core.QObject_ITF):QModbusTcpServer;
}