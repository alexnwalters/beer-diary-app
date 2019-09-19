import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/TokenService'
import './Header.css'

class Header extends Component {
	handleLogout = () => {
		TokenService.clearAuthToken()
	}
	
	renderPublicLinks() {
		return (
			<div className='Header_Public'>
				<Link to='/'>Beer Diary</Link>
				<Link to='/login'>Log In</Link>
				<Link to='/signup'>Sign Up</Link>
			</div>
		)
	}

	renderPrivateLinks() {
		return (
			<div className='Header_Private'>
				<Link to='/diary'>Beer Diary</Link>
				<Link onClick={this.handleLogout} to='/'>Logout</Link>
			</div>
		)
	}

    render() {
        return (
            <nav className='Header'>
				{TokenService.hasAuthToken()
					? this.renderPrivateLinks()
					: this.renderPublicLinks()}
			</nav>
        )
    }
}

export default Header