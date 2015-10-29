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
	.controller( 'dna', [ '$scope', '$http', '$window', function( $scope, $http, $window ) {

		$scope.loading = true;
		$scope.percents = [];
		$scope.ethnicities = [];

		$http
			.get( '/api/dna' )
			.success(function( res ){
				$scope.loading 	= false;
				$scope.dna 		= res;
				for( var i = 0; i < res.composition.length; ++i ) {
					$scope.percents.push( res.composition[ i ].percentage );
					$scope.ethnicities.push( res.composition[ i ].ethnicity );
				}
			});

	}]);