// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Camera, Github, Linkedin, Moon, Sun } from "lucide-react";
// import { HelmetProvider } from "react-helmet-async";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import "./App.css";
// import Home from "./components/Home";
// import Portfolio from "./components/portfolio";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Contact from "./components/Contact";

// interface SocialLinks {
//   github: string;
//   linkedin: string;
//   email: string;
// }

// const SOCIALS: SocialLinks = {
//   github: "https://github.com/ankithrajgodugu",
//   linkedin: "https://www.linkedin.com/in/ankith-raj-a90111302/",
//   email: "mailto:ankithrajgodugu@gmail.com",
// };

// const Nav: React.FC<{ toggleTheme: () => void; isDark: boolean }> = ({ toggleTheme, isDark }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="header">
//       <nav className="nav-container">
//         <a href="/" className="nav-logo">
//           <Camera className="w-5 h-5" />
//           <span>Ankith Raj Godugu</span>
//         </a>
//         <div className="nav-links">
//           <a className="nav-link" href="/portfolio">Portfolio</a>
//           <a className="nav-link" href="/projects">Projects</a>
//           <a className="nav-link" href="/skills">Skills</a>
//           <a className="nav-link" href="/about">About</a>
//           <a className="nav-link" href="/contact">Contact</a>
//         </div>
//         <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
//           <svg viewBox="0 0 24 24" className="w-6 h-6">
//             <path
//               fill="currentColor"
//               d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//         <div className="nav-icons">
//           <button onClick={toggleTheme} aria-label="Toggle theme">
//             {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           </button>
//           <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
//             <Github className="w-5 h-5" />
//           </a>
//           <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
//             <Linkedin className="w-5 h-5" />
//           </a>
//         </div>
//       </nav>
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className={isMenuOpen ? "mobile-menu" : "mobile-menu hidden"}
//       >
//         <a className="mobile-link" href="/portfolio" onClick={toggleMenu}>Portfolio</a>
//         <a className="mobile-link" href="/projects" onClick={toggleMenu}>Projects</a>
//         <a className="mobile-link" href="/skills" onClick={toggleMenu}>Skills</a>
//         <a className="mobile-link" href="/about" onClick={toggleMenu}>About</a>
//         <a className="mobile-link" href="/contact" onClick={toggleMenu}>Contact</a>
//       </motion.div>
//     </header>
//   );
// };

// const App: React.FC = () => {
//   const [isDark, setIsDark] = useState<boolean>(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme === 'dark';
//   });

//   useEffect(() => {
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   // Generate multiple particles for a dynamic background
//   const particles = Array.from({ length: 5 }, (_, index) => (
//     <div
//       key={index}
//       className="background-particle"
//       style={{
//         width: `${Math.random() * 20 + 10}px`, // Random size between 10px and 30px
//         height: `${Math.random() * 20 + 10}px`, // Random size between 10px and 30px
//         left: `${Math.random() * 100}vw`, // Random horizontal starting position
//         top: `${Math.random() * 100}vh`, // Random vertical starting position
//       }}
//     />
//   ));

//   return (
//     <HelmetProvider>
//       <Router>
//         <div className={isDark ? "dark" : ""}>
//           <main className="main">
//             <div className="background-animation">
//               {particles}
//             </div>
//             <Nav toggleTheme={toggleTheme} isDark={isDark} />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/portfolio" element={<Portfolio />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/skills" element={<Skills />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//             <footer className="footer">
//               © {new Date().getFullYear()} Ankith Raj Godugu
//             </footer>
//           </main>
//         </div>
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;



// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Camera, Github, Linkedin, Moon, Sun } from "lucide-react";
// import { HelmetProvider } from "react-helmet-async";
// import "./App.css";
// import Home from "./components/Home";
// import Portfolio from "./components/portfolio";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Contact from "./components/Contact";

// interface SocialLinks {
//   github: string;
//   linkedin: string;
//   email: string;
// }

// const SOCIALS: SocialLinks = {
//   github: "https://github.com/ankithrajgodugu",
//   linkedin: "https://www.linkedin.com/in/ankith-raj-a90111302/",
//   email: "mailto:ankithrajgodugu@gmail.com",
// };

// const Nav: React.FC<{ toggleTheme: () => void; isDark: boolean }> = ({ toggleTheme, isDark }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="header">
//       <nav className="nav-container">
//         <a href="/" className="nav-logo">
//           <Camera className="w-5 h-5" />
//           <span>Ankith Raj Godugu</span>
//         </a>
//         <div className="nav-links">
//           <a className="nav-link" href="/portfolio">Portfolio</a>
//           <a className="nav-link" href="/projects">Projects</a>
//           <a className="nav-link" href="/skills">Skills</a>
//           <a className="nav-link" href="/about">About</a>
//           <a className="nav-link" href="/contact">Contact</a>
//         </div>
//         <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
//           <svg viewBox="0 0 24 24" className="w-6 h-6">
//             <path
//               fill="currentColor"
//               d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//         <div className="nav-icons">
//           <button onClick={toggleTheme} aria-label="Toggle theme">
//             {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           </button>
//           <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
//             <Github className="w-5 h-5" />
//           </a>
//           <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
//             <Linkedin className="w-5 h-5" />
//           </a>
//         </div>
//       </nav>
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className={isMenuOpen ? "mobile-menu" : "mobile-menu hidden"}
//       >
//         <a className="mobile-link" href="/portfolio" onClick={toggleMenu}>Portfolio</a>
//         <a className="mobile-link" href="/projects" onClick={toggleMenu}>Projects</a>
//         <a className="mobile-link" href="/skills" onClick={toggleMenu}>Skills</a>
//         <a className="mobile-link" href="/about" onClick={toggleMenu}>About</a>
//         <a className="mobile-link" href="/contact" onClick={toggleMenu}>Contact</a>
//       </motion.div>
//     </header>
//   );
// };

// const App: React.FC = () => {
//   const [isDark, setIsDark] = useState<boolean>(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme === 'dark';
//   });

//   useEffect(() => {
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   // Generate a mix of leaves and dust particles
//   const particles = Array.from({ length: 10 }, (_, index) => {
//     const isLeaf = Math.random() > 0.5; // 50% chance for leaf or dust
//     return (
//       <div
//         key={index}
//         className={`${isLeaf ? 'leaf-particle' : 'dust-particle'} background-particle`}
//         style={{
//           width: `${isLeaf ? Math.random() * 20 + 15 : Math.random() * 10 + 5}px`, // Leaves: 15-35px, Dust: 5-15px
//           height: `${isLeaf ? Math.random() * 30 + 20 : Math.random() * 10 + 5}px`, // Leaves: 20-50px, Dust: 5-15px
//           left: `${Math.random() * 100}vw`,
//           top: `${Math.random() * 100}vh`,
//         }}
//       />
//     );
//   });

//   return (
//     <HelmetProvider>
//       <Router>
//         <div className={isDark ? "dark" : ""}>
//           <div className="background-animation min-h-screen">
//             {particles}
//             <main className="main">
//               <Nav toggleTheme={toggleTheme} isDark={isDark} />
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/portfolio" element={<Portfolio />} />
//                 <Route path="/projects" element={<Projects />} />
//                 <Route path="/skills" element={<Skills />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//               </Routes>
//             </main>
//             <footer className="footer">
//               © {new Date().getFullYear()} Ankith Raj Godugu
//             </footer>
//           </div>
//         </div>
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;






// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Camera, Github, Linkedin, Moon, Sun } from "lucide-react";
// import { HelmetProvider } from "react-helmet-async";
// import "./App.css";
// import Home from "./components/Home";
// import Portfolio from "./components/portfolio";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Contact from "./components/Contact";

// interface SocialLinks {
//   github: string;
//   linkedin: string;
//   email: string;
// }

// const SOCIALS: SocialLinks = {
//   github: "https://github.com/ankithrajgodugu",
//   linkedin: "https://www.linkedin.com/in/ankith-raj-a90111302/",
//   email: "mailto:ankithrajgodugu@gmail.com",
// };

// const Nav: React.FC<{ toggleTheme: () => void; isDark: boolean }> = ({ toggleTheme, isDark }) => {
//   return (
//     <header className="header">
//       <nav className="nav-container">
//         <a href="/" className="nav-logo">
//           <Camera className="w-5 h-5" />
//           <span>Ankith Raj Godugu</span>
//         </a>
//         <div className="nav-links">
//           <a className="nav-link" href="/portfolio">Portfolio</a>
//           <a className="nav-link" href="/projects">Projects</a>
//           <a className="nav-link" href="/skills">Skills</a>
//           <a className="nav-link" href="/about">About</a>
//           <a className="nav-link" href="/contact">Contact</a>
//         </div>
//         <div className="nav-icons">
//           <button onClick={toggleTheme} aria-label="Toggle theme">
//             {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-900" />}
//           </button>
//           <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
//             <Github className="w-5 h-5 text-white dark:text-gray-900" />
//           </a>
//           <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
//             <Linkedin className="w-5 h-5 text-white dark:text-gray-900" />
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// const App: React.FC = () => {
//   const [isDark, setIsDark] = useState<boolean>(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme === 'dark' || savedTheme === null; // Default to red-black if no theme set
//   });

//   useEffect(() => {
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     document.documentElement.classList.toggle('dark', isDark);
//     const background = document.querySelector('.background-animation') as HTMLDivElement;
//     if (background) {
//       background.classList.toggle('theme-grey-white', !isDark);
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   // Generate a mix of leaves and dust particles
//   const particles = Array.from({ length: 10 }, (_, index) => {
//     const isLeaf = Math.random() > 0.5; // 50% chance for leaf or dust
//     return (
//       <div
//         key={index}
//         className={`${isLeaf ? 'leaf-particle' : 'dust-particle'} background-particle`}
//         style={{
//           width: `${isLeaf ? Math.random() * 20 + 15 : Math.random() * 10 + 5}px`, // Leaves: 15-35px, Dust: 5-15px
//           height: `${isLeaf ? Math.random() * 30 + 20 : Math.random() * 10 + 5}px`, // Leaves: 20-50px, Dust: 5-15px
//           left: `${Math.random() * 100}vw`,
//           top: `${Math.random() * 100}vh`,
//         }}
//       />
//     );
//   });

//   return (
//     <HelmetProvider>
//       <Router>
//         <div>
//           <div className="background-animation min-h-screen">
//             {particles}
//             <Nav toggleTheme={toggleTheme} isDark={isDark} />
//             <main className="main">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/portfolio" element={<Portfolio />} />
//                 <Route path="/projects" element={<Projects />} />
//                 <Route path="/skills" element={<Skills />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//               </Routes>
//             </main>
//             <footer className="footer">
//               © {new Date().getFullYear()} Ankith Raj Godugu
//             </footer>
//           </div>
//         </div>
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;


// src/App.tsx
// import React, { useState, useEffect, useRef } from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";
// import { Github, Linkedin } from "lucide-react";
// import { HelmetProvider } from "react-helmet-async";
// import "./App.css";

// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Contact from "./components/Contact";

// import myIcon from "./assets/my-icon.png";

// interface SocialLinks {
//   github: string;
//   linkedin: string;
//   email: string;
// }

// const SOCIALS: SocialLinks = {
//   github: "https://github.com/ankithrajgodugu",
//   linkedin: "https://www.linkedin.com/in/ankith-raj-a90111302/",
//   email: "mailto:ankithrajgodugu@gmail.com",
// };

// type NavProps = {
//   toggleSidebar: () => void;
//   isSidebarOpen: boolean;
// };

// const Nav: React.FC<NavProps> = ({ toggleSidebar, isSidebarOpen }) => {
//   const navRef = useRef<HTMLDivElement>(null);

//   // Close when clicking outside the sidebar
//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       if (isSidebarOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
//         toggleSidebar();
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isSidebarOpen, toggleSidebar]);

//   return (
//     <>
//       <button className="toggle-icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
//         <div
//           style={{
//             backgroundImage: `url(${myIcon})`,
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       </button>

//       <header className={`header ${isSidebarOpen ? "open" : ""}`} ref={navRef}>
//         <nav className="nav-container">
//           <Link to="/" className="nav-logo" onClick={toggleSidebar} aria-label="Go to home">
//             <span>Ankith Raj Godugu</span>
//           </Link>

//           <div className="nav-links">
//             <Link className="nav-link" to="/projects" onClick={toggleSidebar}>
//               Projects
//             </Link>
//             <Link className="nav-link" to="/skills" onClick={toggleSidebar}>
//               Skills
//             </Link>
//             <Link className="nav-link" to="/about" onClick={toggleSidebar}>
//               About
//             </Link>
//             <Link className="nav-link" to="/contact" onClick={toggleSidebar}>
//               Contact
//             </Link>
//           </div>

//           <div className="nav-icons">
//             <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
//               <Github className="w-5 h-5 text-white" />
//             </a>
//             <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
//               <Linkedin className="w-5 h-5 text-white" />
//             </a>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// const AppContent: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   // Close sidebar on route change
//   useEffect(() => {
//     setIsSidebarOpen(false);
//   }, [location.pathname]);

//   const toggleSidebar = () => setIsSidebarOpen((v) => !v);

//   // Cursor-tracked highlight for .hero-button / .form-button / .about-button
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const buttons = document.querySelectorAll<HTMLElement>(".hero-button, .form-button, .about-button");
//       if (!buttons.length) return;
//       buttons.forEach((btn) => {
//         const r = btn.getBoundingClientRect();
//         btn.style.setProperty("--x", `${e.clientX - r.left}px`);
//         btn.style.setProperty("--y", `${e.clientY - r.top}px`);
//       });
//     };
//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, [location.pathname]);

//   // Floating background particles
//   const particles = Array.from({ length: 5 }, (_, index) => {
//     const isLeaf = Math.random() > 0.5;
//     return (
//       <div
//         key={index}
//         className={`${isLeaf ? "leaf-particle" : "dust-particle"} background-particle`}
//         style={{
//           width: `${isLeaf ? Math.random() * 20 + 15 : Math.random() * 10 + 5}px`,
//           height: `${isLeaf ? Math.random() * 30 + 20 : Math.random() * 10 + 5}px`,
//           left: `${Math.random() * 100}vw`,
//           top: `${Math.random() * 100}vh`,
//         }}
//       />
//     );
//   });

//   return (
//     <div className="background-animation min-h-screen relative">
//       {particles}
//       <Nav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//       <main className={`main ${isSidebarOpen ? "sidebar-open" : ""}`}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <footer className="footer">© {new Date().getFullYear()} Ankith Raj Godugu</footer>
//     </div>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <HelmetProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;


// import React, { useState, useEffect, useRef } from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";
// import { Github, Linkedin } from "lucide-react";
// import { HelmetProvider } from "react-helmet-async";
// import "./App.css";

// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Contact from "./components/Contact";

// import myIcon from "./assets/my-icon.png";

// interface SocialLinks {
//   github: string;
//   linkedin: string;
//   email: string;
// }

// const SOCIALS: SocialLinks = {
//   github: "https://github.com/ankithrajgodugu",
//   linkedin: "https://www.linkedin.com/in/ankith-raj-a90111302/",
//   email: "mailto:ankithrajgodugu@gmail.com",
// };

// type NavProps = {
//   toggleSidebar: () => void;
//   isSidebarOpen: boolean;
// };

// const Nav: React.FC<NavProps> = ({ toggleSidebar, isSidebarOpen }) => {
//   const navRef = useRef<HTMLDivElement>(null);

//   // Close when clicking outside the sidebar
//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       if (isSidebarOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
//         toggleSidebar();
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isSidebarOpen, toggleSidebar]);
//   useEffect(() => {
//   const onMove = (e: MouseEvent) => {
//     document.querySelectorAll<HTMLElement>(".project-card").forEach(card => {
//       const r = card.getBoundingClientRect();
//       card.style.setProperty("--x", `${e.clientX - r.left}px`);
//       card.style.setProperty("--y", `${e.clientY - r.top}px`);
//     });
//   };
//   document.addEventListener("mousemove", onMove);
//   return () => document.removeEventListener("mousemove", onMove);
// }, []);


//   return (
//     <>
//       <button className="toggle-icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
//         <div
//           style={{
//             backgroundImage: `url(${myIcon})`,
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       </button>

//       <header className={`header ${isSidebarOpen ? "open" : ""}`} ref={navRef}>
//         <nav className="nav-container">
//           <Link to="/" className="nav-logo" onClick={toggleSidebar} aria-label="Go to home">
//             <span>Ankith Raj Godugu</span>
//           </Link>

//           <div className="nav-links">
//             <Link className="nav-link" to="/projects" onClick={toggleSidebar}>Projects</Link>
//             <Link className="nav-link" to="/skills" onClick={toggleSidebar}>Skills</Link>
//             <Link className="nav-link" to="/about" onClick={toggleSidebar}>About</Link>
//             <Link className="nav-link" to="/contact" onClick={toggleSidebar}>Contact</Link>
//           </div>

//           <div className="nav-icons">
//             <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
//               <Github className="w-5 h-5 text-white" />
//             </a>
//             <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
//               <Linkedin className="w-5 h-5 text-white" />
//             </a>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// const AppContent: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   // Close sidebar on route change
//   useEffect(() => {
//     setIsSidebarOpen(false);
//   }, [location.pathname]);

//   const toggleSidebar = () => setIsSidebarOpen((v) => !v);

//   // Cursor-tracked highlight for .hero-button / .form-button / .about-button
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const buttons = document.querySelectorAll<HTMLElement>(".hero-button, .form-button, .about-button");
//       if (!buttons.length) return;
//       buttons.forEach((btn) => {
//         const r = btn.getBoundingClientRect();
//         btn.style.setProperty("--x", `${e.clientX - r.left}px`);
//         btn.style.setProperty("--y", `${e.clientY - r.top}px`);
//       });
//     };
//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, [location.pathname]);

//   // Floating background particles (visual only)
//   const particles = Array.from({ length: 5 }, (_, index) => {
//     const isLeaf = Math.random() > 0.5;
//     return (
//       <div
//         key={index}
//         className={`${isLeaf ? "leaf-particle" : "dust-particle"} background-particle`}
//         style={{
//           width: `${isLeaf ? Math.random() * 20 + 15 : Math.random() * 10 + 5}px`,
//           height: `${isLeaf ? Math.random() * 30 + 20 : Math.random() * 10 + 5}px`,
//           left: `${Math.random() * 100}vw`,
//           top: `${Math.random() * 100}vh`,
//         }}
//       />
//     );
//   });

//   return (
//     <div className="app-root min-h-screen relative">
//       {/* Fixed background layer (not in scroll flow) */}
//       <div className="background-animation" aria-hidden="true">
//         {particles}
//       </div>

//       {/* Foreground content */}
//       <Nav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//       <main className={`main ${isSidebarOpen ? "sidebar-open" : ""}`}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <footer className="footer">© {new Date().getFullYear()} Ankith Raj Godugu</footer>
//     </div>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <HelmetProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;


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

import myIcon from "./assets/my-icon.png";
import CustomCursor from "./components/CustomCursor";

interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

const SOCIALS: SocialLinks = {
  github: "https://github.com/ankithrajgodugu",
  linkedin: "https://www.linkedin.com/in/ankith-raj-a90111302/",
  email: "mailto:ankithrajgodugu@gmail.com",
};

type CursorType = "brand" | "sword";

type NavProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  cursorType: CursorType;
  onToggleCursor: () => void;
};

const Nav: React.FC<NavProps> = ({ toggleSidebar, isSidebarOpen, cursorType, onToggleCursor }) => {
  const navRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside the sidebar
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isSidebarOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSidebarOpen, toggleSidebar]);

  const isBrand = cursorType === "brand";

  return (
    <>
      <button className="toggle-icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
        <div
          style={{
            backgroundImage: `url(${myIcon})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </button>

      <header className={`header ${isSidebarOpen ? "open" : ""}`} ref={navRef}>
        <nav className="nav-container">
          <Link to="/" className="nav-logo" onClick={toggleSidebar} aria-label="Go to home">
            <span>Ankith Raj Godugu</span>
          </Link>

          <div className="nav-links">
            <Link className="nav-link" to="/projects" onClick={toggleSidebar}>Projects</Link>
            <Link className="nav-link" to="/skills" onClick={toggleSidebar}>Skills</Link>
            <Link className="nav-link" to="/about" onClick={toggleSidebar}>About</Link>
            <Link className="nav-link" to="/contact" onClick={toggleSidebar}>Contact</Link>
          </div>

          <div className="nav-icons items-center gap-3">
            {/* Cursor toggle button */}
            <button
              onClick={onToggleCursor}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition shadow-sm bg-white/5"
              title={isBrand ? "Switch to Guts’ Sword cursor" : "Switch to Brand of Sacrifice cursor"}
              aria-label="Toggle cursor style"
            >
              {isBrand ? <Sword className="w-4 h-4 text-white" /> : <Flame className="w-4 h-4 text-white" />}
            </button>

            <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
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
    return (saved === "sword" || saved === "brand") ? (saved as CursorType) : "brand";
  });

  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Persist cursor preference
  useEffect(() => {
    localStorage.setItem("cursorType", cursorType);
  }, [cursorType]);

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);
  const onToggleCursor = () => setCursorType((t) => (t === "brand" ? "sword" : "brand"));

  // rAF-throttled cursor highlights for buttons & project cards
  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // Buttons: .hero-button, .form-button, .about-button
        const buttons = document.querySelectorAll<HTMLElement>(".hero-button, .form-button, .about-button");
        buttons.forEach((el) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--x", `${e.clientX - r.left}px`);
          el.style.setProperty("--y", `${e.clientY - r.top}px`);
        });

        // Project cards spotlight: .project-card
        const cards = document.querySelectorAll<HTMLElement>(".project-card");
        cards.forEach((card) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--x", `${e.clientX - r.left}px`);
          card.style.setProperty("--y", `${e.clientY - r.top}px`);
        });

        ticking = false;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [location.pathname]);

  // Floating background particles (visual only)
  const particles = Array.from({ length: 5 }, (_, index) => {
    const isLeaf = Math.random() > 0.5;
    return (
      <div
        key={index}
        className={`${isLeaf ? "leaf-particle" : "dust-particle"} background-particle`}
        style={{
          width: `${isLeaf ? Math.random() * 20 + 15 : Math.random() * 10 + 5}px`,
          height: `${isLeaf ? Math.random() * 30 + 20 : Math.random() * 10 + 5}px`,
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
        }}
      />
    );
  });

  return (
    <div className="app-root min-h-screen relative">
      {/* Custom cursor (brand or sword) */}
      <CustomCursor type={cursorType} />

      {/* Fixed background layer (not in scroll flow) */}
      <div className="background-animation" aria-hidden="true">
        {particles}
      </div>

      {/* Foreground content */}
      <Nav
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        cursorType={cursorType}
        onToggleCursor={onToggleCursor}
      />

      <main className={`main ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Ankith Raj Godugu</footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};

export default App;
