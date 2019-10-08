import React from 'react';
import EcoAcmeContext from '../../../contexts/EcoAcmeContext'
import UserPage from '../UserPage/UserPage'
import {Link} from 'react-router-dom'
import Header from '../../Header/Header'
import './UserPageList.css'
import JwtService from '../../../services/jwt-api-service';
import TokenService from '../../../services/token-service';

export default class UserPageList extends React.Component{
    static contextType = EcoAcmeContext
    render(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        return(
            <div>
                <Header/>
                <div className="userpage-container">
                    <div className="user-sidebar">
                        <Link
                        to="/friends">
                            Friends
                        </Link>
                    </div>
                    <div className="user-middle">
                        {this.context.userList.map(user=>{
                            return user.id==user_id
                            ? !user 
                            : <UserPage user={user}/>
                        })}
                    </div>
                    <div className="user-left"></div>
                </div>
            </div>
        )
    }
}