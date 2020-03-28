import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import './style.css'

const Component = props => (
    <>
        <Header />
        <Nav />
        <main className="layout" role="main">
            { props.children }
        </main>
    </>
);

export default Component