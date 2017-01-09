/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app' )
		.config([ '$analyticsProvider', '$httpProvider', '$routeProvider', '$locationProvider', config ]);
	
	function config( $analyticsProvider, $httpProvider, $routeProvider, $locationProvider ){
		$analyticsProvider.firstPageview( true );
		$analyticsProvider.withAutoBase( true );
	}
	
})();