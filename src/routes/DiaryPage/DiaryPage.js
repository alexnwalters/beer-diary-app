import React, { Component } from 'react';
import UserReview from '../../components/UserReview/UserReview'
import BeerItem from '../../components/BeerItem/BeerItem'
import BeerContext from '../../contexts/BeerContext'
import BeerDiaryApiService from '../../services/BeerDiaryApiService';
import './DiaryPage.css'

class DiaryPage extends Component {

    static contextType = BeerContext

    componentDidMount() {
        this.context.clearError()
        this.context.clearQuery()
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
            <div className='DiaryPage'>
                <h2 className='nothing'>Beer Diary</h2>
                {reviews.map(review => {
                        const beer = beers.filter(beer => beer.beer_id === review.beer.beer_id)
                        
                        return (
                            <div key={review.id} className='container'>
                                {beer.map(beer => 
                                    <BeerItem
                                        key={beer.id}
                                        {...beer}
                                    />
                                )}
                                
                                <UserReview
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