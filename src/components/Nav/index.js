import React from 'react'
import { NavLink } from 'react-router-dom'
import * as PATHS from './config'
import Icon from '../Icon'
import './style.css'

const Component = () => (
    <nav role="navigation" className="navigation">
        <NavLink className="navigation__item navigation__item--contact" activeClassName="navigation__item--active" to={ PATHS.CONTACT } title="Contact Information">
            <Icon name="contact" color="white" size="large" />
        </NavLink>
        <NavLink className="navigation__item navigation__item--work-history" activeClassName="navigation__item--active" to={ PATHS.WORK_HISTORY } title="Work history">
            <Icon name="history" color="white" size="large" />
        </NavLink>
        <NavLink className="navigation__item navigation__item--portfolio" activeClassName="navigation__item--active" to={ PATHS.PORTFOLIO } title="Portfolio">
            <Icon name="folder" color="white" size="large" />
        </NavLink>
        <a className="navigation__item navigation__item--facebook" href={ PATHS.FACEBOOK } target="_blank" rel="noopener noreferrer" title="Facebook">
            <Icon name="facebook" color="white" size="large" />
        </a>
        <a className="navigation__item navigation__item--instagram" href={ PATHS.INSTAGRAM } target="_blank" rel="noopener noreferrer" title="Instagram">
            <Icon name="instagram" color="white" size="large" />
        </a>
        <a className="navigation__item navigation__item--stack-overflow" href={ PATHS.STACK_OVERFLOW } target="_blank" rel="noopener noreferrer" title="Stack Overflow">
            <Icon name="stack overflow" color="white" size="large" />
        </a>
        <a className="navigation__item navigation__item--github" href={ PATHS.GITHUB } target="_blank" rel="noopener noreferrer" title="Github">
            <Icon name="github" color="white" size="large" />
        </a>
    </nav>
)

export default Component