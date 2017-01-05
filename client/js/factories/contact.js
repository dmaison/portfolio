/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.contact' )
        .factory( 'contact', [ '$http', factory ]);
    	
    function factory( $http ) {
        
        return {
            send: function( email ) {
                return $http.post( '/api/contact', email );
            }
        };
        
    }
    
})();