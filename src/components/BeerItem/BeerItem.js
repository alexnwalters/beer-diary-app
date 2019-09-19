import React from 'react';
import { Link } from 'react-router-dom';
import BeerImage from '../../utils/beer.png'
import './BeerItem.css'

export default function BeerItem(props) {

    return (
        <div className='BeerItem'>
            <Link to={`/beer/${props.beer_id || props.id}`}>
                <h3>{props.name}</h3>
            </Link>
            <p>{props.brewery || props.breweries[0].name || 'Brewery Unknown'}</p>
            <p><img src={(props.breweries[0].images.icon !== null) ? props.breweries[0].images.icon : props.image || BeerImage } alt='beer' style={{width: 64, height: 64}} resizeMode='contain'/></p>
           <div>
            <ul>
                <li>ABV: {props.abv || props.style.abvMax || '-'}</li>
                <li>IBU: {props.ibu || props.style.ibuMax || '-'}</li>
            </ul>
            <p>{props.beer_style || props.style.shortName || ''}</p>
            <p>{props.description || ''}</p>
            </div>
        </div>
    )
}

BeerItem.defaultProps = {
    test: {},
    breweries: [{
        test: 'test',
        name: null,
        images: {
            icon: null,
        }
    }],
    style: {
        abvMax: null,
        ibuMax: null,
        shortName: null,
    }
}