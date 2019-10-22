import React from 'react'
import './HolisticServicesForm.css'
import UserService from '../../services/users-api-service';
import TokenService from '../../services/token-service';
import JwtService from '../../services/jwt-service';
import EcoAcmeContext from '../../contexts/EcoAcmeContext'

export default class HolisticServicesForm extends React.Component{
    static contextType = EcoAcmeContext
    handleServicesForm = (e)=>{ 
            e.preventDefault()
            const token = TokenService.getAuthToken()
            const payload = JwtService.verifyJwt(token)
            const user_id = payload.user_id
            
            const servicesText = e.target.servicesText.value
            UserService.editServices(user_id,servicesText)
            .then(this.context.replaceUserList)
            this.props.closeServicesForm(e)
        }
        render(){
        return(
            <div>
                <form onSubmit={this.handleServicesForm}>
                    <textarea name="servicesText" className="about-me-text" placeholder="Tell us about the holistic services you provide."></textarea>
                    <button type="submit">Post</button>
                    <button onClick={this.props.closeServicesForm}>Close</button>
                </form>
            </div>
        )
    }
}