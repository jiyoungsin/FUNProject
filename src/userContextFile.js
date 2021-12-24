
import React, { createContext } from "react";
import useAuth from './Utils/useAuth';


export const userSession = createContext();
export const UserSessionProvider = ({ children }) => {
  const auth = useAuth();

  return (
    <userSession.Provider value={auth}>
      {children}
    </userSession.Provider>
  );
};