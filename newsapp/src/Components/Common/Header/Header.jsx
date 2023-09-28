import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Head from "./Head";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/General">General</Link>
              </li>
              <li>
                <Link to="/Business">Business</Link>
              </li>
              <li>
                <Link to="/Entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/Health">Health</Link>
              </li>
              <li>
                <Link to="/Science">Science</Link>
              </li>
              <li>
                <Link to="/Sports">Sports</Link>
              </li>
              <li>
                <Link to="/Technology">Technology</Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? <CloseIcon></CloseIcon> : <DehazeIcon></DehazeIcon>}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
