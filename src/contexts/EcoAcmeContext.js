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
})
export default EcoAcmeContext;

export class EcoAcmeProvider extends React.Component{
    state = {
        postList: [""],
        friendRequestList: [""],
        friendReceiverList: [""],
        userList: [""],
        allUserMessages:[""],
        commentList:[""],

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
            setCommentList: this.setCommentList
        }
        return (
            <EcoAcmeContext.Provider value={value}>
                {this.props.children}
            </EcoAcmeContext.Provider>
        )
    }
}