/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.presents', [] )
		.controller( 'presents', [ '$scope', '$http', '$rootScope', 'presents', controllerPresents ]);
	
	function controllerPresents( $scope, $http, $rootScope, presents ) {
	
		$rootScope.loading = true;
		
		presents
			.getBuyers()
			.then(function( res ){
				$rootScope.loading 	= false;
				$scope.pairings		= res.data.sort(function( a, b ){
					if( a.buyer > b.buyer ) return 1;
					if( a.buyer < b.buyer ) return -1;
				});
			},function( err ){
				$rootScope.error	= err.data.message;
			});
		
	}
	
})();