import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UseRef() {
  const navigate = useNavigate();

  /* Refs */
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const divRef = useRef(null);
  const timerRef = useRef(null);
  const prevValueRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function startTimer() {
    timerRef.current = setInterval(() => {
      countRef.current += 1;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  return (
    <div className="ur-page">
      {/* Title */}
      <div className="ur-title">
        <h1><i className="bi bi-arrow-repeat"></i> useRef Hook</h1>
        <p>Access DOM elements & persist values without re-render</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What is useRef?</h2>
        <ul>
          <li><strong>useRef</strong> is a React Hook to create mutable references</li>
          <li>It persists values between renders</li>
          <li>Updating a ref does <strong>not</strong> cause re-render</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why useRef?</h2>
        <ul>
          <li>To access DOM elements directly</li>
          <li>To store previous values</li>
          <li>To manage timers & intervals</li>
        </ul>
      </section>

      {/* Import */}
      <section className="ur-card">
        <h2>Importing useRef</h2>
        <pre className="ur-code">
{`import { useRef } from "react";`}
        </pre>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Syntax</h2>
        <pre className="ur-code">
{`const ref = useRef(initialValue);
ref.current`}
        </pre>
      </section>

      <h2 className="ur-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Auto Focus Input</h3>
        <input
          ref={inputRef}
          className="ur-input"
          placeholder="Focused automatically"
        />
        <pre className="ur-code">
{`const inputRef = useRef(null);

<input ref={inputRef} />`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ Persistent Counter (No Re-render)</h3>
        <button className="ur-btn" onClick={() => countRef.current++}>
          Increase Count
        </button>
        <p>Count value stored in ref (check console)</p>

        <pre className="ur-code">
{`const countRef = useRef(0);
countRef.current++;`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Change DOM Style</h3>
        <div ref={divRef} className="ur-box">
          I change color
        </div>
        <button
          className="ur-btn"
          onClick={() => (divRef.current.style.background = "#6366f1")}
        >
          Change Color
        </button>

        <pre className="ur-code">
{`divRef.current.style.background = "blue";`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ Timer using useRef</h3>
        <button className="ur-btn" onClick={startTimer}>Start</button>
        <button className="ur-btn danger" onClick={stopTimer}>Stop</button>

        <pre className="ur-code">
{`const timerRef = useRef(null);

timerRef.current = setInterval(...);`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ Previous Input Value</h3>
        <input
          className="ur-input"
          onChange={(e) => (prevValueRef.current = e.target.value)}
          placeholder="Type something"
        />
        <p>Previous Value: {prevValueRef.current}</p>

        <pre className="ur-code">
{`const prevValueRef = useRef("");

prevValueRef.current = value;`}
        </pre>
      </section>

      {/* Navigation */}
      <div className="nav-buttons">
        <button className="nav-btn prev" onClick={() => navigate("/hooks/use-context")}>
          ← Previous
        </button>
        <button className="nav-btn next" onClick={() => navigate("/hooks/use-reducer")}>
          Next →
        </button>
      </div>
    </div>
  );
}
