/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app' )
		.config([ '$analyticsProvider', '$httpProvider', configApp ]);
	
	function configApp( $analyticsProvider, $httpProvider ){
		$analyticsProvider.firstPageview( true );
		$analyticsProvider.withAutoBase( true );  
		
		$httpProvider.interceptors.push([ '$q', '$location', '$rootScope', function( $q, $location, $rootScope ){
			return {
				'responseError': function( res ) {
					if( res.status == 503 || res.status == 403 ){
						$rootScope.loading = false;
						if( res.status == 503 ) return $location.path( '/503' );
						if( res.status == 403 ) return $location.path( '/403' );
					}
					if( res.status == 401 ) return window.location = '/401'; //requires refresh
					return $q.reject( res );
				}
			};
		}]);
	}
	
})();