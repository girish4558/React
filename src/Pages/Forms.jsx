import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Forms() {

  const Navigate = useNavigate()
  
    function MovePrev(){
      Navigate('/lists')
    }
  
    function MoveNext(){
      Navigate('/routings')
    }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted Successfully ✅");
  }

  return (
    <div className="ur-page">
      {/* Title */}
      <div className="ur-title">
        <h1>📝 React Forms</h1>
        <p>Learn how to handle user input effectively in React</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What are Forms in React?</h2>
        <ul>
          <li>Forms are used to collect user input</li>
          <li>Inputs are controlled using React state</li>
          <li>React manages form data dynamically</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why use Forms in React?</h2>
        <ul>
          <li>To handle user input efficiently</li>
          <li>To validate data before submission</li>
          <li>To build interactive applications</li>
        </ul>
      </section>

      {/* Usages */}
      <section className="ur-card">
        <h2>Usages of Forms</h2>
        <ul>
          <li>Login & Signup pages</li>
          <li>Search fields</li>
          <li>Contact forms</li>
          <li>Feedback forms</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Syntax (Controlled Input)</h2>
        <pre className="ur-code">
{`const [value, setValue] = useState("");

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
        </pre>
      </section>

      {/* Examples */}
      <h2 className="ur-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Text Input</h3>
        <input
          className="ur-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, <strong>{name}</strong></p>

        <pre className="ur-code">
{`const [name, setName] = useState("");

<input
  value={name}
  onChange={e => setName(e.target.value)}
/>`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ Email Input</h3>
        <input
          type="email"
          className="ur-input"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <pre className="ur-code">
{`const [email, setEmail] = useState("");

<input
  type="email"
  value={email}
  onChange={e => setEmail(e.target.value)}
/>`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Password Input</h3>
        <input
          type="password"
          className="ur-input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <pre className="ur-code">
{`const [password, setPassword] = useState("");

<input
  type="password"
  value={password}
  onChange={e => setPassword(e.target.value)}
/>`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ Radio Buttons</h3>

        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          /> Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          /> Female
        </label>

        <p>Selected: <strong>{gender}</strong></p>

        <pre className="ur-code">
{`const [gender, setGender] = useState("");

<input
  type="radio"
  value="Male"
  onChange={e => setGender(e.target.value)}
/>`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ Complete Form Submit</h3>

        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={() => setTerms(!terms)}
            />
            Accept Terms
          </label>

          <br />
          <button className="ur-btn" disabled={!terms}>
            Submit
          </button>
        </form>

        <pre className="ur-code">
{`function handleSubmit(e) {
  e.preventDefault();
}

<form onSubmit={handleSubmit}>
  <button>Submit</button>
</form>`}
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
