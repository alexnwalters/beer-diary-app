import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm'

it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <SignUpForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div)
});