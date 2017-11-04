import React from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";

const NavMenu = (props) => (
  <div className="navMenu">
    <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Sarah Lessner
          </Link>
        </div>

      <div className="navbarMenu">
        <Link to="/projects" className="navbar-brand">
          Projects
        </Link>
        <Link to="/bio" className="navbar-brand">
          Bio
        </Link>
        <Link to="/contact" className="navbar-brand">
          Contact
        </Link>
      </div>
    </nav>
  </div>
);

export default NavMenu;
