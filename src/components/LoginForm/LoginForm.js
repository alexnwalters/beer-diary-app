import React, { Component } from 'react';
import TokenService from '../../services/TokenService';
import AuthApiService from '../../services/AuthApiService';
import './LoginForm.css';
 
class LoginForm extends Component {

    static defaultProps = {
        onLoginSuccess: () =>{},
        history: {
            goBack: () => {}
        }
    }

    state = { error: null }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state

        return(
            <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
                <div role='alert'>
                    {error && <p className='red'>{ error }</p>}
                </div>
                <fieldset className='LoginForm_label raleway_med'>                    
                    <label htmlFor='user_name'>Username:</label>
                        <input type='text' name='user_name' required />
                    
                    <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' required />
                    
                    <button className='LoginForm_button' type='submit'>Log In</button>
                    <button className='LoginForm_button' onClick={this.props.history.goBack}>Back</button>
                </fieldset>
            </form>
        )
    }
}

export default LoginForm