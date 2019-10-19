import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import LoginForm from '../Login/LoginForm/LoginForm';


export default class Header extends React.Component{
    state={
        error: ""
    }

    handleLogoutButton = ()=>{
        TokenService.clearAuthToken()
        
    }

    handleSubmitJwtAuth = (ev)=>{
        ev.preventDefault()
        
        const {user_name, password} = ev.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(res => {
        
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                error: error.error
            })
        })
    }

    renderHeaderLoggedIn(){
        
        return(
            <div className="header-container">
                  <div id="outer-container">
                    <Menu 
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                    >
                        <main id="page-wrap">
                            <a id="home" className="menu-item" href="/home">Home</a>
                            <a id="users" className="menu-item" href="/users">Network</a>
                            <a id="messages" className="menu-item" href="/messages">Messages</a>
                            {/* <a id="notifications" className="menu-item" href="/notifications">Notifications</a> */}
                            <a id="myprofile" className="menu-item" href="/myprofile">My Profile</a>
                            
                            <a id="logout"  className="menu-item" href="/">Logout</a>
                            
                        </main>
                    </Menu>
                </div>
                <div className="title-container">
                    <h1 className="ecoacme-title">EcoAcme</h1>
                </div>
                
                <div className="nav-container">
                    <Link 
                    to="/home"
                    className="header-links">Home</Link>
                    <Link 
                    to="/users"
                    className="header-links">Network</Link>
                    <Link 
                    to="/messages"
                    className="header-links">Messages</Link>
                    {/* <Link 
                    to="/notifications"
                    className="header-links">Notifications</Link> */}
                    <Link 
                    to="/myprofile"
                    className="header-links">My Profile</Link>
                    <Link 
                    id="/logout" 
                    onClick={ this.handleLogoutButton } 
                    className="header-links" 
                    to="/">Logout</Link>
                </div>
            </div>
        )
    }
    renderHeaderLoggedOut(){
        return(
            <div className="header-container">
                

                <div id="outer-container">
                    <Menu 
                    
                    outerContainerId={ "outer-container" }
                    >
                        <main id="page-wrap">
                            <a id="home-start" className="menu-item" href="/">Home</a>
                            
                            <a id="login" className="menu-item" href="/login">Login</a>
                            
                        </main>
                    </Menu>
                </div>
                <div className="title-container">
                    <h1 className="ecoacme-title">EcoAcme</h1>
                </div>
                <div className="blank-space"></div>
                <div className="header-login-component">
                    <LoginForm
                    handleSubmitJwtAuth={this.handleSubmitJwtAuth}
                    />
                </div>
            </div>
        )
    }
    render(){
        console.log(this.state.error)
        return(
            <div>
                
                {TokenService.hasAuthToken()
                 ? this.renderHeaderLoggedIn()
                 : this.renderHeaderLoggedOut()}
                 {this.state.error&&<div className="error">{this.state.error}</div>}
            </div>
        )
    }
}