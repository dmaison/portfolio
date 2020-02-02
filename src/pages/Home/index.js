import React from 'react'
import Page from '../../components/Page'
import './animation.css'
import './style.css'

const Home = () => (
    <Page id="home">
        <h1>
            dave.maison
            <small>web developer | veteran | amateur strongman</small>
        </h1>
        <div className="indicator">
            <div className="animation container">
                <i className="fas fa-angle-double-down fa-2x" />
            </div>
            <i className="fas fa-angle-double-down fa-2x" />
        </div>
    </Page>
);

export default Home;