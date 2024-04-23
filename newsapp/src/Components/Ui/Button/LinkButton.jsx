import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LinkButton.css";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className="back" onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className="back">
      {children}
    </Link>
  );
}
