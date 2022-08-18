import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.svg";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="title-logo">
        <h1>آتلیه عکاسی</h1>
        <div>
          <img src={logo} />
        </div>
      </div>
      <nav>
        <NavLink activeClassName="active" to="/">
          <i className="fa-solid fa-house-chimney"></i> خانه
        </NavLink>
        <NavLink activeClassName="active" to="/works">
          <i className="fa-solid fa-camera"></i> نمونه کار
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          <i className="fa-solid fa-building"></i> درباره ما
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          <i className="fa-solid fa-envelope"></i> تماس
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
