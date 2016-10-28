angular
	.module( 'app.portfolio', [] )
	.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/portfolio', {
				templateUrl	: 'views/portfolio.html',
				controller 	: 'portfolio'
			});
		
	}])
	.controller( 'portfolio', [ '$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ) {
		
		/* global angular */
		
		$scope.loading = true;
		
		$http
			.get( '/api/portfolio' )
			.then(function( res ){
				$scope.loading	= false;
				$scope.sites	= res.data;
			}, function( err ){
				$scope.loading		= false;
				$rootScope.error	= err.data.message;
			});
		
	}]);