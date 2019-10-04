import config from '../config'

const FriendsService = {
   getFriendsRequest(user_id){
       return fetch(`${config.API_ENDPOINT}/friends/request?user_id=${user_id}`,{
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
   getFriendsReceiver(user_id){
    return fetch(`${config.API_ENDPOINT}/friends/receiver?user_id=${user_id}`,{
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

export default FriendsService