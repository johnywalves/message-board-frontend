import React, { useEffect, useContext } from 'react'

// Dicionaries
import Strings from 'main/localization'
import Style from 'assets/jss/default'

// Access States and Dispatchs
import { Store } from 'main/store'
import { fetchPosts } from 'reducers/posts/posts.actions'

// Components
import QuickAdd from 'components/QuickAdd'

export default props => {

    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        if (!state.posts.list)
            fetchPosts(state, dispatch)
    })

    const renderPosts = list => {
        return (list || [])
            .map(post => (
                <div key={post.id} style={Style.post}>
                    <p>{post.text}</p>
                    <ul>
                        {renderTags(post.tags)}
                    </ul>
                </div>
            ))
    }

    const renderTags = list => {
        return (list || [])
            .map((tag, index) => (
                <li key={index}>{tag.name}</li>
            ))
    }

    return (
        <React.Fragment>
            <div>
                <h1 style={Style.title}>{Strings.home}</h1>
                {renderPosts(state.posts.list)}
            </div>
            <QuickAdd />
        </React.Fragment>
    )
}