import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends Component {   
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
            goBack: () => {},
        },
        checkForLogin: () => {}
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/diary'
        history.push(destination)
        this.props.checkForLogin()
    }


    render() {
        return(
            <div className='LoginPage container'>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
                <button className='LoginForm_button' onClick={this.props.history.goBack}>Back</button>
            </div>

        )
    }
}

export default LoginPage