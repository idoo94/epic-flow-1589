import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { id: 'admin', role: 'admin' } or { id: 'user', role: 'customer' }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for a stored token/session
    const storedUser = localStorage.getItem('amoscut_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'admin@amoscut.com' && password === 'adminpass') {
          const userData = { id: 'admin123', email, role: 'admin' };
          setUser(userData);
          localStorage.setItem('amoscut_user', JSON.stringify(userData));
          resolve({ success: true, user: userData });
        } else if (email === 'user@amoscut.com' && password === 'userpass') {
          const userData = { id: 'user123', email, role: 'customer' };
          setUser(userData);
          localStorage.setItem('amoscut_user', JSON.stringify(userData));
          resolve({ success: true, user: userData });
        } else {
          resolve({ success: false, message: 'Invalid credentials' });
        }
        setLoading(false);
      }, 1000);
    });
  };

  const signup = async (name, email, password) => {
    setLoading(true);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, you'd add the user to a database
        // For now, just simulate success
        resolve({ success: true, message: 'Registration successful! Please log in.' });
        setLoading(false);
      }, 1500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('amoscut_user');
  };

  const isAuthenticated = !!user;
  const isAdmin = user && user.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);