import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BeerContext from '../../contexts/BeerContext'
import './UpdateReviewForm.css'
import BeerDiaryApiService from '../../services/BeerDiaryApiService'

 class UpdateReviewForm extends Component {
    static defaultProps = {
        match: { params: {} },
        onUpdateSuccess: () => {},
    }
    
    static contextType = BeerContext

    state = {
        error: null,
        overall: '',
        color: '',
        aroma: '',
        taste: '',
        drinkability: '',
        notes: '',
        date_modified: new Date(),
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
    
    handleSubmit = e => {
        e.preventDefault()
        const review_id = this.props.match.params.review_id
        const { overall, color, aroma, taste, drinkability, notes, date_modified } = this.state
        const newReview = { overall, color, aroma, taste, drinkability, notes, date_modified }
        
        BeerDiaryApiService.updateReview(newReview, review_id)
            .then(res => {
                overall.value = ''
                color.value = ''
                aroma.value = ''
                taste.value = ''
                drinkability.value = ''
                notes.value = ''
                console.log(res)
                this.props.history.push('/diary')
            })
            .catch(res => {
                this.setState({ error: res.error })
            }) 
        // .then(res => {
        //     overall.value = ''
        //     color.value = ''
        //     aroma.value = ''
        //     taste.value = ''
        //     drinkability.value = ''
        //     notes.value = ''
        //     this.props.onUpdateSuccess()
        // })
        // .catch(res => {
        //     this.setState({ error: res.error })
        // })          
    }

    componentDidMount() {
        const selectedReview = this.props.match.params.review_id
        const currentReview = this.context.userReviews.find(review => review.id == selectedReview)
        
        this.setState({
            overall: currentReview.overall,
            color: currentReview.color,
            aroma: currentReview.aroma,
            taste: currentReview.taste,
            drinkability: currentReview.drinkability,
            notes: currentReview.notes,
        })
    }

    render() {
        const { error } = this.state
        const aromas = [{name: 'Bready'}, {name: 'Nutty'}, {name: 'Toasty'}, {name: 'Roasted'}, {name: 'Floral'}, {name: 'Fruity'}, {name: 'Piney'}, {name: 'Spicy'}]
        const tastes = [{name: 'Crisp'}, {name: 'Hop'}, {name: 'Malt'}, {name: 'Roast'}, {name: 'Smoke'}, {name: 'Fruit & Spice'}, {name: 'Tart & Funky'}]
        const numbers = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]
        const { overall, color, aroma, taste, drinkability, notes } = this.state

        return (
            <div>
                <form className='UpdateReviewForm' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>Error Handling Update Submit</p>}
                </div> 
                    <fieldset>
                        <label htmlFor='overall'>Overall(1 to 5):</label>
                            <input type='range' name='overall' min='1' max='5' step='1' list='overall-list' value={ overall } onChange={ this.handleChangeOverall }/>
                            <datalist id='overall-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                        
                         <label htmlFor='color'>Color(Light to Dark):</label>
                            <input type='range' name='color' min='1' max='5' step='1' list='color-list' value={ color } onChange={ this.handleChangeColor }/>
                            <datalist id='color-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                        
                         <label htmlFor='aroma'>Aroma (Most Domanant Fragrance):</label>
                            <select name='aroma' value={ aroma } onChange={ this.handleChangeAroma } required>
                                <option disabled='' value=''>...</option>
                                {aromas.map(aroma => <option value={aroma.name}>{aroma.name}</option>)}
                            </select>
                        
                         <label htmlFor='taste'>Taste (Most Domanant Flavor Palate):</label>
                            <select name='taste' value={ taste } onChange={ this.handleChangeTaste } required>
                                <option disabled='' value=''>...</option>
                                {tastes.map(taste => <option value={taste.name}>{taste.name}</option>)}
                            </select>
                        
                         <label htmlFor='drinkability'>Drinkability('One and Done' to 'Keep'em Coming'):</label>
                            <input type='range' name='drinkability' min='1' max='5' step='1' list='drinkability-list' value={ drinkability } onChange={ this.handleChangeDrinkability }/>
                            <datalist id='drinkability-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                       
                         <label htmlFor='notes'>Notes:</label>
                                <textarea  name='notes' rows='4' value={ notes } onChange={ this.handleChangeNotes }></textarea>
                        <br></br>              
                        <input type='submit'/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
 export default withRouter(UpdateReviewForm)