// // import React from "react";
// // import { motion } from "framer-motion";
// // import { LazyLoadImage } from "react-lazy-load-image-component";
// // import { Github } from "lucide-react";
// // import { Helmet } from "react-helmet-async";

// // interface Project {
// //   title: string;
// //   img: string;
// //   description: string;
// //   tags: string[];
// //   links: {
// //     github: string;
// //     demo?: string;
// //   };
// // }

// // const projects: Project[] = [
// //   {
// //     title: "ANN for Solar Still Performance",
// //     img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
// //     description: "Artificial Neural Network predicting desalination output.",
// //     tags: ["Python", "ANN", "NumPy"],
// //     links: { github: "https://github.com/coriuday/solar-still-predictor" },
// //   },
// //   {
// //     title: "Real-Time Auction Platform",
// //     img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
// //     description: "React + Express app with real-time updates.",
// //     tags: ["React", "Express", "JWT"],
// //     links: {
// //       github: "https://github.com/AnkithRajGodugu/Auction",
// //       demo: "https://auction-vrv8-rose.vercel.app",
// //     },
// //   },
// // ];

// // const Projects: React.FC = () => (
// //   <section id="projects" className="projects-section">
// //     <Helmet>
// //       <title>Ankith Raj Godugu - Projects</title>
// //       <meta
// //         name="description"
// //         content="Explore the software projects of Ankith Raj Godugu, including AI and web development."
// //       />
// //     </Helmet>
// //     <h2 className="section-title">Projects</h2>
// //     <div className="projects-grid">
// //       {projects.map((project, index) => (
// //         <motion.div
// //           key={`${project.title}-${index}`}
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5, delay: index * 0.1 }}
// //           className="project-card"
// //         >
// //           <LazyLoadImage
// //             src={project.img}
// //             alt={project.title}
// //             effect="blur"
// //             className="project-image"
// //           />
// //           <div className="project-content">
// //             <h3 className="project-title">{project.title}</h3>
// //             <p className="project-description">{project.description}</p>
// //             <div className="project-tags">
// //               {project.tags.map((tag) => (
// //                 <span key={tag} className="project-tag">{tag}</span>
// //               ))}
// //             </div>
// //             <div className="project-links">
// //               <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link">
// //                 <Github className="w-5 h-5" /> GitHub
// //               </a>
// //               {project.links.demo && (
// //                 <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link">
// //                   Demo
// //                 </a>
// //               )}
// //             </div>
// //           </div>
// //         </motion.div>
// //       ))}
// //     </div>
// //   </section>
// // );

// // export default Projects;





// // import React from "react";
// // import { motion } from "framer-motion";
// // import { LazyLoadImage } from "react-lazy-load-image-component";
// // import { Github } from "lucide-react";
// // import { Helmet } from "react-helmet-async";

// // interface Project {
// //   title: string;
// //   img: string;
// //   description: string;
// //   tags: string[];
// //   links: {
// //     github: string;
// //     demo?: string;
// //   };
// // }

// // const projects: Project[] = [
// //   {
// //     title: "ANN for Solar Still Performance",
// //     img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
// //     description: "Artificial Neural Network predicting desalination output.",
// //     tags: ["Python", "ANN", "NumPy"],
// //     links: { github: "https://github.com/coriuday/solar-still-predictor" },
// //   },
// //   {
// //     title: "Real-Time Auction Platform",
// //     img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
// //     description: "React + Express app with real-time updates.",
// //     tags: ["React", "Express", "JWT"],
// //     links: {
// //       github: "https://github.com/AnkithRajGodugu/Auction",
// //       demo: "https://auction-vrv8-rose.vercel.app",
// //     },
// //   },
// // ];

// // const Projects: React.FC = () => (
// //   <section id="projects" className="page-section">
// //     <Helmet>
// //       <title>Ankith Raj Godugu - Projects</title>
// //       <meta
// //         name="description"
// //         content="Explore the software projects of Ankith Raj Godugu, including AI and web development."
// //       />
// //     </Helmet>
// //     <LazyLoadImage
// //       src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
// //       alt="Projects background"
// //       effect="blur"
// //       className="page-background"
// //     />
// //     <div className="page-overlay" />
// //     <div className="page-content">
// //       <h2 className="section-title">Projects</h2>
// //       <div className="projects-grid">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={`${project.title}-${index}`}
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: index * 0.1 }}
// //             className="project-card"
// //           >
// //             <LazyLoadImage
// //               src={project.img}
// //               alt={project.title}
// //               effect="blur"
// //               className="project-image"
// //             />
// //             <div className="project-content">
// //               <h3 className="project-title">{project.title}</h3>
// //               <p className="project-description">{project.description}</p>
// //               <div className="project-tags">
// //                 {project.tags.map((tag) => (
// //                   <span key={tag} className="project-tag">{tag}</span>
// //                 ))}
// //               </div>
// //               <div className="project-links">
// //                 <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link">
// //                   <Github className="w-5 h-5" /> GitHub
// //                 </a>
// //                 {project.links.demo && (
// //                   <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link">
// //                     Demo
// //                   </a>
// //                 )}
// //               </div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // export default Projects;



// import React from "react";
// import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Github } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// interface Project {
//   title: string;
  
//   description: string;
//   tags: string[];
//   links: {
//     github: string;
//     demo?: string;
//   };
// }

// const projects: Project[] = [
//   {
//     title: "Auction Platform",
    
//     description: "Online Auction Platform with React and ExpressJS Framework. The platform will allow sellers to list products and buyers to place bids, all while providing secure payments, user-friendly interfaces, and scalable performance.",
//     tags: ["React", "ExpressJS", "JavaScript", "NodeJS"],
//     links: { 
//       github: "https://github.com/ankithrajgodugu/Auction",
//       demo: "https://auction-vrv8-rose.vercel.app" 
//     },
//   },
//   {
//     title: "Stock Market Prediction Using Machine Learning",
    
//     description: "The challenge of this project is to accurately predict the future closing value of a given stock across a given period of time in the future. For this project I have used a Long Short Term Memory networks – usually just “LSTMs” to predict the closing price of the S&P 500 using a dataset of past prices. Achieved Mean Squared Error of 0.00093063 using Keras and TensorFlow.",
//     tags: ["Python", "Machine Learning", "LSTM", "Keras", "TensorFlow"],
//     links: { 
//       github: "https://github.com/AnkithRajGodugu/Stock-Market-Perdiction"
//     },
//   },
//     {
//      title: "ANN for Solar Still Performance",
     
//      description: "Artificial Neural Network predicting desalination output.",
//      tags: ["Python", "ANN", "NumPy"],
//      links: { github: "https://github.com/coriuday/solar-still-predictor" },
//    },
//   {
//     title: "Self-Hosted Cloud Storage Server (Nextcloud)",
    
//     description: "I built a secure, self-hosted cloud storage solution using Nextcloud on an Ubuntu virtual machine. This project demonstrates hands-on experience in cloud infrastructure, server administration, and secure multi-user system deployment.",
//     tags: ["Nextcloud", "Ubuntu", "Cloud Infrastructure", "Server Administration"],
//     links: { 
//       github: "https://github.com/ankithrajgodugu" // Placeholder; replace with actual repo if available
//     },
//   },
// ];

// const Projects: React.FC = () => (
//   <section id="projects" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Projects</title>
//       <meta
//         name="description"
//         content="Explore the software projects of Ankith Raj Godugu, including web development, machine learning, and cloud solutions."
//       />
//     </Helmet>
//     <div className="page-overlay" />
//     <div className="page-content">
//       <h2 className="section-title">Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <motion.div
//             key={`${project.title}-${index}`}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="project-card"
//           >
            
//             <div className="project-content">
//               <h3 className="project-title">{project.title}</h3>
//               <p className="project-description">{project.description}</p>
//               <div className="project-tags">
//                 {project.tags.map((tag) => (
//                   <span key={tag} className="project-tag">{tag}</span>
//                 ))}
//               </div>
//               <div className="project-links">
//                 <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link">
//                   <Github className="w-5 h-5" /> GitHub
//                 </a>
//                 {project.links.demo && (
//                   <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link">
//                     Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Projects;






// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { Github } from "lucide-react";

// const Projects: React.FC = () => (
//   <section id="projects" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Projects</title>
//       <meta
//         contentType="text/html"
//         content="Check out the projects by Ankith Raj Godugu, highlighting technical skills and creativity."
//       />
//     </Helmet>
//     <div className="page-content">
//       <h2 className="section-title">Projects</h2>
//       <div className="projects-grid">
//         <div className="project-card">
//           <div className="project-image" style={{ background: "#ccc" }} />
//           <div className="project-content">
//             <h3 className="project-title">Project 1</h3>
//             <p className="project-description">A sample project description.</p>
//             <div className="project-tags">
//               <span className="project-tag">React</span>
//               <span className="project-tag">NodeJS</span>
//             </div>
//             <div className="project-links">
//               <a href="#" className="project-link">
//                 <Github /> Code
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="project-card">
//           <div className="project-image" style={{ background: "#ccc" }} />
//           <div className="project-content">
//             <h3 className="project-title">Project 2</h3>
//             <p className="project-description">Another sample project.</p>
//             <div className="project-links">
//               <a href="#" className="project-link">
//                 <Github /> Code
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Projects;




// import React from "react";
// import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Github } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// interface Project {
//   title: string;
//   description: string;
//   tags: string[];
//   links: {
//     github: string;
//     demo?: string;
//   };
// }

// const projects: Project[] = [
//   {
//     title: "Auction Platform",
//     description: "Online Auction Platform with React and ExpressJS Framework. The platform will allow sellers to list products and buyers to place bids, all while providing secure payments, user-friendly interfaces, and scalable performance.",
//     tags: ["React", "ExpressJS", "JavaScript", "NodeJS"],
//     links: { 
//       github: "https://github.com/ankithrajgodugu/Auction",
//       demo: "https://auction-vrv8-rose.vercel.app" 
//     },
//   },
//   {
//     title: "Stock Market Prediction Using Machine Learning",
//     description: "The challenge of this project is to accurately predict the future closing value of a given stock across a given period of time in the future. For this project I have used a Long Short Term Memory networks – usually just “LSTMs” to predict the closing price of the S&P 500 using a dataset of past prices. Achieved Mean Squared Error of 0.00093063 using Keras and TensorFlow.",
//     tags: ["Python", "Machine Learning", "LSTM", "Keras", "TensorFlow"],
//     links: { 
//       github: "https://github.com/AnkithRajGodugu/Stock-Market-Perdiction"
//     },
//   },
//   {
//     title: "ANN for Solar Still Performance",
//     description: "Artificial Neural Network predicting desalination output.",
//     tags: ["Python", "ANN", "NumPy"],
//     links: { github: "https://github.com/coriuday/solar-still-predictor" },
//   },
//   {
//     title: "Self-Hosted Cloud Storage Server (Nextcloud)",
//     description: "I built a secure, self-hosted cloud storage solution using Nextcloud on an Ubuntu virtual machine. This project demonstrates hands-on experience in cloud infrastructure, server administration, and secure multi-user system deployment.",
//     tags: ["Nextcloud", "Ubuntu", "Cloud Infrastructure", "Server Administration"],
//     links: { 
//       github: "https://github.com/ankithrajgodugu" // Placeholder; replace with actual repo if available
//     },
//   },
// ];

// const Projects: React.FC = () => (
//   <section id="projects" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Projects</title>
//       <meta
//         name="description"
//         content="Explore the software projects of Ankith Raj Godugu, including web development, machine learning, and cloud solutions."
//       />
//     </Helmet>
//     <div className="page-overlay" />
//     <div className="page-content">
//       <motion.h2
//         className="section-title"
//         initial={{ opacity: 0, y: 20, rotate: -5 }}
//         animate={{ opacity: 1, y: 0, rotate: 0 }}
//         transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
//       >
//         Projects
//       </motion.h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <motion.div
//             key={`${project.title}-${index}`}
//             className="project-card"
//             initial={{ opacity: 0, y: 50, scale: 0.9 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2, type: "tween" }}
//             whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//           >
//             <div className="project-content">
//               <h3 className="project-title">{project.title}</h3>
//               <p className="project-description">{project.description}</p>
//               <div className="project-tags">
//                 {project.tags.map((tag) => (
//                   <span key={tag} className="project-tag">{tag}</span>
//                 ))}
//               </div>
//               <div className="project-links">
//                 <motion.a
//                   href={project.links.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="project-link"
//                   whileHover={{ scale: 1.1, color: "#ff4500" }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Github className="w-5 h-5" /> GitHub
//                 </motion.a>
//                 {project.links.demo && (
//                   <motion.a
//                     href={project.links.demo}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="project-link"
//                     whileHover={{ scale: 1.1, color: "#ff4500" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     Demo
//                   </motion.a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Projects;



//nice
// import React from "react";
// import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Github } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// interface Project {
//   title: string;
//   description: string;
//   tags: string[];
//   links: {
//     github: string;
//     demo?: string;
//   };
// }

// const projects: Project[] = [
//   {
//     title: "Auction Platform",
//     description: "Online Auction Platform with React and ExpressJS Framework. The platform will allow sellers to list products and buyers to place bids, all while providing secure payments, user-friendly interfaces, and scalable performance.",
//     tags: ["React", "ExpressJS", "JavaScript", "NodeJS"],
//     links: { 
//       github: "https://github.com/ankithrajgodugu/Auction",
//       demo: "https://auction-vrv8-rose.vercel.app" 
//     },
//   },
//   {
//     title: "Stock Market Prediction Using Machine Learning",
//     description: "The challenge of this project is to accurately predict the future closing value of a given stock across a given period of time in the future. For this project I have used a Long Short Term Memory networks – usually just “LSTMs” to predict the closing price of the S&P 500 using a dataset of past prices. Achieved Mean Squared Error of 0.00093063 using Keras and TensorFlow.",
//     tags: ["Python", "Machine Learning", "LSTM", "Keras", "TensorFlow"],
//     links: { 
//       github: "https://github.com/AnkithRajGodugu/Stock-Market-Perdiction"
//     },
//   },
//   {
//     title: "ANN for Solar Still Performance",
//     description: "Artificial Neural Network predicting desalination output.",
//     tags: ["Python", "ANN", "NumPy"],
//     links: { github: "https://github.com/coriuday/solar-still-predictor" },
//   },
//   {
//     title: "Self-Hosted Cloud Storage Server (Nextcloud)",
//     description: "I built a secure, self-hosted cloud storage solution using Nextcloud on an Ubuntu virtual machine. This project demonstrates hands-on experience in cloud infrastructure, server administration, and secure multi-user system deployment.",
//     tags: ["Nextcloud", "Ubuntu", "Cloud Infrastructure", "Server Administration"],
//     links: { 
//       github: "https://github.com/ankithrajgodugu" // Placeholder; replace with actual repo if available
//     },
//   },
// ];

// const Projects: React.FC = () => (
//   <section id="projects" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Projects</title>
//       <meta
//         name="description"
//         content="Explore the software projects of Ankith Raj Godugu, including web development, machine learning, and cloud solutions."
//       />
//     </Helmet>
//     <div className="page-overlay" />
//     <div className="page-content">
//       <motion.h2
//         className="section-title"
//         initial={{ opacity: 0, y: 20, rotate: -5 }}
//         animate={{ opacity: 1, y: 0, rotate: 0 }}
//         transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
//       >
//         Projects
//       </motion.h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <motion.div
//             key={`${project.title}-${index}`}
//             className="project-card"
//             initial={{ opacity: 0, y: 50, scale: 0.9 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2, type: "tween" }}
//             whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//           >
//             <motion.div
//               className="inner-card bg-red-900 p-4 rounded-xl flex flex-col"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
//             >
//               <h3 className="project-title">{project.title}</h3>
//               <p className="project-description text-sm">{project.description}</p>
//               <div className="project-tags mt-2">
//                 {project.tags.map((tag) => (
//                   <span key={tag} className="project-tag">{tag}</span>
//                 ))}
//               </div>
//             </motion.div>
//             <div className="project-links mt-4 p-4">
//               <motion.a
//                 href={project.links.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="project-link"
//                 whileHover={{ scale: 1.1, color: "#ff4500" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Github className="w-5 h-5" /> GitHub
//               </motion.a>
//               {project.links.demo && (
//                 <motion.a
//                   href={project.links.demo}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="project-link"
//                   whileHover={{ scale: 1.1, color: "#ff4500" }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   Demo
//                 </motion.a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Projects;








import React from "react";
import { motion } from "framer-motion";
//import { LazyLoadImage } from "react-lazy-load-image-component";
import { Github } from "lucide-react";
import { Helmet } from "react-helmet-async";

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
    description: "Online Auction Platform with React and ExpressJS Framework. The platform will allow sellers to list products and buyers to place bids, all while providing secure payments, user-friendly interfaces, and scalable performance.",
    tags: ["React", "ExpressJS", "JavaScript", "NodeJS"],
    links: { 
      github: "https://github.com/ankithrajgodugu/Auction",
      demo: "https://auction-vrv8-rose.vercel.app" 
    },
  },
  {
    title: "Stock Market Prediction Using Machine Learning",
    description: "The challenge of this project is to accurately predict the future closing value of a given stock across a given period of time in the future. For this project I have used a Long Short Term Memory networks – usually just “LSTMs” to predict the closing price.",
    tags: ["Python", "Machine Learning", "LSTM", "Keras", "TensorFlow"],
    links: { 
      github: "https://github.com/AnkithRajGodugu/Stock-Market-Perdiction"
    },
  },
  {
    title: "ANN for Solar Still Performance",
    description: "Artificial Neural Network predicting desalination output.",
    tags: ["Python", "ANN", "NumPy"],
    links: { github: "https://github.com/coriuday/solar-still-predictor" },
  },
  {
    title: "Self-Hosted Cloud Storage Server (Nextcloud)",
    description: "I built a secure, self-hosted cloud storage solution using Nextcloud on an Ubuntu virtual machine. This project demonstrates hands-on experience in cloud infrastructure, server administration, and secure multi-user system deployment.",
    tags: ["Nextcloud", "Ubuntu", "Cloud Infrastructure", "Server Administration"],
    links: { 
      demo: "https://vault.ankithtech.xyz/" // Placeholder; replace with actual repo if available
    },
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="page-section">
    <Helmet>
      <title>Ankith Raj Godugu - Projects</title>
      <meta
        name="description"
        content="Explore the software projects of Ankith Raj Godugu, including web development, machine learning, and cloud solutions."
      />
    </Helmet>
    <div className="page-overlay" />
    <div className="page-content">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            className="project-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, type: "tween" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="inner-card bg-red-900 p-4 rounded-xl flex flex-col flex-grow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description text-sm mb-4">{project.description}</p>
              <hr className="border-gray-600 my-4" />
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
            <div className="project-links mt-auto p-4">
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                whileHover={{ scale: 1.1, color: "#ff4500" }}
                transition={{ duration: 0.3 }}
              >
                <Github className="w-5 h-5" /> GitHub
              </motion.a>
              {project.links.demo && (
                <motion.a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1, color: "#ff4500" }}
                  transition={{ duration: 0.3 }}
                >
                  Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;