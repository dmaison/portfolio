angular
	.module( 'app', [ 
		
		//directives
		'pagination', 
		'dropdown', 
		'semantic', 
		
		//libs
		'ngRoute', 
		'ngAnimate', 
		'angulartics', 
		'angulartics.google.analytics',
		
		//controllers
		'routes', 
		'app.main', 
		'app.resume', 
		'app.portfolio', 
		'app.examples', 
		'app.contact', 
		'app.dna', 
		'app.study',
		'app.chasingBallmer',
		'app.presents'
		
	])
	.config(function( $analyticsProvider, $httpProvider ){
        
        $analyticsProvider.firstPageview( true ); 
        $analyticsProvider.withAutoBase( true );  
        
        $httpProvider.interceptors.push(function( $q, $location, $rootScope ){
			return {
				'responseError': function( res ) {
					if( res.status == 503 || res.status == 403 ){
						$rootScope.loading = false;
						if( res.status == 503 ) return $location.path( '/503' );
						if( res.status == 403 ) return $location.path( '/403' );	
					}
					return $q.reject( res );
				}
			};
		});
    })
	.run(function( $rootScope, $http, $window ) {
		
		/* global $ angular */
		
		$http
			.get( 'api/menu' )
			.then(function( res ){
				$rootScope.menu = res.data;
			}, function( err ){
				$rootScope.error = err.data.message;	
			});
		
		$rootScope.$watch( 'error', function( value ){
			if( !value ) return;
			$rootScope.loading = false;
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
			
			$rootScope.loading = false;
			
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
		
	});