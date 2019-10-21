import React from 'react';
import './FriendPage.css'
import FriendMessage from '../FriendMessage/FriendMessage'
import {Link} from 'react-router-dom'

export default class FriendPage extends React.Component{
    state={
        friendMessage: "hidden",
        friendpageInfo:"friendpage-info"
    }
    
    openNewMessage=(e)=>{
        e.preventDefault()
        this.setState({
            friendMessage: "display-friendmessage",
            friendpageInfo:"hidden"
        })
    }
    closeNewMessage=(e)=>{
        e.preventDefault()
        this.setState({
            friendMessage: "hidden",
            friendpageInfo:"friendpage-info"
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
                <div className={this.state.friendpageInfo}>
                    <div className="friendpage-friendcontainer">
                        <Link className="friends-link" to={`users/${this.props.friends.id}`}>
                        <img alt="loggen in user" className="friendpage-img"src={this.props.friends.images}/>
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
                        </Link>
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