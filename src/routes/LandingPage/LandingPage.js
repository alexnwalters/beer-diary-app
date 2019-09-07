import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component { 
    render() {
        return (
            <div className='LandingPage'>
                <div>
                    <h2>Your Digital Beer Diary</h2>
                    <p>Review beers you have tasted, save a log of your experiences good and bad.</p>
                </div>
                <div>
                    <h2>Join the Community</h2>
                    <p>Share your reviews with the world. Read reviews of other beer connoisseurs to assist you with your next drink experience.</p>
                </div>
                <div>
                    <h2>Start Your Diary</h2>
                    <Link to='/signup'>
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LandingPage