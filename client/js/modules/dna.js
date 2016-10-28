angular
	.module( 'app.dna', [ 'chart.js' ] )
	.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/dna', {
				templateUrl	: 'views/dna.html',
				controller 	: 'dna'
			});
			
	}])
	.controller( 'dna', [ '$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ) {
		
		/* global angular */
		
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
			
	}]);