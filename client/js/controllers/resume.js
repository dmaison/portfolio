/* global angular async */

(function() {
    'use strict';
    
	angular
		.module( 'app.resume' )
		.controller( 'resume', [ '$scope', '$location', controller ]);
	
	function controller( $scope, $location ) {
			
		$scope.page 	= ( $location.hash() != '' ) ? $location.hash() : 'about';
		
		$scope.navigate = function( page ){
			$scope.page = page;
			$location.hash( page );
		};
		
	}
	
})();