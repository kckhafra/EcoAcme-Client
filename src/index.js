import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {EcoAcmeProvider} from './contexts/EcoAcmeContext'


ReactDOM.render(

    <BrowserRouter>
        <EcoAcmeProvider>
            <App />
        </EcoAcmeProvider>
    </BrowserRouter>, document.getElementById('root'));

