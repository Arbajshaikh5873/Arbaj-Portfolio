// Projects Component
import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "E-Vikreta",
      subtitle: "Final Year Project | MERN Stack",
      description:
        "Developed a complete marketplace using MERN stack with responsive UI, backend APIs, and clean architecture. Integrated WhatsApp API for real-time communication, improving vendor reach and customer accessibility.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Redux",
        "WhatsApp API",
      ],
      github:
        "https://github.com/Arbajshaikh5873/E-Vikreta-Final-Year-Project-",
      award: "Best Final Year Project Award",
    },
    {
      title: "PasteApp",
      subtitle: "React + Redux",
      description:
        "Built a web application for storing notes and code snippets with full CRUD functionality and search capabilities. Implemented Redux for state management and React Router for seamless navigation.",
      tech: ["React.js", "Redux", "React Router", "JavaScript"],
      github: "https://github.com/Arbajshaikh5873/PasteApp",
      link: "https://arbaj-portfolio-six.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
