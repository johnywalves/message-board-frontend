import React from 'react'
import $ from 'jquery'

import Strings from 'main/localization'
import Style from 'assets/jss/default'

export default props => {

    function handleClick(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    }

    return (
        <div id="sidebar-wrapper">
            <ul id="sidebar-menu" className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#/" >
                        {Strings.name}
                    </a>
                </li>
            </ul>

            <i id="menu-bars" className="fa fa-bars " onClick={handleClick} />

            <ul id="sidebar" className="sidebar-nav">
                <li><a className="nav-link" style={Style.title} href="#/about">{Strings.about.title}</a></li>
                <li><a className="nav-link" style={Style.title} href="#/newpost">{Strings.newPost.title}</a></li>
                <li><a className="nav-link" style={Style.title} href="#/post">{Strings.post.title}</a></li>
                <li><a className="nav-link" style={Style.title} href="#/profile">{Strings.profile.title}</a></li>
            </ul>
        </div>
    )
}