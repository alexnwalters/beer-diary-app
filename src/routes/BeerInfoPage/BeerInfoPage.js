import React, { Component } from 'react';
import BeerItem from '../../components/BeerItem/BeerItem'
import UserReview from '../../components/UserReview/UserReview';
import BeerContext from '../../contexts/BeerContext'
import ReviewButton from '../../components/ReviewButton/ReviewButton'

class BeerInfoPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = BeerContext

    renderBeerInfo() {
        const selectedBeerId = this.props.match.params.beer_id
        const beerInfoFromResults = this.context.beerResults.filter(beer => beer.id === selectedBeerId)
        const beerInfoFromReview = this.context.userReviews.filter(review => review.beer.beer_id == selectedBeerId)
        const userReviews = this.context.userReviews

        if(beerInfoFromResults.length) {
            return beerInfoFromResults.map(beer => {
                const review = userReviews.find(review => review.beer.beer_id === beer.id)
                if(review) {
                    return (
                        <div>
                            <BeerItem key={beer.id} {...beer}/>
                            <UserReview key={review.id} {...review}/>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <BeerItem key={beer.id} {...beer}/>
                            <ReviewButton key={beer.id} {...beer}/>
                        </div>
                    )
                }
            })
        } else {
            return beerInfoFromReview.map(review => {
                return (
                    <div>
                        <BeerItem key={review.beer.beer_id} {...review.beer}/>
                        <UserReview key={review.id} {...review}/>
                    </div>
                )
            })
        }
    }

    render() {
        const { error } = this.context

        return(
            <div className='container'>
                {error
                    ? <p>error!</p>
                    : this.renderBeerInfo()}
            </div>
        )
    }
}

export default BeerInfoPage

