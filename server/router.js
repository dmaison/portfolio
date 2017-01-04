var express 	= require( 'express' );
var router		= express.Router();
var path		= require( 'path' ).dirname( require.main.filename );

// game demo
router.get( '/game', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/client/examples/game.html' );
});

// ar stuff
router.get( '/g', function( req, res ){
	if( req.query.p == '$.P' ){
		res.status( 200 );
		res.sendFile( path + '/client/views/stegosaurus.html' );
	} else {
		res.redirect( '/401' );
	}
});

router.get( '/401', function( req, res ){
	res.status( 401 );
	res.sendFile( path + '/client/views/401.html' );
});

// Front end
router.get( '*', function( req, res ){
	res.status( 200 );
	res.sendFile( path + '/client/index.html' );
});

module.exports = router;