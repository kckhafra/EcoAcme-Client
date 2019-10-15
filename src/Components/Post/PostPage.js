import React from 'react';
import './PostPage.css'
import PostService from '../../services/post-api-service'
import TokenService from '../../services/token-service'
import JwtService from '../../services/jwt-service'
import EcoAcmeContext from '../../contexts/EcoAcmeContext';
import DeleteCommentBox from '../DeleteCommentBox/DeleteCommentBox'
import {Link} from 'react-router-dom'
import ImagesForComponents from '../ImagesForComponents/ImagesForComponents'
import Comment from '../Comment/Comment'
import PostForm from '../Post/PostForm/PostForm'
import EditPostForm from '../Post/EditPostForm/EditPostForm'
import DeletePostConfirmation from './DeletePostConfirmation/DeletePostConfirmation'

export default class PostPage extends React.Component{
    static contextType = EcoAcmeContext
    
    state={
        commentBox:"hidden-commentbox",
        editTextBox: "hidden",
        deletePostConf:"hidden"
       
        
        
    }
    
    componentDidMount(){
        PostService.getComments()
        .then(this.context.setCommentList)
    }
    handleInsertComment = (e)=>{
        e.preventDefault()
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const userId = payload.user_id
        const commValue= e.target.comment.value
        PostService.postComment(this.props.posts.id,userId,commValue)
        .then(comment=>{
            return PostService.getCommentById(comment.id)
        })
        .then(this.context.addCommentList)
        
    }
    handleDisplayComment = (e)=>{
        e.preventDefault()
        this.setState({
            commentBox: "display-commentbox"
        }) 
        
    }
    hideCommentBox = (e)=>{
        e.preventDefault()
        this.setState({
            commentBox: "hidden-commentbox"
        })
    }
    
    handleDeletePost = (e)=>{
        e.preventDefault()
        this.hideDeleteConfirmation(e)
        PostService.deletePost(this.props.posts.id)
        .then(this.context.deletePost(this.props.posts.id))
    }
    
    displayEditTextBox = ()=>{
       
        this.setState({
            editTextBox: "editpost-form-container"
        })
    }
    hideEditTextBox = (e)=>{
        e.preventDefault()
        this.setState({
            editTextBox: "hidden"
        })
    }
    displayDeleteConfirmation = (e)=>{
        e.preventDefault()
        this.setState({
            deletePostConf: "delete-confirmation-box"
        })
    }
    hideDeleteConfirmation = (e)=>{
        e.preventDefault()
        this.setState({
            deletePostConf: "hidden"
        })
    }

    

    render(){
        
        return(
            <div>
            <div className="eachpost-container">
                <div className={this.state.deletePostConf}>
                    <DeletePostConfirmation
                    handleDeletePost={this.handleDeletePost}
                    hideDeleteConfirmation={this.hideDeleteConfirmation}/>
                </div>
                <div className={this.state.editTextBox}>
                        <EditPostForm
                        hideEditTextBox={this.hideEditTextBox}
                        handlePostForm={this.handlePostForm}
                        posts={this.props.posts}
                        
                        />
                    </div>
                <div className="post-imgname-container">
                    {this.props.posts.images!==null
                    ? 
                    <img className="postuser-image" src={this.props.posts.images}/>
                    : null}
                    <div className="name-profession-list">
                        <div className="post-name">{this.props.posts.first_name}    <span>{this.props.posts.last_name}</span>
                        </div>
                        <div className="post-profession">
                            {this.props.posts.profession}
                        </div>    
                        {/* <li>{this.props.posts.date_created}</li>    */}
                    </div>
                    
                    
                </div>
                <p>{this.props.posts.post}</p>
                {this.props.posts.post_images==null
                    ? null
                    : 
                    <div className="post-img-container">
                        <img className="post-img" src={this.props.posts.post_images}/>
                    </div>}
                
                

                <div className="line-seperator"></div>

                <div className="icon-box">
                    <button className="post-icon-button comment-button" onClick={this.handleDisplayComment}>
                            <img className="comment-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSKLVG85kNsVOBece-hU6N-kclGznpKCU1ns8a58I5j4a6sbx"/>
                            Comment
                    </button>
                    <button className="post-icon-button" onClick={this.displayDeleteConfirmation}>
                        <img className="comment-img" src={ImagesForComponents.deleteIcon}/>
                            Delete 
                    </button>
                    <button onClick={this.displayEditTextBox} className="post-icon-button">
                        <img className="comment-img" src={ImagesForComponents.editIcon}/>
                            Edit 
                    </button>
                </div>
                <div className={this.state.commentBox}>
                    {/* {this.renderComment()} */}
                    <Comment
                    posts={this.props.posts}
                    handleInsertComment={this.handleInsertComment}
                    hideCommentBox={this.hideCommentBox}
                    />
                </div>  
            </div>
            </div>
                
            

        )
    }
}