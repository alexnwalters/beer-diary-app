import React, { Component } from 'react'
import CreateBeerForm from '../../components/CreateBeerForm/CreateBeerForm'
import BeerContext from '../../contexts/BeerContext'

 class CreateBeerPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: {
            push: () => {},
        },
    }

    static contextType = BeerContext

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    handleCreateSuccess = createReview => {
        const { history } = this.props
        history.push('/diary')
    }
    
    
    render() {         
        return (
            <div className='container'>
                <h2>Add Your New Beer and Review:</h2>
                <CreateBeerForm 
                    onCreateSuccess={this.handleCreateSuccess}
                />
                <button className='CreateForm_button' onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

 export default CreateBeerPage