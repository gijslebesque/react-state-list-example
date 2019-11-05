import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Go home</Link>
      <Link to="/about">To about</Link>
    </nav>
  );
}
