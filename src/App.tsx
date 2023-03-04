import Home from "./pages/home/home";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <div className="w-full">
      {/* <QueryClientProvider client={queryClient}> */}
      <Navbar />
      <Outlet />
      {/* </QueryClientProvider>{" "} */}
    </div>
  );
}

export default App;
