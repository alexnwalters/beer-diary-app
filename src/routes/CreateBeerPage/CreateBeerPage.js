import React, { Component } from 'react'
import CreateBeerForm from '../../components/CreateBeerForm/CreateBeerForm'
import BeerContext from '../../contexts/BeerContext'

 class CreateBeerPage extends Component {

    static contextType = BeerContext
    
    render() {         
        return (
            <div>
                <h2>Add Your New Beer and Review:</h2>
                <CreateBeerForm />
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

 export default CreateBeerPage