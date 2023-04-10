import React, { Component } from 'react'

export default class Focus extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div className='container'>
                <hr />
                <div className="question">
                    <p><b>
                        Q2. Create a class component that renders an input and focuses the input on mount.
                    </b></p>
                </div>
                <div className="answer">
                    <input type="text" ref={this.inputRef} />
                </div>
            </div>
        )
    }
}
