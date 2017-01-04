/* global angular */

(function(){
	'use strict';
	
	angular
		.module( 'pagination', [])
		.directive( 'paginate', directive );
		
	function directive() {
		return {
			restrict: 'E',
			templateUrl: 'js/directives/templates/pagination.html',
			scope: {
				list: 			'=',
				itemsPerPage: 	'=',
				filter: 		'=',
				filterOnProperty:'=',
				ignoreSort: 	'='
			},
			controller: [ '$scope', '$interval', 'filterFilter', controller ]
	  	};
	}
		
	function controller( $scope, $interval, filterFilter ){
		
		$scope.pageCount	= count;
		var checkList		= $interval( checkInterval, 200, 20, true, $scope );
		
		$scope.prevPage = function(){
			if( $scope.currentPage > 0 ) $scope.currentPage--;
		};
		
		$scope.nextPage = function(){
			if( $scope.currentPage < count( $scope.total, $scope.itemsPerPage ) - 1 ) $scope.currentPage++;
		};
		
		$scope.setPage = function( page ){
			if( page > -1 && page < count( $scope.total, $scope.itemsPerPage ) ) $scope.currentPage = page;
		};
		
		$scope.$watch( 'filter', function(){
			if( !$scope.list || !$scope.pagedList ) return;
			var list 		= filter( $scope.pagedList, $scope.filter, $scope.filterOnProperty, filterFilter );
			$scope.total 	= list.length;
			$scope.list 	= list.slice( $scope.currentPage, $scope.itemsPerPage );
			$scope.range 	= calculateRange( $scope.total, $scope.itemsPerPage );
			$scope.setPage( 0 );
		});
		
		$scope.$watch( 'currentPage', function( newValue, oldValue ){
			if( !$scope.list || !$scope.pagedList ) return;
			$interval.cancel( checkList );
			var offset 		= ( newValue * $scope.itemsPerPage );
			var list 		= filter( $scope.pagedList, $scope.filter, $scope.filterOnProperty, filterFilter );
			$scope.total 	= list.length;
			$scope.list 	= list.slice( offset, offset + $scope.itemsPerPage );
		});
		
	}
	
	function checkInterval( $scope ){
		if( !$scope.list ) return;
		$scope.currentPage 	= 0;
		$scope.pagedList 	= [];
		$scope.total 		= $scope.list.length;
		angular.copy( $scope.list, $scope.pagedList );
		$scope.list 		= $scope.pagedList.slice( 0, $scope.itemsPerPage );
		$scope.range 		= calculateRange( $scope.total, $scope.itemsPerPage );
	}
	
	function filter( lists, searchTerm, filterOnProperty, filterFilter ){
		if (!searchTerm || (searchTerm.length == 0)) return lists;
		if (!filterOnProperty || (filterOnProperty.length == 0)) return filterFilter( lists, searchTerm );
		
		var pattern = new RegExp(searchTerm, "i");
		var result = [];
		angular.forEach( lists, function( item ){
			filterOnProperty.forEach(function( prop ){
				if( item[ prop ].search( pattern ) > -1 ) return result.push( item );
			});
		});
		return result;
	}
	
	function count( total, limit ){
	    return Math.ceil( total / limit );
  	}
	
	function calculateRange( total, limit ){
		var rangeSize 	= count( total, limit );
		var ret 		= [];
		var start 		= 0;
		
		for( var i = start; i < ( start + rangeSize ); i++ ) ret.push( i );
		
		return ret;
	}
	
})();