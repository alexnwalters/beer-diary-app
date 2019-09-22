import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

class SignUpPage extends Component {
    static defualtProps = {
        history: {
            push: () => {},
        },
    }

    handleSignUpSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <div className='container'>
                <SignUpForm 
                    onSignUpSuccess={this.handleSignUpSuccess}
                /> 
            </div>
        )
    }
}

export default SignUpPage