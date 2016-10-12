angular
	.module( 'app.main', [ 'chart.js' ] )
	.controller( 'main', [ '$scope', '$http', '$window', function( $scope, $http, $window ) {
		
		$scope.loading		= true;
		$scope.percents 	= [];
		$scope.ethnicities	= [];
		
		$http
			.get( '/api/dna' )
			.success(function( res ){
				$scope.loading 	= false;
				$scope.dna 		= res;
				res.composition.forEach(function( compote ){
					$scope.percents.push( compote.percentage );
					$scope.ethnicities.push( compote.ethnicity );
				});
			});
			
		$scope.labels = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
		$scope.series = [ 'Work', 'Krav Maga', 'Gym', 'Girlfriend' ];
		$scope.data = [
			[ 0, 8, 8, 8, 8, 8, 0 ],
			[ 0, 1.5, 0, 1.5, 0, 1.5, 0 ],
			[ 0, 0, 1, 0, 0, 0, 1 ],
			[ 12, 0, 0, 7, 0, 7, 12 ],
		];
		
		$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
		$scope.options = {
			scales: {
				yAxes: [
					{
						id: 'y-axis-1',
						type: 'linear',
						display: true,
						position: 'left'
					},
					{
						id: 'y-axis-2',
						type: 'linear',
						display: true,
						position: 'right'
					}
				]
			}
		};
		
	}]);