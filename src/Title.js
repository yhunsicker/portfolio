import React from "react";
import { Link } from "react-router-dom";
import logo from "./yuli-logo.jpg";
import "./title.css";

function Title(props) {
  return (
    <Link to="/" className="title">
      <img src={logo} className="logo" alt="logo.jpg"></img>
      <div>Yu-Li Hunsicker | UX/UI Designer</div>
    </Link>
  );
}

export default Title;
