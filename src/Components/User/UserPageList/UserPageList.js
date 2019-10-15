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
    render(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        const friendsList =this.context.friendReceiverList.concat(this.context.friendRequestList)
        
        
        
        // console.log(friendlist)
        return(
            <div>
                <Header/>
                <div className="userpage-container">
                    <div className="user-sidebar">
                        <Link
                            to="/friends">
                            <div className="userpage-friends">
                                <p className="friendtext-andicon">
                                    <img className="friend-image" src={Image.friendIcon}/>
                                    <div>Friends</div> 
                                </p>  
                                <p className="friend-number">{friendsList.length}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="user-middle-container">
                    <div className="usermiddle-title">People You may know</div>
                        <div className="user-middle">
                        
                            {this.context.userList.map(user=>{
                                return user.id==user_id
                                ? !user 
                                : <UserPage user={user}/>
                            })}
                        </div>
                    </div>
                    <div className="user-left"></div>
                </div>
            </div>
        )
    }
}