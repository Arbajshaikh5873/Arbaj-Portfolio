// About Component
import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card-custom">
              <div className="d-flex mb-4">
                <i
                  className="bi bi-mortarboard-fill"
                  style={{
                    fontSize: "2.5rem",
                    color: "#667eea",
                    marginRight: "20px",
                  }}
                ></i>
                <div>
                  <h3 style={{ color: "#e4e4e4" }}>Education</h3>
                  <p style={{ color: "#b8b8b8", marginBottom: "5px" }}>
                    <strong>Bachelor of Engineering</strong>
                  </p>
                  <p style={{ color: "#888" }}>
                    RMD Sinhgad Technical Institutes Campus (2021 – 2025)
                  </p>
                  <p style={{ color: "#888", fontSize: "0.95rem" }}>
                    Relevant coursework in Data Structures & Algorithms,
                    Object-Oriented Programming, Web Development. Active
                    participant in technical clubs and coding contests.
                  </p>
                </div>
              </div>
              <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />
              <div className="d-flex">
                <i
                  className="bi bi-trophy-fill"
                  style={{
                    fontSize: "2.5rem",
                    color: "#764ba2",
                    marginRight: "20px",
                  }}
                ></i>
                <div>
                  <h3 style={{ color: "#e4e4e4" }}>Achievements</h3>
                  <ul
                    style={{
                      listStyle: "none",
                      paddingLeft: 0,
                      color: "#b8b8b8",
                    }}
                  >
                    <li>🏆 Best Final Year Project Award</li>
                    <li>🏏 Best Performer Award (Cricket)</li>
                    <li>☁️ Microsoft Certified: Azure Fundamentals (AZ-900)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
