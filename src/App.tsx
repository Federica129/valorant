import { Outlet } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra";
import Navbar from "./components/Navbar/Navbar";

function App(): JSX.Element {
  return (
    <Box>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Outlet />
      </ChakraProvider>
    </Box>
  );
}

export default App;
