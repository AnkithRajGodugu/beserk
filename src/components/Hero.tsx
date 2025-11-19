import React from "react";
import { motion } from "framer-motion";
import BladeScene from "./BladeScene";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#070A0E]">
      <BladeScene />

      <div className="relative z-20 container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[4rem] md:text-[5.5rem] font-serif text-[#d9c8a9] leading-tight">
            DEVOPS ENTHUSIAST <br />
            FULL STACK DEVELOPER
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl text-lg">
            Crafting cloud infrastructure & expressive full-stack applications.
          </p>

          <div className="mt-8 flex gap-6">
            <a href="/projects" className="hero-button">
              Projects
            </a>
            <a href="/skills" className="hero-button">
              Skills
            </a>
            <a href="/contact" className="hero-button">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
