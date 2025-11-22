// src/components/Nav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Flame, Sword } from "lucide-react";
import NavBar3DLogo from "./NavBar3DLogo";
import { BufferAttribute } from "three";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _BA = BufferAttribute;


interface NavProps {
  cursorType: "brand" | "sword";
  onToggleCursor: () => void;
}

const Nav: React.FC<NavProps> = ({ cursorType, onToggleCursor }) => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "opacity-100" : "opacity-70";

  const isBrand = cursorType === "brand";

  return (
    <nav className="nav-horizontal">

      {/* Left Side Links */}
      <Link to="/" className={`nav-item ${isActive("/")}`}>Home</Link>

      <Link
        to="/projects"
        className={`nav-item ${isActive("/projects")}`}
      >
        Projects
      </Link>

      

      {/* Right Links */}
      <Link
        to="/skills"
        className={`nav-item ${isActive("/skills")}`}
      >
        Skills
      </Link>
      {/* Center 3D Logo */}
      <div className="nav-3d-logo-wrapper">
        <div className="nav-3d-logo-container">
          <NavBar3DLogo />
        </div>
      </div>

      <Link
        to="/about"
        className={`nav-item ${isActive("/about")}`}
      >
        About
      </Link>

      <Link
        to="/contact"
        className={`nav-item ${isActive("/contact")}`}
      >
        Contact
      </Link>

      {/* ⭐ Cursor Toggle Button ⭐ */}
      <button
        className="cursor-toggle-btn"
        onClick={onToggleCursor}
        aria-label="Toggle Cursor"
        title={isBrand ? "Switch to Sword Cursor" : "Switch to Brand Cursor"}
      >
        {isBrand ? (
          <Sword className="cursor-btn-icon" />
        ) : (
          <Flame className="cursor-btn-icon" />
        )}
      </button>

    </nav>
  );
};

export default Nav;
