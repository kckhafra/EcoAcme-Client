import React from 'react'
import './HolisticOrganizationsForm.css'
import UserService from '../../services/users-api-service';
import TokenService from '../../services/token-service';
import JwtService from '../../services/jwt-service';


export default class HolisticOrganizationForm extends React.Component{
    handleOrganizationForm = (e)=>{ 
            e.preventDefault()
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            
            const organizationText = e.target.organizationText.value
            console.log(organizationText)
            UserService.editOrganization(user_id,organizationText)
            this.props.closeOrganizationsForm(e)
        }
        render(){
        return(
            <div>
                <form onSubmit={this.handleOrganizationForm}>
                    <textarea name="organizationText" className="about-me-text" placeholder="Tell us about the organizations you are affiliated with."></textarea>
                    <button type="submit">Post</button>
                    <button onClick={this.props.closeOrganizationsForm}>Close</button>
                </form>
            </div>
        )
    }
}