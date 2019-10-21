import React from 'react';
import './UserBadge.css'
import {Link} from 'react-router-dom'

export default class UserBadge extends React.Component{
    render(){
        return(
            <div className="eachprofile-item">
                <Link className="userbadge-link" to={`/users/${this.props.profile.id}`}>
                <img alt="loggen in user" className="profile-img" src={this.props.profile.images}/>
                </Link>
                <div>{this.props.profile.first_name}{" "}<span>{this.props.profile.last_name}</span></div>
                <div>{this.props.profile.email}</div>
                <div>{this.props.profile.profession}</div>
                <div>{`${this.props.profile.profession_years} years of experience`}</div>
                <div>{this.props.profile.college}</div>
                <div>{this.props.profile.degree}</div>
                  
                  
            </div>
        )
    }
}