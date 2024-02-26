const features = document.querySelector( '.features' );
const imgs = Array.from( features.querySelectorAll( 'img' ) );

features.style.setProperty( '--total', imgs.length );

imgs.forEach(( img, index ) => {
    img.style.setProperty( '--i', index + 1 );
})
