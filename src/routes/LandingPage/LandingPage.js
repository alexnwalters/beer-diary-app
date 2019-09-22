import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends Component { 
    render() {
        return (
            <div className='LandingPage'>
                <h1 className='nothing'>Beer Diary,</h1>
                <div>
                    <h2 className='nothing'>Your Digital Beer Diary</h2>
                    <p className='raleway_lgt '>Review beers you have tasted, save a log of your experiences good and bad.</p>
                    <p className='raleway_lgt'>Search for a beers, our add ones of your choice. Review each beer by aroma, taste, color, drinkability, and even includ personal notes.</p>
                </div>
                <div>
                    <h2 className='nothing'>Start Your Diary</h2>
                    <Link to='/signup'>
                        <button className='nothing signUp_button'>Sign Up</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LandingPage