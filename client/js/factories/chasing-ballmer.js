/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.chasingBallmer' )
        .factory( 'chasingBallmer', [ '$http', factory ]);
    	
    function factory( $http ) {
        
        return {
            getDrinks: function() {
                return $http.get( '/api/drinks' );
            }
        };
        
    }
    
})();