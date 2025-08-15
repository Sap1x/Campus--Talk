// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0KiL2dM0U3MmYurfZZULePOpkBt_lxgE",
  authDomain: "campus--talk.firebaseapp.com",
  projectId: "campus--talk",
  storageBucket: "campus--talk.appspot.com",
  messagingSenderId: "784238062981",
  appId: "1:784238062981:web:e62281ca2b4143025ee8ec",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();