/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.chasingBallmer', [] )
		.controller( 'chasingBallmer', [ '$scope', '$http', '$rootScope', 'chasingBallmer', controllerBallmer ]);
		
	
	function controllerBallmer( $scope, $http, $rootScope, chasingBallmer ){
		
		$scope.loading 	= true;
		$scope.drinks	= [];
		
		chasingBallmer
			.getDrinks()
			.then(function( res ){
				$scope.drinks 	= res.data;
				$scope.loading 	= false;
			}, function( res ){
				$rootScope.error 	= res.data.message;
				$scope.loading 		= false;
			});
		
	}
	
})();