import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className='Header'>
				<ul className='nav-list'>
					<li>
						<Link to='/'>Beer Diary</Link>
					</li>
					<li>
						<Link to='/diary'>My Diary</Link>
					</li>
					<li>
						<Link to='/login'>Log In</Link>
					</li>
					<li>
						<Link to='/signup'>Sign Up</Link>
					</li>
				</ul>
			</nav>
        )
    }
}

export default Header