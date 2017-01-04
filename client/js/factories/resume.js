/* global angular */

(function() {
    'use strict';
    
    angular
        .module( 'app.resume' )
        .factory( 'resume', [ '$http', resume ]);
    	
    function resume( $http ) {
        
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