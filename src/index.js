import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './components/App/App';
import { BeerProvider } from './contexts/BeerContext';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import './utils/fonts/FjallaOne-Regular.ttf';
import './utils/fonts/Raleway-Light.ttf';
import './utils/fonts/Raleway-Medium.ttf';
import './utils/fonts/Montserrat-Bold.ttf';
import './utils/fonts/NothingYouCouldDo-Regular.ttf';
import './utils/fonts/Montserrat-Regular.ttf';

library.add(
fas //search icon
)




ReactDOM.render(
    <BrowserRouter>
        <BeerProvider>
            <App />
        </BeerProvider>
    </BrowserRouter>,
    document.getElementById('root')
);