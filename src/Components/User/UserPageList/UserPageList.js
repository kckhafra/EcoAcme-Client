import React from 'react';
import EcoAcmeContext from '../../../contexts/EcoAcmeContext'
import UserPage from '../UserPage/UserPage'
import {Link} from 'react-router-dom'
import Header from '../../Header/Header'
import './UserPageList.css'
import JwtService from '../../../services/jwt-service';
import TokenService from '../../../services/token-service';
import Image from '../../ImagesForComponents/ImagesForComponents'
import FriendsService from '../../../services/friends-api-service'
import UserService from '../../../services/users-api-service';
const uuid = require('uuid')
export default class UserPageList extends React.Component{
    static contextType = EcoAcmeContext

    componentDidMount(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        FriendsService.getFriendsReceiver(user_id)
        .then(this.context.setFriendReceiver)
       
        FriendsService.getFriendsRequest(user_id)
        .then(this.context.setFriendRequest)
        
        
        
    }
    handleSearchMessage =(e)=>{
        e.preventDefault()
        const search_term = e.target.search_users.value
        UserService.searchUsers(search_term)
        .then(this.context.setUserList)
    }
    
    render(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        const friends = this.context.friendReceiverList.concat(this.context.friendRequestList)
        const friendsList = [...new Map(friends.map(item => [item['user_name'], item])).values()]
        const users = this.context.userList.filter(user=>user.id!==user_id)

        return(
            <div>
                <Header/>
                <div>
                    <form onSubmit={this.handleSearchMessage} className="searchmessage-container">
                        <input className="search-message" type="text" title="search_users" name="search_users"  placeholder="Search users"></input>
                        <button className="usersearch-button">Search</button>
                    </form> 
                <div className="userpage-container">
                     
                    <div className="user-sidebar">
                        <Link
                            to="/friends">
                            <div className="userpage-friends">
                                <p className="friendtext-andicon">
                                    <img alt="A friend of the logged in user" className="friend-image" src={Image.friendIcon}/>
                                    <div>Friends</div> 
                                </p>  
                                <p className="friend-number">{friendsList.length}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="user-middle-container">
                    <div className="usermiddle-title">People You may know</div>
                        <div className="user-middle">
                        
                            {users.map(user=>{
                                return(
                                <UserPage 
                                key={uuid} 
                                user={user}
                                history={this.props.history}
                                />
                                )
                            })}
                        </div>
                    </div>
                    <div className="user-left"></div>
                </div>
            </div>
            </div>
        )
    }
}