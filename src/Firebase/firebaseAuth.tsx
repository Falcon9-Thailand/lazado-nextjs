import React, { useState, useContext, createContext } from "react";
import firebaseConfigure from "src/Firebase/firebaseConfigure";
import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigure);
}

const AuthContext = createContext({});

export const ProviderAuth = ({ children }) => {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useProviderAuth = () => {
  const [user, setUser] = useState<null | object>(null);

  const signin = ({ email, password }) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        return res.user;
      });
  };
  return {
    user,
    signin,
  };
};

export const useAuth = () => useContext(AuthContext);
