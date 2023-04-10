import React, { Component } from 'react'
import Animals from './Animals'
import Birds from './Birds'

export default class PetSelector extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valueSelect: ""
        }
    }
    onChangeHandle = (event) => {
        this.setState({
            valueSelect: event.target.value
        })
    }

    render() {
        const { valueSelect } = this.state
        return (
            <div className='container'>
                < div className='row justify-content-center' >
                    <h1>Pet Selector</h1>
                    <div className="col-4">
                        <select className="form-select" value={valueSelect} onChange={this.onChangeHandle} aria-label="Default select example">
                            <option value="">Select</option>
                            <option value="animal">Animal</option>
                            <option value="bird">Bird</option>
                        </select>
                    </div>
                </ div >

                <Animals item={valueSelect} />
                <Birds item={valueSelect} />

            </div >
        )
    }
}
