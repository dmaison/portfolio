/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.resume' )
		.config( [ '$routeProvider', '$locationProvider', routes ]);
	
	function routes( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/resume', {
				templateUrl	: 'views/resume.html',
				controller 	: 'resume',
				reloadOnSearch: false
			});
		
	}
	
})();