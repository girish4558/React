import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Components() {

  const Navigate = useNavigate()

  function MovePrev(){
    Navigate('/jsx')
  }

  function MoveNext(){
    Navigate('/props')
  }

  return (
        <div className="cmp-page">
            <h1 className="cmp-title">React Components</h1>
            <p className="cmp-subtitle">
              Learn how components help you build reusable, scalable user interfaces
            </p>

            {/* 1. What is a Component */}
            <section className="cmp-section">
              <h2 className="cmp-heading">What is a Component?</h2>
              <p className="cmp-text">
                A <strong>React component</strong> is a reusable piece of UI.
                Components allow you to split the UI into independent, reusable blocks.
              </p>
              <ul className="cmp-list">
                <li>Components are reusable UI blocks</li>
                <li>Everything in React is a component</li>
                <li>Examples: Button, Header, Footer, Card</li>
              </ul>
            </section>

            {/* 2. Types of Components */}
            <section className="cmp-section">
              <h2 className="cmp-heading">Types of Components</h2>

              <h3 className="cmp-subheading">🔹 Functional Components</h3>
              <p className="cmp-text">
                Functional components are function-based components that return JSX.
                They are the most commonly used components in modern React.
              
              </p>
                <pre className="cmp-code">
          {`function Welcome() {
            return <h1>Hello React</h1>;
          }`}
              </pre>

              

              <h3 className="cmp-subheading">🔹 Class Components</h3>
              <p className="cmp-text">
                Class components are an older approach and use the <code>render()</code>{" "}
                method. Today, functional components are preferred.

              </p>
                <pre className="cmp-code">
{`class Welcome extends React.Component {
  render() {
    return <h1>Hello React</h1>;
  }
}`}
</pre>
            </section>

            {/* 3. Creating a Component */}
            <section className="cmp-section">
              <h2 className="cmp-heading">Creating a Component</h2>
              <ul className="cmp-list">
                <li>Use PascalCase for file names (Example: Header.jsx)</li>
                <li>Export the component as default</li>
                <li>Import and use it inside another component</li>
              
              <pre className="cmp-code">
          {`import Header from "./Header";`}
              </pre>
              </ul>

              
            </section>

            {/* 4. Reusability */}
            <section className="cmp-section">
              <h2 className="cmp-heading">Component Reusability</h2>
              <p className="cmp-text">
                One component can be reused multiple times with different data.
              </p>
                    <pre className="cmp-code">
                {`<Card title="Learn React" />
<Card title="Practice React" />`}
                    </pre>

            </section>

            {/* 5. Structure */}
            <section className="cmp-section">
              <h2 className="cmp-heading">Component Structure (Best Practices)</h2>
              <ul className="cmp-list">
                <li>One component = one responsibility</li>
                <li>Small and readable components</li>
                <li>Organized folder structure</li>
              <pre className="cmp-code">
          {`components/
          ├── Header.jsx
          ├── Sidebar.jsx
          ├── Card.jsx`}
              </pre>
              </ul>

            </section>

            {/* 6. Props */}
            <section className="cmp-section">
              <h2 className="cmp-heading">Props in Components (Intro)</h2>
              <p className="cmp-text">
                Props allow components to receive data and are read-only.
              </p>
              <pre className="cmp-code">
          {`function Card({ title }) {
            return <h3>{title}</h3>;
          }`}
              </pre>

            </section>

            {/* 7. Composition */}
            <section className="cmp-section">
              <h2 className="cmp-heading">Component Composition</h2>
              <p className="cmp-text">
                Components can contain other components using <strong>children</strong>.
              </p>
              <pre className="cmp-code">
          {`<Card>
    <p>React makes UI easy</p>
</Card>`}
              </pre>

            </section>

            {/* 8. Conditional */}
            <section className="cmp-section">
              <h2 className="cmp-heading">Conditional Components</h2>
              <p className="cmp-text">
                Components can be rendered conditionally.
              </p>
              <pre className="cmp-code">
          {`{isLoggedIn && <Dashboard />}`}
              </pre>

            </section>

            {/* 9. When to Create */}
            <section className="cmp-section">
              <h2 className="cmp-heading">When to Create a New Component?</h2>
              <ul className="cmp-list">
                <li>Repeated UI</li>
                <li>Large JSX blocks</li>
                <li>Reusable logic</li>
              </ul>
            </section>

            {/* 10. Real-world */}
            <section className="cmp-section">
              <h2 className="cmp-heading">Real-World Component Examples</h2>
              <div className="cmp-tags">
                <span>Header</span>
                <span>Sidebar</span>
                <span>Footer</span>
                <span>Modal</span>
                <span>Card</span>
                <span>Button</span>
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
