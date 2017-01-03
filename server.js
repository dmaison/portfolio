var express 		= require( 'express' );
var bodyParser 		= require( 'body-parser' );
var methodOverride 	= require( 'method-override' );
var clc 			= require( 'cli-color' );
var port 			= process.env.PORT || 8081;
var app 			= express();

app.use( bodyParser.json() );
app.use( bodyParser.json({ type: 'application/vnd.api+json' }) );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( methodOverride( 'X-HTTP-Method-Override' ) );
app.use( express.static(__dirname + '/client') ); 
app.use( '/api', require( './server/router.api' ) );
app.use( '/', require( './server/router' ) );

app.listen( port );
console.log( 'Server running on port ' + clc.greenBright( port ) );

exports = module.exports = app;