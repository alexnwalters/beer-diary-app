import React, { Component } from 'react'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import BeerItem from '../../components/BeerItem/BeerItem'
import BeerResultsContext from '../../contexts/BeerResultsContext'

 class ReviewInputPage extends Component {

    static contextType = BeerResultsContext

    renderBeerInfo() {
        const reviewId = this.props.match.params.reviewId
        const beer = this.context.beerResults.filter(beer => beer.id == reviewId)
        
        return beer.map(beer => 
            <BeerItem
                key={beer.id}
                {...beer}
            />
        )
    }

    render() {
        const { error } = this.context
         
        return (
            <div>
                <h2>Provide Your Review:</h2>
                <div>
                {error
                    ? <p>error!</p>
                    : this.renderBeerInfo()}
                </div>
                <ReviewForm />
            </div>
        )
    }
}

 export default ReviewInputPage