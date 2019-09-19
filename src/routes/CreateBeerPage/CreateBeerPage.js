import React, { Component } from 'react'
import CreateBeerForm from '../../components/CreateBeerForm/CreateBeerForm'
import BeerContext from '../../contexts/BeerContext'

 class CreateBeerPage extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    static contextType = BeerContext

    
    handleCreateSuccess = createReview => {
        const { history } = this.props
        history.push('/diary')
    }
    
    
    render() {         
        return (
            <div>
                <h2>Add Your New Beer and Review:</h2>
                <CreateBeerForm 
                    onCreateSuccess={this.handleCreateSuccess}
                />
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

 export default CreateBeerPage