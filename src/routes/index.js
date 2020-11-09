import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import Layout from '../layout'
import Home from '../pages/Home'
import './style.css'

const exit = { opacity: 0 };

const enter = { opacity: 1 };

const Routes = props => (
    <Router>
        <Layout>
            <AnimatedSwitch 
                className="transitionContainer"
                atEnter={ exit }
                atLeave={ exit }
                atActive={ enter }>
                    <Route path="/" exact component={ Home } />
            </AnimatedSwitch>
        </Layout>        
    </Router>
);

export default Routes;