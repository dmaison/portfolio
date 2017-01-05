/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.presents' )
		.controller( 'presents', [ '$scope', '$http', '$rootScope', 'presents', controller ]);
	
	function controller( $scope, $http, $rootScope, presents ) {
		
		presents
			.getBuyers()
			.then(function( res ){
				$scope.pairings		= res.data.sort(function( a, b ){
					if( a.buyer > b.buyer ) return 1;
					if( a.buyer < b.buyer ) return -1;
				});
			},function( err ){
				$rootScope.error	= err.data.message;
			});
		
	}
	
})();