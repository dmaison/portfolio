/* global angular */

(function(){
	'use strict';
	
	angular
		.module( 'app.alert' )
		.config( [ '$routeProvider', '$locationProvider', '$httpProvider', config ]);

	function config( $routeProvider, $locationProvider, $httpProvider ){

		$httpProvider.interceptors.push([ '$q', '$location', '$rootScope', interceptor ]);

		$locationProvider.html5Mode( true );

		$routeProvider
			.when( '/503', {
				templateUrl : 'views/503.html'
			})
			.when( '/401', {
				templateUrl : 'views/401.html'
			})
			.when( '/403', {
				templateUrl : 'views/403.html'
			})
			.otherwise({
				templateUrl : 'views/404.html'
			});

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
				if( res.status == 502 ) return $location.path( '/502' );
				if( res.status == 403 ) return $location.path( '/403' );
				if( res.status == 401 ) return $location.path( '/401' );
				if( res.status == 408 ) return $rootScope.error = 'Request timed out. Please, try again.';
				return $q.reject( res );
			}
			
		};
	}

})();