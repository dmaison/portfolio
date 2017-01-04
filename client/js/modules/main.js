/* global angular */

(function() {
    'use strict';
    
    var USAF			= {
		start	: new Date( '12/1/2009' ).getFullYear(),
		end		: new Date( '6/1/2013' ).getFullYear()
	};
	
	var interlink		= {
		start	: new Date( '6/1/2013' ).getFullYear(),
		end		: new Date().getFullYear()
	};
	
	var USAFR		= {
		start	: new Date( '6/1/2013' ).getFullYear(),
		end		: new Date().getFullYear()
	};
	
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
		.module( 'app.main', [ 'chart.js' ] )
		.controller( 'main', [ '$scope', '$http', '$rootScope', 'dna', controllerMain ]);
		
	function controllerMain( $scope, $http, $rootScope, dna ) {
		
		$scope.loading		= true;
		$scope.percents 	= [];
		$scope.ethnicities	= [];
		
		dna
			.get()
			.then(function( res ){
				$scope.loading 	= false;
				$scope.dna 		= res.data;
				res.data.composition.forEach(function( compote ){
					$scope.percents.push( compote.percentage );
					$scope.ethnicities.push( compote.ethnicity );
				});
			}, function( err ){
				$rootScope.error	= err.data.message;
				$scope.loading 		= false;
			});
			
		$scope.time = time;
		
		$scope.experience = {
			labels	: [ 'Years' ],
			series	: [ 'USAF', 'interlinkONE', 'USAF Reserves' ],
			data	: [
				[ ( USAF.end - USAF.start ) ],
				[ ( interlink.end - interlink.start + 3 ) ],
				[ ( USAFR.end - USAFR.start ) ]
			]
		};
		
	}
	
})();