import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user authentication tokens or session
    // This might involve clearing cookies, localStorage, etc.
    localStorage.removeItem('authToken'); // Example for clearing token

    // Redirect user to the login page or homepage
    navigate('/signin');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Sign Out</h1>
        <p className="mb-6">You have been signed out successfully.</p>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSignOut}
          className="w-full"
        >
          Go to Login Page
        </Button>
      </div>
    </div>
  );
};

export default SignOut;
