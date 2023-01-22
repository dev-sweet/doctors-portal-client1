import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// create auth context
export const AuthContext = createContext();

// get auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // create an user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // auth info like state (all authentic information here)
  const authInfo = { createUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
