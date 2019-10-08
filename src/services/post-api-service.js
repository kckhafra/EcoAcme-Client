import config from '../config'

const PostService = {
   getAllPost(){
       return fetch(`${config.API_ENDPOINT}/post`,{
           method: 'GET',
           headers: {
               'content-type': 'application/json',
           },
       })
       .then((res)=>
           (!res.ok)
            ? res.json().then(e=> Promise.reject(e))
            : res.json()
       )
   },
   getComments(){
    return fetch(`${config.API_ENDPOINT}/comments/`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    })
    .then((res)=>
        (!res.ok)
         ? res.json().then(e=> Promise.reject(e))
         : res.json()
    )
},
   getCommentByProdId(prodId){
    return fetch(`${config.API_ENDPOINT}/comments/${prodId}`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    })
    .then((res)=>
        (!res.ok)
         ? res.json().then(e=> Promise.reject(e))
         : res.json()
    )
},
   PostComment(postId,userId,comm){
    return fetch(`${config.API_ENDPOINT}/comments`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
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
}

export default PostService