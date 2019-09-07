import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreweryDbApiService from '../../services/BreweryApiService';
import config from '../../config';

class Search extends Component {

    handleSubmit = e => {
        e.preventDefault()

        const query = e.target.query.value

        console.log(query)
        
        // BreweryDbApiService.getBeers(query)
        //     .then(res => {
        //         console.log(res)
        //     })

        fetch(`${config.BREWERY_ENDPOINT}/search?q=${query}&type=beer&withBreweries=y`, {
            method: 'GET',
            headers: {
                'Authorization': `${config.BREWERY_KEY}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return(
            <div>
                <form className='search' onSubmit={this.handleSubmit}>
                    <label htmlFor='query'>Search Beers:
                        <input
                            type='text'
                            name='query'
                            placeholder='Snake Dog Ipa'
                        />
                    </label>
                    {/* <Link to='/search'><input type='submit'/></Link> Review use of submit */}
                    <input type='submit'/>                 
                </form>
            </div>
        )
    }
}

export default Search