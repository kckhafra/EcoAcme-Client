import React from 'react';
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';
import TokenService from '../../../services/token-service';
import JwtService from '../../../services/jwt-service';
import './UserMessageInfo.css'

export default class UserMessageInfo extends React.Component{
    static contextType = EcoAcmeContext
    render(){
        
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        const allMessagesId = this.props.allUserMessages.map(messages=>{
            return messages.sender_id || messages.receiver_id
        })
        console.log(allMessagesId)
        const {allUserMessages} = this.props
        const uniqueMessage = [...new Map(allUserMessages.map(item => [item['user_name'], item])).values()]
        console.log(uniqueMessage)
        return(
            <div className="usermessage-container">

                {uniqueMessage.map(user=>{
                    return (
                            
                        user.id==user_id
                        ? !user
                        : <div>
                            <form onSubmit={this.props.handleUserConvo}>
                            <input  value={user.id} 
                            name="message_user" className="hidden"></input>
                            <button className="usermessage-submitbutton" type="submit">
                            <img className="user-message-img" src={user.images}/>
                                {user.user_name}
                                
                                
                            </button>
                            </form>
                            
                        </div>
                        )
            })}
            </div>
           
        )
        
        }
}
 

