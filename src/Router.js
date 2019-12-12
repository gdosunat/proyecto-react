import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Questions from './containers/Questions';
import NotFound from './containers/404Page';

/**
 On this router we provide the routes the user will have access to and provide the containers they will see for each route.
 We also provide a default route in case the url the user has provided is not valid, then we take them to the 404 page
 */
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/questions/:complexId' component={Questions}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;