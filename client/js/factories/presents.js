/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.presents' )
        .factory( 'presents', [ '$http', presents ]);
    	
    function presents( $http ) {
        
        return {
            getBuyers: function() {
                return $http.get( '/api/presents' );
            }
        };
        
    }
    
})();