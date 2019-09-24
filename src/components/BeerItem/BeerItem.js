import React from 'react';
import { Link } from 'react-router-dom';
import BeerImage from '../../utils/images/beer.png'
import './BeerItem.css'

export default function BeerItem(props) {

    return (
        <div className='BeerItem'>
            <Link to={`/beer/${props.beer_id || props.id}`}>
                <div className='BeerItem_link'>
                    <img className='BeerItem_logo' src={(props.breweries[0].images.icon !== null) ? props.breweries[0].images.icon : props.image || BeerImage } alt='beer' style={{width: 64, height: 64}}/>
                    <div className='BeerItem_title'>
                        <h3>{props.name}</h3>
                        <p>{props.brewery || props.breweries[0].name || 'Brewery Unknown'}</p>
                    </div>
                </div>
            </Link>
           <div>
            <ul>
                <li>{props.beer_style || props.style.shortName || ''}</li>
                <li><span className='BeerItem_abv_ibu'>ABV</span> {props.abv || props.style.abvMax || '-'}</li>
                <li><span className='BeerItem_abv_ibu'>IBU</span> {props.ibu || props.style.ibuMax || '-'}</li>
            </ul>
            <p className='BeerItem_notes'>{props.description || ''}</p>
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