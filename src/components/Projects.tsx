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
  links: {
    github?: string;
    demo?: string;
  };
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
      "Predicts future closing prices using LSTM networks (Keras/TensorFlow). Trains on historical data; evaluates with MAE/RMSE.",
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
      "Secure, self-hosted cloud storage on Ubuntu VM. Includes reverse proxy, SSL/TLS, multi-user, and backup policies.",
    tags: ["Nextcloud", "Ubuntu", "Cloud Infrastructure", "Server Administration"],
    links: {
      demo: "https://vault.ankithtech.xyz/",
    },
  },
];

// easing typed for framer-motion
const customEase: Easing = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: customEase },
  },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="page-section">
      <Helmet>
        <title>Ankith Raj Godugu - Projects</title>
        <meta
          name="description"
          content="Explore projects by Ankith Raj Godugu: web development, machine learning, and cloud infrastructure."
        />
      </Helmet>

      <div className="page-content">
        <motion.h2
          className="section-title text-3xl md:text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: customEase }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="projects-grid grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card relative p-5 flex flex-col justify-between"
              variants={item}
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            >
              <div className="inner-card">
                <h3 className="project-title text-lg font-semibold mb-2">{project.title}</h3>
                <p className="project-description text-sm text-[var(--text-dimmer)] mb-4">
                  {project.description}
                </p>

                <div className="project-tags flex flex-wrap gap-2" aria-hidden>
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="project-tag inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "linear-gradient(90deg, rgba(255,209,102,0.08), rgba(224,178,74,0.04))",
                        color: "var(--text-soft)",
                        border: "1px solid rgba(255,209,102,0.06)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links mt-4 flex gap-3 items-center">
                {project.links.github ? (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium"
                    aria-label={`Open GitHub repo: ${project.title}`}
                    whileHover={{ scale: 1.04 }}
                  >
                    <Github className="w-4 h-4" /> <span>GitHub</span>
                  </motion.a>
                ) : null}

                {project.links.demo ? (
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium"
                    aria-label={`Open live demo: ${project.title}`}
                    whileHover={{ scale: 1.04 }}
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,209,102,0.12), rgba(224,178,74,0.04))",
                      color: "#1b1200",
                      border: "1px solid rgba(255,209,102,0.06)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" /> <span>Demo</span>
                  </motion.a>
                ) : null}

                {/* If neither link is present, show a subtle 'coming soon' */}
                {!project.links.github && !project.links.demo && (
                  <span
                    className="text-xs text-[var(--text-dimmer)] italic px-2 py-1"
                    aria-hidden
                  >
                    No public link
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
