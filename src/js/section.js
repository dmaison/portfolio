/**
 * Classname for nav links
 * @type {string}
 */
const CLASS_LINK = 'nav__item__link';

/**
 * Classname for active nav links
 * @type {string}
 */
const CLASS_LINK_ACTIVE = `${ CLASS_LINK }--active`;

/**
 * Sets a link item with the active class and removes it from the previously active link
 * @param {HTMLElement} next Next element to become active
 */
const setActive = ( next ) => {
    document.querySelector( `.${CLASS_LINK_ACTIVE}` )?.classList.remove( CLASS_LINK_ACTIVE );
    next.classList.add( CLASS_LINK_ACTIVE );
};

/**
 * Callback of the intersection observer, sets the active element to scroll
 * @param {Array} entries Array of IntersectionObserverEntry objects
 */
const handleIntersection = ( entries ) => {
    entries.forEach( ( entry ) => {
        const { isIntersecting, target } = entry,
            link = document.querySelector( `.${CLASS_LINK}[href="#${target.id}"]` );
        if ( isIntersecting ) {
            setActive( link );
        }
    } );
};

/**
 * Observer for sections
 * @type {IntersectionObserver}
 */
const observer = new IntersectionObserver( handleIntersection, {
    rootMargin: '120px',
    threshold: 1,
} );

/**
 * Array of available sections
 * @type {array}
 */
const sections = Array.from( document.querySelectorAll( `.section` ) ); 

sections.forEach( ( section ) => {
    observer.observe( section );
} );