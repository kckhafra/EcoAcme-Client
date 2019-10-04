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
}

export default PostService