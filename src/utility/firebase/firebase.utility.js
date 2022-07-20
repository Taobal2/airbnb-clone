import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs4IexToQ1f6KIPb4p34tn4KS2HL3Gpbs",
  authDomain: "airbnb-db-b5b51.firebaseapp.com",
  projectId: "airbnb-db-b5b51",
  storageBucket: "airbnb-db-b5b51.appspot.com",
  messagingSenderId: "1032863338520",
  appId: "1:1032863338520:web:a18cd8c9871aaa2c39f36d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_accounts",
});

export const Auth = getAuth();
