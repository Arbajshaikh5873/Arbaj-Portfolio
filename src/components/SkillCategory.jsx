import React from "react";

function SkillCategory({ category, items }) {
  return (
    <div className="skill-category">
      <h4>{category}</h4>
      {items.map((skill, i) => (
        <span key={i} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  );
}

export default SkillCategory;
