import React, { Component } from 'react';
import BeerItem from '../../components/BeerItem/BeerItem'
import STORE from '../../utils/STORE'
import UserReview from '../../components/UserReview/UserReview';
import BeerResultsContext from '../../contexts/BeerResultsContext'

class BeerInfoPage extends Component {

    static contextType = BeerResultsContext
    state = STORE

    renderBeerInfo() {
        const beerId = this.props.match.params.beerId
        const beer = this.context.beerResults.filter(beer => beer.id === beerId)
        return beer.map(beer => 
            <BeerItem
                key={beer.id}
                {...beer}
            />
        )
    }

    renderUserReview() {
        const beerId = this.props.match.params.beerId
        const review = this.state.userReviews.filter(review => review.beerId == beerId)
        return review.map(review => 
            <UserReview
                key={review.id}
                {...review}
            />
        )
    }
    
    render() {
        const { error } = this.context

        return(
            <div>
                {error
                    ? <p>error!</p>
                    : this.renderBeerInfo()}
                {error
                    ? <p>error!</p>
                    : this.renderUserReview()}               
            </div>
        )
    }
}

export default BeerInfoPage