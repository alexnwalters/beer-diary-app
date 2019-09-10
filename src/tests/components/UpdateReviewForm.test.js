import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UpdateReviewForm from '../../components/UpdateReviewForm/UpdateReviewForm'

it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <UpdateReviewForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div)
});