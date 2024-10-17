import '../css/index.css';
import { DOMReady } from './events';
import { getQuadrant } from './window';


const 

/**
 * Handle hash change
 */
handleHashChange = () => {
    const className = 'active',
    { hash } = window.location,
    current = document.querySelector( `nav a.${className}` ),
    next = document.querySelector( `nav a[href="${hash}"]` ),
    color = hash.replace( '#', '' ) || 'none';
    document.documentElement.style.setProperty( '--c-accent-100', `var( --c-${color} )` );

    current?.classList.remove( className );
    next?.classList.add( className );
},

/**
 * Update the light directions
 */
handleMouseMove = ( header, e ) => { 
    const { pageX: x, pageY: y } = e,
    [ shadowX, shadowY ] = getQuadrant( x, y );
    header.style.setProperty( '--x', shadowX );
    header.style.setProperty( '--y', shadowY );
},

/**
 * Initialize the page
 */
init = () => {
    const header = document.querySelector( 'header' );
    document.addEventListener( 'mousemove', handleMouseMove.bind( null, header ), true );
    handleHashChange();
}

DOMReady( init );

window.addEventListener( 'hashchange', handleHashChange, false );