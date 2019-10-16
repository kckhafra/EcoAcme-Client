import React from 'react'
import './EditPostForm.css'
import PostService from '../../../services/post-api-service';
import EcoAcmeContext from '../../../contexts/EcoAcmeContext';



export default class EditPostForm extends React.Component{
    static contextType = EcoAcmeContext
    state = {
        post: "",
        post_images: ""
    }
    componentDidMount(){
        PostService.getPostById(this.props.posts.id)
        .then(p=>{
                this.setState({
                    post: p.post.post,
                    post_images: p.post.post_images
            })
        })
        
    }
    handleChangePost = (e)=>{
        this.setState({post: e.target.value})
    }

    handleChangeImages = (e)=>{
        this.setState({post_images: e.target.value})
    }

    handleEditPost =(e) => {
        e.preventDefault()
        this.props.hideEditTextBox(e)
        const {post,post_images}=this.state
        const editPost = {post, post_images}
        
        PostService.editPost(this.props.posts.id, editPost)
        .then(()=>{
            this.resetFields(editPost)
            PostService.getPostById(this.props.posts.id)
            .then(this.context.replacePostList)
            
        })
        
 
    }

    resetFields = (newFields) =>{
        this.setState({
            post: newFields.post || '',
            images: newFields.images || '',
        })
    }
    
    
    render(){
        const {post,post_images} = this.state
        console.log(post_images)
        console.log(post)
        return(
            <div className="edit-form-container">
                <div className="edit-purple-bar"></div>
                <button onClick={this.props.hideEditTextBox}>Close</button>
                <form className="edit-share-postform" onSubmit={this.handleEditPost}>
                    <textarea onChange={this.handleChangePost}value={post} className="edit-home-writecomment" type="text" title="write_post" name="write_post"placeholder="Write Post"></textarea>
                    <textarea onChange={this.handleChangeImages} value={post_images}className="editpost-image-url" type="text" name="images" placeholder="Post with image url"></textarea>
                    <button className="editshare-post-button"type="submit">Share</button>
                </form>
            </div>
        )
    }
}