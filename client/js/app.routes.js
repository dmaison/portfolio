angular
	.module( 'routes', [] )
	.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){

		$locationProvider.html5Mode( true );

		$routeProvider
			.when( '/', {
				templateUrl	: 'views/search.html',
				controller 	: 'mainController'
			})
			.when( '/profile', {
				templateUrl : 'views/profile.html',
				controller 	: 'profileController',
				reloadOnSearch: false
			})
			.when( '/search', {
				templateUrl	: 'views/search.html',
				controller 	: 'mainController'
			})
			.when( '/register', {
				templateUrl	: 'views/register.html',
				controller 	: 'registerController'
			})
			.when( '/login', {
				templateUrl	: 'views/login.html',
				controller 	: 'loginController'
			})
			.otherwise({
				templateUrl : 'views/404.html'
			});

	}]);