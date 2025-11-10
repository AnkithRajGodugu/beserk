// import React from "react";
// import { Code, Database, Cloud, Globe, Award } from "lucide-react";
// import { Helmet } from "react-helmet-async";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const skillCategories = [
//   {
//     category: "Programming Languages",
//     icon: <Code className="skill-icon" />,
//     skills: ["Python", "Java", "JavaScript", "Data Structures (DS)"],
//   },
//   {
//     category: "Web Development",
//     icon: <Globe className="skill-icon" />,
//     skills: ["HTML", "CSS", "NodeJS", "ReactJS"],
//   },
//   {
//     category: "Databases",
//     icon: <Database className="skill-icon" />,
//     skills: ["MySQL", "MongoDB"],
//   },
//   {
//     category: "Cloud & DevOps",
//     icon: <Cloud className="skill-icon" />,
//     skills: [
//       "Linux (Ubuntu)",
//       "AWS",
//       "System Security",
//       "Log Debugging",
//       "Cloud Networking",
//       "Apache",
//       "Bash/Shell Scripting",
//       "Cloudflare DNS",
//       "SSL/TLS",
//       "HTTPS",
//     ],
//   },
// ];

// const certifications = [
//   {
//     title: "Cloud Computing With AWS",
//     issuer: "Internshala Trainings",
//     date: "Oct-Nov 2024",
//   },
//   {
//     title: "Building Modern Web Applications with MERN Stack",
//     issuer: "Next Gen Employability Program",
//     date: "Feb-Mar 2025",
//   },
// ];

// const Skills: React.FC = () => (
//   <section id="skills" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Skills</title>
//       <meta
//         contentType="text/html"
//         content="Technical and creative skills of Ankith Raj Godugu, including programming languages, web development, databases, cloud technologies, and certifications."
//       />
//     </Helmet>
//     <LazyLoadImage
//       src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
//       alt="Skills background"
//       effect="blur"
//       className="page-background"
//     />
//     <div className="page-overlay" />
//     <div className="page-content">
//       <h2 className="section-title">Skills</h2>
//       <div className="space-y-12">
//         {skillCategories.map((cat, index) => (
//           <div key={index}>
//             <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4"> {/* Inline heading with icon */}
//               {cat.icon}
//               {cat.category}
//             </h3>
//             <div className="skills-grid">
//               {cat.skills.map((skill) => (
//                 <div key={skill} className="skill-card">
//                   <p className="skill-name">{skill}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <div>
//           <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4"> {/* Inline heading with icon */}
//             <Award className="skill-icon" />
//             Certifications & Internships
//           </h3>
//           <div className="skills-grid">
//             {certifications.map((cert) => (
//               <div key={cert.title} className="skill-card">
//                 <p className="skill-name">{cert.title}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} ({cert.date})</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Skills;




// import React from "react";
// import { Code, Database, Cloud, Globe, Award } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// const skillCategories = [
//   {
//     category: "Programming Languages",
//     icon: <Code className="skill-icon" />,
//     skills: ["Python", "Java", "JavaScript", "Data Structures (DS)"],
//   },
//   {
//     category: "Web Development",
//     icon: <Globe className="skill-icon" />,
//     skills: ["HTML", "CSS", "NodeJS", "ReactJS"],
//   },
//   {
//     category: "Databases",
//     icon: <Database className="skill-icon" />,
//     skills: ["MySQL", "MongoDB"],
//   },
//   {
//     category: "Cloud & DevOps",
//     icon: <Cloud className="skill-icon" />,
//     skills: [
//       "Linux (Ubuntu)",
//       "AWS",
//       "System Security",
//       "Log Debugging",
//       "Cloud Networking",
//       "Apache",
//       "Bash/Shell Scripting",
//       "Cloudflare DNS",
//       "SSL/TLS",
//       "HTTPS",
//     ],
//   },
// ];

// const certifications = [
//   {
//     title: "Cloud Computing With AWS",
//     issuer: "Internshala Trainings",
//     date: "Oct-Nov 2024",
//   },
//   {
//     title: "Building Modern Web Applications with MERN Stack",
//     issuer: "Next Gen Employability Program",
//     date: "Feb-Mar 2025",
//   },
// ];

// const Skills: React.FC = () => (
//   <section id="skills" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Skills</title>
//       <meta
//         contentType="text/html"
//         content="Technical and creative skills of Ankith Raj Godugu, including programming languages, web development, databases, cloud technologies, and certifications."
//       />
//     </Helmet>
//     <div className="page-content">
//       <h2 className="section-title">Skills</h2>
//       <div className="space-y-12">
//         {skillCategories.map((cat, index) => (
//           <div key={index}>
//             <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4">
//               {cat.icon}
//               {cat.category}
//             </h3>
//             <div className="skills-grid">
//               {cat.skills.map((skill) => (
//                 <div key={skill} className="skill-card">
//                   <p className="skill-name">{skill}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <div>
//           <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4">
//             <Award className="skill-icon" />
//             Certifications & Internships
//           </h3>
//           <div className="skills-grid">
//             {certifications.map((cert) => (
//               <div key={cert.title} className="skill-card">
//                 <p className="skill-name">{cert.title}</p>
//                 <p className="text-sm text-gray-200 dark:text-gray-300">{cert.issuer} ({cert.date})</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Skills;




// import React from "react";
// import { Code, Database, Cloud, Globe, Award } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// const skillCategories = [
//   {
//     category: "Programming Languages",
//     icon: <Code className="skill-icon" />,
//     skills: ["Python", "Java", "JavaScript", "Data Structures (DS)"],
//   },
//   {
//     category: "Web Development",
//     icon: <Globe className="skill-icon" />,
//     skills: ["HTML", "CSS", "NodeJS", "ReactJS"],
//   },
//   {
//     category: "Databases",
//     icon: <Database className="skill-icon" />,
//     skills: ["MySQL", "MongoDB"],
//   },
//   {
//     category: "Cloud & DevOps",
//     icon: <Cloud className="skill-icon" />,
//     skills: [
//       "Linux (Ubuntu)",
//       "AWS",
//       "System Security",
//       "Log Debugging",
//       "Cloud Networking",
//       "Apache",
//       "Bash/Shell Scripting",
//       "Cloudflare DNS",
//       "SSL/TLS",
//       "HTTPS",
//     ],
//   },
// ];

// const certifications = [
//   {
//     title: "Cloud Computing With AWS",
//     issuer: "Internshala Trainings",
//     date: "Oct-Nov 2024",
//   },
//   {
//     title: "Building Modern Web Applications with MERN Stack",
//     issuer: "Next Gen Employability Program",
//     date: "Feb-Mar 2025",
//   },
// ];

// const Skills: React.FC = () => (
//   <section id="skills" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Skills</title>
//       <meta
//         contentType="text/html"
//         content="Technical and creative skills of Ankith Raj Godugu, including programming languages, web development, databases, cloud technologies, and certifications."
//       />
//     </Helmet>
//     <div className="page-content">
//       <h2 className="section-title">Skills</h2>
//       <div className="space-y-12">
//         {skillCategories.map((cat, index) => (
//           <div key={index}>
//             <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4">
//               {cat.icon}
//               {cat.category}
//             </h3>
//             <div className="skills-grid">
//               {cat.skills.map((skill) => (
//                 <div key={skill} className="skill-card">
//                   <p className="skill-name">{skill}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <div>
//           <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4">
//             <Award className="skill-icon" />
//             Certifications & Internships
//           </h3>
//           <div className="skills-grid">
//             {certifications.map((cert) => (
//               <div key={cert.title} className="skill-card">
//                 <p className="skill-name">{cert.title}</p>
//                 <p className="text-sm text-gray-200 dark:text-gray-300">{cert.issuer} ({cert.date})</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Skills;

//good
// import React from "react";
// import { Code, Database, Cloud, Globe, Award } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// const skillCategories = [
//   {
//     category: "Programming Languages",
//     icon: <Code className="skill-icon" />,
//     skills: ["Python", "Java", "JavaScript", "Data Structures (DS)"],
//   },
//   {
//     category: "Web Development",
//     icon: <Globe className="skill-icon" />,
//     skills: ["HTML", "CSS", "NodeJS", "ReactJS"],
//   },
//   {
//     category: "Databases",
//     icon: <Database className="skill-icon" />,
//     skills: ["MySQL", "MongoDB"],
//   },
//   {
//     category: "Cloud & DevOps",
//     icon: <Cloud className="skill-icon" />,
//     skills: [
//       "Linux (Ubuntu)",
//       "AWS",
//       "System Security",
//       "Log Debugging",
//       "Cloud Networking",
//       "Apache",
//       "Bash/Shell Scripting",
//       "Cloudflare DNS",
//       "SSL/TLS",
//       "HTTPS",
//     ],
//   },
// ];

// const certifications = [
//   {
//     title: "Cloud Computing With AWS",
//     issuer: "Internshala Trainings",
//     date: "Oct-Nov 2024",
//   },
//   {
//     title: "Building Modern Web Applications with MERN Stack",
//     issuer: "Next Gen Employability Program",
//     date: "Feb-Mar 2025",
//   },
// ];

// const Skills: React.FC = () => (
//   <section id="skills" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Skills</title>
//       <meta
//         contentType="text/html"
//         content="Technical and creative skills of Ankith Raj Godugu, including programming languages, web development, databases, cloud technologies, and certifications."
//       />
//     </Helmet>
//     <div className="page-content">
//       <h2 className="section-title">Skills</h2>
//       <div className="space-y-12 min-h-screen"> {/* Ensure minimum height to accommodate content */}
//         {skillCategories.map((cat, index) => (
//           <div key={index}>
//             <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4">
//               {cat.icon}
//               {cat.category}
//             </h3>
//             <div className="skills-grid">
//               {cat.skills.map((skill) => (
//                 <div key={skill} className="skill-card">
//                   <p className="skill-name">{skill}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <div>
//           <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4">
//             <Award className="skill-icon" />
//             Certifications & Internships
//           </h3>
//           <div className="skills-grid">
//             {certifications.map((cert) => (
//               <div key={cert.title} className="skill-card">
//                 <p className="skill-name">{cert.title}</p>
//                 <p className="text-sm text-gray-200">{cert.issuer} ({cert.date})</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Skills;





// import React from "react";
// import { motion } from "framer-motion";
// import { Code, Database, Cloud, Globe, Award } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// const skillCategories = [
//   {
//     category: "Programming Languages",
//     icon: <Code className="skill-icon" />,
//     skills: ["Python", "Java", "JavaScript", "Data Structures (DS)"],
//   },
//   {
//     category: "Web Development",
//     icon: <Globe className="skill-icon" />,
//     skills: ["HTML", "CSS", "NodeJS", "ReactJS"],
//   },
//   {
//     category: "Databases",
//     icon: <Database className="skill-icon" />,
//     skills: ["MySQL", "MongoDB"],
//   },
//   {
//     category: "Cloud & DevOps",
//     icon: <Cloud className="skill-icon" />,
//     skills: [
//       "Linux (Ubuntu)",
//       "AWS",
//       "System Security",
//       "Log Debugging",
//       "Cloud Networking",
//       "Apache",
//       "Bash/Shell Scripting",
//       "Cloudflare DNS",
//       "SSL/TLS",
//       "HTTPS",
//     ],
//   },
// ];

// const certifications = [
//   {
//     title: "Cloud Computing With AWS",
//     issuer: "Internshala Trainings",
//     date: "Oct-Nov 2024",
//     link: "https://drive.google.com/file/d/1nQpPbG_zs8TfsV8ZUghzCNXzxOgpKwAE/view", // Example link
//   },
//   {
//     title: "Building Modern Web Applications with MERN Stack",
//     issuer: "Next Gen Employability Program",
//     date: "Feb-Mar 2025",
//     link: "https://drive.google.com/file/d/1S43-NPGtrz5byvPCGl5SkjLCrQtxHc8S/view", // Example link
//   },
// ];

// const Skills: React.FC = () => (
//   <section id="skills" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Skills</title>
//       <meta
        
//         content="Technical and creative skills of Ankith Raj Godugu, including programming languages, web development, databases, cloud technologies, and certifications."
//       />
//     </Helmet>
//     <div className="page-content">
//       <h2 className="section-title">Skills</h2>
//       <div className="space-y-12 min-h-screen"> {/* Ensure minimum height to accommodate content */}
//         {skillCategories.map((cat, index) => (
//           <div key={index}>
//             <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4">
//               {cat.icon}
//               {cat.category}
//             </h3>
//             <div className="skills-grid">
//               {cat.skills.map((skill) => (
//                 <div key={skill} className="skill-card">
//                   <p className="skill-name">{skill}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <div>
//           <h3 className="category-header-left text-2xl font-semibold mb-2 ml-4">
//             <Award className="skill-icon" />
//             Certifications & Internships
//           </h3>
//           <div className="skills-grid">
//             {certifications.map((cert) => (
//               <div key={cert.title} className="skill-card">
//                 <motion.a
//                   href={cert.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="skill-name block"
//                   whileHover={{ scale: 1.05, color: "#ff4500" }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {cert.title}
//                 </motion.a>
//                 <p className="text-sm text-gray-200">{cert.issuer} ({cert.date})</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Skills;




import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Globe, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";


const skillCategories = [
{ category: "Programming Languages", icon: <Code className="skill-icon" />, skills: ["Python", "Java", "JavaScript", "Data Structures (DS)"] },
{ category: "Web Development", icon: <Globe className="skill-icon" />, skills: ["HTML", "CSS", "NodeJS", "ReactJS"] },
{ category: "Databases", icon: <Database className="skill-icon" />, skills: ["MySQL", "MongoDB"] },
{ category: "Cloud & DevOps", icon: <Cloud className="skill-icon" />, skills: ["Linux (Ubuntu)", "AWS", "System Security", "Log Debugging", "Cloud Networking", "Apache", "Bash/Shell Scripting", "Cloudflare DNS", "SSL/TLS", "HTTPS"] },
];


const certifications = [
{ title: "Cloud Computing With AWS", issuer: "Internshala Trainings", date: "Oct–Nov 2024", link: "https://drive.google.com/file/d/1nQpPbG_zs8TfsV8ZUghzCNXzxOgpKwAE/view" },
{ title: "Building Modern Web Applications with MERN Stack", issuer: "Next Gen Employability Program", date: "Feb–Mar 2025", link: "https://drive.google.com/file/d/1S43-NPGtrz5byvPCGl5SkjLCrQtxHc8S/view" },
];


const Skills: React.FC = () => (
<section id="skills" className="page-section">
<Helmet>
<title>Ankith Raj Godugu - Skills</title>
<meta name="description" content="Programming, web, database, and cloud skills of Ankith Raj Godugu." />
</Helmet>


<div className="page-content">
<motion.h2 className="section-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
Skills
</motion.h2>


<div className="space-y-12 min-h-screen">
{skillCategories.map((cat, index) => (
<motion.section key={cat.category} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
<h3 className="category-header-left text-2xl font-semibold mb-2 ml-4 flex items-center gap-2">
{cat.icon}
{cat.category}
</h3>
<div className="skills-grid">
{cat.skills.map((skill) => (
<motion.div key={skill} className="skill-card" whileHover={{ y: -6 }}>
<p className="skill-name">{skill}</p>
</motion.div>
))}
</div>
</motion.section>
))}


<motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
<h3 className="category-header-left text-2xl font-semibold mb-2 ml-4 flex items-center gap-2">
<Award className="skill-icon" />
Certifications & Internships
</h3>
<div className="skills-grid">
{certifications.map((cert) => (
<motion.a key={cert.title} href={cert.link} target="_blank" rel="noreferrer" className="certification-card" whileHover={{ y: -6 }}
aria-label={`Open certificate: ${cert.title}`}>
<p className="certification-title">{cert.title}</p>
<p className="certification-details">{cert.issuer} ({cert.date})</p>
</motion.a>
))}
</div>
</motion.section>
</div>
</div>
</section>
);


export default Skills;