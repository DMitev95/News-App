import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Head from "./Head";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import SearchForm from "../SearchByWord/SearchForm";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head />
      <header className="home-header">
        <nav
          className={navbar ? "navbar-active" : "navbar"}
          onClick={() => setNavbar(false)}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/General">General</NavLink>
          <NavLink to="/Business">Business</NavLink>
          <NavLink to="/Entertainment">Entertainment</NavLink>
          <NavLink to="/Health">Health</NavLink>
          <NavLink to="/Science">Science</NavLink>
          <NavLink to="/Sports">Sports</NavLink>
          <NavLink to="/Technology">Technology</NavLink>
        </nav>
        <div className="search-form">
          <i className="menu-icon" onClick={() => setNavbar(!navbar)}>
            {navbar ? <CloseIcon></CloseIcon> : <DehazeIcon></DehazeIcon>}
          </i>
          <SearchForm />
        </div>
      </header>
    </>
  );
};

export default Header;
