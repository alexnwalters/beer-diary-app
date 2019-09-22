import React from 'react';
import './OverallRating.css';

export default function OverallRating(props) {
    const stars = [0, 0, 0, 0, 0].map((_, i) =>
        (i < props.value)
            ? <div key={i} className='color_cap'>.</div>
            : <div key={i} className='blank_cap'>.</div>
        );
    return (
        <div className="overall_rating">
            {stars}
        </div>
    );
}