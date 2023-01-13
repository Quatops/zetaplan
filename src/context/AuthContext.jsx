import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const login = (id, password) => {
    if (id === 'admin' && password === process.env.REACT_APP_ADMIN_PASSWORD) {
      console.log('id : ' + id + ' , pass : ' + password);
      setIsAdmin(true);
      return true;
    }
    return false;
  };
  useEffect(() => {
    console.log('isAdmin은말이지', isAdmin);
  }, [isAdmin]);
  return (
    <AuthContext.Provider value={{ isAdmin, login }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
