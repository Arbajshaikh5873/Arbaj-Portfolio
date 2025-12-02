// Skills Component
import React from "react";
import SkillCategory from "./SkillCategory";
import CertificationItem from "./CertificationItem";

function Skills() {
  const skills = {
    Frontend: [
      "React.js",
      "JavaScript",
      "Redux Toolkit",
      "React Router",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    Backend: ["Node.js", "Express.js", "REST APIs"],
    Databases: ["MongoDB", "MySQL"],
    "Tools & Platforms": ["Git/GitHub", "VS Code", "Postman"],
    "Core Concepts": [
      "Java",
      "OOP",
      "DSA",
      "MVC Architecture",
      "API Integration",
    ],
  };

  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      date: "Jan 2024",
    },
    { name: "Java Programming Certificate", date: "Apr 2024" },
    { name: "Web Technology Certificate", date: "Mar 2024" },
  ];

  return (
    <section id="skills" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="row">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="col-lg-6 mb-3">
              <SkillCategory category={category} items={items} />
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card-custom">
              <h3 style={{ color: "#764ba2", marginBottom: "25px" }}>
                Certifications
              </h3>
              {certifications.map((cert, i) => (
                <CertificationItem key={i} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
