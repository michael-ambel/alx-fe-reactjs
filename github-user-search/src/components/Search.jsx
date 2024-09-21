import { useState } from "react";
import { fetchUserData } from '../services/githubService'

const Search = () => {
    
    const [username, setUsername] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [userError, setUserError] = useState(false)
    const [userData, setUserData] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        setUserError('')
        setUserData(null)

        const {data, error} = await fetchUserData(username)
        
        setIsLoading(false)
        if(error){
            setUserError(true)
            setUserData(null)
            console.log(error);
        }
        if(data){
            setUserError('')
            setUserData(data)
            console.log(data);
        }   
    }

    return ( 
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Insert GitHub Username</label>
                <input 
                type="text"
                placeholder="Enter GitHub username"
                name = 'username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
                />
                <button>Fetch User</button>
            </form>
            {userError && <p>Looks like we cant find the user</p>}
            {isLoading && <p>Loading....</p>}
            {userData && (
                <div>
                    <h3>User Data:</h3>
                    <img 
                        src={userData.avatar_url} 
                        alt={`${userData.login}'s avatar`} 
                        style={{ width: '100px', borderRadius: '50%' }} 
                    />
                    <p>Name: {userData.name}</p>
                    <p>Bio: {userData.bio}</p>
                    <p>Followers: {userData.followers}</p>
                </div>
            )}
        </div>
     );
}
 
export default Search;