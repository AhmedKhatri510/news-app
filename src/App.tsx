import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./App.css";
import "./styles/main.scss";
import Listings from "./components/listings/Listings";
import Details from "./components/details/Details";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Listings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
