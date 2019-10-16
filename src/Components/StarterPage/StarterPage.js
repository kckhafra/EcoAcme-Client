import React from 'react'
import Header from '../Header/Header'
import './StarterPage.css'
import UserService from '../../services/users-api-service';

export default class StarterPage extends React.Component{

    handleLoginSuccess = ()=>{
        this.props.history.push('/home')
        window.location.reload()
    }
    handleSignUp = (e)=>{
        e.preventDefault()
        UserService.postUsers({
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                email: e.target.email.value,
                profession: e.target.profession.value,
                profession_years: e.target.profession_years.value,
                user_name: e.target.user_name.value,
                password: e.target.password.value,
                images: e.target.images.value,
                college: e.target.college.value,
                degree: e.target.degree.value
            })
            
            
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
                 <div className="signup-container">
                     <form onSubmit={this.handleSignUp} >
                        <input type="text" name="first_name" placeholder="First name"></input>
                        <input type="text" name="last_name" placeholder="Last name"/>
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="text" name="profession" placeholder="Profession"/>
                        <input type="text" name="profession_years" placeholder="Years of experience"/>
                        <input type="text" name="user_name" placeholder="User Name"/>
                        <input type="text" name="password" placeholder="New Password"/>
                        <input type="text" name="images" placeholder="Image url"/>
                        <input type="text" name="college" placeholder="College"/>
                        <input type="text" name="degree" placeholder="Degree"/>
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