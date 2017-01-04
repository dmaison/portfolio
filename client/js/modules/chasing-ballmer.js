/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.chasingBallmer', [] )
		.controller( 'chasingBallmer', [ '$scope', '$http', '$rootScope', controllerBallmer ]);
		
	
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
	
})();