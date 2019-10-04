import React from 'react';
import './PostPage.css'

export default class PostPage extends React.Component{

    render(){
        return(
            <div className="post-container">
                <p>{this.props.posts.post}</p>
                <p>{this.props.posts.date_created}</p>
                <p>{this.props.posts.images!==null
                ? <img className="post-image" src={this.props.posts.images}/>
                : null}</p>
            </div>

        )
    }
}