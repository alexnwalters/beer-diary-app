import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class ReviewForm extends Component{
    render() {
        return (
            <div className='ReviewForm'>
                <form>
                    <fieldset>
                        <label htmlFor='overall-review'>Overall(1 to 5):
                            <input type='range' name='overall-review' min='1' max='5' step='1' list='overall-list' />
                            <datalist id='overall-list'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </datalist>
                        </label>

                         <label htmlFor='color-review'>Color(Light to Dark):
                            <input type='range' name='color-review' min='1' max='5' step='1' list='color-list' />
                            <datalist id='color-list'>
                                <option>Light</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>Dark</option>
                            </datalist>
                        </label>

                         <label htmlFor='aroma-review'>Aroma (Most Domanant Fragrance):
                            <select name='aroma-review'>
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

                         <label htmlFor='taste-review'>Taste (Most Domanant Flavor Palate):
                            <select name='taste-review'>
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

                         <label htmlFor='drinkablity-review'>Drinkability('One and Done' to 'Keep'em Coming'):
                            <input type='range' name='drinkablity-review' min='1' max='5' step='1' list='drinkability-list' />
                            <datalist id='drinkability-list'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </datalist>
                        </label>
                         <label htmlFor='notes-review'>Notes:
                                <textarea  name='drinkablity-review' rows='10' cols='30'></textarea>
                        </label>                
                        <input type='submit'/>
                    </fieldset>
                </form>
                <Link to='/'><button>Back</button></Link> {/* change later to use history */}
            </div>
        )
    }
}
 export default ReviewForm
