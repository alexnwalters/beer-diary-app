import React from 'react';
import { Link } from 'react-router-dom';

export default function BeerItem(props) {

    return (
        <div>
            <Link to={`/beer/${props.id}`}>
                <h3>{props.name}</h3>
            </Link>
            <p>{props.brewery || props.breweries[0].name || 'N/A'}</p>
            <ul>
                <li>ABV: {props.abv || 'N/A'}</li>
                <li>IBU: {props.ibu || 'N/A'}</li>
            </ul>
            <p>{props.description || 'No Description Provided'}</p>
        </div>
    )
}

//this doesnt fix the problem?
BeerItem.defaultProps = {
    breweries: {}
}