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
const uuid = require('uuid')

export default class Home extends React.Component{
    state = {
        textbox: "hidden"
    }
    static contextType = EcoAcmeContext
    componentDidMount(){
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        MessagesService.getAllUserMessages(user_id)
        .then(this.context.setAllUserMessages)
    }
    
    displayWritePost = ()=>{
        
        this.setState({textbox: 'display'})
    }
    hideWritePost = ()=>{
       
        this.setState({textbox: 'hidden'})
    }
    handlePostForm = (e)=>{
        e.preventDefault()
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        const post=e.target.write_post.value
        const images = e.target.images.value = ""||null
        ? null
        : e.target.images.value
        this.hideWritePost()
        PostService.postPosts(user_id,post,images)
        .then(p=>{console.log(p) 
            return p})
        
        .then(this.context.alterPostList)
        
    }
    
    renderHome(){
        
        const token = TokenService.getAuthToken()
        const payload = JwtService.verifyJwt(token)
        const user_id = payload.user_id
        const userInfo = this.context.userList.filter(user=>{
           return user.id == user_id
         })
    
        return(
            <div>
                
                <div class="home-main-container">
                    <div className="userinfo-container">
                    {userInfo.map(profile=>{
                    return (
                    <UserBadge
                    profile={profile}/>
                    )
                })}
                    </div>
                    
                    <div  className={this.state.textbox}>
                        <div className="blue-bar"></div>
                        <button onClick={this.hideWritePost}>Close</button>
                        <form onSubmit={this.handlePostForm}>
                            <textarea className="home-writecomment" type="text" title="write_post" name="write_post"placeholder="Write Post"></textarea>
                            <input type="text" name="images" placeholder="Post with image"></input>
                            <input type="submit"/>
                            
                        </form>
                    </div>
                    <div className="postpage-container">
                        <button className="share-post" onClick={this.displayWritePost} className="">
                        Share a Post
                        </button>
                        
                        {this.context.postList.map(post=>{
                            return(
                                    <PostPage
                                        key={uuid}
                                        posts={post}
                                       
                                    />
                            )
                        })}
                    </div>
                    
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