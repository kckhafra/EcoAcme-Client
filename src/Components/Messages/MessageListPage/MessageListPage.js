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
import UserService from '../../../services/users-api-service';


const uuid = require('uuid')

export default class MessageListPage extends React.Component{
    static contextType = EcoAcmeContext
    state = {
        allUserMessages: [],
        messagesList: [],
        newMessageForm: "hidden-messages",
        displayMessages: "display-messages",
        idForClickedUser: "",
        idForLatestUser: "",
        userProfession: "",
        userName: ""
        

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
            this.setState({
                idForClickedUser:messageReceiverId,
                userName: e.target.user_name.value,
                userProfession: e.target.profession.value,

            })
            MessageService.getMessagesConvo(user_id,messageReceiverId)
            .then(messages=>{
                this.setState({
                    messagesList: messages,
                })
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
            e.preventDefault()
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            const {idForClickedUser} = this.state
            const {idForLatestUser} = this.state
            const messages = e.target.reply_message.value
            
            
            idForClickedUser===""
            ? MessageService.postMessages(user_id,idForLatestUser,messages)
            .then(message=>{
                MessageService.getMessagesConvo(user_id,idForLatestUser)
                .then(mess=>{this.setState({
                    messagesList: mess,
                })    
                })   
            })
            : MessageService.postMessages(user_id,idForClickedUser,messages)
            .then(message=>{
                MessageService.getMessagesConvo(user_id,idForClickedUser)
                .then(mess=>{this.setState({
                    messagesList: mess,
                })    
                })   
            })
            

        }

        handleSubmitMessage = (e,message,receiver_userName)=>{
            e.preventDefault()
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            const receiver = this.context.userList.find(user => user.user_name === receiver_userName)
            const receiver_id = receiver.id
            this.handleCloseMessageForm(e)
            MessageService.postMessages(user_id,receiver_id,message)
            .then(message=>{
                MessageService.getMessagesById(message.id)
                .then(messages=>{
                    this.setState({
                        allUserMessages: [messages,...this.state.allUserMessages]
                    })
                    return messages
                })
            })
                .then(message=>{
                MessageService.getMessagesConvo(user_id,receiver_id)
                .then(mess=>{this.setState({
                    messagesList: mess,
                })    
                })   
            })
            
        }
       

        
        render(){
        const latestUser = this.context.userList.filter(u=>{
            return u.id===this.state.idForLatestUser})

        return(
    
            <div>
                <Header/>
                {/* <div className="searchmessage-container">
                    <input className="search-message" type="text" title="search_message" placeholder="search messages"></input>
                </div> */}
                <div className="messagelist-container">
                    
                    <div className="usermessageinfo-container">
                        <div className="messaging-container">
                            <div className="messaging">Messaging</div>
                            <div className="handle-newmessage" onClick={this.handleNewMessageForm}>
                                <img alt="message-icon" className="messaging-icon" src={ImagesForComponents.editIcon}/>
                            </div>
                        </div>
                        <UserMessageInfo
                        allUserMessages = {this.state.allUserMessages}
                        handleUserConvo={this.handleUserConvo} 
                        onChangeProf = {this.onChangeProf}   
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
                            <div className="messagepage-username">{
                                this.state.userName!==""
                                ?this.state.userName
                                : (latestUser.map(l=>{
                                    return l.user_name
                                }))
                                }</div>
                            <div className="messagepage-profession">{this.state.profession}</div>
                        </div>
                    </div>
                    <div className="messageconvo-container">
                        
                        {   this.state.allUserMessages.length <=0
                            ? <p>You have no messages. Start a conversation by clicking the messaging icon on the top left of this box. When the message box pops up enter the user name of the person you would like to message.</p>
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