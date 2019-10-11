import config from '../config'
import TokenService from '../services/token-service'

const PostService = {
   getAllPost(){
       return fetch(`${config.API_ENDPOINT}/post`,{
           method: 'GET',
           headers: {
               'content-type': 'application/json',
               'authorization': `bearer ${TokenService.getAuthToken()}`
           },
       })
       .then((res)=>
           (!res.ok)
            ? res.json().then(e=> Promise.reject(e))
            : res.json()
       )
   },
   postPosts(userId,post,images){
    return fetch(`${config.API_ENDPOINT}/post`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
            user_id: userId,
            post: post,
            images:images
            
        })
    })
    .then((res)=>
        (!res.ok)
         ? res.json().then(e=> Promise.reject(e))
         : res.json()
    )
},
    deleteComment(commId){
        return fetch(`${config.API_ENDPOINT}/comments/${commId}`,{
            method: 'DELETE',
            headers:{
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
    },
   getComments(){
    return fetch(`${config.API_ENDPOINT}/comments/`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
        },
    })
    .then((res)=>
        (!res.ok)
         ? res.json().then(e=> Promise.reject(e))
         : res.json()
    )
},
   getCommentByPostId(postId){
    return fetch(`${config.API_ENDPOINT}/comments/by_post/${postId}`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
        },
    })
    .then((res)=>
        (!res.ok)
         ? res.json().then(e=> Promise.reject(e))
         : res.json()
    )
},
   postComment(postId,userId,comm){
    return fetch(`${config.API_ENDPOINT}/comments`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
            post_id: postId,
            user_id: userId,
            comments: comm,
        })
    })
    .then((res)=>
        (!res.ok)
         ? res.json().then(e=> Promise.reject(e))
         : res.json()
    )
},
    
    deletePost(postId){
        return fetch(`${config.API_ENDPOINT}/post/${postId}`,{
            method: 'DELETE',
            headers:{
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
    },
}



export default PostService