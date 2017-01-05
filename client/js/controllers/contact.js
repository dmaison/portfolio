/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.contact' )
		.controller( 'contact', [ '$scope', '$http', '$rootScope', 'contact', controller ]);
	
	function controller( $scope, $http, $rootScope, contact ) {
		
		$scope.email	= {};
		
		$scope.send = function( form ){
			
			if( !form.$valid  ) return;
			
			contact
				.send( $scope.email )
				.then(function( res ){
					$rootScope.success 	= res.data.message;
				}, function( res ){
					$rootScope.error 	= res.data.message;
				});
		};
		
	}
	
})();