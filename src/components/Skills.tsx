import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Globe, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: <Code className="skill-icon" />,
    skills: ["Python", "Java", "JavaScript", "Data Structures"],
  },
  {
    category: "Web Development",
    icon: <Globe className="skill-icon" />,
    skills: ["HTML", "CSS", "NodeJS", "ReactJS"],
  },
  {
    category: "Databases",
    icon: <Database className="skill-icon" />,
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="skill-icon" />,
    skills: [
      "Linux (Ubuntu)",
      "AWS",
      "System Security",
      "Cloud Networking",
      "Apache",
      "SSL/TLS",
      "Cloudflare DNS",
      "Bash/Shell Scripting",
    ],
  },
];

const certifications = [
  {
    title: "Cloud Computing With AWS",
    issuer: "Internshala Trainings",
    date: "Oct–Nov 2024",
    link: "https://drive.google.com/file/d/1nQpPbG_zs8TfsV8ZUghzCNXzxOgpKwAE/view",
  },
  {
    title: "Modern Web Apps with MERN",
    issuer: "Next Gen Employability Program",
    date: "Feb–Mar 2025",
    link: "https://drive.google.com/file/d/1S43-NPGtrz5byvPCGl5SkjLCrQtxHc8S/view",
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="page-section">
    <Helmet>
      <title>Skills - Ankith Raj Godugu</title>
    </Helmet>

    <div className="page-content">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      <div className="space-y-12">
        {skillCategories.map((cat, index) => (
          <motion.section
            key={cat.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <h3 className="category-header-left">
              {cat.icon} {cat.category}
            </h3>

            <div className="skills-grid">
              {cat.skills.map((skill) => (
                <motion.div key={skill} className="skill-card" whileHover={{ y: -6 }}>
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="category-header-left">
            <Award className="skill-icon" /> Certifications & Internships
          </h3>

          <div className="skills-grid">
            {certifications.map((c) => (
              <motion.a
                key={c.title}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="certification-card"
                whileHover={{ y: -6 }}
              >
                <p className="cert-title">{c.title}</p>
                <p className="cert-details">{c.issuer} — {c.date}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  </section>
);

export default Skills;
