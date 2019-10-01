import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

export default class Header extends React.Component{
    renderHeaderLoggedIn(){
        return(
            <div className="header-container">
                <div className="log-search-container">
                    <div>img-logo</div>
                    <input type="text" className="header-input"></input>
                    <button className="header-search-button">Search</button>
                </div>
                <div className="nav-container">
                    <Link className="header-links">Home</Link>
                    <Link className="header-links">Friends</Link>
                    <Link className="header-links">Messages</Link>
                    <Link className="header-links">Notifications</Link>
                    <Link className="header-links">Link to user page</Link>
                </div>
            </div>
        )
    }
    renderHeaderLoggedOut(){
        return(
            <div className="header-container">
                <div id="outer-container">
                    <Menu 
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                    >
                        <main id="page-wrap">
                            <a id="home" className="menu-item" href="/">Home</a>
                            <a id="friends" className="menu-item" href="/friends">Friends</a>
                            <a id="messages" className="menu-item" href="/messages">Messages</a>
                            <a id="notifications" className="menu-item" href="/notifications">Notifications</a>
                            <a id="profile" className="menu-item" href="/profile">Profile</a>
                            <a onClick={ this.handleLogoutButton } className="menu-item" href="/">Logout</a>
                        </main>
                    </Menu>
                </div>
                <div className="log-search-container">
                        <div>img-logo</div>
                        <input type="text" className="header-input"></input>
                        <button className="header-search-button">Search</button>
                    </div>
                    <div className="nav-container">
                        <Link className="header-links">Join</Link>
                        <Link className="header-links">Sign in</Link>
                        <Link 
                        to="/"
                        className="header-links">Home</Link>
                        <Link className="header-links"
                        to="friends"
                        >Friends</Link>
                        <Link 
                        to="messages"
                        className="header-links">Messages</Link>
                        <Link 
                        to="notifications"
                        className="header-links">Notifications</Link>
                        <Link className="header-links">User</Link>
                    </div>
                   
            </div>
        )
    }
    render(){
        return(
            <div>
                {this.renderHeaderLoggedOut()}
            </div>
        )
    }
}