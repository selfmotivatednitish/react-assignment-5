import React, { Component } from 'react'

export default class Q5_Q9 extends Component {
    render() {
        return (
            <div className='container'>
                <hr />
                <div className="q5">
                    <div className="question">
                        <p><b>
                            Q5.  What can be used to return more than one component from a react component?
                        </b></p>
                    </div>
                    <div className="answer">
                        <p className='text-start'>
                            In React, we can return more than one component from a component using a technique called "Fragments".
                        </p>
                        <br />
                        <p className='text-start'>
                            It allow us to group a list of children elements without adding an extra node to the DOM.
                        </p>
                        <br />
                        <p className='text-start'>
                            Fragments can be declared using a shorthand syntax with the angle brackets {"<>"} and {"</>"}, or using the explicit {"<React.Fragment>"}and {"</React.Fragment>"} tags.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="q6">
                    <div className="question">
                        <p><b>
                            Q6.  What is the difference between a React Component and a React PureComponent?
                        </b></p>
                    </div>
                    <div className="answer">
                        <p className='text-start'>
                            A PureComponent only re-renders when its props or state have actually changed, while a regular component may re-render even if there are no actual changes.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="q7">
                    <div className="question">
                        <p><b>
                            Q7. What can be used to access the methods and properties of a child component from a
                            component?
                        </b></p>
                    </div>
                    <div className="answer">
                        <p className='text-start'>
                            In React, you can access the methods and properties of a child component from a parent component by passing them down as props.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="q8">
                    <div className="question">
                        <p><b>
                            Q8. What is used to access the methods and properties of a nested child component from a
                            component?

                        </b></p>
                    </div>
                    <div className="answer">
                        <p className='text-start'>
                            To access the methods and properties of a nested child component from a component in React, we can use two technique:
                            <br />
                            <b>Prop drilling: </b> It is the process of passing down a prop through multiple levels of nested components to reach a component that needs access to that prop. While this technique can work for simple cases, it can become unwieldy and difficult to maintain as the number of levels of nesting increases.
                            <br />
                            <b>React context:- </b> Context allows you to pass data through the component tree without having to pass props down manually at every level .To avoid prop drilling and make it easier to access nested components, we can use react context.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="q9">
                    <div className="question">
                        <p><b>
                            Q9. Name at least one method that is used to create an Error Boundary in React.

                        </b></p>
                    </div>
                    <div className="answer">
                        <p className='text-start'>
                            The <b>static getDerivedStateFromError()</b> method is used to create an Error Boundary in React.
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}
