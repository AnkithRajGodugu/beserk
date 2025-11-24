// src/components/Nav.tsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flame, Sword } from "lucide-react";
import NavBar3DLogo from "./NavBar3DLogo";

interface NavProps {
  cursorType: "brand" | "sword";
  onToggleCursor: () => void;
}

const Nav: React.FC<NavProps> = ({ cursorType, onToggleCursor }) => {
  const location = useLocation();
  const isBrand = cursorType === "brand";

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isActive = (path: string) =>
    location.pathname === path ? "opacity-100" : "opacity-70";

  return (
    <nav className={`nav-horizontal ${isMobile ? "mobile-nav" : ""}`}>
      {/* --- MOBILE: place 3D logo before Home --- */}
      {isMobile && (
        <div className="nav-3d-logo-wrapper mobile-logo-left" aria-hidden>
          <div className="nav-3d-logo-container">
            {/* You can pass props to NavBar3DLogo if you implemented them (modelPath/size) */}
            <NavBar3DLogo />
          </div>
        </div>
      )}

      {/* Left Side Links */}
      <Link to="/" className={`nav-item ${isActive("/")}`}>
        Home
      </Link>

      <Link to="/projects" className={`nav-item ${isActive("/projects")}`}>
        Projects
      </Link>

      <Link to="/skills" className={`nav-item ${isActive("/skills")}`}>
        Skills
      </Link>

      {/* Center 3D Logo (desktop only) */}
      {!isMobile && (
        <div className="nav-3d-logo-wrapper">
          <div className="nav-3d-logo-container">
            <NavBar3DLogo />
          </div>
        </div>
      )}

      {/* Right Nav Items */}
      <Link to="/about" className={`nav-item ${isActive("/about")}`}>
        About
      </Link>

      <Link to="/contact" className={`nav-item ${isActive("/contact")}`}>
        Contact
      </Link>

      {/* Cursor Toggle — Hidden on Mobile */}
      {!isMobile && (
        <button
          className="cursor-toggle-btn"
          onClick={onToggleCursor}
          aria-label="Toggle Cursor"
        >
          {isBrand ? (
            <Sword className="cursor-btn-icon" />
          ) : (
            <Flame className="cursor-btn-icon" />
          )}
        </button>
      )}
    </nav>
  );
};

export default Nav;        className={`nav-item ${isActive("/projects")}`}
      >
        Projects
      </Link>

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

      {/* Right Nav Items */}
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

      {/* Cursor Toggle — Hidden on Mobile */}
      {!isMobile && (
        <button
          className="cursor-toggle-btn"
          onClick={onToggleCursor}
          aria-label="Toggle Cursor"
        >
          {isBrand ? (
            <Sword className="cursor-btn-icon" />
          ) : (
            <Flame className="cursor-btn-icon" />
          )}
        </button>
      )}
    </nav>
  );
};

export default Nav;
