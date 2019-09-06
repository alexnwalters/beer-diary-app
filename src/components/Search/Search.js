import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
    render() {
        return(
            <div>
                <form className='search'>
                    <label hmtlFor='beer_search'>Search Beers:
                        <input
                            type='text'
                            name='beer_search'
                            placeholder='Snake Dog Ipa'
                        />
                    </label>
                    <input type='submit'/>                   
                </form>
            </div>
        )
    }
}

export default Search