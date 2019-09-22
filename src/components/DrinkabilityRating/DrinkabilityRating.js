import React from 'react';
import './DrinkabilityRating.css';

export default function DrinkabilityRating(props) {
    const beers = [0, 0, 0, 0, 0].map((_, i) =>
        (i < props.value)
            ? <div key={i} className='color_beer'>.</div>
            : <div key={i} className='blank_beer'>.</div>
        );
    return (
        <div className="drinkability_rating">
            {beers}
        </div>
    );
}