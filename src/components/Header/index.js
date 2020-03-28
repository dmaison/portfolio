import React from 'react'
import ExternalLinks from '../ExternalLinks'
import Masthead from '../Masthead'
import './style.css'

const Component = () => (
    <header className="header" role="banner">
        <Masthead />
        <ExternalLinks />
    </header>
)

export default Component