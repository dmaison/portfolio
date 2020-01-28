import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../layout';

const Routes = props => (
    <Router>
        <Switch>
            <Route path="/" component={ Layout } />
        </Switch>
    </Router>
);

export default Routes;