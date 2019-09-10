import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

class SignUpPage extends Component {
    render() {
        return (
            <div>
                <h2>User Sign Up</h2>
                <SignUpForm /> 
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

export default SignUpPage