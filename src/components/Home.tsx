import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import type { Variants } from "framer-motion";

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 24 },

  // must wrap in function so TS accepts dynamic custom index
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};


const Home: React.FC = () => {
  return (
    <section id="home" className="page-section min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Ankith Raj Godugu - Home</title>
        <meta name="description" content="Portfolio homepage of Ankith Raj Godugu." />
      </Helmet>

      <div className="page-content">
        <div className="hero-content flex flex-col items-center text-center">
          <motion.h1
            className="hero-title"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            Ankith Raj Godugu
          </motion.h1>

          <motion.p
            className="hero-subtitle mt-4 max-w-3xl text-white/80 leading-relaxed text-lg"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            Passionate about building scalable apps, secure cloud systems, and
            impactful digital experiences. Skilled in JavaScript, Python,
            cloud tools, and system engineering.
          </motion.p>

          <div className="mt-8 flex items-center gap-4">
            <motion.div custom={2} initial="hidden" animate="visible" variants={lineVariants}>
              <Link to="/about" className="hero-button">Learn More</Link>
            </motion.div>

            <motion.div custom={3} initial="hidden" animate="visible" variants={lineVariants}>
              <Link to="/projects" className="hero-button">View Projects</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
