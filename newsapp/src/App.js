import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Business from "./Components/Business/Business";
import Entertainment from "./Components/Entertainment/Entertainment";
import General from "./Components/General/General";
import Health from "./Components/Health/Health";
import Science from "./Components/Science/Science";
import Sports from "./Components/Sports/Sports";
import Technology from "./Components/Technology/Technology";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Business" element={<Business />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/General" element={<General />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Science" element={<Science />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
