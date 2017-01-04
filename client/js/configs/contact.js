/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.contact' )
		.config( [ '$routeProvider', '$locationProvider', routes ]);
	
	function routes( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/contact', {
				templateUrl	: 'views/contact.html',
				controller 	: 'contact'
			});
		
	}
	
})();