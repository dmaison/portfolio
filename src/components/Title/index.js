import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './dave.maison.svg'
import './style.css'

const Component = () => (
    <h1 className="title">
        <NavLink to="/">
            <img src={ Icon } alt="dave.maison" />
        </NavLink>
    </h1>
)

export default Component