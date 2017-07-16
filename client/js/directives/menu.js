/* global angular $ */

(function() {
    'use strict';
    
	angular
		.module( 'app' )
		.directive( 'menu', directive );
		
	function directive(){
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			templateUrl: 'templates/menu.html',
			controller: [ '$scope', '$rootScope', '$location', 'menuFactory', controller ]
		};
	}
	
	function controller( $scope, $rootScope, $location, menu ){
		menu
			.get()
			.then( 
				res => $scope.menu = res.data,
				res => $rootScope.error = res.data.message
			);
			
		$scope.location = $location;
		$scope.click = click;
		
		$rootScope.$watch( 'width', function( width ){
			$rootScope.isMobile = ( width <= 768 );	
			if( $rootScope.isMobile ) $( '#mobile-menu' ).dropdown();
		});
		
	}
	
	function click(){
		let old = document.querySelector( 'a.active:not( .brand )' );
		if( old ) old.classList.remove( 'active' );
		
		document.querySelector( 'a[href="' + this.item.path + '"]' ).classList.add( 'active' );
	}
	
})();