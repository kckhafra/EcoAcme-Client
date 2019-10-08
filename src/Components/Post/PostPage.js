import React from 'react';
import './PostPage.css'
import PostService from '../../services/post-api-service'
import TokenService from '../../services/token-service'
import JwtService from '../../services/jwt-api-service'
import EcoAcmeContext from '../../contexts/EcoAcmeContext';

export default class PostPage extends React.Component{
    static contextType = EcoAcmeContext
    
    
    componentDidMount(){
        console.log(this.props.postId)
        PostService.getComments()
        .then(this.context.setCommentList)
    }
    handlePostComment = (e)=>{
        
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const userId = payload.user_id
        const commValue= e.target.comment.value
        
        PostService.PostComment(this.props.posts.id,userId,commValue)
                    
    }
    
    renderComment(){
        return(
        <form 
                    onSubmit={this.handlePostComment}>
                    <textarea  
                    placeholder="Post a comment"
                    name="comment"></textarea>
                    <input type="submit"></input>
        </form>
        )}
    
    render(){
        
        return(
            <div className="post-container">
                <p>{this.props.posts.post}</p>
                <p>{this.props.posts.date_created}</p>
                <p>{this.props.posts.id}</p>
                <p>{this.props.posts.images!==null
                ? <img className="post-image" src={this.props.posts.images}/>
                : null}</p>
                {/* <p>{this.state.comment.comments}</p> */}
                {this.context.commentList.map(comm=>{
                    return comm.post_id==this.props.posts.id
                    ? <p>{comm.comments}</p>
                    : null
                })}
                {this.renderComment()}
                
            </div>

        )
    }
}