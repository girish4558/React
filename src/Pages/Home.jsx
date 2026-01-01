import React from 'react'
import './../Global.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const Navigate = useNavigate()

  function MoveNext(){
    Navigate('/react')
  }
  return (
    <div className="home">

        <div className="home-hero">
                {/* HERO SECTION */}
          <section className="hero">

            <div className='hero-content'>
              <span className="badge">🚀 Learn React</span>
              <h1>Welcome to <span>React Learning Portal</span></h1>
              <p>
                Learn React concepts with interactive examples and real-world use cases.
              </p>
            </div>

            <img
              src="https://codup.co/wp-content/uploads/2021/07/1.jpg"
              alt="React"
              className="hero-img"
            />
          </section>

          {/* ACTION CARDS */}
          <section className="card-row">
            <Card title="Learn" desc="Understand key React concepts" icon="📘" />
            <Card title="Practice" desc="Try interactive examples" icon="⚡" />
            <Card title="Build" desc="Apply knowledge to projects" icon="🚀" />
          </section>

          {/* CORE CONCEPTS */}
          <section>
            <h2>Core React Concepts</h2>

            <div className="card-grid">
              <Concept title="JSX" desc="Learn how JSX works" />
              <Concept title="Components" desc="Build reusable UI blocks" />
              <Concept title="Props" desc="Pass data between components" />
              <Concept title="Hooks" desc="Manage component logic" />
              <Concept title="Routes" desc="Navigate between pages" />
              <Concept title="API Integration" desc="Fetch external data" />
            </div>
          </section>

          <div className="cta-wrapper">
              <button onClick={MoveNext} className="btn-primary">
                Start Learning
              </button>
          </div>

        </div>
    </div>
  )
}

/* Small reusable components */
function Card({ title, desc, icon }) {
  return (
    <div className="card">
      <span className="icon">{icon}</span>
      <div className="concept">
        <h3>{title}</h3>
      <p>{desc}</p>
      </div>
    </div>
  )
}

function Concept({ title, desc }) {
  return (
    <div className="concept-card">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

