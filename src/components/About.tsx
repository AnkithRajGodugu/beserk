import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { User, GraduationCap, Heart, FileText } from "lucide-react";

const About: React.FC = () => (
  <section id="about" className="page-section">
    <Helmet>
      <title>About - Ankith Raj Godugu</title>
    </Helmet>

    <div className="page-content">
      <h2 className="section-title flex items-center gap-2">
        <User className="w-6 h-6 text-[var(--accent)]" /> About Me
      </h2>

      <div className="about-card">
        <p>
          I am a final-year CSE student passionate about software engineering,
          cloud systems, and modern web technologies. I enjoy building secure,
          scalable, and user-friendly applications.
        </p>

        <h3 className="about-subtitle">
          <GraduationCap className="w-6 h-6 text-[var(--accent)]" />
          Education
        </h3>

        <ul className="about-list">
          <li>
            <b>B.Tech CSE</b> — Guru Nanak Institute of Technology (2022–2026)
            <p className="dim">CGPA: 7.5/10</p>
          </li>
          <li>
            <b>Intermediate (MPC)</b> — Resonance Junior College (2020–2022)
          </li>
          <li>
            <b>10th Standard</b> — Triveni School (2020)
            <p className="dim">Scored: 92%</p>
          </li>
        </ul>

        <p className="mt-4">
          I aim to become a strong Software & Cloud Engineer who builds systems
          that make life easier, safer, and more efficient.
        </p>

        <div className="about-buttons">
          <Link to="/contact" className="about-button">
            <Heart className="w-5 h-5" /> Contact Me
          </Link>

          <a
            href="https://drive.google.com/file/d/1gmmnIZuo4TAcDGSweHUZjBXdyU94JfNn/view"
            target="_blank"
            rel="noreferrer"
            className="about-button"
          >
            <FileText className="w-5 h-5" /> View Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
