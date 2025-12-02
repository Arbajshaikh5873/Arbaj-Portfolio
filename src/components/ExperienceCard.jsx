import React from "react";

function ExperienceCard({ exp }) {
  return (
    <div className="experience-card">
      <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
        <div>
          <h3>{exp.role}</h3>
          <p className="company">{exp.company}</p>
          <p style={{ color: "#888" }}>{exp.location}</p>
        </div>
        <span className="period">{exp.period}</span>
      </div>
      <ul>
        {exp.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
export default ExperienceCard;
