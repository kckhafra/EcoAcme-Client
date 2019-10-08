import React from 'react';
import Header from '../../Header/Header'
import './MessageListPage.css'
import MessageService from '../../../services/messages-api-service'
import {Link} from 'react-router-dom'
import MessagePage from '../MessagePage/MessagePage'
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';
import TokenService from '../../../services/token-service'
import JwtService from '../../../services/jwt-api-service'
import UserMessageInfo from '../UserMessageInfo/UserMessageInfo'


const uuid = require('uuid')

export default class MessageListPage extends React.Component{
    static contextType = EcoAcmeContext
    state = {
        allUserMessages: [""],
        messagesList: [""],
        newMessageForm: "hidden-messages",
        displayMessages: "display-messages"

    }
    componentDidMount(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        
        
            MessageService.getAllUserMessages(user_id)
            .then(mess=>{
                console.log(mess)
                this.setState({allUserMessages: mess})
                return mess
            })
            .then(messages=>{
                console.log(messages[0])
                return(
                    user_id===messages[0].sender_id
                    ? messages[0].receiver_id
                    : messages[0].sender_id
                    )
            })
            .then(id=>{
                console.log(id)
            MessageService.getMessagesConvo(user_id,id)
            .then(messages=>{
                console.log(messages)
                this.setState({messagesList: messages})
                })  
            })
               
        }

        
        
        handleUserConvo=(e)=>{
            e.preventDefault()
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            
            const messageReceiverId = e.target.message_user.value
            console.log(messageReceiverId)
            MessageService.getMessagesConvo(user_id,messageReceiverId)
            .then(messages=>{
                this.setState({messagesList: messages})
            })
        }
        handleNewMessageForm = (e)=>{
            e.preventDefault()
            this.setState({
                newMessageForm: "display-messages",
                displayedMessages: "hidden-messages"
            })
        }
        handleCloseMessageForm = (e)=>{
            e.preventDefault()
            this.setState({
                newMessageForm: "hidden-messages",
                displayedMessages: "display-messages"
            })
        }

        handleSubmitMessage = (e)=>{
            e.preventDefault()
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            const messages = e.target.message.value
            const date_created = "2019-10-06 11:58:19"
            const receiver_userName = e.target.receiver_username.value
            const filter_receiver = this.context.userList.filter(user=>{
                return (
                user.user_name ===receiver_userName
                ? user
                : null
                )

            })
            const receiver_id = filter_receiver[0].id
            this.handleCloseMessageForm(e)
            MessageService.postMessages(user_id,receiver_id,messages,date_created)
            window.location.reload()
        }

        
        render(){
        const allMessagesId = this.state.allUserMessages.map(messages=>{
            return messages.sender_id || messages.receiver_id
        })
        console.log(allMessagesId)
        const uniqueMessageUserId = [...new Set(allMessagesId)]
        console.log(uniqueMessageUserId)
        
        return(
            <div>
                <Header/>
                <div className="searchmessage-container">
                    <input className="search-message" type="text" title="search_message" placeholder="search messages"></input>
                </div>

                <button onClick={this.handleNewMessageForm}
                to="new_message"
                className="newmessage-button">New message</button>

                
                <div className="messagelist-container">
                    
                    <div>
    
                        <UserMessageInfo
                        allUserMessages = {this.state.allUserMessages}
                        handleUserConvo={this.handleUserConvo}
                        />

                    </div>
                        <div  className={`${this.state.newMessageForm} message-form`} >
                            <button onClick={this.handleCloseMessageForm}>Close</button>
                            <form onSubmit={this.handleSubmitMessage}>
                                <input name="receiver_username" type="text" placeholder="user name"></input>
                                <textarea placeholder="Send a messsage" name="message"></textarea>
                                <input type="submit"></input>
                            </form>
                    </div>
                    <div className= {this.state.displayedMessages}>
                    
                        {this.state.messagesList.map(message=>{
                        
                            return <MessagePage
                                key={uuid}
                                message={message}
                            />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}