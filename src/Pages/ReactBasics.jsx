import React from 'react'
import reactSetupVideo from './../assets/ProjectSetUp.mp4'
import { useNavigate } from 'react-router-dom'

export default function ReactBasics() {
  const Navigate = useNavigate()

  function MovePrev(){
    Navigate('/')
  }

  function MoveNext(){
    Navigate('/jsx')
  }

  return (
    <div>
      <div className="react-page">

      {/* HERO */}
      <section className="react-hero">
        <h1>React Basics 🚀</h1>
        <p>
          Learn the fundamentals of React and start building modern,
          component-based user interfaces.
        </p>
      </section>

      {/* WHAT IS REACT */}
      <section className="react-section card">
        <h2>What is React?</h2>
        <p>
          React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. 
        </p>
      </section>

      {/* WHY REACT */}
      <section className="react-section card">
        <h2>Why React?</h2>
        <ul>
          <li>Component-based architecture</li>
          <li>Fast rendering with Virtual DOM</li>
          <li>Reusable UI components</li>
          <li>Strong community support</li>
        </ul>
      </section>

      {/* Component*/}
      <section className="react-section card">
        <h2>What is Component?</h2>
        <ul>
          <li>React applications are built using components, which are reusable pieces of UI.</li>
        </ul>
      </section>

      {/* HOW REACT WORKS */}
      <section className="react-section card">
        <h2>How React Works</h2>
        <p>
          React uses a Virtual DOM to track UI changes efficiently. When state
          or props change, React updates only the required parts of the UI
          instead of reloading the whole page.
        </p>
      </section>

      {/* PROJECT STRUCTURE */}
      <section className="react-section card">
        <h2>React Project Structure</h2>

        <pre className="code-block">
          {`src/
          ├── components/
          ├── pages/
          ├── App.jsx
          ├── main.jsx`}
        </pre>

        <p className="note">
          This structure helps keep the application organized and scalable.
        </p>
      </section>

      {/* CREATE PROJECT */}
      <section className="react-section">
        <h2>Creating a React Project</h2>
        <div className="note-box">
          <strong>Note:</strong> Before creating a React project, make sure
          <span className="highlight"> Node.js </span>
          is downloaded and installed on your system.
      </div>
        <p>
          Instead of commands, you can follow a step-by-step
          <strong> screenshot or video tutorial </strong>
          to create a React project using tools like Vite or Create React App.
        </p>

        <div className="video-placeholder">
          <video type="vedio/mp4" src={reactSetupVideo} controls className="tutorial-video">Your browser does not support the video tag.</video>
        </div>
      </section>

      {/* HELLO WORLD */}
      <section className="react-section card">
        <h2>Hello World Example</h2>

        <pre className="code-block">
            {`function App() {
              return <h1>Hello React!</h1>;
            }

            export default App;`}
        </pre>

        <p className="note">
          This is a simple React component that displays text on the screen.
        </p>
      </section>

    </div>
    <div className="nav-buttons">
      <button className="nav-btn prev" onClick={MovePrev}>← Previous</button>
      <button className="nav-btn next" onClick={MoveNext}>Next →</button>
    </div>

    </div>
  )
}
