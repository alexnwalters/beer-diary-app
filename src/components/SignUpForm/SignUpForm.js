import React, { Component } from 'react';
import { Link } from  'react-router-dom';

class SignUpForm extends Component {
    render() {
        return(
            <div className='signup-form'>
                <form>
                    <fieldset>
                        <label htmlFor='first-name'>First Name:
                            <input type='text' name='first-name' required/>
                        </label>
                
                        <label htmlFor='last-name'>Last Name:
                            <input type='text' name='last-name' required/>
                        </label>

                        <label htmlFor='email'>Email Address:
                            <input type='email' name='email' required/>
                        </label>

                        <label htmlFor='username'>Username:
                            <input type='text' name='username' required/>
                        </label>

                        <label htmlFor='password'>Password:
                            <input type='text' name='password' required/>
                        </label>

                        <input type='checkbox' required/> I confirm that I'm over the age of 21.
                        <input type='submit'/>
                    </fieldset>
                </form>
                <Link to='/'><button>Back</button></Link> {/* change later to use history */}
            </div>
        )
    }
}

export default SignUpForm