/* global angular $ */

(function() {
    'use strict';
    
	angular
		.module( 'app.examples' )
		.directive( 'dropdown', directive );
		
	function directive(){
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			templateUrl: 'templates/dropdown.html',
			scope: {
				model: 			'=ngModel',
				placeholder: 	'@',
				name: 			'@',
				multiple: 		'=',
				fluid: 			'=',
				search: 		'=',
				allowAdditions: '='
			},
			link: link
		};
	}
	
	function link( scope, element, attrs ){
		
		var drop = element[ 0 ];
		
		if( scope.multiple ) drop.classList.add( 'multiple' );
		if( scope.fluid ) drop.classList.add( 'fluid' );
		if( scope.search ) drop.classList.add( 'search' );
		if( scope.allowAdditions ) drop.classList.add( 'additions' );
		
		$( drop )
			.dropdown({
				onChange: function( value ){
					scope.model = ( scope.multiple ) ? value.split( ',' ) : value;
					if( !scope.$$phase ) scope.$apply();
				}
			});
	}
	
})();