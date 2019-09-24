import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BeerItem from '../../components/BeerItem/BeerItem';
import BeerContext from '../../contexts/BeerContext';
import ReviewButton from '../../components/ReviewButton/ReviewButton';
import Loading from '../../components/Loading/Loading';

class ResultsPage extends Component {

    static contextType = BeerContext
    
    renderBeers() {
        const { beerResults, userReviews } = this.context

        return (
            <div>
                {beerResults.map((beer, i) => {
                    const review = userReviews.filter(review => review.beer.beer_id === beer.id)

                    if(review.length) {
                        return (
                            <div key={i} className='container'>
                                <BeerItem {...beer}/>
                                <p>Already Reviewed</p>
                            </div>
                        )
                    } else {
                        return (
                            <div key={i} className='container'>
                                <BeerItem {...beer}/>
                                <ReviewButton {...beer}/>
                            </div>
                        )
                    }
                })}
                <div>
                    <p>End of Search Results.</p>
                    <Link to='/create'><button>Create a Beer</button></Link>
                </div>
            </div>
        )
    }

    render() {
        const { error } = this.context
        const resultsReturned = this.context.beerResults
        
        return(
            <div>
                <h2>Results:</h2>
                {(resultsReturned.length || error )
                    ? <div> 
                        {error
                            ? <div>
                                <p>No results returned, please try again or add a beer instead.</p>
                                <Link to='/create'><button>Create a Beer</button></Link>
                            </div>
                            : this.renderBeers()}
                    </div>
                    : <Loading />}
            </div>
        )
    }
}

export default ResultsPage