import consts from 'reducers/login/login.consts'

export const initialState = { token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTMyODg0MTcsIm5iZiI6MTU1MzI4ODQxNywianRpIjoiNzJlZjdhYjctY2JlNC00OTQ0LWI1YjAtMmU0ZmFhODFkNmQxIiwiZXhwIjoxNTUzMjg5MzE3LCJpZGVudGl0eSI6bnVsbCwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.4kJ5GE-VoCkWpUcwMeLEwf4Pf9L9LxZV-Kug_cTe740' }

export default (state = initialState, action) => {
    switch (action.type) {
        case consts.ACCESS_GRANTED:
            return { ...state, token: action.payload.token }
        case consts.ACCESS_RESCUED:
            return { ...state, token: action.payload.token }
        case consts.ACCESS_REVOKE:
            return { ...state, token: null }
        default:
            return state
    }
}




