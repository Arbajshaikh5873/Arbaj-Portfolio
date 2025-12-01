// import React, { useState, useEffect } from "react";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Phone,
//   ExternalLink,
//   Award,
//   Briefcase,
//   Code,
//   GraduationCap,
//   ChevronDown,
// } from "lucide-react";

// export default function Portfolio() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const skills = {
//     Frontend: [
//       "React.js",
//       "JavaScript",
//       "Redux Toolkit",
//       "React Router",
//       "HTML",
//       "CSS",
//       "Bootstrap",
//     ],
//     Backend: ["Node.js", "Express.js", "REST APIs"],
//     Databases: ["MongoDB", "MySQL"],
//     Tools: ["Git/GitHub", "VS Code", "Postman"],
//     Core: ["Java", "OOP", "DSA", "MVC Architecture", "API Integration"],
//   };

//   const projects = [
//     {
//       title: "E-Vikreta",
//       subtitle: "Final Year Project | MERN Stack",
//       description:
//         "Developed a complete marketplace using MERN stack with responsive UI, backend APIs, and clean architecture. Integrated WhatsApp API for real-time communication, improving vendor reach and customer accessibility.",
//       tech: [
//         "MongoDB",
//         "Express.js",
//         "React.js",
//         "Node.js",
//         "Redux",
//         "WhatsApp API",
//       ],
//       github:
//         "https://github.com/Arbajshaikh5873/E-Vikreta-Final-Year-Project-",
//       award: "Best Final Year Project Award",
//     },
//     {
//       title: "PasteApp",
//       subtitle: "React + Redux",
//       description:
//         "Built a web application for storing notes and code snippets with full CRUD functionality and search capabilities. Implemented Redux for state management and React Router for seamless navigation.",
//       tech: ["React.js", "Redux", "React Router", "JavaScript"],
//       github: "https://github.com/Arbajshaikh5873/PasteApp",
//       link: "https://github.com/Arbajshaikh5873/PasteApp",
//     },
//   ];

//   const experience = [
//     {
//       role: "Instructor",
//       company: "Rajesh Jain Academy",
//       location: "Pune, India",
//       period: "Jun 2025 – Present",
//       points: [
//         "Instructed batches of 30+ learners on core programming concepts, including Java and OOP",
//         "Provided one-on-one mentorship to over 50 individuals, boosting problem-solving skills",
//         "Contributed to an 85% student certification success rate",
//       ],
//     },
//     {
//       role: "Front-End Developer Intern",
//       company: "RightShift InfoTech",
//       location: "Pune, India",
//       period: "Dec 2024 – Mar 2025",
//       points: [
//         "Built responsive websites using HTML, CSS, JavaScript, and React",
//         "Collaborated effectively within a team, ensuring timely project delivery",
//         "Solved UI/UX design challenges to improve aesthetics and user experience",
//       ],
//     },
//   ];

//   const certifications = [
//     {
//       name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
//       date: "Jan 2024",
//     },
//     { name: "Java Programming Certificate", date: "Apr 2024" },
//     { name: "Web Technology Certificate", date: "Mar 2024" },
//   ];

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: "smooth" });
//     setActiveSection(sectionId);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               AS
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {[
//                 "home",
//                 "about",
//                 "experience",
//                 "projects",
//                 "skills",
//                 "contact",
//               ].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`capitalize transition-colors ${
//                     activeSection === section
//                       ? "text-blue-400"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {section}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center px-4 pt-20"
//       >
//         <div
//           className={`text-center transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h1 className="text-6xl md:text-8xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Arbaj Shaikh
//             </span>
//           </h1>
//           <p className="text-2xl md:text-3xl text-gray-300 mb-4">
//             Full Stack Developer
//           </p>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
//             Skilled in MERN Stack, REST APIs, scalable UI development, and
//             database management. Experienced in real-world projects, API
//             integrations, and problem-solving with DSA and OOP.
//           </p>
//           <div className="flex justify-center space-x-6 mb-12">
//             <a
//               href="https://github.com/Arbajshaikh5873"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//             <a
//               href="https://linkedin.com/in/arbajshaikh5873"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
//             >
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a
//               href="mailto:arbajshaikh5873@gmail.com"
//               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
//             >
//               <Mail className="w-6 h-6" />
//             </a>
//           </div>
//           <button
//             onClick={() => scrollToSection("projects")}
//             className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
//           >
//             View My Work
//           </button>
//           <div className="mt-12 animate-bounce">
//             <ChevronDown className="w-8 h-8 mx-auto text-gray-500" />
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               About Me
//             </span>
//           </h2>
//           <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
//             <div className="flex items-start space-x-4 mb-6">
//               <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0" />
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Education</h3>
//                 <p className="text-gray-300">Bachelor of Engineering</p>
//                 <p className="text-gray-400">
//                   RMD Sinhgad Technical Institutes Campus (2021 – 2025)
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Relevant coursework in Data Structures & Algorithms,
//                   Object-Oriented Programming, Web Development. Active
//                   participant in technical clubs and coding contests.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <Award className="w-8 h-8 text-purple-400 flex-shrink-0" />
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Achievements</h3>
//                 <ul className="text-gray-300 space-y-1">
//                   <li>🏆 Best Final Year Project Award</li>
//                   <li>🏏 Best Performer Award (Cricket)</li>
//                   <li>☁️ Microsoft Certified: Azure Fundamentals (AZ-900)</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20 px-4 bg-gray-900/50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>
//           <div className="space-y-8">
//             {experience.map((exp, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all"
//               >
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h3 className="text-2xl font-semibold text-blue-400">
//                       {exp.role}
//                     </h3>
//                     <p className="text-xl text-gray-300">{exp.company}</p>
//                     <p className="text-gray-400">{exp.location}</p>
//                   </div>
//                   <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
//                     {exp.period}
//                   </span>
//                 </div>
//                 <ul className="space-y-2 text-gray-300">
//                   {exp.points.map((point, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-blue-400 mr-2">▹</span>
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10"
//               >
//                 {project.award && (
//                   <div className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm mb-4">
//                     🏆 {project.award}
//                   </div>
//                 )}
//                 <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-blue-400 mb-4">{project.subtitle}</p>
//                 <p className="text-gray-300 mb-6">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-4">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//                   >
//                     <Github className="w-5 h-5" />
//                     <span>Code</span>
//                   </a>
//                   {project.link && (
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//                     >
//                       <ExternalLink className="w-5 h-5" />
//                       <span>Live Demo</span>
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 px-4 bg-gray-900/50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Skills & Technologies
//             </span>
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {Object.entries(skills).map(([category, items]) => (
//               <div
//                 key={category}
//                 className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
//               >
//                 <h3 className="text-xl font-semibold mb-4 text-blue-400">
//                   {category}
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {items.map((skill, i) => (
//                     <span
//                       key={i}
//                       className="bg-gray-700/50 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Certifications */}
//           <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
//             <h3 className="text-2xl font-semibold mb-6 text-purple-400">
//               Certifications
//             </h3>
//             <div className="space-y-4">
//               {certifications.map((cert, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between border-l-4 border-blue-500 pl-4"
//                 >
//                   <span className="text-gray-300">{cert.name}</span>
//                   <span className="text-gray-500 text-sm">{cert.date}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-4">
//         <div className="max-w-2xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-8">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Get In Touch
//             </span>
//           </h2>
//           <p className="text-gray-300 mb-8">
//             I'm currently looking for new opportunities. Whether you have a
//             question or just want to say hi, I'll get back to you as soon as
//             possible!
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <a
//               href="mailto:arbajshaikh5873@gmail.com"
//               className="flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
//             >
//               <Mail className="w-5 h-5" />
//               <span>arbajshaikh5873@gmail.com</span>
//             </a>
//             <a
//               href="tel:+917387779339"
//               className="flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
//             >
//               <Phone className="w-5 h-5" />
//               <span>+91-7387779339</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-4 border-t border-gray-800">
//         <div className="max-w-6xl mx-auto text-center text-gray-400">
//           <p>© 2024 Arbaj Shaikh. Built with React & Tailwind CSS.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    frontend: [
      "React.js",
      "JavaScript",
      "Redux Toolkit",
      "React Router",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git/GitHub", "VS Code", "Postman"],
    core: ["Java", "OOP", "DSA", "MVC Architecture"],
  };

  const projects = [
    {
      title: "E-Vikreta",
      subtitle: "Final Year Project",
      tech: "MERN Stack",
      description:
        "A comprehensive marketplace platform built with MERN stack featuring responsive UI, backend APIs, and clean architecture. Integrated WhatsApp API for real-time communication, improving vendor reach and customer accessibility.",
      features: [
        "Redux State Management",
        "WhatsApp API Integration",
        "Responsive Design",
        "RESTful APIs",
      ],
      github:
        "https://github.com/Arbajshaikh5873/E-Vikreta-Final-Year-Project-",
      icon: "fa-store",
    },
    {
      title: "PasteApp",
      subtitle: "Note & Code Storage",
      tech: "React + Redux",
      description:
        "A web application for storing notes and code snippets with full CRUD functionality. Implemented Redux for efficient state management and React Router for seamless navigation.",
      features: [
        "Create, Edit, Delete",
        "Search Functionality",
        "Redux State Management",
        "React Router Navigation",
      ],
      github: "https://github.com/Arbajshaikh5873/PasteApp",
      link: "https://portfolio-hmlur4m92-sarbaj637-gmailcoms-projects.vercel.app/",
      icon: "fa-clipboard",
    },
  ];

  const experience = [
    {
      role: "Instructor",
      company: "Rajesh Jain Academy",
      location: "Pune, India",
      period: "Jun 2025 – Present",
      points: [
        "Instructed batches of 30+ learners on core programming concepts, including Java and OOP",
        "Provided one-on-one mentorship to over 50 individuals, boosting problem-solving skills",
        "Contributed to an 85% student certification success rate",
      ],
    },
    {
      role: "Front-End Developer Intern",
      company: "RightShift InfoTech",
      location: "Pune, India",
      period: "Dec 2024 – Mar 2025",
      points: [
        "Built responsive websites using HTML, CSS, JavaScript, and React",
        "Collaborated effectively within a team, ensuring timely project delivery",
        "Solved UI/UX design challenges to improve aesthetics and user experience",
      ],
    },
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      date: "Jan 2024",
      link: "#",
    },
    { name: "Java Programming Certificate", date: "Apr 2024", link: "#" },
    { name: "Web Technology Certificate", date: "Mar 2024", link: "#" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif !important;
          overflow-x: hidden;
        }

        .navbar {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.95) !important;
          box-shadow: 0 2px 20px rgba(0, 168, 255, 0.1);
        }

        .nav-link {
          color: #e0e0e0 !important;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: #00a8ff !important;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background: linear-gradient(135deg, #00a8ff, #00d4ff);
          border-radius: 2px;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(0, 168, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00a8ff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-custom {
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, #00a8ff, #00d4ff);
          color: white;
        }

        .btn-primary-custom:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 168, 255, 0.4);
        }

        .btn-outline-custom {
          border: 2px solid #00a8ff;
          color: #00a8ff;
          background: transparent;
        }

        .btn-outline-custom:hover {
          background: #00a8ff;
          color: white;
          transform: translateY(-3px);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(135deg, #00a8ff, #00d4ff);
          border-radius: 2px;
        }

        .skill-badge {
          background: rgba(0, 168, 255, 0.1);
          border: 1px solid rgba(0, 168, 255, 0.3);
          color: #00d4ff;
          padding: 8px 16px;
          border-radius: 20px;
          margin: 5px;
          display: inline-block;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .skill-badge:hover {
          background: rgba(0, 168, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 168, 255, 0.3);
        }

        .project-card {
          background: rgba(26, 26, 46, 0.6);
          border: 1px solid rgba(0, 168, 255, 0.2);
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s ease;
          height: 100%;
          backdrop-filter: blur(10px);
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 168, 255, 0.5);
          box-shadow: 0 15px 40px rgba(0, 168, 255, 0.2);
        }

        .project-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #00a8ff, #00d4ff);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          margin-bottom: 20px;
        }

        .feature-tag {
          background: rgba(0, 168, 255, 0.15);
          color: #00d4ff;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          margin: 3px;
          display: inline-block;
        }

        .experience-card {
          background: rgba(26, 26, 46, 0.4);
          border-left: 3px solid #00a8ff;
          border-radius: 10px;
          padding: 25px;
          margin-bottom: 25px;
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          background: rgba(26, 26, 46, 0.6);
          transform: translateX(10px);
        }

        .cert-card {
          background: rgba(26, 26, 46, 0.4);
          border: 1px solid rgba(0, 168, 255, 0.2);
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .cert-card:hover {
          border-color: rgba(0, 168, 255, 0.5);
          transform: translateX(5px);
        }

        .contact-info {
          background: rgba(26, 26, 46, 0.4);
          border: 1px solid rgba(0, 168, 255, 0.2);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .contact-info:hover {
          background: rgba(26, 26, 46, 0.6);
          border-color: rgba(0, 168, 255, 0.5);
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: rgba(0, 168, 255, 0.1);
          border: 1px solid rgba(0, 168, 255, 0.3);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #00d4ff;
          font-size: 1.2rem;
          margin: 0 10px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #00a8ff, #00d4ff);
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 168, 255, 0.3);
        }

        footer {
          background: rgba(10, 10, 10, 0.95);
          border-top: 1px solid rgba(0, 168, 255, 0.2);
          padding: 30px 0;
          margin-top: 80px;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .hero-section h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          scrolled ? "scrolled" : ""
        }`}
        style={{
          background: scrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
        }}
      >
        <div className="container">
          <a className="navbar-brand gradient-text fw-bold" href="#home">
            ARBAJ SHAIKH
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["home", "about", "projects", "experience", "contact"].map(
                (section) => (
                  <li className="nav-item" key={section}>
                    <a
                      className={`nav-link ${
                        activeSection === section ? "active" : ""
                      }`}
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section);
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <p className="text-muted mb-2" style={{ fontSize: "1.1rem" }}>
                Hi, I'm
              </p>
              <h1 className="display-2 fw-bold mb-3" style={{ color: "#fff" }}>
                ARBAJ SHAIKH
              </h1>
              <h2 className="gradient-text mb-4" style={{ fontSize: "2rem" }}>
                Full Stack Developer
              </h2>
              <p
                className="lead mb-5"
                style={{
                  color: "#b0b0b0",
                  maxWidth: "700px",
                  margin: "0 auto 2rem",
                }}
              >
                Specialized in MERN Stack, REST APIs, and scalable UI
                development. Passionate about building innovative solutions with
                clean architecture and modern technologies.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a
                  href="#projects"
                  className="btn btn-custom btn-primary-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="btn btn-custom btn-outline-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Get In Touch
                </a>
              </div>
              <div className="mt-5">
                <a
                  href="https://github.com/Arbajshaikh5873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/arbajshaikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://leetcode.com/arbajshaikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="py-5" style={{ background: "#0a0a0a" }}>
        <div className="container py-5">
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              <h4 className="mb-3" style={{ color: "#00d4ff" }}>
                Profile
              </h4>
              <p style={{ color: "#b0b0b0", lineHeight: "1.8" }}>
                Full Stack Developer skilled in MERN, REST APIs, scalable UI
                development, and database management. Experienced in real-world
                projects, API integrations, and problem-solving with DSA and
                OOP.
                <span className="gradient-text fw-semibold">
                  {" "}
                  Microsoft Azure Certified
                </span>
                .
              </p>
              <h4 className="mb-3 mt-4" style={{ color: "#00d4ff" }}>
                Education
              </h4>
              <p style={{ color: "#b0b0b0" }}>
                <strong style={{ color: "#fff" }}>
                  Bachelor of Engineering
                </strong>
                <br />
                RMD Sinhgad Technical Institutes Campus
                <br />
                2021 – 2025
              </p>
            </div>
            <div className="col-lg-6">
              <h4 className="mb-4" style={{ color: "#00d4ff" }}>
                Technical Skills
              </h4>
              <div className="mb-4">
                <h6 className="text-white mb-2">Frontend</h6>
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mb-4">
                <h6 className="text-white mb-2">Backend</h6>
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mb-4">
                <h6 className="text-white mb-2">Databases</h6>
                {skills.databases.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mb-4">
                <h6 className="text-white mb-2">Tools & Platforms</h6>
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mb-4">
                <h6 className="text-white mb-2">Core Concepts</h6>
                {skills.core.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-5"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)",
        }}
      >
        <div className="container py-5">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <div className="row mt-5">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="project-card">
                  <div className="project-icon">
                    <i className={`fas ${project.icon}`}></i>
                  </div>
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="gradient-text mb-3">
                    {project.subtitle} | {project.tech}
                  </p>
                  <p style={{ color: "#b0b0b0", lineHeight: "1.7" }}>
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-custom btn-outline-custom"
                    >
                      <i className="fab fa-github me-2"></i>View Code
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-custom btn-primary-custom"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>Live
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-5"
        style={{ background: "#0a0a0a" }}
      >
        <div className="container py-5">
          <h2 className="section-title gradient-text">Experience</h2>
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              {experience.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <div>
                      <h4 className="text-white mb-1">{exp.role}</h4>
                      <h5 className="gradient-text mb-2">{exp.company}</h5>
                    </div>
                    <span className="badge bg-secondary">{exp.period}</span>
                  </div>
                  <p className="text-muted mb-3">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    {exp.location}
                  </p>
                  <ul style={{ color: "#b0b0b0" }}>
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <h3 className="gradient-text mb-4">
                Certifications & Achievements
              </h3>
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-white mb-1">{cert.name}</h6>
                      <small className="text-muted">{cert.date}</small>
                    </div>
                    <i
                      className="fas fa-certificate"
                      style={{ color: "#00a8ff", fontSize: "1.5rem" }}
                    ></i>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <div className="cert-card">
                  <h6 className="text-white mb-2">
                    <i
                      className="fas fa-trophy me-2"
                      style={{ color: "#ffd700" }}
                    ></i>
                    Achievements
                  </h6>
                  <ul className="mb-0" style={{ color: "#b0b0b0" }}>
                    <li>Best Performer Award (Cricket)</li>
                    <li>Best Final Year Project Award</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-5"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)",
        }}
      >
        <div className="container py-5">
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <div className="row mt-5">
            <div className="col-lg-6 mx-auto">
              <div className="contact-info">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="me-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(0, 168, 255, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="fas fa-envelope"
                      style={{ color: "#00d4ff" }}
                    ></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Email</small>
                    <a
                      href="mailto:arbajshaikh5873@gmail.com"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      arbajshaikh5873@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-info">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="me-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(0, 168, 255, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="fas fa-phone"
                      style={{ color: "#00d4ff" }}
                    ></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Phone</small>
                    <a
                      href="tel:+917387779339"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      +91-7387779339
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <p style={{ color: "#b0b0b0" }}>
                  Let's connect and build something amazing together!
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Arbajshaikh5873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/arbajshaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://leetcode.com/arbajshaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container text-center">
          <p className="mb-0" style={{ color: "#b0b0b0" }}>
            © 2025 Arbaj Shaikh. Built with{" "}
            <span className="gradient-text">React</span> &{" "}
            <span className="gradient-text">Bootstrap</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
