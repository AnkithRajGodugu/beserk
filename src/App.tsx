// src/App.tsx
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";
import { Github, Linkedin, Flame, Sword } from "lucide-react";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

// Correct: 3D blade
import BladeScene from "./components/BladeScene";

// Correct: rune aura layer (optional; CSS currently hides for Ultra-Dark stack)
import RuneLayer from "./components/RuneLayer";

// Custom cursor
import CustomCursor from "./components/CustomCursor";
import myIcon from "./assets/my-icon.png";

type CursorType = "brand" | "sword";

interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

const SOCIALS: SocialLinks = {
  github: "https://github.com/ankithrajgodugu",
  linkedin: "https://www.linkedin.com/in/ankith-raj-a90111302/",
  email: "mailto:ankithrajgodugu@gmail",
};

type NavProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  cursorType: CursorType;
  onToggleCursor: () => void;
};

const Nav: React.FC<NavProps> = ({ toggleSidebar, isSidebarOpen, cursorType, onToggleCursor }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const isBrand = cursorType === "brand";

  // click outside sidebar closes it
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (isSidebarOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <>
      <button className="toggle-icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
        <div
          style={{
            backgroundImage: `url(${myIcon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        />
      </button>

      <header className={`header ${isSidebarOpen ? "open" : ""}`} ref={navRef}>
        <nav className="nav-container">
          <Link to="/" className="nav-logo" onClick={toggleSidebar}>
            <span>Ankith Raj Godugu</span>
          </Link>

          <div className="nav-links">
            <Link className="nav-link" to="/projects" onClick={toggleSidebar}>Projects</Link>
            <Link className="nav-link" to="/skills" onClick={toggleSidebar}>Skills</Link>
            <Link className="nav-link" to="/about" onClick={toggleSidebar}>About</Link>
            <Link className="nav-link" to="/contact" onClick={toggleSidebar}>Contact</Link>
          </div>

          <div className="nav-icons flex gap-3">
            <button
              onClick={onToggleCursor}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 bg-white/5"
              title={isBrand ? "Switch to Sword cursor" : "Switch to Brand cursor"}
              aria-label="Toggle cursor"
            >
              {isBrand ? <Sword className="w-4 h-4 text-white" /> : <Flame className="w-4 h-4 text-white" />}
            </button>

            <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="w-5 h-5 text-white" /></a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-white" /></a>
          </div>
        </nav>
      </header>
    </>
  );
};

const AppContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>(() => {
    const saved = localStorage.getItem("cursorType");
    return (saved === "brand" || saved === "sword") ? (saved as CursorType) : "brand";
  });

  const location = useLocation();

  // close sidebar on route change
  useEffect(() => setIsSidebarOpen(false), [location.pathname]);

  // persist cursor preference
  useEffect(() => {
    localStorage.setItem("cursorType", cursorType);
  }, [cursorType]);

  const toggleSidebar = () => setIsSidebarOpen(v => !v);
  const onToggleCursor = () => setCursorType(t => (t === "brand" ? "sword" : "brand"));

  return (
    <div className="app-root min-h-screen relative">
      {/* Custom cursor */}
      <CustomCursor type={cursorType} />

      {/* RUNE + OCCULT BACKDROP LAYER (DOM runes — can be toggled via CSS) */}
      <RuneLayer />

      {/* Blade 3D Scene — pass explicit GLB path (change if you place GLB elsewhere) */}
      <BladeScene glbPath="/models/berserk_blade.glb" />

      {/* UI */}
      <Nav
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        cursorType={cursorType}
        onToggleCursor={onToggleCursor}
      />

    <main className="main relative z-20">
  <div className={`page-section ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</main>


      <footer className="footer relative z-20">© {new Date().getFullYear()} Ankith Raj Godugu</footer>
    </div>
  );
};

const App: React.FC = () => (
  <HelmetProvider>
    <Router>
      <AppContent />
    </Router>
  </HelmetProvider>
);

export default App;
