import React, { Component } from 'react'
import PetSelector from './PetSelector'

export default class Q1 extends Component {
    render() {
        return (
            <div className='container'>
                <div className="question">
                    <p><b>
                        Q1. Create a class component "Animals" that returns a list of options (the options are “select” input
                        options) of animals and a class component "Birds" that returns a list of options (“select” input
                        options) of birds. Create another component "PetSelector" that renders a usable select type of
                        input with both animals and birds as options.
                    </b></p>
                </div>
                <div className="answer">
                    <PetSelector />
                </div>
            </div>
        )
    }
}
