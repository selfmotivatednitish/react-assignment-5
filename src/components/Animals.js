import React, { Component } from 'react'

export default class Animals extends Component {
    render() {
        return (
            <div className='row justify-content-center' style={{display: this.props.item === "animal" ? "block" : "none"}}>
                <div className="col-4">
                    <label htmlFor="animal">Animals:</label>
                    <select className="form-select" id='animal' aria-label="Default select example">
                        <option value="select">Animal</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="rabbit">Rabbit</option>
                        <option value="fish">Fish</option>
                        <option value="Snake">Snake</option>
                        <option value="lizard">Lizard</option>
                    </select>
                </div>
            </div>
        )
    }
}
