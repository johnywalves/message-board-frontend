import axios from 'axios'

import consts from 'views/home/home.consts'

export const fetchPosts = (state, dispatch) => {
    axios.get(
        'http://localhost:5000/v1.0/posts',
        { headers: { "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTMxNzI1MzEsIm5iZiI6MTU1MzE3MjUzMSwianRpIjoiN2UzN2RiNjctYTA0Mi00YzhkLWFjMTUtOWRkY2RhY2M4ZjUxIiwiZXhwIjoxNTUzMTczNDMxLCJpZGVudGl0eSI6bnVsbCwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.zTuV3TXEH_Nig61GbzSSplbjbf21iYG2AsDIcKh4nMs" } }
    )
        .then(resp => dispatch({ type: consts.SEARCHED, payload: resp.data }))
        .catch(e => console.log(e.response))
}