import React from 'react'

export default class NewMessageForm extends React.Component{
    render(){
        return(
            <div  className="message-form" >
                <button onClick={this.props.handleCloseMessageForm}>Close</button>
                <form onSubmit={this.props.handleSubmitMessage}>
                    <input name="receiver_username" type="text" placeholder="user name"></input>
                    <textarea placeholder="Send a messsage" name="message"></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
    

}
   

