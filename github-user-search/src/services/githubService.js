import axios from "axios";

export const fetchUserData  = async (username) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${username}`)
        return {data: response.data, error:false}
    }
    catch(error){
        return{data: null, error:'Looks like we cant find the user'}
    }
}

export const fetchUsers = async (location, repoCount) => {
    const response = await axios.get(`https://api.github.com/search/users`, {
        params: {
            q: `location:${location} repos:>${repoCount}`,
            per_page: 10,
        }
    })
    return response.data.items
}
