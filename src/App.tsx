import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra";

export const State = createContext();

function App(): JSX.Element {
  const [id2, setUuid] = useState("lol");
  const prova = "ciao";

  const context = {
    id2,
    setUuid,
    prova,
  };
  console.log("ciao");

  return (
    <Box>
      <State.Provider value={context}>
        <ChakraProvider theme={theme}>
          <Outlet />
        </ChakraProvider>
      </State.Provider>
    </Box>
  );
}

export default App;
