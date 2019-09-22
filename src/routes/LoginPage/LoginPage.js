import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends Component {   
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
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
            </div>
        )
    }
}

export default LoginPage