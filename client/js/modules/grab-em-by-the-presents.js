/* global angular */
angular
	.module( 'app.presents', [] )
	.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){

		$locationProvider.html5Mode( true );

		$routeProvider
			.when( '/grab-em-by-the-presents', {
				templateUrl	: 'views/grab-em-by-the-presents.html',
				controller 	: 'presents'
			});

	}])
	.controller( 'presents', [ '$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ) {

		$rootScope.loading = true;
		
		$http
			.get( '/api/presents' )
			.then(function( res ){
				$rootScope.loading 	= false;
				$scope.pairings		= res.data;
			},function( err ){
				$rootScope.error	= err.data.message;
			});
		
	}]);