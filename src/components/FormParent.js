import React, { Component } from 'react'
import Form from './Form'

export default class FormParent extends Component {
    constructor(props) {
        super(props)
        this.formRef = React.createRef()
    }

    clickHandler = () => {
        this.formRef.current.clearForm()
    }

    render() {
        return (
            <div className='container'>
                <hr />
                <div className="question">
                    <p><b>
                        Q3. Create a class component Form which renders controlled text inputs for name, address and
                        age. Create another class component FormParent which renders Form and a “Clear” button.
                        Clicking this button should clear out the values inside Form.
                    </b></p>
                </div>
                <div className="answer">
                    <Form ref={this.formRef} />
                    <button onClick={this.clickHandler}>Clear Form</button>
                </div>
            </div>
        )
    }
}
