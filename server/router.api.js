var fs 			= require( 'fs' );
var Error 		= require( './libs/error' );
var nodemailer 	= require( 'nodemailer' );
var async 		= require( 'async' );
var config 		= require( './config' );
var path		= require( 'path' ).dirname( require.main.filename );
var express 	= require( 'express' );
var router		= express.Router();

router.get( '/console', function( req, res ){
	var list =	'./js/modules/portfolio.js:13:5;\n' +
				'./js/directives/dropdown.js:57:35;\n' +
				'./index.html:66:54\n' +
				'./js/modules/examples.js:12:40\n' +
				'./js/factories/chasing-ballmer.js:14:24\n' +
				'./css/style.css:44:29\n' +
				'./views/grab-em-by-the-presents.html:4:19';
				
	res.status( 200 );
	res.send({ 
		message: new Buffer( 'portfolio encryption puzzle' ).toString( 'base64' ), 
		style:  new Buffer( 'font-size: 30px; font-family: impact; text-transform: uppercase;' ).toString( 'base64' ),
		cipher: new Buffer( 'GET: \n' + list ).toString( 'base64' ) //  /g?p=$.P
	});
});

router.get( '/drinks', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/server/data/drinks.json' );
});

router.get( '/presents', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/server/data/presents.json' );
});

router.get( '/7lvl', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/server/data/7lvl.json' );
});

router.get( '/menu', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/server/data/menu.json' );
});

router.get( '/experience', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/server/data/jobs.json' );
});

router.get( '/qualifications/', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/server/data/languages.json' );
});

router.get( '/portfolio/', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/server/data/portfolio.json' );
});

router.get( '/dna/', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/server/data/dna.json' );
});

router.post( '/contact/', function( req, res ){
	
	// Error checking
	if( !req.body.sender ) return Error.send( res, req.method, 400, req.originalUrl, 'No email provided.' );
	if( !req.body.subject ) return Error.send( res, req.method, 400, req.originalUrl, 'No subject provided.' );
	if( !req.body.body ) return Error.send( res, req.method, 400, req.originalUrl, 'No message provided.' );
	if( String( req.body.subject ).length > 78 ) return Error.send( res, req.method, 400, '/contact/', 'The provided subject exceeds 78 characters.' );
	
	async.waterfall([
		
		function( callback ){
			fs.readFile('./server/emails/contact.html', function( err, html ){
				if( err ) return callback( err, null );
				return callback( null, String( html ) );
			});
		},
		
		function( html, callback ){
			
			html = html
					.replace( /{{message}}/gi, req.body.body )
					.replace( /{{email}}/gi, req.body.sender );
					
			var transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: config.gmail.username,
					pass: config.gmail.password
				}
			});
			
			var options = {
				from: req.body.sender,
				to: config.gmail.username,
				cc: req.body.body,
				subject: req.body.subject,
				text: req.body.body,
				html: html
			};
			
			transporter.sendMail( options, function( err, info ){
				if( err ) return callback( err, null );
				return callback( null, info.response );
			});
		}
		
	], 
	
	function( err, result ){
		if( err ) return Error.send( res, req.method, 500, req.originalUrl, err );
		res.status( 200 );
		res.send({ message: 'Thank you for your interest! The email was successfully delivered with you CC\'d on it, and I will get back to you as soon as possible.' });
	});
	
});

module.exports = router;