import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router'

import About from 'views/about'
import Home from 'views/home'
import Login from 'views/login'
import NewPost from 'views/new-post'
import Post from 'views/post'
import Profile from 'views/profile'

export default props => (
    <HashRouter>
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/newpost' component={NewPost} />
            <Route path='/post' component={Post} />
            <Route path='/profile' component={Profile} />

            <Route path='/' component={Home} />
            <Redirect from='*' to='/' />
        </Switch>
    </HashRouter>
)