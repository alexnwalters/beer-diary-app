import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BeerContext from '../../contexts/BeerContext';
import './Search.css'

class Search extends Component {

    static contextType = BeerContext

    handleSubmit = e => {
        e.preventDefault()
        this.context.clearBeerResults()
        this.context.clearError()

        const query = e.target.query.value
        this.context.setQuery(query)

        this.props.history.push('/search')
    }

    render() {
        return(
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
        )
    }
}

export default withRouter(Search)