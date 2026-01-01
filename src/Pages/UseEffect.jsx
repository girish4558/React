import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UseEffect() {
  const navigate = useNavigate();

  /* Live demos */
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState("");
  const [users, setUsers] = useState([]);

  function MovePrev() {
    navigate("/hooks/use-state");
  }

  function MoveNext() {
    navigate("/hooks/use-context");
  }

  /* Example 2 – Timer */
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* Example 3 – Window resize */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Example 4 – Document title */
  useEffect(() => {
    document.title = title || "React-Learning-Portal";
  }, [title]);

  /* Example 5 – API simulation */
  useEffect(() => {
    setTimeout(() => {
      setUsers(["Girish", "Anu", "Rahul"]);
    }, 1500);
  }, []);

  return (
    <div className="ue-page">
      <div className="ue-title">
        <h1><i className="bi bi-lightning"></i> useEffect Hook</h1>
        <p>Handle side effects in React components</p>
      </div>

      {/* What is useEffect */}
      <section className="ue-card">
        <h2>What is useEffect?</h2>
        <ul>
          <li><strong>useEffect</strong> is a React Hook used to handle side effects</li>
          <li>Runs after component render</li>
          <li>Used for API calls, timers, subscriptions</li>
        </ul>
      </section>

      {/* Why useEffect */}
      <section className="ue-card">
        <h2>Why useEffect?</h2>
        <ul>
          <li>To fetch data from APIs</li>
          <li>To work with browser APIs</li>
          <li>To replace lifecycle methods</li>
        </ul>
      </section>

      {/* Importing */}
      <section className="ue-card">
        <h2>Importing useEffect</h2>
        <pre className="ue-code">
{`import { useEffect } from "react";`}
        </pre>
      </section>

      {/* Syntax */}
      <section className="ue-card">
        <h2>Basic Syntax</h2>
        <pre className="ue-code">
{`useEffect(() => {
  // side effect code
}, [dependencies]);`}
        </pre>
      </section>

      <h2 className="ue-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ue-demo">
        <h3>1️⃣ Run on Every Render</h3>
        <button className="ue-btn" onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
        <pre className="ue-code">
{`useEffect(() => {
  console.log("Component rendered");
});`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ue-demo">
        <h3>2️⃣ Timer (Component Did Mount)</h3>
        <p>Seconds: <strong>{seconds}</strong></p>
        <pre className="ue-code">
{`useEffect(() => {
  const timer = setInterval(() => {
    setSeconds(s => s + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ue-demo">
        <h3>3️⃣ Window Resize Listener</h3>
        <p>Window Width: <strong>{width}px</strong></p>
        <pre className="ue-code">
{`useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ue-demo">
        <h3>4️⃣ Update Document Title</h3>
        <input
          className="ue-input"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <pre className="ue-code">
{`useEffect(() => {
  document.title = title;
}, [title]);`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ue-demo">
        <h3>5️⃣ Fetch Data (API Simulation)</h3>
        {users.length === 0 ? <p>Loading...</p> :
          <ul>{users.map((u, i) => <li key={i}>{u}</li>)}</ul>}
        <pre className="ue-code">
{`useEffect(() => {
  fetchUsers();
}, []);`}
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

