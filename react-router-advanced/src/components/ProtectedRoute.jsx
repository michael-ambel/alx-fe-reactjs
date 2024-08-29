import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('uthAuth') !== null;
};

const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;