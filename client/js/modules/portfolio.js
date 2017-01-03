/* global angular */

angular
	.module( 'app.portfolio', [] )
	.config([ '$routeProvider', '$locationProvider', configPortfolio ])
	.controller( 'portfolio', [ '$scope', '$http', '$rootScope', controllerPortfolio ]);
	
function configPortfolio( $routeProvider, $locationProvider ){
		
	$locationProvider.html5Mode( true );
	
	$routeProvider
		.when( '/portfolio', {
			templateUrl	: 'views/portfolio.html',
			controller 	: 'portfolio'
		});
	
}

function controllerPortfolio( $scope, $http, $rootScope ) {
	
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
	
}