declare var window: any;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory  } from 'react-router';
import storeConfig from './universal/store';
import { routes } from './universal/routes';
const store: Redux.Store = storeConfig(true);

ReactDOM.render(
    <Provider store={store}>
        <Router history={ browserHistory } routes={routes} />
    </Provider>,
    document.getElementById('root')
);