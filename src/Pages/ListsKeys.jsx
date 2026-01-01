import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListsKeys() {

  const Navigate = useNavigate()

  function MovePrev(){
    Navigate('/hooks/use-id')
  }

  function MoveNext(){
    Navigate('/forms')
  }

  const fruits = ["Apple", "Banana", "Orange"];
  const users = [
    { id: 1, name: "Girish" },
    { id: 2, name: "React Learner" },
  ];

  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Practice Hooks" },
  ]);

  const numbers = [1, 2, 3, 4, 5];
  const students = [
    { roll: 101, name: "Amit" },
    { roll: 102, name: "Sita" },
  ];

  return (
    <div className="ur-page">
      {/* Title */}
      <div className="ur-title">
        <h1>📋 Lists & Keys</h1>
        <p>Render multiple elements efficiently using lists and keys</p>
      </div>

      {/* What */}
      <section className="ur-card">
        <h2>What are Lists & Keys?</h2>
        <ul>
          <li>Lists allow rendering multiple items dynamically</li>
          <li>Keys help React identify which items changed</li>
          <li>Keys improve performance and avoid UI bugs</li>
        </ul>
      </section>

      {/* Why */}
      <section className="ur-card">
        <h2>Why use Lists & Keys?</h2>
        <ul>
          <li>To display repeated UI elements</li>
          <li>To efficiently update UI</li>
          <li>To avoid re-rendering issues</li>
        </ul>
      </section>

      {/* Types */}
      <section className="ur-card">
        <h2>Types of Lists</h2>
        <ul>
          <li>Simple array lists</li>
          <li>Array of objects</li>
          <li>Dynamic lists (state-based)</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="ur-card">
        <h2>Basic Syntax</h2>
        <pre className="ur-code">
{`items.map(item => (
  <Component key={item.id} />
))`}
        </pre>
      </section>

      {/* Examples */}
      <h2 className="ur-demo-title">Real-Time Examples</h2>

      {/* Example 1 */}
      <section className="ur-demo">
        <h3>1️⃣ Simple List</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>

        <pre className="ur-code">
{`fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
))`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="ur-demo">
        <h3>2️⃣ List with Unique IDs (Recommended)</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        <pre className="ur-code">
{`users.map(user => (
  <li key={user.id}>{user.name}</li>
))`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="ur-demo">
        <h3>3️⃣ Dynamic Todo List</h3>
        <button
          className="ur-btn"
          onClick={() =>
            setTasks([...tasks, { id: Date.now(), title: "New Task" }])
          }
        >
          Add Task
        </button>

        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>

        <pre className="ur-code">
{`tasks.map(task => (
  <li key={task.id}>{task.title}</li>
))`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="ur-demo">
        <h3>4️⃣ List with Conditional Rendering</h3>
        <ul>
          {numbers.map(num => (
            <li key={num}>
              {num % 2 === 0 ? "Even" : "Odd"} - {num}
            </li>
          ))}
        </ul>

        <pre className="ur-code">
{`numbers.map(num => (
  <li key={num}>
    {num % 2 === 0 ? "Even" : "Odd"}
  </li>
))`}
        </pre>
      </section>

      {/* Example 5 */}
      <section className="ur-demo">
        <h3>5️⃣ Table Rendering</h3>
        <table className="ur-table">
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.roll}>
                <td>{student.roll}</td>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <pre className="ur-code">
{`students.map(student => (
  <tr key={student.roll}>
    <td>{student.name}</td>
  </tr>
))`}
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
