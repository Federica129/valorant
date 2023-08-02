import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.googleApiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectID,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.senderID,
  appId: process.env.firebaseAppId,
  measurementId: process.env.measurementID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const SignIn = () => signInWithPopup(auth, provider);
export const SignOut = () => auth.signOut();
