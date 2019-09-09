import React, { Component } from 'react';
import BeerItem from '../../components/BeerItem/BeerItem';
import BeerResultsContext from '../../contexts/BeerResultsContext'

class ResultsPage extends Component {

    static contextType = BeerResultsContext

    renderBeers() {
        const { beerResults = [] } = this.context
        return beerResults.map(beer =>
            <BeerItem
            key={beer.id}
            {...beer}
            />)
    }

    render() {

        const { error } = this.context
        
        return(
            <div>
                <h2>Search Results:</h2>
                <ul>
                    {error
                        ? <p>error!</p>
                        : this.renderBeers()}
                </ul>
            </div>
        )
    }
}

export default ResultsPage