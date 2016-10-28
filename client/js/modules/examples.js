angular
	.module( 'app.examples', [] )
	.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/examples', {
				templateUrl	: 'views/examples.html',
				controller 	: 'examples',
				reloadOnSearch: false
			});
		
	}])
	.controller( 'examples', [ '$scope', '$http', '$rootScope', '$location', function( $scope, $http, $rootScope, $location ) {
		
		/* global angular */
		
		$scope.loading 			= true;
		$scope.page				= ( $location.hash() != '' ) ? $location.hash() : 'paginate';
		$scope.dropValue 		= '';
		$scope.dropValueMulti	= [];
		
		$scope.navigate = function( page ){
			$scope.page = page;
			$location.hash( page );
		};
		
		$http
			.get( '/api/qualifications/' )
			.then(function( res ){
				$scope.items	= res.data;
				$scope.drops	= res.data;
				$scope.loading	= false;
			}, function( err ){
				$rootScope.error	= err.data.message;
				$scope.loading		= false;
			});
		
	}]);