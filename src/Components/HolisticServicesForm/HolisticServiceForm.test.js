import React from 'react';
import ReactDOM from 'react-dom';
import HolisticServiceForm from './HolisticServicesForm';
import { BrowserRouter } from 'react-router-dom'
import App from '../App/App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <App>
  <HolisticServiceForm />
  </App>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});