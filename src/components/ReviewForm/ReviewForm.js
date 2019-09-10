import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BeerContext from '../../contexts/BeerContext'

 class ReviewForm extends Component{
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = BeerContext

    handleSubmit = e => {
        e.preventDefault()
        const selectedBeer = this.props.match.params.beerId
        const beerReviewed = this.context.beerResults.find(beer => beer.id == selectedBeer)

        const { overall, color, aroma, taste, drinkability, notes } = e.target
        const userReview = {
            beerId: beerReviewed.id,
            overall: overall.value,
            color: color.value,
            aroma: aroma.value,
            taste: taste.value,
            drinkability: drinkability.value,
            notes: notes.value
        }
        const beer = {
            id: beerReviewed.id,
            name: beerReviewed.name,
            brewery: beerReviewed.breweries[0].name,
            abv: beerReviewed.abv || beerReviewed.style.abvMax,
            ibu: beerReviewed.ibu || beerReviewed.style.ibuMax,
            description: beerReviewed.description || 'No Description Provided',
        }

        this.context.addBeer(beer)
        this.context.addUserReview(userReview)

        this.props.history.push('/diary')
    }

    render() {
        return (
            <div>
                <form className='ReviewForm' onSubmit={this.handleSubmit}> 
                    <fieldset>
                        <label htmlFor='overall'>Overall(1 to 5):
                            <input type='range' name='overall' min='1' max='5' step='1' list='overall-list' />
                            <datalist id='overall-list'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </datalist>
                        </label>

                         <label htmlFor='color'>Color(Light to Dark):
                            <input type='range' name='color' min='1' max='5' step='1' list='color-list' />
                            <datalist id='color-list'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </datalist>
                        </label>

                         <label htmlFor='aroma'>Aroma (Most Domanant Fragrance):
                            <select name='aroma'>
                                <option value='undecided'>Undecided</option>
                                <option>Bready</option>
                                <option>Nutty</option>
                                <option>Toasty</option>
                                <option>Roasted</option>
                                <option>Floral</option>
                                <option>Fruity</option>
                                <option>Piney</option>
                                <option>Spicy</option>
                            </select>
                        </label>

                         <label htmlFor='taste'>Taste (Most Domanant Flavor Palate):
                            <select name='taste'>
                                <option value='undecided'>Undecided</option>
                                <option>Crisp</option>
                                <option>Hop</option>
                                <option>Malt</option>
                                <option>Roast</option>
                                <option>Smoke</option>
                                <option>Fruit & Spice</option>
                                <option>Tart & Funky</option>
                            </select>
                        </label>

                         <label htmlFor='drinkability'>Drinkability('One and Done' to 'Keep'em Coming'):
                            <input type='range' name='drinkability' min='1' max='5' step='1' list='drinkability-list' />
                            <datalist id='drinkability-list'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </datalist>
                        </label>
                         <label htmlFor='notes'>Notes:
                                <textarea  name='notes' rows='10' cols='30'></textarea>
                        </label>                
                        <input type='submit'/>
                    </fieldset>
                </form>
            </div>
        )
    }
}
 export default withRouter(ReviewForm)
