import config from '../config'
import TokenService from '../services/token-service'

const FriendsService = {
    getAllFriends(user_id){
        return fetch(`${config.API_ENDPOINT}/friends?user_id=${user_id}`,{
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
   getFriendsRequest(user_id){
       return fetch(`${config.API_ENDPOINT}/friends/request?user_id=${user_id}`,{
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
   getFriendsReceiver(user_id){
    return fetch(`${config.API_ENDPOINT}/friends/receiver?user_id=${user_id}`,{
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
    postFriend(request_id,receiver_id){
        return fetch(`${config.API_ENDPOINT}/friends`,{
            method: 'Post',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                friend_request_id: request_id,
                friend_receiver_id: receiver_id,
            })
    })
    .then((res)=>
        (!res.ok)
         ? res.json().then(e=> Promise.reject(e))
         : res.json()
    )
},
}

export default FriendsService