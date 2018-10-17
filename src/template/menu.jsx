import React from 'react'

export default props => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand col-1' href='#' >
                    <i className="fa fa-calendar-check-o"></i> Message Board
                </a>
            </div>

            <div id='navbar' className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    <li><a className="nav-link" href="#/home">Home</a></li>
                    <li><a className="nav-link" href="#/about">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
)