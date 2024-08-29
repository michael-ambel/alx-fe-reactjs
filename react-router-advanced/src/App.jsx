import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Profile from './components/Profile'
import BlogPost from './components/BlogPost';


function App() {

  return (
    <>
    <Router>
      <nav>
        <Link to="/blog">Blog</Link> | <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
