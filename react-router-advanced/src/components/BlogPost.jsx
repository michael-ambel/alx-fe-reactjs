import { Link, Routes, Route } from "react-router-dom";
import Blog from './Blog'

const BlogPost = () => {
    return ( 

        <div>
            <Link to='/blog/488'> Single Blog </Link>

            <Routes>
                <Route path=':id' element={<Blog />}/>
            </Routes>
        </div>
);
        
        
}
 
export default BlogPost;