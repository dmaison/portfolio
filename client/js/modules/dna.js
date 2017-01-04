/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.dna', [ 'chart.js' ] )
		.controller( 'dna', [ '$scope', '$http', '$rootScope', controllerDNA ]);
		
	function controllerDNA( $scope, $http, $rootScope ) {
		
		$scope.loading		= true;
		$scope.percents 	= [];
		$scope.ethnicities	= [];
		
		$http
			.get( '/api/dna' )
			.then(function( res ){
				$scope.loading 	= false;
				$scope.dna 		= res.data;
				res.data.composition.forEach(function( compote){
					$scope.percents.push( compote.percentage );
					$scope.ethnicities.push( compote.ethnicity );
				});
			}, function( err ){
				$scope.loading 		= false;
				$rootScope.error	= err.data.message;
			});
			
	}
	
})();