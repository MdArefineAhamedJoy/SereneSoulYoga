import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)

  const singUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscript = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)    
    });
    return () => {
      return unSubscript();
    };
  }, []);


  console.log(user)

  const authInfo = {
    singUp,
    singIn,
    singInWithGoogle,
    user,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
