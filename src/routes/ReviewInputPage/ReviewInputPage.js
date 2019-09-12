import React, { Component } from 'react'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import BeerItem from '../../components/BeerItem/BeerItem'
import BeerContext from '../../contexts/BeerContext'

 class ReviewInputPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = BeerContext

    renderBeerInfo() {
        const selectedBeer = this.props.match.params.beerId
        const beerInfo = this.context.beerResults.filter(beer => beer.id === selectedBeer)
        
        return beerInfo.map(beer => 
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
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

 export default ReviewInputPage