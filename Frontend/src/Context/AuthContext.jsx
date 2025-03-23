import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    return JSON.parse(localStorage.getItem("chat-user")) || null;
  });

  useEffect(() => {
    if (!authUser) {
      localStorage.removeItem("chat-user"); // Ensure consistency
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
