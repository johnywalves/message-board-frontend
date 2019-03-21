import React, { useReducer } from 'react'

import reducer, { initialState } from 'main/reducers'

export const Store = React.createContext()

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}