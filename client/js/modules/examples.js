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
	.controller( 'examples', [ '$scope', '$http', '$window', '$location', function( $scope, $http, $window, $location ) {

		$scope.loading 			= true;
		$scope.page				= ( $location.hash() != '' ) ? $location.hash() : 'paginate';
		$scope.dropValue 		= '';
		$scope.dropValueMulti	= []

		$scope.navigate = function( page ){
			$scope.page = page;
			$location.hash( page );
		}

		$http
			.get( '/api/qualifications/' )
			.success(function( res ){
				$scope.items = res;
				$scope.drops = res;
				$scope.loading = false;
			});

	}]);