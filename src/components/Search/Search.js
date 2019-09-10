import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BeerContext from '../../contexts/BeerContext';
import BreweryDbApiService from '../../services/BreweryApiService';

class Search extends Component {

    static contextType = BeerContext

    handleSubmit = e => {
        e.preventDefault()

        this.context.clearBeerResults()
        this.context.clearError()

        const query = e.target.query.value
        this.context.setQuery(query)
        
        BreweryDbApiService.getBeers(this.context.query)
            .then(this.context.setBeerResults)
            .then(this.props.history.push('/search'))
            .then(this.context.clearQuery)
            .catch(this.context.setError)
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
                            required
                        />
                    </label>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default withRouter(Search)