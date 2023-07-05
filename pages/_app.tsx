import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../src/chakra";
import "../assets/index.css";
import Navbar from "../src/components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, User } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { store } from "../utils/store/store";

import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { Router, useRouter } from "next/router";
export const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const firebaseConfig = {
    apiKey: process.env.googleApiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectID,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.senderID,
    appId: process.env.firebaseAppId,
    measurementId: process.env.measurementID,
  };

  initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>();
  const auth = getAuth();

  useEffect(() => {
    if (!user) router.push("/");

    auth.onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, [user]);

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
          <Navbar
            signIn={signIn}
            user={user}
            setUser={setUser}
            signOut={signOut}
          />
          <Component {...pageProps} user={user} signIn={signIn} />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
