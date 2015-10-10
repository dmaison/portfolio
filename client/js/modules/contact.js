angular
	.module( 'app.contact', [] )
	.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){

		$locationProvider.html5Mode( true );

		$routeProvider
			.when( '/contact', {
				templateUrl	: 'views/contact.html',
				controller 	: 'contact'
			});

	}])
	.controller( 'contact', [ '$scope', '$http', '$window', function( $scope, $http, $window ) {

		

	}]);