import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav mb-4 border-bottom border-primary justify-content-end">
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
