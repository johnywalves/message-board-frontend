import React from 'react'

import Style from 'assets/jss/header'

export default props => {

    const renderBreadcrumb = list => {
        return (list || [])
            .map((text, index) => (
                <a key={index} style={Style.breadcrumb.element}>
                    {`${index ? "  >  " : ""}${text}`}
                </a>
            ))
    }

    return (
        <div style={Style.main}>
            <div class="row">
                <h1 style={Style.title}>{props.terms.title}</h1>
            </div>
            <div class="row" style={Style.title} >
                {renderBreadcrumb(props.terms.breadcrumb)}
            </div>
        </div>
    )
}
