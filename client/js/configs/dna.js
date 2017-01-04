/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.dna' )
		.config( [ '$routeProvider', '$locationProvider', routes ]);
	
	function routes( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/dna', {
				templateUrl	: 'views/dna.html',
				controller 	: 'dna'
			});
		
	}
	
})();