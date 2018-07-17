import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Logo = () => (
    <header className="logo" role="logo">
        <NavLink exact to="/">
            dave.maison
        </NavLink>
    </header>
)

export default Logo