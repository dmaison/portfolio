angular
	.module( 'app', [ 'ngRoute', 'ngAnimate', 'routes', 'app.main', 'app.resume', 'app.portfolio', 'app.examples', 'app.contact' ])
	.run(function( $rootScope ) {
		setInterval(updateGradient,10);

		$rootScope.menu = [
			{
				title: 'Resume',
				path: '/resume'
			},
			{
				title: 'Examples',
				path: '/examples'
			},
			{
				title: 'Portfolio',
				path:	'/portfolio'
			},
			{
				title: 'Contact',
				path:	'/contact'
			}
		];
	})
	.directive( 'paginate', function( $document ) {
		return {
			restrict: 'E',
			templateUrl: 'views/template/pagination.html',
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
	})
	.directive( 'dropdown', function( $compile ) {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'views/template/dropdown.html',
			scope: {
				model: 			'=ngModel',
				placeholder: 	'@',
				name: 			'@',
				multiple: 		'=',
				fluid: 			'=',
				search: 		'=',
				allowAdditions: '=',
				change: 		'='
			},
			link: function( scope, element, attrs ){
				
				var dropdown 	= element[ 0 ].childNodes[ 0 ]
				var input 		= dropdown.childNodes[ 1 ];
				scope.$watch( 'model', function( newValue, oldValue ){
					if( !input.value ) input.value = scope.model;
				});
				
				if( scope.multiple ) dropdown.className += ' multiple';
				if( scope.search ) dropdown.className += ' search';
				if( scope.fluid ) dropdown.className += ' fluid';
				if( scope.allowAdditions ) dropdown.className += ' additions';
				
				input.onchange = function(){
					var value = ( scope.multiple ) ? this.value.split( ',' ) : this.value;
					scope.model = value;
					scope.$apply();
					if( typeof scope.change == 'function' ) scope.change();
				};
			}
	  	};
	})
	.directive( 'choice', function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div class="item"></div>',
			scope: {
				choiceValue:	'=',
				display: 		'='
			},
			link: function( scope, element, attrs ){
				if( scope.display == undefined ) scope.display = '&nbsp;';
				if( scope.choiceValue == undefined ) scope.choiceValue = 0;
				element.attr( 'data-value', scope.choiceValue );
				element[ 0 ].innerHTML = scope.display;
				if( scope.$parent.$last ) {
					var dropdown = element[ 0 ].parentElement.parentElement;
					var input	 = dropdown.childNodes[ 1 ];
					$( dropdown ).dropdown({ 'set selected' : input.value });
				}
			}
	  	};
	});