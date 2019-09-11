import React, { Component } from 'react';
import './LoginForm.css'
 
class LoginForm extends Component {
    render() {
        return(
            <form className='LoginForm'>
                <fieldset>
                    <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' required />
                    
                    <label htmlFor='password'>Password:</label>
                        <input type='text' name='password' required />
                    
                    <input type='submit'/>
                </fieldset>
            </form>
        )
    }
}

export default LoginForm