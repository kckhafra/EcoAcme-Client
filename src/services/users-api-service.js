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
    },
    postUsers(newUser){
        return fetch(`${config.API_ENDPOINT}/users`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
        .then((res)=>
                (!res.ok)
                 ? res.json().then(e=> Promise.reject(e))
                 : res.json()
            )
    },
    editAboutMe(userId,aboutMe){
        return fetch(`${config.API_ENDPOINT}/users/${userId}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                about_me:aboutMe
            })
        })
        .then((res)=>
                (!res.ok)
                 ? res.json().then(e=> Promise.reject(e))
                 : res.json()
            )
        },
    editServices(userId,services){
            return fetch(`${config.API_ENDPOINT}/users/${userId}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    holistic_services:services
                })
            })
            .then((res)=>
                    (!res.ok)
                     ? res.json().then(e=> Promise.reject(e))
                     : res.json()
                )
            },
    editOrganization(userId,organization){
            return fetch(`${config.API_ENDPOINT}/users/${userId}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    holistic_organizations:organization
                })
            })
            .then((res)=>
                    (!res.ok)
                     ? res.json().then(e=> Promise.reject(e))
                     : res.json()
                )
            },

     }
    
export default UserService