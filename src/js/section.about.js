const CLASS__CONTAINER = 'features';
const CLASS__DETAILS = `${ CLASS__CONTAINER }__details`;
const features = document.querySelector( `.${CLASS__CONTAINER}` );
const details = features.querySelector( `.${ CLASS__DETAILS }` );
const [ title, description ] = details.children;
const imgs = Array.from( features.querySelectorAll( 'img' ) );
const fadeOut = [{ opacity: 1}, {opacity: 0 }];
const fadeIn = [{ opacity: 0},{ opacity: 1 }];
const timing = {
    ease: 'ease-out',
    duration: 500
};
const data = {
    AWS: 'EC2, S3, Route53, Lambda, CloudFront...',
    'Database Architecture': 'SQL, MongoDB, Redis',
    HTML: 'HTML5, XHTML, XML, the whole gang',
    CSS: 'CSS3, LESS, SASS',
    JS: 'ECMAScript, ReactJS, AngularJS, NodeJS',
    Solidity: 'ERC20, ERC721, Hardhat, Web3',
    Ubuntu: 'CLI (bash, vim, nano, etc.)'
}

/**
 * Fades the element, replaces it's text, then fades back in
 * @param {HTMLElement} elem Element to animate
 * @param {string} newText Text to update with
 */
const phaseElem = ( elem, newText ) => {
    const anim = elem.animate( fadeOut, timing );
    anim.onfinish = () => {
        elem.animate( fadeIn, timing );
        elem.textContent = newText;
        
    }
};

/**
 * Tell the title/description to change
 * @param {object} e Event listener object
 */
const updateText = ( e ) => {
    const { alt } = e.currentTarget;
    phaseElem(title, alt);
    phaseElem(description, data[ alt ]);
}

features.style.setProperty( '--total', imgs.length );

imgs.forEach(( img, index ) => {
    img.style.setProperty( '--i', index + 1 );
    img.addEventListener( 'mouseenter', updateText, true );
});
