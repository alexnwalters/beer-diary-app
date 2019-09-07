import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReviewInputPage from '../../routes/ReviewInputPage/ReviewInputPage'

 //this doesn't seem correct?
const match = {
    params: {}
  };


 it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ReviewInputPage match={match} />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});