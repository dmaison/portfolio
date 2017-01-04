/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.contact', [] )
		.controller( 'contact', [ '$scope', '$http', '$rootScope', controllerContact ]);
	
	function controllerContact( $scope, $http, $rootScope ) {
		
		$scope.loading 	= false;
		$scope.email	= {};
		
		$scope.send = function( form ){
			
			if( !form.$valid  ) return;
			$scope.loading = true;
			
			$http
				.post( '/api/contact', $scope.email )
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