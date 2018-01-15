import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/css/Header.css";

const Header = () => (
  <div className="Header">
    <h2>Header</h2>
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
