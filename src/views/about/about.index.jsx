import React from 'react'

import Strings from 'main/localization'
import Style from 'assets/jss/default'

export default props => (
    <div>
        <h1 style={Style.title}>{Strings.about}</h1>
    </div>
)
