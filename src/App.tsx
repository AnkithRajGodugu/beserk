// src/App.tsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./components/Skills.css"
import "./components/About.css"
import "./components/Contact.css"
import "./components/Projects.css"
import "./components/RuneLayer1.css"
import "./components/CustomCursor.css"
import "./components/BladeScene.css"

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

type CursorType = "brand" | "sword";

const AppContent: React.FC = () => {

  const [cursorType, setCursorType] = useState<CursorType>(() => {
    const saved = localStorage.getItem("cursorType");
    return saved === "sword" ? "sword" : "brand";
  });

  useEffect(() => {
    localStorage.setItem("cursorType", cursorType);
  }, [cursorType]);

  return (
    <div className="app-root min-h-screen relative">

      {/* Cursor */}
      <CustomCursor type={cursorType} />

      {/* Runes Layer */}
      <RuneLayer />

      {/* 3D Blade */}
      <BladeScene glbPath="/models/berserk_blade.glb" />

      {/* TOP NAVBAR */}
      <Nav
  cursorType={cursorType}
  onToggleCursor={() =>
    setCursorType((t) => (t === "brand" ? "sword" : "brand"))
  }
/>


      {/* PAGE ROUTES */}
      <main className="main relative z-20 pt-32">
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
