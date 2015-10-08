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
	.controller( 'portfolio', [ '$scope', '$http', '$window', function( $scope, $http, $window ) {

		$scope.loading = true;

		$http
			.get( '/api/portfolio' )
			.success(function( res ){
				$scope.loading = false;
				$scope.sites = res;
			});

	}]);