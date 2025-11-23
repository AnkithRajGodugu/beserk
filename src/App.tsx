// src/App.tsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

// Global CSS
import "./App.css";
import "./components/Skills.css";
import "./components/About.css";
import "./components/Contact.css";
import "./components/Projects.css";
import "./components/RuneLayer1.css";
import "./components/CustomCursor.css";
import "./components/BladeScene.css";
import "./components/Nav.css"

// Pages
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

// Visual FX
import CustomCursor from "./components/CustomCursor";
import RuneLayer from "./components/RuneLayer";
import BladeScene from "./components/BladeScene";
import Nav from "./components/Nav";
import GLBLoader from "./components/GLBLoader";

type CursorType = "brand" | "sword";

/* ------------------------------
   LOADER that shows on route change
------------------------------ */

import { initAntiInspect } from "./utils/AntiInspect";

const RouteLoader: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // When route changes → show loader
    setLoading(true);

    const t = setTimeout(() => {
      setLoading(false);
    }, 1100); // smooth fade timing

    return () => clearTimeout(t);
  }, [location.pathname]);

  return loading ? <GLBLoader modelUrl="/models/face.glb" size={1.2} /> : null;
};

/* ------------------------------ */

const AppContent: React.FC = () => {
  const [cursorType, setCursorType] = useState<CursorType>(() => {
    const saved = localStorage.getItem("cursorType");
    return saved === "sword" ? "sword" : "brand";
  });
  
useEffect(() => {
  initAntiInspect();
}, []);


  useEffect(() => {
    localStorage.setItem("cursorType", cursorType);
  }, [cursorType]);

  return (
    <div className="app-root min-h-screen relative">
      {/* Custom Cursor */}
      <CustomCursor type={cursorType} />

      {/* Runes Background */}
      <RuneLayer />

      {/* 3D Blade */}
      <BladeScene glbPath="/models/berserk_blade.glb" />

      {/* Navigation */}
      <Nav
        cursorType={cursorType}
        onToggleCursor={() =>
          setCursorType((t) => (t === "brand" ? "sword" : "brand"))
        }
      />

      {/* Route Loading GLB Animation */}
      <RouteLoader />

      {/* Page Routes */}
      <main className="main relative z-20 pt-10 md:pt-14">
        <div className="page-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <footer className="footer relative z-20 text-center py-6 opacity-70">
        © {new Date().getFullYear()} Ankith Raj Godugu
      </footer>
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
