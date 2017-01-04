/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.portfolio', [] )
		.controller( 'portfolio', [ '$scope', '$http', '$rootScope', 'portfolio', controllerPortfolio ]);
	
	function controllerPortfolio( $scope, $http, $rootScope, portfolio ) {
		
		$scope.loading = true;
		
		portfolio
			.get()
			.then(function( res ){
				$scope.loading	= false;
				$scope.sites	= res.data;
			}, function( err ){
				$scope.loading		= false;
				$rootScope.error	= err.data.message;
			});
		
	}
	
})();