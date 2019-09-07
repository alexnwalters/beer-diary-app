import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserReview from '../../components/UserReview/UserReview'

it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <UserReview />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div)
});