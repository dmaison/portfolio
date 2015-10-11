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

		$scope.emailSent = false;
		$scope.emailError = false;
		$scope.hideForm = false;

		$scope.send = function( form ){

			if( !form.$valid || $scope.emailSent ) return;

			$http
				.post( '/api/contact', {
					email: $scope.email,
					subject: $scope.subject,
					message: $scope.message
				})
				.success(function( res ){
					$scope.emailSent 	= true;
					$scope.sendMessage 	= res.message;
				})
				.error(function( res ){
					$scope.emailError 	= true;
					$scope.sendMessage 	= res.message;
				});

		}

	}]);