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
})
export default EcoAcmeContext;

export class EcoAcmeProvider extends React.Component{
    state = {
        postList: [""],
        friendRequestList: [""],
        friendReceiverList: [""],
        userList: [""]
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
            setUserList: this.setUserList
        }
        return (
            <EcoAcmeContext.Provider value={value}>
                {this.props.children}
            </EcoAcmeContext.Provider>
        )
    }
}