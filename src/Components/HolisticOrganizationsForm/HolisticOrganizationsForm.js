import React from 'react'
import './HolisticOrganizationsForm.css'
import UserService from '../../services/users-api-service';
import TokenService from '../../services/token-service';
import JwtService from '../../services/jwt-service';
import EcoAcmeContext from '../../contexts/EcoAcmeContext'


export default class HolisticOrganizationForm extends React.Component{
    static contextType = EcoAcmeContext
    handleOrganizationForm = (e)=>{ 
            e.preventDefault()
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            
            const organizationText = e.target.organizationText.value
            UserService.editOrganization(user_id,organizationText)
            .then(this.context.replaceUserList)
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