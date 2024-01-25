import "./App.css";
import Header from "./Components/Common/Header/Header";
import General from "./Components/Common/General/General";
import Health from "./Components/Common/Health/Health";
import Science from "./Components/Common/Science/Science";
import Sports from "./Components/Common/Sports/Sports";
import Technology from "./Components/Common/Technology/Technology";
import SearchResult from "./Components/Common/SearchByWord/SearchResult";
import Homepage from "./Components/Home/Homepage";
import Footer from "./Components/Home/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsByCategory from "./Components/Common/NewsByCategory/NewsByCategory";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Business"
            element={<NewsByCategory category={"Business"} />}
          />
          <Route
            path="/Entertainment"
            element={<NewsByCategory category={"Entertainment"} />}
          />
          <Route path="/General" element={<General />} />
          <Route
            path="/Health"
            element={<NewsByCategory category={"Health"} />}
          />
          <Route
            path="/Science"
            element={<NewsByCategory category={"Science"} />}
          />
          <Route
            path="/Sports"
            element={<NewsByCategory category={"Sports"} />}
          />
          <Route
            path="/Technology"
            element={<NewsByCategory category={"Technology"} />}
          />
          <Route path="/Search" element={<SearchResult />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
