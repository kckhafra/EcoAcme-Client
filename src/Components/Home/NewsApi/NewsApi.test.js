import React from 'react';
import ReactDOM from 'react-dom';
import NewsApi from './NewsApi';
import { BrowserRouter } from 'react-router-dom'
import App from '../../App/App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <App>
  <NewsApi />
  </App>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});