// CSS
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import 'assets/css/sidebar.css'

// JS
import 'modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'modules/jquery/dist/jquery.min.js'

import React from 'react'

import Menu from 'components/menu'
import Routes from 'main/routes'

export default props => {
    return (
        <React.Fragment>
            <Menu />
            <div id="page-content-wrapper">
                <div className="page-content inset">
                    <div className="row">
                        <div className="col-md-12">
                            <Routes />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}