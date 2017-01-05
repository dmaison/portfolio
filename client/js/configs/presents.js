/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.presents' )
		.config( [ '$routeProvider', '$locationProvider', config ]);
	
	function config( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/grab', {
				templateUrl	: 'views/grab-em-by-the-presents.html',
				controller 	: 'presents'
			})
			.when( '/grab-em-by-the-presents', {
				templateUrl	: 'views/grab-em-by-the-presents.html',
				controller 	: 'presents'
			});
		
	}
	
})();