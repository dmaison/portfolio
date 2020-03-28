import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from './img/contact'
import History from './img/history'
import Project from './img/project'
import './style.css'

const Component = () => (
    <nav role="navigation" className="navigation">
        <NavLink className="navigation__item navigation__item--contact" activeClassName="navigation__item--active" to="/contact" title="Contact Information">
            { Contact }
        </NavLink>
        <NavLink className="navigation__item navigation__item--projects" activeClassName="navigation__item--active" to="/projects" title="Personal Projects">
            { Project }
        </NavLink>
        <NavLink className="navigation__item navigation__item--experience" activeClassName="navigation__item--active" to="/experience" title="Work History">
            { History }
        </NavLink>
    </nav>
)

export default Component