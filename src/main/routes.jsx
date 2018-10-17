import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'

import Home from '../home/home'
import About from '../about/about'

export default props => (
    <HashRouter>
        <div>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/home' />
        </div>
    </HashRouter>
)