import React, { useEffect, useContext } from 'react'

import Strings from 'main/localization'
import Style from 'assets/jss/default'
import { Store } from 'main/store'
import { fetchPosts } from 'views/home/home.action'

export default props => {

    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        if (!state.home.list)
            fetchPosts(state, dispatch)
    })

    const renderPosts = list => {
        return (list || [])
            .map(post => (
                <div key={post.id}>
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
        <div>
            <h1 style={Style.title} >{Strings.home}</h1>
            {renderPosts(state.home.list)}
        </div>
    )
}