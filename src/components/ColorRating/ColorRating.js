import React from 'react';
import './ColorRating.css';

export default function ColorRating(props) {
    const colors = [0, 0, 0, 0, 0].map((_, i) =>
        (i == (props.value - 1))
            ? <div key={i} className={'beer_color_' + props.value}>.</div>
            : <div key={i} className='blank_beer'>.</div>
        );
    return (
        <div className="color_rating">
            {colors}
        </div>
    );
}