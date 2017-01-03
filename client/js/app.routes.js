/* global angular */

angular
	.module( 'routes', [] )
	.config( [ '$routeProvider', '$locationProvider', configRoutes ]);
	
function configRoutes( $routeProvider, $locationProvider ){

	$locationProvider.html5Mode( true );

	$routeProvider
		.when( '/', {
			templateUrl	: 'views/home.html',
			controller 	: 'main'
		})
		.otherwise({
			templateUrl : 'views/404.html'
		});

}