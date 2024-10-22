import '../css/index.css';
import { DOMReady } from './events';
import { getQuadrant } from './window';


const 

/**
 * 
 */
handleClick = ( e ) => {
    const { currentTarget: button } = e;

},

/**
 * Handle hash change
 */
handleHashChange = () => {
    const className = 'active',
    sections = Array.from( document.querySelectorAll( 'main section' ) ),
    { hash } = window.location,
    current = document.querySelector( `nav a.${className}` ),
    next = document.querySelector( `nav a[href="${hash}"]` ),
    color = hash.replace( '#', '' ) || 'none';
    document.documentElement.style.setProperty( '--c-accent-100', `var( --c-${color} )` );

    current?.classList.remove( className );
    next?.classList.add( className );

    sections.forEach(( section ) => {
        if( `#${section.id}`=== hash ){
            section.removeAttribute( 'hidden' );
        } else {
            section.setAttribute( 'hidden', '' );
        }
    })
},

/**
 * Update the light directions
 */
handleMouseMove = ( e ) => { 
    const { pageX: x, pageY: y } = e,
    [ shadowX, shadowY ] = getQuadrant( x, y );
    document.documentElement.style.setProperty( '--x', shadowX );
    document.documentElement.style.setProperty( '--y', shadowY );
},

/**
 * Initialize the page
 */
init = () => {
    document.addEventListener( 'mousemove', handleMouseMove, true );
    handleHashChange();
}

DOMReady( init );

window.addEventListener( 'hashchange', handleHashChange, false );