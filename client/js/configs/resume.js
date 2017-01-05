/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.resume' )
		.config( [ '$routeProvider', '$locationProvider', config ]);
	
	function config( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/resume', {
				templateUrl	: 'views/resume.html',
				controller 	: 'resume',
				reloadOnSearch: false
			});
		
	}
	
})();