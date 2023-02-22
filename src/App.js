import Home from "./pages/home/home";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
