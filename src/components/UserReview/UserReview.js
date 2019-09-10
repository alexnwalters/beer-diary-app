import React from 'react';
import { Link } from 'react-router-dom';
import BeerContext from '../../contexts/BeerContext';

export default function UserReview(props) {
    return (
        <BeerContext.Consumer>
            {(context) => (
                <div>
                    <h3>Your Review</h3>
                    <ul>
                        <li>Overall: {props.overall} out of 5</li> {/* need to figure how to make it a picture scale */}
                        <li>Color: {props.color}</li> {/* need to figure how to make it a color scale */}
                        <li>Aroma: {props.aroma}</li>
                        <li>Taste: {props.taste}</li>
                        <li>Drinkability: {props.drinkability}</li>
                        <li>Notes: {props.notes}</li>
                    </ul>
                    <Link to={`/update/${props.beerId}`}>
                        <button>Update</button>
                    </Link>
                    <button onClick={() => {context.deleteUserReview(props.beerId)}}>Delete</button>                    
                </div>
            )}
        </BeerContext.Consumer>
    )
}