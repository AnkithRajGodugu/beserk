// import React from "react";
// import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Helmet } from "react-helmet-async";

// const Home: React.FC = () => (
//   <section id="home" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Home</title>
//       <meta
//         name="description"
//         content="Welcome to the portfolio of Ankith Raj Godugu, a developer and photographer."
//       />
//     </Helmet>
//     <LazyLoadImage
//       src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=2000&auto=format&fit=crop"
//       alt="Home background"
//       effect="blur"
//       className="page-background"
//     />
//     <div className="page-overlay" />
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="hero-content"
//     >
//       <h1 className="hero-title">Ankith Raj Godugu</h1>
//       <p className="hero-subtitle">Developer | Photographer | Creator</p>
//       <a href="/portfolio" className="hero-button">
//         Explore My Work
//       </a>
//     </motion.div>
//   </section>
// );

// export default Home;/


// import React from "react";
// import { Helmet } from "react-helmet-async";

// const Home: React.FC = () => (
//   <section id="home" className="page-section min-h-screen flex items-center justify-center">
//     <Helmet>
//       <title>Ankith Raj Godugu - Home</title>
//       <meta
//         name="description" /* Corrected contentType to name for meta description */
//         content="Welcome to the portfolio of Ankith Raj Godugu, a final-year Computer Science student and aspiring Software Engineer."
//       />
//     </Helmet>
//     <div className="page-content">
//       <div className="hero-content">
//         <h1 className="hero-title">Ankith Raj Godugu</h1>
//         <p className="hero-subtitle">
//           Final-year Computer Science student and aspiring Software Engineer passionate about building scalable, reliable, and user-centric applications.
//         </p>
//         <a href="/about" className="hero-button">
//           Learn More
//         </a>
//       </div>
//     </div>
//   </section>
// );

// export default Home;



// import React from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";

// const Home: React.FC = () => (
//   <section id="home" className="page-section min-h-screen flex items-center justify-center">
//     <Helmet>
//       <title>Ankith Raj Godugu - Home</title>
//       <meta
//         name="description"
//         content="Welcome to the portfolio of Ankith Raj Godugu, a final-year Computer Science student and aspiring Software Engineer."
//       />
//     </Helmet>
//     <div className="page-content">
//       <div className="hero-content">
//         <motion.h1
//           className="hero-title"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0 }}
//         >
//           Ankith Raj Godugu
//         </motion.h1>
//         <motion.p
//           className="hero-subtitle"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Final-year Computer Science student and aspiring Software Engineer passionate about building scalable, reliable, and user-centric applications.
//         </motion.p>
//         <motion.a
//           href="/about"
//           className="hero-button"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           Learn More
//         </motion.a>
//       </div>
//     </div>
//   </section>
// );

// export default Home;

// import React from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";

// const Home: React.FC = () => {
//   // Split text into words for individual animation
//   const titleWords = "Ankith Raj Godugu".split(" ");
//   const subtitleWords = "Final-year Computer Science student and aspiring Software Engineer passionate about building scalable, reliable, and user-centric applications.".split(" ");
//   const buttonText = "Learn More".split(" ");

//   // Animation variants for word-by-word effect
//   const wordVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.5 },
//     }),
//   };

//   return (
//     <section id="home" className="page-section min-h-screen flex items-center justify-center">
//       <Helmet>
//         <title>Ankith Raj Godugu - Home</title>
//         <meta
//           name="description"
//           content="Welcome to the portfolio of Ankith Raj Godugu, a final-year Computer Science student and aspiring Software Engineer."
//         />
//       </Helmet>
//       <div className="page-content">
//         <div className="hero-content">
//           <motion.div
//             className="hero-title"
//             initial="hidden"
//             animate="visible"
//             transition={{ staggerChildren: 0.2, delayChildren: 0 }}
//           >
//             {titleWords.map((word, i) => (
//               <motion.span key={i} custom={i} variants={wordVariants}>
//                 {word}&nbsp;
//               </motion.span>
//             ))}
//           </motion.div>
//           <motion.div
//             className="hero-subtitle"
//             initial="hidden"
//             animate="visible"
//             transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
//           >
//             {subtitleWords.map((word, i) => (
//               <motion.span key={i} custom={i} variants={wordVariants}>
//                 {word}&nbsp;
//               </motion.span>
//             ))}
//           </motion.div>
//           <motion.a
//             href="/about"
//             className="hero-button"
//             initial="hidden"
//             animate="visible"
//             transition={{ staggerChildren: 0.2, delayChildren: 1 }}
//           >
//             {buttonText.map((word, i) => (
//               <motion.span key={i} custom={i} variants={wordVariants}>
//                 {word}&nbsp;
//               </motion.span>
//             ))}
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;



// import React from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";

// const Home: React.FC = () => {
//   // Define lines as complete text for each section
//   const lines = [
//     "Ankith Raj Godugu",
//     "Final-year Computer Science student and aspiring Software Engineer passionate about building scalable, reliable, and user-centric applications.",
//     "Learn More",
//   ];

//   // Animation variants for line-by-line effect
//   const lineVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.5, duration: 0.8 },
//     }),
//   };

//   return (
//     <section id="home" className="page-section min-h-screen flex items-center justify-center">
//       <Helmet>
//         <title>Ankith Raj Godugu - Home</title>
//         <meta
//           name="description"
//           content="Welcome to the portfolio of Ankith Raj Godugu, a final-year Computer Science student and aspiring Software Engineer."
//         />
//       </Helmet>
//       <div className="page-content">
//         <div className="hero-content">
//           {lines.map((line, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               variants={lineVariants}
//               initial="hidden"
//               animate="visible"
//               className={i === 0 ? "hero-title" : i === 1 ? "hero-subtitle" : "hero-button"}
//               href={i === 2 ? "/about" : undefined}
//               as={i === 2 ? "a" : "div"}
//             >
//               {line}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;


// import React from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";

// const Home: React.FC = () => {
//   // Define lines as complete text for each section
  

//   // Animation variants for line-by-line effect
//   const lineVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.5, duration: 0.8 },
//     }),
//   };

//   return (
//     <section id="home" className="page-section min-h-screen flex items-center justify-center">
//       <Helmet>
//         <title>Ankith Raj Godugu - Home</title>
//       </Helmet>
//       <div className="page-content">
//         <div className="hero-content flex flex-col items-center text-center">
          
//           <motion.div
//             className="hero-title"
//             custom={0}
//             variants={lineVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             Ankith Raj Godugu
//           </motion.div>
//           <motion.div
//             className="hero-subtitle mt-4"
//             custom={1}
//             variants={lineVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             Computer Science student with experience in web development, AI modeling, and project management tools. Skilled in JavaScript, Python, and cloud-based solutions; eager to contribute technical skills to real-world software challenges.
//           </motion.div>
//           <motion.a
//             href="/about"
//             className="hero-button mb-8" /* Button above content with margin below */
//             custom={3}
//             variants={lineVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             Learn More
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;




//import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  // Define lines as complete text for each section
//   const lines = [
//     "Ankith Raj Godugu",
//     "Final-year Computer Science student and aspiring Software Engineer passionate about building scalable, reliable, and user-centric applications.",
//     "Learn More",
//   ];

  // Animation variants for line-by-line effect
  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1 * 0.5, duration: 0.8 },
    }),
  };

  return (
    <section id="home" className="page-section min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Ankith Raj Godugu - Home</title>
        {/* <meta name="description" content="Welcome to the portfolio of Ankith Raj Godugu, a final-year Computer Science student and aspiring Software Engineer."/> */}
      </Helmet>
      <div className="page-content">
        <div className="hero-content flex flex-col items-center text-center">
          <motion.div className="hero-title" custom={0} variants={lineVariants} initial="hidden" animate="visible">
            Ankith Raj Godugu
          </motion.div>
          <motion.div className="hero-subtitle mt-4" custom={1} variants={lineVariants} initial="hidden" animate="visible">
            Computer Science student with experience in web development, AI modeling, and project management tools. Skilled in JavaScript, Python, and cloud-based solutions; eager to contribute technical skills to real-world software challenges.
          </motion.div>
          <motion.a href="/about" className="hero-button mb-8" custom={2} variants={lineVariants} initial="hidden" animate="visible">
            Learn More
          </motion.a>
        </div>
      </div>
    </section>
  ); // Semicolon outside the parentheses (optional)
};

export default Home;