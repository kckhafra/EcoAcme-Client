import React from 'react';
import './App.css';
import Home from '../Home/Home'
import {Route} from 'react-router-dom';
import FriendListPage from '../Friends/FriendListPage/FriendListPage';
import MessageListPage from '../Messages/MessageListPage/MessageListPage'
import NotificationListPage from '../Notifications/NotificationsListPage/NotificationsListPage'
import Profile from '../Profile/Profile'
import EcoAcmeContext from '../../contexts/EcoAcmeContext'
import PostService from '../../services/post-api-service'
import StarterPage from '../StarterPage/StarterPage'
import NewMessageForm from '../NewMessageForm/NewMessageForm'
import UserService from '../../services/users-api-service'

 class App extends React.Component {
  static contextType = EcoAcmeContext
    
  componentDidMount(){
    PostService.getAllPost()
    .then(this.context.setPostList)
    UserService.getAllUsers()
    .then(this.context.setUserList)
}

   
    

  render(){
    
  return (
    <div className="App">
      

      <Route
      exact
      path={'/'}
      component={StarterPage}/>
      
      <Route
      path={'/home'}
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
      <Route
      path={'/profile'}
      component={Profile}/>
      <Route
      path={'/new_message'}
      component={NewMessageForm}
      />
    </div>
  )};
}

export default App;
