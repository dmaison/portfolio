/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.chasingBallmer', [] )
		.controller( 'chasingBallmer', [ '$scope', '$http', '$rootScope', 'chasingBallmer', controllerBallmer ]);
		
	
	function controllerBallmer( $scope, $http, $rootScope, chasingBallmer ){
		
		$scope.drinks	= [];
		
		chasingBallmer
			.getDrinks()
			.then(function( res ){
				$scope.drinks 	= res.data;
			}, function( res ){
				$rootScope.error 	= res.data.message;
			});
		
	}
	
})();