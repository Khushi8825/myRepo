import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Base API URL - change this to your backend URL
const API_BASE_URL = "http://localhost:5000/api"; // or your backend URL

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  // Load user from token on initial render
  useEffect(() => {
    if (token) {
      // Verify token and get user data
      verifyToken();
    } else {
      setLoading(false);
    }
  }, [token]);

  const verifyToken = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("verified user", userData);
        setUser(userData);
      } else {
        // Token is invalid
        logout();
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { user: userData, token: authToken } = data;
        console.log("login user data", userData);
        // Store token and user data
        localStorage.setItem("token", authToken);
        setToken(authToken);
        setUser(userData);
        
        return { success: true, user:userData };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.message };
      }
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        const { user: newUser, token: authToken } = data;
        
        // Store token and user data
        localStorage.setItem("token", authToken);
        setToken(authToken);
        setUser(newUser);
        
        return { success: true };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.message };
      }
    } catch (error) {
      console.error('Signup failed:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };
  
  const updateUser = (patch) => {
    const updatedUser = { ...user, ...patch };
    setUser(updatedUser);
  };

  // Function to make authenticated API calls
  const authFetch = async (url, options = {}) => {
    const authOptions = {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
      },
    };

    const response = await fetch(`${API_BASE_URL}${url}`, authOptions);
    
    if (response.status === 401) {
      // Token is expired or invalid
      logout();
      throw new Error('Authentication failed');
    }
    
    return response;
  };

  const value = {
    user,
    token,
    loading,
    login,
    signup,
    logout,
    updateUser,
    authFetch, // Export the authenticated fetch function
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}