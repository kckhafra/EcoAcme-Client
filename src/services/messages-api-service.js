import config from '../config'
import TokenService from '../services/token-service'

const MessagesService = {
    getAllUserMessages(user_id){
        return fetch(`${config.API_ENDPOINT}/messages?user_id=${user_id}`,{
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
    getMessagesConvo(user_id,receiver_id){
        return fetch(`${config.API_ENDPOINT}/messages/convo?user_id=${user_id}&receiver_id=${receiver_id}`,{
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
    getMessagesById(id){
        return fetch(`${config.API_ENDPOINT}/messages/${id}`,{
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

    postMessages(sender_id,receiver_id,messages){
        return fetch(`${config.API_ENDPOINT}/messages`,{
            method: 'Post',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                sender_id,
                receiver_id,
                messages,
            })
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
 }

 export default MessagesService
