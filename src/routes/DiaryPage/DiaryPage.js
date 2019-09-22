import React, { Component } from 'react';
import UserReview from '../../components/UserReview/UserReview'
import BeerItem from '../../components/BeerItem/BeerItem'
import BeerContext from '../../contexts/BeerContext'
import BeerDiaryApiService from '../../services/BeerDiaryApiService';

class DiaryPage extends Component {

    static contextType = BeerContext

    componentDidMount() {
        this.context.clearError()
        BeerDiaryApiService.getUserDiary()
            .then(res => this.context.setUserReviews(res))
            .catch(this.context.setError)
    }
   
    render() {

        const reviews = this.context.userReviews
        const beers = this.context.userReviews.map(review => {
            const beer = review.beer
            return beer
        })
        return (
            <div>
                <h2>Beer Diary</h2>
                {reviews.map(review => {
                        const beer = beers.filter(beer => beer.beer_id === review.beer.beer_id)
                        
                        return (
                            <div className='container'>
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