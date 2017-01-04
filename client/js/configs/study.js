/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.study' )
		.config( [ '$routeProvider', '$locationProvider', routes ]);
	
	function routes( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/study', {
				templateUrl	: 'views/study.html',
				controller 	: 'study'
			});
		
	}
	
})();