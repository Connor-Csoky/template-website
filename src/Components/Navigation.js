import {React, useEffect} from "react";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";

import Undernav from "./Undernav";

export default function Navigation({search}) {

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      fetch("http://localhost:3000", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        auth: JSON.parse(loggedInUser)
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data.authenticate === false){
        localStorage.clear();
        navigate("/signin");
      }
    })
    }
  }, [navigate]);

  return (
    <>
      <nav className="navigation">
        <Link to="/" className="profile-photo">Cool Stuff</Link>
        <div className="searchbar-wrapper">
          <input type="search" onChange={search} placeholder="Search for items" className="searchbar" />
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
