import React, { useEffect, useRef, useState } from 'react'
import { usePrevious } from '../../utilities/hooks'
import { useSwipeable } from 'react-swipeable'
import './style.css'

function Component( props ){

    const [ active, setActive ] = useState( 0 ),
    contentRef = useRef( null ),
    containerRef = useRef( null ),
    prevActive = usePrevious( active );

    useEffect(() => {

        // slide to the correct slide
        if( active !== prevActive ){
            let newActive = getSlides().find( ( slide, index ) => ( index === active ) );
            containerRef.current.style.left = '-' + newActive.offsetLeft + 'px';
        } 

        // make sure all the slides are the right width
        getSlides().forEach( elem => elem.style.width = contentRef.current.offsetWidth + 'px' )

    });

    /**
     * @name getSlides
     * @function
     * @description Retrieves the slides embedded in this component
     */
    const getSlides = () => Array.from( containerRef.current.children );

    /**
     * @name handleClick
     * @function
     * @description Handles click of the navigation circles
     * @param {*} e 
     */
    const handleClick = e => setActive( Number( e.target.dataset.index ) );

    /**
     * @name handleSwipeLeft
     * @function
     * @description Handles when the user swipes left
     */
    const handleSwipeLeft = () => {
        if( active === ( getSlides().length - 1 ) ) return;
        setActive( active + 1 );
    }

    /**
     * @name handleSwipeRight
     * @function
     * @description Handles when the user swipes right
     */
    const handleSwipeRight = () => {
        if( active === 0 ) return;
        setActive( active - 1 );
    }

    /**
     * @name swipeHandlers
     * @object
     * @description Swipe event hook
     */
    const swipeHandlers = useSwipeable({ onSwipedLeft: handleSwipeLeft, onSwipedRight: handleSwipeRight })

    return (
        <div className="slider" { ...swipeHandlers }>
            <section className="slider__content" ref={ contentRef }>
                <div className="slider__content__container" ref={ containerRef }>
                    { props.children }
                </div>                
            </section>
            <menu className="slider__controls">
                {
                    props.children.map(
                        ( child, index ) => (
                            <li className={ `slider__controls__control ${ active === index ? 'slider__controls__control--active' : '' }` } key={ `slide-${ index }` }>
                                <button data-index={ index } onClick={ handleClick } />
                            </li>
                        )
                    )
                }
            </menu>
        </div>
    )

}

export default Component