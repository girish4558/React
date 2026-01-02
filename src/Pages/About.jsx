import React from 'react'

export default function About() {
  return (
    <section className="about-wrapper">
      <div className="about-container">

        <header className="about-header">
          <h1>About React Learning Portal</h1>
          <p>
            React Learning Portal is a structured learning platform designed
            to help developers understand React concepts in a clear and
            practical way.
          </p>
        </header>

        <div className="about-grid">

          <div className="about-card">
            <h3>🎯 Purpose</h3>
            <p>
              This project was built as part of a React training program to
              practice real-world React development using modern best practices.
            </p>
          </div>

          <div className="about-card">
            <h3>👨‍🎓 Target Audience</h3>
            <p>
              Beginners and intermediate learners who want a step-by-step
              understanding of React fundamentals and hooks.
            </p>
          </div>

          <div className="about-card">
            <h3>✨ Key Features</h3>
            <ul>
              <li>Concept-wise navigation</li>
              <li>Search across topics</li>
              <li>Hooks & advanced topics</li>
              <li>Responsive UI design</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>🛠 Tech Stack</h3>
            <ul>
              <li>React (Hooks & Functional Components)</li>
              <li>React Router</li>
              <li>Context API</li>
              <li>Rendering</li>
            </ul>
          </div>

        </div>


      </div>

                <section className="about-contact-section">
            <h2 className="about-contact-title">Contact</h2>
            <p className="about-contact-subtitle">
                Feel free to connect for learning, collaboration, or feedback.
            </p>

            <div className="about-contact-grid">

                <div className="about-contact-card">
                <i className="bi bi-envelope"></i>
                <h4>Email</h4>
                <p>reactlearning.portal@gmail.com</p>
                </div>

                <div className="about-contact-card">
                <i className="bi bi-phone"></i>
                <h4>Phone</h4>
                <p>+91 9874560123</p>
                </div>

                <div className="about-contact-socials">
                <a href="#" className="social-link instagram" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="social-link facebook" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                </a>
                </div>

            </div>
            </section>

    </section>
  );
}

