import "./App.css";
import Header from "./Components/Common/Header/Header";
import Business from "./Components/Common/Business/Business";
import Entertainment from "./Components/Common/Entertainment/Entertainment";
import General from "./Components/Common/General/General";
import Health from "./Components/Common/Health/Health";
import Science from "./Components/Common/Science/Science";
import Sports from "./Components/Common/Sports/Sports";
import Technology from "./Components/Common/Technology/Technology";
import Homepage from "./Components/Home/Homepage";
import Footer from "./Components/Home/Footer/Footer";
import SearchResult from "./Components/Common/SearchByWord/SearchResult";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/General" element={<General />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Science" element={<Science />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Search" element={<SearchResult />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
