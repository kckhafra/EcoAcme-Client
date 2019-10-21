import React from 'react';
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';
import TokenService from '../../../services/token-service';
import JwtService from '../../../services/jwt-service';
import './UserMessageInfo.css'
const uuid = require('uuid')

export default class UserMessageInfo extends React.Component{
    static contextType = EcoAcmeContext
    render(){
        
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        
        

        const {allUserMessages} = this.props
        const uniqueMessage = [...new Map(allUserMessages.map(item => [item['user_name'], item])).values()]
       const messageWithoutLoggedIn = uniqueMessage.filter(mess=>mess.id!==user_id)
       
       
        return(
            <div className="usermessage-container">

                {messageWithoutLoggedIn.map(user=>{
                   
                    return (   
                         <div key={uuid}>
                            <form onSubmit={this.props.handleUserConvo}>
                            <input  value={user.id} 
                            name="message_user" className="hidden"></input>
                            <input name="user_name" value={user.user_name} className="hidden"/>
                            <input name="profession" value ={user.profession} className="hidden"/>
                            <button className="usermessage-submitbutton" type="submit">
                            <img alt="loggen in user" className="user-message-img" src={user.images}/>
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
 

