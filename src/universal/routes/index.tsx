import { Route, IndexRoute } from 'react-router';
import * as React from 'react';
import Index from '../components/Index';
import About from '../components/About';
import App from '../containers/App';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="index" component={Index}/>
        <Route path="about" component={About}/>
    </Route>
);

export { routes }