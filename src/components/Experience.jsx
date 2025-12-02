// Experience Component
import React from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
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

  return (
    <section id="experience" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
