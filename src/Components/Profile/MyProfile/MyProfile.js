import React from 'react';
import './MyProfile.css'
import Header from '../../Header/Header'
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';
import TokenService from '../../../services/token-service';
import JwtService from '../../../services/jwt-service';
const uuid = require('uuid')

export default class MyProfile extends React.Component{
    static contextType = EcoAcmeContext
    render(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
         const profileUser = this.context.userList.filter(user=>{
           return user.id === user_id
         })

        return(
            <div>
                <Header/>
                {profileUser.map(profile=>{
                    
                    return (
                    <div key={uuid} className="profile-container">
                        <div className="graybar"></div>
                        <div className="profile-info-img">
                            
                            <img className="myprofile-img" src={profile.images}/>
                            <div className="profile-info">
                                <div className="profile-name-email">
                                    <p className="profile-page-name">{profile.first_name}{" "}<span>{profile.last_name}</span></p>
                                    
                                    <p>{profile.email}</p>
                                </div>
                                <div className="profile-profession-college">
                                    <p>{profile.profession}</p>
                                    <p>{`With ${profile.profession_years} years of experience`}</p>
                                    <p>{profile.college}</p>
                                    <p>{profile.degree}</p>
                                </div>
                                </div>
                        </div>
                            <div className="profile-aboutme">
                                <h2>About Me</h2>
                                <p>{profile.about_me}</p>
                            </div>
                        <div className="profile-services">
                            <h2>Holistic Health Services Provided</h2>
                        </div>
                        <div className="profile-organizations">
                            <h2>Holistic Health Organizations Affiliations</h2>
                        </div>
                    </div>
                    )
                })}
                    
            </div>
        )
    }
}