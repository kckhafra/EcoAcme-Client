import React from 'react';
import './NetworkProfile.css'
import Header from '../../Header/Header'
import UsersService from '../../../services/users-api-service'


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