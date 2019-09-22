import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends Component {   
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/diary'
        history.push(destination)
    }


    render() {
        return(
            <div className='LoginPage'>
                <h2>Log In</h2>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

export default LoginPage