import React from 'react';
import PostService from '../../services/post-api-service'
import EcoAcmeContext from '../../contexts/EcoAcmeContext';

export default class DeleteComment extends React.Component{
    static contextType = EcoAcmeContext
    handleDeleteComment = ()=>{
        PostService.deleteComment(this.props.comments.id)
    }
    render(){
    
       return (
       this.props.comments.id===this.props.deleteCommentId
            ? 
            <div className={this.props.deleteCommentBox}>
                <p>Are you sure you want to delete the comment: {this.props.comments.comments}</p>
                <button onClick={this.handleDeleteComment}>yes</button>
            <button onClick={this.props.closeDeleteCommentConfirmation}>No</button>
            </div>
            : null
       )
        // return(
            
        // )
    }
}