import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/Home'
import './style.css'

const exit = { opacity: 0 };

const enter = { opacity: 1 };

const Routes = props => (
    <Router>
        <Layout>
            <Route path="/" exact component={ Home } />
        </Layout>        
    </Router>
);

export default Routes;