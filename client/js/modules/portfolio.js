/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.portfolio', [] )
		.controller( 'portfolio', [ '$scope', '$http', '$rootScope', controllerPortfolio ]);
	
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
	
})();