import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Component = () => (
    <h1 className="masthead">
        <NavLink to="/">dave.maison</NavLink>
        <small>full stack developer | veteran | strongman</small>
    </h1>
)

export default Component