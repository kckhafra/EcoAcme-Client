import React from 'react'
import Header from '../Header/Header'
import './StarterPage.css'

export default class StarterPage extends React.Component{

    handleLoginSuccess = ()=>{
        this.props.history.push('/home')
    }
    handleSignUp = (e)=>{
        const {first_name,last_name,email,profession,user_name,new_password} = e.target
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
                     <form onSubmit={this.handleSignUp} >
                        <input type="text" name="first_name" placeholder="First name"/>
                        <input type="text" name="last_name" placeholder="Last name"/>
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="text" name="profession" placeholder="Profession"/>
                        <input type="text" name="profession_years" placeholder="Years of experience"/>
                        <input type="text" name="user_name" placeholder="User Name"/>
                        <input type="text" name="new_password" placeholder="New Password"/>
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