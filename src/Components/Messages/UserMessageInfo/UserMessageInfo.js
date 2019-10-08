import React from 'react';
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';
import TokenService from '../../../services/token-service';
import JwtService from '../../../services/jwt-api-service';

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
            <div>

                {uniqueMessage.map(user=>{
                    return (
                            
                        user.id==user_id
                        ? !user
                        : <div>
                            <form onSubmit={this.props.handleUserConvo}>
                            <input  value={user.id} 
                            name="message_user" className="hidden"></input>
                            <button type="submit">
                                {user.user_name}
                                
                                <img src={user.images}/>
                            </button>
                            </form>
                            
                        </div>
                        )
            })}
            </div>
           
        )
        
        }
}
 

