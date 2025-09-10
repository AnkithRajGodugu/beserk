// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<{
//     name: string;
//     email: string;
//     message: string;
//   }>({ name: "", email: "", message: "" });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section id="contact" className="page-section">
//       <Helmet>
//         <title>Ankith Raj Godugu - Contact</title>
//         <meta
//           name="description"
//           content="Get in touch with Ankith Raj Godugu via the contact form."
//         />
//       </Helmet>
//       <LazyLoadImage
//         src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
//         alt="Contact background"
//         effect="blur"
//         className="page-background"
//       />
//       <div className="page-overlay" />
//       <div className="page-content">
//         <h2 className="section-title">Get in Touch</h2>
//         <form
//           action="https://formspree.io/f/your-actual-id"
//           method="POST"
//           className="contact-form"
//         >
//           <div>
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="form-label">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="form-textarea"
//               required
//             />
//           </div>
//           <button type="submit" className="form-button">
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;




// import React from "react";
// import { Helmet } from "react-helmet-async";

// const Contact: React.FC = () => (
//   <section id="contact" className="page-section">
//     <Helmet>
//       <title>Ankith Raj Godugu - Contact</title>
//       <meta
//         contentType="text/html"
//         content="Get in touch with Ankith Raj Godugu for collaboration or inquiries."
//       />
//     </Helmet>
//     <div className="page-content">
//       <h2 className="section-title">Contact Me</h2>
//       <form className="contact-form">
//         <label className="form-label">Name</label>
//         <input className="form-input" type="text" placeholder="Your Name" />
//         <label className="form-label">Email</label>
//         <input className="form-input" type="email" placeholder="Your Email" />
//         <label className="form-label">Message</label>
//         <textarea className="form-textarea" placeholder="Your Message" rows={4}></textarea>
//         <button className="form-button" type="submit">Send Message</button>
//       </form>
//     </div>
//   </section>
// );

// export default Contact;



import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, Instagram } from "lucide-react";

const Contact: React.FC = () => (
  <section id="contact" className="page-section">
    <Helmet>
      <title>Ankith Raj Godugu - Contact</title>
      <meta
        contentType="text/html"
        content="Get in touch with Ankith Raj Godugu for collaboration or inquiries."
      />
    </Helmet>
    <div className="page-content">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-details">
        <p className="contact-item">
          <Phone className="contact-icon hover:scale-110" />
          <span className="text-gray-200">+91 7659968809</span>
        </p>
        <p className="contact-item">
          <Mail className="contact-icon hover:scale-110" />
          <span className="text-gray-200">ankithrajgodugu@gmail.com</span>
        </p>
        <p className="contact-item">
          <Instagram className="contact-icon hover:scale-110" />
          <a href="https://www.instagram.com/ankith_raj_godugu/?igsh=MWhnbGx2OHZvZjUxcw%3D%3D#" target="_blank" rel="noreferrer" className="contact-link">
            @ankith_raj_godugu
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;