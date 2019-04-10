import React from 'react'
import ReactDOM from 'react-dom'

import { StoreProvider } from 'main/store'
import App from 'main/app'

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('wrapper')
)