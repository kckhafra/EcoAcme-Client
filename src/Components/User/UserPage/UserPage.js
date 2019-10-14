import React from 'react';
import {Link} from 'react-router-dom'
import './UserPage.css'
import FriendsService from '../../../services/friends-api-service'
import TokenService from '../../../services/token-service';
import JwtService from '../../../services/jwt-service';




export default class UserPage extends React.Component{
    handlePostFriends=(e)=>{
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        FriendsService.postFriend(user_id,this.props.user.id)
    }
    
    render(){
        console.log(this.props.user)
        const id = this.props.user.id
        
        return(
            <div className="users-container">
                <div className="purple-box"></div>
                <div className="userpage-card">
                <Link
                to={`/users/${id}`}>
                    <img className="user-img" src={this.props.user.images}/>
                    <div className="userpage-name">{this.props.user.first_name}{" "}<span>{this.props.user.last_name}</span></div>
                    <div className="userpage-profession">{this.props.user.profession}</div>
                </Link>
                
                </div>
                <button onClick={this.handlePostFriends}className="connect-button">Connect</button>
            </div>
        )
    }
}