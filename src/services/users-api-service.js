import config from '../config'
const UserService = {
    getAllUsers(){
            return fetch(`${config.API_ENDPOINT}/users`,{
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
    getUserById(id){
        return fetch(`${config.API_ENDPOINT}/users/${id}`,{
            headers: {
                'content-type': 'application/json',
            },
        })
        .then((res)=>
                (!res.ok)
                 ? res.json().then(e=> Promise.reject(e))
                 : res.json()
            )
    }

     }
    
export default UserService