// src/components/OrbitalNav.tsx
import React from "react";
import { Link } from "react-router-dom";

import {
  Home,
  FolderKanban,
  Trophy,
  User,
  Mail,
  Sparkles,
} from "lucide-react";

interface OrbitalNavProps {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onCursorToggle: () => void;
}

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: <Home className="icon" /> },
  { path: "/projects", label: "Projects", icon: <FolderKanban className="icon" /> },
  { path: "/skills", label: "Skills", icon: <Trophy className="icon" /> },
  { path: "/about", label: "About", icon: <User className="icon" /> },
  { path: "/contact", label: "Contact", icon: <Mail className="icon" /> },
];

const OrbitalNav: React.FC<OrbitalNavProps> = ({
  open,
  onToggle,
  onClose,
  onCursorToggle,
}) => {
  return (
    <div className={`orbital-wrapper ${open ? "open" : ""}`}>
      
      {/* Center Button (Molten Ember Core) */}
      <div className="orbital-center" onClick={onToggle}>
        <div className="ember-core"></div>
      </div>

      {/* Orbiting Menu Items */}
      <div className="orbital-items">
        {NAV_ITEMS.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            data-index={index}
            className="orbital-item"
            onClick={onClose}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}

        {/* Cursor Toggle Button (Bonus Orbit Item) */}
        <button
          className="orbital-item cursor-toggle-btn"
          data-index={5}
          onClick={onCursorToggle}
        >
          <Sparkles className="icon" />
          <span>Cursor</span>
        </button>
      </div>
    </div>
  );
};

export default OrbitalNav;
