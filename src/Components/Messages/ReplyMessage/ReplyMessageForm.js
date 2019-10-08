import React from 'react'

export default class NewMessageForm extends React.Component{
    render(){
        return(
            <div  className="message-form" >
                
                <form onSubmit={this.props.handleReplyMessage}>
                    <textarea placeholder="Reply to Message" name="reply_message"></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
    

}
   

