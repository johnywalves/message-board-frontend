import React, { useState, useContext } from 'react'

// Dicionaries
import StyleButtom from 'assets/jss/buttons'
import StyleModal from 'assets/jss/modal'

// Access States and Dispatchs
import { Store } from 'main/store'
import { savePost } from 'reducers/posts/posts.actions'

export default props => {

    const [isAdding, setIsAdding] = useState(false)
    const [text, setText] = useState("")

    const { state, dispatch } = useContext(Store)

    const renderAdding = () => {
        if (isAdding)
            return (
                <div style={StyleModal.modal}>
                    <div style={StyleModal.modalContent}>

                        <form>
                            <div className="input-group">
                                <label htmlFor="Texto">Example file input</label>
                                <input type="text" className="form-control"
                                    id="Texto" placeholder="Texto" aria-label="Texto" aria-describedby="basic-addon1"
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-secondary"
                                onClick={() => savePost(state, dispatch, { text, tags: [], comments: [] })}
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            )
    }

    return (
        <React.Fragment>
            <button type="button" className="btn btn-lg btn-secondary"
                style={StyleButtom.floatingAction}
                onClick={() => setIsAdding(true)}
            >
                <i className="fa fa-plus"></i>
            </button>
            {renderAdding()}
        </React.Fragment>
    )
}
