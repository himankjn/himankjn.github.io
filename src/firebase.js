
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDd-SbqoHWAPnObufA31ZCm8kct2PCp1OM",
  authDomain: "himankportfolio.firebaseapp.com",
  projectId: "himankportfolio",
  storageBucket: "himankportfolio.appspot.com",
  messagingSenderId: "894521398369",
  appId: "1:894521398369:web:2f2ebf31667fb9c70e8620",
  measurementId: "G-6RB4ELFXXK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);