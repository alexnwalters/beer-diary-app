import React, { Component } from 'react';
import BeerItem from '../../components/BeerItem/BeerItem'
import STORE from '../../utils/STORE'
import UserReview from '../../components/UserReview/UserReview';

class BeerInfoPage extends Component {

    state = STORE
    
    render() {
        const beerId = this.props.match.params.beerId
        const beer = this.state.beers.filter(beer => beer.id === beerId)
        const review = this.state.userReviews.filter(review => review.beerId === beerId)
        
        return(
            <div>
                {beer.map(beer => 
                    <BeerItem
                        key={beer.id}
                        {...beer}
                    />
                )}
                {review.map(review => 
                    <UserReview
                        key={review.id}
                        {...review}
                    />
                )}
            </div>
        )
    }
}

export default BeerInfoPage