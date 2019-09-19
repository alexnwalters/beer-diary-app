import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BeerContext from '../../contexts/BeerContext';
import BeerDiaryApiService from '../../services/BeerDiaryApiService';
import './CreateBeerForm.css';

class CreateBeerForm extends Component{
    static defaultProps = {
        match: { params: {} },
        onReviewSuccess: () => {},
    }

    static contextType = BeerContext

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleSubmit = e => {
        e.preventDefault()

        const beer_id = this.getRandomInt(1000000)

        const { name, brewery, abv, ibu, style, overall, color, aroma, taste, drinkability, notes } = e.target
        const userReview = {
            beer_id: beer_id,
            overall: overall.value,
            color: color.value,
            aroma: aroma.value,
            taste: taste.value,
            drinkability: drinkability.value,
            notes: notes.value
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
        // this.props.history.push('/diary')
    }

    render() {
        const aromas = [{name: 'Bready'}, {name: 'Nutty'}, {name: 'Toasty'}, {name: 'Roasted'}, {name: 'Floral'}, {name: 'Fruity'}, {name: 'Piney'}, {name: 'Spicy'}]
        const tastes = [{name: 'Crisp'}, {name: 'Hop'}, {name: 'Malt'}, {name: 'Roast'}, {name: 'Smoke'}, {name: 'Fruit & Spice'}, {name: 'Tart & Funky'}]
        const numbers = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]
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
                        <label htmlFor='overall'>Overall(1 to 5):</label>
                            <input type='range' name='overall' min='1' max='5' step='1' list='overall-list'/>
                            <datalist id='overall-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                        

                        <label htmlFor='color'>Color(Light to Dark):</label>
                            <input type='range' name='color' min='1' max='5' step='1' list='color-list'/>
                            <datalist id='color-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                        
                        <label htmlFor='aroma'>Aroma (Most Domanant Fragrance):</label>
                            <select name='aroma' required>
                                <option disabled='' value=''>...</option>
                                {aromas.map(aroma => <option value={aroma.name}>{aroma.name}</option>)}
                            </select>
                        
                        <label htmlFor='taste'>Taste (Most Domanant Flavor Palate):</label>
                            <select name='taste' required>
                                <option disabled='' value=''>...</option>
                                {tastes.map(taste => <option value={taste.name}>{taste.name}</option>)}
                            </select>
                    
                        <label htmlFor='drinkability'>Drinkability('One and Done' to 'Keep'em Coming'):</label>
                            <input type='range' name='drinkability' min='1' max='5' step='1' list='drinkability-list'/>
                            <datalist id='drinkability-list'>
                                {numbers.map(number => <option value={number.value}>{number.value}</option>)}
                            </datalist>
                        
                        <label htmlFor='notes'>Notes:</label>
                            <textarea  name='notes' rows='4'></textarea>
                        <br></br>             
                        <input type='submit'/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default withRouter(CreateBeerForm)