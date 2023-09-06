import React from "react";
import Card from "../../Components/Card";
import "../Signin/Signin.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="signin-wrapper">
      <Card>
        <h1 className="signin-h1">Register</h1>
        <form className="form" action="">
          <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input id="Username" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input id="Email" type="email" />
          </div>
          <div className="password-wrapper">
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input id="Password" type="password" />
            </div>
            <div className="form-group">
              <label htmlFor="Password-Verifcation">Confirm Password</label>
              <input id="Password-Verifcation" type="password" />
            </div>
          </div>
          <input type="submit" />
        </form>
      </Card>
      <div>Already have an account? <Link to="/signin">Sign In</Link></div>
    </div>
  )
}