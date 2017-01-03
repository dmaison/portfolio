/* global angular */

angular
	.module( 'app.presents', [] )
	.config([ '$routeProvider', '$locationProvider', configPresents])
	.controller( 'presents', [ '$scope', '$http', '$rootScope', controllerPresents ]);
	
function configPresents( $routeProvider, $locationProvider ){

	$locationProvider.html5Mode( true );

	$routeProvider
		.when( '/grab', {
			templateUrl	: 'views/grab-em-by-the-presents.html',
			controller 	: 'presents'
		})
		.when( '/grab-em-by-the-presents', {
			templateUrl	: 'views/grab-em-by-the-presents.html',
			controller 	: 'presents'
		});

}

function controllerPresents( $scope, $http, $rootScope ) {

	$rootScope.loading = true;
	
	$http
		.get( '/api/presents' )
		.then(function( res ){
			$rootScope.loading 	= false;
			$scope.pairings		= res.data.sort(function( a, b ){
				if( a.buyer > b.buyer ) return 1;
				if( a.buyer < b.buyer ) return -1;
			});
		},function( err ){
			$rootScope.error	= err.data.message;
		});
	
}