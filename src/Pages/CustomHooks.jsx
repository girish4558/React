import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// -------------------
// Custom Hook Examples
// -------------------

// 1️⃣ useCounter Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
}

// 2️⃣ useFetch Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// -------------------
// Main Component
// -------------------
export default function CustomHooks() {

  const navigate = useNavigate();

  function MovePrev() {
    navigate("/context-API");
  }

  function MoveNext() {
    navigate("/API-Integration");
  }

  return (
    <div className="ur-page">
      {/* Title */}
      <div className="ur-title">
        <h1>🪝 Custom Hooks</h1>
        <p>Create reusable logic with React Hooks</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What are Custom Hooks?</h2>
        <ul>
          <li>Functions that use built-in hooks (useState, useEffect, etc.)</li>
          <li>Allow code reuse between components</li>
          <li>Always start with 'use' in their name</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why use Custom Hooks?</h2>
        <ul>
          <li>Reduce code duplication</li>
          <li>Make components cleaner and smaller</li>
          <li>Share logic across multiple components easily</li>
        </ul>
      </section>

      {/* Usages */}
      <section className="ur-card">
        <h2>Usages of Custom Hooks</h2>
        <ul>
          <li>Form validation</li>
          <li>Fetching data</li>
          <li>LocalStorage management</li>
          <li>Timers and counters</li>
          <li>Dark/light theme toggles</li>
        </ul>
      </section>

      {/* Types */}
      <section className="ur-card">
        <h2>Types of Custom Hooks</h2>
        <ul>
          <li>Data Fetching Hooks</li>
          <li>Form Handling Hooks</li>
          <li>UI State Management Hooks</li>
          <li>Effectful Hooks (Timers, Scroll, etc.)</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Syntax</h2>
        <pre className="ur-code">
{`function useCustomHook() {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // side effects
  }, []);

  return { state, setState };
}

// Usage
const { state, setState } = useCustomHook();`}
        </pre>
      </section>

      {/* Real-Time Examples */}
      <h2 className="ur-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Counter Hook</h3>
        <CounterDemo />
        <pre className="ur-code">
{`const { count, increment, decrement } = useCounter();
<p>Count: {count}</p>`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ Data Fetch Hook</h3>
        <FetchDemo />
        <pre className="ur-code">
{`const { data, loading } = useFetch('https://api.example.com/data');
{loading ? 'Loading...' : data.map(item => <p>{item.name}</p>)}`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Toggle Boolean Hook</h3>
        <ToggleDemo />
        <pre className="ur-code">
{`function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);
  const toggle = () => setState(!state);
  return [state, toggle];
}`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ Input Form Hook</h3>
        <FormDemo />
        <pre className="ur-code">
{`function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { value, onChange };
}`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ Timer Hook</h3>
        <TimerDemo />
        <pre className="ur-code">
{`function useTimer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
}`}
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

// -------------------
// Demo Components
// -------------------

function CounterDemo() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <p>Count: {count}</p>
      <button className="ur-btn" onClick={increment}>+</button>
      <button className="ur-btn" onClick={decrement}>-</button>
    </div>
  );
}

function FetchDemo() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users");
  return loading ? <p>Loading...</p> : (
    <ul>
      {data.slice(0, 5).map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);
  const toggle = () => setState(!state);
  return [state, toggle];
}

function ToggleDemo() {
  const [on, toggle] = useToggle();
  return (
    <div>
      <p>Status: {on ? "ON" : "OFF"}</p>
      <button className="ur-btn" onClick={toggle}>Toggle</button>
    </div>
  );
}

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { value, onChange };
}

function FormDemo() {
  const name = useInput("");
  const email = useInput("");
  return (
    <div>
      <input className="ur-input" placeholder="Name" {...name} />
      <input className="ur-input" placeholder="Email" {...email} />
      <p>Name: {name.value}</p>
      <p>Email: {email.value}</p>
    </div>
  );
}

function TimerDemo() {
  const time = useTimer();
  return <p>Timer: {time} sec</p>;
}

function useTimer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
}
