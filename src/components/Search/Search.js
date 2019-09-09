import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BeerResultsContext from '../../contexts/BeerResultsContext';
import BreweryDbApiService from '../../services/BreweryApiService';

class Search extends Component {

    static contextType = BeerResultsContext

    handleSubmit = e => {
        e.preventDefault()

        this.context.clearBeerResults()
        this.context.clearError()

        const query = e.target.query.value
        this.context.setQuery(query)
        
        BreweryDbApiService.getBeers(this.context.query)
            .then(this.context.setBeerResults)
            .then(this.context.clearQuery)
            .catch(this.context.setError)

        this.props.history.push('/search')
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
                    {/* <Link to='/search'><input type='submit'/></Link> */}
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default withRouter(Search)