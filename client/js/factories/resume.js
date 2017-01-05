/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.resume' )
        .factory( 'resume', [ '$http', factory ]);
    	
    function factory( $http ) {
        
        return {
            getQualifications: function() {
                return $http.get( '/api/qualifications/' );
            },
            getExperience: function() {
                return $http.get( '/api/experience/' );
            }
        };
        
    }
    
})();