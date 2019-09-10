import React, { Component } from 'react'

const BeerContext = React.createContext({
    query: [],
    beerResults: [],
    beers: [],
    userReviews: [],
    error: null,
    setQuery: () => {},
    clearQuery: () => {},
    setBeerResults: () => {},
    clearBeerResults: () => {},
    setError: () => {},
    clearError: () => {},
    addBeer: () => {},
})

export default BeerContext

export class BeerProvider extends Component {
    state = {
        query: [],
        beerResults: [],
        beers: [],
        userReviews: [],
        error: null
    };

    setQuery = query => {
        this.setState({ query })
    }

    clearQuery = (query) => {
        this.setState({ query: []})
    }

    setBeerResults = beerResults => {
        this.setState({ beerResults })
    }

    clearBeerResults = () => {
        this.setState({ beerResults: []})
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    addBeer = beer => {
        this.setState({
            beers: [ ...this.state.beers, beer ],
        })        
    }

    addUserReview = userReview => {
        this.setState({
            userReviews: [ ...this.state.userReviews, userReview ],
        })        
    }

    render() {
        const value = {
            query: this.state.query,
            setQuery: this.setQuery,
            clearQuery: this.clearQuery,
            beerResults: this.state.beerResults,            
            setBeerResults: this.setBeerResults,
            clearBeerResults: this.clearBeerResults,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            beers: this.state.beers,
            userReviews: this.state.userReviews,
            addBeer: this.addBeer,
            addUserReview: this.addUserReview,
        }
        return (
            <BeerContext.Provider value={value}>
                {this.props.children}
            </BeerContext.Provider>
        )
    }
}
