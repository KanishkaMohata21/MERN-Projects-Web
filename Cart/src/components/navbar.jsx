import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <h3 className="heading">K Cart</h3>
            <ul className="navitems">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
            </ul>
      </div>
    )
}

export default Navbar