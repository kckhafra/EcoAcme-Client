import React from 'react';
import Header from '../Header/Header';
import './Home.css'

export default class Home extends React.Component{
    renderLoggedIn(){
        return(
            <div>
                <div className="searchinput-container">
                    <textarea className="home-writecomment" type="text" title="write_post" placeholder="Write Post"></textarea>
                </div>
            </div>
        )
    }
    renderLoggedOut(){
        return(
            <div className="home-container">
                <div className="home-info">
                    <h2>Welcome to your holistic lifestyle.</h2>
                    <p>Follow other peoples workout regiments</p>
                    <p>Share holistic remedies</p>
                    <p>share health blogs</p>
                </div>
                <div className="signup">
                    <h2>Sign Up</h2>
                    <div className="name-container">
                        <input type="text" placeholder="First name"/>
                        <input type="text" placeholder="Last name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Profession"/>
                        <input type="text" placeholder="User Name"/>
                        <input type="text" placeholder="New Password"/>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return(
            <div>
                <Header/>
                {this.renderLoggedOut()}
            </div>
        )
    }
}