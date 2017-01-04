/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.main' )
		.config([ '$routeProvider', '$locationProvider', routes ]);
	
	function routes( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/', {
				templateUrl	: 'views/home.html',
				controller 	: 'main'
			});
		
	}
	
})();