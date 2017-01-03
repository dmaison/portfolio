/* global $ angular */

angular
	.module( 'semantic', [])
	.directive( 'popup', directivePopup );
	
function directivePopup() {
	return function( scope, element, attrs ){
		$( element ).popup();
	};
}