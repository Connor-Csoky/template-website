import React from "react";
import Card from "../../Components/Card";
import "./Signin.css";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="signin-wrapper">
      <Card>
        <h1 className="signin-h1">Sign In</h1>
        <form className="form" action="">
          <div className="form-group">
            <label htmlFor="Username">Username / Email</label>
            <input id="Username" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input id="Password" type="password" />
          </div>
          <input type="submit" />
        </form>
      </Card>
      <div>Need an account? <Link to="/register">Sign Up</Link></div>
    </div>
  );
}
