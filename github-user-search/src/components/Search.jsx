import { useState } from "react";
import { fetchUserData, fetchUsers } from '../services/githubService'

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


        const [location, setLocation] = useState('');
        const [repoCount, setRepoCount] = useState(0);
        const [users, setUsers] = useState([]);
        const [error, setError] = useState('');
    
        const handleFetchUsers = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setError('');
            setUsers([]);
    
            try {
                const usersData = await fetchUsers(location, repoCount);
                setUsers(usersData);
            } catch (err) {
                setError('Failed to fetch users.');
            }
        }

    return ( 
        <div>
            <h2>Search by user name</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Insert GitHub Username</label>
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

            <h2>Search by Location and Repo count</h2>
            <form onSubmit={handleFetchUsers}>
                <label>
                    Location:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Min Repo Count:
                    <input
                        type="number"
                        value={repoCount}
                        onChange={(e) => setRepoCount(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Fetch Users</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {users.length > 0 && (
                <div>
                    <h3>Users Found:</h3>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
     );
}
 
export default Search;