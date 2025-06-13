import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  user: { email: string } | null;
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// interface ProtectedRouteProps {
//   children: React.ReactElement;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   return user ? children : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;