import {createStore, combineReducers, applyMiddleware} from 'redux'
import createHistory from 'history/createHashHistory'
import reducers from './index'

import {routerMiddleware, routerReducer} from "react-router-redux"; // Or wherever you keep your reducers


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export {history, store, middleware}

export default store
