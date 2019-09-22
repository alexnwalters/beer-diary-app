import React from 'react';
import { Link } from 'react-router-dom';
import BeerContext from '../../contexts/BeerContext';
import BeerDiaryApiService from '../../services/BeerDiaryApiService';
import OverallRating from '../OverallRating/OverallRating';
import ColorRating from '../ColorRating/ColorRating';
import DrinkabilityRating from '../DrinkabilityRating/DrinkabilityRating';
import './UserReview.css'

export default function UserReview(props) {
    return (
        <BeerContext.Consumer>
            {(context) => (
                <div className='UserReview'>
                    <h3>Your Review</h3>
                    <div className='UserReview_selection'>
                        <div>
                            <p>Aroma</p>
                            <div className='UserReview_aroma'>{props.aroma}</div>
                        </div>
                        <div >
                            <p>Taste</p>
                            <div className='UserReview_taste'>{props.taste}</div>
                        </div>
                    </div>
                    <ul className='UserReview_range'>
                        <li>
                            <p>Color</p>
                            <div className='UserReview_results'><ColorRating value={props.color}/></div>
                        </li>
                        <li>
                            <p>Drinkability</p> 
                            <div className='UserReview_results'><DrinkabilityRating value={props.drinkability}></DrinkabilityRating></div>
                        </li>
                        <li>
                            <p>Overall</p>
                            <div className='UserReview_results'><OverallRating value={props.overall}/></div>
                        </li>
                        <li>
                            <p>Notes</p>
                            <div className='UserReview_notes UserReview_results'>{props.notes || '...'}</div>
                        </li>
                    </ul>
                    <Link to={`/update/${props.id}`}>
                        <button>Update</button>
                    </Link>
                    <button onClick={() => BeerDiaryApiService.deleteReview(props.id, context.deleteUserReview)}>Delete</button>                    
                </div>
            )}
        </BeerContext.Consumer>
    )
}