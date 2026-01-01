import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function JSX() {

  const name = "React Learner";
  const isLoggedIn = true;
  const fruits = ["Apple", "Banana", "Orange"];

  const Navigate = useNavigate()

  function MovePrev(){
    Navigate('/react')
  }

  function MoveNext(){
    Navigate('/components')
  }
  return (
    <div className="jsx-page">
      {/* Title */}
      <h1 className="page-title">React JSX</h1>
      <p className="page-subtitle">
        Learn how JSX makes writing React UI simple and powerful.
      </p>

      {/* What is JSX */}
      <section className="jsx-section">
        <h2>What is JSX?</h2>
        <p>
          <strong>JSX</strong> stands for <strong>JavaScript XML</strong>. <br /> It allows us to write
          HTML-like code inside JavaScript. <br /> <strong>React</strong> uses <strong>JSX</strong> to describe what the
          <strong> UI</strong> should look like.
        </p>
      </section>

      {/* Coding JSX */}
      <section className="jsx-section">
        <h2>Coding JSX</h2>
        <p>
          <strong>JSX</strong> allows us to write <strong>HTML</strong> elements in <strong>JavaScript</strong> and place them in the <strong>DOM</strong> without any <code className='cec'>createElement()</code> and/or <code className='cec'>appendChild()</code> methods.<br /><strong>JSX</strong> converts <strong>HTML</strong> tags into react elements.
        </p>
      </section>

      {/* Why JSX */}
      <section className="jsx-section">
        <h2>Why JSX?</h2>
        <ul>
          <li>Makes UI code readable</li>
          <li>Combines UI and logic in one place</li>
          <li>Easier than using React.createElement</li>
        </ul>
      </section>

      {/* JSX vs HTML */}
      <section className="jsx-section">
        <h2>JSX vs HTML</h2>
        <table className="jsx-table">
          <thead>
            <tr>
              <th>HTML</th>
              <th>JSX</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>class</td>
              <td>className</td>
            </tr>
            <tr>
              <td>for</td>
              <td>htmlFor</td>
            </tr>
            <tr>
              <td>String only</td>
              <td>JavaScript expressions</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* JSX Rules */}
      <section className="jsx-section">
        <h2>JSX Rules</h2>
        <ul>
          <li>JSX must have one parent element</li>
          <li>Use className instead of class</li>
          <li>Self-close tags like &lt;img /&gt;</li>
          <li>Use curly braces for JavaScript</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="jsx-section">
        <h2>JSX Basic Examples</h2>

        <div className="jsx-page">
      <h1>JSX Basic Examples</h1>

      {/* Using Braces */}
      <section>
        <h2>Using Braces {"{}"}</h2>
        <p>Hello, React Learner 👋

        <pre>
          <code>{`function App() {
  return <p>Hello, React Learner 👋</p>;
}`}</code>

        </pre>
        </p>

      </section>

      {/* Conditional Rendering */}
      <section>
        <h2>Conditional Rendering</h2>
        <p>{isLoggedIn ? "Welcome back!" : "Please login"}


        <pre>
          <code>{`const isLoggedIn = true;

{isLoggedIn ? (
  <p>Welcome back!</p>
) : (
  <p>Please login</p>
)}`}</code>
        </pre>
        </p>

      </section>

      {/* JSX Inline Styles */}
      <section>
        <h2>JSX Inline Styles</h2>
        <p style={{ color: "red", fontSize: "18px" }}>
          This text is styled using JSX
        <pre>
          <code>{`<p style={{ color: "red", fontSize: "18px" }}>
  This text is styled using JSX
</p>`}</code>
        </pre>
        </p>

      </section>

      {/* JSX with List */}
      <section>
        <h2>JSX with List</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        <pre>
          <code>{`const fruits = ["Apple", "Banana", "Orange"];

<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>`}</code>
        </pre>
        </ul>

      </section>
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
