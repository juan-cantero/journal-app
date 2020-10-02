// @ts-nocheck
import AuthTypes from '../types/AuthTypes';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './uiErrorActions';

export const login = (uid, displayName) => ({
  type: AuthTypes.LOGIN,
  payload: {
    uid,
    displayName,
  },
});

export const startLoginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      });
  };
};

export const startRegister = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        login(user.uid, user.displayName);
      });
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logOut());
  };
};

export const logOut = () => ({ type: AuthTypes.LOGOUT });
