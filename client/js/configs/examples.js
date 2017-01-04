/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.examples' )
		.config( [ '$routeProvider', '$locationProvider', routes ]);
	
	function routes( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/examples', {
				templateUrl	: 'views/examples.html',
				controller 	: 'examples',
				reloadOnSearch: false
			});
		
	}
	
})();