import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BeerContext from '../../contexts/BeerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'

class Search extends Component {

    static contextType = BeerContext

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleChangeQuery = e => {
        this.setState({ query: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault()
        this.context.clearBeerResults()
        this.context.clearError()

        this.context.setQuery(this.state.query)
        this.setState({ query: '' })

        this.props.history.push('/search')
    }

    render() {
        const { query } = this.state
        return(
            <div className='Search_container'>
                <form className='Search' onSubmit={this.handleSubmit}>
                    <label htmlFor='query'>
                        <input
                            type='text'
                            className='Search_query raleway_lgt'
                            name='query'
                            value={ query }
                            onChange={ this.handleChangeQuery}
                            placeholder='Search Beers: Ale, Lager, Stout...'
                            required
                        />
                    </label>
                    <button className='Search_button' type='submit'>
                        <FontAwesomeIcon class_name='Search_icon'icon='search'/>
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(Search)