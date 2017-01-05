/* global angular async */

(function() {
    'use strict';
    
	angular
		.module( 'app.resume' )
		.controller( 'resume', [ '$scope', '$http', '$rootScope', '$location', 'resume', controller ]);
	
	function controller( $scope, $http, $rootScope, $location, resume ) {
			
		$scope.page 	= ( $location.hash() != '' ) ? $location.hash() : 'about';
		
		$scope.navigate = function( page ){
			$scope.page = page;
			$location.hash( page );
		};
		
		async
			.parallel({
				
				expertise: function( callback ){
					resume
						.getQualifications()
						.then(function( res ){
							return callback( null, res.data );
						}, function( err ){
							return callback( err.data.message, null );
						});
				},
				
				experience: function( callback ){
					resume
						.getExperience()
						.then(function( res ){
							return callback( null, res.data );
						}, function( err ){
							return callback( err.data.message, null );
						});
				}
				
			}, function( err, res ){
				
				if( err ) $rootScope.error = err;
				
				$scope.jobs 		= res.experience.map( mapJobs );
				$scope.languages	= res.expertise;
				
			});
		
	}
	
	function mapJobs( job ){
		job.date	= new Date( job.date );
		job.dateEnd = ( job.dateEnd ) ? new Date( job.dateEnd ) : new Date();
		job.years	= job.dateEnd.getFullYear() - job.date.getFullYear();
		return job;
	}
	
})();