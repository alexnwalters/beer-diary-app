import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './components/App/App';
import './index.css';
import { BeerProvider } from './contexts/BeerContext';

ReactDOM.render(
    <BrowserRouter>
        <BeerProvider>
            <App />
        </BeerProvider>
    </BrowserRouter>,
    document.getElementById('root')
);