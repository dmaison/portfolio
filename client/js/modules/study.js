angular
	.module( 'app.study', [] )
	.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){

		$locationProvider.html5Mode( true );

		$routeProvider
			.when( '/study', {
				templateUrl	: 'views/study.html',
				controller 	: 'study'
			});

	}])
	.controller( 'study', [ '$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ) {

		$scope.loading		= true;
		$scope.questions	= [];
		$scope.answer		= {};
		var score			= 0;
		var passing 		= 0;
		var total			= 0;

		$http
			.get( '/api/7lvl' )
			.then(function( res ){
				$scope.loading 		= false;
				
				res.data.forEach(function( question ){
					question.answers = shuffle( question.answers );
				});
				
				$scope.questions	= res.data;
				$scope.question 	= randomQuestion();
				total				= $scope.questions.length;
				passing 			= ( total * .75);
			},function( err ){
				$rootScope.error	= err.data.message;
			});
			
		$scope.check = function(){
			if( $scope.answer.correct ){
				++score;
			} else {
				var correct 		= $scope.question.answers.filter(function( answer ){
					return answer.correct;
				})[ 0 ].text;
				
				$rootScope.error	= 'Wrong! The correct answer was, "' + correct + '"';
			}
			
			if( $scope.questions.length > 0 ){
				$scope.question 	= randomQuestion();
			} else {
				if( score >= passing ){
					$rootScope.success = 'You passed and scored a ' + score + ' out of ' + total;
				} else {
					$rootScope.error = 'You failed and scored a ' + score + ' out of ' + total;
				}
			}
		};
		
		$scope.answerSelect = function( answer ){
			$scope.answer = answer;
		};

		function randomQuestion(){
			var length		= ( $scope.questions.length - 1 );
			var index		= Math.floor( Math.random() * length );
			var question	= $scope.questions[ index ];
			$scope.questions.splice( index, 1 );
			return question;
		}

		function shuffle( array ) {
			var currentIndex = array.length, temporaryValue, randomIndex;
			
			while( 0 !== currentIndex ){
				
				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				
				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
		
			return array;
		}

	}]);