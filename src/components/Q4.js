import React, { Component } from 'react'
import Sport from './Sport'
import ErrorBoundary from './ErrorBoundary'

export default class Q4 extends Component {
    render() {
        return (
            <div className='container'>
                <hr />
                <div className="question">
                    <p><b>
                        Q4. Create an <ErrorBoundary /> class component that renders its children and catches error throw
                        inside the children. If any error is present, it renders the error message instead of the children.
                    </b></p>
                </div>
                <div className="answer">
                    <ErrorBoundary key="cricket">
                        <Sport sportName="Cricket" />
                    </ErrorBoundary>
                    <ErrorBoundary key="football">
                        <Sport sportName="Football" />
                    </ErrorBoundary>
                    <ErrorBoundary key="helloworld">
                        <Sport sportName="HelloWorld" />
                    </ErrorBoundary>
                </div>
            </div>
        )
    }
}
