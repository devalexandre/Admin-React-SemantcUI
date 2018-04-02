import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from '../views/home'

export default props => (

    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Redirect from='*' to='/'/>
        </Switch>
    </Router>

)