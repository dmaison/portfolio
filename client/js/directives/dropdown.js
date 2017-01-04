/* global angular $ */

(function() {
    'use strict';
    
	angular
		.module( 'dropdown', [])
		.directive( 'dropdown', directiveDropdown )
		.directive( 'choice', directiveChoice );
		
	function directiveDropdown(){
		return {
			restrict: 'E',
			transclude: true,
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
			link: linkDropdown
	  	};
	}
	
	function directiveChoice() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div class="item"></div>',
			scope: {
				choiceValue:	'=',
				display: 		'='
			},
			link: linkChoice
	  	};
	}
	
	function linkDropdown( scope, element, attrs ){
				
		var dropdown 	= element[ 0 ].childNodes[ 0 ];
		var input 		= dropdown.childNodes[ 1 ];
		scope.$watch( 'model', function( newValue, oldValue ){
			if( !input.value ) input.value = scope.model;
		});
		
		if( scope.multiple ) dropdown.className += ' multiple';
		if( scope.search ) dropdown.className += ' search';
		if( scope.fluid ) dropdown.className += ' fluid';
		if( scope.allowAdditions ) dropdown.className += ' additions';
		
		input.onchange = function(){
			var value = ( scope.multiple ) ? this.value.split( ',' ) : this.value;
			scope.model = value;
			scope.$apply();
			if( typeof scope.change == 'function' ) scope.change();
		};
	}
	
	function linkChoice( scope, element, attrs ){
		if( scope.display == undefined ) scope.display = '&nbsp;';
		if( scope.choiceValue == undefined ) scope.choiceValue = 0;
		element.attr( 'data-value', scope.choiceValue );
		element[ 0 ].innerHTML = scope.display;
		if( scope.$parent.$last ) {
			var dropdown = element[ 0 ].parentElement.parentElement;
			var input	 = dropdown.childNodes[ 1 ];
			$( dropdown ).dropdown({ 'set selected' : input.value });
		}
	}
	
})();