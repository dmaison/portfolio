/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.resume' )
		.directive( 'about', directive );
		
	function directive(){
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			templateUrl: 'templates/resume.about.html',
			controller: [ '$scope', '$rootScope', 'resume', controller ]
		};
	}
	
	function controller( $scope, $rootScope, resume ){
		
	}
	
})();