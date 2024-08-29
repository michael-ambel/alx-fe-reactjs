import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Profile from './components/Profile'


function App() {

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
