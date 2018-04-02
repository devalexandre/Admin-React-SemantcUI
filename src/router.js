import React from 'react'
import { BrowserRouter as Router, Route , Switch,Redirect} from 'react-router-dom'
import FormLogin from './views/login'
import Dashboard from './components/content'

export  default  props =>(

    <Router>
        <Switch>
            <Route exact path='/' component={FormLogin}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Redirect from='*' to='/'/>
        </Switch>
    </Router>

)