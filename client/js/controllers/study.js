/* global angular $ */

(function() {
    'use strict';
    
	angular
		.module( 'app.study' )
		.controller( 'study', [ '$scope', '$http', '$rootScope', 'study', controller ]);
	
	function controller( $scope, $http, $rootScope, study ) {
	
		var passing 		= 0;
		$scope.questions	= [];
		$scope.answer		= {};
		$scope.number		= 1;
		$scope.score		= 0;
		$scope.total		= 0;
		
		study
			.getQuestions()
			.then(function( res ){
				
				res.data.forEach(function( question ){
					question.answers = shuffle( question.answers );
				});
				
				$scope.questions	= res.data;
				$scope.question 	= randomQuestion();
				$scope.total		= $scope.questions.length;
				passing 			= ( $scope.total * .75 );
				
				$( '.ui.progress' ).progress({ value: $scope.number });
				
			}, function( err ){
				$rootScope.error	= err.data.message;
			});
			
		$scope.check = function(){
			
			if( $scope.answer.text == undefined ) return $rootScope.error = 'You must select an answer before continuing...';
			
			if( $scope.answer.correct ){
				++$scope.score;
			} else {
				var correct 		= $scope.question.answers.find(function( answer ){
					return answer.correct;
				}).text;
				
				$rootScope.error	= 'Wrong! The correct answer was, "' + correct + '"';
			}
			
			if( $scope.questions.length > 0 ){
				$scope.question 	= randomQuestion();
			} else {
				if( $scope.score >= passing ){
					$rootScope.success = 'You passed and scored a ' + $scope.score + ' out of ' + $scope.total;
				} else {
					$rootScope.error = 'You failed and scored a ' + $scope.score + ' out of ' + $scope.total;
				}
			}
			++$scope.number;
			$scope.answer = {};
			$( '.ui.progress' ).progress({ value: $scope.number });
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
		
	}
	
	function shuffle( array ) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		
		while( 0 !== currentIndex ){
			
			// Pick a remaining element...
			randomIndex = Math.floor( Math.random() * currentIndex );
			currentIndex -= 1;
			
			// And swap it with the current element.
			temporaryValue			= array[ currentIndex ];
			array[ currentIndex ]	= array[ randomIndex ];
			array[ randomIndex ]	= temporaryValue;
		}
		
		return array;
	}
	
})();