import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as ICONS from './config'
import facebook from './img/facebook.js'
import github from './img/github.js'
import instagram from './img/instagram.js'
import linkedin from './img/linkedin.js'
import stackOverflow from './img/stack-overflow.js'
import steam from './img/steam.js'
import twitch from './img/twitch.js'
import './style.css'

function Component( props ){

    const [ icon, setIcon ] = useState( null );

    useEffect(() => {

        switch( props.name ){
            case ICONS.FACEBOOK:
                setIcon( facebook );
                break;
            case ICONS.GITHUB:
                setIcon( github );
                break;
            case ICONS.INSTAGRAM:
                setIcon( instagram );
                break;
            case ICONS.LINKEDIN:
                setIcon( linkedin );
                break;
            case ICONS.STACK_OVERFLOW:
                setIcon( stackOverflow );
                break;
            case ICONS.STEAM:
                setIcon( steam );
                break;
            case ICONS.TWITCH:
                setIcon( twitch );
                break;
            default:
                break;
        }

    }, [ props.name ])

    return (
        <a href={ props.href } className="icon" title={ props.name } rel="noopener noreferrer" target="_blank">
            { icon }
        </a>
    )
}

Component.propTypes = {
    name: PropTypes.oneOf([ ICONS.FACEBOOK, ICONS.LINKEDIN, ICONS.GITHUB, ICONS.INSTAGRAM, ICONS.STACK_OVERFLOW, ICONS.STEAM, ICONS.TWITCH ]).isRequired
}

export default Component