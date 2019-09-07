import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
    render() {
        return(
            <div>
                <form className='search'>
                    <label htmlFor='beer_search'>Search Beers:
                        <input
                            type='text'
                            name='beer_search'
                            placeholder='Snake Dog Ipa'
                        />
                    </label>
                    <Link to='/search'><input type='submit'/></Link> {/*Review use of submit*/}                 
                </form>
            </div>
        )
    }
}

export default Search