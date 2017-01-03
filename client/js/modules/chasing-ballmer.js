/* global angular */

angular
	.module( 'app.chasingBallmer', [] )
	.config( [ '$routeProvider', '$locationProvider', configBallmer ])
	.controller( 'chasingBallmer', [ '$scope', '$http', '$rootScope', controllerBallmer ]);
	
function configBallmer( $routeProvider, $locationProvider ){
		
	$locationProvider.html5Mode( true );
	
	$routeProvider
		.when( '/chasing-ballmer', {
			templateUrl	: 'views/chasing-ballmer.html',
			controller 	: 'chasingBallmer'
		});
		
}

function controllerBallmer( $scope, $http, $rootScope ){
	
	$scope.loading 	= true;
	$scope.drinks	= [];
	
	$http
		.get( '/api/drinks' )
		.then(function( res ){
			$scope.drinks 	= res.data;
			$scope.loading 	= false;
		}, function( res ){
			$rootScope.error 	= res.data.message;
			$scope.loading 		= false;
		});
	
}