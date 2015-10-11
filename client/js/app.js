angular
	.module( 'app', [ 'pagination', 'dropdown', 'ngRoute', 'ngAnimate', 'routes', 'app.main', 'app.resume', 'app.portfolio', 'app.examples', 'app.contact' ])
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
	});