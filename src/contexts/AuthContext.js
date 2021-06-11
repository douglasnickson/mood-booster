import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { auth } from '../config/firebase';

const Context = React.createContext();

export function useAuth() {
  return useContext(Context);
}

export function AuthContext({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email, password) {
    return auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => auth.signInWithEmailAndPassword(email, password));
  }

  function logOut() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscriber;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  return (
    <>
      <Context.Provider value={value}>{!loading && children}</Context.Provider>
    </>
  );
}

AuthContext.propTypes = {
  children: PropTypes.element,
};

AuthContext.defaultProps = {
  children: PropTypes.element,
};
