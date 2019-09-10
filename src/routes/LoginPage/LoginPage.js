import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends Component {
    render() {
        return(
            <div className='LoginPage'>
                <h2>Log In</h2>
                <LoginForm />
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

export default LoginPage