/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.alert' )
		.directive( 'alert', directive );
		
	function directive(){
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			templateUrl: 'templates/alert.html',
			scope: false
		};
	}
	
})();