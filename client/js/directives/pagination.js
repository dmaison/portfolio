angular
	.module( 'pagination', [])
	.directive( 'paginate', function( $document ) {
		return {
			restrict: 'E',
			templateUrl: 'js/directives/templates/pagination.html',
			scope: {
				list: 			'=',
				itemsPerPage: 	'='
			},
			controller: function( $scope, $interval ){
				
				var checkList = $interval(function(){
					if( !$scope.list ) return;
					$scope.currentPage 	= 0;
					$scope.total 		= $scope.list.length;
					$scope.pagedList	= $scope.list;
					$scope.list 		= $scope.pagedList.slice( 0, $scope.itemsPerPage );
				}, 200);				
				
				$scope.range = function() {
				    var rangeSize 	= Math.ceil( $scope.total/ $scope.itemsPerPage );
				    var ret 		= [];
				    var start 		= $scope.currentPage;
				    
				    if( start > $scope.pageCount()-rangeSize ) start = $scope.pageCount() - rangeSize;
				
				    for( var i = start; i < ( start + rangeSize ); i++ ) ret.push( i );
				    
				    return ret;
				};
				
				$scope.prevPage = function(){
				    if( $scope.currentPage > 0 ) $scope.currentPage--;
			  	};
				
			  	$scope.nextPage = function(){
				    if( $scope.currentPage < $scope.pageCount() - 1 ) $scope.currentPage++;
			  	};
				
			  	$scope.pageCount = function(){
				    return Math.ceil( $scope.total/$scope.itemsPerPage );
			  	};
				
				$scope.setPage = function( page ){
				    if( page > -1 && page < $scope.pageCount() ) $scope.currentPage = page;
			  	};
				
				$scope.$watch( 'currentPage', function( newValue, oldValue ){
					if( !$scope.list ) return;
					$interval.cancel( checkList );
					var offset 		= ( newValue * $scope.itemsPerPage );
				    $scope.list 	= $scope.pagedList.slice( offset, offset + $scope.itemsPerPage );
			  	});
			}
	  	};
	});