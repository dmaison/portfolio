/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.chasingBallmer' )
		.config( [ '$routeProvider', '$locationProvider', config ]);
	
	function config( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/chasing-ballmer', {
				templateUrl	: 'views/chasing-ballmer.html',
				controller 	: 'chasingBallmer'
			});
		
	}
	
})();