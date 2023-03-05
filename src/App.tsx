import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const State = createContext();

function App(): JSX.Element {
  const [id2, setUuid] = useState("lol");
  const prova = "ciao";

  const context = {
    id2,
    setUuid,
    prova,
  };

  return (
    <div className="w-full">
      <State.Provider value={context}>
        <Outlet />
      </State.Provider>
    </div>
  );
}

export default App;
