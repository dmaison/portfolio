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

		$scope.send = function( form ){

			if( !form.$valid ) return;

			$http
				.post( '/api/contant', {
					email: $scope.email,
					subject: $scope.subject,
					message: $scope.message
				})
				.success(function( res ){
					console.info( res );
				})
				.fail(function( res ){
					console.error( res );
				})

		}

	}]);