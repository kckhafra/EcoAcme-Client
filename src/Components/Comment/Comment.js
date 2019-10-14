import React from 'react'
import EcoAcmeContext from '../../contexts/EcoAcmeContext';
import DeleteCommentBox from '../DeleteCommentBox/DeleteCommentBox'

export default class Comment extends React.Component{
    state={
        deleteCommentBox: "hidden-deletecomment",
        displayDeleteCommentBox: "display-deletecomment",
        hideCommenttext: "display-commenttext",
        hideImgDelete: "display-imgdelete",
        deleteCommentId:"",
    }
    
    static contextType = EcoAcmeContext

    
    
    openDeleteCommentConfirmation = (id,e) => {
        e.preventDefault()
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
    render(){
        return(
            <div >
                <form 
                onSubmit={this.props.handleInsertComment}>
                    
                    <textarea
                        className="post-comment-text"
                        placeholder="Post a comment"
                        name="comment"></textarea>
                    <button type="submit">Post</button>
                    <button onClick={this.props.hideCommentBox}>Close</button>
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
        )
    }
}