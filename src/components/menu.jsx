import React from 'react'

import Strings from 'main/localization'
import Style from 'assets/jss/default'

export default props => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand col-1' href='#'>
                    <i className="fa fa-calendar-check-o" /><span style={Style.title}>{Strings.name}</span>
                </a>
            </div>

            <div id='navbar' className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    <li><a className="nav-link" style={Style.title} href="#/home">{Strings.home.title}</a></li>
                    <li><a className="nav-link" style={Style.title} href="#/about">{Strings.about.title}</a></li>
                    <li><a className="nav-link" style={Style.title} href="#/newpost">{Strings.newPost.title}</a></li>
                    <li><a className="nav-link" style={Style.title} href="#/post">{Strings.post.title}</a></li>
                    <li><a className="nav-link" style={Style.title} href="#/profile">{Strings.profile.title}</a></li>
                </ul>
            </div>
        </div>
    </nav>
)