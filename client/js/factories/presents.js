/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.presents' )
        .factory( 'presents', [ '$http', factory ]);
    	
    function factory( $http ) {
        
        return {
            getBuyers: function() {
                return $http.get( '/api/presents' );
            }
        };
        
    }
    
})();