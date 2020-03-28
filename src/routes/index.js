import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../pages/Contact';
import Experience from '../pages/Experience';
import Home from '../pages/Home';
import Layout from '../layout';
import Projects from '../pages/Projects';

const Routes = props => (
    <Router>
        <Switch>
            <Layout>
                <Route path="/contact" exact component={ Contact } />
                <Route path="/experience" exact component={ Experience } />
                <Route path="/projects" exact component={ Projects } />
                <Route path="/" exact component={ Home } />
            </Layout>
        </Switch>
    </Router>
);

export default Routes;