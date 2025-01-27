import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">1stExc</Link> | <Link to="/Day2">2ndExc</Link> | <Link to="/Day3">3rdExc</Link> | <Link to="/Day4">4thExc</Link>
    </nav>
  );
}

export default Navbar;