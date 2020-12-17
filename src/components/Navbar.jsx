import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="d-flex flex-sm-row flex-column mb-4 border-bottom border-primary align-items-sm-center align-items-start">
      <Link className="nav-link mr-auto" to="/">
        <FaChartLine size="3rem" />
      </Link>
      <Link className="nav-link" to="/crypto">
        Crypto
      </Link>
      <Link className="nav-link" to="/currencies">
        Currencies
      </Link>
      <Link className="nav-link" to="/indexes">
        Indices
      </Link>
      <Link className="nav-link" to="/markets">
        Markets
      </Link>
    </nav>
  );
}
