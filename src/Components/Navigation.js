import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

import Undernav from "./Undernav";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link to="/" className="profile-photo">Cool Stuff</Link>
        <div className="searchbar-wrapper">
          <input type="search" placeholder="Search for items" className="searchbar" />
        </div>
        <div className="nav-right">
          <Link to="/signin">Sign In</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
      <Undernav />
    </>
  );
}
