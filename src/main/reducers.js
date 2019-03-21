import HomeReducer, { initialState as initialStateHome } from 'views/home/home.reducer'

export const initialState = {
    ['home']: initialStateHome
}

export default (state, action) => ({
    ['home']: HomeReducer(state['home'], action)
})