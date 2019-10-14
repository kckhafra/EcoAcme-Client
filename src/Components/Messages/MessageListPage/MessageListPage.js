import React from 'react';
import Header from '../../Header/Header'
import './MessageListPage.css'
import MessageService from '../../../services/messages-api-service'

import MessagePage from '../MessagePage/MessagePage'
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';
import TokenService from '../../../services/token-service'
import JwtService from '../../../services/jwt-service'
import UserMessageInfo from '../UserMessageInfo/UserMessageInfo'
import NewMessageForm from '../NewMessageForm/NewMessageForm'
import ReplyMessage from '../ReplyMessage/ReplyMessageForm'
import ImagesForComponents from '../../ImagesForComponents/ImagesForComponents'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom"; 


const uuid = require('uuid')

export default class MessageListPage extends React.Component{
    static contextType = EcoAcmeContext
    state = {
        allUserMessages: [""],
        messagesList: [""],
        newMessageForm: "hidden-messages",
        displayMessages: "display-messages",
        idForClickedUser: "",
        idForLatestUser: ""

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
                return( 
                messages.length<=0
                ? null
                : (
                    user_id===messages[0].sender_id
                    ? messages[0].receiver_id
                    : messages[0].sender_id
                    )
            )})
            .then(id=>{
                this.setState({idForLatestUser:id})
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
            this.handleCloseMessageForm(e)
            this.setState({idForClickedUser:messageReceiverId})
            MessageService.getMessagesConvo(user_id,messageReceiverId)
            .then(messages=>{
                this.setState({messagesList: messages})
            })
        }
        handleNewMessageForm = (e)=>{
            e.preventDefault()
            this.setState({
                newMessageForm: "display-messages",
                displayMessages: "hidden"
            })
        }
        
        handleCloseMessageForm = (e)=>{
            e.preventDefault()
            this.setState({
                newMessageForm: "hidden-messages",
                displayMessages: "display-messages"
            })
        }
        handleReplyMessage = (e)=>{
            
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            const {idForClickedUser} = this.state
            const {idForLatestUser} = this.state
            const messages = e.target.reply_message.value
            console.log(idForClickedUser)
            console.log(idForLatestUser)
            idForClickedUser===""
            ? MessageService.postMessages(user_id,idForLatestUser,messages)
            : MessageService.postMessages(user_id,idForClickedUser,messages)
            

        }

        handleSubmitMessage = (e,message,receiver_userName)=>{
            e.preventDefault()
            console.log(message)
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            
            // const receiver_userName = e.target.receiver_username.value
            const filter_receiver = this.context.userList.filter(user=>{
                return (
                user.user_name ===receiver_userName
                ? user
                : null
                )

            })
            console.log(receiver_userName)
            const receiver_id = filter_receiver[0].id
            this.handleCloseMessageForm(e)
            MessageService.postMessages(user_id,receiver_id,message)
            window.location.reload()
        }

        
        render(){
        const latestUser = this.context.userList.filter(user=>{
            return user.id==this.state.idForLatestUser})
        const clickedUser = this.context.userList.filter(user=>{
            return user.id==this.state.idForClickedUser
        })
        const userForHeader = 
        clickedUser.length ==0
        ? latestUser
        : clickedUser
       
           
           
      
        const allMessagesId = this.state.allUserMessages.map(messages=>{
            return messages.sender_id || messages.receiver_id
        })
        
        const uniqueMessageUserId = [...new Set(allMessagesId)]
        
        
        return(
    
            <div>
                <Header/>
                <div className="searchmessage-container">
                    <input className="search-message" type="text" title="search_message" placeholder="search messages"></input>
                </div>
                <div className="messagelist-container">
                    
                    <div className="usermessageinfo-container">
                        <div className="messaging-container">
                            <div className="messaging">Messaging</div>
                            <div className="handle-newmessage" onClick={this.handleNewMessageForm}>
                                <img className="messaging-icon" src={ImagesForComponents.editIcon}/>
                            </div>
                            
                        </div>

                        <UserMessageInfo
                        allUserMessages = {this.state.allUserMessages}
                        handleUserConvo={this.handleUserConvo}
                        />

                    </div>
                    <div  className={this.state.newMessageForm} >
                        <NewMessageForm
                        handleNewMessageForm={this.handleNewMessageForm}
                        handleCloseMessageForm={this.handleCloseMessageForm}
                        handleSubmitMessage = {this.handleSubmitMessage}
                       
                        />
                    </div>
                    <div className= {this.state.displayMessages}>
                        <div className="messagepage-container">
                            <div className="messagepage-username-profession">
                            <div className="messagepage-username">{userForHeader.map(user=>user.user_name)}</div>
                            <div className="messagepage-profession">{userForHeader.map(user=>user.profession)}</div>
                        </div>
                    </div>
                    <div className="messageconvo-container">
                        {console.log(this.state.messagesList)}
                        {   this.state.messagesList.length <=0
                            ? <p>no messages</p>
                            : this.state.messagesList.map(message=>{
                            return <MessagePage
                                key={uuid}
                                message={message}
                                

                            />
                            
                        })}
                    </div>
                        <div className="replymessage-container">
                            {this.state.allUserMessages.length<=0
                            ? null
                            : <ReplyMessage
                            handleReplyMessage={this.handleReplyMessage}
                            />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}