import React from 'react';
import Header from '../../Header/Header'
import './FriendListPage.css'
import TokenService from '../../../services/token-service'
import JwtService from '../../../services/jwt-api-service'
import FriendsService from '../../../services/friends-api-service'
import EcoAcmeContext from '../../../contexts/EcoAcmeContext'
import FriendPage from '../FriendPage/FriendPage'
const uuid = require('uuid')

export default class FriendListPage extends React.Component{
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
        const friendsList = this.context.friendReceiverList.concat(this.context.friendRequestList)
        console.log(friendsList)
      
        
        return(
            <div>
                <Header/>
                <div className="searchinput-container">
                    <input className="search-friends" type="text" title="search_friends" placeholder="Search Friends"></input>
                </div>
                <p>People you know</p>
                <div className="friendlist-container">
                    {friendsList.map(friend=>{
                        return <FriendPage
                            key={uuid}
                            friends={friend}
                        />
                    })
                    }
                </div>
            </div>
        )
    }
}