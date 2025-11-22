// src/components/OrbitalMenu.tsx
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FolderKanban, Cog, User, Mail } from "lucide-react";

const navItems = [
  { label: "Home", icon: <Home />, to: "/" },
  { label: "Projects", icon: <FolderKanban />, to: "/projects" },
  { label: "Skills", icon: <Cog />, to: "/skills" },
  { label: "About", icon: <User />, to: "/about" },
  { label: "Contact", icon: <Mail />, to: "/contact" },
];

const OrbitalMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  // close wheel on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // cursor-follow logic (ONLY when closed)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (open) return; // wheel open → stop following
      if (!wrapperRef.current) return;
      wrapperRef.current.style.left = `${e.clientX + 20}px`;
      wrapperRef.current.style.top = `${e.clientY + 20}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className={`orbital-wrapper ${open ? "open" : ""}`}
    >
      {/* Center Ember Core Button */}
      <div
        className="orbital-center"
        onClick={() => setOpen(!open)}
        aria-label="Menu toggle"
      >
        <div className="ember-core" />
      </div>

      {/* Orbiting nav items */}
      <div className="orbital-items">
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="orbital-item"
            data-index={i}
            onClick={() => setOpen(false)}
          >
            <div className="icon">{item.icon}</div>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrbitalMenu;
