import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import IconVertical from './dave.maison-vertical.svg'
import IconHorizontal from './dave.maison-horizontal.svg'
import './style.css'

const Component = () => {

    const isMobile = useMediaQuery({ maxWidth: 750 });

    return (
        <h1 className="title">
            <NavLink to="/">
                <img src={ isMobile ? IconHorizontal : IconVertical } alt="dave.maison" />
            </NavLink>
        </h1>
    )
}

export default Component