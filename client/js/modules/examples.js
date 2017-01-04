/* global angular */

(function() {
    'use strict';

	angular
		.module( 'app.examples', [] )
		.controller( 'examples', [ '$scope', '$http', '$rootScope', '$location', 'resume', controllerExamples ]);
	
	function controllerExamples( $scope, $http, $rootScope, $location, resume ){
		
		$scope.loading 			= true;
		$scope.page				= ( $location.hash() != '' ) ? $location.hash() : 'paginate';
		$scope.dropValue 		= '';
		$scope.dropValueMulti	= [];
		
		$scope.navigate = function( page ){
			$scope.page = page;
			$location.hash( page );
		};
		
		resume
			.getQualifications()
			.then(function( res ){
				$scope.items	= res.data;
				$scope.drops	= res.data;
				$scope.loading	= false;
			}, function( err ){
				$rootScope.error	= err.data.message;
				$scope.loading		= false;
			});
		
	}
	
})();