import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BeerItem from '../../components/BeerItem/BeerItem'

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <BeerItem />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});