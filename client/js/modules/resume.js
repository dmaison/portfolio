angular
	.module( 'app.resume', [] )
	.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){

		$locationProvider.html5Mode( true );

		$routeProvider
			.when( '/resume', {
				templateUrl	: 'views/resume.html',
				controller 	: 'resume',
				reloadOnSearch: false
			});

	}])
	.controller( 'resume', [ '$scope', '$http', '$window', '$location', function( $scope, $http, $window, $location ) {

		$scope.page = ( $location.hash() != '' ) ? $location.hash() : 'experience';

		$scope.navigate = function( page ){
			$scope.page = page;
			$location.hash( page );
		}

		$scope.$watch( 'page', function( value ){

			switch( value ){

				case 'qualifications':
					if( $scope.languages ) break;
					$scope.loading = true;
					$http
						.get( '/api/qualifications/' )
						.success(function( res ){
							$scope.languages = res;
							$scope.loading = false;
						});
					break;

				default:
					$scope.loading = false;
					break;
			}

		});

		

	}]);