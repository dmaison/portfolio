/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.portfolio' )
        .factory( 'portfolio', [ '$http', portfolio ]);
    	
    function portfolio( $http ) {
        
        return {
            get: function() {
                return $http.get( '/api/portfolio' );
            }
        };
        
    }
    
})();