import React from 'react'

// Dicionaries
import Strings from 'main/localization'

// Components
import Header from 'components/header'

export default props => (
    <React.Fragment>
        <Header terms={Strings.post} />
    </React.Fragment>
)