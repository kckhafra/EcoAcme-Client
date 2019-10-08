import React from 'react';
import {Link} from 'react-router-dom'



export default class UserPage extends React.Component{
    
    render(){
        const id = this.props.user.id
        return(
            <Link
            to={`/users/${id}`}>
                <p>{this.props.user.first_name}</p>
                <p>{this.props.user.last_name}</p>
                <img src={this.props.user.images}/>
            </Link>
        )
    }
}