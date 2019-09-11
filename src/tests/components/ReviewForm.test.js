import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <ReviewForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});