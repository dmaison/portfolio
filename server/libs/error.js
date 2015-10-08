var clc = require('cli-color');
exports.send = function( res, method, status, route, message ){
	res.status( status );
    console.log( clc.redBright( 'Error: ' ) + clc.cyanBright( method ) + ' to ' + clc.whiteBright( route ) + ': ' + message );
    res.send({ message: message });
    return false;    
};