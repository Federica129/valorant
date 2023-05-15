import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../src/chakra";
import "../assets/index.css";
import Navbar from "../src/components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// console.log(analytics);

import { GoogleAuthProvider, User } from "firebase/auth";

import { getAuth, signInWithPopup } from "firebase/auth";
import { store } from "../utils/store/store";

const App = ({ Component, pageProps }: AppProps) => {
  initializeApp(firebaseConfig);
  // if (typeof window !== "undefined") {
  //   const analytics = getAnalytics(app);
  // }
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>();
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);

  const signIn = () => signInWithPopup(auth, provider);
  const signOut = () => auth.signOut();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Navbar signIn={signIn} user={user} signOut={signOut} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
