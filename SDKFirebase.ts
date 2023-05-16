// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.googleApiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectID,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.senderID,
  appId: process.env.firebaseAppId,
  measurementId: process.env.measurementID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
