import React from 'react';
import Header from '../../Header/Header'
import './MessageListPage.css'

export default class MessageListPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="searchinput-container">
                    <input className="search-message" type="text" title="search_message" placeholder="search messages"></input>
                </div>
                <div className="messagelist-container">
                    <div className="message"></div>
                    <button className="newmessage-button">New message</button>

                </div>

            </div>
        )
    }
}