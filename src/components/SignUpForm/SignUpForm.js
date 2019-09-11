import React, { Component } from 'react';
import './SignUpForm.css'

class SignUpForm extends Component {
    render() {
        return(
            <form className='SignUpForm'>
                <fieldset>
                    <label htmlFor='first-name'>First Name:</label>
                        <input type='text' name='first-name' required/>
            
                    <label htmlFor='last-name'>Last Name:</label>
                        <input type='text' name='last-name' required/>
                    
                    <label htmlFor='email'>Email Address:</label>
                        <input type='email' name='email' required/>
                    
                    <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' required/>
                    
                    <label htmlFor='password'>Password:</label>
                        <input type='text' name='password' required/>
                    <div>   
                        <input type='checkbox' required /> I confirm that I'm over the age of 21.
                    </div>  
                    <input type='submit'/>
                    
                </fieldset>
            </form>
        )
    }
}

export default SignUpForm