import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BeerContext from '../../contexts/BeerContext'

 class UpdateReviewForm extends Component{
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = BeerContext

    state = {
        beerId: '',
        overall: '',
        color: '',
        aroma: '',
        taste: '',
        drinkability: '',
        notes: '',
    }

    handleChangeOverall = e => {
        this.setState({ overall: e.target.value })
    };

    handleChangeColor = e => {
        this.setState({ color: e.target.value })
    };

    handleChangeAroma = e => {
        this.setState({ aroma: e.target.value })
    };

    handleChangeTaste = e => {
        this.setState({ taste: e.target.value })
    };

    handleChangeDrinkability = e => {
        this.setState({ drinkability: e.target.value })
    };

    handleChangeNotes = e => {
        this.setState({ notes: e.target.value })
    };
    
    resetFields = (newFields) => {
        this.setState({
            beerId: newFields.beerId || '',
            overall: newFields.overall || '',
            color: newFields.color || '',
            aroma: newFields.aroma || '',
            taste: newFields.taste || '',
            drinkability: newFields.drinkability || '',
            notes: newFields.notes || '',
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const { beerId, overall, color, aroma, taste, drinkability, notes } = this.state
        const newReview = { beerId, overall, color, aroma, taste, drinkability, notes }

        this.resetFields(newReview)
        this.context.updateUserReview(newReview)

        this.props.history.push('/diary')
    }

    componentDidMount() {
        const selectedReview = this.props.match.params.beerId
        const currentReview = this.context.userReviews.find(review => review.beerId == selectedReview)
        
        this.setState({
            beerId: currentReview.beerId,
            overall: currentReview.overall,
            color: currentReview.color,
            aroma: currentReview.aroma,
            taste: currentReview.taste,
            drinkability: currentReview.drinkability,
            notes: currentReview.notes,
        })
    }

    render() {
        const aromas = [{name: 'Bready'}, {name: 'Nutty'}, {name: 'Toasty'}, {name: 'Roasted'}, {name: 'Floral'}, {name: 'Fruity'}, {name: 'Piney'}, {name: 'Spicy'}]
        const tastes = [{name: 'Crisp'}, {name: 'Hop'}, {name: 'Malt'}, {name: 'Roast'}, {name: 'Smoke'}, {name: 'Fruit & Spice'}, {name: 'Tart & Funky'}]
        const numbers = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]
        const { overall, color, aroma, taste, drinkability, notes } = this.state

        return (
            <div>
                <form className='UpdateReviewForm' onSubmit={this.handleSubmit}> 
                    <fieldset>
                        <label htmlFor='overall'>Overall(1 to 5):
                            <input type='range' name='overall' min='1' max='5' step='1' list='overall-list' value={ overall } onChange={ this.handleChangeOverall }/>
                            <datalist id='overall-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                        </label>

                         <label htmlFor='color'>Color(Light to Dark):
                            <input type='range' name='color' min='1' max='5' step='1' list='color-list' value={ color } onChange={ this.handleChangeColor }/>
                            <datalist id='color-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                        </label>

                         <label htmlFor='aroma'>Aroma (Most Domanant Fragrance):
                            <select name='aroma' value={ aroma } onChange={ this.handleChangeAroma } required>
                                <option disabled='' value=''>...</option>
                                {aromas.map(aroma => <option value={aroma.name}>{aroma.name}</option>)}
                            </select>
                        </label>

                         <label htmlFor='taste'>Taste (Most Domanant Flavor Palate):
                            <select name='taste' value={ taste } onChange={ this.handleChangeTaste } required>
                                <option disabled='' value=''>...</option>
                                {tastes.map(taste => <option value={taste.name}>{taste.name}</option>)}
                            </select>
                        </label>

                         <label htmlFor='drinkability'>Drinkability('One and Done' to 'Keep'em Coming'):
                            <input type='range' name='drinkability' min='1' max='5' step='1' list='drinkability-list' value={ drinkability } onChange={ this.handleChangeDrinkability }/>
                            <datalist id='drinkability-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                        </label>
                         <label htmlFor='notes'>Notes:
                                <textarea  name='notes' rows='10' cols='30' value={ notes } onChange={ this.handleChangeNotes }></textarea>
                        </label>                
                        <input type='submit'/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
 export default withRouter(UpdateReviewForm)