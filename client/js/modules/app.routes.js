/* global angular */
(function() {
    'use strict';
    
	angular
		.module( 'app.routes', [] )
		.config( [ '$routeProvider', '$locationProvider', configRoutes ]);
	
	function configRoutes( $routeProvider, $locationProvider ){
		
		$locationProvider.html5Mode( true );
		
		$routeProvider
			.when( '/', {
				templateUrl	: 'views/home.html',
				controller 	: 'main'
			})
			.when( '/chasing-ballmer', {
				templateUrl	: 'views/chasing-ballmer.html',
				controller 	: 'chasingBallmer'
			})
			.when( '/contact', {
				templateUrl	: 'views/contact.html',
				controller 	: 'contact'
			})
			.when( '/dna', {
				templateUrl	: 'views/dna.html',
				controller 	: 'dna'
			})
			.when( '/examples', {
				templateUrl	: 'views/examples.html',
				controller 	: 'examples',
				reloadOnSearch: false
			})
			.when( '/grab', {
				templateUrl	: 'views/grab-em-by-the-presents.html',
				controller 	: 'presents'
			})
			.when( '/grab-em-by-the-presents', {
				templateUrl	: 'views/grab-em-by-the-presents.html',
				controller 	: 'presents'
			})
			.when( '/portfolio', {
				templateUrl	: 'views/portfolio.html',
				controller 	: 'portfolio'
			})
			.when( '/resume', {
				templateUrl	: 'views/resume.html',
				controller 	: 'resume',
				reloadOnSearch: false
			})
			.when( '/study', {
				templateUrl	: 'views/study.html',
				controller 	: 'study'
			})
			.otherwise({
				templateUrl : 'views/404.html'
			});
		
	}
	
})();