import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";

// Action Creators
const signUpSuccess = () => ({ type: "SIGN_UP" });

const signInSuccess = (user) => ({
  type: "SIGN_IN",
  payload: user,
});

const signOutSuccess = () => ({ type: "SIGN_OUT" });

const errorMessage = (msg) => ({
  type: "ERROR",
  payload: msg,
});

// Async Actions
export const signUpAsync = (data) => {
  return async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredential.user)
      dispatch(signUpSuccess());
    } catch (err) {
      dispatch(errorMessage(err.message));
    }
  };
};

export const signInAsync = (data) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(signInSuccess(user));
    } catch (err) {
      dispatch(errorMessage(err.message));
    }
  };
};

export const logOutAsync = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      dispatch(signOutSuccess());
    } catch (err) {
      dispatch(errorMessage(err.message));
    }
  };
};
