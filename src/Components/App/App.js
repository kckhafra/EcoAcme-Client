import React from 'react';
import './App.css';
import Home from '../Home/Home'
import {Route} from 'react-router-dom';
import FriendListPage from '../Friends/FriendListPage/FriendListPage';
import MessageListPage from '../Messages/MessageListPage/MessageListPage'
import NotificationListPage from '../Notifications/NotificationsListPage/NotificationsListPage'
function App() {
  return (
    <div className="App">
      <Route
      exact
      path={'/'}
      component={Home}/>
      <Route
      path={'/friends'}
      component={FriendListPage}/>
      <Route
      path={'/messages'}
      component={MessageListPage}/>
      <Route
      path={'/notifications'}
      component={NotificationListPage}/>
    </div>
  );
}

export default App;
