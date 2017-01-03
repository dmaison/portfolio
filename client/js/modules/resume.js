/* global angular */

angular
	.module( 'app.resume', [] )
	.config([ '$routeProvider', '$locationProvider', configResume ])
	.controller( 'resume', [ '$scope', '$http', '$rootScope', '$location', controllerResume ]);
	
function configResume( $routeProvider, $locationProvider ){
		
	$locationProvider.html5Mode( true );
	
	$routeProvider
		.when( '/resume', {
			templateUrl	: 'views/resume.html',
			controller 	: 'resume',
			reloadOnSearch: false
		});
	
}

function controllerResume( $scope, $http, $rootScope, $location ) {
		
	$scope.page 	= ( $location.hash() != '' ) ? $location.hash() : 'about';
	$scope.loading	= true;
	
	$scope.navigate = function( page ){
		$scope.page = page;
		$location.hash( page );
	};
	
	$scope.$watch( 'page', function( value ){
		
		switch( value ){
			
			case 'expertise':
				if( $scope.languages ) break;
				
				$http
					.get( '/api/qualifications/' )
					.then(function( res ){
						$scope.languages = res.data;
						$scope.loading = false;
					}, function( err ){
						$rootScope.error = err.data.message;
						$scope.loading = false;
					});
				break;
				
			case 'experience':
				if( $scope.jobs ) break;
				$scope.loading = true;
				$http
					.get( '/api/experience/' )
					.then(function( res ){
						$scope.jobs = res.data;
						$scope.loading = false;
					}, function( err ){
						$rootScope.error = err.data.message;
						$scope.loading = false;
					});
				break;
				
			default:
				$scope.loading = false;
				break;
		}
		
	});
	
}