// Hero Component
import React from "react";

function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="container text-center">
        <h1 className="hero-title">Arbaj Shaikh</h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <p className="hero-description">
          Skilled in MERN Stack, REST APIs, scalable UI development, and
          database management. Experienced in real-world projects, API
          integrations, and problem-solving with DSA and OOP.
        </p>
        <div className="social-links mb-4">
          <a
            href="https://github.com/Arbajshaikh5873"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/arbaj-shaikh-b9a8b7228"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arbajshaikh5873@gmail.com&su=Hello&body=I%20want%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <a
          href="#projects"
          className="btn-primary-custom"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          View My Work
        </a>
        <div className="scroll-indicator">
          <i
            className="bi bi-chevron-down"
            style={{ fontSize: "2rem", color: "#888" }}
          ></i>
        </div>
      </div>
    </section>
  );
}

export default Hero;
