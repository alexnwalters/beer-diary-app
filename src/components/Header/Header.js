import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/TokenService'
import './Header.css'

class Header extends Component {

	constructor(props) {
		super(props)
		this.state = {
			checkLogin: TokenService.hasAuthToken()
		}
	}

	handleLogout = () => {
		TokenService.clearAuthToken()
		this.setState({
			checkLogin: false
		})
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
		const { checkLogin } = this.state
        return (
            <nav className='Header'>
				{checkLogin
					? this.renderPrivateLinks()
					: this.renderPublicLinks()}
			</nav>
        )
    }
}

export default Header