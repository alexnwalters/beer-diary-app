import React, { Component } from 'react'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import BeerItem from '../../components/BeerItem/BeerItem'
import STORE from '../../utils/STORE'

 class ReviewInputPage extends Component {

     state = STORE

     render() {
        const reviewId = this.props.match.params.reviewId
        const beer = this.state.beers.filter(beer => beer.id === reviewId)

         return (
            <div>
                <h2>Provide Your Review:</h2>
                {beer.map(beer => 
                    <BeerItem
                        key={beer.id}
                        {...beer}
                    />
                )}
                <ReviewForm />
            </div>
        )
    }
}

 export default ReviewInputPage