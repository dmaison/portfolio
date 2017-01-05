/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.portfolio' )
		.controller( 'portfolio', [ '$scope', '$http', '$rootScope', 'portfolio', controller ]);
	
	function controller( $scope, $http, $rootScope, portfolio ) {
		
		portfolio
			.get()
			.then(function( res ){
				$scope.sites	= res.data;
			}, function( err ){
				$rootScope.error	= err.data.message;
			});
		
	}
	
})();