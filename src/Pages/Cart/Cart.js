import React from "react";
import Card from "../../Components/Card";
import "../Signin/Signin.css";

export default function Cart() {
  return(
    <div className="signin-wrapper">
      <Card>
        <h1>Your cart is empty.</h1>
      </Card>
    </div>
  )
}