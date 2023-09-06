import React from "react";
import "./Navigation.css";
import { Link, Route, Routes } from "react-router-dom";
import Signin from "../Pages/Signin/Signin";
import Cart from "../Pages/Cart/Cart";
import Undernav from "./Undernav";
import Home from "../Pages/Home/Home";
import Footer from "./Footer";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link to="/" className="profile-photo">Cool Stuff</Link>
        <div className="searchbar-wrapper">
          <input type="search" className="searchbar" />
        </div>
        <div className="nav-right">
          <Link to="/signin">Sign In</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
      <Undernav />

      <Routes>
        <Route path="/" element={<><Home /><Footer /></>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}
