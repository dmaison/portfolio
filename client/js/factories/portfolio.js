/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.portfolio' )
        .factory( 'portfolio', [ '$http', factory ]);
    	
    function factory( $http ) {
        
        return {
            get: function() {
                return $http.get( '/api/portfolio' );
            }
        };
        
    }
    
})();