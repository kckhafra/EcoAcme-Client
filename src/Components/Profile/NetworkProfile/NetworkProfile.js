import React from 'react';
import './NetworkProfile.css'
import Header from '../../Header/Header'
import UsersService from '../../../services/users-api-service'
const uuid = require('uuid')

export default class Profile extends React.Component{
    state = {
        userInfo: [""]
    }
    componentDidMount(){
        const {user_id} = this.props.match.params
        UsersService.getUserById(user_id)
        .then(userInfo=>this.setState({userInfo}))
    }
    render(){
        
        return(
            <div>
                <Header/>
                {this.state.userInfo.map(profile=>{
                    return (
                        <div key={uuid} className="profile-container">
                            <div className="graybar"></div>
                            <div className="profile-info-img">
                                <img alt="profile image"className="myprofile-img" src={profile.images}/>
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