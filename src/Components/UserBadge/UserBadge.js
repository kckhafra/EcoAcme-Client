import React from 'react';
import './UserBadge.css'

export default class UserBadge extends React.Component{
    render(){
        return(
            <div className="eachprofile-item">
                
                <img className="profile-img" src={this.props.profile.images}/>
                <div>{this.props.profile.first_name}{" "}<span>{this.props.profile.last_name}</span></div>
                <div>{this.props.profile.email}</div>
                <div>{this.props.profile.profession}</div>
                <div>{this.props.profile.profession_years}</div>
                <div>{this.props.profile.college}</div>
                <div>{this.props.profile.degree}</div>
                  
                  
            </div>
        )
    }
}