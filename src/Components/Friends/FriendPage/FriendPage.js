import React from 'react';
import './FriendPage.css'
import FriendMessage from '../FriendMessage/FriendMessage'
import MessagesService from '../../../services/messages-api-service';

export default class FriendPage extends React.Component{
    state={
        friendMessage: "hidden"
    }
    
    openNewMessage=(e)=>{
        e.preventDefault()
        this.setState({
            friendMessage: "display-friendmessage"
        })
    }
    closeNewMessage=(e)=>{
        e.preventDefault()
        this.setState({
            friendMessage: "hidden"
        })
    }
    render(){
        
        return(
            <div className="friendpage-container">
                <div className={this.state.friendMessage}>
                    <FriendMessage
                    closeNewMessage={this.closeNewMessage}
                    friends={this.props.friends}
                    history={this.props.history}
                    />
                </div>
                <div className="friendpage-info">
                    <div className="friendpage-friendcontainer">
                        <img className="friendpage-img"src={this.props.friends.images}/>
                        <div className="friendname-profession-college">
                            <div className="friendpage-name">
                                    {this.props.friends.first_name} <span>{this.props.friends.last_name}</span>
                            </div>
                            <div>
                                {this.props.friends.profession}
                            </div>
                            <div>
                                {this.props.friends.college}
                            </div>
                            <div>
                                {`User Name: ${this.props.friends.user_name}`}
                            </div>
                        </div>
                    </div>
                    <div onClick={this.openNewMessage} className="friendpage-message">
                    Message
                    </div> 
                </div>  
               
                <div className="gray-bar"></div>
                
            </div>
        )
    }
}