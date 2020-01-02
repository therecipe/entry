/// <reference path="core.d.ts" />
declare namespace positioning {
	interface QGeoAddress_ITF {
		QGeoAddress_PTR():QGeoAddress;
	}

	class QGeoAddress {
		___pointer: number;
		QGeoAddress_PTR():QGeoAddress;
		Pointer():number;
		SetPointer(p:number):void;
		City():string;
		Clear():void;
		Country():string;
		CountryCode():string;
		County():string;
		District():string;
		IsEmpty():boolean;
		IsTextGenerated():boolean;
		PostalCode():string;
		SetCity(city:string):void;
		SetCountry(country:string):void;
		SetCountryCode(countryCode:string):void;
		SetCounty(county:string):void;
		SetDistrict(district:string):void;
		SetPostalCode(postalCode:string):void;
		SetState(state:string):void;
		SetStreet(street:string):void;
		SetText(text:string):void;
		State():string;
		Street():string;
		Text():string;
		DestroyQGeoAddress():void;
	}
	function NewQGeoAddressFromPointer(ptr:number):QGeoAddress;
	function NewQGeoAddress():QGeoAddress;
	function NewQGeoAddress2(other:QGeoAddress_ITF):QGeoAddress;
	interface QGeoAreaMonitorInfo_ITF {
		QGeoAreaMonitorInfo_PTR():QGeoAreaMonitorInfo;
	}

	class QGeoAreaMonitorInfo {
		___pointer: number;
		QGeoAreaMonitorInfo_PTR():QGeoAreaMonitorInfo;
		Pointer():number;
		SetPointer(p:number):void;
		Area():QGeoShape;
		Expiration():core.QDateTime;
		Identifier():string;
		IsPersistent():boolean;
		IsValid():boolean;
		Name():string;
		NotificationParameters():Map<string,core.QVariant>;
		SetArea(newShape:QGeoShape_ITF):void;
		SetExpiration(expiry:core.QDateTime_ITF):void;
		SetName(name:string):void;
		SetNotificationParameters(parameters:Map<string,core.QVariant>):void;
		SetPersistent(isPersistent:boolean):void;
		DestroyQGeoAreaMonitorInfo():void;
	}
	function NewQGeoAreaMonitorInfoFromPointer(ptr:number):QGeoAreaMonitorInfo;
	function NewQGeoAreaMonitorInfo(name:string):QGeoAreaMonitorInfo;
	function NewQGeoAreaMonitorInfo2(other:QGeoAreaMonitorInfo_ITF):QGeoAreaMonitorInfo;
	interface QGeoAreaMonitorSource_ITF extends core.QObject_ITF {
		QGeoAreaMonitorSource_PTR():QGeoAreaMonitorSource;
	}

	class QGeoAreaMonitorSource extends core.QObject {
		___pointer: number;
		QGeoAreaMonitorSource_PTR():QGeoAreaMonitorSource;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActiveMonitors(f:()=>QGeoAreaMonitorInfo[]):void;
		DisconnectActiveMonitors():void;
		ActiveMonitors():QGeoAreaMonitorInfo[];
		ConnectActiveMonitors2(f:(lookupArea:QGeoShape)=>QGeoAreaMonitorInfo[]):void;
		DisconnectActiveMonitors2():void;
		ActiveMonitors2(lookupArea:QGeoShape_ITF):QGeoAreaMonitorInfo[];
		ConnectAreaEntered(f:(monitor:QGeoAreaMonitorInfo,update:QGeoPositionInfo)=>void):void;
		DisconnectAreaEntered():void;
		AreaEntered(monitor:QGeoAreaMonitorInfo_ITF,update:QGeoPositionInfo_ITF):void;
		ConnectAreaExited(f:(monitor:QGeoAreaMonitorInfo,update:QGeoPositionInfo)=>void):void;
		DisconnectAreaExited():void;
		AreaExited(monitor:QGeoAreaMonitorInfo_ITF,update:QGeoPositionInfo_ITF):void;
		AvailableSources():string[];
		CreateDefaultSource(parent:core.QObject_ITF):QGeoAreaMonitorSource;
		CreateSource(sourceName:string,parent:core.QObject_ITF):QGeoAreaMonitorSource;
		ConnectError(f:()=>number):void;
		DisconnectError():void;
		Error():number;
		ConnectError2(f:(areaMonitoringError:number)=>void):void;
		DisconnectError2():void;
		Error2(areaMonitoringError:number):void;
		ConnectMonitorExpired(f:(monitor:QGeoAreaMonitorInfo)=>void):void;
		DisconnectMonitorExpired():void;
		MonitorExpired(monitor:QGeoAreaMonitorInfo_ITF):void;
		ConnectPositionInfoSource(f:()=>QGeoPositionInfoSource):void;
		DisconnectPositionInfoSource():void;
		PositionInfoSource():QGeoPositionInfoSource;
		PositionInfoSourceDefault():QGeoPositionInfoSource;
		ConnectRequestUpdate(f:(monitor:QGeoAreaMonitorInfo,sign:string)=>boolean):void;
		DisconnectRequestUpdate():void;
		RequestUpdate(monitor:QGeoAreaMonitorInfo_ITF,sign:string):boolean;
		ConnectSetPositionInfoSource(f:(newSource:QGeoPositionInfoSource)=>void):void;
		DisconnectSetPositionInfoSource():void;
		SetPositionInfoSource(newSource:QGeoPositionInfoSource_ITF):void;
		SetPositionInfoSourceDefault(newSource:QGeoPositionInfoSource_ITF):void;
		SourceName():string;
		ConnectStartMonitoring(f:(monitor:QGeoAreaMonitorInfo)=>boolean):void;
		DisconnectStartMonitoring():void;
		StartMonitoring(monitor:QGeoAreaMonitorInfo_ITF):boolean;
		ConnectStopMonitoring(f:(monitor:QGeoAreaMonitorInfo)=>boolean):void;
		DisconnectStopMonitoring():void;
		StopMonitoring(monitor:QGeoAreaMonitorInfo_ITF):boolean;
		ConnectSupportedAreaMonitorFeatures(f:()=>number):void;
		DisconnectSupportedAreaMonitorFeatures():void;
		SupportedAreaMonitorFeatures():number;
		ConnectDestroyQGeoAreaMonitorSource(f:()=>void):void;
		DisconnectDestroyQGeoAreaMonitorSource():void;
		DestroyQGeoAreaMonitorSource():void;
		DestroyQGeoAreaMonitorSourceDefault():void;
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
	function NewQGeoAreaMonitorSourceFromPointer(ptr:number):QGeoAreaMonitorSource;
	function NewQGeoAreaMonitorSource(parent:core.QObject_ITF):QGeoAreaMonitorSource;
	function QGeoAreaMonitorSource_AvailableSources():string[];
	function QGeoAreaMonitorSource_CreateDefaultSource(parent:core.QObject_ITF):QGeoAreaMonitorSource;
	function QGeoAreaMonitorSource_CreateSource(sourceName:string,parent:core.QObject_ITF):QGeoAreaMonitorSource;
	const QGeoAreaMonitorSource__AccessError: number;
	const QGeoAreaMonitorSource__InsufficientPositionInfo: number;
	const QGeoAreaMonitorSource__UnknownSourceError: number;
	const QGeoAreaMonitorSource__NoError: number;
	const QGeoAreaMonitorSource__PersistentAreaMonitorFeature: number;
	const QGeoAreaMonitorSource__AnyAreaMonitorFeature: number;
	interface QGeoCircle_ITF extends QGeoShape_ITF {
		QGeoCircle_PTR():QGeoCircle;
	}

	class QGeoCircle extends QGeoShape {
		___pointer: number;
		QGeoCircle_PTR():QGeoCircle;
		Pointer():number;
		SetPointer(p:number):void;
		ExtendCircle(coordinate:QGeoCoordinate_ITF):void;
		Radius():number;
		SetCenter(center:QGeoCoordinate_ITF):void;
		SetRadius(radius:number):void;
		Translate(degreesLatitude:number,degreesLongitude:number):void;
		Translated(degreesLatitude:number,degreesLongitude:number):QGeoCircle;
		DestroyQGeoCircle():void;
	}
	function NewQGeoCircleFromPointer(ptr:number):QGeoCircle;
	function NewQGeoCircle():QGeoCircle;
	function NewQGeoCircle2(center:QGeoCoordinate_ITF,radius:number):QGeoCircle;
	function NewQGeoCircle3(other:QGeoCircle_ITF):QGeoCircle;
	function NewQGeoCircle4(other:QGeoShape_ITF):QGeoCircle;
	interface QGeoCoordinate_ITF {
		QGeoCoordinate_PTR():QGeoCoordinate;
	}

	class QGeoCoordinate {
		___pointer: number;
		QGeoCoordinate_PTR():QGeoCoordinate;
		Pointer():number;
		SetPointer(p:number):void;
		Altitude():number;
		AtDistanceAndAzimuth(distance:number,azimuth:number,distanceUp:number):QGeoCoordinate;
		AzimuthTo(other:QGeoCoordinate_ITF):number;
		DistanceTo(other:QGeoCoordinate_ITF):number;
		IsValid():boolean;
		Latitude():number;
		Longitude():number;
		SetAltitude(altitude:number):void;
		SetLatitude(latitude:number):void;
		SetLongitude(longitude:number):void;
		ToString(format:number):string;
		Type():number;
		DestroyQGeoCoordinate():void;
	}
	function NewQGeoCoordinateFromPointer(ptr:number):QGeoCoordinate;
	function NewQGeoCoordinate():QGeoCoordinate;
	function NewQGeoCoordinate2(latitude:number,longitude:number):QGeoCoordinate;
	function NewQGeoCoordinate3(latitude:number,longitude:number,altitude:number):QGeoCoordinate;
	function NewQGeoCoordinate4(other:QGeoCoordinate_ITF):QGeoCoordinate;
	const QGeoCoordinate__InvalidCoordinate: number;
	const QGeoCoordinate__Coordinate2D: number;
	const QGeoCoordinate__Coordinate3D: number;
	const QGeoCoordinate__Degrees: number;
	const QGeoCoordinate__DegreesWithHemisphere: number;
	const QGeoCoordinate__DegreesMinutes: number;
	const QGeoCoordinate__DegreesMinutesWithHemisphere: number;
	const QGeoCoordinate__DegreesMinutesSeconds: number;
	const QGeoCoordinate__DegreesMinutesSecondsWithHemisphere: number;
	interface QGeoPath_ITF extends QGeoShape_ITF {
		QGeoPath_PTR():QGeoPath;
	}

	class QGeoPath extends QGeoShape {
		___pointer: number;
		QGeoPath_PTR():QGeoPath;
		Pointer():number;
		SetPointer(p:number):void;
		AddCoordinate(coordinate:QGeoCoordinate_ITF):void;
		ClearPath():void;
		ContainsCoordinate(coordinate:QGeoCoordinate_ITF):boolean;
		CoordinateAt(index:number):QGeoCoordinate;
		InsertCoordinate(index:number,coordinate:QGeoCoordinate_ITF):void;
		Length(indexFrom:number,indexTo:number):number;
		Path():QGeoCoordinate[];
		RemoveCoordinate(coordinate:QGeoCoordinate_ITF):void;
		RemoveCoordinate2(index:number):void;
		ReplaceCoordinate(index:number,coordinate:QGeoCoordinate_ITF):void;
		SetPath(path:QGeoCoordinate[]):void;
		SetWidth(width:number):void;
		Size():number;
		Translate(degreesLatitude:number,degreesLongitude:number):void;
		Translated(degreesLatitude:number,degreesLongitude:number):QGeoPath;
		Width():number;
		DestroyQGeoPath():void;
	}
	function NewQGeoPathFromPointer(ptr:number):QGeoPath;
	function NewQGeoPath():QGeoPath;
	function NewQGeoPath2(path:QGeoCoordinate[],width:number):QGeoPath;
	function NewQGeoPath3(other:QGeoPath_ITF):QGeoPath;
	function NewQGeoPath4(other:QGeoShape_ITF):QGeoPath;
	interface QGeoPolygon_ITF extends QGeoShape_ITF {
		QGeoPolygon_PTR():QGeoPolygon;
	}

	class QGeoPolygon extends QGeoShape {
		___pointer: number;
		QGeoPolygon_PTR():QGeoPolygon;
		Pointer():number;
		SetPointer(p:number):void;
		AddCoordinate(coordinate:QGeoCoordinate_ITF):void;
		AddHole(holePath:core.QVariant_ITF):void;
		AddHole2(holePath:QGeoCoordinate[]):void;
		ContainsCoordinate(coordinate:QGeoCoordinate_ITF):boolean;
		CoordinateAt(index:number):QGeoCoordinate;
		Hole(index:number):core.QVariant[];
		HolePath(index:number):QGeoCoordinate[];
		HolesCount():number;
		InsertCoordinate(index:number,coordinate:QGeoCoordinate_ITF):void;
		Length(indexFrom:number,indexTo:number):number;
		Path():QGeoCoordinate[];
		Perimeter():core.QVariant[];
		RemoveCoordinate(coordinate:QGeoCoordinate_ITF):void;
		RemoveCoordinate2(index:number):void;
		RemoveHole(index:number):void;
		ReplaceCoordinate(index:number,coordinate:QGeoCoordinate_ITF):void;
		SetPath(path:QGeoCoordinate[]):void;
		SetPerimeter(path:core.QVariant[]):void;
		Size():number;
		Translate(degreesLatitude:number,degreesLongitude:number):void;
		Translated(degreesLatitude:number,degreesLongitude:number):QGeoPolygon;
		DestroyQGeoPolygon():void;
	}
	function NewQGeoPolygonFromPointer(ptr:number):QGeoPolygon;
	function NewQGeoPolygon():QGeoPolygon;
	function NewQGeoPolygon2(path:QGeoCoordinate[]):QGeoPolygon;
	function NewQGeoPolygon3(other:QGeoPolygon_ITF):QGeoPolygon;
	function NewQGeoPolygon4(other:QGeoShape_ITF):QGeoPolygon;
	interface QGeoPositionInfo_ITF {
		QGeoPositionInfo_PTR():QGeoPositionInfo;
	}

	class QGeoPositionInfo {
		___pointer: number;
		QGeoPositionInfo_PTR():QGeoPositionInfo;
		Pointer():number;
		SetPointer(p:number):void;
		Attribute(attribute:number):number;
		Coordinate():QGeoCoordinate;
		HasAttribute(attribute:number):boolean;
		IsValid():boolean;
		RemoveAttribute(attribute:number):void;
		SetAttribute(attribute:number,value:number):void;
		SetCoordinate(coordinate:QGeoCoordinate_ITF):void;
		SetTimestamp(timestamp:core.QDateTime_ITF):void;
		Timestamp():core.QDateTime;
		DestroyQGeoPositionInfo():void;
	}
	function NewQGeoPositionInfoFromPointer(ptr:number):QGeoPositionInfo;
	function NewQGeoPositionInfo():QGeoPositionInfo;
	function NewQGeoPositionInfo2(coordinate:QGeoCoordinate_ITF,timestamp:core.QDateTime_ITF):QGeoPositionInfo;
	function NewQGeoPositionInfo3(other:QGeoPositionInfo_ITF):QGeoPositionInfo;
	function NewQGeoPositionInfoSource(parent:core.QObject_ITF):QGeoPositionInfoSource;
	const QGeoPositionInfo__Direction: number;
	const QGeoPositionInfo__GroundSpeed: number;
	const QGeoPositionInfo__VerticalSpeed: number;
	const QGeoPositionInfo__MagneticVariation: number;
	const QGeoPositionInfo__HorizontalAccuracy: number;
	const QGeoPositionInfo__VerticalAccuracy: number;
	interface QGeoPositionInfoSource_ITF extends core.QObject_ITF {
		QGeoPositionInfoSource_PTR():QGeoPositionInfoSource;
	}

	class QGeoPositionInfoSource extends core.QObject {
		___pointer: number;
		QGeoPositionInfoSource_PTR():QGeoPositionInfoSource;
		Pointer():number;
		SetPointer(p:number):void;
		AvailableSources():string[];
		CreateDefaultSource(parent:core.QObject_ITF):QGeoPositionInfoSource;
		CreateSource(sourceName:string,parent:core.QObject_ITF):QGeoPositionInfoSource;
		ConnectError(f:()=>number):void;
		DisconnectError():void;
		Error():number;
		ConnectError2(f:(positioningError:number)=>void):void;
		DisconnectError2():void;
		Error2(positioningError:number):void;
		ConnectLastKnownPosition(f:(fromSatellitePositioningMethodsOnly:boolean)=>QGeoPositionInfo):void;
		DisconnectLastKnownPosition():void;
		LastKnownPosition(fromSatellitePositioningMethodsOnly:boolean):QGeoPositionInfo;
		ConnectMinimumUpdateInterval(f:()=>number):void;
		DisconnectMinimumUpdateInterval():void;
		MinimumUpdateInterval():number;
		ConnectPositionUpdated(f:(update:QGeoPositionInfo)=>void):void;
		DisconnectPositionUpdated():void;
		PositionUpdated(update:QGeoPositionInfo_ITF):void;
		PreferredPositioningMethods():number;
		ConnectRequestUpdate(f:(timeout:number)=>void):void;
		DisconnectRequestUpdate():void;
		RequestUpdate(timeout:number):void;
		ConnectSetPreferredPositioningMethods(f:(methods:number)=>void):void;
		DisconnectSetPreferredPositioningMethods():void;
		SetPreferredPositioningMethods(methods:number):void;
		SetPreferredPositioningMethodsDefault(methods:number):void;
		ConnectSetUpdateInterval(f:(msec:number)=>void):void;
		DisconnectSetUpdateInterval():void;
		SetUpdateInterval(msec:number):void;
		SetUpdateIntervalDefault(msec:number):void;
		SourceName():string;
		ConnectStartUpdates(f:()=>void):void;
		DisconnectStartUpdates():void;
		StartUpdates():void;
		ConnectStopUpdates(f:()=>void):void;
		DisconnectStopUpdates():void;
		StopUpdates():void;
		ConnectSupportedPositioningMethods(f:()=>number):void;
		DisconnectSupportedPositioningMethods():void;
		SupportedPositioningMethods():number;
		ConnectSupportedPositioningMethodsChanged(f:()=>void):void;
		DisconnectSupportedPositioningMethodsChanged():void;
		SupportedPositioningMethodsChanged():void;
		UpdateInterval():number;
		ConnectUpdateTimeout(f:()=>void):void;
		DisconnectUpdateTimeout():void;
		UpdateTimeout():void;
		ConnectDestroyQGeoPositionInfoSource(f:()=>void):void;
		DisconnectDestroyQGeoPositionInfoSource():void;
		DestroyQGeoPositionInfoSource():void;
		DestroyQGeoPositionInfoSourceDefault():void;
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
	function NewQGeoPositionInfoSourceFromPointer(ptr:number):QGeoPositionInfoSource;
	function NewQGeoPositionInfoSource(parent:core.QObject_ITF):QGeoPositionInfoSource;
	function QGeoPositionInfoSource_AvailableSources():string[];
	function QGeoPositionInfoSource_CreateDefaultSource(parent:core.QObject_ITF):QGeoPositionInfoSource;
	function QGeoPositionInfoSource_CreateSource(sourceName:string,parent:core.QObject_ITF):QGeoPositionInfoSource;
	const QGeoPositionInfoSource__AccessError: number;
	const QGeoPositionInfoSource__ClosedError: number;
	const QGeoPositionInfoSource__UnknownSourceError: number;
	const QGeoPositionInfoSource__NoError: number;
	const QGeoPositionInfoSource__NoPositioningMethods: number;
	const QGeoPositionInfoSource__SatellitePositioningMethods: number;
	const QGeoPositionInfoSource__NonSatellitePositioningMethods: number;
	const QGeoPositionInfoSource__AllPositioningMethods: number;
	interface QGeoPositionInfoSourceFactory_ITF {
		QGeoPositionInfoSourceFactory_PTR():QGeoPositionInfoSourceFactory;
	}

	class QGeoPositionInfoSourceFactory {
		___pointer: number;
		QGeoPositionInfoSourceFactory_PTR():QGeoPositionInfoSourceFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAreaMonitor(f:(parent:core.QObject)=>QGeoAreaMonitorSource):void;
		DisconnectAreaMonitor():void;
		AreaMonitor(parent:core.QObject_ITF):QGeoAreaMonitorSource;
		ConnectPositionInfoSource(f:(parent:core.QObject)=>QGeoPositionInfoSource):void;
		DisconnectPositionInfoSource():void;
		PositionInfoSource(parent:core.QObject_ITF):QGeoPositionInfoSource;
		ConnectSatelliteInfoSource(f:(parent:core.QObject)=>QGeoSatelliteInfoSource):void;
		DisconnectSatelliteInfoSource():void;
		SatelliteInfoSource(parent:core.QObject_ITF):QGeoSatelliteInfoSource;
		ConnectDestroyQGeoPositionInfoSourceFactory(f:()=>void):void;
		DisconnectDestroyQGeoPositionInfoSourceFactory():void;
		DestroyQGeoPositionInfoSourceFactory():void;
		DestroyQGeoPositionInfoSourceFactoryDefault():void;
	}
	function NewQGeoPositionInfoSourceFactoryFromPointer(ptr:number):QGeoPositionInfoSourceFactory;
	interface QGeoRectangle_ITF extends QGeoShape_ITF {
		QGeoRectangle_PTR():QGeoRectangle;
	}

	class QGeoRectangle extends QGeoShape {
		___pointer: number;
		QGeoRectangle_PTR():QGeoRectangle;
		Pointer():number;
		SetPointer(p:number):void;
		BottomLeft():QGeoCoordinate;
		BottomRight():QGeoCoordinate;
		Contains(rectangle:QGeoRectangle_ITF):boolean;
		ExtendRectangle(coordinate:QGeoCoordinate_ITF):void;
		Height():number;
		Intersects(rectangle:QGeoRectangle_ITF):boolean;
		SetBottomLeft(bottomLeft:QGeoCoordinate_ITF):void;
		SetBottomRight(bottomRight:QGeoCoordinate_ITF):void;
		SetCenter(center:QGeoCoordinate_ITF):void;
		SetHeight(degreesHeight:number):void;
		SetTopLeft(topLeft:QGeoCoordinate_ITF):void;
		SetTopRight(topRight:QGeoCoordinate_ITF):void;
		SetWidth(degreesWidth:number):void;
		TopLeft():QGeoCoordinate;
		TopRight():QGeoCoordinate;
		Translate(degreesLatitude:number,degreesLongitude:number):void;
		Translated(degreesLatitude:number,degreesLongitude:number):QGeoRectangle;
		United(rectangle:QGeoRectangle_ITF):QGeoRectangle;
		Width():number;
		DestroyQGeoRectangle():void;
	}
	function NewQGeoRectangleFromPointer(ptr:number):QGeoRectangle;
	function NewQGeoRectangle():QGeoRectangle;
	function NewQGeoRectangle2(center:QGeoCoordinate_ITF,degreesWidth:number,degreesHeight:number):QGeoRectangle;
	function NewQGeoRectangle3(topLeft:QGeoCoordinate_ITF,bottomRight:QGeoCoordinate_ITF):QGeoRectangle;
	function NewQGeoRectangle4(coordinates:QGeoCoordinate[]):QGeoRectangle;
	function NewQGeoRectangle5(other:QGeoRectangle_ITF):QGeoRectangle;
	function NewQGeoRectangle6(other:QGeoShape_ITF):QGeoRectangle;
	interface QGeoSatelliteInfo_ITF {
		QGeoSatelliteInfo_PTR():QGeoSatelliteInfo;
	}

	class QGeoSatelliteInfo {
		___pointer: number;
		QGeoSatelliteInfo_PTR():QGeoSatelliteInfo;
		Pointer():number;
		SetPointer(p:number):void;
		Attribute(attribute:number):number;
		HasAttribute(attribute:number):boolean;
		RemoveAttribute(attribute:number):void;
		SatelliteIdentifier():number;
		SatelliteSystem():number;
		SetAttribute(attribute:number,value:number):void;
		SetSatelliteIdentifier(satId:number):void;
		SetSatelliteSystem(system:number):void;
		SetSignalStrength(signalStrength:number):void;
		SignalStrength():number;
		DestroyQGeoSatelliteInfo():void;
	}
	function NewQGeoSatelliteInfoFromPointer(ptr:number):QGeoSatelliteInfo;
	function NewQGeoSatelliteInfo():QGeoSatelliteInfo;
	function NewQGeoSatelliteInfo2(other:QGeoSatelliteInfo_ITF):QGeoSatelliteInfo;
	function NewQGeoSatelliteInfoSource(parent:core.QObject_ITF):QGeoSatelliteInfoSource;
	const QGeoSatelliteInfo__Elevation: number;
	const QGeoSatelliteInfo__Azimuth: number;
	const QGeoSatelliteInfo__Undefined: number;
	const QGeoSatelliteInfo__GPS: number;
	const QGeoSatelliteInfo__GLONASS: number;
	interface QGeoSatelliteInfoSource_ITF extends core.QObject_ITF {
		QGeoSatelliteInfoSource_PTR():QGeoSatelliteInfoSource;
	}

	class QGeoSatelliteInfoSource extends core.QObject {
		___pointer: number;
		QGeoSatelliteInfoSource_PTR():QGeoSatelliteInfoSource;
		Pointer():number;
		SetPointer(p:number):void;
		AvailableSources():string[];
		CreateDefaultSource(parent:core.QObject_ITF):QGeoSatelliteInfoSource;
		CreateSource(sourceName:string,parent:core.QObject_ITF):QGeoSatelliteInfoSource;
		ConnectError(f:()=>number):void;
		DisconnectError():void;
		Error():number;
		ConnectError2(f:(satelliteError:number)=>void):void;
		DisconnectError2():void;
		Error2(satelliteError:number):void;
		ConnectMinimumUpdateInterval(f:()=>number):void;
		DisconnectMinimumUpdateInterval():void;
		MinimumUpdateInterval():number;
		ConnectRequestTimeout(f:()=>void):void;
		DisconnectRequestTimeout():void;
		RequestTimeout():void;
		ConnectRequestUpdate(f:(timeout:number)=>void):void;
		DisconnectRequestUpdate():void;
		RequestUpdate(timeout:number):void;
		ConnectSatellitesInUseUpdated(f:(satellites:QGeoSatelliteInfo[])=>void):void;
		DisconnectSatellitesInUseUpdated():void;
		SatellitesInUseUpdated(satellites:QGeoSatelliteInfo[]):void;
		ConnectSatellitesInViewUpdated(f:(satellites:QGeoSatelliteInfo[])=>void):void;
		DisconnectSatellitesInViewUpdated():void;
		SatellitesInViewUpdated(satellites:QGeoSatelliteInfo[]):void;
		ConnectSetUpdateInterval(f:(msec:number)=>void):void;
		DisconnectSetUpdateInterval():void;
		SetUpdateInterval(msec:number):void;
		SetUpdateIntervalDefault(msec:number):void;
		SourceName():string;
		ConnectStartUpdates(f:()=>void):void;
		DisconnectStartUpdates():void;
		StartUpdates():void;
		ConnectStopUpdates(f:()=>void):void;
		DisconnectStopUpdates():void;
		StopUpdates():void;
		UpdateInterval():number;
		ConnectDestroyQGeoSatelliteInfoSource(f:()=>void):void;
		DisconnectDestroyQGeoSatelliteInfoSource():void;
		DestroyQGeoSatelliteInfoSource():void;
		DestroyQGeoSatelliteInfoSourceDefault():void;
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
	function NewQGeoSatelliteInfoSourceFromPointer(ptr:number):QGeoSatelliteInfoSource;
	function NewQGeoSatelliteInfoSource(parent:core.QObject_ITF):QGeoSatelliteInfoSource;
	function QGeoSatelliteInfoSource_AvailableSources():string[];
	function QGeoSatelliteInfoSource_CreateDefaultSource(parent:core.QObject_ITF):QGeoSatelliteInfoSource;
	function QGeoSatelliteInfoSource_CreateSource(sourceName:string,parent:core.QObject_ITF):QGeoSatelliteInfoSource;
	const QGeoSatelliteInfoSource__AccessError: number;
	const QGeoSatelliteInfoSource__ClosedError: number;
	const QGeoSatelliteInfoSource__NoError: number;
	const QGeoSatelliteInfoSource__UnknownSourceError: number;
	interface QGeoShape_ITF {
		QGeoShape_PTR():QGeoShape;
	}

	class QGeoShape {
		___pointer: number;
		QGeoShape_PTR():QGeoShape;
		Pointer():number;
		SetPointer(p:number):void;
		BoundingGeoRectangle():QGeoRectangle;
		Center():QGeoCoordinate;
		Contains(coordinate:QGeoCoordinate_ITF):boolean;
		IsEmpty():boolean;
		IsValid():boolean;
		ToString():string;
		Type():number;
		DestroyQGeoShape():void;
	}
	function NewQGeoShapeFromPointer(ptr:number):QGeoShape;
	function NewQGeoShape():QGeoShape;
	function NewQGeoShape2(other:QGeoShape_ITF):QGeoShape;
	const QGeoShape__UnknownType: number;
	const QGeoShape__RectangleType: number;
	const QGeoShape__CircleType: number;
	const QGeoShape__PathType: number;
	const QGeoShape__PolygonType: number;
	interface QNmeaPositionInfoSource_ITF extends QGeoPositionInfoSource_ITF {
		QNmeaPositionInfoSource_PTR():QNmeaPositionInfoSource;
	}

	class QNmeaPositionInfoSource extends QGeoPositionInfoSource {
		___pointer: number;
		QNmeaPositionInfoSource_PTR():QNmeaPositionInfoSource;
		Pointer():number;
		SetPointer(p:number):void;
		Device():core.QIODevice;
		ConnectError(f:()=>number):void;
		DisconnectError():void;
		Error():number;
		ErrorDefault():number;
		ConnectLastKnownPosition(f:(fromSatellitePositioningMethodsOnly:boolean)=>QGeoPositionInfo):void;
		DisconnectLastKnownPosition():void;
		LastKnownPosition(fromSatellitePositioningMethodsOnly:boolean):QGeoPositionInfo;
		LastKnownPositionDefault(fromSatellitePositioningMethodsOnly:boolean):QGeoPositionInfo;
		ConnectMinimumUpdateInterval(f:()=>number):void;
		DisconnectMinimumUpdateInterval():void;
		MinimumUpdateInterval():number;
		MinimumUpdateIntervalDefault():number;
		ConnectParsePosInfoFromNmeaData(f:(data:string,size:number,posInfo:QGeoPositionInfo,hasFix:boolean)=>boolean):void;
		DisconnectParsePosInfoFromNmeaData():void;
		ParsePosInfoFromNmeaData(data:string,size:number,posInfo:QGeoPositionInfo_ITF,hasFix:boolean):boolean;
		ParsePosInfoFromNmeaDataDefault(data:string,size:number,posInfo:QGeoPositionInfo_ITF,hasFix:boolean):boolean;
		ConnectRequestUpdate(f:(msec:number)=>void):void;
		DisconnectRequestUpdate():void;
		RequestUpdate(msec:number):void;
		RequestUpdateDefault(msec:number):void;
		SetDevice(device:core.QIODevice_ITF):void;
		SetUserEquivalentRangeError(uere:number):void;
		ConnectStartUpdates(f:()=>void):void;
		DisconnectStartUpdates():void;
		StartUpdates():void;
		StartUpdatesDefault():void;
		ConnectStopUpdates(f:()=>void):void;
		DisconnectStopUpdates():void;
		StopUpdates():void;
		StopUpdatesDefault():void;
		ConnectSupportedPositioningMethods(f:()=>number):void;
		DisconnectSupportedPositioningMethods():void;
		SupportedPositioningMethods():number;
		SupportedPositioningMethodsDefault():number;
		UpdateMode():number;
		UserEquivalentRangeError():number;
		ConnectDestroyQNmeaPositionInfoSource(f:()=>void):void;
		DisconnectDestroyQNmeaPositionInfoSource():void;
		DestroyQNmeaPositionInfoSource():void;
		DestroyQNmeaPositionInfoSourceDefault():void;
	}
	function NewQNmeaPositionInfoSourceFromPointer(ptr:number):QNmeaPositionInfoSource;
	function NewQNmeaPositionInfoSource(updateMode:number,parent:core.QObject_ITF):QNmeaPositionInfoSource;
	const QNmeaPositionInfoSource__RealTimeMode: number;
	const QNmeaPositionInfoSource__SimulationMode: number;
}