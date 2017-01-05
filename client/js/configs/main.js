/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.main' )
		.config([ '$routeProvider', '$locationProvider', config ]);
	
	function config( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/', {
				templateUrl	: 'views/home.html',
				controller 	: 'main'
			});
		
	}
	
})();