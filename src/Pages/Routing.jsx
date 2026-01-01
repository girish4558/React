import React from "react";
import { useNavigate } from "react-router-dom";

export default function Routing() {
  const navigate = useNavigate();

  function MovePrev() {
    navigate("/forms");
  }

  function MoveNext() {
    navigate("/context-API");
  }

  return (
    <div className="ur-page">
      {/* Title */}
      <div className="ur-title">
        <h1>🧭 React Routing</h1>
        <p>Learn how navigation works in React using React Router</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What is Routing?</h2>
        <ul>
          <li>Routing allows navigation between pages in a React app</li>
          <li>It helps build Single Page Applications (SPA)</li>
          <li>Page changes happen without full page reload</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why Routing?</h2>
        <ul>
          <li>Enables multi-page experience in SPA</li>
          <li>Improves performance</li>
          <li>Better user experience</li>
          <li>URL-based navigation</li>
        </ul>
      </section>

      {/* Usages */}
      <section className="ur-card">
        <h2>Where Routing is Used?</h2>
        <ul>
          <li>Navigation menus</li>
          <li>Dashboard pages</li>
          <li>Authentication flows</li>
          <li>Admin panels</li>
          <li>E-commerce apps</li>
        </ul>
      </section>

      {/* Types */}
      <section className="ur-card">
        <h2>Types of Routing</h2>
        <ul>
          <li><strong>Browser Routing</strong> – Uses browser history API</li>
          <li><strong>Hash Routing</strong> – Uses URL hash (#)</li>
          <li><strong>Nested Routing</strong> – Routes inside routes</li>
          <li><strong>Dynamic Routing</strong> – Uses URL params</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Routing Syntax</h2>
        <pre className="ur-code">
{`import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>`}
        </pre>
      </section>

      {/* Examples */}
      <h2 className="ur-demo-title">Real-Time Routing Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Basic Page Routing</h3>
        <pre className="ur-code">
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
</Routes>`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ Navigation using Link</h3>
        <pre className="ur-code">
{`import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Programmatic Navigation</h3>
        <pre className="ur-code">
{`import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/dashboard");`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ Dynamic Routing</h3>
        <pre className="ur-code">
{`<Route path="/user/:id" element={<User />} />

import { useParams } from "react-router-dom";
const { id } = useParams();`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ Protected Routes</h3>
        <pre className="ur-code">
{`{isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}`}
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
