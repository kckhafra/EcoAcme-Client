import React from 'react';
import './Profile.css'
import Header from '../Header/Header'
import EcoAcmeContext from '../../contexts/EcoAcmeContext';
import TokenService from '../../services/token-service';
import JwtService from '../../services/jwt-api-service';

export default class Profile extends React.Component{
    static contextType = EcoAcmeContext
    render(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        
         const profileUser = this.context.userList.filter(user=>{
           return user.id == user_id
         })
        
        return(
            <div>
                <Header/>
                {profileUser.map(profile=>{
                    return (
                    <div>
                        <p>{profile.first_name}</p>
                        <p>{profile.last_name}</p>
                        <img src={profile.images}/>
                        <p>{profile.email}</p>
                        <p>{profile.profession}</p>
                        <p>{profile.profession_years}</p>
                        <p>{profile.college}</p>
                        <p>{profile.degree}</p>
                        <p>{profile.about_me}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
}