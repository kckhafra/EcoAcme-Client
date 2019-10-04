import React from 'react';

export default class MessagePage extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.message.user_name}</p>
                <p>{this.props.message.messages}</p>
                
            </div>
        )
    }
}