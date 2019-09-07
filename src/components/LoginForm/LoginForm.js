import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class LoginForm extends Component {
    render() {
        return(
            <div className='LoginForm'>
                <form>
                    <fieldset>
                        <label htmlFor='username'>Username:
                            <input type='text' name='username' required />
                        </label>

                        <label htmlFor='password'>Password:
                            <input type='text' name='password' required />
                        </label>

                        <input type='submit'/>
                    </fieldset>
                </form>
                <Link to='/'><button>Back</button></Link> {/* change later to use history */}
            </div>
        )
    }
}

export default LoginForm