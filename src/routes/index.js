import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as PATHS from '../components/Nav/config'
import Contact from '../pages/Contact'
import Layout from '../layout'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import WorkHistory from '../pages/WorkHistory'
import './style.css'

const Routes = props => (
    <Router>
        <Layout>
            <Route path={ PATHS.CONTACT } exact component={ Contact } />
            <Route path={ PATHS.PORTFOLIO } exact component={ Portfolio } />
            <Route path={ PATHS.WORK_HISTORY } exact component={ WorkHistory } />
            <Route path="/" exact component={ Home } />
        </Layout>        
    </Router>
);

export default Routes;