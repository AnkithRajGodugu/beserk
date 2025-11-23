// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import type { Variants, Easing } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { github?: string; demo?: string };
}

const projects: Project[] = [
  {
    title: "Auction Platform",
    description:
      "Online Auction Platform with React and ExpressJS. Sellers list products; buyers place bids with secure flows and scalable performance.",
    tags: ["React", "ExpressJS", "JavaScript", "NodeJS"],
    links: {
      github: "https://github.com/ankithrajgodugu/Auction",
      demo: "https://auction-vrv8-rose.vercel.app",
    },
  },
  {
    title: "Stock Market Prediction Using Machine Learning",
    description:
      "Predicts future closing prices using LSTM networks (Keras/TensorFlow).",
    tags: ["Python", "Machine Learning", "LSTM", "Keras", "TensorFlow"],
    links: {
      github: "https://github.com/AnkithRajGodugu/Stock-Market-Perdiction",
    },
  },
  {
    title: "ANN for Solar Still Performance",
    description:
      "Artificial Neural Network predicting desalination output from environmental inputs.",
    tags: ["Python", "ANN", "NumPy"],
    links: {
      github: "https://github.com/coriuday/solar-still-predictor",
    },
  },
  {
    title: "Self-Hosted Cloud Storage Server (Nextcloud)",
    description:
      "Secure, self-hosted cloud storage with SSL/TLS, reverse proxy, and multi-user environment.",
    tags: ["Nextcloud", "Ubuntu", "Cloud", "Server"],
    links: {
      demo: "https://vault.ankithtech.xyz/",
    },
  },
];

const ease: Easing = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease },
  },
};

const Projects: React.FC = () => (
  <section id="projects" className="page-section">
    <Helmet>
      <title>Projects - Ankith Raj Godugu</title>
    </Helmet>

    <div className="page-content">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            className="project-card"
            variants={item}
            tabIndex={0}
          >
            <div className="inner-card">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {p.links.github && (
                <motion.a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.04 }}
                >
                  <Github size={16} /> GitHub
                </motion.a>
              )}

              {p.links.demo && (
                <motion.a
                  href={p.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo-btn"
                  whileHover={{ scale: 1.04 }}
                >
                  <ExternalLink size={16} /> Demo
                </motion.a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
