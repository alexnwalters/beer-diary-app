import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/TokenService'
import './Header.css'

class Header extends Component {
	static defaultProps = {
		checkForLogin: () => {}
	}

	handleLogout = () => {
		TokenService.clearAuthToken()
		this.props.checkForLogin()
	}

	renderPublicLinks() {
		return (
			<div className='Header_Public montserrat'>
				<Link to='/'>Beer Diary,</Link>
				<Link to='/login'>Log In</Link>
				<Link to='/signup'>Sign Up</Link>
			</div>
		)
	}

	renderPrivateLinks() {
		return (
			<div className='Header_Private montserrat'>
				<Link to='/diary'>Beer Diary,</Link>
				<Link onClick={this.handleLogout} to='/'>Logout</Link>
			</div>
		)
	}

    render() {
		const { hasLogin } = this.props
        return (
            <nav className='Header'>
				{hasLogin
					? this.renderPrivateLinks()
					: this.renderPublicLinks()}
			</nav>
        )
    }
}

export default Header