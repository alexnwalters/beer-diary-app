import React, { Component } from 'react';
import UserReview from '../../components/UserReview/UserReview'
import BeerItem from '../../components/BeerItem/BeerItem'
import BeerContext from '../../contexts/BeerContext'

class DiaryPage extends Component {

    static contextType = BeerContext
   
    render() {

        const reviews = this.context.userReviews
        const beers = this.context.beers

        return (
            <div>
                <h2>Beer Diary</h2>
                {reviews.map(review => {
                        const beer = beers.filter(beer => beer.id == review.beerId)
                        console.log(review)
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