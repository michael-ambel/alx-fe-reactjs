import axios from "axios";

export const fetchUserData  = async (username) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${username}`)
        return {data: response.data, error:null}
    }
    catch(error){
        return{data: null, error:'We cant find the user'}
    }
}
