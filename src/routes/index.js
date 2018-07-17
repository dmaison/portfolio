import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../containers/Nav';
import Home from '../pages/Home';

const Routes = props => (
    <Router>
        <div>
            <Nav />
            <section className="ui container" role="layout">
                <Switch>
                    <Route exact path="/" component={ Home } />
                </Switch>
            </section>
        </div>
    </Router>
);

export default Routes;