// import React from "react";
// import { Download } from "lucide-react";
// import { Helmet } from "react-helmet-async";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const About: React.FC = () => (
//   <section id="about" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - About</title>
//       <meta
//         name="description"
//         content="Learn more about Ankith Raj Godugu, a passionate developer and photographer."
//       />
//     </Helmet>
//     <LazyLoadImage
//       src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2000&auto=format&fit=crop"
//       alt="About background"
//       effect="blur"
//       className="page-background"
//     />
//     <div className="page-overlay" />
//     <div className="page-content">
//       <h2 className="section-title">About Me</h2>
//       <div className="about-content">
//         <p className="about-text">
//           I’m a passionate developer and photographer, blending creativity with
//           technical expertise. I build scalable web apps and capture moments through
//           my lens.
//         </p>
//         <a href="/resume.pdf" download className="about-button">
//           <Download className="w-4 h-4" /> Download Resume
//         </a>
//       </div>
//     </div>
//   </section>
// );

// export default About;


// import React from "react";
// import { Helmet } from "react-helmet-async";

// const About: React.FC = () => (
//   <section id="about" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - About</title>
//       <meta
//         contentType="text/html"
//         content="Learn more about Ankith Raj Godugu, his background, and his journey in Computer Science."
//       />
//     </Helmet>
//     <div className="page-content">
//       <h2 className="section-title">About Me</h2>
//       <div className="about-content">
//         <div className="about-text">
//           <p>
//             I am a final-year Computer Science student with a passion for software development and problem-solving. With hands-on experience in web development, cloud technologies, and system security, I aim to create impactful solutions that enhance user experiences.
//           </p>
//           <p>
//             My skills include programming languages like Python and JavaScript, frameworks like ReactJS, and cloud platforms like AWS. I am always eager to learn and collaborate on innovative projects.
//           </p>
//         </div>
//         <a href="/contact" className="about-button">
//           Get in Touch
//         </a>
//       </div>
//     </div>
//   </section>
// );

// export default About;




// import React from "react";
// import { Helmet } from "react-helmet-async";

// const About: React.FC = () => (
//   <section id="about" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - About</title>
//       <meta
//         content="Learn more about Ankith Raj Godugu, his background, and his journey in Computer Science."
//       />
//     </Helmet>
//     <div className="page-content">
//       <h2 className="section-title">About Me</h2>
//       <div className="about-content">
//         <div className="about-text">
//           <p>
//             I am a final-year Computer Science student with a passion for software development and problem-solving. My educational journey is as follows:
//           </p>
//           <ul className="list-disc pl-6 mt-2">
//             <li>
//               <strong>Bachelor of Technology - Computer Science Engineering</strong>
//               <ul className="list-none pl-4">
//                 <li>Guru Nanak Institute of Technology, Hyderabad (CGPA: 7.5/10)</li>
//                 <li>2022-2026</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Intermediate</strong>
//               <ul className="list-none pl-4">
//                 <li>Resonance Junior College, Khammam (58%)</li>
//                 <li>2020-2022</li>
//               </ul>
//             </li>
//             <li>
//               <strong>10th Standard</strong>
//               <ul className="list-none pl-4">
//                 <li>Triveni School (92%)</li>
//                 <li>2019-2020</li>
//               </ul>
//             </li>
//           </ul>
//           <p className="mt-4">
//             Originally from Khammam, India, I bring a diverse perspective to my work, aiming to create impactful solutions that enhance user experiences. My skills include programming languages like Python and JavaScript, frameworks like ReactJS, and cloud platforms like AWS. I am always eager to learn and collaborate on innovative projects.
//           </p>
//         </div>
//         <a href="/contact" className="about-button">
//           Get in Touch
//         </a>
//       </div>
//     </div>
//   </section>
// );

// export default About;


import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { User, GraduationCap, Heart, FileText } from "lucide-react";

const About: React.FC = () => (
  <section id="about" className="page-section">
    <Helmet>
      <title>About - Ankith Raj Godugu</title>
      <meta content="Learn more about Ankith Raj Godugu, his background, and experience." />
    </Helmet>

    <div className="page-content">
      <h2 className="section-title flex items-center gap-2">
        <User className="w-6 h-6 text-primary-400" /> About Me
      </h2>

      <div className="bg-[var(--surface)]/70 p-8 rounded-2xl shadow-lg backdrop-blur border border-white/10 transition-all hover:shadow-[0_0_20px_rgba(255,45,107,0.3)]">
        <p className="about-text text-white/85 leading-7">
          I am a final-year Computer Science Engineering student passionate about building scalable applications,
          cloud infrastructure, and meaningful digital solutions. I enjoy solving real-world problems using 
          technologies like <b>React</b>, <b>Node.js</b>, and <b>AWS</b>.
        </p>

        {/* Education Section */}
        <h3 className="mt-8 mb-2 text-xl font-semibold flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary-400" /> Education
        </h3>
        <ul className="space-y-4">
          <li>
            <strong>B.Tech in Computer Science Engineering</strong> — Guru Nanak Institute of Technology (2022–2026)
            <p className="text-sm text-gray-400">CGPA: 7.5/10</p>
          </li>
          <li>
            <strong>Intermediate (MPC)</strong> — Resonance Junior College, Khammam (2020–2022) — 58%
          </li>
          <li>
            <strong>10th Standard</strong> — Triveni School (2019–2020) — 92%
          </li>
        </ul>

        <p className="mt-6 text-white/85">
          My goal is to become a skilled Software and Cloud Engineer, developing secure, reliable, and user-friendly systems.
          I believe in continuous learning, collaboration, and innovation.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="about-button inline-flex items-center gap-2">
            <Heart className="w-5 h-5" /> Get in Touch
          </Link>

          {/* ✅ Resume Button */}
          <a
            href="https://drive.google.com/file/d/1gmmnIZuo4TAcDGSweHUZjBXdyU94JfNn/view?usp=sharing" // Replace this with your real resume link
            target="_blank"
            rel="noopener noreferrer"
            className="about-button inline-flex items-center gap-2 bg-gradient-to-b from-[var(--primary-500)] to-[var(--primary-700)] hover:shadow-lg"
          >
            <FileText className="w-5 h-5" /> View Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
