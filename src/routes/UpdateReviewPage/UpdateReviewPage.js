import React, { Component } from 'react'
import UpdateReviewForm from '../../components/UpdateReviewForm/UpdateReviewForm'
import BeerItem from '../../components/BeerItem/BeerItem'
import BeerContext from '../../contexts/BeerContext'

 class UpdateReviewPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: { 
            push: () => {},
            goBack: () => {}
        },
    }

    static contextType = BeerContext

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderBeerInfo() {
        const selectedReview = this.props.match.params.review_id
        const reviewBeerInfo = this.context.userReviews.filter(review => review.id == selectedReview)
        return reviewBeerInfo.map(review => 
            <BeerItem
                key={review.beer.beer_id}
                {...review.beer}
            />
        )
    }

    handleUpdateSuccess = () => {
        const { history } = this.props
        history.push('/diary')
    }
    
    render() {
        
        const { error } = this.context
         
        return (
            <div>
                <h2 className='montserrat'>Provide Your Review:</h2>
                <div className='container'>
                    <div>
                    {error
                        ? <p>error!</p>
                        : this.renderBeerInfo()}
                    </div>
                    <UpdateReviewForm
                        key={this.props.match.params.review_id}
                        onUpdateSuccess={this.handleUpdateSuccess}
                    />
                    <button className='UpdateForm_button' onClick={this.props.history.goBack}>Back</button>
                </div>
            </div>
        )
    }
}

 export default UpdateReviewPage