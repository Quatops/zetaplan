import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from 'api/firebase';

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const user_login = (id, password) => {
    const id_email = id + '@admin.com';
    return login(id_email, password);
  };

  const user_logout = () => {
    logout();
  };
  return (
    <AuthContext.Provider
      value={{
        isAdmin: user && user.isAdmin,
        user_login,
        user_logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
