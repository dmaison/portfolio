import '../css/index.css';
import { DOMReady } from './events';
import { getQuadrant } from './window';


const 

handleMouseMove = ( header, e ) => { 
    const { pageX: x, pageY: y } = e,
    [ shadowX, shadowY ] = getQuadrant( x, y );
    header.style.setProperty( '--x', shadowX );
    header.style.setProperty( '--y', shadowY );
},

init = () => {
    const header = document.querySelector( 'header' );
    document.addEventListener( 'mousemove', handleMouseMove.bind( null, header ), true );
}

DOMReady( init );