import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <AuthContext.Provider value={{ isAdmin }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
