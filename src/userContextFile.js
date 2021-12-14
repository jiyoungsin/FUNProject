
import { auth } from "./firebase";
import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";

export const userSession = createContext();
export const UserSessionProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAdmin, setAdmin] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth, theUser => {
        if(theUser && theUser.uid === "ScB5NUIkMWh8MI1H2XECkzVz9r13"){
            setAdmin(true);
        } else {
            setAdmin(false);
        }
        setUser(theUser);
    });
  },[])

  return (
    <userSession.Provider
      value={{ user, isAdmin }}
    >
      {children}
    </userSession.Provider>
  );
};