/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.portfolio' )
		.config( [ '$routeProvider', '$locationProvider', routes ]);
	
	function routes( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/portfolio', {
				templateUrl	: 'views/portfolio.html',
				controller 	: 'portfolio'
			});
		
	}
	
})();