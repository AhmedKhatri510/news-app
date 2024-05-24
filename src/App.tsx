import { useState } from "react";

// components
import Listings from "./modules/listings/Listings";
import Details from "./components/details/Details";

// context
import NewsContext from "./context/NewsContext";

// types
import { NewsDetails } from "./modules/listings/types/type";

// utils
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// styles
import "./App.scss";
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
  const [newsCardDetails, setNewsCardDetails] = useState<null | NewsDetails>(
    null
  );
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <NewsContext.Provider value={{ newsCardDetails, setNewsCardDetails }}>
          <div>
            <Routes>
              <Route path="/details" element={<Details />} />
              <Route path="/" element={<Listings />} />
            </Routes>
          </div>
        </NewsContext.Provider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
