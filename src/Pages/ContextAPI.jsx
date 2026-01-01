import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// 1️⃣ Create Context
const UrContext = createContext();

export default function ContextAPI() {
  // State to share
  const [user, setUser] = useState({ name: "Girish", age: 25 });
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();

  function MovePrev() {
    navigate("/routings");
  }

  function MoveNext() {
    navigate("/Custom-hooks");
  }

  return (
    <UrContext.Provider value={{ user, setUser, theme, setTheme }}>
      <div className="ur-page">
        {/* Title */}
        <div className="ur-title">
          <h1>🛠️ Context API</h1>
          <p>Share state globally without prop drilling</p>
        </div>

        {/* What */}
        <section className="ur-card">
          <h2>What is Context API?</h2>
          <ul>
            <li>Provides a way to pass data through the component tree</li>
            <li>Helps avoid "prop drilling"</li>
            <li>Useful for global states like theme, user, language</li>
          </ul>
        </section>

        {/* Why */}
        <section className="ur-card">
          <h2>Why use Context API?</h2>
          <ul>
            <li>To share state across multiple components</li>
            <li>Reduces repetitive props passing</li>
            <li>Keeps components cleaner and more maintainable</li>
          </ul>
        </section>

        {/* Types */}
        <section className="ur-card">
          <h2>Types of Context Usage</h2>
          <ul>
            <li>Theme Context</li>
            <li>User/Authentication Context</li>
            <li>Language/Localization Context</li>
          </ul>
        </section>

        {/* Syntax */}
        <section className="ur-card">
          <h2>Basic Syntax</h2>
          <pre className="ur-code">
{`// 1. Create Context
const MyContext = createContext();

// 2. Provide Context
<MyContext.Provider value={{ state, setState }}>
  <App />
</MyContext.Provider>

// 3. Consume Context
const { state, setState } = useContext(MyContext);`}
          </pre>
        </section>

        {/* Real-Time Examples */}
        <h2 className="ur-demo-title">Real-Time Examples</h2>

        {/* Example 1 */}
        <section className="ur-demo">
          <h3>1️⃣ Simple User Context</h3>
          <UserDisplay />
          <pre className="ur-code">
{`const { user } = useContext(UrContext);
<p>User Name: {user.name}</p>`}
          </pre>
        </section>

        {/* Example 2 */}
        <section className="ur-demo">
          <h3>2️⃣ Update User Context</h3>
          <UserUpdate />
          <pre className="ur-code">
{`const { user, setUser } = useContext(UrContext);
setUser({ ...user, name: 'New Name' });`}
          </pre>
        </section>

        {/* Example 3 */}
        <section className="ur-demo">
          <h3>3️⃣ Theme Context Toggle</h3>
          <ThemeToggle />
          <pre className="ur-code">
{`const { theme, setTheme } = useContext(UrContext);
setTheme(theme === 'light' ? 'dark' : 'light');`}
          </pre>
        </section>

        {/* Example 4 */}
        <section className="ur-demo">
          <h3>4️⃣ Nested Component Access</h3>
          <NestedComponent />
          <pre className="ur-code">
{`const { user } = useContext(UrContext);
<p>Hello {user.name}</p>`}
          </pre>
        </section>

        {/* Example 5 */}
        <section className="ur-demo">
          <h3>5️⃣ Multiple Context Values</h3>
          <MultipleContextDemo />
          <pre className="ur-code">
{`const { user, theme } = useContext(UrContext);
<p>{user.name} prefers {theme} mode</p>`}
          </pre>
        </section>

        {/* Navigation */}
      <div className="nav-buttons">
      <button className="nav-btn prev" onClick={MovePrev}>← Previous</button>
      <button className="nav-btn next" onClick={MoveNext}>Next →</button>
    </div>
      </div>
    </UrContext.Provider>
  );
}

// -----------------
// Child Components
// -----------------

function UserDisplay() {
  const { user } = useContext(UrContext);
  return <p>User Name: {user.name}, Age: {user.age}</p>;
}

function UserUpdate() {
  const { user, setUser } = useContext(UrContext);
  return (
    <button
      className="ur-btn"
      onClick={() => setUser({ ...user, name: "React Learner" })}
    >
      Update User Name
    </button>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useContext(UrContext);
  return (
    <button
      className="ur-btn"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}

function NestedComponent() {
  return (
    <div>
      <h4>Nested Component:</h4>
      <NestedChild />
    </div>
  );
}

function NestedChild() {
  const { user } = useContext(UrContext);
  return <p>Hello {user.name} from nested child!</p>;
}

function MultipleContextDemo() {
  const { user, theme } = useContext(UrContext);
  return <p>{user.name} prefers {theme} mode</p>;
}
