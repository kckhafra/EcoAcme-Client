import React from 'react';
import './MessagePage.css'
import TokenService from '../../../services/token-service';
import JwtService from '../../../services/jwt-service';

export default class MessagePage extends React.Component{
    render(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        
        return this.props.message.sender_id === user_id
        ?<div className="messagepage-container-purple">
            <div className="mcp">
                <div>{this.props.message.user_name}</div>
                <p>{this.props.message.messages}</p>
            </div>
        </div>
        
        : <div className="messagepage-container-gray">
            <div className="mcg">
                <div>{this.props.message.user_name}</div>
                <p>{this.props.message.messages}</p>
            </div>
        
    </div>
    }
}