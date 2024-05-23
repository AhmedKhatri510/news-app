// components
import Listings from "./modules/listings/Listings";
import Details from "./components/details/Details";

// utils
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// styles
import "./App.css";
import "./styles/main.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 4, // every 4 hours it will refetch
      gcTime: 1000 * 60 * 1, // every hour it will dump the unused cache
    },
  },
});

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div>
          <Routes>
            <Route path="/details" element={<Details />} />
            <Route path="/" element={<Listings />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
