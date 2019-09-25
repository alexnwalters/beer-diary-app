import React from 'react';
import OverallRating from '../OverallRating/OverallRating';
import ColorRating from '../ColorRating/ColorRating';
import DrinkabilityRating from '../DrinkabilityRating/DrinkabilityRating';
import './OtherReviews.css'

export default function OtherReviews(props) {
    return (
        <div className='OtherReviews'>
            <h3 className='montserrat'>Reviewed By: {props.user_name}</h3>
            <div className='OtherReviews_selection'>
                <div>
                    <p>Aroma</p>
                    <div className='OtherReviews_aroma nothing'>{props.aroma}</div>
                </div>
                <div >
                    <p>Taste</p>
                    <div className='OtherReviews_taste nothing'>{props.taste}</div>
                </div>
            </div>
            <ul className='OtherReviews_range'>
                <li>
                    <p>Color</p>
                    <div className='OtherReviews_results'><ColorRating value={props.color}/></div>
                </li>
                <li>
                    <p>Drinkability</p> 
                    <div className='OtherReviews_results'><DrinkabilityRating value={props.drinkability}></DrinkabilityRating></div>
                </li>
                <li>
                    <p>Overall</p>
                    <div className='OtherReviews_results'><OverallRating value={props.overall}/></div>
                </li>
                <li>
                    <p>Notes</p>
                    <div className='OtherReviews_notes OtherReviews_results raleway_lgt'>{props.notes || '...'}</div>
                </li>
            </ul>
        </div>
    )
}