// src/components/Nav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar3DLogo from "./NavBar3DLogo";

const Nav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "opacity-100" : "opacity-80";

  return (
    <nav className="nav-horizontal">
      {/* Left */}
      <Link to="/" className={`nav-item ${isActive("/")}`}>Home</Link>
      <Link to="/projects" className={`nav-item ${isActive("/projects")}`}>
        Projects
      </Link>

      {/* 3D Logo Center */}
      <NavBar3DLogo />

      {/* Right */}
      <Link to="/skills" className={`nav-item ${isActive("/skills")}`}>
        Skills
      </Link>
      <Link to="/about" className={`nav-item ${isActive("/about")}`}>
        About
      </Link>
      <Link to="/contact" className={`nav-item ${isActive("/contact")}`}>
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
