import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import EcoAcmeContext from '../../contexts/EcoAcmeContext'
import PostPage from '../Post/PostPage'
const uuid = require('uuid')

export default class Home extends React.Component{
    static contextType = EcoAcmeContext
    
    renderHome(){
        return(
            <div>
                <div className="searchmessage-container">
                    <textarea className="home-writecomment" type="text" title="write_post" placeholder="Write Post"></textarea>
                </div>
                <div class="home-main-container">
                    <div></div>
                    <div className="postpage-container">
                        {this.context.postList.map(post=>{
                            return(
                                
                                    <PostPage
                                        key={uuid}
                                        posts={post}
                                    />
                            
                            )
                        })}
                    </div>
                    <div></div>
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