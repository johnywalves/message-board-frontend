import React from 'react'

// Dicionaries
import Strings from 'main/localization'
import Style from 'assets/jss/default'

export default props => (
    <div>
        <h1 style={Style.title}>{Strings.login.idPlaceholder}</h1>
    </div>
)