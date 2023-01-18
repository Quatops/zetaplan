import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from 'api/firebase';

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => setUser(user));
    console.log('안녕', user);
  }, []);

  const user_login = (id, password) => {
    const id_email = id + '@admin.com';
    return login(id_email, password);
  };
  return (
    <AuthContext.Provider
      value={{ isAdmin: user ? user.isAdmin : false, user_login }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
