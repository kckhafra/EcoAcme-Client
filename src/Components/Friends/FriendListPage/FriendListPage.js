import React from 'react';
import Header from '../../Header/Header'
import './FriendListPage.css'
import TokenService from '../../../services/token-service'
import JwtService from '../../../services/jwt-service'
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
        // const friendsReceiver=this.context
        // const friendRequest =
        FriendsService.getFriendsRequest(user_id)
        .then(this.context.setFriendRequest)
        
    }
    
    
    render(){
        
        const friends = this.context.friendReceiverList.concat(this.context.friendRequestList)
        const friendsList = [...new Map(friends.map(item => [item['user_name'], item])).values()]
      
        
        return(
            <div>
                <Header/>
                {/* <div className="searchfriend-container">
                    <input className="search-friends" type="text" title="search_friends" placeholder="Search Friends"></input>
                </div> */}
                
                <div className="friendlist-container">
                    <div className="friend-contain">
                        <p>People you know</p>
                            {friendsList.map(friend=>{
                                return <FriendPage
                                    key={uuid}
                                    friends={friend}
                                    handleNewMessage={this.handleNewMessage}
                                    history={this.props.history}
                                />
                            })
                            }
                    </div>
                </div>
            </div>
        )
    }
}