import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import {store,history} from "./reducers/store";
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(

    <Provider store={store}>
        <ConnectedRouter history={history}>
        <App/>
        </ConnectedRouter>
    </Provider>

    ,  document.querySelector('[data-js="app"]'))
registerServiceWorker();
