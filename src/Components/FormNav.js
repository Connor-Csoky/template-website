import React from "react";
import "./Navigation.css"
import { Link } from "react-router-dom";

export default function FormNav() {
  return (
    <div className="form-nav">
      <Link to="/">Cool Stuff</Link>
    </div>
  )
}