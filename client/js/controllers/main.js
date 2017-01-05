/* global angular async */

(function() {
    'use strict';
    
	var time	= {
		labels	: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
		series	: [ 'Work', 'Krav Maga', 'Gym', 'Girlfriend', 'Band Practice' ],
		data	: [
			[ 0, 8, 8, 8, 8, 8, 0 ],
			[ 0, 0, 1, 0, 0, 0, 1 ],
			[ 0, 1.5, 0, 1.5, 0, 1.5, 0 ],
			[ 12, 0, 0, 7, 0, 7, 12 ],
			[ 0, 0, 0, 2, 0, 0, 4 ]
		]	
	};
    
	angular
		.module( 'app.main' )
		.controller( 'main', [ '$scope', '$http', '$rootScope', 'dna', 'resume', controller ]);
		
	function controller( $scope, $http, $rootScope, dna, resume ) {
		
		$scope.percents 	= [];
		$scope.ethnicities	= [];
		$scope.time 		= time;
		
		async
			.parallel({
				
				dna: function( callback ){
					dna
						.get()
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
				
				if( err ) return $rootScope.error = err;
				
				res.dna.composition.forEach(function( compote ){
					$scope.percents.push( compote.percentage );
					$scope.ethnicities.push( compote.ethnicity );
				});
				
				$scope.experience = {
					labels	: [ 'Years' ],
					series	: res.experience.map( mapCompanies ),
					data	: res.experience.map( mapYears )
				};
				
			});
		
	}
	
	function mapCompanies( job ){
		return job.employer;
	}
	
	function mapYears( job ){
		job.date	= new Date( job.date );
		job.dateEnd = ( job.dateEnd ) ? new Date( job.dateEnd ) : new Date();
		return [ job.dateEnd.getFullYear() - job.date.getFullYear() ];
	}
	
})();