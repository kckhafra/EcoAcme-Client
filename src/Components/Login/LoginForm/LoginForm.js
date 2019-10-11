import React from 'react';

export default class LoginForm extends React.Component{
    render(){
        return (
            <div>
                <form
                        onSubmit={this.props.handleSubmitJwtAuth}>
                        <div className="log-search-container">
                            
                                <div className="username-container">
                                    <label className="label-username">User Name</label>
                                    <input 
                                        name="user_name"
                                        id="home-user_name"
                                        type="text" 
                                        className="header-username"></input>
                                </div>
                                <div className="password-container">
                                    <label className="label-password">Password</label>
                                    <input
                                    name="password" 
                                    id="home-password"
                                    type="text" 
                                    className="header-password"></input>
                                    <button className="header-login-button">Log in</button>
                                </div>  
                        </div>
                    </form>
            </div>
        )
    }
}