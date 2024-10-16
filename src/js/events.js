/**
 * Function to execute when DOM is ready to be manipulated. This is a
 * replacement for jQuery's `$(document).ready()`
 * @param {Function} cb Function to execute when DOM is ready
 */
export const DOMReady = ( cb ) => {
	if ( document.readyState === 'complete' || document.readyState === 'interactive' ) {
		cb();
	} else {
		document.addEventListener( 'DOMContentLoaded', cb );
	}
};
