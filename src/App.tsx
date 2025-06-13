import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

interface User {
  email: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) as User : null;
  });

  const login = (email: string, password: string) => {
    const fakeUser = { email };
    setUser(fakeUser);
    localStorage.setItem('user', JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login login={login} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute user={user}>
            <Dashboard user={user!} logout={logout} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;

// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import ProtectedRoute from './routes/ProtectedRoute';

// const App: React.FC = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/login" replace />} />
//     <Route path="/login" element={<Login />} />
//     <Route
//       path="/dashboard"
//       element={
//         <ProtectedRoute>
//           <Dashboard />
//         </ProtectedRoute>
//       }
//     />
//   </Routes>
// );

// export default App;