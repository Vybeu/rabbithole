// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: process.env.REACT_APP_AD_KEY,
  projectId: process.env.REACT_APP_P_ID,
  storageBucket: process.env.REACT_APP_SB_ID,
  messagingSenderId: process.env.REACT_APP_MS_ID,
  appId: process.env.REACT_APP_A_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();