angular
	.module( 'semantic', [])
	.directive( 'popup', function() {
		return function( scope, element, attrs ){
			$( element ).popup();
		};
	});