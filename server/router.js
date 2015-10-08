var fs 		= require( 'fs' );
var Error 	= require( './libs/error' );

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

	// Front end
	app.get( '*', function( req, res ){
		res.sendFile( dir + '/client/views/index.html' );
	});
	
}