/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app' )
        .factory( 'menuFactory', [ '$http', factory ]);
    	
    function factory( $http ) {
        
        return {
            get: function() {
                return $http.get( 'api/menu' );
            }
        };
        
    }
    
})();