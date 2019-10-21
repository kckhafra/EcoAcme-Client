import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import EcoAcmeContext from '../../contexts/EcoAcmeContext'
import PostPage from '../Post/PostPage'
import TokenService from '../../services/token-service'
import JwtService from '../../services/jwt-service'
import MessagesService from '../../services/messages-api-service'
import PostService from '../../services/post-api-service';
import UserBadge from '../UserBadge/UserBadge'
import ImagesForComponents from '../ImagesForComponents/ImagesForComponents';
import PostForm from '../Post/PostForm/PostForm'
import FriendsService from '../../services/friends-api-service'
import NewsApi from '../Home/NewsApi/NewsApi'
const uuid = require('uuid')

export default class Home extends React.Component{
    state = {
        textbox: "hidden",
        homePostpageContainer: ""
       
    }
    static contextType = EcoAcmeContext
    componentDidMount(){
        
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        MessagesService.getAllUserMessages(user_id)
        .then(this.context.setAllUserMessages)
        // FriendsService.getAllFriends(user_id)
        // .then(friend=>{
        //      return [...new Map(friend.map(item => [item['user_name'], item])).values()]

        // })
        //.then(this.context.setAllFriends)
        FriendsService.getFriendsReceiver(user_id)
        .then(this.context.setFriendReceiver)
       
        FriendsService.getFriendsRequest(user_id)
        .then(this.context.setFriendRequest)
        
    }
    
    displayWritePost = ()=>{
        
        this.setState({
            textbox: 'display',
            homePostpageContainer: 'hidden'
        })
    }
    hideWritePost = ()=>{
       
        this.setState({
            textbox: 'hidden',
            homePostpageContainer: ''
        })
    }
    handlePostForm = (e)=>{
        e.preventDefault()
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        const post=e.target.write_post.value
        
        const images = e.target.images.value === ""||e.target.images.value === " "
        ? null
        : e.target.images.value
        console.log(e.target.images.value)
        this.hideWritePost()
        PostService.postPosts(user_id,post,images)
        .then(p=>{ 
            PostService.getPostById(p.post.id)
            
            .then(this.context.addPostList)
        })
    }
    
    
    
    renderHome(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        const userInfo = this.context.userList.filter(user=>{
           return user.id === user_id
         })
    
        return(
            
                
                <div className="home-main-container">
                    <div className="userinfo-container">
                        {userInfo.map(profile=>{
                        return (
                        <UserBadge
                        key={uuid}
                        profile={profile}/>
                        )
                        })}
                    </div>
                    
                    
                    <form onSubmit={this.handlePostForm}className="post-form">
                        <div className="writepost-container">
                            <input name="write_post" className="write-post" type="text" placeholder="Write a post"></input>
                            <input name="images" className="write-post" type="text" placeholder="Post image url"></input>
                            <button className="responsive-writepost-button" type="submit">Post</button>
                            
                        </div>
                    </form>
                    <div className="postpage-container">
                        <div className="share-post" onClick={this.displayWritePost} >
                        <img alt="icon for sharing a post" className="share-post-icon" src={ImagesForComponents.editIcon}/> <span>Share a Post</span>
                        </div>
                        {/* <div className="line"></div> */}
                        <div>
                        <div  className={this.state.textbox}>
                            <PostForm
                            hideWritePost={this.hideWritePost}
                            handlePostForm={this.handlePostForm}
                            />
                        </div>
                        <div className={this.state.homePostpageContainer}>
                            {this.context.postList.map(post=>{
                                return(
                                        <PostPage
                                            key={uuid}
                                            posts={post}
                                            displayEditTextBox={this.displayEditTextBox}
                                            hideEditTextBox={this.hideEditTextBox}
                                        
                                        />
                                )
                            })}
                        </div>
                        </div>
                    </div>
                    
                    <div className="newsapi-container">
                        <NewsApi/>
                    </div>
                    
                </div>
            
        )
    }
    
    render(){
        
        return(
            <div>
                <Header/>
                {this.renderHome()}
                
            </div>
        )
    }
}