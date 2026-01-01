import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UseState() {
  /* Live demos */
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState("light");

  const Navigate = useNavigate()

  function MovePrev(){
    Navigate('/conditional-Rendaring')
  }

  function MoveNext(){
    Navigate('/hooks/use-effect')
  }

  return (
    <div className="us-page">
      <div className="us-title">
        <h1><i className="bi bi-lightning"></i> useState Hook</h1>
      <p>
        Learn how to manage state in React functional components
      </p>
      </div>

      {/* What is useState */}
      <section className="us-card">
        <h2>What is useState?</h2>
        <ul>
          <li><strong>useState</strong> is a React Hook used to add state to functional components</li>
          <li><strong>useState</strong> lets functional components manage dynamic data</li>
          <li>State = data that can change over time</li>
          <li>Introduced to replace state usage in class components</li>
        </ul>
      </section>

      {/* Why useState */}
      <section className="us-card">
        <h2>Why useState?</h2>
        <ul>
          <li>To update UI dynamically</li>
          <li>To store user input</li>
          <li>To manage toggles, counters, forms</li>
        </ul>
      </section>

      {/* Importing */}
      <section className="us-card">
        <h2>Importing useState</h2>
        <pre className="us-code">
{`import { useState } from "react";`}
        </pre>
      </section>

      {/* Syntax */}
      <section className="us-card">
        <h2>Basic Syntax</h2>
        <pre className="us-code">
{`const [state, setState] = useState(initialValue);`}
        </pre>
      </section>

      {/* Examples */}
      <h2 className="us-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="us-demo">
        <h3>1️⃣ Counter</h3>
        <button className="us-btn" onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
        <pre className="us-code">
{`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="us-demo">
        <h3>2️⃣ Toggle Switch</h3>
        <button className="us-btn" onClick={() => setIsOn(!isOn)}>
          {isOn ? "ON" : "OFF"}
        </button>
        <pre className="us-code">
{`const [isOn, setIsOn] = useState(false);

<button onClick={() => setIsOn(!isOn)}>
  {isOn ? "ON" : "OFF"}
</button>`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="us-demo">
        <h3>3️⃣ Input Handling</h3>
        <input
          className="us-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, <strong>{name}</strong></p>

        <pre className="us-code">
{`const [name, setName] = useState("");

<input
  value={name}
  onChange={e => setName(e.target.value)}
/>`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="us-demo">
        <h3>4️⃣ Array State (Todo)</h3>
        <button
          className="us-btn"
          onClick={() => setItems([...items, "New Item"])}
        >
          Add Item
        </button>

        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <pre className="us-code">
{`const [items, setItems] = useState([]);

setItems([...items, "New Item"]);`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className={`us-demo theme-${theme}`}>
        <h3>5️⃣ Theme Toggle</h3>
        <button
          className="us-btn"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          Switch Theme
        </button>

        <pre className="us-code">
{`const [theme, setTheme] = useState("light");

setTheme(theme === "light" ? "dark" : "light");`}
        </pre>
      </section>

      {/* Navigation */}
      <div className="nav-buttons">
        <button className="nav-btn prev" onClick={MovePrev}>← Previous</button>
        <button className="nav-btn next" onClick={MoveNext}>Next →</button>
      </div>
    </div>
  );
}
