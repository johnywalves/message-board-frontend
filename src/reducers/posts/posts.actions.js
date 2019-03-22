import axios from 'axios'

import globalConsts from 'main/consts'
import consts from 'reducers/posts/posts.consts'

export const fetchPosts = (state, dispatch) => {
    axios.get(globalConsts.API_URL + 'posts',
        { headers: { "Authorization": "Bearer " + state.login.token } }
    )
        .then(resp => dispatch({ type: consts.SEARCHED, payload: resp.data }))
        .catch(e => console.log(e.response))
}

export const savePost = (state, dispatch, values) => {
    axios.post(globalConsts.API_URL + 'posts',
        values,
        { headers: { "Authorization": "Bearer " + state.login.token } }
    )
        .then(resp => dispatch({ type: consts.ADDED, payload: resp.data }))
        .catch(e => console.log(e.response))
}