import { useState, useEffect } from 'react';

// Simple credentials - in a real app, these would be handled more securely
const VALID_CREDENTIALS = [
  { username: 'investor', password: 'breme2024!' },
  { username: 'demo', password: 'foodtech2024' },
  { username: 'admin', password: 'bremeAI2024' }
];

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const authStatus = localStorage.getItem('breme-auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    const isValid = VALID_CREDENTIALS.some(
      cred => cred.username === username && cred.password === password
    );
    
    if (isValid) {
      localStorage.setItem('breme-auth', 'authenticated');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('breme-auth');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
}; 