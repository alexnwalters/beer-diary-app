import React, { Component } from 'react';
import BeerItem from '../../components/BeerItem/BeerItem'
import UserReview from '../../components/UserReview/UserReview';
import BeerContext from '../../contexts/BeerContext'
import ReviewButton from '../../components/ReviewButton/ReviewButton'
import OtherReviews from '../../components/OtherReivews/OtherReviews'
import BeerDiaryApiService from '../../services/BeerDiaryApiService'

class BeerInfoPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    constructor(props) {
        super(props)
        this.state = {
            otherReviews: [],
            otherError: null,
        }
      }

    static contextType = BeerContext

    componentDidMount() {
        this.context.clearError()
        const beer_id = this.props.match.params.beer_id

        BeerDiaryApiService.getOtherUserReviews(beer_id)
            .then(res => this.setState({otherReviews: res}))
            .catch(e => this.setState({otherError: e}))
    }

    renderBeerInfo() { //checks for beer info from new search results if or needs the use info from user review
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
                            <p className='raleway_med'>Your Review</p>
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
                        <p className='raleway_med'>Your Review</p>
                        <UserReview key={review.id} {...review}/>
                    </div>
                )
            })
        }
    }

    renderOtherUserReviews() {
        const { otherReviews } = this.state

        if(otherReviews.length) {
            return (
                <div> 
                    <h3 className='montserrat'>Other User Reviews</h3>
                    {otherReviews.map(review => {
                        return (
                            <div className='container'>
                                <OtherReviews key={review.user_id} {...review}/>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        const { error } = this.context
        const { otherError } = this.state
        return(
            <div>
                <div className='container'>
                    {error
                        ? <p>Error!</p>
                        : this.renderBeerInfo()}
                </div>
                {otherError
                    ? <p className='raleway_med'>No Other Reviews Exist</p>
                    : this.renderOtherUserReviews()}
            </div>
        )
    }
}

export default BeerInfoPage

