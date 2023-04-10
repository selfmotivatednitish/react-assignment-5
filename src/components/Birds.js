import React, { Component } from 'react'

export default class Birds extends Component {
    render() {
        return (
            <div className='row justify-content-center' style={{display: this.props.item === "bird" ? "block" : "none"}}>
                <div className="col-4">
                <label htmlFor="birds">Birds:</label>
                    <select className="form-select" id='birds' aria-label="Default select example">
                        <option value="select">Bird</option>
                        <option value="parrot">Parrot</option>
                        <option value="canary">Canary</option>
                        <option value="finch">Finch</option>
                        <option value="pigeon">Pigeon</option>
                        <option value="peacock">Peacock</option>
                        <option value="lovebirds">Lovebirds</option>
                    </select>
                </div>
            </div>
        )
    }
}
