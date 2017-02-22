/* global $ angular async */

(function() {
    'use strict';
    
	angular
		.module( 'app' )
		.run([ '$rootScope', '$http', '$window', run ]);
	
	function run( $rootScope, $http, $window ) {
		
		async
			.parallel({
				menu: function( callback ){
					$http
						.get( 'api/menu' )
						.then(function( res ){
							 return callback( null, res.data );
						}, function( err ){
							return callback( err.data.message, null );
						});
				},
				console: function( callback ){
					$http
						.get( 'api/console' )
						.then(function( res ){
							 return callback( null, res.data );
						}, function( err ){
							return callback( err.data.message, null );
						});
				}
			}, function( err, res ){
				if( err ) $rootScope.error = err;
				$rootScope.menu = res.menu;
				return; // don't do this for now
				console.log( '%c' + window.atob( res.console.message ), window.atob( res.console.style ) );
				console.log( res.console.cipher );
			});
		
		$rootScope.width = $window.innerWidth;
		
		angular.element( $window ).bind( 'resize', function(){
			$rootScope.width = $window.innerWidth;
			$rootScope.$digest();
		});
		
		$rootScope.$watch( 'width', function( width ){
			$rootScope.isMobile = ( width <= 768 );	
			if( $rootScope.isMobile ) $( '#mobile-menu' ).dropdown();
		});
		
	}
	
})();