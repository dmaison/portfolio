/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.chasingBallmer' )
        .factory( 'chasingBallmer', [ '$http', chasingBallmer ]);
    	
    function chasingBallmer( $http ) {
        
        return {
            getDrinks: function() {
                return $http.get( '/api/drinks' );
            }
        };
        
    }
    
})();