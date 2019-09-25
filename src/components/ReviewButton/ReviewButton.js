import React from 'react'
import { Link } from 'react-router-dom'

export default function ReviewButton(props) {

    return (
        <div>
            <Link to={`/review/${props.id}`}>
                <button className='ReviewButton'>Review</button>
            </Link>
        </div>
    )    
}