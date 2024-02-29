
const clouds = Array.from( document.querySelectorAll( '.cloud' ) );
const proficiencies = document.querySelector( '.proficiencies' );
const buttons = Array.from( proficiencies.querySelectorAll( 'img[role]' ) );
const drawer = proficiencies.nextElementSibling;

const handleClick = ( e ) => {
    const { currentTarget: button } = e,
    { id } = button,
    current = drawer.querySelector( '[aria-describedby]:not([hidden])' ),
    next = drawer.querySelector( `[aria-describedby="${id }"]` );
    e.preventDefault();
    current?.setAttribute( 'hidden', true );
    next.removeAttribute( 'hidden' );
}

let lastY = 0;

window.addEventListener( 'scroll', () => {
    
    const { scrollY } = window,
    direction = scrollY > lastY ? 0.5 : -0.5;

    lastY = scrollY;

    clouds.forEach(( cloud ) => {
        const left = parseFloat( cloud.style.left.replace( 'px', '' ), 10 ) + direction ;
        cloud.style.left = `${ left }px`;
    });

}, true );

buttons.forEach( ( button ) => {
    button.addEventListener( 'click', handleClick, true );
})