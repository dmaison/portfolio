import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as ICONS from './config'
import angular from './img/angular.js'
import clock from './img/clock.js'
import contact from './img/contact-card.js'
import css from './img/css.js'
import email from './img/email.js'
import facebook from './img/facebook.js'
import folder from './img/folder.js'
import gaming from './img/gaming.js'
import github from './img/github.js'
import hammer from './img/hammer.js'
import hat from './img/hat.js'
import history from './img/history.js'
import html from './img/html.js'
import instagram from './img/instagram.js'
import js from './img/js.js'
import linkedin from './img/linkedin.js'
import musician from './img/musician.js'
import node from './img/node.js'
import phone from './img/phone.js'
import professional from './img/professional'
import react from './img/react.js'
import resume from './img/resume.js'
import stackOverflow from './img/stack-overflow.js'
import strongman from './img/strongman.js'
import user from './img/user.js'

import './style.css'


function Component( props ){

    const [ icon, setIcon ] = useState( null );

    useEffect(() => {

        switch( props.name ){
            case ICONS.ANGULAR:
                setIcon( angular );
                break;
            case ICONS.CLOCK:
                setIcon( clock );
                break;
            case ICONS.CONTACT:
                setIcon( contact );
                break;
            case ICONS.CSS:
                setIcon( css );
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
            case ICONS.GAMING:
                setIcon( gaming );
                break;
            case ICONS.GITHUB:
                setIcon( github );
                break;
            case ICONS.HAMMER:
                setIcon( hammer );
                break;
            case ICONS.HAT:
                setIcon( hat );
                break;
            case ICONS.HISTORY:
                setIcon( history );
                break;
            case ICONS.HTML:
                setIcon( html );
                break;
            case ICONS.INSTAGRAM:
                setIcon( instagram );
                break;
            case ICONS.JS:
                setIcon( js );
                break;
            case ICONS.LINKEDIN:
                setIcon( linkedin );
                break;
            case ICONS.MUSICIAN:
                setIcon( musician );
                break;
            case ICONS.NODE:
                setIcon( node );
                break;
            case ICONS.PHONE:
                setIcon( phone );
                break;
            case ICONS.PROFESSIONAL:
                setIcon( professional );
                break;
            case ICONS.REACT:
                setIcon( react );
                break;
            case ICONS.RESUME:
                setIcon( resume );
                break;
            case ICONS.STACK_OVERFLOW:
                setIcon( stackOverflow );
                break;
            case ICONS.STRONGMAN:
                setIcon( strongman );
                break;
            case ICONS.USER:
            case ICONS.PERSONAL:
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
    name: PropTypes.oneOf([ ICONS.CLOCK, ICONS.CONTACT, ICONS.EMAIL, ICONS.FACEBOOK, ICONS.FOLDER, ICONS.GAMING, ICONS.GITHUB, ICONS.HAMMER, ICONS.HAT, ICONS.HISTORY, ICONS.INSTAGRAM, ICONS.LINKEDIN, ICONS.MUSICIAN, ICONS.PERSONAL, ICONS.PHONE, ICONS.PROFESSIONAL, ICONS.RESUME, ICONS.STACK_OVERFLOW, ICONS.STRONGMAN, ICONS.USER ]).isRequired,
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
}

export default Component