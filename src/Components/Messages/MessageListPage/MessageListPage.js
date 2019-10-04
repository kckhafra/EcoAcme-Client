import React from 'react';
import Header from '../../Header/Header'
import './MessageListPage.css'
import MessageService from '../../../services/messages-api-service'
import {Link} from 'react-router-dom'
import MessagePage from '../MessagePage/MessagePage'
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';
const uuid = require('uuid')

export default class MessageListPage extends React.Component{
    static contextType = EcoAcmeContext
    state = {
        allUserMessages: [""],
        messagesList: [""]
    }
    componentDidMount(){
            MessageService.getAllUserMessages(1)
            .then(messages=>{
                console.log(messages.sort(function(a,b){
                    return messages.date_created - messages.date_created
                }
                    ))
                this.setState({allUserMessages: messages})
            })
            MessageService.getMessagesConvo(2,1)
            .then(messages=>{
                this.setState({messagesList: messages})
            })
        }
        handleSubmit=(e)=>{
            e.preventDefault()
            const messageUserId = e.target.message_user.value
            console.log(messageUserId)
            MessageService.getMessagesConvo(1,messageUserId)
            .then(messages=>{
                this.setState({messagesList: messages})
            })
        }
        render(){
        const receiver_id = this.state.allUserMessages.map(receiver=>receiver.receiver_id)
        const {sender_id} = this.state.allUserMessages.map(receiver=>receiver)
        console.log(this.context.userList)
        const filterUsers = this.context.userList.filter(user=>{
                        return user.id==sender_id||receiver_id
                    })
                    
        return(
            <div>
                <Header/>
                <div className="searchmessage-container">
                    <input className="search-message" type="text" title="search_message" placeholder="search messages"></input>
                </div>
                <Link 
                to="new_message"
                className="newmessage-button">New message</Link>
                <div className="messagelist-container">
                <div className="allUserMesssages">
                    {filterUsers.map(user=>{
                        return (
                        user.id==1
                        ? !user.first_name
                        : <div>
                            <form onSubmit={this.handleSubmit}>
                            <input value={user.id} 
                            name="message_user" className="hidden"></input>
                            <button type="submit">{user.first_name}</button>
                            </form>
                        </div>
                        )
                    })}

                    
                    {/* {this.context.userList.filter((user)=>{
                        return this.state.allUsersMessages.receiver_id.id===user.id||this.state.allUsersMessages.sender_id.id===user.id
                    })} */}
                    
                    
                </div>
                <div>
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