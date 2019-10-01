import React from 'react';
import Header from '../Header/Header';
import './Home.css'

export default class Home extends React.Component{
    renderLoggedIn(){
        return(
            <div></div>
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