import React, { Component } from 'react'

const BeerResultsContext = React.createContext({
    query: [],
    beerResults: [],
    error: null,
    setQuery: () => {},
    clearQuery: () => {},
    setBeerResults: () => {},
    clearBeerResults: () => {},
    setError: () => {},
    clearError: () => {},
})

export default BeerResultsContext

export class BeerResultsProvider extends Component {
    state = {
        query: [],
        beerResults: [],
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
        }
        return (
            <BeerResultsContext.Provider value={value}>
                {this.props.children}
            </BeerResultsContext.Provider>
        )
    }
}
