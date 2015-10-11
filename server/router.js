var fs 			= require( 'fs' );
var Error 		= require( './libs/error' );
var nodemailer 	= require( 'nodemailer' );
var async 		= require( 'async' );
var async 		= require( './config' );

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

	app.post( '/api/contact/', function( req, res ){
		
		if( !req.body.email ) return Error.send( res, 'POST', 400, '/contact/', 'No email provided.' );
		if( !req.body.subject ) return Error.send( res, 'POST', 400, '/contact/', 'No subject provided.' );
		if( !req.body.message ) return Error.send( res, 'POST', 400, '/contact/', 'No message provided.' );

		async.waterfall([

			function( callback ){
				fs.readFile('./server/email/contact.html', function( err, html ){
					if( err ) return callback( err, null );
					return callback( null, html );
				});
			},

			function( html, callback ){
				var transporter = nodemailer.createTransport({
				    service: 'Gmail',
				    auth: {
				        user: 'gmail.user@gmail.com',
				        pass: 'userpass'
				    }
				});

				var mailOptions = {
				    from: req.body.email,
				    to: 'davemaison@gmail.com',
				    subject: req.body.subject,
				    text: req.body.message,
				    html: html
				};

				transporter.sendMail(mailOptions, function( err, info ){
				    if( err ) return callback( err, null );
				    return callback( null, info.response );
				});
			}

		], 

		function( err, result ){
			if( err ) return Error.send( res, 'POST', 500, '/contact/', err );
			res.status( 200 );
			res.send({ message: 'Thank you for your interest! The email was successfully sent, and I will get back to you as soon as possible.' });
		});

	});

	// Front end
	app.get( '*', function( req, res ){
		res.sendFile( dir + '/client/views/index.html' );
	});
	
}