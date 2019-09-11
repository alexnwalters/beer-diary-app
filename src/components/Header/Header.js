import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <nav className='Header'>
				<div>
					<Link to='/'>Beer Diary</Link>
				</div>
				<div>
					<Link to='/diary'>My Diary</Link>
				</div>
				<div>
					<Link to='/login'>Log In</Link>
				</div>
				<div>
					<Link to='/signup'>Sign Up</Link>
				</div>
			</nav>
        )
    }
}

export default Header