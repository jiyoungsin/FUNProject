import React, { useEffect, useState } from 'react';
import { auth, db } from "../firebase";
import { setDoc, doc } from "@firebase/firestore";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";


export default function useAuth() {
    const [user, setUser] = useState({});
    const [err, setErr] = useState();
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

    const signUpWithEmailPassword = async (data) => {
        try {
            const newUser = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            const firstName = data.first_name.charAt(0).toUpperCase() + data.first_name.slice(1);
            const lastName = data.last_name.charAt(0).toUpperCase() + data.last_name.slice(1);
          
            await setDoc(doc(db, "users", newUser.user.uid), {
                fName: firstName,
                lName: lastName,
                email: data.email
            });
        } catch (error) {
            setErr(error.message);
            console.log("Error while creating user: " + error);
        }
    };

    const signUserOut = async () => {
        await signOut(auth).then(() => {
          console.log("successfully Signed Out!")
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          console.log("Error happened while signing out: " + error);
        });
    };

    const login = async (email, password) =>{
        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setErr(error.message);
            console.log("Error while logging in user: " + error);
        }
    }

    return { login, signUserOut, signUpWithEmailPassword, err, user, isAdmin };
}
