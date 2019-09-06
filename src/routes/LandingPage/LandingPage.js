import React, { Component } from 'react'

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
                    <p>Share your reviews with the world. Reads reviews of other beer connoisseur to assist you with your next adventure.</p>
                </div>
                <div>
                    <h2>Start Your Diary</h2>
                    <input type="button" value="Sign Up"/>
                </div>
            </div>
        )
    }
}

export default LandingPage