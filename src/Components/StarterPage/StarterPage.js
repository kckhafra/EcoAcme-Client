import React from 'react'
import Header from '../Header/Header'
import './StarterPage.css'

export default class StarterPage extends React.Component{

    handleLoginSuccess = ()=>{
        this.props.history.push('/home')
    }
 
    renderHomeApp(){
     return(
         <div className="start-container">
             <div className="start-info">
                 <h2>Welcome to your holistic lifestyle.</h2>
                 <p>Follow other peoples workout regiments</p>
                 <p>Share holistic remedies</p>
                 <p>share health blogs</p>
             </div>
             <div className="signup">
                 <h2>Sign Up</h2>
                 <div className="userinfo-container">
                     <form>
                        <input type="text" placeholder="First name"/>
                        <input type="text" placeholder="Last name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Profession"/>
                        <input type="text" placeholder="User Name"/>
                        <input type="text" placeholder="New Password"/>
                        <button type="submit">Sign Up</button>
                     </form>
                 </div>
             </div>
         </div>
     )
 }
    render(){
        return(
            <div>
                <Header
        onLoginSuccess={this.handleLoginSuccess}
                />
                {this.renderHomeApp()}
            </div>
        )
    }
}