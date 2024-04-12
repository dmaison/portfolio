
const clouds = Array.from( document.querySelectorAll( '.cloud' ) );

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
