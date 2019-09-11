import React, { Component } from 'react';
import BeerItem from '../../components/BeerItem/BeerItem';
import BeerContext from '../../contexts/BeerContext'
import ReviewButton from '../../components/ReviewButton/ReviewButton';

class ResultsPage extends Component {

    static contextType = BeerContext

    static defaultProps = {
        beerResults: [],
        userReviews: [],
    }
    
    renderBeers() {
        const { beerResults, userReviews } = this.context

        return beerResults.map(beer => {
            const review = userReviews.filter(review => review.beerId == beer.id)
            
            if(review.length) {
                return (
                    <div>
                        <BeerItem key={beer.id} {...beer}/>
                        <p>Already Reviewed</p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <BeerItem key={beer.id} {...beer}/>
                        <ReviewButton key={beer.id} {...beer}/>
                    </div>
                )
            }
        })
    }

    render() {
        const { error } = this.context
        
        return(
            <div>
                <h2>Search Results:</h2>
                <ul>
                    {error
                        ? <p>No results returned, please try again.</p>
                        : this.renderBeers()}
                </ul>
            </div>
        )
    }
}

export default ResultsPage