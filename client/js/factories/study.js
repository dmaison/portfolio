/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.study' )
        .factory( 'study', [ '$http', factory ]);
    	
    function factory( $http ) {
        
        return {
            getQuestions: function() {
                return $http.get( '/api/7lvl' );
            }
        };
        
    }
    
})();