import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      localStorage.clear();
    }
  }, []);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSignin = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.token) {
          localStorage.setItem("token", JSON.stringify(user.token));
          changeRoute();
        }
      });
  };

  const changeRoute = () => {
    navigate("/");
  };

  return (
    <div className="signin-wrapper">
      <Card>
        <h1 className="signin-h1">Sign In</h1>
        <fieldset className="form" action="">
          <div className="form-group">
            <label htmlFor="Username">Username / Email</label>
            <input
              onChange={onEmailChange}
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              onChange={onPasswordChange}
              name="password"
              id="Password"
              type="password"
            />
          </div>
          <input type="submit" onClick={onSignin} />
        </fieldset>
      </Card>
      <div>
        Need an account? <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
}
