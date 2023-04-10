import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.nameRef = React.createRef()
        this.addressRef = React.createRef()
        this.ageRef = React.createRef()
    }

    clearForm() {
        this.nameRef.current.value = ""
        this.addressRef.current.value = ""
        this.ageRef.current.value = ""
        this.nameRef.current.focus()
    }

    render() {
        return (
            <form className='form-control'>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <label htmlFor="name">Name: </label>
                    </div>
                    <div className="col-4">
                        <input type="text" id="name" ref={this.nameRef} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2">
                    <label htmlFor="address">Address: </label>
                    </div>
                    <div className="col-4">
                    <input type="text" id="address" ref={this.addressRef} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2">
                    <label htmlFor="age">Age: </label>
                    </div>
                    <div className="col-4">
                    <input type="text" id="age" ref={this.ageRef} />
                    </div>
                </div>
            </form>
        )
    }
}
