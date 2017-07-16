/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.resume' )
		.directive( 'expertise', directive );
		
	function directive(){
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			templateUrl: 'templates/resume.expertise.html',
			controller: [ '$scope', '$rootScope', 'resume', controller ]
		};
	}
	
	function controller( $scope, $rootScope, resume ){
		resume
			.getQualifications()
			.then( 
				res => $scope.languages = res.data,
				res => $rootScope.error = res.data.message
			);
	}
	
})();