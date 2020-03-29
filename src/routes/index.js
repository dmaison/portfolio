import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import Contact from '../pages/Contact'
import Experience from '../pages/Experience'
import Home from '../pages/Home'
import Layout from '../layout'
import Projects from '../pages/Projects'
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
                    <Route path="/contact" exact component={ Contact } />
                    <Route path="/experience" exact component={ Experience } />
                    <Route path="/projects" exact component={ Projects } />
                    <Route path="/" exact component={ Home } />
            </AnimatedSwitch>
        </Layout>        
    </Router>
);

export default Routes;