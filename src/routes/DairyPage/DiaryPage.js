import React, { Component } from 'react';
import UserReview from '../../components/UserReview/UserReview'
import BeerItem from '../../components/BeerItem/BeerItem'
import STORE from '../../utils/STORE'

class DiaryPage extends Component {

    state = STORE
    
    render() {

        const reviews = this.state.userReviews
        const beers = this.state.beers

        return (
            <div>
                <h2>Beer Diary</h2>
                {reviews.map(review => {
                        const beer = beers.filter(beer => beer.id === review.beerId)
                        return (
                            <div>
                                {beer.map(beer => 
                                    <BeerItem
                                        key={beer.id}
                                        {...beer}
                                    />
                                )}

                                <UserReview
                                    key={review.id}
                                    {...review}
                                />
                            </div>
                        )
                    }
                )}                
            </div>
        )
    }
}

export default DiaryPage