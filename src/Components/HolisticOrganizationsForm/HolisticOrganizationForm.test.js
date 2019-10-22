import React from 'react';
import ReactDOM from 'react-dom';
import HolisticOrganizationForm from './HolisticOrganizationsForm';
import { BrowserRouter } from 'react-router-dom'
import App from '../App/App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <App>
  <HolisticOrganizationForm />
  </App>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});