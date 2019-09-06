import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <nav className='Header'>
				<ul className='nav-list'>
					<li>Beer Diary</li>
					<li>Log In</li>
					<li>Sign Up</li>
				</ul>
			</nav>
        )
    }
}

export default Header