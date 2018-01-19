import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/css/Global.css";
import "./styles/css/Header.css";

const Header = () => (
  <div className="Header">
      <NavLink exact to="/" activeClassName="active">
        <h6 className="Logo">Header</h6>
      </NavLink>
    <ul className="Nav">
      <li className="Nav-item">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="Nav-item">
        <NavLink to="/Services" activeClassName="active">
          Services
        </NavLink>
      </li>
      <li className="Nav-item">
        <NavLink to="/About" activeClassName="active">
          About
        </NavLink>
      </li>
      <li className="Nav-item">
        <NavLink to="/Contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
