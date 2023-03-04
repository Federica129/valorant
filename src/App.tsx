import Home from "./pages/home/home";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar/Navbar";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        <Navbar />
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
