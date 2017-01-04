/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.contact', [] )
		.controller( 'contact', [ '$scope', '$http', '$rootScope', 'contact', controllerContact ]);
	
	function controllerContact( $scope, $http, $rootScope, contact ) {
		
		$scope.loading 	= false;
		$scope.email	= {};
		
		$scope.send = function( form ){
			
			if( !form.$valid  ) return;
			$scope.loading = true;
			
			contact
				.send( $scope.email )
				.then(function( res ){
					$rootScope.success 	= res.data.message;
					$scope.loading 		= false;
				}, function( res ){
					$rootScope.error 	= res.data.message;
					$scope.loading 		= false;
				});
		};
		
	}
	
})();