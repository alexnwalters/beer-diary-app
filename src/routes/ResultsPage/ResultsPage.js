import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BeerItem from '../../components/BeerItem/BeerItem';
import BeerContext from '../../contexts/BeerContext'
import ReviewButton from '../../components/ReviewButton/ReviewButton';

class ResultsPage extends Component {

    static contextType = BeerContext
    
    renderBeers() {
        const { beerResults, userReviews } = this.context

        return (
            <ul>
                {beerResults.map((beer, i) => {
                    const review = userReviews.filter(review => review.beerId === beer.id)

                    if(review.length) {
                        return (
                            <li>
                                <BeerItem key={i} {...beer}/>
                                <p>Already Reviewed</p>
                            </li>
                        )
                    } else {
                        return (
                            <li>
                                <BeerItem key={i} {...beer}/>
                                <ReviewButton key={beer.id} {...beer}/>
                            </li>
                        )
                    }
                })}
            </ul>
        )
    }

    render() {
        const { error } = this.context
        
        return(
            <div>
                <h2>Search Results:</h2>
                {error
                    ? <div>
                        <p>No results returned, please try again or add a beer instead.</p>
                        <Link to='/create'><button>Create a Beer</button></Link>
                    </div>
                    : this.renderBeers()}
            </div>
        )
    }
}

export default ResultsPage