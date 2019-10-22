import React from 'react';
import ReactDOM from 'react-dom';
import NewMessageForm from './NewMessageForm';
import { BrowserRouter } from 'react-router-dom'
import App from '../NewMessageForm/NewMessageForm'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <App>
  <NewMessageForm />
  </App>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});