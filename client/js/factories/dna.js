/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.dna' )
        .factory( 'dna', [ '$http', factory ]);
    	
    function factory( $http ) {
        
        return {
            get: function() {
                return $http.get( '/api/dna' );
            }
        };
        
    }
    
})();