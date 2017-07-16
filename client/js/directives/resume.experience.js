/* global angular */

(function() {
    'use strict';
    
	angular
		.module( 'app.resume' )
		.directive( 'experience', directive );
		
	function directive(){
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			templateUrl: 'templates/resume.experience.html',
			controller: [ '$scope', '$rootScope', 'resume', controller ]
		};
	}
	
	function controller( $scope, $rootScope, resume ){
		resume
			.getExperience()
			.then( 
				res => $scope.jobs = res.data.map( mapJobs ),
				res => $rootScope.error = res.data.message
			);
	}
	
	function mapJobs( job ){
		job.date	= new Date( job.date );
		job.dateEnd = ( job.dateEnd ) ? new Date( job.dateEnd ) : new Date();
		job.years	= job.dateEnd.getFullYear() - job.date.getFullYear();
		return job;
	}
	
})();