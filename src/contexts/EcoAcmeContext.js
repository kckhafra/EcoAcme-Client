import React from 'react';

const EcoAcmeContext = React.createContext({
    postList: [],
    setPostList: ()=>{},
    friendRequestList: [],
    setFriendRequest: ()=>{},
    friendReceiverList: [],
    setFriendReceiver: ()=>{},
    userList:[],
    setUserList:()=>{},
    clearPost: ()=>{},
    allUserMessages: [],
    setAllUserMessages: ()=>{},
    commentList: [],
    setCommentList: ()=>{},
    addPostList: ()=>{},
    deletePost: ()=>{},
    addComment: ()=>{},
    deleteComment: ()=>{},
    replacePostList: ()=>{}
})
export default EcoAcmeContext;

export class EcoAcmeProvider extends React.Component{
    state = {
        postList: [],
        friendRequestList: [],
        friendReceiverList: [],
        userList: [""],
        allUserMessages:[""],
        commentList:[""],

    }
    addPostList = addPost=>{
        console.log(addPost)
        this.setState({postList: [addPost.post,...this.state.postList]})
    }
    replacePostList = post=>{
        console.log(post)
        const updatePost=this.state.postList.map(obj => {
            return (
                post.post.id===obj.id
                ? post.post
                :obj
            )
        });
        this.setState({postList: updatePost})
        console.log(updatePost)
    }
    addCommentList = addComment=>{
        this.setState({commentList:[addComment.comm,...this.state.commentList]})
    }
    deletePost = postId=>{
        console.log(postId)
        this.setState({postList: this.state.postList.filter(obj=>{
            return (
            obj.id ==postId
            ? !obj
            :obj)
          })})
    }
    deleteComment= commentId=>{
        console.log(commentId)
        this.setState({commentList: this.state.commentList.filter(obj=>{
            return (
            obj.id ==commentId
            ? !obj
            :obj)
          })})
          console.log(this.state.commentList)
    }
    setCommentList = (commentList)=>{
        this.setState({commentList})
    }
    setAllUserMessages = allUserMessages=>{
        this.setState({allUserMessages})
    }
    setPostList = postList=>{
        this.setState({postList})
    }
    
    setFriendRequest = friendRequestList=>{
        this.setState({friendRequestList})
    }
    setFriendReceiver = friendReceiverList=>{
        this.setState({friendReceiverList})
    }
    setUserList = userList=>{
        this.setState({userList})
    }
    clearPost = ()=>{
        this.setState({postList: []})
    }

    render(){
        console.log(this.state.postList)
        const value = {
            friendRequestList:this.state.friendRequestList,
            setFriendRequest: this.setFriendRequest,
            friendReceiverList:this.state.friendReceiverList,
            setFriendReceiver: this.setFriendReceiver,
            postList: this.state.postList,
            setPostList: this.setPostList,
            clearPost: this.clearPost,
            userList: this.state.userList,
            setUserList: this.setUserList,
            allUserMessages: this.state.allUserMessages,
            setAllUserMessages: this.setAllUserMessages,
            commentList: this.state.commentList,
            setCommentList: this.setCommentList,
            addPostList: this.addPostList,
            deletePost: this.deletePost,
            addCommentList: this.addCommentList,
            deleteComment: this.deleteComment,
            replacePostList: this.replacePostList
        }
        return (
            <EcoAcmeContext.Provider value={value}>
                {this.props.children}
            </EcoAcmeContext.Provider>
        )
    }
}