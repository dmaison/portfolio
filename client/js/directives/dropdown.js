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
			templateUrl: 'js/directives/templates/dropdown.html',
			scope: {
				model: 			'=ngModel',
				placeholder: 	'@',
				name: 			'@',
				multiple: 		'=',
				fluid: 			'=',
				search: 		'=',
				allowAdditions: '=',
				change: 		'='
			},
			link: link
		};
	}
	
	function link( scope, element, attrs ){
		
		var dropdown	= element[ 0 ];
		var input		= dropdown.children.input;
		
		scope.$watch( 'model', function( newValue, oldValue ){
			if( !input.value ) input.value = scope.model;
		});
		
		input.onchange = function(){
			var value = ( scope.multiple ) ? this.value.split( ',' ) : this.value;
			scope.model = value;
			if( !scope.$$phase ) scope.$apply();
			if( typeof scope.change == 'function' ) scope.change();
		};
		
		$( dropdown ).dropdown();
	}
	
})();