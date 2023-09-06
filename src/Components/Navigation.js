import React from "react";
import "./Navigation.css";
import { Link, Route, Routes } from "react-router-dom";
import Signin from "../Pages/Signin/Signin";
import Undernav from "./Undernav";
import Home from "../Pages/Home/Home";
import Footer from "./Footer";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <div className="profile-photo">Cool Stuff</div>
        <div className="searchbar-wrapper">
          <input type="search" className="searchbar" />
        </div>
        <div className="nav-right">
          <Link to="/signin">Sign In</Link>
          <div>Cart</div>
        </div>
      </nav>
      <Undernav />

      <Routes>
        <Route path="/" element={<><Home /><Footer /></>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </>
  );
}
