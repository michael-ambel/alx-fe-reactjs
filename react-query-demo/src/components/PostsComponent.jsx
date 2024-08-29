import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {

    const { data, error, isLoading, isError, isFetching } = useQuery('fetchPosts', fetchPosts, { cacheTime: 1000 * 60 * 5, staleTime: 1000 * 60, refetchOnWindowFocus: true, keepPreviousData: true });

      if (isLoading) return <div>Loading...</div>;
      if (isError) return <div>Error: {error.message}</div>;


    return (
        <div>
            <h1>Posts</h1>
            {isFetching && <div>Updating...</div>}
            <ul>
                {data.map(post => (
                <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button onClick={() => {window.location.reload()}}>Reload</button>
        </div>
    );
};

export default PostsComponent;