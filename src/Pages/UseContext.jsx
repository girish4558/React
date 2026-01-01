import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------- CONTEXT SETUP ---------------- */
const ThemeContext = createContext();
const UserContext = createContext();
const LanguageContext = createContext();
const AuthContext = createContext();
const CounterContext = createContext();

/* ---------------- PAGE ---------------- */
export default function UseContext() {
  const navigate = useNavigate();

  /* Providers State */
  const [theme, setTheme] = useState("light");
  const [user] = useState("Girish");
  const [lang, setLang] = useState("English");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  function MovePrev() {
    navigate("/hooks/use-effect");
  }

  function MoveNext() {
    navigate("/hooks/use-ref");
  }

  return (
    <div className="uc-page">
      {/* Title */}
      <div className="uc-title">
        <h1><i className="bi bi-diagram-3"></i> useContext Hook</h1>
        <p>Share data globally without prop drilling</p>
      </div>

      {/* What */}
      <section className="uc-card">
        <h2>What is useContext?</h2>
        <ul>
          <li><strong>useContext</strong> is a React Hook for consuming context</li>
          <li>It helps share data across components</li>
          <li>Avoids passing props manually at every level</li>
        </ul>
      </section>

      {/* Why */}
      <section className="uc-card">
        <h2>Why useContext?</h2>
        <ul>
          <li>Avoid prop drilling</li>
          <li>Centralized state sharing</li>
          <li>Cleaner component structure</li>
        </ul>
      </section>

      {/* Import */}
      <section className="uc-card">
        <h2>Importing useContext</h2>
        <pre className="uc-code">
{`import { createContext, useContext } from "react";`}
        </pre>
      </section>

      {/* Syntax */}
      <section className="uc-card">
        <h2>Basic Syntax</h2>
        <pre className="uc-code">
{`const MyContext = createContext();

<MyContext.Provider value={data}>
  <Component />
</MyContext.Provider>

const value = useContext(MyContext);`}
        </pre>
      </section>

      <h2 className="uc-demo-title">Real-Time Examples</h2>

      {/* Example 1 – Theme */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ExampleTheme />
      </ThemeContext.Provider>

      {/* Example 2 – User */}
      <UserContext.Provider value={user}>
        <ExampleUser />
      </UserContext.Provider>

      {/* Example 3 – Language */}
      <LanguageContext.Provider value={{ lang, setLang }}>
        <ExampleLanguage />
      </LanguageContext.Provider>

      {/* Example 4 – Auth */}
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <ExampleAuth />
      </AuthContext.Provider>

      {/* Example 5 – Counter */}
      <CounterContext.Provider value={{ count, setCount }}>
        <ExampleCounter />
      </CounterContext.Provider>

      {/* Navigation */}
      <div className="nav-buttons">
        <button className="nav-btn prev" onClick={MovePrev}>← Previous</button>
        <button className="nav-btn next" onClick={MoveNext}>Next →</button>
      </div>
    </div>
  );
}

/* ---------------- EXAMPLES ---------------- */

function ExampleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className={`uc-demo theme-${theme}`}>
      <pre className="uc-code">
{`const ThemeContext = createContext();
const UserContext = createContext();
const LanguageContext = createContext();
const AuthContext = createContext();
const CounterContext = createContext();`}
      </pre>


      <h3>1️⃣ Theme Context</h3>
      <button className="uc-btn" onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }>
        Toggle Theme
      </button>

      <pre className="uc-code">
{`const ThemeContext = createContext();

const { theme, setTheme } = useContext(ThemeContext);`}
      </pre>
    </section>
  );
}

function ExampleUser() {
  const user = useContext(UserContext);

  return (
    <section className="uc-demo">
      <h3>2️⃣ User Context</h3>
      <p>Welcome, <strong>{user}</strong> 👋</p>

      <pre className="uc-code">
{`const user = useContext(UserContext);`}
      </pre>
    </section>
  );
}

function ExampleLanguage() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <section className="uc-demo">
      <h3>3️⃣ Language Preference</h3>
      <button className="uc-btn" onClick={() =>
        setLang(lang === "English" ? "Telugu" : "English")
      }>
        Language: {lang}
      </button>

      <pre className="uc-code">
{`const { lang, setLang } = useContext(LanguageContext);`}
      </pre>
    </section>
  );
}

function ExampleAuth() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <section className="uc-demo">
      <h3>4️⃣ Authentication Context</h3>
      <button className="uc-btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <pre className="uc-code">
{`const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);`}
      </pre>
    </section>
  );
}

function ExampleCounter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <section className="uc-demo">
      <h3>5️⃣ Global Counter</h3>
      <button className="uc-btn" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <pre className="uc-code">
{`const { count, setCount } = useContext(CounterContext);`}
      </pre>
    </section>
  );
}
