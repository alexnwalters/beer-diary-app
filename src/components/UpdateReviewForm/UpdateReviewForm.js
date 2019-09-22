import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BeerContext from '../../contexts/BeerContext';
import BeerDiaryApiService from '../../services/BeerDiaryApiService';
import OverallRating from '../OverallRating/OverallRating';
import ColorRating from '../ColorRating/ColorRating';
import DrinkabilityRating from '../DrinkabilityRating/DrinkabilityRating';
import './UpdateReviewForm.css'

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
        const newReview = {
            overall: Math.round(overall),
            color: Math.round(color),
            aroma: aroma,
            taste: taste,
            drinkability: Math.round(drinkability),
            notes: notes,
            date_modified: date_modified
        }
        
        BeerDiaryApiService.updateReview(newReview, review_id)
            .then(res => {
                overall.value = ''
                color.value = ''
                aroma.value = ''
                taste.value = ''
                drinkability.value = ''
                notes.value = ''
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
            
        this.props.history.push('/dairy')
    }

    componentDidMount() {
        this.context.clearError()
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
        const { error, overall, color, aroma, taste, drinkability, notes } = this.state
        const aromas = [{name: 'Bready'}, {name: 'Nutty'}, {name: 'Toasty'}, {name: 'Roasted'}, {name: 'Floral'}, {name: 'Fruity'}, {name: 'Piney'}, {name: 'Spicy'}]
        const tastes = [{name: 'Crisp'}, {name: 'Hop'}, {name: 'Malt'}, {name: 'Roast'}, {name: 'Smoke'}, {name: 'Fruit & Spice'}, {name: 'Tart & Funky'}]

        return (
            <div>
                <form className='UpdateReviewForm' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>Error Handling Update Submit</p>}
                </div> 
                    <fieldset>
                    <label htmlFor='overall'>Overall:</label>
                            <OverallRating value={Math.round(overall)}/>
                            <input type='range' name='overall' min='1' max='5' step='.0001' className='slider' value={ overall } onChange={ this.handleChangeOverall } required/>
                        
                        <label htmlFor='color'>Color:</label>
                            <ColorRating value={Math.round(color)}/>
                            <input type='range' name='color' min='1' max='5' step='.0001' className='slider' value={ color } onChange={ this.handleChangeColor } required/>
                        
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
                        
                         <label htmlFor='drinkability'>Drinkability:</label>
                            <DrinkabilityRating value={Math.round(drinkability)}/>
                            <input type='range' name='drinkability' min='1' max='5' step='.0001' className='slider' value={ drinkability } onChange={ this.handleChangeDrinkability } required/>
                       
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