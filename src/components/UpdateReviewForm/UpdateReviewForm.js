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
    
    constructor(props){
        super(props);
        this.state = {
            overall: '',
            color: '',
            aroma: '',
            taste: '',
            drinkability: '',
            notes: '',
        };
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
        const { overall, color, aroma, taste, drinkability, notes } = this.state
        const newReview = {
            overall: Math.round(overall),
            color: Math.round(color),
            aroma: aroma,
            taste: taste,
            drinkability: Math.round(drinkability),
            notes: notes,
            date_modified: new Date(),
        }
        
        BeerDiaryApiService.updateReview(newReview, review_id)
        .then(() => {
            this.props.onUpdateSuccess()
        })
        .catch(this.context.setError)
    }

    componentDidMount() {
        this.context.clearError()
        const selectedReview = this.props.match.params.review_id
        BeerDiaryApiService.getReview(selectedReview)
            .then(res => this.setState({
                overall: res.overall,
                color: res.color,
                aroma: res.aroma,
                taste: res.taste,
                drinkability: res.drinkability,
                notes: res.notes,
            }))
            .catch(this.context.setError)
    }

    render() {
        const { error } = this.context
        const { overall, color, aroma, taste, drinkability, notes } = this.state
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
                                {aromas.map(aroma => <option key={aroma.name} value={aroma.name}>{aroma.name}</option>)}
                            </select>
                        
                         <label htmlFor='taste'>Taste (Most Domanant Flavor):</label>
                            <select name='taste' value={ taste } onChange={ this.handleChangeTaste } required>
                                <option disabled='' value=''>...</option>
                                {tastes.map(taste => <option key={taste.name} value={taste.name}>{taste.name}</option>)}
                            </select>
                        
                         <label htmlFor='drinkability'>Drinkability:</label>
                            <DrinkabilityRating value={Math.round(drinkability)}/>
                            <input type='range' name='drinkability' min='1' max='5' step='.0001' className='slider' value={ drinkability } onChange={ this.handleChangeDrinkability } required/>
                       
                         <label htmlFor='notes'>Notes:</label>
                                <textarea  name='notes' rows='4' value={ notes } onChange={ this.handleChangeNotes }></textarea>
                        <br></br>              
                        <input className='UpdateForm_button' type='submit'/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
 export default withRouter(UpdateReviewForm)