import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as ICONS from './config'
import clock from './img/clock.js'
import contact from './img/contact-card.js'
import email from './img/email.js'
import facebook from './img/facebook.js'
import folder from './img/folder.js'
import github from './img/github.js'
import hat from './img/hat.js'
import history from './img/history.js'
import instagram from './img/instagram.js'
import linkedin from './img/linkedin.js'
import phone from './img/phone.js'
import resume from './img/resume.js'
import stackOverflow from './img/stack-overflow.js'
import user from './img/user.js'
import './style.css'

function Component( props ){

    const [ icon, setIcon ] = useState( null );

    useEffect(() => {

        switch( props.name ){
            case ICONS.CLOCK:
                setIcon( clock );
                break;
            case ICONS.CONTACT:
                setIcon( contact );
                break;
            case ICONS.EMAIL:
                setIcon( email );
                break;
            case ICONS.FACEBOOK:
                setIcon( facebook );
                break;
            case ICONS.FOLDER:
                setIcon( folder );
                break;
            case ICONS.GITHUB:
                setIcon( github );
                break;
            case ICONS.HAT:
                setIcon( hat );
                break;
            case ICONS.HISTORY:
                setIcon( history );
                break;
            case ICONS.INSTAGRAM:
                setIcon( instagram );
                break;
            case ICONS.LINKEDIN:
                setIcon( linkedin );
                break;
            case ICONS.PHONE:
                setIcon( phone );
                break;
            case ICONS.RESUME:
                setIcon( resume );
                break;
            case ICONS.STACK_OVERFLOW:
                setIcon( stackOverflow );
                break;
            case ICONS.USER:
                setIcon( user );
                break;
            default:
                break;
        }

    }, [ props.name ])

    return (
        <span className={ `icon icon--${ props.color } icon--${ props.size }` }>
            { icon }
        </span>
    )
}

Component.defaultProps = {
    color: 'white',
    size: 'medium'
}

Component.propTypes = {
    color: PropTypes.oneOf([ 'white', 'blue', 'yellow' ]),
    name: PropTypes.oneOf([ ICONS.CLOCK, ICONS.CONTACT, ICONS.EMAIL, ICONS.FACEBOOK, ICONS.FOLDER, ICONS.GITHUB, ICONS.HAT, ICONS.HISTORY, ICONS.INSTAGRAM, ICONS.LINKEDIN, ICONS.PHONE, ICONS.RESUME, ICONS.STACK_OVERFLOW, ICONS.USER ]).isRequired,
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
}

export default Component