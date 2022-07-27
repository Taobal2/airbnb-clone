import React, { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListner,
  createUserDocFromAuth,
} from "./../utility/firebase/firebase.utility";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const stopListening = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
      // console.log(user);
    });
    return stopListening;
  }, []);

  return <UserContext.Provider value={value}>{children} </UserContext.Provider>;
};
