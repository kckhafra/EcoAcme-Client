import React from 'react'
import './PostForm.css'


export default class PostForm extends React.Component{
    render(){
        return(
            <div className="post-form-container">
                <div className="blue-bar"></div>
                <button onClick={this.props.hideWritePost}>Close</button>
                <form className="share-postform" onSubmit={this.props.handlePostForm}>
                    <textarea className="home-writecomment" type="text" title="write_post" name="write_post"placeholder="Write Post"></textarea>
                    <input className="post-image-url" type="text" name="images" placeholder="Post with image url"></input>
                    <button className="share-post-button"type="submit">Share</button>
                </form>
            </div>
        )
    }
}