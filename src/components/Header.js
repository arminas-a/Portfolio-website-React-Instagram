import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/css/Global.css";
import "./styles/css/Header.css";

const Header = () => (
  <div className="header">
    <NavLink exact to="/" activeClassName="active">
      <h6 className="logo">Header</h6>
    </NavLink>
    <ul className="nav">
      <li className="nav-item">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Services" activeClassName="active">
          Services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/About" activeClassName="active">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
