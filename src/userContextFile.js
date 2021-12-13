
import { signInWithEmailAndPassword, signOut, getAuth } from "@firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";

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

    const login = async (email, password) =>{
        console.log("@@@@@");
        await signInWithEmailAndPassword(auth, email, password);
        const theUser = await getAuth().currentUser;
        setUser(theUser);
    }

  const signUserOut = async () => {
    await signOut(auth).then(() => {
      console.log("successfully Signed Out!")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  };

  return (
    <userSession.Provider
      value={{ user, setUser, signUserOut, login, isAdmin }}
    >
      {children}
    </userSession.Provider>
  );
};