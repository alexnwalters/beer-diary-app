import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

class SignUpPage extends Component {
    static defaultProps = {
        history: {
            push: () => {},
            goBack: () => {},
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
                <button className='SignUpForm_button' onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

export default SignUpPage