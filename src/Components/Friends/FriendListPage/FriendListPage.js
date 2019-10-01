import React from 'react';
import Header from '../../Header/Header'
import './FriendListPage.css'

export default class FriendListPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="searchinput-container">
                    <input className="search-friends" type="text" title="search_friends" placeholder="Search Friends"></input>
                </div>
                <p>People you know</p>
                <div className="friendlist-container">

                </div>
            </div>
        )
    }
}