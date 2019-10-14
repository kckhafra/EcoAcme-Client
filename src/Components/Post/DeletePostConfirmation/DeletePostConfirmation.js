import React from 'react'

export default class DeletePostConfirmation extends React.Component{
    render(){
        return(
            <div>
                <div>Are you sure you want to delete this post?</div>
                <button onClick={this.props.handleDeletePost}>Yes</button>
                <button onClick={this.props.hideDeleteConfirmation}>No</button>
            </div>
        )
    }
}