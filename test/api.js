var expect     	= require( 'chai' ).expect;
var request    	= require( 'request' );
var config      = require( '../server/config' );

// site is small enough to do in one file
describe( 'API Routes', function(){
	
	describe( 'Retrieve a list of drink recipes', function() {
		
		var route = '/api/drinks';
		
		it ('Returns a status of 200', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				expect( res.statusCode ).to.equal( 200 );
				done();
			});
		});
		
		it( 'Returns an array of objects', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				body = JSON.parse( body ); 
				expect( body ).to.be.an( 'array' );
				expect( body[ 0 ] ).to.be.an( 'object' );
				done();
			});
		});
		
	});
	
	describe( 'Retrieve a list of buyers of christmas gifts', function() {
		
		var route = '/api/presents';
		
		it ('Returns a status of 200', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				expect( res.statusCode ).to.equal( 200 );
				done();
			});
		});
		
		it( 'Returns an array of objects', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				body = JSON.parse( body ); 
				expect( body ).to.be.an( 'array' );
				expect( body[ 0 ] ).to.be.an( 'object' );
				done();
			});
		});
		
	});
	
	describe( 'Retrieve 7 level testing questions', function() {
		
		var route = '/api/7lvl';
		
		it ('Returns a status of 200', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				expect( res.statusCode ).to.equal( 200 );
				done();
			});
		});
		
		it( 'Returns an array of objects', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				body = JSON.parse( body ); 
				expect( body ).to.be.an( 'array' );
				expect( body[ 0 ] ).to.be.an( 'object' );
				done();
			});
		});
		
	});
	
	describe( 'Retrieve site navigation', function() {
		
		var route = '/api/menu';
		
		it ('Returns a status of 200', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				expect( res.statusCode ).to.equal( 200 );
				done();
			});
		});
		
		it( 'Returns an array of objects', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				body = JSON.parse( body ); 
				expect( body ).to.be.an( 'array' );
				expect( body[ 0 ] ).to.be.an( 'object' );
				done();
			});
		});
		
	});
	
	describe( 'Retrieve work history', function() {
		
		var route = '/api/experience';
		
		it ('Returns a status of 200', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				expect( res.statusCode ).to.equal( 200 );
				done();
			});
		});
		
		it( 'Returns an array of objects', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				body = JSON.parse( body ); 
				expect( body ).to.be.an( 'array' );
				expect( body[ 0 ] ).to.be.an( 'object' );
				done();
			});
		});
		
	});
	
	describe( 'Retrieve list of qualifications', function() {
		
		var route = '/api/qualifications';
		
		it ('Returns a status of 200', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				expect( res.statusCode ).to.equal( 200 );
				done();
			});
		});
		
		it( 'Returns an array of objects', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				body = JSON.parse( body ); 
				expect( body ).to.be.an( 'array' );
				expect( body[ 0 ] ).to.be.an( 'object' );
				done();
			});
		});
		
	});
	
	describe( 'Retrieve portfolio content', function() {
		
		var route = '/api/portfolio';
		
		it ('Returns a status of 200', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				expect( res.statusCode ).to.equal( 200 );
				done();
			});
		});
		
		it( 'Returns an array of objects', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				body = JSON.parse( body ); 
				expect( body ).to.be.an( 'array' );
				expect( body[ 0 ] ).to.be.an( 'object' );
				done();
			});
		});
		
	});
	
	describe( 'Retrieve DNA composition', function() {
		
		var route = '/api/dna';
		
		it ('Returns a status of 200', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				expect( res.statusCode ).to.equal( 200 );
				done();
			});
		});
		
		it( 'Returns an array of objects', function( done ){
			get( route, function( error, res, body ) {
				expect( error ).to.equal( null );
				body = JSON.parse( body ); 
				expect( body ).to.be.an( 'object' );
				expect( body ).to.have.keys( 'haplogroup', 'blood', 'neanderthal', 'composition' );
				done();
			});
		});
		
	});
	
});

function get( route, callback ){
    request.get( config[ process.env.NODE_ENV ].server + route, callback );
}