import React from 'react';
import './PostPage.css'
import PostService from '../../services/post-api-service'
import TokenService from '../../services/token-service'
import JwtService from '../../services/jwt-service'
import EcoAcmeContext from '../../contexts/EcoAcmeContext';
import DeleteCommentBox from '../DeleteCommentBox/DeleteCommentBox'
import {Link} from 'react-router-dom'
import ImagesForComponents from '../ImagesForComponents/ImagesForComponents'

export default class PostPage extends React.Component{
    static contextType = EcoAcmeContext
    
    state={
        commentBox:"hidden-commentbox",
        deleteCommentBox: "hidden-deletecomment",
        displayDeleteCommentBox: "display-deletecomment",
        hideCommenttext: "display-commenttext",
        hideImgDelete: "display-imgdelete",
        deleteCommentId:"",
        
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
        alert('working')
        e.preventDefault()
        PostService.deletePost(this.props.posts.id)
    }
    openDeleteCommentConfirmation = (id,e) => {
        e.preventDefault()
        console.log(id)
        this.setState({
            deleteCommentId:id,
        })
        this.setState({
            deleteCommentBox:"display-deletecomment",
            hideCommenttext: "hidden-commenttext",
            hideImgDelete: "hide-imgdelete",
        })
        
    }

    closeDeleteCommentConfirmation = (e) => {
        this.setState({
            deleteCommentBox:"hidden-deletecomment",
            hideCommenttext: "display-commenttext",
            hideImgDelete: "display-imgdelete"
            
        })
    }
    
    
    
    renderComment(){
        
        return(
            <div>
                <form 
                onSubmit={this.handleInsertComment}>
                    <button onClick={this.hideCommentBox}>Close</button>
                    <textarea

                        placeholder="Post a comment"
                        name="comment"></textarea>
                    <input type="submit"></input>
                </form>
                {this.context.commentList.map(comm=>{
                    
                    return comm.post_id==this.props.posts.id
                    ? 
                    <div>
                    <div className="comm-container">
                        <div className={this.state.hideImgDelete}>
                        <img className="comments-img comm-list"  src={comm.images}/>
                        </div>
                        <div className={this.state.hideCommenttext}>
                            <div className="comm-info">
                                    <li className="comm-list comm-first-name">{comm.first_name}{" "}<span className="comm-list comm-last-name">{comm.last_name}</span></li> 
                                    <li className="comm-list comm-profession">{comm.profession}</li>
                                    {/* <p>{comm.date_created}</p> */}
                                    <p className="comm-list comm-comments">{comm.comments}</p>
                                    <p>{comm.id}</p>
                            </div>
                            
                        </div>
                        
                        
                        <div >
                                <DeleteCommentBox
                                deleteCommentBox={this.state.deleteCommentBox}
                                displayDeleteCommentBox={this.state.displayDeleteCommentBox}
                                comments={comm}
                                closeDeleteCommentConfirmation={this.closeDeleteCommentConfirmation}
                                deleteCommentId={this.state.deleteCommentId}/>
                                
                        </div>
                    </div>
                    <div className={this.state.hideImgDelete}>
                       
                        
                        <button onClick={(e)=>this.openDeleteCommentConfirmation(comm.id,e)} className="comm-delete-button" >    Delete 
                        </button>
                        
                    </div>
                    </div>
                    : null
                })}
            </div>
        )}

    
    
    render(){
        
        return(
            <div className="eachpost-container">
                <p>{this.props.posts.post}</p>
                <p>{this.props.posts.date_created}</p>
                <p>{this.props.posts.id}</p>
                <p>{this.props.posts.images!==null
                ? <img className="post-image" src={this.props.posts.images}/>
                : null}</p>
                {/* <p>{this.state.comment.comments}</p> */}
                
                
                <div className="icon-box">
                    <button className="post-icon-button comment-button" onClick={this.handleDisplayComment}>
                            <img className="comment-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSKLVG85kNsVOBece-hU6N-kclGznpKCU1ns8a58I5j4a6sbx"/>
                            Comment
                    </button>
                    <button className="post-icon-button" onClick={this.handleDeletePost}>
                        <img className="comment-img" src={ImagesForComponents.deleteIcon}/>
                            Delete 
                    </button>
                    <button className="post-icon-button">
                        <img className="comment-img" src={ImagesForComponents.editIcon}/>
                            Edit 
                    </button>
                </div>
                <div className={this.state.commentBox}>
                    {this.renderComment()}
                </div>  
            </div>
                
            

        )
    }
}