import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="heading">K Blogs</h3>
      <ul className="navitems">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
