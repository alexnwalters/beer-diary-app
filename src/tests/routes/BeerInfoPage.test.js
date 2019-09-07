import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BeerInfoPage from '../../routes/BeerInfoPage/BeerInfoPage'

//this doesn't seem correct?
const match = {
      params: {}
    };

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <BeerInfoPage match={match}/>
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});