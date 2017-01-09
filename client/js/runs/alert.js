/* global angular $ */

(function() {
    'use strict';
    
	angular
		.module( 'app.alert' )
		.run([ '$rootScope', '$http', run ]);
	
	function run( $rootScope ) {
		
		$rootScope.$watch( 'error', handleAlert );
		$rootScope.$watch( 'success', handleAlert );

		function handleAlert( value ){
			if( !value ) return;
			$( '#alert' )
				.modal({ onHide: hide })
				.modal( 'show' );
		}
		
		function hide(){
			$rootScope.error 	= undefined;
			$rootScope.success 	= undefined;
			$rootScope.$apply();
		}

	}
	
})();