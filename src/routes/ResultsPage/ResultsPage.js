import React, { Component } from 'react';
import BeerItem from '../../components/BeerItem/BeerItem';
import STORE from '../../utils/STORE';

class ResultsPage extends Component {

    state = STORE

    render() {
        const beers = this.state.beers
        return(
            <div>
                <h2>Search Results:</h2>
                <ul>
                    {beers.map(beer =>
                        <BeerItem
                        key={beer.id}
                        {...beer}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default ResultsPage