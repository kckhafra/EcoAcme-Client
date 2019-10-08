import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import EcoAcmeContext from '../../contexts/EcoAcmeContext'
import PostPage from '../Post/PostPage'
import TokenService from '../../services/token-service'
import JwtService from '../../services/jwt-api-service'
import MessagesService from '../../services/messages-api-service'
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
    renderHome(){
        console.log(this.context.allUserMessages)
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
                    <div>
                        <p>{profile.first_name}</p>
                        <p>{profile.last_name}</p>
                        <img src={profile.images}/>
                        <p>{profile.email}</p>
                        <p>{profile.profession}</p>
                        <p>{profile.profession_years}</p>
                        <p>{profile.college}</p>
                        <p>{profile.degree}</p>
                        <p>{profile.about_me}</p>
                    </div>
                    )
                })}
                    </div>
                    
                    <div onClick={this.hideWritePost} className={this.state.textbox}>
                        <div className="blue-bar"></div>
                        Write a Post
                        <textarea className="home-writecomment" type="text" title="write_post" placeholder="Write Post"></textarea>
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