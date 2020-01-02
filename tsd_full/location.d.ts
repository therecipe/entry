/// <reference path="core.d.ts" />
/// <reference path="positioning.d.ts" />
declare namespace location {
	const QGeoCodeReply__NoError: number;
	const QGeoCodeReply__EngineNotSetError: number;
	const QGeoCodeReply__CommunicationError: number;
	const QGeoCodeReply__ParseError: number;
	const QGeoCodeReply__UnsupportedOptionError: number;
	const QGeoCodeReply__CombinationError: number;
	const QGeoCodeReply__UnknownError: number;
	interface QGeoManeuver_ITF {
		QGeoManeuver_PTR():QGeoManeuver;
	}

	class QGeoManeuver {
		___pointer: number;
		QGeoManeuver_PTR():QGeoManeuver;
		Pointer():number;
		SetPointer(p:number):void;
		Direction():number;
		DistanceToNextInstruction():number;
		ExtendedAttributes():Map<string,core.QVariant>;
		InstructionText():string;
		IsValid():boolean;
		Position():positioning.QGeoCoordinate;
		SetDirection(direction:number):void;
		SetDistanceToNextInstruction(distance:number):void;
		SetExtendedAttributes(extendedAttributes:Map<string,core.QVariant>):void;
		SetInstructionText(instructionText:string):void;
		SetPosition(position:positioning.QGeoCoordinate_ITF):void;
		SetTimeToNextInstruction(secs:number):void;
		SetWaypoint(coordinate:positioning.QGeoCoordinate_ITF):void;
		TimeToNextInstruction():number;
		Waypoint():positioning.QGeoCoordinate;
		DestroyQGeoManeuver():void;
	}
	function NewQGeoManeuverFromPointer(ptr:number):QGeoManeuver;
	function NewQGeoManeuver():QGeoManeuver;
	function NewQGeoManeuver2(other:QGeoManeuver_ITF):QGeoManeuver;
	const QGeoManeuver__NoDirection: number;
	const QGeoManeuver__DirectionForward: number;
	const QGeoManeuver__DirectionBearRight: number;
	const QGeoManeuver__DirectionLightRight: number;
	const QGeoManeuver__DirectionRight: number;
	const QGeoManeuver__DirectionHardRight: number;
	const QGeoManeuver__DirectionUTurnRight: number;
	const QGeoManeuver__DirectionUTurnLeft: number;
	const QGeoManeuver__DirectionHardLeft: number;
	const QGeoManeuver__DirectionLeft: number;
	const QGeoManeuver__DirectionLightLeft: number;
	const QGeoManeuver__DirectionBearLeft: number;
	interface QGeoRoute_ITF {
		QGeoRoute_PTR():QGeoRoute;
	}

	class QGeoRoute {
		___pointer: number;
		QGeoRoute_PTR():QGeoRoute;
		Pointer():number;
		SetPointer(p:number):void;
		Bounds():positioning.QGeoRectangle;
		Distance():number;
		ExtendedAttributes():Map<string,core.QVariant>;
		FirstRouteSegment():QGeoRouteSegment;
		Path():positioning.QGeoCoordinate[];
		Request():QGeoRouteRequest;
		RouteId():string;
		RouteLegs():QGeoRouteLeg[];
		SetBounds(bounds:positioning.QGeoRectangle_ITF):void;
		SetDistance(distance:number):void;
		SetExtendedAttributes(extendedAttributes:Map<string,core.QVariant>):void;
		SetFirstRouteSegment(routeSegment:QGeoRouteSegment_ITF):void;
		SetPath(path:positioning.QGeoCoordinate[]):void;
		SetRequest(request:QGeoRouteRequest_ITF):void;
		SetRouteId(id:string):void;
		SetRouteLegs(legs:QGeoRouteLeg[]):void;
		SetTravelMode(mode:number):void;
		SetTravelTime(secs:number):void;
		TravelMode():number;
		TravelTime():number;
		DestroyQGeoRoute():void;
	}
	function NewQGeoRouteFromPointer(ptr:number):QGeoRoute;
	function NewQGeoRoute():QGeoRoute;
	function NewQGeoRoute2(other:QGeoRoute_ITF):QGeoRoute;
	function NewQGeoRouteLeg():QGeoRouteLeg;
	function NewQGeoRouteLeg2(other:QGeoRouteLeg_ITF):QGeoRouteLeg;
	function NewQGeoRouteReply(error:number,errorString:string,parent:core.QObject_ITF):QGeoRouteReply;
	function NewQGeoRouteReply2(request:QGeoRouteRequest_ITF,parent:core.QObject_ITF):QGeoRouteReply;
	function NewQGeoRouteRequest(waypoints:positioning.QGeoCoordinate[]):QGeoRouteRequest;
	function NewQGeoRouteRequest2(origi:positioning.QGeoCoordinate_ITF,destination:positioning.QGeoCoordinate_ITF):QGeoRouteRequest;
	function NewQGeoRouteRequest3(other:QGeoRouteRequest_ITF):QGeoRouteRequest;
	function NewQGeoRouteSegment():QGeoRouteSegment;
	function NewQGeoRouteSegment2(other:QGeoRouteSegment_ITF):QGeoRouteSegment;
	interface QGeoRouteLeg_ITF extends QGeoRoute_ITF {
		QGeoRouteLeg_PTR():QGeoRouteLeg;
	}

	class QGeoRouteLeg extends QGeoRoute {
		___pointer: number;
		QGeoRouteLeg_PTR():QGeoRouteLeg;
		Pointer():number;
		SetPointer(p:number):void;
		LegIndex():number;
		OverallRoute():QGeoRoute;
		SetLegIndex(idx:number):void;
		SetOverallRoute(route:QGeoRoute_ITF):void;
		DestroyQGeoRouteLeg():void;
	}
	function NewQGeoRouteLegFromPointer(ptr:number):QGeoRouteLeg;
	function NewQGeoRouteLeg():QGeoRouteLeg;
	function NewQGeoRouteLeg2(other:QGeoRouteLeg_ITF):QGeoRouteLeg;
	interface QGeoRouteReply_ITF extends core.QObject_ITF {
		QGeoRouteReply_PTR():QGeoRouteReply;
	}

	class QGeoRouteReply extends core.QObject {
		___pointer: number;
		QGeoRouteReply_PTR():QGeoRouteReply;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAbort(f:()=>void):void;
		DisconnectAbort():void;
		Abort():void;
		AbortDefault():void;
		ConnectAborted(f:()=>void):void;
		DisconnectAborted():void;
		Aborted():void;
		AddRoutes(routes:QGeoRoute[]):void;
		Error():number;
		ConnectError2(f:(error:number,errorString:string)=>void):void;
		DisconnectError2():void;
		Error2(error:number,errorString:string):void;
		ErrorString():string;
		ConnectFinished(f:()=>void):void;
		DisconnectFinished():void;
		Finished():void;
		IsFinished():boolean;
		Request():QGeoRouteRequest;
		Routes():QGeoRoute[];
		SetError(error:number,errorString:string):void;
		SetFinished(finished:boolean):void;
		SetRoutes(routes:QGeoRoute[]):void;
		ConnectDestroyQGeoRouteReply(f:()=>void):void;
		DisconnectDestroyQGeoRouteReply():void;
		DestroyQGeoRouteReply():void;
		DestroyQGeoRouteReplyDefault():void;
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
	function NewQGeoRouteReplyFromPointer(ptr:number):QGeoRouteReply;
	function NewQGeoRouteReply(error:number,errorString:string,parent:core.QObject_ITF):QGeoRouteReply;
	function NewQGeoRouteReply2(request:QGeoRouteRequest_ITF,parent:core.QObject_ITF):QGeoRouteReply;
	const QGeoRouteReply__NoError: number;
	const QGeoRouteReply__EngineNotSetError: number;
	const QGeoRouteReply__CommunicationError: number;
	const QGeoRouteReply__ParseError: number;
	const QGeoRouteReply__UnsupportedOptionError: number;
	const QGeoRouteReply__UnknownError: number;
	interface QGeoRouteRequest_ITF {
		QGeoRouteRequest_PTR():QGeoRouteRequest;
	}

	class QGeoRouteRequest {
		___pointer: number;
		QGeoRouteRequest_PTR():QGeoRouteRequest;
		Pointer():number;
		SetPointer(p:number):void;
		DepartureTime():core.QDateTime;
		ExcludeAreas():positioning.QGeoRectangle[];
		ExtraParameters():Map<string,core.QVariant>;
		FeatureWeight(featureType:number):number;
		ManeuverDetail():number;
		NumberAlternativeRoutes():number;
		RouteOptimization():number;
		SegmentDetail():number;
		SetDepartureTime(departureTime:core.QDateTime_ITF):void;
		SetExcludeAreas(areas:positioning.QGeoRectangle[]):void;
		SetExtraParameters(extraParameters:Map<string,core.QVariant>):void;
		SetFeatureWeight(featureType:number,featureWeight:number):void;
		SetManeuverDetail(maneuverDetail:number):void;
		SetNumberAlternativeRoutes(alternatives:number):void;
		SetRouteOptimization(optimization:number):void;
		SetSegmentDetail(segmentDetail:number):void;
		SetTravelModes(travelModes:number):void;
		SetWaypoints(waypoints:positioning.QGeoCoordinate[]):void;
		TravelModes():number;
		Waypoints():positioning.QGeoCoordinate[];
		DestroyQGeoRouteRequest():void;
	}
	function NewQGeoRouteRequestFromPointer(ptr:number):QGeoRouteRequest;
	function NewQGeoRouteRequest(waypoints:positioning.QGeoCoordinate[]):QGeoRouteRequest;
	function NewQGeoRouteRequest2(origi:positioning.QGeoCoordinate_ITF,destination:positioning.QGeoCoordinate_ITF):QGeoRouteRequest;
	function NewQGeoRouteRequest3(other:QGeoRouteRequest_ITF):QGeoRouteRequest;
	const QGeoRouteRequest__CarTravel: number;
	const QGeoRouteRequest__PedestrianTravel: number;
	const QGeoRouteRequest__BicycleTravel: number;
	const QGeoRouteRequest__PublicTransitTravel: number;
	const QGeoRouteRequest__TruckTravel: number;
	const QGeoRouteRequest__NoFeature: number;
	const QGeoRouteRequest__TollFeature: number;
	const QGeoRouteRequest__HighwayFeature: number;
	const QGeoRouteRequest__PublicTransitFeature: number;
	const QGeoRouteRequest__FerryFeature: number;
	const QGeoRouteRequest__TunnelFeature: number;
	const QGeoRouteRequest__DirtRoadFeature: number;
	const QGeoRouteRequest__ParksFeature: number;
	const QGeoRouteRequest__MotorPoolLaneFeature: number;
	const QGeoRouteRequest__TrafficFeature: number;
	const QGeoRouteRequest__NeutralFeatureWeight: number;
	const QGeoRouteRequest__PreferFeatureWeight: number;
	const QGeoRouteRequest__RequireFeatureWeight: number;
	const QGeoRouteRequest__AvoidFeatureWeight: number;
	const QGeoRouteRequest__DisallowFeatureWeight: number;
	const QGeoRouteRequest__ShortestRoute: number;
	const QGeoRouteRequest__FastestRoute: number;
	const QGeoRouteRequest__MostEconomicRoute: number;
	const QGeoRouteRequest__MostScenicRoute: number;
	const QGeoRouteRequest__NoSegmentData: number;
	const QGeoRouteRequest__BasicSegmentData: number;
	const QGeoRouteRequest__NoManeuvers: number;
	const QGeoRouteRequest__BasicManeuvers: number;
	interface QGeoRouteSegment_ITF {
		QGeoRouteSegment_PTR():QGeoRouteSegment;
	}

	class QGeoRouteSegment {
		___pointer: number;
		QGeoRouteSegment_PTR():QGeoRouteSegment;
		Pointer():number;
		SetPointer(p:number):void;
		Distance():number;
		IsLegLastSegment():boolean;
		IsValid():boolean;
		Maneuver():QGeoManeuver;
		NextRouteSegment():QGeoRouteSegment;
		Path():positioning.QGeoCoordinate[];
		SetDistance(distance:number):void;
		SetManeuver(maneuver:QGeoManeuver_ITF):void;
		SetNextRouteSegment(routeSegment:QGeoRouteSegment_ITF):void;
		SetPath(path:positioning.QGeoCoordinate[]):void;
		SetTravelTime(secs:number):void;
		TravelTime():number;
		DestroyQGeoRouteSegment():void;
	}
	function NewQGeoRouteSegmentFromPointer(ptr:number):QGeoRouteSegment;
	function NewQGeoRouteSegment():QGeoRouteSegment;
	function NewQGeoRouteSegment2(other:QGeoRouteSegment_ITF):QGeoRouteSegment;
	interface QGeoRoutingManager_ITF extends core.QObject_ITF {
		QGeoRoutingManager_PTR():QGeoRoutingManager;
	}

	class QGeoRoutingManager extends core.QObject {
		___pointer: number;
		QGeoRoutingManager_PTR():QGeoRoutingManager;
		Pointer():number;
		SetPointer(p:number):void;
		CalculateRoute(request:QGeoRouteRequest_ITF):QGeoRouteReply;
		ConnectError(f:(reply:QGeoRouteReply,error:number,errorString:string)=>void):void;
		DisconnectError():void;
		Error(reply:QGeoRouteReply_ITF,error:number,errorString:string):void;
		ConnectFinished(f:(reply:QGeoRouteReply)=>void):void;
		DisconnectFinished():void;
		Finished(reply:QGeoRouteReply_ITF):void;
		Locale():core.QLocale;
		ManagerName():string;
		ManagerVersion():number;
		MeasurementSystem():number;
		SetLocale(locale:core.QLocale_ITF):void;
		SetMeasurementSystem(system:number):void;
		SupportedFeatureTypes():number;
		SupportedFeatureWeights():number;
		SupportedManeuverDetails():number;
		SupportedRouteOptimizations():number;
		SupportedSegmentDetails():number;
		SupportedTravelModes():number;
		UpdateRoute(route:QGeoRoute_ITF,position:positioning.QGeoCoordinate_ITF):QGeoRouteReply;
		ConnectDestroyQGeoRoutingManager(f:()=>void):void;
		DisconnectDestroyQGeoRoutingManager():void;
		DestroyQGeoRoutingManager():void;
		DestroyQGeoRoutingManagerDefault():void;
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
	function NewQGeoRoutingManagerFromPointer(ptr:number):QGeoRoutingManager;
	function NewQGeoRoutingManagerEngine(parameters:Map<string,core.QVariant>,parent:core.QObject_ITF):QGeoRoutingManagerEngine;
	interface QGeoRoutingManagerEngine_ITF extends core.QObject_ITF {
		QGeoRoutingManagerEngine_PTR():QGeoRoutingManagerEngine;
	}

	class QGeoRoutingManagerEngine extends core.QObject {
		___pointer: number;
		QGeoRoutingManagerEngine_PTR():QGeoRoutingManagerEngine;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCalculateRoute(f:(request:QGeoRouteRequest)=>QGeoRouteReply):void;
		DisconnectCalculateRoute():void;
		CalculateRoute(request:QGeoRouteRequest_ITF):QGeoRouteReply;
		ConnectError(f:(reply:QGeoRouteReply,error:number,errorString:string)=>void):void;
		DisconnectError():void;
		Error(reply:QGeoRouteReply_ITF,error:number,errorString:string):void;
		ConnectFinished(f:(reply:QGeoRouteReply)=>void):void;
		DisconnectFinished():void;
		Finished(reply:QGeoRouteReply_ITF):void;
		Locale():core.QLocale;
		ManagerName():string;
		ManagerVersion():number;
		MeasurementSystem():number;
		SetLocale(locale:core.QLocale_ITF):void;
		SetMeasurementSystem(system:number):void;
		SetSupportedFeatureTypes(featureTypes:number):void;
		SetSupportedFeatureWeights(featureWeights:number):void;
		SetSupportedManeuverDetails(maneuverDetails:number):void;
		SetSupportedRouteOptimizations(optimizations:number):void;
		SetSupportedSegmentDetails(segmentDetails:number):void;
		SetSupportedTravelModes(travelModes:number):void;
		SupportedFeatureTypes():number;
		SupportedFeatureWeights():number;
		SupportedManeuverDetails():number;
		SupportedRouteOptimizations():number;
		SupportedSegmentDetails():number;
		SupportedTravelModes():number;
		ConnectUpdateRoute(f:(route:QGeoRoute,position:positioning.QGeoCoordinate)=>QGeoRouteReply):void;
		DisconnectUpdateRoute():void;
		UpdateRoute(route:QGeoRoute_ITF,position:positioning.QGeoCoordinate_ITF):QGeoRouteReply;
		UpdateRouteDefault(route:QGeoRoute_ITF,position:positioning.QGeoCoordinate_ITF):QGeoRouteReply;
		ConnectDestroyQGeoRoutingManagerEngine(f:()=>void):void;
		DisconnectDestroyQGeoRoutingManagerEngine():void;
		DestroyQGeoRoutingManagerEngine():void;
		DestroyQGeoRoutingManagerEngineDefault():void;
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
	function NewQGeoRoutingManagerEngineFromPointer(ptr:number):QGeoRoutingManagerEngine;
	function NewQGeoRoutingManagerEngine(parameters:Map<string,core.QVariant>,parent:core.QObject_ITF):QGeoRoutingManagerEngine;
	interface QGeoServiceProvider_ITF extends core.QObject_ITF {
		QGeoServiceProvider_PTR():QGeoServiceProvider;
	}

	class QGeoServiceProvider extends core.QObject {
		___pointer: number;
		QGeoServiceProvider_PTR():QGeoServiceProvider;
		Pointer():number;
		SetPointer(p:number):void;
		AvailableServiceProviders():string[];
		Error():number;
		ErrorString():string;
		GeocodingError():number;
		GeocodingErrorString():string;
		GeocodingFeatures():number;
		GeocodingManager():QGeoCodingManager;
		MappingError():number;
		MappingErrorString():string;
		MappingFeatures():number;
		NavigationError():number;
		NavigationErrorString():string;
		NavigationFeatures():number;
		PlaceManager():QPlaceManager;
		PlacesError():number;
		PlacesErrorString():string;
		PlacesFeatures():number;
		RoutingError():number;
		RoutingErrorString():string;
		RoutingFeatures():number;
		RoutingManager():QGeoRoutingManager;
		SetAllowExperimental(allow:boolean):void;
		SetLocale(locale:core.QLocale_ITF):void;
		SetParameters(parameters:Map<string,core.QVariant>):void;
		ConnectDestroyQGeoServiceProvider(f:()=>void):void;
		DisconnectDestroyQGeoServiceProvider():void;
		DestroyQGeoServiceProvider():void;
		DestroyQGeoServiceProviderDefault():void;
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
	function NewQGeoServiceProviderFromPointer(ptr:number):QGeoServiceProvider;
	function NewQGeoServiceProvider(providerName:string,parameters:Map<string,core.QVariant>,allowExperimental:boolean):QGeoServiceProvider;
	function QGeoServiceProvider_AvailableServiceProviders():string[];
	const QGeoServiceProvider__NoError: number;
	const QGeoServiceProvider__NotSupportedError: number;
	const QGeoServiceProvider__UnknownParameterError: number;
	const QGeoServiceProvider__MissingRequiredParameterError: number;
	const QGeoServiceProvider__ConnectionError: number;
	const QGeoServiceProvider__LoaderError: number;
	const QGeoServiceProvider__NoRoutingFeatures: number;
	const QGeoServiceProvider__OnlineRoutingFeature: number;
	const QGeoServiceProvider__OfflineRoutingFeature: number;
	const QGeoServiceProvider__LocalizedRoutingFeature: number;
	const QGeoServiceProvider__RouteUpdatesFeature: number;
	const QGeoServiceProvider__AlternativeRoutesFeature: number;
	const QGeoServiceProvider__ExcludeAreasRoutingFeature: number;
	const QGeoServiceProvider__AnyRoutingFeatures: number;
	const QGeoServiceProvider__NoGeocodingFeatures: number;
	const QGeoServiceProvider__OnlineGeocodingFeature: number;
	const QGeoServiceProvider__OfflineGeocodingFeature: number;
	const QGeoServiceProvider__ReverseGeocodingFeature: number;
	const QGeoServiceProvider__LocalizedGeocodingFeature: number;
	const QGeoServiceProvider__AnyGeocodingFeatures: number;
	const QGeoServiceProvider__NoMappingFeatures: number;
	const QGeoServiceProvider__OnlineMappingFeature: number;
	const QGeoServiceProvider__OfflineMappingFeature: number;
	const QGeoServiceProvider__LocalizedMappingFeature: number;
	const QGeoServiceProvider__AnyMappingFeatures: number;
	const QGeoServiceProvider__NoPlacesFeatures: number;
	const QGeoServiceProvider__OnlinePlacesFeature: number;
	const QGeoServiceProvider__OfflinePlacesFeature: number;
	const QGeoServiceProvider__SavePlaceFeature: number;
	const QGeoServiceProvider__RemovePlaceFeature: number;
	const QGeoServiceProvider__SaveCategoryFeature: number;
	const QGeoServiceProvider__RemoveCategoryFeature: number;
	const QGeoServiceProvider__PlaceRecommendationsFeature: number;
	const QGeoServiceProvider__SearchSuggestionsFeature: number;
	const QGeoServiceProvider__LocalizedPlacesFeature: number;
	const QGeoServiceProvider__NotificationsFeature: number;
	const QGeoServiceProvider__PlaceMatchingFeature: number;
	const QGeoServiceProvider__AnyPlacesFeatures: number;
	const QGeoServiceProvider__NoNavigationFeatures: number;
	const QGeoServiceProvider__OnlineNavigationFeature: number;
	const QGeoServiceProvider__OfflineNavigationFeature: number;
	const QGeoServiceProvider__AnyNavigationFeatures: number;
	interface QGeoServiceProviderFactory_ITF {
		QGeoServiceProviderFactory_PTR():QGeoServiceProviderFactory;
	}

	class QGeoServiceProviderFactory {
		___pointer: number;
		QGeoServiceProviderFactory_PTR():QGeoServiceProviderFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDestroyQGeoServiceProviderFactory(f:()=>void):void;
		DisconnectDestroyQGeoServiceProviderFactory():void;
		DestroyQGeoServiceProviderFactory():void;
		DestroyQGeoServiceProviderFactoryDefault():void;
	}
	function NewQGeoServiceProviderFactoryFromPointer(ptr:number):QGeoServiceProviderFactory;
	interface QLocation_ITF {
		QLocation_PTR():QLocation;
	}

	class QLocation {
		___pointer: number;
		QLocation_PTR():QLocation;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLocation():void;
	}
	function NewQLocationFromPointer(ptr:number):QLocation;
	const QLocation__UnspecifiedVisibility: number;
	const QLocation__DeviceVisibility: number;
	const QLocation__PrivateVisibility: number;
	const QLocation__PublicVisibility: number;
	const QPlaceContent__NoType: number;
	const QPlaceContent__ImageType: number;
	const QPlaceContent__ReviewType: number;
	const QPlaceContent__EditorialType: number;
	const QPlaceContent__CustomType: number;
	const QPlaceIdReply__SavePlace: number;
	const QPlaceIdReply__SaveCategory: number;
	const QPlaceIdReply__RemovePlace: number;
	const QPlaceIdReply__RemoveCategory: number;
	const QPlaceReply__NoError: number;
	const QPlaceReply__PlaceDoesNotExistError: number;
	const QPlaceReply__CategoryDoesNotExistError: number;
	const QPlaceReply__CommunicationError: number;
	const QPlaceReply__ParseError: number;
	const QPlaceReply__PermissionsError: number;
	const QPlaceReply__UnsupportedError: number;
	const QPlaceReply__BadArgumentError: number;
	const QPlaceReply__CancelError: number;
	const QPlaceReply__UnknownError: number;
	const QPlaceReply__Reply: number;
	const QPlaceReply__DetailsReply: number;
	const QPlaceReply__SearchReply: number;
	const QPlaceReply__SearchSuggestionReply: number;
	const QPlaceReply__ContentReply: number;
	const QPlaceReply__IdReply: number;
	const QPlaceReply__MatchReply: number;
	const QPlaceSearchRequest__UnspecifiedHint: number;
	const QPlaceSearchRequest__DistanceHint: number;
	const QPlaceSearchRequest__LexicalPlaceNameHint: number;
	const QPlaceSearchResult__UnknownSearchResult: number;
	const QPlaceSearchResult__PlaceResult: number;
	const QPlaceSearchResult__ProposedSearchResult: number;
}