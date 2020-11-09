import React from 'react'
import Nav from '../components/Nav'
import Title from '../components/Title'
import './style.css'

const Component = props => (
    <>
        <Title />
        <div className="focus">
            <Nav />
            <main className="layout" role="main">
                { props.children }
            </main>
        </div>
    </>
);

export default Component