import config from '../config'

const MessagesService = {
    getAllUserMessages(user_id){
        return fetch(`${config.API_ENDPOINT}/messages?user_id=${user_id}`,{
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
    getMessagesConvo(user_id,receiver_id){
        return fetch(`${config.API_ENDPOINT}/messages/convo?user_id=${user_id}&receiver_id=${receiver_id}`,{
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

 export default MessagesService
