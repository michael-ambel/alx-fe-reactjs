import { Navigate } from 'react-router-dom';

const useAuth = () => {
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ element, ...rest }) => {
  return useAuth() ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;