/* global $ angular async */

(function() {
    'use strict';
    
	var modules = [
			
		//directives
		'pagination', 
		'dropdown', 
		'semantic', 
		
		//libs
		'ngRoute', 
		'ngAnimate', 
		'angulartics', 
		'angulartics.google.analytics',
		
		//modules
		'app.main', 
		'app.resume', 
		'app.portfolio', 
		'app.examples', 
		'app.contact', 
		'app.dna', 
		'app.study',
		'app.chasingBallmer',
		'app.presents'
	];
	
	angular
		.module( 'app', modules )
		.run([ '$rootScope', '$http', '$window', runApp ]);
	
	function runApp( $rootScope, $http, $window ) {
	
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
				console.log( '%c' + window.atob( res.console.message ), window.atob( res.console.style ) );
				console.log( res.console.cipher );
			});
		
		$rootScope.$watch( 'error', function( value ){
			if( !value ) return;
			$( '#error' )
				.modal({
					onHide: function(){
						$rootScope.error = undefined;
						$rootScope.$apply();
					}
				})
				.modal( 'show' );
		});
		
		$rootScope.$watch( 'success', function( value ){
			if( !value ) return;
			$( '#success' )
				.modal({
					onHide: function(){
						$rootScope.success 	= undefined;
						$rootScope.$apply();
					}
				})
				.modal( 'show' );
		});
		
		$rootScope.width = $window.innerWidth;
		
		angular.element( $window ).bind( 'resize', function(){
			$rootScope.width = $window.innerWidth;
			$rootScope.$digest();
		});
		
		$rootScope.$watch( 'width', function( width ){
			$rootScope.isMobile = ( width <= 768 );
		});
		
	}
	
})();