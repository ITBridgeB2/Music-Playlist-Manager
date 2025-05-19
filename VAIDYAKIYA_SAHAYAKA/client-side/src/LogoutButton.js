import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user or admin from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    
    // Redirect to home page or login page
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
      Logout
    </button>
  );
};

export default LogoutButton;
