import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h1>PROJECTS</h1>
      <div className="projectNum">
        <Link to="/Project1">Project1</Link>
        <Link to="/Project2">Project2</Link>
        <Link to="/Project3">Project3</Link>
      </div>
    </div>
  );
}
