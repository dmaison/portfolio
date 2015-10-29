var fs 			= require( 'fs' );
var Error 		= require( './libs/error' );
var nodemailer 	= require( 'nodemailer' );
var async 		= require( 'async' );
var config 		= require( './config' );

module.exports = function( app, dir ){
	
	app.get( '/api/experience', function( req, res ){
		fs.readFile('./server/data/jobs.json', function( err, jobs ){
            if( err ) return Error.send( res, 'GET', 500, '/experience/', err );
			res.status( 200 );
			res.send( jobs );
		});
	});

	app.get( '/api/qualifications/', function( req, res ){
		fs.readFile('./server/data/languages.json', function( err, langs ){
			if( err ) return Error.send( res, 'GET', 500, '/qualifications/', err );
			res.status( 200 );
			res.send( langs );
		});
	});

	app.get( '/api/portfolio/', function( req, res ){
		fs.readFile('./server/data/portfolio.json', function( err, sites ){
			if( err ) return Error.send( res, 'GET', 500, '/portfolio/', err );
			res.status( 200 );
			res.send( sites );
		});
	});

	app.get( '/api/dna/', function( req, res ){
		fs.readFile('./server/data/dna.json', function( err, dna ){
			if( err ) return Error.send( res, 'GET', 500, '/dna/', err );
			res.status( 200 );
			res.send( dna );
		});
	});

	app.post( '/api/contact/', function( req, res ){
		
		// Error checking
		if( !req.body.email ) return Error.send( res, 'POST', 400, '/contact/', 'No email provided.' );
		if( !req.body.subject ) return Error.send( res, 'POST', 400, '/contact/', 'No subject provided.' );
		if( !req.body.message ) return Error.send( res, 'POST', 400, '/contact/', 'No message provided.' );
		if( String( req.body.subject ).length > 78 ) return Error.send( res, 'POST', 400, '/contact/', 'The provided subject exceeds 78 characters.' );

		async.waterfall([

			function( callback ){
				fs.readFile('./server/emails/contact.html', function( err, html ){
					if( err ) return callback( err, null );
					return callback( null, String( html ) );
				});
			},

			function( html, callback ){

				html = html
						.replace( /{{message}}/gi, req.body.message )
						.replace( /{{email}}/gi, req.body.email );

				var transporter = nodemailer.createTransport({
				    service: 'Gmail',
				    auth: {
				        user: config.gmail.username,
				        pass: config.gmail.password
				    }
				});

				var options = {
				    from: req.body.email,
				    to: config.gmail.username,
				    cc: req.body.email,
				    subject: req.body.subject,
				    text: req.body.message,
				    html: html
				};

				transporter.sendMail( options, function( err, info ){
				    if( err ) return callback( err, null );
				    return callback( null, info.response );
				});
			}

		], 

		function( err, result ){
			if( err ) return Error.send( res, 'POST', 500, '/contact/', err );
			res.status( 200 );
			res.send({ message: 'Thank you for your interest! The email was successfully delivered with you CC\'d on it, and I will get back to you as soon as possible.' });
		});

	});

	// game demo
	app.get( '/game', function( req, res ){
		res.sendFile( dir + '/client/examples/game.html' );
	});

	// Front end
	app.get( '*', function( req, res ){
		res.sendFile( dir + '/client/views/index.html' );
	});
	
}