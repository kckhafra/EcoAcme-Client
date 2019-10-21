import React from 'react';
import './LoginPage.css'
import {Link} from 'react-router-dom'
import AuthApiService from '../../../services/auth-api-service';
import TokenService from '../../../services/token-service';

export default class LoginPage extends React.Component{
    state={
        error: "",
        
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
            this.props.history.push('/home')
            window.location.reload()
            
        })
        .catch(error=>{
            this.setState({
                error: error
            })
        })
        
    }

    
    render(){
        return(
            <section className="loginpage-login">
                <Link to="/" className="link-tag-remove"><div className="tag-remove"></div></Link>
                
                <form onSubmit={this.handleSubmitJwtAuth}
                className="loginpage-form">
                {this.state.error&&<div className="error">{this.state.error.error}</div>}
                    <input name="user_name" className="loginpage-username" type="text" placeholder="User Name"></input>
                    <input name="password" className="loginpage-password" type="text"placeholder="Password"></input>
                    <button className="loginpage-signin-button" type="submit">Sign in</button>
                </form>
                              
            </section>
        )
    }
}