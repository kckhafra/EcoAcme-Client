import React from 'react';

export default class FriendPage extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.friends.images}/>
                <p>{this.props.friends.first_name}</p>
                <p>{this.props.friends.last_name}</p>
                <p>{this.props.friends.profession}</p>
                <p>{this.props.friends.college}</p>

            </div>
        )
    }
}