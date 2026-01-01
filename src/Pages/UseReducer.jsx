import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducer() {
  const navigate = useNavigate();

  /* Examples state */
  const [counter, dispatch] = useReducer(counterReducer, initialState);
  const [theme, dispatchTheme] = useReducer(
    (state, action) => (action === "TOGGLE" ? !state : state),
    false
  );

  const [todos, dispatchTodo] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "REMOVE":
        return state.filter((_, i) => i !== action.payload);
      default:
        return state;
    }
  }, []);

  const [form, dispatchForm] = useReducer(
    (state, action) => ({ ...state, [action.name]: action.value }),
    { name: "", email: "" }
  );

  return (
    <div className="ur-page">
      <div className="ur-title">
        <h1><i className="bi bi-diagram-3"></i> useReducer Hook</h1>
        <p>Manage complex state logic in React applications</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What is useReducer?</h2>
        <ul>
          <li><strong>useReducer</strong> is a React Hook for managing complex state logic</li>
          <li>Alternative to useState</li>
          <li>Best for multiple related states</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why useReducer?</h2>
        <ul>
          <li>Cleaner logic</li>
          <li>Predictable state updates</li>
          <li>Great for large applications</li>
        </ul>
      </section>

      {/* Import */}
      <section className="ur-card">
        <h2>Importing useReducer</h2>
        <pre className="ur-code">
{`import { useReducer } from "react";`}
        </pre>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Syntax</h2>
        <pre className="ur-code">
{`const [state, dispatch] = useReducer(reducer, initialState);`}
        </pre>
      </section>

      <h2 className="ur-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Counter</h3>
        <h2>{counter.count}</h2>
        <button className="ur-btn" onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button className="ur-btn" onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button className="ur-btn danger" onClick={() => dispatch({ type: "RESET" })}>Reset</button>

        <pre className="ur-code">
{`dispatch({ type: "INCREMENT" });`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ Theme Toggle</h3>
        <button className="ur-btn" onClick={() => dispatchTheme("TOGGLE")}>
          {theme ? "Dark Mode" : "Light Mode"}
        </button>

        <pre className="ur-code">
{`dispatchTheme("TOGGLE");`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Todo List</h3>
        <button
          className="ur-btn"
          onClick={() => dispatchTodo({ type: "ADD", payload: "New Task" })}
        >
          Add Task
        </button>

        <ul>
          {todos.map((t, i) => (
            <li key={i} onClick={() => dispatchTodo({ type: "REMOVE", payload: i })}>
              {t}
            </li>
          ))}
        </ul>

        <pre className="ur-code">
{`dispatchTodo({ type: "ADD", payload: "Task" });`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ Form Handling</h3>
        <input
          className="ur-input"
          placeholder="Name"
          onChange={(e) =>
            dispatchForm({ name: "name", value: e.target.value })
          }
        />
        <input
          className="ur-input"
          placeholder="Email"
          onChange={(e) =>
            dispatchForm({ name: "email", value: e.target.value })
          }
        />

        <pre className="ur-code">
{`dispatchForm({ name: "email", value: e.target.value });`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ Multi-State Manager</h3>
        <p>useReducer replaces multiple useState calls</p>

        <pre className="ur-code">
{`useReducer is best when:
- Multiple states
- Complex logic
- Shared actions`}
        </pre>
      </section>

      {/* Navigation */}
      <div className="nav-buttons">
        <button className="nav-btn prev" onClick={() => navigate("/hooks/use-ref")}>← Previous</button>
        <button className="nav-btn next" onClick={() => navigate("/hooks/use-id")}>Next →</button>
      </div>
    </div>
  );
}
