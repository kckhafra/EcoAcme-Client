import React from 'react'
import TokenService from '../../../services/token-service';
import JwtService from '../../../services/jwt-service';
import MessagesService from '../../../services/messages-api-service';
import './FriendMessage.css'

export default class FriendMessage extends React.Component{
    
    handleNewMessage=(e)=>{
        e.preventDefault()
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        MessagesService.postMessages(user_id,this.props.friends.id,e.target.messages.value)
        this.props.history.push('/messages')
         window.location.reload()
    }
    render(){
        return(
            <div>
                
                <form className="message-form"onSubmit={this.handleNewMessage}>
                    <textarea name="messages" className="message-text" placeholder="Send a message"></textarea>
                    <div className="button-container">
                        <button  type="Submit">Send</button>
                        <button onClick={this.props.closeNewMessage}>Close</button>
                    </div>
                </form>
            </div>
        )
    }
}