import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import InfoChamp from "./pages/infoChamp/infoChamp";
import ErrorPage from "./pages/errorPage/errorPage";

import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar/Navbar";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { theme } from "./chakra";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:nameChamp",
    element: <InfoChamp />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
