import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import LoginForm from '../Login/LoginForm/LoginForm';


export default class Header extends React.Component{

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
                            <a id="friends" className="menu-item" href="/users">Network</a>
                            <a id="messages" className="menu-item" href="/messages">Messages</a>
                            {/* <a id="notifications" className="menu-item" href="/notifications">Notifications</a> */}
                            <a id="myprofile" className="menu-item" href="/myprofile">My Profile</a>
                            <a id="logout" onClick={ this.handleLogoutButton } className="menu-item" href="/">Logout</a>
                        </main>
                    </Menu>
                </div>
                <div className="logoimg-container">
                    <img  className="logo-img" src="https://gm1.ggpht.com/zJfYUp5xzxd5-_zLO4_NyrvYeqCmbXrCUaK0CFC7I77eZLCpgViMxSB_sVwn7ZVxu83RxndAghHPx42XzE1RsakMcxtj-Et0zbuikKqskp0qLmjnVAcr3lcLmxcAeZmGOrfHIWNb4oOXnbzXH3QANE_2b4-wzgbYcSU_4uoTwrgeYeoJr4sP55w_zHzbYikSHmyhPEFFvT0tCz67tPySFWy5RKAIm0YUkx903UmrUcthFEAtStVHNTTJ4xhli0Sp0r12dzvPnu8wMTKtmTPB5uCqXDPgY4r78cjpypYUCaTa2NzRsPLqiN85p6XRzdivCnBSLh7aFr2zR_hF3sX1tfZPB6veMcPBYcakgBRSgjVXQg55qV0GlcUihVWOK8yS3QEc6oDOAhJpAt5zPtM6Ib-fWK8d37g6QsF5GAhXDM8DHLyCeUu51weSisCZcK7qNCzXLo-MthD_faFxT_rqldooF7dLLsQzekj6afBr--vd13fpdzAeX8M-PCCtZOx-oORNaAxs1OQz3Nk_ZDpWZpRbPeap5HUsPp2qJDWt9W-DBBegn57Z4rT0qjIOKNmsWM7KLTJ63JSGH2_RVL9BqCTWkDOO3bZQyMVdGWKaSxT55kBd_GkcwNt0zTWbPgeAtwB3uhi7xwT9tcn-U49DDyEXp6tMKY7OBelhK5hWltbyhKfotnCYMgoCOXrvWJMpxA6hPovZnIWUmGCjUuwX8lJ5FbF9E75mvuo2VfsjLIVyeXhVtOv023PPFftm=s0-l75-ft-l75-ft"/>
                </div>
                <div className="log-search-container">
                    
                    <input type="text" className="header-search"></input>
                    <button className="header-search-button">Search</button>
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
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                    >
                        <main id="page-wrap">
                            <a id="home-start" className="menu-item" href="/">Home</a>
                            <a id="signup" className="menu-item" href="/">Sign Up</a>
                            <a id="login" className="menu-item" href="/">Login</a>
                        </main>
                    </Menu>
                </div>
                <div>img-logo</div>
                <div>
                    <LoginForm
                    handleSubmitJwtAuth={this.handleSubmitJwtAuth}
                    />
                </div>
            </div>
        )
    }
    render(){
        return(
            <div>
                {TokenService.hasAuthToken()
                 ? this.renderHeaderLoggedIn()
                 : this.renderHeaderLoggedOut()}
            </div>
        )
    }
}