import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.award && (
        <span className="project-award">🏆 {project.award}</span>
      )}
      <h3>{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p style={{ color: "#b8b8b8", marginBottom: "20px" }}>
        {project.description}
      </p>
      <div className="mb-3">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i> Code
        </a>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-box-arrow-up-right"></i> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
