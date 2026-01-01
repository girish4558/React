import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [hasMessage, setHasMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("user");

  const Navigate = useNavigate()

  function MovePrev(){
    Navigate('/props')
  }

  function MoveNext(){
    Navigate('/hooks/use-state')
  }

  return (
    <div className="ur-page">
      {/* Title */}
      <div className="ur-title">
        <h1>🔀 Conditional Rendering</h1>
        <p>Render UI dynamically based on conditions in React</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What is Conditional Rendering?</h2>
        <ul>
          <li>Conditional rendering means showing UI based on a condition</li>
          <li>It works like <strong>if / else</strong> in JavaScript</li>
          <li>Used to control what users see on the screen</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why use Conditional Rendering?</h2>
        <ul>
          <li>Show content based on user login</li>
          <li>Handle loading & error states</li>
          <li>Improve user experience</li>
        </ul>
      </section>

      {/* Types */}
      <section className="ur-card">
        <h2>Types of Conditional Rendering</h2>
        <ul>
          <li><strong>if / else</strong> statements</li>
          <li><strong>Ternary operator</strong></li>
          <li><strong>Logical && operator</strong></li>
          <li><strong>Switch case</strong></li>
        </ul>
      </section>

      {/* Usages */}
      <section className="ur-card">
        <h2>Usages</h2>
        <ul>
          <li>Authentication pages</li>
          <li>Loading spinners</li>
          <li>Error messages</li>
          <li>Role-based dashboards</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Syntax</h2>
        <pre className="ur-code">
{`{condition && <Component />}

{condition ? <A /> : <B />}`}
        </pre>
      </section>

      {/* Examples */}
      <h2 className="ur-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Login / Logout UI</h3>

        {isLoggedIn ? <p>Welcome User 👋</p> : <p>Please Login</p>}

        <button className="ur-btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <pre className="ur-code">
{`{isLoggedIn ? <Welcome /> : <Login />}`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ Counter Message</h3>

        <button className="ur-btn" onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>

        {count > 5 && <p>🔥 Count is greater than 5</p>}

        <pre className="ur-code">
{`{count > 5 && <p>Count is greater than 5</p>}`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Show / Hide Message</h3>

        <button className="ur-btn" onClick={() => setHasMessage(!hasMessage)}>
          Toggle Message
        </button>

        {hasMessage && <p>This is a hidden message 💡</p>}

        <pre className="ur-code">
{`{hasMessage && <Message />}`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ Loading Indicator</h3>

        <button
          className="ur-btn"
          onClick={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 2000);
          }}
        >
          Fetch Data
        </button>

        {loading ? <p>Loading...</p> : <p>Data Loaded ✅</p>}

        <pre className="ur-code">
{`{loading ? <Loader /> : <Data />}`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ Role-Based UI</h3>

        <select
          className="ur-input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {role === "admin" ? (
          <p>👑 Admin Dashboard</p>
        ) : (
          <p>🙋 User Dashboard</p>
        )}

        <pre className="ur-code">
{`{role === "admin" ? <Admin /> : <User />}`}
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
