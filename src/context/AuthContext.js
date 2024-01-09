import { createContext, useContext, useEffect, useState } from "react";
import { auth ,db} from "../firebase";
import { setDoc,doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

  const [user, setUser] = useState();

  function singUp(email, password) {
     createUserWithEmailAndPassword(auth, email, password);
     setDoc(doc(db, 'users',email),{
      savedShows:[]
     })
  }

  function logOut() {
    return signOut(auth);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  })



  return (
    <AuthContext.Provider value={{ singUp, user , logIn , logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
