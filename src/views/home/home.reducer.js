import consts from 'views/home/home.consts'

export const initialState = { list: null }

export default (state = initialState, action) => {
    switch (action.type) {
        case consts.SEARCHED:
            return { ...state, list: action.payload }
        default:
            return state
    }
}