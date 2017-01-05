/* global angular  */

(function() {
    'use strict';
	
	angular
		.module( 'app', [
		
		//libs
		'ngRoute', 
		'ngAnimate', 
		'angulartics', 
		'angulartics.google.analytics',
		
		//modules
		'app.main', 
		'app.resume', 
		'app.portfolio', 
		'app.examples', 
		'app.contact', 
		'app.dna', 
		'app.study',
		'app.chasingBallmer',
		'app.presents'
	]);
	
})();