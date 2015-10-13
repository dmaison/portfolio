/* MODULES -------------------- */
var express 		= require( 'express' );
var app 			= express();
var bodyParser 		= require( 'body-parser' );
var methodOverride 	= require( 'method-override' );
var session 		= require( 'express-session' );
var cookieParser 	= require( 'cookie-parser' );
var clc 			= require('cli-color');


/* CONFIGURATION -------------------- */

// config file
var config 				= require( './config' );

// set app port
var port 			= process.env.PORT || 8080;

// parse request objects
app.use( bodyParser.json() );

// set content type of server response
app.use( bodyParser.json({ type: 'application/vnd.api+json' }) );

// parse application/x-www-form-urlencoded (???)
app.use( bodyParser.urlencoded({ extended: true }) );

// set default methods: get, post, put, delete
app.use( methodOverride( 'X-HTTP-Method-Override' ) );

// set base directory for client side resources
app.use( express.static(__dirname + '/client') ); 

/* ROUTES -------------------- */

// set routes
require( './server/router' )( app, __dirname );

/* START APP -------------------- */
app.listen( port );
console.log( 'Server running on port ' + clc.greenBright( port ) );

// expose app
exports = module.exports = app;