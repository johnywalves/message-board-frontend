import consts from 'reducers/posts/posts.consts'

export const initialState = { list: null, data: null }

export default (state = initialState, action) => {
    switch (action.type) {
        case consts.SEARCHED:
            return { ...state, list: action.payload }
        case consts.ADDED:
            const list = (state.list ? state.list.filter(i => i.id !== action.payload.id) : [])
            list.unshift(action.payload)
            return { ...state, list: list, data: action.payload }
        default:
            return state
    }
}