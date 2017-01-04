/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.dna' )
        .factory( 'dna', [ '$http', dna ]);
    	
    function dna( $http ) {
        
        return {
            get: function() {
                return $http.get( '/api/dna' );
            }
        };
        
    }
    
})();