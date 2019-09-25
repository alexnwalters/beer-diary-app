import React, { Component } from 'react';
import AuthApiService from '../../services/AuthApiService';
import './SignUpForm.css';

class SignUpForm extends Component {
    static defaultProps = {
        onSignUpSuccess: () => {},
        history: {
            goback: () => {}
        }
    }
        
    state = { error: null }
    
    handleSubmit = e => {
        e.preventDefault()
        const { full_name, user_name, password } = e.target

        this.setState({ error: null })
        AuthApiService.postUser({
            full_name: full_name.value,
            user_name: user_name.value,
            password: password.value,
        })
            .then(user => {
                full_name.value = ''
                user_name.value = ''
                password.value = ''
                this.props.onSignUpSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state
        return(
            <form className='SignUpForm' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <fieldset className='SignUpForm_label raleway_med'>
                    <label htmlFor='full_name'>Full Name:</label>
                        <input type='text' name='full_name' required/>
                    
                    <label htmlFor='user_name'>Username:</label>
                        <input type='text' name='user_name' required/>
                    
                    <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' required/>
                         
                    <button className='SignUpForm_button' type='submit'>Sign Up</button>
                </fieldset>
            </form>
        )
    }
}

export default SignUpForm