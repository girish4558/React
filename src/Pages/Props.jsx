import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Props() {

  const Navigate = useNavigate()

  function MovePrev(){
    Navigate('/components')
  }

  function MoveNext(){
    Navigate('/hooks/use-state')
  }


  return (
    <div className="props-page">
      <div className="props-title">
        <h1><i className="bi bi-arrow-left-right"></i> React Props</h1>
      <p>
        Learn how React components receive and use data with props
      </p>
      </div>

      {/* What are Props */}
      <section className="props-section">
        <h2>What are Props?</h2>
        <p>
          <strong>Props</strong> (short for properties) are used to pass data
          from one component to another in React.
        </p>
        <p>Props make components reusable and dynamic.</p>
      </section>

      {/* Why Props */}
      <section className="props-section">
        <h2>Why Props are Needed?</h2>
        <ul>
          <li>To share data between components</li>
          <li>To make components reusable</li>
          <li>To customize component behavior</li>
        </ul>
      </section>

      {/* Passing Props */}
      <section className="props-section">
        <h2>Passing Props to a Component</h2>
        <pre className="props-code">
{`<Card title="Learn React" author="Gireesh" />`}
        </pre>
        
      {/* Receiving Props */}

        <h2>Receiving Props</h2>
        <pre className="props-code">
{`function Card({ title, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}`}
        </pre>
      </section>

      

      {/* Read-only */}
      <section className="props-section">
        <h2>Props are Read-Only</h2>
        <p>
          Props cannot be modified inside the component.
          They are controlled by the parent component.
        </p>
      </section>

      {/* Props vs State */}
      <section className="props-section">
        <h2>Props vs State (Quick View)</h2>
        <div className="props-compare">
          <div>
            <h4>Props</h4>
            <ul>
              <li>Passed from parent</li>
              <li>Read-only</li>
              <li>Used for data display</li>
            </ul>
          </div>
          <div>
            <h4>State</h4>
            <ul>
              <li>Managed inside component</li>
              <li>Can change</li>
              <li>Used for interactivity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Children */}
      <section className="props-section">
        <h2>Children Prop</h2>
        <pre className="props-code">
{`<Card>
  <p>React makes UI easy</p>
</Card>`}
        </pre>
      </section>

      {/* Real-world */}
      <section className="props-section">
        <h2>Real-World Props Examples</h2>
        <div className="props-tags">
          <span>Button label</span>
          <span>User name</span>
          <span>Profile image</span>
          <span>Theme</span>
          <span>Permissions</span>
        </div>
      </section>

      {/* Navigation */}
      <div className="nav-buttons">
        <button className="nav-btn prev" onClick={MovePrev}>← Previous</button>
        <button className="nav-btn next" onClick={MoveNext}>Next →</button>
      </div>
    </div>
  )
}
