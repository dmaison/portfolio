/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app' )
		.config([ '$analyticsProvider', '$httpProvider', configApp ]);
	
	function configApp( $analyticsProvider, $httpProvider ){
		$analyticsProvider.firstPageview( true );
		$analyticsProvider.withAutoBase( true );
		$httpProvider.interceptors.push([ '$q', '$location', '$rootScope', interceptor ]);
	}
	
	function interceptor( $q, $location, $rootScope ){
		return {
			
			request: function( req ){
				$rootScope.loading = true;	
				return req;
			},
			
			response: function( res ){
				$rootScope.loading = false;	
				return res;
			},
			
			responseError: function( res ) {
				$rootScope.loading = false;	
				if( res.status == 503 ) return $location.path( '/503' );
				if( res.status == 403 ) return $location.path( '/403' );
				if( res.status == 401 ) return window.location = '/401'; //requires refresh
				return $q.reject( res );
			}
			
		};
	}
	
})();