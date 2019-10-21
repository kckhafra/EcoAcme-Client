import React from 'react';
import './MyProfile.css'
import Header from '../../Header/Header'
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';
import TokenService from '../../../services/token-service';
import JwtService from '../../../services/jwt-service';
import ImagesForComponents from '../../ImagesForComponents/ImagesForComponents';
import AboutMeForm from '../../AboutMeForm/AboutMeForm'
import HolisticServicesForm from '../../HolisticServicesForm/HolisticServicesForm'
import HolisticOrganizationForm from '../../HolisticOrganizationsForm/HolisticOrganizationsForm'
const uuid = require('uuid')

export default class MyProfile extends React.Component{
    state={
        aboutMeIcon: "aboutMeIcon",
        aboutMeForm: "hidden",
        servicesIcon: "aboutMeIcon",
        servicesForm: "hidden",
        organizationsIcon: "aboutMeIcon",
        organizationsForm: "hidden"
    }

    displayAboutForm = (e)=>{
        e.preventDefault()
        this.setState({
            aboutMeForm: "aboutMeForm",
            aboutMeIcon: "hidden"
        })
    }
    closeAboutForm = (e)=>{
        e.preventDefault()
        this.setState({
            aboutMeForm: "hidden",
            aboutMeIcon: "aboutMeIcon"
        })
    }
    displayServicesForm = (e)=>{
        e.preventDefault()
        this.setState({
            servicesForm: "aboutMeForm",
            servicesIcon: "hidden"
        })
    }
    closeServicesForm = (e)=>{
        e.preventDefault()
        this.setState({
            servicesForm: "hidden",
            servicesIcon: "aboutMeIcon"
        })
    }
    displayOrganizationsForm = (e)=>{
        e.preventDefault()
        this.setState({
            organizationsForm: "aboutMeForm",
            organizationsIcon: "hidden"
        })
    }
    closeOrganizationsForm = (e)=>{
        e.preventDefault()
        this.setState({
            organizationsForm: "hidden",
            organizationsIcon: "aboutMeIcon"
        })
    }

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
                            
                            <img alt="loggen in user" className="myprofile-img" src={profile.images}/>
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
                                <div className={this.state.aboutMeForm}>
                                    <AboutMeForm
                                    closeAboutForm={this.closeAboutForm}/>
                                </div>
                                <div className={this.state.aboutMeIcon}>
                                    <div>
                                        <h2 className="myprofile-title">About Me</h2>
                                        <p>{profile.about_me}</p>
                                    </div>
                                    <div onClick={this.displayAboutForm}>
                                        {<img alt="icon for edit text" className="myprofile-editicon"src={ImagesForComponents.editIcon}/>}
                                    </div>
                                </div>
                            </div>
                        <div className="profile-services">
                            <div className={this.state.servicesForm}>
                                    <HolisticServicesForm
                                    closeServicesForm={this.closeServicesForm}/>
                                </div>
                                <div className={this.state.servicesIcon}>
                                    <div>
                                        <h2 className="myprofile-title">Holistic Health Services Provided</h2>
                                        <p>{profile.holistic_services}</p>
                                    </div>
                                    <div onClick={this.displayServicesForm}>
                                        {<img alt="icon for edit text" className="myprofile-editicon"src={ImagesForComponents.editIcon}/>}
                                    </div>
                                </div>
                            
                        </div>
                        <div className="profile-organizations">
                        <div className={this.state.organizationsForm}>
                                    <HolisticOrganizationForm
                                    closeOrganizationsForm={this.closeOrganizationsForm}/>
                                </div>
                                <div className={this.state.organizationsIcon}>
                                    <div>
                                        <h2 className="myprofile-title">Holistic Health Organizations Affiliations</h2>
                                        <p>{profile.holistic_organizations}</p>
                                    </div>
                                    <div onClick={this.displayOrganizationsForm}>
                                        {<img alt="icon for edit text" className="myprofile-editicon"src={ImagesForComponents.editIcon}/>}
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                    )
                })}
                    
            </div>
        )
    }
}