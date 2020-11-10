import React, { useEffect, useRef, useState } from 'react'
import { usePrevious } from '../../utilities/hooks'
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

    const getSlides = () => Array.from( containerRef.current.children );

    const handleClick = e => setActive( Number( e.target.dataset.index ) );

    return (
        <>
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
        </>
    )

}

export default Component