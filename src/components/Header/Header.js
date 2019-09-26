import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/TokenService'
import Search from '../Search/Search'
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
			<div>
				<div className='Header_Public montserrat'>
					<Link to='/'>Beer Diary</Link>
					<Link to='/'><img className='Header_logo' src={ require('../../utils/images/beer-pils-32.png') }/></Link>
					<div>
						<Link className='Header_Public_left' to='/login'>Log In</Link>
						<Link className='Header_Public_right' to='/signup'>Sign Up</Link>
					</div>
				</div>
				<Search />
			</div>
		)
	}

	renderPrivateLinks() {
		return (
			<div>
				<div className='Header_Private montserrat'>
					<Link to='/diary'>Beer Diary</Link>
					<Link to='/diary'><img className='Header_logo' src={ require('../../utils/images/beer-pils-32.png') }/></Link>
					<Link onClick={this.handleLogout} to='/'>Logout</Link>
				</div>
				<Search />
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