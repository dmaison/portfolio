/* global $ angular */

(function() {
    'use strict';
    
	angular
		.module( 'semantic', [])
		.directive( 'popup', directivePopup );
		
	function directivePopup() {
		return function( scope, element, attrs ){
			$( element ).popup();
		};
	}
	
})();