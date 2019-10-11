import React from 'react';

export default class UserBadge extends React.Component{
    render(){
        return(
            <div className="eachprofile-item">
                
                        <p>{this.props.profile.first_name}</p>
                        <p>{this.props.profile.last_name}</p>
                        <img className="profile-img" src={this.props.profile.images}/>
                        <p>{this.props.profile.email}</p>
                        <p>{this.props.profile.profession}</p>
                        <p>{this.props.profile.profession_years}</p>
                        <p>{this.props.profile.college}</p>
                        <p>{this.props.profile.degree}</p>
                        <p>{this.props.profile.about_me}</p>
                    
            </div>
        )
    }
}