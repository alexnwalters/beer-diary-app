import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BeerContext from '../../contexts/BeerContext';
import BeerDiaryApiService from '../../services/BeerDiaryApiService';
import OverallRating from '../OverallRating/OverallRating';
import ColorRating from '../ColorRating/ColorRating';
import DrinkabilityRating from '../DrinkabilityRating/DrinkabilityRating';
import './CreateBeerForm.css';

class CreateBeerForm extends Component{
    static defaultProps = {
        match: { params: {} },
        onReviewSuccess: () => {},
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

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleSubmit = e => {
        e.preventDefault()

        const beer_id = this.getRandomInt(1000000)

        const { name, brewery, abv, ibu, style } = e.target
        const { overall, color, aroma, taste, drinkability, notes } = this.state

        const userReview = {
            beer_id: beer_id,
            overall: Math.round(overall),
            color: Math.round(color),
            aroma: aroma,
            taste: taste,
            drinkability: Math.round(drinkability),
            notes: notes,
        }
        const beer = {
            beer_id: beer_id,
            name: name.value,
            brewery: brewery.value,
            image: '',
            abv: abv.value || '',
            ibu: ibu.value || '',
            beer_style: style.value,
            description: '',            
        }

        BeerDiaryApiService.postBeer(beer)
            .catch(this.context.setError)

        BeerDiaryApiService.postReview(userReview)
        .then(() => {
            this.props.onCreateSuccess()
        })
        .catch(this.context.setError)    
    }

    render() {
        const { overall, color, aroma, taste, drinkability, notes } = this.state
        const aromas = [{name: 'Bready'}, {name: 'Nutty'}, {name: 'Toasty'}, {name: 'Roasted'}, {name: 'Floral'}, {name: 'Fruity'}, {name: 'Piney'}, {name: 'Spicy'}]
        const tastes = [{name: 'Crisp'}, {name: 'Hop'}, {name: 'Malt'}, {name: 'Roast'}, {name: 'Smoke'}, {name: 'Fruit & Spice'}, {name: 'Tart & Funky'}]

        return (
            <div>
                <form className='CreateBeerForm' onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Beer Details</legend>
                        <label htmlFor='name'>Beer Name:</label>
                            <input type='text' name='name' required />
                        
                        <label htmlFor='brewery'>Brewery Name:</label>
                            <input type='text' name='brewery' required />
                        
                        <label htmlFor='abv'>ABV:</label>
                            <input type='number' name='abv' min='0' max='50'/>
                        
                        <label htmlFor='ibu'>IBU:</label>
                            <input type='number' name='ibu' min='0' max='100'/>
                        
                        <label htmlFor='style'>Style:</label>
                            <input type='text' name='style'/>   
                    </fieldset> 
                    <fieldset>
                        <legend>Beer Review</legend>
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
                        
                         <label htmlFor='taste'>Taste (Most Domanant Flavor Palate):</label>
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
                        <input type='submit'/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default withRouter(CreateBeerForm)