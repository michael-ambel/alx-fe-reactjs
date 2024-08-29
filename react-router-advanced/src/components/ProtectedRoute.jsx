import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ProtectedRoute = ({ element, ...rest }) => {
    // Initialize auth state based on the presence of an auth token in localStorage
    const [auth, setAuth] = useState(() => {
      return localStorage.getItem('authToken') !== null;
    });
  
    // Optionally, synchronize the auth state with localStorage in case the token changes.
    useEffect(() => {
      const handleStorageChange = () => {
        setAuth(localStorage.getItem('authToken') !== null);
      };
  
      // Listen for changes in localStorage
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);
  
    return auth ? element : <Navigate to="/login" />;
  };
  
  export default ProtectedRoute;