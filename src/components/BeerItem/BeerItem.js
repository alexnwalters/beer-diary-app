import React from 'react';
import { Link } from 'react-router-dom';

export default function BeerItem(props) {
    return (
        <div>
            <Link to={`/beer/${props.id}`}>
                <h3>{props.name}</h3>
            </Link>
            <p>{props.brewery}</p>
            <ul>
                <li>ABV: {props.abv}</li>
                <li>IPU: {props.ipu}</li>
            </ul>
            <p>{props.description}</p>
            <Link to={`/review/${props.id}`}>
                <button>Review</button>
            </Link>
        </div>
    )
}