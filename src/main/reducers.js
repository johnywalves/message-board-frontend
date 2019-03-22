import HomeReducer, { initialState as initialStateHome } from 'reducers/posts/posts.reducer'
import LoginReducer, { initialState as initialStateLogin } from 'reducers/login/login.reducer'

export const initialState = {
    login: initialStateLogin,
    posts: initialStateHome
}

export default ({ posts, login }, action) => ({
    login: LoginReducer(login, action),
    posts: HomeReducer(posts, action)
})