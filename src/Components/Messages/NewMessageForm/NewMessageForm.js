import React from 'react'
import './NewMessageForm.css'

export default class NewMessageForm extends React.Component{
    render(){
        return(
            <div  className="message-form" >
                <form onSubmit={e=>this.props.handleSubmitMessage(e,e.target.message.value,e.target.receiver_username.value)}>
                    <input className="message-username" name="receiver_username" type="text" placeholder="user name"></input>
                    <textarea className="message-text" placeholder="Send a messsage" name="message"></textarea>
                    <button className="message-button" onClick={this.props.handleCloseMessageForm}>Close</button>
                    
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
    

}
   

