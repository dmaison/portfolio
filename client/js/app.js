angular
	.module( 'app', ['ngRoute', 'ngAnimate', 'routes', 'app.main', 'app.resume', 'app.portfolio' ])
	.run(function() {
		setInterval(updateGradient,10);
	});