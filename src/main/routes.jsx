import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router'

import Home from 'views/home'
import About from 'views/about'

export default props => (
    <HashRouter>
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/home' />
        </Switch>
    </HashRouter>
)