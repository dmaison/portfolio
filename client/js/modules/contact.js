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
	.controller( 'contact', [ '$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ) {
		
		/* global angular */
		
		$scope.loading 	= false;
		$scope.email	= {};
		
		$scope.send = function( form ){
			
			if( !form.$valid  ) return;
			$scope.loading = true;
			
			$http
				.post( '/api/contact', $scope.email )
				.then(function( res ){
					$rootScope.success 	= res.data.message;
					$scope.loading 		= false;
				}, function( res ){
					$rootScope.error 	= res.data.message;
					$scope.loading 		= false;
				});
		};
		
	}]);