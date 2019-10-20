import React from 'react'
import './AboutMeForm.css'
import UserService from '../../services/users-api-service';
import TokenService from '../../services/token-service';
import JwtService from '../../services/jwt-service';

export default class AboutMeForm extends React.Component{
    handleAboutForm = (e)=>{ 
            e.preventDefault()
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            
            const aboutText = e.target.aboutText.value
            UserService.editAboutMe(user_id,aboutText)
            this.props.closeAboutForm(e)
        }
        render(){
        return(
            <div>
                <form onSubmit={this.handleAboutForm}>
                    <textarea name="aboutText" className="about-me-text" placeholder="Tell us about yourself and how you contribute to the holistic lifestyle."></textarea>
                    <button type="submit">Post</button>
                    <button onClick={this.props.closeAboutForm}>Close</button>
                </form>
            </div>
        )
    }
}