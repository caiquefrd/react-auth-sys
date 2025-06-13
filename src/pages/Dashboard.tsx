import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DashboardProps {
  user: { email: string };
  logout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container"> 
      <h2>Bem-vindo, {user.email}!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Dashboard;

